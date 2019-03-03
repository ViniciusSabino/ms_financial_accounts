import service from "../services/accounts";

const addAccount = async ctx => {
    await service.saveAccount(ctx.request.body);
    return ctx.created();
};

const listAccounts = async ctx => {
    const data = await service.findAccounts(ctx.request.headers);
    return ctx.ok(data);
};

const listAllAccounts = async ctx => {
    const { userid, order, sort, limit } = ctx.request.header;
    const data = await service.listAllAccounts({
        userId: userid,
        order,
        sort,
        limit
    });

    return ctx.ok(data);
};

const editAccount = async ctx => {
    const { accountid } = ctx.request.header;
    const data = await service.editAccount(accountid, ctx.request.body);
    return ctx.ok({ data });
};

const deleteAccounts = async ctx => {
    const { accountsIds } = ctx.request.body;
    await service.deleteAccounts(accountsIds);
    return ctx.ok();
};

const makePayment = async ctx => {
    const { accountsIds } = ctx.request.body;
    const data = await service.makePayment(accountsIds);
    return ctx.ok({ data });
};

const makePartialPayment = async ctx => {
    const data = await service.makePartialPayment(ctx.request.body);
    return data.errors.length ? ctx.badRequest(data) : ctx.ok(data);
};

const sendNext = async ctx => {
    const { accountid } = ctx.request.header;
    const data = await service.sendNext(accountid);
    return ctx.ok({ data });
};

export default {
    addAccount,
    listAccounts,
    listAllAccounts,
    editAccount,
    deleteAccounts,
    makePayment,
    makePartialPayment,
    sendNext
};
