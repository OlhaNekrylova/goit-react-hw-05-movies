"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{215:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(433),a=r(861),i=r(439),s=r(757),c=r.n(s),u=r(791),o=r(643),p=r(307),m=r(87),l=r(689),v=r(230),f={list:"PopularMoviesList_list__8ib0I",movieLink:"PopularMoviesList_movieLink__vCcJN",movieImg:"PopularMoviesList_movieImg__4HBRw",movieTitle:"PopularMoviesList_movieTitle__aLa5P"},d=r(184),h=function(e){var t=e.items,r=(0,l.TH)(),n=t.map((function(e){var t=e.id,n=e.title,a=e.poster_path;return(0,d.jsx)("li",{className:f.item,children:(0,d.jsxs)(m.rU,{className:f.movieLink,state:{from:r},to:"/movies/".concat(t),children:[(0,d.jsx)("img",{src:a?"https://image.tmdb.org/t/p/original/".concat(a):v,alt:n,className:f.movieImg}),(0,d.jsx)("p",{className:f.movieTitle,children:n})]})},t)}));return(0,d.jsx)("ul",{className:f.list,children:n})},g=(0,u.memo)(h),_=function(){var e=(0,u.useState)([]),t=(0,i.Z)(e,2),r=t[0],s=t[1],m=(0,u.useState)(!1),l=(0,i.Z)(m,2),v=l[0],f=l[1],h=(0,u.useState)(null),_=(0,i.Z)(h,2),x=_[0],b=_[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,(0,p._L)();case 4:t=e.sent,r=t.results,s((0,n.Z)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0.message);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsxs)(d.Fragment,{children:[v&&(0,d.jsx)(o.$1,{}),x&&(0,d.jsx)("p",{children:"Something goes wrong. Please try again."}),(0,d.jsx)(g,{items:r})]})},x=function(){return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{children:"Trending today"}),(0,d.jsx)(_,{})]})}},307:function(e,t,r){r.d(t,{Pg:function(){return o},V0:function(){return u},_L:function(){return c}});var n=r(861),a=r(757),i=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"682f4219ed4d8b2eaabdbacd40ee2053",language:"en-US"}}),c=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,s.get("/trending/movie/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.next=3,s.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.next=3,s.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,r){e.exports=r.p+"static/media/placeholder.5a3a41d429b0e3eef4fe.jpg"}}]);
//# sourceMappingURL=215.704cf826.chunk.js.map