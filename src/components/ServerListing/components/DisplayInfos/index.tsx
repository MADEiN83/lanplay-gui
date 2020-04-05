import * as React from "react";
import { IServerInfoService } from "@/services/ServerInfoService";

var USERS_ICON = require("../../../../assets/img/users.png");

interface IProps {
  info?: IServerInfoService;
  isLoading: boolean;
}

const DisplayInfos: React.FC<IProps> = (props: IProps) => {
  const { info, isLoading } = props;

  return (
    <div className="server-item-description">
      {isLoading && <span>Loading...</span>}

      {!isLoading && info && (
        <React.Fragment>
          <span>{info.version}</span>
          <span>
            {info.idle && (
              <React.Fragment>
                {info.online - info.idle}/{info.online}
              </React.Fragment>
            )}

            {!info.idle && <React.Fragment>{info.online}</React.Fragment>}
            <img src={USERS_ICON} alt="users" />
          </span>
        </React.Fragment>
      )}

      {!isLoading && !info && <span>Server not available</span>}
    </div>
  );
};

export default DisplayInfos;
