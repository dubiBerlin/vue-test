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

    describe('Validation', () => {
      const message = createCmp({ message: 'Hello' }).vm.$options.props.message
      it('Message is type of String', () => {
        expect(message.type).toBe(String)
      })
      it('Message is required', () => {
        expect(message.required).toBeTruthy()
      })
      it('Message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      })
    })
  })
})
