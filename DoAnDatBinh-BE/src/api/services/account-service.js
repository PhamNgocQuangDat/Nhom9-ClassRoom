
const { generateKey } = require('crypto');
const Account = require('../models/account-model');
const { generateId } = require('../helpers/generate-key');

class AccountService {
    static async getAccountById(accountId) {
        return Account.findByPk(accountId);
    }
    static async getAccountByUserId(userId) {
        return Account.findOne({ where: { userId: userId } })
    }
    static async getAccountByStudentId(studentId) {
        return Account.findOne({ where: { studentId: studentId } })
    }
    static async getAllAccount() {
        return Account.findAll();
    }
    static async createAccount(accountData) {
        accountData.accountId = generateId()
        return Account.create(accountData);
    }
    static async updateAccount(accountId, accountData) {
        await Account.update(accountData, {
            where: { accountId: accountId },
        });
        return this.getAccountById(accountId);
    }
    static async deleteAccountById(accountId) {
        return Account.destroy({
            where: { accountId: accountId },
        });
    }
    static async deleteAccountByStudentId(studentId) {
        return Account.destroy({
            where: { studentId: studentId },
        });
    }
    static async deleteAccountByUserId(userId) {
        return Account.destroy({
            where: { userId: userId },
        });
    }
}

module.exports = AccountService;
