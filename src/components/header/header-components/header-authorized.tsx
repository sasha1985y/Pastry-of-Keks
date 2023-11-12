import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';

function HeaderAuthorized(): JSX.Element {
  return (
    <div className="header__buttons-authorized">
      <div className="header__btn">
        <Link className="btn btn--second" to={AppRoute.SignIn}>Выйти</Link>
      </div>
    </div>
  );
}

export default HeaderAuthorized;
