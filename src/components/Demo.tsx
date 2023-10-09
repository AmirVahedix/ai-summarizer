import Form from "./Form";
import History from "./History";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <Form />
        <History />
      </div>
    </section>
  );
};

export default Demo;
