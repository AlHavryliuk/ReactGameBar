"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{4905:function(n,e,t){t(2791);var r=t(6358),o=t(184);e.Z=function(n){var e=n.children;return(0,o.jsx)(r.I,{children:e})}},6358:function(n,e,t){t.d(e,{I:function(){return s},N:function(){return p}});var r,o,i,a,c,l=t(168),u=t(6444),d=t(4140),s=u.ZP.div(r||(r=(0,l.Z)(["\n  max-width: 1240px;\n  padding: 60px 15px 15px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n\n  ","\n\n  ","\n"])),(0,d.M)(o||(o=(0,l.Z)(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))),(0,d.a)(i||(i=(0,l.Z)(["\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 15px 15px;\n  "])))),p=u.ZP.h1(a||(a=(0,l.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n  display: none;\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(0,d.a)(c||(c=(0,l.Z)(["\n    display: block;\n    margin: 0;\n  "]))))},3329:function(n,e,t){t.d(e,{$:function(){return s},s:function(){return d}});var r,o,i,a=t(168),c=t(1087),l=t(6444),u=t(4140),d=l.ZP.div(r||(r=(0,a.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n  transition: all 0.5s;\n\n  & img {\n    object-fit: cover;\n    /* height: 175px; */\n    height: 200px;\n  }\n\n  & h3 {\n    color: ",";\n    text-align: center;\n    padding: 0 0 20px;\n  }\n\n  &:hover {\n    scale: 1.05;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n    ","\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, black, transparent);\n  }\n"])),(function(n){return n.theme.cardBackgroundColor}),(function(n){return n.theme.mainTextColor}),(0,u.a)(o||(o=(0,a.Z)(["\n      scale: 1;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  "])))),s=(0,l.ZP)(c.OL)(i||(i=(0,a.Z)(["\n  text-decoration: none;\n"])))},3954:function(n,e,t){t.d(e,{n:function(){return i}});var r,o=t(168),i=t(6444).ZP.h1(r||(r=(0,o.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.mainTextColor}))},616:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,i,a=t(4905),c=t(9434),l=t(3361),u=t(3329),d=t(3954),s=t(184),p=function(){var n=(0,c.v9)(l.p.gamesPagination);return(0,s.jsx)(s.Fragment,{children:n.length?n.map((function(n){var e=n.id,t=n.background_image_additional,r=n.name;return(0,s.jsx)(u.$,{to:"/details/".concat(e),children:(0,s.jsxs)(u.s,{children:[(0,s.jsx)("img",{width:"100%",src:t,alt:"game_".concat(r)}),(0,s.jsx)("h3",{children:r})]})},e)})):(0,s.jsx)(d.n,{children:"The list of favorite games is empty..."})})},x=t(168),h=t(6444),g=t(4140),f=h.ZP.button(r||(r=(0,x.Z)(["\n  max-width: 50%;\n  width: 100%;\n  font-size: 17px;\n  padding: 15px;\n  border: none;\n  text-transform: uppercase;\n  background-color: ",";\n  cursor: pointer;\n  color: ",";\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n\n    ","\n  }\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor}),(0,g.a)(o||(o=(0,x.Z)(["\n      background-color: ",";\n      color: ",";\n  "])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor}))),m=h.ZP.div(i||(i=(0,x.Z)(["\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 15px 15px 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),v=t(7663),b=t(2791),Z=function(){var n=(0,c.I0)(),e=(0,c.v9)(l.Y.favoriteGames),t=(0,c.v9)(l.Y.per_page),r=(0,c.v9)(l.Y.localPage),o=(0,c.v9)(l.Y.currentPage);(0,b.useEffect)((function(){"details"!==o&&n((0,v.ao)())}),[n]);return(0,s.jsx)(m,{children:e.length>t&&(0,s.jsxs)(s.Fragment,{children:[r>1&&(0,s.jsx)(f,{onClick:function(){n((0,v.Pi)())},children:"Previous page"}),function(){var n=Math.ceil(e.length/t);return r<n}()&&(0,s.jsx)(f,{onClick:function(){n((0,v.jt)())},children:"Next page"})]})})},j=t(994),k=function(){var n=(0,c.I0)();return(0,b.useEffect)((function(){n((0,j.D4)("libary"))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{children:(0,s.jsx)(p,{})}),(0,s.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=616.21743633.chunk.js.map