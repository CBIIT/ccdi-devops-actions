import { Octokit } from "@octokit/action";


// Create a new issue and return the issue number and URL so that it can be used in the next steps in the run function

async function createNewIssue( client, issueOwner, issueRepo, issueTitle, issueBody ) {

    const { data: issue } = await client.issues.create({
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


// Get the README.md file from the repository and return the content

async function getReadmeFile( client, owner, repo ) {
    const { data: readme } = await client.repos.getContent({
        owner: owner,
        owner: repo,
        path: "README.md"
    });

    return Buffer.from(readme.content, "base64").toString();
}


async function run() {
    const client = new Octokit();
    const title = process.env.INPUT_TITLE;
    const body = process.env.INPUT_BODY;
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    const { issueNumber, issueUrl } = await createNewIssue( client, owner, repo, title, body );
    console.log(`Issue created: ${issueUrl}`);
    console.log(`Issue number: ${issueNumber}`);

    const readmeContent = await getReadmeFile( client, owner, repo );
    console.log(`README.md content: ${readmeContent}`);

}

run();