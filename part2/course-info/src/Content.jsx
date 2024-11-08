import Part from "./Part"
import Total from "./Total"

function Content(props) {
  console.log(props, 'content');

  return (
    <>
      <ul>
        {
          props.parts.map(part => <Part part={part.name} exercise={part.exercises} key={part.id} />)
        }
      </ul>
      <Total part={props.parts} />
    </>
  )
}

export default Content