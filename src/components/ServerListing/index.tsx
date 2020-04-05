import * as React from "react";
import ServerInfoService from "@/services/ServerInfoService";
import DisplayServer from "./components/DisplayServer";

const SERVERS = [
  "switch.lan-play.com:11451",
  "switch.lan-play.com:11452",
  "switch.fake-play.com:11452",
];

const ServerListing: React.FC = () => {
  return (
    <div>
      ServerListing {SERVERS.length}
      <div className="display-servers-container">
        {SERVERS.map((server) => (
          <DisplayServer key={server} server={server} />
        ))}
      </div>
    </div>
  );
};

export default ServerListing;
