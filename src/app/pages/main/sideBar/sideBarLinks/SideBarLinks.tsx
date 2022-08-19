import Tag from "../../../../components/shared/tag/Tag";

import classes from "./SideBarLinks.module.css";
const SideBarLinks: React.FC<{
  title: string;
  tags: string[];
}> = ({ title, tags }) => {
  return (
    <div className={classes["sideBarLinks-wrapper"]}>
      <h3>{title}</h3>
      <div className={classes["sideBarLinks_links-wrapper"]}>
        {tags.map((tag, i) => (
          <Tag key={i} name={tag} path={`/post/${tag}`} />
        ))}
      </div>
    </div>
  );
};

export default SideBarLinks;
