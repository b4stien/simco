webpackJsonp([1],{

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(69);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(201);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __WEBPACK_IMPORTED_MODULE_1_react_dom__ && __WEBPACK_IMPORTED_MODULE_1_react_dom__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react_dom__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react_dom__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_react_dom___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_react_dom___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(135);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __WEBPACK_IMPORTED_MODULE_2_redux__ && __WEBPACK_IMPORTED_MODULE_2_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_redux__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_redux___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(202);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __WEBPACK_IMPORTED_MODULE_3_react_redux__ && __WEBPACK_IMPORTED_MODULE_3_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_react_redux__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_react_redux___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(483);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__(482);
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	
	
	
	
	
	
	
	
	var SimcoUnconnected = function (_React$Component) {
	    _inherits(SimcoUnconnected, _React$Component);
	
	    function SimcoUnconnected() {
	        _classCallCheck(this, SimcoUnconnected);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SimcoUnconnected).apply(this, arguments));
	    }
	
	    _createClass(SimcoUnconnected, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                'div',
	                { style: { width: '80%', margin: 'auto' } },
	                /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                    'div',
	                    { style: { display: 'flex', flexDirection: 'row', maxWidth: '600px', margin: 'auto' } },
	                    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                        'div',
	                        { style: { flex: 1, padding: '5px' } },
	                        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                            'label',
	                            { style: { display: 'block', marginBottom: '5px' } },
	                            'Trajet(s) unique(s)'
	                        ),
	                        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
	                            min: '1',
	                            onChange: function onChange(e) {
	                                _this2.props.dispatch({
	                                    type: /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_4__actions__.CHANGE_UNIQUE_RIDE,
	                                    uniqueRide: e.target.value
	                                });
	                            },
	                            style: { width: '100%' },
	                            type: 'number',
	                            step: '1',
	                            value: this.props.uniqueRide
	                        })
	                    ),
	                    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                        'div',
	                        { style: { flex: 1, padding: '5px' } },
	                        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                            'label',
	                            { style: { display: 'block', marginBottom: '5px' } },
	                            'Voyageur(s)'
	                        ),
	                        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
	                            min: '1',
	                            onChange: function onChange(e) {
	                                _this2.props.dispatch({
	                                    type: /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_4__actions__.CHANGE_PEOPLE,
	                                    people: e.target.value
	                                });
	                            },
	                            style: { width: '100%' },
	                            type: 'number',
	                            step: '1',
	                            value: this.props.people
	                        })
	                    ),
	                    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                        'div',
	                        { style: { flex: 1, padding: '5px', display: 'flex', alignItems: 'flex-end' } },
	                        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                            'button',
	                            { onClick: function onClick() {
	                                    _this2.props.dispatch({ type: /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_4__actions__.START_COMPUTE });
	                                }, style: { height: '37px', width: '100%' } },
	                            'Calculer'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return SimcoUnconnected;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
	
	var select = function select(state) {
	    return {
	        uniqueRide: state.get('uniqueRide'),
	        people: state.get('people'),
	        results: state.get('results')
	    };
	};
	
	var Simco = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"].bind()(select)(SimcoUnconnected);
	
	function mountSimcoApp(options) {
	    var store = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_5__reducer__["a"]);
	
	    /* harmony import */__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        /* harmony import */__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
	        { store: store },
	        /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Simco, null)
	    ), options.node);
	}
	
	window.mountSimcoApp = mountSimcoApp;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(200);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __WEBPACK_IMPORTED_MODULE_0_immutable__ && __WEBPACK_IMPORTED_MODULE_0_immutable__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_immutable__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_immutable__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_immutable___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_immutable___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(483);
	/* harmony export */ exports["a"] = reducer;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	
	
	
	
	var PEOPLE_IN_CAR = 2;
	var ITERATIONS = 10000;
	
	function results(state, action, wholeState) {
	    if (state === undefined) {
	        state = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Map({
	            hasComputed: false,
	            data: []
	        });
	    }
	
	    if (action.type === /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_1__actions__.START_COMPUTE) {
	        var _ret = function () {
	            var ur = wholeState.get('uniqueRide');
	            var p = wholeState.get('people');
	            var freqs = Array(Math.floor(p / PEOPLE_IN_CAR) + 1).fill().map(function () {
	                return 0;
	            });
	
	            Array(ITERATIONS).fill().map(function (_, i) {
	                var draws = Array(p).fill().map(function () {
	                    return Math.floor(Math.random() * ur) + 1;
	                });
	                var tmp = {};
	                var shared = 0;
	
	                draws.map(function (draw) {
	                    if (tmp[draw] === undefined) {
	                        tmp[draw] = 1;
	                    } else {
	                        tmp[draw]++;
	                    }
	
	                    if (tmp[draw] === PEOPLE_IN_CAR) {
	                        shared++;
	                        tmp[draw] = 0;
	                    }
	                });
	
	                freqs[shared]++;
	            });
	
	            console.log(freqs.map(function (freq) {
	                return freq / ITERATIONS * 100;
	            }));
	
	            return {
	                v: /* harmony import */__WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Map({
	                    hasComputed: true,
	                    data: freqs
	                })
	            };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	
	    return state;
	}
	
	function uniqueRide() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_1__actions__.CHANGE_UNIQUE_RIDE) {
	        return parseInt(action.uniqueRide);
	    }
	
	    return state;
	}
	
	function people() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_1__actions__.CHANGE_PEOPLE) {
	        return parseInt(action.people);
	    }
	
	    return state;
	}
	
	function reducer(state, action) {
	    if (state === undefined) {
	        state = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Map();
	    }
	
	    state = state.set('uniqueRide', uniqueRide(state.get('uniqueRide'), action));
	    state = state.set('people', people(state.get('people'), action));
	    state = state.set('results', results(state.get('results'), action, state));
	
	    return state;
	}

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var CHANGE_UNIQUE_RIDE = 'CHANGE_UNIQUE_RIDE';
	/* harmony export */ Object.defineProperty(exports, "CHANGE_UNIQUE_RIDE", {configurable: false, enumerable: true, get: function() { return CHANGE_UNIQUE_RIDE; }});
	var CHANGE_PEOPLE = 'CHANGE_PEOPLE';
	/* harmony export */ Object.defineProperty(exports, "CHANGE_PEOPLE", {configurable: false, enumerable: true, get: function() { return CHANGE_PEOPLE; }});
	
	var START_COMPUTE = 'START_COMPUTE';
	/* harmony export */ Object.defineProperty(exports, "START_COMPUTE", {configurable: false, enumerable: true, get: function() { return START_COMPUTE; }});

/***/ }

},[204]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0tBR007Ozs7Ozs7Ozs7O2tDQUVPOzs7QUFDTCxvQkFBUTs7bUJBQUssT0FBTyxFQUFDLE9BQU8sS0FBUCxFQUFjLFFBQVEsTUFBUixFQUF0QixFQUFMO2lCQUNKOzt1QkFBSyxPQUFPLEVBQUMsU0FBUyxNQUFULEVBQWlCLGVBQWUsS0FBZixFQUFzQixVQUFVLE9BQVYsRUFBbUIsUUFBUSxNQUFSLEVBQWxFLEVBQUw7cUJBQ0k7OzJCQUFLLE9BQU8sRUFBQyxNQUFNLENBQU4sRUFBUyxTQUFTLEtBQVQsRUFBakIsRUFBTDt5QkFDSTs7K0JBQU8sT0FBTyxFQUFDLFNBQVMsT0FBVCxFQUFrQixjQUFjLEtBQWQsRUFBMUIsRUFBUDs7MEJBREo7eUJBRUk7QUFDSSxrQ0FBSSxHQUFKO0FBQ0EsdUNBQVUsa0JBQUMsQ0FBRCxFQUFPO0FBQUUsd0NBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0I7QUFDbkMsMkNBQU0sc0VBQVEsa0JBQVI7QUFDTixpREFBWSxFQUFFLE1BQUYsQ0FBUyxLQUFUO2tDQUZHLEVBQUY7OEJBQVA7QUFJVixvQ0FBTyxFQUFDLE9BQU8sTUFBUCxFQUFSO0FBQ0EsbUNBQUssUUFBTDtBQUNBLG1DQUFLLEdBQUw7QUFDQSxvQ0FBTyxLQUFLLEtBQUwsQ0FBVyxVQUFYOzBCQVRYLENBRko7c0JBREo7cUJBZUk7OzJCQUFLLE9BQU8sRUFBQyxNQUFNLENBQU4sRUFBUyxTQUFTLEtBQVQsRUFBakIsRUFBTDt5QkFDSTs7K0JBQU8sT0FBTyxFQUFDLFNBQVMsT0FBVCxFQUFrQixjQUFjLEtBQWQsRUFBMUIsRUFBUDs7MEJBREo7eUJBRUk7QUFDSSxrQ0FBSSxHQUFK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QUFVLFlBQVYsQ0FBWCxFQUFvQyxNQUFwQyxDQUF4QixDQUFSLENBTDJDO0FBTTNDLGFBQVEsTUFBTSxHQUFOLENBQVUsUUFBVixFQUFvQixPQUFPLE1BQU0sR0FBTixDQUFVLFFBQVYsQ0FBUCxFQUE0QixNQUE1QixDQUFwQixDQUFSLENBTjJDO0FBTzNDLGFBQVEsTUFBTSxHQUFOLENBQVUsU0FBVixFQUFxQixRQUFRLE1BQU0sR0FBTixDQUFVLFNBQVYsQ0FBUixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxDQUFyQixDQUFSLENBUDJDOztBQVMzQyxZQUFPLEtBQVAsQ0FUMkM7Ozs7Ozs7Ozs7QUMxRXhDLEtBQU0scUJBQXFCLG9CQUFyQixDQUFiO0FBQUE7QUFDTyxLQUFNLGdCQUFnQixlQUFoQixDQUFiO0FBQUE7O0FBRU8sS0FBTSxnQkFBZ0IsZUFBaEIsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuXG5cbmNsYXNzIFNpbWNvVW5jb25uZWN0ZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgbWF4V2lkdGg6ICc2MDBweCcsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDEsIHBhZGRpbmc6ICc1cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5UcmFqZXQocykgdW5pcXVlKHMpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49JzEnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfVU5JUVVFX1JJREUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlUmlkZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9JzEnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy51bmlxdWVSaWRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAxLCBwYWRkaW5nOiAnNXB4J319PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+Vm95YWdldXIocyk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnByb3BzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9QRU9QTEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnBlb3BsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMSwgcGFkZGluZzogJzVweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogYWN0aW9ucy5TVEFSVF9DT01QVVRFfSk7IH19IHN0eWxlPXt7aGVpZ2h0OiAnMzdweCcsIHdpZHRoOiAnMTAwJSd9fT5DYWxjdWxlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxuXG59XG5cblxuY29uc3Qgc2VsZWN0ID0gKHN0YXRlKSA9PiAoe1xuICAgIHVuaXF1ZVJpZGU6IHN0YXRlLmdldCgndW5pcXVlUmlkZScpLFxuICAgIHBlb3BsZTogc3RhdGUuZ2V0KCdwZW9wbGUnKSxcbiAgICByZXN1bHRzOiBzdGF0ZS5nZXQoJ3Jlc3VsdHMnKVxufSk7XG5cblxuY29uc3QgU2ltY28gPSBjb25uZWN0KHNlbGVjdCkoU2ltY29VbmNvbm5lY3RlZCk7XG5cblxuZnVuY3Rpb24gbW91bnRTaW1jb0FwcChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFNpbWNvIC8+XG4gICAgPC9Qcm92aWRlcj4sIG9wdGlvbnMubm9kZSk7XG59XG5cblxud2luZG93Lm1vdW50U2ltY29BcHAgPSBtb3VudFNpbWNvQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tYWluLmpzXG4gKiovIiwiaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cblxuY29uc3QgUEVPUExFX0lOX0NBUiA9IDI7XG5jb25zdCBJVEVSQVRJT05TID0gMTAwMDA7XG5cblxuZnVuY3Rpb24gcmVzdWx0cyhzdGF0ZSwgYWN0aW9uLCB3aG9sZVN0YXRlKSB7XG4gICAgaWYoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0ZSA9IEltbXV0YWJsZS5NYXAoe1xuICAgICAgICAgICAgaGFzQ29tcHV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuU1RBUlRfQ09NUFVURSkge1xuICAgICAgICBsZXQgdXIgPSB3aG9sZVN0YXRlLmdldCgndW5pcXVlUmlkZScpO1xuICAgICAgICBsZXQgcCA9IHdob2xlU3RhdGUuZ2V0KCdwZW9wbGUnKTtcbiAgICAgICAgbGV0IGZyZXFzID0gQXJyYXkoTWF0aC5mbG9vcihwL1BFT1BMRV9JTl9DQVIpICsgMSkuZmlsbCgpLm1hcCgoKSA9PiAoMCkpO1xuXG4gICAgICAgIEFycmF5KElURVJBVElPTlMpLmZpbGwoKS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBkcmF3cyA9IEFycmF5KHApLmZpbGwoKS5tYXAoKCkgPT4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp1cikgKyAxKSk7XG4gICAgICAgICAgICBsZXQgdG1wID0ge307XG4gICAgICAgICAgICBsZXQgc2hhcmVkID0gMDtcblxuICAgICAgICAgICAgZHJhd3MubWFwKChkcmF3KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodG1wW2RyYXddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wW2RyYXddID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcFtkcmF3XSsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRtcFtkcmF3XSA9PT0gUEVPUExFX0lOX0NBUikge1xuICAgICAgICAgICAgICAgICAgICBzaGFyZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdG1wW2RyYXddID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnJlcXNbc2hhcmVkXSsrO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhmcmVxcy5tYXAoKGZyZXEpID0+IChmcmVxIC8gSVRFUkFUSU9OUyAqIDEwMCkpKTtcblxuICAgICAgICByZXR1cm4gSW1tdXRhYmxlLk1hcCh7XG4gICAgICAgICAgICBoYXNDb21wdXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6IGZyZXFzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiB1bmlxdWVSaWRlKHN0YXRlPTEsIGFjdGlvbikge1xuICAgIGlmKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLkNIQU5HRV9VTklRVUVfUklERSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYWN0aW9uLnVuaXF1ZVJpZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBwZW9wbGUoc3RhdGU9MSwgYWN0aW9uKSB7XG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuQ0hBTkdFX1BFT1BMRSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYWN0aW9uLnBlb3BsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhdGUgPSBJbW11dGFibGUuTWFwKCk7XG4gICAgfVxuXG4gICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VuaXF1ZVJpZGUnLCB1bmlxdWVSaWRlKHN0YXRlLmdldCgndW5pcXVlUmlkZScpLCBhY3Rpb24pKTtcbiAgICBzdGF0ZSA9IHN0YXRlLnNldCgncGVvcGxlJywgcGVvcGxlKHN0YXRlLmdldCgncGVvcGxlJyksIGFjdGlvbikpO1xuICAgIHN0YXRlID0gc3RhdGUuc2V0KCdyZXN1bHRzJywgcmVzdWx0cyhzdGF0ZS5nZXQoJ3Jlc3VsdHMnKSwgYWN0aW9uLCBzdGF0ZSkpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yZWR1Y2VyLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IENIQU5HRV9VTklRVUVfUklERSA9ICdDSEFOR0VfVU5JUVVFX1JJREUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QRU9QTEUgPSAnQ0hBTkdFX1BFT1BMRSc7XG5cbmV4cG9ydCBjb25zdCBTVEFSVF9DT01QVVRFID0gJ1NUQVJUX0NPTVBVVEUnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==