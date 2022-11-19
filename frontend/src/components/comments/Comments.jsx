import './comments.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({postId}) => {
  const {currentUser} = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const queryClient = useQueryClient() ;

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    }),
  );

  const mutation = useMutation((comment) => {
    return makeRequest.post('/comments', comment)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({desc, postId});
    setDesc("");
  };

  

  
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input 
          type="text" 
          placeholder="write a comment"
          onChange={(e) => setDesc(e.target.value)} 
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {
        error
        ? "something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  )
}

export default Comments