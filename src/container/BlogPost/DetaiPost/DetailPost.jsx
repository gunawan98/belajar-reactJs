import React , {Component} from 'react';
import axios from 'axios';

class DetailPost extends Component {
  state = {
    post: {
      title: '',
      body: ''
    }
  }

  componentDidMount = () => {
    let id = this.props.match.params.postId;
    axios.get('http://localhost:3004/posts/'+id)
    .then((res)=> {
      let post = res.data;
      this.setState({ 
        post: {
          title: post.title,
          body: post.body
        }
      })      
    })
  }

  render() {
    return(
      <div className="content">
        <br />
        <p className="title">{this.state.post.title}</p>
        <p className="desc">{this.state.post.body}</p>
      </div>
    )
  }
}

export default DetailPost;