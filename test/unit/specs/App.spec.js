import Vue from 'vue'
import App from '@/App'

describe('App.spec.js', () => {
  let cmp, vm
  beforeEach(() => {
    cmp = Vue.extend(App) // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ['Hey John', 'Howdy Paco', 'Bruno Wesno']
      }
    }).$mount() // Instances and mounts the component
  })
  it('equals messages to ["Hey John", "Howdy Paco", "Bruno Wesno"]', () => {
    expect(vm.messages).toEqual(['Hey John', 'Howdy Paco', 'Bruno Wesno'])
  })
  it('has the expected html structure', () => {
    expect(cmp.$el).toMatchSnapshot()
  })
})
