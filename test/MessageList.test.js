import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message.vue'

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
  it('contains a Message component', () => {
    expect(cmp.contains(Message)).toBe(true)
    // Or with CSS selector
    expect(cmp.contains('.message')).toBe(true)
  })

  it('Both, MessageList and Message are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true)
    expect(cmp.find(Message).isVueInstance()).toBe(true)
  })

  it('Message element exists!', () => {
    expect(cmp.find('.message').exists()).toBe(true)
  })
  it('Message is not empty', () => {
    expect(cmp.find('.message').isEmpty()).toBe(false)
  })

  it('Span element exists', () => {
    let el = cmp.find('.message span').element
  })

  it('Message component has the .message class', () => {
    expect(cmp.find(Message).classes()).toContain('message')
  })
  it('Message component has style padding-top: 10', () => {
    expect(cmp.find(Message).attributes().style).toBe('margin-top: 10px;')
  })
})
