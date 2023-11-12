//import axios, { AxiosResponse } from 'axios';
//import React, { FormEvent } from 'react';

function RegistrationForm() {
  /*const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form['user-name-1'] as HTMLInputElement).value;
    const email = (form['user-mail-1'] as HTMLInputElement).value;
    const password = (form['user-password-1'] as HTMLInputElement).value;
    const avatar = (form['user-avatar'] as HTMLInputElement).files[0];

    // Проверка пароля на содержание буквы и цифры, а также отсутствие пробелов
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;
    if (!passwordRegex.test(password)) {
      console.log('Пароль должен содержать минимум одну букву и одну цифру, без пробелов');
      return;
    }

    // Отправка запроса на сервер для регистрации пользователя
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('avatar', avatar);

      axios.post('https://grading.design.pages.academy/v0/keks/users/registration', formData)
        .then((response: AxiosResponse<{ token: string }>) => {
          const token = response.data.token;
          // Сохранение токена для последующих запросов
          axios.defaults.headers.common['X-Token'] = token;
          // Загрузка аватара или другие действия после успешной регистрации
        })
        .catch((error) => {
          // Обработка ошибок при регистрации
          console.error('Ошибка при регистрации:', error);
        });
    } catch (error) {
      // Обработка ошибок при регистрации
      console.error('Ошибка при регистрации:', error);
    }
  };*/

  return (
    <form /*onSubmit={handleSubmit}*/ autoComplete="off">
      <div className="register-page__fields">
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Введите ваше имя</span>
            <input type="text" name="user-name-1" placeholder="Имя" required />
          </label>
        </div>
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Введите вашу почту</span>
            <input type="email" name="user-mail-1" placeholder="Почта" required />
          </label>
        </div>
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Введите ваш пароль</span>
            <input type="password" name="user-password-1" placeholder="Пароль" required />
          </label>
        </div>
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Выберите аватар</span>
            <input type="file" name="user-avatar" accept="image/jpeg" />
          </label>
        </div>
      </div>
      <button className="btn register-page__btn btn--large" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default RegistrationForm;
