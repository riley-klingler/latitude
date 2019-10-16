/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import EventEmitter from "events";
import update from "immutability-helper";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes, EventTypes} from "../constants/ModalConstants";
import PayloadSources from "../constants/PayloadSources";

type ModalMessage = {
  uniqueId: string,
  actionError: Error,
};

export type ModalRecord = {|
  +uniqueId: string,
|};

type Action = {
  actionType: $Keys<typeof ActionTypes>,
  modal: {
    uniqueId: string,
    actionError: Error,
  },
};

type Payload =
  | {
      // this is a hack to get flow to work with union types
      source: "NOT_MODAL",
    }
  | {
      source: typeof PayloadSources.MODAL,
      action: Action,
    };

export class ModalStoreNew extends EventEmitter {
  _records: Array<ModalRecord>;

  constructor() {
    super();
    this._records = [];

    AppDispatcher.register(
      (payload: Payload): boolean => {
        if (payload.source !== PayloadSources.MODAL) {
          return false;
        }

        // eslint-disable-next-line default-case
        switch (payload.action.actionType) {
          case ActionTypes.SHOW:
            this._show(payload.action.modal);
            return true;
          case ActionTypes.HIDE:
            this._remove(payload.action.modal);
            return true;
        }
        return false;
      }
    );
  }

  _show = (modal: ModalMessage) => {
    const record = {uniqueId: modal.uniqueId};
    this._records = update(this._records, {$unshift: [record]});
    // TODO(uforic): Add this back when we are ready to take action in the case of
    // double modals
    // if (this._records.length > 1) {
    //   Raven.captureException(modal.actionError, {
    //     tags: {multipleModalError: true},
    //   });
    // }
    this.emit(EventTypes.CHANGED);
  };

  _remove = (modal: ModalMessage) => {
    this._records = this._records.filter(r => r.uniqueId !== modal.uniqueId);
    this.emit(EventTypes.CHANGED);
  };

  // used for testing
  _reset = () => {
    this._records = [];
  };

  // new modals appear on the bottom of the stack
  getVisible: () => $ReadOnlyArray<ModalRecord> = () => this._records;
}

export default new ModalStoreNew();
