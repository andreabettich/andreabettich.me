import React from 'react';
import Icon from '../basic/Icon';
import Link from '../basic/Link';

const SocialNetwork = props => {
  return (
    <div className="social-network">
      <Link className="social-network__element" {...props}>
        <Icon icon={props.icon} fill="#FFFFFF" height="35px" width="35px" />
        {props.name}
      </Link>
    </div>
  );
};

export default SocialNetwork;
