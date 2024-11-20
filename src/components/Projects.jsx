import ProjectCard from './ProjectCard';
import { projects } from '../portfolio';

const Projects = ({ ...props }) => {
  return (
    <div
      {...props}
      className='flex flex-col items-center max-w-6xl gap-6 mx-auto'
    >
      <h1 className='p-6 text-3xl font-bold'>
        <span className='text-primary'>{'<'}</span>Projects{' '}
        <span className='text-primary'>{'/>'}</span>
      </h1>

      <div className='grid grid-cols-2 gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
