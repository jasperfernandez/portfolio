import PropTypes from 'prop-types';

const Education = ({ className = '', ...props }) => {
  return (
    <div {...props} className={'max-w-6xl mx-auto' + className}>
      <h1 className='p-6 text-3xl font-bold'>
        <span className='text-primary'>{'<'}</span>Education{' '}
        <span className='text-primary'>{'/>'}</span>
      </h1>
    </div>
  );
};

Education.propTypes = {
  className: PropTypes.string,
};

export default Education;
