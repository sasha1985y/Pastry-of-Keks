function HeaderFavourite(): JSX.Element {
  return (
    <a className="header__favourite" href="#">
      <span className="header__favourite-icon">
        <svg width="33" height="29" aria-hidden="true">
          <use xlinkHref="#icon-favourite"></use>
        </svg>
      </span>
      <span className="header__favourite-number">2</span>
      <span className="visually-hidden">Избранное</span>
    </a>
  );
}

export default HeaderFavourite;
