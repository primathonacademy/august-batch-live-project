import { useState, useEffect } from 'react';
import CoFounder from './CoFounder';
import SelectedProjects from './SelectedProjects';
import OurEngagement from './OurEngagement';
const Service = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <OurEngagement />
            <CoFounder />
            <SelectedProjects screenSize={screenSize} />
        </>
    );
};
export default Service;
