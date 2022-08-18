const core = require("@actions/core");
const github = require("@actions/github");

try {
  const repo = core.getInput("repo");
  const token = core.getInput("token");
  const sha = core.getInput("sha");
  const payload = JSON.stringify(github.context, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
