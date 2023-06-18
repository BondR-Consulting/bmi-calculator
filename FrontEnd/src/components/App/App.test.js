import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { bmi: 10, date: 20, height: 80, id: 1, weight: 85 } })),
  post: jest.fn(() => Promise.resolve({ data: { /* mock data here */ } })),
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
