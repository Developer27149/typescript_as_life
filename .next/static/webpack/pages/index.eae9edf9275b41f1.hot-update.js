"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MoreStories/index.tsx":
/*!******************************************!*\
  !*** ./components/MoreStories/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/post-preview */ \"./components/post-preview.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar MoreStories = function(param) {\n    var posts = param.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n        initial: {\n            y: 20,\n            opacity: 0.5\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight\",\n                children: \"顾左右而言他\"\n            }, void 0, false, {\n                fileName: \"/Users/youyi/repos/typescript_as_life/components/MoreStories/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32\",\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_preview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: post.title,\n                        coverImage: post.coverImage,\n                        date: post.date,\n                        author: post.author,\n                        slug: post.slug,\n                        excerpt: post.excerpt\n                    }, post.slug, false, {\n                        fileName: \"/Users/youyi/repos/typescript_as_life/components/MoreStories/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/youyi/repos/typescript_as_life/components/MoreStories/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youyi/repos/typescript_as_life/components/MoreStories/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = MoreStories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreStories);\nvar _c;\n$RefreshReg$(_c, \"MoreStories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vcmVTdG9yaWVzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNvRDtBQUNiO0FBTXZDLElBQU1FLFdBQVcsR0FBRyxnQkFBc0I7UUFBbkJDLEtBQUssU0FBTEEsS0FBSztJQUMxQixxQkFDRSw4REFBQ0YseURBQWM7UUFDYkksT0FBTyxFQUFFO1lBQUVDLENBQUMsRUFBRSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxHQUFHO1NBQUU7UUFDaENDLE9BQU8sRUFBRTtZQUFFRixDQUFDLEVBQUUsQ0FBQztZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQzdCRSxVQUFVLEVBQUU7WUFBRUMsUUFBUSxFQUFFLEdBQUc7U0FBRTs7MEJBRTdCLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsbUVBQW1FOzBCQUFDLFFBRWxGOzs7OztxQkFBSzswQkFDTCw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLG9GQUFvRjswQkFDaEdULEtBQUssQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNmLGdFQUFXO3dCQUVWZ0IsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7d0JBQ2pCQyxVQUFVLEVBQUVGLElBQUksQ0FBQ0UsVUFBVTt3QkFDM0JDLElBQUksRUFBRUgsSUFBSSxDQUFDRyxJQUFJO3dCQUNmQyxNQUFNLEVBQUVKLElBQUksQ0FBQ0ksTUFBTTt3QkFDbkJDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO3dCQUNmQyxPQUFPLEVBQUVOLElBQUksQ0FBQ00sT0FBTzt1QkFOaEJOLElBQUksQ0FBQ0ssSUFBSTs7Ozs2QkFPZDtpQkFDSCxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ1MsQ0FDakI7Q0FDSDtBQXpCS2xCLEtBQUFBLFdBQVc7QUEyQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3JlU3Rvcmllcy9pbmRleC50c3g/NzMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBQb3N0IGZyb20gXCJAL2ludGVyZmFjZXMvcG9zdFwiO1xuaW1wb3J0IFBvc3RQcmV2aWV3IGZyb20gXCJAL2NvbXBvbmVudHMvcG9zdC1wcmV2aWV3XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0czogUG9zdFtdO1xufTtcblxuY29uc3QgTW9yZVN0b3JpZXMgPSAoeyBwb3N0cyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uc2VjdGlvblxuICAgICAgaW5pdGlhbD17eyB5OiAyMCwgb3BhY2l0eTogMC41IH19XG4gICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgID5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi04IHRleHQteGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodFwiPlxuICAgICAgICDpob7lt6blj7PogIzoqIDku5ZcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLXgtMTYgbGc6Z2FwLXgtMzIgZ2FwLXktMjAgbWQ6Z2FwLXktMzIgbWItMzJcIj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e3Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgIGF1dGhvcj17cG9zdC5hdXRob3J9XG4gICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICBleGNlcnB0PXtwb3N0LmV4Y2VycHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9yZVN0b3JpZXM7XG4iXSwibmFtZXMiOlsiUG9zdFByZXZpZXciLCJtb3Rpb24iLCJNb3JlU3RvcmllcyIsInBvc3RzIiwic2VjdGlvbiIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MoreStories/index.tsx\n"));

/***/ })

});