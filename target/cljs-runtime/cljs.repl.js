goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35107){
var map__35108 = p__35107;
var map__35108__$1 = cljs.core.__destructure_map(map__35108);
var m = map__35108__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35108__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35109_35320 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35110_35321 = null;
var count__35111_35322 = (0);
var i__35112_35323 = (0);
while(true){
if((i__35112_35323 < count__35111_35322)){
var f_35324 = chunk__35110_35321.cljs$core$IIndexed$_nth$arity$2(null,i__35112_35323);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35324], 0));


var G__35325 = seq__35109_35320;
var G__35326 = chunk__35110_35321;
var G__35327 = count__35111_35322;
var G__35328 = (i__35112_35323 + (1));
seq__35109_35320 = G__35325;
chunk__35110_35321 = G__35326;
count__35111_35322 = G__35327;
i__35112_35323 = G__35328;
continue;
} else {
var temp__5753__auto___35329 = cljs.core.seq(seq__35109_35320);
if(temp__5753__auto___35329){
var seq__35109_35330__$1 = temp__5753__auto___35329;
if(cljs.core.chunked_seq_QMARK_(seq__35109_35330__$1)){
var c__4649__auto___35331 = cljs.core.chunk_first(seq__35109_35330__$1);
var G__35332 = cljs.core.chunk_rest(seq__35109_35330__$1);
var G__35333 = c__4649__auto___35331;
var G__35334 = cljs.core.count(c__4649__auto___35331);
var G__35335 = (0);
seq__35109_35320 = G__35332;
chunk__35110_35321 = G__35333;
count__35111_35322 = G__35334;
i__35112_35323 = G__35335;
continue;
} else {
var f_35336 = cljs.core.first(seq__35109_35330__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35336], 0));


var G__35341 = cljs.core.next(seq__35109_35330__$1);
var G__35342 = null;
var G__35343 = (0);
var G__35344 = (0);
seq__35109_35320 = G__35341;
chunk__35110_35321 = G__35342;
count__35111_35322 = G__35343;
i__35112_35323 = G__35344;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35345 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35345], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35345)))?cljs.core.second(arglists_35345):arglists_35345)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35117_35347 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35118_35348 = null;
var count__35119_35349 = (0);
var i__35120_35350 = (0);
while(true){
if((i__35120_35350 < count__35119_35349)){
var vec__35132_35351 = chunk__35118_35348.cljs$core$IIndexed$_nth$arity$2(null,i__35120_35350);
var name_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132_35351,(0),null);
var map__35135_35353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132_35351,(1),null);
var map__35135_35354__$1 = cljs.core.__destructure_map(map__35135_35353);
var doc_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135_35354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135_35354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35356], 0));

if(cljs.core.truth_(doc_35355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35355], 0));
} else {
}


var G__35357 = seq__35117_35347;
var G__35358 = chunk__35118_35348;
var G__35359 = count__35119_35349;
var G__35360 = (i__35120_35350 + (1));
seq__35117_35347 = G__35357;
chunk__35118_35348 = G__35358;
count__35119_35349 = G__35359;
i__35120_35350 = G__35360;
continue;
} else {
var temp__5753__auto___35361 = cljs.core.seq(seq__35117_35347);
if(temp__5753__auto___35361){
var seq__35117_35362__$1 = temp__5753__auto___35361;
if(cljs.core.chunked_seq_QMARK_(seq__35117_35362__$1)){
var c__4649__auto___35363 = cljs.core.chunk_first(seq__35117_35362__$1);
var G__35366 = cljs.core.chunk_rest(seq__35117_35362__$1);
var G__35367 = c__4649__auto___35363;
var G__35368 = cljs.core.count(c__4649__auto___35363);
var G__35369 = (0);
seq__35117_35347 = G__35366;
chunk__35118_35348 = G__35367;
count__35119_35349 = G__35368;
i__35120_35350 = G__35369;
continue;
} else {
var vec__35136_35370 = cljs.core.first(seq__35117_35362__$1);
var name_35371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35370,(0),null);
var map__35139_35372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35370,(1),null);
var map__35139_35373__$1 = cljs.core.__destructure_map(map__35139_35372);
var doc_35374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139_35373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139_35373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35375], 0));

if(cljs.core.truth_(doc_35374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35374], 0));
} else {
}


var G__35376 = cljs.core.next(seq__35117_35362__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__35117_35347 = G__35376;
chunk__35118_35348 = G__35377;
count__35119_35349 = G__35378;
i__35120_35350 = G__35379;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35142 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35143 = null;
var count__35144 = (0);
var i__35145 = (0);
while(true){
if((i__35145 < count__35144)){
var role = chunk__35143.cljs$core$IIndexed$_nth$arity$2(null,i__35145);
var temp__5753__auto___35384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35384__$1)){
var spec_35385 = temp__5753__auto___35384__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35385)], 0));
} else {
}


var G__35386 = seq__35142;
var G__35387 = chunk__35143;
var G__35388 = count__35144;
var G__35389 = (i__35145 + (1));
seq__35142 = G__35386;
chunk__35143 = G__35387;
count__35144 = G__35388;
i__35145 = G__35389;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35142);
if(temp__5753__auto____$1){
var seq__35142__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35142__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35142__$1);
var G__35390 = cljs.core.chunk_rest(seq__35142__$1);
var G__35391 = c__4649__auto__;
var G__35392 = cljs.core.count(c__4649__auto__);
var G__35393 = (0);
seq__35142 = G__35390;
chunk__35143 = G__35391;
count__35144 = G__35392;
i__35145 = G__35393;
continue;
} else {
var role = cljs.core.first(seq__35142__$1);
var temp__5753__auto___35394__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35394__$2)){
var spec_35395 = temp__5753__auto___35394__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35395)], 0));
} else {
}


var G__35396 = cljs.core.next(seq__35142__$1);
var G__35397 = null;
var G__35398 = (0);
var G__35399 = (0);
seq__35142 = G__35396;
chunk__35143 = G__35397;
count__35144 = G__35398;
i__35145 = G__35399;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35401 = cljs.core.ex_cause(t);
via = G__35400;
t = G__35401;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35224 = datafied_throwable;
var map__35224__$1 = cljs.core.__destructure_map(map__35224);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35224__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35224__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35224__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35225 = cljs.core.last(via);
var map__35225__$1 = cljs.core.__destructure_map(map__35225);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35226 = data;
var map__35226__$1 = cljs.core.__destructure_map(map__35226);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35226__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35226__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35226__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35227 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35227__$1 = cljs.core.__destructure_map(map__35227);
var top_data = map__35227__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35238 = phase;
var G__35238__$1 = (((G__35238 instanceof cljs.core.Keyword))?G__35238.fqn:null);
switch (G__35238__$1) {
case "read-source":
var map__35247 = data;
var map__35247__$1 = cljs.core.__destructure_map(map__35247);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35248__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35248,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35248);
var G__35248__$2 = (cljs.core.truth_((function (){var fexpr__35253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35253.cljs$core$IFn$_invoke$arity$1 ? fexpr__35253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35248__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35248__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35248__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35254 = top_data;
var G__35254__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35254,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35254);
var G__35254__$2 = (cljs.core.truth_((function (){var fexpr__35255 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35255.cljs$core$IFn$_invoke$arity$1 ? fexpr__35255.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35255.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35254__$1);
var G__35254__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35254__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35254__$2);
var G__35254__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35254__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35254__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35256 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,(3),null);
var G__35259 = top_data;
var G__35259__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35259,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35259);
var G__35259__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35259__$1);
var G__35259__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35259__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35259__$2);
var G__35259__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35259__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35259__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35259__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35259__$4;
}

break;
case "execution":
var vec__35261 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35212_SHARP_){
var or__4223__auto__ = (p1__35212_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__35265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35265.cljs$core$IFn$_invoke$arity$1 ? fexpr__35265.cljs$core$IFn$_invoke$arity$1(p1__35212_SHARP_) : fexpr__35265.call(null,p1__35212_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__35266 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35266__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35266,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35266);
var G__35266__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35266__$1);
var G__35266__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35266__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35266__$2);
var G__35266__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35266__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35266__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35238__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35272){
var map__35273 = p__35272;
var map__35273__$1 = cljs.core.__destructure_map(map__35273);
var triage_data = map__35273__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35275 = phase;
var G__35275__$1 = (((G__35275 instanceof cljs.core.Keyword))?G__35275.fqn:null);
switch (G__35275__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35276 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35278 = loc;
var G__35279 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35280_35410 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35281_35411 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35282_35412 = true;
var _STAR_print_fn_STAR__temp_val__35283_35413 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35282_35412);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35283_35413);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35269_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35281_35411);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35280_35410);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35276,G__35277,G__35278,G__35279) : format.call(null,G__35276,G__35277,G__35278,G__35279));

break;
case "macroexpansion":
var G__35284 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35285 = cause_type;
var G__35286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35287 = loc;
var G__35288 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35284,G__35285,G__35286,G__35287,G__35288) : format.call(null,G__35284,G__35285,G__35286,G__35287,G__35288));

break;
case "compile-syntax-check":
var G__35289 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35290 = cause_type;
var G__35291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35292 = loc;
var G__35293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35289,G__35290,G__35291,G__35292,G__35293) : format.call(null,G__35289,G__35290,G__35291,G__35292,G__35293));

break;
case "compilation":
var G__35294 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35295 = cause_type;
var G__35296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35297 = loc;
var G__35298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35294,G__35295,G__35296,G__35297,G__35298) : format.call(null,G__35294,G__35295,G__35296,G__35297,G__35298));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35303 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35304 = symbol;
var G__35305 = loc;
var G__35306 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35307_35415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35308_35416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35309_35417 = true;
var _STAR_print_fn_STAR__temp_val__35310_35418 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35309_35417);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35310_35418);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35271_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35271_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35308_35416);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35307_35415);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35303,G__35304,G__35305,G__35306) : format.call(null,G__35303,G__35304,G__35305,G__35306));
} else {
var G__35315 = "Execution error%s at %s(%s).\n%s\n";
var G__35316 = cause_type;
var G__35317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35318 = loc;
var G__35319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35315,G__35316,G__35317,G__35318,G__35319) : format.call(null,G__35315,G__35316,G__35317,G__35318,G__35319));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35275__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
