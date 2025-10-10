const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js","ts","test.ts"],
  transform: {
    ...tsJestTransformCfg,
  },
};