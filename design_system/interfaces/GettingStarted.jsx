/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import * as React from "react";
import Markdown from "../components/markdown/Markdown";
// $FlowFixMe(uforic) the club can't handle me right now
import gettingStartedMarkdown from "./GettingStarted.txt";

const GettingStarted = () => <Markdown text={gettingStartedMarkdown} />;

export default GettingStarted;
