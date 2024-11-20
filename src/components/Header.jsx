// import { header } from '../portfolio';
import NavLink from './NavLink';

const Header = () => {
  return (
    <div
      id='home'
      className='flex items-center justify-between w-full h-32 max-w-6xl px-8 mx-auto'
    >
      <a href='#home'>
        <h1 className='text-xl font-bold'>
          <span className='text-primary'>{'<'}</span>JasperFernandez{' '}
          <span className='text-primary'>{'/>'}</span>
        </h1>

        {/* <h1 className='text-xl font-semibold'>
          J<span className='text-primary'>F</span>
        </h1> */}

        {/* <h1 className='text-xl font-semibold'>{header.title}</h1> */}
      </a>

      <div className='flex gap-6'>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#education'>Education</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </div>
    </div>
  );
};

export default Header;
