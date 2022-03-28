const fetch = require('node-fetch')
const { BASE_URL } = require('../../config')

module.exports = {
  support(fetcher) {
    return fetcher === 'fetch'
  },
  async get(url) {
    console.log('fetch')

    const result = await fetch(`${BASE_URL}/${url}`, {
      headers: {
        'X-API-Key': '2103c2f0',
      },
    })

    return result.json()
  },
  async post(url, body) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'POST',
      body,
      headers: {
        'X-API-Key': '2103c2f0',
      },
    })

    return result.json()
  },
  async put(url, body) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'PUT',
      body,
      headers: {
        'X-API-Key': '2103c2f0',
      },
    })

    return result.json()
  },
  async delete(url) {
    const result = await fetch(`${BASE_URL}/${url}`, {
      method: 'DELETE',
      headers: {
        'X-API-Key': '2103c2f0',
      },
    })

    return result.json()
  },
}
