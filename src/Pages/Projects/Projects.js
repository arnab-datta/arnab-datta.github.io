// Built-in
import Slide from "react-reveal/Slide";

// Internal
import "./Projects.css";
import HeadersComponent from "../../components/Headers/Headers";

function Projects() {
  return (
    <Slide right>
      <div className="ProjectsPageContainer">
        <HeadersComponent
          headerName={"Projects"}
          // colorName={"cpf"}
          bcg={"swdbcg"}
          onback="/"
        ></HeadersComponent>
        <div className="ProjectsWrapper">
          <div className="ProjectsWrapperIn">
            <div className="project__wrapper">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((elem) => {
                return <ProjectCard key={Math.random()} />;
              })}
              ;
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Projects;

function ProjectCard() {
  return (
    <div className="project__card__container">
      <div className="project__card">
        <div className="project__image">{/* <img src="" alt="title" /> */}</div>
        <div className="project__body">
          <div className="project__title">Project Title</div>
          <div className="proejct__technologies">Javasctript</div>
          <div className="proejct__desciption">
            Project Description Project DescriptionProject DescriptionProject
            DescriptionProject DescriptionProject DescriptionProject
            DescriptionProject DescriptionProject DescriptionProject Description
          </div>
        </div>
      </div>
    </div>
  );
}
