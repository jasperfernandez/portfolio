import { about } from '../portfolio';
import Button from './Button';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-6xl gap-12 mx-auto text-center'>
      <h1 className='text-5xl font-bold leading-10'>
        Hi, I am <span className='text-primary'>{about.name}</span>
      </h1>

      <h2 className='text-3xl font-bold'>A {about.role}</h2>

      <p className='max-w-2xl text-xl'>
        I&apos;m a 21-year-old Computer Science graduate from Tandag City. I
        specialize in web development. I focus on building efficient backend
        solutions and user-friendly interfaces to create impactful digital
        experiences.
      </p>

      <div className='space-x-2'>
        <Button>Resume</Button>
        <Button variant='secondary'>Hire me</Button>
      </div>
    </div>
  );
};

export default Home;
