const nem = require('nem-sdk').default

// Configuration
export const config = {
    mode: nem.model.network.data.testnet.id,
    url: `${window.location.protocol}//${window.location.host}/api/supernode`,
    faucet: `${window.location.protocol}//${window.location.host}/api/sendTestnetXem`
}