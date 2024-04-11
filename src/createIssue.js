const core = require('@actions/core');
const github = require('@actions/github');

async function action() {
    const token = core.getInput('TOKEN');
    const octokit = github.getOctokit(token);

    const { context = {} } = github;
    

    const title = core.getInput('title', { required: true });
    const body = core.getInput("body", { required: true });

    const { newIssue } = await octokit.rest.issues.create({
        ...context.repo,
        title: title,
        body: 'test'
    });

    core.setOutput('issue_number', newIssue.number);

    // log the type of const body 
    console.log(`The type of body: ${typeof body}`);
    console.log(body);
    console.log(`The event context: ${JSON.stringify(context, null, 2)}`);
    console.log(`The new issue: ${JSON.stringify(newIssue, null, 2)}`);
}

action();