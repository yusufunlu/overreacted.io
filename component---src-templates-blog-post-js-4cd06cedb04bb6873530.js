(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("TJpk"),i=n.n(l),o=n("Wbzz");function s(e){var t=e.meta,n=e.image,a=e.title,l=e.description,s=e.slug,c=e.lang,u=void 0===c?"en":c;return r.a.createElement(o.StaticQuery,{query:"336482444",render:function(e){var o=e.site.siteMetadata,c=l||o.description,m=n?o.siteUrl+"/"+n:null,p=""+o.siteUrl+s;return r.a.createElement(i.a,Object.assign({htmlAttributes:{lang:u}},a?{titleTemplate:"%s — "+o.title,title:a}:{title:o.title+" — Yusuf Unlu Sw Blog"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:a||o.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.social.twitter},{name:"twitter:title",content:a||o.title},{name:"twitter:description",content:c}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))}})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=n("jzPQ"),o=n.n(i),s=n("p3AD"),c="Yusuf Unlu",u="https://twitter.com/yufusunlu",m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2)}},l.a.createElement("img",{src:o.a,alt:c,style:{marginRight:Object(s.a)(.5),marginBottom:0,height:Object(s.a)(2),borderRadius:"50%"}}),l.a.createElement("p",{style:{maxWidth:310}},"Personal blog about tech and nerdy stuff of"," ",l.a.createElement("a",{href:u},c),"."," "))},t}(l.a.Component);t.a=m},jzPQ:function(e,t,n){e.exports=n.p+"static/profile-pic-6dbc98fc3ec2573ac502707d4b355367.png"},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},"vPK/":function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=n("Wbzz"),o=n("mwIZ"),s=n.n(o),c=(n("vPK/"),n("SbOt")),u=n("7oih"),m=n("EYWl"),p=n("JLKy"),d=n("L6NH"),f=n("p3AD"),g=n("k7Sn"),b=function(e){return g.supportedLanguages[e].replace(/ /g," ")},h='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',E=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,r=e.editUrl,o=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return l.a.createElement("div",{className:"translations"},l.a.createElement(p.a,{style:{fontFamily:h}},t.length>0&&l.a.createElement("span",null,s&&l.a.createElement("span",null,"Originally written in:"," ","en"===n?l.a.createElement("b",null,b("en")):l.a.createElement(i.Link,{to:a("en")},"English")," • ","ru"===n?l.a.createElement("b",null,"Русский (авторский перевод)"):l.a.createElement(i.Link,{to:a("ru")},"Русский (авторский перевод)"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("span",null,"Translated by readers into: "),o.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:e},e===n?l.a.createElement("b",null,b(e)):l.a.createElement(i.Link,{to:a(e)},b(e)),t===o.length-1?"":" • ")}))),"en"!==n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),"ru"!==n&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Link,{to:a("en")},"Read the original")," • ",l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),l.a.createElement(i.Link,{to:"/"+n},"View all translated posts")," ")))},t}(l.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,r=a.previous,o=a.next,p=a.slug,g=a.translations,y=a.translatedLinks,k=e.fields.langKey,v=e.html;y.forEach((function(e){var t="/"+k+e;v=v.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),(g=g.slice()).sort((function(e,t){return b(e)<b(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7));break;case"uk":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7)),Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([n.e(0),n.e(19)]).then(n.t.bind(null,"Vjog",7)),Promise.all([n.e(0),n.e(18)]).then(n.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([n.e(0),n.e(17)]).then(n.t.bind(null,"BiVN",7));break;case"ar":Promise.all([n.e(0),n.e(16)]).then(n.t.bind(null,"xpFW",7))}}(k);var w=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(p,k),j=w("en"),P="https://github.com/yusufunlu/blog/edit/master/src/pages/"+j.slice(1,j.length-1)+"/index"+("en"===k?"":"."+k)+".md",L="https://mobile.twitter.com/search?q="+encodeURIComponent("https://yusufunlu.github.io/blog/"+j);return l.a.createElement(u.a,{location:this.props.location,title:t},l.a.createElement(m.a,{lang:k,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),l.a.createElement("main",null,l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-.8)})},Object(d.a)(e.frontmatter.date,k)," • "+Object(d.b)(e.timeToRead)),g.length>0&&l.a.createElement(E,{translations:g,editUrl:P,languageLink:w,lang:k})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:v}}),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("a",{href:L,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",l.a.createElement("a",{href:P,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),l.a.createElement("aside",null,l.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:h}}),l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(f.a)(.25)}},l.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"yusufunlu blog")),l.a.createElement(c.a,null),l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,r&&l.a.createElement(i.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(i.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))))},t}(l.a.Component);t.default=y}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4cd06cedb04bb6873530.js.map