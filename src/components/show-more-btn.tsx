import { TProducts } from '../types/product-type.ts';
import { PRODUCT_COUNT_PER_STEP } from '../const.ts';

type ShowMoreBtnProps = {
  isComments: boolean;
  products: TProducts;
  ShowMoreBtnClickHandler?: (value: React.SetStateAction<number>) => void;
}

function ShowMoreBtn({isComments, products, ShowMoreBtnClickHandler}: ShowMoreBtnProps): JSX.Element {
  const handleButtonClick = () => {
    if (ShowMoreBtnClickHandler) {
      ShowMoreBtnClickHandler((prevCount) => prevCount + PRODUCT_COUNT_PER_STEP);
    }
  };

  const totalProductCount = products.length; // Общее количество карточек
  const loadedProductCount = PRODUCT_COUNT_PER_STEP; // Количество уже загруженных карточек (замените на актуальное значение)

  return (
    <div className={isComments ? 'comments__show-more' : 'catalog__button-wrapper'}>
      {loadedProductCount < totalProductCount && ( // Проверка, чтобы кнопка отображалась только если не все карточки загружены
        <button className={isComments ? 'btn btn--second comments__button' : 'btn btn--second' } type="button" onClick={handleButtonClick}>Показать еще</button>
      )}
    </div>
  );
}


export default ShowMoreBtn;
