import React from "react";
import { useParams } from "react-router";
import api from "services/api.js";
import CustomSyntaxHighlighter from "./CustomSyntaxHighlighter.jsx";

const Log = () => {
  const [log, setLog] = React.useState(null);
  const { id } = useParams();

  const fetchLog = async () => {
    try {
      const { data } = await api.get(`/api/logs/${id}`);
      console.log(data);
      setLog(data);
    } catch (error) {
      console.log("Something went wrong.");
    }
    1;
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetchLog();
    }, 0);
  }, []);

  if (log === null) {
    return (
      <div
        id="spinner"
        className="spinner-border text-center ml-0"
        role="status"
      ></div>
    );
  }

  return (
    <>
      <h1>{log.name}</h1>
      <hr />

      <div className="log-body">
        <h3>Context</h3>

        <CustomSyntaxHighlighter
          text={log.context}
          startingLineNumber={parseInt(log.file_number - 4)}
          highlight={log.file_number}
        />

        <h3>Output</h3>

        <CustomSyntaxHighlighter
          text={log.output}
          highlight={log.file_number}
        />
      </div>
    </>
  );
};

export default Log;
