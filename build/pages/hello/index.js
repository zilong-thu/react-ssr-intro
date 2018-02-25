'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CommonJS modules


var HelloWorldPage = function (_React$Component) {
  _inherits(HelloWorldPage, _React$Component);

  function HelloWorldPage() {
    _classCallCheck(this, HelloWorldPage);

    var _this = _possibleConstructorReturn(this, (HelloWorldPage.__proto__ || Object.getPrototypeOf(HelloWorldPage)).call(this));

    console.log('\n组件生命周期方法: constructor');
    return _this;
  }

  _createClass(HelloWorldPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('组件生命周期方法: componentWillMount');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('组件生命周期方法: componentDidMount');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Hello World!'
        ),
        _react2.default.createElement(
          'div',
          null,
          Math.random()
        )
      );
    }
  }]);

  return HelloWorldPage;
}(_react2.default.Component);

exports.default = HelloWorldPage;