const { getTrue } = require('../src/good-functions')

describe('Demo', () => {
  it('passes the test', () => {
    expect(getTrue()).toBe(true)
  })
})
