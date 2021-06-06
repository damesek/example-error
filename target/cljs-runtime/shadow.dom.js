goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33801 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33801(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33805 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33805(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32478 = coll;
var G__32479 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32478,G__32479) : shadow.dom.lazy_native_coll_seq.call(null,G__32478,G__32479));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32517 = arguments.length;
switch (G__32517) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32526 = arguments.length;
switch (G__32526) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32548 = arguments.length;
switch (G__32548) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32555 = arguments.length;
switch (G__32555) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32569 = arguments.length;
switch (G__32569) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32580){if((e32580 instanceof Object)){
var e = e32580;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32580;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32594 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32595 = null;
var count__32596 = (0);
var i__32597 = (0);
while(true){
if((i__32597 < count__32596)){
var el = chunk__32595.cljs$core$IIndexed$_nth$arity$2(null,i__32597);
var handler_33849__$1 = ((function (seq__32594,chunk__32595,count__32596,i__32597,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32594,chunk__32595,count__32596,i__32597,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33849__$1);


var G__33850 = seq__32594;
var G__33851 = chunk__32595;
var G__33852 = count__32596;
var G__33853 = (i__32597 + (1));
seq__32594 = G__33850;
chunk__32595 = G__33851;
count__32596 = G__33852;
i__32597 = G__33853;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32594);
if(temp__5753__auto__){
var seq__32594__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32594__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32594__$1);
var G__33858 = cljs.core.chunk_rest(seq__32594__$1);
var G__33859 = c__4649__auto__;
var G__33860 = cljs.core.count(c__4649__auto__);
var G__33861 = (0);
seq__32594 = G__33858;
chunk__32595 = G__33859;
count__32596 = G__33860;
i__32597 = G__33861;
continue;
} else {
var el = cljs.core.first(seq__32594__$1);
var handler_33862__$1 = ((function (seq__32594,chunk__32595,count__32596,i__32597,el,seq__32594__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32594,chunk__32595,count__32596,i__32597,el,seq__32594__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33862__$1);


var G__33863 = cljs.core.next(seq__32594__$1);
var G__33864 = null;
var G__33865 = (0);
var G__33866 = (0);
seq__32594 = G__33863;
chunk__32595 = G__33864;
count__32596 = G__33865;
i__32597 = G__33866;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32623 = arguments.length;
switch (G__32623) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32639 = cljs.core.seq(events);
var chunk__32640 = null;
var count__32641 = (0);
var i__32642 = (0);
while(true){
if((i__32642 < count__32641)){
var vec__32656 = chunk__32640.cljs$core$IIndexed$_nth$arity$2(null,i__32642);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33869 = seq__32639;
var G__33870 = chunk__32640;
var G__33871 = count__32641;
var G__33872 = (i__32642 + (1));
seq__32639 = G__33869;
chunk__32640 = G__33870;
count__32641 = G__33871;
i__32642 = G__33872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32639);
if(temp__5753__auto__){
var seq__32639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32639__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32639__$1);
var G__33874 = cljs.core.chunk_rest(seq__32639__$1);
var G__33875 = c__4649__auto__;
var G__33876 = cljs.core.count(c__4649__auto__);
var G__33877 = (0);
seq__32639 = G__33874;
chunk__32640 = G__33875;
count__32641 = G__33876;
i__32642 = G__33877;
continue;
} else {
var vec__32662 = cljs.core.first(seq__32639__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32662,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33879 = cljs.core.next(seq__32639__$1);
var G__33880 = null;
var G__33881 = (0);
var G__33882 = (0);
seq__32639 = G__33879;
chunk__32640 = G__33880;
count__32641 = G__33881;
i__32642 = G__33882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32668 = cljs.core.seq(styles);
var chunk__32669 = null;
var count__32670 = (0);
var i__32671 = (0);
while(true){
if((i__32671 < count__32670)){
var vec__32695 = chunk__32669.cljs$core$IIndexed$_nth$arity$2(null,i__32671);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32695,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33883 = seq__32668;
var G__33884 = chunk__32669;
var G__33885 = count__32670;
var G__33886 = (i__32671 + (1));
seq__32668 = G__33883;
chunk__32669 = G__33884;
count__32670 = G__33885;
i__32671 = G__33886;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32668);
if(temp__5753__auto__){
var seq__32668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32668__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32668__$1);
var G__33887 = cljs.core.chunk_rest(seq__32668__$1);
var G__33888 = c__4649__auto__;
var G__33889 = cljs.core.count(c__4649__auto__);
var G__33890 = (0);
seq__32668 = G__33887;
chunk__32669 = G__33888;
count__32670 = G__33889;
i__32671 = G__33890;
continue;
} else {
var vec__32701 = cljs.core.first(seq__32668__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32701,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33892 = cljs.core.next(seq__32668__$1);
var G__33893 = null;
var G__33894 = (0);
var G__33895 = (0);
seq__32668 = G__33892;
chunk__32669 = G__33893;
count__32670 = G__33894;
i__32671 = G__33895;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32711_33896 = key;
var G__32711_33897__$1 = (((G__32711_33896 instanceof cljs.core.Keyword))?G__32711_33896.fqn:null);
switch (G__32711_33897__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33905 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_33905,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_33905,"aria-");
}
})())){
el.setAttribute(ks_33905,value);
} else {
(el[ks_33905] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32737){
var map__32738 = p__32737;
var map__32738__$1 = cljs.core.__destructure_map(map__32738);
var props = map__32738__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32738__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32741 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32748 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32748,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32748;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32772){
var vec__32773 = p__32772;
var seq__32774 = cljs.core.seq(vec__32773);
var first__32775 = cljs.core.first(seq__32774);
var seq__32774__$1 = cljs.core.next(seq__32774);
var nn = first__32775;
var first__32775__$1 = cljs.core.first(seq__32774__$1);
var seq__32774__$2 = cljs.core.next(seq__32774__$1);
var np = first__32775__$1;
var nc = seq__32774__$2;
var node = vec__32773;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32787 = nn;
var G__32788 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32787,G__32788) : create_fn.call(null,G__32787,G__32788));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32796 = nn;
var G__32797 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32796,G__32797) : create_fn.call(null,G__32796,G__32797));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32799 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32799,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32799,(1),null);
var seq__32802_33923 = cljs.core.seq(node_children);
var chunk__32803_33924 = null;
var count__32804_33925 = (0);
var i__32805_33926 = (0);
while(true){
if((i__32805_33926 < count__32804_33925)){
var child_struct_33927 = chunk__32803_33924.cljs$core$IIndexed$_nth$arity$2(null,i__32805_33926);
var children_33928 = shadow.dom.dom_node(child_struct_33927);
if(cljs.core.seq_QMARK_(children_33928)){
var seq__32840_33929 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33928));
var chunk__32842_33930 = null;
var count__32843_33931 = (0);
var i__32844_33932 = (0);
while(true){
if((i__32844_33932 < count__32843_33931)){
var child_33933 = chunk__32842_33930.cljs$core$IIndexed$_nth$arity$2(null,i__32844_33932);
if(cljs.core.truth_(child_33933)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33933);


var G__33934 = seq__32840_33929;
var G__33935 = chunk__32842_33930;
var G__33936 = count__32843_33931;
var G__33937 = (i__32844_33932 + (1));
seq__32840_33929 = G__33934;
chunk__32842_33930 = G__33935;
count__32843_33931 = G__33936;
i__32844_33932 = G__33937;
continue;
} else {
var G__33938 = seq__32840_33929;
var G__33939 = chunk__32842_33930;
var G__33940 = count__32843_33931;
var G__33941 = (i__32844_33932 + (1));
seq__32840_33929 = G__33938;
chunk__32842_33930 = G__33939;
count__32843_33931 = G__33940;
i__32844_33932 = G__33941;
continue;
}
} else {
var temp__5753__auto___33942 = cljs.core.seq(seq__32840_33929);
if(temp__5753__auto___33942){
var seq__32840_33943__$1 = temp__5753__auto___33942;
if(cljs.core.chunked_seq_QMARK_(seq__32840_33943__$1)){
var c__4649__auto___33945 = cljs.core.chunk_first(seq__32840_33943__$1);
var G__33946 = cljs.core.chunk_rest(seq__32840_33943__$1);
var G__33947 = c__4649__auto___33945;
var G__33948 = cljs.core.count(c__4649__auto___33945);
var G__33949 = (0);
seq__32840_33929 = G__33946;
chunk__32842_33930 = G__33947;
count__32843_33931 = G__33948;
i__32844_33932 = G__33949;
continue;
} else {
var child_33950 = cljs.core.first(seq__32840_33943__$1);
if(cljs.core.truth_(child_33950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33950);


var G__33952 = cljs.core.next(seq__32840_33943__$1);
var G__33953 = null;
var G__33954 = (0);
var G__33955 = (0);
seq__32840_33929 = G__33952;
chunk__32842_33930 = G__33953;
count__32843_33931 = G__33954;
i__32844_33932 = G__33955;
continue;
} else {
var G__33956 = cljs.core.next(seq__32840_33943__$1);
var G__33957 = null;
var G__33958 = (0);
var G__33959 = (0);
seq__32840_33929 = G__33956;
chunk__32842_33930 = G__33957;
count__32843_33931 = G__33958;
i__32844_33932 = G__33959;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33928);
}


var G__33963 = seq__32802_33923;
var G__33964 = chunk__32803_33924;
var G__33965 = count__32804_33925;
var G__33966 = (i__32805_33926 + (1));
seq__32802_33923 = G__33963;
chunk__32803_33924 = G__33964;
count__32804_33925 = G__33965;
i__32805_33926 = G__33966;
continue;
} else {
var temp__5753__auto___33967 = cljs.core.seq(seq__32802_33923);
if(temp__5753__auto___33967){
var seq__32802_33968__$1 = temp__5753__auto___33967;
if(cljs.core.chunked_seq_QMARK_(seq__32802_33968__$1)){
var c__4649__auto___33969 = cljs.core.chunk_first(seq__32802_33968__$1);
var G__33970 = cljs.core.chunk_rest(seq__32802_33968__$1);
var G__33971 = c__4649__auto___33969;
var G__33972 = cljs.core.count(c__4649__auto___33969);
var G__33973 = (0);
seq__32802_33923 = G__33970;
chunk__32803_33924 = G__33971;
count__32804_33925 = G__33972;
i__32805_33926 = G__33973;
continue;
} else {
var child_struct_33974 = cljs.core.first(seq__32802_33968__$1);
var children_33975 = shadow.dom.dom_node(child_struct_33974);
if(cljs.core.seq_QMARK_(children_33975)){
var seq__32870_33976 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33975));
var chunk__32872_33977 = null;
var count__32873_33978 = (0);
var i__32874_33979 = (0);
while(true){
if((i__32874_33979 < count__32873_33978)){
var child_33980 = chunk__32872_33977.cljs$core$IIndexed$_nth$arity$2(null,i__32874_33979);
if(cljs.core.truth_(child_33980)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33980);


var G__33981 = seq__32870_33976;
var G__33982 = chunk__32872_33977;
var G__33983 = count__32873_33978;
var G__33984 = (i__32874_33979 + (1));
seq__32870_33976 = G__33981;
chunk__32872_33977 = G__33982;
count__32873_33978 = G__33983;
i__32874_33979 = G__33984;
continue;
} else {
var G__33985 = seq__32870_33976;
var G__33986 = chunk__32872_33977;
var G__33987 = count__32873_33978;
var G__33988 = (i__32874_33979 + (1));
seq__32870_33976 = G__33985;
chunk__32872_33977 = G__33986;
count__32873_33978 = G__33987;
i__32874_33979 = G__33988;
continue;
}
} else {
var temp__5753__auto___33989__$1 = cljs.core.seq(seq__32870_33976);
if(temp__5753__auto___33989__$1){
var seq__32870_33990__$1 = temp__5753__auto___33989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32870_33990__$1)){
var c__4649__auto___33991 = cljs.core.chunk_first(seq__32870_33990__$1);
var G__33992 = cljs.core.chunk_rest(seq__32870_33990__$1);
var G__33993 = c__4649__auto___33991;
var G__33994 = cljs.core.count(c__4649__auto___33991);
var G__33995 = (0);
seq__32870_33976 = G__33992;
chunk__32872_33977 = G__33993;
count__32873_33978 = G__33994;
i__32874_33979 = G__33995;
continue;
} else {
var child_33996 = cljs.core.first(seq__32870_33990__$1);
if(cljs.core.truth_(child_33996)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33996);


var G__33997 = cljs.core.next(seq__32870_33990__$1);
var G__33998 = null;
var G__33999 = (0);
var G__34000 = (0);
seq__32870_33976 = G__33997;
chunk__32872_33977 = G__33998;
count__32873_33978 = G__33999;
i__32874_33979 = G__34000;
continue;
} else {
var G__34001 = cljs.core.next(seq__32870_33990__$1);
var G__34002 = null;
var G__34003 = (0);
var G__34004 = (0);
seq__32870_33976 = G__34001;
chunk__32872_33977 = G__34002;
count__32873_33978 = G__34003;
i__32874_33979 = G__34004;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33975);
}


var G__34005 = cljs.core.next(seq__32802_33968__$1);
var G__34006 = null;
var G__34007 = (0);
var G__34008 = (0);
seq__32802_33923 = G__34005;
chunk__32803_33924 = G__34006;
count__32804_33925 = G__34007;
i__32805_33926 = G__34008;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32941 = cljs.core.seq(node);
var chunk__32942 = null;
var count__32943 = (0);
var i__32944 = (0);
while(true){
if((i__32944 < count__32943)){
var n = chunk__32942.cljs$core$IIndexed$_nth$arity$2(null,i__32944);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34013 = seq__32941;
var G__34014 = chunk__32942;
var G__34015 = count__32943;
var G__34016 = (i__32944 + (1));
seq__32941 = G__34013;
chunk__32942 = G__34014;
count__32943 = G__34015;
i__32944 = G__34016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32941);
if(temp__5753__auto__){
var seq__32941__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32941__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32941__$1);
var G__34017 = cljs.core.chunk_rest(seq__32941__$1);
var G__34018 = c__4649__auto__;
var G__34019 = cljs.core.count(c__4649__auto__);
var G__34020 = (0);
seq__32941 = G__34017;
chunk__32942 = G__34018;
count__32943 = G__34019;
i__32944 = G__34020;
continue;
} else {
var n = cljs.core.first(seq__32941__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34021 = cljs.core.next(seq__32941__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__32941 = G__34021;
chunk__32942 = G__34022;
count__32943 = G__34023;
i__32944 = G__34024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32971 = arguments.length;
switch (G__32971) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32991 = arguments.length;
switch (G__32991) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33022 = arguments.length;
switch (G__33022) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34031 = arguments.length;
var i__4830__auto___34032 = (0);
while(true){
if((i__4830__auto___34032 < len__4829__auto___34031)){
args__4835__auto__.push((arguments[i__4830__auto___34032]));

var G__34035 = (i__4830__auto___34032 + (1));
i__4830__auto___34032 = G__34035;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33075_34038 = cljs.core.seq(nodes);
var chunk__33076_34039 = null;
var count__33077_34040 = (0);
var i__33078_34041 = (0);
while(true){
if((i__33078_34041 < count__33077_34040)){
var node_34042 = chunk__33076_34039.cljs$core$IIndexed$_nth$arity$2(null,i__33078_34041);
fragment.appendChild(shadow.dom._to_dom(node_34042));


var G__34043 = seq__33075_34038;
var G__34044 = chunk__33076_34039;
var G__34045 = count__33077_34040;
var G__34046 = (i__33078_34041 + (1));
seq__33075_34038 = G__34043;
chunk__33076_34039 = G__34044;
count__33077_34040 = G__34045;
i__33078_34041 = G__34046;
continue;
} else {
var temp__5753__auto___34047 = cljs.core.seq(seq__33075_34038);
if(temp__5753__auto___34047){
var seq__33075_34049__$1 = temp__5753__auto___34047;
if(cljs.core.chunked_seq_QMARK_(seq__33075_34049__$1)){
var c__4649__auto___34050 = cljs.core.chunk_first(seq__33075_34049__$1);
var G__34051 = cljs.core.chunk_rest(seq__33075_34049__$1);
var G__34052 = c__4649__auto___34050;
var G__34053 = cljs.core.count(c__4649__auto___34050);
var G__34054 = (0);
seq__33075_34038 = G__34051;
chunk__33076_34039 = G__34052;
count__33077_34040 = G__34053;
i__33078_34041 = G__34054;
continue;
} else {
var node_34055 = cljs.core.first(seq__33075_34049__$1);
fragment.appendChild(shadow.dom._to_dom(node_34055));


var G__34056 = cljs.core.next(seq__33075_34049__$1);
var G__34057 = null;
var G__34058 = (0);
var G__34059 = (0);
seq__33075_34038 = G__34056;
chunk__33076_34039 = G__34057;
count__33077_34040 = G__34058;
i__33078_34041 = G__34059;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33057){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33057));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33110_34063 = cljs.core.seq(scripts);
var chunk__33111_34064 = null;
var count__33112_34065 = (0);
var i__33113_34066 = (0);
while(true){
if((i__33113_34066 < count__33112_34065)){
var vec__33145_34067 = chunk__33111_34064.cljs$core$IIndexed$_nth$arity$2(null,i__33113_34066);
var script_tag_34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145_34067,(0),null);
var script_body_34069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145_34067,(1),null);
eval(script_body_34069);


var G__34070 = seq__33110_34063;
var G__34071 = chunk__33111_34064;
var G__34072 = count__33112_34065;
var G__34073 = (i__33113_34066 + (1));
seq__33110_34063 = G__34070;
chunk__33111_34064 = G__34071;
count__33112_34065 = G__34072;
i__33113_34066 = G__34073;
continue;
} else {
var temp__5753__auto___34074 = cljs.core.seq(seq__33110_34063);
if(temp__5753__auto___34074){
var seq__33110_34075__$1 = temp__5753__auto___34074;
if(cljs.core.chunked_seq_QMARK_(seq__33110_34075__$1)){
var c__4649__auto___34076 = cljs.core.chunk_first(seq__33110_34075__$1);
var G__34077 = cljs.core.chunk_rest(seq__33110_34075__$1);
var G__34078 = c__4649__auto___34076;
var G__34079 = cljs.core.count(c__4649__auto___34076);
var G__34080 = (0);
seq__33110_34063 = G__34077;
chunk__33111_34064 = G__34078;
count__33112_34065 = G__34079;
i__33113_34066 = G__34080;
continue;
} else {
var vec__33153_34081 = cljs.core.first(seq__33110_34075__$1);
var script_tag_34082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33153_34081,(0),null);
var script_body_34083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33153_34081,(1),null);
eval(script_body_34083);


var G__34084 = cljs.core.next(seq__33110_34075__$1);
var G__34085 = null;
var G__34086 = (0);
var G__34087 = (0);
seq__33110_34063 = G__34084;
chunk__33111_34064 = G__34085;
count__33112_34065 = G__34086;
i__33113_34066 = G__34087;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33161){
var vec__33163 = p__33161;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33197 = arguments.length;
switch (G__33197) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33257 = cljs.core.seq(style_keys);
var chunk__33258 = null;
var count__33259 = (0);
var i__33260 = (0);
while(true){
if((i__33260 < count__33259)){
var it = chunk__33258.cljs$core$IIndexed$_nth$arity$2(null,i__33260);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34096 = seq__33257;
var G__34097 = chunk__33258;
var G__34098 = count__33259;
var G__34099 = (i__33260 + (1));
seq__33257 = G__34096;
chunk__33258 = G__34097;
count__33259 = G__34098;
i__33260 = G__34099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33257);
if(temp__5753__auto__){
var seq__33257__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33257__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33257__$1);
var G__34100 = cljs.core.chunk_rest(seq__33257__$1);
var G__34101 = c__4649__auto__;
var G__34102 = cljs.core.count(c__4649__auto__);
var G__34103 = (0);
seq__33257 = G__34100;
chunk__33258 = G__34101;
count__33259 = G__34102;
i__33260 = G__34103;
continue;
} else {
var it = cljs.core.first(seq__33257__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34107 = cljs.core.next(seq__33257__$1);
var G__34108 = null;
var G__34109 = (0);
var G__34110 = (0);
seq__33257 = G__34107;
chunk__33258 = G__34108;
count__33259 = G__34109;
i__33260 = G__34110;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33282,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33294 = k33282;
var G__33294__$1 = (((G__33294 instanceof cljs.core.Keyword))?G__33294.fqn:null);
switch (G__33294__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33282,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33301){
var vec__33303 = p__33301;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33281){
var self__ = this;
var G__33281__$1 = this;
return (new cljs.core.RecordIter((0),G__33281__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33283,other33284){
var self__ = this;
var this33283__$1 = this;
return (((!((other33284 == null)))) && ((((this33283__$1.constructor === other33284.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33283__$1.x,other33284.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33283__$1.y,other33284.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33283__$1.__extmap,other33284.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33282){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33348 = k33282;
var G__33348__$1 = (((G__33348 instanceof cljs.core.Keyword))?G__33348.fqn:null);
switch (G__33348__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33282);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33281){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33352 = cljs.core.keyword_identical_QMARK_;
var expr__33353 = k__4481__auto__;
if(cljs.core.truth_((pred__33352.cljs$core$IFn$_invoke$arity$2 ? pred__33352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33353) : pred__33352.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33353)))){
return (new shadow.dom.Coordinate(G__33281,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33352.cljs$core$IFn$_invoke$arity$2 ? pred__33352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33353) : pred__33352.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33353)))){
return (new shadow.dom.Coordinate(self__.x,G__33281,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33281),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33281){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33281,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33287){
var extmap__4512__auto__ = (function (){var G__33377 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33287,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33377);
} else {
return G__33377;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33287),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33287),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33395,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33413 = k33395;
var G__33413__$1 = (((G__33413 instanceof cljs.core.Keyword))?G__33413.fqn:null);
switch (G__33413__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33395,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33420){
var vec__33422 = p__33420;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33394){
var self__ = this;
var G__33394__$1 = this;
return (new cljs.core.RecordIter((0),G__33394__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33396,other33397){
var self__ = this;
var this33396__$1 = this;
return (((!((other33397 == null)))) && ((((this33396__$1.constructor === other33397.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33396__$1.w,other33397.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33396__$1.h,other33397.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33396__$1.__extmap,other33397.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33395){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33483 = k33395;
var G__33483__$1 = (((G__33483 instanceof cljs.core.Keyword))?G__33483.fqn:null);
switch (G__33483__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33395);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33394){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33489 = cljs.core.keyword_identical_QMARK_;
var expr__33490 = k__4481__auto__;
if(cljs.core.truth_((pred__33489.cljs$core$IFn$_invoke$arity$2 ? pred__33489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33490) : pred__33489.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33490)))){
return (new shadow.dom.Size(G__33394,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33489.cljs$core$IFn$_invoke$arity$2 ? pred__33489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33490) : pred__33489.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33490)))){
return (new shadow.dom.Size(self__.w,G__33394,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33394),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33394){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33394,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33399){
var extmap__4512__auto__ = (function (){var G__33519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33399,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33399)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33519);
} else {
return G__33519;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33399),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33399),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__34145 = (i + (1));
var G__34146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34145;
ret = G__34146;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33550){
var vec__33551 = p__33550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33559 = arguments.length;
switch (G__33559) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34155 = ps;
var G__34156 = (i + (1));
el__$1 = G__34155;
i = G__34156;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33602 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33610_34157 = cljs.core.seq(props);
var chunk__33611_34158 = null;
var count__33612_34159 = (0);
var i__33613_34160 = (0);
while(true){
if((i__33613_34160 < count__33612_34159)){
var vec__33637_34161 = chunk__33611_34158.cljs$core$IIndexed$_nth$arity$2(null,i__33613_34160);
var k_34162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637_34161,(0),null);
var v_34163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637_34161,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34162);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34162),v_34163);


var G__34164 = seq__33610_34157;
var G__34165 = chunk__33611_34158;
var G__34166 = count__33612_34159;
var G__34167 = (i__33613_34160 + (1));
seq__33610_34157 = G__34164;
chunk__33611_34158 = G__34165;
count__33612_34159 = G__34166;
i__33613_34160 = G__34167;
continue;
} else {
var temp__5753__auto___34168 = cljs.core.seq(seq__33610_34157);
if(temp__5753__auto___34168){
var seq__33610_34169__$1 = temp__5753__auto___34168;
if(cljs.core.chunked_seq_QMARK_(seq__33610_34169__$1)){
var c__4649__auto___34170 = cljs.core.chunk_first(seq__33610_34169__$1);
var G__34171 = cljs.core.chunk_rest(seq__33610_34169__$1);
var G__34172 = c__4649__auto___34170;
var G__34173 = cljs.core.count(c__4649__auto___34170);
var G__34174 = (0);
seq__33610_34157 = G__34171;
chunk__33611_34158 = G__34172;
count__33612_34159 = G__34173;
i__33613_34160 = G__34174;
continue;
} else {
var vec__33646_34175 = cljs.core.first(seq__33610_34169__$1);
var k_34176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646_34175,(0),null);
var v_34177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646_34175,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34176);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34176),v_34177);


var G__34178 = cljs.core.next(seq__33610_34169__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__33610_34157 = G__34178;
chunk__33611_34158 = G__34179;
count__33612_34159 = G__34180;
i__33613_34160 = G__34181;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33662 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33662,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33662,(1),null);
var seq__33666_34182 = cljs.core.seq(node_children);
var chunk__33668_34183 = null;
var count__33669_34184 = (0);
var i__33670_34185 = (0);
while(true){
if((i__33670_34185 < count__33669_34184)){
var child_struct_34186 = chunk__33668_34183.cljs$core$IIndexed$_nth$arity$2(null,i__33670_34185);
if((!((child_struct_34186 == null)))){
if(typeof child_struct_34186 === 'string'){
var text_34187 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34187),child_struct_34186].join(''));
} else {
var children_34188 = shadow.dom.svg_node(child_struct_34186);
if(cljs.core.seq_QMARK_(children_34188)){
var seq__33717_34189 = cljs.core.seq(children_34188);
var chunk__33719_34190 = null;
var count__33720_34191 = (0);
var i__33721_34192 = (0);
while(true){
if((i__33721_34192 < count__33720_34191)){
var child_34193 = chunk__33719_34190.cljs$core$IIndexed$_nth$arity$2(null,i__33721_34192);
if(cljs.core.truth_(child_34193)){
node.appendChild(child_34193);


var G__34194 = seq__33717_34189;
var G__34195 = chunk__33719_34190;
var G__34196 = count__33720_34191;
var G__34197 = (i__33721_34192 + (1));
seq__33717_34189 = G__34194;
chunk__33719_34190 = G__34195;
count__33720_34191 = G__34196;
i__33721_34192 = G__34197;
continue;
} else {
var G__34198 = seq__33717_34189;
var G__34199 = chunk__33719_34190;
var G__34200 = count__33720_34191;
var G__34201 = (i__33721_34192 + (1));
seq__33717_34189 = G__34198;
chunk__33719_34190 = G__34199;
count__33720_34191 = G__34200;
i__33721_34192 = G__34201;
continue;
}
} else {
var temp__5753__auto___34202 = cljs.core.seq(seq__33717_34189);
if(temp__5753__auto___34202){
var seq__33717_34205__$1 = temp__5753__auto___34202;
if(cljs.core.chunked_seq_QMARK_(seq__33717_34205__$1)){
var c__4649__auto___34206 = cljs.core.chunk_first(seq__33717_34205__$1);
var G__34207 = cljs.core.chunk_rest(seq__33717_34205__$1);
var G__34208 = c__4649__auto___34206;
var G__34209 = cljs.core.count(c__4649__auto___34206);
var G__34210 = (0);
seq__33717_34189 = G__34207;
chunk__33719_34190 = G__34208;
count__33720_34191 = G__34209;
i__33721_34192 = G__34210;
continue;
} else {
var child_34211 = cljs.core.first(seq__33717_34205__$1);
if(cljs.core.truth_(child_34211)){
node.appendChild(child_34211);


var G__34212 = cljs.core.next(seq__33717_34205__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__33717_34189 = G__34212;
chunk__33719_34190 = G__34213;
count__33720_34191 = G__34214;
i__33721_34192 = G__34215;
continue;
} else {
var G__34216 = cljs.core.next(seq__33717_34205__$1);
var G__34217 = null;
var G__34218 = (0);
var G__34219 = (0);
seq__33717_34189 = G__34216;
chunk__33719_34190 = G__34217;
count__33720_34191 = G__34218;
i__33721_34192 = G__34219;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34188);
}
}


var G__34221 = seq__33666_34182;
var G__34222 = chunk__33668_34183;
var G__34223 = count__33669_34184;
var G__34224 = (i__33670_34185 + (1));
seq__33666_34182 = G__34221;
chunk__33668_34183 = G__34222;
count__33669_34184 = G__34223;
i__33670_34185 = G__34224;
continue;
} else {
var G__34225 = seq__33666_34182;
var G__34226 = chunk__33668_34183;
var G__34227 = count__33669_34184;
var G__34228 = (i__33670_34185 + (1));
seq__33666_34182 = G__34225;
chunk__33668_34183 = G__34226;
count__33669_34184 = G__34227;
i__33670_34185 = G__34228;
continue;
}
} else {
var temp__5753__auto___34229 = cljs.core.seq(seq__33666_34182);
if(temp__5753__auto___34229){
var seq__33666_34230__$1 = temp__5753__auto___34229;
if(cljs.core.chunked_seq_QMARK_(seq__33666_34230__$1)){
var c__4649__auto___34231 = cljs.core.chunk_first(seq__33666_34230__$1);
var G__34232 = cljs.core.chunk_rest(seq__33666_34230__$1);
var G__34233 = c__4649__auto___34231;
var G__34234 = cljs.core.count(c__4649__auto___34231);
var G__34235 = (0);
seq__33666_34182 = G__34232;
chunk__33668_34183 = G__34233;
count__33669_34184 = G__34234;
i__33670_34185 = G__34235;
continue;
} else {
var child_struct_34236 = cljs.core.first(seq__33666_34230__$1);
if((!((child_struct_34236 == null)))){
if(typeof child_struct_34236 === 'string'){
var text_34237 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34237),child_struct_34236].join(''));
} else {
var children_34238 = shadow.dom.svg_node(child_struct_34236);
if(cljs.core.seq_QMARK_(children_34238)){
var seq__33736_34239 = cljs.core.seq(children_34238);
var chunk__33738_34240 = null;
var count__33739_34241 = (0);
var i__33740_34242 = (0);
while(true){
if((i__33740_34242 < count__33739_34241)){
var child_34243 = chunk__33738_34240.cljs$core$IIndexed$_nth$arity$2(null,i__33740_34242);
if(cljs.core.truth_(child_34243)){
node.appendChild(child_34243);


var G__34244 = seq__33736_34239;
var G__34245 = chunk__33738_34240;
var G__34246 = count__33739_34241;
var G__34247 = (i__33740_34242 + (1));
seq__33736_34239 = G__34244;
chunk__33738_34240 = G__34245;
count__33739_34241 = G__34246;
i__33740_34242 = G__34247;
continue;
} else {
var G__34248 = seq__33736_34239;
var G__34249 = chunk__33738_34240;
var G__34250 = count__33739_34241;
var G__34251 = (i__33740_34242 + (1));
seq__33736_34239 = G__34248;
chunk__33738_34240 = G__34249;
count__33739_34241 = G__34250;
i__33740_34242 = G__34251;
continue;
}
} else {
var temp__5753__auto___34252__$1 = cljs.core.seq(seq__33736_34239);
if(temp__5753__auto___34252__$1){
var seq__33736_34253__$1 = temp__5753__auto___34252__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33736_34253__$1)){
var c__4649__auto___34254 = cljs.core.chunk_first(seq__33736_34253__$1);
var G__34255 = cljs.core.chunk_rest(seq__33736_34253__$1);
var G__34256 = c__4649__auto___34254;
var G__34257 = cljs.core.count(c__4649__auto___34254);
var G__34258 = (0);
seq__33736_34239 = G__34255;
chunk__33738_34240 = G__34256;
count__33739_34241 = G__34257;
i__33740_34242 = G__34258;
continue;
} else {
var child_34259 = cljs.core.first(seq__33736_34253__$1);
if(cljs.core.truth_(child_34259)){
node.appendChild(child_34259);


var G__34260 = cljs.core.next(seq__33736_34253__$1);
var G__34261 = null;
var G__34262 = (0);
var G__34263 = (0);
seq__33736_34239 = G__34260;
chunk__33738_34240 = G__34261;
count__33739_34241 = G__34262;
i__33740_34242 = G__34263;
continue;
} else {
var G__34264 = cljs.core.next(seq__33736_34253__$1);
var G__34265 = null;
var G__34266 = (0);
var G__34267 = (0);
seq__33736_34239 = G__34264;
chunk__33738_34240 = G__34265;
count__33739_34241 = G__34266;
i__33740_34242 = G__34267;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34238);
}
}


var G__34268 = cljs.core.next(seq__33666_34230__$1);
var G__34269 = null;
var G__34270 = (0);
var G__34271 = (0);
seq__33666_34182 = G__34268;
chunk__33668_34183 = G__34269;
count__33669_34184 = G__34270;
i__33670_34185 = G__34271;
continue;
} else {
var G__34272 = cljs.core.next(seq__33666_34230__$1);
var G__34273 = null;
var G__34274 = (0);
var G__34275 = (0);
seq__33666_34182 = G__34272;
chunk__33668_34183 = G__34273;
count__33669_34184 = G__34274;
i__33670_34185 = G__34275;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34278 = arguments.length;
var i__4830__auto___34279 = (0);
while(true){
if((i__4830__auto___34279 < len__4829__auto___34278)){
args__4835__auto__.push((arguments[i__4830__auto___34279]));

var G__34280 = (i__4830__auto___34279 + (1));
i__4830__auto___34279 = G__34280;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33761){
var G__33762 = cljs.core.first(seq33761);
var seq33761__$1 = cljs.core.next(seq33761);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33762,seq33761__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33770 = arguments.length;
switch (G__33770) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__29341__auto___34288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_33779){
var state_val_33780 = (state_33779[(1)]);
if((state_val_33780 === (1))){
var state_33779__$1 = state_33779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33779__$1,(2),once_or_cleanup);
} else {
if((state_val_33780 === (2))){
var inst_33776 = (state_33779[(2)]);
var inst_33777 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33779__$1 = (function (){var statearr_33784 = state_33779;
(statearr_33784[(7)] = inst_33776);

return statearr_33784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33779__$1,inst_33777);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29138__auto__ = null;
var shadow$dom$state_machine__29138__auto____0 = (function (){
var statearr_33785 = [null,null,null,null,null,null,null,null];
(statearr_33785[(0)] = shadow$dom$state_machine__29138__auto__);

(statearr_33785[(1)] = (1));

return statearr_33785;
});
var shadow$dom$state_machine__29138__auto____1 = (function (state_33779){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_33779);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e33786){var ex__29141__auto__ = e33786;
var statearr_33787_34294 = state_33779;
(statearr_33787_34294[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_33779[(4)]))){
var statearr_33788_34296 = state_33779;
(statearr_33788_34296[(1)] = cljs.core.first((state_33779[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34297 = state_33779;
state_33779 = G__34297;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
shadow$dom$state_machine__29138__auto__ = function(state_33779){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29138__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29138__auto____1.call(this,state_33779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29138__auto____0;
shadow$dom$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29138__auto____1;
return shadow$dom$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_33791 = f__29342__auto__();
(statearr_33791[(6)] = c__29341__auto___34288);

return statearr_33791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
