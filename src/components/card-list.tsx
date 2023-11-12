import { TProduct } from '../types/product-type.ts';
import Card from './card.tsx';
import MainCatalogBtn from '../pages/main/main-components/main-catalog-btn.tsx';

type CardListProps = {
  products: TProduct[];
  onProductHoverHandler?: (product: TProduct | null) => void;
  isCatalog: boolean;
}

function CardList({products, onProductHoverHandler, isCatalog}: CardListProps): JSX.Element {
  return (
    <ul className={isCatalog ? 'catalog__list' : 'random-main__list'}>
      {products.map((product) => (
        <li className={isCatalog ? 'catalog__item' : 'random-main__item'} key={product.id}>
          <Card
            content={product}
            onProductHoverHandler={onProductHoverHandler}
            isCatalog={isCatalog}
          />
        </li>
      ))}
      <MainCatalogBtn />
    </ul>
  );
}

export default CardList;
