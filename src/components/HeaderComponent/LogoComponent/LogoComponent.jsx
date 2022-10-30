import style from './LogoComponent.module.css';
import logo from './img/logo.svg';

export const LogoComponent = () => {
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={logo} alt='Логотип Blogget' />
    </a>
  );
};
