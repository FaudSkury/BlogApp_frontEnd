import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainActions } from "../../../store/main-slice";
import Blogpost from "./blogpost/Blogpost";
import classes from "./MainBar.module.css";

import { Post } from "../MainPage";

const MainBar = () => {
  const dispatch = useAppDispatch();
  const main = useAppSelector((state) => state.main);
  console.log(main.posts);
  type responseObj = {
    message: string;
    blogPostsFound: Post[];
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/blogPost/5");
        if (response.ok) {
          const data: responseObj = await response.json();
          dispatch(mainActions.addPosts(data.blogPostsFound));
        }
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div style={{ flexBasis: "75%" }}>
      <div className={classes["mainBar-blogpost__container"]}>
        {main.posts.map((post, i) => {
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
