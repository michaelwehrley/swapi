"use strict";

var expect = require("chai").expect;
var swapi = require("./index.js");

describe("swapi", function() {
	it("should return 7 films", function() {
		expect(swapi.all.count).to.equal(7);
	});
});
