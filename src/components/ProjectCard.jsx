import PropTypes from 'prop-types';
import StackChip from './StackChip';
import { Images, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, className = '', ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 130; // Set the maximum length for the description

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    if (project.description.length <= maxLength) {
      return project.description;
    }
    return (
      <span onClick={toggleExpand}>
        {isExpanded
          ? project.description
          : `${project.description.substring(0, maxLength)}... `}
        {!isExpanded && (
          <span className='text-gray-500 cursor-pointer'>See more</span>
        )}
      </span>
    );
  };

  return (
    <div
      {...props}
      className={
        'p-6 drop-shadow gap-6 rounded-md bg-gray-200 w-[30rem] flex flex-col h-fit ' +
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

          <p className='text-gray-600'>{renderDescription()}</p>
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
