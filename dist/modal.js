"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalMessage(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-msg"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn"
  }, "X"), /*#__PURE__*/_react.default.createElement("p", null, message))));
}
ModalMessage.propTypes = {
  // setVar: PropTypes.func.isRequired,
  message: _propTypes.default.string.isRequired
};
var _default = ModalMessage;
exports.default = _default;