import React from 'react'
import Projects from './Projects'
import { useLocation } from 'react-router-dom'

function AllProjects() {
  const AllProjectPage = useLocation();
  return (
    <>
    {AllProjectPage.path !== '/projects' && (<div style={{marginBottom:'60px'}}><Projects /></div>)}
    </>
  )
}

export default AllProjects