const Notification = (props) => {
    if (props.message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {props.message}
      </div>
    )
  }

  export default Notification