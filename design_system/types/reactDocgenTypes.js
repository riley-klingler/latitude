/**
 * TEAM: frontend_infra
 *
 * @flow
 */

export const CATEGORY = {
  General: true,
  "Data Entry": true,
  Feedback: true,
  "Data Display": true,
  Interaction: true,
  "Error Boundary": true,
  "No Category": true,
  Filter: true,
  Layout: true,
  Overlay: true,
  Navigation: true,
  Application: true,
  Forms: true,
  Documents: true,
};

export const STATUS = {
  Stable: true,
  "In Review": true,
  Beta: true,
  Deprecated: true,
};

export const BRAND_STATUS = {
  V2: true,
  V3: true,
};

export type Category = $Keys<typeof CATEGORY>;

export type Status = $Keys<typeof STATUS>;

export type BrandStatus = $Keys<typeof BRAND_STATUS>;

export type PropDoc = {|
  +name: string,
  +required: boolean,
  +type: FlowType | "unknown",
  +description?: string,
  +defaultValue?: string,
|};

// loosely captures https://github.com/reactjs/react-docgen/blob/master/src/types.js
export type FlowType = {
  +name: string,
  +nullable?: boolean,
  +value?: string,
  +raw?: string,
  +elements?: Array<FlowType>,
  +type?: string | FlowType,
  +signature?:
    | {
        arguments: Array<FlowFunctionArgumentType>,
        +return: {
          +raw?: string,
          +name: string,
        },
      }
    | {
        +properties: Array<{
          +key: string | FlowType,
          +value: FlowType,
        }>,
      },
};

export type FlowFunctionArgumentType = {
  +name: string,
  +type?: FlowType,
};

export type FlowFunctionSignatureType = {
  +name: "signature",
  +type: "function",
  +raw: string,
  +signature: {
    +arguments: Array<FlowFunctionArgumentType>,
    +return: {
      +raw?: string,
      +name: string,
    },
  },
};

export type ReactDocgenType = {|
  description: string,
  displayName: string,
  props?: {
    [string]: {|
      required: boolean,
      description: string,
      defaultValue?: {value: string},
      flowType?: FlowType,
    |},
  },
|};

export type ReactDocgenFile = {|
  [string]: ReactDocgenType,
|};
