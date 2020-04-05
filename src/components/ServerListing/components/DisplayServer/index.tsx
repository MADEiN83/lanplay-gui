import * as React from "react";
import ServerInfoService, {
  IServerInfoService,
} from "@/services/ServerInfoService";
import ConnectionState from "@/components/ConnectionState";
import DisplayInfos from "../DisplayInfos";

const sis = new ServerInfoService();

interface IProps {
  server: string;
}

const DisplayServer: React.FC<IProps> = (props: IProps) => {
  const [info, setInfo] = React.useState<IServerInfoService>();
  const [isLoading, setIsLoading] = React.useState(true);
  const { server } = props;

  React.useEffect(() => {
    sis
      .find(server)
      .then(setInfo)
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="server-item scale-up-center">
      <div className="content">
        <span>
          <ConnectionState online={info !== undefined} />
          &nbsp;{server}
        </span>

        <DisplayInfos isLoading={isLoading} info={info} />
      </div>
    </div>
  );
};

export default DisplayServer;
