/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 785:
/***/ ((module) => {

module.exports = eval("require")("@octokit/rest");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@octokit/rest
var rest = __nccwpck_require__(785);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
;// CONCATENATED MODULE: ./src/createIssue.js





async function run() {
    const content = await (0,promises_namespaceObject.readFile)( 'README.txt', 'utf8' );
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
})();

module.exports = __webpack_exports__;
/******/ })()
;