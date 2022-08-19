import Blogpost from "./blogpost/Blogpost";
import classes from "./MainBar.module.css";

import { Post } from "../MainPage";

const MainBar: React.FC<{ posts: Post[] }> = (props) => {
  return (
    <div style={{ flexBasis: "75%" }}>
      <div className={classes["mainBar-blogpost__container"]}>
        {props.posts.map((post, i) => {
          return (
            <Blogpost
              key={i}
              title={post.title}
              author={post.author}
              content={post.content}
              tags={post.tags}
              date={post.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBar;
