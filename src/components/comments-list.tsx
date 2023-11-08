import Review from './review.tsx';
import BtnMoreComments from './btn-more-comments.tsx';

function Comments(): JSX.Element {
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          <Review />
          <Review />
          <Review />
        </div>
        <BtnMoreComments />
      </div>
    </section>
  );
}

export default Comments;
