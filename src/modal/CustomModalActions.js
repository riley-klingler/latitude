/**
 * TEAM: frontend_infra
 *
 * @flow strict
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import PayloadSources from "../constants/PayloadSources";
import {ActionTypes} from "../constants/ModalConstants";

const ModalActions = {
  ActionTypes,
  source: PayloadSources.MODAL,

  show(uniqueId: string) {
    AppDispatcher.handleViewAction(PayloadSources.MODAL, {
      actionType: ActionTypes.SHOW,
      modal: {
        uniqueId,
        // used for tracking stack trace associated with action
        actionError: new Error("More than one modal is showing."),
      },
    });
  },
  hide(uniqueId: string) {
    AppDispatcher.handleViewAction(PayloadSources.MODAL, {
      actionType: ActionTypes.HIDE,
      modal: {
        uniqueId,
      },
    });
  },
};

export default ModalActions;
