import fs from 'fs/promises';
import { Octokit } from "@octokit/action";


async function readFile( file ) {
    try {
        const data = await fs.readFile(file, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.error(`Error reading plan file: ${err}`);
    }
}

async function createNewIssue( client, org, repo ) {
    const issueTitle = `${process.env.GITHUB_ENV}-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`
    const issueBody = await readFile( 'tfplan' );

    const { data: issue } = await client.issues.create({
        owner: org,
        repo: repo,
        title: issueTitle,
        body: issueBody
    });
    
    console.log(`Issue created: ${issue.html_url}`)
    return issue.number;
}


async function action() {
    const client = new Octokit();
    const [org, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const issueNumber = await createNewIssue( client, org, repo, issueBody );

    return issueNumber;
}

action();