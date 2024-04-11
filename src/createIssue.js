import { Octokit } from "@octokit/action";


async function getPlanContent( client, org, repo, artifact ) {
    const { data: plan } = await client.actions.listWorkflowRunArtifacts({
        owner: org,
        repo: repo,
        run_id: process.env.GITHUB_RUN_ID,
        name: artifact
    });

    const { data: content } = await client.actions.downloadArtifact({
        owner: org,
        repo: repo,
        artifact_id: plan.artifacts[0].id,
        archive_format: 'zip'
    });

    return Buffer.from(content);
}


async function createNewIssue( client, org, repo, artifact ) {
    const issueTitle = `${process.env.GITHUB_ENV}-${process.env.GITHUB_RUN_ID}`
    const issueBody = await getPlanContent( client, org, repo, artifact );
    const { data: issue } = await client.issues.create({
        owner: org,
        repo: repo,
        title: issueTitle,
        body: issueBody
    });
    
    console.log(`Issue created: ${issue.html_url}`)
    return issue.number;
}


async function run() {
    const client = new Octokit();
    const artifact = process.env.INPUT_ARTIFACT;
    const [org, repo] = process.env.GITHUB_REPOSITORY.split("/");

    const issueNumber = await createNewIssue( client, org, repo, artifact );
    console.log(`Issue number: ${issueNumber}`);
}

run();