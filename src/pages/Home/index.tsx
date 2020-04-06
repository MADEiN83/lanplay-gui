import * as React from "react";
import ServerListing from "@/components/ServerListing";
import Terminal from "@/components/Terminal";

const Home: React.FC = () => {
  const [serverAddr, setServerAddr] = React.useState<string>();
  const [isRunning, setIsRunning] = React.useState(false);

  return (
    <>
      <main className="">
        <div className="main-top-container">
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
        </div>
        {serverAddr && isRunning && (
          <div className="main-bottom-container">
            <Terminal serverAddr={serverAddr} />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
