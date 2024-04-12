import fs from 'fs/promises';
import { Octokit } from "@octokit/action";


async function getPlanContent( file ) {
    const content = fs.readFileSync(file, 'utf8');
    console.log(content);
};

async function run() {
    plan = await getPlanContent('README.txt');
    console.log('Reading from main function:\n')
    console.log(plan);
}

run();

// async function createNewIssue( client, org, repo ) {
//     const issueTitle = `${process.env.GITHUB_ENV}-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`
//     const issueBody = await readFile( 'README.txt' );

//     const { data: issue } = await client.issues.create({
//         owner: org,
//         repo: repo,
//         title: issueTitle,
//         body: issueBody
//     });
    
//     console.log(`Issue created: ${issue.html_url}`)
//     return issue.number;
// }


// async function action() {



//     const client = new Octokit();
//     const [org, repo] = process.env.GITHUB_REPOSITORY.split("/");
//     const issueNumber = await createNewIssue( client, org, repo );

//     return issueNumber;
// }

// action();