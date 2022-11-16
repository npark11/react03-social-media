import './profile.scss';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img 
          src="https://picsum.photos/300" 
          alt=""
          className="cover"
        />
        <img 
          src="https://picsum.photos/id/399/300" 
          alt=""
          className="profilePic"
          />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href='http://facebook.com'>
              <InstagramIcon fontSize="large" />
            </a>
            <a href='http://facebook.com'>
              <TwitterIcon fontSize="large" />
            </a>
            <a href='http://facebook.com'>
              <LinkedInIcon fontSize="large" />
            </a>
            <a href='http://facebook.com'>
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Olivia Rodrigo</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Canada</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lemon.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
          <EmailOutlinedIcon />
          <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile