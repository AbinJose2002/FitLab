import React from 'react'

const ContentCard = ({ content }) => {
  return (
    <div className="col-sm-12 col-lg-4 px-5 container py-5 lab-card">
      {content}
    </div>
  )
}

export default ContentCard