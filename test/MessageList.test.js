import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'

describe('MessageList.test.js', () => {
  let cmp
  beforeEach(() => {
    cmp = mount(MessageList, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('is a MessageList component', () => {
    expect(cmp.is(MessageList)).toBe(true)
    expect(cmp.is('ul')).toBe(true)
  })

  it('has .message class ', () => {
    expect(cmp.find('.message').element).toBeInstanceOf(HTMLElement)
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
