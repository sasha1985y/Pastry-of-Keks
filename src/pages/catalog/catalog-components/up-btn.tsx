type UpBtnProps = {
  scrollToTop: () => void;
}

function UpBtn({scrollToTop}: UpBtnProps): JSX.Element {
  return (
    <div className="catalog__button-wrapper">
      <button className="btn btn--second" type="button" onClick={scrollToTop}>в начало</button>
    </div>
  );
}

export default UpBtn;
