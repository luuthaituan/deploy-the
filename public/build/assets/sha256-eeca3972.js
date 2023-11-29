import{a5 as L,a0 as R,a1 as O}from"./app-96326f91.js";var q={exports:{}};function $(C){throw new Error('Could not dynamically require "'+C+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var A={exports:{}};const D={},U=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),V=L(U);var k;function G(){return k||(k=1,function(C,P){(function(w,l){C.exports=l()})(R,function(){var w=w||function(l,B){var c;if(typeof window<"u"&&window.crypto&&(c=window.crypto),typeof self<"u"&&self.crypto&&(c=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(c=globalThis.crypto),!c&&typeof window<"u"&&window.msCrypto&&(c=window.msCrypto),!c&&typeof R<"u"&&R.crypto&&(c=R.crypto),!c&&typeof $=="function")try{c=V}catch{}var z=function(){if(c){if(typeof c.getRandomValues=="function")try{return c.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof c.randomBytes=="function")try{return c.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},x=Object.create||function(){function r(){}return function(t){var e;return r.prototype=t,e=new r,r.prototype=null,e}}(),m={},_=m.lib={},y=_.Base=function(){return{extend:function(r){var t=x(this);return r&&t.mixIn(r),(!t.hasOwnProperty("init")||this.init===t.init)&&(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var r=this.extend();return r.init.apply(r,arguments),r},init:function(){},mixIn:function(r){for(var t in r)r.hasOwnProperty(t)&&(this[t]=r[t]);r.hasOwnProperty("toString")&&(this.toString=r.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=_.WordArray=y.extend({init:function(r,t){r=this.words=r||[],t!=B?this.sigBytes=t:this.sigBytes=r.length*4},toString:function(r){return(r||d).stringify(this)},concat:function(r){var t=this.words,e=r.words,o=this.sigBytes,s=r.sigBytes;if(this.clamp(),o%4)for(var a=0;a<s;a++){var f=e[a>>>2]>>>24-a%4*8&255;t[o+a>>>2]|=f<<24-(o+a)%4*8}else for(var u=0;u<s;u+=4)t[o+u>>>2]=e[u>>>2];return this.sigBytes+=s,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=l.ceil(t/4)},clone:function(){var r=y.clone.call(this);return r.words=this.words.slice(0),r},random:function(r){for(var t=[],e=0;e<r;e+=4)t.push(z());return new h.init(t,r)}}),S=m.enc={},d=S.Hex={stringify:function(r){for(var t=r.words,e=r.sigBytes,o=[],s=0;s<e;s++){var a=t[s>>>2]>>>24-s%4*8&255;o.push((a>>>4).toString(16)),o.push((a&15).toString(16))}return o.join("")},parse:function(r){for(var t=r.length,e=[],o=0;o<t;o+=2)e[o>>>3]|=parseInt(r.substr(o,2),16)<<24-o%8*4;return new h.init(e,t/2)}},p=S.Latin1={stringify:function(r){for(var t=r.words,e=r.sigBytes,o=[],s=0;s<e;s++){var a=t[s>>>2]>>>24-s%4*8&255;o.push(String.fromCharCode(a))}return o.join("")},parse:function(r){for(var t=r.length,e=[],o=0;o<t;o++)e[o>>>2]|=(r.charCodeAt(o)&255)<<24-o%4*8;return new h.init(e,t)}},n=S.Utf8={stringify:function(r){try{return decodeURIComponent(escape(p.stringify(r)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(r){return p.parse(unescape(encodeURIComponent(r)))}},i=_.BufferedBlockAlgorithm=y.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(r){typeof r=="string"&&(r=n.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes},_process:function(r){var t,e=this._data,o=e.words,s=e.sigBytes,a=this.blockSize,f=a*4,u=s/f;r?u=l.ceil(u):u=l.max((u|0)-this._minBufferSize,0);var b=u*a,g=l.min(b*4,s);if(b){for(var H=0;H<b;H+=a)this._doProcessBlock(o,H);t=o.splice(0,b),e.sigBytes-=g}return new h.init(t,g)},clone:function(){var r=y.clone.call(this);return r._data=this._data.clone(),r},_minBufferSize:0});_.Hasher=i.extend({cfg:y.extend(),init:function(r){this.cfg=this.cfg.extend(r),this.reset()},reset:function(){i.reset.call(this),this._doReset()},update:function(r){return this._append(r),this._process(),this},finalize:function(r){r&&this._append(r);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function(r){return function(t,e){return new v.HMAC.init(r,e).finalize(t)}}});var v=m.algo={};return m}(Math);return w})}(A)),A.exports}(function(C,P){(function(w,l){C.exports=l(G())})(R,function(w){return function(l){var B=w,c=B.lib,z=c.WordArray,x=c.Hasher,m=B.algo,_=[],y=[];(function(){function d(v){for(var r=l.sqrt(v),t=2;t<=r;t++)if(!(v%t))return!1;return!0}function p(v){return(v-(v|0))*4294967296|0}for(var n=2,i=0;i<64;)d(n)&&(i<8&&(_[i]=p(l.pow(n,1/2))),y[i]=p(l.pow(n,1/3)),i++),n++})();var h=[],S=m.SHA256=x.extend({_doReset:function(){this._hash=new z.init(_.slice(0))},_doProcessBlock:function(d,p){for(var n=this._hash.words,i=n[0],v=n[1],r=n[2],t=n[3],e=n[4],o=n[5],s=n[6],a=n[7],f=0;f<64;f++){if(f<16)h[f]=d[p+f]|0;else{var u=h[f-15],b=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,g=h[f-2],H=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;h[f]=b+h[f-7]+H+h[f-16]}var E=e&o^~e&s,I=i&v^i&r^v&r,T=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),j=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25),W=a+j+E+y[f]+h[f],F=T+I;a=s,s=o,o=e,e=t+W|0,t=r,r=v,v=i,i=W+F|0}n[0]=n[0]+i|0,n[1]=n[1]+v|0,n[2]=n[2]+r|0,n[3]=n[3]+t|0,n[4]=n[4]+e|0,n[5]=n[5]+o|0,n[6]=n[6]+s|0,n[7]=n[7]+a|0},_doFinalize:function(){var d=this._data,p=d.words,n=this._nDataBytes*8,i=d.sigBytes*8;return p[i>>>5]|=128<<24-i%32,p[(i+64>>>9<<4)+14]=l.floor(n/4294967296),p[(i+64>>>9<<4)+15]=n,d.sigBytes=p.length*4,this._process(),this._hash},clone:function(){var d=x.clone.call(this);return d._hash=this._hash.clone(),d}});B.SHA256=x._createHelper(S),B.HmacSHA256=x._createHmacHelper(S)}(Math),w.SHA256})})(q);var K=q.exports;const J=O(K);export{J as s};
