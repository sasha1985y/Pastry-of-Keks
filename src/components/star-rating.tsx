type StarRatingProps = {
  isBig: boolean;
}

function StarRating({isBig}: StarRatingProps): JSX.Element {
  return (
    <div className={isBig ? 'star-rating star-rating--big' : 'star-rating'}>
      <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      {isBig && <span className="star-rating__count">26</span>}
    </div>
  );
}

export default StarRating;
