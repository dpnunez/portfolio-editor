/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: [{ name: "main" }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};

export default config;
