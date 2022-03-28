const axios = require('axios')
const { BASE_URL } = require('../../config')

module.exports = {
  support(fetcher) {
    return fetcher === 'axios'
  },
  async get(url) {
    console.log('axios')

    const result = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        'X-API-Key': '2103c2f0'
      }
    })

    return result.data
  },
  async post(url, body) {
    const result = await axios.post(`${BASE_URL}/${url}`, body, {
      headers: {
        'X-API-Key': '2103c2f0'
      }
    })

    return result.data
  },
  async put(url, body) {
    const result = await axios.put(`${BASE_URL}/${url}`, body, {
      headers: {
        'X-API-Key': '2103c2f0'
      }
    })

    return result.data
  },
  async delete(url) {
    const result = await axios.delete(`${BASE_URL}/${url}`, {
      headers: {
        'X-API-Key': '2103c2f0'
      }
    })

    return result.data
  },
}
