import React from 'react'

const User = (props) => {
    const { imgURL, name, age } = props;
    return (
        <div className="person">
            <img src={imgURL} alt="error" />
            <div className="info">
              <h4>{name}</h4>
              <h5>{age}</h5>
            </div>
          </div>
    )
}

export default User
