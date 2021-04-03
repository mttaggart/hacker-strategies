"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = countLines;

function countLines(string) {
  let lines = 1;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '\n') {
      lines++;
    }
  }

  return lines;
}