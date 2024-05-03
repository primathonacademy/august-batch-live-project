import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../Layout';
import About from './about';
import Contact from './contact';
import CaseStudy from './case-study';
import Insights from './insights';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import HomePage from './homepage';
import { ROUTES } from '../constants/index';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                    <Route path={ROUTES.INSIGHT} element={<Insights />} />
                    <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                    <Route path={ROUTES.WORK} element={<Work />} />
                    <Route path={ROUTES.SERVICE} element={<Service />} />
                    {/* 404 */}
                    <Route path="*" element={<h1>404 — Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
