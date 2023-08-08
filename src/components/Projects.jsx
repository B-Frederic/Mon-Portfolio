// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Data
import dataProjects from "../data/data_projects";
import dataFilter from "../data/data_filter";
// Icons
import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {

  const [selectFilter, setSelectFilter] = useState([]);
  const [filterProject, setFilterProject] = useState(dataProjects);

  const handleFilter = (type) => {
    if (selectFilter.includes(type)) {
      let filters = selectFilter.filter((element) => element !== type);
      setSelectFilter(filters);
    } else {
      setSelectFilter([type]);
    }
  };

  const filterProjects = () => {
    if (selectFilter.length > 0) {
      let tempProject = selectFilter.map((element) => {
        let temp = dataProjects.filter(
          (item) =>
            item.front === element ||
            item.script === element ||
            item.css === element ||
            item.redux === element ||
            item.back === element ||
            item.tool === element ||
            item.payment === element
        );

        return temp;
      });

      setFilterProject(tempProject.flat());
    } else {
      setFilterProject([...dataProjects]);
    }
  };

  useEffect(() => {
    filterProjects();
  }, [selectFilter]);


  // Parallax card effect

  let screenWidth = screen.width; 
  const card = document.querySelectorAll(".container-projects--box-card")

  card.forEach((el) => {

    if(screenWidth > 900){

      el.addEventListener("mousemove", (e) => {

        let elRect = el.getBoundingClientRect();
        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;
        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;
        let angleY = -(x - midCardWidth) / 14;
        let angleX = (y - midCardHeight) / 14;

        el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.01)`;

      })

      el.addEventListener("mouseleave", () => {
        el.style.transform = "rotateX(0) rotateY(0)";
      })
    }
    
  })

  return (
    <div id="projects">
      <div id="filter" className="container-projects">
        <div className="container-projects--filter">
          <h2>Filtrer :</h2>
          <div className="container-projects--filter-list">
            <ul>
              {dataFilter.map((element, index) => (
                <li
                  key={index}
                  style={{ borderColor: element.style }}
                  className={
                    selectFilter?.includes(element.active) ? "active" : ""
                  }
                  onClick={() => handleFilter(element.filter)}
                >
                  {element.text}
                </li>
              ))}
            </ul>
          </div>
        </div>     
        
        <div className="container-projects--box">
            {filterProject.map((element, index) => (
                <div className="container-projects--box-card" key={index}>
                  <h2>{element.title}</h2>
                  <span>{element.tag}</span>
                  <div className="container-projects--box-card-responsive">
                    <p>{element.responsive}</p>
                  </div>
                  <img src={element.img} alt={element.alt} aria-label={element.alt} width={350} height={330}></img>
                  <div className="container-projects--box-card-social">
                    {
                      element.title !== "Portfolio" && (
                        <Link
                          to={element.view}
                          target="_blank"
                          aria-label="Voir le projet"
                          className="container-projects--box-card-social-link"
                        >
                          <FaEye />
                        </Link>
                      )
                    }

                    <Link
                      to={element.code}
                      aria-label="Voir le code"
                      target="_blank"
                      className="container-projects--box-card-social-link"
                      >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
            ))}
        </div>
        <div className="container-projects--top-filter">
          <a href="#filter">Remonter aux filtres</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
