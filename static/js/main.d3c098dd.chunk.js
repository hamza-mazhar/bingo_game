(this.webpackJsonpbingo_game=this.webpackJsonpbingo_game||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),a=n.n(o),i=(n(15),n(10)),s=n(7),u=n(4),l=n(2),d=n(0);function h(e){var t=e.id,n=e.children,c=e.onToggle,r=e.isSet;return Object(d.jsx)(d.Fragment,{children:"12"===t?Object(d.jsx)("div",{className:"tile  ".concat(r?"tile--set":""),children:n},t):Object(d.jsx)("div",{onClick:c,className:"tile ".concat(r?"tile--set":""),children:n},t)})}var j=n(9),b=n.n(j),g=(n(17),b()(["0  (child noises in the background)","1  Hello, hello","2  I need to jump another call","3  can everyone go on mute","4  could you please get closer to the mic","5  (loud painful echo/ feedback)","6  Next slide please","7  can we take this offline?","8  is ___ on the call?","9  could you share the slides afterwards?","10 can somebody grant presenter rights?","11 can you email that to everyone?","13 sorry I had a problems loging in","14 (animal noises in the background)","15 sorry I didn't found  the conference id","16 i was having connection issue ","17 i will have to get back to you","18 who just joined?","19 sorry something ___ with my calender","20 do you see any screen?","21 let wait for__ !","22 you will send the minutes?","23 sorry I was on the mute","24 can you repeat please?"]));g.splice(12,0,["12","CONF CALL BINGO"]),g.reduce((function(e,t,n){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},n,t))}),{});var f=function(e,t){for(var n=!0,c=Object.keys(e),r=0;r<t;r++)if(!c.includes(t[r].toString()))return!1;for(var o=0;o<t.length;o++)e[t[o]]||(n=!1);return n},O=function(e,t){var n=0;if(Object.keys(e).length<5)n=0;else for(var c=0;c<t.length;c++)f(e,t[c])&&n++;return n};var m=function(){var e=Object(c.useState)({checked:{12:!0}}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(0),a=Object(s.a)(o,2),j=a[0],b=a[1],f=function(e){var t=function(e){var t=0,n=[0,1,2,3,4];return Object.keys(e).length<5?t=0:(n.every((function(t){return e[5*t+t]}))&&t++,n.every((function(t){return e[5*t+4-t]}))&&t++),t}(e)+O(e,[[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24]])+O(e,[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]]);b(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Bingo"}),Object(d.jsx)("div",{className:"wrapper",children:Object.keys(g).map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h,{id:e,isSet:!!n.checked[e],onToggle:function(){return function(e){return r((function(t){var n=Object(l.a)(Object(l.a)({},t.checked),{},Object(u.a)({},e,!t.checked[e])),c=f(n);return Object(l.a)(Object(l.a)({},t),{},{checked:n,won:c})}))}(e)},children:g[e]},e)})}))}),j&&j>0?Object(i.a)(Array(j)).map((function(e,t){return Object(d.jsx)("span",{className:"busterCards",children:"\u2666 Bingo "},t)})):Object(d.jsx)(d.Fragment,{})]})};var v=function(){return Object(d.jsx)(m,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.d3c098dd.chunk.js.map