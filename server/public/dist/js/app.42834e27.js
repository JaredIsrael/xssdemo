(function(){"use strict";var t={9161:function(t,n,e){var r=e(9242),o=e(3396),i=e.p+"img/buck.7dda8cd8.png";const u=(0,o._)("img",{alt:"Vue logo",src:i},null,-1),s=(0,o._)("h1",null,"Give me your personal data I promise I will store it safely also I promise I am sanitizing user input properly and this site is not vulnerable to cross site scripting :3",-1);function a(t,n,e,r,i,a){const c=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[u,s,(0,o.Wm)(c,{type:"name"})],64)}const c={class:"form"},l=(0,o.Uk)("What you submitted, rendered as trusted HTML in order to bypass Vue's remote code execution security measures put in place to avoid cross site scripting: "),p=["innerHTML"];function d(t,n,e,i,u,s){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.wy)((0,o._)("input",{class:"text","onUpdate:modelValue":n[0]||(n[0]=t=>u.input=t)},null,512),[[r.nr,u.input]]),(0,o._)("button",{onClick:n[1]||(n[1]=(...t)=>s.submitForm&&s.submitForm(...t))},"Submit"),(0,o.wy)((0,o._)("div",null,[l,(0,o._)("div",{innerHTML:u.submittedText},null,8,p)],512),[[r.F8,u.shouldRender]])])}var f=e(6265),m=e.n(f),v=()=>m().create({baseURL:"http://localhost:8081"}),b={submitForm(t){return v().post("submit",{data:t})}},h={name:"FormType",props:{type:String},data(){return{input:"",submittedText:"",shouldRender:!1}},methods:{submitForm(){b.submitForm(this.input),this.submittedText=this.input,this.shouldRender=!0}}},y=e(89);const g=(0,y.Z)(h,[["render",d],["__scopeId","data-v-682312df"]]);var w=g,O={name:"App",components:{Form:w}};const F=(0,y.Z)(O,[["render",a]]);var _=F;(0,r.ri)(_).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(s=!1,i<u&&(u=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(a)var l=a(e)}for(n&&n(r);c<u.length;c++)i=u[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9161)}));r=e.O(r)})();
//# sourceMappingURL=app.42834e27.js.map