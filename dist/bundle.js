/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  max-height: 100vh;\\n}\\nheader {\\n  background-color: rgb(0,208,178);\\n  font-size: xx-large;\\n  padding: 10px;\\n  color: white;\\n}\\n#folderList {\\n  font-size: larger;\\n}\\n.newTask {\\n  display: flex;\\n  gap: 20px;\\n}\\n.folderContainer {\\n  display:flex;\\n  gap: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTaskToDOMTaskList.js":
/*!*************************************!*\
  !*** ./src/addTaskToDOMTaskList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendToTaskList\": () => (/* binding */ appendToTaskList),\n/* harmony export */   \"createDueDateDiv\": () => (/* binding */ createDueDateDiv),\n/* harmony export */   \"createPriorityDiv\": () => (/* binding */ createPriorityDiv),\n/* harmony export */   \"createTaskContainerDiv\": () => (/* binding */ createTaskContainerDiv),\n/* harmony export */   \"createTaskDescriptionDiv\": () => (/* binding */ createTaskDescriptionDiv)\n/* harmony export */ });\n/* harmony import */ var _createTaskObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskObject */ \"./src/createTaskObject.js\");\n/* harmony import */ var _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewProjectFolder */ \"./src/createNewProjectFolder.js\");\n\n\n\n// Current Folder Name\nlet currentFolderName = 'Test Folder';\n\n// Create Task Row Functions\nfunction createTaskContainerDiv() {\n  let container = document.createElement('div');\n  container.setAttribute('class', 'taskDescription');\n  return container;\n}\n// Create Div with Task Description\nfunction createTaskDescriptionDiv(taskObject) {\n  let task = document.createElement('div');\n  task.setAttribute('class', 'taskDescription');\n  task.textContent = taskObject.description;\n  return task;\n}\n// Create Div With Due Date\nfunction createDueDateDiv(taskObject) {\n  let task = document.createElement('div');\n  task.setAttribute('class', 'taskDueDate');\n  task.textContent = taskObject.duedate;\n  return task;\n}\n// Create Div with Priority\nfunction createPriorityDiv(taskObject) {\n  let task = document.createElement('div');\n  task.setAttribute('class', 'taskPriority');\n  task.textContent = taskObject.priority;\n  return task;\n}\n// Create container div with index number\nfunction createContainerDiv() {\n  let containerDiv = document.createElement('div');\n  containerDiv.setAttribute('class', 'newTask');\n  // Give task div ID matching it's index number\n  assignIndexToContainer(containerDiv);\n  return containerDiv;\n}\n// Container callback index function\nfunction assignIndexToContainer(taskList) {\n  let taskCount =\n    document.getElementById('taskList').childElementCount;\n  taskCount += 1;\n  return taskList.setAttribute('id', taskCount);\n}\n// Append task description, duedate, priority, delete button to Task Row Div\nfunction appendTaskPropertyDivsToContainer(taskObject) {\n  let taskDescription = createTaskDescriptionDiv(taskObject);\n  let taskDueDate = createDueDateDiv(taskObject);\n  let taskPriority = createPriorityDiv(taskObject);\n  let containerDiv = createContainerDiv();\n  let deleteButton = createDeleteButtonDiv();\n  let checkBox = createCheckBoxDiv();\n  let editButton = createEditDiv();\n  deleteTaskFromDOMEventListener(deleteButton);\n  containerDiv.appendChild(checkBox);\n  containerDiv.appendChild(taskDescription);\n  containerDiv.appendChild(taskDueDate);\n  containerDiv.appendChild(taskPriority);\n  containerDiv.appendChild(deleteButton);\n  containerDiv.appendChild(editButton);\n  deleteTaskFromArrayEventListener(deleteButton);\n  updateIndexEventListener(deleteButton);\n  toggleTextStrikethrough(checkBox, taskDescription);\n\n  // Current edit button shenanigans\n  editEventListener(editButton);\n\n  return containerDiv;\n}\n// Append Task Row Div to Task List Parent Div\nfunction appendToTaskList(taskObject) {\n  event.preventDefault();\n  let taskDiv = appendTaskPropertyDivsToContainer(taskObject);\n  document.getElementById('taskList').appendChild(taskDiv);\n}\n// Create Delete Button Div\nfunction createDeleteButtonDiv() {\n  let deleteButton = document.createElement('button');\n  deleteButton.innerHTML =\n    '<i id=\"deleteBtn\" class=\"material-icons\">delete</i>';\n  return deleteButton;\n}\n// Update index ID when a task is deleted\nfunction updateIndex() {\n  const taskNodes = document.getElementsByClassName('newTask');\n  for (let i = 0; i < taskNodes.length; i++) {\n    const taskNode = taskNodes[i];\n    taskNode.id = i + 1;\n  }\n}\n// Update index event listener\nfunction updateIndexEventListener(button) {\n  button.addEventListener('click', updateIndex);\n}\n// Get delete button parent div ID for task index\nfunction findTaskIndex(button) {\n  let taskIndex = button.parentElement.id;\n  taskIndex = parseInt(taskIndex);\n  console.log('taskIndex', taskIndex);\n  return taskIndex;\n}\n// Remove task from task array callback\nfunction deleteTaskFromArray(button) {\n  let folderIndex = (0,_createNewProjectFolder__WEBPACK_IMPORTED_MODULE_1__.findFolderIndex)(currentFolderName);\n  let taskIndex = findTaskIndex(button);\n  _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_1__.folderNameArray[folderIndex].splice(taskIndex, 1);\n}\n/* function getChildIndex(element) {\n  const parentElement = document.getElementById('taskList');\n  const children = parentElement.children;\n  let index;\n\n  for (let i = 0; i < children.length; i++) {\n    if (children[i] === element) {\n      return i;\n    }\n  }\n\n  return; // Element not found\n} */\n// Remove task from array, event listner\nfunction deleteTaskFromArrayEventListener(button) {\n  button.addEventListener('click', () => deleteTaskFromArray(button));\n}\n// Add event listener to delete button to remove div from dom\nfunction deleteTaskFromDOMEventListener(button) {\n  button.addEventListener('click', () => {\n    button.closest('.newTask').remove();\n    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER\n    /* delete myLibrary[index]; */\n  });\n}\n// Remove all child nodes\nfunction removeAllChildNodes() {\n  let element = document.getElementById('taskList');\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\n// Create div with checkbox\nfunction createCheckBoxDiv() {\n  let checkBox = document.createElement('input');\n  checkBox.setAttribute('type', 'checkbox');\n  return checkBox;\n}\n// Checkbox eventlistener callback\nfunction toggleTextStrikethrough(checkBox, taskDescription) {\n  checkBox.addEventListener('change', function () {\n    // Check if the checkbox is checked\n    if (checkBox.checked) {\n      // Apply strikethrough style to the text\n      taskDescription.style.textDecoration = 'line-through';\n    } else {\n      taskDescription.style.textDecoration = 'none';\n    }\n  });\n}\n// Create edit div\nfunction createEditDiv() {\n  let editButton = document.createElement('button');\n  editButton.innerHTML =\n    '<i id=\"editBtn\" class=\"material-icons\">edit</i>';\n  return editButton;\n}\n// Edit eventlistener callback\nfunction editEventListener(editButton) {\n  editButton.addEventListener('click', function () {\n    const newWindow = window.open(\n      '',\n      '_blank',\n      'width=500,height=400'\n    );\n  });\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/addTaskToDOMTaskList.js?");

/***/ }),

/***/ "./src/createNewProjectFolder.js":
/*!***************************************!*\
  !*** ./src/createNewProjectFolder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToFolder\": () => (/* binding */ addTaskToFolder),\n/* harmony export */   \"findFolderIndex\": () => (/* binding */ findFolderIndex),\n/* harmony export */   \"folderFactory\": () => (/* binding */ folderFactory),\n/* harmony export */   \"folderNameArray\": () => (/* binding */ folderNameArray)\n/* harmony export */ });\n/* harmony import */ var _createTaskObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskObject */ \"./src/createTaskObject.js\");\n\nconst folderNameArray = [['Test Folder']];\n\n// Take user input folder name and create it as an array inside a folder array. This nested array will hold the task objects.\nfunction folderFactory(name) {\n  let folderName = [];\n  folderName.push(name);\n  folderNameArray.push(folderName);\n  console.log(folderNameArray);\n}\n\nwindow.folderNameArray = folderNameArray;\n\n// Find index of current folder\nfunction findFolderIndex(folder) {\n  let folderIndex; // Declare the folderIndex variable\n  for (let i = 0; i < folderNameArray.length; i++) {\n    if (folderNameArray[i][0] === folder) {\n      console.log('foldernamearray', folderNameArray[i][0]);\n      folderIndex = i;\n      break; // Add a break statement to exit the loop once the folder is found\n    }\n  }\n  return folderIndex; // Return the folderIndex value\n}\n\n// Push task object into folder\nfunction addTaskToFolder(event) {\n  // This needs to be changed when switching folders\n  event.preventDefault();\n\n  let folderName = 'Test Folder';\n  let folderIndex = findFolderIndex(folderName);\n  folderNameArray[folderIndex].push((0,_createTaskObject__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)());\n  console.log(folderNameArray[folderIndex]);\n}\n\n// Now we have an Array (folderNameArray) which holds another Array (individual folder) which holds\n// the folder name as index[0]. The following indexes are the individual task objects\n// Now when we switch between folders, we can have a function that checks\n// if (folderNameArray[i][0] === 'document.textcontent.value') then, currentFolder = folderNameArray[i][0]!\n\n\n//# sourceURL=webpack://project-todo-list/./src/createNewProjectFolder.js?");

/***/ }),

/***/ "./src/createTaskObject.js":
/*!*********************************!*\
  !*** ./src/createTaskObject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject)\n/* harmony export */ });\n// Task Factory Function\nfunction Task(description, duedate, priority) {\n  this.description = description;\n  this.duedate = duedate;\n  this.priority = priority;\n  this.completed = false;\n}\n// Create Task Object With User Input\nfunction createTaskObject() {\n  let description = document.getElementById('taskDescription').value;\n  let duedate = document.getElementById('dueDate').value;\n  let priority = document.getElementById('priority').value;\n  let task = new Task(description, duedate, priority);\n  return task;\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/createTaskObject.js?");

/***/ }),

/***/ "./src/domAppendProjectNameToFolderList.js":
/*!*************************************************!*\
  !*** ./src/domAppendProjectNameToFolderList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDeleteButtonEventListener\": () => (/* binding */ addDeleteButtonEventListener),\n/* harmony export */   \"appendToFolderList\": () => (/* binding */ appendToFolderList),\n/* harmony export */   \"createDeleteButtonDiv\": () => (/* binding */ createDeleteButtonDiv),\n/* harmony export */   \"createFolderContainerDiv\": () => (/* binding */ createFolderContainerDiv),\n/* harmony export */   \"createFolderNameDiv\": () => (/* binding */ createFolderNameDiv)\n/* harmony export */ });\n/* harmony import */ var _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProjectFolder */ \"./src/createNewProjectFolder.js\");\n\n\n// Create Folder Container Div\nfunction createFolderContainerDiv() {\n  let containerDiv = document.createElement('div');\n  containerDiv.setAttribute('class', 'folderContainer');\n  return containerDiv;\n}\n// Create Div With Folder Name\nfunction createFolderNameDiv() {\n  let folder = document.createElement('div');\n  folder.setAttribute('class', 'folderName');\n  folder.textContent = document.getElementById('folderName').value;\n  return folder;\n}\n// Create Delete Button Div\nfunction createDeleteButtonDiv() {\n  let deleteButton = document.createElement('button');\n  deleteButton.innerHTML =\n    '<i id=\"deleteBtn\" class=\"material-icons\">delete</i>';\n  return deleteButton;\n}\n// Add event listener to delete button\nfunction addDeleteButtonEventListener(button) {\n  button.addEventListener('click', () => {\n    button.closest('.folderContainer').remove();\n    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER\n    /* delete myLibrary[index]; */\n  });\n}\n// Append Folder Name Div and Delete Button Div to folderList\nfunction appendToFolderList(event) {\n  event.preventDefault();\n  let folderList = document.getElementById('folderList');\n  let folderContainer = createFolderContainerDiv();\n  let folderNameDiv = createFolderNameDiv();\n  let deleteButton = createDeleteButtonDiv();\n  addDeleteButtonEventListener(deleteButton);\n  folderContainer.appendChild(folderNameDiv);\n  folderContainer.appendChild(deleteButton);\n  folderList.appendChild(folderContainer);\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/domAppendProjectNameToFolderList.js?");

/***/ }),

/***/ "./src/domNewFolderFunction.js":
/*!*************************************!*\
  !*** ./src/domNewFolderFunction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProjectFolder */ \"./src/createNewProjectFolder.js\");\n\n/* \nexport function createNewFolderObject(event) {\n  event.preventDefault();\n\n  const folderName = document.getElementById('folderName').value;\n  const newFolder = folderFactory(folderName);\n  return newFolder;\n} */\n\n\n//# sourceURL=webpack://project-todo-list/./src/domNewFolderFunction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domNewFolderFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domNewFolderFunction */ \"./src/domNewFolderFunction.js\");\n/* harmony import */ var _domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domAppendProjectNameToFolderList */ \"./src/domAppendProjectNameToFolderList.js\");\n/* harmony import */ var _addTaskToDOMTaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskToDOMTaskList */ \"./src/addTaskToDOMTaskList.js\");\n/* harmony import */ var _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createNewProjectFolder */ \"./src/createNewProjectFolder.js\");\n/* harmony import */ var _createTaskObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTaskObject */ \"./src/createTaskObject.js\");\n\n\n\n\n\n\n\n// Add event listener to delete button on test folder on page load\n// Add folder name to DOM\ndocument\n  .getElementById('newFolderForm')\n  .addEventListener('submit', _domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_2__.appendToFolderList);\n// Add task to folder array\ndocument\n  .getElementById('newTaskForm')\n  .addEventListener('submit', _createNewProjectFolder__WEBPACK_IMPORTED_MODULE_4__.addTaskToFolder);\n// Add task to DOM\n/* document\n  .getElementById('newTaskForm')\n  .addEventListener('submit', appendToTaskList);\n */\ndocument\n  .getElementById('newTaskForm')\n  .addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    // Get the task object from createTaskObject() function\n    let taskObject = (0,_createTaskObject__WEBPACK_IMPORTED_MODULE_5__.createTaskObject)();\n\n    // Pass the folderNameArray and taskObject to appendToTaskList function\n    (0,_addTaskToDOMTaskList__WEBPACK_IMPORTED_MODULE_3__.appendToTaskList)(taskObject);\n  });\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;