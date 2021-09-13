import { shallow } from "enzyme";
import { findByTestAttr } from '../../../test/testUtils';
import About from './About';

const setup = () => {
    return shallow(<About />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'about-component');
    expect(component).toHaveLength(1);
})