"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs/[jobSlug]/[companySlug]",{

/***/ "./pages/jobs/[jobSlug]/[companySlug].tsx":
/*!************************************************!*\
  !*** ./pages/jobs/[jobSlug]/[companySlug].tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _Users_irgenkini_Desktop_apollo_graphql_next_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../queries/queries */ \"./queries/queries.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/irgenkini/Desktop/apollo-graphql-next-project/pages/jobs/[jobSlug]/[companySlug].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Job = function Job(_ref) {\n  _s();\n\n  var _mutatedJob$company;\n\n  var job = _ref.job;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_queries_queries__WEBPACK_IMPORTED_MODULE_1__.mutateJob),\n      _useMutation2 = (0,_Users_irgenkini_Desktop_apollo_graphql_next_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),\n      mutateFunction = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(job),\n      _React$useState2 = (0,_Users_irgenkini_Desktop_apollo_graphql_next_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      mutatedJob = _React$useState2[0],\n      setMutatedJob = _React$useState2[1];\n\n  if (loading) return \"Submitting...\";\n  if (error) return \"Submission error! \".concat(error.message);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: mutatedJob === null || mutatedJob === void 0 ? void 0 : mutatedJob.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: [\"From:\", \" \", mutatedJob.company ? mutatedJob === null || mutatedJob === void 0 ? void 0 : (_mutatedJob$company = mutatedJob.company) === null || _mutatedJob$company === void 0 ? void 0 : _mutatedJob$company.name : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"i\", {\n        children: \"Company not specified \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: [\"Location:\", \" \", (mutatedJob === null || mutatedJob === void 0 ? void 0 : mutatedJob.locationNames) !== null && mutatedJob.locationNames !== \"\" ? mutatedJob === null || mutatedJob === void 0 ? void 0 : mutatedJob.locationNames : \"Remote\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      style: {\n        maxHeight: \"200px\",\n        overflow: \"scroll\"\n      },\n      children: mutatedJob === null || mutatedJob === void 0 ? void 0 : mutatedJob.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return mutateFunction({\n          variables: {\n            postJobInput: {\n              title: \"software developer\",\n              commitmentId: job.commitment.id,\n              companyName: job.company.name,\n              locationNames: \"New Yowk\",\n              userEmail: \"irakini@gmail.com\",\n              description: \"Here goes the description\",\n              applyUrl: \"url.com\"\n            }\n          }\n        }).then(function (data) {\n          console.log(data.data.postJob);\n          setMutatedJob(data.data.postJob);\n        });\n      },\n      children: \"Add New\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Job, \"amfDC1kEpT5nuAcGk2IDAtpi0lQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation];\n});\n\n_c = Job;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Job);\n\nvar _c;\n\n$RefreshReg$(_c, \"Job\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qb2JzL1tqb2JTbHVnXS9bY29tcGFueVNsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7OztBQXlCQSxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFhO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVOztBQUN2QixxQkFBbURKLDJEQUFXLENBQUNDLHVEQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPSSxjQUFQO0FBQUE7QUFBQSxNQUF5QkMsSUFBekIsa0JBQXlCQSxJQUF6QjtBQUFBLE1BQStCQyxPQUEvQixrQkFBK0JBLE9BQS9CO0FBQUEsTUFBd0NDLEtBQXhDLGtCQUF3Q0EsS0FBeEM7O0FBQ0Esd0JBQW9DTixxREFBQSxDQUFvQkUsR0FBcEIsQ0FBcEM7QUFBQTtBQUFBLE1BQU9NLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsTUFBSUosT0FBSixFQUFhLE9BQU8sZUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxtQ0FBNEJBLEtBQUssQ0FBQ0ksT0FBbEM7QUFDWCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLFVBQUwsYUFBS0EsVUFBTCx1QkFBS0EsVUFBVSxDQUFFRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDBCQUNRLEdBRFIsRUFFR0gsVUFBVSxDQUFDSSxPQUFYLEdBQ0NKLFVBREQsYUFDQ0EsVUFERCw4Q0FDQ0EsVUFBVSxDQUFFSSxPQURiLHdEQUNDLG9CQUFxQkMsSUFEdEIsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVVFO0FBQUEsOEJBQ1ksR0FEWixFQUVHLENBQUFMLFVBQVUsU0FBVixJQUFBQSxVQUFVLFdBQVYsWUFBQUEsVUFBVSxDQUFFTSxhQUFaLE1BQThCLElBQTlCLElBQXNDTixVQUFVLENBQUNNLGFBQVgsS0FBNkIsRUFBbkUsR0FDR04sVUFESCxhQUNHQSxVQURILHVCQUNHQSxVQUFVLENBQUVNLGFBRGYsR0FFRyxRQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBZ0JFO0FBQUssV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFNBQVMsRUFBRSxPQUFiO0FBQXNCQyxRQUFBQSxRQUFRLEVBQUU7QUFBaEMsT0FBWjtBQUFBLGdCQUNHUixVQURILGFBQ0dBLFVBREgsdUJBQ0dBLFVBQVUsQ0FBRVM7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLGVBbUJFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFDUGQsY0FBYyxDQUFDO0FBQ2JlLFVBQUFBLFNBQVMsRUFBRTtBQUNUQyxZQUFBQSxZQUFZLEVBQUU7QUFDWlIsY0FBQUEsS0FBSyxFQUFFLG9CQURLO0FBRVpTLGNBQUFBLFlBQVksRUFBRWxCLEdBQUcsQ0FBQ21CLFVBQUosQ0FBZUMsRUFGakI7QUFHWkMsY0FBQUEsV0FBVyxFQUFFckIsR0FBRyxDQUFDVSxPQUFKLENBQVlDLElBSGI7QUFJWkMsY0FBQUEsYUFBYSxFQUFFLFVBSkg7QUFLWlUsY0FBQUEsU0FBUyxFQUFFLG1CQUxDO0FBTVpQLGNBQUFBLFdBQVcsRUFBRSwyQkFORDtBQU9aUSxjQUFBQSxRQUFRLEVBQUU7QUFQRTtBQURMO0FBREUsU0FBRCxDQUFkLENBWUdDLElBWkgsQ0FZUSxVQUFDdEIsSUFBRCxFQUFlO0FBQ3JCdUIsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl4QixJQUFJLENBQUNBLElBQUwsQ0FBVXlCLE9BQXRCO0FBQ0FwQixVQUFBQSxhQUFhLENBQUNMLElBQUksQ0FBQ0EsSUFBTCxDQUFVeUIsT0FBWCxDQUFiO0FBQ0QsU0FmRCxDQURPO0FBQUEsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQWxERDs7R0FBTTVCO1VBQytDSDs7O0tBRC9DRzs7QUFxRk4sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy9bam9iU2x1Z10vW2NvbXBhbnlTbHVnXS50c3g/YmNiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi9hcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRBbGxKb2JzLCBnZXRKb2IsIG11dGF0ZUpvYiB9IGZyb20gXCIuLi8uLi8uLi9xdWVyaWVzL3F1ZXJpZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEpvYklucHV0IHtcbiAgam9iSW5wdXQ6IHtcbiAgICBqb2JTbHVnOiBTdHJpbmc7XG4gICAgY29tcGFueVNsdWc6IFN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEpvYk91dHB1dCB7XG4gIGpvYjoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbG9jYXRpb25OYW1lczogc3RyaW5nO1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY29tcGFueToge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICB9O1xuICAgIGNvbW1pdG1lbnQ6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn1cblxuY29uc3QgSm9iID0gKHsgam9iIH0pID0+IHtcbiAgY29uc3QgW211dGF0ZUZ1bmN0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24obXV0YXRlSm9iKTtcbiAgY29uc3QgW211dGF0ZWRKb2IsIHNldE11dGF0ZWRKb2JdID0gUmVhY3QudXNlU3RhdGU8YW55Pihqb2IpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gXCJTdWJtaXR0aW5nLi4uXCI7XG4gIGlmIChlcnJvcikgcmV0dXJuIGBTdWJtaXNzaW9uIGVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnttdXRhdGVkSm9iPy50aXRsZX08L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgRnJvbTp7XCIgXCJ9XG4gICAgICAgIHttdXRhdGVkSm9iLmNvbXBhbnkgPyAoXG4gICAgICAgICAgbXV0YXRlZEpvYj8uY29tcGFueT8ubmFtZVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpPkNvbXBhbnkgbm90IHNwZWNpZmllZCA8L2k+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIExvY2F0aW9uOntcIiBcIn1cbiAgICAgICAge211dGF0ZWRKb2I/LmxvY2F0aW9uTmFtZXMgIT09IG51bGwgJiYgbXV0YXRlZEpvYi5sb2NhdGlvbk5hbWVzICE9PSBcIlwiXG4gICAgICAgICAgPyBtdXRhdGVkSm9iPy5sb2NhdGlvbk5hbWVzXG4gICAgICAgICAgOiBcIlJlbW90ZVwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heEhlaWdodDogXCIyMDBweFwiLCBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgICAge211dGF0ZWRKb2I/LmRlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgbXV0YXRlRnVuY3Rpb24oe1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHBvc3RKb2JJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcInNvZnR3YXJlIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgIGNvbW1pdG1lbnRJZDogam9iLmNvbW1pdG1lbnQuaWQsXG4gICAgICAgICAgICAgICAgY29tcGFueU5hbWU6IGpvYi5jb21wYW55Lm5hbWUsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lczogXCJOZXcgWW93a1wiLFxuICAgICAgICAgICAgICAgIHVzZXJFbWFpbDogXCJpcmFraW5pQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlcmUgZ29lcyB0aGUgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBhcHBseVVybDogXCJ1cmwuY29tXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhLnBvc3RKb2IpO1xuICAgICAgICAgICAgc2V0TXV0YXRlZEpvYihkYXRhLmRhdGEucG9zdEpvYik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBBZGQgTmV3XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBnZXRBbGxKb2JzLFxuICB9KTtcblxuICBjb25zdCBqb2JzID0gZGF0YS5qb2JzLnNsaWNlKDAsIDE1KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBqb2JzLm1hcCgoam9iKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IGpvYlNsdWc6IGpvYi5zbHVnLCBjb21wYW55U2x1Zzogam9iLmNvbXBhbnkuc2x1ZyB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5PEpvYk91dHB1dCwgSm9iSW5wdXQ+KHtcbiAgICBxdWVyeTogZ2V0Sm9iLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgam9iSW5wdXQ6IHtcbiAgICAgICAgam9iU2x1ZzogY29udGV4dC5wYXJhbXMuam9iU2x1ZyxcbiAgICAgICAgY29tcGFueVNsdWc6IGNvbnRleHQucGFyYW1zLmNvbXBhbnlTbHVnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBqb2I6IGRhdGEuam9iLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvYjtcbiJdLCJuYW1lcyI6WyJ1c2VNdXRhdGlvbiIsIm11dGF0ZUpvYiIsIlJlYWN0IiwiSm9iIiwiam9iIiwibXV0YXRlRnVuY3Rpb24iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlU3RhdGUiLCJtdXRhdGVkSm9iIiwic2V0TXV0YXRlZEpvYiIsIm1lc3NhZ2UiLCJ0aXRsZSIsImNvbXBhbnkiLCJuYW1lIiwibG9jYXRpb25OYW1lcyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiZGVzY3JpcHRpb24iLCJ2YXJpYWJsZXMiLCJwb3N0Sm9iSW5wdXQiLCJjb21taXRtZW50SWQiLCJjb21taXRtZW50IiwiaWQiLCJjb21wYW55TmFtZSIsInVzZXJFbWFpbCIsImFwcGx5VXJsIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Sm9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/jobs/[jobSlug]/[companySlug].tsx\n");

/***/ })

});