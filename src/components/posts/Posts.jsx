import './posts.scss';
import Post from '../post/Post';

function Posts() {

  // Temporary
  const posts = [
    {
      id: 1,
      name: "Olivia Rodrigo",
      userId: 1,
      profilePic: "https://picsum.photos/id/399/100",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae.",
      img: "https://picsum.photos/id/195/500"
    },
    {
      id: 2,
      name: "Olivia Rodrigo",
      userId: 2,
      profilePic: "https://picsum.photos/id/399/100",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas tempore totam assumenda.",
      img: "https://picsum.photos/id/112/500"
    },
  ];

  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts;