import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import List from '../List.vue'
import MobileMenu from '../MobileMenu.vue'
import CreateUser from '../../views/CreateUser.vue'

describe('MobileMenu', () => {
  it('render menu', () => {
    const wrapper = mount(MobileMenu)
    expect(wrapper.text()).toContain('TesteFront')
  })
})

describe('Users', () => {
  it('fetch users', async () => {
    const wrapper = mount(List)
    setTimeout(() => {
      expect(wrapper.findAll('[data-test="users"]')).toHaveLength(1)
    }, 5000)
  })

  it('create users', async () => {
    const wrapper = mount(CreateUser)
    await wrapper.get('[data-test="new-user-name"]').setValue('Julio')
    await wrapper.get('[data-test="new-user-job"]').setValue('Developer')
    await wrapper.get('[data-test="form"]').trigger('submit')
    setTimeout(() => {
      expect(wrapper.text()).toContain('Julio')
    }, 3000)
  })
})