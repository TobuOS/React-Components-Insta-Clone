import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  

  return (
    <div>
      {comments.map( data => (<Comment key={data.id} comment={data} />))}
    </div>
  );
};

export default Comments;
