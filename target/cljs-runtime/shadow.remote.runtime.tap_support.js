goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35543,p__35544){
var map__35547 = p__35543;
var map__35547__$1 = cljs.core.__destructure_map(map__35547);
var svc = map__35547__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35548 = p__35544;
var map__35548__$1 = cljs.core.__destructure_map(map__35548);
var msg = map__35548__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35548__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35548__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35548__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35554,p__35555){
var map__35556 = p__35554;
var map__35556__$1 = cljs.core.__destructure_map(map__35556);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35556__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35557 = p__35555;
var map__35557__$1 = cljs.core.__destructure_map(map__35557);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35557__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35560,p__35561){
var map__35563 = p__35560;
var map__35563__$1 = cljs.core.__destructure_map(map__35563);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35563__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35564 = p__35561;
var map__35564__$1 = cljs.core.__destructure_map(map__35564);
var msg = map__35564__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35564__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35565,tid){
var map__35566 = p__35565;
var map__35566__$1 = cljs.core.__destructure_map(map__35566);
var svc = map__35566__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35566__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35576 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35577 = null;
var count__35578 = (0);
var i__35579 = (0);
while(true){
if((i__35579 < count__35578)){
var vec__35590 = chunk__35577.cljs$core$IIndexed$_nth$arity$2(null,i__35579);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35599 = seq__35576;
var G__35600 = chunk__35577;
var G__35601 = count__35578;
var G__35602 = (i__35579 + (1));
seq__35576 = G__35599;
chunk__35577 = G__35600;
count__35578 = G__35601;
i__35579 = G__35602;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35576);
if(temp__5753__auto__){
var seq__35576__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35576__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35576__$1);
var G__35603 = cljs.core.chunk_rest(seq__35576__$1);
var G__35604 = c__4649__auto__;
var G__35605 = cljs.core.count(c__4649__auto__);
var G__35606 = (0);
seq__35576 = G__35603;
chunk__35577 = G__35604;
count__35578 = G__35605;
i__35579 = G__35606;
continue;
} else {
var vec__35593 = cljs.core.first(seq__35576__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35607 = cljs.core.next(seq__35576__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35576 = G__35607;
chunk__35577 = G__35608;
count__35578 = G__35609;
i__35579 = G__35610;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35567_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35567_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35568_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35568_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35569_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35569_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35570_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35570_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35597){
var map__35598 = p__35597;
var map__35598__$1 = cljs.core.__destructure_map(map__35598);
var svc = map__35598__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
