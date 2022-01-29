"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Nav_tsx",{

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reduxHooks */ \"./src/redux/reduxHooks.ts\");\n/* harmony import */ var _redux_navHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/navHeight */ \"./src/redux/navHeight.ts\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"notHovered\"), animationState = ref[0], setAnimationState = ref[1];\n    var navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)({\n        query: \"(max-width: 1224px)\"\n    });\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hamburgerState = ref1[0], setHamburgerState = ref1[1];\n    var dispatch = (0,_redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (navRef.current) {\n            if (true) {\n                dispatch((0,_redux_navHeight__WEBPACK_IMPORTED_MODULE_4__.setNavHeight)(parseInt(window.getComputedStyle(navRef.current).height) + 30));\n            }\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.nav, {\n        className: \"flex py-6 px-8 md:px-24 justify-between items-center sticky top-0 bg-bg-surface z-50 overflow-hidden \".concat(isTabletOrMobile ? \"flex-col\" : \"flex-row\"),\n        ref: navRef,\n        layout: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: isTabletOrMobile ? \"flex justify-between items-center w-full\" : \"\",\n                layout: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"flex space-x-6 items-center\",\n                        onHoverStart: function() {\n                            setAnimationState(\"hovered\");\n                        },\n                        onHoverEnd: function() {\n                            setAnimationState(\"notHovered\");\n                        },\n                        onTap: function() {\n                            setAnimationState(\"hovered\");\n                            setTimeout(function() {\n                                setAnimationState(\"notHovered\");\n                            }, 2000);\n                        },\n                        layout: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"border border-[#303436] rounded-full flex justify-center items-center overflow-hidden h-12 w-12\",\n                                layout: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                                    exitBeforeEnter: true,\n                                    children: [\n                                        animationState === \"notHovered\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.figure, {\n                                            animate: {\n                                                x: 0,\n                                                scale: 1,\n                                                rotate: 0\n                                            },\n                                            initial: {\n                                                x: -100\n                                            },\n                                            exit: {\n                                                scale: 15,\n                                                rotate: 270,\n                                                transition: {\n                                                    ease: [\n                                                        0.07,\n                                                        -0.04,\n                                                        1,\n                                                        0.4\n                                                    ],\n                                                    duration: 0.8\n                                                }\n                                            },\n                                            transition: {\n                                                duration: 0.5,\n                                                type: \"spring\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPerson, {\n                                                color: \"#C3C1BA\",\n                                                size: 25\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, animationState, false, {\n                                            fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, _this),\n                                        animationState === \"hovered\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.figure, {\n                                            animate: {\n                                                opacity: 1,\n                                                y: 0,\n                                                scale: 1\n                                            },\n                                            initial: {\n                                                opacity: 0,\n                                                y: 50,\n                                                scale: 0.3\n                                            },\n                                            exit: {\n                                                x: 100\n                                            },\n                                            transition: {\n                                                duration: 0.5,\n                                                type: \"spring\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/yourpicture.png\",\n                                                alt: \"profile\",\n                                                className: \"max-h-full max-w-full object-cover\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, animationState, false, {\n                                            fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium text-xl \".concat(animationState === \"hovered\" ? \"name-gradient\" : \"text-white\"),\n                                children: \"Portfolio-Template\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    isTabletOrMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return setHamburgerState(!hamburgerState);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                animate: {\n                                    rotate: hamburgerState ? 40 : 0,\n                                    transformOrigin: \"top left\",\n                                    marginBottom: hamburgerState ? \"20px\" : \"10px\"\n                                },\n                                className: \"bg-white h-0.5 rounded-full w-9\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                animate: {\n                                    rotate: hamburgerState ? -40 : 0,\n                                    transformOrigin: \"bottom left\",\n                                    marginTop: hamburgerState ? \"20px\" : \"10px\"\n                                },\n                                className: \"bg-white h-0.5 rounded-full w-9\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            !isTabletOrMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white-secondary flex items-center space-x-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#work\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#techstack\",\n                        children: \"Tech Stack\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: isTabletOrMobile && hamburgerState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: \"text-white-secondary flex items-center flex-col text-xl space-y-4 mt-6\",\n                    layout: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: function() {\n                                return setHamburgerState(false);\n                            },\n                            href: \"#work\",\n                            children: \"My Projects\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: function() {\n                                return setHamburgerState(false);\n                            },\n                            href: \"#techstack\",\n                            children: \"Tools\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: function() {\n                                return setHamburgerState(false);\n                            },\n                            href: \"#contact\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, \"\".concat(hamburgerState), true, {\n                    fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\GitHub\\\\Portfolio-Template\\\\src\\\\components\\\\Nav.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_s(Nav, \"tnLZ5402JqWehkjPW+ZJIdL8KY4=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery,\n        _redux_reduxHooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFLFFBQVE7Z0NBQUZwQyxNQUFNLENBQU5BLGlCQUFpQixDQUFDLEtBQUs7OzRCQUFHd0MsSUFBSSxFQUFDLENBQVU7c0NBQUMsQ0FFNUQ7Ozs7Ozs7bUJBWE0sR0FBaUIsT0FBZnpDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxDLENBQUM7R0FsSktOLEdBQUc7O1FBR2tCRCwyREFBYTtRQUdyQkYsNkRBQWM7OztLQU4zQkcsR0FBRztBQW9KVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdi50c3g/MWY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc1BlcnNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vcmVkdXgvcmVkdXhIb29rc1wiO1xuaW1wb3J0IHsgc2V0TmF2SGVpZ2h0IH0gZnJvbSBcIi4uL3JlZHV4L25hdkhlaWdodFwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XG5cbmNvbnN0IE5hdjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthbmltYXRpb25TdGF0ZSwgc2V0QW5pbWF0aW9uU3RhdGVdID0gdXNlU3RhdGUoXCJub3RIb3ZlcmVkXCIpO1xuICBjb25zdCBuYXZSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBpc1RhYmxldE9yTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihtYXgtd2lkdGg6IDEyMjRweClcIiB9KTtcbiAgY29uc3QgW2hhbWJ1cmdlclN0YXRlLCBzZXRIYW1idXJnZXJTdGF0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hdlJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBzZXROYXZIZWlnaHQoXG4gICAgICAgICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXZSZWYuY3VycmVudCkuaGVpZ2h0KSArIDMwXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24ubmF2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IHB5LTYgcHgtOCBtZDpweC0yNCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHN0aWNreSB0b3AtMCBiZy1iZy1zdXJmYWNlIHotNTAgb3ZlcmZsb3ctaGlkZGVuICR7XG4gICAgICAgIGlzVGFibGV0T3JNb2JpbGUgPyBcImZsZXgtY29sXCIgOiBcImZsZXgtcm93XCJcbiAgICAgIH1gfVxuICAgICAgcmVmPXtuYXZSZWZ9XG4gICAgICBsYXlvdXRcbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGlzVGFibGV0T3JNb2JpbGUgPyBcImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIiA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICBsYXlvdXRcbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgIG9uSG92ZXJTdGFydD17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RhdGUoXCJob3ZlcmVkXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Ib3ZlckVuZD17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RhdGUoXCJub3RIb3ZlcmVkXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFuaW1hdGlvblN0YXRlKFwiaG92ZXJlZFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRBbmltYXRpb25TdGF0ZShcIm5vdEhvdmVyZWRcIik7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxheW91dFxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItWyMzMDM0MzZdIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gaC0xMiB3LTEyXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuICAgICAgICAgICAgICB7YW5pbWF0aW9uU3RhdGUgPT09IFwibm90SG92ZXJlZFwiICYmIChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmZpZ3VyZVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBzY2FsZTogMSwgcm90YXRlOiAwIH19XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDE1LFxuICAgICAgICAgICAgICAgICAgICByb3RhdGU6IDI3MCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFswLjA3LCAtMC4wNCwgMSwgMC40XSxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgdHlwZTogXCJzcHJpbmdcIiB9fVxuICAgICAgICAgICAgICAgICAga2V5PXthbmltYXRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnNQZXJzb24gY29sb3I9XCIjQzNDMUJBXCIgc2l6ZT17MjV9IC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZmlndXJlPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7YW5pbWF0aW9uU3RhdGUgPT09IFwiaG92ZXJlZFwiICYmIChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmZpZ3VyZVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1MCwgc2NhbGU6IDAuMyB9fVxuICAgICAgICAgICAgICAgICAgZXhpdD17eyB4OiAxMDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgdHlwZTogXCJzcHJpbmdcIiB9fVxuICAgICAgICAgICAgICAgICAga2V5PXthbmltYXRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi95b3VycGljdHVyZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtZnVsbCBtYXgtdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmZpZ3VyZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gdGV4dC14bCAke1xuICAgICAgICAgICAgICBhbmltYXRpb25TdGF0ZSA9PT0gXCJob3ZlcmVkXCIgPyBcIm5hbWUtZ3JhZGllbnRcIiA6IFwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb3J0Zm9saW8tVGVtcGxhdGVcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAge2lzVGFibGV0T3JNb2JpbGUgJiYgKFxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0SGFtYnVyZ2VyU3RhdGUoIWhhbWJ1cmdlclN0YXRlKX0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgcm90YXRlOiBoYW1idXJnZXJTdGF0ZSA/IDQwIDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwidG9wIGxlZnRcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGhhbWJ1cmdlclN0YXRlID8gXCIyMHB4XCIgOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0wLjUgcm91bmRlZC1mdWxsIHctOVwiXG4gICAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogaGFtYnVyZ2VyU3RhdGUgPyAtNDAgOiAwLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogaGFtYnVyZ2VyU3RhdGUgPyBcIjIwcHhcIiA6IFwiMTBweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTAuNSByb3VuZGVkLWZ1bGwgdy05XCJcbiAgICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICB7IWlzVGFibGV0T3JNb2JpbGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUtc2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMTZcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiI3dvcmtcIj5Xb3JrPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjdGVjaHN0YWNrXCI+VGVjaCBTdGFjazwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7aXNUYWJsZXRPck1vYmlsZSAmJiBoYW1idXJnZXJTdGF0ZSAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUtc2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIHRleHQteGwgc3BhY2UteS00IG10LTZcIlxuICAgICAgICAgICAga2V5PXtgJHtoYW1idXJnZXJTdGF0ZX1gfVxuICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0SGFtYnVyZ2VyU3RhdGUoZmFsc2UpfSBocmVmPVwiI3dvcmtcIj5cbiAgICAgICAgICAgICAgTXkgUHJvamVjdHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEhhbWJ1cmdlclN0YXRlKGZhbHNlKX0gaHJlZj1cIiN0ZWNoc3RhY2tcIj5cbiAgICAgICAgICAgICAgVG9vbHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEhhbWJ1cmdlclN0YXRlKGZhbHNlKX0gaHJlZj1cIiNjb250YWN0XCI+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L21vdGlvbi5uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJCc1BlcnNvbiIsIkxpbmsiLCJ1c2VBcHBEaXNwYXRjaCIsInNldE5hdkhlaWdodCIsInVzZU1lZGlhUXVlcnkiLCJOYXYiLCJhbmltYXRpb25TdGF0ZSIsInNldEFuaW1hdGlvblN0YXRlIiwibmF2UmVmIiwiaXNUYWJsZXRPck1vYmlsZSIsInF1ZXJ5IiwiaGFtYnVyZ2VyU3RhdGUiLCJzZXRIYW1idXJnZXJTdGF0ZSIsImRpc3BhdGNoIiwiY3VycmVudCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodCIsIm5hdiIsImNsYXNzTmFtZSIsInJlZiIsImxheW91dCIsImRpdiIsIm9uSG92ZXJTdGFydCIsIm9uSG92ZXJFbmQiLCJvblRhcCIsInNldFRpbWVvdXQiLCJleGl0QmVmb3JlRW50ZXIiLCJmaWd1cmUiLCJhbmltYXRlIiwieCIsInNjYWxlIiwicm90YXRlIiwiaW5pdGlhbCIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwidHlwZSIsImNvbG9yIiwic2l6ZSIsIm9wYWNpdHkiLCJ5IiwiaW1nIiwic3JjIiwiYWx0IiwicCIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm1PcmlnaW4iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav.tsx\n");

/***/ })

});