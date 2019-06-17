import React from 'react';
import './App.css';
//import dummyData from './dummy-data';
import Comments from './components/CommentSection/comments';
import Posts from './components/PostContainer/posts';
import Search from './components/SearchBar/search';


function App() {
  return (
    <div className="App">
      <Search />
      <h1>This is working properly</h1>
    </div>
  );
}

export default App;
