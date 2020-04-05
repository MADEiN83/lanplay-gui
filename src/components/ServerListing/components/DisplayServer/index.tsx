import * as React from "react";
import ServerInfoService, {
  IServerInfoService,
} from "@/services/ServerInfoService";
import ConnectionState from "@/components/ConnectionState";
import DisplayInfos from "../DisplayInfos";
import DisplayActions from "../DisplayActions";

const sis = new ServerInfoService();

interface IProps {
  server: string;
  selected?: boolean;
  handleOnSelect: () => void;
}

const DisplayServer: React.FC<IProps> = (props: IProps) => {
  const [info, setInfo] = React.useState<IServerInfoService>();
  const [isLoading, setIsLoading] = React.useState(true);
  const { server, selected = false, handleOnSelect } = props;

  React.useEffect(() => {
    sis
      .find(server)
      .then(setInfo)
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="server-item scale-up-center" onClick={handleOnSelect}>
      <div className="content">
        <span>
          <ConnectionState online={info !== undefined} />
          &nbsp;{server}
        </span>

        <DisplayInfos isLoading={isLoading} info={info} />
        {selected && <DisplayActions />}
      </div>
    </div>
  );
};

export default DisplayServer;
