(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,n){"use strict";n.r(t);n(25),n(15),n(24),n(36),n(37);var o=n(10),r=n(63),l=(n(11),n(268)),c=n(148);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Home",components:{"site-header":function(){return n.e(6).then(n.bind(null,273))}},mixins:[{data:function(){return{scroll:null,element:null,timelineIn:null,timelineOut:null,elements:{},y:{current:0,start:0,end:0}}},methods:{show:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.a.timeline;return new Promise((function(n){t.call((function(){n()})),e.addEventListeners()}))},hide:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.a.timeline;return new Promise((function(n){e.removeEventListeners(),t.call((function(){n()}))}))},onMouseDown:function(e){var t=e.clientY;this.isMouseDown=!0,this.y.start=t,this.y.current=this.scroll.scroll.instance.scroll.y},onMouseMove:function(e){var t=e.clientY;if(this.isMouseDown){this.y.end=t;var n=2*(this.y.start-this.y.end),o=this.scroll.scroll;o.instance.delta.y=this.y.current+n,o.instance.delta.y=Object(c.clamp)(o.instance.delta.y,0,o.instance.limit),o.isScrolling=!0,o.checkScroll()}},onMouseUp:function(e){e.clientY;this.isMouseDown=!1},addEventListeners:function(){this.scroll&&(this.onMouseDownEvent=this.onMouseDown.bind(this),this.onMouseMoveEvent=this.onMouseMove.bind(this),this.onMouseUpEvent=this.onMouseUp.bind(this),window.addEventListener("mousedown",this.onMouseDownEvent),window.addEventListener("mousemove",this.onMouseMoveEvent),window.addEventListener("mouseup",this.onMouseUpEvent),window.addEventListener("resize",this.onResize))},removeEventListeners:function(){this.scroll&&(window.removeEventListener("mousedown",this.onMouseDownEvent),window.removeEventListener("mousemove",this.onMouseMoveEvent),window.removeEventListener("mouseup",this.onMouseUpEvent),window.removeEventListener("resize",this.onResize))}}}],computed:d({},Object(r.c)(["scrollToTarget","scrollEvent"])),watch:{scrollEvent:function(){this.scroll&&""!==this.scrollToTarget&&this.scroll.scrollTo(this.scrollToTarget)}},mounted:function(){var e=this;this.element=this.$el,this.$nextTick((function(){setTimeout((function(){return e.createScroll()}),300)}))},beforeDestroy:function(){this.scroll&&this.scroll.destroy()},methods:d(d({},Object(r.b)(["setTarget"])),{},{createScroll:function(){this.scroll=new this.locomotiveScroll({el:this.element,scrollbarClass:"c-scrollbar",getDirection:!0,getPosition:!0,smooth:!0}),this.scroll.on("scroll",(function(e){e.scroll.y>30?document.documentElement.classList.add("is-scrolled"):document.documentElement.classList.remove("is-scrolled"),e.scroll.y>100&&document.documentElement.setAttribute("data-direction",e.direction)}))},onResize:function(){this.scroll&&this.scroll.update()}})},m=n(48),component=Object(m.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"landing",attrs:{"data-scroll-container":""}},[t("site-header")],1)}),[],!1,null,null,null);t.default=component.exports}}]);