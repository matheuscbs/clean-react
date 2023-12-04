import React from "react";
import Styles from "./spinner.styles.scss";

type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string;
};

const Spinner: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={[Styles.spinner, className].filter(Boolean).join(" ")}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
