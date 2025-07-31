export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["chore", "docs", "feat", "revert", "fix"]],
    "type-case": [2, "always", "lower-case"],
    "subject-case": [2, "always", "lower-case"],
  },
};
