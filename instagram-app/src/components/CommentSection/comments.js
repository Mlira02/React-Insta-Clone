import React from 'react';
import './comments.css';

class Comments extends React.Component {
state = {
    comments: this.props.comments, 
    newComment: ''
}

addNewComment = event => {
    event.preventDefault();
    const newCom = {
        username: 'React_Wiz',
        text: this.state.newComment,
    }
    this.setState({comments: [...this.state.comments, newCom], newComment: ''})
}

changeHandler = event => {
    this.setState({
        [event.target.name] : event.target.value
    })
}


    render() { 
       return(
           <div>
               {this.state.comments.map(comment => {
                   return (
                       <>
                       <h3>{comment.username}</h3>
                       <p>{comment.text}</p>
                       </>
                   )
                })}
                <p className='timeStamp'>{this.props.timestamp}</p>
               <form onSubmit={this.addNewComment}>
                <input type='text'
                    name='newComment'
                    value={this.state.newComment}
                    placeholder='Add a comment...'
                    onChange={this.changeHandler}
                    />
                    </form>
           </div>
       )
}}
 
export default Comments;
