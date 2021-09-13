import { shallow } from "enzyme";
import { findByTestAttr } from '../../../test/testUtils';
import About from './About';

const setup = () => {
    return shallow(<About />);
}

describe('about component', () => {
    const wrapper = setup();
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'about-component');
        expect(component).toHaveLength(1);
    })

    test('container renders without error', () => {
        const component = findByTestAttr(wrapper, 'about-container');
        expect(component).toHaveLength(1);
    })

    test('h1 render without error', () => {
        const component = findByTestAttr(wrapper, 'about-h1');
        expect(component).toHaveLength(1);
    })
    test('about paragraph renders without error', () => {
        const component = findByTestAttr(wrapper, 'about-p');
        expect(component).toHaveLength(1);
    })
    describe('links wrapper', () => {
        test('about links wrapper div renders without error', () => {
            const component = findByTestAttr(wrapper, 'about-links-wrapper');
            expect(component).toHaveLength(1);
        })
        test('about contact link renders without error', () => {
            const component = findByTestAttr(wrapper, 'about-contact-link');
            expect(component).toHaveLength(1);
        })
        test('about projects link renders without error', () => {
            const component = findByTestAttr(wrapper, 'about-projects-link');
            expect(component).toHaveLength(1);
        })
    })
    describe('about image', () => {
        test('about image div wrapper renders without error', () => {
            const component = findByTestAttr(wrapper, 'about-image-wrapper-div');
            expect(component).toHaveLength(1);
        })
        test('about image renders without error', () => {
            const component = findByTestAttr(wrapper, 'about-image');
            expect(component).toHaveLength(1);
        })
    })
})
