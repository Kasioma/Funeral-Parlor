import Tomb from "../assets/tomb.png";
const SecondService = () => {
  return (
    <div className="section-padding flex flex-col gap-5 bg-background-950 py-6 text-text-100">
      <div className="mx-auto w-11/12 overflow-hidden rounded border-2 border-accent-800">
        <img
          className="scale-150 rounded"
          src={Tomb}
          alt="tomb image"
        />
      </div>
      <div className="mx-auto flex w-11/12 flex-col gap-3">
        <h2 className="text-xl">
          Pick your tomb design and we'll make it happen
        </h2>
        <p className="text-xs">
          Our company provides you with a varied set of tomb designs. You can
          chose any text, images even materials and ornaments.
        </p>
        <button className="w-fit rounded-md border-2 border-primary-400 bg-secondary-600 p-2 text-sm">
          See our designs
        </button>
      </div>
    </div>
  );
};

export default SecondService;
