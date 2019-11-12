import service from '../domain/services';

const create = async (ctx) => {
    const { body } = ctx;

    const accountCreated = await service.createAccount(body);

    return ctx.created(accountCreated);
};

const find = async (ctx) => {
    const { header: filters } = ctx.request;

    const accounts = await service.findAccounts(filters);

    return ctx.ok(accounts);
};

const partialPayment = async (ctx) => {
    const { unpaidAccount, amountPaid } = ctx;

    const updatedAccount = await service.partialPayment(amountPaid, unpaidAccount);

    return ctx.ok(updatedAccount);
};

export default {
    create,
    find,
    partialPayment,
};