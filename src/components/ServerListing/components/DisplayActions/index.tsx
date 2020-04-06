import * as React from "react";

const PLAY_ICON = require("../../../../assets/img/play.png");
const EDIT_ICON = require("../../../../assets/img/edit.png");
const TRASH_ICON = require("../../../../assets/img/trash.png");
const CLOSE_ICON = require("../../../../assets/img/close.png");

interface IProps {
  isRunning: boolean;
  onRun: () => void;
  onStop: () => void;
}

const DisplayActions: React.FC<IProps> = (props: IProps) => {
  const { isRunning = false, onRun, onStop } = props;

  const handleAction = (handler: () => void) => {
    return (e: any) => {
      e.stopPropagation();
      handler();
    };
  };

  return (
    <div className="server-item-actions">
      {isRunning && (
        <>
          <img src={CLOSE_ICON} alt="" onClick={handleAction(onStop)} />
        </>
      )}

      {!isRunning && (
        <>
          <img src={PLAY_ICON} alt="" onClick={handleAction(onRun)} />
          <img src={EDIT_ICON} alt="" />
          <img src={TRASH_ICON} alt="" />
        </>
      )}
    </div>
  );
};

export default DisplayActions;
