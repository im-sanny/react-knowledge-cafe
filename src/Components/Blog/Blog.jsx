import PropTypes from "prop-types";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="my-10 space-y-2">
      <img
        className="w-full mb-5 rounded-lg"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-5 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <h3>{posted_date}</h3>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>

          <button onClick={() => handleAddToBookmarks(blog)} className="ml-2">
            <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="mt-2">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-500 font-medium underline"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
