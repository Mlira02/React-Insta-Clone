import React from 'react';
import './posts.css';
import Comments from '../CommentSection/comments';
import { FaRegHeart } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { PostContainer, BottomIcons, Image } from '../styledComponents';


function Posts (props) {
console.log(props)




    return(
        <>
            {props.posts.map(posts => (
                <PostContainer> 
                    <div className="postHead">
                        <img src={posts.thumbnailUrl} alt='User profile' className="userImg" />
                        <h3 className="userN">{posts.username}</h3>
                    </div>
                        <Image src={posts.imageUrl}></Image>
                        <BottomIcons href="#"><FaRegHeart /></BottomIcons>
                        <BottomIcons href="#"><FiMessageCircle /></BottomIcons>
                        <div>
                            {posts.likes} likes
                        </div>
                    <Comments
                        className="comments"
                        comments={posts.comments}
                        timeStamp={posts.timeStamp}
                        />
                </PostContainer>
            ))}
        </>
    );
}

export default Posts ;