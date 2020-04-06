import * as React from "react";
const { spawn } = require("child_process");

let buffer = "";

interface IProps {
  serverAddr: string;
  pmtu?: number;
}

const DEFAULT_PMTU = 500;

const Terminal: React.FC<IProps> = (props: IProps) => {
  const [content, setContent] = React.useState(buffer);
  const { serverAddr, pmtu = DEFAULT_PMTU } = props;

  React.useEffect(() => {
    buffer = "";

    const ls = spawn("./lan-play-macos", [
      "--relay-server-addr",
      serverAddr,
      "--pmtu",
      pmtu,
    ]);

    ls.stdout.on("data", (data: string = "") => {
      console.log("ah", buffer);
    });

    ls.stderr.on("data", (data: string = "") => {
      buffer = buffer + data;
      setContent(buffer);
      console.log("ondata", buffer);
    });

    ls.on("exit", () => (buffer = ""));

    return () => {
      console.log("killing process");
      ls.kill();
      buffer = "";
    };
  }, [serverAddr]);

  return (
    <div className="terminal-container">
      <div
        dangerouslySetInnerHTML={{
          __html: content.replace(/(?:\r\n|\r|\n)/g, "<br>"),
        }}
      />
    </div>
  );
};

export default Terminal;
