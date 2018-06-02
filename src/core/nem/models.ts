const nem = require('nem-sdk').default
import { config } from './config'
import { Post } from 'core/domain/posts'

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

export const ExtractPost = (post: Post) =>
    nem.crypto.js.enc.Utf8.parse(JSON.stringify({
        body: post.body,
        image: nem.utils.convert.ua2hex(post.image)
    }))

export const GetApostilleCommon = (privateKey: string) =>
    nem.model.objects.create('common')('', privateKey)

export const CreateApostille = (
    common: object,
    post: Post
) =>
    nem.model.apostille.create(
        common,
        post.id || '',
        ExtractPost(post),
        post.id || '',
        nem.model.apostille.hashing['SHA256'],
        false,
        null,
        true,
        config.mode
    ).transaction