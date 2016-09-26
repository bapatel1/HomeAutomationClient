webpackJsonp([2,4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(796);


/***/ },

/***/ 644:
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
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
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
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
	    while(len) {
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
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	__webpack_require__(797);
	__webpack_require__(798);
	var production = false;
	try {
	    production = (process.env.ENV === 'production');
	}
	catch (e) { }
	if (production) {
	}
	else {
	    // Development
	    Error['stackTraceLimit'] = Infinity;
	    __webpack_require__(799);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(644)))

/***/ },

/***/ 797:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    var hasOwn = Object.prototype.hasOwnProperty;
	    // feature test for Object.create support
	    var supportsCreate = typeof Object.create === "function";
	    // feature test for __proto__ support
	    var supportsProto = (function () {
	        var sentinel = {};
	        function __() { }
	        __.prototype = sentinel;
	        var instance = new __();
	        return instance.__proto__ === sentinel;
	    })();
	    // create an object in dictionary mode (a.k.a. "slow" mode in v8)
	    var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
	        supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
	            function () { return MakeDictionary({}); };
	    var HashMap;
	    (function (HashMap) {
	        var downLevel = !supportsCreate && !supportsProto;
	        HashMap.has = downLevel
	            ? function (map, key) { return hasOwn.call(map, key); }
	            : function (map, key) { return key in map; };
	        HashMap.get = downLevel
	            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
	            : function (map, key) { return map[key]; };
	    })(HashMap || (HashMap = {}));
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var Metadata = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Example = Reflect.decorate(decoratorsArray, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(Example, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(Example.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            if (IsUndefined(targetKey))
	                throw new TypeError();
	            if (!IsObject(targetDescriptor))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsConstructor(target))
	                throw new TypeError();
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class Example {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target))
	                    throw new TypeError();
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target))
	                    throw new TypeError();
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#deletemetadata-metadatakey-p-
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return false;
	        if (!metadataMap.delete(metadataKey))
	            return false;
	        if (metadataMap.size > 0)
	            return true;
	        var targetMetadata = Metadata.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0)
	            return true;
	        Metadata.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated))
	                    throw new TypeError();
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated))
	                    throw new TypeError();
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = Metadata.get(target);
	        if (!targetMetadata) {
	            if (!create)
	                return undefined;
	            targetMetadata = new _Map();
	            Metadata.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create)
	                return undefined;
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return true;
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryHasMetadata(MetadataKey, parent, P) : false;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap !== undefined && Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryGetMetadata(MetadataKey, parent, P) : undefined;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null)
	            return ownKeys;
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0)
	            return ownKeys;
	        if (ownKeys.length <= 0)
	            return parentKeys;
	        var keys = new _Set();
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            keys.add(key);
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            keys.add(key);
	        }
	        return getKeys(keys);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap)
	            forEach(metadataMap, function (_, key) { return keys.push(key); });
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray ? Array.isArray(x) : x instanceof Array || Object.prototype.toString.call(x) === "[object Array]";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        return IsSymbol(value) ? value : String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype)
	            return proto;
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass Exampleonstructor. Compatible implementations
	        // must either set __proto__ on a subclass Exampleonstructor to the superclass Exampleonstructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype)
	            return proto;
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype)
	            return proto;
	        // If the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function")
	            return proto;
	        // If we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O)
	            return proto;
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    function IteratorStep(iterator) {
	        var result = iterator.next();
	        return result.done ? undefined : result;
	    }
	    function IteratorClose(iterator) {
	        var f = iterator["return"];
	        if (f)
	            f.call(iterator);
	    }
	    function forEach(source, callback, thisArg) {
	        var entries = source.entries;
	        if (typeof entries === "function") {
	            var iterator = entries.call(source);
	            var result;
	            try {
	                while (result = IteratorStep(iterator)) {
	                    var _a = result.value, key = _a[0], value = _a[1];
	                    callback.call(thisArg, value, key, source);
	                }
	            }
	            finally {
	                if (result)
	                    IteratorClose(iterator);
	            }
	        }
	        else {
	            var forEach_1 = source.forEach;
	            if (typeof forEach_1 === "function") {
	                forEach_1.call(source, callback, thisArg);
	            }
	        }
	    }
	    function getKeys(source) {
	        var keys = [];
	        forEach(source, function (_, key) { keys.push(key); });
	        return keys;
	    }
	    // naive MapIterator shim
	    function CreateMapIterator(keys, values, kind) {
	        var index = 0;
	        return {
	            next: function () {
	                if ((keys || values) && index < (keys || values).length) {
	                    var current = index++;
	                    switch (kind) {
	                        case "key": return { value: keys[current], done: false };
	                        case "value": return { value: values[current], done: false };
	                        case "key+value": return { value: [keys[current], values[current]], done: false };
	                    }
	                }
	                keys = undefined;
	                values = undefined;
	                return { value: undefined, done: true };
	            },
	            "throw": function (error) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                throw error;
	            },
	            "return": function (value) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                return { value: value, done: true };
	            }
	        };
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        return (function () {
	            function Map() {
	                this._keys = [];
	                this._values = [];
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            }
	            Object.defineProperty(Map.prototype, "size", {
	                get: function () { return this._keys.length; },
	                enumerable: true,
	                configurable: true
	            });
	            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
	            Map.prototype.get = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                return index >= 0 ? this._values[index] : undefined;
	            };
	            Map.prototype.set = function (key, value) {
	                var index = this._find(key, /*insert*/ true);
	                this._values[index] = value;
	                return this;
	            };
	            Map.prototype.delete = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                if (index >= 0) {
	                    var size = this._keys.length;
	                    for (var i = index + 1; i < size; i++) {
	                        this._keys[i - 1] = this._keys[i];
	                        this._values[i - 1] = this._values[i];
	                    }
	                    this._keys.length--;
	                    this._values.length--;
	                    this._cacheKey = cacheSentinel;
	                    this._cacheIndex = -2;
	                    return true;
	                }
	                return false;
	            };
	            Map.prototype.clear = function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            };
	            Map.prototype.keys = function () { return CreateMapIterator(this._keys, /*values*/ undefined, "key"); };
	            Map.prototype.values = function () { return CreateMapIterator(/*keys*/ undefined, this._values, "value"); };
	            Map.prototype.entries = function () { return CreateMapIterator(this._keys, this._values, "key+value"); };
	            Map.prototype._find = function (key, insert) {
	                if (this._cacheKey === key)
	                    return this._cacheIndex;
	                var index = this._keys.indexOf(key);
	                if (index < 0 && insert) {
	                    index = this._keys.length;
	                    this._keys.push(key);
	                    this._values.push(undefined);
	                }
	                return this._cacheKey = key, this._cacheIndex = index;
	            };
	            return Map;
	        })();
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        return (function () {
	            function Set() {
	                this._map = new _Map();
	            }
	            Object.defineProperty(Set.prototype, "size", {
	                get: function () { return this._map.size; },
	                enumerable: true,
	                configurable: true
	            });
	            Set.prototype.has = function (value) { return this._map.has(value); };
	            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
	            Set.prototype.delete = function (value) { return this._map.delete(value); };
	            Set.prototype.clear = function () { this._map.clear(); };
	            Set.prototype.keys = function () { return this._map.keys(); };
	            Set.prototype.values = function () { return this._map.values(); };
	            Set.prototype.entries = function () { return this._map.entries(); };
	            return Set;
	        })();
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var keys = createDictionary();
	        var rootKey = CreateUniqueKey();
	        return (function () {
	            function WeakMap() {
	                this._key = CreateUniqueKey();
	            }
	            WeakMap.prototype.has = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.has(table, this._key) : false;
	            };
	            WeakMap.prototype.get = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.get(table, this._key) : undefined;
	            };
	            WeakMap.prototype.set = function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            };
	            WeakMap.prototype.delete = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? delete table[this._key] : false;
	            };
	            WeakMap.prototype.clear = function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            };
	            return WeakMap;
	        })();
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i)
	                buffer[i] = Math.random() * 0xff | 0;
	            return buffer;
	        }
	        function GenRandomBytes(size) {
	            if (typeof Uint8Array === "function") {
	                if (typeof crypto !== "undefined")
	                    return crypto.getRandomValues(new Uint8Array(size));
	                if (typeof msCrypto !== "undefined")
	                    return msCrypto.getRandomValues(new Uint8Array(size));
	                return FillRandomBytes(new Uint8Array(size), size);
	            }
	            return FillRandomBytes(new Array(size), size);
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8)
	                    result += "-";
	                if (byte < 16)
	                    result += "0";
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do
	                key = "@@WeakMap@@" + CreateUUID();
	            while (HashMap.has(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create)
	                    return undefined;
	                Object.defineProperty(target, rootKey, { value: createDictionary() });
	            }
	            return target[rootKey];
	        }
	    }
	    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
	    function MakeDictionary(obj) {
	        obj.__DICTIONARY_MODE__ = 1;
	        delete obj.____DICTIONARY_MODE__;
	        return obj;
	    }
	    // patch global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    if (hasOwn.call(Reflect, p)) {
	                        __global.Reflect[p] = Reflect[p];
	                    }
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/******/ (function(modules) { // webpackBootstrap
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
	
		/* WEBPACK VAR INJECTION */(function(global) {"use strict";
		__webpack_require__(1);
		var event_target_1 = __webpack_require__(2);
		var define_property_1 = __webpack_require__(4);
		var register_element_1 = __webpack_require__(5);
		var property_descriptor_1 = __webpack_require__(6);
		var timers_1 = __webpack_require__(8);
		var utils_1 = __webpack_require__(3);
		var set = 'set';
		var clear = 'clear';
		var blockingMethods = ['alert', 'prompt', 'confirm'];
		var _global = typeof window == 'undefined' ? global : window;
		timers_1.patchTimer(_global, set, clear, 'Timeout');
		timers_1.patchTimer(_global, set, clear, 'Interval');
		timers_1.patchTimer(_global, set, clear, 'Immediate');
		timers_1.patchTimer(_global, 'request', 'cancelMacroTask', 'AnimationFrame');
		timers_1.patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
		timers_1.patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
		for (var i = 0; i < blockingMethods.length; i++) {
		    var name = blockingMethods[i];
		    utils_1.patchMethod(_global, name, function (delegate, symbol, name) {
		        return function (s, args) {
		            return Zone.current.run(delegate, _global, args, name);
		        };
		    });
		}
		event_target_1.eventTargetPatch(_global);
		property_descriptor_1.propertyDescriptorPatch(_global);
		utils_1.patchClass('MutationObserver');
		utils_1.patchClass('WebKitMutationObserver');
		utils_1.patchClass('FileReader');
		define_property_1.propertyPatch();
		register_element_1.registerElementPatch(_global);
		// Treat XMLHTTPRequest as a macrotask.
		patchXHR(_global);
		var XHR_TASK = utils_1.zoneSymbol('xhrTask');
		function patchXHR(window) {
		    function findPendingTask(target) {
		        var pendingTask = target[XHR_TASK];
		        return pendingTask;
		    }
		    function scheduleTask(task) {
		        var data = task.data;
		        data.target.addEventListener('readystatechange', function () {
		            if (data.target.readyState === XMLHttpRequest.DONE) {
		                if (!data.aborted) {
		                    task.invoke();
		                }
		            }
		        });
		        var storedTask = data.target[XHR_TASK];
		        if (!storedTask) {
		            data.target[XHR_TASK] = task;
		        }
		        setNative.apply(data.target, data.args);
		        return task;
		    }
		    function placeholderCallback() {
		    }
		    function clearTask(task) {
		        var data = task.data;
		        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
		        // to prevent it from firing. So instead, we store info for the event listener.
		        data.aborted = true;
		        return clearNative.apply(data.target, data.args);
		    }
		    var setNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
		        var zone = Zone.current;
		        var options = {
		            target: self,
		            isPeriodic: false,
		            delay: null,
		            args: args,
		            aborted: false
		        };
		        return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
		    }; });
		    var clearNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
		        var task = findPendingTask(self);
		        if (task && typeof task.type == 'string') {
		            // If the XHR has already completed, do nothing.
		            if (task.cancelFn == null) {
		                return;
		            }
		            task.zone.cancelTask(task);
		        }
		        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task to cancel. Do nothing.
		    }; });
		}
		/// GEO_LOCATION
		if (_global['navigator'] && _global['navigator'].geolocation) {
		    utils_1.patchPrototype(_global['navigator'].geolocation, [
		        'getCurrentPosition',
		        'watchPosition'
		    ]);
		}
	
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {;
		;
		var Zone = (function (global) {
		    var Zone = (function () {
		        function Zone(parent, zoneSpec) {
		            this._properties = null;
		            this._parent = parent;
		            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
		            this._properties = zoneSpec && zoneSpec.properties || {};
		            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
		        }
		        Object.defineProperty(Zone, "current", {
		            get: function () { return _currentZone; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone, "currentTask", {
		            get: function () { return _currentTask; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone.prototype, "parent", {
		            get: function () { return this._parent; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone.prototype, "name", {
		            get: function () { return this._name; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Zone.prototype.get = function (key) {
		            var current = this;
		            while (current) {
		                if (current._properties.hasOwnProperty(key)) {
		                    return current._properties[key];
		                }
		                current = current._parent;
		            }
		        };
		        Zone.prototype.fork = function (zoneSpec) {
		            if (!zoneSpec)
		                throw new Error('ZoneSpec required!');
		            return this._zoneDelegate.fork(this, zoneSpec);
		        };
		        Zone.prototype.wrap = function (callback, source) {
		            if (typeof callback !== 'function') {
		                throw new Error('Expecting function got: ' + callback);
		            }
		            var _callback = this._zoneDelegate.intercept(this, callback, source);
		            var zone = this;
		            return function () {
		                return zone.runGuarded(_callback, this, arguments, source);
		            };
		        };
		        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
		            if (applyThis === void 0) { applyThis = null; }
		            if (applyArgs === void 0) { applyArgs = null; }
		            if (source === void 0) { source = null; }
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
		            }
		            finally {
		                _currentZone = oldZone;
		            }
		        };
		        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
		            if (applyThis === void 0) { applyThis = null; }
		            if (applyArgs === void 0) { applyArgs = null; }
		            if (source === void 0) { source = null; }
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                try {
		                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
		                }
		                catch (error) {
		                    if (this._zoneDelegate.handleError(this, error)) {
		                        throw error;
		                    }
		                }
		            }
		            finally {
		                _currentZone = oldZone;
		            }
		        };
		        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
		            task.runCount++;
		            if (task.zone != this)
		                throw new Error('A task can only be run in the zone which created it! (Creation: ' +
		                    task.zone.name + '; Execution: ' + this.name + ')');
		            var previousTask = _currentTask;
		            _currentTask = task;
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
		                    task.cancelFn = null;
		                }
		                try {
		                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
		                }
		                catch (error) {
		                    if (this._zoneDelegate.handleError(this, error)) {
		                        throw error;
		                    }
		                }
		            }
		            finally {
		                _currentZone = oldZone;
		                _currentTask = previousTask;
		            }
		        };
		        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
		        };
		        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
		        };
		        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
		        };
		        Zone.prototype.cancelTask = function (task) {
		            var value = this._zoneDelegate.cancelTask(this, task);
		            task.runCount = -1;
		            task.cancelFn = null;
		            return value;
		        };
		        Zone.__symbol__ = __symbol__;
		        return Zone;
		    }());
		    ;
		    var ZoneDelegate = (function () {
		        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
		            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
		            this.zone = zone;
		            this._parentDelegate = parentDelegate;
		            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
		            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
		            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
		            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
		            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
		            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
		            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
		            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
		            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
		            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
		            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
		            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
		            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
		            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
		            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
		            this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
		        }
		        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
		            return this._forkZS
		                ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
		                : new Zone(targetZone, zoneSpec);
		        };
		        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
		            return this._interceptZS
		                ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
		                : callback;
		        };
		        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
		            return this._invokeZS
		                ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
		                : callback.apply(applyThis, applyArgs);
		        };
		        ZoneDelegate.prototype.handleError = function (targetZone, error) {
		            return this._handleErrorZS
		                ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
		                : true;
		        };
		        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
		            try {
		                if (this._scheduleTaskZS) {
		                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
		                }
		                else if (task.scheduleFn) {
		                    task.scheduleFn(task);
		                }
		                else if (task.type == 'microTask') {
		                    scheduleMicroTask(task);
		                }
		                else {
		                    throw new Error('Task is missing scheduleFn.');
		                }
		                return task;
		            }
		            finally {
		                if (targetZone == this.zone) {
		                    this._updateTaskCount(task.type, 1);
		                }
		            }
		        };
		        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
		            try {
		                return this._invokeTaskZS
		                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
		                    : task.callback.apply(applyThis, applyArgs);
		            }
		            finally {
		                if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
		                    this._updateTaskCount(task.type, -1);
		                }
		            }
		        };
		        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
		            var value;
		            if (this._cancelTaskZS) {
		                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
		            }
		            else if (!task.cancelFn) {
		                throw new Error('Task does not support cancellation, or is already canceled.');
		            }
		            else {
		                value = task.cancelFn(task);
		            }
		            if (targetZone == this.zone) {
		                // this should not be in the finally block, because exceptions assume not canceled.
		                this._updateTaskCount(task.type, -1);
		            }
		            return value;
		        };
		        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
		            return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
		        };
		        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
		            var counts = this._taskCounts;
		            var prev = counts[type];
		            var next = counts[type] = prev + count;
		            if (next < 0) {
		                throw new Error('More tasks executed then were scheduled.');
		            }
		            if (prev == 0 || next == 0) {
		                var isEmpty = {
		                    microTask: counts.microTask > 0,
		                    macroTask: counts.macroTask > 0,
		                    eventTask: counts.eventTask > 0,
		                    change: type
		                };
		                try {
		                    this.hasTask(this.zone, isEmpty);
		                }
		                finally {
		                    if (this._parentDelegate) {
		                        this._parentDelegate._updateTaskCount(type, count);
		                    }
		                }
		            }
		        };
		        return ZoneDelegate;
		    }());
		    var ZoneTask = (function () {
		        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
		            this.runCount = 0;
		            this.type = type;
		            this.zone = zone;
		            this.source = source;
		            this.data = options;
		            this.scheduleFn = scheduleFn;
		            this.cancelFn = cancelFn;
		            this.callback = callback;
		            var self = this;
		            this.invoke = function () {
		                try {
		                    return zone.runTask(self, this, arguments);
		                }
		                finally {
		                    drainMicroTaskQueue();
		                }
		            };
		        }
		        return ZoneTask;
		    }());
		    function __symbol__(name) { return '__zone_symbol__' + name; }
		    ;
		    var symbolSetTimeout = __symbol__('setTimeout');
		    var symbolPromise = __symbol__('Promise');
		    var symbolThen = __symbol__('then');
		    var _currentZone = new Zone(null, null);
		    var _currentTask = null;
		    var _microTaskQueue = [];
		    var _isDrainingMicrotaskQueue = false;
		    var _uncaughtPromiseErrors = [];
		    var _drainScheduled = false;
		    function scheduleQueueDrain() {
		        if (!_drainScheduled && !_currentTask && _microTaskQueue.length == 0) {
		            // We are not running in Task, so we need to kickstart the microtask queue.
		            if (global[symbolPromise]) {
		                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
		            }
		            else {
		                global[symbolSetTimeout](drainMicroTaskQueue, 0);
		            }
		        }
		    }
		    function scheduleMicroTask(task) {
		        scheduleQueueDrain();
		        _microTaskQueue.push(task);
		    }
		    function consoleError(e) {
		        var rejection = e && e.rejection;
		        if (rejection) {
		            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection);
		        }
		        console.error(e);
		    }
		    function drainMicroTaskQueue() {
		        if (!_isDrainingMicrotaskQueue) {
		            _isDrainingMicrotaskQueue = true;
		            while (_microTaskQueue.length) {
		                var queue = _microTaskQueue;
		                _microTaskQueue = [];
		                for (var i = 0; i < queue.length; i++) {
		                    var task = queue[i];
		                    try {
		                        task.zone.runTask(task, null, null);
		                    }
		                    catch (e) {
		                        consoleError(e);
		                    }
		                }
		            }
		            while (_uncaughtPromiseErrors.length) {
		                var uncaughtPromiseErrors = _uncaughtPromiseErrors;
		                _uncaughtPromiseErrors = [];
		                var _loop_1 = function(i) {
		                    var uncaughtPromiseError = uncaughtPromiseErrors[i];
		                    try {
		                        uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
		                    }
		                    catch (e) {
		                        consoleError(e);
		                    }
		                };
		                for (var i = 0; i < uncaughtPromiseErrors.length; i++) {
		                    _loop_1(i);
		                }
		            }
		            _isDrainingMicrotaskQueue = false;
		            _drainScheduled = false;
		        }
		    }
		    function isThenable(value) {
		        return value && value.then;
		    }
		    function forwardResolution(value) { return value; }
		    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
		    var symbolState = __symbol__('state');
		    var symbolValue = __symbol__('value');
		    var source = 'Promise.then';
		    var UNRESOLVED = null;
		    var RESOLVED = true;
		    var REJECTED = false;
		    var REJECTED_NO_CATCH = 0;
		    function makeResolver(promise, state) {
		        return function (v) {
		            resolvePromise(promise, state, v);
		            // Do not return value or you will break the Promise spec.
		        };
		    }
		    function resolvePromise(promise, state, value) {
		        if (promise[symbolState] === UNRESOLVED) {
		            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
		                clearRejectedNoCatch(value);
		                resolvePromise(promise, value[symbolState], value[symbolValue]);
		            }
		            else if (isThenable(value)) {
		                value.then(makeResolver(promise, state), makeResolver(promise, false));
		            }
		            else {
		                promise[symbolState] = state;
		                var queue = promise[symbolValue];
		                promise[symbolValue] = value;
		                for (var i = 0; i < queue.length;) {
		                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
		                }
		                if (queue.length == 0 && state == REJECTED) {
		                    promise[symbolState] = REJECTED_NO_CATCH;
		                    try {
		                        throw new Error("Uncaught (in promise): " + value);
		                    }
		                    catch (e) {
		                        var error = e;
		                        error.rejection = value;
		                        error.promise = promise;
		                        error.zone = Zone.current;
		                        error.task = Zone.currentTask;
		                        _uncaughtPromiseErrors.push(error);
		                        scheduleQueueDrain();
		                    }
		                }
		            }
		        }
		        // Resolving an already resolved promise is a noop.
		        return promise;
		    }
		    function clearRejectedNoCatch(promise) {
		        if (promise[symbolState] === REJECTED_NO_CATCH) {
		            promise[symbolState] = REJECTED;
		            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
		                if (promise === _uncaughtPromiseErrors[i].promise) {
		                    _uncaughtPromiseErrors.splice(i, 1);
		                    break;
		                }
		            }
		        }
		    }
		    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
		        clearRejectedNoCatch(promise);
		        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
		        zone.scheduleMicroTask(source, function () {
		            try {
		                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
		            }
		            catch (error) {
		                resolvePromise(chainPromise, false, error);
		            }
		        });
		    }
		    var ZoneAwarePromise = (function () {
		        function ZoneAwarePromise(executor) {
		            var promise = this;
		            promise[symbolState] = UNRESOLVED;
		            promise[symbolValue] = []; // queue;
		            try {
		                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
		            }
		            catch (e) {
		                resolvePromise(promise, false, e);
		            }
		        }
		        ZoneAwarePromise.resolve = function (value) {
		            return resolvePromise(new this(null), RESOLVED, value);
		        };
		        ZoneAwarePromise.reject = function (error) {
		            return resolvePromise(new this(null), REJECTED, error);
		        };
		        ZoneAwarePromise.race = function (values) {
		            var resolve;
		            var reject;
		            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
		            function onResolve(value) { promise && (promise = null || resolve(value)); }
		            function onReject(error) { promise && (promise = null || reject(error)); }
		            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
		                var value = values_1[_i];
		                if (!isThenable(value)) {
		                    value = this.resolve(value);
		                }
		                value.then(onResolve, onReject);
		            }
		            return promise;
		        };
		        ZoneAwarePromise.all = function (values) {
		            var resolve;
		            var reject;
		            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
		            var count = 0;
		            var resolvedValues = [];
		            function onReject(error) { promise && reject(error); promise = null; }
		            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
		                var value = values_2[_i];
		                if (!isThenable(value)) {
		                    value = this.resolve(value);
		                }
		                value.then((function (index) { return function (value) {
		                    resolvedValues[index] = value;
		                    count--;
		                    if (promise && !count) {
		                        resolve(resolvedValues);
		                    }
		                    promise == null;
		                }; })(count), onReject);
		                count++;
		            }
		            if (!count)
		                resolve(resolvedValues);
		            return promise;
		        };
		        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
		            var chainPromise = new ZoneAwarePromise(null);
		            var zone = Zone.current;
		            if (this[symbolState] == UNRESOLVED) {
		                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
		            }
		            else {
		                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
		            }
		            return chainPromise;
		        };
		        ZoneAwarePromise.prototype.catch = function (onRejected) {
		            return this.then(null, onRejected);
		        };
		        return ZoneAwarePromise;
		    }());
		    var NativePromise = global[__symbol__('Promise')] = global.Promise;
		    global.Promise = ZoneAwarePromise;
		    if (NativePromise) {
		        var NativePromiseProtototype = NativePromise.prototype;
		        var NativePromiseThen_1 = NativePromiseProtototype[__symbol__('then')]
		            = NativePromiseProtototype.then;
		        NativePromiseProtototype.then = function (onResolve, onReject) {
		            var nativePromise = this;
		            return new ZoneAwarePromise(function (resolve, reject) {
		                NativePromiseThen_1.call(nativePromise, resolve, reject);
		            }).then(onResolve, onReject);
		        };
		    }
		    return global.Zone = Zone;
		})(typeof window === 'undefined' ? global : window);
	
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var utils_1 = __webpack_require__(3);
		var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
		var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
		var EVENT_TARGET = 'EventTarget';
		function eventTargetPatch(_global) {
		    var apis = [];
		    var isWtf = _global['wtf'];
		    if (isWtf) {
		        // Workaround for: https://github.com/google/tracing-framework/issues/555
		        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
		    }
		    else if (_global[EVENT_TARGET]) {
		        apis.push(EVENT_TARGET);
		    }
		    else {
		        // Note: EventTarget is not available in all browsers,
		        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
		        apis = NO_EVENT_TARGET;
		    }
		    for (var i = 0; i < apis.length; i++) {
		        var type = _global[apis[i]];
		        utils_1.patchEventTargetMethods(type && type.prototype);
		    }
		}
		exports.eventTargetPatch = eventTargetPatch;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {/**
		 * Suppress closure compiler errors about unknown 'process' variable
		 * @fileoverview
		 * @suppress {undefinedVars}
		 */
		"use strict";
		exports.zoneSymbol = Zone['__symbol__'];
		var _global = typeof window == 'undefined' ? global : window;
		function bindArguments(args, source) {
		    for (var i = args.length - 1; i >= 0; i--) {
		        if (typeof args[i] === 'function') {
		            args[i] = Zone.current.wrap(args[i], source + '_' + i);
		        }
		    }
		    return args;
		}
		exports.bindArguments = bindArguments;
		;
		function patchPrototype(prototype, fnNames) {
		    var source = prototype.constructor['name'];
		    var _loop_1 = function(i) {
		        var name_1 = fnNames[i];
		        var delegate = prototype[name_1];
		        if (delegate) {
		            prototype[name_1] = (function (delegate) {
		                return function () {
		                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
		                };
		            })(delegate);
		        }
		    };
		    for (var i = 0; i < fnNames.length; i++) {
		        _loop_1(i);
		    }
		}
		exports.patchPrototype = patchPrototype;
		;
		exports.isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
		exports.isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
		exports.isBrowser = !exports.isNode && !exports.isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
		function patchProperty(obj, prop) {
		    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
		        enumerable: true,
		        configurable: true
		    };
		    // A property descriptor cannot have getter/setter and be writable
		    // deleting the writable and value properties avoids this error:
		    //
		    // TypeError: property descriptors must not specify a value or be writable when a
		    // getter or setter has been specified
		    delete desc.writable;
		    delete desc.value;
		    // substr(2) cuz 'onclick' -> 'click', etc
		    var eventName = prop.substr(2);
		    var _prop = '_' + prop;
		    desc.set = function (fn) {
		        if (this[_prop]) {
		            this.removeEventListener(eventName, this[_prop]);
		        }
		        if (typeof fn === 'function') {
		            var wrapFn = function (event) {
		                var result;
		                result = fn.apply(this, arguments);
		                if (result != undefined && !result)
		                    event.preventDefault();
		            };
		            this[_prop] = wrapFn;
		            this.addEventListener(eventName, wrapFn, false);
		        }
		        else {
		            this[_prop] = null;
		        }
		    };
		    desc.get = function () {
		        return this[_prop];
		    };
		    Object.defineProperty(obj, prop, desc);
		}
		exports.patchProperty = patchProperty;
		;
		function patchOnProperties(obj, properties) {
		    var onProperties = [];
		    for (var prop in obj) {
		        if (prop.substr(0, 2) == 'on') {
		            onProperties.push(prop);
		        }
		    }
		    for (var j = 0; j < onProperties.length; j++) {
		        patchProperty(obj, onProperties[j]);
		    }
		    if (properties) {
		        for (var i = 0; i < properties.length; i++) {
		            patchProperty(obj, 'on' + properties[i]);
		        }
		    }
		}
		exports.patchOnProperties = patchOnProperties;
		;
		var EVENT_TASKS = exports.zoneSymbol('eventTasks');
		var ADD_EVENT_LISTENER = 'addEventListener';
		var REMOVE_EVENT_LISTENER = 'removeEventListener';
		var SYMBOL_ADD_EVENT_LISTENER = exports.zoneSymbol(ADD_EVENT_LISTENER);
		var SYMBOL_REMOVE_EVENT_LISTENER = exports.zoneSymbol(REMOVE_EVENT_LISTENER);
		function findExistingRegisteredTask(target, handler, name, capture, remove) {
		    var eventTasks = target[EVENT_TASKS];
		    if (eventTasks) {
		        for (var i = 0; i < eventTasks.length; i++) {
		            var eventTask = eventTasks[i];
		            var data = eventTask.data;
		            if (data.handler === handler
		                && data.useCapturing === capture
		                && data.eventName === name) {
		                if (remove) {
		                    eventTasks.splice(i, 1);
		                }
		                return eventTask;
		            }
		        }
		    }
		    return null;
		}
		function attachRegisteredEvent(target, eventTask) {
		    var eventTasks = target[EVENT_TASKS];
		    if (!eventTasks) {
		        eventTasks = target[EVENT_TASKS] = [];
		    }
		    eventTasks.push(eventTask);
		}
		function scheduleEventListener(eventTask) {
		    var meta = eventTask.data;
		    attachRegisteredEvent(meta.target, eventTask);
		    return meta.target[SYMBOL_ADD_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
		}
		function cancelEventListener(eventTask) {
		    var meta = eventTask.data;
		    findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
		    meta.target[SYMBOL_REMOVE_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
		}
		function zoneAwareAddEventListener(self, args) {
		    var eventName = args[0];
		    var handler = args[1];
		    var useCapturing = args[2] || false;
		    // - Inside a Web Worker, `this` is undefined, the context is `global`
		    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		    // see https://github.com/angular/zone.js/issues/190
		    var target = self || _global;
		    var delegate = null;
		    if (typeof handler == 'function') {
		        delegate = handler;
		    }
		    else if (handler && handler.handleEvent) {
		        delegate = function (event) { return handler.handleEvent(event); };
		    }
		    var validZoneHandler = false;
		    try {
		        // In cross site contexts (such as WebDriver frameworks like Selenium),
		        // accessing the handler object here will cause an exception to be thrown which
		        // will fail tests prematurely.
		        validZoneHandler = handler && handler.toString() === "[object FunctionWrapper]";
		    }
		    catch (e) {
		        // Returning nothing here is fine, because objects in a cross-site context are unusable
		        return;
		    }
		    // Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
		    if (!delegate || validZoneHandler) {
		        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, handler, useCapturing);
		    }
		    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
		    if (eventTask) {
		        // we already registered, so this will have noop.
		        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, eventTask.invoke, useCapturing);
		    }
		    var zone = Zone.current;
		    var source = target.constructor['name'] + '.addEventListener:' + eventName;
		    var data = {
		        target: target,
		        eventName: eventName,
		        name: eventName,
		        useCapturing: useCapturing,
		        handler: handler
		    };
		    zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
		}
		function zoneAwareRemoveEventListener(self, args) {
		    var eventName = args[0];
		    var handler = args[1];
		    var useCapturing = args[2] || false;
		    // - Inside a Web Worker, `this` is undefined, the context is `global`
		    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		    // see https://github.com/angular/zone.js/issues/190
		    var target = self || _global;
		    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
		    if (eventTask) {
		        eventTask.zone.cancelTask(eventTask);
		    }
		    else {
		        target[SYMBOL_REMOVE_EVENT_LISTENER](eventName, handler, useCapturing);
		    }
		}
		function patchEventTargetMethods(obj) {
		    if (obj && obj.addEventListener) {
		        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
		        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
		        return true;
		    }
		    else {
		        return false;
		    }
		}
		exports.patchEventTargetMethods = patchEventTargetMethods;
		;
		var originalInstanceKey = exports.zoneSymbol('originalInstance');
		// wrap some native API on `window`
		function patchClass(className) {
		    var OriginalClass = _global[className];
		    if (!OriginalClass)
		        return;
		    _global[className] = function () {
		        var a = bindArguments(arguments, className);
		        switch (a.length) {
		            case 0:
		                this[originalInstanceKey] = new OriginalClass();
		                break;
		            case 1:
		                this[originalInstanceKey] = new OriginalClass(a[0]);
		                break;
		            case 2:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
		                break;
		            case 3:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
		                break;
		            case 4:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
		                break;
		            default: throw new Error('Arg list too long.');
		        }
		    };
		    var instance = new OriginalClass(function () { });
		    var prop;
		    for (prop in instance) {
		        (function (prop) {
		            if (typeof instance[prop] === 'function') {
		                _global[className].prototype[prop] = function () {
		                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
		                };
		            }
		            else {
		                Object.defineProperty(_global[className].prototype, prop, {
		                    set: function (fn) {
		                        if (typeof fn === 'function') {
		                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
		                        }
		                        else {
		                            this[originalInstanceKey][prop] = fn;
		                        }
		                    },
		                    get: function () {
		                        return this[originalInstanceKey][prop];
		                    }
		                });
		            }
		        }(prop));
		    }
		    for (prop in OriginalClass) {
		        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
		            _global[className][prop] = OriginalClass[prop];
		        }
		    }
		}
		exports.patchClass = patchClass;
		;
		function createNamedFn(name, delegate) {
		    try {
		        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
		    }
		    catch (e) {
		        // if we fail, we must be CSP, just return delegate.
		        return function () {
		            return delegate(this, arguments);
		        };
		    }
		}
		exports.createNamedFn = createNamedFn;
		function patchMethod(target, name, patchFn) {
		    var proto = target;
		    while (proto && !proto.hasOwnProperty(name)) {
		        proto = Object.getPrototypeOf(proto);
		    }
		    if (!proto && target[name]) {
		        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
		        proto = target;
		    }
		    var delegateName = exports.zoneSymbol(name);
		    var delegate;
		    if (proto && !(delegate = proto[delegateName])) {
		        delegate = proto[delegateName] = proto[name];
		        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
		    }
		    return delegate;
		}
		exports.patchMethod = patchMethod;
	
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var utils_1 = __webpack_require__(3);
		/*
		 * This is necessary for Chrome and Chrome mobile, to enable
		 * things like redefining `createdCallback` on an element.
		 */
		var _defineProperty = Object.defineProperty;
		var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var _create = Object.create;
		var unconfigurablesKey = utils_1.zoneSymbol('unconfigurables');
		function propertyPatch() {
		    Object.defineProperty = function (obj, prop, desc) {
		        if (isUnconfigurable(obj, prop)) {
		            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
		        }
		        if (prop !== 'prototype') {
		            desc = rewriteDescriptor(obj, prop, desc);
		        }
		        return _defineProperty(obj, prop, desc);
		    };
		    Object.defineProperties = function (obj, props) {
		        Object.keys(props).forEach(function (prop) {
		            Object.defineProperty(obj, prop, props[prop]);
		        });
		        return obj;
		    };
		    Object.create = function (obj, proto) {
		        if (typeof proto === 'object') {
		            Object.keys(proto).forEach(function (prop) {
		                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
		            });
		        }
		        return _create(obj, proto);
		    };
		    Object.getOwnPropertyDescriptor = function (obj, prop) {
		        var desc = _getOwnPropertyDescriptor(obj, prop);
		        if (isUnconfigurable(obj, prop)) {
		            desc.configurable = false;
		        }
		        return desc;
		    };
		}
		exports.propertyPatch = propertyPatch;
		;
		function _redefineProperty(obj, prop, desc) {
		    desc = rewriteDescriptor(obj, prop, desc);
		    return _defineProperty(obj, prop, desc);
		}
		exports._redefineProperty = _redefineProperty;
		;
		function isUnconfigurable(obj, prop) {
		    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
		}
		function rewriteDescriptor(obj, prop, desc) {
		    desc.configurable = true;
		    if (!desc.configurable) {
		        if (!obj[unconfigurablesKey]) {
		            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
		        }
		        obj[unconfigurablesKey][prop] = true;
		    }
		    return desc;
		}
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var define_property_1 = __webpack_require__(4);
		var utils_1 = __webpack_require__(3);
		function registerElementPatch(_global) {
		    if (!utils_1.isBrowser || !('registerElement' in _global.document)) {
		        return;
		    }
		    var _registerElement = document.registerElement;
		    var callbacks = [
		        'createdCallback',
		        'attachedCallback',
		        'detachedCallback',
		        'attributeChangedCallback'
		    ];
		    document.registerElement = function (name, opts) {
		        if (opts && opts.prototype) {
		            callbacks.forEach(function (callback) {
		                var source = 'Document.registerElement::' + callback;
		                if (opts.prototype.hasOwnProperty(callback)) {
		                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
		                    if (descriptor && descriptor.value) {
		                        descriptor.value = Zone.current.wrap(descriptor.value, source);
		                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
		                    }
		                    else {
		                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
		                    }
		                }
		                else if (opts.prototype[callback]) {
		                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
		                }
		            });
		        }
		        return _registerElement.apply(document, [name, opts]);
		    };
		}
		exports.registerElementPatch = registerElementPatch;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var webSocketPatch = __webpack_require__(7);
		var utils_1 = __webpack_require__(3);
		var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
		function propertyDescriptorPatch(_global) {
		    if (utils_1.isNode) {
		        return;
		    }
		    var supportsWebSocket = typeof WebSocket !== 'undefined';
		    if (canPatchViaPropertyDescriptor()) {
		        // for browsers that we can patch the descriptor:  Chrome & Firefox
		        if (utils_1.isBrowser) {
		            utils_1.patchOnProperties(HTMLElement.prototype, eventNames);
		        }
		        utils_1.patchOnProperties(XMLHttpRequest.prototype, null);
		        if (typeof IDBIndex !== 'undefined') {
		            utils_1.patchOnProperties(IDBIndex.prototype, null);
		            utils_1.patchOnProperties(IDBRequest.prototype, null);
		            utils_1.patchOnProperties(IDBOpenDBRequest.prototype, null);
		            utils_1.patchOnProperties(IDBDatabase.prototype, null);
		            utils_1.patchOnProperties(IDBTransaction.prototype, null);
		            utils_1.patchOnProperties(IDBCursor.prototype, null);
		        }
		        if (supportsWebSocket) {
		            utils_1.patchOnProperties(WebSocket.prototype, null);
		        }
		    }
		    else {
		        // Safari, Android browsers (Jelly Bean)
		        patchViaCapturingAllTheEvents();
		        utils_1.patchClass('XMLHttpRequest');
		        if (supportsWebSocket) {
		            webSocketPatch.apply(_global);
		        }
		    }
		}
		exports.propertyDescriptorPatch = propertyDescriptorPatch;
		function canPatchViaPropertyDescriptor() {
		    if (utils_1.isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
		        && typeof Element !== 'undefined') {
		        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
		        // IDL interface attributes are not configurable
		        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
		        if (desc && !desc.configurable)
		            return false;
		    }
		    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
		        get: function () {
		            return true;
		        }
		    });
		    var req = new XMLHttpRequest();
		    var result = !!req.onreadystatechange;
		    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
		    return result;
		}
		;
		var unboundKey = utils_1.zoneSymbol('unbound');
		// Whenever any eventListener fires, we check the eventListener target and all parents
		// for `onwhatever` properties and replace them with zone-bound functions
		// - Chrome (for now)
		function patchViaCapturingAllTheEvents() {
		    var _loop_1 = function(i) {
		        var property = eventNames[i];
		        var onproperty = 'on' + property;
		        document.addEventListener(property, function (event) {
		            var elt = event.target, bound, source;
		            if (elt) {
		                source = elt.constructor['name'] + '.' + onproperty;
		            }
		            else {
		                source = 'unknown.' + onproperty;
		            }
		            while (elt) {
		                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
		                    bound = Zone.current.wrap(elt[onproperty], source);
		                    bound[unboundKey] = elt[onproperty];
		                    elt[onproperty] = bound;
		                }
		                elt = elt.parentElement;
		            }
		        }, true);
		    };
		    for (var i = 0; i < eventNames.length; i++) {
		        _loop_1(i);
		    }
		    ;
		}
		;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var utils_1 = __webpack_require__(3);
		// we have to patch the instance since the proto is non-configurable
		function apply(_global) {
		    var WS = _global.WebSocket;
		    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
		    // On older Chrome, no need since EventTarget was already patched
		    if (!_global.EventTarget) {
		        utils_1.patchEventTargetMethods(WS.prototype);
		    }
		    _global.WebSocket = function (a, b) {
		        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
		        var proxySocket;
		        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
		        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
		        if (onmessageDesc && onmessageDesc.configurable === false) {
		            proxySocket = Object.create(socket);
		            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
		                proxySocket[propName] = function () {
		                    return socket[propName].apply(socket, arguments);
		                };
		            });
		        }
		        else {
		            // we can patch the real socket
		            proxySocket = socket;
		        }
		        utils_1.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
		        return proxySocket;
		    };
		    for (var prop in WS) {
		        _global.WebSocket[prop] = WS[prop];
		    }
		}
		exports.apply = apply;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var utils_1 = __webpack_require__(3);
		function patchTimer(window, setName, cancelName, nameSuffix) {
		    var setNative = null;
		    var clearNative = null;
		    setName += nameSuffix;
		    cancelName += nameSuffix;
		    function scheduleTask(task) {
		        var data = task.data;
		        data.args[0] = task.invoke;
		        data.handleId = setNative.apply(window, data.args);
		        return task;
		    }
		    function clearTask(task) {
		        return clearNative(task.data.handleId);
		    }
		    setNative = utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
		        if (typeof args[0] === 'function') {
		            var zone = Zone.current;
		            var options = {
		                handleId: null,
		                isPeriodic: nameSuffix === 'Interval',
		                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
		                args: args
		            };
		            return zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
		        }
		        else {
		            // cause an error by calling it directly.
		            return delegate.apply(window, args);
		        }
		    }; });
		    clearNative = utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
		        var task = args[0];
		        if (task && typeof task.type === 'string') {
		            if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
		                // Do not cancel already canceled functions
		                task.zone.cancelTask(task);
		            }
		        }
		        else {
		            // cause an error by calling it directly.
		            delegate.apply(window, args);
		        }
		    }; });
		}
		exports.patchTimer = patchTimer;
	
	
	/***/ }
	/******/ ]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(644)))

/***/ },

/***/ 799:
/***/ function(module, exports) {

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
	/***/ function(module, exports) {
	
		'use strict';
		(function () {
		    var NEWLINE = '\n';
		    var SEP = '  -------------  ';
		    var IGNORE_FRAMES = [];
		    var creationTrace = '__creationTrace__';
		    var LongStackTrace = (function () {
		        function LongStackTrace() {
		            this.error = getStacktrace();
		            this.timestamp = new Date();
		        }
		        return LongStackTrace;
		    }());
		    function getStacktraceWithUncaughtError() {
		        return new Error('STACKTRACE TRACKING');
		    }
		    function getStacktraceWithCaughtError() {
		        try {
		            throw getStacktraceWithUncaughtError();
		        }
		        catch (e) {
		            return e;
		        }
		    }
		    // Some implementations of exception handling don't create a stack trace if the exception
		    // isn't thrown, however it's faster not to actually throw the exception.
		    var error = getStacktraceWithUncaughtError();
		    var coughtError = getStacktraceWithCaughtError();
		    var getStacktrace = error.stack
		        ? getStacktraceWithUncaughtError
		        : (coughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError);
		    function getFrames(error) {
		        return error.stack ? error.stack.split(NEWLINE) : [];
		    }
		    function addErrorStack(lines, error) {
		        var trace = getFrames(error);
		        for (var i = 0; i < trace.length; i++) {
		            var frame = trace[i];
		            // Filter out the Frames which are part of stack capturing.
		            if (!(i < IGNORE_FRAMES.length && IGNORE_FRAMES[i] === frame)) {
		                lines.push(trace[i]);
		            }
		        }
		    }
		    function renderLongStackTrace(frames, stack) {
		        var longTrace = [stack];
		        if (frames) {
		            var timestamp = new Date().getTime();
		            for (var i = 0; i < frames.length; i++) {
		                var traceFrames = frames[i];
		                var lastTime = traceFrames.timestamp;
		                longTrace.push(SEP + " Elapsed: " + (timestamp - lastTime.getTime()) + " ms; At: " + lastTime + " " + SEP);
		                addErrorStack(longTrace, traceFrames.error);
		                timestamp = lastTime.getTime();
		            }
		        }
		        return longTrace.join(NEWLINE);
		    }
		    Zone['longStackTraceZoneSpec'] = {
		        name: 'long-stack-trace',
		        longStackTraceLimit: 10,
		        onScheduleTask: function (parentZoneDelegate, currentZone, targetZone, task) {
		            var currentTask = Zone.currentTask;
		            var trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
		            trace = [new LongStackTrace()].concat(trace);
		            if (trace.length > this.longStackTraceLimit) {
		                trace.length = this.longStackTraceLimit;
		            }
		            if (!task.data)
		                task.data = {};
		            task.data[creationTrace] = trace;
		            return parentZoneDelegate.scheduleTask(targetZone, task);
		        },
		        onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
		            var parentTask = Zone.currentTask;
		            if (error instanceof Error && parentTask) {
		                var descriptor = Object.getOwnPropertyDescriptor(error, 'stack');
		                if (descriptor) {
		                    var delegateGet_1 = descriptor.get;
		                    var value_1 = descriptor.value;
		                    descriptor = {
		                        get: function () {
		                            return renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], delegateGet_1 ? delegateGet_1.apply(this) : value_1);
		                        }
		                    };
		                    Object.defineProperty(error, 'stack', descriptor);
		                }
		                else {
		                    error.stack = renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error.stack);
		                }
		            }
		            return parentZoneDelegate.handleError(targetZone, error);
		        }
		    };
		    function captureStackTraces(stackTraces, count) {
		        if (count > 0) {
		            stackTraces.push(getFrames((new LongStackTrace()).error));
		            captureStackTraces(stackTraces, count - 1);
		        }
		    }
		    function computeIgnoreFrames() {
		        var frames = [];
		        captureStackTraces(frames, 2);
		        var frames1 = frames[0];
		        var frames2 = frames[1];
		        for (var i = 0; i < frames1.length; i++) {
		            var frame1 = frames1[i];
		            var frame2 = frames2[i];
		            if (frame1 === frame2) {
		                IGNORE_FRAMES.push(frame1);
		            }
		            else {
		                break;
		            }
		        }
		    }
		    computeIgnoreFrames();
		})();
	
	
	/***/ }
	/******/ ]);

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3pvbmUuanMvZGlzdC96b25lLmpzIiwid2VicGFjazovLy8uL34vem9uZS5qcy9kaXN0L2xvbmctc3RhY2stdHJhY2Utem9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7Ozs7O0FDbkx0QyxxQkFBTyxHQUFrQixDQUFDO0FBQzFCLG9CQUFPLENBQUMsR0FBbUIsQ0FBQyxDQUFDO0FBSTdCLEtBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUV2QixLQUFHLENBQUM7S0FDRixVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxZQUFZLENBQUMsQ0FBQztBQUNsRCxFQUFDO0FBQUEsTUFBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUM7QUFFWCxHQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRWpCLEVBQUM7QUFBQyxLQUFJLENBQUMsQ0FBQztLQUNOLGNBQWM7S0FDZCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDcEMsbUJBQU8sQ0FBQyxHQUFvQyxDQUFDLENBQUM7QUFDaEQsRUFBQzs7Ozs7Ozs7O0FDakJEO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMERBQXlELDRDQUE0QyxFQUFFO0FBQ3ZHLHNDQUFxQyx3QkFBd0Isa0JBQWtCLEVBQUUsRUFBRTtBQUNuRiwwQkFBeUIseUJBQXlCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsOEJBQThCO0FBQ2pFLG9DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQSxvQ0FBbUMscURBQXFEO0FBQ3hGLG9DQUFtQyxpQkFBaUI7QUFDcEQsTUFBSywwQkFBMEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLHlDQUF3QztBQUN4Qyw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0M7QUFDaEMseUNBQXdDO0FBQ3hDLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBb0c7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0M7QUFDaEMseUNBQXdDO0FBQ3hDLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQyx5Q0FBd0M7QUFDeEMsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLHlDQUF3QztBQUN4Qyw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0M7QUFDaEMseUNBQXdDO0FBQ3hDLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLHlDQUF3QztBQUN4Qyw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQyx5Q0FBd0M7QUFDeEMsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLHlDQUF3QztBQUN4Qyw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsdUJBQXVCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04saUNBQWdDLGlDQUFpQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUF5SCx3QkFBd0Isb0NBQW9DO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLG1DQUFtQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELGtDQUFrQyxFQUFFO0FBQy9GLCtEQUE4RCxxQ0FBcUMsRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOzs7QUFHRjtBQUNBLGEiLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcclxucmVxdWlyZSgnem9uZS5qcy9kaXN0L3pvbmUnKTtcclxuXHJcbmRlY2xhcmUgdmFyIHByb2Nlc3M7XHJcblxyXG52YXIgcHJvZHVjdGlvbiA9IGZhbHNlO1xyXG5cclxudHJ5e1xyXG4gIHByb2R1Y3Rpb24gPSAocHJvY2Vzcy5lbnYuRU5WID09PSAncHJvZHVjdGlvbicpO1xyXG59Y2F0Y2goZSl7fVxyXG5cclxuaWYgKHByb2R1Y3Rpb24pIHtcclxuICAvLyBQcm9kdWN0aW9uXHJcbn0gZWxzZSB7XHJcbiAgLy8gRGV2ZWxvcG1lbnRcclxuICBFcnJvclsnc3RhY2tUcmFjZUxpbWl0J10gPSBJbmZpbml0eTtcclxuICByZXF1aXJlKCd6b25lLmpzL2Rpc3QvbG9uZy1zdGFjay10cmFjZS16b25lJyk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL3BvbHlmaWxscy50c1xuICoqLyIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbnZhciBSZWZsZWN0O1xyXG4oZnVuY3Rpb24gKFJlZmxlY3QpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbiAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIE9iamVjdC5jcmVhdGUgc3VwcG9ydFxyXG4gICAgdmFyIHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgX19wcm90b19fIHN1cHBvcnRcclxuICAgIHZhciBzdXBwb3J0c1Byb3RvID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VudGluZWwgPSB7fTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgfVxyXG4gICAgICAgIF9fLnByb3RvdHlwZSA9IHNlbnRpbmVsO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBfXygpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5fX3Byb3RvX18gPT09IHNlbnRpbmVsO1xyXG4gICAgfSkoKTtcclxuICAgIC8vIGNyZWF0ZSBhbiBvYmplY3QgaW4gZGljdGlvbmFyeSBtb2RlIChhLmsuYS4gXCJzbG93XCIgbW9kZSBpbiB2OClcclxuICAgIHZhciBjcmVhdGVEaWN0aW9uYXJ5ID0gc3VwcG9ydHNDcmVhdGUgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeShPYmplY3QuY3JlYXRlKG51bGwpKTsgfSA6XHJcbiAgICAgICAgc3VwcG9ydHNQcm90byA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHsgX19wcm90b19fOiBudWxsIH0pOyB9IDpcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoe30pOyB9O1xyXG4gICAgdmFyIEhhc2hNYXA7XHJcbiAgICAoZnVuY3Rpb24gKEhhc2hNYXApIHtcclxuICAgICAgICB2YXIgZG93bkxldmVsID0gIXN1cHBvcnRzQ3JlYXRlICYmICFzdXBwb3J0c1Byb3RvO1xyXG4gICAgICAgIEhhc2hNYXAuaGFzID0gZG93bkxldmVsXHJcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSk7IH1cclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGtleSBpbiBtYXA7IH07XHJcbiAgICAgICAgSGFzaE1hcC5nZXQgPSBkb3duTGV2ZWxcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkOyB9XHJcbiAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBtYXBba2V5XTsgfTtcclxuICAgIH0pKEhhc2hNYXAgfHwgKEhhc2hNYXAgPSB7fSkpO1xyXG4gICAgLy8gTG9hZCBnbG9iYWwgb3Igc2hpbSB2ZXJzaW9ucyBvZiBNYXAsIFNldCwgYW5kIFdlYWtNYXBcclxuICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XHJcbiAgICB2YXIgX01hcCA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1NldCA9IHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpO1xyXG4gICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcclxuICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0RGVzY3JpcHRvciAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciB0aGUgdGFyZ2V0IGtleVxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHRhcmdldEtleSwgdGFyZ2V0RGVzY3JpcHRvcikge1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0RGVzY3JpcHRvcikpIHtcclxuICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldERlc2NyaXB0b3IpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5V2l0aERlc2NyaXB0b3IoZGVjb3JhdG9ycywgdGFyZ2V0LCB0YXJnZXRLZXksIHRhcmdldERlc2NyaXB0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eVdpdGhvdXREZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5kZWNvcmF0ZSA9IGRlY29yYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgICogQSBkZWZhdWx0IG1ldGFkYXRhIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgb24gYSBjbGFzcywgY2xhc3MgbWVtYmVyLCBvciBwYXJhbWV0ZXIuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcmV0dXJucyBBIGRlY29yYXRvciBmdW5jdGlvbi5cclxuICAgICAgKiBAcmVtYXJrc1xyXG4gICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcclxuICAgICAgKiBtZXRhZGF0YVZhbHVlIGZvciB0aGF0IGtleSB3aWxsIGJlIG92ZXJ3cml0dGVuLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBwcm9wZXJ0eTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIC8qdGFyZ2V0S2V5Ki8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXHJcbiAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcclxuICAgICAgKiAgICAgICAgIHJldHVybiAodGFyZ2V0LCBrZXk/KSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgdGFyZ2V0LCBrZXkpO1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluOyBvdGhlcndpc2UsIGBmYWxzZWAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5oYXNNZXRhZGF0YSA9IGhhc01ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0OyBvdGhlcndpc2UsIGBmYWxzZWAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5oYXNPd25NZXRhZGF0YSA9IGhhc093bk1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgPSBnZXRPd25NZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzID0gZ2V0TWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyA9IGdldE93bk1ldGFkYXRhS2V5cztcclxuICAgIC8qKlxyXG4gICAgICAqIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGVudHJ5IGZyb20gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQga2V5LlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEgZW50cnkgd2FzIGZvdW5kIGFuZCBkZWxldGVkOyBvdGhlcndpc2UsIGZhbHNlLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjZGVsZXRlbWV0YWRhdGEtbWV0YWRhdGFrZXktcC1cclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUodGFyZ2V0S2V5KTtcclxuICAgICAgICBpZiAodGFyZ2V0TWV0YWRhdGEuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5kZWxldGVNZXRhZGF0YSA9IGRlbGV0ZU1ldGFkYXRhO1xyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eVdpdGhEZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGRlY29yYXRlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHlXaXRob3V0RGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNnZXRvcmNyZWF0ZW1ldGFkYXRhbWFwLS1vLXAtY3JlYXRlLVxyXG4gICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNyZWF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcclxuICAgICAgICBpZiAoIWtleU1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAga2V5TWV0YWRhdGEgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXlNZXRhZGF0YTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5aGFzbWV0YWRhdGEtLW1ldGFkYXRha2V5LW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcclxuICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgaWYgKGhhc093bilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeWhhc293bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSkpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlnZXRtZXRhZGF0YS0tbWV0YWRhdGFrZXktby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcclxuICAgICAgICBpZiAoaGFzT3duKVxyXG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlnZXRvd25tZXRhZGF0YS0tbWV0YWRhdGFrZXktby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlkZWZpbmVvd25tZXRhZGF0YS0tbWV0YWRhdGFrZXktbWV0YWRhdGF2YWx1ZS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgIG1ldGFkYXRhTWFwLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeW1ldGFkYXRha2V5cy0tby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUCkge1xyXG4gICAgICAgIHZhciBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xyXG4gICAgICAgIHZhciBwYXJlbnRLZXlzID0gT3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcclxuICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XHJcbiAgICAgICAgaWYgKG93bktleXMubGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRLZXlzO1xyXG4gICAgICAgIHZhciBrZXlzID0gbmV3IF9TZXQoKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgb3duS2V5cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNbX2ldO1xyXG4gICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBfYSA9IDA7IF9hIDwgcGFyZW50S2V5cy5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNbX2FdO1xyXG4gICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0S2V5cyhrZXlzKTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzLS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwKVxyXG4gICAgICAgICAgICBmb3JFYWNoKG1ldGFkYXRhTWFwLCBmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBrZXlzLnB1c2goa2V5KTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xyXG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxyXG4gICAgZnVuY3Rpb24gSXNBcnJheSh4KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkgPyBBcnJheS5pc0FycmF5KHgpIDogeCBpbnN0YW5jZW9mIEFycmF5IHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8geCAhPT0gbnVsbCA6IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxyXG4gICAgZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcih4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNTeW1ib2woeCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3Byb3BlcnR5a2V5XHJcbiAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIElzU3ltYm9sKHZhbHVlKSA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEdldFByb3RvdHlwZU9mKE8pIHtcclxuICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBPICE9PSBcImZ1bmN0aW9uXCIgfHwgTyA9PT0gZnVuY3Rpb25Qcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxyXG4gICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhlIHN1cGVyY2xhc3MgRXhhbXBsZW9uc3RydWN0b3IuIENvbXBhdGlibGUgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIEV4YW1wbGVvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIEV4YW1wbGVvbnN0cnVjdG9yLFxyXG4gICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XHJcbiAgICAgICAgLy8gcG9pbnRzIGJhY2sgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIEZ1bmN0aW9uLltbUHJvdG90eXBlXV0sIHRoZW4gdGhpcyBpcyBkZWZpbmF0ZWx5IGluaGVyaXRlZC5cclxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gaW4gRVM2IG9yIHdoZW4gdXNpbmcgX19wcm90b19fIGluIGEgY29tcGF0aWJsZSBicm93c2VyLlxyXG4gICAgICAgIGlmIChwcm90byAhPT0gZnVuY3Rpb25Qcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB0aGUgc3VwZXIgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGUsIG51bGwsIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gTy5wcm90b3R5cGU7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xyXG4gICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbnN0cnVjdG9yIHdhcyBub3QgYSBmdW5jdGlvbiwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIHNvbWUga2luZCBvZiBzZWxmLXJlZmVyZW5jZSwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT09IE8pXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldHR5IGdvb2QgZ3Vlc3MgYXQgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gdW5kZWZpbmVkIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvcikge1xyXG4gICAgICAgIHZhciBmID0gaXRlcmF0b3JbXCJyZXR1cm5cIl07XHJcbiAgICAgICAgaWYgKGYpXHJcbiAgICAgICAgICAgIGYuY2FsbChpdGVyYXRvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoKHNvdXJjZSwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgZW50cmllcyA9IHNvdXJjZS5lbnRyaWVzO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZW50cmllcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGVudHJpZXMuY2FsbChzb3VyY2UpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgSXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JFYWNoXzEgPSBzb3VyY2UuZm9yRWFjaDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JFYWNoXzEgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaF8xLmNhbGwoc291cmNlLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRLZXlzKHNvdXJjZSkge1xyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcbiAgICAgICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChfLCBrZXkpIHsga2V5cy5wdXNoKGtleSk7IH0pO1xyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgTWFwSXRlcmF0b3Igc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTWFwSXRlcmF0b3Ioa2V5cywgdmFsdWVzLCBraW5kKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGtleXMgfHwgdmFsdWVzKSAmJiBpbmRleCA8IChrZXlzIHx8IHZhbHVlcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5XCI6IHJldHVybiB7IHZhbHVlOiBrZXlzW2N1cnJlbnRdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsdWVcIjogcmV0dXJuIHsgdmFsdWU6IHZhbHVlc1tjdXJyZW50XSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleSt2YWx1ZVwiOiByZXR1cm4geyB2YWx1ZTogW2tleXNbY3VycmVudF0sIHZhbHVlc1tjdXJyZW50XV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0aHJvd1wiOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzIHx8IHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMgfHwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBNYXAgc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWFwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoOyB9LFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSkgPj0gMDsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHRoaXMuX3ZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCArIDE7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c1tpIC0gMV0gPSB0aGlzLl9rZXlzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaSAtIDFdID0gdGhpcy5fdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENyZWF0ZU1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIC8qdmFsdWVzKi8gdW5kZWZpbmVkLCBcImtleVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBDcmVhdGVNYXBJdGVyYXRvcigvKmtleXMqLyB1bmRlZmluZWQsIHRoaXMuX3ZhbHVlcywgXCJ2YWx1ZVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gQ3JlYXRlTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBcImtleSt2YWx1ZVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uIChrZXksIGluc2VydCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ID09PSBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDAgJiYgaW5zZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5ID0ga2V5LCB0aGlzLl9jYWNoZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBNYXA7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuICAgIC8vIG5haXZlIFNldCBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVTZXRQb2x5ZmlsbCgpIHtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gU2V0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuc2V0KHZhbHVlLCB2YWx1ZSksIHRoaXM7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuZGVsZXRlKHZhbHVlKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fbWFwLmNsZWFyKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5rZXlzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpOyB9O1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpOyB9O1xyXG4gICAgICAgICAgICByZXR1cm4gU2V0O1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpIHtcclxuICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XHJcbiAgICAgICAgdmFyIGtleXMgPSBjcmVhdGVEaWN0aW9uYXJ5KCk7XHJcbiAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSlcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xyXG4gICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxyXG4gICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xyXG4gICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhW29mZnNldF07XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNilcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgIGRvXHJcbiAgICAgICAgICAgICAgICBrZXkgPSBcIkBAV2Vha01hcEBAXCIgKyBDcmVhdGVVVUlEKCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcclxuICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBjcmVhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0YXJnZXQsIHJvb3RLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcm9vdEtleSwgeyB2YWx1ZTogY3JlYXRlRGljdGlvbmFyeSgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcm9vdEtleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlcyBhIGhldXJpc3RpYyB1c2VkIGJ5IHY4IGFuZCBjaGFrcmEgdG8gZm9yY2UgYW4gb2JqZWN0IGludG8gZGljdGlvbmFyeSBtb2RlLlxyXG4gICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnkob2JqKSB7XHJcbiAgICAgICAgb2JqLl9fRElDVElPTkFSWV9NT0RFX18gPSAxO1xyXG4gICAgICAgIGRlbGV0ZSBvYmouX19fX0RJQ1RJT05BUllfTU9ERV9fO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBwYXRjaCBnbG9iYWwgUmVmbGVjdFxyXG4gICAgKGZ1bmN0aW9uIChfX2dsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgX19nbG9iYWwuUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX19nbG9iYWwuUmVmbGVjdCAhPT0gUmVmbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBSZWZsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKFJlZmxlY3QsIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3RbcF0gPSBSZWZsZWN0W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX19nbG9iYWwuUmVmbGVjdCA9IFJlZmxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSkodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XHJcbiAgICAgICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XHJcbiAgICAgICAgICAgIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxyXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSk7XHJcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWZsZWN0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDc5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcInVzZSBzdHJpY3RcIjtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0dmFyIGV2ZW50X3RhcmdldF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIGRlZmluZV9wcm9wZXJ0eV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIHJlZ2lzdGVyX2VsZW1lbnRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBwcm9wZXJ0eV9kZXNjcmlwdG9yXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgdGltZXJzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBzZXQgPSAnc2V0Jztcblx0dmFyIGNsZWFyID0gJ2NsZWFyJztcblx0dmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcblx0dmFyIF9nbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93O1xuXHR0aW1lcnNfMS5wYXRjaFRpbWVyKF9nbG9iYWwsIHNldCwgY2xlYXIsICdUaW1lb3V0Jyk7XG5cdHRpbWVyc18xLnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG5cdHRpbWVyc18xLnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xuXHR0aW1lcnNfMS5wYXRjaFRpbWVyKF9nbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbE1hY3JvVGFzaycsICdBbmltYXRpb25GcmFtZScpO1xuXHR0aW1lcnNfMS5wYXRjaFRpbWVyKF9nbG9iYWwsICdtb3pSZXF1ZXN0JywgJ21vekNhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuXHR0aW1lcnNfMS5wYXRjaFRpbWVyKF9nbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuXHQgICAgdmFyIG5hbWUgPSBibG9ja2luZ01ldGhvZHNbaV07XG5cdCAgICB1dGlsc18xLnBhdGNoTWV0aG9kKF9nbG9iYWwsIG5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSwgc3ltYm9sLCBuYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBfZ2xvYmFsLCBhcmdzLCBuYW1lKTtcblx0ICAgICAgICB9O1xuXHQgICAgfSk7XG5cdH1cblx0ZXZlbnRfdGFyZ2V0XzEuZXZlbnRUYXJnZXRQYXRjaChfZ2xvYmFsKTtcblx0cHJvcGVydHlfZGVzY3JpcHRvcl8xLnByb3BlcnR5RGVzY3JpcHRvclBhdGNoKF9nbG9iYWwpO1xuXHR1dGlsc18xLnBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcblx0dXRpbHNfMS5wYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG5cdHV0aWxzXzEucGF0Y2hDbGFzcygnRmlsZVJlYWRlcicpO1xuXHRkZWZpbmVfcHJvcGVydHlfMS5wcm9wZXJ0eVBhdGNoKCk7XG5cdHJlZ2lzdGVyX2VsZW1lbnRfMS5yZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsKTtcblx0Ly8gVHJlYXQgWE1MSFRUUFJlcXVlc3QgYXMgYSBtYWNyb3Rhc2suXG5cdHBhdGNoWEhSKF9nbG9iYWwpO1xuXHR2YXIgWEhSX1RBU0sgPSB1dGlsc18xLnpvbmVTeW1ib2woJ3hoclRhc2snKTtcblx0ZnVuY3Rpb24gcGF0Y2hYSFIod2luZG93KSB7XG5cdCAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG5cdCAgICAgICAgdmFyIHBlbmRpbmdUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcblx0ICAgICAgICByZXR1cm4gcGVuZGluZ1Rhc2s7XG5cdCAgICB9XG5cdCAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuXHQgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuXHQgICAgICAgIGRhdGEudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGlmIChkYXRhLnRhcmdldC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICB2YXIgc3RvcmVkVGFzayA9IGRhdGEudGFyZ2V0W1hIUl9UQVNLXTtcblx0ICAgICAgICBpZiAoIXN0b3JlZFRhc2spIHtcblx0ICAgICAgICAgICAgZGF0YS50YXJnZXRbWEhSX1RBU0tdID0gdGFzaztcblx0ICAgICAgICB9XG5cdCAgICAgICAgc2V0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuXHQgICAgICAgIHJldHVybiB0YXNrO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG5cdCAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG5cdCAgICAgICAgLy8gTm90ZSAtIGlkZWFsbHksIHdlIHdvdWxkIGNhbGwgZGF0YS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciBoZXJlLCBidXQgaXQncyB0b28gbGF0ZVxuXHQgICAgICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBmaXJpbmcuIFNvIGluc3RlYWQsIHdlIHN0b3JlIGluZm8gZm9yIHRoZSBldmVudCBsaXN0ZW5lci5cblx0ICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuXHQgICAgICAgIHJldHVybiBjbGVhck5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcblx0ICAgIH1cblx0ICAgIHZhciBzZXROYXRpdmUgPSB1dGlsc18xLnBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcblx0ICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcblx0ICAgICAgICB2YXIgb3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgdGFyZ2V0OiBzZWxmLFxuXHQgICAgICAgICAgICBpc1BlcmlvZGljOiBmYWxzZSxcblx0ICAgICAgICAgICAgZGVsYXk6IG51bGwsXG5cdCAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG5cdCAgICAgICAgICAgIGFib3J0ZWQ6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICByZXR1cm4gem9uZS5zY2hlZHVsZU1hY3JvVGFzaygnWE1MSHR0cFJlcXVlc3Quc2VuZCcsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcblx0ICAgIH07IH0pO1xuXHQgICAgdmFyIGNsZWFyTmF0aXZlID0gdXRpbHNfMS5wYXRjaE1ldGhvZCh3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCAnYWJvcnQnLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG5cdCAgICAgICAgdmFyIHRhc2sgPSBmaW5kUGVuZGluZ1Rhc2soc2VsZik7XG5cdCAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cblx0ICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm8gdGFzayB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG5cdCAgICB9OyB9KTtcblx0fVxuXHQvLy8gR0VPX0xPQ0FUSU9OXG5cdGlmIChfZ2xvYmFsWyduYXZpZ2F0b3InXSAmJiBfZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuXHQgICAgdXRpbHNfMS5wYXRjaFByb3RvdHlwZShfZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgW1xuXHQgICAgICAgICdnZXRDdXJyZW50UG9zaXRpb24nLFxuXHQgICAgICAgICd3YXRjaFBvc2l0aW9uJ1xuXHQgICAgXSk7XG5cdH1cblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7O1xuXHQ7XG5cdHZhciBab25lID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcblx0ICAgIHZhciBab25lID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBab25lKHBhcmVudCwgem9uZVNwZWMpIHtcblx0ICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IG51bGw7XG5cdCAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0ICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+Jztcblx0ICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG5cdCAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZSA9IG5ldyBab25lRGVsZWdhdGUodGhpcywgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC5fem9uZURlbGVnYXRlLCB6b25lU3BlYyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRcIiwge1xuXHQgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jdXJyZW50Wm9uZTsgfSxcblx0ICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgO1xuXHQgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRUYXNrXCIsIHtcblx0ICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY3VycmVudFRhc2s7IH0sXG5cdCAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIDtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcblx0ICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH0sXG5cdCAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIDtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG5cdCAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfSxcblx0ICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgO1xuXHQgICAgICAgIFpvbmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzO1xuXHQgICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Ll9wcm9wZXJ0aWVzW2tleV07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5fcGFyZW50O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG5cdCAgICAgICAgICAgIGlmICghem9uZVNwZWMpXG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmVTcGVjIHJlcXVpcmVkIScpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgc291cmNlKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGNhbGxiYWNrKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcblx0ICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuXHQgICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuXHQgICAgICAgICAgICBpZiAoYXBwbHlBcmdzID09PSB2b2lkIDApIHsgYXBwbHlBcmdzID0gbnVsbDsgfVxuXHQgICAgICAgICAgICBpZiAoc291cmNlID09PSB2b2lkIDApIHsgc291cmNlID0gbnVsbDsgfVxuXHQgICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcblx0ICAgICAgICAgICAgX2N1cnJlbnRab25lID0gdGhpcztcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1bkd1YXJkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcblx0ICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IG51bGw7IH1cblx0ICAgICAgICAgICAgaWYgKGFwcGx5QXJncyA9PT0gdm9pZCAwKSB7IGFwcGx5QXJncyA9IG51bGw7IH1cblx0ICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdm9pZCAwKSB7IHNvdXJjZSA9IG51bGw7IH1cblx0ICAgICAgICAgICAgdmFyIG9sZFpvbmUgPSBfY3VycmVudFpvbmU7XG5cdCAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcblx0ICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuXHQgICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpXG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgd2hpY2ggY3JlYXRlZCBpdCEgKENyZWF0aW9uOiAnICtcblx0ICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG5cdCAgICAgICAgICAgIHZhciBwcmV2aW91c1Rhc2sgPSBfY3VycmVudFRhc2s7XG5cdCAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG5cdCAgICAgICAgICAgIHZhciBvbGRab25lID0gX2N1cnJlbnRab25lO1xuXHQgICAgICAgICAgICBfY3VycmVudFpvbmUgPSB0aGlzO1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSAnbWFjcm9UYXNrJyAmJiB0YXNrLmRhdGEgJiYgIXRhc2suZGF0YS5pc1BlcmlvZGljKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGFzay5jYW5jZWxGbiA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlVGFzayh0aGlzLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICBfY3VycmVudFpvbmUgPSBvbGRab25lO1xuXHQgICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ21pY3JvVGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBudWxsKSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1hY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRoaXMsIG5ldyBab25lVGFzaygnbWFjcm9UYXNrJywgdGhpcywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVFdmVudFRhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ2V2ZW50VGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuXHQgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl96b25lRGVsZWdhdGUuY2FuY2VsVGFzayh0aGlzLCB0YXNrKTtcblx0ICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IC0xO1xuXHQgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gbnVsbDtcblx0ICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZS5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcblx0ICAgICAgICByZXR1cm4gWm9uZTtcblx0ICAgIH0oKSk7XG5cdCAgICA7XG5cdCAgICB2YXIgWm9uZURlbGVnYXRlID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBab25lRGVsZWdhdGUoem9uZSwgcGFyZW50RGVsZWdhdGUsIHpvbmVTcGVjKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX3Rhc2tDb3VudHMgPSB7IG1pY3JvVGFzazogMCwgbWFjcm9UYXNrOiAwLCBldmVudFRhc2s6IDAgfTtcblx0ICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcblx0ICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUgPSBwYXJlbnREZWxlZ2F0ZTtcblx0ICAgICAgICAgICAgdGhpcy5fZm9ya1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uRm9yayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtaUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2ludm9rZURsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2tEbGd0KTtcblx0ICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFzVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUyk7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFzVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2tEbGd0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JrWlNcblx0ICAgICAgICAgICAgICAgID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYylcblx0ICAgICAgICAgICAgICAgIDogbmV3IFpvbmUodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJjZXB0WlNcblx0ICAgICAgICAgICAgICAgID8gdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKVxuXHQgICAgICAgICAgICAgICAgOiBjYWxsYmFjaztcblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VaU1xuXHQgICAgICAgICAgICAgICAgPyB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKVxuXHQgICAgICAgICAgICAgICAgOiBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGVycm9yKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTXG5cdCAgICAgICAgICAgICAgICA/IHRoaXMuX2hhbmRsZUVycm9yWlMub25IYW5kbGVFcnJvcih0aGlzLl9oYW5kbGVFcnJvckRsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpXG5cdCAgICAgICAgICAgICAgICA6IHRydWU7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB0YXNrKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2suc2NoZWR1bGVGbikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PSAnbWljcm9UYXNrJykge1xuXHQgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taU1xuXHQgICAgICAgICAgICAgICAgICAgID8gdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncylcblx0ICAgICAgICAgICAgICAgICAgICA6IHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lICYmICh0YXNrLnR5cGUgIT0gJ2V2ZW50VGFzaycpICYmICEodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcblx0ICAgICAgICAgICAgdmFyIHZhbHVlO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsVGFza1pTKSB7XG5cdCAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSBpZiAoIXRhc2suY2FuY2VsRm4pIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBkb2VzIG5vdCBzdXBwb3J0IGNhbmNlbGxhdGlvbiwgb3IgaXMgYWxyZWFkeSBjYW5jZWxlZC4nKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHZhbHVlID0gdGFzay5jYW5jZWxGbih0YXNrKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAodGFyZ2V0Wm9uZSA9PSB0aGlzLnpvbmUpIHtcblx0ICAgICAgICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIG5vdCBiZSBpbiB0aGUgZmluYWxseSBibG9jaywgYmVjYXVzZSBleGNlcHRpb25zIGFzc3VtZSBub3QgY2FuY2VsZWQuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCAtMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5oYXNUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGlzRW1wdHkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1Rhc2taUyAmJiB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5fdXBkYXRlVGFza0NvdW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvdW50KSB7XG5cdCAgICAgICAgICAgIHZhciBjb3VudHMgPSB0aGlzLl90YXNrQ291bnRzO1xuXHQgICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcblx0ICAgICAgICAgICAgdmFyIG5leHQgPSBjb3VudHNbdHlwZV0gPSBwcmV2ICsgY291bnQ7XG5cdCAgICAgICAgICAgIGlmIChuZXh0IDwgMCkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKHByZXYgPT0gMCB8fCBuZXh0ID09IDApIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuXHQgICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzLm1pY3JvVGFzayA+IDAsXG5cdCAgICAgICAgICAgICAgICAgICAgbWFjcm9UYXNrOiBjb3VudHMubWFjcm9UYXNrID4gMCxcblx0ICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50cy5ldmVudFRhc2sgPiAwLFxuXHQgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50RGVsZWdhdGUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUuX3VwZGF0ZVRhc2tDb3VudCh0eXBlLCBjb3VudCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuXHQgICAgfSgpKTtcblx0ICAgIHZhciBab25lVGFzayA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gWm9uZVRhc2sodHlwZSwgem9uZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcblx0ICAgICAgICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG5cdCAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cdCAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG5cdCAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuXHQgICAgICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zO1xuXHQgICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuXHQgICAgICAgICAgICB0aGlzLmNhbmNlbEZuID0gY2FuY2VsRm47XG5cdCAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgICAgICAgICB0aGlzLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuVGFzayhzZWxmLCB0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gWm9uZVRhc2s7XG5cdCAgICB9KCkpO1xuXHQgICAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lKSB7IHJldHVybiAnX196b25lX3N5bWJvbF9fJyArIG5hbWU7IH1cblx0ICAgIDtcblx0ICAgIHZhciBzeW1ib2xTZXRUaW1lb3V0ID0gX19zeW1ib2xfXygnc2V0VGltZW91dCcpO1xuXHQgICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG5cdCAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcblx0ICAgIHZhciBfY3VycmVudFpvbmUgPSBuZXcgWm9uZShudWxsLCBudWxsKTtcblx0ICAgIHZhciBfY3VycmVudFRhc2sgPSBudWxsO1xuXHQgICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuXHQgICAgdmFyIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcblx0ICAgIHZhciBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG5cdCAgICB2YXIgX2RyYWluU2NoZWR1bGVkID0gZmFsc2U7XG5cdCAgICBmdW5jdGlvbiBzY2hlZHVsZVF1ZXVlRHJhaW4oKSB7XG5cdCAgICAgICAgaWYgKCFfZHJhaW5TY2hlZHVsZWQgJiYgIV9jdXJyZW50VGFzayAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09IDApIHtcblx0ICAgICAgICAgICAgLy8gV2UgYXJlIG5vdCBydW5uaW5nIGluIFRhc2ssIHNvIHdlIG5lZWQgdG8ga2lja3N0YXJ0IHRoZSBtaWNyb3Rhc2sgcXVldWUuXG5cdCAgICAgICAgICAgIGlmIChnbG9iYWxbc3ltYm9sUHJvbWlzZV0pIHtcblx0ICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApW3N5bWJvbFRoZW5dKGRyYWluTWljcm9UYXNrUXVldWUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGRyYWluTWljcm9UYXNrUXVldWUsIDApO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2sodGFzaykge1xuXHQgICAgICAgIHNjaGVkdWxlUXVldWVEcmFpbigpO1xuXHQgICAgICAgIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY29uc29sZUVycm9yKGUpIHtcblx0ICAgICAgICB2YXIgcmVqZWN0aW9uID0gZSAmJiBlLnJlamVjdGlvbjtcblx0ICAgICAgICBpZiAocmVqZWN0aW9uKSB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcblx0ICAgICAgICBpZiAoIV9pc0RyYWluaW5nTWljcm90YXNrUXVldWUpIHtcblx0ICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IHRydWU7XG5cdCAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG5cdCAgICAgICAgICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHF1ZXVlW2ldO1xuXHQgICAgICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIG51bGwsIG51bGwpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG5cdCAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG5cdCAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSB1bmNhdWdodFByb21pc2VFcnJvcnNbaV07XG5cdCAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKGZ1bmN0aW9uICgpIHsgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3I7IH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF9kcmFpblNjaGVkdWxlZCA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGZvcndhcmRSZXNvbHV0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfVxuXHQgICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHsgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7IH1cblx0ICAgIHZhciBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG5cdCAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuXHQgICAgdmFyIHNvdXJjZSA9ICdQcm9taXNlLnRoZW4nO1xuXHQgICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuXHQgICAgdmFyIFJFU09MVkVEID0gdHJ1ZTtcblx0ICAgIHZhciBSRUpFQ1RFRCA9IGZhbHNlO1xuXHQgICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcblx0ICAgIGZ1bmN0aW9uIG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkge1xuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuXHQgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG5cdCAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHZhbHVlKSB7XG5cdCAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG5cdCAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiYgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG5cdCAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG5cdCAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCB2YWx1ZVtzeW1ib2xTdGF0ZV0sIHZhbHVlW3N5bWJvbFZhbHVlXSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSBpZiAoaXNUaGVuYWJsZSh2YWx1ZSkpIHtcblx0ICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4obWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSwgbWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHN0YXRlO1xuXHQgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG5cdCAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuXHQgICAgICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuY2F1Z2h0IChpbiBwcm9taXNlKTogXCIgKyB2YWx1ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGU7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlamVjdGlvbiA9IHZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5wcm9taXNlID0gcHJvbWlzZTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3Iuem9uZSA9IFpvbmUuY3VycmVudDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IudGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMucHVzaChlcnJvcik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUXVldWVEcmFpbigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cblx0ICAgICAgICByZXR1cm4gcHJvbWlzZTtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpIHtcblx0ICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG5cdCAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURUQ7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHQgICAgICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpO1xuXHQgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb21pc2Vbc3ltYm9sU3RhdGVdID8gb25GdWxmaWxsZWQgfHwgZm9yd2FyZFJlc29sdXRpb24gOiBvblJlamVjdGVkIHx8IGZvcndhcmRSZWplY3Rpb247XG5cdCAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgem9uZS5ydW4oZGVsZWdhdGUsIG51bGwsIFtwcm9taXNlW3N5bWJvbFZhbHVlXV0pKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgdmFyIFpvbmVBd2FyZVByb21pc2UgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoZXhlY3V0b3IpIHtcblx0ICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXHQgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFVOUkVTT0xWRUQ7XG5cdCAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZXhlY3V0b3IgJiYgZXhlY3V0b3IobWFrZVJlc29sdmVyKHByb21pc2UsIFJFU09MVkVEKSwgbWFrZVJlc29sdmVyKHByb21pc2UsIFJFSkVDVEVEKSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHQgICAgICAgICAgICB2YXIgcmVzb2x2ZTtcblx0ICAgICAgICAgICAgdmFyIHJlamVjdDtcblx0ICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHsgcmVzb2x2ZSA9IHJlczsgcmVqZWN0ID0gcmVqOyB9KTtcblx0ICAgICAgICAgICAgZnVuY3Rpb24gb25SZXNvbHZlKHZhbHVlKSB7IHByb21pc2UgJiYgKHByb21pc2UgPSBudWxsIHx8IHJlc29sdmUodmFsdWUpKTsgfVxuXHQgICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdChlcnJvcikgeyBwcm9taXNlICYmIChwcm9taXNlID0gbnVsbCB8fCByZWplY3QoZXJyb3IpKTsgfVxuXHQgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzFbX2ldO1xuXHQgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHJlc29sdmU7XG5cdCAgICAgICAgICAgIHZhciByZWplY3Q7XG5cdCAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7IHJlc29sdmUgPSByZXM7IHJlamVjdCA9IHJlajsgfSk7XG5cdCAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG5cdCAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IFtdO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdChlcnJvcikgeyBwcm9taXNlICYmIHJlamVjdChlcnJvcik7IHByb21pc2UgPSBudWxsOyB9XG5cdCAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzIgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzIubGVuZ3RoOyBfaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMltfaV07XG5cdCAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdmFsdWUudGhlbigoZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICYmICFjb3VudCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9PSBudWxsO1xuXHQgICAgICAgICAgICAgICAgfTsgfSkoY291bnQpLCBvblJlamVjdCk7XG5cdCAgICAgICAgICAgICAgICBjb3VudCsrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICghY291bnQpXG5cdCAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdCAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgWm9uZUF3YXJlUHJvbWlzZShudWxsKTtcblx0ICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG5cdCAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzW3N5bWJvbFZhbHVlXS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuXHQgICAgfSgpKTtcblx0ICAgIHZhciBOYXRpdmVQcm9taXNlID0gZ2xvYmFsW19fc3ltYm9sX18oJ1Byb21pc2UnKV0gPSBnbG9iYWwuUHJvbWlzZTtcblx0ICAgIGdsb2JhbC5Qcm9taXNlID0gWm9uZUF3YXJlUHJvbWlzZTtcblx0ICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG5cdCAgICAgICAgdmFyIE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZSA9IE5hdGl2ZVByb21pc2UucHJvdG90eXBlO1xuXHQgICAgICAgIHZhciBOYXRpdmVQcm9taXNlVGhlbl8xID0gTmF0aXZlUHJvbWlzZVByb3RvdG90eXBlW19fc3ltYm9sX18oJ3RoZW4nKV1cblx0ICAgICAgICAgICAgPSBOYXRpdmVQcm9taXNlUHJvdG90b3R5cGUudGhlbjtcblx0ICAgICAgICBOYXRpdmVQcm9taXNlUHJvdG90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG5cdCAgICAgICAgICAgIHZhciBuYXRpdmVQcm9taXNlID0gdGhpcztcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBab25lQXdhcmVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgICAgICAgICAgIE5hdGl2ZVByb21pc2VUaGVuXzEuY2FsbChuYXRpdmVQcm9taXNlLCByZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICAgICAgICB9KS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuXHQgICAgICAgIH07XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZ2xvYmFsLlpvbmUgPSBab25lO1xuXHR9KSh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyk7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB1dGlsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIFdURl9JU1NVRV81NTUgPSAnQW5jaG9yLEFyZWEsQXVkaW8sQlIsQmFzZSxCYXNlRm9udCxCb2R5LEJ1dHRvbixDYW52YXMsQ29udGVudCxETGlzdCxEaXJlY3RvcnksRGl2LEVtYmVkLEZpZWxkU2V0LEZvbnQsRm9ybSxGcmFtZSxGcmFtZVNldCxIUixIZWFkLEhlYWRpbmcsSHRtbCxJRnJhbWUsSW1hZ2UsSW5wdXQsS2V5Z2VuLExJLExhYmVsLExlZ2VuZCxMaW5rLE1hcCxNYXJxdWVlLE1lZGlhLE1lbnUsTWV0YSxNZXRlcixNb2QsT0xpc3QsT2JqZWN0LE9wdEdyb3VwLE9wdGlvbixPdXRwdXQsUGFyYWdyYXBoLFByZSxQcm9ncmVzcyxRdW90ZSxTY3JpcHQsU2VsZWN0LFNvdXJjZSxTcGFuLFN0eWxlLFRhYmxlQ2FwdGlvbixUYWJsZUNlbGwsVGFibGVDb2wsVGFibGUsVGFibGVSb3csVGFibGVTZWN0aW9uLFRleHRBcmVhLFRpdGxlLFRyYWNrLFVMaXN0LFVua25vd24sVmlkZW8nO1xuXHR2YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdvcmtlcixXb3JrZXJHbG9iYWxTY29wZSxYTUxIdHRwUmVxdWVzdCxYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LFhNTEh0dHBSZXF1ZXN0VXBsb2FkLElEQlJlcXVlc3QsSURCT3BlbkRCUmVxdWVzdCxJREJEYXRhYmFzZSxJREJUcmFuc2FjdGlvbixJREJDdXJzb3IsREJJbmRleCcuc3BsaXQoJywnKTtcblx0dmFyIEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG5cdGZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCkge1xuXHQgICAgdmFyIGFwaXMgPSBbXTtcblx0ICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuXHQgICAgaWYgKGlzV3RmKSB7XG5cdCAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2luZy1mcmFtZXdvcmsvaXNzdWVzLzU1NVxuXHQgICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKF9nbG9iYWxbRVZFTlRfVEFSR0VUXSkge1xuXHQgICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG5cdCAgICAgICAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcblx0ICAgICAgICBhcGlzID0gTk9fRVZFTlRfVEFSR0VUO1xuXHQgICAgfVxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIHR5cGUgPSBfZ2xvYmFsW2FwaXNbaV1dO1xuXHQgICAgICAgIHV0aWxzXzEucGF0Y2hFdmVudFRhcmdldE1ldGhvZHModHlwZSAmJiB0eXBlLnByb3RvdHlwZSk7XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5ldmVudFRhcmdldFBhdGNoID0gZXZlbnRUYXJnZXRQYXRjaDtcblxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qKlxuXHQgKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdwcm9jZXNzJyB2YXJpYWJsZVxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFyc31cblx0ICovXG5cdFwidXNlIHN0cmljdFwiO1xuXHRleHBvcnRzLnpvbmVTeW1ib2wgPSBab25lWydfX3N5bWJvbF9fJ107XG5cdHZhciBfZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdztcblx0ZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcblx0ICAgIGZvciAodmFyIGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaV0gPSBab25lLmN1cnJlbnQud3JhcChhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gYXJncztcblx0fVxuXHRleHBvcnRzLmJpbmRBcmd1bWVudHMgPSBiaW5kQXJndW1lbnRzO1xuXHQ7XG5cdGZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuXHQgICAgdmFyIHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuXHQgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbihpKSB7XG5cdCAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG5cdCAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvdG90eXBlW25hbWVfMV07XG5cdCAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG5cdCAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWVfMSkpO1xuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfSkoZGVsZWdhdGUpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBfbG9vcF8xKGkpO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMucGF0Y2hQcm90b3R5cGUgPSBwYXRjaFByb3RvdHlwZTtcblx0O1xuXHRleHBvcnRzLmlzV2ViV29ya2VyID0gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKTtcblx0ZXhwb3J0cy5pc05vZGUgPSAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyk7XG5cdGV4cG9ydHMuaXNCcm93c2VyID0gIWV4cG9ydHMuaXNOb2RlICYmICFleHBvcnRzLmlzV2ViV29ya2VyICYmICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG5cdGZ1bmN0aW9uIHBhdGNoUHJvcGVydHkob2JqLCBwcm9wKSB7XG5cdCAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKSB8fCB7XG5cdCAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICAgICAgICBjb25maWd1cmFibGU6IHRydWVcblx0ICAgIH07XG5cdCAgICAvLyBBIHByb3BlcnR5IGRlc2NyaXB0b3IgY2Fubm90IGhhdmUgZ2V0dGVyL3NldHRlciBhbmQgYmUgd3JpdGFibGVcblx0ICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcblx0ICAgIC8vXG5cdCAgICAvLyBUeXBlRXJyb3I6IHByb3BlcnR5IGRlc2NyaXB0b3JzIG11c3Qgbm90IHNwZWNpZnkgYSB2YWx1ZSBvciBiZSB3cml0YWJsZSB3aGVuIGFcblx0ICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG5cdCAgICBkZWxldGUgZGVzYy53cml0YWJsZTtcblx0ICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuXHQgICAgLy8gc3Vic3RyKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG5cdCAgICB2YXIgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG5cdCAgICB2YXIgX3Byb3AgPSAnXycgKyBwcm9wO1xuXHQgICAgZGVzYy5zZXQgPSBmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICBpZiAodGhpc1tfcHJvcF0pIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpc1tfcHJvcF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIHZhciB3cmFwRm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cdCAgICAgICAgICAgICAgICByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQgJiYgIXJlc3VsdClcblx0ICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB0aGlzW19wcm9wXSA9IHdyYXBGbjtcblx0ICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aGlzW19wcm9wXSA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzW19wcm9wXTtcblx0ICAgIH07XG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcblx0fVxuXHRleHBvcnRzLnBhdGNoUHJvcGVydHkgPSBwYXRjaFByb3BlcnR5O1xuXHQ7XG5cdGZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcykge1xuXHQgICAgdmFyIG9uUHJvcGVydGllcyA9IFtdO1xuXHQgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcblx0ICAgICAgICBpZiAocHJvcC5zdWJzdHIoMCwgMikgPT0gJ29uJykge1xuXHQgICAgICAgICAgICBvblByb3BlcnRpZXMucHVzaChwcm9wKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9uUHJvcGVydGllcy5sZW5ndGg7IGorKykge1xuXHQgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0pO1xuXHQgICAgfVxuXHQgICAgaWYgKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuXHQ7XG5cdHZhciBFVkVOVF9UQVNLUyA9IGV4cG9ydHMuem9uZVN5bWJvbCgnZXZlbnRUYXNrcycpO1xuXHR2YXIgQUREX0VWRU5UX0xJU1RFTkVSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuXHR2YXIgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXHR2YXIgU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUiA9IGV4cG9ydHMuem9uZVN5bWJvbChBRERfRVZFTlRfTElTVEVORVIpO1xuXHR2YXIgU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiA9IGV4cG9ydHMuem9uZVN5bWJvbChSRU1PVkVfRVZFTlRfTElTVEVORVIpO1xuXHRmdW5jdGlvbiBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIG5hbWUsIGNhcHR1cmUsIHJlbW92ZSkge1xuXHQgICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuXHQgICAgaWYgKGV2ZW50VGFza3MpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIGV2ZW50VGFzayA9IGV2ZW50VGFza3NbaV07XG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnRUYXNrLmRhdGE7XG5cdCAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZXIgPT09IGhhbmRsZXJcblx0ICAgICAgICAgICAgICAgICYmIGRhdGEudXNlQ2FwdHVyaW5nID09PSBjYXB0dXJlXG5cdCAgICAgICAgICAgICAgICAmJiBkYXRhLmV2ZW50TmFtZSA9PT0gbmFtZSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFza3Muc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFzaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBudWxsO1xuXHR9XG5cdGZ1bmN0aW9uIGF0dGFjaFJlZ2lzdGVyZWRFdmVudCh0YXJnZXQsIGV2ZW50VGFzaykge1xuXHQgICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuXHQgICAgaWYgKCFldmVudFRhc2tzKSB7XG5cdCAgICAgICAgZXZlbnRUYXNrcyA9IHRhcmdldFtFVkVOVF9UQVNLU10gPSBbXTtcblx0ICAgIH1cblx0ICAgIGV2ZW50VGFza3MucHVzaChldmVudFRhc2spO1xuXHR9XG5cdGZ1bmN0aW9uIHNjaGVkdWxlRXZlbnRMaXN0ZW5lcihldmVudFRhc2spIHtcblx0ICAgIHZhciBtZXRhID0gZXZlbnRUYXNrLmRhdGE7XG5cdCAgICBhdHRhY2hSZWdpc3RlcmVkRXZlbnQobWV0YS50YXJnZXQsIGV2ZW50VGFzayk7XG5cdCAgICByZXR1cm4gbWV0YS50YXJnZXRbU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl0obWV0YS5ldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEudXNlQ2FwdHVyaW5nKTtcblx0fVxuXHRmdW5jdGlvbiBjYW5jZWxFdmVudExpc3RlbmVyKGV2ZW50VGFzaykge1xuXHQgICAgdmFyIG1ldGEgPSBldmVudFRhc2suZGF0YTtcblx0ICAgIGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKG1ldGEudGFyZ2V0LCBldmVudFRhc2suaW52b2tlLCBtZXRhLmV2ZW50TmFtZSwgbWV0YS51c2VDYXB0dXJpbmcsIHRydWUpO1xuXHQgICAgbWV0YS50YXJnZXRbU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl0obWV0YS5ldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEudXNlQ2FwdHVyaW5nKTtcblx0fVxuXHRmdW5jdGlvbiB6b25lQXdhcmVBZGRFdmVudExpc3RlbmVyKHNlbGYsIGFyZ3MpIHtcblx0ICAgIHZhciBldmVudE5hbWUgPSBhcmdzWzBdO1xuXHQgICAgdmFyIGhhbmRsZXIgPSBhcmdzWzFdO1xuXHQgICAgdmFyIHVzZUNhcHR1cmluZyA9IGFyZ3NbMl0gfHwgZmFsc2U7XG5cdCAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG5cdCAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcblx0ICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcblx0ICAgIHZhciB0YXJnZXQgPSBzZWxmIHx8IF9nbG9iYWw7XG5cdCAgICB2YXIgZGVsZWdhdGUgPSBudWxsO1xuXHQgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICBkZWxlZ2F0ZSA9IGhhbmRsZXI7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcblx0ICAgICAgICBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gaGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7IH07XG5cdCAgICB9XG5cdCAgICB2YXIgdmFsaWRab25lSGFuZGxlciA9IGZhbHNlO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyBJbiBjcm9zcyBzaXRlIGNvbnRleHRzIChzdWNoIGFzIFdlYkRyaXZlciBmcmFtZXdvcmtzIGxpa2UgU2VsZW5pdW0pLFxuXHQgICAgICAgIC8vIGFjY2Vzc2luZyB0aGUgaGFuZGxlciBvYmplY3QgaGVyZSB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24gd2hpY2hcblx0ICAgICAgICAvLyB3aWxsIGZhaWwgdGVzdHMgcHJlbWF0dXJlbHkuXG5cdCAgICAgICAgdmFsaWRab25lSGFuZGxlciA9IGhhbmRsZXIgJiYgaGFuZGxlci50b1N0cmluZygpID09PSBcIltvYmplY3QgRnVuY3Rpb25XcmFwcGVyXVwiO1xuXHQgICAgfVxuXHQgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBSZXR1cm5pbmcgbm90aGluZyBoZXJlIGlzIGZpbmUsIGJlY2F1c2Ugb2JqZWN0cyBpbiBhIGNyb3NzLXNpdGUgY29udGV4dCBhcmUgdW51c2FibGVcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICAvLyBJZ25vcmUgc3BlY2lhbCBsaXN0ZW5lcnMgb2YgSUUxMSAmIEVkZ2UgZGV2IHRvb2xzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTUwXG5cdCAgICBpZiAoIWRlbGVnYXRlIHx8IHZhbGlkWm9uZUhhbmRsZXIpIHtcblx0ICAgICAgICByZXR1cm4gdGFyZ2V0W1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyaW5nKTtcblx0ICAgIH1cblx0ICAgIHZhciBldmVudFRhc2sgPSBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIGV2ZW50TmFtZSwgdXNlQ2FwdHVyaW5nLCBmYWxzZSk7XG5cdCAgICBpZiAoZXZlbnRUYXNrKSB7XG5cdCAgICAgICAgLy8gd2UgYWxyZWFkeSByZWdpc3RlcmVkLCBzbyB0aGlzIHdpbGwgaGF2ZSBub29wLlxuXHQgICAgICAgIHJldHVybiB0YXJnZXRbU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl0oZXZlbnROYW1lLCBldmVudFRhc2suaW52b2tlLCB1c2VDYXB0dXJpbmcpO1xuXHQgICAgfVxuXHQgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG5cdCAgICB2YXIgc291cmNlID0gdGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ10gKyAnLmFkZEV2ZW50TGlzdGVuZXI6JyArIGV2ZW50TmFtZTtcblx0ICAgIHZhciBkYXRhID0ge1xuXHQgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuXHQgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuXHQgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcblx0ICAgICAgICB1c2VDYXB0dXJpbmc6IHVzZUNhcHR1cmluZyxcblx0ICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG5cdCAgICB9O1xuXHQgICAgem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBzY2hlZHVsZUV2ZW50TGlzdGVuZXIsIGNhbmNlbEV2ZW50TGlzdGVuZXIpO1xuXHR9XG5cdGZ1bmN0aW9uIHpvbmVBd2FyZVJlbW92ZUV2ZW50TGlzdGVuZXIoc2VsZiwgYXJncykge1xuXHQgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF07XG5cdCAgICB2YXIgaGFuZGxlciA9IGFyZ3NbMV07XG5cdCAgICB2YXIgdXNlQ2FwdHVyaW5nID0gYXJnc1syXSB8fCBmYWxzZTtcblx0ICAgIC8vIC0gSW5zaWRlIGEgV2ViIFdvcmtlciwgYHRoaXNgIGlzIHVuZGVmaW5lZCwgdGhlIGNvbnRleHQgaXMgYGdsb2JhbGBcblx0ICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuXHQgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuXHQgICAgdmFyIHRhcmdldCA9IHNlbGYgfHwgX2dsb2JhbDtcblx0ICAgIHZhciBldmVudFRhc2sgPSBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIGV2ZW50TmFtZSwgdXNlQ2FwdHVyaW5nLCB0cnVlKTtcblx0ICAgIGlmIChldmVudFRhc2spIHtcblx0ICAgICAgICBldmVudFRhc2suem9uZS5jYW5jZWxUYXNrKGV2ZW50VGFzayk7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICB0YXJnZXRbU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl0oZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpO1xuXHQgICAgfVxuXHR9XG5cdGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKG9iaikge1xuXHQgICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgICAgIHBhdGNoTWV0aG9kKG9iaiwgQUREX0VWRU5UX0xJU1RFTkVSLCBmdW5jdGlvbiAoKSB7IHJldHVybiB6b25lQXdhcmVBZGRFdmVudExpc3RlbmVyOyB9KTtcblx0ICAgICAgICBwYXRjaE1ldGhvZChvYmosIFJFTU9WRV9FVkVOVF9MSVNURU5FUiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gem9uZUF3YXJlUmVtb3ZlRXZlbnRMaXN0ZW5lcjsgfSk7XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5wYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyA9IHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzO1xuXHQ7XG5cdHZhciBvcmlnaW5hbEluc3RhbmNlS2V5ID0gZXhwb3J0cy56b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG5cdC8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5cdGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdCAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcblx0ICAgIGlmICghT3JpZ2luYWxDbGFzcylcblx0ICAgICAgICByZXR1cm47XG5cdCAgICBfZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgY2xhc3NOYW1lKTtcblx0ICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGNhc2UgMDpcblx0ICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICB2YXIgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7IH0pO1xuXHQgICAgdmFyIHByb3A7XG5cdCAgICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcblx0ICAgICAgICAoZnVuY3Rpb24gKHByb3ApIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLCBwcm9wLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IFpvbmUuY3VycmVudC53cmFwKGZuLCBjbGFzc05hbWUgKyAnLicgKyBwcm9wKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfShwcm9wKSk7XG5cdCAgICB9XG5cdCAgICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuXHQgICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdCAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG5cdDtcblx0ZnVuY3Rpb24gY3JlYXRlTmFtZWRGbihuYW1lLCBkZWxlZ2F0ZSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICByZXR1cm4gKEZ1bmN0aW9uKCdmJywgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBuYW1lICsgXCIoKXtyZXR1cm4gZih0aGlzLCBhcmd1bWVudHMpfVwiKSkoZGVsZWdhdGUpO1xuXHQgICAgfVxuXHQgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBpZiB3ZSBmYWlsLCB3ZSBtdXN0IGJlIENTUCwganVzdCByZXR1cm4gZGVsZWdhdGUuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLmNyZWF0ZU5hbWVkRm4gPSBjcmVhdGVOYW1lZEZuO1xuXHRmdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcblx0ICAgIHZhciBwcm90byA9IHRhcmdldDtcblx0ICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0ICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG5cdCAgICB9XG5cdCAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuXHQgICAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cblx0ICAgICAgICBwcm90byA9IHRhcmdldDtcblx0ICAgIH1cblx0ICAgIHZhciBkZWxlZ2F0ZU5hbWUgPSBleHBvcnRzLnpvbmVTeW1ib2wobmFtZSk7XG5cdCAgICB2YXIgZGVsZWdhdGU7XG5cdCAgICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG5cdCAgICAgICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG5cdCAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVOYW1lZEZuKG5hbWUsIHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSkpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGRlbGVnYXRlO1xuXHR9XG5cdGV4cG9ydHMucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHQvKlxuXHQgKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgQ2hyb21lIGFuZCBDaHJvbWUgbW9iaWxlLCB0byBlbmFibGVcblx0ICogdGhpbmdzIGxpa2UgcmVkZWZpbmluZyBgY3JlYXRlZENhbGxiYWNrYCBvbiBhbiBlbGVtZW50LlxuXHQgKi9cblx0dmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblx0dmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXHR2YXIgX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cdHZhciB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB1dGlsc18xLnpvbmVTeW1ib2woJ3VuY29uZmlndXJhYmxlcycpO1xuXHRmdW5jdGlvbiBwcm9wZXJ0eVBhdGNoKCkge1xuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuXHQgICAgICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkgXFwnJyArIHByb3AgKyAnXFwnIG9mICcgKyBvYmopO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcblx0ICAgICAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcblx0ICAgIH07XG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIHByb3BzKSB7XG5cdCAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcblx0ICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBvYmo7XG5cdCAgICB9O1xuXHQgICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcblx0ICAgICAgICAgICAgICAgIHByb3RvW3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBwcm90b1twcm9wXSk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gX2NyZWF0ZShvYmosIHByb3RvKTtcblx0ICAgIH07XG5cdCAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuXHQgICAgICAgIHZhciBkZXNjID0gX2dldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuXHQgICAgICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcblx0ICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGRlc2M7XG5cdCAgICB9O1xuXHR9XG5cdGV4cG9ydHMucHJvcGVydHlQYXRjaCA9IHByb3BlcnR5UGF0Y2g7XG5cdDtcblx0ZnVuY3Rpb24gX3JlZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKSB7XG5cdCAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcblx0ICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcblx0fVxuXHRleHBvcnRzLl9yZWRlZmluZVByb3BlcnR5ID0gX3JlZGVmaW5lUHJvcGVydHk7XG5cdDtcblx0ZnVuY3Rpb24gaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApIHtcblx0ICAgIHJldHVybiBvYmogJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF07XG5cdH1cblx0ZnVuY3Rpb24gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKSB7XG5cdCAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdCAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG5cdCAgICAgICAgaWYgKCFvYmpbdW5jb25maWd1cmFibGVzS2V5XSkge1xuXHQgICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkob2JqLCB1bmNvbmZpZ3VyYWJsZXNLZXksIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF0gPSB0cnVlO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGRlc2M7XG5cdH1cblxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBkZWZpbmVfcHJvcGVydHlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciB1dGlsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0ZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50UGF0Y2goX2dsb2JhbCkge1xuXHQgICAgaWYgKCF1dGlsc18xLmlzQnJvd3NlciB8fCAhKCdyZWdpc3RlckVsZW1lbnQnIGluIF9nbG9iYWwuZG9jdW1lbnQpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIF9yZWdpc3RlckVsZW1lbnQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ7XG5cdCAgICB2YXIgY2FsbGJhY2tzID0gW1xuXHQgICAgICAgICdjcmVhdGVkQ2FsbGJhY2snLFxuXHQgICAgICAgICdhdHRhY2hlZENhbGxiYWNrJyxcblx0ICAgICAgICAnZGV0YWNoZWRDYWxsYmFjaycsXG5cdCAgICAgICAgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaydcblx0ICAgIF07XG5cdCAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuXHQgICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICdEb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ6OicgKyBjYWxsYmFjaztcblx0ICAgICAgICAgICAgICAgIGlmIChvcHRzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBab25lLmN1cnJlbnQud3JhcChkZXNjcmlwdG9yLnZhbHVlLCBzb3VyY2UpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVfcHJvcGVydHlfMS5fcmVkZWZpbmVQcm9wZXJ0eShvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2ssIGRlc2NyaXB0b3IpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdID0gWm9uZS5jdXJyZW50LndyYXAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSA9IFpvbmUuY3VycmVudC53cmFwKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBfcmVnaXN0ZXJFbGVtZW50LmFwcGx5KGRvY3VtZW50LCBbbmFtZSwgb3B0c10pO1xuXHQgICAgfTtcblx0fVxuXHRleHBvcnRzLnJlZ2lzdGVyRWxlbWVudFBhdGNoID0gcmVnaXN0ZXJFbGVtZW50UGF0Y2g7XG5cblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgd2ViU29ja2V0UGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHR2YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBldmVudE5hbWVzID0gJ2NvcHkgY3V0IHBhc3RlIGFib3J0IGJsdXIgZm9jdXMgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBjaGFuZ2UgY2xpY2sgY29udGV4dG1lbnUgZGJsY2xpY2sgZHJhZyBkcmFnZW5kIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJhZ3N0YXJ0IGRyb3AgZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmRlZCBpbnB1dCBpbnZhbGlkIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbG9hZCBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBtZXNzYWdlIG1vdXNlZG93biBtb3VzZWVudGVyIG1vdXNlbGVhdmUgbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwIHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHJlc2V0IHNjcm9sbCBzZWVrZWQgc2Vla2luZyBzZWxlY3Qgc2hvdyBzdGFsbGVkIHN1Ym1pdCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmcgbW96ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuZXJyb3IgbW96cG9pbnRlcmxvY2tjaGFuZ2UgbW96cG9pbnRlcmxvY2tlcnJvciBlcnJvciB3ZWJnbGNvbnRleHRyZXN0b3JlZCB3ZWJnbGNvbnRleHRsb3N0IHdlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InLnNwbGl0KCcgJyk7XG5cdGZ1bmN0aW9uIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKF9nbG9iYWwpIHtcblx0ICAgIGlmICh1dGlsc18xLmlzTm9kZSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuXHQgICAgaWYgKGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkpIHtcblx0ICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG5cdCAgICAgICAgaWYgKHV0aWxzXzEuaXNCcm93c2VyKSB7XG5cdCAgICAgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdXRpbHNfMS5wYXRjaE9uUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuXHQgICAgICAgIGlmICh0eXBlb2YgSURCSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBudWxsKTtcblx0ICAgICAgICAgICAgdXRpbHNfMS5wYXRjaE9uUHJvcGVydGllcyhJREJSZXF1ZXN0LnByb3RvdHlwZSwgbnVsbCk7XG5cdCAgICAgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMoSURCT3BlbkRCUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuXHQgICAgICAgICAgICB1dGlsc18xLnBhdGNoT25Qcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgbnVsbCk7XG5cdCAgICAgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMoSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBudWxsKTtcblx0ICAgICAgICAgICAgdXRpbHNfMS5wYXRjaE9uUHJvcGVydGllcyhJREJDdXJzb3IucHJvdG90eXBlLCBudWxsKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG5cdCAgICAgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMoV2ViU29ja2V0LnByb3RvdHlwZSwgbnVsbCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgICAgLy8gU2FmYXJpLCBBbmRyb2lkIGJyb3dzZXJzIChKZWxseSBCZWFuKVxuXHQgICAgICAgIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCk7XG5cdCAgICAgICAgdXRpbHNfMS5wYXRjaENsYXNzKCdYTUxIdHRwUmVxdWVzdCcpO1xuXHQgICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuXHQgICAgICAgICAgICB3ZWJTb2NrZXRQYXRjaC5hcHBseShfZ2xvYmFsKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5wcm9wZXJ0eURlc2NyaXB0b3JQYXRjaCA9IHByb3BlcnR5RGVzY3JpcHRvclBhdGNoO1xuXHRmdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpIHtcblx0ICAgIGlmICh1dGlsc18xLmlzQnJvd3NlciAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJylcblx0ICAgICAgICAmJiB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuXHQgICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuXHQgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcblx0ICAgICAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpXG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7XG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHQgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7fSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdDtcblx0dmFyIHVuYm91bmRLZXkgPSB1dGlsc18xLnpvbmVTeW1ib2woJ3VuYm91bmQnKTtcblx0Ly8gV2hlbmV2ZXIgYW55IGV2ZW50TGlzdGVuZXIgZmlyZXMsIHdlIGNoZWNrIHRoZSBldmVudExpc3RlbmVyIHRhcmdldCBhbmQgYWxsIHBhcmVudHNcblx0Ly8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuXHQvLyAtIENocm9tZSAoZm9yIG5vdylcblx0ZnVuY3Rpb24gcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoKSB7XG5cdCAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcblx0ICAgICAgICB2YXIgcHJvcGVydHkgPSBldmVudE5hbWVzW2ldO1xuXHQgICAgICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuXHQgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuXHQgICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZCwgc291cmNlO1xuXHQgICAgICAgICAgICBpZiAoZWx0KSB7XG5cdCAgICAgICAgICAgICAgICBzb3VyY2UgPSBlbHQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIG9ucHJvcGVydHk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBzb3VyY2UgPSAndW5rbm93bi4nICsgb25wcm9wZXJ0eTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB3aGlsZSAoZWx0KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoZWx0W29ucHJvcGVydHldICYmICFlbHRbb25wcm9wZXJ0eV1bdW5ib3VuZEtleV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBib3VuZCA9IFpvbmUuY3VycmVudC53cmFwKGVsdFtvbnByb3BlcnR5XSwgc291cmNlKTtcblx0ICAgICAgICAgICAgICAgICAgICBib3VuZFt1bmJvdW5kS2V5XSA9IGVsdFtvbnByb3BlcnR5XTtcblx0ICAgICAgICAgICAgICAgICAgICBlbHRbb25wcm9wZXJ0eV0gPSBib3VuZDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSwgdHJ1ZSk7XG5cdCAgICB9O1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgX2xvb3BfMShpKTtcblx0ICAgIH1cblx0ICAgIDtcblx0fVxuXHQ7XG5cblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdC8vIHdlIGhhdmUgdG8gcGF0Y2ggdGhlIGluc3RhbmNlIHNpbmNlIHRoZSBwcm90byBpcyBub24tY29uZmlndXJhYmxlXG5cdGZ1bmN0aW9uIGFwcGx5KF9nbG9iYWwpIHtcblx0ICAgIHZhciBXUyA9IF9nbG9iYWwuV2ViU29ja2V0O1xuXHQgICAgLy8gT24gU2FmYXJpIHdpbmRvdy5FdmVudFRhcmdldCBkb2Vzbid0IGV4aXN0IHNvIG5lZWQgdG8gcGF0Y2ggV1MgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJcblx0ICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG5cdCAgICBpZiAoIV9nbG9iYWwuRXZlbnRUYXJnZXQpIHtcblx0ICAgICAgICB1dGlsc18xLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG5cdCAgICB9XG5cdCAgICBfZ2xvYmFsLldlYlNvY2tldCA9IGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuXHQgICAgICAgIHZhciBwcm94eVNvY2tldDtcblx0ICAgICAgICAvLyBTYWZhcmkgNy4wIGhhcyBub24tY29uZmlndXJhYmxlIG93biAnb25tZXNzYWdlJyBhbmQgZnJpZW5kcyBwcm9wZXJ0aWVzIG9uIHRoZSBzb2NrZXQgaW5zdGFuY2Vcblx0ICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG5cdCAgICAgICAgaWYgKG9ubWVzc2FnZURlc2MgJiYgb25tZXNzYWdlRGVzYy5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG5cdCAgICAgICAgICAgIHByb3h5U29ja2V0ID0gT2JqZWN0LmNyZWF0ZShzb2NrZXQpO1xuXHQgICAgICAgICAgICBbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcblx0ICAgICAgICAgICAgICAgIHByb3h5U29ja2V0W3Byb3BOYW1lXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ja2V0W3Byb3BOYW1lXS5hcHBseShzb2NrZXQsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIC8vIHdlIGNhbiBwYXRjaCB0aGUgcmVhbCBzb2NrZXRcblx0ICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBzb2NrZXQ7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHV0aWxzXzEucGF0Y2hPblByb3BlcnRpZXMocHJveHlTb2NrZXQsIFsnY2xvc2UnLCAnZXJyb3InLCAnbWVzc2FnZScsICdvcGVuJ10pO1xuXHQgICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcblx0ICAgIH07XG5cdCAgICBmb3IgKHZhciBwcm9wIGluIFdTKSB7XG5cdCAgICAgICAgX2dsb2JhbC5XZWJTb2NrZXRbcHJvcF0gPSBXU1twcm9wXTtcblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLmFwcGx5ID0gYXBwbHk7XG5cblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdGZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG5cdCAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcblx0ICAgIHZhciBjbGVhck5hdGl2ZSA9IG51bGw7XG5cdCAgICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG5cdCAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG5cdCAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuXHQgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuXHQgICAgICAgIGRhdGEuYXJnc1swXSA9IHRhc2suaW52b2tlO1xuXHQgICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuXHQgICAgICAgIHJldHVybiB0YXNrO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcblx0ICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUodGFzay5kYXRhLmhhbmRsZUlkKTtcblx0ICAgIH1cblx0ICAgIHNldE5hdGl2ZSA9IHV0aWxzXzEucGF0Y2hNZXRob2Qod2luZG93LCBzZXROYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuXHQgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgICAgIGhhbmRsZUlkOiBudWxsLFxuXHQgICAgICAgICAgICAgICAgaXNQZXJpb2RpYzogbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyxcblx0ICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDogbnVsbCxcblx0ICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3Ncblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgcmV0dXJuIHpvbmUuc2NoZWR1bGVNYWNyb1Rhc2soc2V0TmFtZSwgYXJnc1swXSwgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cblx0ICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG5cdCAgICAgICAgfVxuXHQgICAgfTsgfSk7XG5cdCAgICBjbGVhck5hdGl2ZSA9IHV0aWxzXzEucGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG5cdCAgICAgICAgdmFyIHRhc2sgPSBhcmdzWzBdO1xuXHQgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgIGlmICh0YXNrLmNhbmNlbEZuICYmIHRhc2suZGF0YS5pc1BlcmlvZGljIHx8IHRhc2sucnVuQ291bnQgPT09IDApIHtcblx0ICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcblx0ICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuXHQgICAgICAgICAgICBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuXHQgICAgICAgIH1cblx0ICAgIH07IH0pO1xuXHR9XG5cdGV4cG9ydHMucGF0Y2hUaW1lciA9IHBhdGNoVGltZXI7XG5cblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vem9uZS5qcy9kaXN0L3pvbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3OThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgTkVXTElORSA9ICdcXG4nO1xuXHQgICAgdmFyIFNFUCA9ICcgIC0tLS0tLS0tLS0tLS0gICc7XG5cdCAgICB2YXIgSUdOT1JFX0ZSQU1FUyA9IFtdO1xuXHQgICAgdmFyIGNyZWF0aW9uVHJhY2UgPSAnX19jcmVhdGlvblRyYWNlX18nO1xuXHQgICAgdmFyIExvbmdTdGFja1RyYWNlID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBMb25nU3RhY2tUcmFjZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lcnJvciA9IGdldFN0YWNrdHJhY2UoKTtcblx0ICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gTG9uZ1N0YWNrVHJhY2U7XG5cdCAgICB9KCkpO1xuXHQgICAgZnVuY3Rpb24gZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yKCkge1xuXHQgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NUQUNLVFJBQ0UgVFJBQ0tJTkcnKTtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGdldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IoKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgdGhyb3cgZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBlO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIG9mIGV4Y2VwdGlvbiBoYW5kbGluZyBkb24ndCBjcmVhdGUgYSBzdGFjayB0cmFjZSBpZiB0aGUgZXhjZXB0aW9uXG5cdCAgICAvLyBpc24ndCB0aHJvd24sIGhvd2V2ZXIgaXQncyBmYXN0ZXIgbm90IHRvIGFjdHVhbGx5IHRocm93IHRoZSBleGNlcHRpb24uXG5cdCAgICB2YXIgZXJyb3IgPSBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IoKTtcblx0ICAgIHZhciBjb3VnaHRFcnJvciA9IGdldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IoKTtcblx0ICAgIHZhciBnZXRTdGFja3RyYWNlID0gZXJyb3Iuc3RhY2tcblx0ICAgICAgICA/IGdldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvclxuXHQgICAgICAgIDogKGNvdWdodEVycm9yLnN0YWNrID8gZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvciA6IGdldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvcik7XG5cdCAgICBmdW5jdGlvbiBnZXRGcmFtZXMoZXJyb3IpIHtcblx0ICAgICAgICByZXR1cm4gZXJyb3Iuc3RhY2sgPyBlcnJvci5zdGFjay5zcGxpdChORVdMSU5FKSA6IFtdO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gYWRkRXJyb3JTdGFjayhsaW5lcywgZXJyb3IpIHtcblx0ICAgICAgICB2YXIgdHJhY2UgPSBnZXRGcmFtZXMoZXJyb3IpO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIGZyYW1lID0gdHJhY2VbaV07XG5cdCAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIEZyYW1lcyB3aGljaCBhcmUgcGFydCBvZiBzdGFjayBjYXB0dXJpbmcuXG5cdCAgICAgICAgICAgIGlmICghKGkgPCBJR05PUkVfRlJBTUVTLmxlbmd0aCAmJiBJR05PUkVfRlJBTUVTW2ldID09PSBmcmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godHJhY2VbaV0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gcmVuZGVyTG9uZ1N0YWNrVHJhY2UoZnJhbWVzLCBzdGFjaykge1xuXHQgICAgICAgIHZhciBsb25nVHJhY2UgPSBbc3RhY2tdO1xuXHQgICAgICAgIGlmIChmcmFtZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIHRyYWNlRnJhbWVzID0gZnJhbWVzW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxhc3RUaW1lID0gdHJhY2VGcmFtZXMudGltZXN0YW1wO1xuXHQgICAgICAgICAgICAgICAgbG9uZ1RyYWNlLnB1c2goU0VQICsgXCIgRWxhcHNlZDogXCIgKyAodGltZXN0YW1wIC0gbGFzdFRpbWUuZ2V0VGltZSgpKSArIFwiIG1zOyBBdDogXCIgKyBsYXN0VGltZSArIFwiIFwiICsgU0VQKTtcblx0ICAgICAgICAgICAgICAgIGFkZEVycm9yU3RhY2sobG9uZ1RyYWNlLCB0cmFjZUZyYW1lcy5lcnJvcik7XG5cdCAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPSBsYXN0VGltZS5nZXRUaW1lKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGxvbmdUcmFjZS5qb2luKE5FV0xJTkUpO1xuXHQgICAgfVxuXHQgICAgWm9uZVsnbG9uZ1N0YWNrVHJhY2Vab25lU3BlYyddID0ge1xuXHQgICAgICAgIG5hbWU6ICdsb25nLXN0YWNrLXRyYWNlJyxcblx0ICAgICAgICBsb25nU3RhY2tUcmFjZUxpbWl0OiAxMCxcblx0ICAgICAgICBvblNjaGVkdWxlVGFzazogZnVuY3Rpb24gKHBhcmVudFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIHRhc2spIHtcblx0ICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXNrID0gWm9uZS5jdXJyZW50VGFzaztcblx0ICAgICAgICAgICAgdmFyIHRyYWNlID0gY3VycmVudFRhc2sgJiYgY3VycmVudFRhc2suZGF0YSAmJiBjdXJyZW50VGFzay5kYXRhW2NyZWF0aW9uVHJhY2VdIHx8IFtdO1xuXHQgICAgICAgICAgICB0cmFjZSA9IFtuZXcgTG9uZ1N0YWNrVHJhY2UoKV0uY29uY2F0KHRyYWNlKTtcblx0ICAgICAgICAgICAgaWYgKHRyYWNlLmxlbmd0aCA+IHRoaXMubG9uZ1N0YWNrVHJhY2VMaW1pdCkge1xuXHQgICAgICAgICAgICAgICAgdHJhY2UubGVuZ3RoID0gdGhpcy5sb25nU3RhY2tUcmFjZUxpbWl0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICghdGFzay5kYXRhKVxuXHQgICAgICAgICAgICAgICAgdGFzay5kYXRhID0ge307XG5cdCAgICAgICAgICAgIHRhc2suZGF0YVtjcmVhdGlvblRyYWNlXSA9IHRyYWNlO1xuXHQgICAgICAgICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXRab25lLCB0YXNrKTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIG9uSGFuZGxlRXJyb3I6IGZ1bmN0aW9uIChwYXJlbnRab25lRGVsZWdhdGUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikge1xuXHQgICAgICAgICAgICB2YXIgcGFyZW50VGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG5cdCAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIHBhcmVudFRhc2spIHtcblx0ICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlcnJvciwgJ3N0YWNrJyk7XG5cdCAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZUdldF8xID0gZGVzY3JpcHRvci5nZXQ7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxvbmdTdGFja1RyYWNlKHBhcmVudFRhc2suZGF0YSAmJiBwYXJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV0sIGRlbGVnYXRlR2V0XzEgPyBkZWxlZ2F0ZUdldF8xLmFwcGx5KHRoaXMpIDogdmFsdWVfMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywgZGVzY3JpcHRvcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBlcnJvci5zdGFjayA9IHJlbmRlckxvbmdTdGFja1RyYWNlKHBhcmVudFRhc2suZGF0YSAmJiBwYXJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV0sIGVycm9yLnN0YWNrKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycm9yKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2VzKHN0YWNrVHJhY2VzLCBjb3VudCkge1xuXHQgICAgICAgIGlmIChjb3VudCA+IDApIHtcblx0ICAgICAgICAgICAgc3RhY2tUcmFjZXMucHVzaChnZXRGcmFtZXMoKG5ldyBMb25nU3RhY2tUcmFjZSgpKS5lcnJvcikpO1xuXHQgICAgICAgICAgICBjYXB0dXJlU3RhY2tUcmFjZXMoc3RhY2tUcmFjZXMsIGNvdW50IC0gMSk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY29tcHV0ZUlnbm9yZUZyYW1lcygpIHtcblx0ICAgICAgICB2YXIgZnJhbWVzID0gW107XG5cdCAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2VzKGZyYW1lcywgMik7XG5cdCAgICAgICAgdmFyIGZyYW1lczEgPSBmcmFtZXNbMF07XG5cdCAgICAgICAgdmFyIGZyYW1lczIgPSBmcmFtZXNbMV07XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZXMxLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciBmcmFtZTEgPSBmcmFtZXMxW2ldO1xuXHQgICAgICAgICAgICB2YXIgZnJhbWUyID0gZnJhbWVzMltpXTtcblx0ICAgICAgICAgICAgaWYgKGZyYW1lMSA9PT0gZnJhbWUyKSB7XG5cdCAgICAgICAgICAgICAgICBJR05PUkVfRlJBTUVTLnB1c2goZnJhbWUxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgY29tcHV0ZUlnbm9yZUZyYW1lcygpO1xuXHR9KSgpO1xuXG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3pvbmUuanMvZGlzdC9sb25nLXN0YWNrLXRyYWNlLXpvbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3OTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=