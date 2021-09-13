import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import Contact from "./Contact";

const setup = () => {
    return shallow(<Contact />);
}

test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'contact-component');
    expect(component).toHaveLength(1);
})