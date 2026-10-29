import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import FloatingLeadButton from '../lead/FloatingLeadButton';
import LeadModal from '../lead/LeadModal';
import { LeadModalProvider } from '../lead/LeadModalContext';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // ссылка вида /#about ведёт к разделу (и при повторном нажатии тоже), остальные — наверх страницы
    const target = hash && document.getElementById(hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);
  return (
    // анимации отключаются, если в системе включено «уменьшить движение»
    <MotionConfig reducedMotion="user">
    <LeadModalProvider>
    <div className="flex min-h-screen flex-col">
      <Header />
      <motion.main
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingLeadButton />
      <LeadModal />
    </div>
    </LeadModalProvider>
    </MotionConfig>
  );
}
