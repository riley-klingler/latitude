/**
 * TEAM: frontend_infra
 * @flow
 */

import {type DemoFile, list} from "../../design_system/types/demoTypes";
import React, {useState, type Node} from "react";
import DocumentUploader, {
  type ServerState,
} from "../DocumentUploader";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <DocumentUploaderShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        serverState: list(
          [
            {label: "waiting", value: "waiting"},
            {label: "uploading", value: "uploading"},
            {label: "deleting", value: "deleting"},
            {label: "error", value: "error"},
          ],
          false,
          false,
          v => v,
          "waiting"
        ),
      },
    },
  ],
};

type Props = {|
  +elementToCodeFn: Node => void,
  +demoProps: {serverState: ServerState},
|};

export function DocumentUploaderShim({elementToCodeFn, demoProps}: Props) {
  const [document, setDocument] = useState();
  const element = (
    <DocumentUploader
      document={document}
      onChange={setDocument}
      {...demoProps}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(element);
  }
  return <div style={{height: 400}}>{element}</div>;
}
export default demos;
