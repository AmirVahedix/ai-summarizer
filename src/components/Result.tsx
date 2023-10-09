const Result = () => {
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-satoshi font-bold text-gray-600 text-xl">
          Article <span className="blue_gradient">Summary</span>
        </h2>
        <div className="summary_box">
          <p className="font-inter font-medium text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
