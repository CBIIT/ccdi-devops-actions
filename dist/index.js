/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nccwpck_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var promises_default = /*#__PURE__*/__nccwpck_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: ./src/createIssue.js




async function getPlanContent( file ) {
    const content = promises_default().readFileSync(file, 'utf8');
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
module.exports = __webpack_exports__;
/******/ })()
;