import { about } from '../portfolio';
import Button from './Button';
import Header from './Header';

const Home = ({ ...props }) => {
  return (
    <>
      <Header />

      <div
        {...props}
        className='flex flex-col items-center justify-center max-w-6xl gap-12 mx-auto text-center'
      >
        <h1 className='text-5xl font-bold leading-10'>
          Hi, I am <span className='text-primary'>{about.name}</span>
        </h1>
        <h2 className='text-3xl font-bold'>A {about.role}</h2>
        <p className='max-w-2xl text-xl'>{about.description}</p>
        <div className='space-x-2'>
          <a href={about.resume} target='_blank' tabIndex='-1'>
            <Button>Resume</Button>
          </a>
          <Button variant='secondary' tabIndex='0'>
            Hire me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
