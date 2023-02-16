import React, { useState } from 'react';

const Accordion = () => {
  const accordionData = {
    title: 'what is javascript ?',
    content: `JavaScript is a client-side and server-side programming language.`
  };
  const accordionData1={
    title1 : 'what are the three types of keyword ?',
    content1: `we use three keywords in order to declare javascript variables,which are var,let,const.`
  };
  const accordionData2={
    title2 : 'when let and const introduced ?',
    content2 : `let and const are introduced in es6.`
  };
  const { title, content } = accordionData;
  const { title1, content1 } = accordionData1;
  const { title2, content2 } = accordionData2;

  const [isActive, setIsActive] = useState();
  const [isUpdate, setIsUpdate]=useState();
  const [isValue, setIsValue]= useState();
  return (
  <>
  <h1>Important Javascript Questions</h1>
  <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
  </div>

  <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsUpdate(!isUpdate)}>
        <div>{title1}</div>
        <div>{isUpdate ? '-' : '+'}</div>
      </div>
      {isUpdate && <div className="accordion-content">{content1}</div>}
  </div>

  <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsValue(!isValue)}>
        <div>{title2}</div>
        <div>{isValue ? '-' : '+'}</div>
      </div>
      {isValue && <div className="accordion-content">{content2}</div>}
  </div>
</div>
</>
  );
};

export default Accordion;