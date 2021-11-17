// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
  /*
  In this test, the shallow render of our App component is stored in the wrapper variable.
  We then grab the text inside the p tag within the component’s output
  and check if the text is the same was what we passed into the toEqual matcher function.
  */
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />); //A shallow render is a simulated render of a component tree that does not require a DOM.
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });
  /*
  Here we are simulating the click event on the button.
  We’ve also set up an expectation that the count should be equal to now.
  */
  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });
  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});