import { ArrowLeftCircle, ArrowRightCircle, Star } from "lucide-react";
import Pfp from "../assets/basic.png";
import {
  PointerEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
const Reviews = () => {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints;
  let touchStart = 0;
  let touchEnd = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const gridRef = useRef<HTMLUListElement>(null);
  const reviewsData = [
    {
      text: "Sensitive and professional staff. Handled our loved one's arrangements with utmost care and respect.",
      stars: 4,
      name: "Jerry",
    },
    {
      text: "Impeccable attention to detail. Every aspect of the service was executed flawlessly.",
      stars: 3,
      name: "Juri",
    },
    {
      text: "Compassionate and understanding team. Made a difficult time a bit easier with their support.",
      stars: 5,
      name: "Jedi",
    },
    {
      text: "My enemies stood no chance in front of the manager.",
      stars: 4.5,
      name: "Joti",
    },
  ];

  useEffect(() => {
    if (scrollDirection === 0) return;
    gridRef.current;
    const gridContainer = document.querySelector(
      ".grid-container",
    ) as HTMLElement;
    setTimeout(() => {
      gridContainer.style.transition = "";
      gridContainer.style.transform = "translate(0%, 0)";
      setScrollDirection(0);
    }, 500);
    if (scrollDirection === -1) {
      setCurrentIndex(right(currentIndex));
      gridContainer.style.transform = "translate(-63%, 0)";
      gridContainer.style.transition = "transform 0.5s ease-in-out";
    } else if (scrollDirection === 1) {
      setCurrentIndex(left(currentIndex));
      gridContainer.style.transform = "translate(-63%, 0)";
      setTimeout(() => {
        gridContainer.style.transform = "translate(0%, 0)";
        gridContainer.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    }
  }, [scrollDirection]);

  const onPointerDown: PointerEventHandler<HTMLUListElement> = e =>
    (touchStart = e.clientX);

  const onPointerUp: PointerEventHandler<HTMLUListElement> = e => {
    touchEnd = e.clientX;
    setScrollDirection(checkDirection(touchStart, touchEnd));
  };

  const onTouchStart: TouchEventHandler<HTMLUListElement> = e => {
    touchStart = e.touches[0].clientX;
  };

  const onTouchEnd: TouchEventHandler<HTMLUListElement> = e => {
    touchEnd = e.changedTouches[0].clientX;
    setScrollDirection(checkDirection(touchStart, touchEnd));
  };

  const touchEvents = {
    onTouchStart,
    onTouchEnd,
  };

  const pointerEvents = {
    onPointerDown,
    onPointerUp,
  };

  const neighbors = (index: number) => {
    if (scrollDirection === -1) {
      return [left(left(index)), left(index), index, right(index)];
    } else if (scrollDirection === 1) {
      return [left(index), index, right(index), right(right(index))];
    } else {
      return [left(index), index, right(index)];
    }
  };

  const left = (index: number): number =>
    index === 0 ? reviewsData.length - 1 : index - 1;
  const right = (index: number): number =>
    index === reviewsData.length - 1 ? 0 : index + 1;
  const divs = neighbors(currentIndex);

  const checkDirection = (touchStart: number, touchEnd: number) => {
    if (touchEnd === touchStart) return 0;
    else return touchEnd < touchStart ? -1 : 1;
  };

  const stars = (count: number) => {
    const elements = [];
    for (let i = 0; i < count; i++) elements.push(<Star className="w-5 text-yellow-400" />);
    return elements;
  };

  return (
    <div className="section-padding sm: flex flex-col justify-center gap-3 overflow-hidden bg-background-950 py-3 text-text-100">
      <div className="mx-auto w-6/12">
        <h2 className="sm: text-center text-xl">Look at Our Latest Review</h2>
        <div className="flex items-center gap-1">
          <ArrowLeftCircle className="sm: hidden" />
          <ArrowRightCircle className="sm: hidden" />
        </div>
      </div>
      <div className="sm: overflow-hidden">
        <ul
          ref={gridRef}
          className="sm: grid-container"
          {...(supportsTouch ? touchEvents : pointerEvents)}
        >
          {divs.map((item, index) => (
            <li
              key={index}
              className="rounded border-2 p-2 border-primary-400"
            >
              <p className="h-3/5">{reviewsData[item].text}</p>
              <div className="my-4 flex">{stars(reviewsData[item].stars)}</div>
              <div className="flex items-center justify-around">
                <img
                className="rounded-full w-10"
                  src={Pfp}
                  alt="Profile Picture"
                />
                <h5 className="font-bold">{reviewsData[item].name}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Reviews;
