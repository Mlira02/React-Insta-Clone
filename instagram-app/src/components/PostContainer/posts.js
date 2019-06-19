import React from 'react';
import './posts.css';
import Comments from '../CommentSection/comments';
import { FaRegHeart } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';


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
                    <div className="bottomIcon">
                        <a href="#"><FaRegHeart /></a>
                        <a href="#"><FiMessageCircle /></a>
                    </div>
                    {posts.likes} likes
                    <Comments
                        comments={posts.comments}
                        timeStamp={posts.timeStamp}
                        />
                </div>
            ))}
        </>
    );
}

export default Posts ;