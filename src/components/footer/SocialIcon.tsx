import React, { FC, ReactNode } from "react";
import Link from "next/link";

type Props = {
  label: string;
  children: ReactNode;
  dataIcon: string;
  viewBox: string;
  link: string;
};

const SocialIcon: FC<Props> = ({
  label,
  children,
  dataIcon,
  link,
  viewBox,
}) => {
  return (
    <Link href={link} target="_blank" aria-label={label}>
      <svg
        aria-hidden="true"
        data-icon={dataIcon}
        role="img"
        viewBox={viewBox}
        style={{ fill: "currentcolor", height: "22px", width: "22px" }}
      >
        {children}
      </svg>
    </Link>
  );
};

export default SocialIcon;
