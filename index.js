"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = (function () {
    function Manager(store, state) {
        _classCallCheck(this, Manager);

        store.state = {};
        this.state = store.state[store.displayName] = state;
    }

    _createClass(Manager, [{
        key: "get",
        value: function get(name) {
            return !name ? this.state : this.state[name];
        }
    }, {
        key: "set",
        value: function set(state) {
            for (var key in state) {
                if (!state.hasOwnProperty(key)) {
                    continue;
                }
                this.state[key] = state[key];
            }
        }
    }, {
        key: "concat",
        value: function concat(state) {
            for (var key in state) {
                if (!state.hasOwnProperty(key)) {
                    continue;
                }
                var value = state[key];
                if (value instanceof Array) {
                    this.state[key] = this.state[key] ? this.state[key] : [];
                    this.state[key] = this.state[key].concat(value);
                    return;
                }
                this.state[key] = value;
            }
        }
    }]);

    return Manager;
})();

exports["default"] = Manager;
module.exports = exports["default"];
