import React, { useState } from "react";
import { useAppSelector } from "../../../store/hooks";

import Button from "../../../components/shared/button/Button";
import Input from "../../../components/shared/input/Input";

import classes from "./WriteBar.module.css";

export type Post = {
  title: string;
  author: string;
  content: string;
  tags: string;
};

const WriteBar = () => {
  const authState = useAppSelector((state) => state.auth);

  const [blogPost, setBlogPost] = useState<Post>({
    author: authState.userName as string,
    title: "",
    content: "",
    tags: "string",
  });

  const handleInputs = (value: string, id: string) => {
    setBlogPost((prevValues) => {
      return { ...prevValues, [id]: value };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/blogPost", {
        method: "POST",
        body: JSON.stringify(blogPost),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ flexBasis: "75%" }} className={classes["writeBar-container"]}>
      <form
        onSubmit={handleSubmit}
        className={classes["writeBar-form__wrapper"]}
      >
        <Input
          onChange={handleInputs}
          name="title"
          type="text"
          className="write"
          labeled
        />
        <Input
          onChange={handleInputs}
          as="textarea"
          name="content"
          className="write"
          labeled
        />
        <Input
          onChange={handleInputs}
          name="tags"
          type="text"
          className="write"
          labeled
        />
        <Button className="write">Submit</Button>
      </form>
    </div>
  );
};

export default WriteBar;
