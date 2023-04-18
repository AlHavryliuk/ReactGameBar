"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{4905:function(n,e,r){r(2791);var t=r(6358),o=r(184);e.Z=function(n){var e=n.children;return(0,o.jsx)(t.I,{children:e})}},6358:function(n,e,r){r.d(e,{I:function(){return s},N:function(){return p}});var t,o,i,a,c,u=r(168),l=r(6444),d=r(4140),s=l.ZP.div(t||(t=(0,u.Z)(["\n  max-width: 1240px;\n  padding: 60px 15px 15px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n\n  ","\n\n  ","\n"])),(0,d.M)(o||(o=(0,u.Z)(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))),(0,d.a)(i||(i=(0,u.Z)(["\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 15px 15px;\n  "])))),p=l.ZP.h1(a||(a=(0,u.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n  display: none;\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(0,d.a)(c||(c=(0,u.Z)(["\n    display: block;\n    margin: 0;\n  "]))))},3329:function(n,e,r){r.d(e,{$:function(){return s},s:function(){return d}});var t,o,i,a=r(168),c=r(1087),u=r(6444),l=r(4140),d=u.ZP.div(t||(t=(0,a.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n  transition: all 0.5s;\n  border-radius: 5px;\n\n  & img {\n    object-fit: cover;\n    /* height: 175px; */\n    height: 200px;\n  }\n\n  & h3 {\n    color: ",";\n    text-align: center;\n    padding: 0 0 20px;\n  }\n\n  &:hover {\n    scale: 1.05;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n    ","\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, black, transparent);\n  }\n"])),(function(n){return n.theme.cardBackgroundColor}),(function(n){return n.theme.mainTextColor}),(0,l.a)(o||(o=(0,a.Z)(["\n      scale: 1;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  "])))),s=(0,u.ZP)(c.OL)(i||(i=(0,a.Z)(["\n  text-decoration: none;\n"])))},3954:function(n,e,r){r.d(e,{n:function(){return i}});var t,o=r(168),i=r(6444).ZP.h1(t||(t=(0,o.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.mainTextColor}))},616:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o,i,a=r(4905),c=r(9434),u=r(3361),l=r(3329),d=r(3954),s=r(2791),p=r(7663),x=r(184),h=function(){var n=(0,c.v9)(u.p.gamesPagination),e=(0,c.I0)();return(0,s.useEffect)((function(){return function(){e((0,p.ao)())}}),[e]),(0,x.jsx)(x.Fragment,{children:n.length?n.map((function(n){var e=n.id,r=n.background_image_additional,t=n.name;return(0,x.jsx)(l.$,{to:"/details/".concat(e),children:(0,x.jsxs)(l.s,{children:[(0,x.jsx)("img",{width:"100%",src:r,alt:"game_".concat(t)}),(0,x.jsx)("h3",{children:t})]})},e)})):(0,x.jsx)(d.n,{children:"The list of favorite games is empty..."})})},f=r(168),g=r(6444),m=r(4140),v=g.ZP.button(t||(t=(0,f.Z)(["\n  max-width: 50%;\n  width: 100%;\n  font-size: 17px;\n  padding: 15px;\n  border: none;\n  text-transform: uppercase;\n  background-color: ",";\n  border-radius: 5px;\n  cursor: pointer;\n  color: ",";\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n\n    ","\n  }\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor}),(0,m.a)(o||(o=(0,f.Z)(["\n      background-color: ",";\n      color: ",";\n  "])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor}))),b=g.ZP.div(i||(i=(0,f.Z)(["\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 15px 15px 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),Z=function(){var n=(0,c.I0)(),e=(0,c.v9)(u.Y.favoriteGames),r=(0,c.v9)(u.Y.per_page),t=(0,c.v9)(u.Y.localPage),o=(0,c.v9)(u.Y.currentPage);(0,s.useEffect)((function(){"details"!==o&&n((0,p.ao)())}),[n]);return(0,x.jsx)(b,{children:e.length>r&&(0,x.jsxs)(x.Fragment,{children:[t>1&&(0,x.jsx)(v,{onClick:function(){n((0,p.Pi)())},children:"Previous page"}),function(){var n=Math.ceil(e.length/r);return t<n}()&&(0,x.jsx)(v,{onClick:function(){n((0,p.jt)())},children:"Next page"})]})})},j=r(994),k=function(){var n=(0,c.I0)();return(0,s.useEffect)((function(){n((0,j.D4)("libary"))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Z,{children:(0,x.jsx)(h,{})}),(0,x.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=616.b0cbfd8a.chunk.js.map