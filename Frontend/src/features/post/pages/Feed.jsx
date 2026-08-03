import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "../shared/global.scss";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  return (
    <div className="feed-main-container">
      <NavBar />
      <div className="feed-warpper">
        {feed.map((post) => {
          return (
            <Post
            key={post._id}   
              user={post.user}
              post={post}
              loading={loading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
