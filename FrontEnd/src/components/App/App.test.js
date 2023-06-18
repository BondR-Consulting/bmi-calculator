import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn()
}));

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});
