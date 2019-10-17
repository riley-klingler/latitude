/**
 * TEAM: frontend_infra
 */
/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable prefer-rest-params */
// Note (jared) - this is just a copy of moment.js; it doens't mock any momen-timezone-specific functionality

const actualMoment = require.requireActual("moment-timezone");

// TODO(dmnd): Figure out why this didn't work:

// var moment = require('moment');
// var fakeToday = moment('2015-09-30');
// moment.mock.mockImplementation(function() {
//   return fakeToday.clone()
// });

// For now, though, this manual mock will serve.
let mockedValue = null;
let emptyMockedValue = actualMoment("2016-02-17T20:00:00.000Z");
// eslint-disable-next-line func-names
const mockedMomentTimezone = function() {
  if (mockedValue) {
    return mockedValue;
  } else if (emptyMockedValue && arguments.length === 0) {
    return emptyMockedValue;
  }
  return actualMoment.apply(this, arguments);
};

mockedMomentTimezone.fn = {};
mockedMomentTimezone.version = "2.11.2";

// eslint-disable-next-line func-names
mockedMomentTimezone.mockReturnValue = function() {
  if (emptyMockedValue) {
    throw new Error("Both mockedValue and emptyMockedValue are set");
  }
  mockedValue = actualMoment.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMomentTimezone.mockEmptyReturnValue = function() {
  if (mockedValue) {
    throw new Error("Both mockedValue and emptyMockedValue are set");
  }
  emptyMockedValue = actualMoment.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMomentTimezone.unmock = function() {
  mockedValue = null;
  emptyMockedValue = null;
};

// eslint-disable-next-line func-names
mockedMomentTimezone.startOf = function() {
  return new Date("2016-01-01");
};

mockedMomentTimezone.tz = actualMoment.tz;
mockedMomentTimezone.tz.guess = () => "America/Los_Angeles";

let mockedUtcValue = null;
// eslint-disable-next-line func-names
mockedMomentTimezone.utc = function() {
  if (mockedUtcValue === null) {
    return actualMoment.utc.apply(this, arguments);
  }
  return mockedUtcValue;
};

// eslint-disable-next-line func-names
mockedMomentTimezone.utc.mockReturnValue = function() {
  mockedUtcValue = actualMoment.utc.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMomentTimezone.utc.unmock = function() {
  mockedUtcValue = null;
};

mockedMomentTimezone.ISO_8601 = actualMoment.ISO_8601;
mockedMomentTimezone.format = actualMoment.format;

module.exports = mockedMomentTimezone;
