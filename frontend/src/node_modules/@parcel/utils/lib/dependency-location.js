"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDependencyLocation;

function createDependencyLocation(start, moduleSpecifier, lineOffset = 0, columnOffset = 0, // Imports are usually wrapped in quotes
importWrapperLength = 2) {
  return {
    filePath: moduleSpecifier,
    start: {
      line: start.line + lineOffset,
      column: start.column + columnOffset
    },
    end: {
      line: start.line + lineOffset,
      column: start.column + moduleSpecifier.length - 1 + importWrapperLength + columnOffset
    }
  };
}