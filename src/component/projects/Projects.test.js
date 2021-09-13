import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import Projects from "./Projects";


const setup = () => {
    return shallow(<Projects />);
}

test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'projects-component');
    expect(component).toHaveLength(1);
})