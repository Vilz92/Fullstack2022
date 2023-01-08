const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
}

const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
}

const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div style={ type === 'success' ? successStyle : errorStyle }>
        {message}
        </div>
    )
}

export default Notification