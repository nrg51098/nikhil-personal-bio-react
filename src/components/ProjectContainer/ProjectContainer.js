import React from 'react';

import Project from '../Project/Project';

import ProjectsData from '../../helpers/data/projectsData';

class ProjectContainer extends React.Component {
  state = {
    Projects: [],
  }

  componentDidMount() {
    this.setState({ Projects: ProjectsData.getProjects() });
  }

  render() {
    const { Projects } = this.state;

    const ProjectCard = Projects.map((singleProject) => <Project key={singleProject.id} singleProject={singleProject} />);

    return (
      <div>
        <div className="card-columns">
          {ProjectCard}
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
