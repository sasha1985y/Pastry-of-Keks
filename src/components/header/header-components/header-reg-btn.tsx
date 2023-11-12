import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';

function HeaderRegBtn(): JSX.Element {
  return (
    <div className="header__btn">
      <Link className="btn btn--third header__link header__link--reg" to={AppRoute.SignUp}>Регистрация</Link>
    </div>
  );
}

export default HeaderRegBtn;
