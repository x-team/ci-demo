const { getTrue } = require('../src/good-functions')

describe('Demo', () => {
  it('passes the test', () => {
    const result = getTrue()
    expect(result).toBe(false)
  })
})
