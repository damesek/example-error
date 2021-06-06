["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/platform.js"],"~:js","goog.provide(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.labs.userAgent.util\");\ngoog.require(\"goog.string\");\ngoog.labs.userAgent.platform.isAndroid = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Android\");\n};\ngoog.labs.userAgent.platform.isIpod = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPod\");\n};\ngoog.labs.userAgent.platform.isIphone = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPhone\") && !goog.labs.userAgent.util.matchUserAgent(\"iPod\") && !goog.labs.userAgent.util.matchUserAgent(\"iPad\");\n};\ngoog.labs.userAgent.platform.isIpad = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPad\");\n};\ngoog.labs.userAgent.platform.isIos = function() {\n  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();\n};\ngoog.labs.userAgent.platform.isMacintosh = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Macintosh\");\n};\ngoog.labs.userAgent.platform.isLinux = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Linux\");\n};\ngoog.labs.userAgent.platform.isWindows = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Windows\");\n};\ngoog.labs.userAgent.platform.isChromeOS = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"CrOS\");\n};\ngoog.labs.userAgent.platform.isChromecast = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"CrKey\");\n};\ngoog.labs.userAgent.platform.isKaiOS = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase(\"KaiOS\");\n};\ngoog.labs.userAgent.platform.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  var version = \"\", re;\n  if (goog.labs.userAgent.platform.isWindows()) {\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\n    var match = re.exec(userAgentString);\n    if (match) {\n      version = match[1];\n    } else {\n      version = \"0.0\";\n    }\n  } else {\n    if (goog.labs.userAgent.platform.isIos()) {\n      re = /(?:iPhone|iPod|iPad|CPU)\\s+OS\\s+(\\S+)/;\n      var match = re.exec(userAgentString);\n      version = match && match[1].replace(/_/g, \".\");\n    } else {\n      if (goog.labs.userAgent.platform.isMacintosh()) {\n        re = /Mac OS X ([0-9_.]+)/;\n        var match = re.exec(userAgentString);\n        version = match ? match[1].replace(/_/g, \".\") : \"10\";\n      } else {\n        if (goog.labs.userAgent.platform.isKaiOS()) {\n          re = /(?:KaiOS)\\/(\\S+)/i;\n          var match = re.exec(userAgentString);\n          version = match && match[1];\n        } else {\n          if (goog.labs.userAgent.platform.isAndroid()) {\n            re = /Android\\s+([^\\);]+)(\\)|;)/;\n            var match = re.exec(userAgentString);\n            version = match && match[1];\n          } else {\n            if (goog.labs.userAgent.platform.isChromeOS()) {\n              re = /(?:CrOS\\s+(?:i686|x86_64)\\s+([0-9.]+))/;\n              var match = re.exec(userAgentString);\n              version = match && match[1];\n            }\n          }\n        }\n      }\n    }\n  }\n  return version || \"\";\n};\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), version) >= 0;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Closure user agent platform detection.\n * @see <a href=\"http://www.useragentstring.com/\">User agent strings</a>\n * For more information on browser brand, rendering engine, or device see the\n * other sub-namespaces in goog.labs.userAgent (browser, engine, and device\n * respectively).\n */\n\ngoog.provide('goog.labs.userAgent.platform');\n\ngoog.require('goog.labs.userAgent.util');\ngoog.require('goog.string');\n\n\n/**\n * @return {boolean} Whether the platform is Android.\n */\ngoog.labs.userAgent.platform.isAndroid = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Android');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPod.\n */\ngoog.labs.userAgent.platform.isIpod = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('iPod');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPhone.\n */\ngoog.labs.userAgent.platform.isIphone = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('iPhone') &&\n      !goog.labs.userAgent.util.matchUserAgent('iPod') &&\n      !goog.labs.userAgent.util.matchUserAgent('iPad');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPad.\n */\ngoog.labs.userAgent.platform.isIpad = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('iPad');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iOS.\n */\ngoog.labs.userAgent.platform.isIos = function() {\n  'use strict';\n  return goog.labs.userAgent.platform.isIphone() ||\n      goog.labs.userAgent.platform.isIpad() ||\n      goog.labs.userAgent.platform.isIpod();\n};\n\n\n/**\n * @return {boolean} Whether the platform is Mac.\n */\ngoog.labs.userAgent.platform.isMacintosh = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Macintosh');\n};\n\n\n/**\n * Note: ChromeOS is not considered to be Linux as it does not report itself\n * as Linux in the user agent string.\n * @return {boolean} Whether the platform is Linux.\n */\ngoog.labs.userAgent.platform.isLinux = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Linux');\n};\n\n\n/**\n * @return {boolean} Whether the platform is Windows.\n */\ngoog.labs.userAgent.platform.isWindows = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('Windows');\n};\n\n\n/**\n * @return {boolean} Whether the platform is ChromeOS.\n */\ngoog.labs.userAgent.platform.isChromeOS = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('CrOS');\n};\n\n/**\n * @return {boolean} Whether the platform is Chromecast.\n */\ngoog.labs.userAgent.platform.isChromecast = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgent('CrKey');\n};\n\n/**\n * @return {boolean} Whether the platform is KaiOS.\n */\ngoog.labs.userAgent.platform.isKaiOS = function() {\n  'use strict';\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('KaiOS');\n};\n\n/**\n * The version of the platform. We only determine the version for Windows,\n * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only\n * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given\n * version 0.0.\n *\n * @return {string} The platform version or empty string if version cannot be\n *     determined.\n */\ngoog.labs.userAgent.platform.getVersion = function() {\n  'use strict';\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  var version = '', re;\n  if (goog.labs.userAgent.platform.isWindows()) {\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\n    var match = re.exec(userAgentString);\n    if (match) {\n      version = match[1];\n    } else {\n      version = '0.0';\n    }\n  } else if (goog.labs.userAgent.platform.isIos()) {\n    re = /(?:iPhone|iPod|iPad|CPU)\\s+OS\\s+(\\S+)/;\n    var match = re.exec(userAgentString);\n    // Report the version as x.y.z and not x_y_z\n    version = match && match[1].replace(/_/g, '.');\n  } else if (goog.labs.userAgent.platform.isMacintosh()) {\n    re = /Mac OS X ([0-9_.]+)/;\n    var match = re.exec(userAgentString);\n    // Note: some old versions of Camino do not report an OSX version.\n    // Default to 10.\n    version = match ? match[1].replace(/_/g, '.') : '10';\n  } else if (goog.labs.userAgent.platform.isKaiOS()) {\n    re = /(?:KaiOS)\\/(\\S+)/i;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  } else if (goog.labs.userAgent.platform.isAndroid()) {\n    re = /Android\\s+([^\\);]+)(\\)|;)/;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  } else if (goog.labs.userAgent.platform.isChromeOS()) {\n    re = /(?:CrOS\\s+(?:i686|x86_64)\\s+([0-9.]+))/;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  }\n  return version || '';\n};\n\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the browser version is higher or the same as the\n *     given version.\n */\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\n  'use strict';\n  return goog.string.compareVersions(\n             goog.labs.userAgent.platform.getVersion(), version) >= 0;\n};\n","~:compiled-at",1623000231229,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.platform.js\",\n\"lineCount\":84,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/platform.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Closure user agent platform detection.\\n * @see <a href=\\\"http://www.useragentstring.com/\\\">User agent strings</a>\\n * For more information on browser brand, rendering engine, or device see the\\n * other sub-namespaces in goog.labs.userAgent (browser, engine, and device\\n * respectively).\\n */\\n\\ngoog.provide('goog.labs.userAgent.platform');\\n\\ngoog.require('goog.labs.userAgent.util');\\ngoog.require('goog.string');\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Android.\\n */\\ngoog.labs.userAgent.platform.isAndroid = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Android');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPod.\\n */\\ngoog.labs.userAgent.platform.isIpod = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('iPod');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPhone.\\n */\\ngoog.labs.userAgent.platform.isIphone = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('iPhone') &&\\n      !goog.labs.userAgent.util.matchUserAgent('iPod') &&\\n      !goog.labs.userAgent.util.matchUserAgent('iPad');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPad.\\n */\\ngoog.labs.userAgent.platform.isIpad = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('iPad');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iOS.\\n */\\ngoog.labs.userAgent.platform.isIos = function() {\\n  'use strict';\\n  return goog.labs.userAgent.platform.isIphone() ||\\n      goog.labs.userAgent.platform.isIpad() ||\\n      goog.labs.userAgent.platform.isIpod();\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Mac.\\n */\\ngoog.labs.userAgent.platform.isMacintosh = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Macintosh');\\n};\\n\\n\\n/**\\n * Note: ChromeOS is not considered to be Linux as it does not report itself\\n * as Linux in the user agent string.\\n * @return {boolean} Whether the platform is Linux.\\n */\\ngoog.labs.userAgent.platform.isLinux = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Linux');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Windows.\\n */\\ngoog.labs.userAgent.platform.isWindows = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('Windows');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is ChromeOS.\\n */\\ngoog.labs.userAgent.platform.isChromeOS = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('CrOS');\\n};\\n\\n/**\\n * @return {boolean} Whether the platform is Chromecast.\\n */\\ngoog.labs.userAgent.platform.isChromecast = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgent('CrKey');\\n};\\n\\n/**\\n * @return {boolean} Whether the platform is KaiOS.\\n */\\ngoog.labs.userAgent.platform.isKaiOS = function() {\\n  'use strict';\\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('KaiOS');\\n};\\n\\n/**\\n * The version of the platform. We only determine the version for Windows,\\n * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only\\n * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given\\n * version 0.0.\\n *\\n * @return {string} The platform version or empty string if version cannot be\\n *     determined.\\n */\\ngoog.labs.userAgent.platform.getVersion = function() {\\n  'use strict';\\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\\n  var version = '', re;\\n  if (goog.labs.userAgent.platform.isWindows()) {\\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\\n    var match = re.exec(userAgentString);\\n    if (match) {\\n      version = match[1];\\n    } else {\\n      version = '0.0';\\n    }\\n  } else if (goog.labs.userAgent.platform.isIos()) {\\n    re = /(?:iPhone|iPod|iPad|CPU)\\\\s+OS\\\\s+(\\\\S+)/;\\n    var match = re.exec(userAgentString);\\n    // Report the version as x.y.z and not x_y_z\\n    version = match && match[1].replace(/_/g, '.');\\n  } else if (goog.labs.userAgent.platform.isMacintosh()) {\\n    re = /Mac OS X ([0-9_.]+)/;\\n    var match = re.exec(userAgentString);\\n    // Note: some old versions of Camino do not report an OSX version.\\n    // Default to 10.\\n    version = match ? match[1].replace(/_/g, '.') : '10';\\n  } else if (goog.labs.userAgent.platform.isKaiOS()) {\\n    re = /(?:KaiOS)\\\\/(\\\\S+)/i;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  } else if (goog.labs.userAgent.platform.isAndroid()) {\\n    re = /Android\\\\s+([^\\\\);]+)(\\\\)|;)/;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  } else if (goog.labs.userAgent.platform.isChromeOS()) {\\n    re = /(?:CrOS\\\\s+(?:i686|x86_64)\\\\s+([0-9.]+))/;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  }\\n  return version || '';\\n};\\n\\n\\n/**\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the browser version is higher or the same as the\\n *     given version.\\n */\\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\\n  'use strict';\\n  return goog.string.compareVersions(\\n             goog.labs.userAgent.platform.getVersion(), version) >= 0;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"platform\",\"isAndroid\",\"goog.labs.userAgent.platform.isAndroid\",\"util\",\"matchUserAgent\",\"isIpod\",\"goog.labs.userAgent.platform.isIpod\",\"isIphone\",\"goog.labs.userAgent.platform.isIphone\",\"isIpad\",\"goog.labs.userAgent.platform.isIpad\",\"isIos\",\"goog.labs.userAgent.platform.isIos\",\"isMacintosh\",\"goog.labs.userAgent.platform.isMacintosh\",\"isLinux\",\"goog.labs.userAgent.platform.isLinux\",\"isWindows\",\"goog.labs.userAgent.platform.isWindows\",\"isChromeOS\",\"goog.labs.userAgent.platform.isChromeOS\",\"isChromecast\",\"goog.labs.userAgent.platform.isChromecast\",\"isKaiOS\",\"goog.labs.userAgent.platform.isKaiOS\",\"matchUserAgentIgnoreCase\",\"getVersion\",\"goog.labs.userAgent.platform.getVersion\",\"userAgentString\",\"getUserAgent\",\"version\",\"re\",\"match\",\"exec\",\"replace\",\"isVersionOrHigher\",\"goog.labs.userAgent.platform.isVersionOrHigher\",\"string\",\"compareVersions\"]\n}\n"]