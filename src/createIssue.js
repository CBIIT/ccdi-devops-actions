import { Octokit } from "@octokit/action";


async function action() {
    const octokit = new Octokit();

    const title = process.env.INPUT_TITLE;
    const body = process.env.INPUT_BODY;
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    

    console.log('title:', title)
    console.log('body:', body)
    console.log('owner:', owner)
    console.log('repo:', repo)

    const { data: issues } = await octokit.issues.create({
        owner: owner,
        repo: repo,
        title: "New issue created by Octokit!",
        body: "This issue was created using the Octokit.js library."
    });

    console.log(`Created issue: ${issues.html_url}`);
}

action();