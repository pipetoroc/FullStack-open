import Part from "./Part"

function Content(props) {
  return (
    <div>
        <Part part = {props.course.parts[0].name} exercise = {props.course.parts[0].exercises}/>
        <Part part = {props.course.parts[1].name} exercise = {props.course.parts[1].exercises}/>
        <Part part = {props.course.parts[2].name} exercise = {props.course.parts[2].exercises}/>
    </div>
)
}

export default Content