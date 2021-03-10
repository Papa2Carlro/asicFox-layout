// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/faq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Faq = /*#__PURE__*/function () {
  function Faq(faq) {
    _classCallCheck(this, Faq);

    this.$faq = faq;
  }

  _createClass(Faq, [{
    key: "init",
    value: function init() {
      this.$faq.addEventListener('click', function (event) {
        var faqTitle = event.target.closest('.faq__question-title');
        var faq = faqTitle.parentElement;

        if (faqTitle) {
          var body = faq.querySelector('.faq__question-body');
          var bodyH = body.querySelector('p').offsetHeight;

          if (!faq.classList.contains('faq__question--open')) {
            faq.classList.add('faq__question--open');
            body.setAttribute('style', "height: ".concat(bodyH, "px"));
          } else {
            faq.classList.remove('faq__question--open');
            body.setAttribute('style', 'height: 0');
          }
        }
      });
    }
  }]);

  return Faq;
}();

exports.default = Faq;
},{}],"js/utils/tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs = /*#__PURE__*/function () {
  function Tabs(tabs) {
    _classCallCheck(this, Tabs);

    this.$tabs = tabs;
    this.tab = this.$tabs.querySelectorAll('[data-tabs]');
    this.contant = this.$tabs.querySelectorAll('[data-content]');
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$tabs.addEventListener('click', function (e) {
        var target = e.target.closest('.product-tabs__header-item');

        if (target) {
          var index = target.dataset.tabs;

          _this.tab.forEach(function (el) {
            return el.classList.remove('active');
          });

          _this.contant.forEach(function (el) {
            return el.classList.remove('visible');
          });

          _this.tab[index].classList.add('active');

          _this.contant[index].classList.add('visible');
        }
      });
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;
},{}],"../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":"../node_modules/axios/lib/helpers/bind.js"}],"../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"../node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"../node_modules/axios/lib/core/enhanceError.js"}],"../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"../node_modules/axios/lib/helpers/combineURLs.js"}],"../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./../core/settle":"../node_modules/axios/lib/core/settle.js","./../helpers/cookies":"../node_modules/axios/lib/helpers/cookies.js","./../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../node_modules/axios/lib/adapters/xhr.js","process":"../node_modules/process/browser.js"}],"../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./transformData":"../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../node_modules/axios/lib/defaults.js"}],"../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"../node_modules/axios/lib/utils.js","../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js"}],"../node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"../node_modules/axios/lib/cancel/Cancel.js"}],"../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}],"../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/bind":"../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../node_modules/axios/lib/defaults.js","./cancel/Cancel":"../node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError":"../node_modules/axios/lib/helpers/isAxiosError.js"}],"../node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../node_modules/axios/lib/axios.js"}],"assets/img/value/bitcoin.svg":[function(require,module,exports) {
module.exports = "/bitcoin.0665852c.svg";
},{}],"assets/img/value/ethereum.svg":[function(require,module,exports) {
module.exports = "/ethereum.ae92144f.svg";
},{}],"assets/img/value/zcash.svg":[function(require,module,exports) {
module.exports = "/zcash.4a0a2085.svg";
},{}],"assets/img/value/litecoin.svg":[function(require,module,exports) {
module.exports = "/litecoin.80b29d4f.svg";
},{}],"assets/img/value/monero.svg":[function(require,module,exports) {
module.exports = "/monero.668f8bba.svg";
},{}],"assets/img/value/fullcolor.svg":[function(require,module,exports) {
module.exports = "/fullcolor.7f584c5b.svg";
},{}],"assets/img/value/eferium-classic.svg":[function(require,module,exports) {
module.exports = "/eferium-classic.b59102f9.svg";
},{}],"js/utils/value.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _bitcoin = _interopRequireDefault(require("/assets/img/value/bitcoin.svg"));

var _ethereum = _interopRequireDefault(require("/assets/img/value/ethereum.svg"));

var _zcash = _interopRequireDefault(require("/assets/img/value/zcash.svg"));

var _litecoin = _interopRequireDefault(require("/assets/img/value/litecoin.svg"));

var _monero = _interopRequireDefault(require("/assets/img/value/monero.svg"));

var _fullcolor = _interopRequireDefault(require("/assets/img/value/fullcolor.svg"));

var _eferiumClassic = _interopRequireDefault(require("/assets/img/value/eferium-classic.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Value = /*#__PURE__*/function () {
  function Value(value) {
    _classCallCheck(this, Value);

    this.$value = value;
    this.link = "".concat(window.location.href, "wp-content/themes/asicfox/assets/"); // this.link = ''

    this.value = [{
      title: 'Bitcoin',
      price: '$36 522.00',
      status: 'up',
      difference: .37,
      logo: _bitcoin.default
    }, {
      title: 'Ethereum',
      price: '$1 569.89',
      status: 'down',
      difference: .37,
      logo: _ethereum.default
    }, {
      title: 'Zcash',
      price: '$94.92',
      status: 'up',
      difference: .37,
      logo: _zcash.default
    }, {
      title: 'Litecoin',
      price: '$36 522.00',
      status: 'up',
      difference: .37,
      logo: _litecoin.default
    }, {
      title: 'Monero',
      price: '$1 569.89',
      status: 'down',
      difference: .37,
      logo: _monero.default
    }, {
      title: 'Dash',
      price: '$94.92',
      status: 'down',
      difference: .37,
      logo: _fullcolor.default
    }, {
      title: 'Ethereum Classic',
      price: '$94.92',
      status: 'up',
      difference: .37,
      logo: _eferiumClassic.default
    }];
  }

  _createClass(Value, [{
    key: "mobile",
    value: function mobile() {
      var _this = this;

      this.value.length = 3;
      this.$value.textContent = '';
      this.value.map(function (content) {
        _this.$value.insertAdjacentHTML('beforeend', "\n                <div class=\"mobile__value-item\">\n                    <img src=\"".concat(_this.link + content.logo, "\" alt=\"\" class=\"mobile__value-image\">\n                    \n                    <div class=\"mobile__value-title\">").concat(content.title, "</div>\n\n                    <div class=\"mobile__value-price\">").concat(content.price, "</div>\n                </div>"));
      });
    }
  }, {
    key: "component",
    value: function component() {
      var _this2 = this;

      var $container = this.$value.querySelector('.value__container');
      $container.innerHTML = '';
      this.value.map(function (content) {
        $container.insertAdjacentHTML('beforeend', "\n                <div class=\"value__group\">\n                    <img src=\"".concat(_this2.link + content.logo, "\" alt=\"\" class=\"value__group-image\">\n        \n                    <div class=\"value__group-info\">\n                        <div class=\"value__group-title\">").concat(content.title, "</div>\n                        \n                        <div class=\"value__group-price\">\n                            <p>").concat(content.price, "</p>\n                            <b class=\"").concat(content.status, "\">\n                                <svg width=\"24\" height=\"17\" viewBox=\"0 0 24 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M24 8.5H2M2 8.5L9.33333 1M2 8.5L9.33333 16\" stroke-width=\"2\"/>\n                                </svg>\n                                ").concat(content.difference, "%\n                            </b>\n                        </div>\n                    </div>\n                </div>"));
      });
    }
  }, {
    key: "setData",
    value: function setData(i, data) {
      this.value[i].price = "$".concat(data.current_price.toLocaleString('en-US', {
        style: 'decimal'
      }));
      this.value[i].difference = data.price_change_percentage_24h > 0 ? data.price_change_percentage_24h.toFixed(2) : data.price_change_percentage_24h.toFixed(2).substring(1);
      this.value[i].status = data.price_change_percentage_24h > 0 ? 'up' : 'down';
    }
  }, {
    key: "init",
    value: function init(pos) {
      var _this3 = this;

      (0, _axios.default)('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(function (res) {
        _this3.setData(0, res.data[0]);

        _this3.setData(1, res.data[1]);

        _this3.setData(2, res.data[56]);

        _this3.setData(3, res.data[7]);

        _this3.setData(4, res.data[19]);

        _this3.setData(5, res.data[41]);

        _this3.setData(6, res.data[57]);

        if (pos === 'component') {
          _this3.component();
        } else if (pos === 'mobile') {
          _this3.mobile();
        }
      });
    }
  }]);

  return Value;
}();

exports.default = Value;
},{"axios":"../node_modules/axios/index.js","/assets/img/value/bitcoin.svg":"assets/img/value/bitcoin.svg","/assets/img/value/ethereum.svg":"assets/img/value/ethereum.svg","/assets/img/value/zcash.svg":"assets/img/value/zcash.svg","/assets/img/value/litecoin.svg":"assets/img/value/litecoin.svg","/assets/img/value/monero.svg":"assets/img/value/monero.svg","/assets/img/value/fullcolor.svg":"assets/img/value/fullcolor.svg","/assets/img/value/eferium-classic.svg":"assets/img/value/eferium-classic.svg"}],"js/utils/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(el) {
    _classCallCheck(this, Menu);

    this.$el = el;
    this.isOpened = false;
    this.$body = document.body;
    this.$btn = el.querySelector('#menu_btn');
    this.$menu = el.querySelector('.mobile');
    this.$header = el.querySelector('.header');
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this.fixed();
      this.mobile();
    }
  }, {
    key: "fixed",
    value: function fixed() {
      var _this = this;

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          _this.$header.classList.add('header--anim');

          document.body.classList.add('fixed__header');
          setTimeout(function () {
            return _this.$header.classList.add('header--fixed');
          }, 200);
        } else {
          document.body.classList.remove('fixed__header');

          _this.$header.classList.remove('header--fixed');

          _this.$header.classList.remove('header--anim');
        }
      });
    }
  }, {
    key: "action",
    value: function action() {
      this.isOpened = !this.isOpened;

      if (this.isOpened) {
        this.$btn.classList.add('open');
        this.$body.classList.add('fixed');
        this.$menu.classList.add('mobile--open');
      } else {
        this.$btn.classList.remove('open');
        this.$body.classList.remove('fixed');
        this.$menu.classList.remove('mobile--open');
      }
    }
  }, {
    key: "mobile",
    value: function mobile() {
      var _this2 = this;

      this.$btn.addEventListener('click', function () {
        return _this2.action();
      });
      document.body.addEventListener('click', function (event) {
        if (!event.target.closest('.mobile') && !event.target.closest('.header') && _this2.isOpened) _this2.action();
      });
    }
  }]);

  return Menu;
}();

exports.default = Menu;
},{}],"js/utils/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Theme = /*#__PURE__*/function () {
  function Theme(el) {
    _classCallCheck(this, Theme);

    this.$el = el;
    this.$dark = el.querySelector('#theme_dark');
    this.$white = el.querySelector('#theme_white');
    this.$mdark = el.querySelector('#m_theme_dark');
    this.$mwhite = el.querySelector('#m_theme_white');
  }

  _createClass(Theme, [{
    key: "change",
    value: function change(theme) {
      switch (theme) {
        case 'dark':
          localStorage.setItem('theme', 'dark');
          this.$el.classList.add('dark');
          this.$el.classList.remove('white');
          this.$dark.classList.add('active');
          this.$white.classList.remove('active');
          this.$mdark.classList.add('active');
          this.$mwhite.classList.remove('active');
          break;

        case 'white':
          localStorage.setItem('theme', 'white');
          this.$el.classList.add('white');
          this.$el.classList.remove('dark');
          this.$white.classList.add('active');
          this.$dark.classList.remove('active');
          this.$mwhite.classList.add('active');
          this.$mdark.classList.remove('active');
          break;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (localStorage.getItem('theme') === 'white') this.change('white');
      this.$dark.addEventListener('click', function () {
        return _this.change('dark');
      });
      this.$white.addEventListener('click', function () {
        return _this.change('white');
      });
      this.$mdark.addEventListener('click', function () {
        return _this.change('dark');
      });
      this.$mwhite.addEventListener('click', function () {
        return _this.change('white');
      });
    }
  }]);

  return Theme;
}();

exports.default = Theme;
},{}],"js/utils/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contact = /*#__PURE__*/function () {
  function Contact(el) {
    _classCallCheck(this, Contact);

    this.$el = el;
    this.state = false;
    this.$btn = el.querySelector('#contact_btn');
    this.$panel = el.querySelector('.header__contact');
  }

  _createClass(Contact, [{
    key: "click",
    value: function click() {
      var _this = this;

      this.state = !this.state;

      if (this.state) {
        this.$panel.classList.add('animation');
        this.$panel.classList.remove('active');
        setTimeout(function () {
          return _this.$panel.classList.remove('animation');
        }, 300);
      } else {
        this.$panel.classList.add('animation');
        setTimeout(function () {
          return _this.$panel.classList.add('active');
        }, 120);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.$btn.addEventListener('click', function () {
        return _this2.click();
      });
      document.body.addEventListener('click', function (event) {
        if (!event.target.closest('#contact_btn') && !event.target.closest('.header__contact') && !_this2.state) _this2.click();
      });
    }
  }]);

  return Contact;
}();

exports.default = Contact;
},{}],"js/utils/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search(search) {
    _classCallCheck(this, Search);

    this.$search = search;
    this.$body = this.$search.querySelector('.header__search');
  }

  _createClass(Search, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$search.addEventListener('click', function () {
        return _this.$body.classList.add('header__search--active');
      });
      document.body.addEventListener('click', function (event) {
        if (!event.target.closest('#search')) _this.$body.classList.remove('header__search--active');
      });
    }
  }]);

  return Search;
}();

exports.default = Search;
},{}],"js/utils/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("./menu"));

var _theme = _interopRequireDefault(require("./theme"));

var _contact = _interopRequireDefault(require("./contact"));

var _value = _interopRequireDefault(require("./value"));

var _search = _interopRequireDefault(require("./search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header(el) {
    _classCallCheck(this, Header);

    this.$el = el;
    this.$search = this.$el.querySelector('#search');
    this.$value = this.$el.querySelector('#m_value');
    this.$value = document.body.querySelector('#m_value');
  }

  _createClass(Header, [{
    key: "init",
    value: function init() {
      new _menu.default(this.$el).init();
      new _theme.default(this.$el).init();
      new _contact.default(this.$el).init();
      new _search.default(this.$search).init();
      new _value.default(this.$value).init('mobile');
    }
  }]);

  return Header;
}();

exports.default = Header;
},{"./menu":"js/utils/menu.js","./theme":"js/utils/theme.js","./contact":"js/utils/contact.js","./value":"js/utils/value.js","./search":"js/utils/search.js"}],"js/utils/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(slider) {
    _classCallCheck(this, Slider);

    this.$slider = slider;
    this.slide = 1;
    this.length = parseInt(this.$slider.dataset.length);
    this.imageW = 0;
    this.textrW = 0; // Component

    this.$text = this.$slider.querySelector('#slider_text');
    this.$dots = this.$slider.querySelector('#slider_dots');
    this.$image = this.$slider.querySelector('#slider_image'); // Control

    this.$left = this.$slider.querySelector('#slider_left');
    this.$right = this.$slider.querySelector('#slider_right');
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.mount();
      this.initStyles();
      this.initArr();
      this.initDots();
    }
  }, {
    key: "mount",
    value: function mount() {
      var style = "grid-template-columns: repeat(".concat(this.length, ", 100%); transform: translate");
      var textP = this.$text.querySelector('p');
      var $image = this.$slider.querySelector('#slider_image');
      var $text = this.$slider.querySelector('#slider_text');
      this.textrW = textP.offsetWidth;
      this.imageW = this.$image.offsetWidth;
      window.addEventListener("resize", function () {
        this.textrW = textP.offsetWidth;
        this.imageW = $image.offsetWidth;
        $text.setAttribute('style', "".concat(style, "(-").concat((this.slide - 1) * this.textrW, "px, 0)"));
        $image.setAttribute('style', "".concat(style, "(-").concat((this.slide - 1) * this.imageW, "px, 0)"));
      });
    }
  }, {
    key: "initArr",
    value: function initArr() {
      var _this = this;

      this.$left.addEventListener('click', function () {
        return _this.initSlide('left');
      });
      this.$right.addEventListener('click', function () {
        return _this.initSlide('right');
      });
    }
  }, {
    key: "change",
    value: function change() {
      this.controlArr();
      this.controlDots();
      this.textHandler();
      this.imageHandler();
    }
  }, {
    key: "textHandler",
    value: function textHandler() {
      var style = "grid-template-columns: repeat(".concat(this.length, ", 100%); transform: translate");
      this.$text.setAttribute('style', "".concat(style, "(-").concat((this.slide - 1) * this.textrW, "px, 0)"));
    }
  }, {
    key: "imageHandler",
    value: function imageHandler() {
      var style = "grid-template-columns: repeat(".concat(this.length, ", 100%); transform: translate");
      this.$image.setAttribute('style', "".concat(style, "(-").concat((this.slide - 1) * this.imageW, "px, 0)"));
    }
  }, {
    key: "initSlide",
    value: function initSlide(direction) {
      switch (direction) {
        case 'left':
          if (this.slide !== 1) {
            this.slide--;
            this.change();
          }

          break;

        case 'right':
          if (this.slide !== this.length) {
            this.slide++;
            this.change();
          }

          break;
      }
    }
  }, {
    key: "initDots",
    value: function initDots() {
      var _this2 = this;

      this.$dots.addEventListener('click', function (event) {
        var slide = event.target.closest('.dots');

        if (slide) {
          _this2.slide = parseInt(slide.id.split('N')[1]);

          _this2.change();
        }
      });
    }
  }, {
    key: "controlDots",
    value: function controlDots() {
      for (var i = 1; i <= this.length; i++) {
        var dot = this.$dots.querySelector("#slideN".concat(i));

        if (i === this.slide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      }
    }
  }, {
    key: "controlArr",
    value: function controlArr() {
      if (this.slide === 1) {
        this.$left.classList.add('disabled');
        this.$right.classList.remove('disabled');
      } else if (this.slide === this.length) {
        this.$right.classList.add('disabled');
        this.$left.classList.remove('disabled');
      } else {
        this.$left.classList.remove('disabled');
        this.$right.classList.remove('disabled');
      }
    }
  }, {
    key: "initStyles",
    value: function initStyles() {
      for (var i = 1; i <= this.length; i++) {
        this.$dots.insertAdjacentHTML('beforeend', "<div id=\"slideN".concat(i, "\" class=\"dots").concat(i === 1 ? ' active' : '', "\"></div>"));
      }

      this.$text.setAttribute('style', "grid-template-columns: repeat(".concat(this.length, ", 100%)"));
      this.$image.setAttribute('style', "grid-template-columns: repeat(".concat(this.length, ", 100%)"));
    }
  }]);

  return Slider;
}();

exports.default = Slider;
},{}],"js/utils/models.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Models = /*#__PURE__*/function () {
  function Models(models) {
    _classCallCheck(this, Models);

    this.$models = models;
    this.$tabs = this.$models.querySelector('.products__panel-tabs');
    this.list = ['$bit', '$zec', '$miner']; // Tabs

    this.$bit = this.$tabs.querySelector('[data-tabs="Bitcoin"]');
    this.$zec = this.$tabs.querySelector('[data-tabs="Zec"]');
    this.$miner = this.$tabs.querySelector('[data-tabs="Miner pack"]'); // List

    this.$bitList = this.$models.querySelector('[data-body="Bitcoin"]');
    this.$zecList = this.$models.querySelector('[data-body="Zec"]');
    this.$minerList = this.$models.querySelector('[data-body="Miner pack"]');
  }

  _createClass(Models, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.list.map(function (block) {
        _this["".concat(block)].addEventListener('click', function () {
          _this.list.map(function (el) {
            return _this["".concat(el)].classList.remove('active');
          });

          _this.list.map(function (el) {
            return _this["".concat(el, "List")].classList.remove('visible');
          });

          _this["".concat(block)].classList.add('active');

          _this["".concat(block, "List")].classList.add('visible');
        });
      });
    }
  }]);

  return Models;
}();

exports.default = Models;
},{}],"js/utils/loader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loader = /*#__PURE__*/function () {
  function Loader(loader) {
    _classCallCheck(this, Loader);

    this.$body = document.body;
    this.$loader = this.$body.querySelector(loader);
  }

  _createClass(Loader, [{
    key: "init",
    value: function init() {
      var _this = this;

      window.addEventListener('load', function () {
        _this.$body.classList.remove('fixed');

        _this.$loader.classList.add('hidden');
      });
    }
  }]);

  return Loader;
}();

exports.default = Loader;
},{}],"js/utils/variation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Variation = /*#__PURE__*/function () {
  function Variation(product) {
    _classCallCheck(this, Variation);

    this.$product = product;
    this.data = [{
      "attributes": {
        "attribute_pa_raspolozhenie": "sklad-kitai"
      },
      "availability_html": "<p class=\"stock out-of-stock\">\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438</p>\n",
      "backorders_allowed": false,
      "dimensions": {
        "length": "",
        "width": "",
        "height": ""
      },
      "dimensions_html": "\u041D/\u0414",
      "display_price": 5300,
      "display_regular_price": 5300,
      "image": {
        "title": "m20s-bitcoin",
        "caption": "",
        "url": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "alt": "m20s",
        "src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "srcset": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg 589w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-300x300.jpg 300w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-100x100.jpg 100w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-150x150.jpg 150w",
        "sizes": "(max-width: 589px) 100vw, 589px",
        "full_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "full_src_w": 589,
        "full_src_h": 589,
        "gallery_thumbnail_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-100x100.jpg",
        "gallery_thumbnail_src_w": 100,
        "gallery_thumbnail_src_h": 100,
        "thumb_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-300x300.jpg",
        "thumb_src_w": 300,
        "thumb_src_h": 300,
        "src_w": 589,
        "src_h": 589
      },
      "image_id": "16609",
      "is_downloadable": false,
      "is_in_stock": false,
      "is_purchasable": true,
      "is_sold_individually": "no",
      "is_virtual": false,
      "max_qty": "",
      "min_qty": 1,
      "price_html": "<span class=\"price\"><span class=\"electro-price\"><span class=\"woocs_price_code\" data-product-id=\"14544\"><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;<\/span>&nbsp;5 300<\/span><\/span><\/span><\/span>",
      "sku": "13964-14544",
      "variation_description": "",
      "variation_id": 14544,
      "variation_is_active": true,
      "variation_is_visible": true,
      "weight": "",
      "weight_html": "\u041D/\u0414"
    }, {
      "attributes": {
        "attribute_pa_raspolozhenie": "sklad-ukraina"
      },
      "availability_html": "<p class=\"stock out-of-stock\">\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438</p>\n",
      "backorders_allowed": false,
      "dimensions": {
        "length": "",
        "width": "",
        "height": ""
      },
      "dimensions_html": "\u041D/\u0414",
      "display_price": 5500,
      "display_regular_price": 5500,
      "image": {
        "title": "m20s-bitcoin",
        "caption": "",
        "url": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "alt": "m20s",
        "src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "srcset": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg 589w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-300x300.jpg 300w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-100x100.jpg 100w, https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-150x150.jpg 150w",
        "sizes": "(max-width: 589px) 100vw, 589px",
        "full_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin.jpg",
        "full_src_w": 589,
        "full_src_h": 589,
        "gallery_thumbnail_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-100x100.jpg",
        "gallery_thumbnail_src_w": 100,
        "gallery_thumbnail_src_h": 100,
        "thumb_src": "https:\/\/asicfox.ua\/wp-content\/uploads\/2019\/06\/m20s-bitcoin-300x300.jpg",
        "thumb_src_w": 300,
        "thumb_src_h": 300,
        "src_w": 589,
        "src_h": 589
      },
      "image_id": "16609",
      "is_downloadable": false,
      "is_in_stock": false,
      "is_purchasable": true,
      "is_sold_individually": "no",
      "is_virtual": false,
      "max_qty": "",
      "min_qty": 1,
      "price_html": "<span class=\"price\"><span class=\"electro-price\"><span class=\"woocs_price_code\" data-product-id=\"14543\"><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;<\/span>&nbsp;5 500<\/span><\/span><\/span><\/span>",
      "sku": "13964-14543",
      "variation_description": "",
      "variation_id": 14543,
      "variation_is_active": true,
      "variation_is_visible": true,
      "weight": "",
      "weight_html": "\u041D/\u0414"
    }];
  }

  _createClass(Variation, [{
    key: "init",
    value: function init() {}
  }]);

  return Variation;
}();

exports.default = Variation;
},{}],"js/utils/product.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variation = _interopRequireDefault(require("./variation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Product = /*#__PURE__*/function () {
  function Product(product) {
    _classCallCheck(this, Product);

    this.$product = product; // Slider

    this.active = 1;
    this.position = 0;
    this.count = this.$product.querySelector('.product-home__image-thumb').dataset.count;
    this.$list = this.$product.querySelector('.product-home__image-list');
    this.$image = this.$product.querySelector('.product-home__image-body');
    this.$thumbItems = this.$list.querySelectorAll('.product-home__image-item');
    this.$left = this.$product.querySelector('#left');
    this.$right = this.$product.querySelector('#right'); // Adaptive

    this.adaptive = false;
    this.height = 95;
    this.gap = 16;
  }

  _createClass(Product, [{
    key: "init",
    value: function init() {
      this.adaptiveHandler();
      this.styleInit();
      this.listHandler();
      this.sliderHandler();
      new _variation.default(this.$product).init();
    }
  }, {
    key: "adaptiveHandler",
    value: function adaptiveHandler() {
      var _this = this;

      var adaptive = function adaptive() {
        _this.adaptive = document.body.offsetWidth <= 768;
        _this.height = _this.adaptive ? 70 : 95;
        _this.gap = _this.adaptive ? 10 : 16;
      };

      adaptive();
      window.addEventListener('resize', function () {
        adaptive();
        _this.$list.style.transform = _this.position ? "translate(-".concat(_this.position * (_this.height + _this.gap), "px,0)") : 'translate(0,0)';
      });
    }
  }, {
    key: "sliderHandler",
    value: function sliderHandler() {
      var _this2 = this;

      this.$left.addEventListener('click', function () {
        return _this2.arrowHandler('<');
      });
      this.$right.addEventListener('click', function () {
        return _this2.arrowHandler('>');
      });
    }
  }, {
    key: "arrowHandler",
    value: function arrowHandler(direction) {
      switch (direction) {
        case '>':
          if (this.position < this.count - 3) {
            this.position++;
            if (this.active < this.position + 1) this.changeImage(this.$thumbItems[this.active]);
            if (this.position) this.$list.style.transform = "translate(-".concat(this.position * (this.height + this.gap), "px,0)");
          }

          break;

        case '<':
          if (this.position > 0) {
            this.position--;
            if (this.active > this.position + 3) this.changeImage(this.$thumbItems[this.active - 2]);
            this.$list.style.transform = this.position ? "translate(-".concat(this.position * (this.height + this.gap), "px,0)") : 'translate(0,0)';
          }

          break;
      }
    }
  }, {
    key: "listHandler",
    value: function listHandler() {
      var _this3 = this;

      this.$list.addEventListener('click', function (e) {
        var $imageBlock = e.target.closest('.product-home__image-item');
        if ($imageBlock && !$imageBlock.classList.contains('active')) _this3.changeImage($imageBlock);
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage($image) {
      var _this4 = this;

      this.$thumbItems.forEach(function (thumb) {
        return thumb.classList.remove('active');
      });
      $image.classList.add('active');
      this.active = $image.dataset.pos;
      var $img = this.$image.querySelector('img');
      var src = $image.querySelector('img').getAttribute('src');
      this.$image.classList.add('hide');
      setTimeout(function () {
        $img.setAttribute('src', src);

        _this4.$image.classList.remove('hide');
      }, 300);
    }
  }, {
    key: "styleInit",
    value: function styleInit() {
      var width = this.count * this.height + (this.count - 1) * this.gap;
      this.$list.setAttribute('style', "width: ".concat(width, "px"));
    }
  }]);

  return Product;
}();

exports.default = Product;
},{"./variation":"js/utils/variation.js"}],"js/utils/catalog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Catalog = /*#__PURE__*/function () {
  function Catalog(catalog) {
    _classCallCheck(this, Catalog);

    this.$catalog = catalog;
    this.$close = this.$catalog.querySelector('.catalog__body-close');
    this.$btn = this.$catalog.querySelector('.catalog__header-filter');
    this.$sidebar = this.$catalog.querySelector('.catalog__body-sidebar');
  }

  _createClass(Catalog, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$btn.addEventListener('click', function () {
        _this.$sidebar.classList.add('open');

        document.body.classList.add('fixed');
      });
      this.$close.addEventListener('click', function () {
        _this.$sidebar.classList.remove('open');

        document.body.classList.remove('fixed');
      });
    }
  }]);

  return Catalog;
}();

exports.default = Catalog;
},{}],"js/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faq = _interopRequireDefault(require("./utils/faq"));

var _tabs = _interopRequireDefault(require("./utils/tabs"));

var _value = _interopRequireDefault(require("./utils/value"));

var _header = _interopRequireDefault(require("./utils/header"));

var _slider = _interopRequireDefault(require("./utils/slider"));

var _models = _interopRequireDefault(require("./utils/models"));

var _loader = _interopRequireDefault(require("./utils/loader"));

var _product = _interopRequireDefault(require("./utils/product"));

var _catalog = _interopRequireDefault(require("./utils/catalog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(el) {
    _classCallCheck(this, App);

    this.$el = document.body.querySelector(el);
    this.$faq = this.$el.querySelector('#faq');
    this.$tabs = this.$el.querySelector('#tabs');
    this.$value = this.$el.querySelector('#value');
    this.$slider = this.$el.querySelector('#slider');
    this.$models = this.$el.querySelector('#models');
    this.$product = this.$el.querySelector('#product');
    this.$catalog = this.$el.querySelector('#catalog');
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      console.info('App start initialization'); // Loader

      new _loader.default('#loader').init(); // Header

      new _header.default(this.$el).init(); // Pages

      if (this.$faq) new _faq.default(this.$faq).init();
      if (this.$tabs) new _tabs.default(this.$tabs).init();
      if (this.$slider) new _slider.default(this.$slider).init();
      if (this.$models) new _models.default(this.$models).init();
      if (this.$product) new _product.default(this.$product).init();
      if (this.$catalog) new _catalog.default(this.$catalog).init();
      if (this.$value) new _value.default(this.$value).init('component');
      console.info('App end initialization');
    }
  }]);

  return App;
}();

exports.default = App;
},{"./utils/faq":"js/utils/faq.js","./utils/tabs":"js/utils/tabs.js","./utils/value":"js/utils/value.js","./utils/header":"js/utils/header.js","./utils/slider":"js/utils/slider.js","./utils/models":"js/utils/models.js","./utils/loader":"js/utils/loader.js","./utils/product":"js/utils/product.js","./utils/catalog":"js/utils/catalog.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"D:\\Проекты\\asicfox\\src\\assets\\fonts\\Gilroy-Regular.woff":[["Gilroy-Regular.28ecdc2a.woff","assets/fonts/Gilroy-Regular.woff"],"assets/fonts/Gilroy-Regular.woff"],"D:\\Проекты\\asicfox\\src\\assets\\fonts\\Gilroy-Bold.woff":[["Gilroy-Bold.8ab3ce74.woff","assets/fonts/Gilroy-Bold.woff"],"assets/fonts/Gilroy-Bold.woff"],"D:\\Проекты\\asicfox\\src\\assets\\fonts\\Gilroy-Extrabold.woff":[["Gilroy-Extrabold.49678370.woff","assets/fonts/Gilroy-Extrabold.woff"],"assets/fonts/Gilroy-Extrabold.woff"],"D:\\Проекты\\asicfox\\src\\assets\\img\\orange\\tr.png":[["tr.6b110100.png","assets/img/orange/tr.png"],"assets/img/orange/tr.png"],"D:\\Проекты\\asicfox\\src\\assets\\img\\orange\\lb.png":[["lb.e8b2b866.png","assets/img/orange/lb.png"],"assets/img/orange/lb.png"],"./..\\assets\\img\\icon\\arr-b.svg":[["arr-b.30bf0228.svg","assets/img/icon/arr-b.svg"],"assets/img/icon/arr-b.svg"],"./..\\assets\\img\\icon\\arr-bblack.svg":[["arr-bblack.0aaa5b78.svg","assets/img/icon/arr-bblack.svg"],"assets/img/icon/arr-bblack.svg"],"D:\\Проекты\\asicfox\\src\\assets\\img\\super\\star.svg":[["star.a757a23d.svg","assets/img/super/star.svg"],"assets/img/super/star.svg"],"D:\\Проекты\\asicfox\\src\\assets\\img\\super\\activestar.svg":[["activestar.08db1ff1.svg","assets/img/super/activestar.svg"],"assets/img/super/activestar.svg"],"D:\\Проекты\\asicfox\\src\\assets\\img\\super\\empty.svg":[["empty.0e82013b.svg","assets/img/super/empty.svg"],"assets/img/super/empty.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App"));

require("../sass/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _App.default('#app').init();
},{"./App":"js/App.js","../sass/style.scss":"sass/style.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50089" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map