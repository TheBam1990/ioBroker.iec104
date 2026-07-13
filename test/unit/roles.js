"use strict";

const assert = require("node:assert/strict");
const { roleForJsType } = require("../../lib/roles");

describe("IEC-104 point roles", () => {
    it("uses read-only roles for received process values", () => {
        assert.equal(roleForJsType("number", false), "value");
        assert.equal(roleForJsType("boolean", false), "indicator");
        assert.equal(roleForJsType("string", false), "text");
    });

    it("uses writable roles for command-capable process values", () => {
        assert.equal(roleForJsType("number", true), "level");
        assert.equal(roleForJsType("boolean", true), "switch");
        assert.equal(roleForJsType("string", true), "text");
    });
});
