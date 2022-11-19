import './posts.scss';
import Post from '../post/Post';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default Posts;