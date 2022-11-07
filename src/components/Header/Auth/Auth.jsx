import { useEffect, useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as AuthIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { URL_API } from '../../../api/const';

export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [isActiveLogout, setIsActiveLogout] = useState(false);

  const handleClick = () => {
    setIsActiveLogout(!isActiveLogout);
  };

  const handleClickLogout = () => {
    delToken();
    setAuth({});
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((response, err) => {
        if (response.status === 401) {
          delToken();
        }
        console.error(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ?
      <>
        <button className={style.btn} onClick={handleClick}>
          <img className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар пользователя ${auth.name}`}
          />
          <Text className={style.span}
            size={12} color={'grey33'} center>{auth.name}</Text>
        </button>
        {isActiveLogout ?
          <button
            className={style.logout}
            onClick={handleClickLogout}
          >
          Выйти
          </button> :
          <></>}
      </> :
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg} width="128" height="128" />
        </Text>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
