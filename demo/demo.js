/*! For license information please see demo.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.demo=e():t.demo=e()}(globalThis,()=>(()=>{"use strict";var t,e;(t=>{Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})({}),void 0===Math.imul&&(Math.imul=function(t,e){return(4294901760&t)*(65535&e)+(65535&t)*(0|e)|0}),void 0===ArrayBuffer.isView&&(ArrayBuffer.isView=function(t){return null!=t&&null!=t.__proto__&&t.__proto__.__proto__===Int8Array.prototype.__proto__}),void 0===Array.prototype.fill&&Object.defineProperty(Array.prototype,"fill",{value:function(t){if(null==this)throw new TypeError("this is null or not defined");for(var e=Object(this),n=e.length>>>0,i=0|arguments[1],r=i<0?Math.max(n+i,0):Math.min(i,n),o=arguments[2],s=void 0===o?n:0|o,a=s<0?Math.max(n+s,0):Math.min(s,n);r<a;)e[r]=t,r++;return e}}),[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(t){void 0===t.prototype.fill&&Object.defineProperty(t.prototype,"fill",{value:Array.prototype.fill})}),void 0===Math.clz32&&(Math.clz32=(t=Math.log,e=Math.LN2,function(n){var i=n>>>0;return 0===i?32:31-(t(i)/e|0)|0})),void 0===String.prototype.startsWith&&Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){return e=e||0,this.lastIndexOf(t,e)===e}});var n,i,r,o,s,a,l,c,d,u,h,p,v,f,_,g,m,b,y,w,x,C,k,A,S,E,O,z,M,T,I,L,$=Math.imul,N=ArrayBuffer.isView,P=Math.clz32;class D{}class j{}class R{constructor(t){this.l1_1=t}s(){return this.l1_1.s()}}class B{}class F{}class H{}class q{}class U{}class V{}class W{}class K{constructor(t,e){this.w1_1=t,this.x1_1=e}y1(t){return xn(this.x1_1,t.x1_1)}z1(t){return this.y1(t instanceof K?t:Pn())}equals(t){return this===t}hashCode(){return An(this)}toString(){return this.w1_1}}class X{constructor(){n=this,this.a2_1=new Y(0,-2147483648),this.b2_1=new Y(-1,2147483647),this.c2_1=8,this.d2_1=64}}class Y extends j{constructor(t,e){n===y&&new X,super(),this.e2_1=t,this.f2_1=e}g2(t){return Ye(this,t)}z1(t){return this.g2(t instanceof Y?t:Pn())}toString(){return Qe(this,10)}equals(t){return t instanceof Y&&Je(this,t)}hashCode(){return function(t){return fn(),t.e2_1^t.f2_1}(this)}valueOf(){return Ze(this)}}class G{}class Z{}class Q{toString(){return"kotlin.Unit"}}class J{static c3(t){return In(this,t)}m1(t){var e;t:if(Zn(this,F)&&this.a1())e=!1;else{for(var n=this.s();n.t();)if(On(n.u(),t)){e=!0;break t}e=!1}return e}n1(t){var e;t:if(Zn(t,F)&&t.a1())e=!0;else{for(var n=t.s();n.t();){var i=n.u();if(!this.m1(i)){e=!1;break t}}e=!0}return e}a1(){return 0===this.c1()}toString(){return ke(this,", ","[","]",y,y,(t=this,e=>e===t?"(this Collection)":De(e)));var t}toArray(){return ni(this)}}class tt extends J{static b3(){return this.c3()}e1(t){this.d3();for(var e=!1,n=t.s();n.t();){var i=n.u();this.z(i)&&(e=!0)}return e}toJSON(){return this.toArray()}d3(){}}class et{constructor(t){this.g3_1=t,this.e3_1=0,this.f3_1=-1}t(){return this.e3_1<this.g3_1.c1()}u(){if(!this.t())throw It.h3();var t=this.e3_1;return this.e3_1=t+1|0,this.f3_1=t,this.g3_1.b1(this.f3_1)}}class nt extends tt{static j3(){var t=this.b3();return t.i3_1=0,t}z(t){return this.d3(),this.k3(this.c1(),t),!0}s(){return new et(this)}m1(t){return this.l3(t)>=0}l3(t){var e;t:{for(var n=0,i=this.s();i.t();){if(On(i.u(),t)){e=n;break t}n=n+1|0}e=-1}return e}equals(t){return t===this||!(null==t||!Zn(t,q))&&k.n3(this,t)}hashCode(){return k.o3(this)}}class it{static w3(){var t=In(this);return t.u3_1=null,t.v3_1=null,t}q1(t){return!(null==Di(this,t))}r1(t){var e,n=this.v1();t:if(Zn(n,F)&&n.a1())e=!1;else{for(var i=n.s();i.t();)if(On(i.u().p1(),t)){e=!0;break t}e=!1}return e}e4(t){if(null==t||!Zn(t,U))return!1;var e=t.o1(),n=t.p1(),i=(Zn(this,V)?this:Pn()).s1(e);return!(!On(n,i)||null==i&&!(Zn(this,V)?this:Pn()).q1(e))}equals(t){if(t===this)return!0;if(null==t||!Zn(t,V))return!1;if(this.c1()!==t.c1())return!1;var e,n=t.v1();t:if(Zn(n,F)&&n.a1())e=!0;else{for(var i=n.s();i.t();){var r=i.u();if(!this.e4(r)){e=!1;break t}}e=!0}return e}s1(t){var e=Di(this,t);return null==e?null:e.p1()}hashCode(){return zn(this.v1())}a1(){return 0===this.c1()}c1(){return this.v1().c1()}t1(){return null==this.u3_1&&(this.u3_1=te.s9(this)),Dn(this.u3_1)}toString(){var t;return ke(this.v1(),", ","{","}",y,y,(t=this,e=>{return Pi(n=t,(i=e).o1())+"="+Pi(n,i.p1());var n,i}))}u1(){return null==this.v3_1&&(this.v3_1=ee.v9(this)),Dn(this.v3_1)}}class rt extends it{static t3(){var t=this.w3();return t.r3_1=null,t.s3_1=null,t}x3(){return vt.z3(this)}a4(){return _t.c4(this)}t1(){var t,e=this.r3_1;if(null==e){var n=this.x3();this.r3_1=n,t=n}else t=e;return t}u1(){var t,e=this.s3_1;if(null==e){var n=this.a4();this.s3_1=n,t=n}else t=e;return t}d3(){}}class ot extends tt{static f4(){return this.b3()}equals(t){return t===this||!(null==t||!Zn(t,H))&&A.g4(this,t)}hashCode(){return A.h4(this)}}class st{constructor(){x=this;var t=at.y(0);t.x_1=!0,this.i4_1=t}}class at extends nt{constructor(t){return new.target.a3(t)}static a3(t){ai();var e=this.j3();return e.w_1=t,e.x_1=!1,e}static i1(){return ai(),this.a3([])}static y(t){ai();var e=this.a3([]);if(!(t>=0)){var n="Negative initial capacity: "+t;throw Tt.r(En(n))}return e}static d1(t){ai();var e=ti(t);return this.a3(e)}c1(){return this.w_1.length}b1(t){return this.w_1[function(t,e){return k.j4(e,t.c1()),e}(this,t)]}z(t){return this.d3(),this.w_1.push(t),this.i3_1=this.i3_1+1|0,!0}k3(t,e){this.d3(),this.w_1.splice(function(t,e){return k.k4(e,t.c1()),e}(this,t),0,e),this.i3_1=this.i3_1+1|0}e1(t){if(this.d3(),t.a1())return!1;for(var e,n,i,r=(e=this,n=t.c1(),i=e.c1(),e.w_1.length=e.c1()+n|0,i),o=0,s=t.s();s.t();){var a=s.u(),l=o;o=l+1|0;var c=ei(l);this.w_1[r+c|0]=a}return this.i3_1=this.i3_1+1|0,!0}l3(t){return function(t,e){if(null==e){var n=0,i=t.length-1|0;if(n<=i)do{var r=n;if(n=n+1|0,null==t[r])return r}while(n<=i)}else{var o=0,s=t.length-1|0;if(o<=s)do{var a=o;if(o=o+1|0,On(e,t[a]))return a}while(o<=s)}return-1}(this.w_1,t)}toString(){return Ce(this.w_1,", ","[","]",y,y,wn)}l4(){return[].slice.call(this.w_1)}toArray(){return this.l4()}d3(){if(this.x_1)throw Mt.p4()}}class lt extends rt{static w4(t){var e=this.t3();return e.v4_1=null,e.u4_1=t,e}static x4(){return this.w4(At.i5())}static j5(t,e){return this.w4(At.k5(t,e))}static l5(t){return this.j5(t,1)}q1(t){return this.u4_1.m5(t)}r1(t){return this.u4_1.r1(t)}x3(){return ct.o5(this.u4_1)}a4(){return dt.q5(this.u4_1)}v1(){var t,e=this.v4_1;if(null==e){var n=ht.s5(this.u4_1);this.v4_1=n,t=n}else t=e;return t}s1(t){return this.u4_1.s1(t)}d4(t,e){return this.u4_1.d4(t,e)}c1(){return this.u4_1.c1()}}class ct extends ot{constructor(t){return new.target.o5(t)}static o5(t){var e=this.f4();return e.n5_1=t,e}c1(){return this.n5_1.c1()}a1(){return 0===this.n5_1.c1()}m1(t){return this.n5_1.m5(t)}z(t){throw Mt.p4()}e1(t){throw Mt.p4()}s(){return this.n5_1.t5()}d3(){return this.n5_1.u5()}}class dt extends tt{constructor(t){return new.target.q5(t)}static q5(t){var e=this.b3();return e.p5_1=t,e}c1(){return this.p5_1.c1()}a1(){return 0===this.p5_1.c1()}v5(t){return this.p5_1.r1(t)}m1(t){return this.v5(t)}w5(t){throw Mt.p4()}z(t){return this.w5(t)}x5(t){throw Mt.p4()}e1(t){return this.x5(t)}s(){return this.p5_1.y5()}d3(){return this.p5_1.u5()}}class ut extends ot{static a6(t){var e=this.f4();return e.z5_1=t,e}c1(){return this.z5_1.c1()}a1(){return 0===this.z5_1.c1()}c6(t){return this.z5_1.e6(t)}m1(t){return!(null==t||!Zn(t,U))&&this.c6(null!=t&&Zn(t,U)?t:Pn())}d6(t){throw Mt.p4()}z(t){return this.d6(null!=t&&Zn(t,U)?t:Pn())}e1(t){throw Mt.p4()}n1(t){return this.z5_1.f6(t)}d3(){return this.z5_1.u5()}}class ht extends ut{constructor(t){return new.target.s5(t)}static s5(t){return this.a6(t)}s(){return this.z5_1.b6()}}class pt{constructor(t){this.g6_1=t}t(){return this.g6_1.t()}u(){return this.g6_1.u().o1()}}class vt extends ot{constructor(t){return new.target.z3(t)}static z3(t){var e=this.f4();return e.y3_1=t,e}h6(t){throw Mt.i6("Add is not supported on keys")}z(t){return this.h6(t)}m5(t){return this.y3_1.q1(t)}m1(t){return this.m5(t)}s(){var t=this.y3_1.v1().s();return new pt(t)}c1(){return this.y3_1.c1()}d3(){return this.y3_1.d3()}}class ft{constructor(t){this.j6_1=t}t(){return this.j6_1.t()}u(){return this.j6_1.u().p1()}}class _t extends tt{constructor(t){return new.target.c4(t)}static c4(t){var e=this.b3();return e.b4_1=t,e}w5(t){throw Mt.i6("Add is not supported on values")}z(t){return this.w5(t)}v5(t){return this.b4_1.r1(t)}m1(t){return this.v5(t)}s(){var t=this.b4_1.v1().s();return new ft(t)}c1(){return this.b4_1.c1()}d3(){return this.b4_1.d3()}}class gt extends ot{static l6(t){var e=this.f4();return e.k6_1=t,e}static m6(){return this.l6(At.i5())}static n6(t){for(var e=this.l6(At.o6(t.c1())),n=t.s();n.t();){var i=n.u();e.k6_1.d4(i,!0)}return e}z(t){return null==this.k6_1.d4(t,!0)}m1(t){return this.k6_1.m5(t)}a1(){return 0===this.k6_1.c1()}s(){return this.k6_1.t5()}c1(){return this.k6_1.c1()}}class mt{constructor(){this.a7_1=-1640531527,this.b7_1=8,this.c7_1=2,this.d7_1=-1}}class bt{constructor(t){this.e7_1=t,this.f7_1=0,this.g7_1=-1,this.h7_1=this.e7_1.f5_1,this.i7()}i7(){for(;this.f7_1<this.e7_1.d5_1&&this.e7_1.a5_1[this.f7_1]<0;)this.f7_1=this.f7_1+1|0}t(){return this.f7_1<this.e7_1.d5_1}j7(){if(this.e7_1.f5_1!==this.h7_1)throw Nt.k7()}}class yt extends bt{u(){if(this.j7(),this.f7_1>=this.e7_1.d5_1)throw It.h3();var t=this.f7_1;this.f7_1=t+1|0,this.g7_1=t;var e=this.e7_1.y4_1[this.g7_1];return this.i7(),e}}class wt extends bt{u(){if(this.j7(),this.f7_1>=this.e7_1.d5_1)throw It.h3();var t=this.f7_1;this.f7_1=t+1|0,this.g7_1=t;var e=Dn(this.e7_1.z4_1)[this.g7_1];return this.i7(),e}}class xt extends bt{u(){if(this.j7(),this.f7_1>=this.e7_1.d5_1)throw It.h3();var t=this.f7_1;this.f7_1=t+1|0,this.g7_1=t;var e=new Ct(this.e7_1,this.g7_1);return this.i7(),e}x7(){if(this.f7_1>=this.e7_1.d5_1)throw It.h3();var t=this.f7_1;this.f7_1=t+1|0,this.g7_1=t;var e=this.e7_1.y4_1[this.g7_1],n=(null==e?null:zn(e))??0,i=Dn(this.e7_1.z4_1)[this.g7_1],r=n^((null==i?null:zn(i))??0);return this.i7(),r}y7(t){if(this.f7_1>=this.e7_1.d5_1)throw It.h3();var e=this.f7_1;this.f7_1=e+1|0,this.g7_1=e;var n=this.e7_1.y4_1[this.g7_1];On(n,this.e7_1)?t.a8("(this Map)"):t.z7(n),t.b8(61);var i=Dn(this.e7_1.z4_1)[this.g7_1];On(i,this.e7_1)?t.a8("(this Map)"):t.z7(i),this.i7()}}class Ct{constructor(t,e){this.t6_1=t,this.u6_1=e,this.v6_1=this.t6_1.f5_1}o1(){return di(this),this.t6_1.y4_1[this.u6_1]}p1(){return di(this),Dn(this.t6_1.z4_1)[this.u6_1]}equals(t){return!(null==t||!Zn(t,U)||!On(t.o1(),this.o1()))&&On(t.p1(),this.p1())}hashCode(){var t=this.o1(),e=(null==t?null:zn(t))??0,n=this.p1();return e^((null==n?null:zn(n))??0)}toString(){return De(this.o1())+"="+De(this.p1())}}class kt{}class At{constructor(t,e,n,i,r,o){return new.target.c8(t,e,n,i,r,o)}static c8(t,e,n,i,r,o){var s=In(this);return s.y4_1=t,s.z4_1=e,s.a5_1=n,s.b5_1=i,s.c5_1=r,s.d5_1=o,s.e5_1=ci(0,hi(s)),s.f5_1=0,s.g5_1=0,s.h5_1=!1,s}c1(){return this.g5_1}static i5(){return this.o6(8)}static o6(t){return this.c8(ri(t),null,new Int32Array(t),new Int32Array(li(0,t)),2,0)}static k5(t,e){var n=this.o6(t);if(!(e>0)){var i="Non-positive load factor: "+e;throw Tt.r(En(i))}return n}r1(t){return function(t,e){for(var n=t.d5_1;(n=n-1|0)>=0;)if(t.a5_1[n]>=0&&On(Dn(t.z4_1)[n],e))return n;return-1}(this,t)>=0}s1(t){var e=bi(this,t);return e<0?null:Dn(this.z4_1)[e]}m5(t){return bi(this,t)>=0}d4(t,e){var n=function(t,e){t.u5();t:for(;;)for(var n=fi(t,e),i=Ie($(t.c5_1,2),hi(t)/2|0),r=0;;){var o=t.b5_1[n];if(0===o){if(t.d5_1>=ui(t)){vi(t,1);continue t}var s=t.d5_1;t.d5_1=s+1|0;var a=s;return t.y4_1[a]=e,t.a5_1[a]=n,t.b5_1[n]=a+1|0,t.g5_1=t.g5_1+1|0,pi(t),r>t.c5_1&&(t.c5_1=r),a}if(On(t.y4_1[o-1|0],e))return 0|-o;if((r=r+1|0)>i){gi(t,$(hi(t),2));continue t}var l=n;n=l-1|0,0===l&&(n=hi(t)-1|0)}}(this,t),i=function(t){var e=t.z4_1;if(null!=e)return e;var n=ri(ui(t));return t.z4_1=n,n}(this);if(n<0){var r=i[(0|-n)-1|0];return i[(0|-n)-1|0]=e,r}return i[n]=e,null}equals(t){var e,n;return t===this?e=!0:(n=!(null==t||!Zn(t,V))&&function(t,e){return t.g5_1===e.c1()&&t.f6(e.v1())}(this,t),e=n),e}hashCode(){for(var t=0,e=this.b6();e.t();)t=t+e.x7()|0;return t}toString(){var t=Vt.d8(2+$(this.g5_1,3)|0);t.a8("{");for(var e=0,n=this.b6();n.t();)e>0&&t.a8(", "),n.y7(t),e=e+1|0;return t.a8("}"),t.toString()}u5(){if(this.h5_1)throw Mt.p4()}e6(t){var e=bi(this,t.o1());return!(e<0)&&On(Dn(this.z4_1)[e],t.p1())}e8(t){return this.e6(Zn(t,U)?t:Pn())}t5(){return new yt(this)}y5(){return new wt(this)}b6(){return new xt(this)}}class St extends lt{static l8(){return this.x4()}static m8(t){return this.l5(t)}d3(){return this.u4_1.u5()}}class Et extends gt{static g1(){return this.m6()}static h1(t){return this.n6(t)}d3(){return this.k6_1.u5()}}class Ot extends Error{static r8(){var t=Ln(this,Error,[null]);return $n(t),Ci(t),t}static j2(t){var e=Ln(this,Error,[t]);return $n(e,t),Ci(e),e}}class zt extends Ot{static n8(){var t=this.r8();return xi(t),t}static y6(t){var e=this.j2(t);return xi(e),e}}class Mt extends zt{static p4(){var t=this.n8();return yi(t),t}static i6(t){var e=this.y6(t);return yi(e),e}}class Tt extends zt{static q8(){var t=this.n8();return wi(t),t}static r(t){var e=this.y6(t);return wi(e),e}}class It extends zt{static h3(){var t=this.n8();return ki(t),t}static n(t){var e=this.y6(t);return ki(e),e}}class Lt extends zt{static v8(){var t=this.n8();return Ai(t),t}static w8(t){var e=this.y6(t);return Ai(e),e}}class $t extends zt{static x8(){var t=this.n8();return Si(t),t}static n2(t){var e=this.y6(t);return Si(e),e}}class Nt extends zt{static k7(){var t=this.n8();return Ei(t),t}static s6(t){var e=this.y6(t);return Ei(e),e}}class Pt extends zt{static b9(){var t=this.n8();return Oi(t),t}static c9(t){var e=this.y6(t);return Oi(e),e}}class Dt extends zt{static d9(){var t=this.n8();return zi(t),t}static g(t){var e=this.y6(t);return zi(e),e}}class jt extends zt{static r2(){var t,e=this.n8();return Tn(t=e,t.q2_1),e}}class Rt extends zt{static v2(){var t,e=this.n8();return Tn(t=e,t.u2_1),e}}class Bt extends zt{static z2(){var t,e=this.n8();return Tn(t=e,t.y2_1),e}}class Ft{equals(t){return!(t instanceof qt)&&t instanceof Ft&&On(this.h9(),t.h9())&&this.i9()==t.i9()}hashCode(){var t=this.i9();return(null==t?null:Mn(t))??0}toString(){return"class "+this.i9()}}class Ht extends Ft{constructor(t,e,n){super(),this.e9_1=t,this.f9_1=e,this.g9_1=n}h9(){return this.e9_1}i9(){return this.f9_1}}class qt extends Ft{}class Ut{}class Vt{constructor(t){return new.target.j9(t)}static j9(t){var e=In(this);return e.h_1=t,e}static d8(t){return this.i()}static i(){return this.j9("")}a(){return this.h_1.length}b(t){var e=this.h_1;if(!(0<=t&&t<=(bn(e)-1|0)))throw Lt.w8("index: "+t+", length: "+this.a()+"}");return _n(e,t)}c(t,e){return Ii(this.h_1,t,e)}b8(t){return this.h_1=this.h_1+Pe(t),this}j(t){return this.h_1=this.h_1+De(t),this}z7(t){return this.h_1=this.h_1+De(t),this}a8(t){var e=this.h_1;return this.h_1=e+(t??"null"),this}toString(){return this.h_1}}class Wt{constructor(t){this.k9_1=t}l9(t,e){return this.k9_1(t,e)}compare(t,e){return this.l9(t,e)}h2(){return this.k9_1}equals(t){return!(null==t||!Zn(t,Z))&&(!(null==t||!Zn(t,G))&&On(this.h2(),t.h2()))}hashCode(){return zn(this.h2())}}class Kt{constructor(t){this.n9_1=t,this.m9_1=0}t(){return this.m9_1<this.n9_1.c1()}u(){if(!this.t())throw It.h3();var t=this.m9_1;return this.m9_1=t+1|0,this.n9_1.b1(t)}}class Xt{constructor(){this.m3_1=2147483639}j4(t,e){if(t<0||t>=e)throw Lt.w8("index: "+t+", size: "+e)}k4(t,e){if(t<0||t>e)throw Lt.w8("index: "+t+", size: "+e)}z6(t,e){var n=t+(t>>1)|0;return(n-e|0)<0&&(n=e),(n-2147483639|0)>0&&(n=e>2147483639?2147483647:2147483639),n}o3(t){for(var e=1,n=t.s();n.t();){var i=n.u();e=$(31,e)+((null==i?null:zn(i))??0)|0}return e}n3(t,e){if(t.c1()!==e.c1())return!1;for(var n=e.s(),i=t.s();i.t();)if(!On(i.u(),n.u()))return!1;return!0}}class Yt extends J{static o9(){return this.c3()}s(){return new Kt(this)}equals(t){return t===this||!(null==t||!Zn(t,q))&&k.n3(this,t)}hashCode(){return k.o3(this)}}class Gt{constructor(t){this.p9_1=t}t(){return this.p9_1.t()}u(){return this.p9_1.u().o1()}}class Zt{constructor(t){this.q9_1=t}t(){return this.q9_1.t()}u(){return this.q9_1.u().p1()}}class Qt{}class Jt extends J{static t9(t){return this.c3(t)}equals(t){return t===this||!(null==t||!Zn(t,H))&&A.g4(this,t)}hashCode(){return A.h4(this)}}class te extends Jt{constructor(t){return new.target.s9(t)}static s9(t,e){return e===y&&(e={}),e.r9_1=t,this.t9(e)}m5(t){return this.r9_1.q1(t)}m1(t){return this.m5(t)}s(){var t=this.r9_1.v1().s();return new Gt(t)}c1(){return this.r9_1.c1()}}class ee extends J{constructor(t){return new.target.v9(t)}static v9(t,e){return e===y&&(e={}),e.u9_1=t,this.c3(e)}v5(t){return this.u9_1.r1(t)}m1(t){return this.v5(t)}s(){var t=this.u9_1.v1().s();return new Zt(t)}c1(){return this.u9_1.c1()}}class ne{h4(t){for(var e=0,n=t.s();n.t();){var i=n.u();e=e+((null==i?null:zn(i))??0)|0}return e}g4(t,e){return t.c1()===e.c1()&&t.n1(e)}}class ie{constructor(){S=this,this.w9_1=new Y(-1478467534,-1720727600)}equals(t){return!(null==t||!Zn(t,q))&&t.a1()}hashCode(){return 1}toString(){return"[]"}c1(){return 0}a1(){return!0}x9(t){return!1}m1(t){return!1}b1(t){throw Lt.w8("Empty list doesn't contain element at index "+t+".")}s(){return E}}class re{t(){return!1}u(){throw It.h3()}}class oe{constructor(){O=this,this.ca_1=new Y(-888910638,1920087921)}equals(t){return!(null==t||!Zn(t,V))&&t.a1()}hashCode(){return 0}toString(){return"{}"}c1(){return 0}a1(){return!0}da(t){return!1}q1(t){return this.da(t)}ea(t){return null}s1(t){return this.ea(t)}v1(){return Wi()}t1(){return Wi()}u1(){return Bi()}}class se{u(){return this.fa()}}class ae{constructor(){z=this,this.ga_1=new Y(1993859828,793161749)}equals(t){return!(null==t||!Zn(t,H))&&t.a1()}hashCode(){return 0}toString(){return"[]"}c1(){return 0}a1(){return!0}ha(t){return t.a1()}n1(t){return this.ha(t)}s(){return E}}class le extends Yt{constructor(t){return new.target.ja(t)}static ja(t){var e=this.o9();return e.ia_1=t,e}c1(){return this.ia_1.length}b1(t){return k.j4(t,this.ia_1.length),this.ia_1[t]}ka(t){if(null===t)return!1;var e=function(t,e){return 0<=e&&e<=(t.length-1|0)?t[e]:null}(this.ia_1,t.x1_1);return e===t}m1(t){return t instanceof K&&this.ka(t instanceof K?t:Pn())}}class ce{constructor(){M=this,this.j1_1=new ue(1,0)}}class de{constructor(t,e,n){if(0===n)throw Tt.r("Step must be non-zero.");if(-2147483648===n)throw Tt.r("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.pa_1=t,this.qa_1=function(t,e,n){var i;if(n>0)i=t>=e?e:e-Ki(e,t,n)|0;else{if(!(n<0))throw Tt.r("Step is zero.");i=t<=e?e:e+Ki(t,e,0|-n)|0}return i}(t,e,n),this.ra_1=n}s(){return new he(this.pa_1,this.qa_1,this.ra_1)}a1(){return this.ra_1>0?this.pa_1>this.qa_1:this.pa_1<this.qa_1}equals(t){return t instanceof de&&(this.a1()&&t.a1()||this.pa_1===t.pa_1&&this.qa_1===t.qa_1&&this.ra_1===t.ra_1)}hashCode(){return this.a1()?-1:$(31,$(31,this.pa_1)+this.qa_1|0)+this.ra_1|0}toString(){return this.ra_1>0?this.pa_1+".."+this.qa_1+" step "+this.ra_1:this.pa_1+" downTo "+this.qa_1+" step "+(0|-this.ra_1)}}class ue extends de{constructor(t,e){Yi(),super(t,e,1)}oa(){return this.pa_1}sa(){return this.qa_1}a1(){return this.pa_1>this.qa_1}equals(t){return t instanceof ue&&(this.a1()&&t.a1()||this.pa_1===t.pa_1&&this.qa_1===t.qa_1)}hashCode(){return this.a1()?-1:$(31,this.pa_1)+this.qa_1|0}toString(){return this.pa_1+".."+this.qa_1}}class he extends se{constructor(t,e,n){super(),this.ta_1=n,this.ua_1=e,this.va_1=this.ta_1>0?t<=e:t>=e,this.wa_1=this.va_1?t:this.ua_1}t(){return this.va_1}fa(){var t=this.wa_1;if(t===this.ua_1){if(!this.va_1)throw It.h3();this.va_1=!1}else this.wa_1=this.wa_1+this.ta_1|0;return t}}class pe{k1(t,e,n){return new de(t,e,n)}}class ve{constructor(t){this.db_1=t,this.ya_1=-1,this.za_1=function(t,e,n){if(0>n)throw Tt.r("Cannot coerce value to an empty range: maximum "+n+" is less than minimum 0.");return t<0?0:t>n?n:t}(t.fb_1,0,bn(t.eb_1)),this.ab_1=this.za_1,this.bb_1=null,this.cb_1=0}u(){if(-1===this.ya_1&&or(this),0===this.ya_1)throw It.h3();var t=this.bb_1,e=t instanceof ue?t:Pn();return this.bb_1=null,this.ya_1=-1,e}t(){return-1===this.ya_1&&or(this),1===this.ya_1}}class fe{constructor(t,e,n,i){this.eb_1=t,this.fb_1=e,this.gb_1=n,this.hb_1=i}s(){return new ve(this)}}class _e{constructor(t){this.ib_1=t,this.jb_1=I}p1(){return this.jb_1===I&&(this.jb_1=Dn(this.ib_1)(),this.ib_1=null),this.jb_1}kb(){return!(this.jb_1===I)}toString(){return this.kb()?De(this.p1()):"Lazy value not initialized yet."}}class ge{}class me{}class be{constructor(t){this.lb_1=t}equals(t){return t instanceof be&&On(this.lb_1,t.lb_1)}hashCode(){return zn(this.lb_1)}toString(){return"Failure("+this.lb_1.toString()+")"}}class ye{constructor(t,e){this.y9_1=t,this.z9_1=e}toString(){return"("+De(this.y9_1)+", "+De(this.z9_1)+")"}aa(){return this.y9_1}ba(){return this.z9_1}hashCode(){var t=null==this.y9_1?0:zn(this.y9_1);return $(t,31)+(null==this.z9_1?0:zn(this.z9_1))|0}equals(t){return this===t||t instanceof ye&&!!On(this.y9_1,t.y9_1)&&!!On(this.z9_1,t.z9_1)}}class we{constructor(t,e,n){this.mb_1=t,this.nb_1=e,this.ob_1=n}toString(){return"("+De(this.mb_1)+", "+De(this.nb_1)+", "+De(this.ob_1)+")"}aa(){return this.mb_1}ba(){return this.nb_1}pb(){return this.ob_1}hashCode(){var t=null==this.mb_1?0:zn(this.mb_1);return t=$(t,31)+(null==this.nb_1?0:zn(this.nb_1))|0,$(t,31)+(null==this.ob_1?0:zn(this.ob_1))|0}equals(t){return this===t||t instanceof we&&!!On(this.mb_1,t.mb_1)&&!!On(this.nb_1,t.nb_1)&&!!On(this.ob_1,t.ob_1)}}function xe(t){throw Dt.g("lateinit property "+t+" has not been initialized")}function Ce(t,e,n,i,r,o,s){return e=e===y?", ":e,n=n===y?"":n,i=i===y?"":i,r=r===y?-1:r,o=o===y?"...":o,s=s===y?null:s,function(t,e,n,i,r,o,s,a){n=n===y?", ":n,i=i===y?"":i,r=r===y?"":r,o=o===y?-1:o,s=s===y?"...":s,a=a===y?null:a,e.j(i);var l=0,c=0,d=t.length;t:for(;c<d;){var u=t[c];if(c=c+1|0,(l=l+1|0)>1&&e.j(n),!(o<0||l<=o))break t;Gi(e,u,a)}return o>=0&&l>o&&e.j(s),e.j(r),e}(t,Vt.i(),e,n,i,r,o,s).toString()}function ke(t,e,n,i,r,o,s){return e=e===y?", ":e,n=n===y?"":n,i=i===y?"":i,r=r===y?-1:r,o=o===y?"...":o,s=s===y?null:s,function(t,e,n,i,r,o,s,a){n=n===y?", ":n,i=i===y?"":i,r=r===y?"":r,o=o===y?-1:o,s=s===y?"...":s,a=a===y?null:a,e.j(i);var l=0,c=t.s();t:for(;c.t();){var d=c.u();if((l=l+1|0)>1&&e.j(n),!(o<0||l<=o))break t;Gi(e,d,a)}return o>=0&&l>o&&e.j(s),e.j(r),e}(t,Vt.i(),e,n,i,r,o,s).toString()}function Ae(t,e){for(var n=t.s();n.t();){var i=n.u();e.z(i)}return e}function Se(t){if(t.a1())throw It.n("List is empty.");return t.b1(0)}function Ee(t){return t.a1()?null:t.b1(0)}function Oe(t){var e;switch(t.c1()){case 0:throw It.n("List is empty.");case 1:e=t.b1(0);break;default:throw Tt.r("List has more than one element.")}return e}function ze(t){return Me(function(t){return Zn(t,F)?Et.h1(t):Ae(t,Et.g1())}(t))}function Me(t){if(Zn(t,F)){var e;switch(t.c1()){case 0:e=Ri();break;case 1:e=ii(Zn(t,q)?t.b1(0):t.s().u());break;default:e=Te(t)}return e}return function(t){switch(t.c1()){case 0:return Ri();case 1:return ii(t.b1(0));default:return t}}(function(t){return Zn(t,F)?Te(t):Ae(t,at.i1())}(t))}function Te(t){return at.d1(t)}function Ie(t,e){return t>e?e:t}function Le(t,e){return t<e?e:t}function $e(t){return t}function Ne(t,e){return t-e|0}function Pe(t){return String.fromCharCode(t)}function De(t){return(null==t?null:En(t))??"null"}function je(t){var e=new Uint16Array(t);return e.$type$="CharArray",e}function Re(){return qe(),i}function Be(){return qe(),r}function Fe(){return qe(),o}function He(){return qe(),s}function qe(){l||(l=!0,i=new ArrayBuffer(8),r=new Float64Array(Re()),new Float32Array(Re()),o=new Int32Array(Re()),Be()[0]=-1,s=0!==Fe()[0]?1:0,a=1-He()|0)}function Ue(){return fn(),c}function Ve(){return fn(),d}function We(){return fn(),u}function Ke(){return fn(),p}function Xe(){return fn(),v}function Ye(t,e){if(fn(),Je(t,e))return 0;var n=en(t),i=en(e);return n&&!i?-1:!n&&i?1:en(nn(t,e))?-1:1}function Ge(t){return fn(),t.e2_1}function Ze(t){return fn(),4294967296*t.f2_1+function(t){return fn(),t.e2_1>=0?t.e2_1:4294967296+t.e2_1}(t)}function Qe(t,e){if(fn(),rn(t))return"0";if(en(t)){if(Je(t,Ke())){var n=tn(e),i=un(t,n),r=Ge(nn(on(i,n),t));return Qe(i,e)+r.toString(e)}return"-"+Qe(sn(t),e)}for(var o=2===e?31:e<=10?9:e<=21?7:e<=35?6:5,s=an(Math.pow(e,o)),a=t,l="";;){var c=un(a,s),d=Ge(nn(a,on(c,s))).toString(e);if(rn(a=c))return d+l;for(;d.length<o;)d="0"+d;l=d+l}}function Je(t,e){return fn(),t.f2_1===e.f2_1&&t.e2_1===e.e2_1}function tn(t){return fn(),new Y(t,t<0?-1:0)}function en(t){return fn(),t.f2_1<0}function nn(t,e){return fn(),ln(t,sn(e))}function rn(t){return fn(),0===t.f2_1&&0===t.e2_1}function on(t,e){if(fn(),rn(t))return Ue();if(rn(e))return Ue();if(Je(t,Ke()))return cn(e)?Ke():Ue();if(Je(e,Ke()))return cn(t)?Ke():Ue();if(en(t))return en(e)?on(sn(t),sn(e)):sn(on(sn(t),e));if(en(e))return sn(on(t,sn(e)));if(dn(t,Xe())&&dn(e,Xe()))return an(Ze(t)*Ze(e));var n=t.f2_1>>>16|0,i=65535&t.f2_1,r=t.e2_1>>>16|0,o=65535&t.e2_1,s=e.f2_1>>>16|0,a=65535&e.f2_1,l=e.e2_1>>>16|0,c=65535&e.e2_1,d=0,u=0,h=0,p=0;return h=h+((p=p+$(o,c)|0)>>>16|0)|0,p&=65535,u=(u=u+((h=h+$(r,c)|0)>>>16|0)|0)+((h=(h&=65535)+$(o,l)|0)>>>16|0)|0,h&=65535,d=(d=(d=d+((u=u+$(i,c)|0)>>>16|0)|0)+((u=(u&=65535)+$(r,l)|0)>>>16|0)|0)+((u=(u&=65535)+$(o,a)|0)>>>16|0)|0,u&=65535,d=d+((($(n,c)+$(i,l)|0)+$(r,a)|0)+$(o,s)|0)|0,new Y(h<<16|p,(d&=65535)<<16|u)}function sn(t){return fn(),ln(function(t){return fn(),new Y(~t.e2_1,~t.f2_1)}(t),new Y(1,0))}function an(t){if(fn(),(e=t)!=e)return Ue();if(t<=-0x8000000000000000)return Ke();if(t+1>=0x8000000000000000)return fn(),h;if(t<0)return sn(an(-t));var e,n=4294967296;return new Y(t%n|0,t/n|0)}function ln(t,e){fn();var n=t.f2_1>>>16|0,i=65535&t.f2_1,r=t.e2_1>>>16|0,o=65535&t.e2_1,s=e.f2_1>>>16|0,a=65535&e.f2_1,l=e.e2_1>>>16|0,c=0,d=0,u=0,h=0;return c=(c=c+((d=(d=d+((u=(u=u+((h=h+(o+(65535&e.e2_1)|0)|0)>>>16|0)|0)+(r+l|0)|0)>>>16|0)|0)+(i+a|0)|0)>>>16|0)|0)+(n+s|0)|0,new Y((u&=65535)<<16|(h&=65535),(c&=65535)<<16|(d&=65535))}function cn(t){return fn(),!(1&~t.e2_1)}function dn(t,e){return fn(),Ye(t,e)<0}function un(t,e){if(fn(),rn(e))throw Ot.j2("division by zero");if(rn(t))return Ue();if(Je(t,Ke())){if(Je(e,Ve())||Je(e,We()))return Ke();if(Je(e,Ke()))return Ve();var n=function(t){fn();return new Y(t.e2_1>>>1|t.f2_1<<31,t.f2_1>>1)}(t),i=function(t){fn();return new Y(t.e2_1<<1,t.f2_1<<1|t.e2_1>>>31)}(un(n,e));return Je(i,Ue())?en(e)?Ve():We():ln(i,un(nn(t,on(e,i)),e))}if(Je(e,Ke()))return Ue();if(en(t))return en(e)?un(sn(t),sn(e)):sn(un(sn(t),e));if(en(e))return sn(un(t,sn(e)));for(var r=Ue(),o=t;pn(o,e);){for(var s=Ze(o)/Ze(e),a=Math.max(1,Math.floor(s)),l=Math.ceil(Math.log(a)/Math.LN2),c=l<=48?1:Math.pow(2,l-48),d=an(a),u=on(d,e);en(u)||hn(u,o);)u=on(d=an(a-=c),e);rn(d)&&(d=Ve()),r=ln(r,d),o=nn(o,u)}return r}function hn(t,e){return fn(),Ye(t,e)>0}function pn(t,e){return fn(),Ye(t,e)>=0}function vn(t){return fn(),null!=t&&function(t){return fn(),Yn(t)&&"LongArray"===t.$type$}(t)}function fn(){f||(f=!0,c=tn(0),d=tn(1),u=tn(-1),h=new Y(-1,2147483647),p=new Y(0,-2147483648),v=tn(16777216),new Ht(Array,"LongArray",vn))}function _n(t,e){return gn(t)?mn(t,e):t.b(e)}function gn(t){return"string"==typeof t}function mn(t,e){return t.charCodeAt(e)}function bn(t){return gn(t)?t.length:t.a()}function yn(t,e,n){return gn(t)?Ii(t,e,n):t.c(e,n)}function wn(t){return En(t)}function xn(t,e){var n;switch(typeof t){case"number":n="number"==typeof e?Cn(t,e):e instanceof Y?Cn(t,Ze(e)):kn(t,e);break;case"string":case"boolean":case"bigint":n=kn(t,e);break;default:n=function(t,e){return t.z1(e)}(t,e)}return n}function Cn(t,e){var n;if(t<e)n=-1;else if(t>e)n=1;else if(t===e){var i;if(0!==t)i=0;else{var r=1/t;i=r===1/e?0:r<0?-1:1}n=i}else n=t!=t?e!=e?0:1:-1;return n}function kn(t,e){return t<e?-1:t>e?1:0}function An(t){if(!("kotlinHashCodeValue$"in t)){var e=Sn(),n=new Object;n.value=e,n.enumerable=!1,Object.defineProperty(t,"kotlinHashCodeValue$",n)}return t.kotlinHashCodeValue$}function Sn(){return 4294967296*Math.random()|0}function En(t){return null==t?"null":Xn(t)?"[...]":"function"!=typeof t.toString?function(t){return Object.prototype.toString.call(t)}(t):t.toString()}function On(t,e){if(null==t)return null==e;if(null==e)return!1;if("object"==typeof t&&"function"==typeof t.equals)return t.equals(e);if(t!=t)return e!=e;if("number"==typeof t&&"number"==typeof e){var n;if(t===e)n=0!==t||1/t==1/e;else n=!1;return n}return Gn(t)&&Gn(e)?t===e||t.$id==e.$id&&t.$flags==e.$flags&&t.$arity==e.$arity&&(null==t.$bound&&null==e.$bound||t.$bound===e.$bound||!(!Yn(t.$bound)||!Yn(e.$bound))&&function(t,e){var n=t,i=e;if(n===i)return!0;if(null==n||null==i||!Xn(i)||n.length!=i.length)return!1;var r=0,o=n.length;if(r<o)do{var s=r;if(r=r+1|0,!On(n[s],i[s]))return!1}while(r<o);return!0}(t.$bound,e.$bound)):t===e}function zn(t){if(null==t)return 0;var e,n=typeof t;switch(n){case"object":e="function"==typeof t.hashCode?t.hashCode():An(t);break;case"function":e=Gn(t)?function(t){var e=t.$flags;e=$(31,e)+zn(t.$id)|0,e=$(31,e)+(t.$arity??-1)|0;var n=t.$bound;if(null!=n&&Yn(n)){var i=n;e=$(31,e)+function(t){var e=t;if(null==e)return 0;var n=1,i=0,r=e.length;if(i<r)do{var o=i;i=i+1|0,n=$(n,31)+zn(e[o])|0}while(i<r);return n}(i)|0}return e}(t):An(t);break;case"number":e=function(t){return qe(),(0|t)===t?function(t){var e;return e=t instanceof Y?Ge(t):function(t){return t>2147483647?2147483647:t<-2147483648?-2147483648:0|t}(t),e}(t):(Be()[0]=t,$(Fe()[qe(),a],31)+Fe()[He()]|0)}(t);break;case"boolean":e=t?1231:1237;break;case"string":e=Mn(String(t));break;case"bigint":e=function(t){for(var e,n=BigInt(32),i=BigInt(4294967295),r=(e=t)<0?-e:e,o=0,s=t<0?-1:1;0!=r;){var a=Number(r&i);o=$(31,o)+a|0,r>>=n}return $(o,s)}(t);break;case"symbol":e=function(t){var e,n=(e=t,Symbol.keyFor(e)!=y?(_===y&&(_=new Map),_):(g===y&&(g=new WeakMap),g)),i=n.get(t);if(i!==y)return i;var r=Sn();return n.set(t,r),r}(t);break;default:e=function(){throw new Error("Unexpected typeof `"+n+"`")}()}return e}function Mn(t){var e=0,n=0,i=t.length-1|0;if(n<=i)do{var r=n;n=n+1|0;var o=t.charCodeAt(r);e=$(e,31)+o|0}while(r!==i);return e}function Tn(t,e){null!=Error.captureStackTrace?Error.captureStackTrace(t,e):t.stack=(new Error).stack}function In(t,e){var n=Object.create(t.prototype);return function(t,e){e!==y&&Object.assign(t,e)}(n,e),n}function Ln(t,e,n,i){var r;if(i===y)r=t;else{var o=class extends t{};Object.assign(o.prototype,i),o.constructor=t,r=o}var s=r;return Reflect.construct(e,n,s)}function $n(t,e,n){if(t.name=Object.getPrototypeOf(t).constructor.name,null==e){var i;if(e===y)i=(null==n?null:n.toString())??y;else i=y;t.message=i}}function Nn(){throw jt.r2()}function Pn(){throw Bt.z2()}function Dn(t){var e;return null==t?function(){throw Rt.v2()}():e=t,e}function jn(t,e,n,i,r,o){return{kind:t,simpleName:e,associatedObjectKey:i,associatedObjects:r,suspendArity:o,$kClass$:y,defaultConstructor:n}}function Rn(t,e,n,i,r,o,s,a){Bn("class",t,e,n,i,r,o,s,a)}function Bn(t,e,n,i,r,o,s,a,l){null!=r&&(e.prototype=Object.create(r.prototype),e.prototype.constructor=e);var c=jn(t,n,i,a,l,s);e.$metadata$=c;var d=e.prototype;if(null!=o)for(var u=0,h=o.length;u<h;){var p=o[u];u=u+1|0,Object.assign(d,p.prototype),d[p.Symbol]=!0}"interface"===t&&(e.Symbol=Symbol())}function Fn(t,e,n,i,r,o,s,a){Bn("object",t,e,n,i,r,o,s,a)}function Hn(t,e,n,i,r,o,s,a){Bn("interface",t,e,n,i,r,o,s,a)}function qn(t,e,n,i){Fn(t,"Companion",y,e,n,i,y,y)}function Un(t){var e=t.length,n=Array(e),i=0,r=e-1|0;if(i<=r)do{var o=i;i=i+1|0;var s=t[o];null!=s&&Qn(s)?n[o]=s:n[o]=[].slice.call(s)}while(o!==r);return[].concat.apply([],n)}function Vn(t,e){return new ue(t,e)}function Wn(){return Kn(),jn("class",y,y,y,y,y)}function Kn(){if(!b){b=!0;var t=[Wn(),Wn()],e=[Wn(),Wn()];m=[t,e,[Wn(),Wn()]]}}function Xn(t){return Yn(t)||N(t)}function Yn(t){return Array.isArray(t)}function Gn(t){return"function"==typeof t&&null!=t.$flags&&null!=t.$arity}function Zn(t,e){return!0===t[e.Symbol]}function Qn(t){return!!Yn(t)&&!t.$type$}function Jn(t){return"string"==typeof t||Zn(t,D)}function ti(t){return void 0!==t.toArray?t.toArray():ni(t)}function ei(t){return t<0&&function(){throw Pt.c9("Index overflow has happened.")}(),t}function ni(t){return function(t){if(t.a1())return[];for(var e=t.c1(),n=Array(e),i=t.s(),r=0;i.t();){var o=r;r=o+1|0,n[o]=i.u()}return n}(t)}function ii(t){var e=[t];return at.a3(e)}function ri(t){if(!(t>=0))throw Tt.r(En("capacity must be non-negative."));return Array(t)}function oi(t,e,n){t.fill(null,e,n)}function si(t,e){return function(t,e){if(!(e>=0)){var n="Invalid new array size: "+e+".";throw Tt.r(En(n))}return function(t,e){var n=t.slice(0,e);void 0!==t.$type$&&(n.$type$=t.$type$);var i=t.length;if(e>i)for(n.length=e;i<e;){var r=i;i=r+1|0,n[r]=null}return n}(t,e)}(t,e)}function ai(){return x===y&&new st,x}function li(t,e){return 0===(n=$(Le(e,1),3))?0:1<<31-P(n);var n}function ci(t,e){return P(e)+1|0}function di(t){if(t.t6_1.f5_1!==t.v6_1)throw Nt.s6("The backing map has been modified after this entry was obtained.")}function ui(t){return t.y4_1.length}function hi(t){return t.b5_1.length}function pi(t){t.f5_1=t.f5_1+1|0}function vi(t,e){!function(t,e){var n=ui(t)-t.d5_1|0,i=t.d5_1-t.c1()|0;return n<e&&(i+n|0)>=e&&i>=(ui(t)/4|0)}(t,e)?function(t,e){if(e<0)throw zt.y6("too many elements");if(e>ui(t)){var n=k.z6(ui(t),e);t.y4_1=si(t.y4_1,n);var i=t,r=t.z4_1;i.z4_1=null==r?null:si(r,n),t.a5_1=function(t,e){if(!(e>=0)){var n="Invalid new array size: "+e+".";throw Tt.r(En(n))}var i,r=t.length;if(e<16||r<16)i=function(t,e){for(var n=t.length,i=e.length,r=0,o=e;r<n&&r<i;){var s=r,a=r;r=a+1|0,o[s]=t[a]}return e}(t,new Int32Array(e));else if(e>r){var o=new Int32Array(e);o.set(t),i=o}else i=t.slice(0,e);return i}(t.a5_1,n);var o=li(0,n);o>hi(t)&&gi(t,o)}}(t,t.d5_1+e|0):_i(t,!0)}function fi(t,e){return null==e?0:$(zn(e),-1640531527)>>>t.e5_1|0}function _i(t,e){for(var n=0,i=0,r=t.z4_1;n<t.d5_1;){var o=t.a5_1[n];o>=0&&(t.y4_1[i]=t.y4_1[n],null!=r&&(r[i]=r[n]),e&&(t.a5_1[i]=o,t.b5_1[o]=i+1|0),i=i+1|0),n=n+1|0}oi(t.y4_1,i,t.d5_1),null==r||oi(r,i,t.d5_1),t.d5_1=i}function gi(t,e){pi(t),t.d5_1>t.g5_1&&_i(t,!1),t.b5_1=new Int32Array(e),t.e5_1=ci(0,e);for(var n=0;n<t.d5_1;){var i=n;if(n=i+1|0,!mi(t,i))throw $t.n2("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function mi(t,e){for(var n=fi(t,t.y4_1[e]),i=t.c5_1;;){if(0===t.b5_1[n])return t.b5_1[n]=e+1|0,t.a5_1[e]=n,!0;if((i=i-1|0)<0)return!1;var r=n;n=r-1|0,0===r&&(n=hi(t)-1|0)}}function bi(t,e){for(var n=fi(t,e),i=t.c5_1;;){var r=t.b5_1[n];if(0===r)return-1;if(On(t.y4_1[r-1|0],e))return r-1|0;if((i=i-1|0)<0)return-1;var o=n;n=o-1|0,0===o&&(n=hi(t)-1|0)}}function yi(t){Tn(t,t.o4_1)}function wi(t){Tn(t,t.q_1)}function xi(t){Tn(t,t.x6_1)}function Ci(t){Tn(t,t.i2_1)}function ki(t){Tn(t,t.m_1)}function Ai(t){Tn(t,t.u8_1)}function Si(t){Tn(t,t.m2_1)}function Ei(t){Tn(t,t.r6_1)}function Oi(t){Tn(t,t.a9_1)}function zi(t){Tn(t,t.f_1)}function Mi(t){var e=Pe(t).toUpperCase();return e.length>1?t:mn(e,0)}function Ti(t){return function(t){return 9<=t&&t<=13||28<=t&&t<=32||160===t||t>4096&&(5760===t||8192<=t&&t<=8202||8232===t||8233===t||8239===t||8287===t||12288===t)}(t)}function Ii(t,e,n){return $i(),t.substring(e,n)}function Li(t,e){return $i(),function(t,e,n){if(n=n!==y&&n,$i(),n){var i=t.length,r=e.length,o=Math.min(i,r);if(0===o)return i-r|0;var s=0;if(s<o)do{var a=s;s=s+1|0;var l=mn(t,a),c=mn(e,a);if(l!==c&&(l=Mi(l))!==(c=Mi(c))&&(l=mn(Pe(l).toLowerCase(),0))!==(c=mn(Pe(c).toLowerCase(),0)))return Ne(l,c)}while(s<o);return i-r|0}return xn(t,e)}(t,e,!0)}function $i(){C||(C=!0,new Wt(Li))}function Ni(t,e,n,i,r,o){return er(t,e,n,i,r,o=o!==y&&o)}function Pi(t,e){return e===t?"(this Map)":De(e)}function Di(t,e){var n;t:{for(var i=t.v1().s();i.t();){var r=i.u();if(On(r.o1(),e)){n=r;break t}}n=null}return n}function ji(t){return t.length>0?(e=t,at.a3(e)):Ri();var e}function Ri(){return Bi()}function Bi(){return S===y&&new ie,S}function Fi(t,e){return Zn(t,F)?t.c1():e}function Hi(t){return t.length>0?qi(t,St.m8(t.length)):Ui()}function qi(t,e){return function(t,e){for(var n=0,i=e.length;n<i;){var r=e[n];n=n+1|0;var o=r.aa(),s=r.ba();t.d4(o,s)}}(e,t),e}function Ui(){var t=(O===y&&new oe,O);return Zn(t,V)?t:Pn()}function Vi(t,e){if(Zn(e,F))return t.e1(e);for(var n=!1,i=e.s();i.t();){var r=i.u();t.z(r)&&(n=!0)}return n}function Wi(){return z===y&&new ae,z}function Ki(t,e,n){return Xi(Xi(t,n)-Xi(e,n)|0,n)}function Xi(t,e){var n=t%e|0;return n>=0?n:n+e|0}function Yi(){return M===y&&new ce,M}function Gi(t,e,n){null!=n?t.j(n(e)):null==e||Jn(e)?t.j(e):e instanceof B?t.b8(e.xa_1):t.j(En(e))}function Zi(t,e,n){if(t===e)return!0;if(!(n=n!==y&&n))return!1;var i=Mi(t),r=Mi(e);return i===r||mn(Pe(i).toLowerCase(),0)===mn(Pe(r).toLowerCase(),0)}function Qi(t){if(!(t>=0)){var e="Limit must be non-negative, but was "+t;throw Tt.r(En(e))}return w}function Ji(t){return bn(t)-1|0}function tr(t,e,n,i){var r;return n=n===y?0:n,r=(i=i!==y&&i)||"string"!=typeof t?function(t,e,n,i,r,o){var s=(o=o!==y&&o)?function(t,e){return T.k1(t,e,-1)}(Ie(n,Ji(t)),Le(i,0)):Vn(Le(n,0),Ie(i,bn(t)));if("string"==typeof t&&"string"==typeof e){var a=s.pa_1,l=s.qa_1,c=s.ra_1;if(c>0&&a<=l||c<0&&l<=a)do{var d=a;if(a=a+c|0,Ni(e,0,t,d,e.length,r))return d}while(d!==l)}else{var u=s.pa_1,h=s.qa_1,p=s.ra_1;if(p>0&&u<=h||p<0&&h<=u)do{var v=u;if(u=u+p|0,er(e,0,t,v,bn(e),r))return v}while(v!==h)}return-1}(t,e,n,bn(t),i):t.indexOf(e,n),r}function er(t,e,n,i,r,o){if(i<0||e<0||e>(bn(t)-r|0)||i>(bn(n)-r|0))return!1;var s=0;if(s<r)do{var a=s;if(s=s+1|0,!Zi(_n(t,e+a|0),_n(n,i+a|0),o))return!1}while(s<r);return!0}function nr(t,e){return function(t,e,n){return!!(!(n=n!==y&&n)&&"string"==typeof t)&&"string"==typeof e?function(t,e,n){return(n=n!==y&&n)?Ni(t,0,e,0,e.length,n):t.startsWith(e,0)}(t,e):er(t,0,e,0,bn(e),n)}(t,e)?function(t,e){return $i(),t.substring(e)}(t,bn(e)):t}function ir(t,e,n,i){if(n=n!==y&&n,i=i===y?0:i,1===e.length)return function(t,e,n,i){Qi(i);var r=0,o=tr(t,e,r,n);if(-1===o||1===i)return ii(En(t));var s=i>0,a=at.y(s?Ie(i,10):10);t:do{var l=En(yn(t,r,o));if(a.z(l),r=o+e.length|0,s&&a.c1()===(i-1|0))break t;o=tr(t,e,r,n)}while(-1!==o);var c=En(yn(t,r,bn(t)));return a.z(c),a}(t,Pe(e[0]),n,i);for(var r=function(t){return new R(t)}(function(t,e,n,i,r){return n=n===y?0:n,i=i!==y&&i,Qi(r=r===y?0:r),new fe(t,n,r,(o=e,s=i,(t,e)=>{var n=function(t,e,n,i){if(n=n===y?0:n,!(i=i!==y&&i)&&1===e.length&&"string"==typeof t){var r=function(t){var e;switch(t.length){case 0:throw It.n("Array is empty.");case 1:e=t[0];break;default:throw Tt.r("Array has more than one element.")}return e}(e),o=Pe(r);return t.indexOf(o,n)}var s=Le(n,0),a=Ji(t);if(s<=a)do{var l=s;s=s+1|0;var c,d=_n(t,l);t:{for(var u=0,h=e.length;u<h;){var p=e[u];if(u=u+1|0,Zi(p,d,i)){c=!0;break t}}c=!1}if(c)return l}while(l!==a);return-1}(t,o,e,s);return n<0?null:lr(n,1)}));var o,s}(t,e,y,n,i)),o=at.y(Fi(r,10)),s=r.s();s.t();){var a=rr(t,s.u());o.z(a)}return o}function rr(t,e){return En(yn(t,e.oa(),e.sa()+1|0))}function or(t){if(t.ab_1<0)t.ya_1=0,t.bb_1=null;else{var e;if(t.db_1.gb_1>0?(t.cb_1=t.cb_1+1|0,e=t.cb_1>=t.db_1.gb_1):e=!1,e||t.ab_1>bn(t.db_1.eb_1))t.bb_1=Vn(t.za_1,Ji(t.db_1.eb_1)),t.ab_1=-1;else{var n=t.db_1.hb_1(t.db_1.eb_1,t.ab_1);if(null==n)t.bb_1=Vn(t.za_1,Ji(t.db_1.eb_1)),t.ab_1=-1;else{var i=n.aa(),r=n.ba();t.bb_1=function(t,e){return e<=-2147483648?Yi().j1_1:Vn(t,e-1|0)}(t.za_1,i),t.za_1=i+r|0,t.ab_1=t.za_1+(0===r?1:0)|0}}t.ya_1=1}}function sr(t){return t instanceof be}function ar(t){return new be(t)}function lr(t,e){return new ye(t,e)}Hn(D,"CharSequence"),Rn(j,"Number"),Rn(R),Rn(B,"Char"),Hn(F,"Collection"),Hn(H,"Set",y,y,[F]),Hn(q,"List",y,y,[F]),Hn(U,"Entry"),Hn(V,"Map"),qn(W),Rn(K,"Enum"),qn(X),Rn(Y,"Long"),Hn(G,"FunctionAdapter"),Hn(Z,"Comparator"),Fn(Q,"Unit"),Rn(J,"AbstractCollection",y,y,[F]),Rn(tt,"AbstractMutableCollection",y,y,[F]),Rn(et,"IteratorImpl"),Rn(nt,"AbstractMutableList",y,y,[q,F]),Rn(it,"AbstractMap",y,y,[V]),Rn(rt,"AbstractMutableMap",y,y,[V]),Rn(ot,"AbstractMutableSet",y,y,[H,F]),qn(st),Rn(at,"ArrayList",at.i1,y,[q,F]),Rn(lt,"HashMap",lt.x4,y,[V]),Rn(ct,"HashMapKeys",y,y,[H,F]),Rn(dt,"HashMapValues",y,y,[F]),Rn(ut,"HashMapEntrySetBase",y,y,[H,F]),Rn(ht,"HashMapEntrySet"),Rn(pt),Rn(vt,"HashMapKeysDefault"),Rn(ft),Rn(_t,"HashMapValuesDefault"),Rn(gt,"HashSet",gt.m6,y,[H,F]),qn(mt),Rn(bt,"Itr"),Rn(yt,"KeysItr"),Rn(wt,"ValuesItr"),Rn(xt,"EntriesItr"),Rn(Ct,"EntryRef",y,y,[U]),Hn(kt,"InternalMap"),(L=At,L.prototype).f6=function(t){var e;t:if(Zn(t,F)&&t.a1())e=!0;else{for(var n=t.s();n.t();){var i=n.u();if(null==i||!Zn(i,U)||!this.e8(i)){e=!1;break t}}e=!0}return e},Rn(At,"InternalHashMap",At.i5,y,[kt]),Rn(St,"LinkedHashMap",St.l8,y,[V]),Rn(Et,"LinkedHashSet",Et.g1,y,[H,F]),Rn(Ot,"Exception",Ot.r8),Rn(zt,"RuntimeException",zt.n8),Rn(Mt,"UnsupportedOperationException",Mt.p4),Rn(Tt,"IllegalArgumentException",Tt.q8),Rn(It,"NoSuchElementException",It.h3),Rn(Lt,"IndexOutOfBoundsException",Lt.v8),Rn($t,"IllegalStateException",$t.x8),Rn(Nt,"ConcurrentModificationException",Nt.k7),Rn(Pt,"ArithmeticException",Pt.b9),Rn(Dt,"UninitializedPropertyAccessException",Dt.d9),Rn(jt,"NoWhenBranchMatchedException",jt.r2),Rn(Rt,"NullPointerException",Rt.v2),Rn(Bt,"ClassCastException",Bt.z2),Rn(Ft,"KClassImpl"),Rn(Ht,"PrimitiveKClassImpl"),Fn(qt,"NothingKClassImpl"),Hn(Ut,"KProperty0"),Rn(Vt,"StringBuilder",Vt.i,y,[D]),Rn(Wt,"sam$kotlin_Comparator$0",y,y,[Z,G]),Rn(Kt,"IteratorImpl"),qn(Xt),Rn(Yt,"AbstractList",y,y,[q]),Rn(Gt),Rn(Zt),qn(Qt),Rn(Jt,"AbstractSet",y,y,[H]),Rn(te),Rn(ee),qn(ne),Fn(ie,"EmptyList",y,y,[q]),Fn(re,"EmptyIterator"),Fn(oe,"EmptyMap",y,y,[V]),Rn(se,"IntIterator"),Fn(ae,"EmptySet",y,y,[H]),Rn(le,"EnumEntriesList",y,y,[q]),qn(ce),Rn(de,"IntProgression"),Rn(ue,"IntRange"),Rn(he,"IntProgressionIterator"),qn(pe),Rn(ve),Rn(fe,"DelimitedRangesSequence"),Rn(_e,"UnsafeLazyImpl"),Fn(ge,"UNINITIALIZED_VALUE"),qn(me),Rn(be,"Failure"),Rn(ye,"Pair"),Rn(we,"Triple"),new W,w=new Q,new mt,k=new Xt,new Qt,A=new ne,E=new re,T=new pe,I=new ge,new me;var cr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dr(t){var e=Object.create(null);return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}var ur=/[A-Z]|^ms/g,hr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pr=function(t){return 45===t.charCodeAt(1)},vr=function(t){return null!=t&&"boolean"!=typeof t},fr=dr(function(t){return pr(t)?t:t.replace(ur,"-$&").toLowerCase()}),_r=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(hr,function(t,e,n){return mr={name:e,styles:n,next:mr},e})}return 1===cr[t]||pr(t)||"number"!=typeof e||0===e?e:e+"px"};function gr(t,e,n){if(null==n)return"";var i=n;if(void 0!==i.__emotion_styles)return i;switch(typeof n){case"boolean":return"";case"object":var r=n;if(1===r.anim)return mr={name:r.name,styles:r.styles,next:mr},r.name;var o=n;if(void 0!==o.styles){var s=o.next;if(void 0!==s)for(;void 0!==s;)mr={name:s.name,styles:s.styles,next:mr},s=s.next;return o.styles+";"}return function(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=gr(t,e,n[r])+";";else for(var o in n){var s=n[o];if("object"!=typeof s){var a=s;null!=e&&void 0!==e[a]?i+=o+"{"+e[a]+"}":vr(a)&&(i+=fr(o)+":"+_r(o,a)+";")}else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=e&&void 0!==e[s[0]]){var l=gr(t,e,s);switch(o){case"animation":case"animationName":i+=fr(o)+":"+l+";";break;default:i+=o+"{"+l+"}"}}else for(var c=0;c<s.length;c++)vr(s[c])&&(i+=fr(o)+":"+_r(o,s[c])+";")}return i}(t,e,n);case"function":if(void 0!==t){var a=mr,l=n(t);return mr=a,gr(t,e,l)}}var c=n;if(null==e)return c;var d=e[c];return void 0!==d?d:c}var mr,br=/label:\s*([^\s;{]+)\s*(;|$)/g;function yr(t,e,n){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var i=!0,r="";mr=void 0;var o=t[0];null==o||void 0===o.raw?(i=!1,r+=gr(n,e,o)):r+=o[0];for(var s=1;s<t.length;s++)r+=gr(n,e,t[s]),i&&(r+=o[s]);br.lastIndex=0;for(var a,l="";null!==(a=br.exec(r));)l+="-"+a[1];var c=function(t){for(var e,n=0,i=0,r=t.length;r>=4;++i,r-=4)e=1540483477*(65535&(e=255&t.charCodeAt(i)|(255&t.charCodeAt(++i))<<8|(255&t.charCodeAt(++i))<<16|(255&t.charCodeAt(++i))<<24))+(59797*(e>>>16)<<16),n=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(r){case 3:n^=(255&t.charCodeAt(i+2))<<16;case 2:n^=(255&t.charCodeAt(i+1))<<8;case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(i)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(r)+l;return{name:c,styles:r,next:mr}}var wr="comm",xr="rule",Cr="decl",kr=Math.abs,Ar=String.fromCharCode;function Sr(t){return t.trim()}function Er(t,e,n){return t.replace(e,n)}function Or(t,e){return 0|t.charCodeAt(e)}function zr(t,e,n){return t.slice(e,n)}function Mr(t){return t.length}function Tr(t){return t.length}function Ir(t,e){return e.push(t),t}function Lr(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function $r(t,e,n,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case"@namespace":case Cr:return t.return=t.return||t.value;case wr:return"";case"@keyframes":return t.return=t.value+"{"+Lr(t.children,i)+"}";case xr:if(!Mr(t.value=t.props.join(",")))return""}return Mr(n=Lr(t.children,i))?t.return=t.value+"{"+n+"}":""}Object.assign;var Nr,Pr,Dr,jr,Rr,Br,Fr,Hr=1,qr=1,Ur=0,Vr=0,Wr=0,Kr="";function Xr(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Hr,column:qr,length:s,return:"",siblings:a}}function Yr(){return Wr=Vr>0?Or(Kr,--Vr):0,qr--,10===Wr&&(qr=1,Hr--),Wr}function Gr(){return Wr=Vr<Ur?Or(Kr,Vr++):0,qr++,10===Wr&&(qr=1,Hr++),Wr}function Zr(){return Or(Kr,Vr)}function Qr(){return Vr}function Jr(t,e){return zr(Kr,t,e)}function to(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eo(t){return Sr(Jr(Vr-1,ro(91===t?t+2:40===t?t+1:t)))}function no(t){for(;(Wr=Zr())&&Wr<33;)Gr();return to(t)>2||to(Wr)>3?"":" "}function io(t,e){for(;--e&&Gr()&&!(Wr<48||Wr>102||Wr>57&&Wr<65||Wr>70&&Wr<97););return Jr(t,Qr()+(e<6&&32==Zr()&&32==Gr()))}function ro(t){for(;Gr();)switch(Wr){case t:return Vr;case 34:case 39:34!==t&&39!==t&&ro(Wr);break;case 40:41===t&&ro(t);break;case 92:Gr()}return Vr}function oo(t,e){for(;Gr()&&t+Wr!==57&&(t+Wr!==84||47!==Zr()););return"/*"+Jr(e,Vr-1)+"*"+Ar(47===t?t:Gr())}function so(t){for(;!to(Zr());)Gr();return Jr(t,Vr)}function ao(t){return function(t){return Kr="",t}(lo("",null,null,null,[""],t=function(t){return Hr=qr=1,Ur=Mr(Kr=t),Vr=0,[]}(t),0,[0],t))}function lo(t,e,n,i,r,o,s,a,l){for(var c=0,d=0,u=s,h=0,p=0,v=0,f=1,_=1,g=1,m=0,b=0,y="",w=r,x=o,C=i,k=y;_;)switch(v=b,b=Gr()){case 40:108!=v&&58==Or(k,u-1)?(m++,k+="("):k+=eo(b);break;case 41:m--,k+=")";break;case 34:case 39:case 91:k+=eo(b);break;case 9:case 10:case 13:case 32:if(m>0){k+=Ar(b);break}k+=no(v);break;case 92:k+=io(Qr()-1,7);continue;case 47:switch(Zr()){case 42:case 47:Ir(uo(oo(Gr(),Qr()),e,n,l),l),5!=to(v||1)&&5!=to(Zr()||1)||!Mr(k)||" "===zr(k,-1,void 0)||(k+=" ");break;default:k+="/"}break;case 123*f:a[c++]=Mr(k)*g;case 125*f:case 59:case 0:if(m>0&&b){k+=Ar(b);break}switch(b){case 0:case 125:_=0;case 59+d:-1==g&&(k=Er(k,/\f/g,"")),p>0&&(Mr(k)-u||0===f)&&Ir(p>32?ho(k+";",i,n,u-1,l):ho(Er(k," ","")+";",i,n,u-2,l),l);break;case 59:k+=";";default:if(Ir(C=co(k,e,n,c,d,r,a,y,w=[],x=[],u,o),o),123===b)if(0===d)lo(k,e,C,C,w,o,u,a,x);else{switch(h){case 99:if(110===Or(k,3))break;case 108:if(97===Or(k,2))break;default:d=0;case 100:case 109:case 115:}d?lo(t,C,C,i&&Ir(co(t,C,C,0,0,r,a,y,r,w=[],u,x),x),r,x,u,a,i?w:x):lo(k,C,C,C,[""],x,0,a,x)}}c=d=p=0,f=g=1,y=k="",u=s;break;case 58:u=1+Mr(k),p=v;default:if(f<1)if(123==b)--f;else if(125==b&&0==f++&&125==Yr())continue;switch(k+=Ar(b),b*f){case 38:g=d>0?1:(k+="\f",-1);break;case 44:if(m>0)break;a[c++]=(Mr(k)-1)*g,g=1;break;case 64:45===Zr()&&(k+=eo(Gr())),h=Zr(),d=u=Mr(y=k+=so(Qr())),b++;break;case 45:45===v&&2==Mr(k)&&(f=0)}}return o}function co(t,e,n,i,r,o,s,a,l,c,d,u){for(var h=r-1,p=0===r?o:[""],v=Tr(p),f=0,_=0,g=0;f<i;++f)for(var m=0,b=zr(t,h+1,h=kr(_=s[f])),y=t;m<v;++m)(y=Sr(_>0?p[m]+" "+b:Er(b,/&\f/g,p[m])))&&(l[g++]=y);return Xr(t,e,n,0===r?xr:a,l,c,d,u)}function uo(t,e,n,i){return Xr(t,e,n,wr,Ar(Wr),zr(t,2,-2),0,i)}function ho(t,e,n,i,r){return Xr(t,e,n,Cr,zr(t,0,i),zr(t,i+1,-1),i,r)}class po{}class vo{constructor(t,e,n){e=e===y?null:e,n=n===y?null:n,this.sb_1=t;var i=this.sb_1;null!=e&&(i.formAssociated=e),null!=n&&(i.observedAttributes=n)}}Fn(po,"HtmlTagName"),Rn(vo,"CustomElementReference"),new po;class fo extends HTMLElement{constructor(){super(),this.tb_1=at.i1(),this.ub_1=St.l8()}fc(){this.gc()}connectedCallback(){return this.fc()}hc(){}connectedMoveCallback(){return this.hc()}ic(){}disconnectedCallback(){return this.ic()}jc(){}adoptedCallback(){return this.jc()}kc(t){for(var e=this.tb_1.s();e.t();){var n=e.u();t&&n.lc()}!function(t){for(var e=t.tb_1.s();e.t();)e.u().ec()}(this)}gc(t,e){var n;return t=t!==y&&t,e===y?(this.kc(t),n=w):n=e.kc.call(this,t),n}mc(t,e,n){var i=this.ub_1.s1(t);if(null==i)return w;for(var r=i.s();r.t();)r.u().ec()}attributeChangedCallback(t,e,n){return this.mc(t,e,n)}}class _o{constructor(t,e){e=e===y?Ui():e,this.gs_1=t,this.hs_1=e}}class go extends vo{constructor(t,e,n,i,r,o){r=r===y||r,o=o===y?null:o,super(t,n=n===y?null:n,i=i===y?null:i),this.js_1=e,this.ks_1=e,null!=o&&(Fr===y&&new mo,Fr).ms(t,o),r&&function(t,e){if(null!=customElements.get(t))return w;(function(t){Lo();for(var e=HTMLElement.prototype,n=t.prototype;null!=n&&n!==e;)Io(n),n=Object.getPrototypeOf(n)})(e.sb_1),customElements.define(t,e.sb_1)}(this.js_1,this)}}class mo{constructor(){Fr=this,this.ls_1=St.l8()}ms(t,e){this.ls_1.d4(t,e)}}function bo(){xo();var t,e=Nr;return function(t,e,n,i,r){Kn(),i.get=i,i.set=r,i.callableName=t,function(t,e,n){Kn(),t.$metadata$=e,t.constructor=t;var i=n.Symbol;null!=i&&(t[i]=!0),Object.assign(t,n.prototype)}(i,function(t,e){return Kn(),(Kn(),m)[t][null==e?0:1]}(e,r),n)}("stylisMiddlewares",0,Ut,(t=()=>bo(),Kn(),t.callableName=void 0,t.$flags=0,t.$arity=0,t.$id=0,t.$bound=void 0,t),null),e.p1()}function yo(t){xo();var e=new CSSStyleSheet;return e.replaceSync(function(t){xo();var e=Vt.i(),n=t,i=Object.keys(t),r=bo(),o=0,s=i.length;if(o<s)do{var a=o;o=o+1|0;var l=En(i[a]),c=yr([n[l]]).styles;e.a8(Lr(ao(l+"{"+c+"}"),r))}while(o<s);return e.toString()}(function(t){xo();var e={};return t(e),e}(t))),e}function wo(){var t,e;return xo(),e=Tr(t=[$r]),function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function xo(){Pr||(Pr=!0,Nr=new _e(wo))}function Co(t){return En(t)}function ko(t){return En(t)}function Ao(t){return"."+En(t)}function So(){jr||(jr=!0,Dr="-webkit-background-clip")}function Eo(t,e){return function(t,e,n){e=e===y?document:e,n=n===y?zo:n;var i=e.createElement(t);return n(i),i}(t,y,e=e===y?Oo:e)}function Oo(t){return w}function zo(t){return w}function Mo(t){return t.style}function To(t,e){return t.appendChild(e),e}function Io(t){Lo();for(var e=Reflect.deleteProperty,n=(Lo(),Rr).s();n.t();)e(t,n.u())}function Lo(){Br||(Br=!0,Rr=ji(["dispatchEvent","addEventListener","removeEventListener","animate","getAnimations","after","before","remove","replaceWith","append","moveBefore","prepend","querySelector","querySelectorAll","replaceChildren","blur","focus"]))}function $o(t,e,n){var i=function(t,e){var n={mode:e=e===y?"open":e};return t.attachShadow(n)}(t,n=n===y?"open":n);return 0!==e.length&&(i.adoptedStyleSheets=e.slice()),i}Rn(fo,"CustomElementAdapter",fo),Rn(_o,"CustomElementAttributes"),Rn(go,"CustomElementReferenceAdapter"),Fn(mo,"ElementAttributesRegistry"),Rn(class{constructor(t,e,n,i,r){this.ns_1=t,this.os_1=e,this.ps_1=n,this.qs_1=i,this.rs_1=r}toString(){return"AttributeChange("+this.ns_1+": "+this.qs_1+" -> "+this.rs_1+", "+De(this.os_1)+" -> "+De(this.ps_1)+")"}},"AttributeChange");const No=t=>t.test(navigator.userAgent),Po=t=>t.test(navigator.platform),Do=No(/Android/u);No(/Chrome/u)&&/Google Inc/u.test(navigator.vendor),No(/Firefox/u);const jo=Po(/^iPad/u)||Po(/^Mac/u)&&navigator.maxTouchPoints>1,Ro=Po(/^iPhone/u)||jo,Bo=No(/^((?!chrome|android).)*safari/iu),Fo=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})();function Ho(){if(Ro){const t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;e&&n>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",n-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Ho(),window.addEventListener("resize",Ho);const qo=globalThis,Uo=qo.ShadowRoot&&(void 0===qo.ShadyCSS||qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vo=Symbol(),Wo=new WeakMap;class Ko{constructor(t,e,n){if(this._$cssResult$=!0,n!==Vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Uo&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=Wo.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Wo.set(e,t))}return t}toString(){return this.cssText}}const Xo=t=>new Ko("string"==typeof t?t:t+"",void 0,Vo),Yo=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new Ko(n,t,Vo)},Go=(t,e)=>{if(Uo)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of e){const e=document.createElement("style"),i=qo.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}},Zo=Uo?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Xo(e)})(t):t,{is:Qo,defineProperty:Jo,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ns,getPrototypeOf:is}=Object,rs=globalThis,os=rs.trustedTypes,ss=os?os.emptyScript:"",as=rs.reactiveElementPolyfillSupport,ls=(t,e)=>t,cs={toAttribute(t,e){switch(e){case Boolean:t=t?ss:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},ds=(t,e)=>!Qo(t,e),us={attribute:!0,type:String,converter:cs,reflect:!1,useDefault:!1,hasChanged:ds};Symbol.metadata??=Symbol("metadata"),rs.litPropertyMetadata??=new WeakMap;class hs extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=us){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Jo(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:r}=ts(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??us}static _$Ei(){if(this.hasOwnProperty(ls("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ls("properties"))){const t=this.properties,e=[...es(t),...ns(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(Zo(t))}else void 0!==t&&e.push(Zo(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Go(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:cs).toAttribute(e,n.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:cs;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,n,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??ds)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,n,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}hs.elementStyles=[],hs.shadowRootOptions={mode:"open"},hs[ls("elementProperties")]=new Map,hs[ls("finalized")]=new Map,as?.({ReactiveElement:hs}),(rs.reactiveElementVersions??=[]).push("2.1.2");const ps=globalThis,vs=t=>t,fs=ps.trustedTypes,_s=fs?fs.createPolicy("lit-html",{createHTML:t=>t}):void 0,gs="$lit$",ms=`lit$${Math.random().toFixed(9).slice(2)}$`,bs="?"+ms,ys=`<${bs}>`,ws=document,xs=()=>ws.createComment(""),Cs=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ks=Array.isArray,As=t=>ks(t)||"function"==typeof t?.[Symbol.iterator],Ss="[ \t\n\f\r]",Es=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Os=/-->/g,zs=/>/g,Ms=RegExp(`>|${Ss}(?:([^\\s"'>=/]+)(${Ss}*=${Ss}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ts=/'/g,Is=/"/g,Ls=/^(?:script|style|textarea|title)$/i,$s=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ns=$s(1),Ps=$s(2),Ds=($s(3),Symbol.for("lit-noChange")),js=Symbol.for("lit-nothing"),Rs=new WeakMap,Bs=ws.createTreeWalker(ws,129);function Fs(t,e){if(!ks(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_s?_s.createHTML(e):e}const Hs=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",s=Es;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===Es?"!--"===l[1]?s=Os:void 0!==l[1]?s=zs:void 0!==l[2]?(Ls.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=Ms):void 0!==l[3]&&(s=Ms):s===Ms?">"===l[0]?(s=r??Es,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Ms:'"'===l[3]?Is:Ts):s===Is||s===Ts?s=Ms:s===Os||s===zs?s=Es:(s=Ms,r=void 0);const u=s===Ms&&t[e+1].startsWith("/>")?" ":"";o+=s===Es?n+ys:c>=0?(i.push(a),n.slice(0,c)+gs+n.slice(c)+ms+u):n+ms+(-2===c?e:u)}return[Fs(t,o+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class qs{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,c]=Hs(t,e);if(this.el=qs.createElement(l,n),Bs.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Bs.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(gs)){const e=c[o++],n=i.getAttribute(t).split(ms),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:s[2],strings:n,ctor:"."===s[1]?Xs:"?"===s[1]?Ys:"@"===s[1]?Gs:Ks}),i.removeAttribute(t)}else t.startsWith(ms)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(Ls.test(i.tagName)){const t=i.textContent.split(ms),e=t.length-1;if(e>0){i.textContent=fs?fs.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],xs()),Bs.nextNode(),a.push({type:2,index:++r});i.append(t[e],xs())}}}else if(8===i.nodeType)if(i.data===bs)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(ms,t+1));)a.push({type:7,index:r}),t+=ms.length-1}r++}}static createElement(t,e){const n=ws.createElement("template");return n.innerHTML=t,n}}function Us(t,e,n=t,i){if(e===Ds)return e;let r=void 0!==i?n._$Co?.[i]:n._$Cl;const o=Cs(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=r:n._$Cl=r),void 0!==r&&(e=Us(t,r._$AS(t,e.values),r,i)),e}class Vs{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??ws).importNode(e,!0);Bs.currentNode=i;let r=Bs.nextNode(),o=0,s=0,a=n[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Ws(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Zs(r,this,t)),this._$AV.push(e),a=n[++s]}o!==a?.index&&(r=Bs.nextNode(),o++)}return Bs.currentNode=ws,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Ws{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=js,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Us(this,t,e),Cs(t)?t===js||null==t||""===t?(this._$AH!==js&&this._$AR(),this._$AH=js):t!==this._$AH&&t!==Ds&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):As(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==js&&Cs(this._$AH)?this._$AA.nextSibling.data=t:this.T(ws.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=qs.createElement(Fs(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Vs(i,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=Rs.get(t.strings);return void 0===e&&Rs.set(t.strings,e=new qs(t)),e}k(t){ks(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new Ws(this.O(xs()),this.O(xs()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=vs(t).nextSibling;vs(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Ks{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=js,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=js}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=Us(this,t,e,0),o=!Cs(t)||t!==this._$AH&&t!==Ds,o&&(this._$AH=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=Us(this,i[n+s],e,s),a===Ds&&(a=this._$AH[s]),o||=!Cs(a)||a!==this._$AH[s],a===js?t=js:t!==js&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.j(t)}j(t){t===js?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xs extends Ks{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===js?void 0:t}}class Ys extends Ks{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==js)}}class Gs extends Ks{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=Us(this,t,e,0)??js)===Ds)return;const n=this._$AH,i=t===js&&n!==js||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==js&&(n===js||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Zs{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Us(this,t)}}const Qs={M:gs,P:ms,A:bs,C:1,L:Hs,R:Vs,D:As,V:Us,I:Ws,H:Ks,N:Ys,U:Gs,B:Xs,F:Zs},Js=ps.litHtmlPolyfillSupport;Js?.(qs,Ws),(ps.litHtmlVersions??=[]).push("3.3.3");const ta=(t,e,n)=>{const i=n?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=n?.renderBefore??null;i._$litPart$=r=new Ws(e.insertBefore(xs(),t),t,void 0,n??{})}return r._$AI(t),r},ea=globalThis;class na extends hs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ta(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ds}}na._$litElement$=!0,na.finalized=!0,ea.litElementHydrateSupport?.({LitElement:na});const ia=ea.litElementPolyfillSupport;ia?.({LitElement:na}),(ea.litElementVersions??=[]).push("4.2.2"),window.Vaadin||={},window.Vaadin.featureFlags||={};const ra={};function oa(t,e="25.3.5"){if(Object.defineProperty(t,"version",{get:()=>e}),t.experimental){const e="string"==typeof t.experimental?t.experimental:`${n=t.is.split("-").slice(1).join("-"),n.replace(/-[a-z]/gu,t=>t[1].toUpperCase())}Component`;if(!window.Vaadin.featureFlags[e]&&!ra[e])return ra[e]=new Set,ra[e].add(t),void Object.defineProperty(window.Vaadin.featureFlags,e,{get:()=>0===ra[e].size,set(t){t&&ra[e].size>0&&(ra[e].forEach(t=>{customElements.define(t.is,t)}),ra[e].clear())}});if(ra[e])return void ra[e].add(t)}var n;const i=customElements.get(t.is);if(i){const e=i.version;e&&t.version&&e===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${i.version} is already in use. Something will probably break.`)}else customElements.define(t.is,t)}const sa=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,aa=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function la(t,e){if("function"!=typeof t)return;const n=sa.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};function ca(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(aa?!(aa&&Object.keys(aa).map(t=>aa[t]).filter(t=>t.productionMode).length>0):!la(function(){return!0}))}catch(t){return!1}}());let da=0,ua=0;const ha=[];let pa=!1;const va={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},fa={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},_a={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},ga={run(t){pa||(pa=!0,queueMicrotask(()=>function(){pa=!1;const t=ha.length;for(let e=0;e<t;e++){const t=ha[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}ha.splice(0,t),ua+=t}())),ha.push(t);const e=da;return da+=1,e},cancel(t){const e=t-ua;if(e>=0){if(!ha[e])throw new Error(`invalid async handle: ${t}`);ha[e]=null}}},ma=new Set;class ba{static debounce(t,e,n){return t instanceof ba?t._cancelAsync():t=new ba,t.setConfig(e,n),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ma.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ma.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}const ya=[];function wa(t,e,n=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=n&&t.removeAttribute("dir")}function xa(){return document.documentElement.getAttribute("dir")}new MutationObserver(function(){const t=xa();ya.forEach(e=>{wa(e,t)})}).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ca=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),wa(this,xa(),null))}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),"dir"!==t)return;const i=xa(),r=n===i&&-1===ya.indexOf(this),o=!n&&e&&-1===ya.indexOf(this),s=n!==i&&e===i;r||o?(this.__subscribe(),wa(this,i,n)):s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=ya.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,n){("dir"!==n||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,n)}_attributeToProperty(t,e,n){"dir"!==t||e?super._attributeToProperty(t,e,n):this.dir=""}__subscribe(){ya.includes(this)||ya.push(this)}__unsubscribe(){ya.includes(this)&&ya.splice(ya.indexOf(this),1)}};let ka;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){!function(t,e){if(window.Vaadin.developmentMode)la(t,e)}(ca)};const Aa=new Set,Sa=t=>class extends(Ca(t)){static _ensureRegistrations(){const{is:t}=this;if(t&&!Aa.has(t)){window.Vaadin.registrations.push(this),Aa.add(t);const n=window.Vaadin.developmentModeCallback;n&&(ka=ba.debounce(ka,_a,()=>{n["vaadin-usage-statistics"]()}),e=ka,ma.add(e))}var e}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'),this.constructor._ensureRegistrations()}},Ea=new WeakMap;function Oa(t){return e=>{if(function(t,e){let n=e;for(;n;){if(Ea.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}(t,e))return e;const n=t(e);return Ea.set(n,t),n}}const za={},Ma=/([A-Z])/gu;function Ta(t){return za[t]||(za[t]=t.replace(Ma,"-$1").toLowerCase()),za[t]}function Ia(t){return t[0].toUpperCase()+t.substring(1)}function La(t){const[e,n]=t.split("(");return{method:e,observerProps:n.replace(")","").split(",").map(t=>t.trim())}}function $a(t,e){return Object.prototype.hasOwnProperty.call(t,e)||(t[e]=new Map(t[e])),t[e]}const Na=Oa(t=>class extends t{static enabledWarnings=[];static createProperty(t,e){[String,Boolean,Number,Array].includes(e)&&(e={type:e}),e?.reflectToAttribute&&(e.reflect=!0),super.createProperty(t,e)}static getOrCreateMap(t){return $a(this,t)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const t=this.getOrCreateMap("__complexObservers");this.observers.forEach(e=>{const{method:n,observerProps:i}=La(e);t.set(n,i)})}}static addCheckedInitializer(t){super.addInitializer(e=>{e instanceof this&&t(e)})}static getPropertyDescriptor(t,e,n){const i=super.getPropertyDescriptor(t,e,n);let r=i;if(this.getOrCreateMap("__propKeys").set(t,e),n.sync&&(r={get:i.get,set(i){const r=this[t];ds(i,r)&&(this[e]=i,this.requestUpdate(t,r,n),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),n.readOnly){const e=r.set;this.addCheckedInitializer(n=>{n[`_set${Ia(t)}`]=function(t){e.call(n,t)}}),r={get:r.get,set(){},configurable:!0,enumerable:!0}}if("value"in n&&this.addCheckedInitializer(e=>{const i="function"==typeof n.value?n.value.call(e):n.value;n.readOnly?e[`_set${Ia(t)}`](i):e[t]=i}),n.observer){const e=n.observer;this.getOrCreateMap("__observers").set(t,e),this.addCheckedInitializer(t=>{t[e]||console.warn(`observer method ${e} not defined`)})}if(n.notify){if(this.__notifyProps){if(!this.hasOwnProperty("__notifyProps")){const t=this.__notifyProps;this.__notifyProps=new Set(t)}}else this.__notifyProps=new Set;this.__notifyProps.add(t)}if(n.computed){const e=`__assignComputed${t}`,i=La(n.computed);this.prototype[e]=function(...e){this[t]=this[i.method](...e)},this.getOrCreateMap("__computedObservers").set(e,i.observerProps)}return n.attribute||(n.attribute=Ta(t)),r}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:t}=this.constructor;this.hasUpdated||t.asyncFirstRender||this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t})}ready(){}willUpdate(t){this.constructor.__computedObservers&&this.__runComplexObservers(t,this.constructor.__computedObservers)}updated(t){const e=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(t,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(t,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(t,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(t,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(t,this.constructor.__notifyProps),e||this.ready()}setProperties(t){Object.entries(t).forEach(([t,e])=>{const n=this.constructor.__propKeys.get(t),i=this[n];this[n]=e,this.requestUpdate(t,i)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(t){const e=$a(this,"__dynamicMethodObservers"),{method:n,observerProps:i}=La(t);e.set(n,i)}_createPropertyObserver(t,e){$a(this,"__dynamicPropertyObservers").set(e,t)}__runComplexObservers(t,e){e.forEach((e,n)=>{e.some(e=>t.has(e))&&(this[n]?this[n](...e.map(t=>this[t])):console.warn(`observer method ${n} not defined`))})}__runDynamicObservers(t,e){e.forEach((e,n)=>{t.has(e)&&this[n]&&this[n](this[e],t.get(e))})}__runObservers(t,e){t.forEach((t,n)=>{const i=e.get(n);void 0!==i&&this[i]&&this[i](this[n],t)})}__runNotifyProps(t,e){t.forEach((t,n)=>{e.has(n)&&this.dispatchEvent(new CustomEvent(`${Ta(n)}-changed`,{detail:{value:this[n]}}))})}_get(t,e){return function(t,e){return t.split(".").reduce((t,e)=>t?t[e]:void 0,e)}(t,e)}_set(t,e,n){!function(t,e,n){const i=t.split("."),r=i.pop();i.reduce((t,e)=>t[e],n)[r]=e}(t,e,n)}});function Pa(t){try{CSS.registerProperty(t)}catch(e){if(!(e instanceof DOMException&&"InvalidModificationError"===e.name))throw e;console.warn(`The CSS property ${t.name} has already been registered.`)}}class Da extends EventTarget{#t;#e=new Set;#n;#i=!1;constructor(t){super(),this.#t=t,this.#n=new CSSStyleSheet}#r(t){const{propertyName:e}=t;this.#e.has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))}observe(t){this.connect(),this.#e.has(t)||(this.#e.add(t),this.#n.replaceSync(`\n      :root::before, :host::before {\n        content: '' !important;\n        position: absolute !important;\n        top: -9999px !important;\n        left: -9999px !important;\n        visibility: hidden !important;\n        transition: 1ms allow-discrete step-end !important;\n        transition-property: ${[...this.#e].join(", ")} !important;\n      }\n    `))}connect(){this.#i||(this.#t.adoptedStyleSheets.unshift(this.#n),this.#o.addEventListener("transitionstart",t=>this.#r(t)),this.#o.addEventListener("transitionend",t=>this.#r(t)),this.#i=!0)}disconnect(){this.#e.clear(),this.#t.adoptedStyleSheets=this.#t.adoptedStyleSheets.filter(t=>t!==this.#n),this.#o.removeEventListener("transitionstart",this.#r),this.#o.removeEventListener("transitionend",this.#r),this.#i=!1}get#o(){return this.#t.documentElement??this.#t.host}static for(t){return t.__cssPropertyObserver||=new Da(t),t.__cssPropertyObserver}}function ja(t){Go(t.shadowRoot,function(t){const{baseStyles:e,themeStyles:n,elementStyles:i,lumoInjector:r}=t.constructor,o=t.__lumoStyleSheet;return o?[...r.includeBaseStyles?e??i:[],o,...n??[]]:i}(t))}function Ra(t,e){t.__lumoStyleSheet=e,ja(t)}function Ba(t){t.__lumoStyleSheet=void 0,ja(t)}const Fa=new Set;function Ha(t){Fa.has(t)||(Fa.add(t),console.warn(t))}const qa=new WeakMap;function Ua(t){try{return t.media.mediaText}catch{return Ha('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function Va(t,e={tags:new Map,modules:new Map}){for(const n of function(t){try{return t.cssRules}catch{return Ha('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}(t)){if(n instanceof CSSImportRule){const t=Ua(n);t.startsWith("lumo_")?e.modules.set(t,[...n.styleSheet.cssRules]):Va(n.styleSheet,e);continue}if(n instanceof CSSMediaRule){const t=Ua(n);t.startsWith("lumo_")&&e.modules.set(t,[...n.cssRules]);continue}if(n instanceof CSSStyleRule&&n.cssText.includes("-inject"))for(const t of n.style){const i=t.match(/^--_lumo-(.*)-inject-modules$/u)?.[1];if(!i)continue;const r=n.style.getPropertyValue(t);e.tags.set(i,r.split(",").map(t=>t.trim().replace(/'|"/gu,"")))}}return e}function Wa(t){return`--_lumo-${t.is}-inject`}class Ka{#t;#s;#a=new Map;#l=new Map;constructor(t=document){this.#t=t,this.handlePropertyChange=this.handlePropertyChange.bind(this),this.#s=Da.for(t),this.#s.addEventListener("property-changed",this.handlePropertyChange)}disconnect(){this.#s.removeEventListener("property-changed",this.handlePropertyChange),this.#a.clear(),this.#l.values().forEach(t=>t.forEach(Ba))}forceUpdate(){for(const t of this.#a.keys())this.#c(t)}componentConnected(t){const{lumoInjector:e}=t.constructor,{is:n}=e;this.#l.set(n,this.#l.get(n)??new Set),this.#l.get(n).add(t);const i=this.#a.get(n);if(i)return void(i.cssRules.length>0&&Ra(t,i));this.#d(n);const r=Wa(e);this.#s.observe(r)}componentDisconnected(t){const{is:e}=t.constructor.lumoInjector;this.#l.get(e)?.delete(t),Ba(t)}handlePropertyChange(t){const{propertyName:e}=t.detail,n=e.match(/^--_lumo-(.*)-inject$/u)?.[1];n&&this.#c(n)}#d(t){this.#a.set(t,new CSSStyleSheet),this.#c(t)}#c(t){const{tags:e,modules:n}=function(t){let e=new Map,n=new Map;for(const i of t){let t=qa.get(i);t||(t=Va(i),qa.set(i,t)),e=new Map([...e,...t.tags]),n=new Map([...n,...t.modules])}return{tags:e,modules:n}}(this.#u),i=(e.get(t)??[]).flatMap(t=>n.get(t)??[]).map(t=>t.cssText).join("\n"),r=this.#a.get(t);r.replaceSync(i),this.#l.get(t)?.forEach(t=>{i?Ra(t,r):Ba(t)})}get#u(){let t=new Set;for(const e of[this.#t,document])t=t.union(new Set(e.styleSheets)),t=t.union(new Set(e.adoptedStyleSheets));return[...t]}}const Xa=new Set;function Ya(t){const e=t.getRootNode();return e.host&&e.host.constructor.version?Ya(e.host):e}const Ga=t=>class extends t{static finalize(){super.finalize();const t=Wa(this.lumoInjector);this.is&&!Xa.has(t)&&(Xa.add(t),Pa({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=Ya(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||=new Ka(t),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}},Za=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),"theme"===t&&this._set_theme(n)}},Qa=[],Ja=new Set,tl=new Set;function el(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function nl(t){const e=[];return t.include&&[].concat(t.include).forEach(t=>{const n=Qa.find(e=>e.moduleId===t);n?e.push(...nl(n),...n.styles):console.warn(`Included moduleId ${t} not found in style registry`)},t.styles),e}function il(t){const e=`${t}-default-theme`,n=Qa.filter(n=>n.moduleId!==e&&function(t,e){return(t||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}(n.themeFor,t)).map(t=>({...t,styles:[...nl(t),...t.styles],includePriority:el(t.moduleId)})).sort((t,e)=>e.includePriority-t.includePriority);return n.length>0?n:Qa.filter(t=>t.moduleId===e)}const rl=t=>class extends(Za(t)){constructor(){super(),Ja.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&tl.add(this.is),this.elementStyles)return;const t=this.prototype._template;var e;t&&(!(e=this)||!Object.prototype.hasOwnProperty.call(e,"__themes"))&&function(t,e){const n=document.createElement("style");n.id="vaadin-themable-mixin-style",n.textContent=function(t){return t.map(t=>t.cssText).join("\n")}(t),e.content.appendChild(n)}(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const e=t.__themes||[],n=Object.getPrototypeOf(this.prototype),i=(n?n.constructor.__themes:[])||[];this.__themes=[...e,...i,...il(this.is)];const r=this.__themes.flatMap(t=>t.styles);return r.filter((t,e)=>e===r.lastIndexOf(t))}};["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(t=>{Pa({name:t,syntax:"<color>",inherits:!0,initialValue:"transparent"})}),((t,...e)=>{const n=document.createElement("style");n.id=t,n.textContent=e.map(t=>t.toString()).join("\n"),document.head.insertAdjacentElement("afterbegin",n)})("vaadin-base",Yo`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-checkmark-small: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-chevron-right: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-cross-small: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-ellipsis: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-file: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect x="13.7812" y="4.22583" width="1.5" height="16" rx="0.75" transform="rotate(20 13.7812 4.22583)" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
        --safe-area-inset-inline-start: var(--safe-area-inset-left);
        --safe-area-inset-inline-end: var(--safe-area-inset-right);

        &:dir(rtl) {
          --safe-area-inset-inline-start: var(--safe-area-inset-right);
          --safe-area-inset-inline-end: var(--safe-area-inset-left);
        }
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);const ol=Yo`
  :host {
    display: block;
    box-sizing: border-box;
    height: 100%;
    --vaadin-app-layout-transition-duration: 0s;
    transition: padding var(--vaadin-app-layout-transition-duration) cubic-bezier(0.78, 0, 0.22, 1);
    --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, auto);
    --vaadin-app-layout-touch-optimized: false;
    --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
    --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
    --vaadin-app-layout-drawer-offset-left: 0px;
    padding-top: var(--vaadin-app-layout-navbar-offset-top);
    padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
    padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  @media (prefers-reduced-motion: no-preference) {
    :host(:not([no-anim])) {
      --vaadin-app-layout-transition-duration: 300ms;
    }
  }

  :host([drawer-opened]) {
    --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
  }

  :host([overlay]) {
    --vaadin-app-layout-drawer-offset-left: 0px;
  }

  :host(:not([no-scroll])) [part~='content'] {
    overflow: auto;
  }

  [part~='content'] {
    height: 100%;
    transition: inherit;
    box-sizing: border-box;
    padding-top: max(0px, var(--safe-area-inset-top) - var(--vaadin-app-layout-navbar-offset-top));
    padding-bottom: max(0px, var(--safe-area-inset-bottom) - var(--vaadin-app-layout-navbar-offset-bottom));
    padding-inline: var(--safe-area-inset-inline-start) var(--safe-area-inset-inline-end);
  }

  :host([drawer-opened]:not([overlay])) [part~='content'] {
    padding-inline-start: 0;
  }

  @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
    :host {
      --vaadin-app-layout-touch-optimized: true;
    }
  }

  [part~='navbar'] {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    inset-inline: 0;
    transition: inherit;
    transition-property: inset-inline-start;
    padding-top: max(var(--vaadin-app-layout-navbar-padding-top, var(--vaadin-padding-s)), var(--safe-area-inset-top));
    padding-bottom: var(--vaadin-app-layout-navbar-padding-bottom, var(--vaadin-padding-s));
    padding-inline-start: max(
      var(--vaadin-app-layout-navbar-padding-inline-start, var(--vaadin-padding-s)),
      var(--safe-area-inset-left)
    );
    /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
    padding-inline-end: max(
      var(--vaadin-app-layout-navbar-padding-inline-end, var(--vaadin-padding-s)),
      var(--safe-area-inset-right)
    );
    z-index: 1;
    gap: var(--vaadin-app-layout-navbar-gap, var(--vaadin-gap-s));
    background: var(--vaadin-app-layout-navbar-background, var(--vaadin-background-container));
  }

  :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part~='navbar'] {
    inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
  }

  :host([primary-section='drawer']) [part='drawer'] {
    top: 0;
  }

  [part~='navbar-bottom'] {
    top: auto;
    bottom: 0;
    padding-top: var(--vaadin-app-layout-navbar-padding-top, var(--vaadin-padding-s));
    padding-bottom: max(
      var(--vaadin-app-layout-navbar-padding-bottom, var(--vaadin-padding-s)),
      var(--safe-area-inset-bottom)
    );
  }

  [part='drawer'] {
    overflow: auto;
    overscroll-behavior: contain;
    position: fixed;
    top: var(--vaadin-app-layout-navbar-offset-top, 0);
    bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
    inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
    transition: inherit;
    transition-property: transform, visibility;
    transform: translateX(calc(-100% - 20px));
    max-width: 90%;
    width: var(--_vaadin-app-layout-drawer-width);
    box-sizing: border-box;
    padding-block: var(--safe-area-inset-top) var(--safe-area-inset-bottom);
    padding-inline-start: var(--safe-area-inset-inline-start);
    outline: none;
    /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
    visibility: hidden;
    display: flex;
    flex-direction: column;
    background: var(--vaadin-app-layout-drawer-background, transparent);
  }

  :host([has-navbar]:not([overlay])) [part='drawer'],
  :host([has-navbar]) [part='content'] {
    --safe-area-inset-top: 0px;
  }

  :host([drawer-opened]) [part='drawer'] {
    /* The drawer should be accessible by the tabbing navigation when it is opened. */
    visibility: visible;
    transform: translateX(0%);
    touch-action: manipulation;
  }

  [part='backdrop'] {
    background: var(--vaadin-overlay-backdrop-background, rgba(0, 0, 0, 0.2));
    forced-color-adjust: none;
  }

  :host(:not([drawer-opened])) [part='backdrop'] {
    opacity: 0 !important;
  }

  :host([overlay]) [part='backdrop'] {
    position: fixed;
    inset: 0;
    pointer-events: none;
    transition: opacity var(--vaadin-app-layout-transition-duration) linear;
    -webkit-tap-highlight-color: transparent;
  }

  :host([overlay]) [part='drawer'] {
    top: 0;
    bottom: 0;
    box-shadow: var(--vaadin-overlay-shadow, 0 8px 24px -4px rgba(0, 0, 0, 0.3));
    background: var(--vaadin-app-layout-drawer-background, var(--vaadin-background-color));
  }

  :host([overlay]) [part='drawer'],
  :host([overlay]) [part='backdrop'] {
    z-index: 2;
  }

  :host([drawer-opened][overlay]) [part='backdrop'] {
    pointer-events: auto;
    touch-action: manipulation;
  }

  :host([dir='rtl']) [part='drawer'] {
    transform: translateX(calc(100% + 20px));
  }

  :host([dir='rtl'][drawer-opened]) [part='drawer'] {
    transform: translateX(0%);
  }

  @media (max-width: 800px), (max-height: 600px) {
    :host {
      --vaadin-app-layout-drawer-overlay: true;
      --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 320px);
    }
  }

  /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */

  [part='drawer'] ::slotted(vaadin-scroller) {
    flex: 1;
    overscroll-behavior: contain;
  }

  @media (forced-colors: active) {
    :host([overlay]) [part='drawer'] {
      border: 3px solid;
    }
  }
`;let sl=new WeakMap,al=new WeakMap,ll={},cl=0;const dl=t=>t?.nodeType===Node.ELEMENT_NODE,ul=(...t)=>{console.error(`Error: ${t.join(" ")}. Skip setting aria-hidden.`)},hl=(t,e=document.body,n="data-aria-hidden")=>{const i=Array.from(Array.isArray(t)?t:[t]);return e&&i.push(...Array.from(e.querySelectorAll("[aria-live]"))),((t,e,n,i)=>{const r=((t,e)=>dl(t)?e.map(e=>{if(!dl(e))return ul(e,"is not a valid element"),null;let n=e;for(;n&&n!==t;){if(t.contains(n))return e;n=n.getRootNode().host}return ul(e,"is not contained inside",t),null}).filter(t=>Boolean(t)):(ul(t,"is not a valid element"),[]))(e,Array.isArray(t)?t:[t]);ll[n]||(ll[n]=new WeakMap);const o=ll[n],s=[],a=new Set,l=new Set(r),c=t=>{if(!t||a.has(t))return;a.add(t);const e=t.assignedSlot;e&&c(e),c(t.parentNode||t.host)};r.forEach(c);const d=t=>{if(!t||l.has(t))return;const e=t.shadowRoot;(e?[...t.children,...e.children]:[...t.children]).forEach(t=>{if(!["template","script","style"].includes(t.localName))if(a.has(t))d(t);else{const e=t.getAttribute(i),r=null!==e&&"false"!==e,a=(sl.get(t)||0)+1,l=(o.get(t)||0)+1;sl.set(t,a),o.set(t,l),s.push(t),1===a&&r&&al.set(t,!0),1===l&&t.setAttribute(n,"true"),r||t.setAttribute(i,"true")}})};return d(e),a.clear(),cl+=1,()=>{s.forEach(t=>{const e=sl.get(t)-1,r=o.get(t)-1;sl.set(t,e),o.set(t,r),e||(al.has(t)?al.delete(t):t.removeAttribute(i)),r||t.removeAttribute(n)}),cl-=1,cl||(sl=new WeakMap,sl=new WeakMap,al=new WeakMap,ll={})}})(i,e,n,"aria-hidden")};HTMLElement.prototype;class pl{#h=null;constructor(t,e){this.host=t,this.callback="function"==typeof e?e:()=>t}showModal(){const t=this.callback();this.#h=hl(t)}close(){this.#h&&(this.#h(),this.#h=null)}}let vl=!1;function fl(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function _l(){return vl}function gl(t){const e=t.style;if("hidden"===e.visibility||"none"===e.display)return!0;const n=window.getComputedStyle(t);return"hidden"===n.visibility||"none"===n.display}function ml(t,e){const n=Math.max(t.tabIndex,0),i=Math.max(e.tabIndex,0);return 0===n||0===i?i>n:n>i}function bl(t){const e=t.length;if(e<2)return t;const n=Math.ceil(e/2);return function(t,e){const n=[];for(;t.length>0&&e.length>0;)ml(t[0],e[0])?n.push(e.shift()):n.push(t.shift());return n.concat(t,e)}(bl(t.slice(0,n)),bl(t.slice(n)))}function yl(t){return t.checkVisibility?!t.checkVisibility({visibilityProperty:!0}):null===t.offsetParent&&0===t.clientWidth&&0===t.clientHeight||gl(t)}function wl(t){return t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function xl(t){return t.getRootNode().activeElement===t}function Cl(t,e){if(t.nodeType!==Node.ELEMENT_NODE||gl(t))return!1;const n=t,i=function(t){if(!wl(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}(n);let r,o=i>0;return i>=0&&e.push(n),r="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children,[...r].forEach(t=>{o=Cl(t,e)||o}),o}function kl(t){const e=[];return Cl(t,e)?bl(e):e}window.addEventListener("keydown",()=>{vl=!0},{capture:!0}),window.addEventListener("mousedown",()=>{vl=!1},{capture:!0});const Al=[];class Sl{trapNode=null;constructor(t){this.host=t}get#p(){return kl(this.trapNode)}get#v(){const t=this.#p;return t.indexOf(t.filter(xl).pop())}hostConnected(){document.addEventListener("keydown",this.#f)}hostDisconnected(){document.removeEventListener("keydown",this.#f)}trapFocus(t){if(this.trapNode=t,0===this.#p.length)throw this.trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Al.push(this),-1===this.#v&&this.#p[0].focus({focusVisible:_l()})}releaseFocus(){this.trapNode=null,Al.pop()}#f=t=>{if(this.trapNode&&this===Array.from(Al).pop()&&"Tab"===t.key){if(t.defaultPrevented)return;t.preventDefault();const e=t.shiftKey;this.#_(e)}};#_(t=!1){const e=this.#p,n=t?-1:1,i=this.#v,r=e[(e.length+i+n)%e.length];r.focus({focusVisible:!0}),"input"===r.localName&&r.select()}}const El=["__proto__","constructor","prototype"],Ol=t=>{if(!t||"object"!=typeof t)return!1;const e=Object.getPrototypeOf(t);return e===Object.prototype||null===e};function zl(t,e,n){return Ol(t)&&Ol(e)?(Object.keys(e).forEach(i=>{if(El.includes(i))return;const r=e[i];if(Ol(r)){if(!Object.hasOwn(t,i)||!Ol(t[i])){if(n&&Object.hasOwn(t,i)&&t[i])return;t[i]={}}zl(t[i],r,n)}else n&&Array.isArray(r)?t[i]=[...r]:n&&null==r||(t[i]=r)}),t):t}function Ml(t,...e){return e.forEach(e=>zl(t,e,!0)),t}const Tl=t=>class extends t{static get properties(){return{i18n:{type:Object},__effectiveI18n:{type:Object,sync:!0}}}static get defaultI18n(){return{}}constructor(){super(),this.i18n=Ml({},this.constructor.defaultI18n)}get i18n(){return this.__customI18n}set i18n(t){t!==this.__customI18n&&(this.__customI18n=t,this.__effectiveI18n=Ml({},this.constructor.defaultI18n,this.__customI18n))}},Il={drawer:"Drawer"},Ll=t=>class extends(Tl(t)){static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged",sync:!0},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged",sync:!0},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"__overlayChanged",sync:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static get observers(){return["__i18nChanged(__effectiveI18n)"]}static get defaultI18n(){return Il}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}get i18n(){return super.i18n}set i18n(t){super.i18n=t}constructor(){super(),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new pl(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new Sl(this)}connectedCallback(){super.connectedCallback(),this.__resizeObserver=new ResizeObserver(t=>this.__onResize(t)),this.__resizeObserver.observe(this),this.__resizeObserver.observe(this.$.drawer),this.__resizeObserver.observe(this.$.navbarTop),this.__resizeObserver.observe(this.$.navbarBottom),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.__updateDrawerSize(),this._blockAnimationUntilAfterNextRender();const{overlayMode:t,touchOptimized:e}=this.__readCSSState();this.__setOverlayMode(t),this.__setTouchOptimized(e);const{drawerOffsetSize:n,navbarTopOffsetSize:i,navbarBottomOffsetSize:r}=this.__readCSSState();this.__setDrawerOffsetSize(n),this.__setNavbarTopOffsetSize(i),this.__setNavbarBottomOffsetSize(r),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__isDrawerAnimating=!1,this.__scheduleResize(this.$.drawer)})}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.disconnect(),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__onNavbarSlotChange(){const{touchOptimized:t}=this.__readCSSState();this.__setTouchOptimized(t),this.toggleAttribute("has-navbar",!!this.querySelector('[slot="navbar"]'));const{navbarTopOffsetSize:e,navbarBottomOffsetSize:n}=this.__readCSSState();this.__setNavbarTopOffsetSize(e),this.__setNavbarBottomOffsetSize(n)}__onDrawerSlotChange(){this.__updateDrawerSize(),this.toggleAttribute("has-drawer",!!this.querySelector('[slot="drawer"]'));const{drawerOffsetSize:t}=this.__readCSSState();this.__setDrawerOffsetSize(t)}__onResize(t){cancelAnimationFrame(this.__resizeRaf);const e=t.some(({target:t})=>t===this),n=t.some(({target:t})=>[this.$.navbarTop,this.$.navbarBottom].includes(t)),{overlayMode:i,touchOptimized:r,drawerOffsetSize:o,navbarTopOffsetSize:s,navbarBottomOffsetSize:a}=this.__readCSSState(),l=this.__isDrawerAnimating;this.__resizeRaf=requestAnimationFrame(()=>{e&&(this._blockAnimationUntilAfterNextRender(),this.__setOverlayMode(i)),(e||n)&&this.__setTouchOptimized(r),l||(this.__setDrawerOffsetSize(o),this.__setNavbarTopOffsetSize(s),this.__setNavbarBottomOffsetSize(a))})}__primarySectionChanged(t){["navbar","drawer"].includes(t)||(this.primarySection="navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__overlayChanged(t,e){e&&this.__restoreFocus()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}__updateDrawerSize(){0===this.querySelectorAll("[slot=drawer]").length?(this.$.drawer.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(this.$.drawer.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width"))}__setDrawerOffsetSize(t){this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${t}px`)}__setNavbarTopOffsetSize(t){this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${t}px`)}__setNavbarBottomOffsetSize(t){this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${t}px`)}__setOverlayMode(t){!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.__effectiveI18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return Promise.all(this.$.drawer.getAnimations().map(t=>t.finished))}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__restoreFocus();const t=this.querySelector("vaadin-drawer-toggle");t&&t.focus({focusVisible:_l()})}__restoreFocus(){this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex")}__onDrawerKeyDown(t){"Escape"===t.key&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(t){t.currentTarget.style.removeProperty("pointer-events"),this._close()}_onBackdropTouchend(t){if(t.preventDefault(),navigator.standalone){const e=t.currentTarget;e.style.pointerEvents="auto",setTimeout(()=>e.style.removeProperty("pointer-events"),400)}this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}__setTouchOptimized(t){const e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")});const n=this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length>0;this.$.navbarTop.toggleAttribute("hidden",!n);const i=this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length>0;this.$.navbarBottom.toggleAttribute("hidden",!i)}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),this.__debounceAnimation=ba.debounce(this.__debounceAnimation,fa,()=>{setTimeout(()=>{this.removeAttribute("no-anim")})})}__scheduleResize(t){this.__resizeObserver.unobserve(t),this.__resizeObserver.observe(t)}__readCSSState(){return{overlayMode:"true"===this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),touchOptimized:"true"===this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),drawerOffsetSize:this.$.drawer.getBoundingClientRect().width,navbarTopOffsetSize:this.$.navbarTop.getBoundingClientRect().height,navbarBottomOffsetSize:this.$.navbarBottom.getBoundingClientRect().height}}};class $l extends(Ll(Sa(rl(Na(Ga(na)))))){static get is(){return"vaadin-app-layout"}static get styles(){return ol}render(){return Ns`
      <div part="navbar navbar-top" id="navbarTop">
        <slot name="navbar" @slotchange="${this.__onNavbarSlotChange}"></slot>
      </div>
      <div part="backdrop" @click="${this._onBackdropClick}" @touchend="${this._onBackdropTouchend}"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" @slotchange="${this.__onDrawerSlotChange}"></slot>
      </div>
      <div part="content">
        <slot></slot>
      </div>
      <div part="navbar navbar-bottom" id="navbarBottom" hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" @slotchange="${this.__onNavbarSlotChange}"></slot>
      </div>
    `}}oa($l);const Nl=Yo`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--vaadin-button-gap, 0 var(--vaadin-gap-s));
    white-space: var(--vaadin-button-label-wrap, normal);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--vaadin-button-height, fit-content);
    margin: var(--vaadin-button-margin, 0);
    padding: var(--vaadin-button-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    font-family: var(--vaadin-button-font-family, inherit);
    font-size: var(--vaadin-button-font-size, inherit);
    line-height: var(--vaadin-button-line-height, inherit);
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--vaadin-button-text-color, var(--vaadin-text-color));
    background: var(--vaadin-button-background, var(--vaadin-background-container));
    background-origin: border-box;
    border: var(--vaadin-button-border-width, 1px) solid
      var(--vaadin-button-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-button-border-radius, var(--vaadin-radius-m));
    touch-action: manipulation;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-button-container,
  [part='prefix'],
  [part='suffix'] {
    display: contents;
  }

  [part='label'] {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: 1px;
  }

  :host([theme~='primary']) {
    --vaadin-button-background: var(--vaadin-text-color);
    --vaadin-button-text-color: var(--vaadin-background-color);
    --vaadin-button-border-color: transparent;
  }

  :host([theme~='tertiary']) {
    background: transparent;
    border-color: transparent;
  }

  :host([disabled]) {
    pointer-events: var(--_vaadin-button-disabled-pointer-events, none);
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host([disabled][theme~='primary']) {
    --vaadin-button-text-color: var(--vaadin-background-container-strong);
    --vaadin-button-background: var(--vaadin-text-color-disabled);
  }

  @media (forced-colors: active) {
    :host {
      --vaadin-button-border-width: 1px;
      --vaadin-button-background: ButtonFace;
      --vaadin-button-text-color: ButtonText;
    }

    :host([theme~='primary']) {
      forced-color-adjust: none;
      --vaadin-button-background: CanvasText;
      --vaadin-button-text-color: Canvas;
      --vaadin-icon-color: Canvas;
    }

    ::slotted(*) {
      forced-color-adjust: auto;
    }

    :host([disabled]) {
      --vaadin-button-background: transparent !important;
      --vaadin-button-border-color: GrayText !important;
      --vaadin-button-text-color: GrayText !important;
      opacity: 1;
    }
  }
`,Pl="string"==typeof document.head.style.touchAction,Dl="__polymerGestures",jl="__polymerGesturesHandled",Rl="__polymerGesturesTouchAction",Bl=["mousedown","mousemove","mouseup","click"],Fl=[0,1,4,2],Hl=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ql(t){return Bl.indexOf(t)>-1}let Ul=!1;function Vl(t){ql(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){Ul=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Wl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Kl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Xl(t){const e=t.type;if(!ql(e))return!1;if("mousemove"===e){let e=t.buttons??1;return t instanceof window.MouseEvent&&!Hl&&(e=Fl[t.which]||0),Boolean(1&e)}return 0===(t.button??0)}const Yl={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Gl(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function Zl(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const Ql=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Jl={},tc=[];function ec(t,e){let n=document.elementFromPoint(t,e),i=n;for(;i?.shadowRoot&&!window.ShadyDOM;){const r=i;if(i=i.shadowRoot.elementFromPoint(t,e),r===i)break;i&&(n=i)}return n}function nc(t){const e=Ql(t);return e.length>0?e[0]:t.target}function ic(t){const e=t.type,n=t.currentTarget[Dl];if(!n)return;const i=n[e];if(!i)return;if(!t[jl]&&(t[jl]={},e.startsWith("touch"))){const n=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(Yl.touch.id=n.identifier),Yl.touch.id!==n.identifier)return;Pl||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],n=t.type;if("touchstart"===n)Yl.touch.x=e.clientX,Yl.touch.y=e.clientY,Yl.touch.scrollDecided=!1;else if("touchmove"===n){if(Yl.touch.scrollDecided)return;Yl.touch.scrollDecided=!0;const n=function(t){let e="auto";const n=Ql(t);for(let t,i=0;i<n.length;i++)if(t=n[i],t[Rl]){e=t[Rl];break}return e}(t);let i=!1;const r=Math.abs(Yl.touch.x-e.clientX),o=Math.abs(Yl.touch.y-e.clientY);t.cancelable&&("none"===n?i=!0:"pan-x"===n?i=o>r:"pan-y"===n&&(i=r>o)),i?t.preventDefault():ac("track")}}(t)}const r=t[jl];if(!r.skip){for(let e,n=0;n<tc.length;n++)e=tc[n],i[e.name]&&!r[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let n,o=0;o<tc.length;o++)n=tc[o],i[n.name]&&!r[n.name]&&(r[n.name]=!0,n[e](t))}}function rc(t,e,n){return!!Jl[e]&&(function(t,e,n){const i=Jl[e],r=i.deps,o=i.name;let s=t[Dl];s||(t[Dl]=s={});for(let e,n,i=0;i<r.length;i++)e=r[i],Wl&&ql(e)&&"click"!==e||(n=s[e],n||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,ic,Vl(e)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),i.touchAction&&function(t,e){Pl&&t instanceof HTMLElement&&ga.run(()=>{t.style.touchAction=e}),t[Rl]=e}(t,i.touchAction)}(t,e,n),!0)}function oc(t){tc.push(t),t.emits.forEach(e=>{Jl[e]=t})}function sc(t,e,n){const i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,t.dispatchEvent(i),i.defaultPrevented){const t=n.preventer||n.sourceEvent;t?.preventDefault&&t.preventDefault()}}function ac(t){const e=function(t){for(let e,n=0;n<tc.length;n++){e=tc[n];for(let n,i=0;i<e.emits.length;i++)if(n=e.emits[i],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function lc(t,e,n,i){e&&sc(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:t=>ac(t)})}function cc(t,e,n){if(t.prevent)return!1;if(t.started)return!0;const i=Math.abs(t.x-e),r=Math.abs(t.y-n);return i>=5||r>=5}function dc(t,e,n){if(!e)return;const i=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],o=r.x-t.x,s=r.y-t.y;let a,l=0;i&&(a=r.x-i.x,l=r.y-i.y),sc(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:o,dy:s,ddx:a,ddy:l,sourceEvent:n,hover:()=>ec(n.clientX,n.clientY)})}function uc(t,e,n){const i=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),o=nc(n||e);!o||Kl[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=nc(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const n=e.getBoundingClientRect(),i=t.pageX,r=t.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||sc(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}function hc(t,e,n){n?t.setAttribute(e,n):t.removeAttribute(e)}function pc(t){return t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim()}function vc(t){return!!t&&Boolean(t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent?.trim())}oc({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Zl(this.info)},mousedown(t){if(!Xl(t))return;const e=nc(t),n=this;Gl(this.info,t=>{Xl(t)||(lc("up",e,t),Zl(n.info))},t=>{Xl(t)&&lc("up",e,t),Zl(n.info)}),lc("down",e,t)},touchstart(t){lc("down",nc(t),t.changedTouches[0],t)},touchend(t){lc("up",nc(t),t.changedTouches[0],t)}}),oc({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Zl(this.info)},mousedown(t){if(!Xl(t))return;const e=nc(t),n=this,i=t=>{const i=t.clientX,r=t.clientY;cc(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&ac("tap"),n.info.addMove({x:i,y:r}),Xl(t)||(n.info.state="end",Zl(n.info)),e&&dc(n.info,e,t),n.info.started=!0)};Gl(this.info,i,t=>{n.info.started&&i(t),Zl(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=nc(t),n=t.changedTouches[0],i=n.clientX,r=n.clientY;cc(this.info,i,r)&&("start"===this.info.state&&ac("tap"),this.info.addMove({x:i,y:r}),dc(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend(t){const e=nc(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),dc(this.info,e,n))}}),oc({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Xl(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Xl(t)&&uc(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){uc(this.info,t.changedTouches[0],t)}});const fc=Oa(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){hc(this,"aria-disabled",t)}click(){this.disabled||super.click()}}),_c=Oa(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}),gc=t=>class extends(fc(_c(t))){get _activeKeys(){return[" "]}ready(){super.ready(),rc(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),rc(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}},mc=Oa(t=>class extends t{get _keyboardActive(){return _l()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),!1!==t?.focusVisible&&this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}}),bc=t=>class extends(fc(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),this.__shouldAllowFocusWhenDisabled()||(t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):e&&(void 0!==this._lastTabIndex?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(t){this.__shouldAllowFocusWhenDisabled()||this.disabled&&-1!==t&&(this._lastTabIndex=t,this.setAttribute("tabindex","-1"))}focus(t){this.disabled&&!this.__shouldAllowFocusWhenDisabled()||super.focus(t)}__shouldAllowFocusWhenDisabled(){return!1}},yc=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],wc=t=>class extends(gc(bc(mc(t)))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),yc.forEach(t=>{this.addEventListener(t,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(t){super._onKeyDown(t),t.altKey||t.shiftKey||t.ctrlKey||t.metaKey||this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}__onInteractionEvent(t){this.__shouldSuppressInteractionEvent(t)&&t.stopImmediatePropagation()}__shouldSuppressInteractionEvent(t){return this.disabled}},xc=Yo`
  [part='icon'] {
    background: currentColor;
    display: block;
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-menu) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    width: var(--vaadin-icon-size, 1lh);
  }

  [hidden] {
    display: none !important;
  }

  @media (forced-colors: active) {
    [part='icon'] {
      background: CanvasText;
    }
  }
`;class Cc extends(wc(Ca(rl(Na(Ga(na)))))){static get is(){return"vaadin-drawer-toggle"}static get styles(){return[Nl,xc]}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0,sync:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}render(){return Ns`
      <slot id="slot" @slotchange="${this._toggleFallbackIcon}">
        <div part="icon"></div>
      </slot>
      <div part="icon" ?hidden="${!this._showFallbackIcon}"></div>
    `}ready(){super.ready(),this._toggleFallbackIcon()}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(t=>pc(t))}}oa(Cc);const kc=t=>t??js;class Ac{constructor(t,e,n={}){this.target=t,this.callback=e,this.forceInitial=n.forceInitial,this._storedNodes=[],this._isSlot=t instanceof HTMLSlotElement,this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),n.syncInitial?this.flush():this._schedule()}connect(){this.target.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.target.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this._scheduled&&this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_collectNodes(){const t=this._isSlot?[this.target]:[...this.target.querySelectorAll("slot")];return[...new Set(t.flatMap(t=>t.assignedNodes({flatten:!0})))]}_groupNodesBySlot(t){const e=new Map;return t.forEach(t=>{const n=t.assignedSlot;e.set(n,e.get(n)??[]),e.get(n).push(t)}),e}_collectMovedNodes(t){const e=this._groupNodesBySlot(t),n=this._groupNodesBySlot(this._storedNodes),i=[];return e.forEach((t,e)=>{const r=n.get(e)||[];new Set(r).difference(new Set(t)).size>0||r.forEach((e,n)=>{t.indexOf(e)!==n&&i.push(e)})}),i}_processNodes(){const t=this._collectNodes(),e=t.filter(t=>!this._storedNodes.includes(t)),n=this._storedNodes.filter(e=>!t.includes(e)),i=this._collectMovedNodes(t);(e.length||n.length||i.length||this.forceInitial)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:i,removedNodes:n}),this.forceInitial&&(this.forceInitial=!1),this._storedNodes=t}}const Sc=Yo`
  :host {
    display: inline-flex;
    align-items: baseline;
    flex-shrink: 0;
    font-size: var(--vaadin-breadcrumbs-font-size, 1em);
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([current]) {
    color: var(--vaadin-text-color);
    font-weight: bolder;
  }

  [part='link'],
  [part='nolink'] {
    display: inline-flex;
    gap: var(--vaadin-breadcrumbs-item-gap, var(--vaadin-gap-xs));
    align-items: baseline;
    border-radius: var(--vaadin-breadcrumbs-item-border-radius, var(--vaadin-radius-m));
    padding: var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container);
    flex: 1;
  }

  :host(:not([slot='overlay'])) :is([part='link'], [part='nolink']) {
    margin-inline: calc(var(--vaadin-padding-inline-container) * -1);
  }

  [part='link'] {
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    &:any-link {
      color: var(--vaadin-breadcrumbs-link-color, LinkText);
    }

    &:focus-visible {
      outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    }
  }

  :host::after {
    content: '\\2003' / '';
    display: inline-flex;
    align-items: center;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--vaadin-breadcrumbs-separator-icon, var(--_vaadin-icon-chevron-right)) center /
      var(--vaadin-icon-visual-size, 100%) no-repeat;
    margin-inline-start: var(--vaadin-breadcrumbs-gap, var(--vaadin-gap-xs));
    opacity: 0.75;
  }

  :host(:last-of-type)::after,
  :host([current])::after {
    display: none;
  }

  :host([dir='rtl'])::after {
    scale: -1;
  }

  :host([slot='overlay']) {
    display: flex;

    [part='link'] {
      border-radius: var(--vaadin-radius-s);
    }
  }

  :host([slot='overlay'][disabled]),
  :host([slot='overlay']:not([path])) {
    color: var(--vaadin-text-color-secondary);
  }

  :host([slot='overlay'][focus-ring]) [part='link'] {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  :host([slot='overlay'])::after {
    display: none;
  }

  @media (any-hover: hover) {
    :host([slot='overlay']) [part='link'] {
      text-decoration: none;
    }
  }

  @media (forced-colors: active) {
    :host::after {
      background: CanvasText;
    }
  }
`;class Ec extends(mc(fc(Sa(Na(Ga(na)))))){static get is(){return"vaadin-breadcrumbs-item"}static get shadowRootOptions(){return{...na.shadowRootOptions,delegatesFocus:!0}}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}static get properties(){return{path:{type:String},current:{type:Boolean,value:!1,readOnly:!0,reflectToAttribute:!0}}}static get styles(){return Sc}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","listitem")}render(){return Ns`
      ${null==this.path?Ns`
              <span part="nolink" aria-current="${this.current?"page":js}">
                <slot name="prefix"></slot>
                <span part="label">
                  <slot></slot>
                </span>
              </span>
            `:Ns`
              <a
                href="${kc(this.disabled?null:this.path)}"
                tabindex="${this.disabled?"-1":"0"}"
                part="link"
              >
                <slot name="prefix"></slot>
                <span part="label">
                  <slot></slot>
                </span>
              </a>
            `}
    `}ready(){super.ready(),this.__slotObserver=new Ac(this.shadowRoot,()=>{this.toggleAttribute("has-prefix",!!this.querySelector('[slot="prefix"]'))},{syncInitial:!0})}focus(t){this.disabled||super.focus(t)}_shouldSetFocus(){return!this.disabled}}oa(Ec);const Oc=[{name:"--vaadin-overlay-animation-duration",syntax:"<time>",initialValue:"0s"},{name:"--vaadin-overlay-animation-delay",syntax:"<time>",initialValue:"0s"},{name:"--vaadin-overlay-animation-timing-function",syntax:"*",initialValue:"ease"},{name:"--vaadin-overlay-opacity-closed",syntax:"<number>",initialValue:"0"},{name:"--vaadin-overlay-translate-closed",syntax:"<length>+ | <percentage>+",initialValue:"0px"},{name:"--vaadin-overlay-scale-closed",syntax:"<number> | <percentage>",initialValue:"1"},{name:"--vaadin-overlay-transform-closed",syntax:"*"}];Oc.forEach(t=>{Pa({inherits:!1,...t})});const zc=Xo(Oc.map(({name:t})=>`${t}: inherit;`).join("\n")),Mc=Yo`
  :host,
  [part='overlay'],
  [part='backdrop'] {
    ${zc}
  }

  :host(:where([opening], [closing])) {
    /* This empty animation only reports the state, the parts run the visible animation */
    animation-name: --no-op;
    animation-duration: var(--vaadin-overlay-animation-duration);
    animation-delay: var(--vaadin-overlay-animation-delay);
  }

  :host(:where([closing])) [part='overlay'],
  :host(:where([closing])) ::slotted(*) {
    pointer-events: none !important;
  }

  :host(:where([opening], [closing])) :is([part='overlay'], [part='backdrop']) {
    animation-name: --fade, --transform;
    animation-duration: var(--vaadin-overlay-animation-duration);
    animation-timing-function: var(--vaadin-overlay-animation-timing-function);
    animation-delay: var(--vaadin-overlay-animation-delay);
    /* Fill backwards only, so the closed value applies during the delay without overriding theme styles */
    animation-fill-mode: backwards;

    @media (prefers-reduced-motion) {
      animation-name: --fade;
    }
  }

  :host(:where([opening], [closing])) [part='backdrop'] {
    animation-name: --fade;
    animation-timing-function: linear;
    --vaadin-overlay-opacity-closed: 0;
  }

  :host(:where([closing])) :is([part='overlay'], [part='backdrop']) {
    animation-direction: reverse;
    animation-fill-mode: both;
  }

  @keyframes --no-op {
  }

  /* Only the closed state is declared, so the animations end at the value the part already has */
  @keyframes --transform {
    0% {
      transform: var(--vaadin-overlay-transform-closed);
      translate: var(--vaadin-overlay-translate-closed);
      scale: var(--vaadin-overlay-scale-closed);
    }
  }

  @keyframes --fade {
    0% {
      opacity: var(--vaadin-overlay-opacity-closed);
    }
  }
`,Tc=[Yo`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints. Themes can
          override this to adjust the gap between the overlay and the viewport. */
    inset: max(env(safe-area-inset-top, 0px), var(--vaadin-overlay-viewport-inset, 8px))
      max(env(safe-area-inset-right, 0px), var(--vaadin-overlay-viewport-inset, 8px))
      max(env(safe-area-inset-bottom, 0px), var(--vaadin-overlay-viewport-bottom))
      max(env(safe-area-inset-left, 0px), var(--vaadin-overlay-viewport-inset, 8px));

    /* Override native [popover] user agent styles */
    width: auto;
    height: auto;
    border: none;
    padding: 0;
    background-color: transparent;
    overflow: visible;

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 8px;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  :host([suppressed]) [part='overlay'],
  :host([suppressed]) ::slotted(*) {
    pointer-events: none !important;
  }

  [part='overlay'] {
    color: var(--vaadin-overlay-text-color, var(--vaadin-text-color));
    background: var(--vaadin-overlay-background, var(--vaadin-background-color));
    border: var(--vaadin-overlay-border-width, 1px) solid
      var(--vaadin-overlay-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-overlay-border-radius, var(--vaadin-radius-m));
    box-shadow: var(--vaadin-overlay-shadow, 0 8px 24px -4px rgba(0, 0, 0, 0.3));
    box-sizing: border-box;
    max-width: 100%;
    overflow: auto;
    overscroll-behavior: contain;
    pointer-events: auto;
    -webkit-tap-highlight-color: initial;

    /* CSS reset for font styles */
    font: initial;
    letter-spacing: initial;
    text-align: initial;
    text-decoration: initial;
    text-indent: initial;
    text-transform: initial;
    user-select: text;
    white-space: initial;
    word-spacing: initial;

    /* Inherit font-family */
    font-family: inherit;
  }

  [part='backdrop'] {
    background: var(--vaadin-overlay-backdrop-background, rgba(0, 0, 0, 0.2));
    content: '';
    inset: 0;
    pointer-events: auto;
    position: fixed;
    z-index: -1;
  }

  [part='overlay']:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      border: 3px solid !important;
    }
  }
`,Mc],Ic=new WeakSet;class Lc{saveFocus(t){this.focusNode=t||fl()}restoreFocus(t){const e=this.focusNode;if(!e)return;const n={preventScroll:!!t&&t.preventScroll,focusVisible:!!t&&t.focusVisible};fl()===document.body?setTimeout(()=>e.focus(n)):e.focus(n),this.focusNode=null}}const $c=t=>class extends t{static get properties(){return{focusTrap:{type:Boolean,value:!1},autofocus:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}static get manageFocus(){return!0}constructor(){super(),this.__manageFocus=this.constructor.manageFocus,this.__manageFocus&&(this.__focusTrapController=new Sl(this),this.__focusRestorationController=new Lc)}get _contentRoot(){return this}ready(){super.ready(),this.__manageFocus&&(this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController))}get _focusRoot(){return this.$.overlay}_resetFocus(){if(this.__manageFocus&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this.restoreFocusOnClose&&this._shouldRestoreFocus())){const t=_l(),e=!t;this.__focusRestorationController.restoreFocus({preventScroll:e,focusVisible:t})}}_saveFocus(){this.__manageFocus&&this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_initFocus(){if(!this.__manageFocus||yl(this._focusRoot))return;const t=kl(this._focusRoot);if(!t.some(xl)){const e=t.find(t=>this.#g(t))??(this.autofocus?t[0]:null);e?.focus({focusVisible:_l()})}this.focusTrap&&this.__focusTrapController.trapFocus(this._focusRoot)}_shouldRestoreFocus(){const t=fl();return t===document.body||this._deepContains(t)}_deepContains(t){if(this._contentRoot.contains(t))return!0;let e=t;const n=t.ownerDocument;for(;e&&e!==n&&e!==this._contentRoot;)e=e.parentNode||e.host;return e===this._contentRoot}#g(t){const e=this._focusRoot;let n=t;for(;n&&n!==e&&n!==this;){if(n.autofocus&&(n===t||customElements.get(n.localName)))return!0;n=n.assignedSlot||n.parentNode||n.host}return!1}},Nc=new Set,Pc=()=>[...Nc].filter(t=>!t.hasAttribute("closing")),Dc=(t,e=t=>!0)=>t===Pc().filter(e).pop(),jc=t=>class extends t{get _last(){return Dc(this)}get _isAttached(){return Nc.has(this)}bringToFront(){if(Dc(this))return;const t=(t=>{const e=Pc(),n=e.indexOf(t);return-1===n?[]:e.slice(n+1)})(this),e=t.filter(t=>{return t._hasOverlayPositionMixin&&(e=t,this._deepContains(e));var e});e.length!==t.length&&[this,...e].forEach(t=>{t.matches(":popover-open")&&(t.hidePopover(),t.showPopover()),t._removeAttachedInstance(),t._appendAttachedInstance()})}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Pc().forEach(t=>{t!==this&&t.toggleAttribute("suppressed",!0)})}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=Pc();let e;for(;(e=t.pop())&&(e===this||(e.toggleAttribute("suppressed",!1),e.modeless)););}_appendAttachedInstance(){Nc.add(this)}_removeAttachedInstance(){this._isAttached&&Nc.delete(this)}};function Rc(t,e,n){const i=[t];t.owner&&i.push(t.owner),"string"==typeof n?i.forEach(t=>{t.setAttribute(e,n)}):n?i.forEach(t=>{t.setAttribute(e,"")}):i.forEach(t=>{t.removeAttribute(e)})}const Bc=t=>class extends($c(jc(t))){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_withBackdropChanged",sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}get _rendererRoot(){return this}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Ro&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}firstUpdated(){super.firstUpdated(),this.popover="manual",this.addEventListener("click",()=>{}),this.$.backdrop&&this.$.backdrop.addEventListener("click",()=>{})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener)),this.opened&&this._attachOverlay()}disconnectedCallback(){super.disconnectedCallback(),this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this._rendererRoot,this.owner,this.model)}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{overlay:this,sourceEvent:t}});this.dispatchEvent(e),document.body.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}setBounds(t,e=!0){const n=this.$.overlay,i={...t};e&&"absolute"!==n.style.position&&(n.style.position="absolute"),Object.keys(i).forEach(t=>{null===i[t]||isNaN(i[t])||(i[t]=`${i[t]}px`)}),Object.assign(n.style,i)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;e&&n>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-t+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0px")}_shouldAddGlobalListeners(){return!this.modeless}_addGlobalListeners(){this.__hasGlobalListeners||(this.__hasGlobalListeners=!0,document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0))}_removeGlobalListeners(){this.__hasGlobalListeners&&(this.__hasGlobalListeners=!1,document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0))}_rendererOrDataChanged(t,e,n,i){const r=this._oldOwner!==e||this._oldModel!==n;this._oldModel=n,this._oldOwner=e;const o=this._oldRenderer!==t,s=void 0!==this._oldRenderer;this._oldRenderer=t;const a=this._oldOpened!==i;this._oldOpened=i,o&&s&&(this._rendererRoot.innerHTML="",delete this._rendererRoot._$litPart$),i&&t&&(o||a||r)&&this.requestContentUpdate()}_modelessChanged(t){this.opened&&(this._shouldAddGlobalListeners()?this._addGlobalListeners():this._removeGlobalListeners()),t?this._exitModalState():this.opened&&this._enterModalState(),Rc(this,"modeless",t)}_withBackdropChanged(t){Rc(this,"with-backdrop",t)}_openedChanged(t,e){if(t){if(!this.isConnected)return void(this.opened=!1);this._saveFocus(),this._animatedOpening(),this.__scheduledOpen=requestAnimationFrame(()=>{setTimeout(()=>{this._initFocus();const t=new CustomEvent("vaadin-overlay-open",{detail:{overlay:this},bubbles:!0});this.dispatchEvent(t),document.body.dispatchEvent(t)})}),document.addEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._addGlobalListeners()}else e&&(this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_enqueueAnimation(t,e){const n=this.getAnimations().filter(t=>t instanceof CSSAnimation&&t.effect.getComputedTiming().activeDuration>0);if(0===n.length)return void e();const i=`__${t}Handler`,r=()=>{this[i]===r&&(delete this[i],e())};this[i]=r,Promise.all(n.map(t=>t.finished)).then(r,r)}_flushAnimation(t){const e=`__${t}Handler`;"function"==typeof this[e]&&this[e]()}_animatedOpening(){this._isAttached&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this._appendAttachedInstance(),this.modeless||this._enterModalState(),Rc(this,"opening",!0),this._enqueueAnimation("opening",()=>{this._finishOpening()})}_attachOverlay(){this.matches(":popover-open")||this.showPopover()}_finishOpening(){Rc(this,"opening",!1)}_finishClosing(){this._detachOverlay(),this._removeAttachedInstance(),this.toggleAttribute("suppressed",!1),Rc(this,"closing",!1),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._isAttached&&(this._exitModalState(),Rc(this,"closing",!0),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._enqueueAnimation("closing",()=>{this._finishClosing()}))}_detachOverlay(){this.hidePopover()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&(this.close(t),this.opened||this.modeless||function(t){Ic.add(t)}(t))}_keydownListener(t){if(this._last&&!t.defaultPrevented&&(this._shouldAddGlobalListeners()||t.composedPath().includes(this._focusRoot))&&"Escape"===t.key){const e=new CustomEvent("vaadin-overlay-escape-press",{cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}},Fc={start:"top",end:"bottom"},Hc={start:"left",end:"right"},qc=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),Uc=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}constructor(){super(),this._hasOverlayPositionMixin=!0,this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}updated(t){if(super.updated(t),t.has("positionTarget")){const e=t.get("positionTarget");this.__oldContentWidth=void 0,this.__oldContentHeight=void 0,(!this.positionTarget&&e||this.positionTarget&&!e&&this.__margins)&&this.__resetPosition()}(t.has("opened")||t.has("positionTarget"))&&this.__updatePositionSettings(this.opened,this.positionTarget),["horizontalAlign","verticalAlign","noHorizontalOverlap","noVerticalOverlap","requiredVerticalSpace"].some(e=>t.has(e))&&this._updatePosition()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=function(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?t=t.assignedSlot?t.assignedSlot:t.parentNode:(e.push(t),t=t.host)}return e}(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=function(t,e){let n,i=null;const r=document.documentElement;function o(){n&&clearTimeout(n),i?.disconnect(),i=null}return function s(a=!1,l=1){o();const{left:c,top:d,width:u,height:h}=t.getBoundingClientRect();if(a||e(),!u||!h)return;const p={rootMargin:`${-Math.floor(d)}px ${-Math.floor(r.clientWidth-(c+u))}px ${-Math.floor(r.clientHeight-(d+h))}px ${-Math.floor(c)}px`,threshold:Math.max(0,Math.min(1,l))||1};let v=!0;i=new IntersectionObserver(function(t){const e=t[0].intersectionRatio;if(e!==l){if(!v)return s();e?s(!1,e):n=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1},p),i.observe(t)}(!0),o}(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__updatePositionSettings(t,e){if(this.__removeUpdatePositionEventListeners(),e&&(e.__overlay=null,qc.unobserve(e),t&&(this.__addUpdatePositionEventListeners(),e.__overlay=this,qc.observe(e))),t){const t=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(e=>{this.__margins[e]=parseInt(t[e],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__onScroll(t){t.target instanceof Node&&this._deepContains(t.target)||this._updatePosition()}__resetPosition(){this.__margins=null,Object.assign(this.style,{justifyContent:"",alignItems:"",top:"",bottom:"",left:"",right:""}),Rc(this,"bottom-aligned",!1),Rc(this,"top-aligned",!1),Rc(this,"end-aligned",!1),Rc(this,"start-aligned",!1)}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const t=this.positionTarget.getBoundingClientRect();if(0===t.width&&0===t.height&&this.opened)return void(this.opened=!1);const e=this.__shouldAlignStartVertically(t);this.style.justifyContent=e?"flex-start":"flex-end";const n=this.__isRTL,i=this.__shouldAlignStartHorizontally(t,n),r=!n&&i||n&&!i;this.style.alignItems=r?"flex-start":"flex-end";const o=this.getBoundingClientRect(),s=this.__calculatePositionInOneDimension(t,o,this.noVerticalOverlap,Fc,this,e),a=this.__calculatePositionInOneDimension(t,o,this.noHorizontalOverlap,Hc,this,i);Object.assign(this.style,s,a),Rc(this,"bottom-aligned",!e),Rc(this,"top-aligned",e),Rc(this,"end-aligned",!r),Rc(this,"start-aligned",r)}__shouldAlignStartHorizontally(t,e){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!e&&"start"===this.horizontalAlign||e&&"end"===this.horizontalAlign;return this.__shouldAlignStart(t,n,i,this.__margins,r,this.noHorizontalOverlap,Hc)}__shouldAlignStartVertically(t){const e=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),i="top"===this.verticalAlign;return this.__shouldAlignStart(t,e,n,this.__margins,i,this.noVerticalOverlap,Fc)}__shouldAlignStart(t,e,n,i,r,o,s){const a=n-t[o?s.end:s.start]-i[s.end],l=t[o?s.start:s.end]-i[s.start],c=r?a:l;return r===(c>(r?l:a)||c>e)}__adjustBottomProperty(t,e,n){let i;if(t===e.end){if(e.end===Fc.end){const t=Math.min(window.innerHeight,document.documentElement.clientHeight);n>t&&this.__oldViewportHeight&&(i=n-(this.__oldViewportHeight-t)),this.__oldViewportHeight=t}if(e.end===Hc.end){const t=Math.min(window.innerWidth,document.documentElement.clientWidth);n>t&&this.__oldViewportWidth&&(i=n-(this.__oldViewportWidth-t)),this.__oldViewportWidth=t}}return i}__calculatePositionInOneDimension(t,e,n,i,r,o){const s=o?i.start:i.end,a=o?i.end:i.start,l=parseFloat(r.style[s]||getComputedStyle(r)[s]),c=this.__adjustBottomProperty(s,i,l),d=e[o?i.start:i.end]-t[n===o?i.end:i.start],u=c?`${c}px`:`${l+d*(o?-1:1)}px`;return{[s]:u,[a]:""}}};class Vc extends(Uc(Bc(Ca(Na(Ga(na)))))){static get is(){return"vaadin-breadcrumbs-overlay"}static get styles(){return[Tc,Yo`
        [part='content'] {
          padding: var(--vaadin-item-overlay-padding, 4px);
        }

        :host([top-aligned]) [part='overlay'] {
          margin-top: var(--_offset, 4px);
        }

        :host([bottom-aligned]) [part='overlay'] {
          margin-bottom: var(--_offset, 4px);
        }
      `]}render(){return Ns`
      <div part="overlay" id="overlay">
        <div part="content" id="content" role="list">
          <slot></slot>
        </div>
      </div>
    `}_shouldCloseOnOutsideClick(t){const e=t.composedPath();return!e.includes(this.positionTarget)&&!e.includes(this)}get _contentRoot(){return this.owner}_initFocus(){}}oa(Vc);const Wc=t=>class extends(_c(t)){get focused(){return(this._getItems()||[]).find(xl)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(t){const e=this._getFocusableIndex();e>=0&&this._focus(e,t)}_getFocusableIndex(){const t=this._getItems();return Array.isArray(t)?this._getAvailableIndex(t,0,null,t=>!yl(t)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:e,shiftKey:n}=t,i=this._getItems()||[],r=i.indexOf(this.focused);let o,s;const a=this._vertical||"rtl"!==this.getAttribute("dir")?1:-1;this.__isPrevKeyPressed(e,n)?(s=-a,o=r-a):this.__isNextKeyPressed(e,n)?(s=a,o=r+a):"Home"===e?(s=1,o=0):"End"===e&&(s=-1,o=i.length-1),o=this._getAvailableIndex(i,o,s,t=>!yl(t)),this._tabNavigation&&"Tab"===e&&(o>r&&t.shiftKey||o<r&&!t.shiftKey||o===r)||o>=0&&(t.preventDefault(),this._focus(o,{focusVisible:!0,preventScroll:!0},!0))}__isPrevKeyPressed(t,e){return this._vertical?"ArrowUp"===t:"ArrowLeft"===t||this._tabNavigation&&"Tab"===t&&e}__isNextKeyPressed(t,e){return this._vertical?"ArrowDown"===t:"ArrowRight"===t||this._tabNavigation&&"Tab"===t&&!e}_focus(t,e,n=!1){const i=this._getItems();this._focusItem(i[t],e,n)}_focusItem(t,e){t&&t.focus(e)}_getAvailableIndex(t,e,n,i){const r=t.length;let o=e;for(let e=0;"number"==typeof o&&e<r;e+=1,o+=n||1){o<0?o=r-1:o>=r&&(o=0);const e=t[o];if(this._isItemFocusable(e)&&this.__isMatchingItem(e,i))return o}return-1}__isMatchingItem(t,e){return"function"!=typeof e||e(t)}_isItemFocusable(t){return!t.hasAttribute("disabled")}},Kc=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(t=>{t.target.isConnected&&(t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect))})})}),Xc=Oa(t=>class extends t{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Kc.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,Kc.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),Kc.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),0===e.size&&Kc.unobserve(t)),this.__parent=null}}_onResize(t){}}),Yc=Yo`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    color: var(--vaadin-breadcrumbs-text-color, var(--vaadin-text-color-secondary));
    font-size: var(--vaadin-breadcrumbs-font-size, 1em);
    line-height: var(--vaadin-breadcrumbs-line-height, inherit);
    font-weight: var(--vaadin-breadcrumbs-font-weight, 400);
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='list'] {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    gap: var(--vaadin-breadcrumbs-gap, var(--vaadin-gap-xs));
    min-width: 0;
    max-width: 100%;
  }

  [part='overflow'] {
    display: inline-flex;
    align-items: inherit;
    flex-shrink: 0;
  }

  [part='overflow'][hidden] {
    display: none !important;
  }

  [part='overflow-button'] {
    appearance: none;
    background: transparent;
    color: inherit;
    border: none;
    border-radius: var(--vaadin-breadcrumbs-item-border-radius, var(--vaadin-radius-m));
    box-sizing: border-box;
    --_padding: var(--vaadin-padding-block-container);
    padding: var(--_padding);
    margin: calc(var(--_padding) * -1);
    /* Ensure minimum click target (WCAG) */
    min-height: 24px;
    min-width: 24px;
    font: inherit;
    cursor: var(--vaadin-clickable-cursor);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overflow-button']::before {
    content: '\\2003' / '';
    display: inline-flex;
    align-items: center;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--vaadin-breadcrumbs-overflow-icon, var(--_vaadin-icon-ellipsis)) center /
      var(--vaadin-icon-visual-size, 100%) no-repeat;
    opacity: 0.8;
  }

  [part='overflow-button']:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  [part='overflow']::after {
    content: '\\2003' / '';
    display: inline-flex;
    align-items: center;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--vaadin-breadcrumbs-separator-icon, var(--_vaadin-icon-chevron-right)) center /
      var(--vaadin-icon-visual-size, 100%) no-repeat;
    margin-inline-start: var(--vaadin-breadcrumbs-gap, var(--vaadin-gap-xs));
    opacity: 0.75;
  }

  :host([dir='rtl']) [part='overflow']::after {
    scale: -1;
  }

  :host(:where(:not([theme~='slash']))) [part='overflow']::after,
  :host(:where(:not([theme~='slash']))) ::slotted(vaadin-breadcrumbs-item)::after {
    --vaadin-icon-visual-size: 90%;
  }

  :host([theme~='slash']) {
    --vaadin-breadcrumbs-separator-icon: var(--_vaadin-icon-slash);
  }

  @media (forced-colors: active) {
    [part='overflow-button']::before,
    [part='overflow']::after {
      background: CanvasText !important;
    }
  }
`,Gc={moreItems:"More items"};class Zc extends(Wc(Xc(Tl(Sa(Na(Ga(na))))))){static get is(){return"vaadin-breadcrumbs"}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}static get styles(){return Yc}static get properties(){return{__overlayOpened:{type:Boolean,value:!1,sync:!0},__hasOverflow:{type:Boolean,value:!1,sync:!0,reflectToAttribute:!0,attribute:"has-overflow"}}}static get defaultI18n(){return Gc}get i18n(){return super.i18n}set i18n(t){super.i18n=t}render(){return Ns`
      <div id="list" role="list" part="list">
        <slot name="root"></slot>
        <div role="listitem" part="overflow" ?hidden="${!this.__hasOverflow}">
          <button
            id="overflow"
            type="button"
            part="overflow-button"
            aria-haspopup="true"
            aria-expanded="${this.__overlayOpened?"true":"false"}"
            aria-label="${this.__effectiveI18n?.moreItems}"
            @click="${this.__onOverflowButtonClick}"
          ></button>
        </div>
        <slot></slot>
      </div>
      <vaadin-breadcrumbs-overlay
        id="overlay"
        .opened="${this.__overlayOpened}"
        .owner="${this}"
        no-vertical-overlap
        restore-focus-on-close
        exportparts="overlay, content: overlay-content"
        @opened-changed="${this.__onOverlayOpenedChanged}"
      >
        <slot name="overlay"></slot>
      </vaadin-breadcrumbs-overlay>
    `}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this.$.overlay.positionTarget=this.$.overflow,this.$.overlay.restoreFocusNode=this.$.overflow,this.__slotObserver=new Ac(this.shadowRoot,()=>{this.__updateItems(),this.__updateOverflow()},{syncInitial:!0}),this.__pathObserver=new MutationObserver(()=>this.__updateItems()),this.__pathObserver.observe(this,{attributes:!0,attributeFilter:["path"],subtree:!0})}__getAllItems(){return[...this.children].filter(t=>"vaadin-breadcrumbs-item"===t.localName)}__updateItems(){const t=this.__getAllItems(),e=t.length-1;t.forEach((t,n)=>{const i=n===e&&null==t.path;t._setCurrent?.(i)})}__restoreSlots(t){t.forEach((t,e)=>hc(t,"slot",0===e?"root":null))}__updateOverflow(){const t=this.__getAllItems();if(this.__restoreSlots(t),t.length<=1)return void(this.__hasOverflow=!1);this.__hasOverflow=!0;const e=this.$.list,n=e.querySelector('[part="overflow"]').getBoundingClientRect(),i=e.getBoundingClientRect(),r=t.map(t=>t.getBoundingClientRect()),o=parseFloat(getComputedStyle(e).gap)||0;if(e.scrollWidth-n.width-o<=e.clientWidth)return void(this.__hasOverflow=!1);const s=r.at(-1),a=Math.max(0,s.right-i.right,i.left-s.left);for(let e=1;e<t.length-1;e+=1)if(t[e].setAttribute("slot","overlay"),Math.abs(r[e+1].left-r[1].left)>=a)return;t[0].setAttribute("slot","overlay")}_onResize(){this.__updateOverflow()}__onOverflowButtonClick(t){t.stopPropagation(),this.__overlayOpened=!this.__overlayOpened}__onOverlayOpenedChanged(t){this.__overlayOpened=t.detail.value}_onKeyDown(t){if(this.__overlayOpened)if("Tab"!==t.key){if(!this.focused&&("ArrowDown"===t.key||"ArrowUp"===t.key)){const e=this._getItems(),n="ArrowDown"===t.key,i=this._getAvailableIndex(e,n?0:e.length-1,n?1:-1,t=>!yl(t));return void(i>=0&&(t.preventDefault(),this._focus(i)))}super._onKeyDown(t)}else this.__overlayOpened=!1}_getItems(){return[...this.querySelectorAll('vaadin-breadcrumbs-item[slot="overlay"]')]}_isItemFocusable(t){return super._isItemFocusable(t)&&null!=t.path}focus(t){const e=this.querySelector("vaadin-breadcrumbs-item");e&&(e.disabled||"overlay"===e.slot?this.$.overflow.focus(t):e.focus(t))}}oa(Zc);let Qc=0;function Jc(){return Qc++}class td extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${Jc()}`}constructor(t,e,n,i={}){super();const{initializer:r,multiple:o,observe:s,useUniqueId:a,uniqueIdPrefix:l}=i;this.host=t,this.slotName=e,this.tagName=n,this.observe="boolean"!=typeof s||s,this.multiple="boolean"==typeof o&&o,this.slotInitializer=r,o&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(t,l||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(0===t.length){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=t,t.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:t,slotName:e,tagName:n}=this;let i=this.defaultNode;return!i&&n&&(i=document.createElement(n),i instanceof Element&&(""!==e&&i.setAttribute("slot",e),this.defaultNode=i)),i&&(this.node=i,t.appendChild(i)),i}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>(e.nodeType!==Node.ELEMENT_NODE||!e.hasAttribute("data-slot-ignore"))&&(e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,n=this.host.shadowRoot.querySelector(e);new Ac(n,({addedNodes:t,removedNodes:e})=>{const n=this.multiple?this.nodes:[this.node],i=t.filter(t=>!(pc(t)||n.includes(t)||t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")));e.length&&(this.multiple?this.nodes=n.filter(t=>!e.includes(t)):e.includes(this.node)&&(this.node=null),e.forEach(t=>{this.teardownNode(t)})),i?.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...i].filter(t=>t!==this.defaultNode),i.forEach(t=>{this.initAddedNode(t)})):(this.node&&this.node.remove(),this.node=i[0],this.initAddedNode(this.node)))})}}class ed extends td{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.ariaTarget&&(t.ariaTarget=this.ariaTarget),void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.#m(t),t.addEventListener("content-changed",this.#b)}teardownNode(t){this.manual||this.host.removeAttribute("has-tooltip"),t.removeEventListener("content-changed",this.#b),this.#m(null)}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}open(t){const e=this.node;e?.isConnected&&e._stateController.open(t)}close(t){const e=this.node;e&&e._stateController.close(t)}#b=t=>{this.#m(t.target)};#m(t){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:t}}))}}class nd extends(wc(Sa(rl(Na(Ga(na)))))){static get is(){return"vaadin-button"}static get styles(){return Nl}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return Ns`
      <div class="vaadin-button-container" role="presentation">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new ed(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}oa(nd);const id=Yo`
  :host {
    --_content: 0;
    --_footer: 0;
    --_gap: var(--vaadin-card-gap, var(--vaadin-gap-m));
    --_header: max(var(--_header-prefix), var(--_title), var(--_subtitle), var(--_header-suffix));
    --_header-prefix: 0;
    --_header-suffix: 0;
    --_media: 0;
    --_padding: var(--vaadin-card-padding, var(--vaadin-padding-m));
    --_subtitle: 0;
    --_title: 0;
    background: var(--vaadin-card-background, var(--vaadin-background-container));
    --_border-width: var(--vaadin-card-border-width, 0px);
    border: var(--_border-width) solid var(--vaadin-card-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-card-border-radius, var(--vaadin-radius-m));
    box-shadow: var(--vaadin-card-shadow, none);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--_gap);
    padding: var(--_padding);
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([theme~='horizontal'])) {
    justify-content: space-between;
  }

  :host([_m]) {
    --_media: 1;
  }

  :host([_t]) {
    --_title: 1;
  }

  :host([_st]) {
    --_subtitle: 1;
  }

  :host([_h]) {
    --_header: 1;
    --_title: 0;
    --_subtitle: 0;
  }

  :host([_hp]) {
    --_header-prefix: 1;
  }

  :host([_hs]) {
    --_header-suffix: 1;
  }

  :host([_c]) {
    --_content: 1;
  }

  :host([_f]) {
    --_footer: 1;
  }

  [part='media'],
  [part='header'],
  [part='content'],
  [part='footer'] {
    display: none;
  }

  :host([_m]) [part='media'] {
    display: block;
  }

  :host(:is([_h], [_t], [_st], [_hp], [_hs])) [part='header'] {
    align-items: center;
    display: grid;
    gap: var(--_gap);
    row-gap: 0;
  }

  :host([_hs]) [part='header'] {
    grid-template-columns: 1fr auto;
  }

  :host([_hp]) [part='header'] {
    grid-template-columns: repeat(var(--_header-prefix), auto) 1fr;
  }

  :host([_c]) [part='content'] {
    display: block;
  }

  :host([_f]) [part='footer'] {
    display: flex;
    flex-wrap: wrap;
    gap: var(--_gap);
  }

  slot {
    border-radius: inherit;
  }

  ::slotted([slot='header-prefix']) {
    grid-column: 1;
    grid-row: 1 / span calc(var(--_title) + var(--_subtitle));
  }

  ::slotted([slot='header']),
  ::slotted([slot='title']) {
    grid-column: calc(1 + var(--_header-prefix));
    grid-row: 1;
  }

  ::slotted([slot='title']) {
    color: var(--vaadin-card-title-color, var(--vaadin-text-color)) !important;
    font-size: var(--vaadin-card-title-font-size, inherit) !important;
    font-weight: var(--vaadin-card-title-font-weight, 500) !important;
    line-height: var(--vaadin-card-title-line-height, inherit) !important;
    margin: 0 !important;
  }

  ::slotted([slot='subtitle']) {
    color: var(--vaadin-card-subtitle-color, var(--vaadin-text-color-secondary)) !important;
    font-size: var(--vaadin-card-subtitle-font-size, inherit) !important;
    font-weight: var(--vaadin-card-subtitle-font-weight, 400) !important;
    line-height: var(--vaadin-card-subtitle-line-height, inherit) !important;
    margin: 0 !important;
    grid-column: calc(1 + var(--_header-prefix));
    grid-row: calc(1 + var(--_title));
  }

  ::slotted([slot='header-suffix']) {
    grid-column: calc(2 + var(--_header-prefix));
    grid-row: 1 / span calc(var(--_title) + var(--_subtitle));
  }

  /* Horizontal */
  :host([theme~='horizontal']) {
    align-items: start;
    display: grid;
    grid-template-columns: repeat(var(--_media), minmax(auto, max-content)) 1fr;
  }

  :host([theme~='horizontal'][_f]) {
    grid-template-rows: 1fr auto;
  }

  :host([theme~='horizontal'][_c]) {
    grid-template-rows: repeat(var(--_header), auto) 1fr;
  }

  [part='media'] {
    align-self: stretch;
    grid-column: 1;
    grid-row: 1 / span calc(var(--_header) + var(--_content) + var(--_footer));
    overflow: hidden;
  }

  [part='header'] {
    margin-bottom: auto;
    grid-column: calc(1 + var(--_media));
    grid-row: 1;
  }

  [part='content'] {
    grid-column: calc(1 + var(--_media));
    grid-row: calc(1 + var(--_header));
    flex: auto;
    min-height: 0;
  }

  [part='footer'] {
    border-radius: inherit;
    grid-column: calc(1 + var(--_media));
    grid-row: calc(1 + var(--_header) + var(--_content));
  }

  :host([theme~='horizontal']) [part='footer'] {
    align-self: end;
  }

  :host(:not([theme~='horizontal'])) ::slotted([slot='media']:is(img, video, svg)) {
    max-width: 100%;
  }

  ::slotted([slot='media']) {
    vertical-align: middle;
  }

  :host(:is([theme~='cover-media'], [theme~='stretch-media'])) [part='media'] {
    aspect-ratio: var(--vaadin-card-media-aspect-ratio, 16/9);
    width: 100%;

    ::slotted(:is(img, video, svg, vaadin-icon)) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  :host([theme~='horizontal']:is([theme~='cover-media'], [theme~='stretch-media'])) {
    grid-template-columns: repeat(var(--_media), minmax(auto, 0.5fr)) 1fr;
  }

  :host([theme~='horizontal']:is([theme~='cover-media'], [theme~='stretch-media'])) [part='media'] {
    aspect-ratio: auto;
    height: 100%;
  }

  :host([theme~='cover-media']) {
    --_media-width: calc(100% + (var(--_padding) + var(--_border-width)) * 2);
  }

  :host([theme~='horizontal'][theme~='cover-media']) {
    --_media-width: calc(100% + (var(--_padding) + var(--_border-width)));
  }

  :host([theme~='cover-media']) [part='media'] {
    border-radius: inherit;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    margin-inline: calc((var(--_padding) + var(--_border-width)) * -1);
    margin-top: calc((var(--_padding) + var(--_border-width)) * -1);
    max-width: none;
    width: var(--_media-width);

    ::slotted(:is(img, video, svg, vaadin-icon)) {
      outline: var(--_border-width) solid var(--vaadin-card-border-color, var(--vaadin-border-color-secondary));
      outline-offset: calc(var(--_border-width) * -1);
      border-radius: inherit;
    }
  }

  :host([theme~='horizontal'][theme~='cover-media']) [part='media'] {
    border-radius: inherit;
    border-end-end-radius: 0;
    border-start-end-radius: 0;
    height: calc(100% + (var(--_padding) + var(--_border-width)) * 2);
    margin-inline-end: 0;
  }

  /* Scroller in content */
  [part='content'] ::slotted(vaadin-scroller) {
    margin-inline: calc(var(--_padding) * -1);
    padding-inline: var(--_padding);
  }

  [part='content'] ::slotted(vaadin-scroller)::before,
  [part='content'] ::slotted(vaadin-scroller)::after {
    margin-inline: calc(var(--_padding) * -1);
  }

  /* Outlined */
  :host([theme~='outlined']) {
    --vaadin-card-border-width: 1px;
  }

  /* Elevated */
  :host([theme~='elevated']) {
    --vaadin-card-background: var(--vaadin-background-color);
    box-shadow: var(--vaadin-card-shadow, 0 1px 4px -1px rgba(0, 0, 0, 0.3));
  }
`;class rd extends td{#y;constructor(t,e,n,i={}){super(t,e,n,{...i,useUniqueId:!0})}initCustomNode(t){this.#w(t),this._notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this._notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.#w(t),t}restoreDefaultNode(){}updateDefaultNode(t){this._notifyChange(t)}observeNode(t){this.#y&&this.#y.disconnect(),this.#y=new MutationObserver(t=>{t.forEach(t=>{const e=t.target,n=e===this.node;"attributes"===t.type?n&&this.#w(e):(n||e.parentElement===this.node)&&this._notifyChange(this.node)})}),this.#y.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}_notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:vc(t),node:t}}))}#w(t){const e=!this.nodes||t===this.nodes[0];t.nodeType!==Node.ELEMENT_NODE||this.multiple&&!e||t.id||(t.id=this.defaultId)}}class od extends rd{constructor(t){super(t,"title",null,{uniqueIdPrefix:"card-title"})}setTitle(t){if(this.title=t,t&&""!==t.trim()){const t=this.getSlotChild();t&&t!==this.defaultNode&&t.remove(),this.restoreDefaultNode(),this.updateDefaultNode(this.node)}else this.node&&this.node===this.defaultNode&&this.node.remove()}setLevel(t){this.level=t,this.node&&this.node===this.defaultNode&&this.updateDefaultNode(this.node)}initNode(t){t&&t===this.defaultNode&&(t.setAttribute("role","heading"),this.host.setAttribute("aria-labelledby",t.id))}initCustomNode(t){this.host.cardTitle=""}teardownNode(t){this.getSlotChild()!==this.defaultNode&&this.host.removeAttribute("aria-labelledby"),super.teardownNode(t)}restoreDefaultNode(){const{title:t}=this;if(t&&""!==t.trim()){this.tagName="div";const t=this.attachDefaultNode();this.initNode(t)}}updateDefaultNode(t){t&&(t.textContent=this.title,t.setAttribute("aria-level",this.level||2)),super.updateDefaultNode(t)}}class sd extends(Sa(rl(Na(Ga(na))))){static get is(){return"vaadin-card"}static get styles(){return id}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}static get properties(){return{cardTitle:{type:String},titleHeadingLevel:{type:Number,reflectToAttribute:!0}}}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","region")}render(){return Ns`
      <div part="media">
        <slot name="media"></slot>
      </div>
      <div part="header">
        <slot name="header-prefix"></slot>
        <slot name="header">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </slot>
        <slot name="header-suffix"></slot>
      </div>
      <div part="content">
        <slot></slot>
      </div>
      <div part="footer">
        <slot name="footer"></slot>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.__titleController=new od(this),this.addController(this.__titleController),this._onSlotChange()}updated(t){super.updated(t),t.has("cardTitle")&&this.__titleController.setTitle(this.cardTitle),t.has("titleHeadingLevel")&&this.__titleController.setLevel(this.titleHeadingLevel)}_onSlotChange(){this.toggleAttribute("_m",this.querySelector(':scope > [slot="media"]')),this.toggleAttribute("_h",this.querySelector(':scope > [slot="header"]')),this.toggleAttribute("_t",this.querySelector(':scope > [slot="title"]')&&!this.querySelector(':scope > [slot="header"]')),this.toggleAttribute("_st",this.querySelector(':scope > [slot="subtitle"]')&&!this.querySelector(':scope > [slot="header"]')),this.toggleAttribute("_hp",this.querySelector(':scope > [slot="header-prefix"]')),this.toggleAttribute("_hs",this.querySelector(':scope > [slot="header-suffix"]')),this.toggleAttribute("_c",this.__hasContent()),this.toggleAttribute("_f",this.querySelector(':scope > [slot="footer"]'))}__hasContent(){return this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).filter(t=>!pc(t)).length>0}createRenderRoot(){const t=super.createRenderRoot();return t.addEventListener("slotchange",()=>this._onSlotChange()),t}}oa(sd);const ad=Yo`
  :host {
    display: flex;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Theme variations */
  :host([theme~='margin']) {
    margin: var(--vaadin-horizontal-layout-margin, var(--vaadin-padding-m));
  }

  :host([theme~='padding']) {
    padding: var(--vaadin-horizontal-layout-padding, var(--vaadin-padding-m));
  }

  :host([theme~='spacing']) {
    gap: var(--vaadin-horizontal-layout-gap, var(--vaadin-gap-s));
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }

  :host([has-end]:not([has-middle])) ::slotted([last-start-child]) {
    margin-inline-end: auto;
  }

  ::slotted([first-middle-child]) {
    margin-inline-start: auto;
  }

  ::slotted([last-middle-child]) {
    margin-inline-end: auto;
  }

  :host(:not([has-middle])) ::slotted([first-end-child]) {
    margin-inline-start: auto;
  }
`,ld=window.Vaadin.featureFlags.layoutComponentImprovements,cd=Yo`
  ::slotted([data-width-full]) {
    flex: 1;
  }

  ::slotted(vaadin-horizontal-layout[data-width-full]),
  ::slotted(vaadin-vertical-layout[data-width-full]) {
    min-width: 0;
  }
`,dd=ld?[ad,cd]:[ad],ud=t=>class extends t{ready(){super.ready();const t=this.shadowRoot.querySelector("slot:not([name])");this.__startSlotObserver=new Ac(t,({currentNodes:t,removedNodes:e})=>{e.length&&this.__clearAttribute(e,"last-start-child");const n=t.filter(t=>t.nodeType===Node.ELEMENT_NODE);this.__updateAttributes(n,"start",!1,!0);const i=t.filter(t=>!pc(t));this.toggleAttribute("has-start",i.length>0)});const e=this.shadowRoot.querySelector('[name="end"]');this.__endSlotObserver=new Ac(e,({currentNodes:t,removedNodes:e})=>{e.length&&this.__clearAttribute(e,"first-end-child"),this.__updateAttributes(t,"end",!0,!1),this.toggleAttribute("has-end",t.length>0)});const n=this.shadowRoot.querySelector('[name="middle"]');this.__middleSlotObserver=new Ac(n,({currentNodes:t,removedNodes:e})=>{e.length&&(this.__clearAttribute(e,"first-middle-child"),this.__clearAttribute(e,"last-middle-child")),this.__updateAttributes(t,"middle",!0,!0),this.toggleAttribute("has-middle",t.length>0)})}__clearAttribute(t,e){const n=t.find(t=>t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute(e));n&&n.removeAttribute(e)}__updateAttributes(t,e,n,i){t.forEach((r,o)=>{n&&r.toggleAttribute(`first-${e}-child`,0===o),i&&r.toggleAttribute(`last-${e}-child`,o===t.length-1)})}};class hd extends(ud(rl(Sa(Na(Ga(na)))))){static get is(){return"vaadin-horizontal-layout"}static get styles(){return dd}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return Ns`
      <slot></slot>
      <slot name="middle"></slot>
      <slot name="end"></slot>
    `}}oa(hd);const{I:pd}=Qs,vd=t=>(...e)=>({_$litDirective$:t,values:e});class fd{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class _d extends fd{constructor(t){if(super(t),this.it=js,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===js||null==t)return this._t=void 0,this.it=t;if(t===Ds)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}_d.directiveName="unsafeHTML",_d.resultType=1,vd(_d);class gd extends _d{}gd.directiveName="unsafeSVG",gd.resultType=2;const md=vd(gd);function bd(t){let e=js;if(t){const n=t.cloneNode(!0);n.removeAttribute("id"),e=Ps`${md(n.outerHTML)}`}return e}const yd={},wd=new Set;function xd(t,e){return(t||"").replace(`${e}:`,"")}function Cd(t){if(t)return t.split(":")[0]||"vaadin"}function kd(t,e){const n=[...t.querySelectorAll("[id]")],i=n.reduce((t,n)=>(t[xd(n.id,e)]=n,t),{}),r={...i};n.forEach(t=>{const n=function(t,e,n){const i=1===t.children.length&&"use"===t.firstElementChild.localName?t.firstElementChild:null,r=i?.getAttribute("href");return r?.startsWith("#")?e[xd(r.slice(1),n)]:null}(t,r,e);n&&(i[xd(t.id,e)]=n)}),t._icons=i}const Ad=t=>class extends t{static get observedAttributes(){return["name","size"]}static get attachedIcons(){return wd}static getIconset(t){return yd[t]}static getIconSvg(t,e){const n=e||Cd(t),i=this.getIconset(n);if(!t||!i)return{svg:bd(null)};const r=xd(t,n),o=i._icons[r];return{preserveAspectRatio:o?o.getAttribute("preserveAspectRatio"):null,svg:bd(o),size:i.size,viewBox:o?o.getAttribute("viewBox"):null}}static register(t,e,n){if(!yd[t]){const i=document.createElement("vaadin-iconset");i.appendChild(n.content.cloneNode(!0)),yd[t]=i,kd(i,t),i.size=e,i.name=t}}get name(){return this.__name}set name(t){const e=this.__name;this.__name=t,this.__nameChanged(t,e)}get size(){return this.__size??24}set size(t){this.__size=t}connectedCallback(){["name","size"].forEach(t=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this[t]=e}}),this.style.display="none"}attributeChangedCallback(t,e,n){"name"===t?this.name=n:"size"===t&&(this.size=null==n?null:Number(n))}__updateIcons(t){wd.forEach(e=>{t===Cd(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&delete yd[e],t&&(yd[t]=this,kd(this,t),this.__updateIcons(t))}};class Sd extends(Ad(HTMLElement)){static get is(){return"vaadin-iconset"}}oa(Sd);const Ed=Yo`
  :host {
    display: inline-flex;
    justify-content: center !important;
    align-items: center !important;
    font-size: inherit !important;
    box-sizing: border-box;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    flex: none;
    color: var(--vaadin-icon-color, currentColor);
    fill: currentColor;
    container-type: size;
  }

  :host::after,
  :host::before {
    line-height: 1;
    font-size: var(--vaadin-icon-visual-size, 100cqh);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([hidden]) {
    display: none !important;
  }

  svg {
    display: block;
    width: var(--vaadin-icon-visual-size, 100%);
    height: var(--vaadin-icon-visual-size, 100%);
    /* prevent overflowing icon from clipping, see https://github.com/vaadin/flow-components/issues/5872 */
    overflow: visible;

    @container style(--vaadin-icon-stroke-width) {
      stroke-width: var(--vaadin-icon-stroke-width);
    }
  }

  :host(:is([icon-class], [font-icon-content])) svg {
    display: none;
  }

  :host([font-icon-content])::before {
    content: attr(font-icon-content);
  }

  .baseline {
    order: -1;
  }

  .baseline::before {
    content: '\\2003' / '';
    display: inline-block;
    width: 0;
  }

  :host(:is([icon-class], [font-family])) .baseline {
    font-family: var(--vaadin-icon-baseline-font-family, inherit);
  }
`,Od=!CSS.supports("container-type: inline-size")||!!Bo&&!function(){const t=document.createElement("style");t.textContent="\n    .vaadin-icon-test-element {\n      container-type: size;\n      height: 2px;\n      visibility: hidden;\n      position: fixed;\n    }\n\n    .vaadin-icon-test-element::before {\n      content: '';\n      display: block;\n      height: 100cqh;\n    ";const e=document.createElement("div");e.classList.add("vaadin-icon-test-element");const n=document.createElement("div");n.attachShadow({mode:"open"}),n.shadowRoot.innerHTML="<slot></slot>",n.append(e.cloneNode()),document.body.append(t,e,n);const i=[...document.querySelectorAll(".vaadin-icon-test-element")].find(t=>"2px"!==getComputedStyle(t,"::before").height);return t.remove(),e.remove(),n.remove(),!i}(),zd=t=>Od?class extends(Xc(t)){static get styles(){return Yo`
            :host::after,
            :host::before {
              font-size: var(--vaadin-icon-visual-size, var(--_vaadin-font-icon-size));
            }
          `}updated(t){super.updated(t),(t.has("char")||t.has("iconClass")||t.has("ligature"))&&this.__updateFontIconSize()}_onResize(){this.__updateFontIconSize()}__updateFontIconSize(){if(this.char||this.iconClass||this.ligature){const{paddingTop:t,paddingBottom:e,height:n}=getComputedStyle(this),i=parseFloat(n)-parseFloat(t)-parseFloat(e);this.style.setProperty("--_vaadin-font-icon-size",`${i}px`)}}}:t,Md=new Map,Td=customElements.get("vaadin-iconset"),Id=t=>class extends(zd(t)){static get properties(){return{icon:{type:String,reflectToAttribute:!0,observer:"__iconChanged",sync:!0},svg:{type:Object,sync:!0},src:{type:String,sync:!0},symbol:{type:String,sync:!0},iconClass:{type:String,reflectToAttribute:!0,sync:!0},char:{type:String,sync:!0},ligature:{type:String,sync:!0},fontFamily:{type:String,observer:"__fontFamilyChanged",sync:!0},size:{type:Number,value:24,sync:!0},__preserveAspectRatio:String,__useRef:String,__viewBox:String,__fill:String,__stroke:String,__strokeWidth:String,__strokeLinecap:String,__strokeLinejoin:String}}static get observers(){return["__fontChanged(iconClass, char, ligature)","__srcChanged(src, symbol)"]}static get observedAttributes(){return[...super.observedAttributes,"class"]}constructor(){super(),this.__fetch=fetch.bind(window)}get __iconClasses(){return this.iconClass?this.iconClass.split(" "):[]}ready(){super.ready(),this._tooltipController=new ed(this),this.addController(this._tooltipController)}connectedCallback(){super.connectedCallback(),Td.attachedIcons.add(this)}disconnectedCallback(){super.disconnectedCallback(),Td.attachedIcons.delete(this)}_applyIcon(){const{preserveAspectRatio:t,svg:e,size:n,viewBox:i}=Td.getIconSvg(this.icon);i&&(this.__viewBox=i),t&&(this.__preserveAspectRatio=t),n&&n!==this.size&&(this.size=n),this.svg=e}__iconChanged(t){t?this._applyIcon():this.svg=null}async __srcChanged(e,n){var i;if(e)if(this.icon="",e.startsWith("data:")||!n&&!e.includes("#"))try{Md.has(e)||Md.set(e,this.__fetch(e,{mode:"cors"}).then(t=>{if(!t.ok)throw new Error("Error loading icon");return t.text()}));const r=await Md.get(e);t.__domParser||(t.__domParser=new DOMParser);const o=t.__domParser.parseFromString(r,"text/html").querySelector("svg");if(!o)throw new Error(`SVG element not found on path: ${e}`);this.svg=(i=o.innerHTML,Ps`${md(i)}`),n&&(this.__useRef=`#${n}`),this.__viewBox=o.getAttribute("viewBox"),this.__fill=o.getAttribute("fill"),this.__stroke=o.getAttribute("stroke"),this.__strokeWidth=o.getAttribute("stroke-width"),this.__strokeLinecap=o.getAttribute("stroke-linecap"),this.__strokeLinejoin=o.getAttribute("stroke-linejoin")}catch(t){console.error(t),this.svg=null}else{const[t,i]=e.split("#");this.__useRef=`${t}#${n||i}`}else this.svg=null}__fontChanged(t,e,n){this.classList.remove(...this.__addedIconClasses||[]),t&&(this.__addedIconClasses=[...this.__iconClasses],this.classList.add(...this.__addedIconClasses));let i=n;e&&(i=e.length>1?String.fromCodePoint(parseInt(e,16)):e),hc(this,"font-icon-content",i),(t||e||n)&&!this.icon&&(this.icon="")}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),"class"===t&&this.__iconClasses.some(t=>!this.classList.contains(t))&&this.classList.add(...this.__iconClasses)}__fontFamilyChanged(t){this.style.fontFamily=`'${t}'`}};class Ld extends(Id(Sa(rl(Na(Ga(na)))))){static get is(){return"vaadin-icon"}static get styles(){return[Ed,super.styles].filter(Boolean)}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return Ns`
      <span class="baseline"></span>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="${this.__viewBox||`0 0 ${this.size} ${this.size}`}"
        preserveAspectRatio="${this.__preserveAspectRatio||"xMidYMid meet"}"
        fill="${kc(this.__fill)}"
        stroke="${kc(this.__stroke)}"
        stroke-width="${kc(this.__strokeWidth)}"
        stroke-linecap="${kc(this.__strokeLinecap)}"
        stroke-linejoin="${kc(this.__strokeLinejoin)}"
        aria-hidden="true"
      >
        <g id="svg-group">${function(t){let e=null==t||""===t?js:t;return function(t){return(t=>2===t?._$litType$)(t)||t===js}(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=js),e}(this.svg)}</g>
        <g id="use-group" visibility="${this.__useRef?"visible":"hidden"}">
          <use href="${kc(this.__useRef)}" />
        </g>
      </svg>

      <slot name="tooltip"></slot>
    `}}oa(Ld);class $d extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}oa($d);const Nd=document.createElement("template");Nd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg"><defs>\n<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="lumo:clean"><path d="M250 208v8L368 333h99l-30 70 88 88L592 333H833V208H250M136 208L83 261l291 291L271 792h125l65-153L697 875 750 822 148 220 136 208Z"></path></g>\n<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="lumo:drag-handle"><path d="M458 292c0 35-28 63-62 62C361 354 333 326 333 292s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 62-35 0-63-28-63-62s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 63-35 0-63-28-63-63s28-63 63-62c35 0 63 28 62 62Zm209-416c0 35-28 63-63 62S542 326 542 292s28-63 62-63S667 257 667 292Zm0 208c0 35-28 63-63 62S542 535 542 500s28-63 62-63 63 28 63 63Zm0 208c0 35-28 63-63 63S542 743 542 708s28-63 62-62 63 28 63 62Z"></path></g>\n<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="lumo:indent"><path d="M125 219a31 31 0 0 1 31-32h688a31 31 0 0 1 0 63H156A31 31 0 0 1 125 219z m40 134a31 31 0 0 1 45 0l125 125a31 31 0 0 1 0 44l-125 125A31 31 0 0 1 165 603L268 500 165 397a31 31 0 0 1 0-44zM438 406a31 31 0 0 1 31-31h375a31 31 0 0 1 0 63h-375a31 31 0 0 1-32-32z m-1 188a31 31 0 0 1 32-32h375a31 31 0 0 1 0 63h-375a31 31 0 0 1-32-31zM125 781a31 31 0 0 1 31-31h688a31 31 0 0 1 0 63H156a31 31 0 0 1-31-32z m0 0"></path></g>\n<g id="lumo:link"><path d="M667 250h-125v79h125c94 0 171 76 170 171a171 171 0 0 1-170 171h-125V750h125a250 250 0 0 0 250-250c0-138-112-250-250-250M163 500c0-95 77-171 170-171h125V250H333a250 250 0 0 0-250 250 250 250 0 0 0 250 250h125v-79H333c-94 0-171-77-171-171M333 542h334v-84H333v84Z"></path></g>\n<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:outdent"><path d="M125 219a31 31 0 0 1 31-32h688a31 31 0 0 1 0 63H156A31 31 0 0 1 125 219z m665 134A31 31 0 0 1 835 397L732 500l103 103a31 31 0 0 1-45 44l-125-125a31 31 0 0 1 0-44l125-125zM125 406A31 31 0 0 1 156 375h375a31 31 0 0 1 0 63h-375A31 31 0 0 1 125 406z m0 188a31 31 0 0 1 31-32h375a31 31 0 0 1 0 63h-375a31 31 0 0 1-31-31z m0 187a31 31 0 0 1 31-31h688a31 31 0 0 1 0 63H156a31 31 0 0 1-31-32z m0 0"></path></g>\n<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="lumo:resize-handle"><path d="M772 311c12 12 12 32 0 44L355 772c-12 12-32 12-44 0s-12-32 0-44L728 311c12-12 32-12 44 0Zm0 188c12 12 12 32 0 44l-229 229c-12 12-32 12-44 0-12-12-12-32 0-44l229-229c12-12 32-12 44 0Zm0 187c12 12 12 32 0 44l-42 42c-12 12-32 12-44 0-12-12-12-32 0-44l42-42c12-12 32-12 44 0Z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:upload"><path d="M538 279V612a38 38 0 0 1-76 0V279L337 391a38 38 0 1 1-49-57l187-166a38 38 0 0 1 50 0l187 166a38 38 0 1 1-49 57L538 279zM758 713a38 38 0 1 1 75-1v92a38 38 0 0 1-37 38H204a38 38 0 0 1-37-38v-92a38 38 0 1 1 75 1v54h516v-55z"></path></g>\n<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs></svg>',Sd.register("lumo",1e3,Nd);const Pd=t=>class extends(gc(mc(t))){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value??this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");null!==t&&(this.value=t),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-item-disabled-pointer-events","auto")}focus(t){this.disabled&&!this.__shouldAllowFocusWhenDisabled()||super.focus(t)}_shouldSetActive(t){return!(this.disabled||"keydown"===t.type&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.__shouldAllowFocusWhenDisabled()||this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}__shouldAllowFocusWhenDisabled(){return!1}},Dd=[Yo`
  :host {
    align-items: center;
    border-radius: var(--vaadin-item-border-radius, var(--vaadin-radius-m));
    box-sizing: border-box;
    cursor: var(--vaadin-clickable-cursor);
    display: flex;
    column-gap: var(--vaadin-item-gap, var(--vaadin-gap-s));
    height: var(--vaadin-item-height, auto);
    padding: var(--vaadin-item-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    -webkit-tap-highlight-color: transparent;
  }

  :host([focus-ring]) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) / -1);
  }

  :host([disabled]) {
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
    pointer-events: var(--_vaadin-item-disabled-pointer-events, none);
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='checkmark'] {
    color: var(--vaadin-item-checkmark-color, inherit);
    display: var(--vaadin-item-checkmark-display, none);
    visibility: hidden;
  }

  [part='checkmark']::before {
    content: '';
    display: block;
    background: currentColor;
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-checkmark) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    width: var(--vaadin-icon-size, 1lh);
  }

  :host([selected]) [part='checkmark'] {
    visibility: visible;
  }

  [part='content'] {
    flex: 1;
    display: flex;
    align-items: center;
    column-gap: inherit;
    justify-content: var(--vaadin-item-text-align, start);
  }

  @media (forced-colors: active) {
    [part='checkmark']::before {
      background: CanvasText;
    }
  }
`,Yo`
  :host([aria-haspopup='true'])::after {
    background: var(--vaadin-text-color-secondary);
    content: '';
    display: block;
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    rotate: -90deg;
    width: var(--vaadin-icon-size, 1lh);
  }

  :host([dir='rtl'])::after {
    rotate: 90deg;
  }

  /* TODO would be nice to only reserve the space if
    one or mote items in the list is checkable  */
  :host([menu-item-checked]) [part='checkmark'] {
    visibility: visible;
  }
`];class jd extends(Pd(rl(Ca(Na(Ga(na)))))){static get is(){return"vaadin-menu-bar-item"}static get styles(){return Dd}render(){return Ns`
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledMenuItems}}oa(jd);const Rd=t=>class extends(Wc(t)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}constructor(){super(),this._hasVaadinListMixin=!0}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return"horizontal"!==this.orientation}focus(t){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],n=this._getAvailableIndex(e,0,null,t=>0===t.tabIndex&&!yl(t));n>=0?this._focus(n,t):super.focus(t)}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Ac(t,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(t,e,n,i){if(!i&&t){this.setAttribute("aria-orientation",e||"vertical"),t.forEach(t=>hc(t,"orientation",e)),this._setFocusable(n<0||!n?0:n);const i=t[n];t.forEach(t=>{t.selected=t===i}),i&&!i.disabled&&this._scrollToItem(n)}}_filterItems(t){return t.filter(t=>t._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const e=this._filterItems(t.composedPath())[0];let n;e&&!e.disabled&&(n=this.items.indexOf(e))>=0&&(this.selected=n)}_searchKey(t,e){this._searchReset=ba.debounce(this._searchReset,va.after(500),()=>{this._searchBuf=""}),this._searchBuf+=e.toLowerCase(),this.items.some(t=>this.__isMatchingKey(t))||(this._searchBuf=e.toLowerCase());const n=1===this._searchBuf.length?t+1:t;return this._getAvailableIndex(this.items,n,1,t=>this.__isMatchingKey(t)&&"none"!==getComputedStyle(t).display)}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key,n=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(e)&&1===e.length){const t=this._searchKey(n,e);return void(t>=0&&this._focus(t))}super._onKeyDown(t)}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const e=this.items[t];this.items.forEach(t=>{t.tabIndex=t===e?0:-1})}_focus(t,e){this.items.forEach((e,n)=>{e.focused=n===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t,e??{preventScroll:!0})}_scrollToItem(t){const e=this._getItems()[t];e&&e.scrollIntoView({block:"nearest",inline:"nearest"})}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const e=this.getAttribute("dir")||"ltr",n=function(t,e){const{scrollLeft:n}=t;return"rtl"!==e?n:t.scrollWidth-t.clientWidth+n}(this._scrollerElement,e)+t;!function(t,e,n){t.scrollLeft="rtl"!==e?n:t.clientWidth-t.scrollWidth+n}(this._scrollerElement,e,n)}}_isItemFocusable(t){return t.disabled&&t.__shouldAllowFocusWhenDisabled?t.__shouldAllowFocusWhenDisabled():super._isItemFocusable(t)}},Bd=Yo`
  :host {
    --vaadin-item-checkmark-display: block;
    display: flex;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='items'] {
    height: 100%;
    overflow-y: auto;
    width: 100%;
  }

  [part='items'] ::slotted(hr) {
    border-color: var(--vaadin-divider-color, var(--vaadin-border-color-secondary));
    border-width: 0 0 1px;
    margin: 4px 8px;
    margin-inline-start: calc(var(--vaadin-icon-size, 1lh) + var(--vaadin-item-gap, var(--vaadin-gap-s)) + 8px);
  }
`;class Fd extends(Rd(rl(Ca(Na(Ga(na)))))){static get is(){return"vaadin-menu-bar-list-box"}static get styles(){return Bd}static get properties(){return{orientation:{type:String,readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}render(){return Ns`
      <div part="items">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menu")}}oa(Fd);const Hd=t=>class extends($c(Uc(t))){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}get _contentRoot(){return this._rendererRoot}get _rendererRoot(){if(!this.__savedRoot){const t=document.createElement("div");t.setAttribute("slot","overlay"),t.style.display="contents",this.owner.appendChild(t),this.__savedRoot=t}return this.__savedRoot}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&t.composedPath()[0]===this.$.overlay&&[38,40].indexOf(t.keyCode)>-1){const e=this.owner._menuListBox??this._contentRoot.firstElementChild;e&&Array.isArray(e.items)&&e.items.length&&(t.preventDefault(),38===t.keyCode?e.items[e.items.length-1].focus():e.focus())}})}_themeChanged(){this.close()}_shouldCloseOnOutsideClick(t){return!this.parentOverlay&&!t.composedPath().includes(this)&&(!!this.owner.items||super._shouldCloseOnOutsideClick(t))}getBoundaries(){const t=this.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect();let n=t.bottom-e.height;const i=this.parentOverlay;if(i?.hasAttribute("bottom-aligned")){const t=getComputedStyle(i);n=n-parseFloat(t.bottom)-parseFloat(t.height)}return{xMax:t.right-e.width,xMin:t.left+e.width,yMax:n}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay&&this.opened){const t=this.$.content,e=getComputedStyle(t);this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(e.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(e.paddingRight)}px`,this.style.bottom?this.style.bottom=parseFloat(this.style.bottom)-parseFloat(e.paddingBottom)+"px":this.style.top=parseFloat(this.style.top)-parseFloat(e.paddingTop)+"px"}}_shouldRestoreFocus(){return!this.parentOverlay&&super._shouldRestoreFocus()}_deepContains(t){return this.owner.contains(t)}},qd=Yo`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='backdrop'] {
    background: transparent;
  }

  [part='content'] {
    padding: var(--vaadin-item-overlay-padding, 4px);
  }

  /* TODO keyboard focus becomes visible even when navigating the menu with the mouse */
  [part='overlay']:focus-visible {
    outline: none;
  }
`,Ud=[Tc,qd];class Vd extends(Hd(Bc(Ca(rl(Na(Ga(na))))))){static get is(){return"vaadin-menu-bar-overlay"}static get styles(){return Ud}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}_shouldCloseOnOutsideClick(t){return!t.composedPath().includes(this.owner.listenOn)&&super._shouldCloseOnOutsideClick(t)}render(){return Ns`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
          <slot name="submenu"></slot>
        </div>
      </div>
    `}}oa(Vd);class Wd{#x=null;constructor(t,e){this.query=t,this.callback=e}hostConnected(){this.#C(),this.#x=window.matchMedia(this.query),this.#k(),this.#A(this.#x)}hostDisconnected(){this.#C()}#k(){this.#x&&this.#x.addListener(this.#A)}#C(){this.#x&&this.#x.removeListener(this.#A),this.#x=null}#A=t=>{"function"==typeof this.callback&&this.callback(t.matches)}}class Kd extends td{constructor(t){super(t,"tooltip")}initCustomNode(t){t.manual=!0,t.generator||=({item:t})=>t?.tooltip}_getItem(t){return t._item}_getDefaultPosition(t){const e=this._getItem(t);return e.children?.length>0&&!e.disabled?"start":"end"}setTarget(t){const e=this.node;if(!e)return;const n=t?this._getItem(t):null;n?.tooltip?(e.target=t,e.context={item:n},e._position=n.tooltipPosition||this._getDefaultPosition(t)):(e.target=null,e.context={item:null},this.close(!0))}open({trigger:t}){const e=this.node;e?.isConnected&&e.target&&e._stateController.open({hover:"hover"===t,focus:"focus"===t})}bringToFront(){const t=this.node;t?._overlayElement?.bringToFront()}close(t){const e=this.node;e?._stateController.close(t)}}const Xd=t=>class extends t{static get properties(){return{items:{type:Array,sync:!0},_positionTarget:{type:Object,sync:!0}}}get _tagNamePrefix(){return"vaadin-context-menu"}disconnectedCallback(){super.disconnectedCallback(),this._tooltipController.setTarget(null)}__forwardFocus(){const t=this._overlayElement,e=this._menuListBox??t._contentRoot.firstElementChild;if(t.parentOverlay){const n=t.parentOverlay._contentRoot.querySelector("[expanded]");n?.hasAttribute("focused")&&e?e.focus():t.$.overlay.focus()}else e&&e.focus()}__openSubMenu(t,e){this.__updateSubMenuForItem(t,e);const n=this._overlayElement,i=t._overlayElement;i._setParentOverlay(n),hc(t,"theme",n.getAttribute("theme")),hc(t,"dir",this.dir),i.$.content.style.minWidth="",e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:e._item.children}}))}__updateSubMenuForItem(t,e){t.items=e._item.children,t.listenOn=e,t._positionTarget=e,t._overlayElement.requestContentUpdate()}__createComponent(t){let e;return e=t.component instanceof HTMLElement?t.component:document.createElement(t.component||`${this._tagNamePrefix}-item`),e._hasVaadinItemMixin&&(e.setAttribute("role","menuitem"),e.tabIndex=-1),"hr"===e.localName?e.setAttribute("role","separator"):e.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(e,t,this._theme),e._item=t,t.text&&(e.textContent=t.text),t.className&&e.setAttribute("class",t.className),this.__toggleMenuComponentAttribute(e,"menu-item-checked",t.checked),this.__toggleMenuComponentAttribute(e,"disabled",t.disabled),t.children&&t.children.length&&(this.__updateExpanded(e,!1),e.setAttribute("aria-haspopup","true")),e}__initListBox(){const t=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&t.setAttribute("theme",this._theme),t.addEventListener("mouseover",t=>{const e=t.target.closest(`${this._tagNamePrefix}-item`);this._tooltipController.setTarget(e),this._tooltipController.open({trigger:"hover"})}),t.addEventListener("mouseleave",()=>{this._tooltipController.close(!0)}),t.addEventListener("focusin",t=>{if(!_l())return;const e=t.target.closest(`${this._tagNamePrefix}-item`);this._tooltipController.setTarget(e),this._tooltipController.open({trigger:"focus"})}),t.addEventListener("selected-changed",e=>{const{value:n}=e.detail;if("number"==typeof n){const e=t.items[n]._item;t.selected=null,e.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}}),t}__initOverlay(){const t=this._overlayElement;t.$.backdrop.addEventListener("click",()=>{this.close()}),t.addEventListener("vaadin-overlay-outside-click",()=>{this.dispatchEvent(new CustomEvent("items-outside-click"))}),t.addEventListener(Fo?"click":"mouseover",t=>{t.composedPath().includes(this._subMenu)||this.__showSubMenu(t)}),t.addEventListener("keydown",t=>{if(t.composedPath().includes(this._subMenu))return;const{key:e}=t,n=this.__isRTL,i="ArrowRight"===e,r="ArrowLeft"===e;!n&&i||n&&r||"Enter"===e||" "===e?this.__showSubMenu(t):!n&&r||n&&i||"Escape"===e?("Escape"===e&&t.stopPropagation(),this.close(),this.listenOn.focus()):"Tab"!==e||t.defaultPrevented||this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const t=document.createElement(this.constructor.is);return t._tooltipController=this._tooltipController,t.__parentMenu=this,t._modeless=!0,t.openOn="opensubmenu",this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),t.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("item-selected",t=>{const{detail:e}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:e}))}),this.addEventListener("close-all-menus",()=>{this.close()}),this.addEventListener("item-selected",t=>{const e=t.target,n=t.detail.value,i=e.items.indexOf(n);n.keepOpen&&i>-1&&e.opened?(e.__selectedIndex=i,e.requestContentUpdate()):n.keepOpen||this.close()}),t.addEventListener("opened-changed",t=>{if(t.detail.value)this._tooltipController.bringToFront();else{const t=this._listBox.querySelector("[expanded]");t&&this.__updateExpanded(t,!1)}}),t}__showSubMenu(t,e=t.composedPath().find(t=>t.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening"))return void requestAnimationFrame(()=>{this.__showSubMenu(t,e)});const n=this._subMenu,i=this._listBox.querySelector("[expanded]");if(e&&e!==i&&!e.disabled){const{children:t}=e._item,r=n._overlayElement._contentRoot.firstElementChild,o=r?.focused;if(i&&this.__updateExpanded(i,!1),t&&t.length||n.close(),!this.opened)return;t?.length?(this.__updateExpanded(e,!0),this.__openSubMenu(n,e)):o?n.listenOn.focus():this._listBox.focused||this._overlayElement.$.overlay.focus()}e?.disabled&&n.close()}get _menuListBox(){return this.__slottedListBox??this._overlayElement._contentRoot.querySelector(`${this._tagNamePrefix}-list-box`)}__itemsRenderer(t,e){this.__initMenu(t,e),this._subMenu.closeOn=e.closeOn,this._listBox.innerHTML="",e.items.forEach(t=>{const e=this.__createComponent(t);this._listBox.appendChild(e)})}_setMenuItemTheme(t,e,n){let i=t.getAttribute("theme")||n;null!=e.theme&&(i=Array.isArray(e.theme)?e.theme.join(" "):e.theme),this.__updateTheme(t,i)}__toggleMenuComponentAttribute(t,e,n){n?(t.setAttribute(e,""),t[`__has-${e}`]=!0):t[`__has-${e}`]&&(t.removeAttribute(e),t[`__has-${e}`]=!1)}__initMenu(t,e){if(t.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const e=this.__initListBox();this._listBox=e,t.appendChild(e);const n=this.__initSubMenu();n.slot="submenu",this._subMenu=n,this.appendChild(n),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(t,e){t.setAttribute("aria-expanded",e.toString()),t.toggleAttribute("expanded",e)}__updateTheme(t,e){hc(t,"theme",e)}close(){this.__parentMenu||this._tooltipController.close(!0)}},Yd=t=>class extends(Xd(t)){static get properties(){return{selector:{type:String},opened:{type:Boolean,reflectToAttribute:!0,observer:"_openedChanged",value:!1,notify:!0,readOnly:!0,sync:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},__slottedListBox:{type:Object,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_fullscreen:{type:Boolean},_fullscreenMediaQuery:{type:String,value:"(max-width: 450px), (max-height: 450px)"}}}static get observers(){return["_targetOrOpenOnChanged(listenOn, openOn)","_fullscreenChanged(_fullscreen)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this.__onGlobalContextMenu=this.__onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),document.documentElement.addEventListener("contextmenu",this.__onGlobalContextMenu,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),document.documentElement.removeEventListener("contextmenu",this.__onGlobalContextMenu,!0),this.__restoreOpened=this.opened,setTimeout(()=>{this.isConnected||this.close()})}firstUpdated(){super.firstUpdated(),this._overlayElement=this.$.overlay,this.addController(new Wd(this._fullscreenMediaQuery,t=>{this._fullscreen=t})),this._tooltipController||(this._tooltipController=new Kd(this),this.addController(this._tooltipController))}updated(t){if(super.updated(t),t.has("renderer")||t.has("items")||t.has("__slottedListBox")){if([this.items,this.renderer,this.__slottedListBox].filter(Boolean).length>1)throw new Error('The "items", "renderer", and slotted "<vaadin-context-menu-list-box>" cannot be used together.');this.items&&"click"===this.closeOn&&(this.closeOn="")}}_onOverlayOpened(t){t.target===this._overlayElement&&(t.detail.value?(this._setOpened(!0),this.__alignOverlayPosition()):this.opened&&this.close())}_onVaadinOverlayOpen(t){t.target===this._overlayElement&&(this.__alignOverlayPosition(),this._overlayElement.style.visibility="",this.__forwardFocus())}_onVaadinOverlayClosed(){this.dispatchEvent(new CustomEvent("closed"))}_targetOrOpenOnChanged(t,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),t&&e&&(this._listen(t,e,this._boundOpen),this._oldListenOn=t,this._oldOpenOn=e)}_fullscreenChanged(t){this._phone=t}__setListenOnUserSelect(t){const e=t?"none":"";this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,t&&document.getSelection().removeAllRanges()}_closeOnChanged(t,e){const n="vaadin-overlay-outside-click",i=this._overlayElement;e&&this._unlisten(i,e,this._boundClose),t?(this._listen(i,t,this._boundClose),i.removeEventListener(n,this._boundPreventDefault)):i.addEventListener(n,this._boundPreventDefault)}_preventDefault(t){this.items||t.preventDefault()}_openedChanged(t){this.__setListenOnUserSelect(t)}requestContentUpdate(){this._overlayElement&&(this.__preserveMenuState(),this._overlayElement.requestContentUpdate(),this.__restoreMenuState())}close(){super.close(),this._setOpened(!1)}__getComposedPath(t){return t.__composedPath??t.detail?.sourceEvent?.__composedPath??t.composedPath()}_contextTarget(t){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,e=>this.__getComposedPath(t).indexOf(e)>-1)[0]}return this.listenOn&&this.listenOn!==this&&this.position?this.listenOn:t.target}open(t){this._overlayElement&&this.__getComposedPath(t).includes(this._overlayElement)||t&&!this.opened&&(this._context={detail:t.detail,target:this._contextTarget(t)},this._context.target&&(t.preventDefault(),t.stopPropagation(),this.__x=this._getEventCoordinate(t,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(t,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.visibility="hidden",this._setOpened(!0)))}__preserveMenuState(){const t=this._menuListBox;t&&(this.__focusedIndex=t.items.indexOf(t.focused),this._subMenu&&this._subMenu.opened&&(this.__subMenuIndex=t.items.indexOf(this._subMenu.listenOn)))}__restoreMenuState(){const t=this.__focusedIndex,e=this.__subMenuIndex,n=this.__selectedIndex,i=this._menuListBox;if(i){if(i._observer?.flush(),e>-1){const t=i.items[e];t?Array.isArray(t._item.children)&&t._item.children.length?(this.__updateSubMenuForItem(this._subMenu,t),this._subMenu.requestContentUpdate()):(this._subMenu.close(),this.__focusItem(t)):i.focus()}this.__focusItem(n>-1?i.children[n]:i.items[t])}this.__focusedIndex=void 0,this.__subMenuIndex=void 0,this.__selectedIndex=void 0}__focusItem(t){t&&t.focus({focusVisible:_l()})}__onOverlaySlotChange(t){this.__slottedListBox=t.target.assignedElements().find(t=>t._hasVaadinListMixin)}__onScroll(){if(!this.opened||this.position)return;const t=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-t),this.__adjustPosition("bottom",t),this.__pageYOffset+=t,this.__pageXOffset+=e}__adjustPosition(t,e){const n=this._overlayElement.style;n[t]=`${(parseInt(n[t])||0)+e}px`}__alignOverlayPosition(){const t=this._overlayElement;if(t.positionTarget)return;const e=t.style;["top","right","bottom","left"].forEach(t=>e.removeProperty(t)),["right-aligned","end-aligned","bottom-aligned"].forEach(e=>t.removeAttribute(e));const{xMax:n,xMin:i,yMax:r}=t.getBoundaries(),o=this.__x,s=this.__y,a=document.documentElement.clientWidth,l=document.documentElement.clientHeight;this.__isRTL?o>a/2||o>i?e.right=`${Math.max(0,a-o)}px`:(e.left=`${o}px`,this._setEndAligned(t)):o<a/2||o<n?e.left=`${o}px`:(e.right=`${Math.max(0,a-o)}px`,this._setEndAligned(t)),s<l/2||s<r?e.top=`${s}px`:(e.bottom=`${Math.max(0,l-s)}px`,t.setAttribute("bottom-aligned",""))}_setEndAligned(t){t.setAttribute("end-aligned",""),this.__isRTL||t.setAttribute("right-aligned","")}_getEventCoordinate(t,e){if(!(t.detail instanceof Object)){const n=`client${e.toUpperCase()}`,i=t.changedTouches?t.changedTouches[0][n]:t[n];if(0===i){const n=(this.__getComposedPath(t)[0]||t.target).getBoundingClientRect();return"x"===e?n.left:n.top+n.height}return i}return t.detail[e]?t.detail[e]:t.detail.sourceEvent?this._getEventCoordinate(t.detail.sourceEvent,e):void 0}_listen(t,e,n){Jl[e]?rc(t,e,n):t.addEventListener(e,n)}_unlisten(t,e,n){Jl[e]?function(t,e,n){!!Jl[e]&&function(t,e,n){const i=Jl[e],r=i.deps,o=i.name,s=t[Dl];if(s)for(let e,n,i=0;i<r.length;i++)e=r[i],n=s[e],n?.[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,ic,Vl(e)));t.removeEventListener(e,n)}(t,e,n)}(t,e,n):t.removeEventListener(e,n)}__createMouseEvent(t,e,n){return new MouseEvent(t,{bubbles:!0,composed:!0,cancelable:!0,clientX:e,clientY:n})}__focusClosestFocusable(t){let e=t;for(;e;){if(e instanceof HTMLElement&&wl(e))return void e.focus();e=e.assignedSlot||e.parentNode||e.host}}__contextMenuAt(t,e){const n=ec(t,e);n&&queueMicrotask(()=>{this.__focusClosestFocusable(n),n.dispatchEvent(this.__createMouseEvent("contextmenu",t,e))})}__onGlobalContextMenu(t){this.opened&&!t.shiftKey&&(Do||Ro||(t.stopPropagation(),this._overlayElement.__focusRestorationController.focusNode=null,this._overlayElement.addEventListener("vaadin-overlay-closed",e=>{e.target===this._overlayElement&&this.__contextMenuAt(t.clientX,t.clientY)},{once:!0})),t.preventDefault(),this.close())}};class Gd extends(Yd(Ca(Za(Na(na))))){static get is(){return"vaadin-menu-bar-submenu"}static get styles(){return Yo`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    `}static get properties(){return{isRoot:{type:Boolean,reflectToAttribute:!0,sync:!0}}}constructor(){super(),this.openOn="opensubmenu"}firstUpdated(t){this._tooltipController=this.parentElement._tooltipController,super.firstUpdated(t)}get _tagNamePrefix(){return"vaadin-menu-bar"}render(){return Ns`
      <vaadin-menu-bar-overlay
        id="overlay"
        .owner="${this}"
        .opened="${this.opened}"
        .model="${this._context}"
        .modeless="${this._modeless}"
        .renderer="${this.__itemsRenderer}"
        .withBackdrop="${this._phone}"
        .positionTarget="${this._positionTarget}"
        ?no-horizontal-overlap="${!this.isRoot}"
        ?phone="${this._phone}"
        theme="${kc(this._theme)}"
        exportparts="backdrop, overlay, content"
        @opened-changed="${this._onOverlayOpened}"
        @vaadin-overlay-open="${this._onVaadinOverlayOpen}"
      >
        <slot name="overlay"></slot>
        <slot name="submenu" slot="submenu"></slot>
      </vaadin-menu-bar-overlay>
    `}_openedChanged(){}__onGlobalContextMenu(){}close(){super.close(),this.isRoot&&this.parentElement._close()}}oa(Gd);const Zd=Yo`
  :host {
    flex-shrink: 0;
  }

  :host([focus-ring]) {
    z-index: 1;
  }

  :host([slot='overflow']) {
    margin-inline-end: 0;
  }

  .vaadin-button-container {
    gap: inherit;
  }

  :host(:not([slot='overflow'])[aria-haspopup]) [part='suffix'] {
    display: flex;
    align-items: center;
    gap: inherit;
  }

  :host(:not([slot='overflow'])[aria-haspopup]) [part='suffix']::after {
    background: currentColor;
    content: '';
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    width: var(--vaadin-icon-size, 1lh);
  }

  ::slotted(vaadin-menu-bar-item) {
    padding: 0;
    gap: 0;
  }

  ::slotted(vaadin-menu-bar-item)::after {
    display: none;
  }
`;oa(class extends nd{static get is(){return"vaadin-menu-bar-button"}static get styles(){return[super.styles,Zd]}_onKeyDown(t){this.__triggeredWithActiveKeys=this._activeKeys.includes(t.key),super._onKeyDown(t),this.__triggeredWithActiveKeys=null}_setActive(t){!t&&this.hasAttribute("expanded")||super._setActive(t)}__shouldSuppressInteractionEvent(t){return("keydown"!==t.type||!["ArrowLeft","ArrowRight"].includes(t.key))&&super.__shouldSuppressInteractionEvent(t)}});const Qd=Yo`
  :host {
    display: block;
    min-width: 0;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Keep the width measured with all buttons in flow while the host is frozen */
  :host([overflow-frozen]) {
    contain: inline-size !important;
    contain-intrinsic-inline-size: var(--_vaadin-menu-bar-content-width);
  }

  [part='container'] {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    width: 100%;
    --_gap: var(--vaadin-menu-bar-gap, 0px);
    --_bw: var(--vaadin-button-border-width, 1px);
    gap: var(--_gap);
    --_rad-button: var(--vaadin-button-border-radius, var(--vaadin-radius-m));
  }

  :host(:not([has-single-button])) ::slotted(vaadin-menu-bar-button:not(:first-of-type)) {
    margin-inline-start: min(var(--_bw) * -1 + var(--_gap) * 1000, 0px);
  }

  ::slotted(vaadin-menu-bar-button) {
    border-radius: 0;
  }

  ::slotted([first-visible]),
  :host([has-single-button]) ::slotted([slot='overflow']),
  ::slotted(vaadin-menu-bar-button[theme~='tertiary']) {
    border-start-start-radius: var(--_rad-button);
    border-end-start-radius: var(--_rad-button);
  }

  ::slotted(:is([last-visible], [slot='overflow'])),
  ::slotted(vaadin-menu-bar-button[theme~='tertiary']) {
    border-start-end-radius: var(--_rad-button);
    border-end-end-radius: var(--_rad-button);
  }

  :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button[first-visible]),
  :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
    margin-inline-start: auto;
  }
`;class Jd extends Kd{_getItem(t){return"vaadin-menu-bar-button"===t.localName?t.item:super._getItem(t)}_getDefaultPosition(t){return"vaadin-menu-bar-button"===t.localName?"bottom":super._getDefaultPosition(t)}}const tu=vd(class extends fd{update(t,[{component:e,text:n}]){const{parentNode:i,startNode:r}=t,o=e||(n?document.createTextNode(n):null),s=this.getOldNode(t);return s===o||(s&&o?i.replaceChild(o,s):s?i.removeChild(s):o&&r.after(o)),Ds}getOldNode(t){const{startNode:e,endNode:n}=t;return e.nextSibling===n?null:e.nextSibling}}),eu={moreOptions:"More options"},nu=t=>class extends(Tl(Wc(Xc(mc(fc(t)))))){static get properties(){return{items:{type:Array,sync:!0,value:()=>[]},openOnHover:{type:Boolean},reverseCollapse:{type:Boolean,sync:!0},tabNavigation:{type:Boolean,sync:!0}}}static get defaultI18n(){return eu}get i18n(){return super.i18n}set i18n(t){super.i18n=t}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(xl)||this._expandedButton}get _vertical(){return!1}get _tabNavigation(){return this.tabNavigation}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _hasOverflow(){return this._overflow&&!this._overflow.hasAttribute("hidden")}set _hasOverflow(t){this._overflow&&this._overflow.toggleAttribute("hidden",!t)}ready(){super.ready(),this.setAttribute("role","menubar"),this._subMenuController=new td(this,"submenu","vaadin-menu-bar-submenu",{initializer:t=>{t.setAttribute("is-root",""),t.addEventListener("item-selected",this.__onItemSelected.bind(this)),t.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),t._overlayElement._contentRoot.addEventListener("keydown",this.__boundOnContextMenuKeydown),this._subMenu=t}}),this._overflowController=new td(this,"overflow","vaadin-menu-bar-button",{initializer:t=>{t.setAttribute("hidden","");const e=document.createElement("div");e.setAttribute("aria-hidden","true"),e.innerHTML="&centerdot;".repeat(3),t.appendChild(e),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.setAttribute("role",this.tabNavigation?"button":"menuitem"),this._overflow=t}}),this._tooltipController=new Jd(this),this.addEventListener("mousedown",()=>this._tooltipController.close(!0)),this.addEventListener("mouseleave",()=>this._tooltipController.close()),this.addController(this._tooltipController),this.addController(this._subMenuController),this.addController(this._overflowController),this._container=this.shadowRoot.querySelector('[part="container"]')}updated(t){super.updated(t),(t.has("items")||t.has("_theme")||t.has("disabled"))&&this.__renderButtons(this.items),(t.has("items")||t.has("_theme")||t.has("reverseCollapse"))&&this.__scheduleOverflow(),t.has("items")&&this.__updateSubMenu(),t.has("_theme")&&this._themeChanged(this._theme),t.has("dir")&&hc(this._subMenu,"dir",this.dir),t.has("disabled")&&this._overflow.toggleAttribute("disabled",this.disabled),t.has("tabNavigation")&&this._tabNavigationChanged(this.tabNavigation),t.has("__effectiveI18n")&&this.__i18nChanged(this.__effectiveI18n)}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._tooltipController.setTarget(null)}_onResize(){this.__scheduleOverflow()}_themeChanged(t){hc(this._overflow,"theme",t),hc(this._subMenu,"theme",t)}_tabNavigationChanged(t){const e=this.querySelector('[tabindex="0"]');this._buttons.forEach(n=>{e?this._setTabindex(n,n===e):this._setTabindex(n,!1),n.setAttribute("role",t?"button":"menuitem")}),this.setAttribute("role",t?"group":"menubar")}__updateSubMenu(){const t=this._subMenu;if(t?.opened){const e=t._positionTarget;e.isConnected&&Array.isArray(e.item.children)&&0!==e.item.children.length||t.close()}}__i18nChanged(t){void 0!==t?.moreOptions&&hc(this._overflow,"aria-label",t.moreOptions)}__getOverflowCount(t){return t.item?.children?.length??0}__restoreButtons(t){t.forEach(t=>{t.style.visibility="",t.style.position="";const e=t.item?.component;e instanceof HTMLElement&&"menuitem"===e.getAttribute("role")&&this.__restoreItem(t,e)})}__restoreState(t){this.__restoreButtons(t),this.__updateOverflow([]),this.toggleAttribute("has-single-button",1===t.length),this.__updateVisibleAttributes(t)}__restoreItem(t,e){t.appendChild(e),e.removeAttribute("role"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-haspopup"),e.removeAttribute("tabindex")}__updateOverflow(t){this._overflow.item={children:t},this._hasOverflow=t.length>0}__getInlineEnd(t){const{left:e,right:n}=t.getBoundingClientRect();return this.__isRTL?-e:n}__isPastContainerEnd(t){return this.__getInlineEnd(t)>this.__getInlineEnd(this._container)+.1}__getOverflowLayout(t,e){const n=this.__isRTL,i=t.map(t=>t.getBoundingClientRect()),r=i.map(({left:t,right:e})=>n?-t:e),o=this.__getInlineEnd(e),s=this._container.getBoundingClientRect(),a=n?-s.right:s.left;return{starts:i.map(({left:t,right:e})=>n?-e:t),ends:r,margins:t.map(t=>parseFloat(getComputedStyle(t).marginInlineStart)||0),overflowExtent:o-r.at(-1),containerWidth:s.width,contentWidth:o-a}}__getButtonsToCollapse(t,{starts:e,ends:n,margins:i,overflowExtent:r,containerWidth:o}){let s=0,a=t.length-1;for(;s<=a&&i[s]+n[a]-e[s]+r>o+.1;)this.reverseCollapse?s+=1:a-=1;return t.filter((t,e)=>e<s||e>a)}__freezeWidth(t){this.style.setProperty("--_vaadin-menu-bar-content-width",`${t}px`),this.setAttribute("overflow-frozen","")}__unfreezeWidth(){this.style.removeProperty("--_vaadin-menu-bar-content-width"),this.removeAttribute("overflow-frozen")}__setOverflowItems(t,e){const n=t.at(-1),i=this.hasAttribute("overflow-frozen");if(!n||!i&&!this.__isPastContainerEnd(n))return void this.__unfreezeWidth();this._hasOverflow=!0;const r=this.__getOverflowLayout(t,e),o=this.__getButtonsToCollapse(t,r);o.forEach(t=>{t.style.visibility="hidden",t.style.position="absolute"}),this.__updateOverflow(o.map(t=>t.item)),0===o.length?this.__unfreezeWidth():(i||this.__isPastContainerEnd(e))&&this.__freezeWidth(r.contentWidth)}__scheduleOverflow(){this._overflowDebouncer=ba.debounce(this._overflowDebouncer,ga,()=>{this.__detectOverflow()})}__detectOverflow(){const t=this._overflow,e=this._buttons.filter(e=>e!==t),n=this.__getOverflowCount(t);this.__restoreState(e),this.__setOverflowItems(e,t);const i=this.__getOverflowCount(t);n!==i&&this._subMenu.opened&&this._subMenu.close();const r=i===e.length||0===i&&1===e.length;this.toggleAttribute("has-single-button",r),this.__updateVisibleButtons(e)}__updateVisibleButtons(t){const e=t.filter(t=>"hidden"!==t.style.visibility);e.length?e.some(t=>"0"===t.getAttribute("tabindex"))||this._setTabindex(e[e.length-1],!0):this._overflow.setAttribute("tabindex","0"),this.__updateVisibleAttributes(e)}__updateVisibleAttributes(t){t.forEach((e,n)=>{e.toggleAttribute("first-visible",0===n),e.toggleAttribute("last-visible",!this._hasOverflow&&n===t.length-1)})}__getButtonTheme(t,e){let n=e;const i=t?.theme;return null!=i&&(n=Array.isArray(i)?i.join(" "):i),n}__getComponent(t){const e=t.component;let n;const i=e instanceof HTMLElement;return i&&"vaadin-menu-bar-item"===e.localName?n=e:(n=document.createElement("vaadin-menu-bar-item"),n.appendChild(i?e:document.createElement(e))),t.text&&((n.firstChild||n).textContent=t.text),n}__renderButtons(t=[]){ta(Ns`
          ${t.map(t=>{const e={...t},n=Boolean(t?.children);return e.component&&(e.component=this.__getComponent(e)),Ns`
              <vaadin-menu-bar-button
                .item="${e}"
                .disabled="${this.disabled||t.disabled}"
                role="${this.tabNavigation?"button":"menuitem"}"
                aria-haspopup="${kc(n?"true":js)}"
                aria-expanded="${kc(n?"false":js)}"
                class="${kc(t.className||js)}"
                theme="${kc(this.__getButtonTheme(t,this._theme)||js)}"
                @click="${this.__onRootButtonClick}"
                >${tu(e)}</vaadin-menu-bar-button
              >
            `})}
        `,this,{renderBefore:this._overflow})}__onRootButtonClick(t){const e=t.target;e.item?.component&&!t.composedPath().includes(e.item.component)&&(t.stopPropagation(),e.item.component.click())}_setExpanded(t,e){t.toggleAttribute("expanded",e),t.toggleAttribute("active",e),t.setAttribute("aria-expanded",e?"true":"false")}_setTabindex(t,e){this.tabNavigation&&this._isItemFocusable(t)?t.setAttribute("tabindex","0"):t.setAttribute("tabindex",e?"0":"-1")}_focusItem(t,e,n){const i=n&&this.focused===this._expandedButton;i&&this._close(),super._focusItem(t,e,n),this._buttons.forEach(e=>{this._setTabindex(e,e===t)}),this._tooltipController.setTarget(t),i&&t.item?.children?this.__openSubMenu(t,!0,{keepFocus:!0}):this._subMenu.opened||this._tooltipController.open({trigger:"focus"})}_getButtonFromEvent(t){return Array.from(t.composedPath()).find(t=>"vaadin-menu-bar-button"===t.localName)}_shouldSetFocus(t){return!t.composedPath().includes(this._subMenu)&&super._shouldSetFocus(t)}_shouldRemoveFocus(t){return!t.composedPath().includes(this._subMenu)&&super._shouldRemoveFocus(t)}_setFocused(t){const e=t?this.__getFocusTarget():null;e?(this._tooltipController.setTarget(e),this._buttons.forEach(t=>{this._setTabindex(t,t===e)}),!this._subMenu.opened&&_l()&&this._tooltipController.open({trigger:"focus"})):this._tooltipController.close(!0)}__getFocusTarget(){let t=this._buttons.find(t=>xl(t));if(!t){const e=this.tabNavigation?"[focused]":'[tabindex="0"]';t=this.querySelector(`vaadin-menu-bar-button${e}`),yl(t)&&(t=this._buttons[this._getFocusableIndex()])}return t}_onArrowDown(t){t.preventDefault();const e=this._getButtonFromEvent(t);e===this._expandedButton?this._focusFirstItem():this.__openSubMenu(e,!0)}_onArrowUp(t){t.preventDefault();const e=this._getButtonFromEvent(t);e===this._expandedButton?this._focusLastItem():this.__openSubMenu(e,!0,{focusLast:!0})}_onEscape(t){t.composedPath().includes(this._expandedButton)&&this._close(!0),this._tooltipController.close(!0)}_onKeyDown(t){t.composedPath().includes(this._subMenu)||this._handleKeyDown(t)}_handleKeyDown(t){switch(t.key){case"ArrowDown":this._onArrowDown(t);break;case"ArrowUp":this._onArrowUp(t);break;default:super._onKeyDown(t)}}_onMouseOver(t){if(t.composedPath().includes(this._subMenu))return;const e=this._getButtonFromEvent(t);this._tooltipController.setTarget(e),e&&e!==this._expandedButton&&e.item.children&&(this.openOnHover||this._subMenu.opened)&&this.__openSubMenu(e,!1),this._subMenu.opened||this._tooltipController.open({trigger:"hover"})}__onContextMenuKeydown(t){const e=Array.from(t.composedPath()).find(t=>t._item);if(e){const n=e.parentNode;"ArrowUp"===t.key&&e===n.items[0]&&this._close(!0);const i=this.__isRTL?"ArrowRight":"ArrowLeft",r=this.__isRTL?"ArrowLeft":"ArrowRight";(t.key===i||t.key===r&&!e._item.children)&&(t.stopImmediatePropagation(),this._handleKeyDown(t)),"Tab"===t.key&&this.tabNavigation&&this._handleKeyDown(t)}}__fireItemSelected(t){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:t}}))}__onButtonClick(t){const e=this._getButtonFromEvent(t);e&&this.__openSubMenu(e,e.__triggeredWithActiveKeys)}__openSubMenu(t,e,n={}){if(t.disabled)return;const i=this._subMenu,r=t.item;if(i.opened&&(this._close(),i.listenOn===t))return;const o=r?.children;if(!o||0===o.length)return void this.__fireItemSelected(r);i.items=o,i.listenOn=t,i._positionTarget=t;const s=i._overlayElement;s.noVerticalOverlap=!0,this._tooltipController.close(!0),this._expandedButton=t,this._setExpanded(t,!0),this.style.pointerEvents="auto",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:o}})),s.addEventListener("vaadin-overlay-open",()=>{if(n.focusLast&&this._focusLastItem(),n.keepFocus){const t={focusVisible:_l()};this._focusItem(this._expandedButton,t,!1)}e||s.$.overlay.focus()},{once:!0})}_focusFirstItem(){this._subMenu._menuListBox.focus()}_focusLastItem(){const t=this._subMenu._menuListBox,e=t.items[t.items.length-1];e&&e.focus()}__onItemSelected(t){t.stopPropagation(),this.__fireItemSelected(t.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(t){const e=this._expandedButton;if(e?.hasAttribute("expanded")){if(this._setExpanded(e,!1),t){const t={focusVisible:_l()};this._focusItem(e,t,!1)}else this._tooltipController.close(!0);this._expandedButton=null}}_close(t=!1){this.style.pointerEvents="",this.__deactivateButton(t),this._subMenu.opened&&this._subMenu.close()}close(){this._close()}_isItemFocusable(t){return t.disabled&&t.__shouldAllowFocusWhenDisabled?t.__shouldAllowFocusWhenDisabled():super._isItemFocusable(t)}};class iu extends(nu(Sa(rl(Na(Ga(na)))))){static get is(){return"vaadin-menu-bar"}static get styles(){return Qd}render(){return Ns`
      <div part="container" @click="${this.__onButtonClick}" @mouseover="${this._onMouseOver}">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>

      <slot name="submenu"></slot>

      <slot name="tooltip"></slot>
    `}}function ru(t,e,n={matchNested:!1}){const i=document.baseURI,r=new URL(t,i),o=new URL(e,i),s=r.origin===o.origin,a=n.matchNested?r.pathname===o.pathname||r.pathname.startsWith(`${o.pathname}/`):r.pathname===o.pathname;return s&&a&&function(t,e){return[...e.entries()].every(([e,n])=>t.getAll(e).includes(n))}(r.searchParams,o.searchParams)}oa(iu);const ou={get pathname(){return document.location.pathname},get search(){return document.location.search}},su=Yo`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`,au=Yo`
  :host {
    display: flex;
    flex-direction: column;
    min-width: 0;
    max-width: 100%;
    gap: var(--vaadin-side-nav-items-gap, var(--vaadin-gap-s));
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  button {
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: var(--vaadin-clickable-cursor);
    flex: none;
  }

  [part='toggle-button'] {
    border-radius: var(--vaadin-side-nav-item-border-radius, var(--vaadin-radius-s));
    color: var(--vaadin-text-color-secondary);
  }

  [part='toggle-button']::before {
    content: '';
    display: block;
    background: currentColor;
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    rotate: -90deg;
  }

  :host([dir='rtl']) [part='toggle-button']::before {
    scale: -1;
  }

  :host(:is(vaadin-side-nav-item[expanded], vaadin-side-nav:not([collapsed]))) [part='toggle-button'] {
    rotate: 90deg;
  }

  :host([dir='rtl']:is(vaadin-side-nav-item[expanded], vaadin-side-nav:not([collapsed]))) [part='toggle-button'] {
    rotate: -90deg;
  }

  @media (prefers-reduced-motion: no-preference) {
    [part='toggle-button'] {
      transition: rotate 150ms;
    }
  }

  :host([disabled]) [part='toggle-button'] {
    opacity: 0.5;
  }

  [part='children'] {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: var(--vaadin-side-nav-items-gap, var(--vaadin-gap-s));
  }

  [part='children'] slot {
    --_icon-indent-2: var(--_icon-indent);
  }

  :focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  @media (forced-colors: active) {
    [part='toggle-button']::before {
      background: CanvasText;
    }
  }
`,lu=[au,su,Yo`
  [part='content'] {
    display: flex;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    padding: var(
      --vaadin-side-nav-item-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    --_gap: var(--vaadin-side-nav-item-gap, var(--vaadin-gap-s));
    gap: var(--_gap);
    font-size: var(--vaadin-side-nav-item-font-size, 1em);
    font-weight: var(--vaadin-side-nav-item-font-weight, 500);
    line-height: var(--vaadin-side-nav-item-line-height, inherit);
    color: var(--vaadin-side-nav-item-text-color, var(--vaadin-text-color-secondary));
    background: var(--vaadin-side-nav-item-background, transparent);
    background-origin: border-box;
    border: var(--vaadin-side-nav-item-border-width, 0) solid var(--vaadin-side-nav-item-border-color, transparent);
    border-radius: var(--vaadin-side-nav-item-border-radius, var(--vaadin-radius-m));
    cursor: var(--vaadin-clickable-cursor);
    touch-action: manipulation;
    contain: layout;
  }

  :host([current]) [part='content'] {
    --vaadin-side-nav-item-background: var(--vaadin-background-container);
    --vaadin-side-nav-item-text-color: var(--vaadin-text-color);
  }

  :host([disabled]) {
    --vaadin-clickable-cursor: var(--vaadin-disabled-cursor);
  }

  :host([disabled]) [part='content'] {
    --vaadin-side-nav-item-text-color: var(--vaadin-text-color-disabled);
  }

  :host(:not([has-children])) {
    gap: 0;
  }

  [part='link'] {
    flex: auto;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: inherit;
    text-decoration: none;
    color: inherit;
    outline: 0;
  }

  :host(:not([has-children])) [part='toggle-button'] {
    display: none !important;
  }

  slot:not([name]) {
    display: block;
    flex: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Don't clip ascenders or descenders */
    padding-block: 0.25em;
    margin-block: -0.25em;
  }

  slot:is([name='prefix'], [name='suffix'])::slotted(*) {
    flex: none;
  }

  [part='content']:not(:has([href])):has([part='toggle-button']:focus-visible),
  [part='content']:has(:not([part='toggle-button']):focus-visible),
  [part='content']:has([href]) [part='toggle-button']:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  [part='content']:not(:has([href])) [part='toggle-button']:focus-visible {
    outline: 0;
  }

  /* Hierarchy indentation */
  [part='content']::before {
    content: '';
    width: calc(
      var(--vaadin-side-nav-child-indent, 1em) * var(--_level, 0) + var(--_icon-indent, 0) *
        (var(--vaadin-icon-size, 1lh) + var(--_gap))
    );
    flex: none;
    margin-inline-start: calc(var(--_gap) * -1);
  }

  [part='children'] {
    --_level: calc(var(--_level-2, 0) + 1);
  }

  [part='children'] ::slotted(*) {
    --_level-2: var(--_level);
  }

  @media (forced-colors: active) {
    [part='content'] {
      border: 1px solid Canvas !important;
    }

    :host([current]) [part='content'] {
      color: Highlight !important;
      border-color: Highlight !important;
    }

    :host([disabled]) [part='content'] {
      --vaadin-side-nav-item-text-color: GrayText !important;
    }

    :host([disabled]) [part='toggle-button']::before {
      background: GrayText !important;
    }
  }
`],cu={toggle:"Toggle child items"};class du extends td{constructor(t,e){super(t,e,null,{observe:!0,multiple:!0})}initAddedNode(){this.host.requestUpdate()}teardownNode(){this.host.requestUpdate()}}const uu=t=>class extends(Tl(t)){static get properties(){return{_itemsCount:{type:Number,value:0}}}static get defaultI18n(){return cu}constructor(){super(),this._childrenController=new du(this,this._itemsSlotName)}get i18n(){return super.i18n}set i18n(t){super.i18n=t}get _items(){return this._childrenController.nodes}get _itemsSlotName(){return"children"}firstUpdated(){super.firstUpdated(),this.addController(this._childrenController)}willUpdate(t){super.willUpdate(t),this._itemsCount=this._items.length}updated(t){super.updated(t),t.has("_itemsCount")&&this.toggleAttribute("has-children",this._itemsCount>0),(t.has("_itemsCount")||t.has("__effectiveI18n"))&&this._items.forEach(t=>{t.i18n=this.__effectiveI18n})}};class hu extends(uu(fc(Sa(rl(Na(Ga(na))))))){static get is(){return"vaadin-side-nav-item"}static get properties(){return{path:{type:String},pathAliases:{type:Array,value:()=>[]},expanded:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},matchNested:{type:Boolean,value:!1},current:{type:Boolean,value:!1,readOnly:!0,reflectToAttribute:!0},target:{type:String},routerIgnore:{type:Boolean,value:!1},__tooltipText:{type:String}}}static get styles(){return lu}constructor(){super(),this.__boundUpdateCurrent=this.__updateCurrent.bind(this)}get _button(){return this.shadowRoot.querySelector("button")}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","listitem")}updated(t){super.updated(t),(t.has("path")||t.has("pathAliases")||t.has("matchNested"))&&this.__updateCurrent(),(t.has("disabled")||t.has("_itemsCount"))&&this._items.forEach(t=>{t.disabled=this.disabled})}connectedCallback(){super.connectedCallback(),this.__updateCurrent(),window.addEventListener("popstate",this.__boundUpdateCurrent),window.addEventListener("vaadin-navigated",this.__boundUpdateCurrent),window.addEventListener("side-nav-location-changed",this.__boundUpdateCurrent)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.__boundUpdateCurrent),window.removeEventListener("vaadin-navigated",this.__boundUpdateCurrent),window.removeEventListener("side-nav-location-changed",this.__boundUpdateCurrent)}render(){return Ns`
      <div id="content" part="content" @click="${this._onContentClick}">
        <a
          id="link"
          ?disabled="${this.disabled}"
          tabindex="${this.disabled||null==this.path?"-1":"0"}"
          href="${kc(this.disabled?null:this.path)}"
          target="${kc(this.target)}"
          ?router-ignore="${this.routerIgnore}"
          part="link"
          aria-current="${this.current?"page":"false"}"
        >
          <slot name="prefix"></slot>
          <slot></slot>
          <div class="sr-only">${this.__tooltipText}</div>
          <slot name="suffix"></slot>
        </a>
        <button
          part="toggle-button"
          ?disabled="${this.disabled}"
          @click="${this._onButtonClick}"
          aria-controls="children"
          aria-expanded="${this.expanded}"
          aria-labelledby="link i18n"
        ></button>
      </div>
      <ul
        id="children"
        part="children"
        role="list"
        ?hidden="${!this.expanded}"
        aria-hidden="${this.expanded?"false":"true"}"
      >
        <slot name="children"></slot>
      </ul>
      <div hidden id="i18n">${this.__effectiveI18n.toggle}</div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new ed(this),this._tooltipController.setTarget(this.$.content),this._tooltipController.setAriaTarget(null),this._tooltipController.addEventListener("tooltip-changed",t=>{const{node:e}=t.detail;e?(this.__tooltipText=e.textContent.trim(),e.setAttribute("aria-hidden","true")):this.__tooltipText=""}),this.addController(this._tooltipController)}_onButtonClick(t){t.stopPropagation(),this.__toggleExpanded()}_onContentClick(t){null==this.path||t.composedPath().find(t=>t===this.$.link)?null==this.path&&this.hasAttribute("has-children")&&!this.disabled&&this.__toggleExpanded():this.$.link.click()}__toggleExpanded(){this.expanded=!this.expanded}__updateCurrent(){this._setCurrent(this.__isCurrent()),this.current&&(this.__expandParentItems(),this.expanded=this._items.length>0)}__expandParentItems(){const t=this.closest("vaadin-side-nav");if(t?.noAutoExpand)return;const e=this.__getParentItem();e&&(e.__expandParentItems(),e.expanded=!0)}__getParentItem(){return this.parentElement instanceof hu?this.parentElement:null}__isCurrent(){if(null==this.path)return!1;const t=`${ou.pathname}${ou.search}`,e={matchNested:this.matchNested};return ru(t,this.path,e)||this.pathAliases.some(n=>ru(t,n,e))}}oa(hu);const pu=new WeakMap,vu=Oa(t=>class extends t{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return pu.has(t)||pu.set(t,new Set),pu.get(t)}(t);this.slotStyles.forEach(n=>{e.has(n)||(function(t,e){const n=document.createElement("style");n.textContent=t,e===document?document.head.appendChild(n):e.insertBefore(n,e.firstChild)}(n,t),e.add(n))})}}),fu=[au,Yo`
  :host {
    white-space: nowrap;
    touch-action: manipulation;
  }

  [part='label'] {
    align-self: start;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: var(--vaadin-side-nav-item-gap, var(--vaadin-gap-s));
    padding: var(
      --vaadin-side-nav-item-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    font-size: var(--vaadin-side-nav-label-font-size, max(11px, 0.875em));
    font-weight: var(--vaadin-side-nav-label-font-weight, 500);
    color: var(--vaadin-side-nav-label-color, var(--vaadin-text-color-secondary));
    line-height: var(--vaadin-side-nav-label-line-height, inherit);
    border-radius: var(--vaadin-side-nav-item-border-radius, var(--vaadin-radius-m));
    touch-action: manipulation;
    min-width: 0;
    max-width: 100%;
  }

  ::slotted([slot='label']) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`],_u=Yo`
  :where(vaadin-side-nav:has(> vaadin-side-nav-item > vaadin-icon[slot='prefix']))::part(children),
  :where(vaadin-side-nav-item:has(> vaadin-side-nav-item[slot='children'] > vaadin-icon[slot='prefix']))::part(
    children
  ) {
    --_icon-indent: calc(var(--_icon-indent-2, 0) + 1);
  }

  :where(vaadin-side-nav-item:has(> vaadin-icon[slot='prefix']))::part(content) {
    --_icon-indent: calc(var(--_icon-indent-2) - 1);
  }

  :where(
    vaadin-side-nav-item:has(> vaadin-icon[slot='prefix']):has(> vaadin-side-nav-item > vaadin-icon[slot='prefix'])
  )::part(children) {
    --_level: var(--_level-2, 0);
  }

  vaadin-side-nav:not(:has([slot='label']))::part(label) {
    display: none;
  }
`;class gu extends(uu(vu(mc(Sa(rl(Na(Ga(na)))))))){static get is(){return"vaadin-side-nav"}static get shadowRootOptions(){return{...na.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{collapsible:{type:Boolean,value:!1,reflectToAttribute:!0},collapsed:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},onNavigate:{attribute:!1},location:{observer:"__locationChanged"},noAutoExpand:{type:Boolean,reflectToAttribute:!0,value:!1}}}static get styles(){return fu}get slotStyles(){return[_u]}constructor(){super(),this._labelId=`side-nav-label-${Jc()}`,this.addEventListener("click",this.__onClick)}get _itemsSlotName(){return""}get focusElement(){return this.shadowRoot.querySelector("button")}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","navigation")}render(){return Ns`
      ${this.collapsible?Ns`
              <button
                part="label"
                @click="${this._onLabelClick}"
                aria-expanded="${!this.collapsed}"
                aria-controls="children"
              >
                <slot name="label" @slotchange="${this._onLabelSlotChange}"></slot>
                <span part="toggle-button" aria-hidden="true"></span>
              </button>
            `:Ns`
              <div part="label">
                <slot name="label" @slotchange="${this._onLabelSlotChange}"></slot>
              </div>
            `}
      <ul
        id="children"
        role="list"
        part="children"
        ?hidden="${this.collapsed}"
        aria-hidden="${this.collapsed?"true":"false"}"
      >
        <slot></slot>
      </ul>
    `}_shouldSetFocus(t){return t.composedPath()[0]===this.focusElement}_onLabelClick(){this.collapsible&&this.__toggleCollapsed()}_onLabelSlotChange(){const t=this.querySelector('[slot="label"]');t?(t.id||(t.id=this._labelId),this.setAttribute("aria-labelledby",t.id)):this.removeAttribute("aria-labelledby")}__locationChanged(){window.dispatchEvent(new CustomEvent("side-nav-location-changed"))}__toggleCollapsed(){this.collapsed=!this.collapsed}__onClick(t){if(!this.onNavigate)return;if(t.metaKey||t.shiftKey)return;const e=t.composedPath(),n=e.find(t=>t.localName&&t.localName.includes("side-nav-item")),i=e.find(t=>t instanceof HTMLAnchorElement);n&&n.shadowRoot.contains(i)&&i.href&&i.href.startsWith(location.origin)&&"_blank"!==n.target&&(n.routerIgnore||!1!==this.onNavigate({path:n.path,target:n.target,current:n.current,expanded:n.expanded,pathAliases:n.pathAliases,originalEvent:t})&&t.preventDefault())}}oa(gu);const mu=Yo`
  :host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Theme variations */
  :host([theme~='margin']) {
    margin: var(--vaadin-vertical-layout-margin, var(--vaadin-padding-m));
  }

  :host([theme~='padding']) {
    padding: var(--vaadin-vertical-layout-padding, var(--vaadin-padding-m));
  }

  :host([theme~='spacing']) {
    gap: var(--vaadin-vertical-layout-gap, var(--vaadin-gap-s));
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`,bu=window.Vaadin.featureFlags.layoutComponentImprovements,yu=Yo`
  ::slotted([data-height-full]) {
    flex: 1;
  }

  ::slotted(vaadin-horizontal-layout[data-height-full]),
  ::slotted(vaadin-vertical-layout[data-height-full]) {
    min-height: 0;
  }
`,wu=bu?[mu,yu]:[mu];class xu extends(rl(Sa(Na(Ga(na))))){static get is(){return"vaadin-vertical-layout"}static get styles(){return wu}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return Ns`<slot></slot>`}}oa(xu);class Cu{}class ku{}class Au{constructor(){Iu=this,this.us_1="small",this.vs_1="large",this.ws_1="tertiary",this.xs_1="tertiary-inline",this.ys_1="primary",this.zs_1="success",this.at_1="warning",this.bt_1="error",this.ct_1="contrast",this.dt_1="icon"}}class Su{constructor(){Lu=this,this.et_1="elevated",this.ft_1="outlined",this.gt_1="horizontal",this.ht_1="stretch-media",this.it_1="cover-media"}}class Eu{constructor(){$u=this,this.jt_1="margin",this.kt_1="padding",this.lt_1="spacing-xs",this.mt_1="spacing-s",this.nt_1="spacing",this.ot_1="spacing-l",this.pt_1="spacing-xl",this.qt_1="wrap"}}class Ou{constructor(){Nu=this,this.rt_1="items-baseline",this.st_1="items-center",this.tt_1="items-end",this.ut_1="items-start",this.vt_1="items-stretch"}}class zu{constructor(){Pu=this,this.wt_1="justify-around",this.xt_1="justify-between",this.yt_1="justify-center",this.zt_1="justify-end",this.au_1="justify-evenly",this.bu_1="justify-start"}}class Mu{constructor(){Du=this,this.cu_1="small",this.du_1="large",this.eu_1="tertiary",this.fu_1="tertiary-inline",this.gu_1="primary",this.hu_1="contrast",this.iu_1="icon",this.ju_1="end-aligned",this.ku_1="dropdown-indicators",this.lu_1="filled",this.mu_1="success",this.nu_1="warning",this.ou_1="error"}}class Tu{constructor(){ju=this,this.pu_1="margin",this.qu_1="padding",this.ru_1="spacing-xs",this.su_1="spacing-s",this.tu_1="spacing",this.uu_1="spacing-l",this.vu_1="spacing-xl",this.wu_1="wrap"}}var Iu,Lu,$u,Nu,Pu,Du,ju;function Ru(t){return w}function Bu(t){return w}function Fu(t){return w}function Hu(t){t=t===y?qu:t;var e=document.createElement("vaadin-breadcrumbs-item");return t(e),e}function qu(t){return w}function Uu(t){t=t===y?Vu:t;var e=document.createElement("vaadin-button");return t(e),e}function Vu(t){return w}function Wu(t){t=t===y?Ku:t;var e=document.createElement("vaadin-card");return t(e),e}function Ku(t){return w}function Xu(){return Lu===y&&new Su,Lu}function Yu(t){t=t===y?Gu:t;var e=document.createElement("vaadin-horizontal-layout");return t(e),e}function Gu(t){return w}function Zu(){return $u===y&&new Eu,$u}function Qu(){return Nu===y&&new Ou,Nu}function Ju(){return Pu===y&&new zu,Pu}function th(t){t=t===y?eh:t;var e=document.createElement("vaadin-menu-bar");return t(e),e}function eh(t){return w}function nh(){return Du===y&&new Mu,Du}function ih(t){return w}function rh(t){t=t===y?oh:t;var e=document.createElement("vaadin-side-nav-item");return t(e),e}function oh(t){return w}function sh(t,e,n){for(var i=function(t){for(var e=ir(t.getAttribute("theme")??"",je([32])),n=at.i1(),i=e.s();i.t();){var r=i.u();bn(r)>0&&n.z(r)}return n}(t),r=Un([[e],n]),o=at.y(r.length),s=0,a=r.length;s<a;){var l=r[s];s=s+1|0;var c=lh(l);o.z(c)}for(var d=at.i1(),u=o.s();u.t();){var h=u.u();i.m1(h)||d.z(h)}var p=d;return p.a1()||ah(t,function(t,e){if(Zn(e,F)){var n=at.y(t.c1()+e.c1()|0);return n.e1(t),n.e1(e),n}var i=at.d1(t);return Vi(i,e),i}(i,p)),t}function ah(t,e){for(var n=at.i1(),i=e.s();i.t();)Vi(n,ir(i.u(),je([$e(32)])));for(var r=at.i1(),o=n.s();o.t();){var s=o.u();bn(s)>0&&r.z(s)}var a=ze(r);a.a1()?t.removeAttribute("theme"):t.setAttribute("theme",ke(a," "))}function lh(t){return t}function ch(t){t=t===y?dh:t;var e=document.createElement("vaadin-vertical-layout");return t(e),e}function dh(t){return w}function uh(){return ju===y&&new Tu,ju}Fn(Cu,"VaadinTagName"),Fn(ku,"AppLayoutPrimarySections"),Fn(Au,"ButtonVariants"),Fn(Su,"CardVariants"),Fn(Eu,"HorizontalLayoutVariants"),Fn(Ou,"AlignItems"),Fn(zu,"JustifyContent"),Fn(Mu,"MenuBarVariants"),Fn(Tu,"VerticalLayoutVariants"),new Cu,new ku;class hh{constructor(t,e){this.qb_1=t,this.rb_1=e}}function ph(t,e,n){var i,r,o;return n=n===y?{}:n,t.qb_1.addEventListener(t.rb_1,e,n),i=t,r=e,o=n,()=>(i.qb_1.removeEventListener(i.rb_1,r,o),w)}function vh(t,e,n,i){i=i===y?{}:i,t.addEventListener(e,n,i)}Rn(hh,"EventInstance");const fh=Object.freeze({left:0,top:0,width:16,height:16}),_h=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),gh=Object.freeze({...fh,..._h}),mh=Object.freeze({...gh,body:"",hidden:!1}),bh=Object.freeze({width:null,height:null}),yh=Object.freeze({...bh,..._h}),wh=/[\s,]+/,xh={...yh,preserveAspectRatio:""};function Ch(t){const e={...xh},n=(e,n)=>t.getAttribute(e)||n;var i;return e.width=n("width",null),e.height=n("height",null),e.rotate=function(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:i(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?i(r):0)}}return e}(n("rotate","")),i=e,n("flip","").split(wh).forEach(t=>{switch(t.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0}}),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}const kh=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ah=(t,e,n,i="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),o={provider:r.length>0?r[0]:i,prefix:n,name:t};return e&&!Sh(o)?null:o}const o=r[0],s=o.split("-");if(s.length>1){const t={provider:i,prefix:s.shift(),name:s.join("-")};return e&&!Sh(t)?null:t}if(n&&""===i){const t={provider:i,prefix:"",name:o};return e&&!Sh(t,n)?null:t}return null},Sh=(t,e)=>!!t&&!(!(e&&""===t.prefix||t.prefix)||!t.name);function Eh(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}(t,e);for(const i in mh)i in _h?i in t&&!(i in n)&&(n[i]=_h[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function Oh(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let o={};function s(t){o=Eh(i[t]||r[t],o)}return s(e),n.forEach(s),Eh(t,o)}function zh(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach(t=>{e(t,null),n.push(t)});const i=function(t){const e=t.icons,n=t.aliases||Object.create(null),i=Object.create(null);return Object.keys(e).concat(Object.keys(n)).forEach(function t(r){if(e[r])return i[r]=[];if(!(r in i)){i[r]=null;const e=n[r]&&n[r].parent,o=e&&t(e);o&&(i[r]=[e].concat(o))}return i[r]}),i}(t);for(const r in i){const o=i[r];o&&(e(r,Oh(t,r,o)),n.push(r))}return n}const Mh={provider:"",aliases:{},not_found:{},...fh};function Th(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Ih(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!Th(t,Mh))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t||"string"!=typeof e.body||!Th(e,mh))return null}const i=e.aliases||Object.create(null);for(const t in i){const e=i[t],r=e.parent;if(!t||"string"!=typeof r||!n[r]&&!i[r]||!Th(e,mh))return null}return e}const Lh=Object.create(null);function $h(t,e){const n=Lh[t]||(Lh[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function Nh(t,e){return Ih(e)?zh(e,(e,n)=>{n?t.icons[e]=n:t.missing.add(e)}):[]}function Ph(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(Lh)).forEach(t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(Lh[t]||{})).forEach(e=>{const i=$h(t,e);n=n.concat(Object.keys(i.icons).map(n=>(""!==t?"@"+t+":":"")+e+":"+n))})}),n}let Dh=!1;function jh(t){return"boolean"==typeof t&&(Dh=t),Dh}function Rh(t){const e="string"==typeof t?Ah(t,!0,Dh):t;if(e){const t=$h(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function Bh(t,e){const n=Ah(t,!0,Dh);if(!n)return!1;const i=$h(n.provider,n.prefix);return e?function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(t){}return!1}(i,n.name,e):(i.missing.add(n.name),!0)}function Fh(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),Dh&&!e&&!t.prefix){let e=!1;return Ih(t)&&(t.prefix="",zh(t,(t,n)=>{Bh(t,n)&&(e=!0)})),e}const n=t.prefix;return!!Sh({prefix:n,name:"a"})&&!!Nh($h(e,n),t)}function Hh(t){return!!Rh(t)}function qh(t){const e=Rh(t);return e?{...gh,...e}:e}function Uh(t,e){t.forEach(t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter(t=>t.id!==e))})}let Vh=0;const Wh=Object.create(null);function Kh(t,e){Wh[t]=e}function Xh(t){return Wh[t]||Wh[""]}function Yh(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||2e3,timeout:t.timeout||1e4,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const Gh=Object.create(null);function Zh(t,e){const n=Yh(e);return null!==n&&(Gh[t]=n,!0)}function Qh(t){return Gh[t]}function Jh(){return Object.keys(Gh)}Gh[""]=Yh({resources:["https://api.iconify.design","https://api2.iconify.design"]});const tp={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ep(t){const e={...tp,...t};let n=[];function i(){n=n.filter(t=>"pending"===t().status)}return{query:function(t,r,o){const s=function(t,e,n,i){const r=t.resources.length,o=t.random?Math.floor(Math.random()*r):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(o).concat(t.resources.slice(0,o));const a=Date.now();let l,c="pending",d=0,u=null,h=[],p=[];function v(){u&&(clearTimeout(u),u=null)}function f(){"pending"===c&&(c="aborted"),v(),h.forEach(t=>{"pending"===t.status&&(t.status="aborted")}),h=[]}function _(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function g(){c="failed",p.forEach(t=>{t(void 0,l)})}function m(){h.forEach(t=>{"pending"===t.status&&(t.status="aborted")}),h=[]}function b(e,n,i){const r="success"!==n;switch(h=h.filter(t=>t!==e),c){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return l=i,void g();if(r)return l=i,void(h.length||(s.length?y():g()));if(v(),m(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}c="completed",p.forEach(t=>{t(i)})}function y(){if("pending"!==c)return;v();const i=s.shift();if(void 0===i)return h.length?void(u=setTimeout(()=>{v(),"pending"===c&&(m(),g())},t.timeout)):void g();const r={status:"pending",resource:i,callback:(t,e)=>{b(r,t,e)}};h.push(r),d++,u=setTimeout(y,t.rotate),n(i,e,r.callback)}return p.push(i),setTimeout(y),function(){return{startTime:a,payload:e,status:c,queriesSent:d,queriesPending:h.length,subscribe:_,abort:f}}}(e,t,r,(t,e)=>{i(),o&&o(t,e)});return n.push(s),s},find:function(t){return n.find(e=>t(e))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:i}}function np(){}const ip=Object.create(null);function rp(t,e,n){let i,r;if("string"==typeof t){const e=Xh(t);if(!e)return n(void 0,424),np;r=e.send;const o=function(t){if(!ip[t]){const e=Qh(t);if(!e)return;const n={config:e,redundancy:ep(e)};ip[t]=n}return ip[t]}(t);o&&(i=o.redundancy)}else{const e=Yh(t);if(e){i=ep(e);const n=Xh(t.resources?t.resources[0]:"");n&&(r=n.send)}}return i&&r?i.query(e,r,n)().abort:(n(void 0,424),np)}function op(){}function sp(t,e,n){function i(){const n=t.pendingIcons;e.forEach(e=>{n&&n.delete(e),t.icons[e]||t.missing.add(e)})}if(n&&"object"==typeof n)try{if(!Nh(t,n).length)return void i()}catch(t){console.error(t)}i(),function(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(e=>{const o=e.icons,s=o.pending.length;o.pending=o.pending.filter(e=>{if(e.prefix!==r)return!0;const s=e.name;if(t.icons[s])o.loaded.push({provider:i,prefix:r,name:s});else{if(!t.missing.has(s))return n=!0,!0;o.missing.push({provider:i,prefix:r,name:s})}return!1}),o.pending.length!==s&&(n||Uh([t],e.id),e.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),e.abort))})}))}(t)}))}(t)}function ap(t,e){t instanceof Promise?t.then(t=>{e(t)}).catch(()=>{e(null)}):e(t)}const lp=(t,e)=>{const n=function(t,e=!0,n=!1){const i=[];return t.forEach(t=>{const r="string"==typeof t?Ah(t,e,n):t;r&&i.push(r)}),i}(t,!0,jh()),i=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name));let i={provider:"",prefix:"",name:""};return t.forEach(t=>{if(i.name===t.name&&i.prefix===t.prefix&&i.provider===t.provider)return;i=t;const r=t.provider,o=t.prefix,s=t.name,a=n[r]||(n[r]=Object.create(null)),l=a[o]||(a[o]=$h(r,o));let c;c=s in l.icons?e.loaded:""===o||l.missing.has(s)?e.missing:e.pending;const d={provider:r,prefix:o,name:s};c.push(d)}),e}(n);if(!i.pending.length){let t=!0;return e&&setTimeout(()=>{t&&e(i.loaded,i.missing,i.pending,op)}),()=>{t=!1}}const r=Object.create(null),o=[];let s,a;return i.pending.forEach(t=>{const{provider:e,prefix:n}=t;if(n===a&&e===s)return;s=e,a=n,o.push($h(e,n));const i=r[e]||(r[e]=Object.create(null));i[n]||(i[n]=[])}),i.pending.forEach(t=>{const{provider:e,prefix:n,name:i}=t,o=$h(e,n),s=o.pendingIcons||(o.pendingIcons=new Set);s.has(i)||(s.add(i),r[e][n].push(i))}),o.forEach(t=>{const e=r[t.provider][t.prefix];e.length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,i=t.iconsToLoad;if(delete t.iconsToLoad,!i||!i.length)return;const r=t.loadIcon;if(t.loadIcons&&(i.length>1||!r))return void ap(t.loadIcons(i,n,e),e=>{sp(t,i,e)});if(r)return void i.forEach(i=>{ap(r(i,n,e),e=>{sp(t,[i],e?{prefix:n,icons:{[i]:e}}:null)})});const{valid:o,invalid:s}=function(t){const e=[],n=[];return t.forEach(t=>{(t.match(kh)?e:n).push(t)}),{valid:e,invalid:n}}(i);if(s.length&&sp(t,s,null),!o.length)return;const a=n.match(kh)?Xh(e):null;a?a.prepare(e,n,o).forEach(n=>{rp(e,n,e=>{sp(t,n.icons,e)})}):sp(t,o,null)}))}(t,e)}),e?function(t,e,n){const i=Vh++,r=Uh.bind(null,n,i);if(!e.pending.length)return r;const o={id:i,icons:e,callback:t,abort:r};return n.forEach(t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(o)}),r}(e,i,o):op},cp=t=>new Promise((e,n)=>{const i="string"==typeof t?Ah(t,!0):t;i?lp([i||t],r=>{if(r.length&&i){const t=Rh(i);if(t)return void e({...gh,...t})}n(t)}):n(t)});function dp(t){try{const e="string"==typeof t?JSON.parse(t):t;if("string"==typeof e.body)return{...e}}catch(t){}}let up=!1;try{up=0===navigator.vendor.indexOf("Apple")}catch(t){}const hp=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pp=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vp(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const i=t.split(hp);if(null===i||!i.length)return t;const r=[];let o=i.shift(),s=pp.test(o);for(;;){if(s){const t=parseFloat(o);isNaN(t)?r.push(o):r.push(Math.ceil(t*e*n)/n)}else r.push(o);if(o=i.shift(),void 0===o)return r.join("");s=!s}}function fp(t,e){const n={...gh,...t},i={...yh,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,i].forEach(t=>{const e=[],n=t.hFlip,i=t.vFlip;let s,a=t.rotate;switch(n?i?a+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):i&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:s=r.height/2+r.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:s=r.width/2+r.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}a%2==1&&(r.left!==r.top&&(s=r.left,r.left=r.top,r.top=s),r.width!==r.height&&(s=r.width,r.width=r.height,r.height=s)),e.length&&(o=function(t,e){const n=function(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const r=t.indexOf(">",i),o=t.indexOf("</"+e);if(-1===r||-1===o)break;const s=t.indexOf(">",o);if(-1===s)break;n+=t.slice(r+1,o).trim(),t=t.slice(0,i).trim()+t.slice(s+1)}return{defs:n,content:t}}(t);return i=n.defs,r=e+n.content+"</g>",i?"<defs>"+i+"</defs>"+r:r;var i,r}(o,'<g transform="'+e.join(" ")+'">'))});const s=i.width,a=i.height,l=r.width,c=r.height;let d,u;null===s?(u=null===a?"1em":"auto"===a?c:a,d=vp(u,l/c)):(d="auto"===s?l:s,u=null===a?vp(d,c/l):"auto"===a?c:a);const h={},p=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(h[t]=e.toString())};p("width",d),p("height",u);const v=[r.left,r.top,l,c];return h.viewBox=v.join(" "),{attributes:h,viewBox:v,body:o}}function _p(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function gp(t){return'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ").replace(/:/g,"%3A").replace(/\//g,"%2F")}(t)}(t)+'")'}let mp=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();function bp(t){mp=t}function yp(){return mp}const wp={prepare:(t,e,n)=>{const i=[],r=function(t,e){const n=Qh(t);if(!n)return 0;let i;if(n.maxURL){let t=0;n.resources.forEach(e=>{t=Math.max(t,e.length)});const r=e+".json?icons=";i=n.maxURL-t-n.path.length-r.length}else i=0;return i}(t,e),o="icons";let s={type:o,provider:t,prefix:e,icons:[]},a=0;return n.forEach((n,l)=>{a+=n.length+1,a>=r&&l>0&&(i.push(s),s={type:o,provider:t,prefix:e,icons:[]},a=n.length),s.icons.push(n)}),i.push(s),i},send:(t,e,n)=>{if(!mp)return void n("abort",424);let i=function(t){if("string"==typeof t){const e=Qh(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");i+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;i+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;mp(t+i).then(t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout(()=>{n(function(t){return 404===t}(e)?"abort":"next",e)})}).then(t=>{"object"==typeof t&&null!==t?setTimeout(()=>{n("success",t)}):setTimeout(()=>{404===t?n("abort",t):n("next",r)})}).catch(()=>{n("next",r)})}};function xp(t,e,n){$h(n||"",e).loadIcons=t}function Cp(t,e,n){$h(n||"",e).loadIcon=t}const kp="data-style";let Ap="";const Sp={};function Ep(t){return":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+Ap}function Op(t){Ap=t,Sp.inline?.replaceSync(Ep(!0)),Sp.block?.replaceSync(Ep(!1))}function zp(t,e){if(function(t){return"adoptedStyleSheets"in t&&"function"==typeof CSSStyleSheet&&"function"==typeof CSSStyleSheet.prototype.replaceSync}(t)){const n=function(t){const e=t?"inline":"block";let n=Sp[e];return n||(n=Sp[e]=new CSSStyleSheet,n.replaceSync(Ep(t))),n}(e),i=t.adoptedStyleSheets;if(i.includes(n))return;return void(t.adoptedStyleSheets=i.filter(t=>t!==Sp.inline&&t!==Sp.block).concat(n))}let n=Array.from(t.childNodes).find(t=>t.hasAttribute&&t.hasAttribute(kp));n||(n=document.createElement("style"),n.setAttribute(kp,kp),t.appendChild(n)),n.textContent=Ep(e)}function Mp(){let t;Kh("",wp),jh(!0);try{t=window}catch(t){}if(t){if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach(t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!Fh(t))&&console.error(n)}catch(t){console.error(n)}})}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const n="IconifyProviders["+t+"] is invalid.";try{const i=e[t];if("object"!=typeof i||!i||void 0===i.resources)continue;Zh(t,i)||console.error(n)}catch(t){console.error(n)}}}}return{iconLoaded:Hh,getIcon:qh,listIcons:Ph,addIcon:Bh,addCollection:Fh,calculateSize:vp,buildIcon:fp,iconToHTML:_p,svgToURL:gp,loadIcons:lp,loadIcon:cp,addAPIProvider:Zh,setCustomIconLoader:Cp,setCustomIconsLoader:xp,appendCustomStyle:Op,_api:{getAPIConfig:Qh,setAPIModule:Kh,sendAPIQuery:rp,setFetch:bp,getFetch:yp,listAPIProviders:Jh}}}const Tp={"background-color":"currentColor"},Ip={"background-color":"transparent"},Lp={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},$p={"-webkit-mask":Tp,mask:Tp,background:Ip};for(const t in $p){const e=$p[t];for(const n in Lp)e[t+"-"+n]=Lp[n]}function Np(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}let Pp;function Dp(t){return Array.from(t.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return"SPAN"===e||"SVG"===e})}function jp(t,e){const n=e.icon.data,i=e.customisations,r=fp(n,i);i.preserveAspectRatio&&(r.attributes.preserveAspectRatio=i.preserveAspectRatio);const o=e.renderedMode;let s;s="svg"===o?function(t){const e=document.createElement("span"),n=t.attributes;let i="";n.width||(i="width: inherit;"),n.height||(i+="height: inherit;"),i&&(n.style=i);const r=_p(t.body,n);return e.innerHTML=function(t){return void 0===Pp&&function(){try{Pp=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){Pp=null}}(),Pp?Pp.createHTML(t):t}(r),e.firstChild}(r):function(t,e,n){const i=document.createElement("span");let r=t.body;-1!==r.indexOf("<a")&&(r+="\x3c!-- "+Date.now()+" --\x3e");const o=t.attributes,s=gp(_p(r,{...o,width:e.width+"",height:e.height+""})),a=i.style,l={"--svg":s,width:Np(o.width),height:Np(o.height),...n?Tp:Ip};for(const t in l)a.setProperty(t,l[t]);return i}(r,{...gh,...n},"mask"===o);const a=Dp(t);a?"SPAN"===s.tagName&&a.tagName===s.tagName?a.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,a):t.appendChild(s)}function Rp(t,e,n){return{rendered:!1,inline:e,icon:t,lastRender:n&&(n.rendered?n:n.lastRender)}}const Bp=function(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch(t){return}if(!e||!n)return;const i=e.get(t);if(i)return i;const r=["icon","mode","inline","noobserver","width","height","rotate","flip"],o=class extends n{_shadowRoot;_initialised=!1;_state;_checkQueued=!1;_connected=!1;_observer=null;_visible=!0;constructor(){super();const t=this._shadowRoot=this.attachShadow({mode:"open"}),e=this.hasAttribute("inline");zp(t,e),this._state=Rp({value:""},e),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return r.slice(0)}attributeChangedCallback(t){switch(t){case"inline":{const t=this.hasAttribute("inline"),e=this._state;t!==e.inline&&(e.inline=t,zp(this._shadowRoot,t));break}case"noobserver":this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break;default:this._queueCheck()}}get icon(){const t=this.getAttribute("icon");if(t&&"{"===t.slice(0,1))try{return JSON.parse(t)}catch(t){}return t}set icon(t){"object"==typeof t&&(t=JSON.stringify(t)),this.setAttribute("icon",t)}get inline(){return this.hasAttribute("inline")}set inline(t){t?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(t){t?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const t=this._state;if(t.rendered){const e=this._shadowRoot;if("svg"===t.renderedMode)try{return void e.lastChild.setCurrentTime(0)}catch(t){}jp(e,t)}}get status(){const t=this._state;return t.rendered?"rendered":null===t.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const t=this._state,e=this.getAttribute("icon");if(e!==t.icon.value)return void this._iconChanged(e);if(!t.rendered||!this._visible)return;const n=this.getAttribute("mode"),i=Ch(this);t.attrMode===n&&!function(t,e){for(const n in xh)if(t[n]!==e[n])return!0;return!1}(t.customisations,i)&&Dp(this._shadowRoot)||this._renderIcon(t.icon,i,n)}_iconChanged(t){const e=function(t,e){if("object"==typeof t)return{data:dp(t),value:t};if("string"!=typeof t)return{value:t};if(t.includes("{")){const e=dp(t);if(e)return{data:e,value:t}}const n=Ah(t,!0,!0);if(!n)return{value:t};const i=Rh(n);if(void 0!==i||!n.prefix)return{value:t,name:n,data:i};const r=lp([n],()=>e(t,n,Rh(n)));return{value:t,name:n,loading:r}}(t,(t,e,n)=>{const i=this._state;if(i.rendered||this.getAttribute("icon")!==t)return;const r={value:t,name:e,data:n};r.data?this._gotIconData(r):i.icon=r});e.data?this._gotIconData(e):this._state=Rp(e,this._state.inline,this._state)}_forceRender(){if(!this._visible){const t=Dp(this._shadowRoot);return void(t&&this._shadowRoot.removeChild(t))}this._queueCheck()}_gotIconData(t){this._checkQueued=!1,this._renderIcon(t,Ch(this),this.getAttribute("mode"))}_renderIcon(t,e,n){const i=function(t,e){switch(e){case"svg":case"bg":case"mask":return e}return"style"===e||!up&&-1!==t.indexOf("<a")?-1===t.indexOf("currentColor")?"bg":"mask":"svg"}(t.data.body,n),r=this._state.inline;jp(this._shadowRoot,this._state={rendered:!0,icon:t,inline:r,customisations:e,attrMode:n,renderedMode:i})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(t=>{const e=t.some(t=>t.isIntersecting);e!==this._visible&&(this._visible=e,this._forceRender())}),this._observer.observe(this)}catch(t){if(this._observer){try{this._observer.disconnect()}catch(t){}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};r.forEach(t=>{t in o.prototype||Object.defineProperty(o.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){null!==e?this.setAttribute(t,e):this.removeAttribute(t)}})});const s=Mp();for(const t in s)o[t]=o.prototype[t]=s[t];return e.define(t,o),o}()||Mp(),{iconLoaded:Fp,getIcon:Hp,listIcons:qp,addIcon:Up,addCollection:Vp,calculateSize:Wp,buildIcon:Kp,iconToHTML:Xp,svgToURL:Yp,loadIcons:Gp,loadIcon:Zp,setCustomIconLoader:Qp,setCustomIconsLoader:Jp,addAPIProvider:tv,_api:ev}=Bp;class nv{}function iv(t,e){e=e===y?rv:e;var n=document.createElement("iconify-icon");return n.icon=t,e(n),n}function rv(t){return w}var ov,sv,av,lv,cv,dv,uv,hv,pv,vv,fv,_v,gv,mv,bv,yv,wv,xv,Cv,kv,Av,Sv,Ev,Ov,zv,Mv,Tv,Iv,Lv,$v,Nv,Pv,Dv,jv,Rv,Bv,Fv,Hv,qv,Uv,Vv,Wv,Kv,Xv,Yv,Gv,Zv,Qv,Jv;Fn(nv,"IconifyIconTagName"),new nv;class tf{constructor(){ov=this,this.xu_1=[],this.yu_1=new _o(Ui(),Ui())}}class ef extends go{constructor(t,e,n,i,r){Nf(),t=t===y?"ktjs-demo-layout":t,e=e===y?null:e,n=n===y?Nf().xu_1:n,i=i===y||i,r=r===y?Nf().yu_1:r,super(gf,t,e,n,i,r)}}class nf{constructor(){sv=this,this.zu_1=[],this.av_1=new _o(Ui(),Ui())}}class rf extends go{constructor(t,e,n,i,r){Pf(),t=t===y?"ktjs-demo-page":t,e=e===y?null:e,n=n===y?Pf().zu_1:n,i=i===y||i,r=r===y?Pf().av_1:r,super(Af,t,e,n,i,r)}}class of{constructor(){av=this,this.bv_1=[],this.cv_1=new _o(Ui(),Ui())}}class sf extends go{constructor(t,e,n,i,r){Df(),t=t===y?"ktjs-grid":t,e=e===y?null:e,n=n===y?Df().bv_1:n,i=i===y||i,r=r===y?Df().cv_1:r,super(Ef,t,e,n,i,r)}}class af{constructor(){lv=this,this.dv_1=[],this.ev_1=new _o(Ui(),Ui())}}class lf extends go{constructor(t,e,n,i,r){jf(),t=t===y?"ktjs-readout":t,e=e===y?null:e,n=n===y?jf().dv_1:n,i=i===y||i,r=r===y?jf().ev_1:r,super(zf,t,e,n,i,r)}}class cf{constructor(){cv=this,this.fv_1=[],this.gv_1=new _o(Ui(),Ui())}}class df extends go{constructor(t,e,n,i,r){Rf(),t=t===y?"ktjs-section-block":t,e=e===y?null:e,n=n===y?Rf().fv_1:n,i=i===y||i,r=r===y?Rf().gv_1:r,super(Tf,t,e,n,i,r)}}class uf{constructor(t){this.hv_1=t,this.iv_1=at.i1();var e=Se(this.hv_1.lv_1);this.jv_1=this.hv_1.nv(e)}ov(t,e){var n,i=this.iv_1,r=new we(t,e,(n=t,t=>(function(t,e){for(var n=t.firstChild;null!=n;){var i=n.nextSibling;On(n.nodeType,Node.TEXT_NODE)&&t.removeChild(n),n=i}t.insertBefore(document.createTextNode(e),t.firstChild)}(n,t),w)));return i.z(r),t}pv(t){this.jv_1=this.hv_1.nv(t);for(var e=this.iv_1.s();e.t();){var n=e.u(),i=n.aa(),r=n.ba(),o=n.pb(),s=r(this.jv_1);o(s);var a=0===bn(s);i.toggleAttribute("hidden",a)}}}class hf{constructor(){dv=this,this.qv_1="en",this.rv_1="zh-Hans"}}class pf{constructor(t,e,n){if(t=t===y?ji([Bf().qv_1,Bf().rv_1]):t,e=e===y?"ktjs-demo-lang":e,n=n===y?Se(t):n,this.sv_1=t,this.tv_1=e,this.sv_1.a1())throw Tt.r(En("a site needs at least one language"));var i,r=this.sv_1;t:if(Zn(r,F)&&r.a1())i=!1;else{for(var o=r.s();o.t();)if(On(o.u(),n)){i=!0;break t}i=!1}if(!i){var s="the initial language "+n+" is not registered";throw Tt.r(En(s))}var a=function(t){var e;try{e=localStorage.getItem(t.tv_1)}catch(t){if(!(t instanceof Error))throw t;e=ar(t)}var n,i=e,r=sr(i)?null:i;if(null==r)n=null;else{var o;t:{for(var s=t.sv_1.s();s.t();){var a=s.u();if(Ff(a)===r){o=a;break t}}o=null}n=o}return n}(this);this.uv_1=a??n,this.vv_1=at.i1()}wv(){Hf(this);for(var t=this.vv_1.s();t.t();)t.u()(this.uv_1)}xv(t){if(On(t,this.uv_1))return w;this.uv_1=t,function(t,e){try{localStorage.setItem(t.tv_1,e)}catch(t){if(!(t instanceof Error))throw t;ar(t)}}(this,t),Hf(this);for(var e=this.vv_1.s();e.t();)e.u()(t)}yv(t){this.vv_1.z(t)}}class vf{constructor(t,e,n,i,r,o,s,a,l,c,d,u,h){this.zv_1=t,this.aw_1=e,this.bw_1=n,this.cw_1=i,this.dw_1=r,this.ew_1=o,this.fw_1=s,this.gw_1=a,this.hw_1=l,this.iw_1=c,this.jw_1=d,this.kw_1=u,this.lw_1=h}}class ff{constructor(t){this.kv_1=t,this.lv_1=Me(this.kv_1.t1()),this.mv_1=function(t){if(Zn(t,q))return Se(t);var e=t.s();if(!e.t())throw It.n("Collection is empty.");return e.u()}(this.kv_1.u1())}nv(t){return this.kv_1.s1(t)??this.mv_1}}class _f extends ef{constructor(){uv=null,super(),uv=this}}class gf extends fo{constructor(){var t;l_(),super(),this.ow_1=function(t){t=t===y?Ru:t;var e=document.createElement("vaadin-app-layout");return t(e),e}(),this.pw_1=function(t){t=t===y?Bu:t;var e=document.createElement("vaadin-drawer-toggle");return t(e),e}(c_),this.qw_1=Eo("h1",d_),this.rw_1=Eo("a",(t=this,e=>(e.classList.add(A_()),e.setAttribute("href","#/"),e.append(t.qw_1),w))),this.sw_1=Eo("span",u_),this.tw_1=Yu(h_),this.uw_1=Yu(p_),this.vw_1=function(t){t=t===y?Fu:t;var e=document.createElement("vaadin-breadcrumbs");return t(e),e}(),this.ww_1=Hu(),this.xw_1=Hu(),this.yw_1=Yu(v_),this.zw_1=th(f_),this.ax_1=th(__),this.bx_1=th(g_),this.cx_1=function(t){t=t===y?ih:t;var e=document.createElement("vaadin-side-nav");return t(e),e}(),this.dx_1=ch(m_),this.kx_1=St.l8(),this.lx_1=St.l8(),this.mx_1=St.l8(),this.nx_1=St.l8(),this.ox_1=null,this.px_1=St.l8(),this.ow_1.primarySection="navbar",this.cx_1.setAttribute("slot","drawer"),this.vw_1.append(this.ww_1,this.xw_1),this.tw_1.append(this.pw_1,this.rw_1,this.sw_1,this.vw_1),this.uw_1.append(this.tw_1,this.yw_1),this.zw_1.dataset.menu="docs",this.ax_1.dataset.menu="lang",this.bx_1.dataset.menu="theme",n_(this,this.zw_1),n_(this,this.ax_1),n_(this,this.bx_1),this.ow_1.append(this.uw_1,this.cx_1,this.dx_1),$o(this,[cg(),(P_(),xv)]).append(this.ow_1)}py(t){this.ex_1=t.ux_1,this.fx_1=t.vx_1,this.gx_1=t.wx_1,this.hx_1=t,this.ix_1=t.xx_1,function(t){var e=Kf(t).cy_1;if(null==e)return w;var n,i=Eo("img",(n=e,t=>(t.classList.add(S_()),t.setAttribute("src",n),t.setAttribute("alt",""),t.setAttribute("aria-hidden","true"),w)));t.rw_1.insertBefore(i,t.qw_1)}(this),document.body.style.margin="0",this.sw_1.textContent=t.yx_1;var e,n,i=0===bn(t.yx_1);this.sw_1.toggleAttribute("hidden",i),function(t){for(var e=Yf(t,Vf(t).uv_1),n=Uf(t).ey_1.s();n.t();){var i=n.u(),r=Uf(t).fy(i);if(1!==r.c1()){var o=rh(b_),s=Eo("span"),a=e.kw_1.s1(i.gy_1);s.textContent=a??i.gy_1;var l=i.hy_1;null==l||o.append(Qf(0,l)),o.append(s);for(var c=r.s();c.t();){var d=c.u();o.append(Zf(t,d,!0))}var u=t.mx_1,h=i.gy_1;u.d4(h,s),t.cx_1.append(o)}else t.cx_1.append(Zf(t,Oe(r),!1,i.hy_1))}}(this),(e=this).yw_1.append(e.zw_1,e.ax_1,e.bx_1),Vf(this).yv((n=this,t=>(a_(n),w)));var r=Ee(Uf(this).dy_1),o=(null==r?null:r.qx_1)??"overview";this.jx_1=new xf(o,function(t){return e=>(function(t,e){var n=Uf(t).ly(e)??Ee(Uf(t).dy_1);if(null==n)return w;var i,r=n,o=t.nx_1,s=r.qx_1,a=o.s1(s);if(null==a){var l=r.tx_1();l.my(Vf(t).uv_1);var c=l;o.d4(s,c),i=c}else i=a;var d=i;if(t.ox_1!==r.qx_1){t.ox_1=r.qx_1;for(var u=t.kx_1.v1().s();u.t();){var h=u.u(),p=h.o1(),v=h.p1();p===r.qx_1?v.setAttribute("current",""):v.removeAttribute("current")}document.title=Gf(t,r,Vf(t).uv_1)+" · "+Yf(t,Vf(t).uv_1).zv_1}s_(t,r),window.innerWidth<800&&(t.ow_1.drawerOpened=!1),t.dx_1.firstElementChild!==d.ny()&&t.dx_1.replaceChildren(d.ny())}(t,e),w)}(this)),this.ow_1.drawerOpened=!0,a_(this),Xf(this).sy()}oy(t){Xf(this).oy(t)}}class mf{constructor(t,e,n,i,r,o,s,a,l){r=r===y?"":r,o=o===y?null:o,s=s===y?null:s,a=a===y?null:a,l=l===y?null:l,this.ux_1=t,this.vx_1=e,this.wx_1=n,this.xx_1=i,this.yx_1=r,this.zx_1=o,this.ay_1=s,this.by_1=a,this.cy_1=l}}class bf{constructor(t){this.dy_1=t;for(var e=this.dy_1,n=at.y(Fi(e,10)),i=e.s();i.t();){var r=i.u().rx_1;n.z(r)}this.ey_1=ze(n)}ly(t){var e;t:{for(var n=this.dy_1.s();n.t();){var i=n.u();if(i.qx_1===t){e=i;break t}}e=null}return e}fy(t){for(var e=this.dy_1,n=at.i1(),i=e.s();i.t();){var r=i.u();On(r.rx_1,t)&&n.z(r)}return n}}class yf{constructor(t,e,n,i){n=n===y?null:n,this.qx_1=t,this.rx_1=e,this.sx_1=n,this.tx_1=i}}class wf{constructor(t,e){e=e===y?null:e,this.gy_1=t,this.hy_1=e}}class xf{constructor(t,e){t=t===y?"overview":t,this.qy_1=t,this.ry_1=e}bz(t){var e=nr(nr(t,"#"),"/"),n=En(function(t){var e=0,n=bn(t)-1|0,i=!1;t:for(;e<=n;){var r=Ti(_n(t,i?n:e));if(i){if(!r)break t;n=n-1|0}else r?e=e+1|0:i=!0}return yn(t,e,n+1|0)}(Jn(e)?e:Pn()));return 0===bn(n)?this.qy_1:n}az(){return this.bz(location.hash)}cz(t){return"#/"+t}oy(t){var e=this.cz(t);location.hash===e?this.ry_1(t):location.hash=e}sy(){var t;vh(window,"hashchange",(t=this,()=>(t.ry_1(t.az()),w))),this.ry_1(this.az())}}class Cf{dz(t){var e;return Eo("p",(e=t,t=>(t.textContent=e,w)))}ez(t,e){return t=t===y?"":t,e===y?this.dz(t):e.dz.call(this,t)}fz(t){var e;return Eo("ul",(e=t,t=>{for(var n=e.s();n.t();)To(t,Eo("li",D_(n.u())));return w}))}gz(t){var e=Yu(j_);return e.classList.add(Q_()),0!==t.length&&function(){var n=e;return n.append.apply(n,[].slice.call(t.slice()))}.call(this),e}hz(t,e){var n=Wu();return sh(n,Xu().ft_1,[]),Mo(n).backgroundColor=lg().ty_1,null!=t&&n.append(this.iz(t)),0!==e.length&&function(){var t=n;return t.append.apply(t,[].slice.call(e.slice()))}.call(this),n}iz(t){var e;return Eo("p",(e=t,t=>(t.classList.add(Z_()),t.textContent=e,w)))}}class kf extends rf{constructor(){Av=null,super(),Av=this,this.mz_1=(t,e)=>new URL(t,e).href}}class Af extends fo{constructor(){R_(),super(),this.pz_1=Eo("h1",B_),this.qz_1=Eo("p",F_),this.rz_1=Eo("div",H_);var t=ch(q_);t.style.setProperty("width","100%"),this.sz_1=t,this.tz_1=$o(this,[cg(),ng()]),this.uz_1=at.i1(),this.tz_1.append(this.pz_1,this.qz_1,this.rz_1,this.sz_1)}ny(){return this}my(t){}vz(t){this.pz_1.textContent=t}wz(t){this.qz_1.textContent=t}xz(t){this.uz_1.z(t);var e=Un([[cg(),ng()],ti(this.uz_1)]);this.tz_1.adoptedStyleSheets=e}}class Sf extends sf{constructor(){Sv=null,super(),Sv=this}}class Ef extends fo{constructor(){U_(),super()}a10(t){this.classList.add(J_()),this.style.setProperty("grid-template-columns","repeat(auto-fill, minmax("+t+"px, 1fr))"),this.style.setProperty("gap","12px"),this.style.setProperty("width","100%")}b10(t){0!==t.length&&function(){return this.append.apply(this,[].slice.call(t.slice()))}.call(this)}}class Of extends lf{constructor(){Uv=null,super(),Uv=this}}class zf extends fo{constructor(){og(),super()}e10(){return this}f10(t){this.classList.add(tg()),this.textContent=t}g10(t,e){var n;return t=t===y?"":t,e===y?(this.f10(t),n=w):n=e.f10.call(this,t),n}h10(t){this.textContent=t}}class Mf extends df{constructor(){Vv=null,super("ktjs-demo-section"),Vv=this}}class Tf extends fo{constructor(){sg(),super();var t=Eo("h2");t.classList.add(Y_()),this.k10_1=t;var e=Eo("p");e.classList.add(G_()),this.l10_1=e,this.m10_1=ch(ag)}e10(){return this}n10(t,e){this.classList.add(X_()),this.style.setProperty("width","100%"),this.m10_1.style.setProperty("width","100%"),this.append(this.k10_1,this.l10_1,this.m10_1),this.o10(t,e)}p10(t,e,n){var i;return t=t===y?"":t,e=e===y?"":e,n===y?(this.n10(t,e),i=w):i=n.n10.call(this,t,e),i}o10(t,e){this.k10_1.textContent=t,this.l10_1.textContent=e;var n=0===bn(e);this.l10_1.toggleAttribute("hidden",n)}}class If{constructor(){Wv=this,this.ty_1="var("+En("--lumo-base-color")+","+En("rgb(255 255 255)")+")",this.uy_1="var("+En("--lumo-contrast-5pct")+","+En("rgb(246 247 251)")+")",this.vy_1="var("+En("--lumo-contrast-10pct")+","+En("rgb(236 239 244)")+")",this.wy_1="var("+En("--lumo-contrast-20pct")+","+En("rgb(223 228 234)")+")",this.xy_1="var("+En("--lumo-body-text-color")+","+En("rgb(35 39 45)")+")",this.yy_1="var("+En("--lumo-secondary-text-color")+","+En("rgb(87 98 110)")+")",this.zy_1="var("+En("--lumo-primary-text-color")+","+En("rgb(0 92 207)")+")"}}class Lf{constructor(t){t=t===y?"ktjs-demo-theme":t,this.iy_1=t;var e=function(t){var e;try{e=localStorage.getItem(t.iy_1)}catch(t){if(!(t instanceof Error))throw t;e=ar(t)}var n,i,r=e,o=sr(r)?null:r;if(null==o)n=null;else{var s;t:{for(var a=(i=void 0,hg(),null==Jv&&(hg(),i=[pg(),vg(),fg()],Jv=le.ja(i)),Jv).s();a.t();){var l=a.u();if(l.w1_1.toLowerCase()===o){s=l;break t}}s=null}n=s}return n}(this);this.jy_1=e??fg()}q10(){this.ky(this.jy_1)}ky(t){this.jy_1=t;var e=document.documentElement;switch(t.x1_1){case 0:e.removeAttribute("theme");break;case 1:e.setAttribute("theme","dark");break;case 2:e.setAttribute("theme","light-dark");break;default:Nn()}try{var n=localStorage,i=t.w1_1.toLowerCase();n.setItem(this.iy_1,i)}catch(t){if(!(t instanceof Error))throw t;ar(t)}}}class $f extends K{}function Nf(){return ov===y&&new tf,ov}function Pf(){return sv===y&&new nf,sv}function Df(){return av===y&&new of,av}function jf(){return lv===y&&new af,lv}function Rf(){return cv===y&&new cf,cv}function Bf(){return dv===y&&new hf,dv}function Ff(t){return t}function Hf(t){document.documentElement.setAttribute("lang",t.uv_1)}function qf(t){if(0===t.length)throw Tt.r(En("texts(...) needs at least one language"));return new ff(qi(e=t.slice(),St.m8(e.length)));var e}function Uf(t){var e=t.ex_1;if(null!=e)return e;xe("menu")}function Vf(t){var e=t.fx_1;if(null!=e)return e;xe("language")}function Wf(t){var e=t.gx_1;if(null!=e)return e;xe("theme")}function Kf(t){var e=t.hx_1;if(null!=e)return e;xe("config")}function Xf(t){var e=t.jx_1;if(null!=e)return e;xe("router")}function Yf(t,e){return function(t){var e=t.ix_1;if(null!=e)return e;xe("texts")}(t).nv(e)}function Gf(t,e,n){return Yf(t,n).lw_1.s1(e.qx_1)??e.qx_1}function Zf(t,e,n,i){i=i===y?null:i;var r,o,s,a=rh(),l=Eo("span",(r=t,o=e,t=>(t.textContent=Gf(r,o,Vf(r).uv_1),w)));if(null==i){var c=e.sx_1;s=n?null:c}else s=i;var d,u,h=s;null==h||a.append(Qf(0,h)),a.append(l),a.dataset.route=e.qx_1,n&&a.setAttribute("slot","children"),a.setAttribute("role","link"),a.tabIndex=0,d=new hh(a,"click"),u=function(t,e){return n=>(t.oy(e.qx_1),w)}(t,e),ph(d,u);var p=t.kx_1,v=e.qx_1;p.d4(v,a);var f=t.lx_1,_=e.qx_1;return f.d4(_,l),a}function Qf(t,e){return iv(e,y_)}function Jf(t,e,n,i,r){var o,s,a,l;return Eo("vaadin-menu-bar-item",(o=e,s=n,a=r,l=i,t=>{bn(o)>0&&(t.dataset.action=o),To(t,iv(s,w_));var e=To(t,Eo("span",function(t){return e=>(e.textContent=t,w)}(l)));if(a){var n=Mo(e);n.fontWeight=600,n.color="var(--lumo-primary-text-color)"}return w}))}function t_(t,e,n,i,r){var o={},s=Jf(0,"",n,i,!1);return s.dataset.menu=e,o.component=s,o.children=r,o}function e_(t,e,n,i,r,o){r=r!==y&&r,t.px_1.d4(e,o);var s={};return s.component=Jf(0,e,n,i,r),s}function n_(t,e){var n;vh(e,"item-selected",(n=t,t=>{var e=t.detail.value.component,i=e instanceof HTMLElement?e:null,r=null==i?null:i.dataset,o=null==r?null:r.action;if(null==o);else{var s=n.px_1.s1(o);null==s||s()}return w}))}function i_(t){var e,n=Yf(t,Vf(t).uv_1);switch(Wf(t).jy_1.x1_1){case 0:e="lucide:sun";break;case 1:e="lucide:moon";break;case 2:e="lucide:monitor";break;default:Nn()}var i,r=e,o=Wf(t).jy_1.equals(pg()),s=e_(t,"theme:light","lucide:sun",n.hw_1,o,(i=t,()=>(r_(i,pg()),w))),a=Wf(t).jy_1.equals(vg()),l=e_(t,"theme:dark","lucide:moon",n.iw_1,a,function(t){return()=>(r_(t,vg()),w)}(t)),c=Wf(t).jy_1.equals(fg()),d=[s,l,e_(t,"theme:system","lucide:monitor",n.jw_1,c,C_(t))],u=[t_(0,"theme",r,n.cw_1,d)];t.bx_1.items=u}function r_(t,e){Wf(t).ky(e),i_(t)}function o_(t,e){window.open(e,"_blank")}function s_(t,e){var n=Yf(t,Vf(t).uv_1).kw_1.s1(e.rx_1.gy_1);t.ww_1.textContent=n??e.rx_1.gy_1;var i=Ee(Uf(t).fy(e.rx_1));null==i||(t.ww_1.path="#/"+i.qx_1),t.xw_1.textContent=Gf(t,e,Vf(t).uv_1),t.xw_1.removeAttribute("path")}function a_(t){var e=Yf(t,Vf(t).uv_1);t.qw_1.textContent=e.zv_1;for(var n=Uf(t).ey_1.s();n.t();){var i=n.u(),r=t.mx_1.s1(i.gy_1);if(null==r);else{var o=e.kw_1.s1(i.gy_1);r.textContent=o??i.gy_1}}for(var s=Uf(t).dy_1.s();s.t();){var a=s.u(),l=t.lx_1.s1(a.qx_1);null==l||(l.textContent=Gf(t,a,Vf(t).uv_1))}!function(t){!function(t){var e,n=Yf(t,Vf(t).uv_1),i=at.i1(),r=Kf(t).zx_1;if(null==r);else{var o=e_(t,"docs:site","lucide:book",n.ew_1,y,(e=r,()=>(o_(0,e),w)));i.z(o)}var s=Kf(t).ay_1;if(null==s);else{var a=e_(t,"docs:api","lucide:file-code",n.fw_1,y,function(t,e){return()=>(o_(0,e),w)}(0,s));i.z(a)}var l=Kf(t).by_1;if(null==l);else{var c=e_(t,"docs:source","lucide:github",n.gw_1,y,function(t,e){return()=>(o_(0,e),w)}(0,l));i.z(c)}if(t.zw_1.toggleAttribute("hidden",i.a1()),i.a1())return w;var d=ti(i),u=[t_(0,"docs","lucide:book-open",n.dw_1,d)];t.zw_1.items=u}(t),function(t){for(var e=Yf(t,Vf(t).uv_1),n=Vf(t).sv_1,i=at.y(Fi(n,10)),r=n.s();r.t();){var o=r.u(),s=e_(t,"lang:"+Ff(o),"lucide:languages",Yf(t,o).aw_1,On(o,Vf(t).uv_1),x_(t,o));i.z(s)}var a=ti(i),l=[t_(0,"lang","lucide:languages",e.bw_1,a)];t.ax_1.items=l}(t),i_(t)}(t);for(var c=t.nx_1.u1().s();c.t();)c.u().my(Vf(t).uv_1);var d=t.ox_1,u=null==d?null:Uf(t).ly(d);null!=u?(s_(t,u),document.title=Gf(t,u,Vf(t).uv_1)+" · "+e.zv_1):document.title=e.zv_1}function l_(){return uv===y&&new _f,uv}function c_(t){return t.ariaLabel="Toggle navigation",sh(t,(Iu===y&&new Au,Iu).dt_1,[]),t.classList.add(z_()),w}function d_(t){return t.classList.add(k_()),w}function u_(t){return t.classList.add(E_()),w}function h_(t){return sh(t,Zu().nt_1,[]),t.classList.add(M_(),Qu().st_1),w}function p_(t){return sh(t,Zu().nt_1,[]),t.classList.add(O_(),Qu().st_1,Ju().xt_1),t.setAttribute("slot","navbar"),w}function v_(t){return sh(t,Zu().nt_1,[]),t.classList.add(T_(),Qu().st_1),w}function f_(t){return sh(t,nh().ku_1,[]),w}function __(t){return sh(t,nh().ku_1,[]),w}function g_(t){return sh(t,nh().ku_1,[]),w}function m_(t){return function(t,e,n){for(var i=Un([[e],n]),r=at.y(i.length),o=0,s=i.length;o<s;){var a=i[o];o=o+1|0;var l=lh(a);r.z(l)}ah(t,r)}(t,uh().qu_1,[uh().tu_1]),w}function b_(t){return t.expanded=!0,w}function y_(t){return t.setAttribute("slot","prefix"),t.classList.add(I_()),t.setAttribute("aria-hidden","true"),t.setAttribute("noobserver",""),w}function w_(t){t.setAttribute("aria-hidden","true");var e=Mo(t);return e.fontSize=En(18)+"px",e.marginRight=En(8)+"px",t.setAttribute("noobserver",""),w}function x_(t,e){return()=>(Vf(t).xv(e),w)}function C_(t){return()=>(r_(t,fg()),w)}function k_(){return L_(),hv}function A_(){return L_(),pv}function S_(){return L_(),vv}function E_(){return L_(),fv}function O_(){return L_(),_v}function z_(){return L_(),gv}function M_(){return L_(),mv}function T_(){return L_(),bv}function I_(){return L_(),yv}function L_(){wv||(wv=!0,hv="layout__title",pv="layout__title-link",vv="layout__logo",fv="layout__version",_v="layout__topbar",gv="layout__toggle",mv="layout__topbar-start",bv="layout__actions",yv="layout__nav-icon")}function $_(t){P_();var e={display:"block"};e.height=En(100)+"vh",e.backgroundColor=lg().ty_1,e.color=lg().xy_1,e.fontSize=En(14)+"px",e["--vaadin-app-layout-drawer-width"]=En(264)+"px",e["--lumo-font-size-m"]=En(14)+"px",e["--lumo-border-radius-s"]=En(.25)+"em",e["--lumo-border-radius"]=En(.5)+"em",e["--lumo-border-radius-m"]=En(.5)+"em",e["--lumo-border-radius-l"]=En(1)+"em",t[":host"]=e;t["."+En(Qu().st_1)]={alignItems:"center"};t["."+En(Ju().xt_1)]={justifyContent:"space-between"};var n="."+En(A_()),i={display:"flex",alignItems:"center"};i.columnGap=En(8)+"px",i.textDecorationLine="none",i.color=lg().xy_1,i.flexShrink=0,t[n]=i;var r="."+En(k_()),o={},s=En(0)+"px",a=En(0)+"px";o.margin=En(s)+" "+En(a),o.fontSize=En(18)+"px",o.color=lg().xy_1,o.whiteSpace="nowrap",o.flexShrink=0,o.fontWeight=700,t[r]=o;var l,c="("+En((So(),Dr))+":"+En("text")+")";!function(t,e,n){var i=En("@supports")+" "+En(e),r={};n(r),t[i]=r}(t,(l="("+En("background-clip")+":"+En("text")+")",En(c)+" or "+En(l)),N_);var d="."+En(E_()),u={};u.fontSize=En(11)+"px",u.color=lg().yy_1,u.whiteSpace="nowrap",u.flexShrink=0,u.marginLeft=En(8)+"px",t[d]=u;var h="."+En(O_()),p={};p.width=En(100)+"%",p.paddingLeft=En(8)+"px",p.paddingRight=En(12)+"px",t[h]=p;var v="."+En(z_()),f={};f.marginInlineStart=En(0)+"px",f.marginInlineEnd=En(0)+"px",f.paddingInlineStart=En(0)+"px",f.paddingInlineEnd=En(0)+"px",t[v]=f;var _="."+En(M_()),g={};g.minWidth=En(0)+"px",t[_]=g;t["."+En(T_())]={flexShrink:0};var m="."+En(S_()),b={};b.height=En(28)+"px",b.width="auto",b.flexShrink=0,t[m]=b;var y="."+En(I_()),x={};x.fontSize=En(18)+"px",t[y]=x;var C={};return C.width=En(100)+"%",t["vaadin-vertical-layout > *"]=C,w}function N_(t){P_();var e,n="."+En(k_()),i={},r=En(100)+"deg",o=[ko("var("+En("--lumo-primary-color")+")"),ko("#2ec4b6")];return i.backgroundImage="linear-gradient("+En(r)+","+Ce(o,",")+")",e=i,So(),e.WebkitBackgroundClip="text",i.backgroundClip="text",i.color="transparent",i.paddingBottom=En(.12)+"em",t[n]=i,w}function P_(){Cv||(Cv=!0,xv=yo($_))}function D_(t){return e=>(e.textContent=t,w)}function j_(t){return sh(t,Zu().nt_1,[]),w}function R_(){return Av===y&&new kf,Av}function B_(t){return t.classList.add(V_()),w}function F_(t){return t.classList.add(W_()),w}function H_(t){return t.classList.add(K_()),w}function q_(t){return sh(t,uh().tu_1,[]),w}function U_(){return Sv===y&&new Sf,Sv}function V_(){return eg(),Ev}function W_(){return eg(),Ov}function K_(){return eg(),zv}function X_(){return eg(),Tv}function Y_(){return eg(),Iv}function G_(){return eg(),Lv}function Z_(){return eg(),$v}function Q_(){return eg(),Nv}function J_(){return eg(),Pv}function tg(){return eg(),Dv}function eg(){Fv||(Fv=!0,Ev="page__title",Ov="page__summary",zv="page__links",Mv="page__link",Tv="section",Iv="section__title",Lv="section__hint",$v="example__caption",Nv="row",Pv="grid",Dv="readout",jv="event-log",Rv="event-log__line",Bv="code")}function ng(){return rg(),Hv}function ig(t){rg();var e="."+En(V_()),n={},i=En(0)+"px",r=En(0)+"px",o=En(6)+"px";n.margin=En(i)+" "+En(r)+" "+En(o),n.fontSize=En(26)+"px",n.color=lg().xy_1,t[e]=n;var s="."+En(W_()),a={},l=En(0)+"px",c=En(0)+"px",d=En(10)+"px";a.margin=En(l)+" "+En(c)+" "+En(d),a.color=lg().yy_1,a.fontSize=En(14)+"px",a.lineHeight=1.55,t[s]=a;var u="."+En(K_()),h={},p=En(0)+"px",v=En(0)+"px",f=En(4)+"px";h.margin=En(p)+" "+En(v)+" "+En(f),h.fontSize=En(13)+"px",t[u]=h;var _="."+En((eg(),Mv)),g={};g.marginRight=En(16)+"px",g.color=lg().zy_1,g.fontSize=En(13)+"px",t[_]=g;var m="."+En(X_()),b={display:"block"};b.width=En(100)+"%",t[m]=b;var y="."+En(Y_()),x={},C=En(0)+"px",k=En(0)+"px",A=En(6)+"px";x.margin=En(C)+" "+En(k)+" "+En(A),x.fontSize=En(18)+"px",x.color=lg().xy_1,t[y]=x;var S="."+En(G_()),E={},O=En(0)+"px",z=En(0)+"px",M=En(10)+"px";E.margin=En(O)+" "+En(z)+" "+En(M),E.color=lg().yy_1,E.fontSize=En(13)+"px",E.lineHeight=1.5,t[S]=E;var T="."+En(Z_()),I={},L=En(0)+"px",$=En(0)+"px",N=En(8)+"px",P=En(0)+"px";I.margin=En(L)+" "+En($)+" "+En(N)+" "+En(P),I.color=lg().yy_1,I.fontSize=En(12)+"px",t[T]=I;t["."+En(Q_())]={alignItems:"center"};var D="."+En(J_()),j={display:"grid"};j.width=En(100)+"%",t[D]=j;var R="."+En(tg()),B={};B.margin=En(0)+"px",B.color=lg().yy_1,B.fontSize=En(13)+"px",t[R]=B;var F="."+En((eg(),jv)),H={display:"flex",flexDirection:"column"};H.margin=En(0)+"px";var q=En(8)+"px",U=En(10)+"px";H.padding=En(q)+" "+En(U),H.maxHeight=En(9)+"rem",H.backgroundColor=lg().vy_1,H.borderRadius=En(6)+"px",H.fontFamily="monospace",H.fontSize=En(12)+"px",H.color=lg().yy_1,t[F]=H;var V="."+En((eg(),Rv)),W={};W.margin=En(0)+"px",W.whiteSpace="pre-wrap",t[V]=W;var K={};K.width=En(100)+"%",t["vaadin-card"]=K;var X="."+En((eg(),Bv)),Y={};Y.backgroundColor=lg().vy_1,Y.borderRadius=En(6)+"px";var G=En(2)+"px",Z=En(6)+"px";return Y.padding=En(G)+" "+En(Z),Y.fontSize=En(12)+"px",t[X]=Y,w}function rg(){qv||(qv=!0,Hv=yo(ig))}function og(){return Uv===y&&new Of,Uv}function sg(){return Vv===y&&new Mf,Vv}function ag(t){return sh(t,uh().tu_1,[]),w}function lg(){return Wv===y&&new If,Wv}function cg(){return ug(),Kv}function dg(t){ug();t[":host"]={display:"block"};return t["*, *::before, *::after"]={boxSizing:"border-box"},w}function ug(){Xv||(Xv=!0,Kv=yo(dg))}function hg(){if(Yv)return w;Yv=!0,Gv=new $f("LIGHT",0),Zv=new $f("DARK",1),Qv=new $f("SYSTEM",2)}function pg(){return hg(),Gv}function vg(){return hg(),Zv}function fg(){return hg(),Qv}function _g(t,e,n){return(e=function(t){var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gg(){return gg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gg.apply(null,arguments)}function mg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function bg(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mg(Object(n),!0).forEach(function(e){_g(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mg(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function yg(t){return yg="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yg(t)}function wg(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}qn(tf),Rn(ef,"DemoLayoutDefaultReference",ef),qn(nf),Rn(rf,"DemoPageDefaultReference",rf),qn(of),Rn(sf,"GridDefaultReference",sf),qn(af),Rn(lf,"ReadoutDefaultReference",lf),qn(cf),Rn(df,"SectionBlockDefaultReference",df),Rn(uf,"Binder"),Fn(hf,"Langs"),Rn(pf,"LanguageState",pf),Rn(vf,"SiteTexts"),Rn(ff,"Translations"),qn(_f),Rn(gf,"DemoLayout",gf),Rn(mf,"LayoutConfig"),Rn(bf,"DemoMenu"),Rn(yf,"Entry"),Rn(wf,"Group"),Rn(xf,"Router"),Fn(Cf,"Blocks"),qn(kf),Rn(Af,"DemoPage",Af),qn(Sf),Rn(Ef,"Grid",Ef),qn(Of),Rn(zf,"Readout",zf),qn(Mf),Rn(Tf,"SectionBlock",Tf),Fn(If,"Palette"),Rn(Lf,"Theme",Lf),Rn($f,"ThemeMode"),kv=new Cf;var xg=wg(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Cg=wg(/Edge/i),kg=wg(/firefox/i),Ag=wg(/safari/i)&&!wg(/chrome/i)&&!wg(/android/i),Sg=wg(/iP(ad|od|hone)/i),Eg=wg(/chrome/i)&&wg(/android/i),Og={capture:!1,passive:!1};function zg(t,e,n){t.addEventListener(e,n,!xg&&Og)}function Mg(t,e,n){t.removeEventListener(e,n,!xg&&Og)}function Tg(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Ig(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Lg(t,e,n,i){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&Tg(t,e):Tg(t,e))||i&&t===n)return t;if(t===n)break}while(t=Ig(t))}return null}var $g,Ng=/\s+/g;function Pg(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(Ng," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(Ng," ")}}function Dg(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||-1!==e.indexOf("webkit")||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function jg(t,e){var n="";if("string"==typeof t)n=t;else do{var i=Dg(t,"transform");i&&"none"!==i&&(n=i+" "+n)}while(!e&&(t=t.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function Rg(t,e,n){if(t){var i=t.getElementsByTagName(e),r=0,o=i.length;if(n)for(;r<o;r++)n(i[r],r);return i}return[]}function Bg(){return document.scrollingElement||document.documentElement}function Fg(t,e,n,i,r){if(t.getBoundingClientRect||t===window){var o,s,a,l,c,d,u;if(t!==window&&t.parentNode&&t!==Bg()?(s=(o=t.getBoundingClientRect()).top,a=o.left,l=o.bottom,c=o.right,d=o.height,u=o.width):(s=0,a=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(e||n)&&t!==window&&(r=r||t.parentNode,!xg))do{if(r&&r.getBoundingClientRect&&("none"!==Dg(r,"transform")||n&&"static"!==Dg(r,"position"))){var h=r.getBoundingClientRect();s-=h.top+parseInt(Dg(r,"border-top-width")),a-=h.left+parseInt(Dg(r,"border-left-width")),l=s+o.height,c=a+o.width;break}}while(r=r.parentNode);if(i&&t!==window){var p=jg(r||t),v=p&&p.a,f=p&&p.d;p&&(l=(s/=f)+(d/=f),c=(a/=v)+(u/=v))}return{top:s,left:a,bottom:l,right:c,width:u,height:d}}}function Hg(t,e,n){for(var i=Kg(t,!0),r=Fg(t)[e];i;){var o=Fg(i)[n];if(!("top"===n||"left"===n?r>=o:r<=o))return i;if(i===Bg())break;i=Kg(i,!1)}return!1}function qg(t,e,n,i){for(var r=0,o=0,s=t.children;o<s.length;){if("none"!==s[o].style.display&&s[o]!==Gm.ghost&&(i||s[o]!==Gm.dragged)&&Lg(s[o],n.draggable,t,!1)){if(r===e)return s[o];r++}o++}return null}function Ug(t,e){for(var n=t.lastElementChild;n&&(n===Gm.ghost||"none"===Dg(n,"display")||e&&!Tg(n,e));)n=n.previousElementSibling;return n||null}function Vg(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Gm.clone||e&&!Tg(t,e)||n++;return n}function Wg(t){var e=0,n=0,i=Bg();if(t)do{var r=jg(t),o=r.a,s=r.d;e+=t.scrollLeft*o,n+=t.scrollTop*s}while(t!==i&&(t=t.parentNode));return[e,n]}function Kg(t,e){if(!t||!t.getBoundingClientRect)return Bg();var n=t,i=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=Dg(n);if(n.clientWidth<n.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)){if(!n.getBoundingClientRect||n===document.body)return Bg();if(i||e)return n;i=!0}}}while(n=n.parentNode);return Bg()}function Xg(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Yg(t,e){return function(){if(!$g){var n=arguments;1===n.length?t.call(this,n[0]):t.apply(this,n),$g=setTimeout(function(){$g=void 0},e)}}}function Gg(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function Zg(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function Qg(t,e,n){var i={};return Array.from(t.children).forEach(function(r){var o,s,a,l;if(Lg(r,e.draggable,t,!1)&&!r.animated&&r!==n){var c=Fg(r);i.left=Math.min(null!==(o=i.left)&&void 0!==o?o:1/0,c.left),i.top=Math.min(null!==(s=i.top)&&void 0!==s?s:1/0,c.top),i.right=Math.max(null!==(a=i.right)&&void 0!==a?a:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var Jg="Sortable"+(new Date).getTime();var tm=[],em={initializeByDefault:!0},nm={mount:function(t){for(var e in em)em.hasOwnProperty(e)&&!(e in t)&&(t[e]=em[e]);tm.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),tm.push(t)},pluginEvent:function(t,e,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=t+"Global";tm.forEach(function(i){e[i.pluginName]&&(e[i.pluginName][r]&&e[i.pluginName][r](bg({sortable:e},n)),e.options[i.pluginName]&&e[i.pluginName][t]&&e[i.pluginName][t](bg({sortable:e},n)))})},initializePlugins:function(t,e,n,i){for(var r in tm.forEach(function(i){var r=i.pluginName;if(t.options[r]||i.initializeByDefault){var o=new i(t,e,t.options);o.sortable=t,o.options=t.options,t[r]=o,gg(n,o.defaults)}}),t.options)if(t.options.hasOwnProperty(r)){var o=this.modifyOption(t,r,t.options[r]);void 0!==o&&(t.options[r]=o)}},getEventProperties:function(t,e){var n={};return tm.forEach(function(i){"function"==typeof i.eventProperties&&gg(n,i.eventProperties.call(e[i.pluginName],t))}),n},modifyOption:function(t,e,n){var i;return tm.forEach(function(r){t[r.pluginName]&&r.optionListeners&&"function"==typeof r.optionListeners[e]&&(i=r.optionListeners[e].call(t[r.pluginName],n))}),i}};var im=["evt"],rm=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,r=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(-1!==e.indexOf(i))continue;n[i]=t[i]}return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(n,im);nm.pluginEvent.bind(Gm)(t,e,bg({dragEl:sm,parentEl:am,ghostEl:lm,rootEl:cm,nextEl:dm,lastDownEl:um,cloneEl:hm,cloneHidden:pm,dragStarted:Sm,putSortable:bm,activeSortable:Gm.active,originalEvent:i,oldIndex:vm,oldDraggableIndex:_m,newIndex:fm,newDraggableIndex:gm,hideGhostForTarget:Wm,unhideGhostForTarget:Km,cloneNowHidden:function(){pm=!0},cloneNowShown:function(){pm=!1},dispatchSortableEvent:function(t){om({sortable:e,name:t,originalEvent:i})}},r))};function om(t){!function(t){var e=t.sortable,n=t.rootEl,i=t.name,r=t.targetEl,o=t.cloneEl,s=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,h=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||n&&n[Jg]){var f,_=e.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||xg||Cg?(f=document.createEvent("Event")).initEvent(i,!0,!0):f=new CustomEvent(i,{bubbles:!0,cancelable:!0}),f.to=s||n,f.from=a||n,f.item=r||n,f.clone=o,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=u,f.originalEvent=h,f.pullMode=p?p.lastPutMode:void 0;var m=bg(bg({},v),nm.getEventProperties(i,e));for(var b in m)f[b]=m[b];n&&n.dispatchEvent(f),_[g]&&_[g].call(e,f)}}(bg({putSortable:bm,cloneEl:hm,targetEl:sm,rootEl:cm,oldIndex:vm,oldDraggableIndex:_m,newIndex:fm,newDraggableIndex:gm},t))}var sm,am,lm,cm,dm,um,hm,pm,vm,fm,_m,gm,mm,bm,ym,wm,xm,Cm,km,Am,Sm,Em,Om,zm,Mm,Tm=!1,Im=!1,Lm=[],$m=!1,Nm=!1,Pm=[],Dm=!1,jm=[],Rm="undefined"!=typeof document,Bm=Sg,Fm=Cg||xg?"cssFloat":"float",Hm=Rm&&!Eg&&!Sg&&"draggable"in document.createElement("div"),qm=function(){if(Rm){if(xg)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Um=function(t,e){var n=Dg(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=qg(t,0,e),o=qg(t,1,e),s=r&&Dg(r),a=o&&Dg(o),l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Fg(r).width,c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Fg(o).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&"none"!==s.float){var d="left"===s.float?"left":"right";return!o||"both"!==a.clear&&a.clear!==d?"horizontal":"vertical"}return r&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||l>=i&&"none"===n[Fm]||o&&"none"===n[Fm]&&l+c>i)?"vertical":"horizontal"},Vm=function(t){function e(t,n){return function(i,r,o,s){var a=i.options.group.name&&r.options.group.name&&i.options.group.name===r.options.group.name;if(null==t&&(n||a))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(i,r,o,s),n)(i,r,o,s);var l=(n?i:r).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var n={},i=t.group;i&&"object"==yg(i)||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n},Wm=function(){!qm&&lm&&Dg(lm,"display","none")},Km=function(){!qm&&lm&&Dg(lm,"display","")};Rm&&!Eg&&document.addEventListener("click",function(t){if(Im)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Im=!1,!1},!0);var Xm=function(t){if(sm){var e=function(t,e){var n;return Lm.some(function(i){var r=i[Jg].options.emptyInsertThreshold;if(r&&!Ug(i)){var o=Fg(i),s=t>=o.left-r&&t<=o.right+r,a=e>=o.top-r&&e<=o.bottom+r;return s&&a?n=i:void 0}}),n}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[Jg]._onDragOver(n)}}},Ym=function(t){sm&&sm.parentNode[Jg]._isOutsideThisEl(t.target)};function Gm(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=gg({},e),t[Jg]=this;var n,i,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Um(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Gm.supportPointer&&"PointerEvent"in window&&(!Ag||Sg),emptyInsertThreshold:5};for(var o in nm.initializePlugins(this,t,r),r)!(o in e)&&(e[o]=r[o]);for(var s in Vm(e),this)"_"===s.charAt(0)&&"function"==typeof this[s]&&(this[s]=this[s].bind(this));this.nativeDraggable=!e.forceFallback&&Hm,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?zg(t,"pointerdown",this._onTapStart):(zg(t,"mousedown",this._onTapStart),zg(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(zg(t,"dragover",this),zg(t,"dragenter",this)),Lm.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),gg(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==Dg(t,"display")&&t!==Gm.ghost){i.push({target:t,rect:Fg(t)});var e=bg({},i[i.length-1].rect);if(t.thisAnimationDuration){var n=jg(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}})},addAnimationState:function(t){i.push(t)},removeAnimationState:function(t){i.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return Number(n);return-1}(i,{target:t}),1)},animateAll:function(t){var e=this;if(!this.options.animation)return clearTimeout(n),void("function"==typeof t&&t());var r=!1,o=0;i.forEach(function(t){var n=0,i=t.target,s=i.fromRect,a=Fg(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,u=jg(i,!0);u&&(a.top-=u.f,a.left-=u.e),i.toRect=a,i.thisAnimationDuration&&Xg(l,a)&&!Xg(s,a)&&(d.top-a.top)/(d.left-a.left)===(s.top-a.top)/(s.left-a.left)&&(n=function(t,e,n,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation}(d,l,c,e.options)),Xg(a,s)||(i.prevFromRect=s,i.prevToRect=a,n||(n=e.options.animation),e.animate(i,d,a,n)),n&&(r=!0,o=Math.max(o,n),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},n),i.thisAnimationDuration=n)}),clearTimeout(n),r?n=setTimeout(function(){"function"==typeof t&&t()},o):"function"==typeof t&&t(),i=[]},animate:function(t,e,n,i){if(i){Dg(t,"transition",""),Dg(t,"transform","");var r=jg(this.el),o=r&&r.a,s=r&&r.d,a=(e.left-n.left)/(o||1),l=(e.top-n.top)/(s||1);t.animatingX=!!a,t.animatingY=!!l,Dg(t,"transform","translate3d("+a+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Dg(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),Dg(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){Dg(t,"transition",""),Dg(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},i)}}}))}function Zm(t,e,n,i,r,o,s,a){var l,c,d=t[Jg],u=d.options.onMove;return!window.CustomEvent||xg||Cg?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=r||e,l.relatedRect=o||Fg(e),l.willInsertAfter=a,l.originalEvent=s,t.dispatchEvent(l),u&&(c=u.call(d,l,s)),c}function Qm(t){t.draggable=!1}function Jm(){Dm=!1}function tb(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function eb(t){return setTimeout(t,0)}function nb(t){return clearTimeout(t)}Gm.prototype={constructor:Gm,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Em=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,sm):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,i=this.options,r=i.preventOnFilter,o=t.type,s=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,a=(s||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||a,c=i.filter;if(function(t){jm.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&jm.push(i)}}(n),!sm&&!(/mousedown|pointerdown/.test(o)&&0!==t.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ag||!a||"SELECT"!==a.tagName.toUpperCase())&&!((a=Lg(a,i.draggable,n,!1))&&a.animated||um===a)){if(vm=Vg(a),_m=Vg(a,i.draggable),"function"==typeof c){if(c.call(this,t,a,this))return om({sortable:e,rootEl:l,name:"filter",targetEl:a,toEl:n,fromEl:n}),rm("filter",e,{evt:t}),void(r&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(i){if(i=Lg(l,i.trim(),n,!1))return om({sortable:e,rootEl:i,name:"filter",targetEl:a,fromEl:n,toEl:n}),rm("filter",e,{evt:t}),!0})))return void(r&&t.preventDefault());i.handle&&!Lg(l,i.handle,n,!1)||this._prepareDragStart(t,s,a)}}},_prepareDragStart:function(t,e,n){var i,r=this,o=r.el,s=r.options,a=o.ownerDocument;if(n&&!sm&&n.parentNode===o){var l=Fg(n);if(cm=o,am=(sm=n).parentNode,dm=sm.nextSibling,um=n,mm=s.group,Gm.dragged=sm,ym={target:sm,clientX:(e||t).clientX,clientY:(e||t).clientY},km=ym.clientX-l.left,Am=ym.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,sm.style["will-change"]="all",i=function(){rm("delayEnded",r,{evt:t}),Gm.eventCanceled?r._onDrop():(r._disableDelayedDragEvents(),!kg&&r.nativeDraggable&&(sm.draggable=!0),r._triggerDragStart(t,e),om({sortable:r,name:"choose",originalEvent:t}),Pg(sm,s.chosenClass,!0))},s.ignore.split(",").forEach(function(t){Rg(sm,t.trim(),Qm)}),zg(a,"dragover",Xm),zg(a,"mousemove",Xm),zg(a,"touchmove",Xm),s.supportPointer?(zg(a,"pointerup",r._onDrop),!this.nativeDraggable&&zg(a,"pointercancel",r._onDrop)):(zg(a,"mouseup",r._onDrop),zg(a,"touchend",r._onDrop),zg(a,"touchcancel",r._onDrop)),kg&&this.nativeDraggable&&(this.options.touchStartThreshold=4,sm.draggable=!0),rm("delayStart",this,{evt:t}),!s.delay||s.delayOnTouchOnly&&!e||this.nativeDraggable&&(Cg||xg))i();else{if(Gm.eventCanceled)return void this._onDrop();s.supportPointer?(zg(a,"pointerup",r._disableDelayedDrag),zg(a,"pointercancel",r._disableDelayedDrag)):(zg(a,"mouseup",r._disableDelayedDrag),zg(a,"touchend",r._disableDelayedDrag),zg(a,"touchcancel",r._disableDelayedDrag)),zg(a,"mousemove",r._delayedDragTouchMoveHandler),zg(a,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&zg(a,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(i,s.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){sm&&Qm(sm),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Mg(t,"mouseup",this._disableDelayedDrag),Mg(t,"touchend",this._disableDelayedDrag),Mg(t,"touchcancel",this._disableDelayedDrag),Mg(t,"pointerup",this._disableDelayedDrag),Mg(t,"pointercancel",this._disableDelayedDrag),Mg(t,"mousemove",this._delayedDragTouchMoveHandler),Mg(t,"touchmove",this._delayedDragTouchMoveHandler),Mg(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?zg(document,"pointermove",this._onTouchMove):zg(document,e?"touchmove":"mousemove",this._onTouchMove):(zg(sm,"dragend",this),zg(cm,"dragstart",this._onDragStart));try{document.selection?eb(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Tm=!1,cm&&sm){rm("dragStarted",this,{evt:e}),this.nativeDraggable&&zg(document,"dragover",Ym);var n=this.options;!t&&Pg(sm,n.dragClass,!1),Pg(sm,n.ghostClass,!0),Gm.active=this,t&&this._appendGhost(),om({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(wm){this._lastX=wm.clientX,this._lastY=wm.clientY,Wm();for(var t=document.elementFromPoint(wm.clientX,wm.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(wm.clientX,wm.clientY))!==e;)e=t;if(sm.parentNode[Jg]._isOutsideThisEl(t),e)do{if(e[Jg]&&e[Jg]._onDragOver({clientX:wm.clientX,clientY:wm.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break;t=e}while(e=Ig(e));Km()}},_onTouchMove:function(t){if(ym){var e=this.options,n=e.fallbackTolerance,i=e.fallbackOffset,r=t.touches?t.touches[0]:t,o=lm&&jg(lm,!0),s=lm&&o&&o.a,a=lm&&o&&o.d,l=Bm&&Mm&&Wg(Mm),c=(r.clientX-ym.clientX+i.x)/(s||1)+(l?l[0]-Pm[0]:0)/(s||1),d=(r.clientY-ym.clientY+i.y)/(a||1)+(l?l[1]-Pm[1]:0)/(a||1);if(!Gm.active&&!Tm){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(lm){o?(o.e+=c-(xm||0),o.f+=d-(Cm||0)):o={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");Dg(lm,"webkitTransform",u),Dg(lm,"mozTransform",u),Dg(lm,"msTransform",u),Dg(lm,"transform",u),xm=c,Cm=d,wm=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!lm){var t=this.options.fallbackOnBody?document.body:cm,e=Fg(sm,!0,Bm,!0,t),n=this.options;if(Bm){for(Mm=t;"static"===Dg(Mm,"position")&&"none"===Dg(Mm,"transform")&&Mm!==document;)Mm=Mm.parentNode;Mm!==document.body&&Mm!==document.documentElement?(Mm===document&&(Mm=Bg()),e.top+=Mm.scrollTop,e.left+=Mm.scrollLeft):Mm=Bg(),Pm=Wg(Mm)}Pg(lm=sm.cloneNode(!0),n.ghostClass,!1),Pg(lm,n.fallbackClass,!0),Pg(lm,n.dragClass,!0),Dg(lm,"transition",""),Dg(lm,"transform",""),Dg(lm,"box-sizing","border-box"),Dg(lm,"margin",0),Dg(lm,"top",e.top),Dg(lm,"left",e.left),Dg(lm,"width",e.width),Dg(lm,"height",e.height),Dg(lm,"opacity","0.8"),Dg(lm,"position",Bm?"absolute":"fixed"),Dg(lm,"zIndex","100000"),Dg(lm,"pointerEvents","none"),Gm.ghost=lm,t.appendChild(lm),Dg(lm,"transform-origin",km/parseInt(lm.style.width)*100+"% "+Am/parseInt(lm.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,r=n.options;rm("dragStart",this,{evt:t}),Gm.eventCanceled?this._onDrop():(rm("setupClone",this),Gm.eventCanceled||((hm=Zg(sm)).removeAttribute("id"),hm.draggable=!1,hm.style["will-change"]="",this._hideClone(),Pg(hm,this.options.chosenClass,!1),Gm.clone=hm),n.cloneId=eb(function(){rm("clone",n),Gm.eventCanceled||(n.options.removeCloneOnHide||cm.insertBefore(hm,sm),n._hideClone(),om({sortable:n,name:"clone"}))}),!e&&Pg(sm,r.dragClass,!0),e?(Im=!0,n._loopId=setInterval(n._emulateDragOver,50)):(Mg(document,"mouseup",n._onDrop),Mg(document,"touchend",n._onDrop),Mg(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,sm)),zg(document,"drop",n),Dg(sm,"transform","translateZ(0)")),Tm=!0,n._dragStartId=eb(n._dragStarted.bind(n,e,t)),zg(document,"selectstart",n),Sm=!0,window.getSelection().removeAllRanges(),Ag&&Dg(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,i,r,o=this.el,s=t.target,a=this.options,l=a.group,c=Gm.active,d=mm===l,u=a.sort,h=bm||c,p=this,v=!1;if(!Dm){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),s=Lg(s,a.draggable,o,!0),z("dragOver"),Gm.eventCanceled)return v;if(sm.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||p._ignoreWhileAnimating===s)return T(!1);if(Im=!1,c&&!a.disabled&&(d?u||(i=am!==cm):bm===this||(this.lastPutMode=mm.checkPull(this,c,sm,t))&&l.checkPut(this,c,sm,t))){if(r="vertical"===this._getDirection(t,s),e=Fg(sm),z("dragOverValid"),Gm.eventCanceled)return v;if(i)return am=cm,M(),this._hideClone(),z("revert"),Gm.eventCanceled||(dm?cm.insertBefore(sm,dm):cm.appendChild(sm)),T(!0);var f=Ug(o,a.draggable);if(!f||function(t,e,n){var i=Fg(Ug(n.el,n.options.draggable)),r=Qg(n.el,n.options,lm);return e?t.clientX>r.right+10||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>r.bottom+10||t.clientX>i.right&&t.clientY>i.top}(t,r,this)&&!f.animated){if(f===sm)return T(!1);if(f&&o===t.target&&(s=f),s&&(n=Fg(s)),!1!==Zm(cm,o,sm,e,s,n,t,!!s))return M(),f&&f.nextSibling?o.insertBefore(sm,f.nextSibling):o.appendChild(sm),am=o,I(),T(!0)}else if(f&&function(t,e,n){var i=Fg(qg(n.el,0,n.options,!0)),r=Qg(n.el,n.options,lm);return e?t.clientX<r.left-10||t.clientY<i.top&&t.clientX<i.right:t.clientY<r.top-10||t.clientY<i.bottom&&t.clientX<i.left}(t,r,this)){var _=qg(o,0,a,!0);if(_===sm)return T(!1);if(n=Fg(s=_),!1!==Zm(cm,o,sm,e,s,n,t,!1))return M(),o.insertBefore(sm,_),am=o,I(),T(!0)}else if(s.parentNode===o){n=Fg(s);var g,m,b,y=sm.parentNode!==o,w=!function(t,e,n){var i=n?t.left:t.top,r=n?t.right:t.bottom,o=n?t.width:t.height,s=n?e.left:e.top,a=n?e.right:e.bottom,l=n?e.width:e.height;return i===s||r===a||i+o/2===s+l/2}(sm.animated&&sm.toRect||e,s.animated&&s.toRect||n,r),x=r?"top":"left",C=Hg(s,"top","top")||Hg(sm,"top","top"),k=C?C.scrollTop:void 0;if(Em!==s&&(m=n[x],$m=!1,Nm=!w&&a.invertSwap||y),g=function(t,e,n,i,r,o,s,a){var l=i?t.clientY:t.clientX,c=i?n.height:n.width,d=i?n.top:n.left,u=i?n.bottom:n.right,h=!1;if(!s)if(a&&zm<c*r){if(!$m&&(1===Om?l>d+c*o/2:l<u-c*o/2)&&($m=!0),$m)h=!0;else if(1===Om?l<d+zm:l>u-zm)return-Om}else if(l>d+c*(1-r)/2&&l<u-c*(1-r)/2)return function(t){return Vg(sm)<Vg(t)?1:-1}(e);return(h=h||s)&&(l<d+c*o/2||l>u-c*o/2)?l>d+c/2?1:-1:0}(t,s,n,r,w?1:a.swapThreshold,null==a.invertedSwapThreshold?a.swapThreshold:a.invertedSwapThreshold,Nm,Em===s),0!==g){var A=Vg(sm);do{A-=g,b=am.children[A]}while(b&&("none"===Dg(b,"display")||b===lm))}if(0===g||b===s)return T(!1);Em=s,Om=g;var S=s.nextElementSibling,E=!1,O=Zm(cm,o,sm,e,s,n,t,E=1===g);if(!1!==O)return 1!==O&&-1!==O||(E=1===O),Dm=!0,setTimeout(Jm,30),M(),E&&!S?o.appendChild(sm):s.parentNode.insertBefore(sm,E?S:s),C&&Gg(C,0,k-C.scrollTop),am=sm.parentNode,void 0===m||Nm||(zm=Math.abs(m-Fg(s)[x])),I(),T(!0)}if(o.contains(sm))return T(!1)}return!1}function z(a,l){rm(a,p,bg({evt:t,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:e,targetRect:n,canSort:u,fromSortable:h,target:s,completed:T,onMove:function(n,i){return Zm(cm,o,sm,e,n,Fg(n),t,i)},changed:I},l))}function M(){z("dragOverAnimationCapture"),p.captureAnimationState(),p!==h&&h.captureAnimationState()}function T(e){return z("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==h&&(Pg(sm,bm?bm.options.ghostClass:c.options.ghostClass,!1),Pg(sm,a.ghostClass,!0)),bm!==p&&p!==Gm.active?bm=p:p===Gm.active&&bm&&(bm=null),h===p&&(p._ignoreWhileAnimating=s),p.animateAll(function(){z("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(s===sm&&!sm.animated||s===o&&!s.animated)&&(Em=null),a.dragoverBubble||t.rootEl||s===document||(sm.parentNode[Jg]._isOutsideThisEl(t.target),!e&&Xm(t)),!a.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function I(){fm=Vg(sm),gm=Vg(sm,a.draggable),om({sortable:p,name:"change",toEl:o,newIndex:fm,newDraggableIndex:gm,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Mg(document,"mousemove",this._onTouchMove),Mg(document,"touchmove",this._onTouchMove),Mg(document,"pointermove",this._onTouchMove),Mg(document,"dragover",Xm),Mg(document,"mousemove",Xm),Mg(document,"touchmove",Xm)},_offUpEvents:function(){var t=this.el.ownerDocument;Mg(t,"mouseup",this._onDrop),Mg(t,"touchend",this._onDrop),Mg(t,"pointerup",this._onDrop),Mg(t,"pointercancel",this._onDrop),Mg(t,"touchcancel",this._onDrop),Mg(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;fm=Vg(sm),gm=Vg(sm,n.draggable),rm("drop",this,{evt:t}),am=sm&&sm.parentNode,fm=Vg(sm),gm=Vg(sm,n.draggable),Gm.eventCanceled||(Tm=!1,Nm=!1,$m=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),nb(this.cloneId),nb(this._dragStartId),this.nativeDraggable&&(Mg(document,"drop",this),Mg(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ag&&Dg(document.body,"user-select",""),Dg(sm,"transform",""),t&&(Sm&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),lm&&lm.parentNode&&lm.parentNode.removeChild(lm),(cm===am||bm&&"clone"!==bm.lastPutMode)&&hm&&hm.parentNode&&hm.parentNode.removeChild(hm),sm&&(this.nativeDraggable&&Mg(sm,"dragend",this),Qm(sm),sm.style["will-change"]="",Sm&&!Tm&&Pg(sm,bm?bm.options.ghostClass:this.options.ghostClass,!1),Pg(sm,this.options.chosenClass,!1),om({sortable:this,name:"unchoose",toEl:am,newIndex:null,newDraggableIndex:null,originalEvent:t}),cm!==am?(fm>=0&&(om({rootEl:am,name:"add",toEl:am,fromEl:cm,originalEvent:t}),om({sortable:this,name:"remove",toEl:am,originalEvent:t}),om({rootEl:am,name:"sort",toEl:am,fromEl:cm,originalEvent:t}),om({sortable:this,name:"sort",toEl:am,originalEvent:t})),bm&&bm.save()):fm!==vm&&fm>=0&&(om({sortable:this,name:"update",toEl:am,originalEvent:t}),om({sortable:this,name:"sort",toEl:am,originalEvent:t})),Gm.active&&(null!=fm&&-1!==fm||(fm=vm,gm=_m),om({sortable:this,name:"end",toEl:am,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){rm("nulling",this),cm=sm=am=lm=dm=hm=um=pm=ym=wm=Sm=fm=gm=vm=_m=Em=Om=bm=mm=Gm.dragged=Gm.ghost=Gm.clone=Gm.active=null;var t=this.el;jm.forEach(function(e){t.contains(e)&&(e.checked=!0)}),jm.length=xm=Cm=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":sm&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,r=n.length,o=this.options;i<r;i++)Lg(t=n[i],o.draggable,this.el,!1)&&e.push(t.getAttribute(o.dataIdAttr)||tb(t));return e},sort:function(t,e){var n={},i=this.el;this.toArray().forEach(function(t,e){var r=i.children[e];Lg(r,this.options.draggable,i,!1)&&(n[t]=r)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Lg(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var i=nm.modifyOption(this,t,e);n[t]=void 0!==i?i:e,"group"===t&&Vm(n)},destroy:function(){rm("destroy",this);var t=this.el;t[Jg]=null,Mg(t,"mousedown",this._onTapStart),Mg(t,"touchstart",this._onTapStart),Mg(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Mg(t,"dragover",this),Mg(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Lm.splice(Lm.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!pm){if(rm("hideClone",this),Gm.eventCanceled)return;Dg(hm,"display","none"),this.options.removeCloneOnHide&&hm.parentNode&&hm.parentNode.removeChild(hm),pm=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(pm){if(rm("showClone",this),Gm.eventCanceled)return;sm.parentNode!=cm||this.options.group.revertClone?dm?cm.insertBefore(hm,dm):cm.appendChild(hm):cm.insertBefore(hm,sm),this.options.group.revertClone&&this.animate(sm,hm),Dg(hm,"display",""),pm=!1}}else this._hideClone()}},Rm&&zg(document,"touchmove",function(t){(Gm.active||Tm)&&t.cancelable&&t.preventDefault()}),Gm.utils={on:zg,off:Mg,css:Dg,find:Rg,is:function(t,e){return!!Lg(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Yg,closest:Lg,toggleClass:Pg,clone:Zg,index:Vg,nextTick:eb,cancelNextTick:nb,detectDirection:Um,getChild:qg,expando:Jg},Gm.get=function(t){return t[Jg]},Gm.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Gm.utils=bg(bg({},Gm.utils),t.utils)),nm.mount(t)})},Gm.create=function(t,e){return new Gm(t,e)},Gm.version="1.15.7";var ib,rb,ob,sb,ab,lb,cb=[],db=!1;function ub(){cb.forEach(function(t){clearInterval(t.pid)}),cb=[]}function hb(){clearInterval(lb)}var pb,vb,fb,_b,gb,mb,bb,yb,wb,xb,Cb,kb,Ab,Sb,Eb,Ob,zb=Yg(function(t,e,n,i){if(e.scroll){var r,o=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,c=Bg(),d=!1;rb!==n&&(rb=n,ub(),ib=e.scroll,r=e.scrollFn,!0===ib&&(ib=Kg(n,!0)));var u=0,h=ib;do{var p=h,v=Fg(p),f=v.top,_=v.bottom,g=v.left,m=v.right,b=v.width,y=v.height,w=void 0,x=void 0,C=p.scrollWidth,k=p.scrollHeight,A=Dg(p),S=p.scrollLeft,E=p.scrollTop;p===c?(w=b<C&&("auto"===A.overflowX||"scroll"===A.overflowX||"visible"===A.overflowX),x=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY||"visible"===A.overflowY)):(w=b<C&&("auto"===A.overflowX||"scroll"===A.overflowX),x=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY));var O=w&&(Math.abs(m-o)<=a&&S+b<C)-(Math.abs(g-o)<=a&&!!S),z=x&&(Math.abs(_-s)<=a&&E+y<k)-(Math.abs(f-s)<=a&&!!E);if(!cb[u])for(var M=0;M<=u;M++)cb[M]||(cb[M]={});cb[u].vx==O&&cb[u].vy==z&&cb[u].el===p||(cb[u].el=p,cb[u].vx=O,cb[u].vy=z,clearInterval(cb[u].pid),0==O&&0==z||(d=!0,cb[u].pid=setInterval(function(){i&&0===this.layer&&Gm.active._onTouchMove(ab);var e=cb[this.layer].vy?cb[this.layer].vy*l:0,n=cb[this.layer].vx?cb[this.layer].vx*l:0;"function"==typeof r&&"continue"!==r.call(Gm.dragged.parentNode[Jg],n,e,t,ab,cb[this.layer].el)||Gg(cb[this.layer].el,n,e)}.bind({layer:u}),24))),u++}while(e.bubbleScroll&&h!==c&&(h=Kg(h,!1)));db=d}},30),Mb=function(t){var e=t.originalEvent,n=t.putSortable,i=t.dragEl,r=t.activeSortable,o=t.dispatchSortableEvent,s=t.hideGhostForTarget,a=t.unhideGhostForTarget;if(e){var l=n||r;s();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);a(),l&&!l.el.contains(d)&&(o("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function Tb(){}function Ib(){}function Lb(t){return w}function $b(t){return w}Tb.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=qg(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(e,i):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:Mb},gg(Tb,{pluginName:"revertOnSpill"}),Ib.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Mb},gg(Ib,{pluginName:"removeOnSpill"}),Gm.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?zg(document,"dragover",this._handleAutoScroll):this.options.supportPointer?zg(document,"pointermove",this._handleFallbackAutoScroll):e.touches?zg(document,"touchmove",this._handleFallbackAutoScroll):zg(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Mg(document,"dragover",this._handleAutoScroll):(Mg(document,"pointermove",this._handleFallbackAutoScroll),Mg(document,"touchmove",this._handleFallbackAutoScroll),Mg(document,"mousemove",this._handleFallbackAutoScroll)),hb(),ub(),clearTimeout($g),$g=void 0},nulling:function(){ab=rb=ib=db=lb=ob=sb=null,cb.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,i=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,o=document.elementFromPoint(i,r);if(ab=t,e||this.options.forceAutoScrollFallback||Cg||xg||Ag){zb(t,this.options,o,e);var s=Kg(o,!0);!db||lb&&i===ob&&r===sb||(lb&&hb(),lb=setInterval(function(){var o=Kg(document.elementFromPoint(i,r),!0);o!==s&&(s=o,ub()),zb(t,n.options,o,e)},10),ob=i,sb=r)}else{if(!this.options.bubbleScroll||Kg(o,!0)===Bg())return void ub();zb(t,this.options,Kg(o,!1),!1)}}},gg(t,{pluginName:"scroll",initializeByDefault:!0})}),Gm.mount(Ib,Tb);class Nb{constructor(){pb=this,this.r10_1=Pf().zu_1,this.s10_1=new _o(Pf().av_1.gs_1,Pf().av_1.hs_1)}}class Pb extends go{constructor(t,e,n,i,r){ry(),t=t===y?"sortable-api-page":t,e=e===y?null:e,n=n===y?ry().r10_1:n,i=i===y||i,r=r===y?ry().s10_1:r,super(Ub,t,e,n,i,r)}}class Db{constructor(){vb=this,this.t10_1=Pf().zu_1,this.u10_1=new _o(Pf().av_1.gs_1,Pf().av_1.hs_1)}}class jb extends go{constructor(t,e,n,i,r){oy(),t=t===y?"sortable-conventions-page":t,e=e===y?null:e,n=n===y?oy().t10_1:n,i=i===y||i,r=r===y?oy().u10_1:r,super(Xb,t,e,n,i,r)}}class Rb{constructor(){fb=this,this.v10_1=Pf().zu_1,this.w10_1=new _o(Pf().av_1.gs_1,Pf().av_1.hs_1)}}class Bb extends go{constructor(t,e,n,i,r){sy(),t=t===y?"sortable-overview-page":t,e=e===y?null:e,n=n===y?sy().v10_1:n,i=i===y||i,r=r===y?sy().w10_1:r,super(Qb,t,e,n,i,r)}}class Fb{constructor(){_b=this,this.x10_1=Pf().zu_1,this.y10_1=new _o(Pf().av_1.gs_1,Pf().av_1.hs_1)}}class Hb extends go{constructor(t,e,n,i,r){ay(),t=t===y?"sortable-playground-page":t,e=e===y?null:e,n=n===y?ay().x10_1:n,i=i===y||i,r=r===y?ay().y10_1:r,super(ey,t,e,n,i,r)}}class qb extends Pb{constructor(){Ab=null,super(),Ab=this,this.c11_1=new Wb("What the wrapper maps","Upstream ships no type declarations: every Kotlin type below was written from `src/Sortable.js`.","Declaration by declaration","The same table a new module is cut from: read the upstream source, then decide the Kotlin type.","upstream","in Kotlin",ji([lr("npm package","sortablejs (main: Sortable.min.js, module: sortable.esm.js)"),lr("default export","class Sortable — constructor + statics"),lr("instance","Sortable: el, options, nativeDraggable, toArray(), sort(), save(), closest(), option(), destroy()"),lr("statics","create / get / mount, utils, version, active, dragged, ghost, clone"),lr("union-typed fields","group / filter / direction / pull / put — declared JsAny"),lr("types","none upstream; cross-checked against @types/sortablejs 1.15.9 (MIT)")])),this.d11_1=new Wb("封装层映射了什么","上游不提供类型声明：下面每个 Kotlin 类型都是照 `src/Sortable.js` 写的。","逐条对照","新模块就照这张表切：先读上游源码，再决定 Kotlin 类型。","上游","Kotlin 侧",ji([lr("npm 包","sortablejs（main: Sortable.min.js，module: sortable.esm.js）"),lr("默认导出","class Sortable —— 构造器 + 静态成员"),lr("实例","Sortable：el、options、nativeDraggable、toArray()、sort()、save()、closest()、option()、destroy()"),lr("静态成员","create / get / mount、utils、version、active、dragged、ghost、clone"),lr("联合类型字段","group / filter / direction / pull / put —— 声明为 JsAny"),lr("类型来源","上游没有；对照 @types/sortablejs 1.15.9（MIT）核对")])),this.e11_1=qf([lr(Bf().qv_1,this.c11_1),lr(Bf().rv_1,this.d11_1)]),this.f11_1="api-table",this.g11_1="api-cell",this.h11_1="api-cell-head",this.i11_1=yo(_y)}}class Ub extends Af{constructor(){gy(),super(),this.r11_1=new uf(gy().e11_1),this.s11_1=Eo("tr"),this.t11_1=Eo("tbody");for(var t=gy().c11_1.b12_1,e=at.y(Fi(t,10)),n=t.s();n.t();){n.u();var i=Eo("td",my),r=Eo("td",by);this.t11_1.append(Eo("tr",yy(i,r)));var o=new Vb(i,r);e.z(o)}this.u11_1=e;var s,a=Eo("table",(s=this,t=>{t.classList.add(gy().f11_1);return t.append(Eo("thead",function(t){return e=>(e.append(t.s11_1),w)}(s)),s.t11_1),w})),l=Eo(sg().js_1,wy);this.r11_1.ov(l.k10_1,xy),this.r11_1.ov(l.l10_1,Cy),l.m10_1.append(kv.hz(null,[a])),this.xz(gy().i11_1),this.sz_1.append(l.e10())}my(t){var e=gy().e11_1.nv(t);this.vz(e.v11_1),this.wz(e.w11_1),this.r11_1.pv(t);var n,i=Eo("th",(n=e,t=>(t.classList.add(gy().g11_1),t.classList.add(gy().h11_1),t.textContent=n.z11_1,w)));this.s11_1.replaceChildren(i,Eo("th",function(t){return e=>(e.classList.add(gy().g11_1),e.classList.add(gy().h11_1),e.textContent=t.a12_1,w)}(e)));for(var r=function(t,e){for(var n=t.s(),i=e.s(),r=Fi(t,10),o=Fi(e,10),s=Math.min(r,o),a=at.y(s);n.t()&&i.t();){var l=lr(n.u(),i.u());a.z(l)}return a}(e.b12_1,this.u11_1).s();r.t();){var o=r.u(),s=o.aa(),a=o.ba();a.c12_1.textContent=s.y9_1,a.d12_1.textContent=s.z9_1}}}class Vb{constructor(t,e){this.c12_1=t,this.d12_1=e}}class Wb{constructor(t,e,n,i,r,o,s){this.v11_1=t,this.w11_1=e,this.x11_1=n,this.y11_1=i,this.z11_1=r,this.a12_1=o,this.b12_1=s}}class Kb extends jb{constructor(){Sb=null,super(),Sb=this,this.h12_1=new Yb("Conventions","The rules this wrapper follows: declarations only, no dynamic, and a DOM call only for what upstream itself hands out.","Rules this module follows","The checklist a review of this module looks for.",ji(["One npm package, one Gradle module, one Kotlin package: sortablejs is one export, so one file group.","Declarations only: no dynamic, and every option/event field mirrors its upstream source field.","Union-typed fields stay JsAny with a builder beside them (sortableGroup, point, sortableOptions).","The wrapper never re-implements upstream: no drag code, no DOM helpers, only declarations.","A page is a set of components; each sheet belongs to the component that owns it."])),this.i12_1=new Yb("约定","这个封装遵守的规矩：只做声明、不用 dynamic，DOM 调用只限于上游自己给出的那些。","这个模块遵守的规矩","评审这个模块时照这份清单看。",ji(["一个 npm 包一个 Gradle 模块、一个 Kotlin 包：sortablejs 只有一个导出，就按一组文件来。","只做声明：不用 dynamic，每个选项与事件字段都对着上游源码里的同名字段。","联合类型字段保持 JsAny，旁边配构造器（sortableGroup、point、sortableOptions）。","封装层从不重实现上游：不写拖拽逻辑、不重造 DOM 工具，只做声明。","页面是一组组件；每份样式表都属于持有它的那个组件。"])),this.j12_1=qf([lr(Bf().qv_1,this.h12_1),lr(Bf().rv_1,this.i12_1)])}}class Xb extends Af{constructor(){ky(),super(),this.x12_1=new uf(ky().j12_1),this.y12_1=kv.fz(Ri());var t=Eo(sg().js_1,Ay);this.x12_1.ov(t.k10_1,Sy),this.x12_1.ov(t.l10_1,Ey),t.m10_1.append(this.y12_1),this.sz_1.append(t.e10())}my(t){var e=ky().j12_1.nv(t);this.vz(e.k12_1),this.wz(e.l12_1),this.x12_1.pv(t);for(var n=e.o12_1,i=at.y(Fi(n,10)),r=n.s();r.t();){var o=Eo("li",Oy(r.u()));i.z(o)}var s=ti(i);(function(){var t=this.y12_1;return t.replaceChildren.apply(t,[].slice.call(s.slice()))}).call(this)}}class Yb{constructor(t,e,n,i,r){this.k12_1=t,this.l12_1=e,this.m12_1=n,this.n12_1=i,this.o12_1=r}}class Gb{constructor(t,e,n,i){this.z12_1=t,this.a13_1=e,this.b13_1=n,this.c13_1=i}}class Zb extends Bb{constructor(){Eb=null,super(),Eb=this,this.g13_1=new Jb("Overview","A Kotlin/JS wrapper around sortablejs, and the skeleton every ktjs-* wrapper starts from.","What this template is","One npm package, one module: `ktjs-sortable` maps what upstream declares as API onto Kotlin types the compiler checks. The demo is an ordinary consumer of that module — it creates the element through `createButton` and never writes a tag name as a string.","Where to start","Three pages, in the order a derived project needs them.",Hi([lr("playground","The one thing the wrapper exists for: a list created by `createSortable`, dragged, mapped properties exercised."),lr("api","What the wrapper maps, and what stays upstream's business — the table a new module is cut from."),lr("conventions","The rules the library and this template are both written by: one module per package, no dynamic, sheets that belong to their component.")])),this.h13_1=new Jb("概览","围绕 sortablejs 的 Kotlin/JS 封装，也是所有 ktjs-* 封装项目的起点模板。","这个模板是什么","一个 npm 包对应一个模块：`ktjs-sortable` 只把上游声明为 API 的东西映射成编译器能检查的 Kotlin 类型。这个 demo 就是该模块的普通使用方——通过 `createButton` 创建元素，任何地方都不把标签名写成字符串。","从这里开始","三页，按派生项目需要的顺序排。",Hi([lr("playground","封装存在的理由：用 `createSortable` 建一个列表，拖动它，再读回顺序。"),lr("api","封装映射了什么、哪些仍是上游的事——新模块照着切的那张表。"),lr("conventions","库和这个模板都遵守的规矩：一个包一个模块、不用 dynamic、样式表属于它的组件。")])),this.i13_1=qf([lr(Bf().qv_1,this.g13_1),lr(Bf().rv_1,this.h13_1)]),this.j13_1="card-link",this.k13_1=yo(zy)}}class Qb extends Af{constructor(){My(),super(),this.t13_1=new uf(My().i13_1),this.u13_1=at.i1();var t=Eo(sg().js_1,Ty);this.t13_1.ov(t.k10_1,Iy);var e=kv.ez();t.m10_1.append(this.t13_1.ov(e,Ly));var n=Eo(sg().js_1,$y);this.t13_1.ov(n.k10_1,Ny),this.t13_1.ov(n.l10_1,Py);var i,r=U_().js_1;n.m10_1.append(Eo(r,(i=this,t=>{t.a10(240);var e=ti(function(t){for(var e=ji(["playground","api","conventions"]),n=at.y(Fi(e,10)),i=e.s();i.t();){var r=i.u(),o=Eo("div"),s=Wu(Dy(o)),a=Eo("a",jy(r,s)),l=t.u13_1,c=new Gb(r,a,s,o);l.z(c),n.z(a)}return n}(i));return t.b10(e.slice()),w}))),this.xz(My().k13_1),this.sz_1.append(t.e10(),n.e10())}my(t){var e=My().i13_1.nv(t);this.vz(e.v13_1),this.wz(e.w13_1),this.t13_1.pv(t);for(var n=vy().nv(t),i=this.u13_1.s();i.t();){var r=i.u(),o=n.lw_1.s1(r.z12_1);r.b13_1.cardTitle=o??r.z12_1;var s=e.b14_1.s1(r.z12_1)??"";r.c13_1.textContent=s}}}class Jb{constructor(t,e,n,i,r,o,s){this.v13_1=t,this.w13_1=e,this.x13_1=n,this.y13_1=i,this.z13_1=r,this.a14_1=o,this.b14_1=s}}class ty extends Hb{constructor(){Ob=null,super(),Ob=this,this.f15_1=new ny("Playground","A list created by `createSortable`: rows can be dragged, and the buttons drive `sort()` and `toArray()`.","Drag the rows","The rows are `vaadin-card` children of one vertical layout; `data-id` is what the wrapper reports as the order. Drag one row over another, or use the buttons.","Shuffle","Reverse","Read order","Order",ji([new iy("alpha","Alpha","the first row"),new iy("bravo","Bravo","moves by drag"),new iy("charlie","Charlie","moves by sort()"),new iy("delta","Delta","keeps its data-id"),new iy("echo","Echo","reports through toArray()")])),this.g15_1=new ny("演练场","用 `createSortable` 建的一个列表：行可以拖，按钮驱动 `sort()` 与 `toArray()`。","拖动这些行","这些行是一个垂直布局下的 `vaadin-card`；`data-id` 就是封装层报出的顺序。把一行拖到另一行上，或者直接用按钮。","打乱","倒序","读取顺序","顺序",ji([new iy("alpha","Alpha","第一行"),new iy("bravo","Bravo","靠拖动换位"),new iy("charlie","Charlie","靠 sort() 换位"),new iy("delta","Delta","保留自己的 data-id"),new iy("echo","Echo","通过 toArray() 报出")])),this.h15_1=qf([lr(Bf().qv_1,this.f15_1),lr(Bf().rv_1,this.g15_1)])}}class ey extends Af{constructor(){Fy(),super(),this.k14_1=new uf(Fy().h15_1);var t=ch(Hy);t.style.setProperty("width","100%"),t.id="sortable-list",this.l14_1=t,this.m14_1=at.i1();var e,n,i,r=og().js_1;this.n14_1=Eo(r,qy),this.o14_1=Uu(),this.p14_1=Uu(),this.q14_1=Uu(),this.s14_1=Fy().f15_1;for(var o=Fy().f15_1.b15_1.s();o.t();){var s=o.u(),a=Wu(Uy);a.setAttribute("data-id",s.i15_1),a.style.cursor="grab";var l=Eo("strong",Vy(s));a.append(l,Eo("span",Wy(s))),this.m14_1.z(a),this.l14_1.append(a)}this.r14_1=(n=this.l14_1,e=this,i=t=>(t.animation=150,t.ghostClass="sortable-ghost",t.chosenClass="sortable-chosen",t.onEnd=function(t){return e=>(By(t),w)}(e),w),i=i===y?Lb:i,Gm.create(n,function(t){var e={};return(t=t===y?$b:t)(e),e}(i)));var c=this.o14_1,d=new hh(c,"click"),u=function(t){return()=>{var e;return Ry(t).sort([(e=Ry(t).toArray())[2],e[0],e[4],e[1],e[3]],!0),By(t),w}}(this);ph(d,u);var h=this.p14_1,p=new hh(h,"click"),v=function(t){return()=>(Ry(t).sort(function(t){if(0===t.length)return t;var e,n=(e=t.length,Array(e)),i=function(t){return t.length-1|0}(t),r=0;if(r<=i)do{var o=r;r=r+1|0,n[i-o|0]=t[o]}while(o!==i);return n}(Ry(t).toArray()),!0),By(t),w)}(this);ph(p,v);var f=this.q14_1,_=new hh(f,"click"),g=function(t){return()=>(By(t),w)}(this);ph(_,g);var m=Eo(sg().js_1,Ky);this.k14_1.ov(m.k10_1,Xy),this.k14_1.ov(m.l10_1,Yy),m.m10_1.append(kv.hz(null,[this.l14_1,kv.gz([this.o14_1,this.p14_1,this.q14_1]),this.n14_1.e10()])),this.sz_1.append(m.e10()),By(this)}my(t){this.s14_1=Fy().h15_1.nv(t),this.vz(this.s14_1.t14_1),this.wz(this.s14_1.u14_1),this.k14_1.pv(t),this.o14_1.textContent=this.s14_1.x14_1,this.p14_1.textContent=this.s14_1.y14_1,this.q14_1.textContent=this.s14_1.z14_1;for(var e=this.s14_1.b15_1.s();e.t();){var n,i=e.u();t:{for(var r=this.m14_1.s();r.t();){var o=r.u();if(o.getAttribute("data-id")===i.i15_1){n=o;break t}}throw It.n("Collection contains no element matching the predicate.")}var s=n,a=Eo("strong",Gy(i));s.replaceChildren(a,Eo("span",Zy(i)))}By(this)}}class ny{constructor(t,e,n,i,r,o,s,a,l){this.t14_1=t,this.u14_1=e,this.v14_1=n,this.w14_1=i,this.x14_1=r,this.y14_1=o,this.z14_1=s,this.a15_1=a,this.b15_1=l}}class iy{constructor(t,e,n){this.i15_1=t,this.j15_1=e,this.k15_1=n}}function ry(){return pb===y&&new Nb,pb}function oy(){return vb===y&&new Db,vb}function sy(){return fb===y&&new Rb,fb}function ay(){return _b===y&&new Fb,_b}function ly(){return py(),bb}function cy(){return py(),Eo(My().js_1)}function dy(){return py(),Eo(Fy().js_1)}function uy(){return py(),Eo(gy().js_1)}function hy(){return py(),Eo(ky().js_1)}function py(){yb||(yb=!0,gb=new wf("start","lucide:sparkles"),mb=new wf("list","lucide:list-ordered"),bb=new wf("reference","lucide:book-open"))}function vy(){return fy(),Cb}function fy(){kb||(kb=!0,wb=new vf("ktjs-sortable","English","Language","Theme","Docs","Documentation","API reference","GitHub","Light","Dark","Follow browser",Hi([lr("start","Getting started"),lr("list","The wrapped list"),lr("reference","Reference")]),Hi([lr("overview","Overview"),lr("playground","Playground"),lr("api","What the wrapper maps"),lr("conventions","Conventions")])),xb=new vf("ktjs-sortable","中文","语言","外观","文档","使用文档","API 文档","GitHub 仓库","亮色","暗色","跟随浏览器",Hi([lr("start","开始"),lr("list","被封装的列表"),lr("reference","参考")]),Hi([lr("overview","概览"),lr("playground","演练场"),lr("api","封装层映射了什么"),lr("conventions","约定")])),Cb=qf([lr(Bf().qv_1,(fy(),wb)),lr(Bf().rv_1,(fy(),xb))]))}function _y(t){var e=Co(Ao(gy().f11_1)),n={};n.width=En(100)+"%",n.borderCollapse="collapse",t[e]=n;var i=Co(Ao(gy().g11_1)),r={},o=En(6)+"px",s=En(8)+"px";r.padding=En(o)+" "+En(s),t[i]=r;var a=Co(Ao(gy().h11_1)),l={};return l.width=En(32)+"%",l.fontWeight=600,l.textAlign="left",t[a]=l,w}function gy(){return Ab===y&&(R_(),new qb),Ab}function my(t){return t.classList.add(gy().g11_1),w}function by(t){return t.classList.add(gy().g11_1),w}function yy(t,e){return n=>(n.append(t,e),w)}function wy(t){return t.p10(),w}function xy(t){return t.x11_1}function Cy(t){return t.y11_1}function ky(){return Sb===y&&(R_(),new Kb),Sb}function Ay(t){return t.p10(),w}function Sy(t){return t.m12_1}function Ey(t){return t.n12_1}function Oy(t){return e=>(e.textContent=t,w)}function zy(t){t[Co(Ao(My().j13_1))]={display:"flex",color:"inherit",textDecorationLine:"none"};var e,n;return t[Co((e=Ao(My().j13_1),n=En("vaadin-card"),En(e)+" > "+En(n)))]={flexGrow:1},w}function My(){return Eb===y&&(R_(),new Zb),Eb}function Ty(t){return t.p10(),w}function Iy(t){return t.x13_1}function Ly(t){return t.y13_1}function $y(t){return t.p10(),w}function Ny(t){return t.z13_1}function Py(t){return t.a14_1}function Dy(t){return e=>(sh(e,Xu().et_1,[]),e.titleHeadingLevel=4,e.append(t),w)}function jy(t,e){return n=>(n.href="#/"+t,n.classList.add(My().j13_1),n.dataset.route=t,n.append(e),w)}function Ry(t){var e=t.r14_1;if(null!=e)return e;xe("sortable")}function By(t){t.n14_1.h10(t.s14_1.a15_1+": "+Ce(Ry(t).toArray(),", "))}function Fy(){return Ob===y&&(R_(),new ty),Ob}function Hy(t){return sh(t,uh().tu_1,[]),w}function qy(t){return t.g10(),w}function Uy(t){return sh(t,Xu().ft_1,[]),w}function Vy(t){return e=>(e.textContent=t.j15_1,w)}function Wy(t){return e=>(e.textContent=t.k15_1,w)}function Ky(t){return t.p10(),w}function Xy(t){return t.v14_1}function Yy(t){return t.w14_1}function Gy(t){return e=>(e.textContent=t.j15_1,w)}function Zy(t){return e=>(e.textContent=t.k15_1,w)}return qn(Nb),Rn(Pb,"ApiPageDefaultReference",Pb),qn(Db),Rn(jb,"ConventionsPageDefaultReference",jb),qn(Rb),Rn(Bb,"OverviewPageDefaultReference",Bb),qn(Fb),Rn(Hb,"PlaygroundPageDefaultReference",Hb),qn(qb),Rn(Ub,"ApiPage",Ub),Rn(Vb,"ApiRow"),Rn(Wb,"ApiTexts"),qn(Kb),Rn(Xb,"ConventionsPage",Xb),Rn(Yb,"ConventionsTexts"),Rn(Gb,"CardLink"),qn(Zb),Rn(Qb,"OverviewPage",Qb),Rn(Jb,"OverviewTexts"),qn(ty),Rn(ey,"PlaygroundPage",ey),Rn(ny,"PlaygroundTexts"),Rn(iy,"PlaygroundItemTexts"),function(){var t=new pf(y,"ktjs-sortable-language");t.wv();var e=new Lf;e.q10(),l_().js_1;var n=document.getElementById("demo"),i=n instanceof gf?n:null;if(null==i)throw $t.n2(En('index.html has no <ktjs-demo-layout id="demo">'));i.py(new mf(function(){py();var t=(py(),gb),e=new yf("overview",t,y,cy),n=(py(),mb),i=new yf("playground",n,y,dy),r=ly(),o=new yf("api",r,y,uy),s=ly();return new bf(ji([e,i,o,new yf("conventions",s,y,hy)]))}(),t,e,vy(),"Kotlin/JS 2.4.21","https://shijianjs.github.io/ktjs-sortable/","https://shijianjs.github.io/ktjs-sortable/api/","https://github.com/shijianjs/ktjs-sortable","img/ktjs-sortable-logo.png"))}(),{}})());
//# sourceMappingURL=demo.js.map