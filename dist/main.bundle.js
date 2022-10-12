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


    if (document.getElementById('fullProjectDiv') != null) {

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
        cancelButton.addEventListener('click', cancelProject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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Q047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7O0FBR0EsNkRBQTZEO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTiw4QkFBOEIsbURBQU87QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxxQkFBcUIsbURBQU87QUFDNUIsdUJBQXVCLG1EQUFPO0FBQzlCLDBCQUEwQixtREFBTztBQUNqQyxvQkFBb0IsbURBQU87QUFDM0Isd0JBQXdCLG1EQUFPO0FBQy9CLHdCQUF3QixtREFBTztBQUMvQixvQkFBb0IsbURBQU87QUFDM0IsdUJBQXVCLG1EQUFPOztBQUU5Qjs7QUFFQTs7O0FBR0Esb0JBQW9CLHdCQUF3Qjs7QUFFNUM7O0FBRUE7O0FBRUE7O0FBRUEsb0RBQW9EO0FBQ3BELHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLElBQUksd0RBQVE7O0FBRVosY0FBYztBQUNkO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHlCQUF5QjtBQUM3QywrREFBK0Q7QUFDL0QsMkJBQTJCLG1EQUFPO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHlCQUF5Qjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qiw0QkFBNEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUEsa0NBQWtDLG9EQUFJOztBQUV0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuN0JlOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHlCQUF5Qjs7QUFFN0MsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQixPQUFPOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbER5Qzs7QUFFMUI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFRO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbn1cXG5cXG4ubGVmdEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjcyQTtcXG59XFxuXFxuLnJpZ2hIZWFkZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweFxcbn1cXG5cXG5cXG4jdXNlckljb24ge1xcbiAgICBoZWlnaHQ6IDIuMjV2aDtcXG4gICAgbWluLWhlaWdodDogMThweDtcXG59XFxuXFxuLnVzZXJOYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNyZXNldERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KTtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teVByb2plY3RzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuI2Z1bGxQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNlZGl0aW5nRGl2LFxcbiNuZXdQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NzA7XFxufVxcblxcbiNlZGl0aW5nRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuI25ld0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgODQsIDU3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWxCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIzOSwgNTYpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA1NCwgNTQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9Eb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jcHJvamVjdERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuI25ld3RvRG8sXFxuI3Nob3dEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0J1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdFRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZVRvRG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kb0Zvcm0sXFxuI2VkaXRUb2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZm9ybVVMIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byBhdXRvIC8gNTAlIDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDQ1JSA0NSUvIDUwJSA1MCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1JTtcXG59XFxuXFxuI3RvRG9UaXRsZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiN0b0RvVGl0bGVMaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb25MaSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxufVxcblxcbiN0b0RvU3RhdHVzTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmV3UHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jY3VycmVudFRvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbiN0b0RvQmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXZ3O1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbiNiYXJUaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2JhckRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2JhclN0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9Cb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTcuNSUgNTUlIDE3LjUlIDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjA1dnc7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XFxufVxcblxcbiN0b0RvU3RhdHVzIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFD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SSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI21haW5TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuLmxlZnRCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI3MkE7XFxufVxcblxcbi5yaWdoSGVhZGVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHhcXG59XFxuXFxuXFxuI3VzZXJJY29uIHtcXG4gICAgaGVpZ2h0OiAyLjI1dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi51c2VyTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcmVzZXREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDE0MSwgMTY3LCA0Nyk7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3UHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTQxLCAxNjcsIDQ3KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlQcm9qZWN0cyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbiNmdWxsUHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jZWRpdGluZ0RpdixcXG4jbmV3UHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHJnYigxNDEsIDE2NywgNDcpO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTcwO1xcbn1cXG5cXG4jZWRpdGluZ0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcbiNuZXdGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDg0LCA1Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDAuMjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzksIDU2KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMC4yNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNTQsIDU0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAwLjI1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvRG9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMTQxLCAxNjcsIDQ3KTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICMxMTE7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI3Byb2plY3REaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNuZXd0b0RvLFxcbiNzaG93RGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgbWF4LWhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9CdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVkaXRUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVUb0RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDU0LCA1NCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG9Gb3JtLFxcbiNlZGl0VG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmdiKDE0MSwgMTY3LCA0Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTtcXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDU3MDtcXG59XFxuXFxuI2Zvcm1VTCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gYXV0byAvIDUwJSA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVUwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA0NSUgNDUlLyA1MCUgNTAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMS4yNSU7XFxufVxcblxcbiN0b0RvVGl0bGUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jdG9Eb1RpdGxlTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uTGkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jdG9Eb1N0YXR1c0xpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTV2dztcXG59XFxuXFxubGFiZWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25ld1Byb2plY3RVbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuI2N1cnJlbnRUb0RvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4jdG9Eb0JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxNy41JSA1NSUgMTcuNSUgMTAlO1xcbiAgICBmb250LXNpemU6IDEuMzV2dztcXG4gICAgY29sb3I6IHJnYigxNDEsIDE2NywgNDcpO1xcbn1cXG5cXG4jYmFyVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNiYXJEZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNiYXJTdGF0dXMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b0RvQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDE3LjUlIDU1JSAxNy41JSAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4wNXZ3O1xcbn1cXG5cXG4jdG9Eb1RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xcbn1cXG5cXG4jdG9Eb1N0YXR1cyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgdG9kbykge1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJhc2ljSHRtbCBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2VkaXRUb2RvLmpzJztcblxuYmFzaWNIdG1sKCk7IC8vRGlzcGxheWluZyB0aGUgYmFzaWMgaHRtbCB0ZW1wbGF0ZSB0aHJvdWdoIGEgZnVuY3Rpb24gY2FsbFxucHJvamVjdHMoKTsgLy8gUG9wdWxhdGluZyB0aGUgbGVmdCBCYXJcblxubGV0IGl0ZW1zID0geyAvLyBSZXRyaWV2aW5nIHRoZSBsb2NhbCBTdG9yYWdlIGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgICAuLi5sb2NhbFN0b3JhZ2Vcbn07XG5cbmxldCBsaXN0ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbXNbT2JqZWN0LmtleXMoaXRlbXMpW2ldXSk7IC8vIFdlIHN0b3JlIGVhY2ggb2JqZWN0IGluIGxvY2FsU3RvcmFnZSBpbiBhbiBhcnJheTtcbiAgICBpdGVtLmNvbnN0cnVjdG9yID0gUHJvamVjdDtcbiAgICBsaXN0LnB1c2goaXRlbSk7XG59XG5cbmNvbnN0IHByb2plY3RCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VGl0bGUnKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Qm94ZXMubGVuZ3RoOyBpKyspIHtcblxuICAgIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0LCB0cnVlKTtcbiAgICBwcm9qZWN0Qm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVRvZG8sIGZhbHNlKTtcbn1cblxubGV0IGN1cnJlbnRPYmplY3QgPSBcIlwiO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcblxuICAgIGNvbnN0IG15T2JqZWN0ID0gbGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PSB0aGlzLmlkKTtcblxuICAgIGN1cnJlbnRPYmplY3QgPSBteU9iamVjdDtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLnJlbW92ZSgpO1xuXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdERpdicpICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZ1bGxQcm9qZWN0RGl2LmlkID0gJ2Z1bGxQcm9qZWN0RGl2JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1NlY3Rpb24nKS5hcHBlbmRDaGlsZChmdWxsUHJvamVjdERpdik7XG5cbiAgICBjb25zdCBlZGl0aW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIENvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGEgZm9ybVxuICAgIGVkaXRpbmdEaXYuaWQgPSAnZWRpdGluZ0Rpdic7XG4gICAgZnVsbFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZWRpdGluZ0Rpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXNwbGF5LmlkID0gJ3Byb2plY3REaXNwbGF5JztcbiAgICBlZGl0aW5nRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJztcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIiArIGN1cnJlbnRPYmplY3QudGl0bGU7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IHNob3dEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hvd0RldGFpbC5pZCA9ICdzaG93RGV0YWlscyc7XG4gICAgc2hvd0RldGFpbC50ZXh0Q29udGVudCA9IFwiU2hvdyBQcm9qZWN0IGRldGFpbHNcIjtcbiAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChzaG93RGV0YWlsKTtcbiAgICBzaG93RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0RldGFpbHMpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscygpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRm9ybScpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgZWRpdGluZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRpbmdGb3JtLmlkID0gJ2VkaXRpbmdGb3JtJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGluZ0RpdicpLmFwcGVuZENoaWxkKGVkaXRpbmdGb3JtKVxuXG4gICAgICAgIGNvbnN0IGZvcm1VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGZvcm1VTC5pZCA9ICdmb3JtVUwnO1xuICAgICAgICBlZGl0aW5nRm9ybS5hcHBlbmRDaGlsZChmb3JtVUwpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgVGl0bGU6XCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dENoYW5nZSc7XG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuXG4gICAgICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIHRpdGxlTGkuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZCh0aXRsZUxpKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IERlc2NyaXB0aW9uOlwiO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKTtcblxuICAgICAgICBjb25zdCBkYXRlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IER1ZSBEYXRlOlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3VycmVudERhdGUuaWQgPSAnY3VycmVudERhdGUnO1xuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgY3VycmVudERhdGUuc3R5bGUuY29sb3IgPSAncHVycGxlJztcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZUlucHV0JztcbiAgICAgICAgZGF0ZUlucHV0LnN0eWxlLndpZHRoID0gJzEyNXB4JztcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChjdXJyZW50RGF0ZSk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoZGF0ZUxpKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0IFByaW9yaXR5OlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGN1cnJlbnRQcmlvcml0eS5pZCA9ICdjdXJyZW50UHJpb3JpdHknO1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LnByaW9yaXR5O1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkuc3R5bGUuY29sb3IgPSAncHVycGxlJztcblxuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBvcHRpb25EZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkRlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb25EZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRGVmYXVsdCk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkxvdy52YWx1ZSA9IFwiTG93XCI7XG4gICAgICAgIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gICAgICAgIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25IaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICAgIG9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG5cbiAgICAgICAgcHJpb3JpdHlMaS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlMaS5hcHBlbmRDaGlsZChjdXJyZW50UHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUxpLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICAgICAgZm9ybVVMLmFwcGVuZENoaWxkKHByaW9yaXR5TGkpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3QgU3RhdHVzOlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjdXJyZW50U3RhdHVzLmlkID0gJ2N1cnJlbnRTdGF0dXMnO1xuICAgICAgICBjdXJyZW50U3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC5zdGF0dXM7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMuc3R5bGUuY29sb3IgPSAncHVycGxlJ1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0JztcbiAgICAgICAgc3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBzdGF0dXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzdGF0dXNEZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RlZmF1bHQpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIHN0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCdcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c05vdCk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3RhdHVzUHJvZ3Jlc3MudmFsdWUgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICAgIHN0YXR1c1Byb2dyZXNzLnRleHRDb250ZW50ID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzUHJvZ3Jlc3MpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3RhdHVzRG9uZS52YWx1ZSA9IFwiRG9uZVwiO1xuICAgICAgICBzdGF0dXNEb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNEb25lKTtcblxuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG4gICAgICAgIHN0YXR1c0xpLmFwcGVuZENoaWxkKGN1cnJlbnRTdGF0dXMpO1xuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoc3RhdHVzTGkpO1xuXG4gICAgICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XG4gICAgICAgIGVkaXRpbmdGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0QnV0dG9uJztcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXREZXRhaWxzKTtcblxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gQ2hhbmdlKHMpJztcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZUJ1dHRvbic7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGVCdXR0b24nO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlZGl0RGV0YWlscygpIHtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dENoYW5nZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnREYXRlJyk7XG4gICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRQcmlvcml0eScpO1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFN0YXR1cycpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpO1xuICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNTZWxlY3QnKTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09IFwiXCIgJiYgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiICYmIGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiICYmIHByaW9yaXR5U2VsZWN0LnZhbHVlID09IFwiXCIgJiYgc3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdGl0bGVPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50T2JqZWN0LnRpdGxlKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICAvLyBjb25zdCBlZGl0T2JqZWN0ID0gbGlzdFtpXS50aXRsZSAvLyB0aGlzIHZhcmlhYmxlIHN0b3JlcyB0aGUgcmlnaHQgb2JqZWN0IHRpdGxlIGJlZm9yZSByZW1vdmluZyBpdCBmcm9tIG91ciBsaXN0XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50T2JqZWN0LnRpdGxlKTtcblxuICAgICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50T2JqZWN0LnRpdGxlKS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVRvRG9USXRsZScpLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZSArIFwiOlRvZG8ocylcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QuZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHlTZWxlY3QudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC5wcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXNTZWxlY3QudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC5zdGF0dXMgPSBzdGF0dXNTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudE9iamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdCkpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG4gICAgICAgIHRpdGxlT2JqZWN0LmlkID0gY3VycmVudE9iamVjdC50aXRsZTtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBjdXJyZW50T2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjdXJyZW50U3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC5zdGF0dXM7XG5cbiAgICAgICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqZWN0LmR1ZURhdGU7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgY3VycmVudFByaW9yaXR5LnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVUaXRsZSA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGVsZXRlVGl0bGUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvU2VjdGlvbicpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZVRpdGxlKS5yZW1vdmUoKTtcblxufVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcblxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpICE9IG51bGwpIHtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKSAhPSBudWxsIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG5cblxuXG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0aW5nRGl2JykgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRpbmdEaXYnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb250YWluZXIgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICAgICAgbmV3UHJvamVjdERpdi5pZCA9ICduZXdQcm9qZWN0RGl2JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9TZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbmV3Rm9ybS5pZCA9ICduZXdGb3JtJztcbiAgICAgICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFByb2plY3RcIjtcbiAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGZvcm1VTC5pZCA9ICduZXdQcm9qZWN0VWwnO1xuICAgICAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGZvcm1VTCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIiBQcm9qZWN0IFRpdGxlOlwiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xuICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0NvbXB1dGVyJztcblxuICAgICAgICB0aXRsZUxpLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICB0aXRsZUxpLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQodGl0bGVMaSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgRGVzY3JpcHRpb246XCI7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkJ1eSBhIG5ldyBjb21wdXRlclwiO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIGZvcm1VTC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpKTtcblxuICAgICAgICBjb25zdCBkYXRlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEdWUgRGF0ZTpcIjtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZUlucHV0JztcbiAgICAgICAgZGF0ZUlucHV0LnN0eWxlLndpZHRoID0gJzEyNXB4JztcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICAgICAgZGF0ZUxpLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVMaS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoZGF0ZUxpKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBQcmlvcml0eTpcIjtcblxuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgICAgICAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdydcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25NZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICAgICAgICBvcHRpb25NZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25NZWRpdW0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICAgICAgICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuXG4gICAgICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHByaW9yaXR5TGkuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgU3RhdHVzOlwiO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzdGF0dXNTZWxlY3QuaWQgPSAnc3RhdHVzU2VsZWN0JztcbiAgICAgICAgc3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgICAgICBjb25zdCBzdGF0dXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RlZmF1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzdGF0dXNEZWZhdWx0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c0RlZmF1bHQpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0dXNOb3QudmFsdWUgPSBcIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIHN0YXR1c05vdC50ZXh0Q29udGVudCA9ICdOb3QgU3RhcnRlZCc7XG4gICAgICAgIHN0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZChzdGF0dXNOb3QpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1Byb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c1Byb2dyZXNzLnZhbHVlID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICBzdGF0dXNQcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHN0YXR1c1Byb2dyZXNzKTtcblxuICAgICAgICBjb25zdCBzdGF0dXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXR1c0RvbmUudmFsdWUgPSBcIkRvbmVcIjtcbiAgICAgICAgc3RhdHVzRG9uZS50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICBzdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdHVzRG9uZSk7XG5cbiAgICAgICAgc3RhdHVzTGkuYXBwZW5kQ2hpbGQoc3RhdHVzTGFiZWwpO1xuICAgICAgICBzdGF0dXNMaS5hcHBlbmRDaGlsZChzdGF0dXNTZWxlY3QpO1xuICAgICAgICBmb3JtVUwuYXBwZW5kQ2hpbGQoc3RhdHVzTGkpO1xuXG4gICAgICAgIC8vIERpdiB0byBob2xkIG91ciBidXR0b24gLSBQdXNoIG9yIENhbmNlbCBjaGFuZ2VzXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XG4gICAgICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXRCdXR0b24nO1xuICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybUJ1dHRvbk5ldyk7XG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtIFByb2plY3QnO1xuICAgICAgICBjb25maXJtQnV0dG9uLmlkID0gY29uZmlybUJ1dHRvbjtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2NhbmNlbEJ1dHRvbic7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdjYW5jZWxCdXR0b24nO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsUHJvamVjdClcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtQnV0dG9uTmV3KCkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpO1xuICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNTZWxlY3QnKTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHByaW9yaXR5U2VsZWN0LnZhbHVlID09IFwiXCIgfHwgc3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIHN0YXR1c1NlbGVjdC52YWx1ZSwgW10pO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3T2JqZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdPYmplY3QpKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJztcbiAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gbmV3T2JqZWN0LnRpdGxlXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5ld09iamVjdC50aXRsZTtcbiAgICAgICAgbGlzdC5wdXNoKG5ld09iamVjdCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGl2JykuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QsIHRydWUpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVRvZG8pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdERpdicpLnJlbW92ZSgpO1xufVxuXG5jb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFByb2plY3RzJyk7XG5yZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdHMpO1xuXG5mdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuXG5cbiAgICAvL0NyZWF0aW5nIGEgZmV3IHJhbmRvbSBwcm9qZWN0cyB0byBkaXNwbGF5IGl0IG9uIG91ciBzY3JlZW5cbiAgICBjb25zdCBob21lID0gbmV3IFByb2plY3QoJ0hvbWUnLCAnUmVub3ZhdGluZyBteSBIb21lJywgJzIwMjMtMTItMzEnLCAnTG93JywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IHNjaG9vbCA9IG5ldyBQcm9qZWN0KCdTY2hvb2wnLCAnRmluaXNoaW5nIG15IGRlZ3JlZScsICcyMDIzLTEyLTMxJywgJ0xvdycsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBncm9jZXJpZXMgPSBuZXcgUHJvamVjdCgnR3JvY2VyaWVzJywgJ0J1eSBteSBncm9jZXJpZXMnLCAnMjAyMy0wMS0wMScsICdIaWdoJywgJ05vdCBTdGFydGVkJywgW10pO1xuICAgIGNvbnN0IGNhciA9IG5ldyBQcm9qZWN0KCdOZXcgQ2FyJywgJ0J1eSBhIG5ldyBjYXInLCAnMjAyMy0xMi0zMScsICdNZWRpdW0nLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG4gICAgY29uc3QgcnVubmluZyA9IG5ldyBQcm9qZWN0KCdIYWxmLW1hcmF0aG9uJywgJ1J1bm5pbmcgYSBoYWxmLW1hcmF0aG9uJywgJzIwMjMtMDktMzAnLCAnSGlnaCcsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBldmVyZXN0ID0gbmV3IFByb2plY3QoJ0NsaW1iaW5nIEV2ZXJlc3QnLCAnQ2xpbWJpbmcgTW91bnQgRXZlcmVzdCcsICcyMDI1LTA2LTMwJywgJ01lZGl1bScsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBqb2IgPSBuZXcgUHJvamVjdCgnTmV3IEpvYicsICdDaGFuZ2UgZm9yIGEgYmV0dGVyIGpvYicsICcyMDIyLTEyLTMxJywgJ0xvdycsICdOb3QgU3RhcnRlZCcsIFtdKTtcbiAgICBjb25zdCBjb2RpbmcgPSBuZXcgUHJvamVjdCgnQ29kaW5nJywgJ0xlYXJuIHRvIGNvZGUnLCAnMjAyMy0xMC0zMScsICdNZWRpdW0nLCAnTm90IFN0YXJ0ZWQnLCBbXSk7XG5cbiAgICBsZXQgcHJvamVjdExpc3QgPSBbaG9tZSwgc2Nob29sLCBncm9jZXJpZXMsIGNhciwgcnVubmluZywgZXZlcmVzdCwgam9iLCBjb2RpbmddO1xuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gcHJvamVjdExpc3RbaV07XG5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG15UHJvamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0KSk7XG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERpdicpLnJlbW92ZSgpOyAvLyBSZW1vdmluZyBlbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBkYXRlZDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1NlY3Rpb24nKS5yZW1vdmUoKTsgLy8gUmVtb3ZpbmcgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIHVwZGF0ZWQ7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0cygpO1xuXG4gICAgaXRlbXMgPSB7IC8vIFJldHJpZXZpbmcgdGhlIGxvY2FsIFN0b3JhZ2UgZXZlcnl0aW1lIHRoZSBwYWdlIGlzIGxvYWRlZFxuICAgICAgICAuLi5sb2NhbFN0b3JhZ2VcbiAgICB9O1xuXG4gICAgbGlzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbXNbT2JqZWN0LmtleXMoaXRlbXMpW2ldXSk7IC8vIFdlIHN0b3JlIGVhY2ggb2JqZWN0IGluIGxvY2FsU3RvcmFnZSBpbiBhbiBhcnJheTtcbiAgICAgICAgaXRlbS5jb25zdHJ1Y3RvciA9IFByb2plY3Q7XG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpdGxlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RCb3hlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHByb2plY3RCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgcHJvamVjdEJveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXlUb2RvLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY3VycmVudE9iamVjdCA9IFwiXCI7XG5cbn1cblxuXG5mdW5jdGlvbiBteVRvZG8oKSB7XG5cbiAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIENvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGEgZm9ybVxuICAgIHRvRG9EaXYuaWQgPSAndG9Eb0Rpdic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxQcm9qZWN0RGl2JykuYXBwZW5kKHRvRG9EaXYpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZG9UaXRsZS5pZCA9ICdteVRvRG9USXRsZSc7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50aXRsZSArIFwiOiBUb2RvKHMpXCI7XG4gICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgY29uc3QgbmV3dG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXd0b0RvLmlkID0gJ25ld3RvRG8nO1xuICAgIG5ld3RvRG8udGV4dENvbnRlbnQgPSBcIkFkZCB0byBkb1wiO1xuICAgIG5ld3RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvKTtcblxuICAgIHRvRG9EaXYuYXBwZW5kQ2hpbGQobmV3dG9Ebyk7XG5cbiAgICBjb25zdCBjdXJyZW50VG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1cnJlbnRUb0RvRGl2LmlkID0gJ2N1cnJlbnRUb0RvRGl2JztcbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUb0RvRGl2KTtcblxuICAgIGNvbnN0IHRvRG9CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKTtcbiAgICB0b0RvQmFyLmlkID0gJ3RvRG9CYXInO1xuICAgIGN1cnJlbnRUb0RvRGl2LmFwcGVuZENoaWxkKHRvRG9CYXIpO1xuXG4gICAgY29uc3QgYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYmFyVGl0bGUuaWQgPSAnYmFyVGl0bGUnO1xuICAgIGJhclRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIHRvRG9CYXIuYXBwZW5kQ2hpbGQoYmFyVGl0bGUpO1xuXG4gICAgY29uc3QgYmFyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYmFyRGVzY3JpcHRpb24uaWQgPSAnYmFyRGVzY3JpcHRpb24nO1xuICAgIGJhckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIHRvRG9CYXIuYXBwZW5kQ2hpbGQoYmFyRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgYmFyU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJhclN0YXR1cy5pZCA9ICdiYXJTdGF0dXMnO1xuICAgIGJhclN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3RhdHVzXCJcbiAgICB0b0RvQmFyLmFwcGVuZENoaWxkKGJhclN0YXR1cyk7XG5cbiAgICBsZXQgY3VycmVudFRvRG9saXN0ID0gY3VycmVudE9iamVjdC50b2RvO1xuXG4gICAgaWYgKGN1cnJlbnRUb0RvbGlzdC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50VG9Eb2xpc3QubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JveCcpO1xuICAgICAgICAgICAgdG9Eb0JveC5jbGFzc05hbWUgPSAndG9Eb0JveCc7XG4gICAgICAgICAgICB0b0RvQm94LmlkID0gY3VycmVudFRvRG9saXN0W2pdLnRpdGxlICsgXCJfQm94XCI7XG4gICAgICAgICAgICBjdXJyZW50VG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvQm94KTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdG9Eb1RpdGxlLmlkID0gJ3RvRG9UaXRsZSc7XG4gICAgICAgICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50VG9Eb2xpc3Rbal0udGl0bGVcbiAgICAgICAgICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLmlkID0gJ3RvRG9EZXNjcmlwdGlvbic7XG4gICAgICAgICAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50VG9Eb2xpc3Rbal0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0b0RvU3RhdHVzLmlkID0gJ3RvRG9TdGF0dXMnO1xuICAgICAgICAgICAgdG9Eb1N0YXR1cy50ZXh0Q29udGVudCA9IGN1cnJlbnRUb0RvbGlzdFtqXS5zdGF0dXM7XG4gICAgICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9TdGF0dXMpO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRvRG9FZGl0LmlkID0gY3VycmVudFRvRG9saXN0W2pdLnRpdGxlO1xuICAgICAgICAgICAgdG9Eb0VkaXQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb2RvKTtcbiAgICAgICAgICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb0VkaXQpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oKSB7XG5cbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Gb3JtLmlkID0gJ3RvZG9Gb3JtJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbFByb2plY3REaXYnKS5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICBjb25zdCB0b0RvVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvRG9VTC5pZCA9ICd0b0RvVUwnO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9VTCk7XG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9Eb1RpdGxlLmlkID0gJ3RvRG9UaXRsZSc7XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvRG9UaXRsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b0RvVGl0bGVMaS5pZCA9ICd0b0RvVGl0bGVMaSc7XG5cbiAgICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9Eb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gVGl0bGU6XCI7XG5cbiAgICBjb25zdCB0b0RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9Eb1RpdGxlSW5wdXQuaWQgPSAndG9Eb1RpdGxlSW5wdXQnO1xuXG4gICAgdG9Eb1RpdGxlTGkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGFiZWwpO1xuICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUlucHV0KTtcbiAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGkpO1xuXG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmlkID0gJ3RvRG9EZXNjcmlwdGlvbkxpJ1xuXG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvRG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIERlc2NyaXB0aW9uOlwiO1xuXG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvRG9EZXNjcmlwdGlvbklucHV0LmlkID0gJ3RvRG9EZXNjcmlwdGlvbklucHV0JztcblxuICAgIHRvRG9EZXNjcmlwdGlvbkxpLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxhYmVsKTtcbiAgICB0b0RvRGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbkxpKTtcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9Eb1N0YXR1c0xpLmlkID0gJ3RvRG9TdGF0dXNMaSc7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvRG9TdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBTdGF0dXM6XCI7XG5cbiAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5pZCA9ICd0b0RvU3RhdHVzU2VsZWN0JztcbiAgICB0b0RvU3RhdHVzU2VsZWN0LnN0eWxlLndpZHRoID0gJzEzMHB4JztcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNOb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0b0RvU3RhdHVzTm90LnZhbHVlID0gXCJOb3QgU3RhcnRlZFwiO1xuICAgIHRvRG9TdGF0dXNOb3QudGV4dENvbnRlbnQgPSAnTm90IFN0YXJ0ZWQnXG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTm90KTtcblxuICAgIGNvbnN0IHRvRG9TdGF0dXNQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRvRG9TdGF0dXNQcm9ncmVzcy52YWx1ZSA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgICB0b0RvU3RhdHVzUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzUHJvZ3Jlc3MpO1xuXG4gICAgY29uc3QgdG9Eb1N0YXR1c0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0b0RvU3RhdHVzRG9uZS52YWx1ZSA9IFwiRG9uZVwiO1xuICAgIHRvRG9TdGF0dXNEb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzRG9uZSk7XG5cbiAgICB0b0RvU3RhdHVzTGkuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0xhYmVsKTtcbiAgICB0b0RvU3RhdHVzTGkuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c1NlbGVjdCk7XG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNMaSk7XG5cbiAgICBjb25zdCB0b0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvRG9CdXR0b24uaWQgPSAndG9Eb0J1dHRvbic7XG4gICAgdG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybSBUb2RvXCI7XG4gICAgdG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlVG9Ebyk7XG4gICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9CdXR0b24pO1xuXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb0RvKCkge1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1RpdGxlSW5wdXQnKTtcbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvRGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGNvbnN0IHRvRG9TdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1N0YXR1c1NlbGVjdCcpO1xuXG5cbiAgICBpZiAodG9Eb1RpdGxlSW5wdXQudmFsdWUgPT0gXCJcIiB8fCB0b0RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHRvRG9TdGF0dXNTZWxlY3QudmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGN1cnJlbnRPYmplY3QudG9kbztcblxuICAgICAgICBjb25zdCBuZXdUb2RvT2JqZWN0ID0gbmV3IFRvZG8odG9Eb1RpdGxlSW5wdXQudmFsdWUsIHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLCB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlKTtcblxuICAgICAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG9PYmplY3QpO1xuXG4gICAgICAgIGN1cnJlbnRPYmplY3QudG9kbyA9IHRvZG9MaXN0O1xuXG4gICAgICAgIGNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKTtcbiAgICAgICAgdG9Eb0JveC5jbGFzc05hbWUgPSAndG9Eb0JveCc7XG4gICAgICAgIHRvRG9Cb3guaWQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZSArIFwiX0JveFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRvRG9EaXYnKS5hcHBlbmRDaGlsZCh0b0RvQm94KTtcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvRG9UaXRsZS5pZCA9ICd0b0RvVGl0bGUnO1xuICAgICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvVGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvRGVzY3JpcHRpb24uaWQgPSAndG9Eb0Rlc2NyaXB0aW9uJztcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b0RvU3RhdHVzLmlkID0gJ3RvRG9TdGF0dXMnO1xuICAgICAgICB0b0RvU3RhdHVzLnRleHRDb250ZW50ID0gdG9Eb1N0YXR1c1NlbGVjdC52YWx1ZTtcbiAgICAgICAgdG9Eb0JveC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzKTtcblxuICAgICAgICBjb25zdCB0b0RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0VkaXQuY2xhc3NOYW1lID0gJ3RvRG9FZGl0J1xuICAgICAgICB0b0RvRWRpdC5pZCA9IG5ld1RvZG9PYmplY3QudGl0bGU7XG4gICAgICAgIHRvRG9FZGl0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICB0b0RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvZG8pO1xuICAgICAgICB0b0RvQm94LmFwcGVuZENoaWxkKHRvRG9FZGl0KTtcblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudE9iamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdCkpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9kbygpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKSAhPSBudWxsKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kb0Zvcm0nKSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBjdXJyZW50VG9Eb2xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUb2RvID0gY3VycmVudFRvRG9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09IHRoaXMuaWQpXG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRvZG8pO1xuXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Gb3JtLmlkID0gJ2VkaXRUb2RvRm9ybSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsUHJvamVjdERpdicpLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgICAgICBjb25zdCB0b0RvVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0b0RvVUwuaWQgPSAndG9Eb1VMJztcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1VMKTtcblxuICAgICAgICBjb25zdCBlZGl0VG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBlZGl0VG9Eb1RpdGxlLmlkID0gJ2VkaXRUb0RvVGl0bGUnO1xuICAgICAgICBlZGl0VG9Eb1RpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVG9kbzogJyArIGN1cnJlbnRUb2RvLnRpdGxlO1xuICAgICAgICB0b0RvVUwuYXBwZW5kQ2hpbGQoZWRpdFRvRG9UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b0RvVGl0bGVMaS5pZCA9ICd0b0RvVGl0bGVMaSc7XG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b0RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBUaXRsZTpcIjtcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9UaXRsZUlucHV0LmlkID0gJ3RvRG9UaXRsZUlucHV0J1xuICAgICAgICB0b0RvVGl0bGVMaS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMYWJlbCk7XG4gICAgICAgIHRvRG9UaXRsZUxpLmFwcGVuZENoaWxkKHRvRG9UaXRsZUlucHV0KTtcbiAgICAgICAgdG9Eb1VMLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxpKTtcblxuICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRvRG9EZXNjcmlwdGlvbkxpLmlkID0gJ3RvRG9EZXNjcmlwdGlvbkxpJ1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gRGVzY3JpcHRpb246XCI7XG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b0RvRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0b0RvRGVzY3JpcHRpb25JbnB1dCc7XG5cbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uTGkuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICB0b0RvRGVzY3JpcHRpb25MaS5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb25MaSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdG9Eb1N0YXR1c0xpLmlkID0gJ3RvRG9TdGF0dXNMaSc7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdG9Eb1N0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFN0YXR1czpcIjtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3QuaWQgPSAndG9Eb1N0YXR1c1NlbGVjdCc7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3Quc3R5bGUud2lkdGggPSAnMTMwcHgnO1xuXG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c0VtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvRG9TdGF0dXNFbXB0eS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRvRG9TdGF0dXNFbXB0eS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNFbXB0eSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1N0YXR1c05vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b0RvU3RhdHVzTm90LnZhbHVlID0gXCJOb3QgU3RhcnRlZFwiO1xuICAgICAgICB0b0RvU3RhdHVzTm90LnRleHRDb250ZW50ID0gJ05vdCBTdGFydGVkJztcbiAgICAgICAgdG9Eb1N0YXR1c1NlbGVjdC5hcHBlbmRDaGlsZCh0b0RvU3RhdHVzTm90KTtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9Eb1N0YXR1c1Byb2dyZXNzLnZhbHVlID0gXCJJbiBQcm9ncmVzc1wiO1xuICAgICAgICB0b0RvU3RhdHVzUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICAgIHRvRG9TdGF0dXNTZWxlY3QuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c1Byb2dyZXNzKTtcblxuICAgICAgICBjb25zdCB0b0RvU3RhdHVzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b0RvU3RhdHVzRG9uZS52YWx1ZSA9IFwiRG9uZVwiO1xuICAgICAgICB0b0RvU3RhdHVzRG9uZS50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICB0b0RvU3RhdHVzU2VsZWN0LmFwcGVuZENoaWxkKHRvRG9TdGF0dXNEb25lKTtcblxuICAgICAgICB0b0RvU3RhdHVzTGkuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0xhYmVsKTtcbiAgICAgICAgdG9Eb1N0YXR1c0xpLmFwcGVuZENoaWxkKHRvRG9TdGF0dXNTZWxlY3QpO1xuICAgICAgICB0b0RvVUwuYXBwZW5kQ2hpbGQodG9Eb1N0YXR1c0xpKTtcblxuICAgICAgICBjb25zdCB0b2RvQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9CdXR0b25EaXYuaWQgPSAndG9kb0J1dHRvbkRpdic7XG4gICAgICAgIHRvRG9VTC5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uRGl2KTtcblxuICAgICAgICBjb25zdCBlZGl0VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZWRpdFRvRG9CdXR0b24uaWQgPSBjdXJyZW50VG9kby50aXRsZSArIFwiX0J0blwiO1xuICAgICAgICBlZGl0VG9Eb0J1dHRvbi5jbGFzc05hbWUgPSAnZWRpdFRvRG9CdXR0b24nXG4gICAgICAgIGVkaXRUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtIENoYW5nZShzKVwiO1xuICAgICAgICBlZGl0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1Ub0RvQ2hhbmdlKTtcbiAgICAgICAgdG9kb0J1dHRvbkRpdi5hcHBlbmRDaGlsZChlZGl0VG9Eb0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsZXRlVG9Eb0J1dHRvbi5pZCA9IGN1cnJlbnRUb2RvLnRpdGxlICsgXCJfQnRuXCI7XG4gICAgICAgIGRlbGV0ZVRvRG9CdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZVRvRG9CdXR0b24nXG4gICAgICAgIGRlbGV0ZVRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUb2RvXCI7XG4gICAgICAgIGRlbGV0ZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvKTtcbiAgICAgICAgdG9kb0J1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvQnV0dG9uKTtcblxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtVG9Eb0NoYW5nZSgpIHtcblxuICAgIGxldCBjdXJyZW50VG9Eb2xpc3QgPSBjdXJyZW50T2JqZWN0LnRvZG87XG5cbiAgICBsZXQgaXRlbUluZGV4ID0gKHRoaXMuaWQpLmluZGV4T2YoXCJfXCIpO1xuXG4gICAgbGV0IGl0ZW0gPSAodGhpcy5pZCkuc2xpY2UoMCwgaXRlbUluZGV4KTtcblxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudE9iamVjdC50b2RvLmZpbmRJbmRleChvYmplY3QgPT4ge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnRpdGxlID09IGl0ZW07XG4gICAgfSlcblxuICAgIGNvbnN0IHRvRG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UaXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Rlc2NyaXB0aW9uSW5wdXQnKTtcbiAgICBjb25zdCB0b0RvU3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9TdGF0dXNTZWxlY3QnKTtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1RpdGxlJyk7XG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvRG9TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1N0YXR1cycpO1xuXG4gICAgaWYgKHRvRG9UaXRsZUlucHV0LnZhbHVlID09IFwiXCIgJiYgdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT0gXCJcIiAmJiB0b0RvU3RhdHVzU2VsZWN0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHRvRG9UaXRsZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudE9iamVjdC50b2RvW2luZGV4XS50aXRsZSA9IHRvRG9UaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb1RpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmlkID0gdG9Eb1RpdGxlSW5wdXQudmFsdWUgKyBcIl9CdG5cIjtcblxuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSArIFwiX0JveFwiKTtcbiAgICAgICAgICAgIGJveC5pZCA9IGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0udGl0bGUgKyBcIl9Cb3hcIjtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICAgICAgICAgIGVkaXQuaWQgPSBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnRpdGxlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudE9iamVjdC50b2RvW2luZGV4XS5kZXNjcmlwdGlvbiA9IHRvRG9EZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Eb1N0YXR1c1NlbGVjdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnRvZG9baW5kZXhdLnN0YXR1cyA9IHRvRG9TdGF0dXNTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudE9iamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdCkpO1xuICAgICAgICB0b0RvU3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudE9iamVjdC50b2RvW2luZGV4XS5zdGF0dXM7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kb0Zvcm0nKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oKSB7XG5cbiAgICBsZXQgY3VycmVudFRvRG9saXN0ID0gY3VycmVudE9iamVjdC50b2RvO1xuXG4gICAgbGV0IGl0ZW1JbmRleCA9ICh0aGlzLmlkKS5pbmRleE9mKFwiX1wiKTtcblxuICAgIGxldCBpdGVtID0gKHRoaXMuaWQpLnNsaWNlKDAsIGl0ZW1JbmRleCk7XG5cbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRPYmplY3QudG9kby5maW5kSW5kZXgob2JqZWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC50aXRsZSA9PSBpdGVtXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRPYmplY3QudG9kb1tpbmRleF0udGl0bGUgKyBcIl9Cb3hcIikucmVtb3ZlKCk7XG5cbiAgICBjdXJyZW50T2JqZWN0LnRvZG8gPSBjdXJyZW50VG9Eb2xpc3QuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QudGl0bGUgIT0gaXRlbSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG9Gb3JtJykucmVtb3ZlKCk7XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudE9iamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdCkpO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG5cbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdGlvbicpO1xuXG4gICAgLy8xc3QgcGFydCBpcyBhIGxlZnQgYmFyXG4gICAgY29uc3QgbGVmdEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QmFyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5pZCA9ICdwcm9qZWN0RGl2JztcbiAgICBwcm9qZWN0RGl2LmNsYXNzTmFtZSA9ICdwcm9qZWN0RGl2JztcbiAgICBsZWZ0QmFyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gJ25ld1Byb2plY3QnO1xuICAgIG5ld1Byb2plY3QuaWQgPSAnbmV3UHJvamVjdCc7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgIC8vU3BhbiB0YWcgZm9yIG15IHByb2plY3QgcHJvamVjdExpc3RcbiAgICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG15UHJvamVjdHMuY2xhc3NOYW1lID0gJ215UHJvamVjdHMnO1xuICAgIG15UHJvamVjdHMudGV4dENvbnRlbnQgPSAnTXkgUHJvamVjdHMnO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlQcm9qZWN0cyk7XG5cbiAgICAvLyAybmQgcGFydCBpcyBhIGRpdiB0YWtpbmcgNzUlIG9mIHRoZSBwYWdlJ3Mgd2lkdGhcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmlkID0gJ3RvZG9TZWN0aW9uJztcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG5cbiAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgbGV0IGl0ZW1zID0geyAvLyBSZXRyaWV2aW5nIHRoZSBsb2NhbCBTdG9yYWdlIGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgICAgICAgLi4ubG9jYWxTdG9yYWdlXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbXNbT2JqZWN0LmtleXMoaXRlbXMpW2ldXSk7IC8vIFdlIHN0b3JlIGVhY2ggb2JqZWN0IGluIGxvY2FsU3RvcmFnZSBpbiBhbiBhcnJheVxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7IC8vIEl0ZXJhdGluZyB0byBkaXNwbGF5IG91ciBvYmplY3RzXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgICAgIHByb2plY3RUaXRsZS5pZCA9IGxpc3RbaV0udGl0bGVcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdFtpXS50aXRsZTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgVXNlckljb24gZnJvbSAnLi91dGlsaXNhdGV1ci5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNpY0h0bWwoKSB7XG5cbiAgICAvL1RvcCBiYXIgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIFBhZ2UgVGl0bGVcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhlcm8uY2xhc3NOYW1lID0gJ2hlcm8nO1xuICAgIGhlcm8udGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgICAvL1JpZ2h0IFBhcnQgLSBIZWFkZXJcbiAgICBjb25zdCByaWdodEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0SGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdyaWdoSGVhZGVyRGl2JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHRIZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgdXNlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB1c2VySWNvbi5pZCA9ICd1c2VySWNvbic7XG4gICAgdXNlckljb24uc3JjID0gVXNlckljb247XG4gICAgcmlnaHRIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodXNlckljb24pO1xuXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdXNlck5hbWUuY2xhc3NOYW1lID0gJ3VzZXJOYW1lJztcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICdAZ3Vlc3RVc2VyJztcbiAgICByaWdodEhlYWRlckRpdi5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XG5cbiAgICAvLyBTcGxpdHRpbmcgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgaW4gdHdvIHNlY3Rpb25zXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgICAvLzFzdCBwYXJ0IGlzIGEgbGVmdCBiYXJcbiAgICBjb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdEJhci5pZCA9ICdsZWZ0QmFyJztcbiAgICBsZWZ0QmFyLmNsYXNzTmFtZSA9ICdsZWZ0QmFyJztcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChsZWZ0QmFyKTtcblxuICAgIGNvbnN0IHJlc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXREaXYuaWQgPSAncmVzZXREaXYnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QmFyJykuYXBwZW5kQ2hpbGQocmVzZXREaXYpO1xuXG4gICAgY29uc3QgcmVzZXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJlc2V0UHJvamVjdC5pZCA9ICdyZXNldFByb2plY3RzJztcbiAgICByZXNldFByb2plY3QudGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0cyc7XG4gICAgcmVzZXREaXYuYXBwZW5kQ2hpbGQocmVzZXRQcm9qZWN0KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==