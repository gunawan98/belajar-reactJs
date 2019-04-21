//libraries
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Card from './component/Card/Card';
import Child from './container/Child/Child';
import BlogPost from './container/BlogPost/BlogPost';
import DetailPost from './container/BlogPost/DetaiPost/DetailPost';

//style
import './App.css';

class App extends Component {
    
  render() {
    return (
      <Router>
        <div className="navigation">
          <Link to="/">BlogPost</Link>
          <Link to="/card">Card</Link>
          <Link to="/count">Count</Link>
        </div>
       
        <Route path="/" exact component={BlogPost} />
        <Route path="/detail-post/:postId" component={DetailPost} />
        <Route path="/card" component={Card} />
        <Route path="/count" component={Child} />
      </Router>

    );
  }
}

export default App;
