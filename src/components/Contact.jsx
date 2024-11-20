import PropTypes from 'prop-types';

const Contact = ({ className = '', ...props }) => {
  return (
    <div {...props} className={'max-w-6xl mx-auto' + className}>
      <h1 className='p-6 text-3xl font-bold'>
        <span className='text-primary'>{'<'}</span>Contact{' '}
        <span className='text-primary'>{'/>'}</span>
      </h1>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
