"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{215:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(433),a=n(861),s=n(439),c=n(757),u=n.n(c),i=n(791),o=n(643),p=n(307),f=n(87),l=n(689),m=n(230),d={},v=n(184),h=function(e){var t=e.items,n=(0,l.TH)(),r=t.map((function(e){var t=e.movieId,r=e.title,a=e.poster_path;return(0,v.jsx)(f.rU,{className:d.link,to:"/movies/".concat(t),state:{from:n},children:(0,v.jsxs)("li",{className:d.item,children:[(0,v.jsx)("img",{src:a?"https://image.tmdb.org/t/p/original/".concat(a):m,alt:r,className:d.movieImg}),(0,v.jsx)("p",{className:d.movieTitle,children:r})]})},t)}));return(0,v.jsx)("ul",{className:d.list,children:r})},g=(0,i.memo)(h);h.defaultProps={items:[]};var x=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],c=t[1],f=(0,i.useState)(!1),l=(0,s.Z)(f,2),m=l[0],d=l[1],h=(0,i.useState)(null),x=(0,s.Z)(h,2),j=x[0],w=x[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,p._L)();case 4:t=e.sent,n=t.results,c((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[m&&(0,v.jsx)(o.$1,{}),j&&(0,v.jsx)("p",{children:"Something goes wrong. Please try again."}),(0,v.jsx)(g,{items:n})]})},j=function(){return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(x,{})]})}},307:function(e,t,n){n.d(t,{Pg:function(){return o},V0:function(){return i},_L:function(){return u}});var r=n(861),a=n(757),s=n.n(a),c=n(912).Z.create({BASE_URL:"https://api.themoviedb.org/3",params:{API_KEY:"682f4219ed4d8b2eaabdbacd40ee2053",language:"en-US"}}),u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/all/day",e.next=3,c.get("/trending/all/day");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.next=3,c.get("/search/movie",{params:{query:t,page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t),e.next=3,c.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,n){e.exports=n.p+"static/media/placeholder.5a3a41d429b0e3eef4fe.jpg"}}]);
//# sourceMappingURL=215.6ef5b91e.chunk.js.map