/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{371:function(ia,ca,f){f.r(ca);f.d(ca,"ByteRangeRequest",function(){return na});var ba=f(1),y=f(0);f.n(y);var ha=f(2),ea=f(130);ia=f(83);var da=f(217),aa=f(65),x=f(61),w=f(216),h=f(147);f=f(338);var r=[],e=[],n=window,z=function(){return function(){this.pl=1}}(),fa;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(fa||(fa={}));var na=function(){function f(e,f,h,r){var x=this;this.url=e;this.range=f;this.Re=h;this.withCredentials=
r;this.UY=fa;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);n.Uint8Array&&(this.request.responseType="arraybuffer");r&&(this.request.withCredentials=r);ja.DISABLE_RANGE_HEADER||(Object(y.isUndefined)(f.stop)?this.request.setRequestHeader("Range","bytes="+f.start):this.request.setRequestHeader("Range",["bytes=",f.start,"-",f.stop-1].join("")));this.request.setRequestHeader("X-Requested-With","XMLHttpRequest");h&&Object.keys(h).forEach(function(e){x.request.setRequestHeader(e,
h[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=w.a.NOT_STARTED}f.prototype.start=function(e){var f=this,h=this.request;h.onreadystatechange=function(){if(f.aborted)return f.status=w.a.ABORTED,e({code:w.a.ABORTED});if(this.readyState===f.UY.DONE){f.uA();var r=0===window.document.URL.indexOf("file:///");200===h.status||206===h.status||r&&0===h.status?(r=n.GQ(this),
f.Fs(r,e)):(f.status=w.a.ERROR,e({code:f.status,status:f.status}))}};this.request.send(null);this.status=w.a.STARTED};f.prototype.Fs=function(e,f){this.status=w.a.SUCCESS;if(f)return f(!1,e)};f.prototype.abort=function(){this.uA();this.aborted=!0;this.request.abort()};f.prototype.uA=function(){var n=Object(h.c)(this.url,this.range,e);-1!==n&&e.splice(n,1);if(0<r.length){n=r.shift();var w=new f(n.url,n.range,this.Re,this.withCredentials);n.request=w;e.push(n);w.start(Object(h.d)(n))}};f.prototype.extend=
function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return f}(),ja=function(f){function n(e,h,n,r,w){n=f.call(this,e,n,r)||this;n.sl={};n.Uy=h;n.url=e;n.DISABLE_RANGE_HEADER=!1;n.Zv=na;n.YK=3;n.Re=w||{};return n}Object(ba.c)(n,f);n.prototype.hu=function(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(h){case !1:case x.a.NEVER_CACHE:e=e+n+"_="+Object(y.uniqueId)();break;case !0:case x.a.CACHE:e=e+n+"_="+f.start+","+(Object(y.isUndefined)(f.stop)?"":f.stop)}return e};n.prototype.RO=
function(e,f,h,n){void 0===h&&(h={});return new this.Zv(e,f,h,n)};n.prototype.l5=function(f,h,n,w,x){for(var z=0;z<r.length;z++)if(Object(y.isEqual)(r[z].range,h)&&Object(y.isEqual)(r[z].url,f))return r[z].qg.push(w),r[z].sB++,null;for(z=0;z<e.length;z++)if(Object(y.isEqual)(e[z].range,h)&&Object(y.isEqual)(e[z].url,f))return e[z].qg.push(w),e[z].sB++,null;n={url:f,range:h,Uy:n,qg:[w],sB:1};if(0===r.length&&e.length<this.YK)return e.push(n),n.request=this.RO(f,h,x,this.withCredentials),n;r.push(n);
return null};n.prototype.Rm=function(f,n,w){var x=this.hu(f,n,this.Uy);(f=this.l5(x,n,this.Uy,w,this.Re))&&f.request.start(Object(h.d)(f));return function(){var f=Object(h.c)(x,n,e);if(-1!==f){var w=--e[f].sB;0===w&&e[f].request&&e[f].request.abort()}else f=Object(h.c)(x,n,r),-1!==f&&(w=--r[f].sB,0===w&&r.splice(f,1))}};n.prototype.mQ=function(){return{start:-ea.a}};n.prototype.p8=function(){var e=-(ea.a+ea.e);return{start:e-ea.d,end:e}};n.prototype.Mr=function(e){var f=this;this.$y=!0;var h=ea.a;
this.Rm(this.url,this.mQ(),function(n,r,w){function x(){var h=f.Kd.jQ();f.Rm(f.url,h,function(n,r){if(n)return Object(ha.i)("Error loading central directory: "+n),e(n);r=Object(aa.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.Kd.ET(r);f.WE=!0;f.$y=!1;return e(!1)})}if(n)return Object(ha.i)("Error loading end header: "+n),e(n,r,w);r=Object(aa.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");
try{f.Kd=new da.a(r)}catch(ua){return e(ua)}f.Kd.N9?f.Rm(f.url,f.p8(),function(h,n){if(h)return Object(ha.i)("Error loading zip64 header: "+h),e(h);n=Object(aa.a)(n);f.Kd.f$(n);x()}):x()})};n.prototype.DQ=function(e){e(Object.keys(this.Kd.um))};n.prototype.NI=function(e,f){var h=this;if(this.Kd.HO(e)){var n=this.Kd.lA(e);if(n in this.sl){var r=this.rh[e];r.Iq=this.sl[n];r.Iq.pl++;r.cancel=r.Iq.cancel}else{var w=this.Kd.N6(e),x=this.Rm(this.url,w,function(r,x){r?(Object(ha.i)('Error loading part "'+
e+'": '+r),h.Rm(h.url,w,function(r,x){if(r)return f(r,e);h.KT(x,w,n,e,f)})):h.KT(x,w,n,e,f)}),y=this.rh[e];y&&(y.NV=!0,y.cancel=function(){y.Iq.pl--;0===y.Iq.pl&&(x(),delete h.sl[n])},this.sl[n]=new z(n),y.Iq=this.sl[n],y.Iq.cancel=y.cancel)}}else delete this.rh[e],f(Error('File not found: "'+e+'"'),e)};n.prototype.KT=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.sl[h])return;n=this.sl[h].pl;for(var w=f.xp.length,x=0;x<w;++x){var z=f.xp[x];
r(!1,z.tp,e["string"===typeof e?"substring":"subarray"](z.start,z.stop),this.Kd.CR(z.tp));z.tp in this.rh&&delete this.rh[z.tp]}}while(n!==this.sl[h].pl);delete this.sl[h]}};n.DISABLE_RANGE_HEADER=!1;n.YK=3;return n}(ia.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.Hja=f;r.startOffset=h;r.endOffset=n;r.RO=function(e,h,n,w){Object(y.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.hu(r.url,h,r.Uy);
return new f.Zv(e,h,n,w)};return r}Object(ba.c)(f,e);return f})(ja);Object(f.a)(ja);Object(f.b)(ja);ca["default"]=ja}}]);}).call(this || window)
