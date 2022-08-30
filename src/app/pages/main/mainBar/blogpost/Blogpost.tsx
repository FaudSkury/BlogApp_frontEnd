import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Tag from "../../../../components/shared/tag/Tag";
import classes from "./Blogpost.module.css";

const Blogpost: React.FC<{
  title: string;
  author: string;
  content: string;
  tags: string[];
  date: Date | string;
}> = (props) => {
  
  const [showMore, setShowMore] = useState(false);

  const params = useParams();

  const paragraphs = props.content.split("\n");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={classes["blogpost-container"]}>
      <h2>
        <span>{props.title + " "}</span>
        <span>
          {params.authorName ? (
            `by ${props.author}`
          ) : (
            <Link className="link" to={`/author/${props.author}`}>
              {`by ${props.author}`}
            </Link>
          )}
        </span>
      </h2>
      <div className={classes["blogspot-content__wrapper"]}>
        {!showMore ? (
          <p>{paragraphs[0]}</p>
        ) : (
          paragraphs.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })
        )}
        <h5 onClick={handleShowMore}>
          {!showMore ? "Continue Reading..." : "Read Less"}
        </h5>
      </div>
      <div className={classes["blogpost-footer__wrapper"]}>
        <p>{"Posted: " + props.date} </p>
        {props.tags.map((tag, i) => {
          return <Tag key={i} name={tag} path={`/post/${tag}`} />;
        })}
      </div>
    </div>
  );
};

export default Blogpost;
