import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './comments.scss';

const Comments = () => {
  const {currentUser} = useContext(AuthContext);

  // Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore libero dolor soluta molestiae quibusdam cum culpa!",
      name: "Olivia Rodrigo",
      userId: 1,
      profilePic: "https://picsum.photos/id/399/100"
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore libero dolor soluta molestiae doloribus ullam omnis nisi quibusdam cum culpa!",
      name: "Olivia Rodrigo",
      userId: 2,
      profilePic: "https://picsum.photos/id/399/100"
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments