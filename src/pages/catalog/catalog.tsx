import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index.ts';
import { PRODUCT_COUNT_PER_STEP } from '../../const.ts';
import Header from '../../components/header/header.tsx';
import BackLink from './catalog-components/back-link.tsx';
import CatalogFilter from './catalog-components/catalog-filter.tsx';
import CardList from '../../components/card-list.tsx';
import ShowMoreBtn from '../../components/show-more-btn.tsx';
import Footer from '../../components/footer.tsx';
import UpBtn from './catalog-components/up-btn.tsx';

function Catalog(): JSX.Element {
  const products = useAppSelector((state) => state.products);
  const [showMoreCard, setShowMoreCard] = useState(PRODUCT_COUNT_PER_STEP);
  const loadMore = () => {
    setShowMoreCard((prev: number) => prev + PRODUCT_COUNT_PER_STEP);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Helmet>
        <title>Каталог</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>
          <h1 className="visually-hidden">Каталог товаров</h1>
          <BackLink />
          <CatalogFilter />
          <section className="catalog">
            <div className="container">
              <h2 className="visually-hidden">Каталог</h2>
              <div className="catalog__wrapper">
                <CardList products={products.slice(0, showMoreCard)} isCatalog />
                {showMoreCard >= products.length ? <UpBtn scrollToTop={scrollToTop} /> : <ShowMoreBtn products={products} isComments={false} ShowMoreBtnClickHandler={loadMore} />}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
