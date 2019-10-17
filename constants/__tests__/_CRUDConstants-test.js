/**
 * TEAM: frontend_infra
 *
 * @flow strict
 */
import * as CRUDConstants from "../_CRUDConstants";

describe("CRUD Constants", () => {
  it("creates the appropriate ActionTypes", () => {
    expect(CRUDConstants.ActionTypes.CREATE).toBe("CREATE");
    expect(CRUDConstants.ActionTypes.READ).toBe("READ");
    expect(CRUDConstants.ActionTypes.UPDATE).toBe("UPDATE");
    expect(CRUDConstants.ActionTypes.DESTROY).toBe("DESTROY");
  });

  it("creates the appropriate EventTypes", () => {
    expect(CRUDConstants.EventTypes.CREATE_SUCCESS).toBe("CREATE_SUCCESS");
    expect(CRUDConstants.EventTypes.CREATE_ERROR).toBe("CREATE_ERROR");
    expect(CRUDConstants.EventTypes.READ_SUCCESS).toBe("READ_SUCCESS");
    expect(CRUDConstants.EventTypes.READ_ERROR).toBe("READ_ERROR");
    expect(CRUDConstants.EventTypes.UPDATE_SUCCESS).toBe("UPDATE_SUCCESS");
    expect(CRUDConstants.EventTypes.UPDATE_ERROR).toBe("UPDATE_ERROR");
    expect(CRUDConstants.EventTypes.DESTROY_SUCCESS).toBe("DESTROY_SUCCESS");
    expect(CRUDConstants.EventTypes.DESTROY_ERROR).toBe("DESTROY_ERROR");
  });
});
