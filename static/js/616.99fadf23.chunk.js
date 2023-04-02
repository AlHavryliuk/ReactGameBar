"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{4905:function(n,e,t){t(2791);var r=t(6358),o=t(184);e.Z=function(n){var e=n.children;return(0,o.jsx)(r.I,{children:e})}},6358:function(n,e,t){t.d(e,{I:function(){return s},N:function(){return p}});var r,o,i,a,c,l=t(168),u=t(6444),d=t(4140),s=u.ZP.div(r||(r=(0,l.Z)(["\n  max-width: 1240px;\n  padding: 60px 15px 15px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n\n  ","\n\n  ","\n"])),(0,d.M)(o||(o=(0,l.Z)(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))),(0,d.a)(i||(i=(0,l.Z)(["\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 15px 15px;\n  "])))),p=u.ZP.h1(a||(a=(0,l.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n  display: none;\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(0,d.a)(c||(c=(0,l.Z)(["\n    display: block;\n    margin: 0;\n  "]))))},3329:function(n,e,t){t.d(e,{$:function(){return s},s:function(){return d}});var r,o,i,a=t(168),c=t(1087),l=t(6444),u=t(4140),d=l.ZP.div(r||(r=(0,a.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n  transition: all 0.5s;\n\n  & img {\n    object-fit: cover;\n    /* height: 175px; */\n    height: 200px;\n  }\n\n  & h3 {\n    color: ",";\n    text-align: center;\n    padding: 0 0 20px;\n  }\n\n  &:hover {\n    scale: 1.05;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n    ","\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, black, transparent);\n  }\n"])),(function(n){return n.theme.cardBackgroundColor}),(function(n){return n.theme.mainTextColor}),(0,u.a)(o||(o=(0,a.Z)(["\n      scale: 1;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  "])))),s=(0,l.ZP)(c.OL)(i||(i=(0,a.Z)(["\n  text-decoration: none;\n"])))},3954:function(n,e,t){t.d(e,{n:function(){return i}});var r,o=t(168),i=t(6444).ZP.h1(r||(r=(0,o.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.mainTextColor}))},616:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,i=t(4905),a=t(9434),c=t(3361),l=t(3329),u=t(3954),d=t(184),s=function(){var n=(0,a.v9)(c.p.gamesPagination);return(0,d.jsx)(d.Fragment,{children:n.length?n.map((function(n){var e=n.id,t=n.background_image_additional,r=n.name;return(0,d.jsx)(l.$,{to:"/details/".concat(e),children:(0,d.jsxs)(l.s,{children:[(0,d.jsx)("img",{width:"100%",src:t,alt:"game_".concat(r)}),(0,d.jsx)("h3",{children:r})]})},e)})):(0,d.jsx)(u.n,{children:"The list of favorite games is empty..."})})},p=t(168),x=t(6444),h=x.ZP.button(r||(r=(0,p.Z)(["\n  max-width: 50%;\n  width: 100%;\n  font-size: 17px;\n  padding: 15px;\n  border: none;\n  text-transform: uppercase;\n  background-color: ",";\n  /* color: ","; */\n  cursor: pointer;\n  color: ",";\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.loadMoreBtnTextColor}),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor})),g=x.ZP.div(o||(o=(0,p.Z)(["\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 15px 15px 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),f=t(7663),m=t(2791),v=function(){var n=(0,a.I0)(),e=(0,a.v9)(c.Y.favoriteGames),t=(0,a.v9)(c.Y.per_page),r=(0,a.v9)(c.Y.localPage),o=(0,a.v9)(c.Y.currentPage);(0,m.useEffect)((function(){"details"!==o&&n((0,f.ao)())}),[n]);return(0,d.jsx)(g,{children:e.length>t&&(0,d.jsxs)(d.Fragment,{children:[r>1&&(0,d.jsx)(h,{onClick:function(){n((0,f.Pi)())},children:"Previous page"}),function(){var n=Math.ceil(e.length/t);return r<n}()&&(0,d.jsx)(h,{onClick:function(){n((0,f.jt)())},children:"Next page"})]})})},b=t(994),Z=function(){var n=(0,a.I0)();return(0,m.useEffect)((function(){n((0,b.D4)("libary"))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(s,{})}),(0,d.jsx)(v,{})]})}}}]);
//# sourceMappingURL=616.99fadf23.chunk.js.map