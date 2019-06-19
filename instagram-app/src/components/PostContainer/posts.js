import React from 'react';
import './posts.css';
//import Comments from '../CommentSection/comments';

function Posts (props) {
    console.log(props);
    return(
        <>
            {props.posts.map(posts => (
                <div className="post"> 
                    <div className="postHead">
                        <img src={posts.thumbnailUrl} alt='User profile' className="userImg" />
                        <h3 className="userN">{posts.username}</h3>
                    </div>
                        <img src={posts.imageUrl}></img>
                </div>
            ))}
        </>
    );
}

export default Posts ;