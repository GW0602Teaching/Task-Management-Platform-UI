import React from 'react';
import ProjectItem from './ProjectItem';

export default function ProjectList(props) {
  const { data } = props;

  return (
    <>
      {data.map((project) => (
        <ProjectItem project={project} />
      ))}
    </>
  );
}
