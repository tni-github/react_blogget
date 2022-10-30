import style from './LayoutComponent.module.css';

export const LayoutComponent = ({ children }) => {
  return <div className={style.container}>{children}</div>
}