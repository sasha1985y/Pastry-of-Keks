import StarRating from './star-rating.tsx';

function Review(): JSX.Element {
  return (
    <div className="review">
      <div className="review__inner-wrapper">
        <time className="review__date" dateTime="2023-05-10">10.05</time><span className="review__author">Уважаемый(-ая) Собакевич</span>
        <StarRating isBig={false} />
        <div className="review__text-wrapper">
          <p className="review__text">Отличный сервис! Отзывчивы персонал, но&nbsp;вкус не&nbsp;обрадовал: украшения подсохли, начинка слишком сладкая. На&nbsp;любителя.</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/review-3.webp, img/content/review-3@2x.webp 2x"/>
            <img src="img/content/review-3.jpg" srcSet="img/content/review-3@2x.jpg 2x" width="162" height="162" alt="Собакевич"/>
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Review;
