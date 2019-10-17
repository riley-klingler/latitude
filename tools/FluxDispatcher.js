/**
 * TEAM: frontend_infra
 * @flow strict
 */

// eslint-disable-next-line no-restricted-imports
import {defer, extend} from "lodash";
import {Dispatcher} from "flux";
import invariant from "../tools/invariant";
import {ActionTypes as CRUDActionTypes} from "../constants/_CRUDConstants";
import {ActionTypes as MutationActionTypes} from "../constants/_MutationConstants";

// This whitelist ensures that we only do the expensive stacktrace calculation
// on (the relatively rare) http actions. The stacktrace is used to provide a
// useful sentry error if a UI component is attempting to execute an action that
// for which the user does not have permission
const HTTP_ACTIONS = [
  CRUDActionTypes.CREATE,
  CRUDActionTypes.READ,
  CRUDActionTypes.UPDATE,
  CRUDActionTypes.DESTROY,
  CRUDActionTypes.UPDATE_COLLECTION,
  MutationActionTypes.DANGEROUSLY_CHANGE_STORE_RECORD_AND_UPDATE,
  MutationActionTypes.DANGEROUSLY_CHANGE_STORE_RECORD_AND_CREATE,
];

type Action = {
  actionType?: string,
  options?: {} | null,
};

const FluxDispatcher = extend(new Dispatcher(), {
  handleViewAction(source: string, action: Action) {
    invariant(
      source != null,
      "Did you forget to register the payload source of your new store " +
        "in PayloadSources.js? Please make sure to do that to prevent " +
        "very hard to trace bugs."
    );

    const payload = {
      source,
      action,
    };

    if (HTTP_ACTIONS.includes(action.actionType)) {
      payload.action = {
        ...payload.action,
        options: {
          ...payload.action.options,
          reportableError: new Error(),
        },
      };
    }
    // Flux's Dispatcher has a similar check, but doing this ourselves is a
    // little nicer because we have access to source and actionType.
    if (this.isDispatching()) {
      // Pushing the dispatching action to the next call stack is the only way to get around this,
      // so may as well just do it here instead of tracing and do the fix manually at every source.
      return defer(() => {
        this.dispatch(payload);
      });
    }

    this.dispatch(payload);
  },
});

export default FluxDispatcher;
