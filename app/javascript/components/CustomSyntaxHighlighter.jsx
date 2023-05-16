import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
const CustomSyntaxHighlighter = ({ startingLineNumber, text, highlight }) => {
  return (
    <>
      <div className="code-block">
        <CopyBlock
          text={text}
          language={"ruby"}
          showLineNumbers
          startingLineNumber={startingLineNumber}
          theme={dracula}
          wrapLines
          codeBlock
        />
      </div>
    </>
  );
};

export default CustomSyntaxHighlighter;
