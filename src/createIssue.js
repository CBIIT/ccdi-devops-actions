import { Octokit } from "@octokit/action";

// Create a new issue and return the issue number and URL so that it can be used in the next steps in the run function

async function createNewIssue( client, issueOwner, issueRepo, issueTitle, issueBody ) {

    const { data: issue } = await octokit.issues.create({
        owner: issueOwner,
        repo: issueRepo,
        title: issueTitle,
        body: issueBody
    });
    
    const issueNumber = issue.number;
    const issueUrl = issue.html_url;
    const issueState = issue.state;

    return { issueNumber, issueUrl };
}


async function run() {
    const client = new Octokit();
    const title = process.env.INPUT_TITLE;
    const body = process.env.INPUT_BODY;
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    const { issueNumber, issueUrl } = await createNewIssue( client, owner, repo, title, body );

    console.log(`Issue ${issueNumber} created: ${issueUrl}`);
    console.log(`Issue state: ${issueState}`);
}

run();