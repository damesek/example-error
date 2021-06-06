goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31434,res){
var map__31435 = p__31434;
var map__31435__$1 = cljs.core.__destructure_map(map__31435);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31439 = res;
var G__31439__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31439,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31439);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31439__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31439__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31464 = arguments.length;
switch (G__31464) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31481,msg,handlers,timeout_after_ms){
var map__31482 = p__31481;
var map__31482__$1 = cljs.core.__destructure_map(map__31482);
var runtime = map__31482__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31670 = arguments.length;
var i__4830__auto___31671 = (0);
while(true){
if((i__4830__auto___31671 < len__4829__auto___31670)){
args__4835__auto__.push((arguments[i__4830__auto___31671]));

var G__31672 = (i__4830__auto___31671 + (1));
i__4830__auto___31671 = G__31672;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31501,ev,args){
var map__31502 = p__31501;
var map__31502__$1 = cljs.core.__destructure_map(map__31502);
var runtime = map__31502__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31502__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31505 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31508 = null;
var count__31509 = (0);
var i__31510 = (0);
while(true){
if((i__31510 < count__31509)){
var ext = chunk__31508.cljs$core$IIndexed$_nth$arity$2(null,i__31510);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31674 = seq__31505;
var G__31675 = chunk__31508;
var G__31676 = count__31509;
var G__31677 = (i__31510 + (1));
seq__31505 = G__31674;
chunk__31508 = G__31675;
count__31509 = G__31676;
i__31510 = G__31677;
continue;
} else {
var G__31678 = seq__31505;
var G__31679 = chunk__31508;
var G__31680 = count__31509;
var G__31681 = (i__31510 + (1));
seq__31505 = G__31678;
chunk__31508 = G__31679;
count__31509 = G__31680;
i__31510 = G__31681;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31505);
if(temp__5753__auto__){
var seq__31505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31505__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__31505__$1);
var G__31682 = cljs.core.chunk_rest(seq__31505__$1);
var G__31683 = c__4649__auto__;
var G__31684 = cljs.core.count(c__4649__auto__);
var G__31685 = (0);
seq__31505 = G__31682;
chunk__31508 = G__31683;
count__31509 = G__31684;
i__31510 = G__31685;
continue;
} else {
var ext = cljs.core.first(seq__31505__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31686 = cljs.core.next(seq__31505__$1);
var G__31687 = null;
var G__31688 = (0);
var G__31689 = (0);
seq__31505 = G__31686;
chunk__31508 = G__31687;
count__31509 = G__31688;
i__31510 = G__31689;
continue;
} else {
var G__31690 = cljs.core.next(seq__31505__$1);
var G__31691 = null;
var G__31692 = (0);
var G__31693 = (0);
seq__31505 = G__31690;
chunk__31508 = G__31691;
count__31509 = G__31692;
i__31510 = G__31693;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31492){
var G__31493 = cljs.core.first(seq31492);
var seq31492__$1 = cljs.core.next(seq31492);
var G__31494 = cljs.core.first(seq31492__$1);
var seq31492__$2 = cljs.core.next(seq31492__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31493,G__31494,seq31492__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31531,p__31532){
var map__31533 = p__31531;
var map__31533__$1 = cljs.core.__destructure_map(map__31533);
var runtime = map__31533__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31533__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31534 = p__31532;
var map__31534__$1 = cljs.core.__destructure_map(map__31534);
var msg = map__31534__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31534__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31536 = cljs.core.deref(state_ref);
var map__31536__$1 = cljs.core.__destructure_map(map__31536);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31536__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31536__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31543){
var map__31544 = p__31543;
var map__31544__$1 = cljs.core.__destructure_map(map__31544);
var runtime = map__31544__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31544__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31548,msg){
var map__31550 = p__31548;
var map__31550__$1 = cljs.core.__destructure_map(map__31550);
var runtime = map__31550__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31581,key,p__31582){
var map__31583 = p__31581;
var map__31583__$1 = cljs.core.__destructure_map(map__31583);
var state = map__31583__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31583__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31584 = p__31582;
var map__31584__$1 = cljs.core.__destructure_map(map__31584);
var spec = map__31584__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31602,key,spec){
var map__31603 = p__31602;
var map__31603__$1 = cljs.core.__destructure_map(map__31603);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31604_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31604_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31606_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31606_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31607_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31607_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31608_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31608_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31609_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31609_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31626,key){
var map__31627 = p__31626;
var map__31627__$1 = cljs.core.__destructure_map(map__31627);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31627__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31631,msg){
var map__31632 = p__31631;
var map__31632__$1 = cljs.core.__destructure_map(map__31632);
var runtime = map__31632__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31632__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31639,p__31640){
var map__31641 = p__31639;
var map__31641__$1 = cljs.core.__destructure_map(map__31641);
var runtime = map__31641__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31642 = p__31640;
var map__31642__$1 = cljs.core.__destructure_map(map__31642);
var msg = map__31642__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31642__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31642__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31646 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31648 = null;
var count__31649 = (0);
var i__31650 = (0);
while(true){
if((i__31650 < count__31649)){
var map__31661 = chunk__31648.cljs$core$IIndexed$_nth$arity$2(null,i__31650);
var map__31661__$1 = cljs.core.__destructure_map(map__31661);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31661__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31733 = seq__31646;
var G__31734 = chunk__31648;
var G__31735 = count__31649;
var G__31736 = (i__31650 + (1));
seq__31646 = G__31733;
chunk__31648 = G__31734;
count__31649 = G__31735;
i__31650 = G__31736;
continue;
} else {
var G__31739 = seq__31646;
var G__31740 = chunk__31648;
var G__31741 = count__31649;
var G__31742 = (i__31650 + (1));
seq__31646 = G__31739;
chunk__31648 = G__31740;
count__31649 = G__31741;
i__31650 = G__31742;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31646);
if(temp__5753__auto__){
var seq__31646__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31646__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__31646__$1);
var G__31754 = cljs.core.chunk_rest(seq__31646__$1);
var G__31755 = c__4649__auto__;
var G__31756 = cljs.core.count(c__4649__auto__);
var G__31757 = (0);
seq__31646 = G__31754;
chunk__31648 = G__31755;
count__31649 = G__31756;
i__31650 = G__31757;
continue;
} else {
var map__31662 = cljs.core.first(seq__31646__$1);
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31775 = cljs.core.next(seq__31646__$1);
var G__31776 = null;
var G__31777 = (0);
var G__31778 = (0);
seq__31646 = G__31775;
chunk__31648 = G__31776;
count__31649 = G__31777;
i__31650 = G__31778;
continue;
} else {
var G__31779 = cljs.core.next(seq__31646__$1);
var G__31780 = null;
var G__31781 = (0);
var G__31782 = (0);
seq__31646 = G__31779;
chunk__31648 = G__31780;
count__31649 = G__31781;
i__31650 = G__31782;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
