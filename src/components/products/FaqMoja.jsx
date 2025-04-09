
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const FaqMoja = ({ data }) => {
  const [ active, setActive ] = useState(false);
  return (
    <div className={ active ? "faq-moja active" : "faq-moja"} data-aos="zoom-in">
               <div className="faq-question" onClick={() => setActive(!active)}>
                        <h3>{data.question}</h3>
                        <span><IoChevronDown /></span>
               </div>
               <div className="faq-answer">
                        <div className="faq-answer-inner">
                                   <p>{data.answer}</p>
                        </div>
               </div>
    </div>
  )
}

export default FaqMoja