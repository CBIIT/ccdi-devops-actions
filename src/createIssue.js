const core = require('@actions/core');
const github = require('@actions/github');

async function action() {
    const token = core.getInput('TOKEN');
    const octokit = github.getOctokit(token);

    const { context = {} } = github;
    

    const title = core.getInput('title', { required: true });
    const body = core.getMultilineInput("body", { required: true });

    const { newIssue } = await octokit.rest.issues.create({
        ...context.repo,
        title: title,
        body: body.join('\n')
    });

    core.setOutput('issue_number', newIssue.number);


    console.log(`The event context: ${JSON.stringify(context, null, 2)}`);
    console.log(`The new issue: ${JSON.stringify(newIssue, null, 2)}`);
}

action();