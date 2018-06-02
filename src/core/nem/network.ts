const nem = require('nem-sdk').default
import { config } from './config'

// Endpoint
const endpoint = nem.model.objects.create('endpoint')(config.url, config.port)

// Status
export const Heartbeat = () =>
    nem.com.requests.endpoint.heartbeat(endpoint)

export const ChainHeight = () =>
    nem.com.requests.chain.height(endpoint)

export const LastBlock = () =>
    nem.com.requests.chain.lastBlock(endpoint)

export const Time = () =>
    nem.com.requests.chain.time(endpoint)

// Lookup
export const TransactionByHash = (hash: string) =>
    nem.com.requests.transaction.byHash(endpoint, hash)

// Announce
export const SendTransaction = (
    common: object,
    transaction: object
) =>
    nem.model.transactions.send(common, transaction, endpoint)