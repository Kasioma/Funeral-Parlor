import hootow from "../assets/hootow.png";
import { Plus } from "lucide-react";
import { Scale } from "lucide-react";
import { Twitter } from "lucide-react";
import { Sparkle } from "lucide-react";
const Hero = () => {
  return (
    <div className="section-padding bg-background-950 py-7 text-text-50">
      <div className="flex w-4/5 flex-col gap-4">
        <h1 className="m-auto items-start text-3xl">
          A very normal Funeral Parlor to clean it up!
        </h1>
        <p className="text-sm">
          Don't worry, we'll handle all the clean up, both for you and your
          enemies
        </p>
      </div>
      <div className="relative mx-auto my-5 w-10/12 rounded">
        <button className="button-padding absolute z-20 mb-4 w-fit -translate-x-[20%] -translate-y-[20%] rounded-md border-2 border-primary-600 bg-primary-400 transition-none">
          Check our offer
        </button>
        <div className="relative z-10 overflow-hidden rounded-lg border-2 border-secondary-700">
          <div className="h-[25%] rounded-t bg-primary-600 px-3 pb-2 pt-5">
            <div className="h-2 w-2/5 rounded bg-secondary-400"></div>
            <div className="mt-2 h-2 w-1/5 rounded bg-secondary-500"></div>
          </div>
          <div className="grid h-1/2 w-[125%] -translate-x-[10%]  grid-cols-3 gap-2 bg-primary-600 p-2 [&>*]:rounded">
            <div className="mx-1 my-2 border-2 border-secondary-400 bg-gradient-to-tr from-accent-100 to-secondary-600"></div>
            <img
              className="rounded border-2 border-secondary-400"
              src={hootow}
            ></img>
            <div className="mx-1 my-2 border-2 border-secondary-400 bg-gradient-to-tr from-accent-100 to-secondary-600"></div>
          </div>
          <div className="h-[25%] rounded-b bg-primary-600 pb-5 pt-2">
            <div className=" mx-auto flex w-fit items-center justify-center rounded-full bg-secondary-400 p-1">
              <Plus />
            </div>
            <div className="mx-auto mt-2 h-2 w-2/5 rounded bg-secondary-400"></div>
          </div>
        </div>
        <div className="absolute top-0 z-0 h-56 w-52 -translate-x-[8%] translate-y-[35%] rounded border-2 border-secondary-300 bg-accent-100 p-2">
          <div className="my-1 h-3 rounded-full bg-secondary-200"></div>
          <div className="my-2 h-3 rounded-full bg-secondary-300"></div>
        </div>
        <div className="absolute bottom-16 z-20 h-16 w-2/5 -translate-x-[40%] translate-y-[5%] rounded border-2 border-secondary-300 bg-secondary-600 p-2">
          <div className="my-1 h-2 rounded-full bg-secondary-200"></div>
          <div className="rounded-ful my-2 mt-3 flex h-3 items-center justify-center gap-1">
            <div className="rounded bg-secondary-700">
              <Plus className="h-4 w-4" />
            </div>
            <div className="flex w-4/5 justify-center rounded-full bg-secondary-700 text-sm font-thin">
              87%
            </div>
            <div className="rounded bg-secondary-700">
              <Plus className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 z-20 h-16 w-20 translate-x-[215%] translate-y-[35%] rounded border-2 border-primary-600 bg-primary-400 p-2">
          <h2 className="font-bold text-primary-700">87%</h2>
          <div className="my-1 h-2 rounded-full bg-primary-600"></div>
        </div>
        <div className="absolute right-0 top-0 z-20 flex translate-x-[30%] translate-y-[-30%] gap-1">
          <Scale className="h-8 w-8 rounded-full border-2 border-black bg-accent-500 p-1 text-black" />
          <Twitter className="h-8 w-8 rounded-full border-2 border-black bg-accent-500 p-1 text-black" />
          <Sparkle className="h-8 w-8 rounded-full border-2 border-black bg-accent-500 p-1 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
