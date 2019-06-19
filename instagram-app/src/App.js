import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import Posts from './components/PostContainer/posts';
import Search from './components/SearchBar/search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    console.log(this.state);

  }

 componentDidMount() {
   this.setState({
     data: dummyData
   })
 }



  render() {
    console.log('rendering',this.state.data)
      return(
        <div className="App">
          <Search />
          <Posts posts={this.state.data} />
        </div>
          )
}
};

export default App;
