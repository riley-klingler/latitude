/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import React from "react";
import {shallow} from "enzyme";
import DocumentUploader from "../DocumentUploader";

describe("DocumentUploader", () => {
  it("renders", () => {
    expect(
      shallow(
        <DocumentUploader
          document={null}
          onChange={() => {}}
          serverState="waiting"
        />
      )
    ).toMatchSnapshot();
  });
});
