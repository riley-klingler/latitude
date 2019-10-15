/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */

import {getTimeIntervals} from "date/TimeInput";
import {ZERO_OCLOCK, EOD_OCLOCK} from "date/wallTime";
// none of our tests depend on a specific time zone or time
// unmock moment, since we will just be parsing one date
jest.unmock("moment");
jest.unmock("moment-timezone");

describe("TimeInput", () => {
  describe("getTimeIntervals", () => {
    it("handles when endTime is >= start time", () => {
      expect(getTimeIntervals(ZERO_OCLOCK, ZERO_OCLOCK, 15).length).toBe(0);
      expect(getTimeIntervals(EOD_OCLOCK, ZERO_OCLOCK, 15).length).toBe(0);
    });
    it("handles a full day of time @ 15/30/60", () => {
      expect(getTimeIntervals(ZERO_OCLOCK, EOD_OCLOCK, 15).length).toBe(24 * 4);
      expect(getTimeIntervals(ZERO_OCLOCK, EOD_OCLOCK, 30).length).toBe(24 * 2);
      expect(getTimeIntervals(ZERO_OCLOCK, EOD_OCLOCK, 60).length).toBe(24 * 1);
    });
  });
});
