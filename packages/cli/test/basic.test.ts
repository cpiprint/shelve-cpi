import { expect, it, describe } from 'vitest'
import { loadShelveConfig } from '../src/utils/config'

describe('loadConfig', () => {
  it('should return a config object', async () => {
    const config = await loadShelveConfig()
    expect(config).toBeDefined()
  })
})
