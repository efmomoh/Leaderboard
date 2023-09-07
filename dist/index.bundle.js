"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* MOBILE MEDIA QUERY  */

@media (max-width: 768px) {
  body {
    background-color: teal;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
  }

  .h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: serif;
    text-align: center;
    color: #fff;
  }

  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .contents-wrapper {
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem;
    width: auto;
    height: auto;
    gap: 1rem;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: 2px solid #000;
    background-color: #fff;
  }

  .refresh-wrapper {
    display: flex;
    justify-content: space-between;
    width: auto;
    height: auto;
    margin: 0 1rem 0 1rem;
  }

  .h2 {
    font-size: 1.5rem;
    color: #000;
  }

  .refresh-btn {
    height: 2rem;
    align-self: center;
    font-size: 1.2rem;
    border-radius: 8px;
    color: green;
    border-color: teal;
  }

  .refresh-btn:hover {
    color: #fff;
    background-color: #3c3c;
  }

  .board_list {
    border: 2px solid #000;
    list-style-type: none;
    width: 83%;
    margin-left: 0.4rem;
  }

  .scores-list {
    border-bottom: 1px solid rgb(236, 218, 119);
    color: #000;
    font-size: 1.3rem;
    margin: 0 0 0.4rem -1.8rem;
  }

  .scores-list:nth-child(odd) {
    background-color: antiquewhite;
  }

  .scores-list:nth-child(even) {
    background-color: rgb(195, 183, 183);
  }

  .add-scores {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    background-color: cadetblue;
    border: 2px solid rgba(1, 1, 18, 0.998);
  }

  .h3 {
    text-align: center;
    color: #000;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: auto;
  }

  input {
    width: 50%;
    align-self: center;
    height: 2rem;
    border-radius: 8px;
    border-bottom: teal;
    text-align: start;
    padding: 4px;
    font-size: 1rem;
    font-weight: 700;
  }

  #submit-button {
    width: 25%;
    margin-left: 10.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border-color: teal;
    color: blue;
    font-size: 1.2rem;
  }

  #submit-button:hover {
    color: #fff;
    background-color: #113e;
    font-size: 1.2rem;
  }

  .error-container {
    color: red;
    font-size: 1.2rem;
    width: 55%;
    margin: 0 0 0 4.5rem;
    background-color: rgb(226, 218, 218);
    border-radius: 16px;
    text-align: center;
    font-style: italic;
    height: auto;
  }
}

/* DESTOP MEDIA  */

@media (min-width: 768px) {
  body {
    background-color: teal;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
  }

  .h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: serif;
    text-align: center;
    color: #fff;
  }

  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .contents-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 8rem;
    width: auto;
    height: auto;
    gap: 2rem;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: 2px solid #000;
    background-color: #fff;
  }

  .refresh-wrapper {
    display: flex;
    gap: 16rem;
    width: 100%;
    height: auto;
  }

  .h2 {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #000;
  }

  .refresh-btn {
    height: 2rem;
    align-self: center;
    font-size: 1.2rem;
    border-radius: 8px;
    color: green;
    border-color: teal;
  }

  .refresh-btn:hover {
    color: #fff;
    background-color: #3c3c;
  }

  .board_list {
    list-style-type: none;
    border: 2px solid #000;
    width: 90%;
    gap: 0.5rem;
    margin-left: 0.3rem;
  }

  .scores-list {
    border-bottom: 1px solid #336d;
    color: #000;
    width: 105%;
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    margin-left: -1.8rem;
  }

  .scores-list:nth-child(odd) {
    background-color: rgb(246, 243, 240);
  }

  .scores-list:nth-child(even) {
    background-color: rgb(228, 221, 221);
  }

  .add-scores {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: cadetblue;
    border: 2px solid rgba(1, 1, 18, 0.998);
  }

  .h3 {
    text-align: center;
    color: #000;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    width: 50%;
    align-self: center;
    height: 2rem;
    border-radius: 8px;
    border-bottom: teal;
    text-align: start;
    padding: 4px;
    font-size: 1rem;
  }

  #submit-button {
    width: 15%;
    margin-left: 19.5rem;
    height: 2rem;
    border-radius: 8px;
    border-color: teal;
    color: blue;
  }

  #submit-button:hover {
    color: #fff;
    background-color: #113e;
    font-size: 1.2rem;
  }

  .error-container {
    color: red;
    font-size: 1.2rem;
    width: 40%;
    margin: 0 0 0 12rem;
    background-color: rgb(226, 218, 218);
    border-radius: 16px;
    text-align: center;
    font-style: italic;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* MOBILE MEDIA QUERY  */\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: teal;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .h1 {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    font-family: serif;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n\r\n  .section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .contents-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2rem 1rem;\r\n    width: auto;\r\n    height: auto;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .main-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n    border: 2px solid #000;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .refresh-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0 1rem 0 1rem;\r\n  }\r\n\r\n  .h2 {\r\n    font-size: 1.5rem;\r\n    color: #000;\r\n  }\r\n\r\n  .refresh-btn {\r\n    height: 2rem;\r\n    align-self: center;\r\n    font-size: 1.2rem;\r\n    border-radius: 8px;\r\n    color: green;\r\n    border-color: teal;\r\n  }\r\n\r\n  .refresh-btn:hover {\r\n    color: #fff;\r\n    background-color: #3c3c;\r\n  }\r\n\r\n  .board_list {\r\n    border: 2px solid #000;\r\n    list-style-type: none;\r\n    width: 83%;\r\n    margin-left: 0.4rem;\r\n  }\r\n\r\n  .scores-list {\r\n    border-bottom: 1px solid rgb(236, 218, 119);\r\n    color: #000;\r\n    font-size: 1.3rem;\r\n    margin: 0 0 0.4rem -1.8rem;\r\n  }\r\n\r\n  .scores-list:nth-child(odd) {\r\n    background-color: antiquewhite;\r\n  }\r\n\r\n  .scores-list:nth-child(even) {\r\n    background-color: rgb(195, 183, 183);\r\n  }\r\n\r\n  .add-scores {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: auto;\r\n    height: auto;\r\n    background-color: cadetblue;\r\n    border: 2px solid rgba(1, 1, 18, 0.998);\r\n  }\r\n\r\n  .h3 {\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.4rem;\r\n    height: auto;\r\n  }\r\n\r\n  input {\r\n    width: 50%;\r\n    align-self: center;\r\n    height: 2rem;\r\n    border-radius: 8px;\r\n    border-bottom: teal;\r\n    text-align: start;\r\n    padding: 4px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  #submit-button {\r\n    width: 25%;\r\n    margin-left: 10.5rem;\r\n    height: 2.5rem;\r\n    border-radius: 8px;\r\n    border-color: teal;\r\n    color: blue;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #submit-button:hover {\r\n    color: #fff;\r\n    background-color: #113e;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .error-container {\r\n    color: red;\r\n    font-size: 1.2rem;\r\n    width: 55%;\r\n    margin: 0 0 0 4.5rem;\r\n    background-color: rgb(226, 218, 218);\r\n    border-radius: 16px;\r\n    text-align: center;\r\n    font-style: italic;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n/* DESTOP MEDIA  */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-color: teal;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .h1 {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    font-family: serif;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n\r\n  .section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .contents-wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin: 2rem 8rem;\r\n    width: auto;\r\n    height: auto;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .main-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n    border: 2px solid #000;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .refresh-wrapper {\r\n    display: flex;\r\n    gap: 16rem;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .h2 {\r\n    margin-left: 1rem;\r\n    font-size: 1.5rem;\r\n    color: #000;\r\n  }\r\n\r\n  .refresh-btn {\r\n    height: 2rem;\r\n    align-self: center;\r\n    font-size: 1.2rem;\r\n    border-radius: 8px;\r\n    color: green;\r\n    border-color: teal;\r\n  }\r\n\r\n  .refresh-btn:hover {\r\n    color: #fff;\r\n    background-color: #3c3c;\r\n  }\r\n\r\n  .board_list {\r\n    list-style-type: none;\r\n    border: 2px solid #000;\r\n    width: 90%;\r\n    gap: 0.5rem;\r\n    margin-left: 0.3rem;\r\n  }\r\n\r\n  .scores-list {\r\n    border-bottom: 1px solid #336d;\r\n    color: #000;\r\n    width: 105%;\r\n    font-size: 1.3rem;\r\n    margin-bottom: 0.3rem;\r\n    margin-left: -1.8rem;\r\n  }\r\n\r\n  .scores-list:nth-child(odd) {\r\n    background-color: rgb(246, 243, 240);\r\n  }\r\n\r\n  .scores-list:nth-child(even) {\r\n    background-color: rgb(228, 221, 221);\r\n  }\r\n\r\n  .add-scores {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: cadetblue;\r\n    border: 2px solid rgba(1, 1, 18, 0.998);\r\n  }\r\n\r\n  .h3 {\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  input {\r\n    width: 50%;\r\n    align-self: center;\r\n    height: 2rem;\r\n    border-radius: 8px;\r\n    border-bottom: teal;\r\n    text-align: start;\r\n    padding: 4px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #submit-button {\r\n    width: 15%;\r\n    margin-left: 19.5rem;\r\n    height: 2rem;\r\n    border-radius: 8px;\r\n    border-color: teal;\r\n    color: blue;\r\n  }\r\n\r\n  #submit-button:hover {\r\n    color: #fff;\r\n    background-color: #113e;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .error-container {\r\n    color: red;\r\n    font-size: 1.2rem;\r\n    width: 40%;\r\n    margin: 0 0 0 12rem;\r\n    background-color: rgb(226, 218, 218);\r\n    border-radius: 16px;\r\n    text-align: center;\r\n    font-style: italic;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let gameId; // Store the ID of the game created by you.

// Function to display an error message in the DOM.
const displayErrorMessage = (message) => {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = message;
};

// Function to create a new game and save gameId to local storage.
const createGame = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Barcelona' }),
      },
    );
    const data = await response.json();
    const gameId = data.result.split(':')[1].trim().split(' ')[0].trim();

    // Save gameId to local storage.
    localStorage.setItem('gameId', gameId);
  } catch (error) {
    displayErrorMessage(`Error creating game: ${error.message}`);
  }
};

// Function to load gameId from local storage on page load.
const loadGameIdFromLocalStorage = () => {
  gameId = localStorage.getItem('gameId');
};

// Function to update the leaderboard on the webpage.
const updateLeaderboard = (leaderboard) => {
  const boardList = document.querySelector('.board-list');
  boardList.classList.add('board_list');

  // Clear the current leaderboard.
  boardList.innerHTML = '';

  // Sort the leaderboard based on scores in descending order.
  leaderboard.sort((a, b) => b.score - a.score);

  // Iterate through the leaderboard and create list items to display names and scores.
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('scores-list');
    listItem.textContent = `${index + 1}. ${entry.user}: ${entry.score}`;
    boardList.appendChild(listItem);
  });
};

// Function to fetch scores for the game.
const fetchScores = async () => {
  if (!gameId) {
    return;
  }
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    );
    const data = await response.json();
    const leaderboard = data.result; // Store the leaderboard data.
    updateLeaderboard(leaderboard);
  } catch (error) {
    displayErrorMessage(`Error fetching scores: ${error.message}`);
  }
};

// Function to handle the form submission.
const handleSubmit = async (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('.name-input');
  const scoreInput = document.querySelector('.scores-input');

  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  // Validate input
  if (!name || Number.isNaN(score)) {
    displayErrorMessage('Ooops! Please enter a valid name and score.');
    return;
  }

  // Add the new score to the leaderboard on the server.
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name, score }),
      },
    );

    if (response.ok) {
      // Refresh the leaderboard after submitting a score.
      fetchScores();
    } else {
      displayErrorMessage(`Error submitting score: ${response.statusText}`);
    }
  } catch (error) {
    displayErrorMessage(`Error submitting score: ${error.message}`);
  }

  // Clear the input fields.
  nameInput.value = '';
  scoreInput.value = '';
};

// Function to reload the page.
const reloadPage = () => {
  window.location.reload();
  fetchScores();
};

// Add an event listener for the form submission.
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', handleSubmit);

// Add an event listener for the "Refresh" button to reload the page.
const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', reloadPage);

// Load the leaderboard on page load.
window.addEventListener('load', async () => {
  // Load gameId from local storage.
  loadGameIdFromLocalStorage();

  if (!gameId) {
    // If gameId is not in local storage, create a new game.
    await createGame();
  }

  // Fetch scores after creating the game or loading from local storage.
  fetchScores();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxV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QUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxJQUFJLFdBQVcsSUFBSSxZQUFZO0FBQ3ZFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLE9BQU87QUFDckY7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLElBQUk7QUFDSixrREFBa0QsY0FBYztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsT0FBTztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsbUJBQW1CO0FBQ2xELE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scURBQXFELG9CQUFvQjtBQUN6RTtBQUNBLElBQUk7QUFDSixtREFBbUQsY0FBYztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNT0JJTEUgTUVESUEgUVVFUlkgICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAucmVmcmVzaC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcclxuICB9XHJcblxyXG4gIC5oMiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLnJlZnJlc2gtYnRuIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xyXG4gIH1cclxuXHJcbiAgLnJlZnJlc2gtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2M7XHJcbiAgfVxyXG5cclxuICAuYm9hcmRfbGlzdCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07XHJcbiAgfVxyXG5cclxuICAuc2NvcmVzLWxpc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzYsIDIxOCwgMTE5KTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW46IDAgMCAwLjRyZW0gLTEuOHJlbTtcclxuICB9XHJcblxyXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2NvcmVzLWxpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE4MywgMTgzKTtcclxuICB9XHJcblxyXG4gIC5hZGQtc2NvcmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDEsIDE4LCAwLjk5OCk7XHJcbiAgfVxyXG5cclxuICAuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC40cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW46IDAgMCAwIDQuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIxOCwgMjE4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKiBERVNUT1AgTUVESUEgICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG1hcmdpbjogMnJlbSA4cmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG5cclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5yZWZyZXNoLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTZyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5oMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAucmVmcmVzaC1idG4ge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItY29sb3I6IHRlYWw7XHJcbiAgfVxyXG5cclxuICAucmVmcmVzaC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYztcclxuICB9XHJcblxyXG4gIC5ib2FyZF9saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNjb3Jlcy1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzM2ZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNjb3Jlcy1saXN0Om50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0MywgMjQwKTtcclxuICB9XHJcblxyXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjIxLCAyMjEpO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1zY29yZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgMSwgMTgsIDAuOTk4KTtcclxuICB9XHJcblxyXG4gIC5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTkuNXJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdC1idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIxOCwgMjE4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7O0FBRXhCO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFD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QUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTU9CSUxFIE1FRElBIFFVRVJZICAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudHMtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMnJlbSAxcmVtO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWJ0biB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZF9saXN0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB3aWR0aDogODMlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3Jlcy1saXN0IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzYsIDIxOCwgMTE5KTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW46IDAgMCAwLjRyZW0gLTEuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxODMsIDE4Myk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLXNjb3JlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCAxLCAxOCwgMC45OTgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjRyZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdGVhbDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXJyb3ItY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHdpZHRoOiA1NSU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgNC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMTgsIDIxOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERFU1RPUCBNRURJQSAgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbnRzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIG1hcmdpbjogMnJlbSA4cmVtO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE2cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmgyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWJ0biB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZF9saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzM2ZDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHdpZHRoOiAxMDUlO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0MywgMjQwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdDpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjEsIDIyMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLXNjb3JlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCAxLCAxOCwgMC45OTgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiB0ZWFsO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxOS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lcnJvci1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAxMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjE4LCAyMTgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgZ2FtZUlkOyAvLyBTdG9yZSB0aGUgSUQgb2YgdGhlIGdhbWUgY3JlYXRlZCBieSB5b3UuXG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgRE9NLlxuY29uc3QgZGlzcGxheUVycm9yTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWNvbnRhaW5lcicpO1xuICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgZ2FtZSBhbmQgc2F2ZSBnYW1lSWQgdG8gbG9jYWwgc3RvcmFnZS5cbmNvbnN0IGNyZWF0ZUdhbWUgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8nLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogJ0JhcmNlbG9uYScgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBnYW1lSWQgPSBkYXRhLnJlc3VsdC5zcGxpdCgnOicpWzFdLnRyaW0oKS5zcGxpdCgnICcpWzBdLnRyaW0oKTtcblxuICAgIC8vIFNhdmUgZ2FtZUlkIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVJZCcsIGdhbWVJZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShgRXJyb3IgY3JlYXRpbmcgZ2FtZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICB9XG59O1xuXG4vLyBGdW5jdGlvbiB0byBsb2FkIGdhbWVJZCBmcm9tIGxvY2FsIHN0b3JhZ2Ugb24gcGFnZSBsb2FkLlxuY29uc3QgbG9hZEdhbWVJZEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGdhbWVJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lSWQnKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgbGVhZGVyYm9hcmQgb24gdGhlIHdlYnBhZ2UuXG5jb25zdCB1cGRhdGVMZWFkZXJib2FyZCA9IChsZWFkZXJib2FyZCkgPT4ge1xuICBjb25zdCBib2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtbGlzdCcpO1xuICBib2FyZExpc3QuY2xhc3NMaXN0LmFkZCgnYm9hcmRfbGlzdCcpO1xuXG4gIC8vIENsZWFyIHRoZSBjdXJyZW50IGxlYWRlcmJvYXJkLlxuICBib2FyZExpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgLy8gU29ydCB0aGUgbGVhZGVyYm9hcmQgYmFzZWQgb24gc2NvcmVzIGluIGRlc2NlbmRpbmcgb3JkZXIuXG4gIGxlYWRlcmJvYXJkLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcblxuICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGxlYWRlcmJvYXJkIGFuZCBjcmVhdGUgbGlzdCBpdGVtcyB0byBkaXNwbGF5IG5hbWVzIGFuZCBzY29yZXMuXG4gIGxlYWRlcmJvYXJkLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdzY29yZXMtbGlzdCcpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7aW5kZXggKyAxfS4gJHtlbnRyeS51c2VyfTogJHtlbnRyeS5zY29yZX1gO1xuICAgIGJvYXJkTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggc2NvcmVzIGZvciB0aGUgZ2FtZS5cbmNvbnN0IGZldGNoU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIWdhbWVJZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJHtnYW1lSWR9L3Njb3Jlcy9gLFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBsZWFkZXJib2FyZCA9IGRhdGEucmVzdWx0OyAvLyBTdG9yZSB0aGUgbGVhZGVyYm9hcmQgZGF0YS5cbiAgICB1cGRhdGVMZWFkZXJib2FyZChsZWFkZXJib2FyZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShgRXJyb3IgZmV0Y2hpbmcgc2NvcmVzOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZm9ybSBzdWJtaXNzaW9uLlxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtaW5wdXQnKTtcbiAgY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMtaW5wdXQnKTtcblxuICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBzY29yZSA9IHBhcnNlSW50KHNjb3JlSW5wdXQudmFsdWUsIDEwKTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dFxuICBpZiAoIW5hbWUgfHwgTnVtYmVyLmlzTmFOKHNjb3JlKSkge1xuICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoJ09vb3BzISBQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lIGFuZCBzY29yZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBBZGQgdGhlIG5ldyBzY29yZSB0byB0aGUgbGVhZGVyYm9hcmQgb24gdGhlIHNlcnZlci5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7Z2FtZUlkfS9zY29yZXMvYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IG5hbWUsIHNjb3JlIH0pLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBSZWZyZXNoIHRoZSBsZWFkZXJib2FyZCBhZnRlciBzdWJtaXR0aW5nIGEgc2NvcmUuXG4gICAgICBmZXRjaFNjb3JlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGBFcnJvciBzdWJtaXR0aW5nIHNjb3JlOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoYEVycm9yIHN1Ym1pdHRpbmcgc2NvcmU6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxuXG4gIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZHMuXG4gIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBzY29yZUlucHV0LnZhbHVlID0gJyc7XG59O1xuXG4vLyBGdW5jdGlvbiB0byByZWxvYWQgdGhlIHBhZ2UuXG5jb25zdCByZWxvYWRQYWdlID0gKCkgPT4ge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIGZldGNoU2NvcmVzKCk7XG59O1xuXG4vLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBmb3JtIHN1Ym1pc3Npb24uXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3VibWl0KTtcblxuLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgXCJSZWZyZXNoXCIgYnV0dG9uIHRvIHJlbG9hZCB0aGUgcGFnZS5cbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaC1idG4nKTtcbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWxvYWRQYWdlKTtcblxuLy8gTG9hZCB0aGUgbGVhZGVyYm9hcmQgb24gcGFnZSBsb2FkLlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIC8vIExvYWQgZ2FtZUlkIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgbG9hZEdhbWVJZEZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICBpZiAoIWdhbWVJZCkge1xuICAgIC8vIElmIGdhbWVJZCBpcyBub3QgaW4gbG9jYWwgc3RvcmFnZSwgY3JlYXRlIGEgbmV3IGdhbWUuXG4gICAgYXdhaXQgY3JlYXRlR2FtZSgpO1xuICB9XG5cbiAgLy8gRmV0Y2ggc2NvcmVzIGFmdGVyIGNyZWF0aW5nIHRoZSBnYW1lIG9yIGxvYWRpbmcgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICBmZXRjaFNjb3JlcygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=