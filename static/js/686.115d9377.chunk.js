"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[686],{686:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(433),a=r(861),c=r(439),i=r(757),s=r.n(i),u=r(791),o=r(87),l=r(307),f=r(689),p=r(230),m={},h=r(184),d=function(e){var t=e.items,r=(0,f.TH)(),n=t.map((function(e){var t=e.movieId,n=e.title,a=e.poster_path;return(0,h.jsx)(o.rU,{className:m.link,to:"/movies/".concat(t),state:{from:r},children:(0,h.jsxs)("li",{className:m.item,children:[(0,h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/original/".concat(a):p,alt:n,className:m.movieImg}),(0,h.jsx)("p",{className:m.movieTitle,children:n})]})},t)}));return(0,h.jsx)("ul",{className:m.list,children:n})},v=(0,u.memo)(d);d.defaultProps={items:[]};var b=r(942),g=r(413),j=function(e){var t=e.initialState,r=e.onSubmit,n=(0,u.useState)((0,g.Z)({},t)),a=(0,c.Z)(n,2),i=a[0],s=a[1],o=(0,u.useCallback)((function(e){var t=e.target,r=t.name,n=t.value;s((function(e){return(0,g.Z)((0,g.Z)({},e),{},(0,b.Z)({},r,n))}))}),[s]);return{state:i,setState:s,handleChange:o,handleSubmit:function(e){e.preventDefault(),r((0,g.Z)({},i)),s((0,g.Z)({},t))}}},x={search:""},S={},Z=function(e){var t=e.onSubmit,r=j({initialState:x,onSubmit:t}),n=r.state,a=r.handleChange,c=r.handleSubmit,i=n.search;return(0,h.jsx)("form",{className:S.form,onSubmit:c,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"",children:"Search movies"}),(0,h.jsx)("input",{value:i,onChange:a,name:"search",placeholder:"Search",required:!0})]})})},y=(0,u.memo)(Z);Z.defaultProps={initialState:{search:""}};var w={},O=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],i=t[1],f=(0,u.useState)(!1),p=(0,c.Z)(f,2),m=p[0],d=p[1],b=(0,u.useState)(null),g=(0,c.Z)(b,2),j=g[0],x=g[1],S=(0,o.lr)(),Z=(0,c.Z)(S,2),O=Z[0],k=Z[1],P=O.get("search"),_=O.get("page");(0,u.useEffect)((function(){if(P){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,l.V0)(P,_);case 4:t=e.sent,r=t.results,i((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[P,_,d,i,x]);var C=(0,u.useCallback)((function(e){var t=e.search;k({search:t,page:1}),i([])}),[k]),N=(0,u.useCallback)((function(){k({search:P,page:Number(_)+1})}),[P,_,k]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{initialState:{search:P},onSubmit:C}),(0,h.jsx)(v,{items:r}),j&&(0,h.jsx)("p",{className:w.errorMessage,children:j}),m&&(0,h.jsx)("p",{children:"...Load movies"}),Boolean(r.length)&&(0,h.jsx)("button",{onClick:N,children:"Load more"})]})},k=function(){return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)(O,{})})}},307:function(e,t,r){r.d(t,{Pg:function(){return o},V0:function(){return u},_L:function(){return s}});var n=r(861),a=r(757),c=r.n(a),i=r(912).Z.create({BASE_URL:"https://api.themoviedb.org/3",params:{api_key:"682f4219ed4d8b2eaabdbacd40ee2053",language:"en-US"}}),s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/all/day",e.next=3,i.get("/trending/all/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.next=3,i.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.next=3,i.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,r){e.exports=r.p+"static/media/placeholder.5a3a41d429b0e3eef4fe.jpg"},942:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},413:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=686.115d9377.chunk.js.map