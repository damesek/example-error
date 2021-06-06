["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/util.js"],"~:js","goog.provide(\"goog.labs.userAgent.util\");\ngoog.require(\"goog.string.internal\");\ngoog.labs.userAgent.util.getNativeUserAgentString_ = function() {\n  var navigator = goog.labs.userAgent.util.getNavigator_();\n  if (navigator) {\n    var userAgent = navigator.userAgent;\n    if (userAgent) {\n      return userAgent;\n    }\n  }\n  return \"\";\n};\ngoog.labs.userAgent.util.getNavigator_ = function() {\n  return goog.global.navigator;\n};\ngoog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();\ngoog.labs.userAgent.util.setUserAgent = function(opt_userAgent) {\n  goog.labs.userAgent.util.userAgent_ = opt_userAgent || goog.labs.userAgent.util.getNativeUserAgentString_();\n};\ngoog.labs.userAgent.util.getUserAgent = function() {\n  return goog.labs.userAgent.util.userAgent_;\n};\ngoog.labs.userAgent.util.matchUserAgent = function(str) {\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\n  return goog.string.internal.contains(userAgent, str);\n};\ngoog.labs.userAgent.util.matchUserAgentIgnoreCase = function(str) {\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\n  return goog.string.internal.caseInsensitiveContains(userAgent, str);\n};\ngoog.labs.userAgent.util.extractVersionTuples = function(userAgent) {\n  var versionRegExp = new RegExp(\"(\\\\w[\\\\w ]+)\" + \"/\" + \"([^\\\\s]+)\" + \"\\\\s*\" + \"(?:\\\\((.*?)\\\\))?\", \"g\");\n  var data = [];\n  var match;\n  while (match = versionRegExp.exec(userAgent)) {\n    data.push([match[1], match[2], match[3] || undefined]);\n  }\n  return data;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities used by goog.labs.userAgent tools. These functions\n * should not be used outside of goog.labs.userAgent.*.\n *\n */\n\ngoog.provide('goog.labs.userAgent.util');\n\ngoog.require('goog.string.internal');\n\n\n/**\n * Gets the native userAgent string from navigator if it exists.\n * If navigator or navigator.userAgent string is missing, returns an empty\n * string.\n * @return {string}\n * @private\n */\ngoog.labs.userAgent.util.getNativeUserAgentString_ = function() {\n  'use strict';\n  var navigator = goog.labs.userAgent.util.getNavigator_();\n  if (navigator) {\n    var userAgent = navigator.userAgent;\n    if (userAgent) {\n      return userAgent;\n    }\n  }\n  return '';\n};\n\n\n/**\n * Getter for the native navigator.\n * This is a separate function so it can be stubbed out in testing.\n * @return {!Navigator}\n * @private\n */\ngoog.labs.userAgent.util.getNavigator_ = function() {\n  'use strict';\n  return goog.global.navigator;\n};\n\n\n/**\n * A possible override for applications which wish to not check\n * navigator.userAgent but use a specified value for detection instead.\n * @private {string}\n */\ngoog.labs.userAgent.util.userAgent_ =\n    goog.labs.userAgent.util.getNativeUserAgentString_();\n\n\n/**\n * Applications may override browser detection on the built in\n * navigator.userAgent object by setting this string. Set to null to use the\n * browser object instead.\n * @param {?string=} opt_userAgent The User-Agent override.\n */\ngoog.labs.userAgent.util.setUserAgent = function(opt_userAgent) {\n  'use strict';\n  goog.labs.userAgent.util.userAgent_ =\n      opt_userAgent || goog.labs.userAgent.util.getNativeUserAgentString_();\n};\n\n\n/**\n * @return {string} The user agent string.\n */\ngoog.labs.userAgent.util.getUserAgent = function() {\n  'use strict';\n  return goog.labs.userAgent.util.userAgent_;\n};\n\n\n/**\n * @param {string} str\n * @return {boolean} Whether the user agent contains the given string.\n */\ngoog.labs.userAgent.util.matchUserAgent = function(str) {\n  'use strict';\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\n  return goog.string.internal.contains(userAgent, str);\n};\n\n\n/**\n * @param {string} str\n * @return {boolean} Whether the user agent contains the given string, ignoring\n *     case.\n */\ngoog.labs.userAgent.util.matchUserAgentIgnoreCase = function(str) {\n  'use strict';\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\n  return goog.string.internal.caseInsensitiveContains(userAgent, str);\n};\n\n\n/**\n * Parses the user agent into tuples for each section.\n * @param {string} userAgent\n * @return {!Array<!Array<string>>} Tuples of key, version, and the contents\n *     of the parenthetical.\n */\ngoog.labs.userAgent.util.extractVersionTuples = function(userAgent) {\n  'use strict';\n  // Matches each section of a user agent string.\n  // Example UA:\n  // Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us)\n  // AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405\n  // This has three version tuples: Mozilla, AppleWebKit, and Mobile.\n\n  var versionRegExp = new RegExp(\n      // Key. Note that a key may have a space.\n      // (i.e. 'Mobile Safari' in 'Mobile Safari/5.0')\n      '(\\\\w[\\\\w ]+)' +\n\n          '/' +                // slash\n          '([^\\\\s]+)' +        // version (i.e. '5.0b')\n          '\\\\s*' +             // whitespace\n          '(?:\\\\((.*?)\\\\))?',  // parenthetical info. parentheses not matched.\n      'g');\n\n  var data = [];\n  var match;\n\n  // Iterate and collect the version tuples.  Each iteration will be the\n  // next regex match.\n  while (match = versionRegExp.exec(userAgent)) {\n    data.push([\n      match[1],  // key\n      match[2],  // value\n      // || undefined as this is not undefined in IE7 and IE8\n      match[3] || undefined  // info\n    ]);\n  }\n\n  return data;\n};\n","~:compiled-at",1623000231186,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.util.js\",\n\"lineCount\":40,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/util.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities used by goog.labs.userAgent tools. These functions\\n * should not be used outside of goog.labs.userAgent.*.\\n *\\n */\\n\\ngoog.provide('goog.labs.userAgent.util');\\n\\ngoog.require('goog.string.internal');\\n\\n\\n/**\\n * Gets the native userAgent string from navigator if it exists.\\n * If navigator or navigator.userAgent string is missing, returns an empty\\n * string.\\n * @return {string}\\n * @private\\n */\\ngoog.labs.userAgent.util.getNativeUserAgentString_ = function() {\\n  'use strict';\\n  var navigator = goog.labs.userAgent.util.getNavigator_();\\n  if (navigator) {\\n    var userAgent = navigator.userAgent;\\n    if (userAgent) {\\n      return userAgent;\\n    }\\n  }\\n  return '';\\n};\\n\\n\\n/**\\n * Getter for the native navigator.\\n * This is a separate function so it can be stubbed out in testing.\\n * @return {!Navigator}\\n * @private\\n */\\ngoog.labs.userAgent.util.getNavigator_ = function() {\\n  'use strict';\\n  return goog.global.navigator;\\n};\\n\\n\\n/**\\n * A possible override for applications which wish to not check\\n * navigator.userAgent but use a specified value for detection instead.\\n * @private {string}\\n */\\ngoog.labs.userAgent.util.userAgent_ =\\n    goog.labs.userAgent.util.getNativeUserAgentString_();\\n\\n\\n/**\\n * Applications may override browser detection on the built in\\n * navigator.userAgent object by setting this string. Set to null to use the\\n * browser object instead.\\n * @param {?string=} opt_userAgent The User-Agent override.\\n */\\ngoog.labs.userAgent.util.setUserAgent = function(opt_userAgent) {\\n  'use strict';\\n  goog.labs.userAgent.util.userAgent_ =\\n      opt_userAgent || goog.labs.userAgent.util.getNativeUserAgentString_();\\n};\\n\\n\\n/**\\n * @return {string} The user agent string.\\n */\\ngoog.labs.userAgent.util.getUserAgent = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.userAgent_;\\n};\\n\\n\\n/**\\n * @param {string} str\\n * @return {boolean} Whether the user agent contains the given string.\\n */\\ngoog.labs.userAgent.util.matchUserAgent = function(str) {\\n  'use strict';\\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\\n  return goog.string.internal.contains(userAgent, str);\\n};\\n\\n\\n/**\\n * @param {string} str\\n * @return {boolean} Whether the user agent contains the given string, ignoring\\n *     case.\\n */\\ngoog.labs.userAgent.util.matchUserAgentIgnoreCase = function(str) {\\n  'use strict';\\n  var userAgent = goog.labs.userAgent.util.getUserAgent();\\n  return goog.string.internal.caseInsensitiveContains(userAgent, str);\\n};\\n\\n\\n/**\\n * Parses the user agent into tuples for each section.\\n * @param {string} userAgent\\n * @return {!Array<!Array<string>>} Tuples of key, version, and the contents\\n *     of the parenthetical.\\n */\\ngoog.labs.userAgent.util.extractVersionTuples = function(userAgent) {\\n  'use strict';\\n  // Matches each section of a user agent string.\\n  // Example UA:\\n  // Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us)\\n  // AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405\\n  // This has three version tuples: Mozilla, AppleWebKit, and Mobile.\\n\\n  var versionRegExp = new RegExp(\\n      // Key. Note that a key may have a space.\\n      // (i.e. 'Mobile Safari' in 'Mobile Safari/5.0')\\n      '(\\\\\\\\w[\\\\\\\\w ]+)' +\\n\\n          '/' +                // slash\\n          '([^\\\\\\\\s]+)' +        // version (i.e. '5.0b')\\n          '\\\\\\\\s*' +             // whitespace\\n          '(?:\\\\\\\\((.*?)\\\\\\\\))?',  // parenthetical info. parentheses not matched.\\n      'g');\\n\\n  var data = [];\\n  var match;\\n\\n  // Iterate and collect the version tuples.  Each iteration will be the\\n  // next regex match.\\n  while (match = versionRegExp.exec(userAgent)) {\\n    data.push([\\n      match[1],  // key\\n      match[2],  // value\\n      // || undefined as this is not undefined in IE7 and IE8\\n      match[3] || undefined  // info\\n    ]);\\n  }\\n\\n  return data;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"util\",\"getNativeUserAgentString_\",\"goog.labs.userAgent.util.getNativeUserAgentString_\",\"navigator\",\"getNavigator_\",\"goog.labs.userAgent.util.getNavigator_\",\"global\",\"userAgent_\",\"setUserAgent\",\"goog.labs.userAgent.util.setUserAgent\",\"opt_userAgent\",\"getUserAgent\",\"goog.labs.userAgent.util.getUserAgent\",\"matchUserAgent\",\"goog.labs.userAgent.util.matchUserAgent\",\"str\",\"string\",\"internal\",\"contains\",\"matchUserAgentIgnoreCase\",\"goog.labs.userAgent.util.matchUserAgentIgnoreCase\",\"caseInsensitiveContains\",\"extractVersionTuples\",\"goog.labs.userAgent.util.extractVersionTuples\",\"versionRegExp\",\"RegExp\",\"data\",\"match\",\"exec\",\"push\",\"undefined\"]\n}\n"]