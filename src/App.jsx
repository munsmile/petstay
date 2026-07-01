import { useMemo } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Room from './pages/Room.jsx';
import Facility from './pages/Facility.jsx';
import Reservation from './pages/Reservation.jsx';
import Travel from './pages/Travel.jsx';
import NotFound from './pages/NotFound.jsx';

function getRoute(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/') return { page: 'home' };
  if (path === '/about') return { page: 'about' };
  if (path.startsWith('/rooms/')) return { page: 'room', id: path.split('/').pop() };
  if (path.startsWith('/facility/')) return { page: 'facility', id: path.split('/').pop() };
  if (path === '/reservation') return { page: 'reservation' };
  if (path === '/travel') return { page: 'travel' };
  return { page: 'notfound' };
}

export default function App() {
  const route = useMemo(() => getRoute(window.location.pathname), []);

  const render = () => {
    switch (route.page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'room': return <Room id={route.id} />;
      case 'facility': return <Facility id={route.id} />;
      case 'reservation': return <Reservation />;
      case 'travel': return <Travel />;
      default: return <NotFound />;
    }
  };

  return (
    <>
      <Header />
      <main>{render()}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
