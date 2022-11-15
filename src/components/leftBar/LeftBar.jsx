import './leftBar.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {
  
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="https://picsum.photos/50/50" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar