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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  max-height: 100vh;\\n}\\nheader {\\n  background-color: rgb(0,208,178);\\n  font-size: xx-large;\\n  padding: 10px;\\n  color: white;\\n}\\n#folderList {\\n  font-size: larger;\\n}\\n.newTask {\\n  display: flex;\\n  gap: 20px;\\n}\\n.folderContainer {\\n  display:flex;\\n  gap: 20px;\\n}\\n.folderContainer:hover {\\n  outline: 2px solid blue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/addTaskToDOM":
/*!**************************!*\
  !*** ./src/addTaskToDOM ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendTaskPropertyDivsToContainer\": () => (/* binding */ appendTaskPropertyDivsToContainer),\n/* harmony export */   \"createDueDateDiv\": () => (/* binding */ createDueDateDiv),\n/* harmony export */   \"createPriorityDiv\": () => (/* binding */ createPriorityDiv),\n/* harmony export */   \"createTaskDescriptionDiv\": () => (/* binding */ createTaskDescriptionDiv),\n/* harmony export */   \"removeAllTasks\": () => (/* binding */ removeAllTasks)\n/* harmony export */ });\n/* harmony import */ var _folderFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderFunctions */ \"./src/folderFunctions.js\");\n\n// Create DOM element for task property\nfunction createTaskDiv(divClass) {\n  let div = document.createElement('div');\n  div.setAttribute('class', `${divClass}`);\n  return div;\n}\n// Create Div with Task Description Text\nfunction createTaskDescriptionDiv(taskobject) {\n  let taskDescription = createTaskDiv('taskDescription');\n  taskDescription.textContent = taskobject.description;\n  return taskDescription;\n}\n// Create Div With Due Date Text\nfunction createDueDateDiv(taskobject) {\n  let taskDueDate = createTaskDiv('taskDueDate');\n  taskDueDate.textContent = taskobject.duedate;\n  return taskDueDate;\n}\n// Create Div with Priority Text\nfunction createPriorityDiv(taskobject) {\n  let taskPriority = createTaskDiv('taskPriority');\n  taskPriority.textContent = taskobject.priority;\n  return taskPriority;\n}\n// Create Task Container Div\nfunction createTaskContainerDiv() {\n  let taskContainer = createTaskDiv('newTask');\n  return taskContainer;\n}\n// Create Checkbox Div\nfunction createCheckBoxDiv() {\n  let checkBox = document.createElement('input');\n  checkBox.setAttribute('type', 'checkbox');\n  return checkBox;\n}\n// Create edit div\nfunction createEditButton() {\n  let editButton = document.createElement('button');\n  editButton.innerHTML =\n    '<i id=\"editBtn\" class=\"material-icons\">edit</i>';\n  return editButton;\n}\n// Edit eventlistener callback\nfunction editEventListener(editButton) {\n  editButton.addEventListener('click', function () {\n    const newWindow = window.open(\n      '',\n      '_blank',\n      'width=500,height=400'\n    );\n  });\n}\n// Checkbox eventlistener callback\nfunction toggleTextStrikethrough(checkBox, taskDescription) {\n  checkBox.addEventListener('change', function () {\n    // Check if the checkbox is checked\n    if (checkBox.checked) {\n      // Apply strikethrough style to the text\n      taskDescription.style.textDecoration = 'line-through';\n    } else {\n      taskDescription.style.textDecoration = 'none';\n    }\n  });\n}\n// Create Delete Button Div\nfunction createDeleteButtonDiv() {\n  let deleteButton = document.createElement('button');\n  deleteButton.innerHTML =\n    '<i id=\"deleteBtn\" class=\"material-icons\">delete</i>';\n  return deleteButton;\n}\n// Add event listener to delete button to remove from dom and array\nfunction addDeleteButtonEventListener(button) {\n  button.addEventListener('click', (event) => {\n    // Index of task to be deleted\n    let index = clickedTaskIndex(event);\n\n    // Remove task from dom\n    button.closest('.newTask').remove();\n    // Remove task from folder, unless no folder is selected\n    if (\n      _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderNameArray[_folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex] !== undefined\n    ) {\n      _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderNameArray[_folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex].splice(\n        index,\n        1\n      );\n    }\n  });\n}\n// Get the dom element of the clicked task\nfunction getClickedTaskElement(event) {\n  return event.target.closest('.newTask');\n}\n// Get task nodelist\nfunction getTaskNodeList() {\n  return document.getElementsByClassName('NewTask');\n}\n// Get task index\nfunction getTaskIndex(nodeList, task) {\n  for (let i = 0; i < nodeList.length; i++) {\n    if (nodeList[i] === task) {\n      return i;\n    }\n  }\n}\n// Get index of clicked task\nfunction clickedTaskIndex(event) {\n  // Get clicked task element\n  const clickedTask = getClickedTaskElement(event);\n  console.log('clickedTask', clickedTask);\n  // Get task nodelist\n  const nodeList = getTaskNodeList();\n  console.log('nodeList', nodeList);\n  // Interate over nodelist to find task index\n  return getTaskIndex(nodeList, clickedTask);\n}\n// Callback function to append divs to container\nfunction appendDivsToContainer(\n  checkBox,\n  containerDiv,\n  taskDescription,\n  taskDueDate,\n  taskPriority,\n  deleteButton,\n  editButton,\n  taskList\n) {\n  containerDiv.appendChild(checkBox);\n  containerDiv.appendChild(taskDescription);\n  containerDiv.appendChild(taskDueDate);\n  containerDiv.appendChild(taskPriority);\n  containerDiv.appendChild(deleteButton);\n  containerDiv.appendChild(editButton);\n  taskList.appendChild(containerDiv);\n}\n// Remove all child nodes\nfunction removeAllTasks() {\n  let element = document.getElementById('taskList');\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n// Append task to DOM\nfunction appendTaskPropertyDivsToContainer(taskObject) {\n  // Create divs\n  let checkBox = createCheckBoxDiv();\n  let taskDescription = createTaskDescriptionDiv(taskObject);\n  let taskDueDate = createDueDateDiv(taskObject);\n  let taskPriority = createPriorityDiv(taskObject);\n  let containerDiv = createTaskContainerDiv();\n  let editButton = createEditButton();\n  let deleteButton = createDeleteButtonDiv();\n  let taskList = document.getElementById('taskList');\n  // Add checkbox event listener\n  toggleTextStrikethrough(checkBox, taskDescription);\n  // Add delete button event listener\n  addDeleteButtonEventListener(deleteButton);\n  // Add edit button event listener\n  editEventListener(editButton);\n  // Append task to list\n  containerDiv = appendDivsToContainer(\n    checkBox,\n    containerDiv,\n    taskDescription,\n    taskDueDate,\n    taskPriority,\n    deleteButton,\n    editButton,\n    taskList\n  );\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/addTaskToDOM?");

/***/ }),

/***/ "./src/createTaskObject.js":
/*!*********************************!*\
  !*** ./src/createTaskObject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject)\n/* harmony export */ });\n// Create task object with user input\nfunction createTaskObject(description, duedate, priority) {\n  return {\n    description,\n    duedate,\n    priority,\n    completed: false,\n  };\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/createTaskObject.js?");

/***/ }),

/***/ "./src/domAppendProjectNameToFolderList.js":
/*!*************************************************!*\
  !*** ./src/domAppendProjectNameToFolderList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDeleteButtonEventListener\": () => (/* binding */ addDeleteButtonEventListener),\n/* harmony export */   \"appendToFolderList\": () => (/* binding */ appendToFolderList),\n/* harmony export */   \"changeFolderIndex\": () => (/* binding */ changeFolderIndex),\n/* harmony export */   \"createDeleteButtonDiv\": () => (/* binding */ createDeleteButtonDiv),\n/* harmony export */   \"createFolderContainerDiv\": () => (/* binding */ createFolderContainerDiv),\n/* harmony export */   \"createFolderNameDiv\": () => (/* binding */ createFolderNameDiv),\n/* harmony export */   \"currentFolderIndex\": () => (/* binding */ currentFolderIndex),\n/* harmony export */   \"populateTasks\": () => (/* binding */ populateTasks),\n/* harmony export */   \"removeFolderFromArray\": () => (/* binding */ removeFolderFromArray),\n/* harmony export */   \"removeTaskDivs\": () => (/* binding */ removeTaskDivs)\n/* harmony export */ });\n/* harmony import */ var _folderFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderFunctions */ \"./src/folderFunctions.js\");\n/* harmony import */ var _addTaskToDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskToDOM */ \"./src/addTaskToDOM\");\n\n\n\n// Create Folder Container Div\nfunction createFolderContainerDiv() {\n  let containerDiv = document.createElement('div');\n  containerDiv.setAttribute('class', 'folderContainer');\n  return containerDiv;\n}\n// Create Div With Folder Name\nfunction createFolderNameDiv() {\n  let folder = document.createElement('div');\n  folder.setAttribute('class', 'folderName');\n  folder.textContent = document.getElementById('folderName').value;\n  return folder;\n}\n// Create Delete Button Div\nfunction createDeleteButtonDiv() {\n  let deleteButton = document.createElement('button');\n  deleteButton.innerHTML =\n    '<i id=\"deleteBtn\" class=\"material-icons\">delete</i>';\n  return deleteButton;\n}\n// Add event listener to delete button to remove folder from DOM\nfunction addDeleteButtonEventListener(button) {\n  button.addEventListener('click', (event) => {\n    removeTaskDivs(event);\n    button.closest('.folderContainer').remove();\n  });\n}\n// Delete folder from array\nfunction removeFolderFromArray(event) {\n  // Get index of clicked folder element\n  let folderIndex = currentFolderIndex(event);\n  // Remove index from folderNameArray (delete that folder)\n  _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderNameArray.splice(folderIndex, 1);\n}\n// Delete tasks from dom, if current folder is deleted\nfunction removeTaskDivs(event) {\n  let folderIndex = currentFolderIndex(event);\n  if (folderIndex === _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex) {\n    (0,_addTaskToDOM__WEBPACK_IMPORTED_MODULE_1__.removeAllTasks)();\n  }\n}\n// Append Folder Name Div and Delete Button Div to folderList\nfunction appendToFolderList() {\n  let folderList = document.getElementById('folderList');\n  let folderContainer = createFolderContainerDiv();\n  let folderNameDiv = createFolderNameDiv();\n  let deleteButton = createDeleteButtonDiv();\n  folderContainer.appendChild(folderNameDiv);\n  folderContainer.appendChild(deleteButton);\n  folderList.appendChild(folderContainer);\n  // Clear dom task list, if different folder is clicked\n  folderContainer.addEventListener('click', function () {\n    (0,_addTaskToDOM__WEBPACK_IMPORTED_MODULE_1__.removeAllTasks)();\n  });\n  // Change folderState.currentFolderIndex on click\n  folderContainer.addEventListener('click', function (event) {\n    changeFolderIndex(event);\n  });\n  // Delete clicked folder from array on delete button click\n  deleteButton.addEventListener('click', function (event) {\n    event.stopPropagation();\n    removeFolderFromArray(event);\n  });\n  // Delete folder from DOM folder list on delete button click\n  addDeleteButtonEventListener(deleteButton);\n  // Populate tasklist with stored tasks when new folder is clicked\n  folderContainer.addEventListener('click', populateTasks);\n}\n// When new folder is clicked, populate domlist with previous tasks\nfunction populateTasks() {\n  // Load tasklist (dom) with folderNameArray[folderState.currentFolderIndex]\n  for (\n    let i = 1;\n    i < _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderNameArray[_folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex].length;\n    i++\n  ) {\n    let taskObject =\n      _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderNameArray[_folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex][i];\n    (0,_addTaskToDOM__WEBPACK_IMPORTED_MODULE_1__.appendTaskPropertyDivsToContainer)(taskObject);\n  }\n}\n// Get index of clicked folder element\nfunction currentFolderIndex(event) {\n  // Get clicked folder element\n  const clickedFolder = getClickedFolderElement(event);\n  // Get Folder node list\n  const folderNodeList = getFolderNodeList();\n  // Iterate over folder node list to find clicked element's index number\n  return getFolderIndex(folderNodeList, clickedFolder);\n}\n// Get the dom element of the clicked folder\nfunction getClickedFolderElement(event) {\n  return event.target.closest('.folderContainer');\n}\n// Get .folderContainer NodeList\nfunction getFolderNodeList() {\n  return document.getElementsByClassName('folderContainer');\n}\n// Get folder index\nfunction getFolderIndex(nodeList, folder) {\n  for (let i = 0; i < nodeList.length; i++) {\n    if (nodeList[i] === folder) {\n      return i;\n    }\n  }\n}\n// Change folderState.currentFolderIndex on click\nfunction changeFolderIndex(event) {\n  // Get clicked folder\n  const clickedFolder = getClickedFolderElement(event);\n  // Get folder nodelist\n  const folderNodeList = getFolderNodeList();\n  // Match clicked folder to the index in nodelist and update folderState.currentFolderIndex\n  _folderFunctions__WEBPACK_IMPORTED_MODULE_0__.folderState.currentFolderIndex = getFolderIndex(\n    folderNodeList,\n    clickedFolder\n  );\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/domAppendProjectNameToFolderList.js?");

/***/ }),

/***/ "./src/folderFunctions.js":
/*!********************************!*\
  !*** ./src/folderFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToFolder\": () => (/* binding */ addTaskToFolder),\n/* harmony export */   \"folderFactory\": () => (/* binding */ folderFactory),\n/* harmony export */   \"folderNameArray\": () => (/* binding */ folderNameArray),\n/* harmony export */   \"folderState\": () => (/* binding */ folderState)\n/* harmony export */ });\n/* harmony import */ var _createTaskObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskObject */ \"./src/createTaskObject.js\");\n\nconst folderNameArray = [['Test Folder']];\nconst folderState = {\n  currentFolderIndex: 0,\n};\n// Create nested array with first index being the name of the folder, and the following indexes being the tasks within that folder.\n// Add this folder to the parent folder array\nfunction folderFactory(name) {\n  // Create Nested Array\n  let folderName = [name];\n  // Add nested array into parent array\n  folderNameArray.push(folderName);\n  console.log(folderNameArray);\n}\n// Add task to folder array\nfunction addTaskToFolder() {\n  let description = document.getElementById('taskDescription').value;\n  let dueDate = document.getElementById('dueDate').value;\n  let priority = document.getElementById('priority').value;\n  // Add task to folder array\n  if (folderNameArray[folderState.currentFolderIndex] !== undefined) {\n    folderNameArray[folderState.currentFolderIndex].push(\n      (0,_createTaskObject__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(description, dueDate, priority)\n    );\n  }\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/folderFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domAppendProjectNameToFolderList */ \"./src/domAppendProjectNameToFolderList.js\");\n/* harmony import */ var _addTaskToDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskToDOM */ \"./src/addTaskToDOM\");\n/* harmony import */ var _folderFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folderFunctions */ \"./src/folderFunctions.js\");\n/* harmony import */ var _createTaskObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTaskObject */ \"./src/createTaskObject.js\");\n\n\n\n\n\n\n// When test folder is clicked, remove preexisting task list on screen (event listener)\ndocument\n  .getElementById('folder0')\n  .addEventListener('click', function (event) {\n    (0,_addTaskToDOM__WEBPACK_IMPORTED_MODULE_2__.removeAllTasks)();\n  });\n// Change folderState.currentFolderIndex when test folder is clicked\ndocument\n  .getElementById('folder0')\n  .addEventListener('click', _domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__.changeFolderIndex);\n// Delete test folder from array\ndocument\n  .getElementById('deleteBtn')\n  .addEventListener('click', function (event) {\n    event.stopPropagation();\n    (0,_domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__.removeFolderFromArray)(event);\n  });\n// Delete test folder from dom\ndocument\n  .getElementById('deleteBtn')\n  .addEventListener('click', function (event) {\n    (0,_domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__.removeTaskDivs)(event);\n    event.target.closest('.folderContainer').remove();\n  });\n// Populate tasklist when testfolder clicked\ndocument\n  .getElementById('folder0')\n  .addEventListener('click', _domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__.populateTasks);\n// Add new folder to folderNameArray\ndocument\n  .getElementById('newFolderForm')\n  .addEventListener('submit', function (event) {\n    event.preventDefault();\n    let newFolder = document.getElementById('folderName').value;\n    (0,_folderFunctions__WEBPACK_IMPORTED_MODULE_3__.folderFactory)(newFolder);\n  });\n// Add folder name to DOM\ndocument\n  .getElementById('newFolderForm')\n  .addEventListener('submit', function (event) {\n    event.preventDefault();\n    (0,_domAppendProjectNameToFolderList__WEBPACK_IMPORTED_MODULE_1__.appendToFolderList)();\n  });\n// Add task to folder array\ndocument\n  .getElementById('newTaskForm')\n  .addEventListener('submit', function (event) {\n    event.preventDefault();\n    (0,_folderFunctions__WEBPACK_IMPORTED_MODULE_3__.addTaskToFolder)();\n  });\n// Create task and append to dom\ndocument\n  .getElementById('newTaskForm')\n  .addEventListener('submit', function (event) {\n    event.preventDefault();\n    let description =\n      document.getElementById('taskDescription').value;\n    let dueDate = document.getElementById('dueDate').value;\n    let priority = document.getElementById('priority').value;\n    // Get the task object from createTaskObject() function\n    let taskObject = (0,_createTaskObject__WEBPACK_IMPORTED_MODULE_4__.createTaskObject)(description, dueDate, priority);\n    console.log('taskObject on task submission click', taskObject);\n    // Pass the folderNameArray and taskObject to appendToTaskList function\n    (0,_addTaskToDOM__WEBPACK_IMPORTED_MODULE_2__.appendTaskPropertyDivsToContainer)(taskObject);\n  });\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

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