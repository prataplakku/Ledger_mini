import React from 'react'
import '../styles/contentHeader.css'

const ContentHeader = () => {
  return (
    <div className='content-header'>
        <h2>Overview</h2>
        <select>
            <option value = 'Jan2025'>Jan 2025</option>
            <option value="Dec2024">Dec 2024</option>
            <option value="Nov2024">Nov 2024</option>
        </select>
        <select >
            <option value="Entity"> Entity </option>
        </select>
    </div>
  )
}

export default ContentHeader