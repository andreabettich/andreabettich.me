import React from 'react';

const ContactInfoElement = props => {
  return (
    <div className="contact-info-element">
      <span className="name">{props.name}</span>
      <span className="value">
        <a href={props.link} target="_blank">
          {props.value} {props.children}
        </a>
      </span>
    </div>
  );
};

export default ContactInfoElement;
