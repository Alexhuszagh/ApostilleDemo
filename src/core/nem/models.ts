const nem = require('nem-sdk').default
import { config } from './config'

// Transactions
export const CreateTransaction = (
    recipient: string,
    amount: number,
    message: string
) =>
    nem.model.objects.create('transferTransaction')(recipient, amount, message)

export const GetTransactionCommon = (privateKey: string) => ({
        ...nem.model.objects.get('common'),
        privateKey
    })

export const PrepareTransaction = (common: object, transaction: object) =>
    nem.model.transactions.prepare('transferTransaction')(common, transaction, config.mode)