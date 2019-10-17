/**
 * TEAM: frontend_infra
 */
//
/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable flowtype/require-parameter-type */
/* eslint-disable prefer-rest-params */
const actualMoment = require.requireActual("moment");

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
const mockedMoment = function() {
  if (mockedValue) {
    return mockedValue;
  } else if (emptyMockedValue && arguments.length === 0) {
    return emptyMockedValue;
  }
  return actualMoment.apply(this, arguments);
};

mockedMoment.fn = {};
mockedMoment.version = "2.11.2";
mockedMoment.locale = actualMoment.locale;

// eslint-disable-next-line func-names
mockedMoment.mockReturnValue = function() {
  if (emptyMockedValue) {
    throw new Error("Both mockedValue and emptyMockedValue are set");
  }
  mockedValue = actualMoment.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMoment.mockEmptyReturnValue = function() {
  if (mockedValue) {
    throw new Error("Both mockedValue and emptyMockedValue are set");
  }
  emptyMockedValue = actualMoment.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMoment.unmock = function() {
  mockedValue = null;
  emptyMockedValue = null;
};

// eslint-disable-next-line func-names
mockedMoment.startOf = function() {
  return new Date("2016-01-01");
};

// eslint-disable-next-line func-names
mockedMoment.duration = function(milliseconds) {
  return actualMoment.duration(milliseconds);
};

let mockedUtcValue = null;
// eslint-disable-next-line func-names
mockedMoment.utc = function() {
  if (mockedUtcValue === null) {
    return actualMoment.utc.apply(this, arguments);
  }
  return mockedUtcValue;
};

// eslint-disable-next-line func-names
mockedMoment.utc.mockReturnValue = function() {
  mockedUtcValue = actualMoment.utc.apply(this, arguments);
};

// eslint-disable-next-line func-names
mockedMoment.utc.unmock = function() {
  mockedUtcValue = null;
};

mockedMoment.ISO_8601 = actualMoment.ISO_8601;

mockedMoment.min = actualMoment.min;
mockedMoment.format = actualMoment.format;

module.exports = mockedMoment;
