import React from "react";

const Header = (props) => {
    return (
        <h2>{props.course}</h2>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    return (
        <>
            {props.parts.map(part => <Part key={part.id} exercise={part.exercises} />)}
        </>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course

