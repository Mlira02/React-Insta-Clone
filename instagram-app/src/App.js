import React from 'react';
import './App.css';
import dummyData from './dummy-data';
//import Comments from './components/CommentSection/comments';
import Posts from './components/PostContainer/posts';
import Search from './components/SearchBar/search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
    console.log(this.state);

  }

// componentDidMount() {
//   this.setState({
//     data: dummyData
//   })
// }



  render() {
      return(
        <div className="App">
          <Search />
          <Posts posts={this.state.data} />
          <h1>This is working properly</h1>
        </div>
          )
}
};

export default App;
