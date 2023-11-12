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
    </ul>
  );
}
function MainCatalogBtn(): JSX.Element {
  return (
    <li className="random-main__item">
      <Link className="random-main__link" to={AppRoute.Catalog}>
        <div className="random-main__icon-wrapper">
          <div className="random-main__icon">
            <svg width="120" height="130" aria-hidden="true">
              <use xlinkHref="#icon-keks"></use>
            </svg>
          </div>
        </div>
        <h3 className="random-main__subtitle">Все кексы</h3>
      </Link>
    </li>
  );
}
как добавить MainCatalogBtn в конец списка ul элемента CardList, чтобы MainCatalogBtn был там самым последним элементом?
