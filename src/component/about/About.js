import myImage from '../../img/me.jpeg';
const About = () => {
    return (
        <section
            id='about'
            data-test='about-component'
        >
            <div
                data-test='about-container'
                className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'
            >
                <h1
                    data-test='about-h1'
                    className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'
                >
                    Hi, I'm Mor.
                    <br className="hidden lg:inline-block" />
                    I love to build amazing apps.
                </h1>
                <p
                    className="mb-8 leading-relaxed"
                    data-test='about-p'
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                </p>
                <div
                    data-test='about-links-wrapper'
                    className="flex justify-center">
                    <a
                        data-test='about-contact-link'
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                    </a>
                    <a
                        data-test='about-projects-link'
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                    </a>
                </div>
            </div>
            <div
                data-test='about-image-wrapper-div'
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            >
                <img
                    data-test='about-image'
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={myImage}
                />
            </div>
        </section >
    )
}

export default About;