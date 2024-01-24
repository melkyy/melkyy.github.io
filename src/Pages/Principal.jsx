import React from 'react';
import NavBar from '../Components/NavBar';
import Introduction from './Me';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Text from '../Text/english';
import ScrollSlider from '../Components/scroll/scroll-slider';
import { Element, scroller } from 'react-scroll';

export default function Principal({ onScrollable }) {

    const ref = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const [disabledScroll, setDisableScroll] = React.useState(false);
    const [modalComponent, setComponent] = React.useState(null);
    const [minWidth, setMinWidth] = React.useState(false);
    //Responsive states
    const [navbarResponsive, setNavBarResponsive] = React.useState(false);
    const [introResponsive, setIntroResponsive] = React.useState(false);
    const [scrollResponsive, setScrollResponsive] = React.useState(false);
    const navItemChange = (index) => {
        if (!scrollResponsive) {
            console.log(ref);
            ref.current.navigateToIndex(index - 1);
        } else {
            setActiveIndex(index - 1);
            const elementInContainer = [
                'intro',
                'about',
                'experience',
                'projects',
                'contact'
            ]
            scroller.scrollTo(elementInContainer[index - 1], {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -50, // Scrolls to element + 50 pixels down the page
                // ... other options
            });
        }

    }
    //choose the screen size 
    const handleResize = () => {
        setScrollResponsive(window.innerWidth < 936);
        onScrollable(window.innerWidth < 936);
        setNavBarResponsive(window.innerWidth < 684);
        setIntroResponsive(window.innerWidth < 684);
        setMinWidth(window.innerWidth < 1312 || window.innerHeight < 779);

        if (window.innerWidth < 936) {

        } else {

        }
        if (window.innerWidth < 684) {

        } else {

        }
    }

    // create an event listener
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <NavBar activeIndex={activeIndex} navChange={(index) => { navItemChange(index) }} navbarMinWidth={scrollResponsive} navbarResponsive={navbarResponsive}></NavBar>

            {scrollResponsive ?
                <>
                    <Element id="intro" style={{ height: '100vh', marginBottom: '200px' }}>
                        <Introduction introResponsive={introResponsive}></Introduction>
                    </Element>
                    <Element id="about" style={{ marginBottom: '200px' }}>
                        <About text={Text} scrollResponsive={scrollResponsive}></About>
                    </Element>
                    <Element id="experience" style={{ height: '100%', marginBottom: '200px' }}>
                        <Experience text={Text}></Experience>
                    </Element>
                    <Element id="projects" style={{ height: '100vh', marginBottom: '200px' }}>
                        <Projects onModal={setDisableScroll}></Projects>
                    </Element>
                    <Element id="contact" style={{ height: '100vh' }}>
                        <Contact></Contact>
                    </Element>

                </>
                :
                <>
                    <ScrollSlider
                        ref={ref}
                        onSlideChange={setActiveIndex}
                        onProgress={setProgress}
                        disabledScroll={disabledScroll}
                        animationOptions={{
                            easing: 'linear'
                        }}
                        slides={[
                            {
                                children: (
                                    <Introduction introResponsive={introResponsive}></Introduction>
                                )
                            },
                            {
                                children: (
                                    <About text={Text}></About>
                                )
                            },
                            {
                                children: (
                                    <Experience text={Text}></Experience>
                                )
                            },
                            {
                                children: (
                                    <Projects onModal={setDisableScroll}></Projects>
                                )
                            },
                            {
                                children: (
                                    <Contact></Contact>
                                )
                            },
                        ]}
                    />
                </>
            }

        </>
    );
}