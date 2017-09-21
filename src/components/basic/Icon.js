import React from 'react';

const SvgIcon = props => {
  const { icon, ...otherProps } = props;
  const href = `#${icon}`;
  return (
    <svg className={props.className} fill="#FFFFFF" {...otherProps}>
      <use xlinkHref={href} />
    </svg>
  );
};

export default SvgIcon;
