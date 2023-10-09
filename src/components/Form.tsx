import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Axios } from "../lib/axios";

import { linkIcon } from "../assets";

const Form = () => {
  const [link, setLink] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: async () => {
      return await Axios.get("/summarize", {
        params: {
          url: link,
          length: "3",
        },
      }).then((res) => res.data);
    },
  });

  const formSubmitHandler = (e: FormEvent) => {
    console.log("ok");

    e.preventDefault();
    mutate();
  };

  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={formSubmitHandler}
    >
      <img
        src={linkIcon}
        alt="link-icon"
        className="absolute left-0 my-2 ml-3 w-5"
      />
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste the article link"
        className="url_input peer"
        required
      />
      <button
        type="submit"
        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
      >
        <p>↵</p>
      </button>
    </form>
  );
};

export default Form;
