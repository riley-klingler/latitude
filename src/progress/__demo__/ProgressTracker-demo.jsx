/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import * as React from "react";

import ProgressTracker from "../ProgressTracker";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description:
        "The ProgressTracker accepts an icon name for the progress node, and a decimal value of completion. " +
        "A label and error state can be provided optionally. " +
        "Additional icons may be provided to represent the start and end state, if desired.",
      example: fn => {
        const component = (
          <ProgressTracker
            progressIcon="ship"
            progress={0.5}
            startIcon="warehouse"
            endIcon="home"
            label="In transit to arrival port"
            error={false}
          />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Pending",
      description:
        "Pending state, e.g. this might be used if a shipment is at its origin location.",
      example: fn => {
        const component = <ProgressTracker progressIcon="ship" progress={0} />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Active",
      description:
        "Pending state, e.g. this might be used if a shipment is in transit.",
      example: fn => {
        const component = (
          <ProgressTracker progressIcon="ship" progress={0.25} />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Active with error",
      description:
        "Pending state, e.g. this might be used if a shipment is in transit with exceptions.",
      example: fn => {
        const component = (
          <ProgressTracker progressIcon="ship" progress={0.75} error={true} />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Completed",
      description:
        "Pending state, e.g. this might be used if a shipment is at its destination.",
      example: fn => {
        const component = <ProgressTracker progressIcon="ship" progress={1} />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Completed with error",
      description:
        "Pending state, e.g. this might be used if a shipment is at its destination with exceptions.",
      example: fn => {
        const component = (
          <ProgressTracker progressIcon="ship" progress={1} error={true} />
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
