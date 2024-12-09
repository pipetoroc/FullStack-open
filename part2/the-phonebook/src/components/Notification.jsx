import './Notification.css'

const Notification = ({ name, number }) => {
    if (number) {
        return (<div>
            <h2 className='success'>Add {name} </h2>
        </div>
        )
    } else {
        return (<div>
            <h2 className='success'>Updated {name} number</h2>
        </div>
        )
    }
}

export { Notification }