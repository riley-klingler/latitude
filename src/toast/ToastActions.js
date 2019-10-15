/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import PayloadSources from "constants/PayloadSources";
import {ActionTypes} from "constants/ToastConstants";
import type {ToastRecord} from "toast/ToastStore";
import Toast from "toast/Toast";
import AppDispatcher from "dispatcher/AppDispatcher";

const ToastActions = {
  ActionTypes,
  source: PayloadSources.TOAST,

  show(
    toastProps: React.ElementConfig<typeof Toast>,
    removeAfter: number = 3000
  ) {
    AppDispatcher.handleViewAction(PayloadSources.TOAST, {
      actionType: ActionTypes.SHOW,
      toast: {
        ...toastProps,
        removeAfter,
      },
      removeAfter,
    });
  },

  remove(toast: ToastRecord) {
    AppDispatcher.handleViewAction(PayloadSources.TOAST, {
      actionType: ActionTypes.REMOVE,
      toast,
    });
  },
};

export default ToastActions;
