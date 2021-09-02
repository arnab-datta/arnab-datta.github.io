import "./CardGlobal.css";
function CardGlobal(props) {
  return (
    <div>
      <div className="cardParStyle">
        <div className="cardInStyle">
        <section className="card__footer footer__bg">
            <img
              className="card__thumb thumb__bdr"
              src="https://source.unsplash.com/60x60/?profile,girl"
              alt="Profile Picture"
            />
            <h2 className="card__p-name">Jenny Smith</h2>
          </section>
          <article className="card__body">
            <p className="card__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              aut ipsa nemo amet earum nihil quasi impedit ea perspiciatis omnis
              ullam dignissimos voluptas hic, vero molestiae iure fugiat? Quae,
              voluptatibus?
            </p>
          </article>
          
          {/* {props.obj.id} */}
        </div>
      </div>
    </div>
  );
}
export default CardGlobal;
