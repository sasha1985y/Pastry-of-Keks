import { TProduct } from '../types/product-type.ts';
import Card from './card.tsx';

type CardListProps = {
  products: TProduct[];
  onProductHoverHandler?: (product: TProduct | null) => void;
}

function CardList({products, onProductHoverHandler}: CardListProps): JSX.Element {
  return (
    <ul className="random-main__list">
      {products.map((product) => (
        <li className="random-main__item" key={product.id}>
          <Card
            content={product}
            onProductHoverHandler={onProductHoverHandler}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
