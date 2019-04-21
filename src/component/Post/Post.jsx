import React from 'react';

const Post = (props) => {
  return(
    <div className="box">

        <img src="http://placeimg.com/200/150/tech" alt="Technology" />
        <div className="content"> 
          <p className="title" onClick={() => props.goDetail(props.data.id)} >{props.data.title}</p>
          <p className="desc">{props.data.body}</p> 
          <button className="button-update" onClick={() => props.update(props.data)}>Update</button>
          <button className="button-remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>

      </div>
  )
}

export default Post;