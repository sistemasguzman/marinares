/*!
Trivia Kingsman - Vendors - 1.0.0
Copyright ©  2018 - Diego Gutierrez
Desarrollado por Esteban Serafin
https://www.facebook.com/diego.salgado.9022
*/
function detectmob(){return!!(navigator.userAgent.match(/Touch/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(e){return"string"==typeof e?parseInt(e,10):~~e}var n={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},o=0,r=function(){var e=o++;return function(t){var n=".perfect-scrollbar-"+e;return void 0===t?n:t+n}},a="WebkitAppearance"in document.documentElement.style;e.fn.perfectScrollbar=function(o,i){return this.each(function(){function s(e,n){var o=e+n,r=D-I;O=0>o?0:o>r?r:o;var a=t(O*(A-D)/(D-I));P.scrollTop(a)}function l(e,n){var o=e+n,r=L-W;H=0>o?0:o>r?r:o;var a=t(H*(M-L)/(L-W));P.scrollLeft(a)}function c(e){return x.minScrollbarLength&&(e=Math.max(e,x.minScrollbarLength)),x.maxScrollbarLength&&(e=Math.min(e,x.maxScrollbarLength)),e}function u(){var e={width:X};e.left=j?P.scrollLeft()+L-M:P.scrollLeft(),K?e.bottom=q-P.scrollTop():e.top=Q+P.scrollTop(),z.css(e);var t={top:P.scrollTop(),height:B};V?t.right=j?M-P.scrollLeft()-J-G.outerWidth():J-P.scrollLeft():t.left=j?P.scrollLeft()+2*L-M-Z-G.outerWidth():Z+P.scrollLeft(),$.css(t),U.css({left:H,width:W-_}),G.css({top:O,height:I-ee})}function d(){P.removeClass("ps-active-x"),P.removeClass("ps-active-y"),L=x.includePadding?P.innerWidth():P.width(),D=x.includePadding?P.innerHeight():P.height(),M=P.prop("scrollWidth"),A=P.prop("scrollHeight"),!x.suppressScrollX&&M>L+x.scrollXMarginOffset?(E=!0,X=L-F,W=c(t(X*L/M)),H=t(P.scrollLeft()*(X-W)/(M-L))):(E=!1,W=0,H=0,P.scrollLeft(0)),!x.suppressScrollY&&A>D+x.scrollYMarginOffset?(Y=!0,B=D-te,I=c(t(B*D/A)),O=t(P.scrollTop()*(B-I)/(A-D))):(Y=!1,I=0,O=0,P.scrollTop(0)),H>=X-W&&(H=X-W),O>=B-I&&(O=B-I),u(),E&&P.addClass("ps-active-x"),Y&&P.addClass("ps-active-y")}function f(){var t,n,o=function(e){l(t,e.pageX-n),d(),e.stopPropagation(),e.preventDefault()},r=function(){z.removeClass("in-scrolling"),e(R).unbind(N("mousemove"),o)};U.bind(N("mousedown"),function(a){n=a.pageX,t=U.position().left,z.addClass("in-scrolling"),e(R).bind(N("mousemove"),o),e(R).one(N("mouseup"),r),a.stopPropagation(),a.preventDefault()}),t=n=null}function p(){var t,n,o=function(e){s(t,e.pageY-n),d(),e.stopPropagation(),e.preventDefault()},r=function(){$.removeClass("in-scrolling"),e(R).unbind(N("mousemove"),o)};G.bind(N("mousedown"),function(a){n=a.pageY,t=G.position().top,$.addClass("in-scrolling"),e(R).bind(N("mousemove"),o),e(R).one(N("mouseup"),r),a.stopPropagation(),a.preventDefault()}),t=n=null}function v(e,t){var n=P.scrollTop();if(0===e){if(!Y)return!1;if(0===n&&t>0||n>=A-D&&0>t)return!x.wheelPropagation}var o=P.scrollLeft();if(0===t){if(!E)return!1;if(0===o&&0>e||o>=M-L&&e>0)return!x.wheelPropagation}return!0}function m(e,t){var n=P.scrollTop(),o=P.scrollLeft(),r=Math.abs(e),a=Math.abs(t);if(a>r){if(0>t&&n===A-D||t>0&&0===n)return!x.swipePropagation}else if(r>a&&(0>e&&o===M-L||e>0&&0===o))return!x.swipePropagation;return!0}function h(){function e(e){var t=e.originalEvent.deltaX,n=-1*e.originalEvent.deltaY;return(void 0===t||void 0===n)&&(t=-1*e.originalEvent.wheelDeltaX/6,n=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(t*=10,n*=10),t!==t&&n!==n&&(t=0,n=e.originalEvent.wheelDelta),[t,n]}function t(t){if(a||!(P.find("select:focus").length>0)){var o=e(t),r=o[0],i=o[1];n=!1,x.useBothWheelAxes?Y&&!E?(i?P.scrollTop(P.scrollTop()-i*x.wheelSpeed):P.scrollTop(P.scrollTop()+r*x.wheelSpeed),n=!0):E&&!Y&&(r?P.scrollLeft(P.scrollLeft()+r*x.wheelSpeed):P.scrollLeft(P.scrollLeft()-i*x.wheelSpeed),n=!0):(P.scrollTop(P.scrollTop()-i*x.wheelSpeed),P.scrollLeft(P.scrollLeft()+r*x.wheelSpeed)),d(),n=n||v(r,i),n&&(t.stopPropagation(),t.preventDefault())}}var n=!1;void 0!==window.onwheel?P.bind(N("wheel"),t):void 0!==window.onmousewheel&&P.bind(N("mousewheel"),t)}function g(){var t=!1;P.bind(N("mouseenter"),function(){t=!0}),P.bind(N("mouseleave"),function(){t=!1});var n=!1;e(R).bind(N("keydown"),function(o){if((!o.isDefaultPrevented||!o.isDefaultPrevented())&&t){for(var r=document.activeElement?document.activeElement:R.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var a=0,i=0;switch(o.which){case 37:a=-30;break;case 38:i=30;break;case 39:a=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=o.ctrlKey?-A:-D;break;case 36:i=o.ctrlKey?P.scrollTop():D;break;default:return}P.scrollTop(P.scrollTop()-i),P.scrollLeft(P.scrollLeft()+a),n=v(a,i),n&&o.preventDefault()}}})}function b(){function e(e){e.stopPropagation()}G.bind(N("click"),e),$.bind(N("click"),function(e){var n=t(I/2),o=e.pageY-$.offset().top-n,r=D-I,a=o/r;0>a?a=0:a>1&&(a=1),P.scrollTop((A-D)*a)}),U.bind(N("click"),e),z.bind(N("click"),function(e){var n=t(W/2),o=e.pageX-z.offset().left-n,r=L-W,a=o/r;0>a?a=0:a>1&&(a=1),P.scrollLeft((M-L)*a)})}function w(){function t(){var e=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===e.rangeCount?null:e.getRangeAt(0).commonAncestorContainer}function n(){r||(r=setInterval(function(){return k()?(P.scrollTop(P.scrollTop()+a.top),P.scrollLeft(P.scrollLeft()+a.left),void d()):void clearInterval(r)},50))}function o(){r&&(clearInterval(r),r=null),z.removeClass("in-scrolling"),$.removeClass("in-scrolling")}var r=null,a={top:0,left:0},i=!1;e(R).bind(N("selectionchange"),function(){e.contains(P[0],t())?i=!0:(i=!1,o())}),e(window).bind(N("mouseup"),function(){i&&(i=!1,o())}),e(window).bind(N("mousemove"),function(e){if(i){var t={x:e.pageX,y:e.pageY},r=P.offset(),s={left:r.left,right:r.left+P.outerWidth(),top:r.top,bottom:r.top+P.outerHeight()};t.x<s.left+3?(a.left=-5,z.addClass("in-scrolling")):t.x>s.right-3?(a.left=5,z.addClass("in-scrolling")):a.left=0,t.y<s.top+3?(a.top=5>s.top+3-t.y?-5:-20,$.addClass("in-scrolling")):t.y>s.bottom-3?(a.top=5>t.y-s.bottom+3?5:20,$.addClass("in-scrolling")):a.top=0,0===a.top&&0===a.left?o():n()}})}function C(t,n){function o(e,t){P.scrollTop(P.scrollTop()-t),P.scrollLeft(P.scrollLeft()-e),d()}function r(){g=!0}function a(){g=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function s(e){var t=e.originalEvent;return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function l(e){if(s(e)){b=!0;var t=i(e);f.pageX=t.pageX,f.pageY=t.pageY,p=(new Date).getTime(),null!==h&&clearInterval(h),e.stopPropagation()}}function c(e){if(!g&&b&&s(e)){var t=i(e),n={pageX:t.pageX,pageY:t.pageY},r=n.pageX-f.pageX,a=n.pageY-f.pageY;o(r,a),f=n;var l=(new Date).getTime(),c=l-p;c>0&&(v.x=r/c,v.y=a/c,p=l),m(r,a)&&(e.stopPropagation(),e.preventDefault())}}function u(){!g&&b&&(b=!1,clearInterval(h),h=setInterval(function(){return k()?.01>Math.abs(v.x)&&.01>Math.abs(v.y)?void clearInterval(h):(o(30*v.x,30*v.y),v.x*=.8,void(v.y*=.8)):void clearInterval(h)},10))}var f={},p=0,v={},h=null,g=!1,b=!1;t&&(e(window).bind(N("touchstart"),r),e(window).bind(N("touchend"),a),P.bind(N("touchstart"),l),P.bind(N("touchmove"),c),P.bind(N("touchend"),u)),n&&(window.PointerEvent?(e(window).bind(N("pointerdown"),r),e(window).bind(N("pointerup"),a),P.bind(N("pointerdown"),l),P.bind(N("pointermove"),c),P.bind(N("pointerup"),u)):window.MSPointerEvent&&(e(window).bind(N("MSPointerDown"),r),e(window).bind(N("MSPointerUp"),a),P.bind(N("MSPointerDown"),l),P.bind(N("MSPointerMove"),c),P.bind(N("MSPointerUp"),u)))}function y(){P.bind(N("scroll"),function(){d()})}function T(){P.unbind(N()),e(window).unbind(N()),e(R).unbind(N()),P.data("perfect-scrollbar",null),P.data("perfect-scrollbar-update",null),P.data("perfect-scrollbar-destroy",null),U.remove(),G.remove(),z.remove(),$.remove(),P=z=$=U=G=E=Y=L=D=M=A=W=H=q=K=Q=I=O=J=V=Z=j=N=null}function S(){d(),y(),f(),p(),b(),w(),h(),(ne||oe)&&C(ne,oe),x.useKeyboard&&g(),P.data("perfect-scrollbar",P),P.data("perfect-scrollbar-update",d),P.data("perfect-scrollbar-destroy",T)}var x=e.extend(!0,{},n),P=e(this),k=function(){return!!P};if("object"==typeof o?e.extend(!0,x,o):i=o,"update"===i)return P.data("perfect-scrollbar-update")&&P.data("perfect-scrollbar-update")(),P;if("destroy"===i)return P.data("perfect-scrollbar-destroy")&&P.data("perfect-scrollbar-destroy")(),P;if(P.data("perfect-scrollbar"))return P.data("perfect-scrollbar");P.addClass("ps-container");var L,D,M,A,E,W,H,X,Y,I,O,B,j="rtl"===P.css("direction"),N=r(),R=this.ownerDocument||document,z=e("<div class='ps-scrollbar-x-rail'>").appendTo(P),U=e("<div class='ps-scrollbar-x'>").appendTo(z),q=t(z.css("bottom")),K=q===q,Q=K?null:t(z.css("top")),_=t(z.css("borderLeftWidth"))+t(z.css("borderRightWidth")),F=t(z.css("marginLeft"))+t(z.css("marginRight")),$=e("<div class='ps-scrollbar-y-rail'>").appendTo(P),G=e("<div class='ps-scrollbar-y'>").appendTo($),J=t($.css("right")),V=J===J,Z=V?null:t($.css("left")),ee=t($.css("borderTopWidth"))+t($.css("borderBottomWidth")),te=t($.css("marginTop"))+t($.css("marginBottom")),ne="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,oe=null!==window.navigator.msMaxTouchPoints;return S(),P})}}),function(e,t){var n=function(e,t,n){var o;return function(){function r(){n||e.apply(a,i),o=null}var a=this,i=arguments;o?clearTimeout(o):n&&e.apply(a,i),o=setTimeout(r,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize"),function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function o(e,t,n){var o,r;for(o in n)n.hasOwnProperty(o)&&(r=o.replace(/ |$/g,t.eventNamespace),e.bind(r,n[o]))}function r(e,t,n){o(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function a(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function i(e,t,n){n?e.addClass(t):e.removeClass(t)}function s(e,t,n){var o="checked",r=t.is(":"+o);t.prop?t.prop(o,r):r?t.attr(o,o):t.removeAttr(o),i(e,n.checkedClass,r)}function l(e,t,n){i(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function u(t,o,r){var a,i,s;return r||(r={}),r=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},r),a=e("<div />"),i=e("<span />"),o.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&a.hide(),r.divClass&&a.addClass(r.divClass),o.wrapperClass&&a.addClass(o.wrapperClass),r.spanClass&&i.addClass(r.spanClass),s=n(t,"id"),o.useID&&s&&n(a,"id",o.idPrefix+"-"+s),r.spanHtml&&i.html(r.spanHtml),a=c(t,a,r.divWrap),i=c(t,i,r.spanWrap),l(a,t,o),{div:a,span:i}}function d(t,n){var o;return n.wrapperClass?(o=e("<span />").addClass(n.wrapperClass),o=c(t,o,"wrap")):null}function f(){var t,n,o,r;return r="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+r+'">'),e("body").append(n),o=n.get(0),t=window.getComputedStyle?window.getComputedStyle(o,"").color:(o.currentStyle||o.style||{}).color,n.remove(),t.replace(/ /g,"")!==r}function p(t){return t?e("<span />").text(t).html():""}function v(){return navigator.cpuClass&&!navigator.product}function m(){return void 0!==window.XMLHttpRequest}function h(e){var t;return!!e[0].multiple||(t=n(e,"size"),!(!t||1>=t))}function g(){return!1}function b(e,t){var n="none";o(e,t,{"selectstart dragstart mousedown":g}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var o=e.val();""===o?o=n.fileDefaultHtml:(o=o.split(/[\/\\]+/),o=o[o.length-1]),t.text(o)}function C(e,t,n){var o,r;for(o=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();o.length;)r=o.pop(),r.el.style[r.name]=r.old}function y(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),C(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function T(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var S=!0,x=!1,P=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var i,s,c,d,f;return s=t.submitDefaultHtml,e.is(":reset")&&(s=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||s}:function(){return p(n(e,"value"))||s},c=u(e,t,{divClass:t.buttonClass,spanHtml:d()}),i=c.div,r(e,i,t),f=!1,o(i,t,{"click touchend":function(){var t,o,r,a;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),o=e[0].dispatchEvent(t),e.is("a")&&o&&(r=n(e,"target"),a=n(e,"href"),r&&"_self"!==r?window.open(a,r):document.location.href=a)):e.click(),f=!1)}}),b(i,t),{remove:function(){return i.after(e),i.remove(),e.unbind(t.eventNamespace),e},update:function(){a(i,t),l(i,e,t),e.detach(),c.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,i,c;return n=u(e,t,{divClass:t.checkboxClass}),i=n.div,c=n.span,r(e,i,t),o(e,t,{"click touchend":function(){s(c,e,t)}}),s(c,e,t),{remove:T(e,t),update:function(){a(i,t),c.removeClass(t.checkedClass),s(c,e,t),l(i,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,i){function s(){w(t,p,i)}var d,f,p,m;return d=u(t,i,{divClass:i.fileClass,spanClass:i.fileButtonClass,spanHtml:i.fileButtonHtml,spanWrap:"after"}),f=d.div,m=d.span,p=e("<span />").html(i.fileDefaultHtml),p.addClass(i.filenameClass),p=c(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),r(t,f,i),s(),v()?o(t,i,{click:function(){t.trigger("change"),setTimeout(s,0)}}):o(t,i,{change:s}),b(p,i),b(m,i),{remove:function(){return p.remove(),m.remove(),t.unwrap().unbind(i.eventNamespace)},update:function(){a(f,i),w(t,p,i),l(f,t,i)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),o=" color date datetime datetime-local email month number password search tel text time url week ";return o.indexOf(t)>=0}return!1},apply:function(e,t){var o,a;return o=n(e,"type"),e.addClass(t.inputClass),a=d(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(o),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(o),a&&e.unwrap()},update:g}}},{match:function(e){return e.is(":radio")},apply:function(t,i){var c,d,f;return c=u(t,i,{divClass:i.radioClass}),d=c.div,f=c.span,r(t,d,i),o(t,i,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),s(f,t,i),{remove:T(t,i),update:function(){a(d,i),s(f,t,i),l(d,t,i)}}}},{match:function(e){return!(!e.is("select")||h(e))},apply:function(t,n){var i,s,c,d;return n.selectAutoWidth&&y(t,function(){d=t.width()}),i=u(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),s=i.div,c=i.span,n.selectAutoWidth?y(t,function(){C(e([c[0],s[0]]),{display:"block"},function(){var e;e=c.outerWidth()-c.width(),s.width(d+e),c.width(d)})}):s.addClass("fixedWidth"),r(t,s,n),o(t,n,{change:function(){c.html(t.find(":selected").html()),s.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();c.html()!==e&&t.trigger("change")},keyup:function(){c.html(t.find(":selected").html())}}),b(c,n),{remove:function(){return c.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(a(s,n),c.html(t.find(":selected").html()),l(s,t,n))}}}},{match:function(e){return!(!e.is("select")||!h(e))},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:g}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:g}}}];v()&&!m()&&(S=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(S=!1)),S?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,o,r,a=e(this);if(a.data("uniformed"))return void e.uniform.update(a);for(n=0;P.length>n;n+=1)if(o=P[n],o.match(a,t))return r=o.apply(a,t),a.data("uniformed",r),void e.uniform.elements.push(a.get(0))})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,o=e(this);n=o.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),o.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}}(jQuery);