import React, { useState } from "react";

const FAQ = ({ faqHeading, faqSub1, faqSub2 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="FAQ__accordian">
      <button onClick={() => setIsActive(!isActive)} className="FAQ__title">
        {faqHeading}
        <i className={`fal ${isActive ? "fa-times" : "fa-plus"}`}></i>
      </button>

      <div className="accordion-content" aria-expanded={!isActive}>
        <p>{faqSub1}</p>
        <p>{faqSub2 && faqSub2}</p>
      </div>
    </div>
  );
};

export default FAQ;
