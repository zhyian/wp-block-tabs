(window.webpackJsonp_wp_block_tabs=window.webpackJsonp_wp_block_tabs||[]).push([[2],{15:function(e,t,n){}}]),function(e){function t(t){for(var o,a,l=t[0],s=t[1],c=t[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={0:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp_wp_block_tabs=window.webpackJsonp_wp_block_tabs||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;r.push([16,2]),n()}([function(e,t,n){e.exports=n(13)()},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.i18n},function(e,t,n){"use strict";e.exports=function(e,t,n,o,i,r,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,i,r,a,l],d=0;(s=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.ReactDOM},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.compose},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.hooks},function(e,t,n){"use strict";var o=n(14);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(6),r=n(1);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);_n=!0);}catch(e){a=!0,i=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw i}}return r}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){d(e,t,n[t])}))}return e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}var b=n(11),g=n.n(b);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==g()(t)&&"function"!=typeof t?y(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}var k=n(3),O=n(8),S=n(5),T=n.n(S);var I=n(0),E=n.n(I),C=function(){function e(){f(this,e),d(this,"refs",{})}return p(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(j)}}]),e}();function j(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function R(e,t){return Object.keys(e).reduce((function(n,o){return-1===t.indexOf(o)&&(n[o]=e[o]),n}),{})}var B={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},D=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];switch(t){case"ms":return"ms";default:return t&&t.length?t[0].toUpperCase()+t.substr(1):""}}();function _(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function N(e,t){e.style["".concat(D,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function A(e,t){e.style["".concat(D,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function P(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function M(e,t,n){return Math.max(e,Math.min(n,t))}function H(e){return"px"===e.substr(-2)?parseFloat(e):0}function W(e){var t=window.getComputedStyle(e);return{bottom:H(t.marginBottom),left:H(t.marginLeft),right:H(t.marginRight),top:H(t.marginTop)}}function L(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function K(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function G(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function V(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var o={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?o:U(e.parentNode,t,o)}}function $(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}function F(e){var t=e.lockOffset,n=e.width,o=e.height,i=t,r=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);T()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),i=parseFloat(t),r=parseFloat(t),a=l[1]}return T()(isFinite(i)&&isFinite(r),"lockOffset value should be a finite. Given %s",t),"%"===a&&(i=i*n/100,r=r*o/100),{x:i,y:r}}function X(e){var t=e.height,n=e.width,o=e.lockOffset,i=Array.isArray(o)?o:[o,o];T()(2===i.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",o);var r=c(i,2),a=r[0],l=r[1];return[F({height:t,lockOffset:a,width:n}),F({height:t,lockOffset:l,width:n})]}function Y(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:Y(e.parentNode):null}function q(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:H(t.gridColumnGap),y:H(t.gridRowGap)}:{x:0,y:0}}var J="BUTTON",z="INPUT",Q="OPTION",Z="TEXTAREA",ee="SELECT";function te(e){var t,n="input, textarea, select, canvas, [contenteditable]",o=e.querySelectorAll(n),i=e.cloneNode(!0);return(t=i.querySelectorAll(n),function(e){if(Array.isArray(e))return l(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){"file"!==e.type&&(e.value=o[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),"CANVAS"===e.tagName&&o[t].width>0&&o[t].height>0&&e.getContext("2d").drawImage(o[t],0,0)})),i}function ne(e){return null!=e.sortableHandle}var oe=function(){function e(t,n){f(this,e),this.container=t,this.onScrollCallback=n}return p(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,o=e.minTranslate,i=e.maxTranslate,r=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=this.container,d=c.scrollTop,u=c.scrollLeft,f=c.scrollHeight,h=c.scrollWidth,p=0===d,b=f-d-c.clientHeight==0,g=0===u,y=h-u-c.clientWidth==0;n.y>=i.y-a/2&&!b?(l.y=1,s.y=10*Math.abs((i.y-a/2-n.y)/a)):n.x>=i.x-r/2&&!y?(l.x=1,s.x=10*Math.abs((i.x-r/2-n.x)/r)):n.y<=o.y+a/2&&!p?(l.y=-1,s.y=10*Math.abs((n.y-a/2-o.y)/a)):n.x<=o.x+r/2&&!g&&(l.x=-1,s.x=10*Math.abs((n.x-r/2-o.x)/r)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),ie={axis:E.a.oneOf(["x","y","xy"]),contentWindow:E.a.any,disableAutoscroll:E.a.bool,distance:E.a.number,getContainer:E.a.func,getHelperDimensions:E.a.func,helperClass:E.a.string,helperContainer:E.a.oneOfType([E.a.func,"undefined"==typeof HTMLElement?E.a.any:E.a.instanceOf(HTMLElement)]),hideSortableGhost:E.a.bool,keyboardSortingTransitionDuration:E.a.number,lockAxis:E.a.string,lockOffset:E.a.oneOfType([E.a.number,E.a.string,E.a.arrayOf(E.a.oneOfType([E.a.number,E.a.string]))]),lockToContainerEdges:E.a.bool,onSortEnd:E.a.func,onSortMove:E.a.func,onSortOver:E.a.func,onSortStart:E.a.func,pressDelay:E.a.number,pressThreshold:E.a.number,keyCodes:E.a.shape({lift:E.a.arrayOf(E.a.number),drop:E.a.arrayOf(E.a.number),cancel:E.a.arrayOf(E.a.number),up:E.a.arrayOf(E.a.number),down:E.a.arrayOf(E.a.number)}),shouldCancelStart:E.a.func,transitionDuration:E.a.number,updateBeforeSortStart:E.a.func,useDragHandle:E.a.bool,useWindowAsScrollContainer:E.a.bool},re={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},ae={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:re,shouldCancelStart:function(e){return-1!==[z,Z,ee,Q,J].indexOf(e.target.tagName)||!!P(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},le=Object.keys(ie);function se(e){T()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function ce(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}var de=Object(k.createContext)({manager:{}}),ue={index:E.a.number.isRequired,collection:E.a.oneOfType([E.a.number,E.a.string]),disabled:E.a.bool},fe=Object.keys(ue),he=n(2),pe=n(9),be=n(10),ge=n(7);class ye extends r.Component{constructor(e){super(e),this.state={index:-1}}render(){const{setAttributes:e,attributes:t,isSelected:n,moveBlockToPosition:l,order:s,setState:h,updateBlockAttributes:b,removeBlock:g,selectedBlock:w,selectBlock:S,insertBlock:I,getBlock:E,getClientIdsWithDescendants:j}=this.props,{blockID:D,activeTab:H,tabsHeadings:F,isVertical:J}=t;window.innocodeTabsBlocks=window.innocodeTabsBlocks||[];let z=null;for(const e of window.innocodeTabsBlocks)if(e.id===t.id){z=e;break}z||(z={id:this.props.block.clientId,SortableItem:null,SortableList:null},window.innocodeTabsBlocks.push(z),e({id:z.id})),F||(F=[]);const Q=this.props.block.innerBlocks,Z=(t,n)=>{e({activeControl:`${t}-${n}`,activeTab:n}),Q.forEach((e,t)=>{b(e.clientId,{isActive:n===t})})},ee=t=>{I(Object(i.createBlock)("innocode/wp-block-tab",{}),t,this.props.block.clientId),e({tabsHeadings:[...F,Object(o.__)("Tab heading","wp-block-tabs")],activeTab:t}),Z("tab-title",t)};0===t.tabsHeadings.length&&ee(0);const be=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;f(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return d(y(y(t=m(this,(e=v(n)).call.apply(e,[this].concat(i))))),"wrappedInstance",Object(k.createRef)()),t}return x(n,t),p(n,[{key:"componentDidMount",value:function(){Object(O.findDOMNode)(this).sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return T()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return Object(k.createElement)(e,a({ref:t},this.props))}}]),n}(k.Component),d(t,"displayName",L("sortableHandle",e)),n}(()=>Object(r.createElement)("span",{className:"dashicons dashicons-move drag-handle"}));z.SortableItem||(z.SortableItem=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;f(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return d(y(y(t=m(this,(e=v(n)).call.apply(e,[this].concat(i))))),"wrappedInstance",Object(k.createRef)()),t}return x(n,t),p(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,o=e.index,i=Object(O.findDOMNode)(this);i.sortableInfo={collection:t,disabled:n,index:o,manager:this.context.manager},this.node=i,this.ref={node:i},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return T()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return Object(k.createElement)(e,a({ref:t},R(this.props,fe)))}}]),n}(k.Component),d(t,"displayName",L("sortableElement",e)),d(t,"contextType",de),d(t,"propTypes",ue),d(t,"defaultProps",{collection:0}),n}(({value:e,i:t,properties:n,onChangeTitle:i,onRemoveTitle:a,toggleTitle:l})=>Object(r.createElement)("div",{className:`tab-title-${n.attributes.isVertical?"vertical-":""}wrap SortableItem${n.attributes.activeTab===t?" active":""}`,onClick:()=>l("tab-title",t)},Object(r.createElement)(he.RichText,{tagName:"div",className:"tab-title",value:e,allowedFormats:["core/bold","core/italic"],isSelected:n.attributes.activeControl==="tab-title-"+t&&n.isSelected,onChange:e=>i(e,t),placeholder:Object(o.__)("Tab Heading","wp-block-tabs")}),Object(r.createElement)("div",{className:"tab-actions"+(1===n.attributes.tabsHeadings.length?" hide":"")},Object(r.createElement)(be,null),Object(r.createElement)("span",{className:"dashicons dashicons-minus remove-tab-icon",onClick:()=>a(t)}))))),z.SortableList||(z.SortableList=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(e){var t;f(this,n),d(y(y(t=m(this,v(n).call(this,e)))),"state",{}),d(y(y(t)),"handleStart",(function(e){var n=t.props,o=n.distance,i=n.shouldCancelStart;if(2!==e.button&&!i(e)){t.touched=!0,t.position=G(e);var r=P(e.target,(function(e){return null!=e.sortableInfo}));if(r&&r.sortableInfo&&t.nodeIsChild(r)&&!t.state.sorting){var a=t.props.useDragHandle,l=r.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!P(e.target,ne))return;t.manager.active={collection:c,index:s},V(e)||"A"!==e.target.tagName||e.preventDefault(),o||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),d(y(y(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),d(y(y(t)),"handleMove",(function(e){var n=t.props,o=n.distance,i=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var r=G(e),a={x:t.position.x-r.x,y:t.position.y-r.y},l=Math.abs(a.x)+Math.abs(a.y);t.delta=a,o||i&&!(l>=i)?o&&l>=o&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),d(y(y(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),d(y(y(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),d(y(y(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),o=function(){if(n){var o=function(){var n=h.sortableInfo.index,o=W(h),i=q(t.container),c=t.scrollContainer.getBoundingClientRect(),g=a({index:n,node:h,collection:p});if(t.node=h,t.margin=o,t.gridGap=i,t.width=g.width,t.height=g.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=h.getBoundingClientRect(),t.containerBoundingRect=c,t.index=n,t.newIndex=n,t.axis={x:r.indexOf("x")>=0,y:r.indexOf("y")>=0},t.offsetEdge=U(h,t.container),t.initialOffset=G(b?u({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild(te(h)),_(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-o.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-o.top,"px"),width:"".concat(t.width,"px")}),b&&t.helper.focus(),s&&(t.sortableGhost=h,_(h,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},b){var y=f?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,m=y.top,v=y.left,w=y.width,x=m+y.height,k=v+w;t.axis.x&&(t.minTranslate.x=v-t.boundingClientRect.left,t.maxTranslate.x=k-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=m-t.boundingClientRect.top,t.maxTranslate.y=x-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(f?0:c.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(f?t.contentWindow.innerWidth:c.left+c.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(f?0:c.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(f?t.contentWindow.innerHeight:c.top+c.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?e.target:t.contentWindow,b?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(B.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),B.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:n}),d&&d({node:h,index:n,collection:p,isKeySorting:b,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),b&&t.keyMove(0)},i=t.props,r=i.axis,a=i.getHelperDimensions,l=i.helperClass,s=i.hideSortableGhost,c=i.updateBeforeSortStart,d=i.onSortStart,f=i.useWindowAsScrollContainer,h=n.node,p=n.collection,b=t.manager.isKeySorting,g=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=ce((function(){var t=h.sortableInfo.index;return Promise.resolve(c({collection:p,index:t,node:h,isKeySorting:b},e)).then((function(){}))}),(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return g&&g.then?g.then(o):o()}}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),d(y(y(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),d(y(y(t)),"handleSortEnd",(function(e){var n=t.props,o=n.hideSortableGhost,i=n.onSortEnd,r=t.manager,a=r.active.collection,l=r.isKeySorting,s=t.manager.getOrderedRefs();t.listenerNode&&(l?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(B.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),B.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),o&&t.sortableGhost&&_(t.sortableGhost,{opacity:"",visibility:""});for(var c=0,d=s.length;c<d;c++){var u=s[c],f=u.node;u.edgeOffset=null,u.boundingClientRect=null,N(f,null),A(f,null),u.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof i&&i({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:l,nodes:s},e),t.touched=!1})),d(y(y(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var o=u({},t.translate),i=0,r=0;return t.axis.x&&(o.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),i=t.translate.x-o.x),t.axis.y&&(o.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),r=t.translate.y-o.y),t.translate=o,N(t.helper,t.translate),t.scrollContainer.scrollLeft+=i,void(t.scrollContainer.scrollTop+=r)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),d(y(y(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),d(y(y(t)),"handleKeyDown",(function(e){var n=e.keyCode,o=t.props,i=o.shouldCancelStart,r=o.keyCodes,a=u({},re,void 0===r?{}:r);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||a.lift.includes(n)&&!i(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(n)&&!t.manager.active?t.keyLift(e):a.drop.includes(n)&&t.manager.active?t.keyDrop(e):a.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):a.up.includes(n)?t.keyMove(-1):a.down.includes(n)&&t.keyMove(1))})),d(y(y(t)),"keyLift",(function(e){var n=e.target,o=P(n,(function(e){return null!=e.sortableInfo})).sortableInfo,i=o.index,r=o.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:i,collection:r},t.handlePress(e)})),d(y(y(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),o=n[n.length-1].node.sortableInfo.index,i=t.newIndex+e,r=t.newIndex;if(!(i<0||i>o)){t.prevIndex=r,t.newIndex=i;var a=$(t.newIndex,t.prevIndex,t.index),l=n.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=t.containerScrollDelta,d=l.boundingClientRect||K(s,c),u=l.translate||{x:0,y:0},f=d.top+u.y-c.top,h=d.left+u.x-c.left,p=r<i,b=p&&t.axis.x?s.offsetWidth-t.width:0,g=p&&t.axis.y?s.offsetHeight-t.height:0;t.handleSortMove({pageX:h+b,pageY:f+g,ignoreTransition:0===e})}})),d(y(y(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),d(y(y(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),d(y(y(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,o=e.target,i=P(o,(function(e){return null!=e.sortableInfo}));return i&&i.sortableInfo&&!i.sortableInfo.disabled&&(n?ne(o):o.sortableInfo)}));var o=new C;return se(e),t.manager=o,t.wrappedInstance=Object(k.createRef)(),t.sortableContextValue={manager:o},t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return x(n,t),p(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var o=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof o?o():o,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:Y(e.container)||e.container,e.autoScroller=new oe(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return B[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return B[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,o=t.lockOffset,i=t.lockToContainerEdges,r=t.transitionDuration,a=t.keyboardSortingTransitionDuration,l=void 0===a?r:a,s=this.manager.isKeySorting,d=e.ignoreTransition,u=G(e),f={x:u.x-this.initialOffset.x,y:u.y-this.initialOffset.y};if(f.y-=window.pageYOffset-this.initialWindowScroll.top,f.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=f,i){var h=c(X({height:this.height,lockOffset:o,width:this.width}),2),p=h[0],b=h[1],g={x:this.width/2-p.x,y:this.height/2-p.y},y={x:this.width/2-b.x,y:this.height/2-b.y};f.x=M(this.minTranslate.x+g.x,this.maxTranslate.x-y.x,f.x),f.y=M(this.minTranslate.y+g.y,this.maxTranslate.y-y.y,f.y)}"x"===n?f.y=0:"y"===n&&(f.x=0),s&&l&&!d&&A(this.helper,l),N(this.helper,f)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,o=e.onSortOver,i=this.containerScrollDelta,r=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+i.left,s=this.offsetEdge.top+this.translate.y+i.top,c=this.manager.isKeySorting,d=this.newIndex;this.newIndex=null;for(var u=0,f=a.length;u<f;u++){var h=a[u].node,p=h.sortableInfo.index,b=h.offsetWidth,g=h.offsetHeight,y={height:this.height>g?g/2:this.height/2,width:this.width>b?b/2:this.width/2},m=c&&p>this.index&&p<=d,v=c&&p<this.index&&p>=d,w={x:0,y:0},x=a[u].edgeOffset;x||(x=U(h,this.container),a[u].edgeOffset=x,c&&(a[u].boundingClientRect=K(h,i)));var k=u<a.length-1&&a[u+1],O=u>0&&a[u-1];k&&!k.edgeOffset&&(k.edgeOffset=U(k.node,this.container),c&&(k.boundingClientRect=K(k.node,i))),p!==this.index?(t&&A(h,t),this.axis.x?this.axis.y?v||p<this.index&&(l+r.left-y.width<=x.left&&s+r.top<=x.top+y.height||s+r.top+y.height<=x.top)?(w.x=this.width+this.marginOffset.x,x.left+w.x>this.containerBoundingRect.width-y.width&&k&&(w.x=k.edgeOffset.left-x.left,w.y=k.edgeOffset.top-x.top),null===this.newIndex&&(this.newIndex=p)):(m||p>this.index&&(l+r.left+y.width>=x.left&&s+r.top+y.height>=x.top||s+r.top+y.height>=x.top+g))&&(w.x=-(this.width+this.marginOffset.x),x.left+w.x<this.containerBoundingRect.left+y.width&&O&&(w.x=O.edgeOffset.left-x.left,w.y=O.edgeOffset.top-x.top),this.newIndex=p):m||p>this.index&&l+r.left+y.width>=x.left?(w.x=-(this.width+this.marginOffset.x),this.newIndex=p):(v||p<this.index&&l+r.left<=x.left+y.width)&&(w.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(m||p>this.index&&s+r.top+y.height>=x.top?(w.y=-(this.height+this.marginOffset.y),this.newIndex=p):(v||p<this.index&&s+r.top<=x.top+y.height)&&(w.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),N(h,w),a[u].translate=w):n&&(this.sortableGhost=h,_(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=d);var S=c?this.prevIndex:d;o&&this.newIndex!==S&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:S,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return T()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?Object(O.findDOMNode)(this):e(o.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return Object(k.createElement)(de.Provider,{value:this.sortableContextValue},Object(k.createElement)(e,a({ref:t},R(this.props,le))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),n}(k.Component),d(t,"displayName",L("sortableList",e)),d(t,"defaultProps",ae),d(t,"propTypes",ie),n}(({items:e,properties:t,onChangeTitle:n,onRemoveTitle:o,toggleTitle:i,onAddTab:a})=>Object(r.createElement)("div",{className:`tabs-title${t.attributes.isVertical?"-vertical":""} SortableList`,useWindowAsScrollContainer:!0},e.map((e,a)=>Object(r.createElement)(z.SortableItem,{properties:t,key:"item-"+a,i:a,index:a,value:e,onChangeTitle:n,onRemoveTitle:o,toggleTitle:i})),Object(r.createElement)("div",{className:`tab-title-${t.attributes.isVertical?"vertical-":""}wrap`,key:t.attributes.tabsHeadings.length,onClick:()=>a(t.attributes.tabsHeadings.length)},Object(r.createElement)("span",{className:"dashicons dashicons-plus-alt"})))));const ge=Q.map(e=>e.attributes.index);return ge.every((e,t)=>e===s[t])||(Q.forEach((e,n)=>b(e.clientId,{index:n,isActive:t.activeTab===n})),h({order:ge})),w&&w.clientId!==this.props.block.clientId&&(0===Q.filter(e=>e.attributes.isActive).length&&Z("tab-title",Q.length-1),Q.filter(e=>e.clientId===w.clientId).length>0&&!w.attributes.isActive&&S(this.props.block.clientId)),(""===D||j().some(e=>"blockID"in E(e).attributes&&E(e).attributes.blockID===t.blockID))&&e({blockID:this.props.block.clientId}),[Object(r.createElement)(he.InspectorControls,null,Object(r.createElement)(pe.PanelBody,{title:Object(o.__)("Tabs Layout","wp-block-tabs")},Object(r.createElement)(pe.ToggleControl,{label:Object(o.__)("Vertical","wp-block-tabs"),checked:J,onChange:t=>e({isVertical:t})}))),Object(r.createElement)("div",{className:"tabs-wrapper"+(J?" vertical-tabs":"")},Object(r.createElement)("div",{className:"tabs-headings"+(J?" vertical-headings":"")},Object(r.createElement)(z.SortableList,{axis:J?"y":"x",properties:this.props,items:t.tabsHeadings,onSortEnd:({oldIndex:n,newIndex:o})=>{const i=t.tabsHeadings.slice(0);var r,a,s;e({tabsHeadings:(r=i,a=n,s=o,(r=r.slice()).splice(s<0?r.length+s:s,0,r.splice(a,1)[0]),r),activeTab:o}),l(Q.filter(e=>e.attributes.index===n)[0].clientId,this.props.block.clientId,this.props.block.clientId,o),Z("tab-title",n)},onRemoveTitle:t=>{e({tabsHeadings:[...F.slice(0,t),...F.slice(t+1)],activeTab:0}),g(Q.filter(e=>e.attributes.index===t)[0].clientId),Z("tab-title",0)},onAddTab:ee,toggleTitle:Z,useDragHandle:!0,onChangeTitle:(n,o)=>{e({tabsHeadings:[...t.tabsHeadings.slice(0,o),n,...t.tabsHeadings.slice(o+1)]})}})),Object(r.createElement)("div",{className:"tabs-content"+(J?" vertical-content":"")},Object(r.createElement)(he.InnerBlocks,{templateLock:!1,allowedBlocks:["innocode/wp-block-tab"],template:[["innocode/wp-block-tab"]]})))]}}var me=Object(be.compose)([Object(ge.withSelect)((e,t)=>{const{getBlock:n,getSelectedBlock:o,getClientIdsWithDescendants:i}=e("core/block-editor");return{block:n(t.clientId),selectedBlock:o(),getBlock:n,getClientIdsWithDescendants:i}}),Object(ge.withDispatch)(e=>{const{updateBlockAttributes:t,insertBlock:n,removeBlock:o,moveBlockToPosition:i,selectBlock:r}=e("core/block-editor");return{updateBlockAttributes:t,insertBlock:n,removeBlock:o,moveBlockToPosition:i,selectBlock:r}}),Object(be.withState)({order:[]})])(e=>Object(r.createElement)("div",Object(he.useBlockProps)({className:"wp-block-innocode-wp-block-tabs"}),Object(r.createElement)(ye,e))),ve=n(12);const we=Object(ve.applyFilters)("innocode.block-tab.allowed-blocks",["core/paragraph","core/heading","core/separator","core/spacer"]);var xe=Object(ge.withSelect)((e,t)=>({blockParentId:e("core/block-editor").getBlockRootClientId(t.clientId)}))(e=>{const{blockParentId:t,setAttributes:n,attributes:o}=e,{parentBlockId:i,isActive:a}=o;return""!==i&&i===t||n({parentBlockId:t}),Object(r.createElement)("div",{style:{display:a?"block":"none"}},Object(r.createElement)(he.InnerBlocks,{allowedBlocks:we,renderAppender:()=>Object(r.createElement)(he.InnerBlocks.ButtonBlockAppender,null)}))});n(15),Object(i.registerBlockType)("innocode/wp-block-tab",{title:Object(o.__)("Tab","wp-block-tabs"),parent:["innocode/wp-block-tabs"],description:Object(o.__)("Tab content block","wp-block-tabs"),category:"innocode",attributes:{index:{type:"number",default:0},isActive:{type:"boolean",default:!0},parentBlockId:{type:"string",default:""}},edit:xe,save:function(e){const{attributes:t}=e;let{index:n,parentBlockId:o,isActive:i}=t;return n||(n=0),Object(r.createElement)("div",he.useBlockProps.save({id:`tab-${o}-${n}`,className:i?"active":""}),Object(r.createElement)(he.InnerBlocks.Content,null))}}),Object(i.registerBlockType)("innocode/wp-block-tabs",{attributes:{blockID:{type:"string",default:""},activeTab:{type:"number",default:0},tabsHeadings:{type:"array",default:[]},isVertical:{type:"boolean",default:!1}},edit:me,save:function(e){const{attributes:t}=e,{blockID:n,tabsHeadings:o,activeTab:i,isVertical:a}=t;return Object(r.createElement)("div",he.useBlockProps.save(),Object(r.createElement)("div",{className:"tabs-wrapper"+(a?" vertical-tabs":"")},Object(r.createElement)("div",{className:"tabs-headings"+(a?" vertical-headings":"")},o.map((e,t)=>Object(r.createElement)("a",{href:`tab-${n}-${t}`,className:"tab-heading"+(i===t?" active":""),key:t},e))),Object(r.createElement)("div",{className:"tabs-content"+(a?" vertical-content":"")},Object(r.createElement)(he.InnerBlocks.Content,null))))}})}]);