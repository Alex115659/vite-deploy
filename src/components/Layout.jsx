import { Outlet, useLocation } from "react-router-dom";
import '../styles/main.css';

function Layout() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path
      ? { textDecoration: 'underline', fontWeight: 'bold', fontSize: '24px' }
      : { textDecoration: 'none' };
  };

  return (
    <>
      <header>
        <nav className='navbar'>
          <a className='home' href='/' style={getLinkStyle('/')}>Home</a>
          <a className='about' href='/about' style={getLinkStyle('/about')}>About</a>
          <a className='products' href='/products' style={getLinkStyle('/products')}>Products</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

