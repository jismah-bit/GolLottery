/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ProtectedRoute.tsx":
/*!***************************************!*\
  !*** ./components/ProtectedRoute.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst ProtectedRoute = ({ children  })=>{\n    const { user  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!user) {\n            router.push('/login');\n        }\n    }, [\n        router,\n        user\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? children : null\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNRO0FBRWhELEtBQUssQ0FBQ0ksY0FBYyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFnQyxDQUFDLEdBQUssQ0FBQztJQUN2RSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHSCw2REFBTztJQUN4QixLQUFLLENBQUNJLE1BQU0sR0FBR1Asc0RBQVM7SUFFeEJFLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR0ksSUFBSSxFQUFFLENBQUM7WUFDVkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNEO1FBQUFBLE1BQU07UUFBRUQsSUFBSTtJQUFBLENBQUM7SUFFakIsTUFBTTtrQkFBSUEsSUFBSSxHQUFHRCxRQUFRLEdBQUcsSUFBSTs7QUFDbEMsQ0FBQztBQUVELGlFQUFlRCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sbG90dGVyeS8uL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUudHN4PzczMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCdcblxuY29uc3QgUHJvdGVjdGVkUm91dGUgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHVzZXJdKVxuXG4gIHJldHVybiA8Pnt1c2VyID8gY2hpbGRyZW4gOiBudWxsfTwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQXV0aCIsIlByb3RlY3RlZFJvdXRlIiwiY2hpbGRyZW4iLCJ1c2VyIiwicm91dGVyIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProtectedRoute.tsx\n");

/***/ }),

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"database\": () => (/* binding */ database),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCVzWbRBoqUS57O5a2_WHZ58b5ogNOefno\",\n    authDomain: \"gollottery.firebaseapp.com\",\n    projectId: \"gollottery\",\n    storageBucket: \"gollottery.appspot.com\",\n    messagingSenderId: \"776047002872\",\n    appId: \"1:776047002872:web:291149e5c88da7bfaa270d\",\n    measurementId: \"G-FGW9ZJQPRQ\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFFVTtBQUVqRCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUUsQ0FBeUM7SUFDakRDLFVBQVUsRUFBRSxDQUE0QjtJQUN4Q0MsU0FBUyxFQUFFLENBQVk7SUFDdkJDLGFBQWEsRUFBRSxDQUF3QjtJQUN2Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUMvQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxHQUFHLEdBQUdYLDJEQUFhLENBQUNHLGNBQWM7QUFDeEMsS0FBSyxDQUFDUyxRQUFRLEdBQUdWLGdFQUFZLENBQUNTLEdBQUc7QUFDakMsS0FBSyxDQUFDRSxJQUFJLEdBQUdaLHNEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sbG90dGVyeS8uL2NvbmZpZy9maXJlYmFzZS50cz9jOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDVnpXYlJCb3FVUzU3TzVhMl9XSFo1OGI1b2dOT2Vmbm9cIixcbiAgYXV0aERvbWFpbjogXCJnb2xsb3R0ZXJ5LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiZ29sbG90dGVyeVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImdvbGxvdHRlcnkuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzc2MDQ3MDAyODcyXCIsXG4gIGFwcElkOiBcIjE6Nzc2MDQ3MDAyODcyOndlYjoyOTExNDllNWM4OGRhN2JmYWEyNzBkXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1GR1c5WkpRUFJRXCJcbn07XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmV4cG9ydCBjb25zdCBkYXRhYmFzZSA9IGdldEZpcmVzdG9yZShhcHApO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)\n;\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            if (user) {\n                setUser({\n                    uid: user.uid,\n                    email: user.email,\n                    displayName: user.displayName\n                });\n            } else {\n                setUser(null);\n            }\n            setLoading(false);\n        });\n        return ()=>unsubscribe()\n        ;\n    }, []);\n    const signup = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const login = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logout = async ()=>{\n        setUser(null);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            login,\n            signup,\n            logout\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"/workspaces/GolLottery/context/AuthContext.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFNaEQ7QUFDbUI7QUFFekMsS0FBSyxDQUFDUyxXQUFXLGlCQUFHVCxvREFBYSxDQUFNLENBQUMsQ0FBQztBQUVsQyxLQUFLLENBQUNVLE9BQU8sT0FBU1QsaURBQVUsQ0FBQ1EsV0FBVzs7QUFFNUMsS0FBSyxDQUFDRSxtQkFBbUIsSUFBSSxDQUFDLENBQ25DQyxRQUFRLEVBR1YsQ0FBQyxHQUFLLENBQUM7SUFDTCxLQUFLLE1BQUVDLEtBQUksTUFBRUMsT0FBTyxNQUFJWCwrQ0FBUSxDQUFNLElBQUk7SUFDMUMsS0FBSyxNQUFFWSxPQUFPLE1BQUVDLFVBQVUsTUFBSWIsK0NBQVEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNlLFdBQVcsR0FBR2IsaUVBQWtCLENBQUNJLGtEQUFJLEdBQUdLLElBQUksR0FBSyxDQUFDO1lBQ3RELEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1RDLE9BQU8sQ0FBQyxDQUFDO29CQUNQSSxHQUFHLEVBQUVMLElBQUksQ0FBQ0ssR0FBRztvQkFDYkMsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7b0JBQ2pCQyxXQUFXLEVBQUVQLElBQUksQ0FBQ08sV0FBVztnQkFDL0IsQ0FBQztZQUNILENBQUMsTUFBTSxDQUFDO2dCQUNOTixPQUFPLENBQUMsSUFBSTtZQUNkLENBQUM7WUFDREUsVUFBVSxDQUFDLEtBQUs7UUFDbEIsQ0FBQztRQUVELE1BQU0sS0FBT0MsV0FBVzs7SUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0ksTUFBTSxJQUFJRixLQUFhLEVBQUVHLFFBQWdCLEdBQUssQ0FBQztRQUNuRCxNQUFNLENBQUNqQiw2RUFBOEIsQ0FBQ0csa0RBQUksRUFBRVcsS0FBSyxFQUFFRyxRQUFRO0lBQzdELENBQUM7SUFFRCxLQUFLLENBQUNDLEtBQUssSUFBSUosS0FBYSxFQUFFRyxRQUFnQixHQUFLLENBQUM7UUFDbEQsTUFBTSxDQUFDaEIseUVBQTBCLENBQUNFLGtEQUFJLEVBQUVXLEtBQUssRUFBRUcsUUFBUTtJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDRSxNQUFNLGFBQWUsQ0FBQztRQUMxQlYsT0FBTyxDQUFDLElBQUk7UUFDWixLQUFLLENBQUNQLHNEQUFPLENBQUNDLGtEQUFJO0lBQ3BCLENBQUM7SUFFRCxNQUFNLDZFQUNIQyxXQUFXLENBQUNnQixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNiLElBQUksRUFBSkEsS0FBSTtZQUFFVSxLQUFLO1lBQUVGLE1BQU07WUFBRUcsTUFBTTtRQUFDLENBQUM7a0JBQ3pEVCxPQUFPLEdBQUcsSUFBSSxHQUFHSCxRQUFROzs7Ozs7QUFHaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGxvdHRlcnkvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbk91dCxcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9jb25maWcvZmlyZWJhc2UnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KHt9KVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKVxuICB9LCBbXSlcblxuICBjb25zdCBzaWdudXAgPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICB9XG5cbiAgY29uc3QgbG9naW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gIH1cblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXNlcihudWxsKVxuICAgIGF3YWl0IHNpZ25PdXQoYXV0aClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBzaWdudXAsIGxvZ291dCB9fT5cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IGNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiYXV0aCIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1bnN1YnNjcmliZSIsInVpZCIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJzaWdudXAiLCJwYXNzd29yZCIsImxvZ2luIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_numbers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/numbers.css */ \"./styles/numbers.css\");\n/* harmony import */ var _styles_numbers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_numbers_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProtectedRoute */ \"./components/ProtectedRoute.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst noAuthRequired = [\n    '/',\n    '/login',\n    '/signup',\n    '/404'\n];\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: noAuthRequired.includes(router.pathname) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/workspaces/GolLottery/pages/_app.tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/workspaces/GolLottery/pages/_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/GolLottery/pages/_app.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/GolLottery/pages/_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ2hCO0FBQ0M7QUFDQTtBQUc4QjtBQUNyQjtBQUNrQjtBQUV6RCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQUEsQ0FBRztJQUFFLENBQVE7SUFBRSxDQUFTO0lBQUUsQ0FBTTtBQUFBLENBQUM7U0FFaERDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUV4QixNQUFNLDZFQUNIRCxxRUFBbUI7a0JBQ2pCRyxjQUFjLENBQUNLLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxRQUFRLGdGQUNyQ0osU0FBUztlQUFLQyxTQUFTOzs7OzsrRkFFdkJKLGtFQUFjO2tHQUNaRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGxvdHRlcnkvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL251bWJlcnMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlJ1xuXG5jb25zdCBub0F1dGhSZXF1aXJlZCA9IFsnLycsICcvbG9naW4nLCAnL3NpZ251cCcsICcvNDA0J11cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICB7bm9BdXRoUmVxdWlyZWQuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSA/IChcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cbiAgICAgICl9XG4gICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXV0aENvbnRleHRQcm92aWRlciIsInVzZVJvdXRlciIsIlByb3RlY3RlZFJvdXRlIiwibm9BdXRoUmVxdWlyZWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImluY2x1ZGVzIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/numbers.css":
/*!****************************!*\
  !*** ./styles/numbers.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();