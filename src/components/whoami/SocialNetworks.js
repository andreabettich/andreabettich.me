import React from 'react';
import SocialNetwork from './SocialNetwork';

const SocialNetworks = props => {
  return (
    <div className="social-networks cell small-12">
      <div className="grid-x">
        <SocialNetwork
          name="Github"
          icon="github"
          href="https://github.com/andreabettich"
          target="_blank"
        />
        <SocialNetwork
          name="Xing"
          icon="xing"
          href="https://www.xing.com/profile/Andrea_Bettich"
          target="_blank"
        />
        <SocialNetwork
          name="LinkedIn"
          icon="linkedin"
          href="https://www.linkedin.com/in/abettich/"
          target="_blank"
        />
        <SocialNetwork
          name="Facebook"
          icon="facebook"
          href="https://www.facebook.com/abettich"
          target="_blank"
        />
        <SocialNetwork
          name="Twitter"
          icon="twitter"
          href="https://twitter.com/Aenduuuu"
          target="_blank"
        />
        <SocialNetwork
          name="Instagram"
          icon="instagram"
          href="https://www.instagram.com/abettich/"
          target="_blank"
        />
        <SocialNetwork
          name="500px"
          icon="500px"
          href="https://500px.com/andreabettich"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default SocialNetworks;
