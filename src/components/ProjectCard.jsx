import PropTypes from 'prop-types';
import StackChip from './StackChip';
import { Images, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, className = '', ...props }) => {
  return (
    <div
      {...props}
      className={
        'p-6 h-96 drop-shadow gap-6 rounded-md bg-gray-200 w-[30rem] flex flex-col ' +
        className
      }
    >
      <div className='flex h-40 overflow-hidden bg-gray-200 rounded'>
        <img
          key={project.images[0]}
          src={project.images[0]}
          className='object-contain w-full'
        />
      </div>

      <div className='flex flex-col justify-center space-y-4'>
        <div className='space-y-1'>
          <h1 className='text-xl font-bold'>{project.name}</h1>
          <p className='text-gray-600'>{project.description}</p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.stacks.map((stack) => (
            <StackChip key={stack.name} stack={stack} />
          ))}
        </div>

        <div className='flex items-center gap-3 text-xs underline'>
          <Images size={18} className='cursor-pointer' tabIndex={0} />

          <a href={project.sourceCode} target='_blank'>
            <Github size={18} />
          </a>

          <a href={project.livePreview} target='_blank'>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object,
};

export default ProjectCard;
