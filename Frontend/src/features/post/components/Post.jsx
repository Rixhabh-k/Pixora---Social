import "../shared/global.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const Post = ({ user, post, loading }) => {
  return (
    <div className="post">
      {/* Header */}
      <div className="post-header">
  <div className="user">
    <img
      src={user.profile_Image}
      alt="user"
    />

    <div className="user-info">
      <h4>{user.username}</h4>
    </div>
  </div>

  <div className="header-actions">
    <button className="follow-btn">Follow</button>

    <button className="icon-btn">
      <FiMoreHorizontal />
    </button>
  </div>
</div>

      {/* Post Image */}
      <div className="post-image">
        <img
          src={post.imgUrl}
          alt="post"
        />
      </div>

      {/* Actions */}
      <div className="post-actions">
        <div className="left">
          <button className="icon-btn">
            <FaRegHeart />
          </button>

          <button className="icon-btn">
            <FaRegComment />
          </button>

          <button className="icon-btn">
            <LuSend />
          </button>
        </div>

        <button className="icon-btn">
          <FaRegBookmark />
        </button>
      </div>

      {/* Caption */}
      <div className="post-caption">
        <span className="username">{user.username}</span>
        <p>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default Post;