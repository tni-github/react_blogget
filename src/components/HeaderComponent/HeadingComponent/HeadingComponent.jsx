import style from './HeadingComponent.module.css';
import PropTypes from 'prop-types';

export const HeadingComponent = ({ text }) => {
  return (<h1 className={style.heading}>{text}</h1>);
};

HeadingComponent.propTypes = {
  text: PropTypes.string,
};
