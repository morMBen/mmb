import { shallow } from "enzyme";
import { findByTestAttr } from '../../../test/testUtils'
import Navbar from "./Navbar";

const setup = () => {
    return shallow(<Navbar />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'navbar-component');
    expect(component).toHaveLength(1);
})