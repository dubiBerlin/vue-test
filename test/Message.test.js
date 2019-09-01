import { mount } from '@vue/test-utils'
import Message from '../src/components/Message.vue'

const createCmp = propsData => mount(Message, { propsData })

describe('Message.test.js', () => {
  let cmp
  describe('Properties', () => {
    it('Has message property with value hey', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props().message).toBe('hey')
    })
    it('Paco is default prop', () => {
      expect(cmp.props().author).toBe('Paco')
    })
    // it("")
  })
})
