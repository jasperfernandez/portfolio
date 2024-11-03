import { about } from '../portfolio';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-6xl gap-12 mx-auto text-center'>
      <h1 className='text-5xl font-bold leading-10'>
        Hi, I am <span className='text-primary'>{about.name}</span>
      </h1>

      <h2 className='text-3xl font-bold'>A {about.role}</h2>

      <p className='max-w-2xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ratione
        iste quo sapiente, beatae autem praesentium ex magnam illo eaque
        dignissimos magni nobis quaerat vero enim id est maxime cupiditate.
        Magnam ab quaerat in ad qui libero, deleniti adipisci assumenda
        perferendis officiis.
      </p>

      <div>
        <button>Resume</button>
        <a>Github</a>
        <a>LinkedIn</a>
      </div>
    </div>
  );
};

export default Home;
