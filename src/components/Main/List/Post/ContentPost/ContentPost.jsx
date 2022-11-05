import style from './ContentPost.module.css';
import PropTypes from 'prop-types';

export const ContentPost = ({ title, author }) => {
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>{title}</a>
      </h2>
      <a className={style.linkAuthor} href='#author'>{author}</a>
    </div>
  );
};

ContentPost.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
