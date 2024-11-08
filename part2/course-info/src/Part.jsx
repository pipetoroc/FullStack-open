function Part(props) {
    console.log(props, 'part');

    return (
        <li>
            {props.part} {props.exercise}
        </li>
    )
}

export default Part