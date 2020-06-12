
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import Counter from '../components/Counter';
import App from '../app';


describe('Counter components work as expected', () => {
  it('On clicking the - button, the state count variable should be decreased by 1', () => {
    let component = shallow(<Counter />);

    component.find('.down').simulate('click');

    expect(component.state('count')).toBe(-1);
  });

  it('On clicking the + button, the state count variable should be increased by 1', () => {
    let component = shallow(<Counter />);

    component.find('.up').simulate('click');

    expect(component.state('count')).toBe(1);
  });

  it('When the state count variable changes, the HTML should update and match that change', () => {
    let component = mount(<Counter />);
    let countHTML = component.find('.count');
    component.find('.up').simulate('click');

    expect(countHTML).toBeDefined();
    expect(component.state('count')).toBe(1);
    expect(countHTML.text()).toBe('1');
  });
});


/*

In this file, you should write robust tests for the Counter component. Here are a few things you must test:

On clicking the - button, the state count variable should be decreased by 1
On clicking the + button, the state count variable should be increased by 1
When the state count variable changes, the HTML should update and match that change

*/