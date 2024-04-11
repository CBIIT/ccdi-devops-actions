const core = require('@actions/core');
const github = require('@actions/github');

async function action() {
    const token = core.getInput('TOKEN');
    console.log(`The type of token: ${typeof token}`);
    console.log(`The token: ${token}`);


    const octokit = github.getOctokit(token);
    console.log(`The type of octokit: ${typeof octokit}`);
    console.log(`The octokit: ${octokit}`);


    const { context = {} } = github;
    console.log(`The type of context: ${typeof context}`);
    console.log(`The context: ${context}`);


    const title = core.getInput('title', { required: true });
    console.log(`The type of title: ${typeof title}`)
    console.log(`The title: ${title}`);


    const body = core.getInput("body", { required: true });
    console.log(`The type of body: ${typeof body}`)
    console.log(`The body: ${body}`);

    // const { newIssue } = await octokit.rest.issues.create({
    //     ...context.repo,
    //     title: title,
    //     body: 'test'
    // });

    // core.setOutput('issue_number', newIssue.number);

}

action();