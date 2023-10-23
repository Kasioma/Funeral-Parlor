import Hamburger from "./hamburger";
import skull from "../assets/skull.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavigation = () => {
    setOpen(!open);
  };

  const navigationClass = !open
    ? "scale-0 h-0 transition-all duration-500"
    : "scale-1 h-60 transition-all duration-500";

  return (
    <header className="section-padding flex flex-col items-center bg-background-950 py-3 text-lg text-text-100">
      <div className="flex w-full justify-between text-2xl">
        <button
          className="rounded-full bg-primary-600 p-2"
          aria-hidden
          onClick={handleNavigation}
        >
          <Hamburger />
        </button>
        <div className="flex items-center justify-center gap-2 font-semibold">
          <img
            className="h-[1.5em]"
            src={skull}
            alt="logo"
          />
          <h2>Six Feet Under</h2>
        </div>
      </div>
      <div className={navigationClass}>
        <nav className="my-3 flex justify-center">
          <ul className="my-3 flex flex-col items-center gap-5">
            <li>About</li>
            <li>How it works</li>
            <li>Resources</li>
          </ul>
        </nav>
        <button className="button-padding mb-4 w-fit rounded-md bg-primary-600 transition-none">
          Watch Demo
        </button>
      </div>
    </header>
  );
};

export default Header;
