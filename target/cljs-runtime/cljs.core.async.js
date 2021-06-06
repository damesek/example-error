goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29437 = arguments.length;
switch (G__29437) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29443 = (function (f,blockable,meta29444){
this.f = f;
this.blockable = blockable;
this.meta29444 = meta29444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29445,meta29444__$1){
var self__ = this;
var _29445__$1 = this;
return (new cljs.core.async.t_cljs$core$async29443(self__.f,self__.blockable,meta29444__$1));
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29445){
var self__ = this;
var _29445__$1 = this;
return self__.meta29444;
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29444","meta29444",1607527155,null)], null);
}));

(cljs.core.async.t_cljs$core$async29443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29443");

(cljs.core.async.t_cljs$core$async29443.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29443.
 */
cljs.core.async.__GT_t_cljs$core$async29443 = (function cljs$core$async$__GT_t_cljs$core$async29443(f__$1,blockable__$1,meta29444){
return (new cljs.core.async.t_cljs$core$async29443(f__$1,blockable__$1,meta29444));
});

}

return (new cljs.core.async.t_cljs$core$async29443(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29469 = arguments.length;
switch (G__29469) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29490 = arguments.length;
switch (G__29490) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29510 = arguments.length;
switch (G__29510) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32477 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32477) : fn1.call(null,val_32477));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32477) : fn1.call(null,val_32477));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29534 = arguments.length;
switch (G__29534) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___32484 = n;
var x_32485 = (0);
while(true){
if((x_32485 < n__4706__auto___32484)){
(a[x_32485] = x_32485);

var G__32486 = (x_32485 + (1));
x_32485 = G__32486;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29552 = (function (flag,meta29553){
this.flag = flag;
this.meta29553 = meta29553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29554,meta29553__$1){
var self__ = this;
var _29554__$1 = this;
return (new cljs.core.async.t_cljs$core$async29552(self__.flag,meta29553__$1));
}));

(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29554){
var self__ = this;
var _29554__$1 = this;
return self__.meta29553;
}));

(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29553","meta29553",1976954679,null)], null);
}));

(cljs.core.async.t_cljs$core$async29552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29552");

(cljs.core.async.t_cljs$core$async29552.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29552.
 */
cljs.core.async.__GT_t_cljs$core$async29552 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29552(flag__$1,meta29553){
return (new cljs.core.async.t_cljs$core$async29552(flag__$1,meta29553));
});

}

return (new cljs.core.async.t_cljs$core$async29552(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29560 = (function (flag,cb,meta29561){
this.flag = flag;
this.cb = cb;
this.meta29561 = meta29561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29562,meta29561__$1){
var self__ = this;
var _29562__$1 = this;
return (new cljs.core.async.t_cljs$core$async29560(self__.flag,self__.cb,meta29561__$1));
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29562){
var self__ = this;
var _29562__$1 = this;
return self__.meta29561;
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29561","meta29561",-1127860791,null)], null);
}));

(cljs.core.async.t_cljs$core$async29560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29560");

(cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29560.
 */
cljs.core.async.__GT_t_cljs$core$async29560 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29560(flag__$1,cb__$1,meta29561){
return (new cljs.core.async.t_cljs$core$async29560(flag__$1,cb__$1,meta29561));
});

}

return (new cljs.core.async.t_cljs$core$async29560(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29582_SHARP_){
var G__29590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29582_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29590) : fret.call(null,G__29590));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29583_SHARP_){
var G__29592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29583_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29592) : fret.call(null,G__29592));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32506 = (i + (1));
i = G__32506;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32509 = arguments.length;
var i__4830__auto___32510 = (0);
while(true){
if((i__4830__auto___32510 < len__4829__auto___32509)){
args__4835__auto__.push((arguments[i__4830__auto___32510]));

var G__32511 = (i__4830__auto___32510 + (1));
i__4830__auto___32510 = G__32511;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29607){
var map__29608 = p__29607;
var map__29608__$1 = cljs.core.__destructure_map(map__29608);
var opts = map__29608__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29605){
var G__29606 = cljs.core.first(seq29605);
var seq29605__$1 = cljs.core.next(seq29605);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29606,seq29605__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29624 = arguments.length;
switch (G__29624) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29341__auto___32521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_29656){
var state_val_29660 = (state_29656[(1)]);
if((state_val_29660 === (7))){
var inst_29649 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29666_32522 = state_29656__$1;
(statearr_29666_32522[(2)] = inst_29649);

(statearr_29666_32522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (1))){
var state_29656__$1 = state_29656;
var statearr_29669_32523 = state_29656__$1;
(statearr_29669_32523[(2)] = null);

(statearr_29669_32523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (4))){
var inst_29631 = (state_29656[(7)]);
var inst_29631__$1 = (state_29656[(2)]);
var inst_29632 = (inst_29631__$1 == null);
var state_29656__$1 = (function (){var statearr_29672 = state_29656;
(statearr_29672[(7)] = inst_29631__$1);

return statearr_29672;
})();
if(cljs.core.truth_(inst_29632)){
var statearr_29673_32525 = state_29656__$1;
(statearr_29673_32525[(1)] = (5));

} else {
var statearr_29674_32527 = state_29656__$1;
(statearr_29674_32527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (13))){
var state_29656__$1 = state_29656;
var statearr_29675_32528 = state_29656__$1;
(statearr_29675_32528[(2)] = null);

(statearr_29675_32528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (6))){
var inst_29631 = (state_29656[(7)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29656__$1,(11),to,inst_29631);
} else {
if((state_val_29660 === (3))){
var inst_29651 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29656__$1,inst_29651);
} else {
if((state_val_29660 === (12))){
var state_29656__$1 = state_29656;
var statearr_29679_32529 = state_29656__$1;
(statearr_29679_32529[(2)] = null);

(statearr_29679_32529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (2))){
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29656__$1,(4),from);
} else {
if((state_val_29660 === (11))){
var inst_29642 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29642)){
var statearr_29680_32534 = state_29656__$1;
(statearr_29680_32534[(1)] = (12));

} else {
var statearr_29681_32535 = state_29656__$1;
(statearr_29681_32535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (9))){
var state_29656__$1 = state_29656;
var statearr_29685_32536 = state_29656__$1;
(statearr_29685_32536[(2)] = null);

(statearr_29685_32536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (5))){
var state_29656__$1 = state_29656;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29686_32537 = state_29656__$1;
(statearr_29686_32537[(1)] = (8));

} else {
var statearr_29687_32542 = state_29656__$1;
(statearr_29687_32542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (14))){
var inst_29647 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29688_32543 = state_29656__$1;
(statearr_29688_32543[(2)] = inst_29647);

(statearr_29688_32543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (10))){
var inst_29638 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29689_32546 = state_29656__$1;
(statearr_29689_32546[(2)] = inst_29638);

(statearr_29689_32546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29660 === (8))){
var inst_29635 = cljs.core.async.close_BANG_(to);
var state_29656__$1 = state_29656;
var statearr_29692_32547 = state_29656__$1;
(statearr_29692_32547[(2)] = inst_29635);

(statearr_29692_32547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_29695 = [null,null,null,null,null,null,null,null];
(statearr_29695[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_29695[(1)] = (1));

return statearr_29695;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_29656){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29656);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29696){var ex__29141__auto__ = e29696;
var statearr_29697_32549 = state_29656;
(statearr_29697_32549[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29656[(4)]))){
var statearr_29698_32550 = state_29656;
(statearr_29698_32550[(1)] = cljs.core.first((state_29656[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32551 = state_29656;
state_29656 = G__32551;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_29699 = f__29342__auto__();
(statearr_29699[(6)] = c__29341__auto___32521);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29704){
var vec__29705 = p__29704;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29705,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29705,(1),null);
var job = vec__29705;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29341__auto___32553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_29715){
var state_val_29716 = (state_29715[(1)]);
if((state_val_29716 === (1))){
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29715__$1,(2),res,v);
} else {
if((state_val_29716 === (2))){
var inst_29712 = (state_29715[(2)]);
var inst_29713 = cljs.core.async.close_BANG_(res);
var state_29715__$1 = (function (){var statearr_29725 = state_29715;
(statearr_29725[(7)] = inst_29712);

return statearr_29725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29715__$1,inst_29713);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_29726 = [null,null,null,null,null,null,null,null];
(statearr_29726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__);

(statearr_29726[(1)] = (1));

return statearr_29726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1 = (function (state_29715){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29715);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29727){var ex__29141__auto__ = e29727;
var statearr_29728_32556 = state_29715;
(statearr_29728_32556[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29715[(4)]))){
var statearr_29729_32557 = state_29715;
(statearr_29729_32557[(1)] = cljs.core.first((state_29715[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32558 = state_29715;
state_29715 = G__32558;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = function(state_29715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1.call(this,state_29715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_29735 = f__29342__auto__();
(statearr_29735[(6)] = c__29341__auto___32553);

return statearr_29735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29737){
var vec__29738 = p__29737;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29738,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29738,(1),null);
var job = vec__29738;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___32559 = n;
var __32560 = (0);
while(true){
if((__32560 < n__4706__auto___32559)){
var G__29744_32561 = type;
var G__29744_32562__$1 = (((G__29744_32561 instanceof cljs.core.Keyword))?G__29744_32561.fqn:null);
switch (G__29744_32562__$1) {
case "compute":
var c__29341__auto___32564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32560,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = ((function (__32560,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function (state_29757){
var state_val_29758 = (state_29757[(1)]);
if((state_val_29758 === (1))){
var state_29757__$1 = state_29757;
var statearr_29762_32565 = state_29757__$1;
(statearr_29762_32565[(2)] = null);

(statearr_29762_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (2))){
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29757__$1,(4),jobs);
} else {
if((state_val_29758 === (3))){
var inst_29755 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29757__$1,inst_29755);
} else {
if((state_val_29758 === (4))){
var inst_29747 = (state_29757[(2)]);
var inst_29748 = process(inst_29747);
var state_29757__$1 = state_29757;
if(cljs.core.truth_(inst_29748)){
var statearr_29763_32568 = state_29757__$1;
(statearr_29763_32568[(1)] = (5));

} else {
var statearr_29764_32570 = state_29757__$1;
(statearr_29764_32570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (5))){
var state_29757__$1 = state_29757;
var statearr_29765_32571 = state_29757__$1;
(statearr_29765_32571[(2)] = null);

(statearr_29765_32571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (6))){
var state_29757__$1 = state_29757;
var statearr_29766_32572 = state_29757__$1;
(statearr_29766_32572[(2)] = null);

(statearr_29766_32572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (7))){
var inst_29753 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29768_32573 = state_29757__$1;
(statearr_29768_32573[(2)] = inst_29753);

(statearr_29768_32573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32560,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
;
return ((function (__32560,switch__29137__auto__,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1 = (function (state_29757){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29757);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29770){var ex__29141__auto__ = e29770;
var statearr_29771_32574 = state_29757;
(statearr_29771_32574[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29757[(4)]))){
var statearr_29772_32575 = state_29757;
(statearr_29772_32575[(1)] = cljs.core.first((state_29757[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32576 = state_29757;
state_29757 = G__32576;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = function(state_29757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1.call(this,state_29757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__;
})()
;})(__32560,switch__29137__auto__,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
})();
var state__29343__auto__ = (function (){var statearr_29773 = f__29342__auto__();
(statearr_29773[(6)] = c__29341__auto___32564);

return statearr_29773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
});})(__32560,c__29341__auto___32564,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
);


break;
case "async":
var c__29341__auto___32578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32560,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = ((function (__32560,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function (state_29790){
var state_val_29791 = (state_29790[(1)]);
if((state_val_29791 === (1))){
var state_29790__$1 = state_29790;
var statearr_29792_32579 = state_29790__$1;
(statearr_29792_32579[(2)] = null);

(statearr_29792_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (2))){
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29790__$1,(4),jobs);
} else {
if((state_val_29791 === (3))){
var inst_29788 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29790__$1,inst_29788);
} else {
if((state_val_29791 === (4))){
var inst_29779 = (state_29790[(2)]);
var inst_29780 = async(inst_29779);
var state_29790__$1 = state_29790;
if(cljs.core.truth_(inst_29780)){
var statearr_29797_32581 = state_29790__$1;
(statearr_29797_32581[(1)] = (5));

} else {
var statearr_29798_32582 = state_29790__$1;
(statearr_29798_32582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (5))){
var state_29790__$1 = state_29790;
var statearr_29799_32583 = state_29790__$1;
(statearr_29799_32583[(2)] = null);

(statearr_29799_32583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (6))){
var state_29790__$1 = state_29790;
var statearr_29802_32584 = state_29790__$1;
(statearr_29802_32584[(2)] = null);

(statearr_29802_32584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29791 === (7))){
var inst_29786 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
var statearr_29803_32585 = state_29790__$1;
(statearr_29803_32585[(2)] = inst_29786);

(statearr_29803_32585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32560,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
;
return ((function (__32560,switch__29137__auto__,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_29804 = [null,null,null,null,null,null,null];
(statearr_29804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__);

(statearr_29804[(1)] = (1));

return statearr_29804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1 = (function (state_29790){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29790);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29805){var ex__29141__auto__ = e29805;
var statearr_29806_32586 = state_29790;
(statearr_29806_32586[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29790[(4)]))){
var statearr_29807_32587 = state_29790;
(statearr_29807_32587[(1)] = cljs.core.first((state_29790[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32592 = state_29790;
state_29790 = G__32592;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = function(state_29790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1.call(this,state_29790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__;
})()
;})(__32560,switch__29137__auto__,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
})();
var state__29343__auto__ = (function (){var statearr_29808 = f__29342__auto__();
(statearr_29808[(6)] = c__29341__auto___32578);

return statearr_29808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
});})(__32560,c__29341__auto___32578,G__29744_32561,G__29744_32562__$1,n__4706__auto___32559,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29744_32562__$1)].join('')));

}

var G__32598 = (__32560 + (1));
__32560 = G__32598;
continue;
} else {
}
break;
}

var c__29341__auto___32599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_29830){
var state_val_29831 = (state_29830[(1)]);
if((state_val_29831 === (7))){
var inst_29826 = (state_29830[(2)]);
var state_29830__$1 = state_29830;
var statearr_29836_32605 = state_29830__$1;
(statearr_29836_32605[(2)] = inst_29826);

(statearr_29836_32605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (1))){
var state_29830__$1 = state_29830;
var statearr_29837_32606 = state_29830__$1;
(statearr_29837_32606[(2)] = null);

(statearr_29837_32606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (4))){
var inst_29811 = (state_29830[(7)]);
var inst_29811__$1 = (state_29830[(2)]);
var inst_29812 = (inst_29811__$1 == null);
var state_29830__$1 = (function (){var statearr_29838 = state_29830;
(statearr_29838[(7)] = inst_29811__$1);

return statearr_29838;
})();
if(cljs.core.truth_(inst_29812)){
var statearr_29848_32607 = state_29830__$1;
(statearr_29848_32607[(1)] = (5));

} else {
var statearr_29849_32608 = state_29830__$1;
(statearr_29849_32608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (6))){
var inst_29816 = (state_29830[(8)]);
var inst_29811 = (state_29830[(7)]);
var inst_29816__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29818 = [inst_29811,inst_29816__$1];
var inst_29819 = (new cljs.core.PersistentVector(null,2,(5),inst_29817,inst_29818,null));
var state_29830__$1 = (function (){var statearr_29851 = state_29830;
(statearr_29851[(8)] = inst_29816__$1);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29830__$1,(8),jobs,inst_29819);
} else {
if((state_val_29831 === (3))){
var inst_29828 = (state_29830[(2)]);
var state_29830__$1 = state_29830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29830__$1,inst_29828);
} else {
if((state_val_29831 === (2))){
var state_29830__$1 = state_29830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29830__$1,(4),from);
} else {
if((state_val_29831 === (9))){
var inst_29823 = (state_29830[(2)]);
var state_29830__$1 = (function (){var statearr_29852 = state_29830;
(statearr_29852[(9)] = inst_29823);

return statearr_29852;
})();
var statearr_29853_32613 = state_29830__$1;
(statearr_29853_32613[(2)] = null);

(statearr_29853_32613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (5))){
var inst_29814 = cljs.core.async.close_BANG_(jobs);
var state_29830__$1 = state_29830;
var statearr_29854_32615 = state_29830__$1;
(statearr_29854_32615[(2)] = inst_29814);

(statearr_29854_32615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (8))){
var inst_29816 = (state_29830[(8)]);
var inst_29821 = (state_29830[(2)]);
var state_29830__$1 = (function (){var statearr_29858 = state_29830;
(statearr_29858[(10)] = inst_29821);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29830__$1,(9),results,inst_29816);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_29868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__);

(statearr_29868[(1)] = (1));

return statearr_29868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1 = (function (state_29830){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29830);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29879){var ex__29141__auto__ = e29879;
var statearr_29883_32616 = state_29830;
(statearr_29883_32616[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29830[(4)]))){
var statearr_29895_32617 = state_29830;
(statearr_29895_32617[(1)] = cljs.core.first((state_29830[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32618 = state_29830;
state_29830 = G__32618;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = function(state_29830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1.call(this,state_29830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_29899 = f__29342__auto__();
(statearr_29899[(6)] = c__29341__auto___32599);

return statearr_29899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


var c__29341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_29943){
var state_val_29944 = (state_29943[(1)]);
if((state_val_29944 === (7))){
var inst_29936 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29948_32619 = state_29943__$1;
(statearr_29948_32619[(2)] = inst_29936);

(statearr_29948_32619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (20))){
var state_29943__$1 = state_29943;
var statearr_29949_32620 = state_29943__$1;
(statearr_29949_32620[(2)] = null);

(statearr_29949_32620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (1))){
var state_29943__$1 = state_29943;
var statearr_29950_32621 = state_29943__$1;
(statearr_29950_32621[(2)] = null);

(statearr_29950_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (4))){
var inst_29902 = (state_29943[(7)]);
var inst_29902__$1 = (state_29943[(2)]);
var inst_29903 = (inst_29902__$1 == null);
var state_29943__$1 = (function (){var statearr_29951 = state_29943;
(statearr_29951[(7)] = inst_29902__$1);

return statearr_29951;
})();
if(cljs.core.truth_(inst_29903)){
var statearr_29952_32624 = state_29943__$1;
(statearr_29952_32624[(1)] = (5));

} else {
var statearr_29953_32626 = state_29943__$1;
(statearr_29953_32626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (15))){
var inst_29915 = (state_29943[(8)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29943__$1,(18),to,inst_29915);
} else {
if((state_val_29944 === (21))){
var inst_29931 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29954_32627 = state_29943__$1;
(statearr_29954_32627[(2)] = inst_29931);

(statearr_29954_32627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (13))){
var inst_29933 = (state_29943[(2)]);
var state_29943__$1 = (function (){var statearr_29955 = state_29943;
(statearr_29955[(9)] = inst_29933);

return statearr_29955;
})();
var statearr_29956_32628 = state_29943__$1;
(statearr_29956_32628[(2)] = null);

(statearr_29956_32628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (6))){
var inst_29902 = (state_29943[(7)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29943__$1,(11),inst_29902);
} else {
if((state_val_29944 === (17))){
var inst_29925 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
if(cljs.core.truth_(inst_29925)){
var statearr_29962_32629 = state_29943__$1;
(statearr_29962_32629[(1)] = (19));

} else {
var statearr_29963_32630 = state_29943__$1;
(statearr_29963_32630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (3))){
var inst_29939 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29943__$1,inst_29939);
} else {
if((state_val_29944 === (12))){
var inst_29912 = (state_29943[(10)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29943__$1,(14),inst_29912);
} else {
if((state_val_29944 === (2))){
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29943__$1,(4),results);
} else {
if((state_val_29944 === (19))){
var state_29943__$1 = state_29943;
var statearr_29964_32631 = state_29943__$1;
(statearr_29964_32631[(2)] = null);

(statearr_29964_32631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (11))){
var inst_29912 = (state_29943[(2)]);
var state_29943__$1 = (function (){var statearr_29965 = state_29943;
(statearr_29965[(10)] = inst_29912);

return statearr_29965;
})();
var statearr_29966_32632 = state_29943__$1;
(statearr_29966_32632[(2)] = null);

(statearr_29966_32632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (9))){
var state_29943__$1 = state_29943;
var statearr_29967_32633 = state_29943__$1;
(statearr_29967_32633[(2)] = null);

(statearr_29967_32633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (5))){
var state_29943__$1 = state_29943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29969_32634 = state_29943__$1;
(statearr_29969_32634[(1)] = (8));

} else {
var statearr_29971_32635 = state_29943__$1;
(statearr_29971_32635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (14))){
var inst_29917 = (state_29943[(11)]);
var inst_29915 = (state_29943[(8)]);
var inst_29915__$1 = (state_29943[(2)]);
var inst_29916 = (inst_29915__$1 == null);
var inst_29917__$1 = cljs.core.not(inst_29916);
var state_29943__$1 = (function (){var statearr_29972 = state_29943;
(statearr_29972[(11)] = inst_29917__$1);

(statearr_29972[(8)] = inst_29915__$1);

return statearr_29972;
})();
if(inst_29917__$1){
var statearr_29976_32637 = state_29943__$1;
(statearr_29976_32637[(1)] = (15));

} else {
var statearr_29977_32638 = state_29943__$1;
(statearr_29977_32638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (16))){
var inst_29917 = (state_29943[(11)]);
var state_29943__$1 = state_29943;
var statearr_29978_32643 = state_29943__$1;
(statearr_29978_32643[(2)] = inst_29917);

(statearr_29978_32643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (10))){
var inst_29909 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29979_32644 = state_29943__$1;
(statearr_29979_32644[(2)] = inst_29909);

(statearr_29979_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (18))){
var inst_29920 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29984_32648 = state_29943__$1;
(statearr_29984_32648[(2)] = inst_29920);

(statearr_29984_32648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (8))){
var inst_29906 = cljs.core.async.close_BANG_(to);
var state_29943__$1 = state_29943;
var statearr_29985_32649 = state_29943__$1;
(statearr_29985_32649[(2)] = inst_29906);

(statearr_29985_32649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_29987 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__);

(statearr_29987[(1)] = (1));

return statearr_29987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1 = (function (state_29943){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_29943);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e29989){var ex__29141__auto__ = e29989;
var statearr_29990_32650 = state_29943;
(statearr_29990_32650[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_29943[(4)]))){
var statearr_29991_32654 = state_29943;
(statearr_29991_32654[(1)] = cljs.core.first((state_29943[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_29943;
state_29943 = G__32655;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__ = function(state_29943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1.call(this,state_29943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_29992 = f__29342__auto__();
(statearr_29992[(6)] = c__29341__auto__);

return statearr_29992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

return c__29341__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29994 = arguments.length;
switch (G__29994) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29996 = arguments.length;
switch (G__29996) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30004 = arguments.length;
switch (G__30004) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29341__auto___32679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30041){
var state_val_30042 = (state_30041[(1)]);
if((state_val_30042 === (7))){
var inst_30037 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30045_32682 = state_30041__$1;
(statearr_30045_32682[(2)] = inst_30037);

(statearr_30045_32682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (1))){
var state_30041__$1 = state_30041;
var statearr_30046_32684 = state_30041__$1;
(statearr_30046_32684[(2)] = null);

(statearr_30046_32684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (4))){
var inst_30016 = (state_30041[(7)]);
var inst_30016__$1 = (state_30041[(2)]);
var inst_30017 = (inst_30016__$1 == null);
var state_30041__$1 = (function (){var statearr_30047 = state_30041;
(statearr_30047[(7)] = inst_30016__$1);

return statearr_30047;
})();
if(cljs.core.truth_(inst_30017)){
var statearr_30048_32687 = state_30041__$1;
(statearr_30048_32687[(1)] = (5));

} else {
var statearr_30049_32691 = state_30041__$1;
(statearr_30049_32691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (13))){
var state_30041__$1 = state_30041;
var statearr_30050_32692 = state_30041__$1;
(statearr_30050_32692[(2)] = null);

(statearr_30050_32692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (6))){
var inst_30016 = (state_30041[(7)]);
var inst_30022 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30016) : p.call(null,inst_30016));
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30022)){
var statearr_30051_32693 = state_30041__$1;
(statearr_30051_32693[(1)] = (9));

} else {
var statearr_30052_32694 = state_30041__$1;
(statearr_30052_32694[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (3))){
var inst_30039 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30041__$1,inst_30039);
} else {
if((state_val_30042 === (12))){
var state_30041__$1 = state_30041;
var statearr_30053_32698 = state_30041__$1;
(statearr_30053_32698[(2)] = null);

(statearr_30053_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (2))){
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30041__$1,(4),ch);
} else {
if((state_val_30042 === (11))){
var inst_30016 = (state_30041[(7)]);
var inst_30026 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30041__$1,(8),inst_30026,inst_30016);
} else {
if((state_val_30042 === (9))){
var state_30041__$1 = state_30041;
var statearr_30056_32699 = state_30041__$1;
(statearr_30056_32699[(2)] = tc);

(statearr_30056_32699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (5))){
var inst_30019 = cljs.core.async.close_BANG_(tc);
var inst_30020 = cljs.core.async.close_BANG_(fc);
var state_30041__$1 = (function (){var statearr_30058 = state_30041;
(statearr_30058[(8)] = inst_30019);

return statearr_30058;
})();
var statearr_30059_32704 = state_30041__$1;
(statearr_30059_32704[(2)] = inst_30020);

(statearr_30059_32704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (14))){
var inst_30033 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30064_32705 = state_30041__$1;
(statearr_30064_32705[(2)] = inst_30033);

(statearr_30064_32705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (10))){
var state_30041__$1 = state_30041;
var statearr_30068_32706 = state_30041__$1;
(statearr_30068_32706[(2)] = fc);

(statearr_30068_32706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (8))){
var inst_30028 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30028)){
var statearr_30069_32707 = state_30041__$1;
(statearr_30069_32707[(1)] = (12));

} else {
var statearr_30070_32708 = state_30041__$1;
(statearr_30070_32708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_30074 = [null,null,null,null,null,null,null,null,null];
(statearr_30074[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_30074[(1)] = (1));

return statearr_30074;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_30041){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30041);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30075){var ex__29141__auto__ = e30075;
var statearr_30076_32709 = state_30041;
(statearr_30076_32709[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30041[(4)]))){
var statearr_30077_32710 = state_30041;
(statearr_30077_32710[(1)] = cljs.core.first((state_30041[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32712 = state_30041;
state_30041 = G__32712;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_30041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_30041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30084 = f__29342__auto__();
(statearr_30084[(6)] = c__29341__auto___32679);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30114){
var state_val_30115 = (state_30114[(1)]);
if((state_val_30115 === (7))){
var inst_30110 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30121_32714 = state_30114__$1;
(statearr_30121_32714[(2)] = inst_30110);

(statearr_30121_32714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (1))){
var inst_30091 = init;
var inst_30092 = inst_30091;
var state_30114__$1 = (function (){var statearr_30126 = state_30114;
(statearr_30126[(7)] = inst_30092);

return statearr_30126;
})();
var statearr_30127_32715 = state_30114__$1;
(statearr_30127_32715[(2)] = null);

(statearr_30127_32715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (4))){
var inst_30096 = (state_30114[(8)]);
var inst_30096__$1 = (state_30114[(2)]);
var inst_30097 = (inst_30096__$1 == null);
var state_30114__$1 = (function (){var statearr_30130 = state_30114;
(statearr_30130[(8)] = inst_30096__$1);

return statearr_30130;
})();
if(cljs.core.truth_(inst_30097)){
var statearr_30131_32716 = state_30114__$1;
(statearr_30131_32716[(1)] = (5));

} else {
var statearr_30132_32717 = state_30114__$1;
(statearr_30132_32717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (6))){
var inst_30096 = (state_30114[(8)]);
var inst_30092 = (state_30114[(7)]);
var inst_30100 = (state_30114[(9)]);
var inst_30100__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30092,inst_30096) : f.call(null,inst_30092,inst_30096));
var inst_30101 = cljs.core.reduced_QMARK_(inst_30100__$1);
var state_30114__$1 = (function (){var statearr_30135 = state_30114;
(statearr_30135[(9)] = inst_30100__$1);

return statearr_30135;
})();
if(inst_30101){
var statearr_30136_32718 = state_30114__$1;
(statearr_30136_32718[(1)] = (8));

} else {
var statearr_30137_32719 = state_30114__$1;
(statearr_30137_32719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (3))){
var inst_30112 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30114__$1,inst_30112);
} else {
if((state_val_30115 === (2))){
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30114__$1,(4),ch);
} else {
if((state_val_30115 === (9))){
var inst_30100 = (state_30114[(9)]);
var inst_30092 = inst_30100;
var state_30114__$1 = (function (){var statearr_30142 = state_30114;
(statearr_30142[(7)] = inst_30092);

return statearr_30142;
})();
var statearr_30144_32720 = state_30114__$1;
(statearr_30144_32720[(2)] = null);

(statearr_30144_32720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (5))){
var inst_30092 = (state_30114[(7)]);
var state_30114__$1 = state_30114;
var statearr_30148_32721 = state_30114__$1;
(statearr_30148_32721[(2)] = inst_30092);

(statearr_30148_32721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (10))){
var inst_30108 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30149_32723 = state_30114__$1;
(statearr_30149_32723[(2)] = inst_30108);

(statearr_30149_32723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (8))){
var inst_30100 = (state_30114[(9)]);
var inst_30104 = cljs.core.deref(inst_30100);
var state_30114__$1 = state_30114;
var statearr_30150_32724 = state_30114__$1;
(statearr_30150_32724[(2)] = inst_30104);

(statearr_30150_32724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29138__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29138__auto____0 = (function (){
var statearr_30151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30151[(0)] = cljs$core$async$reduce_$_state_machine__29138__auto__);

(statearr_30151[(1)] = (1));

return statearr_30151;
});
var cljs$core$async$reduce_$_state_machine__29138__auto____1 = (function (state_30114){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30114);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30152){var ex__29141__auto__ = e30152;
var statearr_30153_32726 = state_30114;
(statearr_30153_32726[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30114[(4)]))){
var statearr_30154_32727 = state_30114;
(statearr_30154_32727[(1)] = cljs.core.first((state_30114[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_30114;
state_30114 = G__32728;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29138__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29138__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29138__auto____0;
cljs$core$async$reduce_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29138__auto____1;
return cljs$core$async$reduce_$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30160 = f__29342__auto__();
(statearr_30160[(6)] = c__29341__auto__);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

return c__29341__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30166){
var state_val_30167 = (state_30166[(1)]);
if((state_val_30167 === (1))){
var inst_30161 = cljs.core.async.reduce(f__$1,init,ch);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30166__$1,(2),inst_30161);
} else {
if((state_val_30167 === (2))){
var inst_30163 = (state_30166[(2)]);
var inst_30164 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30163) : f__$1.call(null,inst_30163));
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30166__$1,inst_30164);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29138__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29138__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null];
(statearr_30170[(0)] = cljs$core$async$transduce_$_state_machine__29138__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var cljs$core$async$transduce_$_state_machine__29138__auto____1 = (function (state_30166){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30166);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30173){var ex__29141__auto__ = e30173;
var statearr_30176_32730 = state_30166;
(statearr_30176_32730[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30166[(4)]))){
var statearr_30178_32731 = state_30166;
(statearr_30178_32731[(1)] = cljs.core.first((state_30166[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_30166;
state_30166 = G__32732;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29138__auto__ = function(state_30166){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29138__auto____1.call(this,state_30166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29138__auto____0;
cljs$core$async$transduce_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29138__auto____1;
return cljs$core$async$transduce_$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30179 = f__29342__auto__();
(statearr_30179[(6)] = c__29341__auto__);

return statearr_30179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

return c__29341__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30181 = arguments.length;
switch (G__30181) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30210){
var state_val_30211 = (state_30210[(1)]);
if((state_val_30211 === (7))){
var inst_30192 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30218_32735 = state_30210__$1;
(statearr_30218_32735[(2)] = inst_30192);

(statearr_30218_32735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (1))){
var inst_30186 = cljs.core.seq(coll);
var inst_30187 = inst_30186;
var state_30210__$1 = (function (){var statearr_30225 = state_30210;
(statearr_30225[(7)] = inst_30187);

return statearr_30225;
})();
var statearr_30230_32736 = state_30210__$1;
(statearr_30230_32736[(2)] = null);

(statearr_30230_32736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (4))){
var inst_30187 = (state_30210[(7)]);
var inst_30190 = cljs.core.first(inst_30187);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30210__$1,(7),ch,inst_30190);
} else {
if((state_val_30211 === (13))){
var inst_30204 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30240_32739 = state_30210__$1;
(statearr_30240_32739[(2)] = inst_30204);

(statearr_30240_32739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (6))){
var inst_30195 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
if(cljs.core.truth_(inst_30195)){
var statearr_30241_32744 = state_30210__$1;
(statearr_30241_32744[(1)] = (8));

} else {
var statearr_30244_32745 = state_30210__$1;
(statearr_30244_32745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (3))){
var inst_30208 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30210__$1,inst_30208);
} else {
if((state_val_30211 === (12))){
var state_30210__$1 = state_30210;
var statearr_30257_32746 = state_30210__$1;
(statearr_30257_32746[(2)] = null);

(statearr_30257_32746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (2))){
var inst_30187 = (state_30210[(7)]);
var state_30210__$1 = state_30210;
if(cljs.core.truth_(inst_30187)){
var statearr_30258_32747 = state_30210__$1;
(statearr_30258_32747[(1)] = (4));

} else {
var statearr_30259_32749 = state_30210__$1;
(statearr_30259_32749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (11))){
var inst_30201 = cljs.core.async.close_BANG_(ch);
var state_30210__$1 = state_30210;
var statearr_30262_32750 = state_30210__$1;
(statearr_30262_32750[(2)] = inst_30201);

(statearr_30262_32750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (9))){
var state_30210__$1 = state_30210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30263_32751 = state_30210__$1;
(statearr_30263_32751[(1)] = (11));

} else {
var statearr_30264_32752 = state_30210__$1;
(statearr_30264_32752[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (5))){
var inst_30187 = (state_30210[(7)]);
var state_30210__$1 = state_30210;
var statearr_30265_32753 = state_30210__$1;
(statearr_30265_32753[(2)] = inst_30187);

(statearr_30265_32753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (10))){
var inst_30206 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30266_32757 = state_30210__$1;
(statearr_30266_32757[(2)] = inst_30206);

(statearr_30266_32757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (8))){
var inst_30187 = (state_30210[(7)]);
var inst_30197 = cljs.core.next(inst_30187);
var inst_30187__$1 = inst_30197;
var state_30210__$1 = (function (){var statearr_30275 = state_30210;
(statearr_30275[(7)] = inst_30187__$1);

return statearr_30275;
})();
var statearr_30278_32763 = state_30210__$1;
(statearr_30278_32763[(2)] = null);

(statearr_30278_32763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null,null];
(statearr_30296[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_30210){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30210);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30297){var ex__29141__auto__ = e30297;
var statearr_30298_32765 = state_30210;
(statearr_30298_32765[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30210[(4)]))){
var statearr_30299_32768 = state_30210;
(statearr_30299_32768[(1)] = cljs.core.first((state_30210[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32769 = state_30210;
state_30210 = G__32769;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_30210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_30210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30302 = f__29342__auto__();
(statearr_30302[(6)] = c__29341__auto__);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

return c__29341__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30313 = arguments.length;
switch (G__30313) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32771 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32771(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32777 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32777(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32794 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32794(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32798 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32798(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30419 = (function (ch,cs,meta30420){
this.ch = ch;
this.cs = cs;
this.meta30420 = meta30420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30421,meta30420__$1){
var self__ = this;
var _30421__$1 = this;
return (new cljs.core.async.t_cljs$core$async30419(self__.ch,self__.cs,meta30420__$1));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30421){
var self__ = this;
var _30421__$1 = this;
return self__.meta30420;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30420","meta30420",1269398590,null)], null);
}));

(cljs.core.async.t_cljs$core$async30419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30419");

(cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30419.
 */
cljs.core.async.__GT_t_cljs$core$async30419 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30419(ch__$1,cs__$1,meta30420){
return (new cljs.core.async.t_cljs$core$async30419(ch__$1,cs__$1,meta30420));
});

}

return (new cljs.core.async.t_cljs$core$async30419(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29341__auto___32816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30584){
var state_val_30585 = (state_30584[(1)]);
if((state_val_30585 === (7))){
var inst_30580 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30590_32817 = state_30584__$1;
(statearr_30590_32817[(2)] = inst_30580);

(statearr_30590_32817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (20))){
var inst_30472 = (state_30584[(7)]);
var inst_30490 = cljs.core.first(inst_30472);
var inst_30491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30490,(0),null);
var inst_30492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30490,(1),null);
var state_30584__$1 = (function (){var statearr_30592 = state_30584;
(statearr_30592[(8)] = inst_30491);

return statearr_30592;
})();
if(cljs.core.truth_(inst_30492)){
var statearr_30593_32818 = state_30584__$1;
(statearr_30593_32818[(1)] = (22));

} else {
var statearr_30594_32819 = state_30584__$1;
(statearr_30594_32819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (27))){
var inst_30522 = (state_30584[(9)]);
var inst_30529 = (state_30584[(10)]);
var inst_30441 = (state_30584[(11)]);
var inst_30520 = (state_30584[(12)]);
var inst_30529__$1 = cljs.core._nth(inst_30520,inst_30522);
var inst_30530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30529__$1,inst_30441,done);
var state_30584__$1 = (function (){var statearr_30601 = state_30584;
(statearr_30601[(10)] = inst_30529__$1);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30602_32828 = state_30584__$1;
(statearr_30602_32828[(1)] = (30));

} else {
var statearr_30603_32829 = state_30584__$1;
(statearr_30603_32829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (1))){
var state_30584__$1 = state_30584;
var statearr_30604_32830 = state_30584__$1;
(statearr_30604_32830[(2)] = null);

(statearr_30604_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (24))){
var inst_30472 = (state_30584[(7)]);
var inst_30497 = (state_30584[(2)]);
var inst_30498 = cljs.core.next(inst_30472);
var inst_30450 = inst_30498;
var inst_30451 = null;
var inst_30452 = (0);
var inst_30453 = (0);
var state_30584__$1 = (function (){var statearr_30605 = state_30584;
(statearr_30605[(13)] = inst_30452);

(statearr_30605[(14)] = inst_30451);

(statearr_30605[(15)] = inst_30497);

(statearr_30605[(16)] = inst_30453);

(statearr_30605[(17)] = inst_30450);

return statearr_30605;
})();
var statearr_30606_32831 = state_30584__$1;
(statearr_30606_32831[(2)] = null);

(statearr_30606_32831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (39))){
var state_30584__$1 = state_30584;
var statearr_30615_32832 = state_30584__$1;
(statearr_30615_32832[(2)] = null);

(statearr_30615_32832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (4))){
var inst_30441 = (state_30584[(11)]);
var inst_30441__$1 = (state_30584[(2)]);
var inst_30442 = (inst_30441__$1 == null);
var state_30584__$1 = (function (){var statearr_30616 = state_30584;
(statearr_30616[(11)] = inst_30441__$1);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30442)){
var statearr_30617_32834 = state_30584__$1;
(statearr_30617_32834[(1)] = (5));

} else {
var statearr_30618_32835 = state_30584__$1;
(statearr_30618_32835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (15))){
var inst_30452 = (state_30584[(13)]);
var inst_30451 = (state_30584[(14)]);
var inst_30453 = (state_30584[(16)]);
var inst_30450 = (state_30584[(17)]);
var inst_30468 = (state_30584[(2)]);
var inst_30469 = (inst_30453 + (1));
var tmp30611 = inst_30452;
var tmp30612 = inst_30451;
var tmp30613 = inst_30450;
var inst_30450__$1 = tmp30613;
var inst_30451__$1 = tmp30612;
var inst_30452__$1 = tmp30611;
var inst_30453__$1 = inst_30469;
var state_30584__$1 = (function (){var statearr_30619 = state_30584;
(statearr_30619[(13)] = inst_30452__$1);

(statearr_30619[(14)] = inst_30451__$1);

(statearr_30619[(16)] = inst_30453__$1);

(statearr_30619[(18)] = inst_30468);

(statearr_30619[(17)] = inst_30450__$1);

return statearr_30619;
})();
var statearr_30620_32837 = state_30584__$1;
(statearr_30620_32837[(2)] = null);

(statearr_30620_32837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (21))){
var inst_30501 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30627_32838 = state_30584__$1;
(statearr_30627_32838[(2)] = inst_30501);

(statearr_30627_32838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (31))){
var inst_30529 = (state_30584[(10)]);
var inst_30534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30529);
var state_30584__$1 = state_30584;
var statearr_30634_32839 = state_30584__$1;
(statearr_30634_32839[(2)] = inst_30534);

(statearr_30634_32839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (32))){
var inst_30522 = (state_30584[(9)]);
var inst_30519 = (state_30584[(19)]);
var inst_30520 = (state_30584[(12)]);
var inst_30521 = (state_30584[(20)]);
var inst_30537 = (state_30584[(2)]);
var inst_30538 = (inst_30522 + (1));
var tmp30624 = inst_30519;
var tmp30625 = inst_30520;
var tmp30626 = inst_30521;
var inst_30519__$1 = tmp30624;
var inst_30520__$1 = tmp30625;
var inst_30521__$1 = tmp30626;
var inst_30522__$1 = inst_30538;
var state_30584__$1 = (function (){var statearr_30635 = state_30584;
(statearr_30635[(9)] = inst_30522__$1);

(statearr_30635[(21)] = inst_30537);

(statearr_30635[(19)] = inst_30519__$1);

(statearr_30635[(12)] = inst_30520__$1);

(statearr_30635[(20)] = inst_30521__$1);

return statearr_30635;
})();
var statearr_30637_32846 = state_30584__$1;
(statearr_30637_32846[(2)] = null);

(statearr_30637_32846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (40))){
var inst_30552 = (state_30584[(22)]);
var inst_30556 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30552);
var state_30584__$1 = state_30584;
var statearr_30642_32849 = state_30584__$1;
(statearr_30642_32849[(2)] = inst_30556);

(statearr_30642_32849[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (33))){
var inst_30541 = (state_30584[(23)]);
var inst_30543 = cljs.core.chunked_seq_QMARK_(inst_30541);
var state_30584__$1 = state_30584;
if(inst_30543){
var statearr_30644_32850 = state_30584__$1;
(statearr_30644_32850[(1)] = (36));

} else {
var statearr_30645_32852 = state_30584__$1;
(statearr_30645_32852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (13))){
var inst_30462 = (state_30584[(24)]);
var inst_30465 = cljs.core.async.close_BANG_(inst_30462);
var state_30584__$1 = state_30584;
var statearr_30646_32854 = state_30584__$1;
(statearr_30646_32854[(2)] = inst_30465);

(statearr_30646_32854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (22))){
var inst_30491 = (state_30584[(8)]);
var inst_30494 = cljs.core.async.close_BANG_(inst_30491);
var state_30584__$1 = state_30584;
var statearr_30655_32855 = state_30584__$1;
(statearr_30655_32855[(2)] = inst_30494);

(statearr_30655_32855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (36))){
var inst_30541 = (state_30584[(23)]);
var inst_30547 = cljs.core.chunk_first(inst_30541);
var inst_30548 = cljs.core.chunk_rest(inst_30541);
var inst_30549 = cljs.core.count(inst_30547);
var inst_30519 = inst_30548;
var inst_30520 = inst_30547;
var inst_30521 = inst_30549;
var inst_30522 = (0);
var state_30584__$1 = (function (){var statearr_30656 = state_30584;
(statearr_30656[(9)] = inst_30522);

(statearr_30656[(19)] = inst_30519);

(statearr_30656[(12)] = inst_30520);

(statearr_30656[(20)] = inst_30521);

return statearr_30656;
})();
var statearr_30657_32856 = state_30584__$1;
(statearr_30657_32856[(2)] = null);

(statearr_30657_32856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (41))){
var inst_30541 = (state_30584[(23)]);
var inst_30558 = (state_30584[(2)]);
var inst_30559 = cljs.core.next(inst_30541);
var inst_30519 = inst_30559;
var inst_30520 = null;
var inst_30521 = (0);
var inst_30522 = (0);
var state_30584__$1 = (function (){var statearr_30658 = state_30584;
(statearr_30658[(9)] = inst_30522);

(statearr_30658[(19)] = inst_30519);

(statearr_30658[(12)] = inst_30520);

(statearr_30658[(20)] = inst_30521);

(statearr_30658[(25)] = inst_30558);

return statearr_30658;
})();
var statearr_30659_32857 = state_30584__$1;
(statearr_30659_32857[(2)] = null);

(statearr_30659_32857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (43))){
var state_30584__$1 = state_30584;
var statearr_30660_32858 = state_30584__$1;
(statearr_30660_32858[(2)] = null);

(statearr_30660_32858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (29))){
var inst_30567 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30661_32859 = state_30584__$1;
(statearr_30661_32859[(2)] = inst_30567);

(statearr_30661_32859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (44))){
var inst_30576 = (state_30584[(2)]);
var state_30584__$1 = (function (){var statearr_30662 = state_30584;
(statearr_30662[(26)] = inst_30576);

return statearr_30662;
})();
var statearr_30663_32864 = state_30584__$1;
(statearr_30663_32864[(2)] = null);

(statearr_30663_32864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (6))){
var inst_30511 = (state_30584[(27)]);
var inst_30510 = cljs.core.deref(cs);
var inst_30511__$1 = cljs.core.keys(inst_30510);
var inst_30512 = cljs.core.count(inst_30511__$1);
var inst_30513 = cljs.core.reset_BANG_(dctr,inst_30512);
var inst_30518 = cljs.core.seq(inst_30511__$1);
var inst_30519 = inst_30518;
var inst_30520 = null;
var inst_30521 = (0);
var inst_30522 = (0);
var state_30584__$1 = (function (){var statearr_30664 = state_30584;
(statearr_30664[(9)] = inst_30522);

(statearr_30664[(19)] = inst_30519);

(statearr_30664[(27)] = inst_30511__$1);

(statearr_30664[(12)] = inst_30520);

(statearr_30664[(20)] = inst_30521);

(statearr_30664[(28)] = inst_30513);

return statearr_30664;
})();
var statearr_30666_32869 = state_30584__$1;
(statearr_30666_32869[(2)] = null);

(statearr_30666_32869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (28))){
var inst_30519 = (state_30584[(19)]);
var inst_30541 = (state_30584[(23)]);
var inst_30541__$1 = cljs.core.seq(inst_30519);
var state_30584__$1 = (function (){var statearr_30671 = state_30584;
(statearr_30671[(23)] = inst_30541__$1);

return statearr_30671;
})();
if(inst_30541__$1){
var statearr_30672_32880 = state_30584__$1;
(statearr_30672_32880[(1)] = (33));

} else {
var statearr_30673_32881 = state_30584__$1;
(statearr_30673_32881[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (25))){
var inst_30522 = (state_30584[(9)]);
var inst_30521 = (state_30584[(20)]);
var inst_30524 = (inst_30522 < inst_30521);
var inst_30525 = inst_30524;
var state_30584__$1 = state_30584;
if(cljs.core.truth_(inst_30525)){
var statearr_30675_32884 = state_30584__$1;
(statearr_30675_32884[(1)] = (27));

} else {
var statearr_30676_32885 = state_30584__$1;
(statearr_30676_32885[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (34))){
var state_30584__$1 = state_30584;
var statearr_30677_32886 = state_30584__$1;
(statearr_30677_32886[(2)] = null);

(statearr_30677_32886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (17))){
var state_30584__$1 = state_30584;
var statearr_30678_32889 = state_30584__$1;
(statearr_30678_32889[(2)] = null);

(statearr_30678_32889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (3))){
var inst_30582 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30584__$1,inst_30582);
} else {
if((state_val_30585 === (12))){
var inst_30506 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30679_32891 = state_30584__$1;
(statearr_30679_32891[(2)] = inst_30506);

(statearr_30679_32891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (2))){
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30584__$1,(4),ch);
} else {
if((state_val_30585 === (23))){
var state_30584__$1 = state_30584;
var statearr_30681_32894 = state_30584__$1;
(statearr_30681_32894[(2)] = null);

(statearr_30681_32894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (35))){
var inst_30565 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30682_32895 = state_30584__$1;
(statearr_30682_32895[(2)] = inst_30565);

(statearr_30682_32895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (19))){
var inst_30472 = (state_30584[(7)]);
var inst_30482 = cljs.core.chunk_first(inst_30472);
var inst_30483 = cljs.core.chunk_rest(inst_30472);
var inst_30484 = cljs.core.count(inst_30482);
var inst_30450 = inst_30483;
var inst_30451 = inst_30482;
var inst_30452 = inst_30484;
var inst_30453 = (0);
var state_30584__$1 = (function (){var statearr_30683 = state_30584;
(statearr_30683[(13)] = inst_30452);

(statearr_30683[(14)] = inst_30451);

(statearr_30683[(16)] = inst_30453);

(statearr_30683[(17)] = inst_30450);

return statearr_30683;
})();
var statearr_30684_32898 = state_30584__$1;
(statearr_30684_32898[(2)] = null);

(statearr_30684_32898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (11))){
var inst_30472 = (state_30584[(7)]);
var inst_30450 = (state_30584[(17)]);
var inst_30472__$1 = cljs.core.seq(inst_30450);
var state_30584__$1 = (function (){var statearr_30685 = state_30584;
(statearr_30685[(7)] = inst_30472__$1);

return statearr_30685;
})();
if(inst_30472__$1){
var statearr_30687_32905 = state_30584__$1;
(statearr_30687_32905[(1)] = (16));

} else {
var statearr_30688_32906 = state_30584__$1;
(statearr_30688_32906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (9))){
var inst_30508 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30689_32911 = state_30584__$1;
(statearr_30689_32911[(2)] = inst_30508);

(statearr_30689_32911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (5))){
var inst_30448 = cljs.core.deref(cs);
var inst_30449 = cljs.core.seq(inst_30448);
var inst_30450 = inst_30449;
var inst_30451 = null;
var inst_30452 = (0);
var inst_30453 = (0);
var state_30584__$1 = (function (){var statearr_30691 = state_30584;
(statearr_30691[(13)] = inst_30452);

(statearr_30691[(14)] = inst_30451);

(statearr_30691[(16)] = inst_30453);

(statearr_30691[(17)] = inst_30450);

return statearr_30691;
})();
var statearr_30692_32912 = state_30584__$1;
(statearr_30692_32912[(2)] = null);

(statearr_30692_32912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (14))){
var state_30584__$1 = state_30584;
var statearr_30693_32913 = state_30584__$1;
(statearr_30693_32913[(2)] = null);

(statearr_30693_32913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (45))){
var inst_30573 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30695_32916 = state_30584__$1;
(statearr_30695_32916[(2)] = inst_30573);

(statearr_30695_32916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (26))){
var inst_30511 = (state_30584[(27)]);
var inst_30569 = (state_30584[(2)]);
var inst_30570 = cljs.core.seq(inst_30511);
var state_30584__$1 = (function (){var statearr_30697 = state_30584;
(statearr_30697[(29)] = inst_30569);

return statearr_30697;
})();
if(inst_30570){
var statearr_30698_32917 = state_30584__$1;
(statearr_30698_32917[(1)] = (42));

} else {
var statearr_30699_32918 = state_30584__$1;
(statearr_30699_32918[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (16))){
var inst_30472 = (state_30584[(7)]);
var inst_30480 = cljs.core.chunked_seq_QMARK_(inst_30472);
var state_30584__$1 = state_30584;
if(inst_30480){
var statearr_30706_32919 = state_30584__$1;
(statearr_30706_32919[(1)] = (19));

} else {
var statearr_30707_32921 = state_30584__$1;
(statearr_30707_32921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (38))){
var inst_30562 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30712_32923 = state_30584__$1;
(statearr_30712_32923[(2)] = inst_30562);

(statearr_30712_32923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (30))){
var state_30584__$1 = state_30584;
var statearr_30713_32925 = state_30584__$1;
(statearr_30713_32925[(2)] = null);

(statearr_30713_32925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (10))){
var inst_30451 = (state_30584[(14)]);
var inst_30453 = (state_30584[(16)]);
var inst_30461 = cljs.core._nth(inst_30451,inst_30453);
var inst_30462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30461,(0),null);
var inst_30463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30461,(1),null);
var state_30584__$1 = (function (){var statearr_30714 = state_30584;
(statearr_30714[(24)] = inst_30462);

return statearr_30714;
})();
if(cljs.core.truth_(inst_30463)){
var statearr_30715_32926 = state_30584__$1;
(statearr_30715_32926[(1)] = (13));

} else {
var statearr_30716_32927 = state_30584__$1;
(statearr_30716_32927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (18))){
var inst_30504 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30720_32932 = state_30584__$1;
(statearr_30720_32932[(2)] = inst_30504);

(statearr_30720_32932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (42))){
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30584__$1,(45),dchan);
} else {
if((state_val_30585 === (37))){
var inst_30441 = (state_30584[(11)]);
var inst_30552 = (state_30584[(22)]);
var inst_30541 = (state_30584[(23)]);
var inst_30552__$1 = cljs.core.first(inst_30541);
var inst_30553 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30552__$1,inst_30441,done);
var state_30584__$1 = (function (){var statearr_30725 = state_30584;
(statearr_30725[(22)] = inst_30552__$1);

return statearr_30725;
})();
if(cljs.core.truth_(inst_30553)){
var statearr_30726_32933 = state_30584__$1;
(statearr_30726_32933[(1)] = (39));

} else {
var statearr_30728_32934 = state_30584__$1;
(statearr_30728_32934[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (8))){
var inst_30452 = (state_30584[(13)]);
var inst_30453 = (state_30584[(16)]);
var inst_30455 = (inst_30453 < inst_30452);
var inst_30456 = inst_30455;
var state_30584__$1 = state_30584;
if(cljs.core.truth_(inst_30456)){
var statearr_30732_32935 = state_30584__$1;
(statearr_30732_32935[(1)] = (10));

} else {
var statearr_30733_32937 = state_30584__$1;
(statearr_30733_32937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29138__auto__ = null;
var cljs$core$async$mult_$_state_machine__29138__auto____0 = (function (){
var statearr_30736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30736[(0)] = cljs$core$async$mult_$_state_machine__29138__auto__);

(statearr_30736[(1)] = (1));

return statearr_30736;
});
var cljs$core$async$mult_$_state_machine__29138__auto____1 = (function (state_30584){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30584);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30738){var ex__29141__auto__ = e30738;
var statearr_30739_32945 = state_30584;
(statearr_30739_32945[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30584[(4)]))){
var statearr_30741_32946 = state_30584;
(statearr_30741_32946[(1)] = cljs.core.first((state_30584[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32947 = state_30584;
state_30584 = G__32947;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29138__auto__ = function(state_30584){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29138__auto____1.call(this,state_30584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29138__auto____0;
cljs$core$async$mult_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29138__auto____1;
return cljs$core$async$mult_$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30742 = f__29342__auto__();
(statearr_30742[(6)] = c__29341__auto___32816);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30744 = arguments.length;
switch (G__30744) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32952 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32952(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32953 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32953(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32964 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32964(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32975 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32975(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32983 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32983(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32993 = arguments.length;
var i__4830__auto___32995 = (0);
while(true){
if((i__4830__auto___32995 < len__4829__auto___32993)){
args__4835__auto__.push((arguments[i__4830__auto___32995]));

var G__33000 = (i__4830__auto___32995 + (1));
i__4830__auto___32995 = G__33000;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30780){
var map__30781 = p__30780;
var map__30781__$1 = cljs.core.__destructure_map(map__30781);
var opts = map__30781__$1;
var statearr_30782_33003 = state;
(statearr_30782_33003[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30794_33005 = state;
(statearr_30794_33005[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30798_33006 = state;
(statearr_30798_33006[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30773){
var G__30774 = cljs.core.first(seq30773);
var seq30773__$1 = cljs.core.next(seq30773);
var G__30777 = cljs.core.first(seq30773__$1);
var seq30773__$2 = cljs.core.next(seq30773__$1);
var G__30778 = cljs.core.first(seq30773__$2);
var seq30773__$3 = cljs.core.next(seq30773__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30774,G__30777,G__30778,seq30773__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30815 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30816){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30816 = meta30816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30817,meta30816__$1){
var self__ = this;
var _30817__$1 = this;
return (new cljs.core.async.t_cljs$core$async30815(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30816__$1));
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30817){
var self__ = this;
var _30817__$1 = this;
return self__.meta30816;
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30816","meta30816",-564720328,null)], null);
}));

(cljs.core.async.t_cljs$core$async30815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30815");

(cljs.core.async.t_cljs$core$async30815.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30815.
 */
cljs.core.async.__GT_t_cljs$core$async30815 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30815(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30816){
return (new cljs.core.async.t_cljs$core$async30815(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30816));
});

}

return (new cljs.core.async.t_cljs$core$async30815(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29341__auto___33066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_30909){
var state_val_30910 = (state_30909[(1)]);
if((state_val_30910 === (7))){
var inst_30863 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30863)){
var statearr_30913_33081 = state_30909__$1;
(statearr_30913_33081[(1)] = (8));

} else {
var statearr_30914_33083 = state_30909__$1;
(statearr_30914_33083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (20))){
var inst_30852 = (state_30909[(7)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30909__$1,(23),out,inst_30852);
} else {
if((state_val_30910 === (1))){
var inst_30834 = calc_state();
var inst_30835 = cljs.core.__destructure_map(inst_30834);
var inst_30836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30835,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30835,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30835,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30839 = inst_30834;
var state_30909__$1 = (function (){var statearr_30915 = state_30909;
(statearr_30915[(8)] = inst_30836);

(statearr_30915[(9)] = inst_30837);

(statearr_30915[(10)] = inst_30838);

(statearr_30915[(11)] = inst_30839);

return statearr_30915;
})();
var statearr_30920_33088 = state_30909__$1;
(statearr_30920_33088[(2)] = null);

(statearr_30920_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (24))){
var inst_30842 = (state_30909[(12)]);
var inst_30839 = inst_30842;
var state_30909__$1 = (function (){var statearr_30921 = state_30909;
(statearr_30921[(11)] = inst_30839);

return statearr_30921;
})();
var statearr_30922_33092 = state_30909__$1;
(statearr_30922_33092[(2)] = null);

(statearr_30922_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (4))){
var inst_30858 = (state_30909[(13)]);
var inst_30852 = (state_30909[(7)]);
var inst_30851 = (state_30909[(2)]);
var inst_30852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30851,(0),null);
var inst_30853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30851,(1),null);
var inst_30858__$1 = (inst_30852__$1 == null);
var state_30909__$1 = (function (){var statearr_30924 = state_30909;
(statearr_30924[(13)] = inst_30858__$1);

(statearr_30924[(14)] = inst_30853);

(statearr_30924[(7)] = inst_30852__$1);

return statearr_30924;
})();
if(cljs.core.truth_(inst_30858__$1)){
var statearr_30929_33096 = state_30909__$1;
(statearr_30929_33096[(1)] = (5));

} else {
var statearr_30930_33097 = state_30909__$1;
(statearr_30930_33097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (15))){
var inst_30878 = (state_30909[(15)]);
var inst_30843 = (state_30909[(16)]);
var inst_30878__$1 = cljs.core.empty_QMARK_(inst_30843);
var state_30909__$1 = (function (){var statearr_30933 = state_30909;
(statearr_30933[(15)] = inst_30878__$1);

return statearr_30933;
})();
if(inst_30878__$1){
var statearr_30934_33098 = state_30909__$1;
(statearr_30934_33098[(1)] = (17));

} else {
var statearr_30936_33099 = state_30909__$1;
(statearr_30936_33099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (21))){
var inst_30842 = (state_30909[(12)]);
var inst_30839 = inst_30842;
var state_30909__$1 = (function (){var statearr_30937 = state_30909;
(statearr_30937[(11)] = inst_30839);

return statearr_30937;
})();
var statearr_30938_33100 = state_30909__$1;
(statearr_30938_33100[(2)] = null);

(statearr_30938_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (13))){
var inst_30871 = (state_30909[(2)]);
var inst_30872 = calc_state();
var inst_30839 = inst_30872;
var state_30909__$1 = (function (){var statearr_30939 = state_30909;
(statearr_30939[(11)] = inst_30839);

(statearr_30939[(17)] = inst_30871);

return statearr_30939;
})();
var statearr_30940_33116 = state_30909__$1;
(statearr_30940_33116[(2)] = null);

(statearr_30940_33116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (22))){
var inst_30899 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30941_33123 = state_30909__$1;
(statearr_30941_33123[(2)] = inst_30899);

(statearr_30941_33123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (6))){
var inst_30853 = (state_30909[(14)]);
var inst_30861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30853,change);
var state_30909__$1 = state_30909;
var statearr_30944_33124 = state_30909__$1;
(statearr_30944_33124[(2)] = inst_30861);

(statearr_30944_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (25))){
var state_30909__$1 = state_30909;
var statearr_30945_33125 = state_30909__$1;
(statearr_30945_33125[(2)] = null);

(statearr_30945_33125[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (17))){
var inst_30845 = (state_30909[(18)]);
var inst_30853 = (state_30909[(14)]);
var inst_30880 = (inst_30845.cljs$core$IFn$_invoke$arity$1 ? inst_30845.cljs$core$IFn$_invoke$arity$1(inst_30853) : inst_30845.call(null,inst_30853));
var inst_30881 = cljs.core.not(inst_30880);
var state_30909__$1 = state_30909;
var statearr_30948_33135 = state_30909__$1;
(statearr_30948_33135[(2)] = inst_30881);

(statearr_30948_33135[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (3))){
var inst_30905 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30909__$1,inst_30905);
} else {
if((state_val_30910 === (12))){
var state_30909__$1 = state_30909;
var statearr_30949_33144 = state_30909__$1;
(statearr_30949_33144[(2)] = null);

(statearr_30949_33144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (2))){
var inst_30842 = (state_30909[(12)]);
var inst_30839 = (state_30909[(11)]);
var inst_30842__$1 = cljs.core.__destructure_map(inst_30839);
var inst_30843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30909__$1 = (function (){var statearr_30950 = state_30909;
(statearr_30950[(12)] = inst_30842__$1);

(statearr_30950[(16)] = inst_30843);

(statearr_30950[(18)] = inst_30845);

return statearr_30950;
})();
return cljs.core.async.ioc_alts_BANG_(state_30909__$1,(4),inst_30846);
} else {
if((state_val_30910 === (23))){
var inst_30889 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30889)){
var statearr_30951_33150 = state_30909__$1;
(statearr_30951_33150[(1)] = (24));

} else {
var statearr_30952_33151 = state_30909__$1;
(statearr_30952_33151[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (19))){
var inst_30884 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30953_33156 = state_30909__$1;
(statearr_30953_33156[(2)] = inst_30884);

(statearr_30953_33156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (11))){
var inst_30853 = (state_30909[(14)]);
var inst_30868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30853);
var state_30909__$1 = state_30909;
var statearr_30959_33174 = state_30909__$1;
(statearr_30959_33174[(2)] = inst_30868);

(statearr_30959_33174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (9))){
var inst_30843 = (state_30909[(16)]);
var inst_30853 = (state_30909[(14)]);
var inst_30875 = (state_30909[(19)]);
var inst_30875__$1 = (inst_30843.cljs$core$IFn$_invoke$arity$1 ? inst_30843.cljs$core$IFn$_invoke$arity$1(inst_30853) : inst_30843.call(null,inst_30853));
var state_30909__$1 = (function (){var statearr_30960 = state_30909;
(statearr_30960[(19)] = inst_30875__$1);

return statearr_30960;
})();
if(cljs.core.truth_(inst_30875__$1)){
var statearr_30962_33177 = state_30909__$1;
(statearr_30962_33177[(1)] = (14));

} else {
var statearr_30963_33178 = state_30909__$1;
(statearr_30963_33178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (5))){
var inst_30858 = (state_30909[(13)]);
var state_30909__$1 = state_30909;
var statearr_30964_33184 = state_30909__$1;
(statearr_30964_33184[(2)] = inst_30858);

(statearr_30964_33184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (14))){
var inst_30875 = (state_30909[(19)]);
var state_30909__$1 = state_30909;
var statearr_30965_33186 = state_30909__$1;
(statearr_30965_33186[(2)] = inst_30875);

(statearr_30965_33186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (26))){
var inst_30895 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30967_33189 = state_30909__$1;
(statearr_30967_33189[(2)] = inst_30895);

(statearr_30967_33189[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (16))){
var inst_30886 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30886)){
var statearr_30973_33193 = state_30909__$1;
(statearr_30973_33193[(1)] = (20));

} else {
var statearr_30974_33194 = state_30909__$1;
(statearr_30974_33194[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (10))){
var inst_30901 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30976_33198 = state_30909__$1;
(statearr_30976_33198[(2)] = inst_30901);

(statearr_30976_33198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (18))){
var inst_30878 = (state_30909[(15)]);
var state_30909__$1 = state_30909;
var statearr_30977_33207 = state_30909__$1;
(statearr_30977_33207[(2)] = inst_30878);

(statearr_30977_33207[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (8))){
var inst_30852 = (state_30909[(7)]);
var inst_30865 = (inst_30852 == null);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30865)){
var statearr_30978_33208 = state_30909__$1;
(statearr_30978_33208[(1)] = (11));

} else {
var statearr_30979_33211 = state_30909__$1;
(statearr_30979_33211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29138__auto__ = null;
var cljs$core$async$mix_$_state_machine__29138__auto____0 = (function (){
var statearr_30981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30981[(0)] = cljs$core$async$mix_$_state_machine__29138__auto__);

(statearr_30981[(1)] = (1));

return statearr_30981;
});
var cljs$core$async$mix_$_state_machine__29138__auto____1 = (function (state_30909){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_30909);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e30982){var ex__29141__auto__ = e30982;
var statearr_30983_33219 = state_30909;
(statearr_30983_33219[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_30909[(4)]))){
var statearr_30987_33221 = state_30909;
(statearr_30987_33221[(1)] = cljs.core.first((state_30909[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33225 = state_30909;
state_30909 = G__33225;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29138__auto__ = function(state_30909){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29138__auto____1.call(this,state_30909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29138__auto____0;
cljs$core$async$mix_$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29138__auto____1;
return cljs$core$async$mix_$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_30988 = f__29342__auto__();
(statearr_30988[(6)] = c__29341__auto___33066);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33233 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33233(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33243 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33243(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33246 = (function() {
var G__33247 = null;
var G__33247__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33247__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33247 = function(p,v){
switch(arguments.length){
case 1:
return G__33247__1.call(this,p);
case 2:
return G__33247__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33247.cljs$core$IFn$_invoke$arity$1 = G__33247__1;
G__33247.cljs$core$IFn$_invoke$arity$2 = G__33247__2;
return G__33247;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33246(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33246(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31014 = arguments.length;
switch (G__31014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31007_SHARP_){
if(cljs.core.truth_((p1__31007_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31007_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31007_SHARP_.call(null,topic)))){
return p1__31007_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31007_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31027 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31028){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new cljs.core.async.t_cljs$core$async31027(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31028__$1));
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31028","meta31028",-303965076,null)], null);
}));

(cljs.core.async.t_cljs$core$async31027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31027");

(cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31027.
 */
cljs.core.async.__GT_t_cljs$core$async31027 = (function cljs$core$async$__GT_t_cljs$core$async31027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31028){
return (new cljs.core.async.t_cljs$core$async31027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31028));
});

}

return (new cljs.core.async.t_cljs$core$async31027(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29341__auto___33291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31134){
var state_val_31135 = (state_31134[(1)]);
if((state_val_31135 === (7))){
var inst_31130 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31140_33293 = state_31134__$1;
(statearr_31140_33293[(2)] = inst_31130);

(statearr_31140_33293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (20))){
var state_31134__$1 = state_31134;
var statearr_31141_33295 = state_31134__$1;
(statearr_31141_33295[(2)] = null);

(statearr_31141_33295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (1))){
var state_31134__$1 = state_31134;
var statearr_31144_33297 = state_31134__$1;
(statearr_31144_33297[(2)] = null);

(statearr_31144_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (24))){
var inst_31112 = (state_31134[(7)]);
var inst_31122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31112);
var state_31134__$1 = state_31134;
var statearr_31148_33298 = state_31134__$1;
(statearr_31148_33298[(2)] = inst_31122);

(statearr_31148_33298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (4))){
var inst_31057 = (state_31134[(8)]);
var inst_31057__$1 = (state_31134[(2)]);
var inst_31058 = (inst_31057__$1 == null);
var state_31134__$1 = (function (){var statearr_31149 = state_31134;
(statearr_31149[(8)] = inst_31057__$1);

return statearr_31149;
})();
if(cljs.core.truth_(inst_31058)){
var statearr_31153_33306 = state_31134__$1;
(statearr_31153_33306[(1)] = (5));

} else {
var statearr_31154_33307 = state_31134__$1;
(statearr_31154_33307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (15))){
var inst_31104 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31157_33308 = state_31134__$1;
(statearr_31157_33308[(2)] = inst_31104);

(statearr_31157_33308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (21))){
var inst_31127 = (state_31134[(2)]);
var state_31134__$1 = (function (){var statearr_31158 = state_31134;
(statearr_31158[(9)] = inst_31127);

return statearr_31158;
})();
var statearr_31159_33310 = state_31134__$1;
(statearr_31159_33310[(2)] = null);

(statearr_31159_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (13))){
var inst_31084 = (state_31134[(10)]);
var inst_31086 = cljs.core.chunked_seq_QMARK_(inst_31084);
var state_31134__$1 = state_31134;
if(inst_31086){
var statearr_31162_33311 = state_31134__$1;
(statearr_31162_33311[(1)] = (16));

} else {
var statearr_31164_33314 = state_31134__$1;
(statearr_31164_33314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (22))){
var inst_31119 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
if(cljs.core.truth_(inst_31119)){
var statearr_31165_33316 = state_31134__$1;
(statearr_31165_33316[(1)] = (23));

} else {
var statearr_31166_33317 = state_31134__$1;
(statearr_31166_33317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (6))){
var inst_31115 = (state_31134[(11)]);
var inst_31112 = (state_31134[(7)]);
var inst_31057 = (state_31134[(8)]);
var inst_31112__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31057) : topic_fn.call(null,inst_31057));
var inst_31114 = cljs.core.deref(mults);
var inst_31115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31114,inst_31112__$1);
var state_31134__$1 = (function (){var statearr_31167 = state_31134;
(statearr_31167[(11)] = inst_31115__$1);

(statearr_31167[(7)] = inst_31112__$1);

return statearr_31167;
})();
if(cljs.core.truth_(inst_31115__$1)){
var statearr_31168_33319 = state_31134__$1;
(statearr_31168_33319[(1)] = (19));

} else {
var statearr_31169_33320 = state_31134__$1;
(statearr_31169_33320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (25))){
var inst_31124 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31170_33324 = state_31134__$1;
(statearr_31170_33324[(2)] = inst_31124);

(statearr_31170_33324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (17))){
var inst_31084 = (state_31134[(10)]);
var inst_31095 = cljs.core.first(inst_31084);
var inst_31096 = cljs.core.async.muxch_STAR_(inst_31095);
var inst_31097 = cljs.core.async.close_BANG_(inst_31096);
var inst_31098 = cljs.core.next(inst_31084);
var inst_31067 = inst_31098;
var inst_31068 = null;
var inst_31069 = (0);
var inst_31070 = (0);
var state_31134__$1 = (function (){var statearr_31171 = state_31134;
(statearr_31171[(12)] = inst_31097);

(statearr_31171[(13)] = inst_31068);

(statearr_31171[(14)] = inst_31069);

(statearr_31171[(15)] = inst_31067);

(statearr_31171[(16)] = inst_31070);

return statearr_31171;
})();
var statearr_31172_33329 = state_31134__$1;
(statearr_31172_33329[(2)] = null);

(statearr_31172_33329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (3))){
var inst_31132 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31134__$1,inst_31132);
} else {
if((state_val_31135 === (12))){
var inst_31106 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31173_33332 = state_31134__$1;
(statearr_31173_33332[(2)] = inst_31106);

(statearr_31173_33332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (2))){
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31134__$1,(4),ch);
} else {
if((state_val_31135 === (23))){
var state_31134__$1 = state_31134;
var statearr_31174_33333 = state_31134__$1;
(statearr_31174_33333[(2)] = null);

(statearr_31174_33333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (19))){
var inst_31115 = (state_31134[(11)]);
var inst_31057 = (state_31134[(8)]);
var inst_31117 = cljs.core.async.muxch_STAR_(inst_31115);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31134__$1,(22),inst_31117,inst_31057);
} else {
if((state_val_31135 === (11))){
var inst_31084 = (state_31134[(10)]);
var inst_31067 = (state_31134[(15)]);
var inst_31084__$1 = cljs.core.seq(inst_31067);
var state_31134__$1 = (function (){var statearr_31177 = state_31134;
(statearr_31177[(10)] = inst_31084__$1);

return statearr_31177;
})();
if(inst_31084__$1){
var statearr_31178_33337 = state_31134__$1;
(statearr_31178_33337[(1)] = (13));

} else {
var statearr_31179_33339 = state_31134__$1;
(statearr_31179_33339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (9))){
var inst_31108 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31180_33340 = state_31134__$1;
(statearr_31180_33340[(2)] = inst_31108);

(statearr_31180_33340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (5))){
var inst_31064 = cljs.core.deref(mults);
var inst_31065 = cljs.core.vals(inst_31064);
var inst_31066 = cljs.core.seq(inst_31065);
var inst_31067 = inst_31066;
var inst_31068 = null;
var inst_31069 = (0);
var inst_31070 = (0);
var state_31134__$1 = (function (){var statearr_31181 = state_31134;
(statearr_31181[(13)] = inst_31068);

(statearr_31181[(14)] = inst_31069);

(statearr_31181[(15)] = inst_31067);

(statearr_31181[(16)] = inst_31070);

return statearr_31181;
})();
var statearr_31182_33342 = state_31134__$1;
(statearr_31182_33342[(2)] = null);

(statearr_31182_33342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (14))){
var state_31134__$1 = state_31134;
var statearr_31186_33344 = state_31134__$1;
(statearr_31186_33344[(2)] = null);

(statearr_31186_33344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (16))){
var inst_31084 = (state_31134[(10)]);
var inst_31088 = cljs.core.chunk_first(inst_31084);
var inst_31089 = cljs.core.chunk_rest(inst_31084);
var inst_31090 = cljs.core.count(inst_31088);
var inst_31067 = inst_31089;
var inst_31068 = inst_31088;
var inst_31069 = inst_31090;
var inst_31070 = (0);
var state_31134__$1 = (function (){var statearr_31190 = state_31134;
(statearr_31190[(13)] = inst_31068);

(statearr_31190[(14)] = inst_31069);

(statearr_31190[(15)] = inst_31067);

(statearr_31190[(16)] = inst_31070);

return statearr_31190;
})();
var statearr_31194_33350 = state_31134__$1;
(statearr_31194_33350[(2)] = null);

(statearr_31194_33350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (10))){
var inst_31068 = (state_31134[(13)]);
var inst_31069 = (state_31134[(14)]);
var inst_31067 = (state_31134[(15)]);
var inst_31070 = (state_31134[(16)]);
var inst_31075 = cljs.core._nth(inst_31068,inst_31070);
var inst_31076 = cljs.core.async.muxch_STAR_(inst_31075);
var inst_31077 = cljs.core.async.close_BANG_(inst_31076);
var inst_31080 = (inst_31070 + (1));
var tmp31183 = inst_31068;
var tmp31184 = inst_31069;
var tmp31185 = inst_31067;
var inst_31067__$1 = tmp31185;
var inst_31068__$1 = tmp31183;
var inst_31069__$1 = tmp31184;
var inst_31070__$1 = inst_31080;
var state_31134__$1 = (function (){var statearr_31195 = state_31134;
(statearr_31195[(13)] = inst_31068__$1);

(statearr_31195[(14)] = inst_31069__$1);

(statearr_31195[(17)] = inst_31077);

(statearr_31195[(15)] = inst_31067__$1);

(statearr_31195[(16)] = inst_31070__$1);

return statearr_31195;
})();
var statearr_31196_33367 = state_31134__$1;
(statearr_31196_33367[(2)] = null);

(statearr_31196_33367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (18))){
var inst_31101 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31197_33368 = state_31134__$1;
(statearr_31197_33368[(2)] = inst_31101);

(statearr_31197_33368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (8))){
var inst_31069 = (state_31134[(14)]);
var inst_31070 = (state_31134[(16)]);
var inst_31072 = (inst_31070 < inst_31069);
var inst_31073 = inst_31072;
var state_31134__$1 = state_31134;
if(cljs.core.truth_(inst_31073)){
var statearr_31202_33369 = state_31134__$1;
(statearr_31202_33369[(1)] = (10));

} else {
var statearr_31204_33370 = state_31134__$1;
(statearr_31204_33370[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_31214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31214[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_31214[(1)] = (1));

return statearr_31214;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_31134){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31134);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e31221){var ex__29141__auto__ = e31221;
var statearr_31222_33371 = state_31134;
(statearr_31222_33371[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31134[(4)]))){
var statearr_31223_33372 = state_31134;
(statearr_31223_33372[(1)] = cljs.core.first((state_31134[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33373 = state_31134;
state_31134 = G__33373;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_31134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_31134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_31230 = f__29342__auto__();
(statearr_31230[(6)] = c__29341__auto___33291);

return statearr_31230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31237 = arguments.length;
switch (G__31237) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31252 = arguments.length;
switch (G__31252) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31263 = arguments.length;
switch (G__31263) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29341__auto___33385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31331){
var state_val_31332 = (state_31331[(1)]);
if((state_val_31332 === (7))){
var state_31331__$1 = state_31331;
var statearr_31336_33386 = state_31331__$1;
(statearr_31336_33386[(2)] = null);

(statearr_31336_33386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (1))){
var state_31331__$1 = state_31331;
var statearr_31338_33388 = state_31331__$1;
(statearr_31338_33388[(2)] = null);

(statearr_31338_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (4))){
var inst_31280 = (state_31331[(7)]);
var inst_31283 = (state_31331[(8)]);
var inst_31285 = (inst_31283 < inst_31280);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31285)){
var statearr_31339_33391 = state_31331__$1;
(statearr_31339_33391[(1)] = (6));

} else {
var statearr_31340_33392 = state_31331__$1;
(statearr_31340_33392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (15))){
var inst_31317 = (state_31331[(9)]);
var inst_31322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31317);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31331__$1,(17),out,inst_31322);
} else {
if((state_val_31332 === (13))){
var inst_31317 = (state_31331[(9)]);
var inst_31317__$1 = (state_31331[(2)]);
var inst_31318 = cljs.core.some(cljs.core.nil_QMARK_,inst_31317__$1);
var state_31331__$1 = (function (){var statearr_31346 = state_31331;
(statearr_31346[(9)] = inst_31317__$1);

return statearr_31346;
})();
if(cljs.core.truth_(inst_31318)){
var statearr_31352_33400 = state_31331__$1;
(statearr_31352_33400[(1)] = (14));

} else {
var statearr_31357_33403 = state_31331__$1;
(statearr_31357_33403[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (6))){
var state_31331__$1 = state_31331;
var statearr_31362_33405 = state_31331__$1;
(statearr_31362_33405[(2)] = null);

(statearr_31362_33405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (17))){
var inst_31324 = (state_31331[(2)]);
var state_31331__$1 = (function (){var statearr_31364 = state_31331;
(statearr_31364[(10)] = inst_31324);

return statearr_31364;
})();
var statearr_31365_33406 = state_31331__$1;
(statearr_31365_33406[(2)] = null);

(statearr_31365_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (3))){
var inst_31329 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31331__$1,inst_31329);
} else {
if((state_val_31332 === (12))){
var _ = (function (){var statearr_31368 = state_31331;
(statearr_31368[(4)] = cljs.core.rest((state_31331[(4)])));

return statearr_31368;
})();
var state_31331__$1 = state_31331;
var ex31363 = (state_31331__$1[(2)]);
var statearr_31369_33408 = state_31331__$1;
(statearr_31369_33408[(5)] = ex31363);


if((ex31363 instanceof Object)){
var statearr_31372_33411 = state_31331__$1;
(statearr_31372_33411[(1)] = (11));

(statearr_31372_33411[(5)] = null);

} else {
throw ex31363;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (2))){
var inst_31279 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31280 = cnt;
var inst_31283 = (0);
var state_31331__$1 = (function (){var statearr_31377 = state_31331;
(statearr_31377[(11)] = inst_31279);

(statearr_31377[(7)] = inst_31280);

(statearr_31377[(8)] = inst_31283);

return statearr_31377;
})();
var statearr_31378_33414 = state_31331__$1;
(statearr_31378_33414[(2)] = null);

(statearr_31378_33414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (11))){
var inst_31295 = (state_31331[(2)]);
var inst_31297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31331__$1 = (function (){var statearr_31386 = state_31331;
(statearr_31386[(12)] = inst_31295);

return statearr_31386;
})();
var statearr_31388_33416 = state_31331__$1;
(statearr_31388_33416[(2)] = inst_31297);

(statearr_31388_33416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (9))){
var inst_31283 = (state_31331[(8)]);
var _ = (function (){var statearr_31391 = state_31331;
(statearr_31391[(4)] = cljs.core.cons((12),(state_31331[(4)])));

return statearr_31391;
})();
var inst_31303 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31283) : chs__$1.call(null,inst_31283));
var inst_31304 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31283) : done.call(null,inst_31283));
var inst_31305 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31303,inst_31304);
var ___$1 = (function (){var statearr_31395 = state_31331;
(statearr_31395[(4)] = cljs.core.rest((state_31331[(4)])));

return statearr_31395;
})();
var state_31331__$1 = state_31331;
var statearr_31396_33421 = state_31331__$1;
(statearr_31396_33421[(2)] = inst_31305);

(statearr_31396_33421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (5))){
var inst_31315 = (state_31331[(2)]);
var state_31331__$1 = (function (){var statearr_31397 = state_31331;
(statearr_31397[(13)] = inst_31315);

return statearr_31397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31331__$1,(13),dchan);
} else {
if((state_val_31332 === (14))){
var inst_31320 = cljs.core.async.close_BANG_(out);
var state_31331__$1 = state_31331;
var statearr_31403_33425 = state_31331__$1;
(statearr_31403_33425[(2)] = inst_31320);

(statearr_31403_33425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (16))){
var inst_31327 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31404_33428 = state_31331__$1;
(statearr_31404_33428[(2)] = inst_31327);

(statearr_31404_33428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (10))){
var inst_31283 = (state_31331[(8)]);
var inst_31308 = (state_31331[(2)]);
var inst_31309 = (inst_31283 + (1));
var inst_31283__$1 = inst_31309;
var state_31331__$1 = (function (){var statearr_31406 = state_31331;
(statearr_31406[(14)] = inst_31308);

(statearr_31406[(8)] = inst_31283__$1);

return statearr_31406;
})();
var statearr_31408_33433 = state_31331__$1;
(statearr_31408_33433[(2)] = null);

(statearr_31408_33433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (8))){
var inst_31313 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31409_33434 = state_31331__$1;
(statearr_31409_33434[(2)] = inst_31313);

(statearr_31409_33434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_31413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31413[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_31413[(1)] = (1));

return statearr_31413;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_31331){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31331);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e31415){var ex__29141__auto__ = e31415;
var statearr_31419_33436 = state_31331;
(statearr_31419_33436[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31331[(4)]))){
var statearr_31423_33439 = state_31331;
(statearr_31423_33439[(1)] = cljs.core.first((state_31331[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33441 = state_31331;
state_31331 = G__33441;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_31331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_31331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_31428 = f__29342__auto__();
(statearr_31428[(6)] = c__29341__auto___33385);

return statearr_31428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31433 = arguments.length;
switch (G__31433) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31479){
var state_val_31480 = (state_31479[(1)]);
if((state_val_31480 === (7))){
var inst_31454 = (state_31479[(7)]);
var inst_31455 = (state_31479[(8)]);
var inst_31454__$1 = (state_31479[(2)]);
var inst_31455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31454__$1,(0),null);
var inst_31456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31454__$1,(1),null);
var inst_31457 = (inst_31455__$1 == null);
var state_31479__$1 = (function (){var statearr_31483 = state_31479;
(statearr_31483[(9)] = inst_31456);

(statearr_31483[(7)] = inst_31454__$1);

(statearr_31483[(8)] = inst_31455__$1);

return statearr_31483;
})();
if(cljs.core.truth_(inst_31457)){
var statearr_31484_33458 = state_31479__$1;
(statearr_31484_33458[(1)] = (8));

} else {
var statearr_31485_33459 = state_31479__$1;
(statearr_31485_33459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (1))){
var inst_31440 = cljs.core.vec(chs);
var inst_31441 = inst_31440;
var state_31479__$1 = (function (){var statearr_31489 = state_31479;
(statearr_31489[(10)] = inst_31441);

return statearr_31489;
})();
var statearr_31490_33471 = state_31479__$1;
(statearr_31490_33471[(2)] = null);

(statearr_31490_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (4))){
var inst_31441 = (state_31479[(10)]);
var state_31479__$1 = state_31479;
return cljs.core.async.ioc_alts_BANG_(state_31479__$1,(7),inst_31441);
} else {
if((state_val_31480 === (6))){
var inst_31473 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
var statearr_31498_33473 = state_31479__$1;
(statearr_31498_33473[(2)] = inst_31473);

(statearr_31498_33473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (3))){
var inst_31475 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31479__$1,inst_31475);
} else {
if((state_val_31480 === (2))){
var inst_31441 = (state_31479[(10)]);
var inst_31445 = cljs.core.count(inst_31441);
var inst_31446 = (inst_31445 > (0));
var state_31479__$1 = state_31479;
if(cljs.core.truth_(inst_31446)){
var statearr_31503_33480 = state_31479__$1;
(statearr_31503_33480[(1)] = (4));

} else {
var statearr_31504_33482 = state_31479__$1;
(statearr_31504_33482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (11))){
var inst_31441 = (state_31479[(10)]);
var inst_31466 = (state_31479[(2)]);
var tmp31500 = inst_31441;
var inst_31441__$1 = tmp31500;
var state_31479__$1 = (function (){var statearr_31513 = state_31479;
(statearr_31513[(11)] = inst_31466);

(statearr_31513[(10)] = inst_31441__$1);

return statearr_31513;
})();
var statearr_31514_33484 = state_31479__$1;
(statearr_31514_33484[(2)] = null);

(statearr_31514_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (9))){
var inst_31455 = (state_31479[(8)]);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31479__$1,(11),out,inst_31455);
} else {
if((state_val_31480 === (5))){
var inst_31471 = cljs.core.async.close_BANG_(out);
var state_31479__$1 = state_31479;
var statearr_31519_33499 = state_31479__$1;
(statearr_31519_33499[(2)] = inst_31471);

(statearr_31519_33499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (10))){
var inst_31469 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
var statearr_31520_33501 = state_31479__$1;
(statearr_31520_33501[(2)] = inst_31469);

(statearr_31520_33501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (8))){
var inst_31456 = (state_31479[(9)]);
var inst_31454 = (state_31479[(7)]);
var inst_31441 = (state_31479[(10)]);
var inst_31455 = (state_31479[(8)]);
var inst_31460 = (function (){var cs = inst_31441;
var vec__31450 = inst_31454;
var v = inst_31455;
var c = inst_31456;
return (function (p1__31431_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31431_SHARP_);
});
})();
var inst_31461 = cljs.core.filterv(inst_31460,inst_31441);
var inst_31441__$1 = inst_31461;
var state_31479__$1 = (function (){var statearr_31522 = state_31479;
(statearr_31522[(10)] = inst_31441__$1);

return statearr_31522;
})();
var statearr_31523_33509 = state_31479__$1;
(statearr_31523_33509[(2)] = null);

(statearr_31523_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_31524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31524[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_31524[(1)] = (1));

return statearr_31524;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_31479){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31479);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e31525){var ex__29141__auto__ = e31525;
var statearr_31526_33510 = state_31479;
(statearr_31526_33510[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31479[(4)]))){
var statearr_31527_33511 = state_31479;
(statearr_31527_33511[(1)] = cljs.core.first((state_31479[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33515 = state_31479;
state_31479 = G__33515;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_31479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_31530 = f__29342__auto__();
(statearr_31530[(6)] = c__29341__auto___33448);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31541 = arguments.length;
switch (G__31541) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31572){
var state_val_31573 = (state_31572[(1)]);
if((state_val_31573 === (7))){
var inst_31553 = (state_31572[(7)]);
var inst_31553__$1 = (state_31572[(2)]);
var inst_31554 = (inst_31553__$1 == null);
var inst_31555 = cljs.core.not(inst_31554);
var state_31572__$1 = (function (){var statearr_31575 = state_31572;
(statearr_31575[(7)] = inst_31553__$1);

return statearr_31575;
})();
if(inst_31555){
var statearr_31576_33520 = state_31572__$1;
(statearr_31576_33520[(1)] = (8));

} else {
var statearr_31577_33521 = state_31572__$1;
(statearr_31577_33521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (1))){
var inst_31546 = (0);
var state_31572__$1 = (function (){var statearr_31579 = state_31572;
(statearr_31579[(8)] = inst_31546);

return statearr_31579;
})();
var statearr_31580_33522 = state_31572__$1;
(statearr_31580_33522[(2)] = null);

(statearr_31580_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (4))){
var state_31572__$1 = state_31572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31572__$1,(7),ch);
} else {
if((state_val_31573 === (6))){
var inst_31567 = (state_31572[(2)]);
var state_31572__$1 = state_31572;
var statearr_31585_33524 = state_31572__$1;
(statearr_31585_33524[(2)] = inst_31567);

(statearr_31585_33524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (3))){
var inst_31569 = (state_31572[(2)]);
var inst_31570 = cljs.core.async.close_BANG_(out);
var state_31572__$1 = (function (){var statearr_31595 = state_31572;
(statearr_31595[(9)] = inst_31569);

return statearr_31595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31572__$1,inst_31570);
} else {
if((state_val_31573 === (2))){
var inst_31546 = (state_31572[(8)]);
var inst_31549 = (inst_31546 < n);
var state_31572__$1 = state_31572;
if(cljs.core.truth_(inst_31549)){
var statearr_31600_33525 = state_31572__$1;
(statearr_31600_33525[(1)] = (4));

} else {
var statearr_31601_33526 = state_31572__$1;
(statearr_31601_33526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (11))){
var inst_31546 = (state_31572[(8)]);
var inst_31558 = (state_31572[(2)]);
var inst_31559 = (inst_31546 + (1));
var inst_31546__$1 = inst_31559;
var state_31572__$1 = (function (){var statearr_31605 = state_31572;
(statearr_31605[(8)] = inst_31546__$1);

(statearr_31605[(10)] = inst_31558);

return statearr_31605;
})();
var statearr_31610_33527 = state_31572__$1;
(statearr_31610_33527[(2)] = null);

(statearr_31610_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (9))){
var state_31572__$1 = state_31572;
var statearr_31611_33528 = state_31572__$1;
(statearr_31611_33528[(2)] = null);

(statearr_31611_33528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (5))){
var state_31572__$1 = state_31572;
var statearr_31612_33529 = state_31572__$1;
(statearr_31612_33529[(2)] = null);

(statearr_31612_33529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (10))){
var inst_31563 = (state_31572[(2)]);
var state_31572__$1 = state_31572;
var statearr_31613_33530 = state_31572__$1;
(statearr_31613_33530[(2)] = inst_31563);

(statearr_31613_33530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (8))){
var inst_31553 = (state_31572[(7)]);
var state_31572__$1 = state_31572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31572__$1,(11),out,inst_31553);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_31617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31617[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_31617[(1)] = (1));

return statearr_31617;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_31572){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31572);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e31624){var ex__29141__auto__ = e31624;
var statearr_31625_33531 = state_31572;
(statearr_31625_33531[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31572[(4)]))){
var statearr_31628_33532 = state_31572;
(statearr_31628_33532[(1)] = cljs.core.first((state_31572[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_31572;
state_31572 = G__33533;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_31572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_31572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_31629 = f__29342__auto__();
(statearr_31629[(6)] = c__29341__auto___33518);

return statearr_31629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31633 = (function (f,ch,meta31634){
this.f = f;
this.ch = ch;
this.meta31634 = meta31634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31635,meta31634__$1){
var self__ = this;
var _31635__$1 = this;
return (new cljs.core.async.t_cljs$core$async31633(self__.f,self__.ch,meta31634__$1));
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31635){
var self__ = this;
var _31635__$1 = this;
return self__.meta31634;
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31643 = (function (f,ch,meta31634,_,fn1,meta31644){
this.f = f;
this.ch = ch;
this.meta31634 = meta31634;
this._ = _;
this.fn1 = fn1;
this.meta31644 = meta31644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31645,meta31644__$1){
var self__ = this;
var _31645__$1 = this;
return (new cljs.core.async.t_cljs$core$async31643(self__.f,self__.ch,self__.meta31634,self__._,self__.fn1,meta31644__$1));
}));

(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31645){
var self__ = this;
var _31645__$1 = this;
return self__.meta31644;
}));

(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31630_SHARP_){
var G__31654 = (((p1__31630_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31630_SHARP_) : self__.f.call(null,p1__31630_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31654) : f1.call(null,G__31654));
});
}));

(cljs.core.async.t_cljs$core$async31643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31634","meta31634",-1404254826,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31633","cljs.core.async/t_cljs$core$async31633",55758539,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31644","meta31644",-1842615111,null)], null);
}));

(cljs.core.async.t_cljs$core$async31643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31643");

(cljs.core.async.t_cljs$core$async31643.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31643.
 */
cljs.core.async.__GT_t_cljs$core$async31643 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31643(f__$1,ch__$1,meta31634__$1,___$2,fn1__$1,meta31644){
return (new cljs.core.async.t_cljs$core$async31643(f__$1,ch__$1,meta31634__$1,___$2,fn1__$1,meta31644));
});

}

return (new cljs.core.async.t_cljs$core$async31643(self__.f,self__.ch,self__.meta31634,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31660 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31660) : self__.f.call(null,G__31660));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31634","meta31634",-1404254826,null)], null);
}));

(cljs.core.async.t_cljs$core$async31633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31633");

(cljs.core.async.t_cljs$core$async31633.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31633.
 */
cljs.core.async.__GT_t_cljs$core$async31633 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31633(f__$1,ch__$1,meta31634){
return (new cljs.core.async.t_cljs$core$async31633(f__$1,ch__$1,meta31634));
});

}

return (new cljs.core.async.t_cljs$core$async31633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31663 = (function (f,ch,meta31664){
this.f = f;
this.ch = ch;
this.meta31664 = meta31664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31665,meta31664__$1){
var self__ = this;
var _31665__$1 = this;
return (new cljs.core.async.t_cljs$core$async31663(self__.f,self__.ch,meta31664__$1));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31665){
var self__ = this;
var _31665__$1 = this;
return self__.meta31664;
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31664","meta31664",-509655261,null)], null);
}));

(cljs.core.async.t_cljs$core$async31663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31663");

(cljs.core.async.t_cljs$core$async31663.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31663.
 */
cljs.core.async.__GT_t_cljs$core$async31663 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31663(f__$1,ch__$1,meta31664){
return (new cljs.core.async.t_cljs$core$async31663(f__$1,ch__$1,meta31664));
});

}

return (new cljs.core.async.t_cljs$core$async31663(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31696 = (function (p,ch,meta31697){
this.p = p;
this.ch = ch;
this.meta31697 = meta31697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31698,meta31697__$1){
var self__ = this;
var _31698__$1 = this;
return (new cljs.core.async.t_cljs$core$async31696(self__.p,self__.ch,meta31697__$1));
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31698){
var self__ = this;
var _31698__$1 = this;
return self__.meta31697;
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31697","meta31697",1976950617,null)], null);
}));

(cljs.core.async.t_cljs$core$async31696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31696");

(cljs.core.async.t_cljs$core$async31696.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31696.
 */
cljs.core.async.__GT_t_cljs$core$async31696 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31696(p__$1,ch__$1,meta31697){
return (new cljs.core.async.t_cljs$core$async31696(p__$1,ch__$1,meta31697));
});

}

return (new cljs.core.async.t_cljs$core$async31696(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31718 = arguments.length;
switch (G__31718) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31769){
var state_val_31770 = (state_31769[(1)]);
if((state_val_31770 === (7))){
var inst_31765 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
var statearr_31785_33587 = state_31769__$1;
(statearr_31785_33587[(2)] = inst_31765);

(statearr_31785_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (1))){
var state_31769__$1 = state_31769;
var statearr_31789_33588 = state_31769__$1;
(statearr_31789_33588[(2)] = null);

(statearr_31789_33588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (4))){
var inst_31747 = (state_31769[(7)]);
var inst_31747__$1 = (state_31769[(2)]);
var inst_31748 = (inst_31747__$1 == null);
var state_31769__$1 = (function (){var statearr_31791 = state_31769;
(statearr_31791[(7)] = inst_31747__$1);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31748)){
var statearr_31792_33590 = state_31769__$1;
(statearr_31792_33590[(1)] = (5));

} else {
var statearr_31793_33591 = state_31769__$1;
(statearr_31793_33591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (6))){
var inst_31747 = (state_31769[(7)]);
var inst_31752 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31747) : p.call(null,inst_31747));
var state_31769__$1 = state_31769;
if(cljs.core.truth_(inst_31752)){
var statearr_31794_33592 = state_31769__$1;
(statearr_31794_33592[(1)] = (8));

} else {
var statearr_31795_33593 = state_31769__$1;
(statearr_31795_33593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (3))){
var inst_31767 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31769__$1,inst_31767);
} else {
if((state_val_31770 === (2))){
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31769__$1,(4),ch);
} else {
if((state_val_31770 === (11))){
var inst_31759 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
var statearr_31799_33594 = state_31769__$1;
(statearr_31799_33594[(2)] = inst_31759);

(statearr_31799_33594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (9))){
var state_31769__$1 = state_31769;
var statearr_31804_33595 = state_31769__$1;
(statearr_31804_33595[(2)] = null);

(statearr_31804_33595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (5))){
var inst_31750 = cljs.core.async.close_BANG_(out);
var state_31769__$1 = state_31769;
var statearr_31806_33596 = state_31769__$1;
(statearr_31806_33596[(2)] = inst_31750);

(statearr_31806_33596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (10))){
var inst_31762 = (state_31769[(2)]);
var state_31769__$1 = (function (){var statearr_31807 = state_31769;
(statearr_31807[(8)] = inst_31762);

return statearr_31807;
})();
var statearr_31808_33597 = state_31769__$1;
(statearr_31808_33597[(2)] = null);

(statearr_31808_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (8))){
var inst_31747 = (state_31769[(7)]);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31769__$1,(11),out,inst_31747);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_31810 = [null,null,null,null,null,null,null,null,null];
(statearr_31810[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_31810[(1)] = (1));

return statearr_31810;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_31769){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31769);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e31811){var ex__29141__auto__ = e31811;
var statearr_31812_33609 = state_31769;
(statearr_31812_33609[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31769[(4)]))){
var statearr_31813_33614 = state_31769;
(statearr_31813_33614[(1)] = cljs.core.first((state_31769[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33615 = state_31769;
state_31769 = G__33615;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_31769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_31769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_31818 = f__29342__auto__();
(statearr_31818[(6)] = c__29341__auto___33586);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31822 = arguments.length;
switch (G__31822) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31921_33627 = state_31911__$1;
(statearr_31921_33627[(2)] = inst_31907);

(statearr_31921_33627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (20))){
var inst_31873 = (state_31911[(7)]);
var inst_31888 = (state_31911[(2)]);
var inst_31889 = cljs.core.next(inst_31873);
var inst_31852 = inst_31889;
var inst_31853 = null;
var inst_31854 = (0);
var inst_31855 = (0);
var state_31911__$1 = (function (){var statearr_31924 = state_31911;
(statearr_31924[(8)] = inst_31888);

(statearr_31924[(9)] = inst_31855);

(statearr_31924[(10)] = inst_31852);

(statearr_31924[(11)] = inst_31853);

(statearr_31924[(12)] = inst_31854);

return statearr_31924;
})();
var statearr_31928_33632 = state_31911__$1;
(statearr_31928_33632[(2)] = null);

(statearr_31928_33632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var state_31911__$1 = state_31911;
var statearr_31930_33633 = state_31911__$1;
(statearr_31930_33633[(2)] = null);

(statearr_31930_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31836 = (state_31911[(13)]);
var inst_31836__$1 = (state_31911[(2)]);
var inst_31837 = (inst_31836__$1 == null);
var state_31911__$1 = (function (){var statearr_31939 = state_31911;
(statearr_31939[(13)] = inst_31836__$1);

return statearr_31939;
})();
if(cljs.core.truth_(inst_31837)){
var statearr_31944_33640 = state_31911__$1;
(statearr_31944_33640[(1)] = (5));

} else {
var statearr_31945_33641 = state_31911__$1;
(statearr_31945_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (15))){
var state_31911__$1 = state_31911;
var statearr_31949_33643 = state_31911__$1;
(statearr_31949_33643[(2)] = null);

(statearr_31949_33643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (21))){
var state_31911__$1 = state_31911;
var statearr_31950_33644 = state_31911__$1;
(statearr_31950_33644[(2)] = null);

(statearr_31950_33644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (13))){
var inst_31855 = (state_31911[(9)]);
var inst_31852 = (state_31911[(10)]);
var inst_31853 = (state_31911[(11)]);
var inst_31854 = (state_31911[(12)]);
var inst_31868 = (state_31911[(2)]);
var inst_31870 = (inst_31855 + (1));
var tmp31946 = inst_31852;
var tmp31947 = inst_31853;
var tmp31948 = inst_31854;
var inst_31852__$1 = tmp31946;
var inst_31853__$1 = tmp31947;
var inst_31854__$1 = tmp31948;
var inst_31855__$1 = inst_31870;
var state_31911__$1 = (function (){var statearr_31955 = state_31911;
(statearr_31955[(9)] = inst_31855__$1);

(statearr_31955[(10)] = inst_31852__$1);

(statearr_31955[(11)] = inst_31853__$1);

(statearr_31955[(12)] = inst_31854__$1);

(statearr_31955[(14)] = inst_31868);

return statearr_31955;
})();
var statearr_31957_33645 = state_31911__$1;
(statearr_31957_33645[(2)] = null);

(statearr_31957_33645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (22))){
var state_31911__$1 = state_31911;
var statearr_31958_33649 = state_31911__$1;
(statearr_31958_33649[(2)] = null);

(statearr_31958_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (6))){
var inst_31836 = (state_31911[(13)]);
var inst_31849 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31836) : f.call(null,inst_31836));
var inst_31850 = cljs.core.seq(inst_31849);
var inst_31852 = inst_31850;
var inst_31853 = null;
var inst_31854 = (0);
var inst_31855 = (0);
var state_31911__$1 = (function (){var statearr_31963 = state_31911;
(statearr_31963[(9)] = inst_31855);

(statearr_31963[(10)] = inst_31852);

(statearr_31963[(11)] = inst_31853);

(statearr_31963[(12)] = inst_31854);

return statearr_31963;
})();
var statearr_31964_33650 = state_31911__$1;
(statearr_31964_33650[(2)] = null);

(statearr_31964_33650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (17))){
var inst_31873 = (state_31911[(7)]);
var inst_31881 = cljs.core.chunk_first(inst_31873);
var inst_31882 = cljs.core.chunk_rest(inst_31873);
var inst_31883 = cljs.core.count(inst_31881);
var inst_31852 = inst_31882;
var inst_31853 = inst_31881;
var inst_31854 = inst_31883;
var inst_31855 = (0);
var state_31911__$1 = (function (){var statearr_31965 = state_31911;
(statearr_31965[(9)] = inst_31855);

(statearr_31965[(10)] = inst_31852);

(statearr_31965[(11)] = inst_31853);

(statearr_31965[(12)] = inst_31854);

return statearr_31965;
})();
var statearr_31967_33651 = state_31911__$1;
(statearr_31967_33651[(2)] = null);

(statearr_31967_33651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31909 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (12))){
var inst_31897 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31968_33657 = state_31911__$1;
(statearr_31968_33657[(2)] = inst_31897);

(statearr_31968_33657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (2))){
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31911__$1,(4),in$);
} else {
if((state_val_31912 === (23))){
var inst_31905 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31969_33658 = state_31911__$1;
(statearr_31969_33658[(2)] = inst_31905);

(statearr_31969_33658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (19))){
var inst_31892 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31970_33659 = state_31911__$1;
(statearr_31970_33659[(2)] = inst_31892);

(statearr_31970_33659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31852 = (state_31911[(10)]);
var inst_31873 = (state_31911[(7)]);
var inst_31873__$1 = cljs.core.seq(inst_31852);
var state_31911__$1 = (function (){var statearr_31979 = state_31911;
(statearr_31979[(7)] = inst_31873__$1);

return statearr_31979;
})();
if(inst_31873__$1){
var statearr_31984_33661 = state_31911__$1;
(statearr_31984_33661[(1)] = (14));

} else {
var statearr_31985_33665 = state_31911__$1;
(statearr_31985_33665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var inst_31899 = (state_31911[(2)]);
var inst_31900 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31911__$1 = (function (){var statearr_31989 = state_31911;
(statearr_31989[(15)] = inst_31899);

return statearr_31989;
})();
if(cljs.core.truth_(inst_31900)){
var statearr_31990_33672 = state_31911__$1;
(statearr_31990_33672[(1)] = (21));

} else {
var statearr_31991_33673 = state_31911__$1;
(statearr_31991_33673[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var inst_31839 = cljs.core.async.close_BANG_(out);
var state_31911__$1 = state_31911;
var statearr_31992_33674 = state_31911__$1;
(statearr_31992_33674[(2)] = inst_31839);

(statearr_31992_33674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (14))){
var inst_31873 = (state_31911[(7)]);
var inst_31875 = cljs.core.chunked_seq_QMARK_(inst_31873);
var state_31911__$1 = state_31911;
if(inst_31875){
var statearr_31994_33681 = state_31911__$1;
(statearr_31994_33681[(1)] = (17));

} else {
var statearr_31996_33682 = state_31911__$1;
(statearr_31996_33682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (16))){
var inst_31895 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31999_33683 = state_31911__$1;
(statearr_31999_33683[(2)] = inst_31895);

(statearr_31999_33683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31855 = (state_31911[(9)]);
var inst_31853 = (state_31911[(11)]);
var inst_31862 = cljs.core._nth(inst_31853,inst_31855);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31911__$1,(13),out,inst_31862);
} else {
if((state_val_31912 === (18))){
var inst_31873 = (state_31911[(7)]);
var inst_31886 = cljs.core.first(inst_31873);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31911__$1,(20),out,inst_31886);
} else {
if((state_val_31912 === (8))){
var inst_31855 = (state_31911[(9)]);
var inst_31854 = (state_31911[(12)]);
var inst_31857 = (inst_31855 < inst_31854);
var inst_31858 = inst_31857;
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31858)){
var statearr_32003_33684 = state_31911__$1;
(statearr_32003_33684[(1)] = (10));

} else {
var statearr_32006_33685 = state_31911__$1;
(statearr_32006_33685[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____0 = (function (){
var statearr_32014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32014[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__);

(statearr_32014[(1)] = (1));

return statearr_32014;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____1 = (function (state_31911){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_31911);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e32017){var ex__29141__auto__ = e32017;
var statearr_32020_33686 = state_31911;
(statearr_32020_33686[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_31911[(4)]))){
var statearr_32022_33687 = state_31911;
(statearr_32022_33687[(1)] = cljs.core.first((state_31911[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33688 = state_31911;
state_31911 = G__33688;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29138__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_32026 = f__29342__auto__();
(statearr_32026[(6)] = c__29341__auto__);

return statearr_32026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));

return c__29341__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32032 = arguments.length;
switch (G__32032) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32048 = arguments.length;
switch (G__32048) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32060 = arguments.length;
switch (G__32060) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_32090){
var state_val_32091 = (state_32090[(1)]);
if((state_val_32091 === (7))){
var inst_32085 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32097_33694 = state_32090__$1;
(statearr_32097_33694[(2)] = inst_32085);

(statearr_32097_33694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (1))){
var inst_32064 = null;
var state_32090__$1 = (function (){var statearr_32098 = state_32090;
(statearr_32098[(7)] = inst_32064);

return statearr_32098;
})();
var statearr_32099_33702 = state_32090__$1;
(statearr_32099_33702[(2)] = null);

(statearr_32099_33702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (4))){
var inst_32070 = (state_32090[(8)]);
var inst_32070__$1 = (state_32090[(2)]);
var inst_32071 = (inst_32070__$1 == null);
var inst_32072 = cljs.core.not(inst_32071);
var state_32090__$1 = (function (){var statearr_32101 = state_32090;
(statearr_32101[(8)] = inst_32070__$1);

return statearr_32101;
})();
if(inst_32072){
var statearr_32102_33703 = state_32090__$1;
(statearr_32102_33703[(1)] = (5));

} else {
var statearr_32103_33704 = state_32090__$1;
(statearr_32103_33704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (6))){
var state_32090__$1 = state_32090;
var statearr_32104_33705 = state_32090__$1;
(statearr_32104_33705[(2)] = null);

(statearr_32104_33705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (3))){
var inst_32087 = (state_32090[(2)]);
var inst_32088 = cljs.core.async.close_BANG_(out);
var state_32090__$1 = (function (){var statearr_32105 = state_32090;
(statearr_32105[(9)] = inst_32087);

return statearr_32105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32090__$1,inst_32088);
} else {
if((state_val_32091 === (2))){
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32090__$1,(4),ch);
} else {
if((state_val_32091 === (11))){
var inst_32070 = (state_32090[(8)]);
var inst_32079 = (state_32090[(2)]);
var inst_32064 = inst_32070;
var state_32090__$1 = (function (){var statearr_32106 = state_32090;
(statearr_32106[(7)] = inst_32064);

(statearr_32106[(10)] = inst_32079);

return statearr_32106;
})();
var statearr_32107_33706 = state_32090__$1;
(statearr_32107_33706[(2)] = null);

(statearr_32107_33706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (9))){
var inst_32070 = (state_32090[(8)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32090__$1,(11),out,inst_32070);
} else {
if((state_val_32091 === (5))){
var inst_32070 = (state_32090[(8)]);
var inst_32064 = (state_32090[(7)]);
var inst_32074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32070,inst_32064);
var state_32090__$1 = state_32090;
if(inst_32074){
var statearr_32110_33707 = state_32090__$1;
(statearr_32110_33707[(1)] = (8));

} else {
var statearr_32112_33708 = state_32090__$1;
(statearr_32112_33708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (10))){
var inst_32082 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32113_33709 = state_32090__$1;
(statearr_32113_33709[(2)] = inst_32082);

(statearr_32113_33709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (8))){
var inst_32064 = (state_32090[(7)]);
var tmp32109 = inst_32064;
var inst_32064__$1 = tmp32109;
var state_32090__$1 = (function (){var statearr_32115 = state_32090;
(statearr_32115[(7)] = inst_32064__$1);

return statearr_32115;
})();
var statearr_32116_33710 = state_32090__$1;
(statearr_32116_33710[(2)] = null);

(statearr_32116_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_32118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32118[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_32118[(1)] = (1));

return statearr_32118;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_32090){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_32090);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e32119){var ex__29141__auto__ = e32119;
var statearr_32121_33711 = state_32090;
(statearr_32121_33711[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_32090[(4)]))){
var statearr_32122_33712 = state_32090;
(statearr_32122_33712[(1)] = cljs.core.first((state_32090[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33713 = state_32090;
state_32090 = G__33713;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_32090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_32090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_32123 = f__29342__auto__();
(statearr_32123[(6)] = c__29341__auto___33693);

return statearr_32123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32126 = arguments.length;
switch (G__32126) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_32166){
var state_val_32167 = (state_32166[(1)]);
if((state_val_32167 === (7))){
var inst_32162 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32168_33716 = state_32166__$1;
(statearr_32168_33716[(2)] = inst_32162);

(statearr_32168_33716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (1))){
var inst_32128 = (new Array(n));
var inst_32129 = inst_32128;
var inst_32130 = (0);
var state_32166__$1 = (function (){var statearr_32170 = state_32166;
(statearr_32170[(7)] = inst_32130);

(statearr_32170[(8)] = inst_32129);

return statearr_32170;
})();
var statearr_32171_33723 = state_32166__$1;
(statearr_32171_33723[(2)] = null);

(statearr_32171_33723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (4))){
var inst_32134 = (state_32166[(9)]);
var inst_32134__$1 = (state_32166[(2)]);
var inst_32135 = (inst_32134__$1 == null);
var inst_32136 = cljs.core.not(inst_32135);
var state_32166__$1 = (function (){var statearr_32172 = state_32166;
(statearr_32172[(9)] = inst_32134__$1);

return statearr_32172;
})();
if(inst_32136){
var statearr_32173_33724 = state_32166__$1;
(statearr_32173_33724[(1)] = (5));

} else {
var statearr_32174_33725 = state_32166__$1;
(statearr_32174_33725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (15))){
var inst_32156 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32175_33726 = state_32166__$1;
(statearr_32175_33726[(2)] = inst_32156);

(statearr_32175_33726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (13))){
var state_32166__$1 = state_32166;
var statearr_32179_33727 = state_32166__$1;
(statearr_32179_33727[(2)] = null);

(statearr_32179_33727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (6))){
var inst_32130 = (state_32166[(7)]);
var inst_32152 = (inst_32130 > (0));
var state_32166__$1 = state_32166;
if(cljs.core.truth_(inst_32152)){
var statearr_32180_33728 = state_32166__$1;
(statearr_32180_33728[(1)] = (12));

} else {
var statearr_32181_33729 = state_32166__$1;
(statearr_32181_33729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (3))){
var inst_32164 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32166__$1,inst_32164);
} else {
if((state_val_32167 === (12))){
var inst_32129 = (state_32166[(8)]);
var inst_32154 = cljs.core.vec(inst_32129);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32166__$1,(15),out,inst_32154);
} else {
if((state_val_32167 === (2))){
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32166__$1,(4),ch);
} else {
if((state_val_32167 === (11))){
var inst_32146 = (state_32166[(2)]);
var inst_32147 = (new Array(n));
var inst_32129 = inst_32147;
var inst_32130 = (0);
var state_32166__$1 = (function (){var statearr_32184 = state_32166;
(statearr_32184[(7)] = inst_32130);

(statearr_32184[(8)] = inst_32129);

(statearr_32184[(10)] = inst_32146);

return statearr_32184;
})();
var statearr_32185_33730 = state_32166__$1;
(statearr_32185_33730[(2)] = null);

(statearr_32185_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (9))){
var inst_32129 = (state_32166[(8)]);
var inst_32144 = cljs.core.vec(inst_32129);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32166__$1,(11),out,inst_32144);
} else {
if((state_val_32167 === (5))){
var inst_32134 = (state_32166[(9)]);
var inst_32130 = (state_32166[(7)]);
var inst_32129 = (state_32166[(8)]);
var inst_32139 = (state_32166[(11)]);
var inst_32138 = (inst_32129[inst_32130] = inst_32134);
var inst_32139__$1 = (inst_32130 + (1));
var inst_32140 = (inst_32139__$1 < n);
var state_32166__$1 = (function (){var statearr_32187 = state_32166;
(statearr_32187[(12)] = inst_32138);

(statearr_32187[(11)] = inst_32139__$1);

return statearr_32187;
})();
if(cljs.core.truth_(inst_32140)){
var statearr_32188_33731 = state_32166__$1;
(statearr_32188_33731[(1)] = (8));

} else {
var statearr_32189_33732 = state_32166__$1;
(statearr_32189_33732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (14))){
var inst_32159 = (state_32166[(2)]);
var inst_32160 = cljs.core.async.close_BANG_(out);
var state_32166__$1 = (function (){var statearr_32191 = state_32166;
(statearr_32191[(13)] = inst_32159);

return statearr_32191;
})();
var statearr_32192_33733 = state_32166__$1;
(statearr_32192_33733[(2)] = inst_32160);

(statearr_32192_33733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (10))){
var inst_32150 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32193_33734 = state_32166__$1;
(statearr_32193_33734[(2)] = inst_32150);

(statearr_32193_33734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (8))){
var inst_32129 = (state_32166[(8)]);
var inst_32139 = (state_32166[(11)]);
var tmp32190 = inst_32129;
var inst_32129__$1 = tmp32190;
var inst_32130 = inst_32139;
var state_32166__$1 = (function (){var statearr_32194 = state_32166;
(statearr_32194[(7)] = inst_32130);

(statearr_32194[(8)] = inst_32129__$1);

return statearr_32194;
})();
var statearr_32202_33735 = state_32166__$1;
(statearr_32202_33735[(2)] = null);

(statearr_32202_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_32166){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_32166);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e32206){var ex__29141__auto__ = e32206;
var statearr_32208_33744 = state_32166;
(statearr_32208_33744[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_32166[(4)]))){
var statearr_32209_33745 = state_32166;
(statearr_32209_33745[(1)] = cljs.core.first((state_32166[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33746 = state_32166;
state_32166 = G__33746;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_32166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_32166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_32211 = f__29342__auto__();
(statearr_32211[(6)] = c__29341__auto___33715);

return statearr_32211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32220 = arguments.length;
switch (G__32220) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29341__auto___33748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29342__auto__ = (function (){var switch__29137__auto__ = (function (state_32280){
var state_val_32281 = (state_32280[(1)]);
if((state_val_32281 === (7))){
var inst_32273 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32283_33749 = state_32280__$1;
(statearr_32283_33749[(2)] = inst_32273);

(statearr_32283_33749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (1))){
var inst_32227 = [];
var inst_32228 = inst_32227;
var inst_32229 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32280__$1 = (function (){var statearr_32288 = state_32280;
(statearr_32288[(7)] = inst_32229);

(statearr_32288[(8)] = inst_32228);

return statearr_32288;
})();
var statearr_32289_33750 = state_32280__$1;
(statearr_32289_33750[(2)] = null);

(statearr_32289_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (4))){
var inst_32232 = (state_32280[(9)]);
var inst_32232__$1 = (state_32280[(2)]);
var inst_32233 = (inst_32232__$1 == null);
var inst_32234 = cljs.core.not(inst_32233);
var state_32280__$1 = (function (){var statearr_32292 = state_32280;
(statearr_32292[(9)] = inst_32232__$1);

return statearr_32292;
})();
if(inst_32234){
var statearr_32293_33753 = state_32280__$1;
(statearr_32293_33753[(1)] = (5));

} else {
var statearr_32294_33754 = state_32280__$1;
(statearr_32294_33754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (15))){
var inst_32228 = (state_32280[(8)]);
var inst_32265 = cljs.core.vec(inst_32228);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(18),out,inst_32265);
} else {
if((state_val_32281 === (13))){
var inst_32258 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32305_33755 = state_32280__$1;
(statearr_32305_33755[(2)] = inst_32258);

(statearr_32305_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (6))){
var inst_32228 = (state_32280[(8)]);
var inst_32260 = inst_32228.length;
var inst_32261 = (inst_32260 > (0));
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32261)){
var statearr_32307_33756 = state_32280__$1;
(statearr_32307_33756[(1)] = (15));

} else {
var statearr_32308_33757 = state_32280__$1;
(statearr_32308_33757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (17))){
var inst_32270 = (state_32280[(2)]);
var inst_32271 = cljs.core.async.close_BANG_(out);
var state_32280__$1 = (function (){var statearr_32309 = state_32280;
(statearr_32309[(10)] = inst_32270);

return statearr_32309;
})();
var statearr_32310_33759 = state_32280__$1;
(statearr_32310_33759[(2)] = inst_32271);

(statearr_32310_33759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (3))){
var inst_32275 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32280__$1,inst_32275);
} else {
if((state_val_32281 === (12))){
var inst_32228 = (state_32280[(8)]);
var inst_32251 = cljs.core.vec(inst_32228);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(14),out,inst_32251);
} else {
if((state_val_32281 === (2))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32280__$1,(4),ch);
} else {
if((state_val_32281 === (11))){
var inst_32228 = (state_32280[(8)]);
var inst_32236 = (state_32280[(11)]);
var inst_32232 = (state_32280[(9)]);
var inst_32247 = inst_32228.push(inst_32232);
var tmp32319 = inst_32228;
var inst_32228__$1 = tmp32319;
var inst_32229 = inst_32236;
var state_32280__$1 = (function (){var statearr_32340 = state_32280;
(statearr_32340[(7)] = inst_32229);

(statearr_32340[(8)] = inst_32228__$1);

(statearr_32340[(12)] = inst_32247);

return statearr_32340;
})();
var statearr_32350_33763 = state_32280__$1;
(statearr_32350_33763[(2)] = null);

(statearr_32350_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (9))){
var inst_32229 = (state_32280[(7)]);
var inst_32242 = cljs.core.keyword_identical_QMARK_(inst_32229,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32280__$1 = state_32280;
var statearr_32363_33764 = state_32280__$1;
(statearr_32363_33764[(2)] = inst_32242);

(statearr_32363_33764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (5))){
var inst_32229 = (state_32280[(7)]);
var inst_32236 = (state_32280[(11)]);
var inst_32232 = (state_32280[(9)]);
var inst_32239 = (state_32280[(13)]);
var inst_32236__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32232) : f.call(null,inst_32232));
var inst_32239__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32236__$1,inst_32229);
var state_32280__$1 = (function (){var statearr_32366 = state_32280;
(statearr_32366[(11)] = inst_32236__$1);

(statearr_32366[(13)] = inst_32239__$1);

return statearr_32366;
})();
if(inst_32239__$1){
var statearr_32367_33765 = state_32280__$1;
(statearr_32367_33765[(1)] = (8));

} else {
var statearr_32368_33766 = state_32280__$1;
(statearr_32368_33766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (14))){
var inst_32236 = (state_32280[(11)]);
var inst_32232 = (state_32280[(9)]);
var inst_32253 = (state_32280[(2)]);
var inst_32254 = [];
var inst_32255 = inst_32254.push(inst_32232);
var inst_32228 = inst_32254;
var inst_32229 = inst_32236;
var state_32280__$1 = (function (){var statearr_32373 = state_32280;
(statearr_32373[(7)] = inst_32229);

(statearr_32373[(14)] = inst_32253);

(statearr_32373[(8)] = inst_32228);

(statearr_32373[(15)] = inst_32255);

return statearr_32373;
})();
var statearr_32374_33767 = state_32280__$1;
(statearr_32374_33767[(2)] = null);

(statearr_32374_33767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (16))){
var state_32280__$1 = state_32280;
var statearr_32375_33768 = state_32280__$1;
(statearr_32375_33768[(2)] = null);

(statearr_32375_33768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (10))){
var inst_32244 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32244)){
var statearr_32376_33771 = state_32280__$1;
(statearr_32376_33771[(1)] = (11));

} else {
var statearr_32377_33772 = state_32280__$1;
(statearr_32377_33772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (18))){
var inst_32267 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32380_33773 = state_32280__$1;
(statearr_32380_33773[(2)] = inst_32267);

(statearr_32380_33773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (8))){
var inst_32239 = (state_32280[(13)]);
var state_32280__$1 = state_32280;
var statearr_32381_33774 = state_32280__$1;
(statearr_32381_33774[(2)] = inst_32239);

(statearr_32381_33774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29138__auto__ = null;
var cljs$core$async$state_machine__29138__auto____0 = (function (){
var statearr_32383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32383[(0)] = cljs$core$async$state_machine__29138__auto__);

(statearr_32383[(1)] = (1));

return statearr_32383;
});
var cljs$core$async$state_machine__29138__auto____1 = (function (state_32280){
while(true){
var ret_value__29139__auto__ = (function (){try{while(true){
var result__29140__auto__ = switch__29137__auto__(state_32280);
if(cljs.core.keyword_identical_QMARK_(result__29140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29140__auto__;
}
break;
}
}catch (e32386){var ex__29141__auto__ = e32386;
var statearr_32388_33781 = state_32280;
(statearr_32388_33781[(2)] = ex__29141__auto__);


if(cljs.core.seq((state_32280[(4)]))){
var statearr_32391_33782 = state_32280;
(statearr_32391_33782[(1)] = cljs.core.first((state_32280[(4)])));

} else {
throw ex__29141__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33783 = state_32280;
state_32280 = G__33783;
continue;
} else {
return ret_value__29139__auto__;
}
break;
}
});
cljs$core$async$state_machine__29138__auto__ = function(state_32280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29138__auto____1.call(this,state_32280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29138__auto____0;
cljs$core$async$state_machine__29138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29138__auto____1;
return cljs$core$async$state_machine__29138__auto__;
})()
})();
var state__29343__auto__ = (function (){var statearr_32394 = f__29342__auto__();
(statearr_32394[(6)] = c__29341__auto___33748);

return statearr_32394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29343__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
