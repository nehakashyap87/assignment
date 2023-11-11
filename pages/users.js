import React from 'react';
import ContentBar from './component/Content';
const Users = (props) => {
    return (
        <>
            <ContentBar user={props.user} />
        </>
    )
}

export default Users