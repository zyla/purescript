// Generated by purs bundle 0.12.5
var PS = {};
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.12.5
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function(exports) {
  exports.staticPtrTable = {};

  exports._deref = function(table, ptr) {
    return table[ptr];
  };
})(PS["StaticPtr"] = PS["StaticPtr"] || {});
(function($PS) {
  // Generated by purs version 0.12.5
  "use strict";
  $PS["StaticPtr"] = $PS["StaticPtr"] || {};
  var exports = $PS["StaticPtr"];
  var $foreign = $PS["StaticPtr"];
  var deref = function (ptr) {
      return $foreign["_deref"]($foreign.staticPtrTable, ptr);
  };
  exports["deref"] = deref;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Effect_Console = $PS["Effect.Console"];
  var StaticPtr = $PS["StaticPtr"];                
  var main = function __do() {
      Effect_Console.log("Welcome")();
      Effect_Console.log(StaticPtr.deref("Mod._static_0")(true))();
      return Effect_Console.log(StaticPtr.deref("Mod._static_0")(false))();
  };
  exports["main"] = main;
})(PS);
(function($PS) {
  // Generated by purs version 0.12.5
  "use strict";
  $PS["Mod"] = $PS["Mod"] || {};
  var exports = $PS["Mod"];
  var f = "I am a thing"; 
  var _static_0 = function (b) {
      if (b) {
          return "Foo";
      };
      return f;
  };
  exports["f"] = f;
  exports["_static_0"] = _static_0;
})(PS);
PS["StaticPtr"].staticPtrTable["Mod._static_0"] = PS["Mod"]._static_0;
PS["Main"].main();
