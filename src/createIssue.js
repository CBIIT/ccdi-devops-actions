const fs = require('fs');


async function getPlanContent( ) {
    // using the fs module, list the files in the current directory
    const files = fs.readdirSync('./');
    console.log(files);
};

async function run() {
    const content = await getPlanContent();
    console.log( content );
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