import React from "react";
import FAQ from "./FAQ";
import { accordionData } from "../data/accordionData";

const FAQIndex = () => {
  return (
    <section className="FAQ__list__container">
      <h1 className="FAQ__heading">Frequently Asked Questions</h1>
      <div className="FAQ__list">
        {accordionData.map((item, index) => {
          return (
            <FAQ
              key={index}
              faqHeading={item.faqHeading}
              faqSub1={item.faqSub1}
              faqSub2={item.faqSub2}
            />
          );
        })}
      </div>
      <div className="FAQ__get__started__email">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="email__form__container">
          <div className="form__container">
            <input type="email" className="email__input" placeholder=" " />
            <label className="email__label">Email Address</label>
          </div>
          <button className="primary__button">
            Get Started <i className="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQIndex;
