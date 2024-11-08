
function Total(props) {
  console.log(props, 'exercises');

  return (
    <p>
      Number of exercises {Number(props.part.reduce((sum, part) => sum + part.exercises, 0))}
    </p>
  )
}

export default Total