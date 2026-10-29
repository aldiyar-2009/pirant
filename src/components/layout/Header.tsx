import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Menu, Phone, Search } from 'lucide-react';
import { useContacts } from '../../store/hooks';
import { useLang } from '../../i18n/LanguageContext';
import SearchPalette from '../search/SearchPalette';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import TopBar from './TopBar';
import { navLinks } from './navLinks';

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName));

export default function Header() {
  const { t } = useLang();
  const contacts = useContacts();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const lastY = useRef(0);

  // закрываем меню при смене страницы
  useEffect(() => { setDrawerOpen(false); setMegaOpen(false); setSearchOpen(false); setHidden(false); }, [pathname]);

  // шапка уезжает при прокрутке вниз и возвращается при малейшей прокрутке вверх
  useMotionValueEvent(scrollY, 'change', (y) => {
    const dy = y - lastY.current;
    lastY.current = y;
    setScrolled(y > 8);
    if (megaOpen || y < 160) setHidden(false);
    else if (dy > 6) setHidden(true);
    else if (dy < -4) setHidden(false);
  });

  // Ctrl+K / ⌘K или «/» открывают поиск
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K' || e.key === 'л' || e.key === 'Л') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); setSearchOpen((v) => !v); }
      else if (e.key === '/' && !isTyping(e.target)) { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <TopBar />
      <motion.header
        className={`sticky top-0 z-30 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${scrolled ? 'border-navy/10 shadow-[0_10px_30px_-20px_rgba(7,21,72,0.35)]' : 'border-transparent'}`}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="container-site flex h-16 items-center justify-between lg:h-[72px]">
          <Logo />

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label={t('mainNavigation')}>
            {navLinks.map((n) =>
              n.to === '/services' ? (
                <button
                  key={n.to}
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  className={`nav-link flex items-center gap-1 text-sm font-semibold hover:text-brand ${megaOpen || pathname.startsWith('/services') ? 'text-brand' : 'text-navy'}`}
                  data-active={pathname.startsWith('/services') || undefined}
                >
                  {t(n.key)} <ChevronDown size={15} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink
                  key={n.to} to={n.to}
                  onMouseEnter={() => setMegaOpen(false)}
                  // ссылка-якорь на главную не подсвечивается как текущая страница
                  className={({ isActive }) => `nav-link text-sm font-semibold hover:text-brand ${isActive && !n.to.includes('#') ? 'active text-brand' : 'text-navy'}`}
                >
                  {t(n.key)}
                </NavLink>
              )
            )}
            <button
              onClick={() => setSearchOpen(true)} onMouseEnter={() => setMegaOpen(false)}
              aria-label={t('search')} title={`${t('search')} (Ctrl+K)`}
              className="group flex items-center gap-2 rounded-full border border-navy/15 py-1.5 pl-3 pr-1.5 text-sm text-ink/55 transition-colors hover:border-brand hover:text-navy"
            >
              <Search size={15} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              {t('search')}
              <kbd className="rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-navy/70">Ctrl K</kbd>
            </button>
          </nav>

          {/* Mobile: поиск, быстрый вызов, бургер */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button onClick={() => setSearchOpen(true)} aria-label={t('search')} className="rounded-lg p-2.5 text-navy hover:bg-brand-soft">
              <Search size={20} />
            </button>
            <a href={contacts.phoneHref} aria-label={t('call')} className="rounded-lg bg-accent p-2.5 text-white">
              <Phone size={18} />
            </a>
            <button onClick={() => setDrawerOpen(true)} aria-label={t('menu')} className="rounded-lg p-2.5 text-navy hover:bg-brand-soft">
              <Menu size={22} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen && <MegaMenu key="mega" onNavigate={() => setMegaOpen(false)} />}
        </AnimatePresence>

        {/* прогресс чтения страницы */}
        <motion.div aria-hidden className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent" style={{ scaleX: progress }} />
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
