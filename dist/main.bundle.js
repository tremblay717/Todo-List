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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    min-height: 110vh;\n    background-color: #28272A;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #28272A;\n    height: 20px;\n    padding: 2%;\n}\n\n.hero {\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n    color: white;\n}\n\n#mainSection {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15vh;\n}\n\n.leftBar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 20%;\n    max-width: 250px;\n    padding: 2%;\n    padding-top: 1%;\n    background-color: #28272A;\n}\n\n.righHeaderDiv {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    gap: 10px\n}\n\n\n#userIcon {\n    height: 2.25vh;\n    min-height: 18px;\n}\n\n.userName {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    color: white;\n}\n\n.projectDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#resetDiv {\n    display: flex;\n    align-items: flex-start;\n    height: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    cursor: pointer;\n    color: rgb(141, 167, 47);\n}\n\n.newProject {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    color: white;\n    cursor: pointer;\n}\n\n.newProject:hover {\n    color: rgb(141, 167, 47) !important;\n}\n\n.myProjects {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    color: white;\n}\n\n.projectTitle {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.95rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoSection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n    padding: 2%;\n    width: 80%;\n    height: min-content;\n}\n\n#fullProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    margin: 2%;\n    margin-right: 4%;\n    gap: 15px;\n}\n\n#editingDiv,\n#newProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 5px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#editingForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n\n\n#newForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.buttonDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    gap: 5px;\n    height: inherit;\n}\n\n.editButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(54, 84, 57);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    justify-content: center;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.cancelButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(227, 239, 56);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: black;\n    justify-content: center;\n    text-align: center;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.deleteButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    justify-content: center;\n    text-align: center;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: max-content;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n#toDoDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    padding-top: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#projectDisplay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    height: 80px;\n}\n\n#newtoDo,\n#showDetails {\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    height: 0.5vh;\n    max-height: 25px;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#toDoButton {\n    display: flex;\n    align-items: center;\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    width: max-content;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n    width: 100%;\n}\n\n.editToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n.deleteToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    padding: 2%;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoForm,\n#editTodoForm {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    padding: 2%;\n    padding-bottom: 4%;\n    background-color: white;\n    border-left: solid rgb(141, 167, 47);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#formUL {\n    display: grid;\n    align-items: flex-start;\n    grid-template: auto auto auto / 50% 50%;\n    width: 100%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoUL {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    justify-items: start;\n    grid-template: 10% 45% 45%/ 50% 50%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoTitle {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#toDoTitleLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#toDoDescriptionLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n\n}\n\n#toDoStatusLi {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 10px;\n}\n\nlabel,\ninput {\n    font-size: 0.9rem;\n    font-family: 'Roboto', sans-serif;\n    width: 15vw;\n}\n\nlabel {\n    width: 100%;\n}\n\n#newProjectUl {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\ninput,\nselect,\noption {\n    height: 20px;\n}\n\n#currentToDoDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    height: max-content;\n    padding: 2%;\n}\n\n#toDoBar {\n    display: grid;\n    align-items: center;\n    justify-items: stretch;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.35vw;\n    color: rgb(141, 167, 47);\n}\n\n#barTitle {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n    text-align: center;\n}\n\n#barDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    font-weight: 600;\n}\n\n#barStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-weight: 600;\n    text-align: center;\n}\n\n.toDoBox {\n    display: grid;\n    align-items: center;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.05vw;\n}\n\n#toDoTitle {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n}\n\n#toDoDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    text-justify: inter-word;\n}\n\n#toDoStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\nbody {\n    margin: 0;\n    min-height: 110vh;\n    background-color: #28272A;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #28272A;\n    height: 20px;\n    padding: 2%;\n}\n\n.hero {\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n    color: white;\n}\n\n#mainSection {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15vh;\n}\n\n.leftBar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 20%;\n    max-width: 250px;\n    padding: 2%;\n    padding-top: 1%;\n    background-color: #28272A;\n}\n\n.righHeaderDiv {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    gap: 10px\n}\n\n\n#userIcon {\n    height: 2.25vh;\n    min-height: 18px;\n}\n\n.userName {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    color: white;\n}\n\n.projectDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#resetDiv {\n    display: flex;\n    align-items: flex-start;\n    height: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    cursor: pointer;\n    color: rgb(141, 167, 47);\n}\n\n.newProject {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration-line: underline;\n    color: white;\n    cursor: pointer;\n}\n\n.newProject:hover {\n    color: rgb(141, 167, 47) !important;\n}\n\n.myProjects {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    color: white;\n}\n\n.projectTitle {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.95rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoSection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n    padding: 2%;\n    width: 80%;\n    height: min-content;\n}\n\n#fullProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    margin: 2%;\n    margin-right: 4%;\n    gap: 15px;\n}\n\n#editingDiv,\n#newProjectDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 5px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#editingForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n\n\n#newForm {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.buttonDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    gap: 5px;\n    height: inherit;\n}\n\n.editButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(54, 84, 57);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    justify-content: center;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.cancelButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(227, 239, 56);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: black;\n    justify-content: center;\n    text-align: center;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n.deleteButton {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    color: white;\n    padding: 2%;\n    justify-content: center;\n    text-align: center;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    width: max-content;\n    width: 120px;\n    height: 0.25vh;\n    cursor: pointer;\n}\n\n#toDoDiv {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    height: max-content;\n    padding: 2%;\n    padding-top: 2%;\n    border-left: solid rgb(141, 167, 47);\n    border-width: 8px;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0px 15px 10px -15px #111;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#projectDisplay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    height: 80px;\n}\n\n#newtoDo,\n#showDetails {\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    height: 0.5vh;\n    max-height: 25px;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#toDoButton {\n    display: flex;\n    align-items: center;\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    width: max-content;\n    padding: 2%;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoButtonDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n    width: 100%;\n}\n\n.editToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    background-color: grey;\n    box-shadow: 0px 15px 10px -15px #111;\n    padding: 2%;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n.deleteToDoButton {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    height: 25px;\n    width: 110px;\n    padding: 2%;\n    background-color: rgb(84, 54, 54);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.75rem;\n    color: white;\n    cursor: pointer;\n}\n\n#todoForm,\n#editTodoForm {\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    gap: 10px;\n    width: 80%;\n    padding: 2%;\n    padding-bottom: 4%;\n    background-color: white;\n    border-left: solid rgb(141, 167, 47);\n    box-shadow: 0px 15px 10px -15px #111;\n    border-width: 8px;\n    border-radius: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 570;\n}\n\n#formUL {\n    display: grid;\n    align-items: flex-start;\n    grid-template: auto auto auto / 50% 50%;\n    width: 100%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoUL {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    justify-items: start;\n    grid-template: 10% 45% 45%/ 50% 50%;\n    gap: 15px;\n    padding-left: 1.25%;\n}\n\n#toDoTitle {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#toDoTitleLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#toDoDescriptionLi {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n\n}\n\n#toDoStatusLi {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 10px;\n}\n\nlabel,\ninput {\n    font-size: 0.9rem;\n    font-family: 'Roboto', sans-serif;\n    width: 15vw;\n}\n\nlabel {\n    width: 100%;\n}\n\n#newProjectUl {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\ninput,\nselect,\noption {\n    height: 20px;\n}\n\n#currentToDoDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    height: max-content;\n    padding: 2%;\n}\n\n#toDoBar {\n    display: grid;\n    align-items: center;\n    justify-items: stretch;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.35vw;\n    color: rgb(141, 167, 47);\n}\n\n#barTitle {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n    text-align: center;\n}\n\n#barDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    font-weight: 600;\n}\n\n#barStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-weight: 600;\n    text-align: center;\n}\n\n.toDoBox {\n    display: grid;\n    align-items: center;\n    grid-template: auto / 17.5% 55% 17.5% 10%;\n    font-size: 1.05vw;\n}\n\n#toDoTitle {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    font-weight: 600;\n}\n\n#toDoDescription {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    text-justify: inter-word;\n}\n\n#toDoStatus {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    text-align: center;\n}"],"sourceRoot":""}]);
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






(0,_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Displaying the basic html template through a function call
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Populating the left Bar

let items = { // Retrieving the local Storage everytime the page is loaded
    ...localStorage
};

let list = [];

for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;
    item.constructor = _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    list.push(item);
}

const projectBoxes = document.querySelectorAll('.projectTitle');

for (let i = 0; i < projectBoxes.length; i++) {

    projectBoxes[i].addEventListener('click', editProject, true);
    projectBoxes[i].addEventListener('click', myTodo, false);
}

let currentObject = "";

function editProject() {

    const myObject = list.find(item => item.title == this.id);

    currentObject = myObject;

    if (document.getElementById('fullProjectDiv') != null) {
        document.getElementById('fullProjectDiv').remove();

    } else if (document.getElementById('newProjectDiv') != null) {
        document.getElementById('newProjectDiv').remove();
    }

    const fullProjectDiv = document.createElement('div');
    fullProjectDiv.id = 'fullProjectDiv';
    document.getElementById('todoSection').appendChild(fullProjectDiv);

    const editingDiv = document.createElement('div'); // Container that contains a form
    editingDiv.id = 'editingDiv';
    fullProjectDiv.appendChild(editingDiv);

    const projectDisplay = document.createElement('div');
    projectDisplay.id = 'projectDisplay';
    editingDiv.appendChild(projectDisplay);

    const projectTitle = document.createElement('span');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = "Title: " + currentObject.title;
    projectDisplay.appendChild(projectTitle);

    const showDetail = document.createElement('span');
    showDetail.id = 'showDetails';
    showDetail.textContent = "Show Project details";
    projectDisplay.appendChild(showDetail);
    showDetail.addEventListener('click', showDetails);
}

function showDetails() {

    if (document.getElementById('editingForm') != null) {
        document.getElementById('editingForm').remove();
    } else {

        const editingForm = document.createElement('form');
        editingForm.id = 'editingForm'
        document.getElementById('editingDiv').appendChild(editingForm)

        const formUL = document.createElement('ul');
        formUL.id = 'formUL';
        editingForm.appendChild(formUL);

        const titleLi = document.createElement('li');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = "Edit Project Title:";

        const titleInput = document.createElement('input');
        titleInput.id = 'titleInputChange';
        titleInput.placeholder = currentObject.title;

        titleLi.appendChild(titleLabel);
        titleLi.appendChild(titleInput);
        formUL.appendChild(titleLi);

        const descriptionLi = document.createElement('li');

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = "Edit Project Description:";

        const descriptionInput = document.createElement('input');
        descriptionInput.id = "descriptionInput";
        descriptionInput.placeholder = currentObject.description;

        descriptionLi.appendChild(descriptionLabel);
        descriptionLi.appendChild(descriptionInput);
        formUL.appendChild(descriptionLi);

        const dateLi = document.createElement('li');

        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Edit Project Due Date:";

        const currentDate = document.createElement('label');
        currentDate.id = 'currentDate';
        currentDate.textContent = currentObject.dueDate;
        currentDate.style.color = 'purple';

        const dateInput = document.createElement('input');
        dateInput.id = 'dateInput';
        dateInput.style.width = '125px';
        dateInput.type = 'date';

        dateLi.appendChild(dateLabel);
        dateLi.appendChild(currentDate);
        dateLi.appendChild(dateInput);
        formUL.appendChild(dateLi);

        const priorityLi = document.createElement('li');

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Edit Project Priority:";

        const currentPriority = document.createElement('label');
        currentPriority.id = 'currentPriority';
        currentPriority.textContent = currentObject.priority;
        currentPriority.style.color = 'purple';

        const prioritySelect = document.createElement('select');
        prioritySelect.id = 'prioritySelect';
        prioritySelect.style.width = '130px';

        const optionDefault = document.createElement('option');
        optionDefault.value = "";
        optionDefault.textContent = "";
        prioritySelect.appendChild(optionDefault);

        const optionLow = document.createElement('option');
        optionLow.value = "Low";
        optionLow.textContent = 'Low'
        prioritySelect.appendChild(optionLow);

        const optionMedium = document.createElement('option');
        optionMedium.value = "Medium";
        optionMedium.textContent = "Medium";
        prioritySelect.appendChild(optionMedium);

        const optionHigh = document.createElement('option');
        optionHigh.value = "High";
        optionHigh.textContent = "High";
        prioritySelect.appendChild(optionHigh);

        priorityLi.appendChild(priorityLabel);
        priorityLi.appendChild(currentPriority);
        priorityLi.appendChild(prioritySelect);
        formUL.appendChild(priorityLi);

        const statusLi = document.createElement('li');

        const statusLabel = document.createElement('label');
        statusLabel.textContent = "Edit Project Status:";

        const currentStatus = document.createElement('label');
        currentStatus.id = 'currentStatus';
        currentStatus.textContent = currentObject.status;
        currentStatus.style.color = 'purple'

        const statusSelect = document.createElement('select');
        statusSelect.id = 'statusSelect';
        statusSelect.style.width = '130px';

        const statusDefault = document.createElement('option');
        statusDefault.value = "";
        statusDefault.textContent = "";
        statusSelect.appendChild(statusDefault);

        const statusNot = document.createElement('option');
        statusNot.value = "Not Started";
        statusNot.textContent = 'Not Started'
        statusSelect.appendChild(statusNot);

        const statusProgress = document.createElement('option');
        statusProgress.value = "In Progress";
        statusProgress.textContent = "In Progress";
        statusSelect.appendChild(statusProgress);

        const statusDone = document.createElement('option');
        statusDone.value = "Done";
        statusDone.textContent = "Done";
        statusSelect.appendChild(statusDone);

        statusLi.appendChild(statusLabel);
        statusLi.appendChild(currentStatus);
        statusLi.appendChild(statusSelect);
        formUL.appendChild(statusLi);

        // Div to hold our button - Push or Cancel changes
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttonDiv';
        editingForm.appendChild(buttonDiv);

        const editButton = document.createElement('div');
        editButton.className = 'editButton';
        editButton.addEventListener('click', editDetails);

        editButton.textContent = 'Confirm Change(s)';
        buttonDiv.appendChild(editButton);

        const deleteButton = document.createElement('div');
        deleteButton.className = 'deleteButton';
        deleteButton.id = 'deleteButton';
        deleteButton.textContent = 'Delete Project';
        deleteButton.addEventListener('click', deleteProject);
        buttonDiv.appendChild(deleteButton);
    }
}

function editDetails() {

    const titleInput = document.getElementById('titleInputChange');
    const descriptionInput = document.getElementById('descriptionInput');
    const currentDate = document.getElementById('currentDate');
    const currentPriority = document.getElementById('currentPriority');
    const currentStatus = document.getElementById('currentStatus');
    const dateInput = document.getElementById('dateInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const statusSelect = document.getElementById('statusSelect');

    if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "" && statusSelect.value == "") {
        return;
    } else {

        const titleObject = document.getElementById(currentObject.title);
        const projectTitle = document.getElementById('projectTitle');
        // const editObject = list[i].title // this variable stores the right object title before removing it from our list
        window.localStorage.removeItem(currentObject.title);

        if (titleInput.value != "") {
            document.getElementById(currentObject.title).textContent = titleInput.value;
            currentObject.title = titleInput.value;
            document.getElementById('myToDoTItle').textContent = titleInput.value + ":Todo(s)";
        }
        if (descriptionInput.value != "") {
            currentObject.description = descriptionInput.value;
        }
        if (dateInput.value != "") {
            currentObject.dueDate = dateInput.value;
        }
        if (prioritySelect.value != "") {
            currentObject.priority = prioritySelect.value;
        }
        if (statusSelect.value != "") {
            currentObject.status = statusSelect.value;
        }

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

        projectTitle.textContent = currentObject.title;
        titleObject.id = currentObject.title;
        titleInput.value = "";
        titleInput.placeholder = currentObject.title;

        descriptionInput.placeholder = currentObject.description;
        descriptionInput.value = "";

        currentStatus.textContent = currentObject.status;

        currentDate.textContent = currentObject.dueDate;
        dateInput.value = "";

        currentPriority.textContent = currentObject.priority;
        prioritySelect.value = "";

        currentStatus.textContent = "";
        statusSelect.value = "";
    }
}

function deleteProject() {
    const deleteTitle = currentObject.title;

    window.localStorage.removeItem(deleteTitle);
    document.getElementById('todoSection').removeChild(document.getElementById('fullProjectDiv'));

    document.getElementById(deleteTitle).remove();

}

const addProject = document.getElementById('newProject');
addProject.addEventListener('click', newProject);

function newProject() {


    if(document.getElementById('fullProjectDiv') != null){

        document.getElementById('fullProjectDiv').remove();
    }

    if (document.getElementById('newProjectDiv') != null || document.getElementById('editingDiv') != null) {
        return;


    

    } else {


        if (document.getElementById('editingDiv') != null) {
            document.getElementById('editingDiv').remove();
        }

        
        const newProjectDiv = document.createElement('div'); // Container that contains a form
        newProjectDiv.id = 'newProjectDiv';
        document.getElementById('todoSection').appendChild(newProjectDiv);

        const newForm = document.createElement('form');
        newForm.id = 'newForm';
        newProjectDiv.appendChild(newForm);

        const projectTitle = document.createElement('span');
        projectTitle.textContent = "Add a new Project";
        newForm.appendChild(projectTitle);

        const formUL = document.createElement('ul');
        formUL.id = 'newProjectUl';
        newForm.appendChild(formUL);

        const titleLi = document.createElement('li');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = " Project Title:";

        const titleInput = document.createElement('input');
        titleInput.id = 'titleInput';
        titleInput.placeholder = 'Computer';

        titleLi.appendChild(titleLabel);
        titleLi.appendChild(titleInput);
        formUL.appendChild(titleLi);

        const descriptionLi = document.createElement('li');

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = "Project Description:";

        const descriptionInput = document.createElement('input');
        descriptionInput.id = 'descriptionInput';
        descriptionInput.placeholder = "Buy a new computer";

        descriptionLi.appendChild(descriptionLabel);
        descriptionLi.appendChild(descriptionInput);
        formUL.appendChild(descriptionLi);

        const dateLi = document.createElement('li');

        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Project Due Date:";

        const dateInput = document.createElement('input');
        dateInput.id = 'dateInput';
        dateInput.style.width = '125px';
        dateInput.type = 'date';

        dateLi.appendChild(dateLabel);
        dateLi.appendChild(dateInput);
        formUL.appendChild(dateLi);

        const priorityLi = document.createElement('li');

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Project Priority:";

        const prioritySelect = document.createElement('select');
        prioritySelect.id = 'prioritySelect';
        prioritySelect.style.width = '130px';

        const optionLow = document.createElement('option');
        optionLow.value = "Low";
        optionLow.textContent = 'Low'
        prioritySelect.appendChild(optionLow)

        const optionMedium = document.createElement('option');
        optionMedium.value = "Medium";
        optionMedium.textContent = "Medium";
        prioritySelect.appendChild(optionMedium);

        const optionHigh = document.createElement('option');
        optionHigh.value = "High";
        optionHigh.textContent = "High";
        prioritySelect.appendChild(optionHigh);

        priorityLi.appendChild(priorityLabel);
        priorityLi.appendChild(prioritySelect);
        formUL.appendChild(priorityLi);

        const statusLi = document.createElement('li');

        const statusLabel = document.createElement('label');
        statusLabel.textContent = "Project Status:";

        const statusSelect = document.createElement('select');
        statusSelect.id = 'statusSelect';
        statusSelect.style.width = '130px';

        const statusDefault = document.createElement('option');
        statusDefault.value = "";
        statusDefault.textContent = "";
        statusSelect.appendChild(statusDefault);

        const statusNot = document.createElement('option');
        statusNot.value = "Not Started";
        statusNot.textContent = 'Not Started';
        statusSelect.appendChild(statusNot);

        const statusProgress = document.createElement('option');
        statusProgress.value = "In Progress";
        statusProgress.textContent = "In Progress";
        statusSelect.appendChild(statusProgress);

        const statusDone = document.createElement('option');
        statusDone.value = "Done";
        statusDone.textContent = "Done";
        statusSelect.appendChild(statusDone);

        statusLi.appendChild(statusLabel);
        statusLi.appendChild(statusSelect);
        formUL.appendChild(statusLi);

        // Div to hold our button - Push or Cancel changes
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttonDiv';
        newForm.appendChild(buttonDiv);

        const confirmButton = document.createElement('div');
        confirmButton.className = 'editButton';
        confirmButton.addEventListener('click', confirmButtonNew);

        confirmButton.textContent = 'Confirm Project';
        confirmButton.id = confirmButton;
        buttonDiv.appendChild(confirmButton);

        const cancelButton = document.createElement('div');
        cancelButton.className = 'cancelButton';
        cancelButton.id = 'cancelButton';
        cancelButton.textContent = 'Cancel';
        buttonDiv.appendChild(cancelButton);
    }
}

function confirmButtonNew() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const dateInput = document.getElementById('dateInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const statusSelect = document.getElementById('statusSelect');

    if (titleInput.value == "" || descriptionInput.value == "" || dateInput.value == "" || prioritySelect.value == "" || statusSelect.value == "") {
        return;
    } else {
        const newObject = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"](titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value, statusSelect.value, []);
        window.localStorage.setItem(newObject.title, JSON.stringify(newObject));

        const projectTitle = document.createElement('span');
        projectTitle.className = 'projectTitle';
        projectTitle.id = newObject.title
        projectTitle.textContent = newObject.title;
        list.push(newObject);
        document.getElementById('projectDiv').appendChild(projectTitle);
        document.getElementById('newProjectDiv').remove();
        projectTitle.addEventListener('click', editProject, true);
        projectTitle.addEventListener('click', myTodo);
    }
}

const reset = document.getElementById('resetProjects');
reset.addEventListener('click', resetProjects);

function resetProjects() {


    //Creating a few random projects to display it on our screen
    const home = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Home', 'Renovating my Home', '2023-12-31', 'Low', 'Not Started', []);
    const school = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('School', 'Finishing my degree', '2023-12-31', 'Low', 'Not Started', []);
    const groceries = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Groceries', 'Buy my groceries', '2023-01-01', 'High', 'Not Started', []);
    const car = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('New Car', 'Buy a new car', '2023-12-31', 'Medium', 'Not Started', []);
    const running = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High', 'Not Started', []);
    const everest = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium', 'Not Started', []);
    const job = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('New Job', 'Change for a better job', '2022-12-31', 'Low', 'Not Started', []);
    const coding = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Coding', 'Learn to code', '2023-10-31', 'Medium', 'Not Started', []);

    let projectList = [home, school, groceries, car, running, everest, job, coding];

    window.localStorage.clear();


    for (let i = 0; i < projectList.length; i++) {

        const myProject = projectList[i];

        window.localStorage.setItem(myProject.title, JSON.stringify(myProject));

    }

    document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
    document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

    if (document.getElementById('fullProjectDiv') != null) {
        document.getElementById('fullProjectDiv').remove();
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    items = { // Retrieving the local Storage everytime the page is loaded
        ...localStorage
    };

    list = [];

    for (let i = 0; i < localStorage.length; i++) {
        const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;
        item.constructor = _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"];
        list.push(item);
    }

    const projectBoxes = document.querySelectorAll('.projectTitle');

    for (let i = 0; i < projectBoxes.length; i++) {

        projectBoxes[i].addEventListener('click', editProject, true);
        projectBoxes[i].addEventListener('click', myTodo, false);
    }

    currentObject = "";

}


function myTodo() {

    const toDoDiv = document.createElement('div'); // Container that contains a form
    toDoDiv.id = 'toDoDiv';
    document.getElementById('fullProjectDiv').append(toDoDiv);

    const todoTitle = document.createElement('span');
    todoTitle.id = 'myToDoTItle';
    todoTitle.textContent = currentObject.title + ": Todo(s)";
    toDoDiv.appendChild(todoTitle);

    const newtoDo = document.createElement('span');
    newtoDo.id = 'newtoDo';
    newtoDo.textContent = "Add to do";
    newtoDo.addEventListener('click', createTodo);

    toDoDiv.appendChild(newtoDo);

    const currentToDoDiv = document.createElement('div');
    currentToDoDiv.id = 'currentToDoDiv';
    toDoDiv.appendChild(currentToDoDiv);

    const toDoBar = document.createElement('box');
    toDoBar.id = 'toDoBar';
    currentToDoDiv.appendChild(toDoBar);

    const barTitle = document.createElement('span');
    barTitle.id = 'barTitle';
    barTitle.textContent = "Title";
    toDoBar.appendChild(barTitle);

    const barDescription = document.createElement('span');
    barDescription.id = 'barDescription';
    barDescription.textContent = "Description";
    toDoBar.appendChild(barDescription);

    const barStatus = document.createElement('span');
    barStatus.id = 'barStatus';
    barStatus.textContent = "Status"
    toDoBar.appendChild(barStatus);

    let currentToDolist = currentObject.todo;

    if (currentToDolist.length > 0) {

        for (let j = 0; j < currentToDolist.length; j++) {

            const toDoBox = document.createElement('box');
            toDoBox.className = 'toDoBox';
            toDoBox.id = currentToDolist[j].title + "_Box";
            currentToDoDiv.appendChild(toDoBox);

            const toDoTitle = document.createElement('span');
            toDoTitle.id = 'toDoTitle';
            toDoTitle.textContent = currentToDolist[j].title
            toDoBox.appendChild(toDoTitle);

            const toDoDescription = document.createElement('p');
            toDoDescription.id = 'toDoDescription';
            toDoDescription.textContent = currentToDolist[j].description;
            toDoBox.appendChild(toDoDescription);

            const toDoStatus = document.createElement('span');
            toDoStatus.id = 'toDoStatus';
            toDoStatus.textContent = currentToDolist[j].status;
            toDoBox.appendChild(toDoStatus);

            const toDoEdit = document.createElement('p');
            toDoEdit.id = currentToDolist[j].title;
            toDoEdit.style.cursor = "pointer";
            toDoEdit.textContent = "Edit";
            toDoEdit.addEventListener('click', changeTodo);
            toDoBox.appendChild(toDoEdit);

        }
    }
}

function createTodo() {

    const todoForm = document.createElement('div');
    todoForm.id = 'todoForm';
    document.getElementById('fullProjectDiv').appendChild(todoForm);

    const toDoUL = document.createElement('ul');
    toDoUL.id = 'toDoUL';
    todoForm.appendChild(toDoUL);

    const toDoTitle = document.createElement('span');
    toDoTitle.id = 'toDoTitle';
    toDoTitle.textContent = 'New Todo';
    toDoUL.appendChild(toDoTitle);

    const toDoTitleLi = document.createElement('li');
    toDoTitleLi.id = 'toDoTitleLi';

    const toDoTitleLabel = document.createElement('label');
    toDoTitleLabel.textContent = "Todo Title:";

    const toDoTitleInput = document.createElement('input');
    toDoTitleInput.id = 'toDoTitleInput';

    toDoTitleLi.appendChild(toDoTitleLabel);
    toDoTitleLi.appendChild(toDoTitleInput);
    toDoUL.appendChild(toDoTitleLi);

    const toDoDescriptionLi = document.createElement('li');
    toDoDescriptionLi.id = 'toDoDescriptionLi'

    const toDoDescriptionLabel = document.createElement('label');
    toDoDescriptionLabel.textContent = "Todo Description:";

    const toDoDescriptionInput = document.createElement('input');
    toDoDescriptionInput.id = 'toDoDescriptionInput';

    toDoDescriptionLi.appendChild(toDoDescriptionLabel);
    toDoDescriptionLi.appendChild(toDoDescriptionInput);
    toDoUL.appendChild(toDoDescriptionLi);

    const toDoStatusLi = document.createElement('li');
    toDoStatusLi.id = 'toDoStatusLi';

    const toDoStatusLabel = document.createElement('label');
    toDoStatusLabel.textContent = "Todo Status:";

    const toDoStatusSelect = document.createElement('select');
    toDoStatusSelect.id = 'toDoStatusSelect';
    toDoStatusSelect.style.width = '130px';

    const toDoStatusNot = document.createElement('option');
    toDoStatusNot.value = "Not Started";
    toDoStatusNot.textContent = 'Not Started'
    toDoStatusSelect.appendChild(toDoStatusNot);

    const toDoStatusProgress = document.createElement('option');
    toDoStatusProgress.value = "In Progress";
    toDoStatusProgress.textContent = "In Progress";
    toDoStatusSelect.appendChild(toDoStatusProgress);

    const toDoStatusDone = document.createElement('option');
    toDoStatusDone.value = "Done";
    toDoStatusDone.textContent = "Done";
    toDoStatusSelect.appendChild(toDoStatusDone);

    toDoStatusLi.appendChild(toDoStatusLabel);
    toDoStatusLi.appendChild(toDoStatusSelect);
    toDoUL.appendChild(toDoStatusLi);

    const toDoButton = document.createElement('span');
    toDoButton.id = 'toDoButton';
    toDoButton.textContent = "Confirm Todo";
    toDoButton.addEventListener('click', generateToDo);
    toDoUL.appendChild(toDoButton);

}


function generateToDo() {

    const toDoTitleInput = document.getElementById('toDoTitleInput');
    const toDoDescriptionInput = document.getElementById('toDoDescriptionInput');
    const toDoStatusSelect = document.getElementById('toDoStatusSelect');


    if (toDoTitleInput.value == "" || toDoDescriptionInput.value == "" || toDoStatusSelect.value == "") {
        return;
    } else {

        const todoList = currentObject.todo;

        const newTodoObject = new _editTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"](toDoTitleInput.value, toDoDescriptionInput.value, toDoStatusSelect.value);

        todoList.push(newTodoObject);

        currentObject.todo = todoList;

        const toDoBox = document.createElement('box');
        toDoBox.className = 'toDoBox';
        toDoBox.id = toDoTitleInput.value + "_Box";
        document.getElementById('currentToDoDiv').appendChild(toDoBox);

        const toDoTitle = document.createElement('span');
        toDoTitle.id = 'toDoTitle';
        toDoTitle.textContent = toDoTitleInput.value
        toDoBox.appendChild(toDoTitle);

        const toDoDescription = document.createElement('p');
        toDoDescription.id = 'toDoDescription';
        toDoDescription.textContent = toDoDescriptionInput.value;
        toDoBox.appendChild(toDoDescription);

        const toDoStatus = document.createElement('span');
        toDoStatus.id = 'toDoStatus';
        toDoStatus.textContent = toDoStatusSelect.value;
        toDoBox.appendChild(toDoStatus);

        const toDoEdit = document.createElement('p');
        toDoEdit.className = 'toDoEdit'
        toDoEdit.id = newTodoObject.title;
        toDoEdit.style.cursor = "pointer";
        toDoEdit.textContent = "Edit";
        toDoEdit.addEventListener('click', changeTodo);
        toDoBox.appendChild(toDoEdit);

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

        document.getElementById('todoForm').remove();
    }
}

function changeTodo() {

    if (document.getElementById('todoForm') != null) {

        document.getElementById('todoForm').remove();
    }

    if (document.getElementById('editTodoForm') != null) {
        return;
    } else {

        let currentToDolist = currentObject.todo;

        let currentTodo = currentToDolist.find(item => item.title == this.id)

        console.log(currentTodo);

        const todoForm = document.createElement('div');
        todoForm.id = 'editTodoForm';
        document.getElementById('fullProjectDiv').appendChild(todoForm);

        const toDoUL = document.createElement('ul');
        toDoUL.id = 'toDoUL';
        todoForm.appendChild(toDoUL);

        const editToDoTitle = document.createElement('span');
        editToDoTitle.id = 'editToDoTitle';
        editToDoTitle.textContent = 'Edit Todo: ' + currentTodo.title;
        toDoUL.appendChild(editToDoTitle);

        const toDoTitleLi = document.createElement('li');
        toDoTitleLi.id = 'toDoTitleLi';

        const toDoTitleLabel = document.createElement('label');
        toDoTitleLabel.textContent = "Todo Title:";

        const toDoTitleInput = document.createElement('input');
        toDoTitleInput.id = 'toDoTitleInput'
        toDoTitleLi.appendChild(toDoTitleLabel);
        toDoTitleLi.appendChild(toDoTitleInput);
        toDoUL.appendChild(toDoTitleLi);

        const toDoDescriptionLi = document.createElement('li');
        toDoDescriptionLi.id = 'toDoDescriptionLi'

        const toDoDescriptionLabel = document.createElement('label');
        toDoDescriptionLabel.textContent = "Todo Description:";

        const toDoDescriptionInput = document.createElement('input');
        toDoDescriptionInput.id = 'toDoDescriptionInput';

        toDoDescriptionLi.appendChild(toDoDescriptionLabel);
        toDoDescriptionLi.appendChild(toDoDescriptionInput);
        toDoUL.appendChild(toDoDescriptionLi);

        const toDoStatusLi = document.createElement('li');
        toDoStatusLi.id = 'toDoStatusLi';

        const toDoStatusLabel = document.createElement('label');
        toDoStatusLabel.textContent = "Todo Status:";

        const toDoStatusSelect = document.createElement('select');
        toDoStatusSelect.id = 'toDoStatusSelect';
        toDoStatusSelect.style.width = '130px';


        const toDoStatusEmpty = document.createElement('option');
        toDoStatusEmpty.value = "";
        toDoStatusEmpty.textContent = '';
        toDoStatusSelect.appendChild(toDoStatusEmpty);

        const toDoStatusNot = document.createElement('option');
        toDoStatusNot.value = "Not Started";
        toDoStatusNot.textContent = 'Not Started';
        toDoStatusSelect.appendChild(toDoStatusNot);

        const toDoStatusProgress = document.createElement('option');
        toDoStatusProgress.value = "In Progress";
        toDoStatusProgress.textContent = "In Progress";
        toDoStatusSelect.appendChild(toDoStatusProgress);

        const toDoStatusDone = document.createElement('option');
        toDoStatusDone.value = "Done";
        toDoStatusDone.textContent = "Done";
        toDoStatusSelect.appendChild(toDoStatusDone);

        toDoStatusLi.appendChild(toDoStatusLabel);
        toDoStatusLi.appendChild(toDoStatusSelect);
        toDoUL.appendChild(toDoStatusLi);

        const todoButtonDiv = document.createElement('div');
        todoButtonDiv.id = 'todoButtonDiv';
        toDoUL.appendChild(todoButtonDiv);

        const editToDoButton = document.createElement('span');
        editToDoButton.id = currentTodo.title + "_Btn";
        editToDoButton.className = 'editToDoButton'
        editToDoButton.textContent = "Confirm Change(s)";
        editToDoButton.addEventListener('click', confirmToDoChange);
        todoButtonDiv.appendChild(editToDoButton);

        const deleteToDoButton = document.createElement('span');
        deleteToDoButton.id = currentTodo.title + "_Btn";
        deleteToDoButton.className = 'deleteToDoButton'
        deleteToDoButton.textContent = "Delete Todo";
        deleteToDoButton.addEventListener('click', deleteToDo);
        todoButtonDiv.appendChild(deleteToDoButton);


    }
}

function confirmToDoChange() {

    let currentToDolist = currentObject.todo;

    let itemIndex = (this.id).indexOf("_");

    let item = (this.id).slice(0, itemIndex);

    const index = currentObject.todo.findIndex(object => {
        return object.title == item;
    })

    const toDoTitleInput = document.getElementById('toDoTitleInput');
    const toDoDescriptionInput = document.getElementById('toDoDescriptionInput');
    const toDoStatusSelect = document.getElementById('toDoStatusSelect');
    const toDoTitle = document.getElementById('toDoTitle');
    const toDoDescription = document.getElementById('toDoDescription');
    const toDoStatus = document.getElementById('toDoStatus');

    if (toDoTitleInput.value == "" && toDoDescriptionInput.value == "" && toDoStatusSelect.value == "") {
        return;
    } else {

        if (toDoTitleInput.value != "") {

            currentObject.todo[index].title = toDoTitleInput.value;
            toDoTitle.textContent = toDoTitleInput.value;
            this.id = toDoTitleInput.value + "_Btn";

            const box = document.getElementById(item + "_Box");
            box.id = currentObject.todo[index].title + "_Box";
            const edit = document.getElementById(item);
            edit.id = currentObject.todo[index].title;

        }

        if (toDoDescriptionInput.value != "") {
            currentObject.todo[index].description = toDoDescriptionInput.value;
            toDoDescription.textContent = toDoDescriptionInput.value;
        }

        if (toDoStatusSelect.value != "") {
            currentObject.todo[index].status = toDoStatusSelect.value;
        }

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));
        toDoStatus.textContent = currentObject.todo[index].status;
        document.getElementById('editTodoForm').remove();
    }
}

function deleteToDo() {

    let currentToDolist = currentObject.todo;

    let itemIndex = (this.id).indexOf("_");

    let item = (this.id).slice(0, itemIndex);

    const index = currentObject.todo.findIndex(object => {
        return object.title == item
    })

    document.getElementById(currentObject.todo[index].title + "_Box").remove();

    currentObject.todo = currentToDolist.filter(object => object.title != item);

    document.getElementById('editTodoForm').remove();

    window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

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

    // 2nd part is a div taking 75% of the page's width
    const todoSection = document.createElement('div');
    todoSection.id = 'todoSection';
    mainSection.appendChild(todoSection);

    let list = [];

    let items = { // Retrieving the local Storage everytime the page is loaded
        ...localStorage
    };

    console.log(items)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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Q047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTiw4QkFBOEIsbURBQU87QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLHFCQUFxQixtREFBTztBQUM1Qix1QkFBdUIsbURBQU87QUFDOUIsMEJBQTBCLG1EQUFPO0FBQ2pDLG9CQUFvQixtREFBTztBQUMzQix3QkFBd0IsbURBQU87QUFDL0Isd0JBQXdCLG1EQUFPO0FBQy9CLG9CQUFvQixtREFBTztBQUMzQix1QkFBdUIsbURBQU87O0FBRTlCOztBQUVBOzs7QUFHQSxvQkFBb0Isd0JBQXdCOztBQUU1Qzs7QUFFQTs7QUFFQTs7QUFFQSxvREFBb0Q7QUFDcEQscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3REFBUTs7QUFFWixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseUJBQXlCO0FBQzdDLCtEQUErRDtBQUMvRCwyQkFBMkIsbURBQU87QUFDbEM7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseUJBQXlCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDRCQUE0Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQSxrQ0FBa0Msb0RBQUk7O0FBRXRDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzk2QmU7O0FBRWY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCOztBQUU3QywrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCLE9BQU87O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRHlDOztBQUUxQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVE7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDExMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XFxufVxcblxcbi5sZWZ0QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy10b3A6IDElO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbn1cXG5cXG4ucmlnaEhlYWRlckRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcblxcbiN1c2VySWNvbiB7XFxuICAgIGhlaWdodDogMi4yNXZoO1xcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4udXNlck5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3Jlc2V0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld1Byb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0NykgIWltcG9ydGFudDtcXG59XFxuXFxuLm15UHJvamVjdHMge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb1NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4jZnVsbFByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIG1hcmdpbi1yaWdodDogNCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI2VkaXRpbmdEaXYsXFxuI25ld1Byb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI2VkaXRpbmdGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5cXG5cXG4jbmV3Rm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA4NCwgNTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjM5LCA1Nik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDU0LCA1NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b0RvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNwcm9qZWN0RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jbmV3dG9EbyxcXG4jc2hvd0RldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMC41dmg7XFxuICAgIG1heC1oZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvQnV0dG9uRGl2IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3RvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0VG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlVG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA1NCwgNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvRm9ybSxcXG4jZWRpdFRvZG9Gb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNmb3JtVUwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIGF1dG8gLyA1MCUgNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjUlO1xcbn1cXG5cXG4jdG9Eb1VMIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMCUgNDUlIDQ1JS8gNTAlIDUwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjUlO1xcbn1cXG5cXG4jdG9Eb1RpdGxlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3RvRG9UaXRsZUxpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI3RvRG9EZXNjcmlwdGlvbkxpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG5cXG59XFxuXFxuI3RvRG9TdGF0dXNMaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmxhYmVsLFxcbmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNuZXdQcm9qZWN0VWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNjdXJyZW50VG9Eb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuI3RvRG9CYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTcuNSUgNTUlIDE3LjUlIDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjM1dnc7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KTtcXG59XFxuXFxuI2JhclRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYmFyRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYmFyU3RhdHVzIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9Eb0JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxNy41JSA1NSUgMTcuNSUgMTAlO1xcbiAgICBmb250LXNpemU6IDEuMDV2dztcXG59XFxuXFxuI3RvRG9UaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3RvRG9EZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcXG59XFxuXFxuI3RvRG9TdGF0dXMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0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QkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBOzs7SUFHSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbn1cXG5cXG4ubGVmdEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLnJpZ2hIZWFkZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweFxcbn1cXG5cXG5cXG4jdXNlckljb24ge1xcbiAgICBoZWlnaHQ6IDIuMjV2aDtcXG4gICAgbWluLWhlaWdodDogMThweDtcXG59XFxuXFxuLnVzZXJOYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNyZXNldERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KTtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teVByb2plY3RzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuI2Z1bGxQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNlZGl0aW5nRGl2LFxcbiNuZXdQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNlZGl0aW5nRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuI25ld0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgODQsIDU3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWxCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIzOSwgNTYpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA1NCwgNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9Eb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jcHJvamVjdERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuI25ld3RvRG8sXFxuI3Nob3dEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdFRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZVRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0Zvcm0sXFxuI2VkaXRUb2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZm9ybVVMIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byBhdXRvIC8gNTAlIDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDQ1JSA0NSUvIDUwJSA1MCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9UaXRsZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvVGl0bGVMaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb25MaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxufVxcblxcbiN0b0RvU3RhdHVzTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmV3UHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jY3VycmVudFRvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbiN0b0RvQmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXZ3O1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbiNiYXJUaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2JhckRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2JhclN0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9Cb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTcuNSUgNTUlIDE3LjUlIDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjA1dnc7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XFxufVxcblxcbiN0b0RvU3RhdHVzIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCB0b2RvKSB7XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMudG9kbyA9IHRvZG87XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXR1cykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYmFzaWNIdG1sIGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vZWRpdFRvZG8uanMnO1xuXG5iYXNpY0h0bWwoKTsgLy9EaXNwbGF5aW5nIHRoZSBiYXNpYyBodG1sIHRlbXBsYXRlIHRocm91Z2ggYSBmdW5jdGlvbiBjYWxsXG5wcm9qZWN0cygpOyAvLyBQb3B1bGF0aW5nIHRoZSBsZWZ0IEJhclxuXG5sZXQgaXRlbXMgPSB7IC8vIFJldHJpZXZpbmcgdGhlIGxvY2FsIFN0b3JhZ2UgZXZlcnl0aW1lIHRoZSBwYWdlIGlzIGxvYWRlZFxuICAgIC4uLmxvY2FsU3RvcmFnZVxufTtcblxubGV0IGxpc3QgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShpdGVtc1tPYmplY3Qua2V5cyhpdGVtcylbaV1dKTsgLy8gV2Ugc3RvcmUgZWFjaCBvYmplY3QgaW4gbG9jYWxTdG9yYWdlIGluIGFuIGFycmF5O1xuICAgIGl0ZW0uY29uc3RydWN0b3IgPSBQcm9qZWN0O1xuICAgIGxpc3QucHVzaChpdGVtKTtcbn1cblxuY29uc3QgcHJvamVjdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaXRsZScpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RCb3hlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgcHJvamVjdEJveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QsIHRydWUpO1xuICAgIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15VG9kbywgZmFsc2UpO1xufVxuXG5sZXQgY3VycmVudE9iamVjdCA9IFwiXCI7XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuXG4gICAgY29uc3QgbXlPYmplY3QgPSBsaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09IHRoaXMuaWQpO1xuXG4gICAgY3VycmVudE9iamVjdCA9IG15T2JqZWN0O1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykucmVtb3ZlKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0RGl2JykgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdERpdicpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnVsbFByb2plY3REaXYuaWQgPSAnZnVsbFByb2plY3REaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvU2VjdGlvbicpLmFwcGVuZENoaWxkKGZ1bGxQcm9qZWN0RGl2KTtcblxuICAgIGNvbnN0IGVkaXRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gQ29udGFpbmVyIHRoYXQgY29udGFpbnMgYSBmb3JtXG4gICAgZWRpdGluZ0Rpdi5pZCA9ICdlZGl0aW5nRGl2JztcbiAgICBmdWxsUHJvamVjdERpdi5hcHBlbmRDaGlsZChlZGl0aW5nRGl2KTtcblxuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXkuaWQgPSAncHJvamVjdERpc3BsYXknO1xuICAgIGVkaXRpbmdEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiICsgY3VycmVudE9iamVjdC50aXRsZTtcbiAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3Qgc2hvd0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzaG93RGV0YWlsLmlkID0gJ3Nob3dEZXRhaWxzJztcbiAgICBzaG93RGV0YWlsLnRleHRDb250ZW50ID0gXCJTaG93IFByb2plY3QgZGV0YWlsc1wiO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHNob3dEZXRhaWwpO1xuICAgIHNob3dEZXRhaWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGV0YWlscyk7XG59XG5cbmZ1bmN0aW9uIHNob3dEZXRhaWxzKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRm9ybScpICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRpbmdGb3JtJykucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBlZGl0aW5nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZWRpdGluZ0Zvcm0uaWQgPSAnZWRpdGluZ0Zvcm0nXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykuYXBwZW5kQ2hpbGQoZWRpdGluZ0Zvcm0pXG5cbiAgICAgICAgY29uc3QgZm9ybVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgZm9ybVVMLmlkID0gJ2Zvcm1VTCc7XG4gICAgICAgIGVkaXRpbmdGb3JtLmFwcGVuZENoaWxkKGZvcm1VTCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdCBUaXRsZTpcIjtcblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0Q2hhbmdlJztcbiAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG5cbiAgICAgICAgdGl0bGVMaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgdGl0bGVMaS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgZm9ybVVMLmFwcGVuZENoaWxkKHRpdGxlTGkpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgRGVzY3JpcHRpb246XCI7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uSW5wdXRcIjtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgZGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgZm9ybVVMLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGkpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgRHVlIERhdGU6XCI7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjdXJyZW50RGF0ZS5pZCA9ICdjdXJyZW50RGF0ZSc7XG4gICAgICAgIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC5kdWVEYXRlO1xuICAgICAgICBjdXJyZW50RGF0ZS5zdHlsZS5jb2xvciA9ICdwdXJwbGUnO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlSW5wdXQnO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUud2lkdGggPSAnMTI1cHgnO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcblxuICAgICAgICBkYXRlTGkuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGN1cnJlbnREYXRlKTtcbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkYXRlTGkpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgUHJpb3JpdHk6XCI7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3VycmVudFByaW9yaXR5LmlkID0gJ2N1cnJlbnRQcmlvcml0eSc7XG4gICAgICAgIGN1cnJlbnRQcmlvcml0eS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QucHJpb3JpdHk7XG4gICAgICAgIGN1cnJlbnRQcmlvcml0eS5zdHlsZS5jb2xvciA9ICdwdXJwbGUnO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uRGVmYXVsdC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbkRlZmF1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25EZWZhdWx0KTtcblxuICAgICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgICAgICAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdydcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcblxuICAgICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uTWVkaXVtLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgICAgICAgb3B0aW9uTWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTWVkaXVtKTtcblxuICAgICAgICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICAgICAgb3B0aW9uSGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcblxuICAgICAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKGN1cnJlbnRQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdCBTdGF0dXM6XCI7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMuaWQgPSAnY3VycmVudFN0YXR1cyc7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnN0YXR1cztcbiAgICAgICAgY3VycmVudFN0YXR1cy5zdHlsZS5jb2xvciA9ICdwdXJwbGUnXG5cbiAgICAgICAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5pZCA9ICdzdGF0dXNTZWxlY3QnO1xuICAgICAgICBzdGF0dXNTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3RhdHVzRGVmYXVsdC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHN0YXR1c0RlZmF1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzRGVmYXVsdCk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzTm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c05vdC52YWx1ZSA9IFwiTm90IFN0YXJ0ZWRcIjtcbiAgICAgICAgc3RhdHVzTm90LnRleHRDb250ZW50ID0gJ05vdCBTdGFydGVkJ1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzTm90KTtcblxuICAgICAgICBjb25zdCBzdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNQcm9ncmVzcy52YWx1ZSA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICAgICAgc3RhdHVzUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNQcm9ncmVzcyk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNEb25lLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgIHN0YXR1c0RvbmUudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RvbmUpO1xuXG4gICAgICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKHN0YXR1c0xhYmVsKTtcbiAgICAgICAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoY3VycmVudFN0YXR1cyk7XG4gICAgICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKHN0YXR1c1NlbGVjdCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChzdGF0dXNMaSk7XG5cbiAgICAgICAgLy8gRGl2IHRvIGhvbGQgb3VyIGJ1dHRvbiAtIFB1c2ggb3IgQ2FuY2VsIGNoYW5nZXNcbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnYnV0dG9uRGl2JztcbiAgICAgICAgZWRpdGluZ0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXRCdXR0b24nO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdERldGFpbHMpO1xuXG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSBDaGFuZ2UocyknO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlQnV0dG9uJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gJ2RlbGV0ZUJ1dHRvbic7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXREZXRhaWxzKCkge1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0Q2hhbmdlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0Jyk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudERhdGUnKTtcbiAgICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFByaW9yaXR5Jyk7XG4gICAgY29uc3QgY3VycmVudFN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50U3RhdHVzJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0Jyk7XG4gICAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c1NlbGVjdCcpO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gXCJcIiAmJiBkZXNjcmlwdGlvbklucHV0LnZhbHVlID09IFwiXCIgJiYgZGF0ZUlucHV0LnZhbHVlID09IFwiXCIgJiYgcHJpb3JpdHlTZWxlY3QudmFsdWUgPT0gXCJcIiAmJiBzdGF0dXNTZWxlY3QudmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCB0aXRsZU9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudGl0bGUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIC8vIGNvbnN0IGVkaXRPYmplY3QgPSBsaXN0W2ldLnRpdGxlIC8vIHRoaXMgdmFyaWFibGUgc3RvcmVzIHRoZSByaWdodCBvYmplY3QgdGl0bGUgYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gb3VyIGxpc3RcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUpO1xuXG4gICAgICAgIGlmICh0aXRsZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudGl0bGUpLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215VG9Eb1RJdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlICsgXCI6VG9kbyhzKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlSW5wdXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC5kdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1c1NlbGVjdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnN0YXR1cyA9IHN0YXR1c1NlbGVjdC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShjdXJyZW50T2JqZWN0KSk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50aXRsZTtcbiAgICAgICAgdGl0bGVPYmplY3QuaWQgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG5cbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnN0YXR1cztcblxuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjdXJyZW50UHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgY3VycmVudFN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZSA9IFwiXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZVRpdGxlID0gY3VycmVudE9iamVjdC50aXRsZTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkZWxldGVUaXRsZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlVGl0bGUpLnJlbW92ZSgpO1xuXG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuXG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKSAhPSBudWxsKXtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKSAhPSBudWxsIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG5cblxuICAgIFxuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0RpdicpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb250YWluZXIgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICAgICAgbmV3UHJvamVjdERpdi5pZCA9ICduZXdQcm9qZWN0RGl2JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbmV3Rm9ybS5pZCA9ICduZXdGb3JtJztcbiAgICAgICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFByb2plY3RcIjtcbiAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGZvcm1VTC5pZCA9ICduZXdQcm9qZWN0VWwnO1xuICAgICAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGZvcm1VTCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIiBQcm9qZWN0IFRpdGxlOlwiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xuICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0NvbXB1dGVyJztcblxuICAgICAgICB0aXRsZUxpLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICB0aXRsZUxpLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQodGl0bGVMaSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgRGVzY3JpcHRpb246XCI7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkJ1eSBhIG5ldyBjb21wdXRlclwiO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKTtcblxuICAgICAgICBjb25zdCBkYXRlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEdWUgRGF0ZTpcIjtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZUlucHV0JztcbiAgICAgICAgZGF0ZUlucHV0LnN0eWxlLndpZHRoID0gJzEyNXB4JztcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoZGF0ZUxpKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBQcmlvcml0eTpcIjtcblxuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgICAgICAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdydcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25NZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICAgICAgICBvcHRpb25NZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25NZWRpdW0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICAgICAgICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuXG4gICAgICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgU3RhdHVzOlwiO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0JztcbiAgICAgICAgc3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBzdGF0dXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzdGF0dXNEZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RlZmF1bHQpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIHN0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCc7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNOb3QpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1Byb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c1Byb2dyZXNzLnZhbHVlID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICBzdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c1Byb2dyZXNzKTtcblxuICAgICAgICBjb25zdCBzdGF0dXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RvbmUudmFsdWUgPSBcIkRvbmVcIjtcbiAgICAgICAgc3RhdHVzRG9uZS50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzRG9uZSk7XG5cbiAgICAgICAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoc3RhdHVzTGFiZWwpO1xuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoc3RhdHVzTGkpO1xuXG4gICAgICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XG4gICAgICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXRCdXR0b24nO1xuICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybUJ1dHRvbk5ldyk7XG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtIFByb2plY3QnO1xuICAgICAgICBjb25maXJtQnV0dG9uLmlkID0gY29uZmlybUJ1dHRvbjtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2NhbmNlbEJ1dHRvbic7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdjYW5jZWxCdXR0b24nO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtQnV0dG9uTmV3KCkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpO1xuICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNTZWxlY3QnKTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHByaW9yaXR5U2VsZWN0LnZhbHVlID09IFwiXCIgfHwgc3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIHN0YXR1c1NlbGVjdC52YWx1ZSwgW10pO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdPYmplY3QpKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJztcbiAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gbmV3T2JqZWN0LnRpdGxlXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5ld09iamVjdC50aXRsZTtcbiAgICAgICAgbGlzdC5wdXNoKG5ld09iamVjdCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGl2JykuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QsIHRydWUpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVRvZG8pO1xuICAgIH1cbn1cblxuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpIHtcblxuXG4gICAgLy9DcmVhdGluZyBhIGZldyByYW5kb20gcHJvamVjdHMgdG8gZGlzcGxheSBpdCBvbiBvdXIgc2NyZWVuXG4gICAgY29uc3QgaG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJywgJ1Jlbm92YXRpbmcgbXkgSG9tZScsICcyMDIzLTEyLTMxJywgJ0xvdycsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBzY2hvb2wgPSBuZXcgUHJvamVjdCgnU2Nob29sJywgJ0ZpbmlzaGluZyBteSBkZWdyZWUnLCAnMjAyMy0xMi0zMScsICdMb3cnLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3QgZ3JvY2VyaWVzID0gbmV3IFByb2plY3QoJ0dyb2NlcmllcycsICdCdXkgbXkgZ3JvY2VyaWVzJywgJzIwMjMtMDEtMDEnLCAnSGlnaCcsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBjYXIgPSBuZXcgUHJvamVjdCgnTmV3IENhcicsICdCdXkgYSBuZXcgY2FyJywgJzIwMjMtMTItMzEnLCAnTWVkaXVtJywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBuZXcgUHJvamVjdCgnSGFsZi1tYXJhdGhvbicsICdSdW5uaW5nIGEgaGFsZi1tYXJhdGhvbicsICcyMDIzLTA5LTMwJywgJ0hpZ2gnLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3QgZXZlcmVzdCA9IG5ldyBQcm9qZWN0KCdDbGltYmluZyBFdmVyZXN0JywgJ0NsaW1iaW5nIE1vdW50IEV2ZXJlc3QnLCAnMjAyNS0wNi0zMCcsICdNZWRpdW0nLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3Qgam9iID0gbmV3IFByb2plY3QoJ05ldyBKb2InLCAnQ2hhbmdlIGZvciBhIGJldHRlciBqb2InLCAnMjAyMi0xMi0zMScsICdMb3cnLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3QgY29kaW5nID0gbmV3IFByb2plY3QoJ0NvZGluZycsICdMZWFybiB0byBjb2RlJywgJzIwMjMtMTAtMzEnLCAnTWVkaXVtJywgJ05vdCBTdGFydGVkJywgW10pO1xuXG4gICAgbGV0IHByb2plY3RMaXN0ID0gW2hvbWUsIHNjaG9vbCwgZ3JvY2VyaWVzLCBjYXIsIHJ1bm5pbmcsIGV2ZXJlc3QsIGpvYiwgY29kaW5nXTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RMaXN0W2ldO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShteVByb2plY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdCkpO1xuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REaXYnKS5yZW1vdmUoKTsgLy8gUmVtb3ZpbmcgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIHVwZGF0ZWQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykucmVtb3ZlKCk7IC8vIFJlbW92aW5nIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGRhdGVkO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcHJvamVjdHMoKTtcblxuICAgIGl0ZW1zID0geyAvLyBSZXRyaWV2aW5nIHRoZSBsb2NhbCBTdG9yYWdlIGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgICAgICAgLi4ubG9jYWxTdG9yYWdlXG4gICAgfTtcblxuICAgIGxpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW09iamVjdC5rZXlzKGl0ZW1zKVtpXV0pOyAvLyBXZSBzdG9yZSBlYWNoIG9iamVjdCBpbiBsb2NhbFN0b3JhZ2UgaW4gYW4gYXJyYXk7XG4gICAgICAgIGl0ZW0uY29uc3RydWN0b3IgPSBQcm9qZWN0O1xuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaXRsZScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Qm94ZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdCwgdHJ1ZSk7XG4gICAgICAgIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15VG9kbywgZmFsc2UpO1xuICAgIH1cblxuICAgIGN1cnJlbnRPYmplY3QgPSBcIlwiO1xuXG59XG5cblxuZnVuY3Rpb24gbXlUb2RvKCkge1xuXG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb250YWluZXIgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICB0b0RvRGl2LmlkID0gJ3RvRG9EaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLmFwcGVuZCh0b0RvRGl2KTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvVGl0bGUuaWQgPSAnbXlUb0RvVEl0bGUnO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QudGl0bGUgKyBcIjogVG9kbyhzKVwiO1xuICAgIHRvRG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IG5ld3RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3dG9Eby5pZCA9ICduZXd0b0RvJztcbiAgICBuZXd0b0RvLnRleHRDb250ZW50ID0gXCJBZGQgdG8gZG9cIjtcbiAgICBuZXd0b0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVG9kbyk7XG5cbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKG5ld3RvRG8pO1xuXG4gICAgY29uc3QgY3VycmVudFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50VG9Eb0Rpdi5pZCA9ICdjdXJyZW50VG9Eb0Rpdic7XG4gICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50VG9Eb0Rpdik7XG5cbiAgICBjb25zdCB0b0RvQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm94Jyk7XG4gICAgdG9Eb0Jhci5pZCA9ICd0b0RvQmFyJztcbiAgICBjdXJyZW50VG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvQmFyKTtcblxuICAgIGNvbnN0IGJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJhclRpdGxlLmlkID0gJ2JhclRpdGxlJztcbiAgICBiYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhclRpdGxlKTtcblxuICAgIGNvbnN0IGJhckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJhckRlc2NyaXB0aW9uLmlkID0gJ2JhckRlc2NyaXB0aW9uJztcbiAgICBiYXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhckRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGJhclN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBiYXJTdGF0dXMuaWQgPSAnYmFyU3RhdHVzJztcbiAgICBiYXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN0YXR1c1wiXG4gICAgdG9Eb0Jhci5hcHBlbmRDaGlsZChiYXJTdGF0dXMpO1xuXG4gICAgbGV0IGN1cnJlbnRUb0RvbGlzdCA9IGN1cnJlbnRPYmplY3QudG9kbztcblxuICAgIGlmIChjdXJyZW50VG9Eb2xpc3QubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFRvRG9saXN0Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKTtcbiAgICAgICAgICAgIHRvRG9Cb3guY2xhc3NOYW1lID0gJ3RvRG9Cb3gnO1xuICAgICAgICAgICAgdG9Eb0JveC5pZCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZSArIFwiX0JveFwiO1xuICAgICAgICAgICAgY3VycmVudFRvRG9EaXYuYXBwZW5kQ2hpbGQodG9Eb0JveCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRvRG9UaXRsZS5pZCA9ICd0b0RvVGl0bGUnO1xuICAgICAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFRvRG9saXN0W2pdLnRpdGxlXG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRvRG9EZXNjcmlwdGlvbi5pZCA9ICd0b0RvRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFRvRG9saXN0W2pdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdG9Eb1N0YXR1cy5pZCA9ICd0b0RvU3RhdHVzJztcbiAgICAgICAgICAgIHRvRG9TdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50VG9Eb2xpc3Rbal0uc3RhdHVzO1xuICAgICAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0b0RvRWRpdC5pZCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZTtcbiAgICAgICAgICAgIHRvRG9FZGl0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgdG9Eb0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9kbyk7XG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9FZGl0KTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybS5pZCA9ICd0b2RvRm9ybSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuXG4gICAgY29uc3QgdG9Eb1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0b0RvVUwuaWQgPSAndG9Eb1VMJztcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVUwpO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvRG9UaXRsZS5pZCA9ICd0b0RvVGl0bGUnO1xuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICBjb25zdCB0b0RvVGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9Eb1RpdGxlTGkuaWQgPSAndG9Eb1RpdGxlTGknO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvRG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFRpdGxlOlwiO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvRG9UaXRsZUlucHV0LmlkID0gJ3RvRG9UaXRsZUlucHV0JztcblxuICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxhYmVsKTtcbiAgICB0b0RvVGl0bGVMaS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVJbnB1dCk7XG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxpKTtcblxuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b0RvRGVzY3JpcHRpb25MaS5pZCA9ICd0b0RvRGVzY3JpcHRpb25MaSdcblxuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b0RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBEZXNjcmlwdGlvbjpcIjtcblxuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b0RvRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0b0RvRGVzY3JpcHRpb25JbnB1dCc7XG5cbiAgICB0b0RvRGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25MaSk7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvRG9TdGF0dXNMaS5pZCA9ICd0b0RvU3RhdHVzTGknO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b0RvU3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gU3RhdHVzOlwiO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuaWQgPSAndG9Eb1N0YXR1c1NlbGVjdCc7XG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCc7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzTm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdG9Eb1N0YXR1c05vdC52YWx1ZSA9IFwiTm90IFN0YXJ0ZWRcIjtcbiAgICB0b0RvU3RhdHVzTm90LnRleHRDb250ZW50ID0gJ05vdCBTdGFydGVkJ1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c05vdCk7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0b0RvU3RhdHVzUHJvZ3Jlc3MudmFsdWUgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgdG9Eb1N0YXR1c1Byb2dyZXNzLnRleHRDb250ZW50ID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c1Byb2dyZXNzKTtcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdG9Eb1N0YXR1c0RvbmUudmFsdWUgPSBcIkRvbmVcIjtcbiAgICB0b0RvU3RhdHVzRG9uZS50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0RvbmUpO1xuXG4gICAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMYWJlbCk7XG4gICAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNTZWxlY3QpO1xuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGkpO1xuXG4gICAgY29uc3QgdG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b0RvQnV0dG9uLmlkID0gJ3RvRG9CdXR0b24nO1xuICAgIHRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm0gVG9kb1wiO1xuICAgIHRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVRvRG8pO1xuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvQnV0dG9uKTtcblxufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9EbygpIHtcblxuICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UaXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnKTtcbiAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9TdGF0dXNTZWxlY3QnKTtcblxuXG4gICAgaWYgKHRvRG9UaXRsZUlucHV0LnZhbHVlID09IFwiXCIgfHwgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT0gXCJcIiB8fCB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb09iamVjdCA9IG5ldyBUb2RvKHRvRG9UaXRsZUlucHV0LnZhbHVlLCB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSk7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChuZXdUb2RvT2JqZWN0KTtcblxuICAgICAgICBjdXJyZW50T2JqZWN0LnRvZG8gPSB0b2RvTGlzdDtcblxuICAgICAgICBjb25zdCB0b0RvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm94Jyk7XG4gICAgICAgIHRvRG9Cb3guY2xhc3NOYW1lID0gJ3RvRG9Cb3gnO1xuICAgICAgICB0b0RvQm94LmlkID0gdG9Eb1RpdGxlSW5wdXQudmFsdWUgKyBcIl9Cb3hcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUb0RvRGl2JykuYXBwZW5kQ2hpbGQodG9Eb0JveCk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b0RvVGl0bGUuaWQgPSAndG9Eb1RpdGxlJztcbiAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb1RpdGxlSW5wdXQudmFsdWVcbiAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLmlkID0gJ3RvRG9EZXNjcmlwdGlvbic7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9Eb1N0YXR1cy5pZCA9ICd0b0RvU3RhdHVzJztcbiAgICAgICAgdG9Eb1N0YXR1cy50ZXh0Q29udGVudCA9IHRvRG9TdGF0dXNTZWxlY3QudmFsdWU7XG4gICAgICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb1N0YXR1cyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9FZGl0LmNsYXNzTmFtZSA9ICd0b0RvRWRpdCdcbiAgICAgICAgdG9Eb0VkaXQuaWQgPSBuZXdUb2RvT2JqZWN0LnRpdGxlO1xuICAgICAgICB0b0RvRWRpdC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgdG9Eb0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb2RvKTtcbiAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRWRpdCk7XG5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvZG8oKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykgIT0gbnVsbCkge1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG9Gb3JtJykgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgY3VycmVudFRvRG9saXN0ID0gY3VycmVudE9iamVjdC50b2RvO1xuXG4gICAgICAgIGxldCBjdXJyZW50VG9kbyA9IGN1cnJlbnRUb0RvbGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PSB0aGlzLmlkKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUb2RvKTtcblxuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRm9ybS5pZCA9ICdlZGl0VG9kb0Zvcm0nO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9Eb1VMLmlkID0gJ3RvRG9VTCc7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9VTCk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZWRpdFRvRG9UaXRsZS5pZCA9ICdlZGl0VG9Eb1RpdGxlJztcbiAgICAgICAgZWRpdFRvRG9UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRvZG86ICcgKyBjdXJyZW50VG9kby50aXRsZTtcbiAgICAgICAgdG9Eb1VMLmFwcGVuZENoaWxkKGVkaXRUb0RvVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdG9Eb1RpdGxlTGkuaWQgPSAndG9Eb1RpdGxlTGknO1xuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdG9Eb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gVGl0bGU6XCI7XG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b0RvVGl0bGVJbnB1dC5pZCA9ICd0b0RvVGl0bGVJbnB1dCdcbiAgICAgICAgdG9Eb1RpdGxlTGkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGFiZWwpO1xuICAgICAgICB0b0RvVGl0bGVMaS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVJbnB1dCk7XG4gICAgICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMaSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b0RvRGVzY3JpcHRpb25MaS5pZCA9ICd0b0RvRGVzY3JpcHRpb25MaSdcblxuICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIERlc2NyaXB0aW9uOlwiO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnO1xuXG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uTGkpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRvRG9TdGF0dXNMaS5pZCA9ICd0b0RvU3RhdHVzTGknO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRvRG9TdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBTdGF0dXM6XCI7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LmlkID0gJ3RvRG9TdGF0dXNTZWxlY3QnO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNFbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b0RvU3RhdHVzRW1wdHkudmFsdWUgPSBcIlwiO1xuICAgICAgICB0b0RvU3RhdHVzRW1wdHkudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzRW1wdHkpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNOb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9Eb1N0YXR1c05vdC52YWx1ZSA9IFwiTm90IFN0YXJ0ZWRcIjtcbiAgICAgICAgdG9Eb1N0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCc7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c05vdCk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c1Byb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvRG9TdGF0dXNQcm9ncmVzcy52YWx1ZSA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICAgICAgdG9Eb1N0YXR1c1Byb2dyZXNzLnRleHRDb250ZW50ID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNQcm9ncmVzcyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9Eb1N0YXR1c0RvbmUudmFsdWUgPSBcIkRvbmVcIjtcbiAgICAgICAgdG9Eb1N0YXR1c0RvbmUudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzRG9uZSk7XG5cbiAgICAgICAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMYWJlbCk7XG4gICAgICAgIHRvRG9TdGF0dXNMaS5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzU2VsZWN0KTtcbiAgICAgICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMaSk7XG5cbiAgICAgICAgY29uc3QgdG9kb0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQnV0dG9uRGl2LmlkID0gJ3RvZG9CdXR0b25EaXYnO1xuICAgICAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbkRpdik7XG5cbiAgICAgICAgY29uc3QgZWRpdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGVkaXRUb0RvQnV0dG9uLmlkID0gY3VycmVudFRvZG8udGl0bGUgKyBcIl9CdG5cIjtcbiAgICAgICAgZWRpdFRvRG9CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXRUb0RvQnV0dG9uJ1xuICAgICAgICBlZGl0VG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybSBDaGFuZ2UocylcIjtcbiAgICAgICAgZWRpdFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25maXJtVG9Eb0NoYW5nZSk7XG4gICAgICAgIHRvZG9CdXR0b25EaXYuYXBwZW5kQ2hpbGQoZWRpdFRvRG9CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbGV0ZVRvRG9CdXR0b24uaWQgPSBjdXJyZW50VG9kby50aXRsZSArIFwiX0J0blwiO1xuICAgICAgICBkZWxldGVUb0RvQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGVUb0RvQnV0dG9uJ1xuICAgICAgICBkZWxldGVUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgVG9kb1wiO1xuICAgICAgICBkZWxldGVUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Ebyk7XG4gICAgICAgIHRvZG9CdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0J1dHRvbik7XG5cblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybVRvRG9DaGFuZ2UoKSB7XG5cbiAgICBsZXQgY3VycmVudFRvRG9saXN0ID0gY3VycmVudE9iamVjdC50b2RvO1xuXG4gICAgbGV0IGl0ZW1JbmRleCA9ICh0aGlzLmlkKS5pbmRleE9mKFwiX1wiKTtcblxuICAgIGxldCBpdGVtID0gKHRoaXMuaWQpLnNsaWNlKDAsIGl0ZW1JbmRleCk7XG5cbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRPYmplY3QudG9kby5maW5kSW5kZXgob2JqZWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC50aXRsZSA9PSBpdGVtO1xuICAgIH0pXG5cbiAgICBjb25zdCB0b0RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvVGl0bGVJbnB1dCcpO1xuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9EZXNjcmlwdGlvbklucHV0Jyk7XG4gICAgY29uc3QgdG9Eb1N0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvU3RhdHVzU2VsZWN0Jyk7XG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UaXRsZScpO1xuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b0RvU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9TdGF0dXMnKTtcblxuICAgIGlmICh0b0RvVGl0bGVJbnB1dC52YWx1ZSA9PSBcIlwiICYmIHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlID09IFwiXCIgJiYgdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmICh0b0RvVGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0udGl0bGUgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IHRvRG9UaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRvRG9UaXRsZUlucHV0LnZhbHVlICsgXCJfQnRuXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0gKyBcIl9Cb3hcIik7XG4gICAgICAgICAgICBib3guaWQgPSBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnRpdGxlICsgXCJfQm94XCI7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgICAgICAgICBlZGl0LmlkID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0uZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvRG9TdGF0dXNTZWxlY3QudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC50b2RvW2luZGV4XS5zdGF0dXMgPSB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKTtcbiAgICAgICAgdG9Eb1N0YXR1cy50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0uc3RhdHVzO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG9Gb3JtJykucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuXG4gICAgbGV0IGN1cnJlbnRUb0RvbGlzdCA9IGN1cnJlbnRPYmplY3QudG9kbztcblxuICAgIGxldCBpdGVtSW5kZXggPSAodGhpcy5pZCkuaW5kZXhPZihcIl9cIik7XG5cbiAgICBsZXQgaXRlbSA9ICh0aGlzLmlkKS5zbGljZSgwLCBpdGVtSW5kZXgpO1xuXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50T2JqZWN0LnRvZG8uZmluZEluZGV4KG9iamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBvYmplY3QudGl0bGUgPT0gaXRlbVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnRpdGxlICsgXCJfQm94XCIpLnJlbW92ZSgpO1xuXG4gICAgY3VycmVudE9iamVjdC50b2RvID0gY3VycmVudFRvRG9saXN0LmZpbHRlcihvYmplY3QgPT4gb2JqZWN0LnRpdGxlICE9IGl0ZW0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb2RvRm9ybScpLnJlbW92ZSgpO1xuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzKCkge1xuXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3Rpb24nKTtcblxuICAgIC8vMXN0IHBhcnQgaXMgYSBsZWZ0IGJhclxuICAgIGNvbnN0IGxlZnRCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEJhcicpO1xuXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuaWQgPSAncHJvamVjdERpdic7XG4gICAgcHJvamVjdERpdi5jbGFzc05hbWUgPSAncHJvamVjdERpdic7XG4gICAgbGVmdEJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICduZXdQcm9qZWN0JztcbiAgICBuZXdQcm9qZWN0LmlkID0gJ25ld1Byb2plY3QnO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgICAvL1NwYW4gdGFnIGZvciBteSBwcm9qZWN0IHByb2plY3RMaXN0XG4gICAgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBteVByb2plY3RzLmNsYXNzTmFtZSA9ICdteVByb2plY3RzJztcbiAgICBteVByb2plY3RzLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG15UHJvamVjdHMpO1xuXG4gICAgLy8gMm5kIHBhcnQgaXMgYSBkaXYgdGFraW5nIDc1JSBvZiB0aGUgcGFnZSdzIHdpZHRoXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5pZCA9ICd0b2RvU2VjdGlvbic7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuXG4gICAgbGV0IGxpc3QgPSBbXTtcblxuICAgIGxldCBpdGVtcyA9IHsgLy8gUmV0cmlldmluZyB0aGUgbG9jYWwgU3RvcmFnZSBldmVyeXRpbWUgdGhlIHBhZ2UgaXMgbG9hZGVkXG4gICAgICAgIC4uLmxvY2FsU3RvcmFnZVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhpdGVtcylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW09iamVjdC5rZXlzKGl0ZW1zKVtpXV0pOyAvLyBXZSBzdG9yZSBlYWNoIG9iamVjdCBpbiBsb2NhbFN0b3JhZ2UgaW4gYW4gYXJyYXlcbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgeyAvLyBJdGVyYXRpbmcgdG8gZGlzcGxheSBvdXIgb2JqZWN0c1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0VGl0bGUnO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSBsaXN0W2ldLnRpdGxlXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RbaV0udGl0bGU7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICB9XG59IiwiaW1wb3J0IFVzZXJJY29uIGZyb20gJy4vdXRpbGlzYXRldXIucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzaWNIdG1sKCkge1xuXG4gICAgLy9Ub3AgYmFyIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBQYWdlIFRpdGxlXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBoZXJvLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgLy9SaWdodCBQYXJ0IC0gSGVhZGVyXG4gICAgY29uc3QgcmlnaHRIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodEhlYWRlckRpdi5jbGFzc05hbWUgPSAncmlnaEhlYWRlckRpdic7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0SGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IHVzZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdXNlckljb24uaWQgPSAndXNlckljb24nO1xuICAgIHVzZXJJY29uLnNyYyA9IFVzZXJJY29uO1xuICAgIHJpZ2h0SGVhZGVyRGl2LmFwcGVuZENoaWxkKHVzZXJJY29uKTtcblxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHVzZXJOYW1lLmNsYXNzTmFtZSA9ICd1c2VyTmFtZSc7XG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnQGd1ZXN0VXNlcic7XG4gICAgcmlnaHRIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodXNlck5hbWUpO1xuXG4gICAgLy8gU3BsaXR0aW5nIHRoZSByZXN0IG9mIHRoZSBwYWdlIGluIHR3byBzZWN0aW9uc1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuXG4gICAgLy8xc3QgcGFydCBpcyBhIGxlZnQgYmFyXG4gICAgY29uc3QgbGVmdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRCYXIuaWQgPSAnbGVmdEJhcic7XG4gICAgbGVmdEJhci5jbGFzc05hbWUgPSAnbGVmdEJhcic7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobGVmdEJhcik7XG5cbiAgICBjb25zdCByZXNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc2V0RGl2LmlkID0gJ3Jlc2V0RGl2JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEJhcicpLmFwcGVuZENoaWxkKHJlc2V0RGl2KTtcblxuICAgIGNvbnN0IHJlc2V0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICByZXNldFByb2plY3QuaWQgPSAncmVzZXRQcm9qZWN0cyc7XG4gICAgcmVzZXRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdHMnO1xuICAgIHJlc2V0RGl2LmFwcGVuZENoaWxkKHJlc2V0UHJvamVjdCk7XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=