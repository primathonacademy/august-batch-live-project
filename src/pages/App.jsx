import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import About from './about';
import Contact from './contact';
import CaseStudy from './case-study';
import Insights from './insights';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import { ROUTES } from '../constants';
import Layout from '../Layout';
import GetTouch from '../components/GetTouch';
function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />} />

                <Route path={ROUTES.HOME} element={<Homepage />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                <Route path={ROUTES.INSIGHT} element={<Insights />} />
                <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                <Route path={ROUTES.WORK} element={<Work />} />
                <Route path={ROUTES.SERVICE} element={<Service />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
            <GetTouch />
        </>
    );
}

export default App;
