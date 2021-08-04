import React from 'react';

import ProjectsData from '../CourseComponent/projects';

class SingleProject extends React.Component {
    render () {
        return (
            <div className="info-project-wrapper">
                <h2>{this.props.title}</h2>
                <span className="show-for-large">{this.props.by}</span>
                <ul className="project-links show-for-large">
                    <li>{this.props.links}</li>
                </ul>
                <div className="info-project">
                    <p>VIEW NOW</p>
                </div>
            </div>
        )
    }
}

class SingleProjectWrapper extends React.Component {
    render () {
        var projects = [];
        this.props.projects.forEach(function(project, i){
            projects.push(<SingleProject title={project.title}  
                             by={project.by}
                             links={projects.links}
                             key={i} />);
        });
        return (
            <div className="single-project project-4">
                {projects}
            </div>
        )
    }
}

class Projects extends React.Component {
  render () {
    return (
        <section>
            <SingleProjectWrapper projects={ProjectsData} />
        </section>
    );
  }
}

export default Projects;