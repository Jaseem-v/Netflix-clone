(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){},6:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(17),n=c.n(i),l=(c(26),c(4)),r="bc1e602f5d47ff2ed2cfb9184d7a6236",o="https://image.tmdb.org/t/p/original",d=(c(27),c(18)),j=c.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b=c(0);var u=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){j.get("trending/all/week?api_key=".concat(r,"&language=en-US")).then((function(e){var t=e.data.results[Math.floor(Math.random()*e.data.results.length)];a(t)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(c?o+c.backdrop_path:"",")")},children:[Object(b.jsx)("div",{className:"left-shadow",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsxs)("h1",{children:[c?c.title?c.title:c.name:""," "]})}),Object(b.jsxs)("div",{className:"cta",children:[Object(b.jsxs)("button",{className:"btn play",children:[Object(b.jsx)("i",{className:"fas fa-play"}),"Play"]}),Object(b.jsxs)("button",{className:"btn mylist",children:[Object(b.jsx)("i",{className:"fas fa-plus"}),"Mylist"]})]}),Object(b.jsx)("div",{className:"discription",children:Object(b.jsx)("p",{children:c?c.overview:""})})]})}),Object(b.jsx)("div",{className:"fade"})]})})},h=c(7);c(46),c(6);var m=function(e){return Object(b.jsxs)("div",{children:[e.show?Object(b.jsx)("div",{className:"backdrop"}):null,Object(b.jsx)("button",{className:"btn-x",onClick:e.toggleBackdrop,children:"x"})]})};var v=function(e){var t=o+e.movie.backdrop_path,c={backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"right",backgroundRepeat:"no-repeat"};return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{show:e.show,toggleBackdrop:e.close}),Object(b.jsxs)("div",{style:e.youtubeID?null:c,className:e.show?"modal show":"modal hide",children:[e.children,console.log(e.children.movie)]})]})},O=c(19),x=function(e){var t=e.movie,c=e.youtubeID,s=e.setYoutubeID;return Object(b.jsxs)("div",{className:"modal-details",children:[Object(b.jsx)("div",{className:"modal-header",children:t.name||t.title}),Object(b.jsxs)("div",{className:"modal-overview",children:[Object(b.jsxs)("div",{style:{color:"green",fontWeight:"bold",marginRight:6},children:["Rating ",t.vote_average,"/10"]}),Object(b.jsxs)("div",{children:["Release Date: ",t.first_air_date||t.release_date]})]}),Object(b.jsx)("div",{className:"modal-body",children:t.overview}),Object(b.jsxs)("div",{className:"modal-btn",children:[Object(b.jsxs)("button",{className:"btn1",onClick:function(){j.get("/movie/".concat(t.id,"/videos?api_key=").concat(r,"&language=en-US")).then((function(e){0!==e.data.results.length?s(e.data.results[0]):alert("oops no videos,Try another movie")}))},children:[Object(b.jsx)("i",{className:"play icon"})," Play"]}),Object(b.jsxs)("button",{className:"btn2",children:[Object(b.jsx)("i",{className:"plus icon"})," My list"]})]}),Object(b.jsx)("div",{className:"youtube",children:c&&Object(b.jsx)(O.a,{videoId:c.key,opts:{width:"99%",playerVars:{autoplay:1}},className:"youtube-iframer",id:"youtube-iframer"})})]})};var g=function(e){var t=e.obj,c=e.key,a=e.setCard,i=e.card,n=e.sizeSmall,r=Object(s.useState)(""),d=Object(l.a)(r,2),j=d[0],u=d[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{onClick:function(e){a(i.filter((function(e){return e.simpleId===t.simpleId&&(t.isShowing=!0),t})))},className:n?"small":"big",src:"".concat(o+t.backdrop_path),alt:""},c),t.isShowing?Object(b.jsx)(v,{show:t.isShowing,close:function(){a(i.filter((function(e){return e.simpleId===t.simpleId&&(t.isShowing=!1),t}))),u("")},movie:t,youtubeID:j,setYoutubeID:u,children:Object(b.jsx)(x,{movie:t,youtubeID:j,setYoutubeID:u})}):null]})};var f=function(e){var t=e.url,c=e.title,a=e.sizeSmall,i=Object(s.useState)([]),n=Object(l.a)(i,2),r=n[0],o=n[1];return Object(s.useEffect)((function(){j.get(t).then((function(e){var t=e.data.results.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{isShowing:!1,simpleId:Date.now()})}));o(t)}))}),[]),Object(b.jsxs)("div",{className:"movies",children:[Object(b.jsx)("div",{className:"catogary-title",children:Object(b.jsx)("h1",{children:c})}),Object(b.jsx)("div",{className:"movies-card",children:r.map((function(e,t){return Object(b.jsx)(g,{obj:e,setCard:o,card:r,sizeSmall:a},t)}))})]})},p=(c(60),c.p+"static/media/logo.774e8c16.png");var y=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"Navbar-left",children:[Object(b.jsx)("img",{src:p,alt:""}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"TVShows"}),Object(b.jsx)("li",{children:"Movies"}),Object(b.jsx)("li",{children:"Recently added"}),Object(b.jsx)("li",{children:"My list"})]})]}),Object(b.jsxs)("div",{className:"nav-right",children:[Object(b.jsx)("div",{className:"search",children:Object(b.jsxs)("div",{className:"searchBox",children:[Object(b.jsx)("input",{className:"searchInput",type:"text",name:"",placeholder:"Search"}),Object(b.jsx)("button",{className:"searchButton",href:"#",children:Object(b.jsx)("i",{className:"fa fa-search",children:" "})})]})}),Object(b.jsx)("div",{className:"menu",onClick:function(){var e=document.querySelector(".menu"),t=document.querySelector(".Navbar-left ul");e.classList.toggle("active"),t.classList.toggle("active")}})]})]})})},N="trending/all/week?api_key=".concat(r,"&language=en-US"),k=("discover/movie?api_key=".concat(r,"&with_genres=28"),"discover/tv?api_key=".concat(r,"&with_networks=213")),w="discover/movie?api_key=".concat(r,"&with_genres=35"),S="discover/movie?api_key=".concat(r,"&with_genres=27"),_="discover/movie?api_key=".concat(r,"&with_genres=28"),I="discover/movie?api_key=".concat(r,"&with_genres=10749"),z="discover/movie?api_key=".concat(r,"&with_genres=99");var D=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(y,{}),Object(b.jsx)(u,{}),Object(b.jsx)(f,{url:k,title:"Netflix Originals"}),Object(b.jsx)(f,{url:N,title:"Trending ",sizeSmall:!0}),Object(b.jsx)(f,{url:w,title:"Comedy",sizeSmall:!0}),Object(b.jsx)(f,{url:_,title:"Action",sizeSmall:!0}),Object(b.jsx)(f,{url:S,title:"Horror",sizeSmall:!0}),Object(b.jsx)(f,{url:I,title:"Romance",sizeSmall:!0}),Object(b.jsx)(f,{url:z,title:"Documentries",sizeSmall:!0})]})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f17c541d.chunk.js.map