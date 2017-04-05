// NOTE: for vue2.0 and platform:web only.

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/ebc60bab39c9c84cabf9bf452c35cbdb', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ebc60bab39c9c84cabf9bf452c35cbdb',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "conatiner"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "marginBottom": 20
	      },
	      "attr": {
	        "value": function () {return 'action value: ' + (this.value)}
	      }
	    },
	    {
	      "type": "div",
	      "events": {
	        "click": "createAction"
	      },
	      "style": {
	        "margin": 20,
	        "padding": 20,
	        "backgroundColor": "#1ba1e2",
	        "color": "#ffffff"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "color": "#ffffff"
	          },
	          "attr": {
	            "value": "Create Action"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var actionSheet = __weex_require__('@weex-module/actionSheet');
	module.exports = {
	  data: function () {return {
	    value: '',
	    index: 0,
	    txtChange: ''
	  }},
	  methods: {
	    createAction: function createAction() {

	      var items = [];
	      for (var i = 0; i < 3; i++) {
	        var item = {};
	        if (i == 0) {
	          item = { 'type': 0, 'message': '确认' };
	        }
	        if (i == 1) {
	          item = { 'type': 1, 'message': '取消' };
	        }
	        if (i == 2) {
	          item = { 'type': 2, 'message': '删除' };
	        }
	        items.push(item);
	      }
	      var self = this;
	      actionSheet.create({
	        'items': items,
	        'index': self.index,
	        'title': '提示',
	        'message': '欢迎使用weex第三方市场'
	      }, function (ret) {
	        var result = ret.result;
	        if (result == 'success') {
	          self.value = ret.data.message;
	          self.index = ret.data.index;
	        }
	      });
	    },
	    onchange: function onchange(event) {
	      this.txtChange = event.value;
	      console.log('onchange', event.value);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);