import * as React from "react";

interface IProps {
  online?: boolean;
}

const ConnectionState: React.FC<IProps> = (props: IProps) => {
  const { online = false } = props;
  const classNames = ["connection-state-dot"];
  if (online) {
    classNames.push("active");
  }

  return (
    <React.Fragment>
      <span className={classNames.join(" ")}>•</span>
    </React.Fragment>
  );
};

export default ConnectionState;
