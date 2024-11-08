import React from 'react'
import Header from './Header'
import Content from './Content'

function Course(props) {

    return (
        <>
            <Header title={props.course.name} />
            <Content parts={props.course.parts} />
        </>
    )
}

export default Course