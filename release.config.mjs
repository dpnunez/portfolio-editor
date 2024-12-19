/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: [
    { name: "main" },
    {
      name: "alpha",
      prerelease: "alpha",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { breaking: true, release: "minor" }, // Breaking changes are minor during alpha
          { revert: true, release: "patch" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};

export default config;
