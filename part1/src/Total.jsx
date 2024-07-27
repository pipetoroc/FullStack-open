
function Total(props) {
    console.log(props, 'parts')

  return (
    <p>Number of exercises {Number(props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)}</p>
  )
}

export default Total