/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";

import {Route, makeRouteConfig, hotRouteConfig, HttpError} from "found";
import DesignAppInterface from "./interfaces/wrapper/DesignAppInterface";
import Guidelines from "./interfaces/guidelines/Guidelines";
import Styles from "./interfaces/styles/Styles";
import componentsList from "./constants/componentsList.json";
import guidelinesManifest from "./interfaces/guidelines/guidelinesManifest";
import stylesManifest from "./interfaces/styles/stylesManifest";

import Home from "./interfaces/Home";

const Components = () =>
  import(/* webpackChunkName: "design_system_interfaces_components_Components" */ "./interfaces/components/Components")
    .then(module => module.default)
    .catch(() => "An error occurred while loading the component");

const getGettingStarted = () =>
  import(/* webpackChunkName: "design_system_interfaces_GettingStarted" */ "./interfaces/GettingStarted")
    .then(module => module.default)
    .catch(() => "An error occurred while loading the component");

const getContributing = () =>
  import(/* webpackChunkName: "design_system_interfaces_Contributing" */ "./interfaces/Contributing")
    .then(module => module.default)
    .catch(() => "An error occurred while loading the component");

const getResources = () =>
  import(/* webpackChunkName: "design_system_interfaces_Resources" */ "./interfaces/Resources")
    .then(module => module.default)
    .catch(() => "An error occurred while loading the component");

const getPlayground = () =>
  import(/* webpackChunkName: "design_system_interfaces_Playground" */ "./interfaces/Playground")
    .then(module => module.default)
    .catch(() => "An error occurred while loading the component");

const getComponentsData = ({params}) => {
  const {componentName} = params;
  if (!componentsList.includes(componentName)) {
    throw new HttpError(404);
  }
};

const getGuidelinesData = ({params}) => {
  const {guidelineName} = params;

  if (!Object.hasOwnProperty.call(guidelinesManifest, guidelineName)) {
    throw new HttpError(404);
  }

  const {content, type} = guidelinesManifest[guidelineName];

  return {
    content,
    type,
  };
};

const getStylesData = ({params}) => {
  const {styleName} = params;

  if (!Object.hasOwnProperty.call(stylesManifest, styleName)) {
    throw new HttpError(404);
  }

  const {content, type} = stylesManifest[styleName];

  return {
    content,
    type,
  };
};

export default hotRouteConfig(
  makeRouteConfig(
    <Route path="design">
      <Route Component={Home} />
      <Route path="components/getting-started" Component={DesignAppInterface}>
        <Route getComponent={getGettingStarted} />
      </Route>
      <Route path="components/contributing" Component={DesignAppInterface}>
        <Route getComponent={getContributing} />
      </Route>
      <Route path="components" Component={DesignAppInterface}>
        <Route getComponent={Components} />
        <Route
          path=":componentName"
          getComponent={Components}
          getData={getComponentsData}
        />
      </Route>
      <Route path="guidelines" Component={DesignAppInterface}>
        <Route Component={Guidelines} />
        <Route
          path=":guidelineName"
          Component={Guidelines}
          getData={getGuidelinesData}
        />
      </Route>
      <Route path="resources" Component={DesignAppInterface}>
        <Route getComponent={getResources} />
      </Route>
      <Route path="styles" Component={DesignAppInterface}>
        <Route Component={Styles} />
        <Route path=":styleName" Component={Styles} getData={getStylesData} />
      </Route>
      <Route path="playground" Component={DesignAppInterface}>
        <Route getComponent={getPlayground} />
      </Route>
    </Route>
  )
);
