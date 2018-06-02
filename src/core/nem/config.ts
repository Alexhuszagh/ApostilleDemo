const nem = require('nem-sdk').default

// Configuration
export const config = {
    mode: nem.model.network.data.testnet.id,
    url: 'http://104.128.226.60',
    port: 7890,
    faucet: `${window.location.protocol}//${window.location.host}/api/sendTestnetXem`
}