"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78384],{28399:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(67294),n=a(88650),c=a.n(n),s=a(1597),l=a(64905),r=a(68636),m=a(75900),d=a.n(m);var i=e=>{let{title:t,theme:a,tabs:n=[]}=e;return o.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:c,subDirectory:l,branch:r}=a||n,m=`${c}/edit/${r}${l}/src/pages${t}`;return c?o.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(56328),b=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=c()(e,{lower:!0,strict:!0}),l=t===n,r=new RegExp(`${n}/?(#.*)?$`),m=a.replace(r,t);return o.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},o.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(o.Component);var g=h,k=a(17680),y=a(75387),x=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?o.createElement(x.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(x.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:a,location:n,Title:m}=e;const{frontmatter:d={},relativePagePath:b,titleType:h}=t,{tabs:x,title:C,theme:v,description:E,keywords:T,date:w}=d,{interiorTheme:P}=(0,y.Z)(),{site:{pathPrefix:N}}=(0,s.useStaticQuery)("2456312558"),D=N?n.pathname.replace(N,""):n.pathname,M=x?D.split("/").filter(Boolean).slice(-1)[0]||c()(x[0],{lower:!0}):"",L=v||P;return o.createElement(r.Z,{tabs:x,homepage:!1,theme:L,pageTitle:C,pageDescription:E,pageKeywords:T,titleType:h},o.createElement(i,{title:m?o.createElement(m,null):C,label:"label",tabs:x,theme:L}),x&&o.createElement(g,{title:C,slug:D,tabs:x,currentTab:M}),o.createElement(k.Z,{padded:!0},a,o.createElement(u,{relativePagePath:b}),o.createElement(f,{date:w})),o.createElement(p.Z,{pageContext:t,location:n,slug:D,tabs:x,currentTab:M}),o.createElement(l.Z,null))}},73529:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return y}});var o=a(45987),n=(a(67294),a(64983)),c=a(28399);const s=["components"],l={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=r("PageDescription"),d=r("Row"),i=r("Column"),u=r("ResourceCard"),p=r("MdxIcon"),b=r("ComponentDemo"),h=r("ComponentVariant"),g={_frontmatter:l},k=c.Z;function y(e){let{components:t}=e,a=(0,o.Z)(e,s);return(0,n.kt)(k,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Preview the checkbox component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,n.kt)("h2",null,"Documentation"),(0,n.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,n.kt)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-checkbox--checkbox",mdxType:"ResourceCard"},(0,n.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,n.kt)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-checkbox--basic",mdxType:"ResourceCard"},(0,n.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,n.kt)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcheckbox--default",mdxType:"ResourceCard"},(0,n.kt)(p,{name:"vue",mdxType:"MdxIcon"}))),(0,n.kt)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-checkbox--default",mdxType:"ResourceCard"},(0,n.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,n.kt)("h2",null,"Live demo"),(0,n.kt)(b,{components:[{id:"checkbox",label:"Checkbox"}],mdxType:"ComponentDemo"},(0,n.kt)(h,{id:"checkbox",knobs:{Checkbox:["indeterminate","disabled","hideLabel"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-checkbox--checkbox",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-checkbox--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcheckbox--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=checkbox","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-checkbox--default"},mdxType:"ComponentVariant"},'\n<fieldset className="cds--fieldset">\n  <legend className="cds--label">Checkbox heading</legend>\n  <Checkbox defaultChecked labelText="Checkbox label" id="checked" />\n  <Checkbox labelText="Checkbox label" id="checked-2" />\n</fieldset>\n')))}y.isMDXComponent=!0}}]);