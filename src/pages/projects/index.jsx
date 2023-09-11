import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ProjectItem from '../projects/ProjectItem';
import { projectLists } from "./projectList";
import './style.scss';

const Projects = () => {
    return(
        <section id="projects" className="projects">
            <PageHeaderContent
              headerText= " My Projects "
              icon={ <BsInfoCircleFill size={40} />}
            />
            <div className="project">
            <div className="projectList">
           
              {projectLists.map((project) => (
                        <ProjectItem
                            name={project.name}
                            image={project.image}
                            skills={project.skills}
                            key={project.id} // Make sure to provide a unique key
    >
      <a href={project.links}>Link to Project</a>
    </ProjectItem>
  ))}
         
             
</div>

            </div>
        </section>
    );
};

export default Projects;