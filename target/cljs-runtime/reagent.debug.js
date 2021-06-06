goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35750__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35751__i = 0, G__35751__a = new Array(arguments.length -  0);
while (G__35751__i < G__35751__a.length) {G__35751__a[G__35751__i] = arguments[G__35751__i + 0]; ++G__35751__i;}
  args = new cljs.core.IndexedSeq(G__35751__a,0,null);
} 
return G__35750__delegate.call(this,args);};
G__35750.cljs$lang$maxFixedArity = 0;
G__35750.cljs$lang$applyTo = (function (arglist__35752){
var args = cljs.core.seq(arglist__35752);
return G__35750__delegate(args);
});
G__35750.cljs$core$IFn$_invoke$arity$variadic = G__35750__delegate;
return G__35750;
})()
);

(o.error = (function() { 
var G__35753__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35754__i = 0, G__35754__a = new Array(arguments.length -  0);
while (G__35754__i < G__35754__a.length) {G__35754__a[G__35754__i] = arguments[G__35754__i + 0]; ++G__35754__i;}
  args = new cljs.core.IndexedSeq(G__35754__a,0,null);
} 
return G__35753__delegate.call(this,args);};
G__35753.cljs$lang$maxFixedArity = 0;
G__35753.cljs$lang$applyTo = (function (arglist__35755){
var args = cljs.core.seq(arglist__35755);
return G__35753__delegate(args);
});
G__35753.cljs$core$IFn$_invoke$arity$variadic = G__35753__delegate;
return G__35753;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
