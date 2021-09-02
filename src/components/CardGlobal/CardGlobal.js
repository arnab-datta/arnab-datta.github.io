import "./CardGlobal.css";
function CardGlobal(props) {
  return (
    <div>
      <div className="cardParStyle">
        <div className="cardInStyle">
        <section className="cardup cardupbg">
            <img
              className="cardupimg cardupimgbdr"
              src="https://source.unsplash.com/60x60/?profile,girl"
              alt="Profile Picture"
            />
            <h2 className="carduppname">Jenny Smith</h2>
          </section>
          <article className="cardbody">
            <p className="cardtext">
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
