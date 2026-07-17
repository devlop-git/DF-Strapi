import React from 'react'
import SectionRenderer from './SectionRenderer'

const HomePage = ({sections}) => {
  return (
    <>
     {sections.map(section => (
                <SectionRenderer
                    key={`${section.__component}-${section.id}`}
                    section={section}
                />
            ))}
            </>
  )
}

export default HomePage