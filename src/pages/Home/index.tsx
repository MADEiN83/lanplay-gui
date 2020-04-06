import * as React from "react";
import ServerListing from "@/components/ServerListing";
import Terminal from "@/components/Terminal";

const Home: React.FC = () => {
  const [serverAddr, setServerAddr] = React.useState<string>();
  const [isRunning, setIsRunning] = React.useState(false);

  return (
    <React.Fragment>
      <ServerListing
        onSelectServer={(server: string) => {
          setServerAddr(server);
          setIsRunning(false);
        }}
        currentServerAddr={serverAddr}
        isRunning={isRunning}
        onRun={() => setIsRunning(true)}
        onStop={() => setIsRunning(false)}
      />
      {serverAddr && isRunning && <Terminal serverAddr={serverAddr} />}
    </React.Fragment>
  );
};

export default Home;
