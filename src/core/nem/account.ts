const nem = require('nem-sdk').default
import { config } from './config'

// Functions
export const GeneratePrivateKey = () =>
    nem.utils.convert.ua2hex(nem.crypto.nacl.randomBytes(32))

export const KeyPairFromPrivateKey = (privateKey: string) =>
    nem.crypto.keyPair.create(privateKey)

export const PublicKeyFromPrivateKey = (privateKey: string) =>
    KeyPairFromPrivateKey(privateKey).publicKey.toString()

export const AddressFromPublicKey = (publicKey: string) =>
    nem.model.address.toAddress(publicKey, config.mode)

export const AddressFromPrivateKey = (privateKey: string) =>
    AddressFromPublicKey(PublicKeyFromPrivateKey(privateKey))