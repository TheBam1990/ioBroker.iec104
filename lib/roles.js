"use strict";

function roleForJsType(type, writable) {
    if (type === "boolean") return writable ? "switch" : "indicator";
    if (type === "string") return "text";
    return writable ? "level" : "value";
}

module.exports = { roleForJsType };
