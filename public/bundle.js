/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IndecisionApp = function (_React$Component) {\n  _inherits(IndecisionApp, _React$Component);\n\n  function IndecisionApp(props) {\n    _classCallCheck(this, IndecisionApp);\n\n    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));\n\n    _this.state = {\n      title: \"Indecision\",\n      subtitle: \"Put your life in the hands of a computer\",\n      options: []\n    };\n\n    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);\n    _this.handleAddOption = _this.handleAddOption.bind(_this);\n    _this.handlePick = _this.handlePick.bind(_this);\n    _this.handleDeleteOptionSingular = _this.handleDeleteOptionSingular.bind(_this);\n    return _this;\n  }\n\n  _createClass(IndecisionApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      try {\n        // Prevent invalid json formats\n        var jsonData = localStorage.getItem('options');\n        var options = JSON.parse(jsonData);\n\n        if (options) {\n          this.setState(function () {\n            return { options: options };\n          });\n        }\n      } catch (e) {\n        // pass\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      // Access to this.props and this.state allowed\n\n      if (prevState.options.length !== this.state.options.length) {\n        var jsonData = JSON.stringify(this.state.options);\n        localStorage.setItem('options', jsonData);\n      }\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      console.log(\"Component will mount\");\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      console.log(\"Component will unmount\");\n    }\n  }, {\n    key: \"handlePick\",\n    value: function handlePick() {\n      var rndNumber = Math.floor(Math.random() * this.state.options.length);\n      var option = this.state.options[rndNumber];\n      alert(option);\n    }\n  }, {\n    key: \"handleAddOption\",\n    value: function handleAddOption(option) {\n      if (!option) {\n        return 'Enter a valid option';\n      } else if (this.state.options.indexOf(option) > -1) {\n        return 'Duplicated options are not allowed';\n      }\n\n      // this.setState((prevState) => {\n      //   return {\n      //     options: [...prevState.options, option]\n      //   }\n      // })\n      this.setState(function (prevState) {\n        return {\n          options: [].concat(_toConsumableArray(prevState.options), [option])\n        };\n      });\n    }\n  }, {\n    key: \"handleDeleteOptions\",\n    value: function handleDeleteOptions() {\n      // this.setState(() => {\n      //   return {\n      //     options: []\n      //   }\n      // })\n      this.setState(function () {\n        return {\n          options: []\n        };\n      });\n    }\n  }, {\n    key: \"handleDeleteOptionSingular\",\n    value: function handleDeleteOptionSingular(optionToRemove) {\n      this.setState(function (prevState) {\n        return {\n          options: prevState.options.filter(function (value) {\n            return value != optionToRemove;\n          })\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(Header, {\n          title: this.state.title,\n          subtitle: this.state.subtitle\n        }),\n        React.createElement(Action, {\n          hasOptions: this.state.options.length > 0,\n          handlePick: this.handlePick\n        }),\n        React.createElement(Options, {\n          options: this.state.options,\n          handleDeleteOptions: this.handleDeleteOptions,\n          handleDeleteOptionSingular: this.handleDeleteOptionSingular\n        }),\n        React.createElement(AddOptionForm, {\n          handleAddOption: this.handleAddOption\n        })\n      );\n    }\n  }]);\n\n  return IndecisionApp;\n}(React.Component);\n\nvar Header = function Header(props) {\n  return React.createElement(\n    \"div\",\n    null,\n    React.createElement(\n      \"h1\",\n      null,\n      props.title\n    ),\n    props.subtitle && React.createElement(\n      \"h2\",\n      null,\n      props.subtitle\n    )\n  );\n};\nHeader.defaultProps = {\n  title: 'Default title'\n};\n\nvar Action = function Action(props) {\n  return React.createElement(\n    \"div\",\n    null,\n    React.createElement(\n      \"button\",\n      {\n        onClick: props.handlePick,\n        disabled: !props.hasOptions\n      },\n      \"What should I do?\"\n    )\n  );\n};\n\nvar Option = function Option(props) {\n  return React.createElement(\n    \"li\",\n    null,\n    props.optionText,\n    React.createElement(\n      \"button\",\n      {\n        onClick: function onClick() {\n          props.handleDeleteOptionSingular(props.optionText);\n        }\n      },\n      \"Remove\"\n    )\n  );\n};\n\nvar Options = function Options(props) {\n  return React.createElement(\n    \"div\",\n    null,\n    React.createElement(\n      \"button\",\n      { onClick: props.handleDeleteOptions },\n      \"Remove All\"\n    ),\n    props.options.length == 0 && React.createElement(\n      \"p\",\n      null,\n      \"Please add an option\"\n    ),\n    React.createElement(\n      \"ul\",\n      null,\n      props.options.map(function (value, index) {\n        return React.createElement(Option, {\n          key: index,\n          optionText: value,\n          handleDeleteOptionSingular: props.handleDeleteOptionSingular\n        });\n      })\n    )\n  );\n};\n\nvar AddOptionForm = function (_React$Component2) {\n  _inherits(AddOptionForm, _React$Component2);\n\n  function AddOptionForm(props) {\n    _classCallCheck(this, AddOptionForm);\n\n    var _this2 = _possibleConstructorReturn(this, (AddOptionForm.__proto__ || Object.getPrototypeOf(AddOptionForm)).call(this, props));\n\n    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);\n\n    _this2.state = {\n      error: false\n    };\n    return _this2;\n  }\n\n  _createClass(AddOptionForm, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n\n      var newOption = e.target.elements.option.value.trim();\n      var error = this.props.handleAddOption(newOption);\n\n      if (!error) {\n        e.target.elements.option.value = \"\";\n      }\n\n      this.setState(function () {\n        return { error: error };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        null,\n        this.state.error && React.createElement(\n          \"span\",\n          null,\n          this.state.error\n        ),\n        React.createElement(\n          \"form\",\n          { onSubmit: this.handleSubmit },\n          React.createElement(\"input\", { type: \"text\", name: \"option\", id: \"\" }),\n          React.createElement(\n            \"button\",\n            { type: \"submit\" },\n            \"Add Option\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return AddOptionForm;\n}(React.Component);\n\nReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });