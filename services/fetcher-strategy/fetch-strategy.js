const fetch = require('node-fetch')
const { BASE_URL } = require('../../config')
const FetcherStrategyContract = require('./fetcher-strategy-contract')

class FetchStrategy extends FetcherStrategyContract {
  constructor(apiKey) {
    super('fetch', apiKey)
  }

  async get(url) {
    console.log('fetch')

    const result = await fetch(`${BASE_URL}/${url}`, {
      headers: {
        'X-API-Key': this.apiKey,
      },
    })

    return result.json()
  }

  async post(url, body) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'POST',
      body,
      headers: {
        'X-API-Key': this.apiKey,
      },
    })

    return result.json()
  }

  async put(url, body) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'PUT',
      body,
      headers: {
        'X-API-Key': this.apiKey,
      },
    })

    return result.json()
  }

  async delete(url) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'DELETE',
      headers: {
        'X-API-Key': this.apiKey,
      },
    })

    return result.json()
  }
}

module.exports = FetchStrategy
