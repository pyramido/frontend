import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/Footer.vue';

describe('Sample test', () => {
  it('this is a test sample', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect('sample').toMatch('sample');
  });
});
