(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(298)),i={title:"Plot / Interval / Annotation"},l={unversionedId:"examples/plot-interval-annotation",id:"examples/plot-interval-annotation",isDocsHomePage:!1,title:"Plot / Interval / Annotation",description:"Add annotations to a column plot.",source:"@site/docs/examples/plot-interval-annotation.md",slug:"/examples/plot-interval-annotation",permalink:"/wave/docs/examples/plot-interval-annotation",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-annotation.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Helix",permalink:"/wave/docs/examples/plot-interval-helix"},next:{title:"Plot / Interval / Annotation / Transpose",permalink:"/wave/docs/examples/plot-interval-annotation-transpose"}},c=[],p={rightToc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Add annotations to a column plot."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(418).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 20\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Categorical-Numeric',\n    data=data('product price', n),\n    plot=ui.plot([\n        ui.mark(type='interval', x='=product', y='=price', y_min=0, y_max=100),\n        ui.mark(x='C10', y=80, label='point'),\n        ui.mark(x='C13', label='vertical line'),\n        ui.mark(y=40, label='horizontal line'),\n        ui.mark(x='C6', x0='C3', label='vertical region'),\n        ui.mark(y=70, y0=60, label='horizontal region')\n    ])\n))\nv.data = [(c, x) for c, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},418:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-interval-annotation-ad30e4c2b779c452d7ab7d805f037c43.png"}}]);