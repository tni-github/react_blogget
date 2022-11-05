// import style from './Link.module.css';
import PropTypes from 'prop-types';

export const Link = ({ text }) => {
  return (
    <a>{text}</a>
  );
};

Link.propTypes = {
  text: PropTypes.string,
};
