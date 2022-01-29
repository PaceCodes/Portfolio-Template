/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./src/components/Work.tsx":
    /*!*********************************!*\
  !*** ./src/components/Work.tsx ***!
  \*********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _workData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workData */ "./src/workData.ts");\n/* harmony import */ var _workData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_workData__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _WorkCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkCard */ "./src/components/WorkCard.tsx");\n/* harmony import */ var _redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reduxHooks */ "./src/redux/reduxHooks.ts");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.mjs");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Work = function() {\n    var _this1 = _this;\n    _s();\n    var navHeight = (0,_redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function(store) {\n        return store.navHeight;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {\n        id: "work",\n        className: "space-y-12 px-8 md:px-24",\n        style: {\n            scrollMarginTop: "".concat(navHeight, "px")\n        },\n        layout: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {\n                className: "text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter",\n                children: "My Projects"\n            }, void 0, false, {\n                fileName: "D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Work.tsx",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "grid md:grid-cols-2 gap-6",\n                children: _workData__WEBPACK_IMPORTED_MODULE_1___default().map(function(project, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkCard__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                        title: project.title,\n                        techTitle: project.techTitle,\n                        description: project.description,\n                        repoLink: project.repoLink,\n                        index: i\n                    }, i, false, {\n                        fileName: "D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Work.tsx",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: "D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Work.tsx",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: "D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Work.tsx",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this));\n};\n_s(Work, "F76jIqz87y3a/WxAY2GKtSRKzAM=", false, function() {\n    return [\n        _redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Work;\n/* harmony default export */ __webpack_exports__["default"] = (Work);\nvar _c;\n$RefreshReg$(_c, "Work");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3JrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2tDO0FBQ0Q7QUFDbUI7QUFDZDs7O0FBRXRDLEdBQUssQ0FBQ0ksSUFBSSxHQUFPLFFBQ2pCLEdBRHVCLENBQUM7OztJQUN0QixHQUFLLENBQUNDLFNBQVMsR0FBR0gsaUVBQWMsQ0FBQyxRQUFRLENBQVBJLEtBQUs7UUFBS0EsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxTQUFTOztJQUUzRCxNQUFNLDZFQUNIRix5REFBYztRQUNiSyxFQUFFLEVBQUMsQ0FBTTtRQUNUQyxTQUFTLEVBQUMsQ0FBMEI7UUFDcENDLEtBQUssRUFBRSxDQUFDO1lBQUNDLGVBQWUsRUFBRyxHQUFZLE1BQUUsQ0FBWk4sU0FBUyxFQUFDLENBQUU7UUFBRSxDQUFDO1FBQzVDTyxNQUFNOzt3RkFFTEMsQ0FBRTtnQkFBQ0osU0FBUyxFQUFDLENBQTZGOzBCQUFDLENBRTVHOzs7Ozs7d0ZBQ0NLLENBQUc7Z0JBQUNMLFNBQVMsRUFBQyxDQUEyQjswQkFDdkNULG9EQUFZLENBQUMsUUFBUSxDQUFQZ0IsT0FBTyxFQUFFQyxDQUFDO2tDQUN2QixNQUFNLCtEQUFMaEIsaURBQVE7d0JBQ1BpQixLQUFLLEVBQUVGLE9BQU8sQ0FBQ0UsS0FBSzt3QkFDcEJDLFNBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUFTO3dCQUM1QkMsV0FBVyxFQUFFSixPQUFPLENBQUNJLFdBQVc7d0JBQ2hDQyxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0ssUUFBUTt3QkFDMUJDLEtBQUssRUFBRUwsQ0FBQzt1QkFDSEEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEIsQ0FBQztHQTNCS2IsSUFBSTs7UUFDVUYsNkRBQWM7OztLQUQ1QkUsSUFBSTtBQTZCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmsudHN4PzUyNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vd29ya0RhdGFcIjtcbmltcG9ydCBXb3JrQ2FyZCBmcm9tIFwiLi9Xb3JrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdXhIb29rc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgV29yazogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkhlaWdodCA9IHVzZUFwcFNlbGVjdG9yKChzdG9yZSkgPT4gc3RvcmUubmF2SGVpZ2h0KTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uc2VjdGlvblxuICAgICAgaWQ9XCJ3b3JrXCJcbiAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktMTIgcHgtOCBtZDpweC0yNFwiXG4gICAgICBzdHlsZT17eyBzY3JvbGxNYXJnaW5Ub3A6IGAke25hdkhlaWdodH1weGAgfX1cbiAgICAgIGxheW91dFxuICAgID5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtb3BlblNhbnMgdGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIG10LTYgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodGVyXCI+XG4gICAgICAgIE15IFByb2plY3RzXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcbiAgICAgICAgICA8V29ya0NhcmRcbiAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgdGVjaFRpdGxlPXtwcm9qZWN0LnRlY2hUaXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgZGVtb0xpbms9e3Byb2plY3QuZGVtb0xpbmt9XG4gICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLnNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrO1xuIl0sIm5hbWVzIjpbInByb2plY3RzIiwiV29ya0NhcmQiLCJ1c2VBcHBTZWxlY3RvciIsIm1vdGlvbiIsIldvcmsiLCJuYXZIZWlnaHQiLCJzdG9yZSIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwic2Nyb2xsTWFyZ2luVG9wIiwibGF5b3V0IiwiaDEiLCJkaXYiLCJtYXAiLCJwcm9qZWN0IiwiaSIsInRpdGxlIiwidGVjaFRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZW1vTGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Work.tsx\n'
      );

      /***/
    },

  /***/ "./src/workData.ts":
    /*!*************************!*\
  !*** ./src/workData.ts ***!
  \*************************/
    /***/ function (module, __unused_webpack_exports, __webpack_require__) {
      /* module decorator */ module = __webpack_require__.nmd(module);

      var _a, _b;
      // Legacy CSS implementations will `eval` browser code in a Node.js context
      // to extract CSS. For backwards compatibility, we need to check we're in a
      // browser context before continuing.
      if (
        typeof self !== "undefined" &&
        // AMP / No-JS mode does not inject these helpers:
        "$RefreshHelpers$" in self
      ) {
        var currentExports = module.__proto__.exports;
        var prevExports =
          (_b =
            (_a = module.hot.data) === null || _a === void 0
              ? void 0
              : _a.prevExports) !== null && _b !== void 0
            ? _b
            : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(
          currentExports,
          module.id
        );
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
          // Save the previous exports on update so we can compare the boundary
          // signatures.
          module.hot.dispose(function (data) {
            data.prevExports = currentExports;
          });
          // Unconditionally accept an update to this module, we'll check if it's
          // still a Refresh Boundary later.
          module.hot.accept();
          // This field is set when the previous version of this module was a
          // Refresh Boundary, letting us know we need to check for invalidation or
          // enqueue an update.
          if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (
              self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                prevExports,
                currentExports
              )
            ) {
              module.hot.invalidate();
            } else {
              self.$RefreshHelpers$.scheduleUpdate();
            }
          }
        } else {
          // Since we just executed the code for the module, it's possible that the
          // new exports made it ineligible for being a boundary.
          // We only care about the case when we were _previously_ a boundary,
          // because we already accepted this update (accidental side effect).
          var isNoLongerABoundary = prevExports !== null;
          if (isNoLongerABoundary) {
            module.hot.invalidate();
          }
        }
      }

      /***/
    },
});
