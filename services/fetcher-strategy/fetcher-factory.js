const AxiosStrategy = require('./axios-strategy')
const FetchStrategy = require('./fetch-strategy')

class FetcherFactory {
  strategies = [
    new AxiosStrategy('2103c2f0'),
    new FetchStrategy('2103c2f0'),
  ]

  get(fetcher) {
    return this.strategies.find((item) => item.support(fetcher))
  }
}

module.exports = new FetcherFactory()
