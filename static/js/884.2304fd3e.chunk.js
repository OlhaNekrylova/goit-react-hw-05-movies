"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{884:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(433),a=r(861),i=r(439),c=r(757),s=r.n(c),o=r(791),u=r(87),l=r(307),m=r(689),f=r(230),p={list:"MoviesSearchList_list__9ZVMD",movieLink:"MoviesSearchList_movieLink__lnMUU",movieImg:"MoviesSearchList_movieImg__YEWcc",movieTitle:"MoviesSearchList_movieTitle__7XDOJ"},h=r(184),v=function(e){var t=e.items,r=(0,m.TH)(),n=t.map((function(e,t){var n=e.movieId,a=e.title,i=e.poster_path;return(0,h.jsx)("li",{className:p.item,children:(0,h.jsxs)(u.rU,{className:p.movieLink,state:{from:r},to:"/movies/".concat(n),children:[(0,h.jsx)("img",{src:i?"https://image.tmdb.org/t/p/original/".concat(i):f,alt:a,className:p.movieImg}),(0,h.jsx)("p",{className:p.movieTitle,children:a})]})},t)}));return(0,h.jsx)("ul",{className:p.list,children:n})},d=(0,o.memo)(v);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}v.defaultProps={items:[]};var x=function(e){var t=e.initialState,r=e.onSubmit,n=(0,o.useState)(j({},t)),a=(0,i.Z)(n,2),c=a[0],s=a[1],u=(0,o.useCallback)((function(e){var t=e.target,r=t.name,n=t.value;s((function(e){return j(j({},e),{},b({},r,n))}))}),[s]);return{state:c,setState:s,handleChange:u,handleSubmit:function(e){e.preventDefault(),r(j({},c)),s(j({},t))}}},S={search:""},_={},y=function(e){var t=e.onSubmit,r=x({initialState:S,onSubmit:t}),n=r.state,a=r.handleChange,i=r.handleSubmit,c=n.search;return(0,h.jsx)("form",{className:_.form,onSubmit:i,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"",children:"Search movies"}),(0,h.jsx)("input",{value:c,onChange:a,name:"search",placeholder:"Search",required:!0})]})})},w=(0,o.memo)(y);y.defaultProps={initialState:{search:""}};var O={},k=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),r=t[0],c=t[1],m=(0,o.useState)(!1),f=(0,i.Z)(m,2),p=f[0],v=f[1],b=(0,o.useState)(null),g=(0,i.Z)(b,2),j=g[0],x=g[1],S=(0,u.lr)(),_=(0,i.Z)(S,2),y=_[0],k=_[1],Z=y.get("search"),P=y.get("page");(0,o.useEffect)((function(){if(Z){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,l.V0)(Z,P);case 4:t=e.sent,r=t.results,c((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z,P,v,c,x]);var L=(0,o.useCallback)((function(e){var t=e.search;k({search:t,page:1}),c([])}),[k]),C=(0,o.useCallback)((function(){k({search:Z,page:Number(P)+1})}),[Z,P,k]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w,{initialState:{search:Z},onSubmit:L}),(0,h.jsx)(d,{items:r}),j&&(0,h.jsx)("p",{className:O.errorMessage,children:j}),p&&(0,h.jsx)("p",{children:"...Load movies"}),Boolean(r.length)&&(0,h.jsx)("button",{onClick:C,children:"Load more"})]})},Z=function(){return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)(k,{})})}},307:function(e,t,r){r.d(t,{Pg:function(){return u},V0:function(){return o},_L:function(){return s}});var n=r(861),a=r(757),i=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"682f4219ed4d8b2eaabdbacd40ee2053",language:"en-US"}}),s=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,c.get("/trending/movie/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.next=3,c.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.next=3,c.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,r){e.exports=r.p+"static/media/placeholder.5a3a41d429b0e3eef4fe.jpg"}}]);
//# sourceMappingURL=884.2304fd3e.chunk.js.map