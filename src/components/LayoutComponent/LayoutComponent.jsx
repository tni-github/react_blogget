import style from './LayoutComponent.module.css';
import PropTypes from 'prop-types';

export const LayoutComponent = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

LayoutComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.node
  ]),
};
