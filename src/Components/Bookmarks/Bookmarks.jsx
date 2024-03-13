import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 ml-5 p-5 rounded-lg bg-gray-200">
      <div>
        <h2 className="text-2xl text-center">Reading Time: {readingTime}</h2>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blog: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
