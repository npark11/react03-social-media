import { useContext } from 'react';
import AuthContext from '../../context/authContext';
import './stories.scss';

function Stories() {

  const { currentUser } = useContext(AuthContext);

  // TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Olivia Rodrigo",
      img: "https://picsum.photos/id/320/300",
    },
    {
      id: 2,
      name: "Olivia Rodrigo",
      img: "https://picsum.photos/id/320/300",
    },
    {
      id: 3,
      name: "Olivia Rodrigo",
      img: "https://picsum.photos/id/320/300",
    },
    {
      id: 4,
      name: "Olivia Rodrigo",
      img: "https://picsum.photos/id/320/300",
    }
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;