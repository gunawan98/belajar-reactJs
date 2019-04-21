import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: '',
      body: '',
    },
    isUpdate: false
  }
  
  getPostAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    .then((result)=> {
      this.setState({
        post: result.data
      })
    })
  }

  postDataToAPI = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost)
    .then((res) => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          userId: 1,
          id: 1,
          title: '',
          body: '',
        },
        isUpdate: false
      })
    }, (err) => {
      console.log('Error : ', err);
    })
  }

  putDataToAPI = () => {
    const key = this.state.formBlogPost.id;
    axios.put('http://localhost:3004/posts/' + key, this.state.formBlogPost)
    .then((res) => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          userId: 1,
          id: 1,
          title: '',
          body: '',
        },
        isUpdate: false
      })
    })
    
  }

  handleRemove = (data) => {
    // const id = data;
    // const url = 'http://localhost:3004/posts/';
    axios.delete('http://localhost:3004/posts/' + data)
    .then((res) => {
      this.getPostAPI()
    })
     
  } 

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  handleFormChange = (event) => {
    let formBlogPostNew = {...this.state.formBlogPost};
    let timestamp = new Date().getTime();
    if(!this.state.isUpdate){
      formBlogPostNew['id'] = timestamp;    
    }    
    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew
    })
    
  }

  handleSubmit = () => {
    if(this.state.isUpdate){
      this.putDataToAPI();
    }else{
      this.postDataToAPI();
    }
    
  }

  handleDetail = (id) => {
    this.props.history.push('/detail-post/'+id);
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       post: json
    //     })
    // })
    this.getPostAPI();

  }

  render() {
    return(
      <Fragment>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea> 
          <button className="button-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>

        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost;