/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nccwpck_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
;// CONCATENATED MODULE: ./src/createIssue.js




async function getContent( file ) {
    const content = await (0,promises_namespaceObject.readFile)( file, 'utf8' );
    return content;
}

async function run() {
    const plan = await getContent( 'README.txt' );
    console.log( plan );
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
module.exports = __webpack_exports__;
/******/ })()
;