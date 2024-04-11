import { Octokit } from "@octokit/action";


async function action() {
    const octokit = new Octokit();
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    // print all the environment variables
    console.log(process.env);

    // using octokit, get the input titled 'label' 
    label = process.env.LABEL;
    console.log(label);

    const { data: issues } = await octokit.issues.create({
        owner: owner,
        repo: repo,
        title: "New issue created by Octokit!",
        body: "This issue was created using the Octokit.js library."
    });

    console.log(`Created issue: ${issues.html_url}`);
}

action();