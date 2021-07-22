import React, { useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import Card from './Card';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchProject, setSearchProject] = useState("");

  const getProject = async () => {
    try {
      const dataProject = await axios.get('http://localhost:8000/api/project');
      setProjects(dataProject.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProject();
  }, [loading]);
  console.log('projects', projects);

const handleSearchProject =(e) => {
  let value = e.target.value;
  setSearchProject(value)

  // const filterProject = projects.filter((project) => project.description.includes(searchProject) && project.additional_info.includes(searchProject));
  // setProjects(filterProject) ; 
}

  return !loading && (
    <div>
              <Header/>
      <div>Projets</div>
      <div>
      <div>Chercher un projet</div> 
      <input
        value={searchProject}
        type="text"
        placeholder="Saisissez votre recherche"
        onChange={handleSearchProject}
      />   
      </div>

      <div>
        {projects
          .filter((project) => project.title.includes(searchProject) || project.description.includes(searchProject))
          .map((project) => (
            <Card
              title={project.title}
              infos={project.infos}
              image={project.image}
              description={project.description}
              infoSup={project.additional_info}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
