import RegistrationForm from '../../components/form-action.tsx';

function RegisterPage(): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img className="register-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота."/>
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <RegistrationForm />
              </div>
              <p className="register-page__text-wrap">Уже зарегистрированы? <a className="register-page__link" href="login-page.html">Войдите</a> в свой аккаунт.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
