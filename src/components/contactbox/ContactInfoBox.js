import React from 'react';
import ContactInfoElement from './ContactInfoElement';
import Icon from '../basic/Icon';
import cv from '../../files/CV.pdf';

const ContactInfoBox = props => {
  return (
    <div className="contact-info-box">
      <ContactInfoElement
        name="Mail"
        value="hi@andreabettich.me"
        link="mailto:hi@andreabettich.me"
      />
      <ContactInfoElement
        name="Phone"
        value="+41 79 698 22 32"
        link="tel:+41796982232"
      />
      <ContactInfoElement name="Resume" value="Download " link={cv}>
        <Icon icon="download" width="20px" height="20px" />
      </ContactInfoElement>
    </div>
  );
};

export default ContactInfoBox;
