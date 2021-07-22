import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';

const ManageProject = () => {
  const [title, setTitle] = useState('');
  const [infos, setInfos] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [infoSup, setInfoSup] = useState('');

  const [deleteProjects, setDeleteProjects] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState(true);
  //const [selectedProjects, setSelectedProjects] = useState([]);
  
  //GET PROJECTS
  const getDeleteProject = async () => {
    try {
      const dataDeleteProject = await axios.get(
        'http://localhost:8000/api/project'
      );
      setDeleteProjects(dataDeleteProject.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingDelete(false);
    }
  };

  useEffect(() => {
    getDeleteProject();
  }, [loadingDelete, deleteProjects]);
  console.log('projects', deleteProjects);

  //POST NEW PROJECT
  const postNewProject = async (e) => {
    e.preventDefault();
    try {
      const addProject = await axios.post('http://localhost:8000/api/project', {
        title: title,
        infos: infos,
        image: image,
        description: description,
        additional_info: infoSup,
      });
    } catch (error) {
      alert("Echec ! Le projet n'a pas été ajouté !");
    }

    alert(`Le projet "${title}" a bien été ajouté`);
  };

  //DELETE

  const EraseProject = () => {
    axios
      .delete(`http://localhost:8000/api/project/${deleteProjects.idproject}`)
      .then((res) => this.setState({ status: 'Projet supprimé' }));
  };
 

  return (
    <div>
      <Header />
      <div>Hello bonjour 3 </div>
      <form name="addProject" onSubmit={postNewProject}>
        <h1>Ajouter un projet</h1>
        <ul>
          <li>
            <label>Titre </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              placeholder="Titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </li>
          <li>
            <label>Infos projet </label>
            <input
              type="text"
              id="projectInfos"
              name="projectInfos"
              placeholder="Infos"
              value={infos}
              onChange={(e) => setInfos(e.target.value)}
              required
            />
          </li>
          <li>
            <label>Image ou Screenshot </label>
            <input
              type="text"
              id="projectImage"
              name="projectImage"
              placeholder="URL image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </li>
          <li>
            <label>Description </label>
            <textarea
              type="text"
              id="projectDescription"
              name="projectDescription"
              placeholder="Description"
              maxLength="100"
              cols="30"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </li>
          <li>
            <label>Infos complémentaires </label>
            <input
              type="text"
              id="projectInfoSup"
              name="projectInfoSup"
              placeholder="Infos additionnelles"
              value={infoSup}
              onChange={(e) => setInfoSup(e.target.value)}
              required
            />
          </li>

          <li id="creationButton">
            <button
              type="submit"
              id="addProjectButton"
              name="addProject"
              alt="addNewProject"
              value="Add project"
            />
          </li>
        </ul>
      </form>
      <hr />
      <h1>Supprimer un projet</h1>
      <ul>
        <div>
          <li>
            <label> Projet à supprimer</label>
            <select name="project" id="project-select" required>
              <option value="" disabled selected>
                Choisissez un projet
              </option>
              {deleteProjects.map((deleteProject) => (
                <option
                  key={deleteProject.idproject}
                  value={deleteProject.idproject}
                >
                  {deleteProject.title}
                </option>
              ))}
            </select>
          </li>
        </div>
        <li id="deleteProject">
          <button
            type="submit"
            id="deleteProject"
            name="deleteProject"
            alt="deleteProject"
            value="Delete"
            onClick={EraseProject}
          />
        </li>
      </ul>
    </div>
  );
};

export default ManageProject;
