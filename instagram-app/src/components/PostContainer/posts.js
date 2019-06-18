import React from 'react';
import './posts.css';
import Comments from '../CommentSection/comments';

function Posts (props) {
    console.log(props)
    return(
        <>
            {props.data.map(posts => (
                <div> 
                    <img src="" alt=""></img>
                </div>
            ))}
        </>
    )
}

export default Posts ;