import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import HeaderAuthorized from './header-components/header-authorized.tsx';
import HeaderFavourite from './header-components/header-favourite.tsx';
import HeaderRegBtn from './header-components/header-reg-btn.tsx';
import HeaderLoginBtn from './header-components/header-login-btn.tsx';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderProps): JSX.Element {
  return (
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner">
          <Link to={AppRoute.Main}><span className="header__logo"><img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс"/></span></Link>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source type="image/webp" srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x"/>
                  <img src="img/content/user-avatar.jpg" srcSet="img/content/user-avatar@2x.jpg 2x" width="62" height="62" alt="Аватар пользователя."/>
                </picture>
              </div>
              <p className="header__user-mail">keks@academy.ru</p>
            </div>
          </div>
          <div className="header__buttons">
            {authorizationStatus === AuthorizationStatus.NoAuth && (
              <>
                <HeaderRegBtn />
                <HeaderLoginBtn />
              </>
            )}
            {authorizationStatus === AuthorizationStatus.Auth && (
              <>
                <HeaderFavourite />
                <HeaderAuthorized />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
