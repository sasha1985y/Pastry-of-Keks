import { Helmet } from 'react-helmet-async';
import Header from '../../components/header.tsx';
import Footer from '../../components/footer.tsx';
import ReviewForm from '../../components/review-form.tsx';
import Filtersort from '../../components/filter-sort.tsx';
import Comments from '../../components/comments-list.tsx';
import StarRating from '../../components/star-rating.tsx';

function ProductPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Заказ</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>
          <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
          <div className="back-link">
            <div className="container">
              <a className="back-link__link" href="#">Назад
                <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <section className="item-details item-details--form-open">
            <div className="container">
              <div className="item-details__wrapper">
                <div className="item-details__top-wrapper">
                  <h2 className="item-details__name">Чизкейк Лимонный</h2><span className="item-details__price">4 100 р</span>
                </div>
                <div className="item-details__weight-wrapper"><span className="item-details__weight">1 300 грамм</span></div>
                <div className="item-details__bottom-wrapper">
                  <div className="item-details__image-wrapper">
                    <picture>
                      <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x"/>
                      <img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Чизкейк лимонный"/>
                    </picture><span className="item-details__label">Новинка</span>
                  </div>
                  <div className="item-details__review-wrapper">
                    <StarRating isBig />
                    <div className="item-details__text-wrapper"><span className="item-details__text">Цитрусовый десерт с тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сд</span>
                      <button className="item-details__more"><span className="visually-hidden">Читать полностью</span>
                        <svg width="27" height="17" aria-hidden="true">
                          <use xlinkHref="#icon-more"></use>
                        </svg>
                      </button>
                    </div>
                    <div className="item-details__button-wrapper">
                      <button className="item-details__like-button">
                        <svg width="45" height="37" aria-hidden="true">
                          <use xlinkHref="#icon-like"></use>
                        </svg>
                        <span className="visually-hidden">Понравилось</span>
                      </button>
                      <button className="btn btn--second" type="button">Отменить отзыв</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ReviewForm />
          <Filtersort />
          <Comments />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
