goog.provide('app.main');
var module$node_modules$react_day_picker$lib$react_day_picker_min=shadow.js.require("module$node_modules$react_day_picker$lib$react_day_picker_min", {});
app.main.example_app = (function app$main$example_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is a day picker:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_day_picker$lib$react_day_picker_min.DayPicker], null)], null);
});
app.main.mount_root = (function app$main$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.example_app], null),document.getElementById("app"));
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
app.main.mount_root();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[core]: loading"], 0));
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
app.main.mount_root();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[core] reloaded"], 0));
});

//# sourceMappingURL=app.main.js.map
