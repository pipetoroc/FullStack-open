import Part from "./Part"

function Content(props) {
  console.log(props, 'content');

  return (
    <div>
      {
        props.parts.map(part => <li key={part.id}> {part.name}: {part.exercises} </li>)
      }
    </div>
  )
}

export default Content