import { header } from '../portfolio';
import NavLink from './NavLink';

const Header = () => {
  return (
    <div
      id='home'
      className='flex items-center justify-between w-full h-32 max-w-6xl px-8 mx-auto'
    >
      <a href='#home'>
        <h1 className='text-2xl font-bold text-primary'>{header.title}</h1>
      </a>

      <div className='flex gap-6'>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#education'>Education</NavLink>
      </div>
    </div>
  );
};

export default Header;
