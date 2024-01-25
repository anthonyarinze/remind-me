import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-left font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
        style={{ minHeight: "40px", borderBottom: "1px solid #ccc" }}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ease-in-out ml-2 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div
          className={`px-4 py-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${
            isOpen ? "h-full" : "h-0"
          }`}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
