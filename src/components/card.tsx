import { Link } from 'react-router-dom';
import { TProduct } from '../types/product-type.ts';
import { AppRoute } from '../const.ts';

type CardProps = {
  content: TProduct;
  onProductHoverHandler?: (product: TProduct | null) => void;
}

function Card({content, onProductHoverHandler}: CardProps): JSX.Element {
  const {
    id,
    title,
    previewImage,
    previewImageWebp,
    isNew,
  } = content;

  const productOnMouseOverHandler = onProductHoverHandler
    ? () => onProductHoverHandler(content)
    : () => undefined;
  return (
    <div className="card-item"
      onMouseOver={productOnMouseOverHandler}
    >
      <a className="card-item__img-link" href="#">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={`${previewImageWebp}, ${previewImageWebp}@2x.webp 2x`}/>
            <img src={previewImage} srcSet={`${previewImage}@2x.jpg 2x`} width="241" height="245" alt="Торт голубика."/>
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </a>
      <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      <Link className="card-item__link" to={`${AppRoute.ProductPage}/${id}`}>
        <h3 className="card-item__title">
          <span>{title}</span>
        </h3>
      </Link>
    </div>
  );
}

export default Card;
