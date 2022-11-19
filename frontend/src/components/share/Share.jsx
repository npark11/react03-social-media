import "./share.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios';

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState('');
  const queryClient = useQueryClient() ;

  const mutation = useMutation((newPost) => {
    return makeRequest.post('/posts', newPost)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  });

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData);
      return res.data
    } catch (err) {
      console.log(err)
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if(file) imgUrl = await upload();
      mutation.mutate({desc: input, img: imgUrl});
      setInput("");
      setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input
            type="text"
            name="desc"
            placeholder={`What's on your mind ${currentUser.name}?`}
            onChange={handleChange}
            value={input}
          />
          </div>
          <div className="right">
            {file && <img src={URL.createObjectURL(file)} alt='' />}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <FontAwesomeIcon icon={faFolderPlus} size="lg" color="#ff9cbd" width="1rem" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <FontAwesomeIcon icon={faMapLocationDot} size="lg" color="#ff9cbd" width="1rem" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faUserPlus} size="lg" color="#ff9cbd" width="1rem" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;