import PropTypes from 'prop-types';

const Skills = ({ className = '', ...props }) => {
  return (
    <div {...props} className={'max-w-6xl mx-auto' + className}>
      <h1 className='p-6 text-3xl font-bold'>
        <span className='text-primary'>{'<'}</span>Skills{' '}
        <span className='text-primary'>{'/>'}</span>
      </h1>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
