import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';

function HeaderLoginBtn(): JSX.Element {
  return (
    <div className="header__btn">
      <Link className="btn" to={AppRoute.SignIn}>Войти</Link>
    </div>
  );
}

export default HeaderLoginBtn;
