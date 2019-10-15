/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import * as React from "react";
import Markdown from "design_system/components/markdown/Markdown";
// $FlowFixMe(uforic) the club can't handle me right now
import gettingStartedMarkdown from "design_system/interfaces/GettingStarted.txt";

const GettingStarted = () => <Markdown text={gettingStartedMarkdown} />;

export default GettingStarted;
