import { checkLetterFrequency} from './letter_count'

describe('Tests to verify number of characters', () => {

    it('expects throw on insert only number', () => {
        const value = 123
        expect(() => checkLetterFrequency(value)).toThrow()
      })

      it('expects throw on insert null object', () => {
        expect(() => checkLetterFrequency(null)).toThrow()
      })

      it('expects to return occurrence for letters and space', () => {
        const value = 'aaaabc c'
        const expectResult = 'a4b1c2'
        expect(checkLetterFrequency(value)).toBe(expectResult)
      })

      it('expects to return occurrence for letters only', () => {
        const value = 'aaaabc'
        const expectResult = 'a4b1c1'
        expect(checkLetterFrequency(value)).toBe(expectResult)
      })

      it('expects to return occurrence for letters and numbers', () => {
        const value = 'a1b2c3'
        const expectResult = 'a1b1c1'
        expect(checkLetterFrequency(value)).toBe(expectResult)
      })

      it('expects to return occurrence for letters and special characters', () => {
        const value = '!!oopp??'
        const expectResult = '!2o2p2?2'
        expect(checkLetterFrequency(value)).toBe(expectResult)
      })

      it('expects to return occurrence for letters little more long', () => {
        const value = 'aabbccaabbdddeebrbrer342frebergdedededededdaxaed'
        const expectResult = 'a6b7c2d11e11r5f1g1x1'
        expect(checkLetterFrequency(value)).toBe(expectResult)
      })
})