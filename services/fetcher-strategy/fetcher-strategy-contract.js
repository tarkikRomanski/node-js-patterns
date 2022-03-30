class FetcherStrategyContract {
  constructor(method, apiKey) {
    this.method = method
    this.apiKey = apiKey
  }

  support(fetcher) {
    return fetcher === this.method
  }

  async get() {
    console.error('Should be implemented')
  }

  async post() {
    console.error('Should be implemented')
  }

  async put() {
    console.error('Should be implemented')
  }

  async delete() {
    console.error('Should be implemented')
  }
}

module.exports = FetcherStrategyContract
