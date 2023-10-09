import Form from "./Form";
import History from "./History";
import Result from "./Result";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <Form />
        <History />
        <Result />
      </div>
    </section>
  );
};

export default Demo;
