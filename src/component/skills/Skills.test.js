import { shallow } from "enzyme"
import { findByTestAttr } from "../../../test/testUtils";
import Skills from "./skills"

const setup = () => {
    return shallow(<Skills />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'skills-component');
    expect(component).toHaveLength(1);
})