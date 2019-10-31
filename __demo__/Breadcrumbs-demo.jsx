/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import {type DemoFile} from "../design_system/types/demoTypes";
import IconButton from "../button/IconButton";
import Breadcrumbs from "../Breadcrumbs";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Example Usage",
      example: elementToCodeFn => (
        <BreadcrumbsDemo elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

function BreadcrumbsDemo({elementToCodeFn}: *) {
  const [depth, setDepth] = React.useState(4);

  const element = (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Breadcrumbs
        items={[
          {
            onClick: () => setDepth(1),
            content: "Breads",
          },
          {
            onClick: () => setDepth(2),
            content: "Flours",
          },
          {
            onClick: () => setDepth(3),
            content: "Buckwheat",
          },
          {
            content: "Origin",
          },
        ].slice(0, depth)}
      />
      {depth !== 4 && (
        <IconButton
          iconName="revert"
          type="button"
          kind="hollow"
          intent="basic"
          label="Reset Breadcrumbs"
          onClick={() => setDepth(4)}
        />
      )}
    </div>
  );

  if (elementToCodeFn != null) elementToCodeFn(element);

  return element;
}

export default demos;
