import React from 'react'
import Skills from './Skills'

const SideNav = () => {
  return (
    <nav className='sidenav'>
      <Skills data={data} setDisplayData={setDisplayData}/>
    </nav>
  )
}

export default SideNav