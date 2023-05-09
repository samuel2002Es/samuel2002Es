import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
});
async function getPropertiesGit(){
    try {
        const result = await octokit.request("GET /user/repos", {
            per_page: 100,
        });
        console.log(`Success! Status: ${result.status}`)
        const repo = result.data.map(item => 
            console.log(item)
            )
        console.log(result.data)
      } catch (error) {
        console.log(`Error! Status: ${error.status}`)
      }
}

getPropertiesGit()