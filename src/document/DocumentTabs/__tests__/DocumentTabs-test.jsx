/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import React from "react";
import {shallow} from "enzyme";
import DocumentTabs from "../DocumentTabs";

describe("DocumentTabs", () => {
  it("renders", () => {
    expect(
      shallow(
        <DocumentTabs
          documentNameOptions={["doc1.pdf", "doc2.pdf"].map((name, key) => ({
            name,
            key,
          }))}
          selectedKey={0}
          onSelect={() => {}}
          onAdd={() => {}}
          onDelete={() => {}}
        />
      )
    ).toMatchSnapshot();
  });
});
