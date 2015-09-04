webpackHotUpdate(0,{

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(7), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(3), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _StaticLabelResultCss = __webpack_require__(448);
  
  var _StaticLabelResultCss2 = _interopRequireDefault(_StaticLabelResultCss);
  
  var _decoratorsWithViewport = __webpack_require__(56);
  
  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);
  
  var _decoratorsWithStyles = __webpack_require__(16);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(42);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _pubsubJs = __webpack_require__(91);
  
  var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
  
  var StaticLabelResult = (function (_React$Component) {
      _inherits(StaticLabelResult, _React$Component);
  
      _createClass(StaticLabelResult, null, [{
          key: 'propTypes',
          value: {
              viewport: _react.PropTypes.shape({
                  width: _react.PropTypes.number.isRequired,
                  height: _react.PropTypes.number.isRequired
              }).isRequired
          },
          enumerable: true
      }]);
  
      function StaticLabelResult() {
          _classCallCheck(this, _StaticLabelResult);
  
          _get(Object.getPrototypeOf(_StaticLabelResult.prototype), 'constructor', this).call(this);
          this.state = {
              active: false,
              result: 5
          };
      }
  
      _createClass(StaticLabelResult, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
  
              var puhsuh = (function (string, data) {
                  this.displayResult(data);
              }).bind(this);
  
              _pubsubJs2['default'].subscribe('text_pushed', puhsuh);
          }
      }, {
          key: 'activate',
          value: function activate() {
              this.setState({
                  active: true
              });
          }
      }, {
          key: 'displayResult',
          value: function displayResult(number) {
              this.setState({
                  result: number
              });
              _pubsubJs2['default'].publishSync('button_press', 'hello world!');
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'StaticLabelResult' },
                  _react2['default'].createElement(
                      'div',
                      { onClick: this.displayResult.bind(this, 100),
                          className: 'StaticLabelResult-container' },
                      _react2['default'].createElement(
                          'p',
                          { className: 'StaticLabelResult-text' },
                          ' ',
                          this.state.result,
                          ' '
                      )
                  )
              );
          }
      }]);
  
      var _StaticLabelResult = StaticLabelResult;
      StaticLabelResult = (0, _decoratorsWithStyles2['default'])(_StaticLabelResultCss2['default'])(StaticLabelResult) || StaticLabelResult;
      StaticLabelResult = (0, _decoratorsWithViewport2['default'])(StaticLabelResult) || StaticLabelResult;
      return StaticLabelResult;
  })(_react2['default'].Component);
  
  exports['default'] = StaticLabelResult;
  module.exports = exports['default'];

  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "StaticLabelResult.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }

})
//# sourceMappingURL=0.fd9f0622ddade12a3c28.hot-update.js.map