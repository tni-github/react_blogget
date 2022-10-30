import style from './HeaderComponent.module.css';
import LayoutComponent from '../LayoutComponent';
import LogoComponent from './LogoComponent';
import SearchComponent from './SearchComponent';
import AuthComponent from './AuthComponent';
import HeadingComponent from './HeadingComponent';

export const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <LayoutComponent>
        <div className={style.gridContainer}>
          <LogoComponent />
          <HeadingComponent text={'Главная'} />
          <SearchComponent />
          <AuthComponent auth={false} />
        </div>
      </LayoutComponent>
    </header>
  );
};
