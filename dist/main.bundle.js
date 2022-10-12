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

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);
    
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

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);
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
    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);
}

function deleteProject() {
    const deleteTitle = currentObject.title;

    window.localStorage.removeItem(deleteTitle);
    document.getElementById('todoSection').removeChild(document.getElementById('fullProjectDiv'));

    document.getElementById(deleteTitle).remove();

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);

}

const addProject = document.getElementById('newProject');
addProject.addEventListener('click', newProject);

function newProject() {

    if (document.getElementById('newProjectDiv') != null) {
        return;
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
    cancelButton.addEventListener('click', cancelProject)
    buttonDiv.appendChild(cancelButton);

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);
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

function cancelProject() {
    document.getElementById('newProjectDiv').remove();



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

    // document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
    // document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

    // if (document.getElementById('fullProjectDiv') != null) {
    //     document.getElementById('fullProjectDiv').remove();
    // }

    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild)
    }

    (0,_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Displaying the basic html template through a function call
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Populating the left Bar

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

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);

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

    if (document.getElementById('todoForm') != null) {
        return;
    }

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

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);

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

        const addProject = document.getElementById('newProject');
        addProject.addEventListener('click', newProject);

        const reset = document.getElementById('resetProjects');
        reset.addEventListener('click', resetProjects);

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

        const addProject = document.getElementById('newProject');
        addProject.addEventListener('click', newProject);

        const reset = document.getElementById('resetProjects');
        reset.addEventListener('click', resetProjects);

    }
}

function confirmToDoChange() {

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

        const addProject = document.getElementById('newProject');
        addProject.addEventListener('click', newProject);

        const reset = document.getElementById('resetProjects');
        reset.addEventListener('click', resetProjects);
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

    const addProject = document.getElementById('newProject');
    addProject.addEventListener('click', newProject);

    const reset = document.getElementById('resetProjects');
    reset.addEventListener('click', resetProjects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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Q047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDhCQUE4QixtREFBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsbURBQU87QUFDNUIsdUJBQXVCLG1EQUFPO0FBQzlCLDBCQUEwQixtREFBTztBQUNqQyxvQkFBb0IsbURBQU87QUFDM0Isd0JBQXdCLG1EQUFPO0FBQy9CLHdCQUF3QixtREFBTztBQUMvQixvQkFBb0IsbURBQU87QUFDM0IsdUJBQXVCLG1EQUFPOztBQUU5Qjs7QUFFQTs7O0FBR0Esb0JBQW9CLHdCQUF3Qjs7QUFFNUM7O0FBRUE7O0FBRUE7O0FBRUEsdURBQXVEO0FBQ3ZELHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFTLElBQUk7QUFDakIsSUFBSSx3REFBUSxJQUFJOztBQUVoQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseUJBQXlCO0FBQzdDLCtEQUErRDtBQUMvRCwyQkFBMkIsbURBQU87QUFDbEM7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseUJBQXlCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDRCQUE0Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBLGtDQUFrQyxvREFBSTs7QUFFdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeitCZTs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxvQkFBb0IseUJBQXlCOztBQUU3QywrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCLE9BQU87O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q3lDOztBQUUxQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVE7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI21haW5TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuLmxlZnRCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5yaWdoSGVhZGVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHhcXG59XFxuXFxuXFxuI3VzZXJJY29uIHtcXG4gICAgaGVpZ2h0OiAyLjI1dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi51c2VyTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcmVzZXREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3UHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlQcm9qZWN0cyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbiNmdWxsUHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jZWRpdGluZ0RpdixcXG4jbmV3UHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZWRpdGluZ0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcbiNuZXdGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDg0LCA1Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzksIDU2KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI3Byb2plY3REaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNuZXd0b0RvLFxcbiNzaG93RGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgbWF4LWhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVkaXRUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDU0LCA1NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9Gb3JtLFxcbiNlZGl0VG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI2Zvcm1VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gYXV0byAvIDUwJSA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVUwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA0NSUgNDUlLyA1MCUgNTAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb1RpdGxlTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jdG9Eb1N0YXR1c0xpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTV2dztcXG59XFxuXFxubGFiZWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25ld1Byb2plY3RVbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuI2N1cnJlbnRUb0RvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4jdG9Eb0JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxNy41JSA1NSUgMTcuNSUgMTAlO1xcbiAgICBmb250LXNpemU6IDEuMzV2dztcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpO1xcbn1cXG5cXG4jYmFyVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNiYXJEZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNiYXJTdGF0dXMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b0RvQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4wNXZ3O1xcbn1cXG5cXG4jdG9Eb1RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xcbn1cXG5cXG4jdG9Eb1N0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNB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XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDExMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XFxufVxcblxcbi5sZWZ0QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy10b3A6IDElO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzJBO1xcbn1cXG5cXG4ucmlnaEhlYWRlckRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcblxcbiN1c2VySWNvbiB7XFxuICAgIGhlaWdodDogMi4yNXZoO1xcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4udXNlck5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3Jlc2V0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld1Byb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0NykgIWltcG9ydGFudDtcXG59XFxuXFxuLm15UHJvamVjdHMge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb1NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4jZnVsbFByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIG1hcmdpbi1yaWdodDogNCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI2VkaXRpbmdEaXYsXFxuI25ld1Byb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI2VkaXRpbmdGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5cXG5cXG4jbmV3Rm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA4NCwgNTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjM5LCA1Nik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDU0LCA1NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b0RvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNwcm9qZWN0RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jbmV3dG9EbyxcXG4jc2hvd0RldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMC41dmg7XFxuICAgIG1heC1oZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvQnV0dG9uRGl2IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3RvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0VG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlVG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA1NCwgNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvRm9ybSxcXG4jZWRpdFRvZG9Gb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNmb3JtVUwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIGF1dG8gLyA1MCUgNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjUlO1xcbn1cXG5cXG4jdG9Eb1VMIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMCUgNDUlIDQ1JS8gNTAlIDUwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjUlO1xcbn1cXG5cXG4jdG9Eb1RpdGxlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3RvRG9UaXRsZUxpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI3RvRG9EZXNjcmlwdGlvbkxpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG5cXG59XFxuXFxuI3RvRG9TdGF0dXNMaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmxhYmVsLFxcbmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNuZXdQcm9qZWN0VWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNjdXJyZW50VG9Eb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuI3RvRG9CYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTcuNSUgNTUlIDE3LjUlIDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjM1dnc7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KTtcXG59XFxuXFxuI2JhclRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYmFyRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYmFyU3RhdHVzIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9Eb0JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxNy41JSA1NSUgMTcuNSUgMTAlO1xcbiAgICBmb250LXNpemU6IDEuMDV2dztcXG59XFxuXFxuI3RvRG9UaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3RvRG9EZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcXG59XFxuXFxuI3RvRG9TdGF0dXMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHRvZG8pIHtcblxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy50b2RvID0gdG9kbztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhdHVzKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBiYXNpY0h0bWwgZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9lZGl0VG9kby5qcyc7XG5cbmJhc2ljSHRtbCgpOyAvL0Rpc3BsYXlpbmcgdGhlIGJhc2ljIGh0bWwgdGVtcGxhdGUgdGhyb3VnaCBhIGZ1bmN0aW9uIGNhbGxcbnByb2plY3RzKCk7IC8vIFBvcHVsYXRpbmcgdGhlIGxlZnQgQmFyXG5cbmxldCBpdGVtcyA9IHsgLy8gUmV0cmlldmluZyB0aGUgbG9jYWwgU3RvcmFnZSBldmVyeXRpbWUgdGhlIHBhZ2UgaXMgbG9hZGVkXG4gICAgLi4ubG9jYWxTdG9yYWdlXG59O1xuXG5sZXQgbGlzdCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW09iamVjdC5rZXlzKGl0ZW1zKVtpXV0pOyAvLyBXZSBzdG9yZSBlYWNoIG9iamVjdCBpbiBsb2NhbFN0b3JhZ2UgaW4gYW4gYXJyYXk7XG4gICAgaXRlbS5jb25zdHJ1Y3RvciA9IFByb2plY3Q7XG4gICAgbGlzdC5wdXNoKGl0ZW0pO1xufVxuXG5jb25zdCBwcm9qZWN0Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpdGxlJyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEJveGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdCwgdHJ1ZSk7XG4gICAgcHJvamVjdEJveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXlUb2RvLCBmYWxzZSk7XG59XG5cbmxldCBjdXJyZW50T2JqZWN0ID0gXCJcIjtcblxuZnVuY3Rpb24gZWRpdFByb2plY3QoKSB7XG5cbiAgICBjb25zdCBteU9iamVjdCA9IGxpc3QuZmluZChpdGVtID0+IGl0ZW0udGl0bGUgPT0gdGhpcy5pZCk7XG5cbiAgICBjdXJyZW50T2JqZWN0ID0gbXlPYmplY3Q7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5yZW1vdmUoKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0RGl2JykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmdWxsUHJvamVjdERpdi5pZCA9ICdmdWxsUHJvamVjdERpdic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykuYXBwZW5kQ2hpbGQoZnVsbFByb2plY3REaXYpO1xuXG4gICAgY29uc3QgZWRpdGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb250YWluZXIgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICBlZGl0aW5nRGl2LmlkID0gJ2VkaXRpbmdEaXYnO1xuICAgIGZ1bGxQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGVkaXRpbmdEaXYpO1xuXG4gICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGlzcGxheS5pZCA9ICdwcm9qZWN0RGlzcGxheSc7XG4gICAgZWRpdGluZ0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCIgKyBjdXJyZW50T2JqZWN0LnRpdGxlO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBzaG93RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNob3dEZXRhaWwuaWQgPSAnc2hvd0RldGFpbHMnO1xuICAgIHNob3dEZXRhaWwudGV4dENvbnRlbnQgPSBcIlNob3cgUHJvamVjdCBkZXRhaWxzXCI7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoc2hvd0RldGFpbCk7XG4gICAgc2hvd0RldGFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dEZXRhaWxzKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKTtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscygpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRm9ybScpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgZWRpdGluZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRpbmdGb3JtLmlkID0gJ2VkaXRpbmdGb3JtJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0RpdicpLmFwcGVuZENoaWxkKGVkaXRpbmdGb3JtKVxuXG4gICAgICAgIGNvbnN0IGZvcm1VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGZvcm1VTC5pZCA9ICdmb3JtVUwnO1xuICAgICAgICBlZGl0aW5nRm9ybS5hcHBlbmRDaGlsZChmb3JtVUwpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgVGl0bGU6XCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dENoYW5nZSc7XG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuXG4gICAgICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZCh0aXRsZUxpKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IERlc2NyaXB0aW9uOlwiO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKTtcblxuICAgICAgICBjb25zdCBkYXRlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IER1ZSBEYXRlOlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3VycmVudERhdGUuaWQgPSAnY3VycmVudERhdGUnO1xuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgY3VycmVudERhdGUuc3R5bGUuY29sb3IgPSAncHVycGxlJztcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZUlucHV0JztcbiAgICAgICAgZGF0ZUlucHV0LnN0eWxlLndpZHRoID0gJzEyNXB4JztcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChjdXJyZW50RGF0ZSk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoZGF0ZUxpKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IFByaW9yaXR5OlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGN1cnJlbnRQcmlvcml0eS5pZCA9ICdjdXJyZW50UHJpb3JpdHknO1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnByaW9yaXR5O1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkuc3R5bGUuY29sb3IgPSAncHVycGxlJztcblxuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBvcHRpb25EZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkRlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb25EZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRGVmYXVsdCk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkxvdy52YWx1ZSA9IFwiTG93XCI7XG4gICAgICAgIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gICAgICAgIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25IaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICAgIG9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG5cbiAgICAgICAgcHJpb3JpdHlMaS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlMaS5hcHBlbmRDaGlsZChjdXJyZW50UHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICAgICAgZm9ybVVMLmFwcGVuZENoaWxkKHByaW9yaXR5TGkpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgU3RhdHVzOlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjdXJyZW50U3RhdHVzLmlkID0gJ2N1cnJlbnRTdGF0dXMnO1xuICAgICAgICBjdXJyZW50U3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC5zdGF0dXM7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMuc3R5bGUuY29sb3IgPSAncHVycGxlJ1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0JztcbiAgICAgICAgc3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBzdGF0dXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzdGF0dXNEZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RlZmF1bHQpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIHN0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCdcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c05vdCk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3RhdHVzUHJvZ3Jlc3MudmFsdWUgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICAgIHN0YXR1c1Byb2dyZXNzLnRleHRDb250ZW50ID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzUHJvZ3Jlc3MpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3RhdHVzRG9uZS52YWx1ZSA9IFwiRG9uZVwiO1xuICAgICAgICBzdGF0dXNEb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNEb25lKTtcblxuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG4gICAgICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKGN1cnJlbnRTdGF0dXMpO1xuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoc3RhdHVzTGkpO1xuXG4gICAgICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XG4gICAgICAgIGVkaXRpbmdGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0QnV0dG9uJztcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXREZXRhaWxzKTtcblxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gQ2hhbmdlKHMpJztcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZUJ1dHRvbic7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGVCdXR0b24nO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGVkaXREZXRhaWxzKCkge1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0Q2hhbmdlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0Jyk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudERhdGUnKTtcbiAgICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFByaW9yaXR5Jyk7XG4gICAgY29uc3QgY3VycmVudFN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50U3RhdHVzJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0Jyk7XG4gICAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c1NlbGVjdCcpO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gXCJcIiAmJiBkZXNjcmlwdGlvbklucHV0LnZhbHVlID09IFwiXCIgJiYgZGF0ZUlucHV0LnZhbHVlID09IFwiXCIgJiYgcHJpb3JpdHlTZWxlY3QudmFsdWUgPT0gXCJcIiAmJiBzdGF0dXNTZWxlY3QudmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCB0aXRsZU9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudGl0bGUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIC8vIGNvbnN0IGVkaXRPYmplY3QgPSBsaXN0W2ldLnRpdGxlIC8vIHRoaXMgdmFyaWFibGUgc3RvcmVzIHRoZSByaWdodCBvYmplY3QgdGl0bGUgYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gb3VyIGxpc3RcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUpO1xuXG4gICAgICAgIGlmICh0aXRsZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudGl0bGUpLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215VG9Eb1RJdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlICsgXCI6VG9kbyhzKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlSW5wdXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC5kdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1c1NlbGVjdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnN0YXR1cyA9IHN0YXR1c1NlbGVjdC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShjdXJyZW50T2JqZWN0KSk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50aXRsZTtcbiAgICAgICAgdGl0bGVPYmplY3QuaWQgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG5cbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnN0YXR1cztcblxuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjdXJyZW50UHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgY3VycmVudFN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKTtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZVRpdGxlID0gY3VycmVudE9iamVjdC50aXRsZTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkZWxldGVUaXRsZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlVGl0bGUpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0cyk7XG5cbn1cblxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIENvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGEgZm9ybVxuICAgIG5ld1Byb2plY3REaXYuaWQgPSAnbmV3UHJvamVjdERpdic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uaWQgPSAnbmV3Rm9ybSc7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBQcm9qZWN0XCI7XG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgZm9ybVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBmb3JtVUwuaWQgPSAnbmV3UHJvamVjdFVsJztcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGZvcm1VTCk7XG5cbiAgICBjb25zdCB0aXRsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIiBQcm9qZWN0IFRpdGxlOlwiO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0NvbXB1dGVyJztcblxuICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVMaS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBmb3JtVUwuYXBwZW5kQ2hpbGQodGl0bGVMaSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgRGVzY3JpcHRpb246XCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkJ1eSBhIG5ldyBjb21wdXRlclwiO1xuXG4gICAgZGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKTtcblxuICAgIGNvbnN0IGRhdGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEdWUgRGF0ZTpcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dCc7XG4gICAgZGF0ZUlucHV0LnN0eWxlLndpZHRoID0gJzEyNXB4JztcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcblxuICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkYXRlTGkpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFByaW9yaXR5OlwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG4gICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgICBvcHRpb25Mb3cudGV4dENvbnRlbnQgPSAnTG93J1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdylcblxuICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbk1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gICAgb3B0aW9uTWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25NZWRpdW0pO1xuXG4gICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbkhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG5cbiAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIGZvcm1VTC5hcHBlbmRDaGlsZChwcmlvcml0eUxpKTtcblxuICAgIGNvbnN0IHN0YXR1c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBTdGF0dXM6XCI7XG5cbiAgICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0JztcbiAgICBzdGF0dXNTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG4gICAgY29uc3Qgc3RhdHVzRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgIHN0YXR1c0RlZmF1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNEZWZhdWx0KTtcblxuICAgIGNvbnN0IHN0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHN0YXR1c05vdC52YWx1ZSA9IFwiTm90IFN0YXJ0ZWRcIjtcbiAgICBzdGF0dXNOb3QudGV4dENvbnRlbnQgPSAnTm90IFN0YXJ0ZWQnO1xuICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNOb3QpO1xuXG4gICAgY29uc3Qgc3RhdHVzUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzdGF0dXNQcm9ncmVzcy52YWx1ZSA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICBzdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzUHJvZ3Jlc3MpO1xuXG4gICAgY29uc3Qgc3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHN0YXR1c0RvbmUudmFsdWUgPSBcIkRvbmVcIjtcbiAgICBzdGF0dXNEb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RvbmUpO1xuXG4gICAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoc3RhdHVzTGFiZWwpO1xuICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKHN0YXR1c1NlbGVjdCk7XG4gICAgZm9ybVVMLmFwcGVuZENoaWxkKHN0YXR1c0xpKTtcblxuICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdidXR0b25EaXYnO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0QnV0dG9uJztcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybUJ1dHRvbk5ldyk7XG5cbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gUHJvamVjdCc7XG4gICAgY29uZmlybUJ1dHRvbi5pZCA9IGNvbmZpcm1CdXR0b247XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbFByb2plY3QpXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJyk7XG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcbn1cblxuXG5mdW5jdGlvbiBjb25maXJtQnV0dG9uTmV3KCkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpO1xuICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNTZWxlY3QnKTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHByaW9yaXR5U2VsZWN0LnZhbHVlID09IFwiXCIgfHwgc3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIHN0YXR1c1NlbGVjdC52YWx1ZSwgW10pO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdPYmplY3QpKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgICAgIHByb2plY3RUaXRsZS5pZCA9IG5ld09iamVjdC50aXRsZVxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdPYmplY3QudGl0bGU7XG4gICAgICAgIGxpc3QucHVzaChuZXdPYmplY3QpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERpdicpLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0RGl2JykucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXlUb2RvKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKTtcblxuXG5cbn1cblxuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpIHtcblxuICAgIC8vQ3JlYXRpbmcgYSBmZXcgcmFuZG9tIHByb2plY3RzIHRvIGRpc3BsYXkgaXQgb24gb3VyIHNjcmVlblxuICAgIGNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdCgnSG9tZScsICdSZW5vdmF0aW5nIG15IEhvbWUnLCAnMjAyMy0xMi0zMScsICdMb3cnLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3Qgc2Nob29sID0gbmV3IFByb2plY3QoJ1NjaG9vbCcsICdGaW5pc2hpbmcgbXkgZGVncmVlJywgJzIwMjMtMTItMzEnLCAnTG93JywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IGdyb2NlcmllcyA9IG5ldyBQcm9qZWN0KCdHcm9jZXJpZXMnLCAnQnV5IG15IGdyb2NlcmllcycsICcyMDIzLTAxLTAxJywgJ0hpZ2gnLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3QgY2FyID0gbmV3IFByb2plY3QoJ05ldyBDYXInLCAnQnV5IGEgbmV3IGNhcicsICcyMDIzLTEyLTMxJywgJ01lZGl1bScsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBydW5uaW5nID0gbmV3IFByb2plY3QoJ0hhbGYtbWFyYXRob24nLCAnUnVubmluZyBhIGhhbGYtbWFyYXRob24nLCAnMjAyMy0wOS0zMCcsICdIaWdoJywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IGV2ZXJlc3QgPSBuZXcgUHJvamVjdCgnQ2xpbWJpbmcgRXZlcmVzdCcsICdDbGltYmluZyBNb3VudCBFdmVyZXN0JywgJzIwMjUtMDYtMzAnLCAnTWVkaXVtJywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IGpvYiA9IG5ldyBQcm9qZWN0KCdOZXcgSm9iJywgJ0NoYW5nZSBmb3IgYSBiZXR0ZXIgam9iJywgJzIwMjItMTItMzEnLCAnTG93JywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IGNvZGluZyA9IG5ldyBQcm9qZWN0KCdDb2RpbmcnLCAnTGVhcm4gdG8gY29kZScsICcyMDIzLTEwLTMxJywgJ01lZGl1bScsICdOb3QgU3RhcnRlZCcsIFtdKTtcblxuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtob21lLCBzY2hvb2wsIGdyb2NlcmllcywgY2FyLCBydW5uaW5nLCBldmVyZXN0LCBqb2IsIGNvZGluZ107XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBteVByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obXlQcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShteVByb2plY3QpKTtcblxuICAgIH1cblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGl2JykucmVtb3ZlKCk7IC8vIFJlbW92aW5nIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGRhdGVkO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvU2VjdGlvbicpLnJlbW92ZSgpOyAvLyBSZW1vdmluZyBlbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBkYXRlZDtcblxuICAgIC8vIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLnJlbW92ZSgpO1xuICAgIC8vIH1cblxuICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBiYXNpY0h0bWwoKTsgLy9EaXNwbGF5aW5nIHRoZSBiYXNpYyBodG1sIHRlbXBsYXRlIHRocm91Z2ggYSBmdW5jdGlvbiBjYWxsXG4gICAgcHJvamVjdHMoKTsgLy8gUG9wdWxhdGluZyB0aGUgbGVmdCBCYXJcblxuICAgIGl0ZW1zID0geyAvLyBSZXRyaWV2aW5nIHRoZSBsb2NhbCBTdG9yYWdlIGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgICAgICAgLi4ubG9jYWxTdG9yYWdlXG4gICAgfTtcblxuICAgIGxpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW09iamVjdC5rZXlzKGl0ZW1zKVtpXV0pOyAvLyBXZSBzdG9yZSBlYWNoIG9iamVjdCBpbiBsb2NhbFN0b3JhZ2UgaW4gYW4gYXJyYXk7XG4gICAgICAgIGl0ZW0uY29uc3RydWN0b3IgPSBQcm9qZWN0O1xuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaXRsZScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Qm94ZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdCwgdHJ1ZSk7XG4gICAgICAgIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15VG9kbywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKTtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xuXG4gICAgY3VycmVudE9iamVjdCA9IFwiXCI7XG59XG5cblxuZnVuY3Rpb24gbXlUb2RvKCkge1xuXG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb250YWluZXIgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICB0b0RvRGl2LmlkID0gJ3RvRG9EaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLmFwcGVuZCh0b0RvRGl2KTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvVGl0bGUuaWQgPSAnbXlUb0RvVEl0bGUnO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QudGl0bGUgKyBcIjogVG9kbyhzKVwiO1xuICAgIHRvRG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IG5ld3RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3dG9Eby5pZCA9ICduZXd0b0RvJztcbiAgICBuZXd0b0RvLnRleHRDb250ZW50ID0gXCJBZGQgdG8gZG9cIjtcbiAgICBuZXd0b0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVG9kbyk7XG5cbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKG5ld3RvRG8pO1xuXG4gICAgY29uc3QgY3VycmVudFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50VG9Eb0Rpdi5pZCA9ICdjdXJyZW50VG9Eb0Rpdic7XG4gICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50VG9Eb0Rpdik7XG5cbiAgICBjb25zdCB0b0RvQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm94Jyk7XG4gICAgdG9Eb0Jhci5pZCA9ICd0b0RvQmFyJztcbiAgICBjdXJyZW50VG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvQmFyKTtcblxuICAgIGNvbnN0IGJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJhclRpdGxlLmlkID0gJ2JhclRpdGxlJztcbiAgICBiYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhclRpdGxlKTtcblxuICAgIGNvbnN0IGJhckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJhckRlc2NyaXB0aW9uLmlkID0gJ2JhckRlc2NyaXB0aW9uJztcbiAgICBiYXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhckRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGJhclN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBiYXJTdGF0dXMuaWQgPSAnYmFyU3RhdHVzJztcbiAgICBiYXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN0YXR1c1wiXG4gICAgdG9Eb0Jhci5hcHBlbmRDaGlsZChiYXJTdGF0dXMpO1xuXG4gICAgbGV0IGN1cnJlbnRUb0RvbGlzdCA9IGN1cnJlbnRPYmplY3QudG9kbztcblxuICAgIGlmIChjdXJyZW50VG9Eb2xpc3QubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFRvRG9saXN0Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKTtcbiAgICAgICAgICAgIHRvRG9Cb3guY2xhc3NOYW1lID0gJ3RvRG9Cb3gnO1xuICAgICAgICAgICAgdG9Eb0JveC5pZCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZSArIFwiX0JveFwiO1xuICAgICAgICAgICAgY3VycmVudFRvRG9EaXYuYXBwZW5kQ2hpbGQodG9Eb0JveCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRvRG9UaXRsZS5pZCA9ICd0b0RvVGl0bGUnO1xuICAgICAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFRvRG9saXN0W2pdLnRpdGxlXG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRvRG9EZXNjcmlwdGlvbi5pZCA9ICd0b0RvRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFRvRG9saXN0W2pdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdG9Eb1N0YXR1cy5pZCA9ICd0b0RvU3RhdHVzJztcbiAgICAgICAgICAgIHRvRG9TdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50VG9Eb2xpc3Rbal0uc3RhdHVzO1xuICAgICAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0b0RvRWRpdC5pZCA9IGN1cnJlbnRUb0RvbGlzdFtqXS50aXRsZTtcbiAgICAgICAgICAgIHRvRG9FZGl0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgdG9Eb0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9kbyk7XG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9FZGl0KTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uaWQgPSAndG9kb0Zvcm0nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgIGNvbnN0IHRvRG9VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9Eb1VMLmlkID0gJ3RvRG9VTCc7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1VMKTtcblxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b0RvVGl0bGUuaWQgPSAndG9Eb1RpdGxlJztcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvRG9UaXRsZUxpLmlkID0gJ3RvRG9UaXRsZUxpJztcblxuICAgIGNvbnN0IHRvRG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b0RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBUaXRsZTpcIjtcblxuICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b0RvVGl0bGVJbnB1dC5pZCA9ICd0b0RvVGl0bGVJbnB1dCc7XG5cbiAgICB0b0RvVGl0bGVMaS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMYWJlbCk7XG4gICAgdG9Eb1RpdGxlTGkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlSW5wdXQpO1xuICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMaSk7XG5cbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uTGkuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uTGknXG5cbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gRGVzY3JpcHRpb246XCI7XG5cbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnO1xuXG4gICAgdG9Eb0Rlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbklucHV0KTtcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uTGkpO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b0RvU3RhdHVzTGkuaWQgPSAndG9Eb1N0YXR1c0xpJztcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9Eb1N0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFN0YXR1czpcIjtcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmlkID0gJ3RvRG9TdGF0dXNTZWxlY3QnO1xuICAgIHRvRG9TdGF0dXNTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRvRG9TdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgdG9Eb1N0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCdcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNOb3QpO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c1Byb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdG9Eb1N0YXR1c1Byb2dyZXNzLnZhbHVlID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgIHRvRG9TdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNQcm9ncmVzcyk7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRvRG9TdGF0dXNEb25lLnZhbHVlID0gXCJEb25lXCI7XG4gICAgdG9Eb1N0YXR1c0RvbmUudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcbiAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNEb25lKTtcblxuICAgIHRvRG9TdGF0dXNMaS5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGFiZWwpO1xuICAgIHRvRG9TdGF0dXNMaS5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzU2VsZWN0KTtcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0xpKTtcblxuICAgIGNvbnN0IHRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9Eb0J1dHRvbi5pZCA9ICd0b0RvQnV0dG9uJztcbiAgICB0b0RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtIFRvZG9cIjtcbiAgICB0b0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVUb0RvKTtcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb0J1dHRvbik7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJyk7XG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcblxufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9EbygpIHtcblxuICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UaXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnKTtcbiAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9TdGF0dXNTZWxlY3QnKTtcblxuXG4gICAgaWYgKHRvRG9UaXRsZUlucHV0LnZhbHVlID09IFwiXCIgfHwgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT0gXCJcIiB8fCB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb09iamVjdCA9IG5ldyBUb2RvKHRvRG9UaXRsZUlucHV0LnZhbHVlLCB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSk7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChuZXdUb2RvT2JqZWN0KTtcblxuICAgICAgICBjdXJyZW50T2JqZWN0LnRvZG8gPSB0b2RvTGlzdDtcblxuICAgICAgICBjb25zdCB0b0RvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm94Jyk7XG4gICAgICAgIHRvRG9Cb3guY2xhc3NOYW1lID0gJ3RvRG9Cb3gnO1xuICAgICAgICB0b0RvQm94LmlkID0gdG9Eb1RpdGxlSW5wdXQudmFsdWUgKyBcIl9Cb3hcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUb0RvRGl2JykuYXBwZW5kQ2hpbGQodG9Eb0JveCk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b0RvVGl0bGUuaWQgPSAndG9Eb1RpdGxlJztcbiAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb1RpdGxlSW5wdXQudmFsdWVcbiAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLmlkID0gJ3RvRG9EZXNjcmlwdGlvbic7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9Eb1N0YXR1cy5pZCA9ICd0b0RvU3RhdHVzJztcbiAgICAgICAgdG9Eb1N0YXR1cy50ZXh0Q29udGVudCA9IHRvRG9TdGF0dXNTZWxlY3QudmFsdWU7XG4gICAgICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb1N0YXR1cyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9FZGl0LmNsYXNzTmFtZSA9ICd0b0RvRWRpdCdcbiAgICAgICAgdG9Eb0VkaXQuaWQgPSBuZXdUb2RvT2JqZWN0LnRpdGxlO1xuICAgICAgICB0b0RvRWRpdC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgdG9Eb0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb2RvKTtcbiAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvRWRpdCk7XG5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRPYmplY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3QpKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuXG4gICAgICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UHJvamVjdHMnKTtcbiAgICAgICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9kbygpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKSAhPSBudWxsKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kb0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBjdXJyZW50VG9Eb2xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUb2RvID0gY3VycmVudFRvRG9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09IHRoaXMuaWQpXG5cbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0Zvcm0uaWQgPSAnZWRpdFRvZG9Gb3JtJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IHRvRG9VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvRG9VTC5pZCA9ICd0b0RvVUwnO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVUwpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUb0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGVkaXRUb0RvVGl0bGUuaWQgPSAnZWRpdFRvRG9UaXRsZSc7XG4gICAgICAgIGVkaXRUb0RvVGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUb2RvOiAnICsgY3VycmVudFRvZG8udGl0bGU7XG4gICAgICAgIHRvRG9VTC5hcHBlbmRDaGlsZChlZGl0VG9Eb1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRvRG9UaXRsZUxpLmlkID0gJ3RvRG9UaXRsZUxpJztcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRvRG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFRpdGxlOlwiO1xuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9Eb1RpdGxlSW5wdXQuaWQgPSAndG9Eb1RpdGxlSW5wdXQnXG4gICAgICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxhYmVsKTtcbiAgICAgICAgdG9Eb1RpdGxlTGkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlSW5wdXQpO1xuICAgICAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGkpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uTGkuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uTGknXG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b0RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBEZXNjcmlwdGlvbjpcIjtcblxuICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbklucHV0LmlkID0gJ3RvRG9EZXNjcmlwdGlvbklucHV0JztcblxuICAgICAgICB0b0RvRGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxpKTtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b0RvU3RhdHVzTGkuaWQgPSAndG9Eb1N0YXR1c0xpJztcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b0RvU3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gU3RhdHVzOlwiO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5pZCA9ICd0b0RvU3RhdHVzU2VsZWN0JztcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5zdHlsZS53aWR0aCA9ICcxMzBweCc7XG5cblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9Eb1N0YXR1c0VtcHR5LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdG9Eb1N0YXR1c0VtcHR5LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0VtcHR5KTtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzTm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvRG9TdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIHRvRG9TdGF0dXNOb3QudGV4dENvbnRlbnQgPSAnTm90IFN0YXJ0ZWQnO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNOb3QpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b0RvU3RhdHVzUHJvZ3Jlc3MudmFsdWUgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICAgIHRvRG9TdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzUHJvZ3Jlc3MpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9TdGF0dXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvRG9TdGF0dXNEb25lLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgIHRvRG9TdGF0dXNEb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0RvbmUpO1xuXG4gICAgICAgIHRvRG9TdGF0dXNMaS5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGFiZWwpO1xuICAgICAgICB0b0RvU3RhdHVzTGkuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c1NlbGVjdCk7XG4gICAgICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTGkpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0J1dHRvbkRpdi5pZCA9ICd0b2RvQnV0dG9uRGl2JztcbiAgICAgICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvZG9CdXR0b25EaXYpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBlZGl0VG9Eb0J1dHRvbi5pZCA9IGN1cnJlbnRUb2RvLnRpdGxlICsgXCJfQnRuXCI7XG4gICAgICAgIGVkaXRUb0RvQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0VG9Eb0J1dHRvbidcbiAgICAgICAgZWRpdFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm0gQ2hhbmdlKHMpXCI7XG4gICAgICAgIGVkaXRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybVRvRG9DaGFuZ2UpO1xuICAgICAgICB0b2RvQnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRUb0RvQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWxldGVUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxldGVUb0RvQnV0dG9uLmlkID0gY3VycmVudFRvZG8udGl0bGUgKyBcIl9CdG5cIjtcbiAgICAgICAgZGVsZXRlVG9Eb0J1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlVG9Eb0J1dHRvbidcbiAgICAgICAgZGVsZXRlVG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRvZG9cIjtcbiAgICAgICAgZGVsZXRlVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG8pO1xuICAgICAgICB0b2RvQnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xuICAgICAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtVG9Eb0NoYW5nZSgpIHtcblxuICAgIGxldCBpdGVtSW5kZXggPSAodGhpcy5pZCkuaW5kZXhPZihcIl9cIik7XG5cbiAgICBsZXQgaXRlbSA9ICh0aGlzLmlkKS5zbGljZSgwLCBpdGVtSW5kZXgpO1xuXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50T2JqZWN0LnRvZG8uZmluZEluZGV4KG9iamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBvYmplY3QudGl0bGUgPT0gaXRlbTtcbiAgICB9KVxuXG4gICAgY29uc3QgdG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1RpdGxlSW5wdXQnKTtcbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvRGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IHRvRG9TdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1N0YXR1c1NlbGVjdCcpO1xuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvVGl0bGUnKTtcbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9Eb1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvU3RhdHVzJyk7XG5cbiAgICBpZiAodG9Eb1RpdGxlSW5wdXQudmFsdWUgPT0gXCJcIiAmJiB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiICYmIHRvRG9TdGF0dXNTZWxlY3QudmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAodG9Eb1RpdGxlSW5wdXQudmFsdWUgIT0gXCJcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnRpdGxlID0gdG9Eb1RpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZSArIFwiX0J0blwiO1xuXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtICsgXCJfQm94XCIpO1xuICAgICAgICAgICAgYm94LmlkID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZSArIFwiX0JveFwiO1xuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICAgICAgZWRpdC5pZCA9IGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0udGl0bGU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLmRlc2NyaXB0aW9uID0gdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b0RvU3RhdHVzU2VsZWN0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0uc3RhdHVzID0gdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShjdXJyZW50T2JqZWN0KSk7XG4gICAgICAgIHRvRG9TdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnN0YXR1cztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb2RvRm9ybScpLnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQcm9qZWN0cycpO1xuICAgICAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9EbygpIHtcblxuICAgIGxldCBjdXJyZW50VG9Eb2xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICBsZXQgaXRlbUluZGV4ID0gKHRoaXMuaWQpLmluZGV4T2YoXCJfXCIpO1xuXG4gICAgbGV0IGl0ZW0gPSAodGhpcy5pZCkuc2xpY2UoMCwgaXRlbUluZGV4KTtcblxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudE9iamVjdC50b2RvLmZpbmRJbmRleChvYmplY3QgPT4ge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnRpdGxlID09IGl0ZW1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZSArIFwiX0JveFwiKS5yZW1vdmUoKTtcblxuICAgIGN1cnJlbnRPYmplY3QudG9kbyA9IGN1cnJlbnRUb0RvbGlzdC5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC50aXRsZSAhPSBpdGVtKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kb0Zvcm0nKS5yZW1vdmUoKTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShjdXJyZW50T2JqZWN0KSk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJyk7XG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcblxuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TZWN0aW9uJyk7XG5cbiAgICAvLzFzdCBwYXJ0IGlzIGEgbGVmdCBiYXJcbiAgICBjb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRCYXInKTtcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmlkID0gJ3Byb2plY3REaXYnO1xuICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gJ3Byb2plY3REaXYnO1xuICAgIGxlZnRCYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBwcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSAnbmV3UHJvamVjdCc7XG4gICAgbmV3UHJvamVjdC5pZCA9ICduZXdQcm9qZWN0JztcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gICAgLy9TcGFuIHRhZyBmb3IgbXkgcHJvamVjdCBwcm9qZWN0TGlzdFxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbXlQcm9qZWN0cy5jbGFzc05hbWUgPSAnbXlQcm9qZWN0cyc7XG4gICAgbXlQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChteVByb2plY3RzKTtcblxuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBsZXQgaXRlbXMgPSB7IC8vIFJldHJpZXZpbmcgdGhlIGxvY2FsIFN0b3JhZ2UgZXZlcnl0aW1lIHRoZSBwYWdlIGlzIGxvYWRlZFxuICAgICAgICAuLi5sb2NhbFN0b3JhZ2VcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShpdGVtc1tPYmplY3Qua2V5cyhpdGVtcylbaV1dKTsgLy8gV2Ugc3RvcmUgZWFjaCBvYmplY3QgaW4gbG9jYWxTdG9yYWdlIGluIGFuIGFycmF5XG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHsgLy8gSXRlcmF0aW5nIHRvIGRpc3BsYXkgb3VyIG9iamVjdHNcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJztcbiAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gbGlzdFtpXS50aXRsZVxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfVxufSIsImltcG9ydCBVc2VySWNvbiBmcm9tICcuL3V0aWxpc2F0ZXVyLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2ljSHRtbCgpIHtcblxuICAgIC8vVG9wIGJhciBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gUGFnZSBUaXRsZVxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaGVyby5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgaGVyby50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vUmlnaHQgUGFydCAtIEhlYWRlclxuICAgIGNvbnN0IHJpZ2h0SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ3JpZ2hIZWFkZXJEaXYnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodEhlYWRlckRpdik7XG5cbiAgICBjb25zdCB1c2VySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHVzZXJJY29uLmlkID0gJ3VzZXJJY29uJztcbiAgICB1c2VySWNvbi5zcmMgPSBVc2VySWNvbjtcbiAgICByaWdodEhlYWRlckRpdi5hcHBlbmRDaGlsZCh1c2VySWNvbik7XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB1c2VyTmFtZS5jbGFzc05hbWUgPSAndXNlck5hbWUnO1xuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJ0BndWVzdFVzZXInO1xuICAgIHJpZ2h0SGVhZGVyRGl2LmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcblxuICAgIC8vIFNwbGl0dGluZyB0aGUgcmVzdCBvZiB0aGUgcGFnZSBpbiB0d28gc2VjdGlvbnNcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuICAgIC8vMXN0IHBhcnQgaXMgYSBsZWZ0IGJhclxuICAgIGNvbnN0IGxlZnRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0QmFyLmlkID0gJ2xlZnRCYXInO1xuICAgIGxlZnRCYXIuY2xhc3NOYW1lID0gJ2xlZnRCYXInO1xuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGxlZnRCYXIpO1xuXG4gICAgLy8gMm5kIHBhcnQgaXMgYSBkaXYgdGFraW5nIDc1JSBvZiB0aGUgcGFnZSdzIHdpZHRoXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5pZCA9ICd0b2RvU2VjdGlvbic7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuICAgIGNvbnN0IHJlc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXREaXYuaWQgPSAncmVzZXREaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QmFyJykuYXBwZW5kQ2hpbGQocmVzZXREaXYpO1xuXG4gICAgY29uc3QgcmVzZXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJlc2V0UHJvamVjdC5pZCA9ICdyZXNldFByb2plY3RzJztcbiAgICByZXNldFByb2plY3QudGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0cyc7XG4gICAgcmVzZXREaXYuYXBwZW5kQ2hpbGQocmVzZXRQcm9qZWN0KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==