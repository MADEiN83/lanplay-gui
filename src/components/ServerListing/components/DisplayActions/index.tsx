import * as React from "react";

const PLAY_ICON = require("../../../../assets/img/play.png");
const EDIT_ICON = require("../../../../assets/img/edit.png");
const TRASH_ICON = require("../../../../assets/img/trash.png");

interface IProps {}

const DisplayActions: React.FC<IProps> = (props: IProps) => {
  const {} = props;

  return (
    <div className="server-item-actions">
      <img src={PLAY_ICON} alt="" />
      <img src={EDIT_ICON} alt="" />
      <img src={TRASH_ICON} alt="" />
    </div>
  );
};

export default DisplayActions;
