/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import type {MaybeBootstrapData} from "tools/bootstrap/bootstrapDataTypes";
import invariant from "tools/invariant";
import createBrowserAppLoader from "tools/bootstrap/createBrowserAppLoader";
import launchWhenReady from "tools/bootstrap/launchWhenReady";

type DesignSystemProps = {};

function DesignSystemLoader(_props: DesignSystemProps) {
  // eslint-disable-next-line global-require
  const DesignSystemApp = require("./DesignSystemApp").default;
  // eslint-disable-next-line global-require
  const FullPageBoundary = require("error/FullPageBoundary").default;

  return (
    <FullPageBoundary>
      <DesignSystemApp />
    </FullPageBoundary>
  );
}

function validateCompleteDesignSystemBootstrapData(
  input: MaybeBootstrapData
): DesignSystemProps {
  invariant(input != null, "Must provide input");
  return input;
}
const browserAppLoader = createBrowserAppLoader();

if (browserAppLoader !== null) {
  const props = validateCompleteDesignSystemBootstrapData(
    browserAppLoader.rawProps
  );

  launchWhenReady(DesignSystemLoader, props, browserAppLoader.container);
}
