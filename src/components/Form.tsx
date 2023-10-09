import { linkIcon } from "../assets";

const Form = () => {
  return (
    <form className="relative flex justify-center items-center">
      <img
        src={linkIcon}
        alt="link-icon"
        className="absolute left-0 my-2 ml-3 w-5"
      />

      <input
        type="url"
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
