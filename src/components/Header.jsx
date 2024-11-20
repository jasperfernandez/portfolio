// import { header } from '../portfolio';
import { Github, Linkedin } from 'lucide-react';
import NavLink from './NavLink';
import { about } from '../portfolio';

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

      <div className='flex items-center gap-6'>
        <div className='flex gap-6'>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </div>
        <div className='flex gap-2'>
          <a href={about.social.github} target='_blank' tabIndex={0}>
            <Github size={20} className='hover:text-primary' />
          </a>
          <a href={about.social.linkedin} target='_blank' tabIndex={0}>
            <Linkedin size={20} className='hover:text-primary' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
