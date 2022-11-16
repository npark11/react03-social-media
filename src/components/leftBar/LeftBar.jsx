import './leftBar.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";




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
            <FontAwesomeIcon icon={faHandHoldingHeart} size="xl" color="#ff9cbd" width="2rem" />
            <span>Friends</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faUsersLine} size="xl" color="#d4abff" width="2rem" />
            <span>Groups</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faStore} size="xl" color="#abd5ff" width="2rem" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faClapperboard} size="xl" color="#8c57ff" width="2rem" />
            <span>Watch</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faStopwatch} size="xl" color="#10d85d" width="2rem" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
          <FontAwesomeIcon icon={faCalendarDays} size="xl" color="#67d6fa" width="2rem" />
            <span>Events</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faGamepad} size="xl" color="#d4abff" width="2rem" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faImages} size="xl" color="#ff9d52" width="2rem" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faVideoCamera} size="xl" color="#6a4bda" width="2rem" />
            <span>Videos</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="#ff84e6" width="2rem" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <FontAwesomeIcon icon={faCubes} size="xl" color="#ff57f4" width="2rem" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faChessBoard} size="xl" color="#00df65" width="2rem" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faLandmark} size="xl" color="#ff3747" width="2rem" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar