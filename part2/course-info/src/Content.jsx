import Part from "./Part"

function Content(props) {
  console.log(props, 'content');

  return (
    <ul>
      {
        props.parts.map(part => <Part part={part.name} exercise={part.exercises} key={part.id} />)
      }
    </ul>
  )
}

export default Content