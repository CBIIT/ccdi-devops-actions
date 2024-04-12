import { readFile } from 'fs/promises';
import { Octokit } from '@octokit/action';


async function getPlanConent( file ) {
    const content = await readFile( file, 'utf8' );
    return content;
}

async function createNewIssue( client, org, repo, file ) {
    const issueTitle = `${process.env.GITHUB_ENV}-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`
    const issueBody = await getPlanConent( file );

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
    const file = 'README.txt'
    const issueNumber = await createNewIssue( client, org, repo, file);

    return issueNumber;
}

action();

// async function run() {
//     const plan = await getContent( 'README.txt' );
//     console.log( plan );
// }

// run();