import Graveyard from "../assets/graveyard.png";
const FirstService = () => {
  return (
    <div className="section-padding flex flex-col gap-5 bg-background-950 py-6 text-text-100">
      <div className="mx-auto w-11/12 overflow-hidden rounded border-2 border-primary-400">
        <img
          className="scale-150 rounded"
          src={Graveyard}
          alt="graveyard image"
        />
      </div>
      <div className="mx-auto flex w-11/12 flex-col gap-3">
        <h2 className="text-xl">
          Graveyard locator can help you find a suitable
          <span className="font-bold italic"> resting </span>
          place
        </h2>
        <p className="text-xs">
          Data provided by the software is found and validated in realtime, that
          means incredibly low bounce rates, accurate prospect info, and data
          you trust
        </p>
        <button className="w-fit rounded-md border-2 border-primary-400 bg-secondary-600 p-2 text-sm">
          Try our software
        </button>
      </div>
    </div>
  );
};

export default FirstService;
