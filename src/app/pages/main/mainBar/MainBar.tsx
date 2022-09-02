import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainActions } from "../../../store/main-slice";
import { useHttp, responseData } from "../../../hooks/use-http";

import Blogpost from "./blogpost/Blogpost";

import classes from "./MainBar.module.css";

import { Post } from "../MainPage";
interface getBlogpostsRequestData extends responseData {}
const MainBar = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const dispatch = useAppDispatch();
  const main = useAppSelector((state) => state.main);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    sendRequest(
      { url: "http://localhost:4000/blogPost/5" },

      (data: getBlogpostsRequestData) => {
        dispatch(mainActions.addPosts(data.blogPostsFound));
      },
      signal
    );
    return () => {
      abortController.abort();
    };
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
