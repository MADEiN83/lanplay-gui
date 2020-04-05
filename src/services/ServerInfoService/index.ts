export interface IServerInfoService {
  online: number;
  idle?: number;
  version: string;
}

class ServerInfoService {
  find = (server: string): Promise<IServerInfoService> => {
    return fetch(`http://${server}/info`).then((response) => response.json());
  };
}

export default ServerInfoService;
