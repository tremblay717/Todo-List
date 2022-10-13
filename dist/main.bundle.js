"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    min-height: 110vh;\n    background-color: #28272A;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #28272A;\n    height: 20px;\n    padding: 2%;\n}\n\n.hero {\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n    color: white;\n}\n\n#mainSection {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15vh;\n}\n\n.leftBar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 20%;\n    max-width: 250px;\n    padding: 2%;\n    padding-top: 1%;\n    background-color: #28272A;\n}\n\n.righHeaderDiv {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    gap: 10px\n}\n\n\n#userIcon {\n    height: 2.25vh;\n    min-height: 18px;\n}\n\n.userName {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    color: white;\n}\n\n.projectDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#resetDiv {\n    display: flex;\n    align-items: flex-start;\n    height: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    cursor: pointer;\n    color: rgb(141, 167, 47);\n}\n\n.newProject {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    color: white;\n    cursor: pointer;\n}\n\n.newProject:hover {\n    color: rgb(141, 167, 47) !important;\n}\n\n.myProjects {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    color: white;\n}\n\n.projectTitle {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.95rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoSection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n    padding: 2%;\n    width: 80%;\n    height: min-content;\n}\n\n#fullProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    margin: 2%;\n    margin-right: 4%;\n    gap: 15px;\n}\n\n#editingDiv,\n#newProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 5px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#editingForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n\n\n#newForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.buttonDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    gap: 5px;\n    height: inherit;\n}\n\n.editButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(54, 84, 57);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    justify-content: center;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.cancelButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(227, 239, 56);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: black;\n    justify-content: center;\n    text-align: center;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.deleteButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    justify-content: center;\n    text-align: center;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: max-content;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n#toDoDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    padding-top: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#projectDisplay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    height: 80px;\n}\n\n#newtoDo,\n#showDetails {\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    height: 0.5vh;\n    max-height: 25px;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#toDoButton {\n    display: flex;\n    align-items: center;\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    width: max-content;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n    width: 100%;\n}\n\n.editToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n.deleteToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    padding: 2%;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoForm,\n#editTodoForm {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    padding: 2%;\n    padding-bottom: 4%;\n    background-color: white;\n    border-left: solid rgb(141, 167, 47);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#formUL {\n    display: grid;\n    align-items: flex-start;\n    grid-template: auto auto auto / 50% 50%;\n    width: 100%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoUL {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    justify-items: start;\n    grid-template: 10% 45% 45%/ 50% 50%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoTitle {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#toDoTitleLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#toDoDescriptionLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n\n}\n\n#toDoStatusLi {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 10px;\n}\n\nlabel,\ninput {\n    font-size: 0.9rem;\n    font-family: 'Roboto', sans-serif;\n    width: 15vw;\n}\n\nlabel {\n    width: 100%;\n}\n\n#newProjectUl {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\ninput,\nselect,\noption {\n    height: 20px;\n}\n\n#currentToDoDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    height: max-content;\n    padding: 2%;\n}\n\n#toDoBar {\n    display: grid;\n    align-items: center;\n    justify-items: stretch;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.35vw;\n    color: rgb(141, 167, 47);\n}\n\n#barTitle {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n    text-align: center;\n}\n\n#barDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    font-weight: 600;\n}\n\n#barStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-weight: 600;\n    text-align: center;\n}\n\n.toDoBox {\n    display: grid;\n    align-items: center;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.05vw;\n}\n\n#toDoTitle {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n}\n\n#toDoDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    text-justify: inter-word;\n}\n\n#toDoStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB;AACJ;;;AAGA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;IAC/B,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,gBAAgB;IAChB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,QAAQ;IACR,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,oCAAoC;IACpC,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,oCAAoC;IACpC,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uCAAuC;IACvC,WAAW;IACX,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,mCAAmC;IACnC,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;;AAEtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;IACjB,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,yCAAyC;IACzC,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yCAAyC;IACzC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\nbody {\n    margin: 0;\n    min-height: 110vh;\n    background-color: #28272A;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #28272A;\n    height: 20px;\n    padding: 2%;\n}\n\n.hero {\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n    color: white;\n}\n\n#mainSection {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15vh;\n}\n\n.leftBar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 20%;\n    max-width: 250px;\n    padding: 2%;\n    padding-top: 1%;\n    background-color: #28272A;\n}\n\n.righHeaderDiv {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    gap: 10px\n}\n\n\n#userIcon {\n    height: 2.25vh;\n    min-height: 18px;\n}\n\n.userName {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    color: white;\n}\n\n.projectDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#resetDiv {\n    display: flex;\n    align-items: flex-start;\n    height: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    cursor: pointer;\n    color: rgb(141, 167, 47);\n}\n\n.newProject {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    color: white;\n    cursor: pointer;\n}\n\n.newProject:hover {\n    color: rgb(141, 167, 47) !important;\n}\n\n.myProjects {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    color: white;\n}\n\n.projectTitle {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.95rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoSection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n    padding: 2%;\n    width: 80%;\n    height: min-content;\n}\n\n#fullProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    margin: 2%;\n    margin-right: 4%;\n    gap: 15px;\n}\n\n#editingDiv,\n#newProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 5px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#editingForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n\n\n#newForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.buttonDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    gap: 5px;\n    height: inherit;\n}\n\n.editButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(54, 84, 57);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    justify-content: center;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.cancelButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(227, 239, 56);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: black;\n    justify-content: center;\n    text-align: center;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.deleteButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    justify-content: center;\n    text-align: center;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: max-content;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n#toDoDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    padding-top: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#projectDisplay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    height: 80px;\n}\n\n#newtoDo,\n#showDetails {\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    height: 0.5vh;\n    max-height: 25px;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#toDoButton {\n    display: flex;\n    align-items: center;\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    width: max-content;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n    width: 100%;\n}\n\n.editToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n.deleteToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    padding: 2%;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoForm,\n#editTodoForm {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    padding: 2%;\n    padding-bottom: 4%;\n    background-color: white;\n    border-left: solid rgb(141, 167, 47);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#formUL {\n    display: grid;\n    align-items: flex-start;\n    grid-template: auto auto auto / 50% 50%;\n    width: 100%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoUL {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    justify-items: start;\n    grid-template: 10% 45% 45%/ 50% 50%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoTitle {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#toDoTitleLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#toDoDescriptionLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n\n}\n\n#toDoStatusLi {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 10px;\n}\n\nlabel,\ninput {\n    font-size: 0.9rem;\n    font-family: 'Roboto', sans-serif;\n    width: 15vw;\n}\n\nlabel {\n    width: 100%;\n}\n\n#newProjectUl {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\ninput,\nselect,\noption {\n    height: 20px;\n}\n\n#currentToDoDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    height: max-content;\n    padding: 2%;\n}\n\n#toDoBar {\n    display: grid;\n    align-items: center;\n    justify-items: stretch;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.35vw;\n    color: rgb(141, 167, 47);\n}\n\n#barTitle {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n    text-align: center;\n}\n\n#barDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    font-weight: 600;\n}\n\n#barStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-weight: 600;\n    text-align: center;\n}\n\n.toDoBox {\n    display: grid;\n    align-items: center;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.05vw;\n}\n\n#toDoTitle {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n}\n\n#toDoDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    text-justify: inter-word;\n}\n\n#toDoStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function Project(title, description, dueDate, priority, status, todo) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.todo = todo;
}

/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./src/template.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");






(0,_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])() // Displaying the basic html template through a function call
;(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])() // Populating the left Bar

let items = { // Retrieving the local Storage everytime the page is loaded
  ...localStorage
}

let list = []

for (let i = 0; i < localStorage.length; i++) {
  const item = JSON.parse(items[Object.keys(items)[i]]) // We store each object in localStorage in an array;
  item.constructor = _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  list.push(item)
}

const projectBoxes = document.querySelectorAll('.projectTitle')

for (let i = 0; i < projectBoxes.length; i++) {
  projectBoxes[i].addEventListener('click', editProject, true)
  projectBoxes[i].addEventListener('click', myTodo, false)
}

let currentObject = ''

function editProject () {
  const myObject = list.find(item => item.title === this.id)

  currentObject = myObject

  if (document.getElementById('fullProjectDiv') != null) {
    document.getElementById('fullProjectDiv').remove()
  } else if (document.getElementById('newProjectDiv') != null) {
    document.getElementById('newProjectDiv').remove()
  }

  const fullProjectDiv = document.createElement('div')
  fullProjectDiv.id = 'fullProjectDiv'
  document.getElementById('todoSection').appendChild(fullProjectDiv)

  const editingDiv = document.createElement('div') // Container that contains a form
  editingDiv.id = 'editingDiv'
  fullProjectDiv.appendChild(editingDiv)

  const projectDisplay = document.createElement('div')
  projectDisplay.id = 'projectDisplay'
  editingDiv.appendChild(projectDisplay)

  const projectTitle = document.createElement('span')
  projectTitle.id = 'projectTitle'
  projectTitle.textContent = 'Title: ' + currentObject.title
  projectDisplay.appendChild(projectTitle)

  const showDetail = document.createElement('span')
  showDetail.id = 'showDetails'
  showDetail.textContent = 'Show Project details'
  projectDisplay.appendChild(showDetail)
  showDetail.addEventListener('click', showDetails)

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

function showDetails () {
  if (document.getElementById('editingForm') != null) {
    document.getElementById('editingForm').remove()
  } else {
    const editingForm = document.createElement('form')
    editingForm.id = 'editingForm'
    document.getElementById('editingDiv').appendChild(editingForm)

    const formUL = document.createElement('ul')
    formUL.id = 'formUL'
    editingForm.appendChild(formUL)

    const titleLi = document.createElement('li')

    const titleLabel = document.createElement('label')
    titleLabel.textContent = 'Edit Project Title:'

    const titleInput = document.createElement('input')
    titleInput.id = 'titleInputChange'
    titleInput.placeholder = currentObject.title

    titleLi.appendChild(titleLabel)
    titleLi.appendChild(titleInput)
    formUL.appendChild(titleLi)

    const descriptionLi = document.createElement('li')

    const descriptionLabel = document.createElement('label')
    descriptionLabel.textContent = 'Edit Project Description:'

    const descriptionInput = document.createElement('input')
    descriptionInput.id = 'descriptionInput'
    descriptionInput.placeholder = currentObject.description

    descriptionLi.appendChild(descriptionLabel)
    descriptionLi.appendChild(descriptionInput)
    formUL.appendChild(descriptionLi)

    const dateLi = document.createElement('li')

    const dateLabel = document.createElement('label')
    dateLabel.textContent = 'Edit Project Due Date:'

    const currentDate = document.createElement('label')
    currentDate.id = 'currentDate'
    currentDate.textContent = currentObject.dueDate
    currentDate.style.color = 'purple'

    const dateInput = document.createElement('input')
    dateInput.id = 'dateInput'
    dateInput.style.width = '125px'
    dateInput.type = 'date'

    dateLi.appendChild(dateLabel)
    dateLi.appendChild(currentDate)
    dateLi.appendChild(dateInput)
    formUL.appendChild(dateLi)

    const priorityLi = document.createElement('li')

    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Edit Project Priority:'

    const currentPriority = document.createElement('label')
    currentPriority.id = 'currentPriority'
    currentPriority.textContent = currentObject.priority
    currentPriority.style.color = 'purple'

    const prioritySelect = document.createElement('select')
    prioritySelect.id = 'prioritySelect'
    prioritySelect.style.width = '130px'

    const optionDefault = document.createElement('option')
    optionDefault.value = ''
    optionDefault.textContent = ''
    prioritySelect.appendChild(optionDefault)

    const optionLow = document.createElement('option')
    optionLow.value = 'Low'
    optionLow.textContent = 'Low'
    prioritySelect.appendChild(optionLow)

    const optionMedium = document.createElement('option')
    optionMedium.value = 'Medium'
    optionMedium.textContent = 'Medium'
    prioritySelect.appendChild(optionMedium)

    const optionHigh = document.createElement('option')
    optionHigh.value = 'High'
    optionHigh.textContent = 'High'
    prioritySelect.appendChild(optionHigh)

    priorityLi.appendChild(priorityLabel)
    priorityLi.appendChild(currentPriority)
    priorityLi.appendChild(prioritySelect)
    formUL.appendChild(priorityLi)

    const statusLi = document.createElement('li')

    const statusLabel = document.createElement('label')
    statusLabel.textContent = 'Edit Project Status:'

    const currentStatus = document.createElement('label')
    currentStatus.id = 'currentStatus'
    currentStatus.textContent = currentObject.status
    currentStatus.style.color = 'purple'

    const statusSelect = document.createElement('select')
    statusSelect.id = 'statusSelect'
    statusSelect.style.width = '130px'

    const statusDefault = document.createElement('option')
    statusDefault.value = ''
    statusDefault.textContent = ''
    statusSelect.appendChild(statusDefault)

    const statusNot = document.createElement('option')
    statusNot.value = 'Not Started'
    statusNot.textContent = 'Not Started'
    statusSelect.appendChild(statusNot)

    const statusProgress = document.createElement('option')
    statusProgress.value = 'In Progress'
    statusProgress.textContent = 'In Progress'
    statusSelect.appendChild(statusProgress)

    const statusDone = document.createElement('option')
    statusDone.value = 'Done'
    statusDone.textContent = 'Done'
    statusSelect.appendChild(statusDone)

    statusLi.appendChild(statusLabel)
    statusLi.appendChild(currentStatus)
    statusLi.appendChild(statusSelect)
    formUL.appendChild(statusLi)

    // Div to hold our button - Push or Cancel changes
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'buttonDiv'
    editingForm.appendChild(buttonDiv)

    const editButton = document.createElement('div')
    editButton.className = 'editButton'
    editButton.addEventListener('click', editDetails)

    editButton.textContent = 'Confirm Change(s)'
    buttonDiv.appendChild(editButton)

    const deleteButton = document.createElement('div')
    deleteButton.className = 'deleteButton'
    deleteButton.id = 'deleteButton'
    deleteButton.textContent = 'Delete Project'
    deleteButton.addEventListener('click', deleteProject)
    buttonDiv.appendChild(deleteButton)
  }

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

function editDetails () {
  const titleInput = document.getElementById('titleInputChange')
  const descriptionInput = document.getElementById('descriptionInput')
  const currentDate = document.getElementById('currentDate')
  const currentPriority = document.getElementById('currentPriority')
  const currentStatus = document.getElementById('currentStatus')
  const dateInput = document.getElementById('dateInput')
  const prioritySelect = document.getElementById('prioritySelect')
  const statusSelect = document.getElementById('statusSelect')

  if (titleInput.value === '' && descriptionInput.value === '' && dateInput.value === '' && prioritySelect.value === '' && statusSelect.value === '') {
    return
  } else {
    const titleObject = document.getElementById(currentObject.title)
    const projectTitle = document.getElementById('projectTitle')
    // const editObject = list[i].title // this variable stores the right object title before removing it from our list
    window.localStorage.removeItem(currentObject.title)

    if (titleInput.value !== '') {
      document.getElementById(currentObject.title).textContent = titleInput.value
      currentObject.title = titleInput.value
      document.getElementById('myToDoTItle').textContent = titleInput.value + ':Todo(s)'
    }
    if (descriptionInput.value !== '') {
      currentObject.description = descriptionInput.value
    }
    if (dateInput.value !== '') {
      currentObject.dueDate = dateInput.value
    }
    if (prioritySelect.value !== '') {
      currentObject.priority = prioritySelect.value
    }
    if (statusSelect.value !== '') {
      currentObject.status = statusSelect.value
    }

    window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject))

    projectTitle.textContent = currentObject.title
    titleObject.id = currentObject.title
    titleInput.value = ''
    titleInput.placeholder = currentObject.title

    descriptionInput.placeholder = currentObject.description
    descriptionInput.value = ''

    currentStatus.textContent = currentObject.status

    currentDate.textContent = currentObject.dueDate
    dateInput.value = ''

    currentPriority.textContent = currentObject.priority
    prioritySelect.value = ''

    currentStatus.textContent = ''
    statusSelect.value = ''
  }
  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

function deleteProject () {
  const deleteTitle = currentObject.title

  window.localStorage.removeItem(deleteTitle)
  document.getElementById('todoSection').removeChild(document.getElementById('fullProjectDiv'))

  document.getElementById(deleteTitle).remove()

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

const addProject = document.getElementById('newProject')
addProject.addEventListener('click', newProject)

function newProject () {
  if (document.getElementById('newProjectDiv') != null) {
    return
  }

  if (document.getElementById('fullProjectDiv') != null) {
    document.getElementById('fullProjectDiv').remove()
  }

  const newProjectDiv = document.createElement('div') // Container that contains a form
  newProjectDiv.id = 'newProjectDiv'
  document.getElementById('todoSection').appendChild(newProjectDiv)

  const newForm = document.createElement('form')
  newForm.id = 'newForm'
  newProjectDiv.appendChild(newForm)

  const projectTitle = document.createElement('span')
  projectTitle.textContent = 'Add a new Project'
  newForm.appendChild(projectTitle)

  const formUL = document.createElement('ul')
  formUL.id = 'newProjectUl'
  newForm.appendChild(formUL)

  const titleLi = document.createElement('li')

  const titleLabel = document.createElement('label')
  titleLabel.textContent = ' Project Title:'

  const titleInput = document.createElement('input')
  titleInput.id = 'titleInput'
  titleInput.placeholder = 'Computer'

  titleLi.appendChild(titleLabel)
  titleLi.appendChild(titleInput)
  formUL.appendChild(titleLi)

  const descriptionLi = document.createElement('li')

  const descriptionLabel = document.createElement('label')
  descriptionLabel.textContent = 'Project Description:'

  const descriptionInput = document.createElement('input')
  descriptionInput.id = 'descriptionInput'
  descriptionInput.placeholder = 'Buy a new computer'

  descriptionLi.appendChild(descriptionLabel)
  descriptionLi.appendChild(descriptionInput)
  formUL.appendChild(descriptionLi)

  const dateLi = document.createElement('li')

  const dateLabel = document.createElement('label')
  dateLabel.textContent = 'Project Due Date:'

  const dateInput = document.createElement('input')
  dateInput.id = 'dateInput'
  dateInput.style.width = '125px'
  dateInput.type = 'date'

  dateLi.appendChild(dateLabel)
  dateLi.appendChild(dateInput)
  formUL.appendChild(dateLi)

  const priorityLi = document.createElement('li')

  const priorityLabel = document.createElement('label')
  priorityLabel.textContent = 'Project Priority:'

  const prioritySelect = document.createElement('select')
  prioritySelect.id = 'prioritySelect'
  prioritySelect.style.width = '130px'

  const optionLow = document.createElement('option')
  optionLow.value = 'Low'
  optionLow.textContent = 'Low'
  prioritySelect.appendChild(optionLow)

  const optionMedium = document.createElement('option')
  optionMedium.value = 'Medium'
  optionMedium.textContent = 'Medium'
  prioritySelect.appendChild(optionMedium)

  const optionHigh = document.createElement('option')
  optionHigh.value = 'High'
  optionHigh.textContent = 'High'
  prioritySelect.appendChild(optionHigh)

  priorityLi.appendChild(priorityLabel)
  priorityLi.appendChild(prioritySelect)
  formUL.appendChild(priorityLi)

  const statusLi = document.createElement('li')

  const statusLabel = document.createElement('label')
  statusLabel.textContent = 'Project Status:'

  const statusSelect = document.createElement('select')
  statusSelect.id = 'statusSelect'
  statusSelect.style.width = '130px'

  const statusDefault = document.createElement('option')
  statusDefault.value = ''
  statusDefault.textContent = ''
  statusSelect.appendChild(statusDefault)

  const statusNot = document.createElement('option')
  statusNot.value = 'Not Started'
  statusNot.textContent = 'Not Started'
  statusSelect.appendChild(statusNot)

  const statusProgress = document.createElement('option')
  statusProgress.value = 'In Progress'
  statusProgress.textContent = 'In Progress'
  statusSelect.appendChild(statusProgress)

  const statusDone = document.createElement('option')
  statusDone.value = 'Done'
  statusDone.textContent = 'Done'
  statusSelect.appendChild(statusDone)

  statusLi.appendChild(statusLabel)
  statusLi.appendChild(statusSelect)
  formUL.appendChild(statusLi)

  // Div to hold our button - Push or Cancel changes
  const buttonDiv = document.createElement('div')
  buttonDiv.className = 'buttonDiv'
  newForm.appendChild(buttonDiv)

  const confirmButton = document.createElement('div')
  confirmButton.className = 'editButton'
  confirmButton.addEventListener('click', confirmButtonNew)

  confirmButton.textContent = 'Confirm Project'
  confirmButton.id = confirmButton
  buttonDiv.appendChild(confirmButton)

  const cancelButton = document.createElement('div')
  cancelButton.className = 'cancelButton'
  cancelButton.id = 'cancelButton'
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', cancelProject)
  buttonDiv.appendChild(cancelButton)

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

function confirmButtonNew () {
  const titleInput = document.getElementById('titleInput')
  const descriptionInput = document.getElementById('descriptionInput')
  const dateInput = document.getElementById('dateInput')
  const prioritySelect = document.getElementById('prioritySelect')
  const statusSelect = document.getElementById('statusSelect')

  if (titleInput.value === '' || descriptionInput.value === '' || dateInput.value === '' || prioritySelect.value === '' || statusSelect.value === '') {
  // nothing
  } else {
    const newObject = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"](titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value, statusSelect.value, [])
    window.localStorage.setItem(newObject.title, JSON.stringify(newObject))
    const projectTitle = document.createElement('span')
    projectTitle.className = 'projectTitle'
    projectTitle.id = newObject.title
    projectTitle.textContent = newObject.title
    list.push(newObject)
    document.getElementById('projectDiv').appendChild(projectTitle)
    document.getElementById('newProjectDiv').remove()
    projectTitle.addEventListener('click', editProject, true)
    projectTitle.addEventListener('click', myTodo)
  }
}

function cancelProject () {
  document.getElementById('newProjectDiv').remove()
}

const reset = document.getElementById('resetProjects')
reset.addEventListener('click', resetProjects)

function resetProjects () {
  // Creating a few random projects to display it on our screen
  const home = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Home', 'Renovating my Home', '2023-12-31', 'Low', 'Not Started', [])
  const school = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('School', 'Finishing my degree', '2023-12-31', 'Low', 'Not Started', [])
  const groceries = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Groceries', 'Buy my groceries', '2023-01-01', 'High', 'Not Started', [])
  const car = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('New Car', 'Buy a new car', '2023-12-31', 'Medium', 'Not Started', [])
  const running = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High', 'Not Started', [])
  const everest = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium', 'Not Started', [])
  const job = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('New Job', 'Change for a better job', '2022-12-31', 'Low', 'Not Started', [])
  const coding = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Coding', 'Learn to code', '2023-10-31', 'Medium', 'Not Started', [])

  const projectList = [home, school, groceries, car, running, everest, job, coding]

  window.localStorage.clear()

  for (let i = 0; i < projectList.length; i++) {
    const myProject = projectList[i]

    window.localStorage.setItem(myProject.title, JSON.stringify(myProject))
  }

  while (document.body.firstChild) {
    document.body.removeChild(document.body.lastChild)
  }

  (0,_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])() // Displaying the basic html template through a function call
  ;(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])() // Populating the left Bar

  items = { // Retrieving the local Storage everytime the page is loaded
    ...localStorage
  }

  list = []

  for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(items[Object.keys(items)[i]]) // We store each object in localStorage in an array;
    item.constructor = _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    list.push(item)
  }

  const projectBoxes = document.querySelectorAll('.projectTitle')

  for (let i = 0; i < projectBoxes.length; i++) {
    projectBoxes[i].addEventListener('click', editProject, true)
    projectBoxes[i].addEventListener('click', myTodo, false)
  }

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)

  currentObject = ''
}

function myTodo () {
  const toDoDiv = document.createElement('div') // Container that contains a form
  toDoDiv.id = 'toDoDiv'
  document.getElementById('fullProjectDiv').append(toDoDiv)

  const todoTitle = document.createElement('span')
  todoTitle.id = 'myToDoTItle'
  todoTitle.textContent = currentObject.title + ': Todo(s)'
  toDoDiv.appendChild(todoTitle)

  const newtoDo = document.createElement('span')
  newtoDo.id = 'newtoDo'
  newtoDo.textContent = 'Add to do'
  newtoDo.addEventListener('click', createTodo)

  toDoDiv.appendChild(newtoDo)

  const currentToDoDiv = document.createElement('div')
  currentToDoDiv.id = 'currentToDoDiv'
  toDoDiv.appendChild(currentToDoDiv)

  const toDoBar = document.createElement('box')
  toDoBar.id = 'toDoBar'
  currentToDoDiv.appendChild(toDoBar)

  const barTitle = document.createElement('span')
  barTitle.id = 'barTitle'
  barTitle.textContent = 'Title'
  toDoBar.appendChild(barTitle)

  const barDescription = document.createElement('span')
  barDescription.id = 'barDescription'
  barDescription.textContent = 'Description'
  toDoBar.appendChild(barDescription)

  const barStatus = document.createElement('span')
  barStatus.id = 'barStatus'
  barStatus.textContent = 'Status'
  toDoBar.appendChild(barStatus)

  const currentToDolist = currentObject.todo

  if (currentToDolist.length > 0) {
    for (let j = 0; j < currentToDolist.length; j++) {
      const toDoBox = document.createElement('box')
      toDoBox.className = 'toDoBox'
      toDoBox.id = currentToDolist[j].title + '_Box'
      currentToDoDiv.appendChild(toDoBox)

      const toDoTitle = document.createElement('span')
      toDoTitle.id = 'toDoTitle'
      toDoTitle.textContent = currentToDolist[j].title
      toDoBox.appendChild(toDoTitle)

      const toDoDescription = document.createElement('p')
      toDoDescription.id = 'toDoDescription'
      toDoDescription.textContent = currentToDolist[j].description
      toDoBox.appendChild(toDoDescription)

      const toDoStatus = document.createElement('span')
      toDoStatus.id = 'toDoStatus'
      toDoStatus.textContent = currentToDolist[j].status
      toDoBox.appendChild(toDoStatus)

      const toDoEdit = document.createElement('p')
      toDoEdit.id = currentToDolist[j].title
      toDoEdit.style.cursor = 'pointer'
      toDoEdit.textContent = 'Edit'
      toDoEdit.addEventListener('click', changeTodo)
      toDoBox.appendChild(toDoEdit)
    }
  }
}

function createTodo () {
  if (document.getElementById('todoForm') != null) {
    return
  }

  const todoForm = document.createElement('div')
  todoForm.id = 'todoForm'
  document.getElementById('fullProjectDiv').appendChild(todoForm)

  const toDoUL = document.createElement('ul')
  toDoUL.id = 'toDoUL'
  todoForm.appendChild(toDoUL)

  const toDoTitle = document.createElement('span')
  toDoTitle.id = 'toDoTitle'
  toDoTitle.textContent = 'New Todo'
  toDoUL.appendChild(toDoTitle)

  const toDoTitleLi = document.createElement('li')
  toDoTitleLi.id = 'toDoTitleLi'

  const toDoTitleLabel = document.createElement('label')
  toDoTitleLabel.textContent = 'Todo Title:'

  const toDoTitleInput = document.createElement('input')
  toDoTitleInput.id = 'toDoTitleInput'

  toDoTitleLi.appendChild(toDoTitleLabel)
  toDoTitleLi.appendChild(toDoTitleInput)
  toDoUL.appendChild(toDoTitleLi)

  const toDoDescriptionLi = document.createElement('li')
  toDoDescriptionLi.id = 'toDoDescriptionLi'

  const toDoDescriptionLabel = document.createElement('label')
  toDoDescriptionLabel.textContent = 'Todo Description:'

  const toDoDescriptionInput = document.createElement('input')
  toDoDescriptionInput.id = 'toDoDescriptionInput'

  toDoDescriptionLi.appendChild(toDoDescriptionLabel)
  toDoDescriptionLi.appendChild(toDoDescriptionInput)
  toDoUL.appendChild(toDoDescriptionLi)

  const toDoStatusLi = document.createElement('li')
  toDoStatusLi.id = 'toDoStatusLi'

  const toDoStatusLabel = document.createElement('label')
  toDoStatusLabel.textContent = 'Todo Status:'

  const toDoStatusSelect = document.createElement('select')
  toDoStatusSelect.id = 'toDoStatusSelect'
  toDoStatusSelect.style.width = '130px'

  const toDoStatusNot = document.createElement('option')
  toDoStatusNot.value = 'Not Started'
  toDoStatusNot.textContent = 'Not Started'
  toDoStatusSelect.appendChild(toDoStatusNot)

  const toDoStatusProgress = document.createElement('option')
  toDoStatusProgress.value = 'In Progress'
  toDoStatusProgress.textContent = 'In Progress'
  toDoStatusSelect.appendChild(toDoStatusProgress)

  const toDoStatusDone = document.createElement('option')
  toDoStatusDone.value = 'Done'
  toDoStatusDone.textContent = 'Done'
  toDoStatusSelect.appendChild(toDoStatusDone)

  toDoStatusLi.appendChild(toDoStatusLabel)
  toDoStatusLi.appendChild(toDoStatusSelect)
  toDoUL.appendChild(toDoStatusLi)

  const toDoButton = document.createElement('span')
  toDoButton.id = 'toDoButton'
  toDoButton.textContent = 'Confirm Todo'
  toDoButton.addEventListener('click', generateToDo)
  toDoUL.appendChild(toDoButton)

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}

function generateToDo () {
  const toDoTitleInput = document.getElementById('toDoTitleInput')
  const toDoDescriptionInput = document.getElementById('toDoDescriptionInput')
  const toDoStatusSelect = document.getElementById('toDoStatusSelect')

  if (toDoTitleInput.value === '' || toDoDescriptionInput.value === '' || toDoStatusSelect.value === '') {
    //  nothing
  } else {
    const todoList = currentObject.todo

    const newTodoObject = new _editTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"](toDoTitleInput.value, toDoDescriptionInput.value, toDoStatusSelect.value)

    todoList.push(newTodoObject)

    currentObject.todo = todoList

    const toDoBox = document.createElement('box')
    toDoBox.className = 'toDoBox'
    toDoBox.id = toDoTitleInput.value + '_Box'
    document.getElementById('currentToDoDiv').appendChild(toDoBox)

    const toDoTitle = document.createElement('span')
    toDoTitle.id = 'toDoTitle'
    toDoTitle.textContent = toDoTitleInput.value
    toDoBox.appendChild(toDoTitle)

    const toDoDescription = document.createElement('p')
    toDoDescription.id = 'toDoDescription'
    toDoDescription.textContent = toDoDescriptionInput.value
    toDoBox.appendChild(toDoDescription)

    const toDoStatus = document.createElement('span')
    toDoStatus.id = 'toDoStatus'
    toDoStatus.textContent = toDoStatusSelect.value
    toDoBox.appendChild(toDoStatus)

    const toDoEdit = document.createElement('p')
    toDoEdit.className = 'toDoEdit'
    toDoEdit.id = newTodoObject.title
    toDoEdit.style.cursor = 'pointer'
    toDoEdit.textContent = 'Edit'
    toDoEdit.addEventListener('click', changeTodo)
    toDoBox.appendChild(toDoEdit)

    window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject))

    document.getElementById('todoForm').remove()

    const addProject = document.getElementById('newProject')
    addProject.addEventListener('click', newProject)

    const reset = document.getElementById('resetProjects')
    reset.addEventListener('click', resetProjects)
  }
}

function changeTodo () {
  if (document.getElementById('todoForm') != null) {
    document.getElementById('todoForm').remove()
  }

  if (document.getElementById('editTodoForm') != null) {
  // nothing
  } else {
    const currentToDolist = currentObject.todo

    const currentTodo = currentToDolist.find(item => item.title === this.id)

    const todoForm = document.createElement('div')
    todoForm.id = 'editTodoForm'
    document.getElementById('fullProjectDiv').appendChild(todoForm)

    const toDoUL = document.createElement('ul')
    toDoUL.id = 'toDoUL'
    todoForm.appendChild(toDoUL)

    const editToDoTitle = document.createElement('span')
    editToDoTitle.id = 'editToDoTitle'
    editToDoTitle.textContent = 'Edit Todo: ' + currentTodo.title
    toDoUL.appendChild(editToDoTitle)

    const toDoTitleLi = document.createElement('li')
    toDoTitleLi.id = 'toDoTitleLi'

    const toDoTitleLabel = document.createElement('label')
    toDoTitleLabel.textContent = 'Todo Title:'

    const toDoTitleInput = document.createElement('input')
    toDoTitleInput.id = 'toDoTitleInput'
    toDoTitleLi.appendChild(toDoTitleLabel)
    toDoTitleLi.appendChild(toDoTitleInput)
    toDoUL.appendChild(toDoTitleLi)

    const toDoDescriptionLi = document.createElement('li')
    toDoDescriptionLi.id = 'toDoDescriptionLi'

    const toDoDescriptionLabel = document.createElement('label')
    toDoDescriptionLabel.textContent = 'Todo Description:'

    const toDoDescriptionInput = document.createElement('input')
    toDoDescriptionInput.id = 'toDoDescriptionInput'

    toDoDescriptionLi.appendChild(toDoDescriptionLabel)
    toDoDescriptionLi.appendChild(toDoDescriptionInput)
    toDoUL.appendChild(toDoDescriptionLi)

    const toDoStatusLi = document.createElement('li')
    toDoStatusLi.id = 'toDoStatusLi'

    const toDoStatusLabel = document.createElement('label')
    toDoStatusLabel.textContent = 'Todo Status:'

    const toDoStatusSelect = document.createElement('select')
    toDoStatusSelect.id = 'toDoStatusSelect'
    toDoStatusSelect.style.width = '130px'

    const toDoStatusEmpty = document.createElement('option')
    toDoStatusEmpty.value = ''
    toDoStatusEmpty.textContent = ''
    toDoStatusSelect.appendChild(toDoStatusEmpty)

    const toDoStatusNot = document.createElement('option')
    toDoStatusNot.value = 'Not Started'
    toDoStatusNot.textContent = 'Not Started'
    toDoStatusSelect.appendChild(toDoStatusNot)

    const toDoStatusProgress = document.createElement('option')
    toDoStatusProgress.value = 'In Progress'
    toDoStatusProgress.textContent = 'In Progress'
    toDoStatusSelect.appendChild(toDoStatusProgress)

    const toDoStatusDone = document.createElement('option')
    toDoStatusDone.value = 'Done'
    toDoStatusDone.textContent = 'Done'
    toDoStatusSelect.appendChild(toDoStatusDone)

    toDoStatusLi.appendChild(toDoStatusLabel)
    toDoStatusLi.appendChild(toDoStatusSelect)
    toDoUL.appendChild(toDoStatusLi)

    const todoButtonDiv = document.createElement('div')
    todoButtonDiv.id = 'todoButtonDiv'
    toDoUL.appendChild(todoButtonDiv)

    const editToDoButton = document.createElement('span')
    editToDoButton.id = currentTodo.title + '_Btn'
    editToDoButton.className = 'editToDoButton'
    editToDoButton.textContent = 'Confirm Change(s)'
    editToDoButton.addEventListener('click', confirmToDoChange)
    todoButtonDiv.appendChild(editToDoButton)

    const deleteToDoButton = document.createElement('span')
    deleteToDoButton.id = currentTodo.title + '_Btn'
    deleteToDoButton.className = 'deleteToDoButton'
    deleteToDoButton.textContent = 'Delete Todo'
    deleteToDoButton.addEventListener('click', deleteToDo)
    todoButtonDiv.appendChild(deleteToDoButton)

    const addProject = document.getElementById('newProject')
    addProject.addEventListener('click', newProject)

    const reset = document.getElementById('resetProjects')
    reset.addEventListener('click', resetProjects)
  }
}

function confirmToDoChange () {
  const itemIndex = (this.id).indexOf('_')

  const item = (this.id).slice(0, itemIndex)

  const index = currentObject.todo.findIndex(object => {
    return object.title === item
  })

  const toDoTitleInput = document.getElementById('toDoTitleInput')
  const toDoDescriptionInput = document.getElementById('toDoDescriptionInput')
  const toDoStatusSelect = document.getElementById('toDoStatusSelect')
  const toDoTitle = document.getElementById('toDoTitle')
  const toDoDescription = document.getElementById('toDoDescription')
  const toDoStatus = document.getElementById('toDoStatus')

  if (toDoTitleInput.value === '' && toDoDescriptionInput.value === '' && toDoStatusSelect.value === '') {
  // nothing
  } else {
    if (toDoTitleInput.value !== '') {
      currentObject.todo[index].title = toDoTitleInput.value
      toDoTitle.textContent = toDoTitleInput.value
      this.id = toDoTitleInput.value + '_Btn'

      const box = document.getElementById(item + '_Box')
      box.id = currentObject.todo[index].title + '_Box'
      const edit = document.getElementById(item)
      edit.id = currentObject.todo[index].title
    }

    if (toDoDescriptionInput.value !== '') {
      currentObject.todo[index].description = toDoDescriptionInput.value
      toDoDescription.textContent = toDoDescriptionInput.value
    }

    if (toDoStatusSelect.value !== '') {
      currentObject.todo[index].status = toDoStatusSelect.value
    }

    window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject))
    toDoStatus.textContent = currentObject.todo[index].status
    document.getElementById('editTodoForm').remove()

    const addProject = document.getElementById('newProject')
    addProject.addEventListener('click', newProject)

    const reset = document.getElementById('resetProjects')
    reset.addEventListener('click', resetProjects)
  }
}

function deleteToDo () {
  const currentToDolist = currentObject.todo

  const itemIndex = (this.id).indexOf('_')

  const item = (this.id).slice(0, itemIndex)

  const index = currentObject.todo.findIndex(object => {
    return object.title === item
  })

  document.getElementById(currentObject.todo[index].title + '_Box').remove()

  currentObject.todo = currentToDolist.filter(object => object.title !== item)

  document.getElementById('editTodoForm').remove()

  window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject))

  const addProject = document.getElementById('newProject')
  addProject.addEventListener('click', newProject)

  const reset = document.getElementById('resetProjects')
  reset.addEventListener('click', resetProjects)
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {

    const mainSection = document.getElementById('mainSection');

    //1st part is a left bar
    const leftBar = document.getElementById('leftBar');

    const projectDiv = document.createElement('div');
    projectDiv.id = 'projectDiv';
    projectDiv.className = 'projectDiv';
    leftBar.appendChild(projectDiv);

    const newProject = document.createElement('span');
    newProject.textContent = "Add a new project";
    newProject.className = 'newProject';
    newProject.id = 'newProject';
    projectDiv.appendChild(newProject);

    //Span tag for my project projectList
    const myProjects = document.createElement('span');
    myProjects.className = 'myProjects';
    myProjects.textContent = 'My Projects';
    projectDiv.appendChild(myProjects);

    let list = [];

    let items = { // Retrieving the local Storage everytime the page is loaded
        ...localStorage
    };

    for (let i = 0; i < localStorage.length; i++) {

        const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array
        list.push(item);
    }

    for (let i = 0; i < list.length; i++) { // Iterating to display our objects

        const projectTitle = document.createElement('span');
        projectTitle.className = 'projectTitle';
        projectTitle.id = list[i].title
        projectTitle.textContent = list[i].title;
        projectDiv.appendChild(projectTitle);
    }
}

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ basicHtml)
/* harmony export */ });
/* harmony import */ var _utilisateur_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilisateur.png */ "./src/utilisateur.png");


function basicHtml() {

    //Top bar header
    const header = document.createElement('div');
    header.className = 'header';
    document.body.appendChild(header);

    // Page Title
    const hero = document.createElement('span');
    hero.className = 'hero';
    hero.textContent = 'Todo List';
    header.appendChild(hero);

    //Right Part - Header
    const rightHeaderDiv = document.createElement('div');
    rightHeaderDiv.className = 'righHeaderDiv';
    header.appendChild(rightHeaderDiv);

    const userIcon = new Image();
    userIcon.id = 'userIcon';
    userIcon.src = _utilisateur_png__WEBPACK_IMPORTED_MODULE_0__;
    rightHeaderDiv.appendChild(userIcon);

    const userName = document.createElement('span');
    userName.className = 'userName';
    userName.textContent = '@guestUser';
    rightHeaderDiv.appendChild(userName);

    // Splitting the rest of the page in two sections
    const mainSection = document.createElement('div');
    mainSection.id = 'mainSection';
    document.body.appendChild(mainSection);

    //1st part is a left bar
    const leftBar = document.createElement('div');
    leftBar.id = 'leftBar';
    leftBar.className = 'leftBar';
    mainSection.appendChild(leftBar);

    // 2nd part is a div taking 75% of the page's width
    const todoSection = document.createElement('div');
    todoSection.id = 'todoSection';
    mainSection.appendChild(todoSection);
    const resetDiv = document.createElement('div');
    resetDiv.id = 'resetDiv';
    document.getElementById('leftBar').appendChild(resetDiv);

    const resetProject = document.createElement('span');
    resetProject.id = 'resetProjects';
    resetProject.textContent = 'Default Projects';
    resetDiv.appendChild(resetProject);

}

/***/ }),

/***/ "./src/utilisateur.png":
/*!*****************************!*\
  !*** ./src/utilisateur.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae0343457207fda01b74.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBCQUEwQixtREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtREFBTztBQUMxQixxQkFBcUIsbURBQU87QUFDNUIsd0JBQXdCLG1EQUFPO0FBQy9CLGtCQUFrQixtREFBTztBQUN6QixzQkFBc0IsbURBQU87QUFDN0Isc0JBQXNCLG1EQUFPO0FBQzdCLGtCQUFrQixtREFBTztBQUN6QixxQkFBcUIsbURBQU87O0FBRTVCOztBQUVBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx3REFBUztBQUNYLEVBQUUseURBQVE7O0FBRVYsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBLHVCQUF1QixtREFBTztBQUM5QjtBQUNBOztBQUVBOztBQUVBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBLDhCQUE4QixvREFBSTs7QUFFbEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3N0JlOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLG9CQUFvQix5QkFBeUI7O0FBRTdDLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUIsT0FBTzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVDeUM7O0FBRTFCOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBUTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbn1cXG5cXG4ubGVmdEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLnJpZ2hIZWFkZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweFxcbn1cXG5cXG5cXG4jdXNlckljb24ge1xcbiAgICBoZWlnaHQ6IDIuMjV2aDtcXG4gICAgbWluLWhlaWdodDogMThweDtcXG59XFxuXFxuLnVzZXJOYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNyZXNldERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KTtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teVByb2plY3RzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuI2Z1bGxQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNlZGl0aW5nRGl2LFxcbiNuZXdQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNlZGl0aW5nRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuI25ld0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgODQsIDU3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWxCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIzOSwgNTYpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA1NCwgNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9Eb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jcHJvamVjdERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuI25ld3RvRG8sXFxuI3Nob3dEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdFRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZVRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0Zvcm0sXFxuI2VkaXRUb2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZm9ybVVMIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byBhdXRvIC8gNTAlIDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDQ1JSA0NSUvIDUwJSA1MCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9UaXRsZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvVGl0bGVMaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb25MaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxufVxcblxcbiN0b0RvU3RhdHVzTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmV3UHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jY3VycmVudFRvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbiN0b0RvQmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXZ3O1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbiNiYXJUaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2JhckRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2JhclN0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9Cb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTcuNSUgNTUlIDE3LjUlIDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjA1dnc7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XFxufVxcblxcbiN0b0RvU3RhdHVzIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7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Q3RCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI21haW5TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuLmxlZnRCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5yaWdoSGVhZGVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHhcXG59XFxuXFxuXFxuI3VzZXJJY29uIHtcXG4gICAgaGVpZ2h0OiAyLjI1dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi51c2VyTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcmVzZXREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3UHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlQcm9qZWN0cyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbiNmdWxsUHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jZWRpdGluZ0RpdixcXG4jbmV3UHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZWRpdGluZ0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcbiNuZXdGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDg0LCA1Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzksIDU2KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI3Byb2plY3REaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNuZXd0b0RvLFxcbiNzaG93RGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgbWF4LWhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVkaXRUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDU0LCA1NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9Gb3JtLFxcbiNlZGl0VG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI2Zvcm1VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gYXV0byAvIDUwJSA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVUwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA0NSUgNDUlLyA1MCUgNTAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb1RpdGxlTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jdG9Eb1N0YXR1c0xpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTV2dztcXG59XFxuXFxubGFiZWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25ld1Byb2plY3RVbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuI2N1cnJlbnRUb0RvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4jdG9Eb0JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxNy41JSA1NSUgMTcuNSUgMTAlO1xcbiAgICBmb250LXNpemU6IDEuMzV2dztcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpO1xcbn1cXG5cXG4jYmFyVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNiYXJEZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNiYXJTdGF0dXMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b0RvQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4wNXZ3O1xcbn1cXG5cXG4jdG9Eb1RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xcbn1cXG5cXG4jdG9Eb1N0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgdG9kbykge1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgYmFzaWNIdG1sIGZyb20gJy4vdGVtcGxhdGUuanMnXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcydcbmltcG9ydCBUb2RvIGZyb20gJy4vZWRpdFRvZG8uanMnXG5cbmJhc2ljSHRtbCgpIC8vIERpc3BsYXlpbmcgdGhlIGJhc2ljIGh0bWwgdGVtcGxhdGUgdGhyb3VnaCBhIGZ1bmN0aW9uIGNhbGxcbnByb2plY3RzKCkgLy8gUG9wdWxhdGluZyB0aGUgbGVmdCBCYXJcblxubGV0IGl0ZW1zID0geyAvLyBSZXRyaWV2aW5nIHRoZSBsb2NhbCBTdG9yYWdlIGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgLi4ubG9jYWxTdG9yYWdlXG59XG5cbmxldCBsaXN0ID0gW11cblxuZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbXNbT2JqZWN0LmtleXMoaXRlbXMpW2ldXSkgLy8gV2Ugc3RvcmUgZWFjaCBvYmplY3QgaW4gbG9jYWxTdG9yYWdlIGluIGFuIGFycmF5O1xuICBpdGVtLmNvbnN0cnVjdG9yID0gUHJvamVjdFxuICBsaXN0LnB1c2goaXRlbSlcbn1cblxuY29uc3QgcHJvamVjdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaXRsZScpXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEJveGVzLmxlbmd0aDsgaSsrKSB7XG4gIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0LCB0cnVlKVxuICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVRvZG8sIGZhbHNlKVxufVxuXG5sZXQgY3VycmVudE9iamVjdCA9ICcnXG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0ICgpIHtcbiAgY29uc3QgbXlPYmplY3QgPSBsaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aGlzLmlkKVxuXG4gIGN1cnJlbnRPYmplY3QgPSBteU9iamVjdFxuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykucmVtb3ZlKClcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdERpdicpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdERpdicpLnJlbW92ZSgpXG4gIH1cblxuICBjb25zdCBmdWxsUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZ1bGxQcm9qZWN0RGl2LmlkID0gJ2Z1bGxQcm9qZWN0RGl2J1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1NlY3Rpb24nKS5hcHBlbmRDaGlsZChmdWxsUHJvamVjdERpdilcblxuICBjb25zdCBlZGl0aW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gQ29udGFpbmVyIHRoYXQgY29udGFpbnMgYSBmb3JtXG4gIGVkaXRpbmdEaXYuaWQgPSAnZWRpdGluZ0RpdidcbiAgZnVsbFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZWRpdGluZ0RpdilcblxuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3REaXNwbGF5LmlkID0gJ3Byb2plY3REaXNwbGF5J1xuICBlZGl0aW5nRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KVxuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJ1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBjdXJyZW50T2JqZWN0LnRpdGxlXG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcblxuICBjb25zdCBzaG93RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHNob3dEZXRhaWwuaWQgPSAnc2hvd0RldGFpbHMnXG4gIHNob3dEZXRhaWwudGV4dENvbnRlbnQgPSAnU2hvdyBQcm9qZWN0IGRldGFpbHMnXG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHNob3dEZXRhaWwpXG4gIHNob3dEZXRhaWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGV0YWlscylcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdClcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyAoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRpbmdGb3JtJykucmVtb3ZlKClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlZGl0aW5nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGVkaXRpbmdGb3JtLmlkID0gJ2VkaXRpbmdGb3JtJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykuYXBwZW5kQ2hpbGQoZWRpdGluZ0Zvcm0pXG5cbiAgICBjb25zdCBmb3JtVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZm9ybVVMLmlkID0gJ2Zvcm1VTCdcbiAgICBlZGl0aW5nRm9ybS5hcHBlbmRDaGlsZChmb3JtVUwpXG5cbiAgICBjb25zdCB0aXRsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCBUaXRsZTonXG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dENoYW5nZSdcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gY3VycmVudE9iamVjdC50aXRsZVxuXG4gICAgdGl0bGVMaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcbiAgICBmb3JtVUwuYXBwZW5kQ2hpbGQodGl0bGVMaSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0IERlc2NyaXB0aW9uOidcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbklucHV0J1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LmRlc2NyaXB0aW9uXG5cbiAgICBkZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG4gICAgZGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKVxuXG4gICAgY29uc3QgZGF0ZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QgRHVlIERhdGU6J1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY3VycmVudERhdGUuaWQgPSAnY3VycmVudERhdGUnXG4gICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LmR1ZURhdGVcbiAgICBjdXJyZW50RGF0ZS5zdHlsZS5jb2xvciA9ICdwdXJwbGUnXG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dCdcbiAgICBkYXRlSW5wdXQuc3R5bGUud2lkdGggPSAnMTI1cHgnXG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcblxuICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpXG4gICAgZGF0ZUxpLmFwcGVuZENoaWxkKGN1cnJlbnREYXRlKVxuICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpXG4gICAgZm9ybVVMLmFwcGVuZENoaWxkKGRhdGVMaSlcblxuICAgIGNvbnN0IHByaW9yaXR5TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0IFByaW9yaXR5OidcblxuICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjdXJyZW50UHJpb3JpdHkuaWQgPSAnY3VycmVudFByaW9yaXR5J1xuICAgIGN1cnJlbnRQcmlvcml0eS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QucHJpb3JpdHlcbiAgICBjdXJyZW50UHJpb3JpdHkuc3R5bGUuY29sb3IgPSAncHVycGxlJ1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0J1xuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4J1xuXG4gICAgY29uc3Qgb3B0aW9uRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0aW9uRGVmYXVsdC52YWx1ZSA9ICcnXG4gICAgb3B0aW9uRGVmYXVsdC50ZXh0Q29udGVudCA9ICcnXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRGVmYXVsdClcblxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0aW9uTG93LnZhbHVlID0gJ0xvdydcbiAgICBvcHRpb25Mb3cudGV4dENvbnRlbnQgPSAnTG93J1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdylcblxuICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0aW9uTWVkaXVtLnZhbHVlID0gJ01lZGl1bSdcbiAgICBvcHRpb25NZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSlcblxuICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdGlvbkhpZ2gudmFsdWUgPSAnSGlnaCdcbiAgICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaClcblxuICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbiAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKGN1cnJlbnRQcmlvcml0eSlcbiAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChwcmlvcml0eUxpKVxuXG4gICAgY29uc3Qgc3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBzdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QgU3RhdHVzOidcblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY3VycmVudFN0YXR1cy5pZCA9ICdjdXJyZW50U3RhdHVzJ1xuICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnN0YXR1c1xuICAgIGN1cnJlbnRTdGF0dXMuc3R5bGUuY29sb3IgPSAncHVycGxlJ1xuXG4gICAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0J1xuICAgIHN0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCdcblxuICAgIGNvbnN0IHN0YXR1c0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSAnJ1xuICAgIHN0YXR1c0RlZmF1bHQudGV4dENvbnRlbnQgPSAnJ1xuICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNEZWZhdWx0KVxuXG4gICAgY29uc3Qgc3RhdHVzTm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBzdGF0dXNOb3QudmFsdWUgPSAnTm90IFN0YXJ0ZWQnXG4gICAgc3RhdHVzTm90LnRleHRDb250ZW50ID0gJ05vdCBTdGFydGVkJ1xuICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNOb3QpXG5cbiAgICBjb25zdCBzdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgc3RhdHVzUHJvZ3Jlc3MudmFsdWUgPSAnSW4gUHJvZ3Jlc3MnXG4gICAgc3RhdHVzUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSAnSW4gUHJvZ3Jlc3MnXG4gICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c1Byb2dyZXNzKVxuXG4gICAgY29uc3Qgc3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgc3RhdHVzRG9uZS52YWx1ZSA9ICdEb25lJ1xuICAgIHN0YXR1c0RvbmUudGV4dENvbnRlbnQgPSAnRG9uZSdcbiAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzRG9uZSlcblxuICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKHN0YXR1c0xhYmVsKVxuICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKGN1cnJlbnRTdGF0dXMpXG4gICAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoc3RhdHVzU2VsZWN0KVxuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChzdGF0dXNMaSlcblxuICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdidcbiAgICBlZGl0aW5nRm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpXG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0QnV0dG9uJ1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RGV0YWlscylcblxuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSBDaGFuZ2UocyknXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlQnV0dG9uJ1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGVCdXR0b24nXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0J1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpXG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KVxuXG4gIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKVxuICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGVkaXREZXRhaWxzICgpIHtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0Q2hhbmdlJylcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JylcbiAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudERhdGUnKVxuICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFByaW9yaXR5JylcbiAgY29uc3QgY3VycmVudFN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50U3RhdHVzJylcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0JylcbiAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c1NlbGVjdCcpXG5cbiAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnICYmIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnICYmIGRhdGVJbnB1dC52YWx1ZSA9PT0gJycgJiYgcHJpb3JpdHlTZWxlY3QudmFsdWUgPT09ICcnICYmIHN0YXR1c1NlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0aXRsZU9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudGl0bGUpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpXG4gICAgLy8gY29uc3QgZWRpdE9iamVjdCA9IGxpc3RbaV0udGl0bGUgLy8gdGhpcyB2YXJpYWJsZSBzdG9yZXMgdGhlIHJpZ2h0IG9iamVjdCB0aXRsZSBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBvdXIgbGlzdFxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50T2JqZWN0LnRpdGxlKVxuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50T2JqZWN0LnRpdGxlKS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWVcbiAgICAgIGN1cnJlbnRPYmplY3QudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlUb0RvVEl0bGUnKS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWUgKyAnOlRvZG8ocyknXG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY3VycmVudE9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICB9XG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGN1cnJlbnRPYmplY3QuZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHlTZWxlY3QudmFsdWUgIT09ICcnKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWVcbiAgICB9XG4gICAgaWYgKHN0YXR1c1NlbGVjdC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc3RhdHVzID0gc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgfVxuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKVxuXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50aXRsZVxuICAgIHRpdGxlT2JqZWN0LmlkID0gY3VycmVudE9iamVjdC50aXRsZVxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJ1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LnRpdGxlXG5cbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gY3VycmVudE9iamVjdC5kZXNjcmlwdGlvblxuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgY3VycmVudFN0YXR1cy50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3Quc3RhdHVzXG5cbiAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QuZHVlRGF0ZVxuICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnXG5cbiAgICBjdXJyZW50UHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnByaW9yaXR5XG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSAnJ1xuXG4gICAgY3VycmVudFN0YXR1cy50ZXh0Q29udGVudCA9ICcnXG4gICAgc3RhdHVzU2VsZWN0LnZhbHVlID0gJydcbiAgfVxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdClcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0ICgpIHtcbiAgY29uc3QgZGVsZXRlVGl0bGUgPSBjdXJyZW50T2JqZWN0LnRpdGxlXG5cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRlbGV0ZVRpdGxlKVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1NlY3Rpb24nKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKSlcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVUaXRsZSkucmVtb3ZlKClcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdClcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKVxufVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKVxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpXG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QgKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLnJlbW92ZSgpXG4gIH1cblxuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gQ29udGFpbmVyIHRoYXQgY29udGFpbnMgYSBmb3JtXG4gIG5ld1Byb2plY3REaXYuaWQgPSAnbmV3UHJvamVjdERpdidcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdilcblxuICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIG5ld0Zvcm0uaWQgPSAnbmV3Rm9ybSdcbiAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdGb3JtKVxuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgbmV3IFByb2plY3QnXG4gIG5ld0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gIGNvbnN0IGZvcm1VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgZm9ybVVMLmlkID0gJ25ld1Byb2plY3RVbCdcbiAgbmV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtVUwpXG5cbiAgY29uc3QgdGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJyBQcm9qZWN0IFRpdGxlOidcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnQ29tcHV0ZXInXG5cbiAgdGl0bGVMaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuICB0aXRsZUxpLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG4gIGZvcm1VTC5hcHBlbmRDaGlsZCh0aXRsZUxpKVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IERlc2NyaXB0aW9uOidcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQnV5IGEgbmV3IGNvbXB1dGVyJ1xuXG4gIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcbiAgZGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuICBmb3JtVUwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MaSlcblxuICBjb25zdCBkYXRlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEdWUgRGF0ZTonXG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkYXRlSW5wdXQuaWQgPSAnZGF0ZUlucHV0J1xuICBkYXRlSW5wdXQuc3R5bGUud2lkdGggPSAnMTI1cHgnXG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXG5cbiAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVMYWJlbClcbiAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcbiAgZm9ybVVMLmFwcGVuZENoaWxkKGRhdGVMaSlcblxuICBjb25zdCBwcmlvcml0eUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBQcmlvcml0eTonXG5cbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCdcbiAgcHJpb3JpdHlTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnXG5cbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uTG93LnZhbHVlID0gJ0xvdydcbiAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdydcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KVxuXG4gIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wdGlvbk1lZGl1bS52YWx1ZSA9ICdNZWRpdW0nXG4gIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSlcblxuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uSGlnaC52YWx1ZSA9ICdIaWdoJ1xuICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpXG5cbiAgcHJpb3JpdHlMaS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuICBmb3JtVUwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaSlcblxuICBjb25zdCBzdGF0dXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBTdGF0dXM6J1xuXG4gIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gIHN0YXR1c1NlbGVjdC5pZCA9ICdzdGF0dXNTZWxlY3QnXG4gIHN0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCdcblxuICBjb25zdCBzdGF0dXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgc3RhdHVzRGVmYXVsdC52YWx1ZSA9ICcnXG4gIHN0YXR1c0RlZmF1bHQudGV4dENvbnRlbnQgPSAnJ1xuICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzRGVmYXVsdClcblxuICBjb25zdCBzdGF0dXNOb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBzdGF0dXNOb3QudmFsdWUgPSAnTm90IFN0YXJ0ZWQnXG4gIHN0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCdcbiAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c05vdClcblxuICBjb25zdCBzdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIHN0YXR1c1Byb2dyZXNzLnZhbHVlID0gJ0luIFByb2dyZXNzJ1xuICBzdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9ICdJbiBQcm9ncmVzcydcbiAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c1Byb2dyZXNzKVxuXG4gIGNvbnN0IHN0YXR1c0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBzdGF0dXNEb25lLnZhbHVlID0gJ0RvbmUnXG4gIHN0YXR1c0RvbmUudGV4dENvbnRlbnQgPSAnRG9uZSdcbiAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RvbmUpXG5cbiAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoc3RhdHVzTGFiZWwpXG4gIHN0YXR1c0xpLmFwcGVuZENoaWxkKHN0YXR1c1NlbGVjdClcbiAgZm9ybVVMLmFwcGVuZENoaWxkKHN0YXR1c0xpKVxuXG4gIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnYnV0dG9uRGl2J1xuICBuZXdGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcblxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSAnZWRpdEJ1dHRvbidcbiAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1CdXR0b25OZXcpXG5cbiAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtIFByb2plY3QnXG4gIGNvbmZpcm1CdXR0b24uaWQgPSBjb25maXJtQnV0dG9uXG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKVxuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJ1xuICBjYW5jZWxCdXR0b24uaWQgPSAnY2FuY2VsQnV0dG9uJ1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxQcm9qZWN0KVxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpXG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KVxuXG4gIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKVxuICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1CdXR0b25OZXcgKCkge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKVxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSW5wdXQnKVxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUlucHV0JylcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlTZWxlY3QnKVxuICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzU2VsZWN0JylcblxuICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gJycgfHwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gJycgfHwgZGF0ZUlucHV0LnZhbHVlID09PSAnJyB8fCBwcmlvcml0eVNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc3RhdHVzU2VsZWN0LnZhbHVlID09PSAnJykge1xuICAvLyBub3RoaW5nXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3T2JqZWN0ID0gbmV3IFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgc3RhdHVzU2VsZWN0LnZhbHVlLCBbXSlcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdPYmplY3QpKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJ1xuICAgIHByb2plY3RUaXRsZS5pZCA9IG5ld09iamVjdC50aXRsZVxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5ld09iamVjdC50aXRsZVxuICAgIGxpc3QucHVzaChuZXdPYmplY3QpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REaXYnKS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKVxuICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0LCB0cnVlKVxuICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15VG9kbylcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0ICgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKVxufVxuXG5jb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0cylcblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0cyAoKSB7XG4gIC8vIENyZWF0aW5nIGEgZmV3IHJhbmRvbSBwcm9qZWN0cyB0byBkaXNwbGF5IGl0IG9uIG91ciBzY3JlZW5cbiAgY29uc3QgaG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJywgJ1Jlbm92YXRpbmcgbXkgSG9tZScsICcyMDIzLTEyLTMxJywgJ0xvdycsICdOb3QgU3RhcnRlZCcsIFtdKVxuICBjb25zdCBzY2hvb2wgPSBuZXcgUHJvamVjdCgnU2Nob29sJywgJ0ZpbmlzaGluZyBteSBkZWdyZWUnLCAnMjAyMy0xMi0zMScsICdMb3cnLCAnTm90IFN0YXJ0ZWQnLCBbXSlcbiAgY29uc3QgZ3JvY2VyaWVzID0gbmV3IFByb2plY3QoJ0dyb2NlcmllcycsICdCdXkgbXkgZ3JvY2VyaWVzJywgJzIwMjMtMDEtMDEnLCAnSGlnaCcsICdOb3QgU3RhcnRlZCcsIFtdKVxuICBjb25zdCBjYXIgPSBuZXcgUHJvamVjdCgnTmV3IENhcicsICdCdXkgYSBuZXcgY2FyJywgJzIwMjMtMTItMzEnLCAnTWVkaXVtJywgJ05vdCBTdGFydGVkJywgW10pXG4gIGNvbnN0IHJ1bm5pbmcgPSBuZXcgUHJvamVjdCgnSGFsZi1tYXJhdGhvbicsICdSdW5uaW5nIGEgaGFsZi1tYXJhdGhvbicsICcyMDIzLTA5LTMwJywgJ0hpZ2gnLCAnTm90IFN0YXJ0ZWQnLCBbXSlcbiAgY29uc3QgZXZlcmVzdCA9IG5ldyBQcm9qZWN0KCdDbGltYmluZyBFdmVyZXN0JywgJ0NsaW1iaW5nIE1vdW50IEV2ZXJlc3QnLCAnMjAyNS0wNi0zMCcsICdNZWRpdW0nLCAnTm90IFN0YXJ0ZWQnLCBbXSlcbiAgY29uc3Qgam9iID0gbmV3IFByb2plY3QoJ05ldyBKb2InLCAnQ2hhbmdlIGZvciBhIGJldHRlciBqb2InLCAnMjAyMi0xMi0zMScsICdMb3cnLCAnTm90IFN0YXJ0ZWQnLCBbXSlcbiAgY29uc3QgY29kaW5nID0gbmV3IFByb2plY3QoJ0NvZGluZycsICdMZWFybiB0byBjb2RlJywgJzIwMjMtMTAtMzEnLCAnTWVkaXVtJywgJ05vdCBTdGFydGVkJywgW10pXG5cbiAgY29uc3QgcHJvamVjdExpc3QgPSBbaG9tZSwgc2Nob29sLCBncm9jZXJpZXMsIGNhciwgcnVubmluZywgZXZlcmVzdCwgam9iLCBjb2RpbmddXG5cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RMaXN0W2ldXG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obXlQcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShteVByb2plY3QpKVxuICB9XG5cbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpXG4gIH1cblxuICBiYXNpY0h0bWwoKSAvLyBEaXNwbGF5aW5nIHRoZSBiYXNpYyBodG1sIHRlbXBsYXRlIHRocm91Z2ggYSBmdW5jdGlvbiBjYWxsXG4gIHByb2plY3RzKCkgLy8gUG9wdWxhdGluZyB0aGUgbGVmdCBCYXJcblxuICBpdGVtcyA9IHsgLy8gUmV0cmlldmluZyB0aGUgbG9jYWwgU3RvcmFnZSBldmVyeXRpbWUgdGhlIHBhZ2UgaXMgbG9hZGVkXG4gICAgLi4ubG9jYWxTdG9yYWdlXG4gIH1cblxuICBsaXN0ID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW09iamVjdC5rZXlzKGl0ZW1zKVtpXV0pIC8vIFdlIHN0b3JlIGVhY2ggb2JqZWN0IGluIGxvY2FsU3RvcmFnZSBpbiBhbiBhcnJheTtcbiAgICBpdGVtLmNvbnN0cnVjdG9yID0gUHJvamVjdFxuICAgIGxpc3QucHVzaChpdGVtKVxuICB9XG5cbiAgY29uc3QgcHJvamVjdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaXRsZScpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Qm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdCwgdHJ1ZSlcbiAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVRvZG8sIGZhbHNlKVxuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0JylcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpXG5cbiAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpXG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0cylcblxuICBjdXJyZW50T2JqZWN0ID0gJydcbn1cblxuZnVuY3Rpb24gbXlUb2RvICgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vIENvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGEgZm9ybVxuICB0b0RvRGl2LmlkID0gJ3RvRG9EaXYnXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLmFwcGVuZCh0b0RvRGl2KVxuXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICB0b2RvVGl0bGUuaWQgPSAnbXlUb0RvVEl0bGUnXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QudGl0bGUgKyAnOiBUb2RvKHMpJ1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcblxuICBjb25zdCBuZXd0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIG5ld3RvRG8uaWQgPSAnbmV3dG9EbydcbiAgbmV3dG9Eby50ZXh0Q29udGVudCA9ICdBZGQgdG8gZG8nXG4gIG5ld3RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvKVxuXG4gIHRvRG9EaXYuYXBwZW5kQ2hpbGQobmV3dG9EbylcblxuICBjb25zdCBjdXJyZW50VG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGN1cnJlbnRUb0RvRGl2LmlkID0gJ2N1cnJlbnRUb0RvRGl2J1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUb0RvRGl2KVxuXG4gIGNvbnN0IHRvRG9CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKVxuICB0b0RvQmFyLmlkID0gJ3RvRG9CYXInXG4gIGN1cnJlbnRUb0RvRGl2LmFwcGVuZENoaWxkKHRvRG9CYXIpXG5cbiAgY29uc3QgYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgYmFyVGl0bGUuaWQgPSAnYmFyVGl0bGUnXG4gIGJhclRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xuICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhclRpdGxlKVxuXG4gIGNvbnN0IGJhckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGJhckRlc2NyaXB0aW9uLmlkID0gJ2JhckRlc2NyaXB0aW9uJ1xuICBiYXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcbiAgdG9Eb0Jhci5hcHBlbmRDaGlsZChiYXJEZXNjcmlwdGlvbilcblxuICBjb25zdCBiYXJTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgYmFyU3RhdHVzLmlkID0gJ2JhclN0YXR1cydcbiAgYmFyU3RhdHVzLnRleHRDb250ZW50ID0gJ1N0YXR1cydcbiAgdG9Eb0Jhci5hcHBlbmRDaGlsZChiYXJTdGF0dXMpXG5cbiAgY29uc3QgY3VycmVudFRvRG9saXN0ID0gY3VycmVudE9iamVjdC50b2RvXG5cbiAgaWYgKGN1cnJlbnRUb0RvbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50VG9Eb2xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKVxuICAgICAgdG9Eb0JveC5jbGFzc05hbWUgPSAndG9Eb0JveCdcbiAgICAgIHRvRG9Cb3guaWQgPSBjdXJyZW50VG9Eb2xpc3Rbal0udGl0bGUgKyAnX0JveCdcbiAgICAgIGN1cnJlbnRUb0RvRGl2LmFwcGVuZENoaWxkKHRvRG9Cb3gpXG5cbiAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgdG9Eb1RpdGxlLmlkID0gJ3RvRG9UaXRsZSdcbiAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZVxuICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpXG5cbiAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdG9Eb0Rlc2NyaXB0aW9uLmlkID0gJ3RvRG9EZXNjcmlwdGlvbidcbiAgICAgIHRvRG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRUb0RvbGlzdFtqXS5kZXNjcmlwdGlvblxuICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pXG5cbiAgICAgIGNvbnN0IHRvRG9TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHRvRG9TdGF0dXMuaWQgPSAndG9Eb1N0YXR1cydcbiAgICAgIHRvRG9TdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50VG9Eb2xpc3Rbal0uc3RhdHVzXG4gICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9TdGF0dXMpXG5cbiAgICAgIGNvbnN0IHRvRG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0b0RvRWRpdC5pZCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZVxuICAgICAgdG9Eb0VkaXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb2RvKVxuICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRWRpdClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyAoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRvZG9Gb3JtLmlkID0gJ3RvZG9Gb3JtJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5hcHBlbmRDaGlsZCh0b2RvRm9ybSlcblxuICBjb25zdCB0b0RvVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIHRvRG9VTC5pZCA9ICd0b0RvVUwnXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9VTClcblxuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgdG9Eb1RpdGxlLmlkID0gJ3RvRG9UaXRsZSdcbiAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJ1xuICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKVxuXG4gIGNvbnN0IHRvRG9UaXRsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICB0b0RvVGl0bGVMaS5pZCA9ICd0b0RvVGl0bGVMaSdcblxuICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgdG9Eb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBUaXRsZTonXG5cbiAgY29uc3QgdG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHRvRG9UaXRsZUlucHV0LmlkID0gJ3RvRG9UaXRsZUlucHV0J1xuXG4gIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxhYmVsKVxuICB0b0RvVGl0bGVMaS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVJbnB1dClcbiAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxpKVxuXG4gIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICB0b0RvRGVzY3JpcHRpb25MaS5pZCA9ICd0b0RvRGVzY3JpcHRpb25MaSdcblxuICBjb25zdCB0b0RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBEZXNjcmlwdGlvbjonXG5cbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHRvRG9EZXNjcmlwdGlvbklucHV0LmlkID0gJ3RvRG9EZXNjcmlwdGlvbklucHV0J1xuXG4gIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxhYmVsKVxuICB0b0RvRGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25JbnB1dClcbiAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxpKVxuXG4gIGNvbnN0IHRvRG9TdGF0dXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgdG9Eb1N0YXR1c0xpLmlkID0gJ3RvRG9TdGF0dXNMaSdcblxuICBjb25zdCB0b0RvU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIHRvRG9TdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIFN0YXR1czonXG5cbiAgY29uc3QgdG9Eb1N0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gIHRvRG9TdGF0dXNTZWxlY3QuaWQgPSAndG9Eb1N0YXR1c1NlbGVjdCdcbiAgdG9Eb1N0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCdcblxuICBjb25zdCB0b0RvU3RhdHVzTm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgdG9Eb1N0YXR1c05vdC52YWx1ZSA9ICdOb3QgU3RhcnRlZCdcbiAgdG9Eb1N0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCdcbiAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTm90KVxuXG4gIGNvbnN0IHRvRG9TdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIHRvRG9TdGF0dXNQcm9ncmVzcy52YWx1ZSA9ICdJbiBQcm9ncmVzcydcbiAgdG9Eb1N0YXR1c1Byb2dyZXNzLnRleHRDb250ZW50ID0gJ0luIFByb2dyZXNzJ1xuICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNQcm9ncmVzcylcblxuICBjb25zdCB0b0RvU3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIHRvRG9TdGF0dXNEb25lLnZhbHVlID0gJ0RvbmUnXG4gIHRvRG9TdGF0dXNEb25lLnRleHRDb250ZW50ID0gJ0RvbmUnXG4gIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0RvbmUpXG5cbiAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMYWJlbClcbiAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNTZWxlY3QpXG4gIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGkpXG5cbiAgY29uc3QgdG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICB0b0RvQnV0dG9uLmlkID0gJ3RvRG9CdXR0b24nXG4gIHRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSBUb2RvJ1xuICB0b0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVUb0RvKVxuICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb0J1dHRvbilcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdClcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvRG8gKCkge1xuICBjb25zdCB0b0RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvVGl0bGVJbnB1dCcpXG4gIGNvbnN0IHRvRG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9EZXNjcmlwdGlvbklucHV0JylcbiAgY29uc3QgdG9Eb1N0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvU3RhdHVzU2VsZWN0JylcblxuICBpZiAodG9Eb1RpdGxlSW5wdXQudmFsdWUgPT09ICcnIHx8IHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlID09PSAnJyB8fCB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgIC8vICBub3RoaW5nXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG9cblxuICAgIGNvbnN0IG5ld1RvZG9PYmplY3QgPSBuZXcgVG9kbyh0b0RvVGl0bGVJbnB1dC52YWx1ZSwgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHRvRG9TdGF0dXNTZWxlY3QudmFsdWUpXG5cbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG9PYmplY3QpXG5cbiAgICBjdXJyZW50T2JqZWN0LnRvZG8gPSB0b2RvTGlzdFxuXG4gICAgY29uc3QgdG9Eb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JveCcpXG4gICAgdG9Eb0JveC5jbGFzc05hbWUgPSAndG9Eb0JveCdcbiAgICB0b0RvQm94LmlkID0gdG9Eb1RpdGxlSW5wdXQudmFsdWUgKyAnX0JveCdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRvRG9EaXYnKS5hcHBlbmRDaGlsZCh0b0RvQm94KVxuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdG9Eb1RpdGxlLmlkID0gJ3RvRG9UaXRsZSdcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZVxuICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKVxuXG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdG9Eb0Rlc2NyaXB0aW9uLmlkID0gJ3RvRG9EZXNjcmlwdGlvbidcbiAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgdG9Eb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRvRG9TdGF0dXMuaWQgPSAndG9Eb1N0YXR1cydcbiAgICB0b0RvU3RhdHVzLnRleHRDb250ZW50ID0gdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZVxuICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb1N0YXR1cylcblxuICAgIGNvbnN0IHRvRG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdG9Eb0VkaXQuY2xhc3NOYW1lID0gJ3RvRG9FZGl0J1xuICAgIHRvRG9FZGl0LmlkID0gbmV3VG9kb09iamVjdC50aXRsZVxuICAgIHRvRG9FZGl0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgIHRvRG9FZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb2RvKVxuICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb0VkaXQpXG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudE9iamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdCkpXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZW1vdmUoKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0JylcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdClcblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKVxuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb2RvICgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZW1vdmUoKVxuICB9XG5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kb0Zvcm0nKSAhPSBudWxsKSB7XG4gIC8vIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjdXJyZW50VG9Eb2xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG9cblxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gY3VycmVudFRvRG9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aGlzLmlkKVxuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9Gb3JtLmlkID0gJ2VkaXRUb2RvRm9ybSdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5hcHBlbmRDaGlsZCh0b2RvRm9ybSlcblxuICAgIGNvbnN0IHRvRG9VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0b0RvVUwuaWQgPSAndG9Eb1VMJ1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9VTClcblxuICAgIGNvbnN0IGVkaXRUb0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBlZGl0VG9Eb1RpdGxlLmlkID0gJ2VkaXRUb0RvVGl0bGUnXG4gICAgZWRpdFRvRG9UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRvZG86ICcgKyBjdXJyZW50VG9kby50aXRsZVxuICAgIHRvRG9VTC5hcHBlbmRDaGlsZChlZGl0VG9Eb1RpdGxlKVxuXG4gICAgY29uc3QgdG9Eb1RpdGxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgdG9Eb1RpdGxlTGkuaWQgPSAndG9Eb1RpdGxlTGknXG5cbiAgICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0b0RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIFRpdGxlOidcblxuICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvRG9UaXRsZUlucHV0LmlkID0gJ3RvRG9UaXRsZUlucHV0J1xuICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxhYmVsKVxuICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUlucHV0KVxuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMaSlcblxuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmlkID0gJ3RvRG9EZXNjcmlwdGlvbkxpJ1xuXG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBEZXNjcmlwdGlvbjonXG5cbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0b0RvRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0b0RvRGVzY3JpcHRpb25JbnB1dCdcblxuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxhYmVsKVxuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbklucHV0KVxuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25MaSlcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICB0b0RvU3RhdHVzTGkuaWQgPSAndG9Eb1N0YXR1c0xpJ1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRvRG9TdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIFN0YXR1czonXG5cbiAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmlkID0gJ3RvRG9TdGF0dXNTZWxlY3QnXG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCdcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNFbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgdG9Eb1N0YXR1c0VtcHR5LnZhbHVlID0gJydcbiAgICB0b0RvU3RhdHVzRW1wdHkudGV4dENvbnRlbnQgPSAnJ1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0VtcHR5KVxuXG4gICAgY29uc3QgdG9Eb1N0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgdG9Eb1N0YXR1c05vdC52YWx1ZSA9ICdOb3QgU3RhcnRlZCdcbiAgICB0b0RvU3RhdHVzTm90LnRleHRDb250ZW50ID0gJ05vdCBTdGFydGVkJ1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c05vdClcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgdG9Eb1N0YXR1c1Byb2dyZXNzLnZhbHVlID0gJ0luIFByb2dyZXNzJ1xuICAgIHRvRG9TdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9ICdJbiBQcm9ncmVzcydcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNQcm9ncmVzcylcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICB0b0RvU3RhdHVzRG9uZS52YWx1ZSA9ICdEb25lJ1xuICAgIHRvRG9TdGF0dXNEb25lLnRleHRDb250ZW50ID0gJ0RvbmUnXG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzRG9uZSlcblxuICAgIHRvRG9TdGF0dXNMaS5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGFiZWwpXG4gICAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNTZWxlY3QpXG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMaSlcblxuICAgIGNvbnN0IHRvZG9CdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9CdXR0b25EaXYuaWQgPSAndG9kb0J1dHRvbkRpdidcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbkRpdilcblxuICAgIGNvbnN0IGVkaXRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZWRpdFRvRG9CdXR0b24uaWQgPSBjdXJyZW50VG9kby50aXRsZSArICdfQnRuJ1xuICAgIGVkaXRUb0RvQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0VG9Eb0J1dHRvbidcbiAgICBlZGl0VG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtIENoYW5nZShzKSdcbiAgICBlZGl0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1Ub0RvQ2hhbmdlKVxuICAgIHRvZG9CdXR0b25EaXYuYXBwZW5kQ2hpbGQoZWRpdFRvRG9CdXR0b24pXG5cbiAgICBjb25zdCBkZWxldGVUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZGVsZXRlVG9Eb0J1dHRvbi5pZCA9IGN1cnJlbnRUb2RvLnRpdGxlICsgJ19CdG4nXG4gICAgZGVsZXRlVG9Eb0J1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlVG9Eb0J1dHRvbidcbiAgICBkZWxldGVUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUb2RvJ1xuICAgIGRlbGV0ZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvKVxuICAgIHRvZG9CdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0J1dHRvbilcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpXG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybVRvRG9DaGFuZ2UgKCkge1xuICBjb25zdCBpdGVtSW5kZXggPSAodGhpcy5pZCkuaW5kZXhPZignXycpXG5cbiAgY29uc3QgaXRlbSA9ICh0aGlzLmlkKS5zbGljZSgwLCBpdGVtSW5kZXgpXG5cbiAgY29uc3QgaW5kZXggPSBjdXJyZW50T2JqZWN0LnRvZG8uZmluZEluZGV4KG9iamVjdCA9PiB7XG4gICAgcmV0dXJuIG9iamVjdC50aXRsZSA9PT0gaXRlbVxuICB9KVxuXG4gIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UaXRsZUlucHV0JylcbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnKVxuICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9TdGF0dXNTZWxlY3QnKVxuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1RpdGxlJylcbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9EZXNjcmlwdGlvbicpXG4gIGNvbnN0IHRvRG9TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1N0YXR1cycpXG5cbiAgaWYgKHRvRG9UaXRsZUlucHV0LnZhbHVlID09PSAnJyAmJiB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gJycgJiYgdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgLy8gbm90aGluZ1xuICB9IGVsc2Uge1xuICAgIGlmICh0b0RvVGl0bGVJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0udGl0bGUgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZVxuICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb1RpdGxlSW5wdXQudmFsdWVcbiAgICAgIHRoaXMuaWQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZSArICdfQnRuJ1xuXG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtICsgJ19Cb3gnKVxuICAgICAgYm94LmlkID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZSArICdfQm94J1xuICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pXG4gICAgICBlZGl0LmlkID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZVxuICAgIH1cblxuICAgIGlmICh0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0uZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICB9XG5cbiAgICBpZiAodG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0uc3RhdHVzID0gdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShjdXJyZW50T2JqZWN0KSlcbiAgICB0b0RvU3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS5zdGF0dXNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG9Gb3JtJykucmVtb3ZlKClcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpXG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJylcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9EbyAoKSB7XG4gIGNvbnN0IGN1cnJlbnRUb0RvbGlzdCA9IGN1cnJlbnRPYmplY3QudG9kb1xuXG4gIGNvbnN0IGl0ZW1JbmRleCA9ICh0aGlzLmlkKS5pbmRleE9mKCdfJylcblxuICBjb25zdCBpdGVtID0gKHRoaXMuaWQpLnNsaWNlKDAsIGl0ZW1JbmRleClcblxuICBjb25zdCBpbmRleCA9IGN1cnJlbnRPYmplY3QudG9kby5maW5kSW5kZXgob2JqZWN0ID0+IHtcbiAgICByZXR1cm4gb2JqZWN0LnRpdGxlID09PSBpdGVtXG4gIH0pXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZSArICdfQm94JykucmVtb3ZlKClcblxuICBjdXJyZW50T2JqZWN0LnRvZG8gPSBjdXJyZW50VG9Eb2xpc3QuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QudGl0bGUgIT09IGl0ZW0pXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb2RvRm9ybScpLnJlbW92ZSgpXG5cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpXG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KVxuXG4gIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKVxuICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcblxuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TZWN0aW9uJyk7XG5cbiAgICAvLzFzdCBwYXJ0IGlzIGEgbGVmdCBiYXJcbiAgICBjb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRCYXInKTtcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmlkID0gJ3Byb2plY3REaXYnO1xuICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gJ3Byb2plY3REaXYnO1xuICAgIGxlZnRCYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBwcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSAnbmV3UHJvamVjdCc7XG4gICAgbmV3UHJvamVjdC5pZCA9ICduZXdQcm9qZWN0JztcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gICAgLy9TcGFuIHRhZyBmb3IgbXkgcHJvamVjdCBwcm9qZWN0TGlzdFxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbXlQcm9qZWN0cy5jbGFzc05hbWUgPSAnbXlQcm9qZWN0cyc7XG4gICAgbXlQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChteVByb2plY3RzKTtcblxuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBsZXQgaXRlbXMgPSB7IC8vIFJldHJpZXZpbmcgdGhlIGxvY2FsIFN0b3JhZ2UgZXZlcnl0aW1lIHRoZSBwYWdlIGlzIGxvYWRlZFxuICAgICAgICAuLi5sb2NhbFN0b3JhZ2VcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShpdGVtc1tPYmplY3Qua2V5cyhpdGVtcylbaV1dKTsgLy8gV2Ugc3RvcmUgZWFjaCBvYmplY3QgaW4gbG9jYWxTdG9yYWdlIGluIGFuIGFycmF5XG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHsgLy8gSXRlcmF0aW5nIHRvIGRpc3BsYXkgb3VyIG9iamVjdHNcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJztcbiAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gbGlzdFtpXS50aXRsZVxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfVxufSIsImltcG9ydCBVc2VySWNvbiBmcm9tICcuL3V0aWxpc2F0ZXVyLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2ljSHRtbCgpIHtcblxuICAgIC8vVG9wIGJhciBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gUGFnZSBUaXRsZVxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaGVyby5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgaGVyby50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vUmlnaHQgUGFydCAtIEhlYWRlclxuICAgIGNvbnN0IHJpZ2h0SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ3JpZ2hIZWFkZXJEaXYnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodEhlYWRlckRpdik7XG5cbiAgICBjb25zdCB1c2VySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHVzZXJJY29uLmlkID0gJ3VzZXJJY29uJztcbiAgICB1c2VySWNvbi5zcmMgPSBVc2VySWNvbjtcbiAgICByaWdodEhlYWRlckRpdi5hcHBlbmRDaGlsZCh1c2VySWNvbik7XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB1c2VyTmFtZS5jbGFzc05hbWUgPSAndXNlck5hbWUnO1xuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJ0BndWVzdFVzZXInO1xuICAgIHJpZ2h0SGVhZGVyRGl2LmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcblxuICAgIC8vIFNwbGl0dGluZyB0aGUgcmVzdCBvZiB0aGUgcGFnZSBpbiB0d28gc2VjdGlvbnNcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuICAgIC8vMXN0IHBhcnQgaXMgYSBsZWZ0IGJhclxuICAgIGNvbnN0IGxlZnRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0QmFyLmlkID0gJ2xlZnRCYXInO1xuICAgIGxlZnRCYXIuY2xhc3NOYW1lID0gJ2xlZnRCYXInO1xuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGxlZnRCYXIpO1xuXG4gICAgLy8gMm5kIHBhcnQgaXMgYSBkaXYgdGFraW5nIDc1JSBvZiB0aGUgcGFnZSdzIHdpZHRoXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5pZCA9ICd0b2RvU2VjdGlvbic7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuICAgIGNvbnN0IHJlc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXREaXYuaWQgPSAncmVzZXREaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QmFyJykuYXBwZW5kQ2hpbGQocmVzZXREaXYpO1xuXG4gICAgY29uc3QgcmVzZXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJlc2V0UHJvamVjdC5pZCA9ICdyZXNldFByb2plY3RzJztcbiAgICByZXNldFByb2plY3QudGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0cyc7XG4gICAgcmVzZXREaXYuYXBwZW5kQ2hpbGQocmVzZXRQcm9qZWN0KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==