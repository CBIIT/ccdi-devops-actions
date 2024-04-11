import { Octokit } from "@octokit/action";


async function action() {
    const octokit = new Octokit();
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    // using octokit, get the input titled 'label' 
    console.log(process.env.string)

    const { data: issues } = await octokit.issues.create({
        owner: owner,
        repo: repo,
        title: "New issue created by Octokit!",
        body: "This issue was created using the Octokit.js library."
    });

    console.log(`Created issue: ${issues.html_url}`);
}

action();