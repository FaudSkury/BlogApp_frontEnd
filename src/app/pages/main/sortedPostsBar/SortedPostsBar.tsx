import MainBar from "../mainBar/MainBar";
import { useParams } from "react-router-dom";
import { Post } from "../MainPage";

import classes from "./SportedPostsBar.module.css";

const SortedPostsBar: React.FC<{ posts: Post[] }> = (props) => {
  const params = useParams();
  const { authorName, postTitle } = params;

  let Posts: Post[] = [];
  if (authorName) {
    Posts = props.posts.filter((post) => {
      return post.author === authorName;
    });
  }
  if (postTitle) {
    props.posts.forEach((post) => {
      if (post.tags.includes(postTitle!)) {
        Posts.push(post);
      }
    });
  }

  return (
    <div
      className={classes["sortedPostsBar-container"]}
      style={{ flexBasis: "75%" }}
    >
      <div className={classes["sortedPostsBar-author-info__wrapper"]}>
        <h3>
          {authorName ? "Posts created by" : `Sorted by tag: ${postTitle}`}
        </h3>
        <h2> {authorName}</h2>
        <hr />
      </div>
      <div className={classes["sortedPostsBar-posts__wrapper"]}>
        <MainBar posts={Posts} />
      </div>
    </div>
  );
};

export default SortedPostsBar;
