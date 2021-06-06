goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36092 = arguments.length;
var i__4830__auto___36093 = (0);
while(true){
if((i__4830__auto___36093 < len__4829__auto___36092)){
args__4835__auto__.push((arguments[i__4830__auto___36093]));

var G__36094 = (i__4830__auto___36093 + (1));
i__4830__auto___36093 = G__36094;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35907){
var G__35908 = cljs.core.first(seq35907);
var seq35907__$1 = cljs.core.next(seq35907);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35908,seq35907__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35909 = cljs.core.seq(sources);
var chunk__35910 = null;
var count__35911 = (0);
var i__35912 = (0);
while(true){
if((i__35912 < count__35911)){
var map__35921 = chunk__35910.cljs$core$IIndexed$_nth$arity$2(null,i__35912);
var map__35921__$1 = cljs.core.__destructure_map(map__35921);
var src = map__35921__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35923){var e_36095 = e35923;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36095);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36095.message)].join('')));
}

var G__36096 = seq__35909;
var G__36097 = chunk__35910;
var G__36098 = count__35911;
var G__36099 = (i__35912 + (1));
seq__35909 = G__36096;
chunk__35910 = G__36097;
count__35911 = G__36098;
i__35912 = G__36099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35909);
if(temp__5753__auto__){
var seq__35909__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35909__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35909__$1);
var G__36100 = cljs.core.chunk_rest(seq__35909__$1);
var G__36101 = c__4649__auto__;
var G__36102 = cljs.core.count(c__4649__auto__);
var G__36103 = (0);
seq__35909 = G__36100;
chunk__35910 = G__36101;
count__35911 = G__36102;
i__35912 = G__36103;
continue;
} else {
var map__35924 = cljs.core.first(seq__35909__$1);
var map__35924__$1 = cljs.core.__destructure_map(map__35924);
var src = map__35924__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35927){var e_36104 = e35927;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36104);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36104.message)].join('')));
}

var G__36105 = cljs.core.next(seq__35909__$1);
var G__36106 = null;
var G__36107 = (0);
var G__36108 = (0);
seq__35909 = G__36105;
chunk__35910 = G__36106;
count__35911 = G__36107;
i__35912 = G__36108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35928 = cljs.core.seq(js_requires);
var chunk__35929 = null;
var count__35930 = (0);
var i__35931 = (0);
while(true){
if((i__35931 < count__35930)){
var js_ns = chunk__35929.cljs$core$IIndexed$_nth$arity$2(null,i__35931);
var require_str_36109 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36109);


var G__36110 = seq__35928;
var G__36111 = chunk__35929;
var G__36112 = count__35930;
var G__36113 = (i__35931 + (1));
seq__35928 = G__36110;
chunk__35929 = G__36111;
count__35930 = G__36112;
i__35931 = G__36113;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35928);
if(temp__5753__auto__){
var seq__35928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35928__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35928__$1);
var G__36114 = cljs.core.chunk_rest(seq__35928__$1);
var G__36115 = c__4649__auto__;
var G__36116 = cljs.core.count(c__4649__auto__);
var G__36117 = (0);
seq__35928 = G__36114;
chunk__35929 = G__36115;
count__35930 = G__36116;
i__35931 = G__36117;
continue;
} else {
var js_ns = cljs.core.first(seq__35928__$1);
var require_str_36118 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36118);


var G__36119 = cljs.core.next(seq__35928__$1);
var G__36120 = null;
var G__36121 = (0);
var G__36122 = (0);
seq__35928 = G__36119;
chunk__35929 = G__36120;
count__35930 = G__36121;
i__35931 = G__36122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35935){
var map__35936 = p__35935;
var map__35936__$1 = cljs.core.__destructure_map(map__35936);
var msg = map__35936__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35937(s__35938){
return (new cljs.core.LazySeq(null,(function (){
var s__35938__$1 = s__35938;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35938__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35943 = cljs.core.first(xs__6308__auto__);
var map__35943__$1 = cljs.core.__destructure_map(map__35943);
var src = map__35943__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__35938__$1,map__35943,map__35943__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35936,map__35936__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35937_$_iter__35939(s__35940){
return (new cljs.core.LazySeq(null,((function (s__35938__$1,map__35943,map__35943__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35936,map__35936__$1,msg,info,reload_info){
return (function (){
var s__35940__$1 = s__35940;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35940__$1);
if(temp__5753__auto____$1){
var s__35940__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35940__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__35940__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__35942 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__35941 = (0);
while(true){
if((i__35941 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__35941);
cljs.core.chunk_append(b__35942,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36132 = (i__35941 + (1));
i__35941 = G__36132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35942),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35937_$_iter__35939(cljs.core.chunk_rest(s__35940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35942),null);
}
} else {
var warning = cljs.core.first(s__35940__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35937_$_iter__35939(cljs.core.rest(s__35940__$2)));
}
} else {
return null;
}
break;
}
});})(s__35938__$1,map__35943,map__35943__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35936,map__35936__$1,msg,info,reload_info))
,null,null));
});})(s__35938__$1,map__35943,map__35943__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35936,map__35936__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35937(cljs.core.rest(s__35938__$1)));
} else {
var G__36133 = cljs.core.rest(s__35938__$1);
s__35938__$1 = G__36133;
continue;
}
} else {
var G__36134 = cljs.core.rest(s__35938__$1);
s__35938__$1 = G__36134;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35944_36135 = cljs.core.seq(warnings);
var chunk__35945_36136 = null;
var count__35946_36137 = (0);
var i__35947_36138 = (0);
while(true){
if((i__35947_36138 < count__35946_36137)){
var map__35950_36139 = chunk__35945_36136.cljs$core$IIndexed$_nth$arity$2(null,i__35947_36138);
var map__35950_36140__$1 = cljs.core.__destructure_map(map__35950_36139);
var w_36141 = map__35950_36140__$1;
var msg_36142__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36140__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36145)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36143),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36144),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36142__$1)].join(''));


var G__36146 = seq__35944_36135;
var G__36147 = chunk__35945_36136;
var G__36148 = count__35946_36137;
var G__36149 = (i__35947_36138 + (1));
seq__35944_36135 = G__36146;
chunk__35945_36136 = G__36147;
count__35946_36137 = G__36148;
i__35947_36138 = G__36149;
continue;
} else {
var temp__5753__auto___36150 = cljs.core.seq(seq__35944_36135);
if(temp__5753__auto___36150){
var seq__35944_36151__$1 = temp__5753__auto___36150;
if(cljs.core.chunked_seq_QMARK_(seq__35944_36151__$1)){
var c__4649__auto___36152 = cljs.core.chunk_first(seq__35944_36151__$1);
var G__36153 = cljs.core.chunk_rest(seq__35944_36151__$1);
var G__36154 = c__4649__auto___36152;
var G__36155 = cljs.core.count(c__4649__auto___36152);
var G__36156 = (0);
seq__35944_36135 = G__36153;
chunk__35945_36136 = G__36154;
count__35946_36137 = G__36155;
i__35947_36138 = G__36156;
continue;
} else {
var map__35951_36157 = cljs.core.first(seq__35944_36151__$1);
var map__35951_36158__$1 = cljs.core.__destructure_map(map__35951_36157);
var w_36159 = map__35951_36158__$1;
var msg_36160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36158__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36163)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36161),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36162),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36160__$1)].join(''));


var G__36164 = cljs.core.next(seq__35944_36151__$1);
var G__36165 = null;
var G__36166 = (0);
var G__36167 = (0);
seq__35944_36135 = G__36164;
chunk__35945_36136 = G__36165;
count__35946_36137 = G__36166;
i__35947_36138 = G__36167;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35934_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35934_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35952){
var map__35953 = p__35952;
var map__35953__$1 = cljs.core.__destructure_map(map__35953);
var msg = map__35953__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35953__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35954 = cljs.core.seq(updates);
var chunk__35956 = null;
var count__35957 = (0);
var i__35958 = (0);
while(true){
if((i__35958 < count__35957)){
var path = chunk__35956.cljs$core$IIndexed$_nth$arity$2(null,i__35958);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35993_36173 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35997_36174 = null;
var count__35998_36175 = (0);
var i__35999_36176 = (0);
while(true){
if((i__35999_36176 < count__35998_36175)){
var node_36177 = chunk__35997_36174.cljs$core$IIndexed$_nth$arity$2(null,i__35999_36176);
if(cljs.core.not(node_36177.shadow$old)){
var path_match_36178 = shadow.cljs.devtools.client.browser.match_paths(node_36177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36178)){
var new_link_36179 = (function (){var G__36005 = node_36177.cloneNode(true);
G__36005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36178),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36005;
})();
(node_36177.shadow$old = true);

(new_link_36179.onload = ((function (seq__35993_36173,chunk__35997_36174,count__35998_36175,i__35999_36176,seq__35954,chunk__35956,count__35957,i__35958,new_link_36179,path_match_36178,node_36177,path,map__35953,map__35953__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36177);
});})(seq__35993_36173,chunk__35997_36174,count__35998_36175,i__35999_36176,seq__35954,chunk__35956,count__35957,i__35958,new_link_36179,path_match_36178,node_36177,path,map__35953,map__35953__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36178], 0));

goog.dom.insertSiblingAfter(new_link_36179,node_36177);


var G__36180 = seq__35993_36173;
var G__36181 = chunk__35997_36174;
var G__36182 = count__35998_36175;
var G__36183 = (i__35999_36176 + (1));
seq__35993_36173 = G__36180;
chunk__35997_36174 = G__36181;
count__35998_36175 = G__36182;
i__35999_36176 = G__36183;
continue;
} else {
var G__36184 = seq__35993_36173;
var G__36185 = chunk__35997_36174;
var G__36186 = count__35998_36175;
var G__36187 = (i__35999_36176 + (1));
seq__35993_36173 = G__36184;
chunk__35997_36174 = G__36185;
count__35998_36175 = G__36186;
i__35999_36176 = G__36187;
continue;
}
} else {
var G__36188 = seq__35993_36173;
var G__36189 = chunk__35997_36174;
var G__36190 = count__35998_36175;
var G__36191 = (i__35999_36176 + (1));
seq__35993_36173 = G__36188;
chunk__35997_36174 = G__36189;
count__35998_36175 = G__36190;
i__35999_36176 = G__36191;
continue;
}
} else {
var temp__5753__auto___36192 = cljs.core.seq(seq__35993_36173);
if(temp__5753__auto___36192){
var seq__35993_36193__$1 = temp__5753__auto___36192;
if(cljs.core.chunked_seq_QMARK_(seq__35993_36193__$1)){
var c__4649__auto___36194 = cljs.core.chunk_first(seq__35993_36193__$1);
var G__36195 = cljs.core.chunk_rest(seq__35993_36193__$1);
var G__36196 = c__4649__auto___36194;
var G__36197 = cljs.core.count(c__4649__auto___36194);
var G__36198 = (0);
seq__35993_36173 = G__36195;
chunk__35997_36174 = G__36196;
count__35998_36175 = G__36197;
i__35999_36176 = G__36198;
continue;
} else {
var node_36199 = cljs.core.first(seq__35993_36193__$1);
if(cljs.core.not(node_36199.shadow$old)){
var path_match_36200 = shadow.cljs.devtools.client.browser.match_paths(node_36199.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36200)){
var new_link_36203 = (function (){var G__36010 = node_36199.cloneNode(true);
G__36010.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36200),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36010;
})();
(node_36199.shadow$old = true);

(new_link_36203.onload = ((function (seq__35993_36173,chunk__35997_36174,count__35998_36175,i__35999_36176,seq__35954,chunk__35956,count__35957,i__35958,new_link_36203,path_match_36200,node_36199,seq__35993_36193__$1,temp__5753__auto___36192,path,map__35953,map__35953__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36199);
});})(seq__35993_36173,chunk__35997_36174,count__35998_36175,i__35999_36176,seq__35954,chunk__35956,count__35957,i__35958,new_link_36203,path_match_36200,node_36199,seq__35993_36193__$1,temp__5753__auto___36192,path,map__35953,map__35953__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36200], 0));

goog.dom.insertSiblingAfter(new_link_36203,node_36199);


var G__36204 = cljs.core.next(seq__35993_36193__$1);
var G__36205 = null;
var G__36206 = (0);
var G__36207 = (0);
seq__35993_36173 = G__36204;
chunk__35997_36174 = G__36205;
count__35998_36175 = G__36206;
i__35999_36176 = G__36207;
continue;
} else {
var G__36208 = cljs.core.next(seq__35993_36193__$1);
var G__36209 = null;
var G__36210 = (0);
var G__36211 = (0);
seq__35993_36173 = G__36208;
chunk__35997_36174 = G__36209;
count__35998_36175 = G__36210;
i__35999_36176 = G__36211;
continue;
}
} else {
var G__36212 = cljs.core.next(seq__35993_36193__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__35993_36173 = G__36212;
chunk__35997_36174 = G__36213;
count__35998_36175 = G__36214;
i__35999_36176 = G__36215;
continue;
}
}
} else {
}
}
break;
}


var G__36216 = seq__35954;
var G__36217 = chunk__35956;
var G__36218 = count__35957;
var G__36219 = (i__35958 + (1));
seq__35954 = G__36216;
chunk__35956 = G__36217;
count__35957 = G__36218;
i__35958 = G__36219;
continue;
} else {
var G__36220 = seq__35954;
var G__36221 = chunk__35956;
var G__36222 = count__35957;
var G__36223 = (i__35958 + (1));
seq__35954 = G__36220;
chunk__35956 = G__36221;
count__35957 = G__36222;
i__35958 = G__36223;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35954);
if(temp__5753__auto__){
var seq__35954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35954__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35954__$1);
var G__36224 = cljs.core.chunk_rest(seq__35954__$1);
var G__36225 = c__4649__auto__;
var G__36226 = cljs.core.count(c__4649__auto__);
var G__36227 = (0);
seq__35954 = G__36224;
chunk__35956 = G__36225;
count__35957 = G__36226;
i__35958 = G__36227;
continue;
} else {
var path = cljs.core.first(seq__35954__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36018_36228 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36022_36229 = null;
var count__36023_36230 = (0);
var i__36024_36231 = (0);
while(true){
if((i__36024_36231 < count__36023_36230)){
var node_36232 = chunk__36022_36229.cljs$core$IIndexed$_nth$arity$2(null,i__36024_36231);
if(cljs.core.not(node_36232.shadow$old)){
var path_match_36233 = shadow.cljs.devtools.client.browser.match_paths(node_36232.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36233)){
var new_link_36234 = (function (){var G__36043 = node_36232.cloneNode(true);
G__36043.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36233),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36043;
})();
(node_36232.shadow$old = true);

(new_link_36234.onload = ((function (seq__36018_36228,chunk__36022_36229,count__36023_36230,i__36024_36231,seq__35954,chunk__35956,count__35957,i__35958,new_link_36234,path_match_36233,node_36232,path,seq__35954__$1,temp__5753__auto__,map__35953,map__35953__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36232);
});})(seq__36018_36228,chunk__36022_36229,count__36023_36230,i__36024_36231,seq__35954,chunk__35956,count__35957,i__35958,new_link_36234,path_match_36233,node_36232,path,seq__35954__$1,temp__5753__auto__,map__35953,map__35953__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36233], 0));

goog.dom.insertSiblingAfter(new_link_36234,node_36232);


var G__36235 = seq__36018_36228;
var G__36236 = chunk__36022_36229;
var G__36237 = count__36023_36230;
var G__36238 = (i__36024_36231 + (1));
seq__36018_36228 = G__36235;
chunk__36022_36229 = G__36236;
count__36023_36230 = G__36237;
i__36024_36231 = G__36238;
continue;
} else {
var G__36239 = seq__36018_36228;
var G__36240 = chunk__36022_36229;
var G__36241 = count__36023_36230;
var G__36242 = (i__36024_36231 + (1));
seq__36018_36228 = G__36239;
chunk__36022_36229 = G__36240;
count__36023_36230 = G__36241;
i__36024_36231 = G__36242;
continue;
}
} else {
var G__36243 = seq__36018_36228;
var G__36244 = chunk__36022_36229;
var G__36245 = count__36023_36230;
var G__36246 = (i__36024_36231 + (1));
seq__36018_36228 = G__36243;
chunk__36022_36229 = G__36244;
count__36023_36230 = G__36245;
i__36024_36231 = G__36246;
continue;
}
} else {
var temp__5753__auto___36247__$1 = cljs.core.seq(seq__36018_36228);
if(temp__5753__auto___36247__$1){
var seq__36018_36248__$1 = temp__5753__auto___36247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36018_36248__$1)){
var c__4649__auto___36249 = cljs.core.chunk_first(seq__36018_36248__$1);
var G__36250 = cljs.core.chunk_rest(seq__36018_36248__$1);
var G__36251 = c__4649__auto___36249;
var G__36252 = cljs.core.count(c__4649__auto___36249);
var G__36253 = (0);
seq__36018_36228 = G__36250;
chunk__36022_36229 = G__36251;
count__36023_36230 = G__36252;
i__36024_36231 = G__36253;
continue;
} else {
var node_36254 = cljs.core.first(seq__36018_36248__$1);
if(cljs.core.not(node_36254.shadow$old)){
var path_match_36255 = shadow.cljs.devtools.client.browser.match_paths(node_36254.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36255)){
var new_link_36256 = (function (){var G__36055 = node_36254.cloneNode(true);
G__36055.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36255),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36055;
})();
(node_36254.shadow$old = true);

(new_link_36256.onload = ((function (seq__36018_36228,chunk__36022_36229,count__36023_36230,i__36024_36231,seq__35954,chunk__35956,count__35957,i__35958,new_link_36256,path_match_36255,node_36254,seq__36018_36248__$1,temp__5753__auto___36247__$1,path,seq__35954__$1,temp__5753__auto__,map__35953,map__35953__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36254);
});})(seq__36018_36228,chunk__36022_36229,count__36023_36230,i__36024_36231,seq__35954,chunk__35956,count__35957,i__35958,new_link_36256,path_match_36255,node_36254,seq__36018_36248__$1,temp__5753__auto___36247__$1,path,seq__35954__$1,temp__5753__auto__,map__35953,map__35953__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36255], 0));

goog.dom.insertSiblingAfter(new_link_36256,node_36254);


var G__36257 = cljs.core.next(seq__36018_36248__$1);
var G__36258 = null;
var G__36259 = (0);
var G__36260 = (0);
seq__36018_36228 = G__36257;
chunk__36022_36229 = G__36258;
count__36023_36230 = G__36259;
i__36024_36231 = G__36260;
continue;
} else {
var G__36261 = cljs.core.next(seq__36018_36248__$1);
var G__36262 = null;
var G__36263 = (0);
var G__36264 = (0);
seq__36018_36228 = G__36261;
chunk__36022_36229 = G__36262;
count__36023_36230 = G__36263;
i__36024_36231 = G__36264;
continue;
}
} else {
var G__36265 = cljs.core.next(seq__36018_36248__$1);
var G__36266 = null;
var G__36267 = (0);
var G__36268 = (0);
seq__36018_36228 = G__36265;
chunk__36022_36229 = G__36266;
count__36023_36230 = G__36267;
i__36024_36231 = G__36268;
continue;
}
}
} else {
}
}
break;
}


var G__36269 = cljs.core.next(seq__35954__$1);
var G__36270 = null;
var G__36271 = (0);
var G__36272 = (0);
seq__35954 = G__36269;
chunk__35956 = G__36270;
count__35957 = G__36271;
i__35958 = G__36272;
continue;
} else {
var G__36273 = cljs.core.next(seq__35954__$1);
var G__36274 = null;
var G__36275 = (0);
var G__36276 = (0);
seq__35954 = G__36273;
chunk__35956 = G__36274;
count__35957 = G__36275;
i__35958 = G__36276;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36058){
var map__36060 = p__36058;
var map__36060__$1 = cljs.core.__destructure_map(map__36060);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36060__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36066){
var map__36067 = p__36066;
var map__36067__$1 = cljs.core.__destructure_map(map__36067);
var _ = map__36067__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36068,done,error){
var map__36069 = p__36068;
var map__36069__$1 = cljs.core.__destructure_map(map__36069);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36070,done,error){
var map__36071 = p__36070;
var map__36071__$1 = cljs.core.__destructure_map(map__36071);
var msg = map__36071__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36072){
var map__36073 = p__36072;
var map__36073__$1 = cljs.core.__destructure_map(map__36073);
var src = map__36073__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36074 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36074) : done.call(null,G__36074));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36075){
var map__36076 = p__36075;
var map__36076__$1 = cljs.core.__destructure_map(map__36076);
var msg__$1 = map__36076__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36077){var ex = e36077;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36078){
var map__36079 = p__36078;
var map__36079__$1 = cljs.core.__destructure_map(map__36079);
var env = map__36079__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36079__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36084){
var map__36085 = p__36084;
var map__36085__$1 = cljs.core.__destructure_map(map__36085);
var msg = map__36085__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36088){
var map__36089 = p__36088;
var map__36089__$1 = cljs.core.__destructure_map(map__36089);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36090){
var map__36091 = p__36090;
var map__36091__$1 = cljs.core.__destructure_map(map__36091);
var svc = map__36091__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
