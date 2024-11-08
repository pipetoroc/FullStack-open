
function Header(props) {
  console.log(props, 'header');

  return (
    <h1> {props.title} </h1>
  )
}

export default Header