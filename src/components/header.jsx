import {Link} from 'react-router-dom';
import './header.css';

export function Header(){
  return <header className="header">
    <nav className='header-navigation'>
      <Link to={'/'} className='navigation-link'>App</Link>
      <Link to={'/about'} className='navigation-link'>About</Link>
      <Link to={'/terms'} className='navigation-link'>Terms</Link>
      <Link to={'/post/:id'} className='navigation-link'>Posts</Link>
    </nav>
  </header>
}