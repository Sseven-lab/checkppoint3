import React, { useState, useEffect } from 'react';

//import { Link } from 'react-router-dom';
//import Footer from '../Footer/Footer';
import axios from 'axios';
import Card from './Card';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <div>Projets</div>

      <div>
        {!loading &&
          projects.map((project) => (
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
