import { copy } from "../assets";

const History = () => {
  return [...Array(3)].map((item) => (
    <div key={item} className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      <div className="link_card">
        <div className="copy_btn">
          <img
            src={copy}
            alt={"copy_icon"}
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
        <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
          https://amirvahedix.github.io
        </p>
      </div>
    </div>
  ));
};

export default History;
