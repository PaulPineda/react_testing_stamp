import React from 'react';                 // requires to get the test to work. we can get round this later with more configuration
import { shallow } from 'enzyme';          // method from enzyme which allows us to shallow render
import Root from '../../src/containers/Root';  // our soon to be component

describe('(Container) Root', () => {
  it('renders a <div>', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.type()).to.eql('div');
  });

  it('has a style with a height 100%', () => {
    const wrapper = shallow(<Root />);
    const expectedStyles = {
      height: '100%',
      background: '#333'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('contains a header explaining the app', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find('.welcome-header')).to.have.length(1);
  });
});
