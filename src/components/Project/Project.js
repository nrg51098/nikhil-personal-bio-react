import React from 'react';
import './Project.scss';

class Project extends React.Component {
  render() {
    const { singleProject } = this.props;

    return (
      <div className="card custom bg-dark text-light border-0">
        <div >
          <h5 className="card-title text-uppercase">{singleProject.title}</h5>
          <p className="card-text">{singleProject.description}</p>
          <p className="card-text">{singleProject.technologiesUsed}</p>
        </div>
        <div className="card-footer">
            { singleProject.deployUrl !== ''
              ? <a class="btn btn-secondary customButton" href={singleProject.deployUrl} role="button">Demo</a>
              : '' }
        <a class="btn btn-primary customButton" href={singleProject.githubUrl} role="button">Github Link</a>
        </div>
      </div>
    );
  }
}

export default Project;
