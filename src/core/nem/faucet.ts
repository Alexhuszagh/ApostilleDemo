const nem = require('nem-sdk').default
import axios from 'axios'
import { config } from './config'

export const TestnetFaucet = (address: string) =>
    axios.get(config.faucet + '?address=' + address)