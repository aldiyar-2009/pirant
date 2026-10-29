import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contacts from './pages/Contacts';
import History from './pages/History';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import NotFound from './pages/NotFound';
import Partners from './pages/Partners';
import Privacy from './pages/Privacy';
import ServicePage from './pages/ServicePage';
import SpecialMachinesCatalog, { MachineCategoryPage, MachineDetailPage } from './pages/SpecialMachinesCatalog';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* «О компании» — блок на главной; старые ссылки на /about ведут туда */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/services/special-machines" element={<SpecialMachinesCatalog />} />
        <Route path="/services/special-machines/:categoryId" element={<MachineCategoryPage />} />
        <Route path="/services/special-machines/:categoryId/:machineId" element={<MachineDetailPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
