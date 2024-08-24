import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

type Props = {
  code: string;
};
function CopyButton({ code }: Props) {
  return (
    <button className="CopyButtonClass">
      <CopyToClipboard text={code}>
        <div>
          <FaRegCopy />
        </div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;