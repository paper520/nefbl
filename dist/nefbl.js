/*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.0
 *
 * Copyright (c) 2019-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Wed Sep 15 2021 09:52:48 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var Nefbl = {}; // 根据运行环境，导出接口

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());