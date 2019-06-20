import React from 'react';
import './App.css';
import styled from 'styled-components';
import dummyData from './dummy-data';
import Posts from './components/PostContainer/posts';
import Search from './components/SearchBar/search';
import { PostContainer } from './components/styledComponents';


class App extends React.Component {
  state = {
    data: [],
  };
  
  
  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }
  
  
  
  render() {
    console.log(this.state.data);
      return(
        <div className="App">
          <Search />
            <Posts posts={this.state.data} />
        </div>
          )
}
};

export default App;
