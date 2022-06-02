import React, { ReactNode } from "react";

interface SocialIconProps {
  link: string;
  label: string;
  children: ReactNode;
  dataIcon: string;
  viewBox: string;
}

const SocialIcon = ({
  link,
  label,
  children,
  dataIcon,
  viewBox,
}: SocialIconProps) => {
  return (
    <a href={link} target="blank" aria-label={label}>
      <svg
        aria-hidden="true"
        data-icon={dataIcon}
        role="img"
        viewBox={viewBox}
        style={{ fill: "currentcolor", height: "22px", width: "22px" }}
      >
        {children}
      </svg>
    </a>
  );
};

export default SocialIcon;
