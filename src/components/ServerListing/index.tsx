import * as React from "react";
import DisplayServer from "./components/DisplayServer";

const SERVERS = [
  "switch.lan-play.com:11451",
  "switch.lan-play.com:11452",
  "frog-skins.com:11451",
  "nxlan-w.dentora.ca:11451",
  "aclanplay.servegame.org:11451",
  "nxlan-e.dentora.ca:11451",
  "nook-inc.net:11451",
  "nut.r3n3.at:11451",
  "lanplay.r3n3.at:11451",
  "open.t0g3pii.tk:11451",
];

interface IProps {
  currentServerAddr?: string;
  onSelectServer: (serverAddr: string) => void;
  onRun: () => void;
  onStop: () => void;
  isRunning?: boolean;
}

const ServerListing: React.FC<IProps> = (props: IProps) => {
  const {
    currentServerAddr,
    onSelectServer,
    onRun,
    onStop,
    isRunning = false,
  } = props;

  return (
    <div>
      ServerListing {SERVERS.length}
      <div className="display-servers-container">
        {SERVERS.map((server) => (
          <DisplayServer
            key={server}
            server={server}
            selected={server === currentServerAddr}
            onSelect={() => onSelectServer(server)}
            onRun={onRun}
            onStop={onStop}
            isRunning={isRunning}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerListing;
