"use strict";

/**
 * TEAM: frontend_infra
 *
 *
 */
var _require = require("./config.builder"),
  WebpackConfigurationBuilder = _require.WebpackConfigurationBuilder,
  appWrapper = _require.appWrapper;

module.exports = appWrapper(
  new WebpackConfigurationBuilder().setNodeEnv("development").addSourceMaps(),
  true
);
