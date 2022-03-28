const axiosStrategy = require('./axios-strategy')
const fetchStrategy = require('./fetch-strategy')

const strategies = [
  axiosStrategy,
  fetchStrategy,
]

module.exports = {
  get(fetcher) {
    return strategies.find((item) => item.support(fetcher))
  }
}
