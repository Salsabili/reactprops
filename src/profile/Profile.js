import React from 'react'
import PropTypes from 'prop-types';

export default function Profile(props) {
    const handle=()=>{
        alert(props.Fullname)
    }
    return (
        <div onClick={handle} style={{display:"inline"}}>
            <p>
                {props.Fullname} 
            </p>
            <p>
                {props.bio} 
            </p>
            <p>
                {props.profession}
            </p>
            <p>
                {props.children}
            </p>
        </div>
    )
}

Profile.propTypes = {
  Fullname: PropTypes.string
};

Profile.defaultProps={
    Fullname:'default'
}