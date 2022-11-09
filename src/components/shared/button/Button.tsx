import Link from "next/link";
import React, { FC } from "react";
import { PrimaryButton } from "./Button.style";

type Props = {
  label: string;
};

type LinkButtonProps = Props & {
  link: string;
};

export const TextButton: FC<Props> = ({ label }) => (
  <PrimaryButton>{label}</PrimaryButton>
);

export const LinkButton: FC<LinkButtonProps> = ({ link, label }) => (
  <PrimaryButton>
    <Link href={link}>{label}</Link>
  </PrimaryButton>
);
