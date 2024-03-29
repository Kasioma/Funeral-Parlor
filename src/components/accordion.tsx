import { ChevronDownCircle } from "lucide-react";
import { useState } from "react";
const Accordion = () => {
  const accordionData = [
    {
      question: "How do you decide if a job is worth it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi totam dolores, exercitationem rem enim explicabo facilis maiores quasi ullam quidem sed tempore iure ea soluta quae beatae libero assumenda. Repudiandae.",
    },
    {
      question: "What are your strengths and weaknesses?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi totam dolores, exercitationem rem enim explicabo facilis maiores quasi ullam quidem sed tempore iure ea soluta quae beatae libero assumenda. Repudiandae.",
    },
    {
      question: "Tell me about a challenging work situation you faced.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi totam dolores, exercitationem rem enim explicabo facilis maiores quasi ullam quidem sed tempore iure ea soluta quae beatae libero assumenda. Repudiandae.",
    },
  ];

  const [display, setDisplay] = useState(
    Array(accordionData.length).fill(false),
  );

  const handleDisplay = (index: number) => {
    const newDisplay = [...display];
    newDisplay[index] = !newDisplay[index];
    setDisplay(newDisplay);
  };

  return (
    <div className="section-padding bg-secondary-900 py-7 text-text-100 ">
      <div className="mx-auto w-11/12">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="mb-3 rounded border-2 border-secondary-400 p-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="w-9/12">{item.question}</h3>
              <ChevronDownCircle
                className="w-10 text-secondary-400"
                onClick={() => handleDisplay(index)}
              />
            </div>
            <p
              className={
                display[index]
                  ? "mt-2 max-h-60 rounded border-t-2 border-secondary-400 opacity-100 transition-all duration-500"
                  : "max-h-0 overflow-hidden opacity-0 transition-all duration-500"
              }
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
