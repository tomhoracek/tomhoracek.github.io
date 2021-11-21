/*!  */
!function(e,t){
"object"==typeof exports&&"object"==typeof module?module.exports=t(require("uu5g04"),require("uu5g04-bricks"),require("uu_appg01_core"),require("react"),require("uu5g04-forms"),require("module"),require("react-dom")):"function"==typeof define&&define.amd?define("login",["uu5g04","uu5g04-bricks","uu_appg01_core","react","uu5g04-forms","module","react-dom"],t):"object"==typeof exports?exports.login=t(require("uu5g04"),require("uu5g04-bricks"),require("uu_appg01_core"),require("react"),require("uu5g04-forms"),require("module"),require("react-dom")):e.login=t(e.uu5g04,e["uu5g04-bricks"],e.uu_appg01_core,e.react,e["uu5g04-forms"],e[void 0],e["react-dom"])
}(window,(function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__12__,__WEBPACK_EXTERNAL_MODULE__13__,__WEBPACK_EXTERNAL_MODULE__15__,__WEBPACK_EXTERNAL_MODULE__24__,__WEBPACK_EXTERNAL_MODULE__37__,__WEBPACK_EXTERNAL_MODULE__45__){
return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,
n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null)
;if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){
var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=409)}({0:function(e,t){
e.exports=__WEBPACK_EXTERNAL_MODULE__0__},1:function(e,t,n){"use strict";var o=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
;t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){
var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))
}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=a(a({},o.a),{},{TAG:o.a.namespace.bricks.tag,
CSS:o.a.namespace.bricks.css});t.a=s},10:function(e,t){function n(e){var t=document.head||document.body
;e.setAttribute("data-owner","uu_identitymanagement_maing01-client/uu_identitymanagement_maing01-client@1.12.0-dev"),e.setAttribute("data-emotion","uuidentitymanagement"),
e.setAttribute("data-tech","less");for(var n=t.querySelectorAll('style[data-emotion="uuidentitymanagement"]'),o=n.length-1;o>=0;o--){var i=n[o]
;if("less"===i.getAttribute("data-tech"))return void i.parentNode.insertBefore(e,i.nextSibling)}for(var a=0;a<n.length;a++){var r=n[a]
;if("less"!==r.getAttribute("data-tech"))return void r.parentNode.insertBefore(e,r)}var s=document.querySelector("[data-uu-app-styles-insert-before]");s?s.parentNode.insertBefore(e,s):t.appendChild(e)
}var o={appendChild:n,insertBefore:n,insertAfter:n};e.exports=function(){return o}},11:function(e,t,n){var o,i,a={},r=(o=function(){return window&&document&&document.all&&!window.atob},function(){
return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e()
;if(void 0===t[e]){var o=s.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),u=null,d=0,l=[],m=n(38)
;function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=a[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(y(o.parts[r],t))}else{
var s=[];for(r=0;r<o.parts.length;r++)s.push(y(o.parts[r],t));a[o.id]={id:o.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],o={},i=0;i<e.length;i++){var a=e[i],r=t.base?a[0]+t.base:a[0],s={css:a[1],
media:a[2],sourceMap:a[3]};o[r]?o[r].parts.push(s):n.push(o[r]={id:r,parts:[s]})}return n}function f(e,t){var n=c(e.insertInto)
;if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1]
;if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{
if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
;var i=c(e.insertAt.before,n);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function k(e){
var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return v(t,e.attrs),f(e,t),t}
function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,o,i,a;if(t.transform&&e.css){
if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var r=d++;n=u||(u=k(t)),o=S.bind(null,n,r,!1),i=S.bind(null,n,r,!0)
}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){
var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),f(e,t),t}(t),o=w.bind(null,n,t),i=function(){g(n),
n.href&&URL.revokeObjectURL(n.href)}):(n=k(t),o=P.bind(null,n),i=function(){g(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}
e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment")
;(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t)
;return p(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var r=n[i];(s=a[r.id]).refs--,o.push(s)}e&&p(h(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){
for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var b,C=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function S(e,t,n,o){var i=n?"":o.css
;if(e.styleSheet)e.styleSheet.cssText=C(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function P(e,t){
var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}
function w(e,t,n){var o=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(o=m(o)),
i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(r),
s&&URL.revokeObjectURL(s)}},12:function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__12__},13:function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__13__},14:function(e,t,n){"use strict"
;var o=n(0),i=n.n(o),a=n(13);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s={
APP_BASE_URI:location.protocol+"//"+location.host+document.querySelector("base").getAttribute("data-uu-app-base"),call:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
;a.AppClient.AppClient[e](t,n.data||null,o).then((function(e){return n.done(e.data)}),(function(e){return n.fail(e)}))},loadOidcClientConfiguration:function(e){
var t=s.getCommandUri("loadOidcClientConfiguration");(e=e||{}).data=e.data||{},s.call("get",t,e)},checkIdentityLoginStatus:function(e){var t=s.getCommandUri("checkIdentityLoginStatus")
;s.call("post",t,e)},loadConsents:function(e){var t=s.getCommandUri("loadConsents");s.call("get",t,e)},sendAuthenticationSms:function(e){var t=e.data?e.data:e;return new Promise((function(e,n){
var o=s.getCommandUri("mfa/sendAuthenticationSms");s.call("post",o,{data:t,done:e,fail:n})}))},smsAuthenticate:function(e){var t=e.data?e.data:e;return new Promise((function(e,n){
var o=s.getOidcCommandUrl("authSms/authenticate");s.call("post",o,{data:t,done:e,fail:n})}))},getCommandUri:function(e,t){var n=a.Uri.UriBuilder.parse(s.APP_BASE_URI).setUseCase(e),o=i.a.Environment
;return(o.tid||o.awid||o.vendor||o.app)&&((o.tid||o.awid)&&(o.gatewayUri&&(n.gateway=o.gatewayUri),o.tid&&(n.tid=o.tid),o.awid&&(n.awid=o.awid)),(o.vendor||o.app)&&(o.vendor&&(n.vendor=o.vendor),
o.app&&(n.app=o.app),o.subApp&&(n.subApp=o.subApp))),t&&"object"===r(t)&&t&&"object"===r(t)?n.setParameters(t).toUri().toString():n.toUri().toString()},getOidcCommandUrl:function(e,t){
var n=a.Uri.UriBuilder.parse(i.a.Environment.oidcg02Uri).setUseCase(e);return t&&"object"===r(t)&&n.setParameters(t),n.toUri().toString()}};t.a=s},15:function(e,t){
e.exports=__WEBPACK_EXTERNAL_MODULE__15__},16:function(e,t,n){"use strict";var o=n(15),i=n.n(o),a=n(0),r=(n(12),n(1));n(58);function s(e){
return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=a.Common.Component.create({
mixins:[a.Common.BaseMixin,a.Common.PureRenderMixin,a.Common.ElementaryMixin,a.Common.SectionMixin,a.Common.CcrWriterMixin,a.Forms.FormMixin],statics:{tagName:r.a.TAG+".Form",classNames:{
main:r.a.CSS+"-form",ownStyle:r.a.CSS+"-form-own-style",identityAlertBus:r.a.CSS+"-form-identity-alert-bus"},opt:{ccrKey:r.a.FORM_CCR_KEY}},propTypes:{disabled:a.PropTypes.bool,
controlled:a.PropTypes.bool,validateRecaptcha:a.PropTypes.bool,reCaptchaAction:a.PropTypes.string,action:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.object]),
method:a.PropTypes.oneOf([r.a.httpMethods.get,r.a.httpMethods.post]),saveOnEnter:a.PropTypes.bool,onSaveByKey:a.PropTypes.bool,component:a.PropTypes.shape(),onAlertClose:a.PropTypes.func,
onSave:a.PropTypes.func,onValidate:a.PropTypes.func,alertCloseTimer:a.PropTypes.number,alertCallback:a.PropTypes.func,disableDefaultFormSubmit:a.PropTypes.bool,setFeedback:a.PropTypes.bool},
getDefaultProps:function(){return{disableDefaultFormSubmit:!1,setFeedback:!1}},componentDidMount:function(){this.props.disabled&&this.disable()},componentDidUpdate:function(e,t){
this.props.controlled&&this.props.disabled!==t.disabled&&(this.props.disabled?this.disable():this.enable())},areInputsFilledIn:function(){
var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=!0,o=e.component&&e.component.getName();return this.eachFormInput((function(i){
var a=i.getName(),r=o===a?e.value:i.getValue();if(t.includes(a)&&!r)return n=!1})),n},validateForm:function(e){var t;t=this.isValidDefault();var n,o,i=this._alertBus,a=this.props.component
;return this.props.setFeedback&&this._setFeedback(),a&&(n=a.getLsiComponent("invalidContent"),o=a.getLsiComponent("validContent")),
(n&&n.props&&!n.props.lsi||!n)&&(n=this.getLsiComponent("invalidContent","UU5.Forms.FormMixin")),(o&&o.props&&!o.props.lsi||!o)&&(o=this.getLsiComponent("validContent","UU5.Forms.FormMixin")),
i&&i.setAlert(t?{colorSchema:r.a.colorSchemas.success,content:o}:{colorSchema:r.a.colorSchemas.danger,content:n},e),this},disable_:function(e){var t=this.getInputs()
;return Object.keys(t).forEach((function(e){t[e].disable()})),this.eachFormControls((function(t){return t.disable(e)})),this},enable_:function(e){var t=this.getInputs()
;return Object.keys(t).forEach((function(e){t[e].enable()})),this.eachFormControls((function(t){return t.enable(e)})),this},save_:function(e){var t=this
;return this.props.validateRecaptcha?window.grecaptcha.ready((function(){return t._executeReCaptcha((function(n){e.reCaptcha=n,t.saveDefault(e)}))})):this.saveDefault(e),this},getAlertBus_:function(){
return this._alertBus},getFormChildren_:function(e){var t=this,n="function"==typeof e&&e(),o=[];n&&(n=Array.isArray(n)?n:[n]).forEach((function(e,n){if(e)if(Array.isArray(e))e.forEach((function(e,r){
if("object"===s(e)){var c=a.Common.Tools.merge({},e.props);c.key=c.key||n+"-"+r,c.parent=c.parent||t,o.push(i.a.cloneElement(e,c))}else o.push(e)}));else if("object"===s(e)){
var r=a.Common.Tools.merge({},e.props);r.key=r.key||n,r.parent=r.parent||t,o.push(i.a.cloneElement(e,r))}else o.push(e);else o.push(e)}));var c=this._getMainAttrs()
;return c.className=a.Common.Tools.joinClassNames(c.className,this.getClassName("form","UU5.Forms.FormMixin")),
this.props.ownStyle&&(c.className=a.Common.Tools.joinClassNames(c.className,this.getClassName("ownStyle"))),this.props.action&&(c.action=this.props.action,c.method=this.props.method),
c.onSubmit=function(e){t.props.disableDefaultFormSubmit&&e.preventDefault(),t.isValid()?t.save():(t.validateForm(t.props.alertCallback),e.preventDefault())},
a.Common.Element.create("form",c,a.Common.Element.create(a.Bricks.AlertBus,{className:this.getClassName().identityAlertBus,ref_:function(e){return t._alertBus=e},
closeTimer:this.props.alertCloseTimer||0===this.props.alertCloseTimer?this.props.alertCloseTimer:0,closeDisabled:!1,onClose:this.props.onAlertClose}),o,a.Common.Element.create("button",{
type:r.a.buttonTypes.submit,style:{display:"none"}}))},_executeReCaptcha:function(e){window.grecaptcha.execute(a.Environment.reCaptchaSiteKey,{action:this.props.reCaptchaAction}).then(e)},
_prepareContent:function(){return[this.getHeaderChild(),this.getChildren(),this.getFooterChild()]},_setFeedback:function(){return this.eachFormInput((function(e){e.isValid()||e.setError()})),this},
render:function(){return this.getFormChildren_(this._prepareContent)}});t.a=c},19:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(12),n(1)),r=(n(68),n(4)),s=n(48),c=i.a.Common.Component.create({
mixins:[i.a.Common.BaseMixin],statics:{tagName:a.a.TAG+".FormContainer",classNames:{main:a.a.CSS+"-form-container",gray:a.a.CSS+"-form-container-gray",white:a.a.CSS+"-form-container-white",
header:a.a.CSS+"-form-container-header",headerImage:a.a.CSS+"-form-container-header-image",headerRedirection:a.a.CSS+"-form-container-header-redirection",body:a.a.CSS+"-form-container-body",
bodySection:a.a.CSS+"-form-container-body-section",bodySectionWhite:a.a.CSS+"-form-container-body-section-white",bodySectionGray:a.a.CSS+"-form-container-body-section-gray",
bodySectionTopBorder:a.a.CSS+"-form-container-body-section-top-border",bodySectionBottomBorder:a.a.CSS+"-form-container-body-section-bottom-border",
bodySectionNoHorizontalPadding:a.a.CSS+"-form-container-body-section-no-horizontal-padding",bodySectionNoVerticalPadding:a.a.CSS+"-form-container-body-section-no-vertical-padding",
right:a.a.CSS+"-form-container-right",rightSection:a.a.CSS+"-form-container-right-section",closeButtonLink:a.a.CSS+"-form-container-close-button-link"},defaults:{logoSrc:"./assets/plus4u.svg"}},
propTypes:{headerText:i.a.PropTypes.oneOfType([i.a.PropTypes.object,i.a.PropTypes.string]),bodySections:i.a.PropTypes.arrayOf(i.a.PropTypes.shape({
content:i.a.PropTypes.oneOfType([i.a.PropTypes.object,i.a.PropTypes.string]),color:i.a.PropTypes.oneOf([a.a.formContainerColors.white,a.a.formContainerColors.gray]),topBorder:i.a.PropTypes.bool,
bottomBorder:i.a.PropTypes.bool,noVerticalPadding:i.a.PropTypes.bool,noHorizontalPadding:i.a.PropTypes.bool,key:i.a.PropTypes.string.isRequired})),
color:i.a.PropTypes.oneOf([a.a.formContainerColors.white,a.a.formContainerColors.gray]),maxWidth:i.a.PropTypes.number,closeActionHandler:i.a.PropTypes.func},getDefaultProps:function(){return{
color:a.a.formContainerColors.gray}},_getSection:function(e,t){var n=this.getClassName(),o="".concat(t,"Section"),a=e.color?i.a.Common.Tools.joinClassNames(n[o],n["".concat(o).concat(e.color)]):n[o]
;return e.noVerticalPadding&&(a=i.a.Common.Tools.joinClassNames(a,n.bodySectionNoVerticalPadding)),e.noHorizontalPadding&&(a=i.a.Common.Tools.joinClassNames(a,n.bodySectionNoHorizontalPadding)),
e.topBorder&&(a=i.a.Common.Tools.joinClassNames(a,n.bodySectionTopBorder)),e.bottomBorder&&(a=i.a.Common.Tools.joinClassNames(a,n.bodySectionBottomBorder)),i.a.Common.Element.create(i.a.Bricks.Div,{
className:a,key:e.key},e.content)},_getBodySections:function(){var e=this;if(this._shouldShowSection("body"))return this.props.bodySections.map((function(t){return e._getSection(t,"body")}))
;var t=this.getClassName(),n=this.props.color?t.bodySection+" "+t["bodySection".concat(this.props.color)]:t.bodySection;return i.a.Common.Element.create(i.a.Bricks.Div,{className:n
},this.props.children)},_shouldShowSection:function(e){return this.props["".concat(e,"Sections")]&&this.props["".concat(e,"Sections")].length>0},_isPopupModeDisabled:function(){try{
if(opener&&opener!==window)return!1;var e=r.a.getOidcState();if(!e)return!1;var t=s.Base64.urlSafeDecode(e),n=JSON.parse(t);return!(!n||!n.hasOwnProperty("usePopup"))&&!n.usePopup}catch(e){
console.warn("Error occured during popup mode detection, assuming that popup mode is active",e)}return!1},_getCloseButton:function(){if(this._isPopupModeDisabled())return null
;var e=this.getClassName();return i.a.Common.Element.create(i.a.Bricks.Link,{onClick:this._closeWindow,className:e.closeButtonLink},i.a.Common.Element.create(i.a.Bricks.Icon,{icon:"mdi-close"}))},
_standardCloseAction:function(){window.close()},_closeWindow:function(){this.props.closeActionHandler?this.props.closeActionHandler(this._standardCloseAction):this._standardCloseAction()},
_getMainPropsToPass:function(e){var t=this.getMainPropsToPass();if(t.className=i.a.Common.Tools.joinClassNames(t.className,e[this.props.color.toLowerCase()]),this.props.maxWidth){var n=t.style||{}
;n.maxWidth=this.props.maxWidth,t.style=n}return t},render:function(){var e=this.getClassName(),t=this._getMainPropsToPass(e)
;return i.a.Common.Element.create(i.a.Bricks.Div,t,i.a.Common.Element.create(i.a.Bricks.Div,{className:e.body},i.a.Common.Element.create(i.a.Bricks.Div,{className:e.header
},this._getCloseButton(),i.a.Common.Element.create(i.a.Bricks.Image,{src:this.getDefault().logoSrc,className:e.headerImage}),this.props.headerText),this._getBodySections()))}});t.a=c},
2:function(e,t,n){"use strict";var o=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){
return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
;t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){
Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
var s=a(a({},o.a),{},{TAG:o.a.namespace.core.tag,CSS:o.a.namespace.core.css});t.a=s},20:function(e,t,n){"use strict";var o=n(15),i=n.n(o),a=n(0),r=n(1);n(60);function s(){
return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t)
;var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){
(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=a.Common.Component.create({
mixins:[a.Common.BaseMixin,a.Common.ElementaryMixin,a.Common.NestingLevelMixin,a.Common.ColorSchemaMixin,a.Common.ContentMixin,a.Common.PureRenderMixin,a.Common.EditableMixin],statics:{
tagName:r.a.TAG+".Button",nestingLevel:"smallBox",classNames:{main:r.a.CSS+"-button",bgStyle:r.a.CSS+"-button-",text:r.a.CSS+"-button-text",block:r.a.CSS+"-button-block",active:"active",
size:r.a.CSS+"-button-"},defaults:{content:"Button",regexpHash:/^#/,httpRegexp:/^(\/|[a-z0-9\-+.]+:)/},editableComponent:"UU5.BricksEditable.Button"},propTypes:{
size:a.PropTypes.oneOf(["s","m","l","xl"]),displayBlock:a.PropTypes.bool,pressed:a.PropTypes.bool,bgStyle:a.PropTypes.oneOf(["filled","inverted","transparent"]),onClick:a.PropTypes.func,
href:a.PropTypes.string,target:a.PropTypes.oneOf(["_blank","_parent","_top","_self"]),smoothScroll:a.PropTypes.number,offset:a.PropTypes.number},getDefaultProps:function(){return{size:"m",
displayBlock:!1,pressed:!1,bgStyle:"filled",onClick:null,href:null,target:"_self",smoothScroll:1e3,offset:0}},getInitialState:function(){return{pressed:this.props.pressed}},
componentWillReceiveProps:function(e){e.controlled&&this.setState({pressed:e.pressed})},setActive:function(e,t){return this.setState({pressed:e},t),this},press:function(e){return this.setActive(!0,e)
},pressUp:function(e){return this.setActive(!1,e)},togglePressed:function(e){return this.setState((function(e){return{pressed:!e.pressed}}),e),this},isPressed:function(){return this.state.pressed},
focus:function(){this._button&&this._button.focus()},_onClickHandler:function(e){return this.props.onClick&&this.props.onClick(this,e),this},_onClickLinkHandler:function(e,t){
var n=this._isRoute()&&a.Environment.getRouter();if(0===e.button||t){if(e.preventDefault(),n){
var o=u(this.props.href.split("#")),i=o[0],r=o.slice(1),s=u(i.split("?")),c=s[0],d=s.slice(1),l=r.join("#"),m=d.join("?"),p=m?a.Common.Url.decodeQuery("?"+m):null;if(e.preventDefault(),
"_blank"===this.props.target)this._openRouteNewTab();else{var h=c||a.Common.Url.parse(location.href).useCase||"";a.Environment.setRoute(h,p,l)}}
"function"==typeof this.props.onClick?this.props.onClick(this,e):"string"!=typeof this.props.href||n||(e.ctrlKey||1===e.button?window.open(this.props.href,"_blank"):this._isFragmentLink()?this._onClickFragment(e):window.open(this.props.href,this.props.target))
}return this},_onWheelClickHandler:function(e){return 1===e.button&&(e.stopPropagation(),this._onClickLinkHandler(e,!0)),this},_onClickFragment:function(e){e.preventDefault()
;var t=this.props.href.replace("#",""),n=document.getElementById(t);return n||(t=t.replace("-inner",""),n=document.getElementById(t)),
a.Common.Tools.scrollToTarget(t,this.props.smoothScroll,this.props.offset),this},_isFragmentLink:function(){return this.props.href&&this.props.href.length>1&&0===this.props.href.lastIndexOf("#",0)},
_openRouteNewTab:function(){window.open(this._getRouteUrl(),"_blank")},_containsHash:function(e){return this.getDefault("regexpHash").test(e)},_isRoute:function(){
return this.props.href&&!this.getDefault("httpRegexp").test(this.props.href)&&!this._containsHash(this.props.href)},_getRouteUrl:function(){
var e=this.props.href,t=a.Environment.getAppBasePath(),n="?"===e.charAt(0)?(a.Common.Url.parse(location.href).useCase||"")+e:e;return t?t.replace(/\/*$/,"/")+n.replace(/^\/+/,""):n},
_buildMainAttrs:function(){var e=this.getMainAttrs()
;return e.className+=" "+this.getClassName("size")+this.props.size+" "+this.getClassName().bgStyle+(this.props.bgStyle||"filled")+(this.props.displayBlock?" "+this.getClassName("block"):"")+(this.isPressed()?" "+this.getClassName("active"):""),
this.isDisabled()?e.disabled=!0:"function"==typeof this.props.onClick?e.onClick=this._onClickHandler:"string"==typeof this.props.href&&(e.href=this._containsHash(this.props.href)?location.href.split("#")[0]+this.props.href:this.props.href,
e.onClick=this._onClickLinkHandler,e.onMouseUp=this._onWheelClickHandler),e.type=e.type||"button",e},_getChildren:function(){var e=this,t=this.getChildren()||this.getDefault().content,n=[]
;return(t=Array.isArray(t)?t:[t]).forEach((function(t,o){var r=c(t),s="object"===r&&t&&t.type&&"UU5.Common.TextCorrectorContextConsumer"===t.type.displayName;if(s&&(r=c(t.props.text)),"string"===r){
var u;if(s){var d=t.props.text,l=d.replace(/\n/g,"");d.length!==l.length&&(t=i.a.cloneElement(t,{text:l})),u=l.length}else u=(t=t.replace(/\n/g,"")).length;u&&n.push(a.Common.Element.create("span",{
key:o,className:e.getClassName().text},t))}else"number"===r?n.push(a.Common.Element.create("span",{key:o,className:e.getClassName().text},t)):n.push(t)})),n.length>0?n:t},render:function(){
var e,t=this;return e=a.Common.Element.create("button",s({},this._buildMainAttrs(),{ref:function(e){return t._button=e}}),this._getChildren()),this.getNestingLevel()?e:null}});t.a=l},
23:function(e,t,n){"use strict";var o=n(15),i=n.n(o),a=n(0),r=n.n(a),s=(n(12),n(1)),c=n(14),u=n(4),d=(n(62),n(3)),l=r.a.Common.Component.create({mixins:[r.a.Common.BaseMixin,r.a.Common.LsiMixin],
statics:{tagName:s.a.TAG+".FormFooter",classNames:{main:s.a.CSS+"-form-footer",contactUs:s.a.CSS+"-form-footer-contact-us",languageSelector:s.a.CSS+"-form-footer-language-selector",
termsAndGdpr:s.a.CSS+"-form-footer-terms-and-gdpr",termsAndGdprRegistration:s.a.CSS+"-form-footer-terms-and-gdpr-registration"},lsi:d.a.formFooter},propTypes:{helpdeskUrl:r.a.PropTypes.string,
termsOfUseUrl:r.a.PropTypes.string,termsOfUseWithCustomName:r.a.PropTypes.bool,gdprUrl:r.a.PropTypes.string,serviceName:r.a.PropTypes.string,localizedServiceName:r.a.PropTypes.object,
showHelpdeskLink:r.a.PropTypes.bool,showGDPRRegistration:r.a.PropTypes.bool,showGDPRLogin:r.a.PropTypes.bool,showLanguageSelector:r.a.PropTypes.bool},getDefaultProps:function(){return{
helpdeskUrl:s.a.defaultHelpdeskUrl,showHelpdeskLink:!0,showLanguageSelector:!0}},_getTermsOfUseDiv:function(e){var t,n=this.getClassName(),o=n.termsAndGdpr
;return e&&(o=r.a.Common.Tools.joinClassNames(o,n.termsAndGdprRegistration)),
t=this.props.termsOfUseWithCustomName?this.getLsiItem(this.props.localizedServiceName||this.props.serviceName||s.a.defaultServiceName):this.getLsiItem(s.a.defaultServiceName),
r.a.Common.Element.create(r.a.Bricks.Div,{className:o
},r.a.Common.Element.create(r.a.Bricks.Text,null,this.getLsiComponent(e?"registrationTermsOfUsePrefix":"loginTermsOfUsePrefix"),r.a.Common.Element.create(r.a.Bricks.Link,{
href:this.props.termsOfUseUrl||s.a.links.termsOfUse,target:s.a.windowParams.target.blank,content:this.getLsiComponent("termsOfUse")
}),this.getLsiComponent("termsOfUsePostfix",null,t)),r.a.Common.Element.create(r.a.Bricks.Text,null,this.getLsiComponent("gdprPrefix"),r.a.Common.Element.create(r.a.Bricks.Link,{
href:this.props.gdprUrl||s.a.links.gdpr,target:"_blank",content:this.getLsiComponent("gdpr")}),this.getLsiComponent("gdprPostfix")))},render:function(){var e={}
;s.a.shownLanguages.forEach((function(t){e[t]=r.a.Environment.languageList[t]}));var t=this.getClassName()
;return r.a.Common.Element.create(r.a.Bricks.Div,this.getMainPropsToPass(),this.props.showGDPRRegistration&&this._getTermsOfUseDiv(!0),this.props.showGDPRLogin&&this._getTermsOfUseDiv(),this.props.showLanguageSelector&&r.a.Common.Element.create(r.a.Bricks.LanguageSelector,{
className:t.languageSelector,headerMode:s.a.languageSelectorModes.label,languages:e}),this.props.showHelpdeskLink&&r.a.Common.Element.create(r.a.Bricks.P,{className:t.contactUs,
content:this.getLsiComponent("contactUs",null,this.props.helpdeskUrl)}))}});n(64);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=r.a.Common.Component.create({mixins:[r.a.Common.BaseMixin],statics:{
tagName:s.a.TAG+".OIDCTheme",classNames:{main:s.a.CSS+"-oidc-theme",logo:s.a.CSS+"-oidc-theme-logo",withoutLogo:s.a.CSS+"-oidc-theme-without-logo",contactUs:s.a.CSS+"-oidc-theme-contact-us",
default:s.a.CSS+"-oidc-theme-default",white:s.a.CSS+"-oidc-theme-white",black:s.a.CSS+"-oidc-theme-black",cover:s.a.CSS+"-oidc-theme-cover",repeatX:s.a.CSS+"-oidc-theme-repeat-x",
repeatY:s.a.CSS+"-oidc-theme-repeat-y",repeat:s.a.CSS+"-oidc-theme-repeat"},lsi:d.a.oidcTheme},propTypes:{showHelpdeskLink:r.a.PropTypes.bool,showFooter:r.a.PropTypes.bool,
skipEverything:r.a.PropTypes.bool,showGDPRRegistration:r.a.PropTypes.bool,showGDPRLogin:r.a.PropTypes.bool,showLanguageSelector:r.a.PropTypes.bool},getDefaultProps:function(){return{
showHelpdeskLink:!0,showFooter:!0,showLanguageSelector:!0}},_getClientId:function(){return u.a.getClientId()},_getDivStyle:function(e,t){return e=e||{},t.bgColor&&(e.backgroundColor=t.bgColor),
t.bgImageUrl&&t.bgGradient?e.backgroundImage=s.a.oidcThemeStyles.imageGradient(t.bgImageUrl,t.bgGradient):t.bgImageUrl?e.backgroundImage=s.a.oidcThemeStyles.image(t.bgImageUrl):t.bgGradient&&(e.backgroundImage=s.a.oidcThemeStyles.gradient(t.bgGradient)),
e},_getDivClassName:function(e,t,n,o){return n.textColor===s.a.colorThemes.black?e=e?e+" "+t.black:t.black:n.textColor===s.a.colorThemes.white&&(e=e?e+" "+t.white:t.white),
o||(e=e?e+" "+t.default:t.default),e=n.repeatBgX&&n.repeatBgY?e?e+" "+t.repeat:t.repeat:n.repeatBgX?e?e+" "+t.repeatX:t.repeatX:n.repeatBgY?e?e+" "+t.repeatY:t.repeatY:e?e+" "+t.cover:t.cover,
n.logoUrl||(e=r.a.Common.Tools.joinClassNames(e,t.withoutLogo)),e},_getChildren:function(e,t){return i.a.Children.map(e,(function(e){return i.a.cloneElement(e,{configuration:t})}))},
_getChild:function(e,t){var n=this.getClassName(),o=this.getMainPropsToPass();return o.style=this._getDivStyle(o.style,e),o.className=this._getDivClassName(o.className,n,e,t),
r.a.Common.Element.create(r.a.Bricks.Div,o,e.logoUrl&&r.a.Common.Element.create(r.a.Bricks.Div,{className:n.logo},r.a.Common.Element.create(r.a.Bricks.Image,{src:e.logoUrl
})),this._getChildren(this.props.children,e),this.props.showFooter&&r.a.Common.Element.create(l,{showGDPRRegistration:this.props.showGDPRRegistration,showGDPRLogin:this.props.showGDPRLogin,
showHelpdeskLink:this.props.showHelpdeskLink,helpdeskUrl:e.helpdeskUrl,showLanguageSelector:this.props.showLanguageSelector,termsOfUseUrl:e.termsOfUseUrl,
termsOfUseWithCustomName:e.termsOfUseWithCustomName,gdprUrl:e.gdprUrl,serviceName:e.name,localizedServiceName:e.localizedName}))},_getLoadFeedbackChildren:function(e){
var t=e.isLoading,n=e.isError,o=e.data;return t?r.a.Common.Element.create(r.a.Bricks.Loading,null):n?this._getChild(s.a.defaultOidcClientConfiguration):this._getChild(o,!0)},
_getOnLoadData:function(e){var t=this._getClientId();t&&(e.data={clientId:t}),c.a.loadOidcClientConfiguration(e)},render:function(){
return r.a.Common.Element.create(r.a.Common.Loader,m({},this.getMainPropsToPass(),{onLoad:this._getOnLoadData}),this._getLoadFeedbackChildren)}});t.a=p},24:function(e,t){
e.exports=__WEBPACK_EXTERNAL_MODULE__24__},26:function(e,t,n){"use strict"
;const o=/"(((_|\\u005f)(_|\\u005f)(p|\\u0070)(r|\\u0072)(o|\\u006f)(t|\\u0074)(o|\\u006f)(_|\\u005f)(_|\\u005f))|((c|\\u0063)(o|\\u006[Ff])(n|\\u006[Ee])(s|\\u0073)(t|\\u0074)(r|\\u0072)(u|\\u0075)(c|\\u0063)(t|\\u0074)(o|\\u006[Ff])(r|\\u0072)))"/
;e.exports=class{static parse(e,t=!0){return t&&o.test(e)?JSON.parse(e,(e,t)=>"__proto__"!==e&&"constructor"!==e?t:void 0):JSON.parse(e)}static stringify(e,t=!1){
return t?JSON.stringify(e,null,2):JSON.stringify(e)}}},27:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}
e.exports=n},28:function(e,t,n){"use strict";class o extends Error{constructor(e,t=null){e instanceof Error&&(t=e,e=null),super(e?e.toString():""),
this._id="00000000000000000000000000000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),this._timestamp=new Date,this._cause=t,this._name=this.constructor.name}get id(){
return this._id}set id(e){this._id=e}get timestamp(){return this._timestamp}get cause(){return this._cause}set cause(e){this._cause=e}get name(){return this._name}}e.exports=o},3:function(e,t,n){
"use strict";var o=n(0),i=n.n(o),a=(n(12),{unexpectedError:{cs:"Při zpracování došlo k neočekávané chybě.",en:"An unexpected error occurred during processing.",
sk:"Pri spracovaní došlo k neočakávanej chybe.",uk:"Під час обробки сталася несподівана помилка.",es:"Al procesar, se ha producido un error inesperado.",
sv:"Ett oväntat fel inträffade under bearbetningen."},invalidEmail:{cs:"Zadejte prosím platnou e-mailovou adresu.",en:"Please enter a valid e-mail address.",
sk:"Zadajte, prosím, platnú e-mailovú adresu.",uk:"Введіть дійсну електронну адресу.",es:"Por favor, introduzca una dirección de correo electrónico válida.",sv:"Ange en giltig e-postadress."},
notAuthorized:{cs:"Nemáte dostatečná oprávnění pro spuštění požadované funkčnosti.",en:"You do not have sufficient authorisations to activate the required functionality.",
sk:"Nemáte dostatočné oprávnenie na spustenie požadovanej funkčnosti.",uk:"У вас немає достатніх повноважень для запуску потрібних функцій.",
es:"No tiene derechos suficientes para ejecutar la funcionalidad requerida.",sv:"Du har inte tillräckliga behörigheter för att aktivera den nödvändiga funktionen."},emailIsNotUnique:{
cs:"Účet s touto e-mailovou adresou byl již vytvořen. Prosím přihlaste se.",en:"An account with this e-mail address has already been created. Please log in.",
sk:"Účet s touto e-mailovou adresou už bol vytvorený. Prosím, prihláste sa.",uk:"Обліковий запис з цією електронною адресою вже було створено. Виконайте вхід.",
es:"Ya se ha creado una cuenta con esta dirección de correo electrónico. Por favor inicie la sesión.",sv:"Ett konto med den här e-postadressen har redan skapats. Vänligen logga in."},
alreadyAssociatedCredentials:{cs:"Účet, který se snažíte připojit do Plus4U, je již připojen k jinému Plus4U účtu.",en:"Credentials are already connected to another account, log in to it.",
sk:"Účet, ktorý sa snažíte pripojiť do PLUS4, je už pripojený k inému PLUS4 účtu.",
uk:"Обліковий запис, який ви намагаєтеся підключитися до Plus4U, вже підключений до іншого облікового запису Plus4U.",
es:"La cuenta que está intentando conectarse a Plus4U ya está conectada a otra cuenta Plus4U.",sv:"Uppgifterna är redan kopplade till ett annat konto, logga in på det."},notLoaded:{
cs:"Data ze serveru nebylo možné načíst.",en:"Data from the server could not be loaded.",sk:"Údaje zo serveru nebolo možné načítať.",uk:"Не вдалося завантажити дані з сервера.",
es:"No se pudieron cargar los datos del servidor.",sv:"Data från servern kunde inte laddas."},equalityAccessCodesError:{cs:"Přístupový kód 1 a přístupový kód 2 se nesmějí rovnat.",
en:"Access code 1 and access code 2 must not match.",sk:"Prístupový kód 1 a prístupový kód 2 nesmú byť rovnaké.",uk:"Код доступу 1 та код доступу 2 не повинні бути однаковими.",
es:"El código de acceso 1 y el código de acceso 2 no deben ser iguales.",sv:"Lösenord 1 och Lösenord 2 får inte vara identiska."},invalidDtoIn:{cs:"Formulář není validní",en:"Form is not valid.",
sk:"Form is not valid.",uk:"Form is not valid.",es:"Form is not valid.",sv:"Formuläret är inte giltigt."}}),r={defaultCopyright:{content:{
cs:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="O aplikaci" href="%s" target="_blank" />',
en:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="About app" href="%s" target="_blank" />',
sk:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="O aplikácii" href="%s" target="_blank" />',
uk:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="Про додаток" href="%s" target="_blank" />',
es:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="Sobre la aplicación" href="%s" target="_blank" />',
sv:'<uu5string />%s-%s © Unicorn, <UU5.Bricks.Link content="Om appen" href="%s" target="_blank" />'}},leftLinks:{about:{cs:"O aplikaci",en:"About application",sk:"O aplikácii",uk:"Про додаток",
es:"Sobre la aplicación",sv:"Om appen"},home:{cs:"Domů",en:"Home",sk:"Home",uk:"Home",es:"Home",sv:"Hem"},identityGroupList:{cs:"Seznam identityGroup",en:"IdentityGroup list",sk:"IdentityGroup list",
uk:"IdentityGroup list",es:"IdentityGroup list",sv:"IdentityGroup lista"}},createIdentityForm:{type:{cs:"Typ",en:"Type",sk:"Type",uk:"Type",es:"Type",sv:"Typ"},name:{cs:"Jméno",en:"Name",sk:"Name",
uk:"Name",es:"Name",sv:"Namn"},email:{cs:"Email",en:"Email",sk:"Email",uk:"Email",es:"Email",sv:"E-post"},language:{cs:"Jazyk",en:"Language",sk:"Language",uk:"Language",es:"Language",sv:"Språk"},
timezone:{cs:"Časová zóna",en:"Timezone",sk:"Timezone",uk:"Timezone",es:"Timezone",sv:"Tidszon"},invalidEmail:a.invalidEmail},updateIdentityForm:{type:{cs:"Typ",en:"Type",sk:"Type",uk:"Type",
es:"Type",sv:"Typ"},name:{cs:"Jméno",en:"Name",sk:"Name",uk:"Name",es:"Name",sv:"Namn"},email:{cs:"Email",en:"Email",sk:"Email",uk:"Email",es:"Email",sv:"E-post"},language:{cs:"Jazyk",en:"Language",
sk:"Language",uk:"Language",es:"Language",sv:"Språk"},timezone:{cs:"Časová zóna",en:"Timezone",sk:"Timezone",uk:"Timezone",es:"Timezone",sv:"Tidszon"},invalidEmail:a.invalidEmail},
createIdentityGroupForm:{name:{cs:"Název",en:"Name",sk:"Name",uk:"Name",es:"Name",sv:"Namn"},namePattern:{cs:"Název musí být uu5string o maximální délce 1000 znaků.",
en:"Name must be a uu5string with a maximum length od 1000 characters.",sk:"Name must be a uu5string with a maximum length od 1000 characters.",
uk:"Name must be a uu5string with a maximum length od 1000 characters.",es:"Name must be a uu5string with a maximum length od 1000 characters.",
sv:"Namnet måste vara en uu5-sträng med en maximal längd på 1000 tecken."},code:{cs:"Kód",en:"Code",sk:"Code",uk:"Code",es:"Code",sv:"Kod"},codePattern:{cs:"Hodnota musí být kód.",
en:"The value must be code.",sk:"The value must be code.",uk:"The value must be code.",es:"The value must be code.",sv:"Värdet måste vara en kod."},desc:{cs:"Popis",en:"Description",sk:"Description",
uk:"Description",es:"Description",sv:"Beskrivning"},descPattern:{cs:"Popis musí být uu5string o maximální délce 5000 znaků.",
en:"Description must be a uu5string with a maximum length od 5000 characters.",sk:"Description must be a uu5string with a maximum length od 5000 characters.",
uk:"Description must be a uu5string with a maximum length od 5000 characters.",es:"Description must be a uu5string with a maximum length od 5000 characters.",
sv:"Beskrivningen måste vara en uu5-sträng med en maximal längd på 5000 tecken."},identityOperatorRoleIfcUri:{cs:"IdentityOperatorRoleIfcUri",en:"IdentityOperatorRoleIfcUri",
sk:"IdentityOperatorRoleIfcUri",uk:"IdentityOperatorRoleIfcUri",es:"IdentityOperatorRoleIfcUri",sv:"IdentityOperatorRoleIfcUri"},identityOperatorRoleIfcUriPattern:{cs:"Hodnota musí být uri.",
en:"The value must be uri.",sk:"The value must be uri.",uk:"The value must be uri.",es:"The value must be uri.",sv:"Värdet måste vara uri."},identityOperatorAppBaseUri:{
cs:"IdentityOperatorAppBaseUri",en:"IdentityOperatorAppBaseUri",sk:"IdentityOperatorAppBaseUri",uk:"IdentityOperatorAppBaseUri",es:"IdentityOperatorAppBaseUri",sv:"IdentityOperatorAppBaseUri"},
identityOperatorAppBaseUriPattern:{cs:"Hodnota musí být uri.",en:"The value must be uri.",sk:"The value must be uri.",uk:"The value must be uri.",es:"The value must be uri.",
sv:"Värdet måste vara uri."}},updateIdentityGroupForm:{name:{cs:"Název",en:"Name",sk:"Name",uk:"Name",es:"Name",sv:"Namn"},namePattern:{cs:"Název musí být uu5string o maximální délce 1000 znaků.",
en:"Name must be a uu5string with a maximum length od 1000 characters.",sk:"Name must be a uu5string with a maximum length od 1000 characters.",
uk:"Name must be a uu5string with a maximum length od 1000 characters.",es:"Name must be a uu5string with a maximum length od 1000 characters.",
sv:"Namnet måste vara en uu5-sträng med en maximal längd på 1000 tecken."},desc:{cs:"Popis",en:"Description",sk:"Description",uk:"Description",es:"Description",sv:"Beskrivning"},descPattern:{
cs:"Popis musí být uu5string o maximální délce 5000 znaků.",en:"Description must be a uu5string with a maximum length od 5000 characters.",
sk:"Description must be a uu5string with a maximum length od 5000 characters.",uk:"Description must be a uu5string with a maximum length od 5000 characters.",
es:"Description must be a uu5string with a maximum length od 5000 characters.",sv:"Beskrivningen måste vara en uu5-sträng med en maximal längd på 5000 tecken.."}},deleteIdentityGroupForm:{
confirmationText:{cs:"<uu5string/>Určitě chcete odstranit identityGroup <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?",
en:"<uu5string/>Do you really want to remove identityGroup <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?",
sk:"<uu5string/>Do you really want to remove identityGroup <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?",
uk:"<uu5string/>Do you really want to remove identityGroup <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?",
es:"<uu5string/>Do you really want to remove identityGroup <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?",
sv:"<uu5string/>Vill du verkligen ta bort identityGroup? <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>?"}},terminateIdentityForm:{name:{cs:"Jméno",en:"Name",sk:"Name",uk:"Name",es:"Name",sv:"Namn"},
uuIdentity:{cs:"uuIdentity",en:"uuIdentity",sk:"uuIdentity",uk:"uuIdentity",es:"uuIdentity",sv:"uuIdentity"}},identityGroupList:{searchForm:{errors:{getByIdOrCode:{identityGroupDoesNotExist:{
cs:"IdentityGroup neexistuje.",en:"IdentityGroup does not exist.",sk:"IdentityGroup does not exist.",uk:"IdentityGroup does not exist.",es:"IdentityGroup does not exist.",
sv:"IdentityGroup finns inte."},invalidDtoIn:{cs:"Neplatný identifikátor identityGroup.",en:"IdentityGroup identifier is not valid.",sk:"IdentityGroup identifier is not valid.",
uk:"IdentityGroup identifier is not valid.",es:"IdentityGroup identifier is not valid.",sv:"IdentityGroup-identifieraren är inte giltig."},missingDtoIn:{cs:"Nebyl zadán identifikátor identityGroup.",
en:"IdentityGroup identifier not set.",sk:"IdentityGroup identifier not set.",uk:"IdentityGroup identifier not set.",es:"IdentityGroup identifier not set.",
sv:"IdentityGroup-identifieraren har inte angetts."},unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized}},sectionHeader:{cs:"Zobrazit detail identityGroup",en:"Show identityGroup detail",
sk:"Show identityGroup detail",uk:"Show identityGroup detail",es:"Show identityGroup detail",sv:"Visa detaljer om identitetsgrupp"},sectionDesc:{
cs:"Nemáte právo prohlížet seznam všech identityGroup, přesto můžete najít konkrétní identityGroup a zobrazit její detail zadáním id nebo kódu do formuláře níže.",
en:"You are not authorized to list identityGroups but you can specify identityGroup id or code to show its detail using the form below.",
sk:"You are not authorized to list identityGroups but you can specify identityGroup id or code to show its detail using the form below.",
uk:"You are not authorized to list identityGroups but you can specify identityGroup id or code to show its detail using the form below.",
es:"You are not authorized to list identityGroups but you can specify identityGroup id or code to show its detail using the form below.",
sv:"Du har inte rätt att lista identitetsgrupper, men du kan ange identitetsgruppens id eller kod för att visa detaljerna med hjälp av formuläret nedan."},identifier:{cs:"Identifikátor",
en:"Identificator",sk:"Identificator",uk:"Identificator",es:"Identificator",sv:"Identifierare"},idOrCode:{cs:"Id nebo kód",en:"Id or code",sk:"Id or code",uk:"Id or code",es:"Id or code",
sv:"Id eller kod"},code:{cs:"kód",en:"code",sk:"code",uk:"code",es:"code",sv:"Kod"},id:{cs:"id",en:"id",sk:"id",uk:"id",es:"id",sv:"id"}},tile:{code:{cs:"kód",en:"code",sk:"code",uk:"code",es:"code",
sv:"Kod"},created:{cs:"vytvořena",en:"created",sk:"created",uk:"created",es:"created",sv:"skapat"},update:{cs:"Upravit",en:"Update",sk:"Update",uk:"Update",es:"Update",sv:"Uppdatering"},delete:{
cs:"Odstranit",en:"Delete",sk:"Delete",uk:"Delete",es:"Delete",sv:"Ta bort"}},tileList:{errors:{create:{operatorNotSet:{cs:"Je třeba zadat identityOperatorRoleIfcUri nebo identityOperatorAppBaseUri.",
en:"IdentityOperatorRoleIfcUri or identityOperatorAppBaseUri has to be set.",sk:"IdentityOperatorRoleIfcUri or identityOperatorAppBaseUri has to be set.",
uk:"IdentityOperatorRoleIfcUri or identityOperatorAppBaseUri has to be set.",es:"IdentityOperatorRoleIfcUri or identityOperatorAppBaseUri has to be set.",
sv:"IdentityOperatorRoleIfcUri eller identityOperatorAppBaseUri måste anges.."},codeIsNotUnique:{cs:"IdentityGroup se zvoleným kódem již existuje.",en:"IdentityGroup with given code already exists.",
sk:"IdentityGroup with given code already exists.",uk:"IdentityGroup with given code already exists.",es:"IdentityGroup with given code already exists.",
sv:"IdentityGroup med den angivna koden finns redan."},invalidDtoIn:a.invalidDtoIn,unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},update:{invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},delete:{identityGroupIsNotEmpty:{cs:"IdentityGroup není prázdná.",en:"IdentityGroup is not empty.",sk:"IdentityGroup is not empty.",
uk:"IdentityGroup is not empty.",es:"IdentityGroup is not empty.",sv:"IdentityGroup är inte tom."},cannotDeleteDefaultIdentityGroup:{
cs:"IdentityGroup je nastavená jako výchozí a není možné ji smazat.",en:"Default IdentityGroup cannot be deleted.",sk:"Default IdentityGroup cannot be deleted.",
uk:"Default IdentityGroup cannot be deleted.",es:"Default IdentityGroup cannot be deleted.",sv:"Standard IdentityGroup kan inte tas bort."},invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized}},title:{cs:"Seznam identityGroup",en:"IdentityGroup list",sk:"IdentityGroup list",uk:"IdentityGroup list",es:"IdentityGroup list",
sv:"Lista över IdentityGroup"},create:{cs:"Vytvořit identityGroup",en:"Create identityGroup",sk:"Create identityGroup",uk:"Create identityGroup",es:"Create identityGroup",sv:"Skapa identityGroup"},
createDesc:{cs:"Tento formulář slouží pro založení nové identityGroup pro správu identity.",en:"The purpose of this form is to create a new identityGroup for managing identities.",
sk:"The purpose of this form is to create a new identityGroup for managing identities.",uk:"The purpose of this form is to create a new identityGroup for managing identities.",
es:"The purpose of this form is to create a new identityGroup for managing identities.",sv:"Syftet med det här formuläret är att skapa en ny identityGroup för hantering av identiteter.."},update:{
cs:"Upravit identityGroup",en:"Update identityGroup",sk:"Update identityGroup",uk:"Update identityGroup",es:"Update identityGroup",sv:"Uppdatera identityGroup"},updateDesc:{
cs:"Tento formulář slouží pro úpravu základních vlastností zvolené identityGroup.",en:"The purpose of this form is to set basic attributes on identityGroup.",
sk:"The purpose of this form is to set basic attributes on identityGroup.",uk:"The purpose of this form is to set basic attributes on identityGroup.",
es:"The purpose of this form is to set basic attributes on identityGroup.",sv:"Syftet med det här formuläret är att ställa in grundläggande attribut för identityGroup."},delete:{
cs:"Odstranit identityGroup",en:"Delete identityGroup",sk:"Delete identityGroup",uk:"Delete identityGroup",es:"Delete identityGroup",sv:"Ta bort identityGroup"},deleteDesc:{
cs:"Tento formulář slouží pro odstranění zvolené identityGroup.",en:"The purpose of this form is to delete identityGroup.",sk:"The purpose of this form is to delete identityGroup.",
uk:"The purpose of this form is to delete identityGroup.",es:"The purpose of this form is to delete identityGroup.",sv:"Syftet med detta formulär är att ta bort identityGroup."},successfullyCreated:{
cs:"Vytvoření proběhlo úspěšně.",en:"Successfully created.",sk:"Successfully created.",uk:"Successfully created.",es:"Successfully created.",sv:"Framgångsrikt skapat."},successfullyUpdated:{
cs:"Úprava proběhla úspěšně.",en:"Successfully updated.",sk:"Successfully updated.",uk:"Successfully updated.",es:"Successfully updated.",sv:"Framgångsrikt uppdaterad."},successfullyDeleted:{
cs:"Úspěšně odstraněno.",en:"Successfully deleted.",sk:"Successfully deleted.",uk:"Successfully deleted.",es:"Successfully deleted.",sv:"Framgångsrikt raderat."},name:{cs:"Název",en:"Name",sk:"Name",
uk:"Name",es:"Name",sv:"Namn"},code:{cs:"Kód",en:"Code",sk:"Code",uk:"Code",es:"Code",sv:"Kod"},creationTime:{cs:"Čas vytvoření",en:"Creation time",sk:"Creation time",uk:"Creation time",
es:"Creation time",sv:"Tid för skapande"},creationTimeFrom:{cs:"Čas vytvoření od",en:"Creation time from",sk:"Creation time from",uk:"Creation time from",es:"Creation time from",sv:"Skapelsetid från"
},creationTimeTo:{cs:"Čas vytvoření do",en:"Creation time to",sk:"Creation time to",uk:"Creation time to",es:"Creation time to",sv:"Tidsåatgång för skapande till"}}},identityGroupDetail:{errors:{
getByIdOrCode:{identityGroupDoesNotExist:{cs:"IdentityGroup neexistuje.",en:"IdentityGroup does not exist.",sk:"IdentityGroup does not exist.",uk:"IdentityGroup does not exist.",
es:"IdentityGroup does not exist.",sv:"IdentityGroup finns inte."},invalidDtoIn:{cs:"Neplatný identifikátor identityGroup.",en:"IdentityGroup identifier is not valid.",
sk:"IdentityGroup identifier is not valid.",uk:"IdentityGroup identifier is not valid.",es:"IdentityGroup identifier is not valid.",sv:"IdentityGroup-identifieraren är inte giltig."},missingDtoIn:{
cs:"Nebyl zadán identifikátor identityGroup.",en:"IdentityGroup identifier not set.",sk:"IdentityGroup identifier not set.",uk:"IdentityGroup identifier not set.",
es:"IdentityGroup identifier not set.",sv:"IdentityGroup-identifieraren har inte angetts."},unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized}},ready:{errors:{update:{
invalidDtoIn:a.invalidDtoIn,unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},delete:{identityGroupIsNotEmpty:{cs:"IdentityGroup není prázdná.",en:"IdentityGroup is not empty.",
sk:"IdentityGroup is not empty.",uk:"IdentityGroup is not empty.",es:"IdentityGroup is not empty.",sv:"IdentityGroup är inte tom."},cannotDeleteDefaultIdentityGroup:{
cs:"IdentityGroup je nastavená jako výchozí a není možné ji smazat.",en:"Default IdentityGroup cannot be deleted.",sk:"Default IdentityGroup cannot be deleted.",
uk:"Default IdentityGroup cannot be deleted.",es:"Default IdentityGroup cannot be deleted.",sv:"Standard IdentityGroup kan inte tas bort."},invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized}},update:{cs:"Upravit identityGroup",en:"Update identityGroup",sk:"Update identityGroup",uk:"Update identityGroup",
es:"Update identityGroup",sv:"Uppdatera identityGroup"},updateDesc:{cs:"Tento formulář slouží pro úpravu základních vlastností zvolené identityGroup.",
en:"The purpose of this form is to set basic attributes on identityGroup.",sk:"The purpose of this form is to set basic attributes on identityGroup.",
uk:"The purpose of this form is to set basic attributes on identityGroup.",es:"The purpose of this form is to set basic attributes on identityGroup.",
sv:"Syftet med det här formuläret är att ställa in grundläggande attribut för identityGroup."},delete:{cs:"Odstranit identityGroup",en:"Delete identityGroup",sk:"Delete identityGroup",
uk:"Delete identityGroup",es:"Delete identityGroup",sv:"Ta bort identityGroup"},deleteDesc:{cs:"Tento formulář slouží pro odstranění zvolené identityGroup.",
en:"The purpose of this form is to delete identityGroup.",sk:"The purpose of this form is to delete identityGroup.",uk:"The purpose of this form is to delete identityGroup.",
es:"The purpose of this form is to delete identityGroup.",sv:"Syftet med detta formulär är att ta bort identityGroup."},successfullyUpdated:{cs:"Úprava proběhla úspěšně.",en:"Successfully updated.",
sk:"Successfully updated.",uk:"Successfully updated.",es:"Successfully updated.",sv:"Framgångsrikt uppdaterad."},successfullyDeleted:{cs:"Úspěšně odstraněno.",en:"Successfully deleted.",
sk:"Successfully deleted.",uk:"Successfully deleted.",es:"Successfully deleted.",sv:"Framgångsrikt raderat."}},tile:{id:{cs:"id",en:"id",sk:"id",uk:"id",es:"id",sv:"id"},uuIdentity:{cs:"uuIdentity",
en:"uuIdentity",sk:"uuIdentity",uk:"uuIdentity",es:"uuIdentity",sv:"uuIdentity"},created:{cs:"vytvořena",en:"created",sk:"created",uk:"created",es:"created",sv:"skapat"},state:{cs:"stav",en:"state",
sk:"state",uk:"state",es:"state",sv:"stat"},type:{cs:"typ",en:"type",sk:"type",uk:"type",es:"type",sv:"typ"},update:{cs:"Upravit",en:"Update",sk:"Update",uk:"Update",es:"Update",sv:"Uppdatera"},
terminate:{cs:"Ukončit",en:"Terminate",sk:"Terminate",uk:"Terminate",es:"Terminate",sv:"Avsluta"}},tileList:{errors:{create:{emailIsNotUnique:{cs:"Účet s touto e-mailovou adresou již existuje.",
en:"An account with this e-mail address already exists.",sk:"Účet s touto e-mailovou adresou už existuje.",uk:"Обліковий запис з цією електронною адресою вже існує.",
es:"Ya existe una cuenta con esta dirección de correo electrónico.",sv:"Det finns redan ett konto med denna e-postadress."},uuThingInvalidDtoIn:a.invalidDtoIn,uuAiInvalidDtoIn:a.invalidDtoIn,
uuEeInvalidDtoIn:a.invalidDtoIn,unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,invalidEmail:a.invalidEmail},setBasicAttributes:{emailIsNotUnique:{
cs:"Účet s touto e-mailovou adresou již existuje.",en:"An account with this e-mail address already exists.",sk:"Účet s touto e-mailovou adresou už existuje.",
uk:"Обліковий запис з цією електронною адресою вже існує.",es:"Ya existe una cuenta con esta dirección de correo electrónico.",sv:"Det finns redan ett konto med denna e-postadress."},
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,invalidEmail:a.invalidEmail},terminate:{unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,invalidEmail:a.invalidEmail}},
title:{cs:"Seznam identit",en:"Identity list",sk:"Identity list",uk:"Identity list",es:"Identity list",sv:"Identitetsförteckning"},create:{cs:"Vytvořit identitu",en:"Create identity",
sk:"Create identity",uk:"Create identity",es:"Create identity",sv:"Skapa identitet"},createDesc:{cs:"Tento formulář slouží pro založení nové identity.",
en:"The purpose of this form is to create a new identity.",sk:"The purpose of this form is to create a new identity.",uk:"The purpose of this form is to create a new identity.",
es:"The purpose of this form is to create a new identity.",sv:"Syftet med denna blankett är att skapa en ny identitet."},successfullyCreated:{cs:"Vytvoření proběhlo úspěšně.",
en:"Successfully created.",sk:"Successfully created.",uk:"Successfully created.",es:"Successfully created.",sv:"Framgångsrikt skapat."},update:{cs:"Upravit identitu",en:"Update identity",
sk:"Update identity",uk:"Update identity",es:"Update identity",sv:"Uppdatera identitet"},updateDesc:{cs:"Tento formulář slouží pro úpravu základních vlastností zvolené identity.",
en:"The purpose of this form is to set basic attributes on identity.",sk:"The purpose of this form is to set basic attributes on identity.",
uk:"The purpose of this form is to set basic attributes on identity.",es:"The purpose of this form is to set basic attributes on identity.",
sv:"Syftet med denna blankett är att fastställa grundläggande attribut för identiteten."},successfullyUpdated:{cs:"Úprava proběhla úspěšně.",en:"Successfully updated.",sk:"Successfully updated.",
uk:"Successfully updated.",es:"Successfully updated.",sv:"Framgångsrikt uppdaterad."},terminate:{cs:"Ukončit identitu",en:"Terminate identity",sk:"Terminate identity",uk:"Terminate identity",
es:"Terminate identity",sv:"Avsluta identitet"},terminateDesc:{cs:"Tento formulář slouží pro ukončení zvolené identity.",en:"The purpose of this form is to terminate identity.",
sk:"The purpose of this form is to terminate identity.",uk:"The purpose of this form is to terminate identity.",es:"The purpose of this form is to terminate identity.",
sv:"Syftet med denna blankett är att avsluta identiteten."},successfullyTerminated:{cs:"Ukončení proběhlo úspěšně.",en:"Successfully terminated.",sk:"Successfully terminated.",
uk:"Successfully terminated.",es:"Successfully terminated.",sv:"Upphörde framgångsrikt."},name:{cs:"Jméno",en:"Name",sk:"Name",uk:"Name",es:"Name",sv:"Namn"},surname:{cs:"Příjmení",en:"Surname",
sk:"Surname",uk:"Surname",es:"Surname",sv:"Efternamn"},uuIdentity:{cs:"uuIdentity",en:"uuIdentity",sk:"uuIdentity",uk:"uuIdentity",es:"uuIdentity",sv:"uuIdentity"},email:{cs:"E-mail",en:"E-mail",
sk:"E-mail",uk:"E-mail",es:"E-mail",sv:"E-post"},state:{cs:"Stav",en:"State",sk:"State",uk:"State",es:"State",sv:"Stat"},type:{cs:"Typ",en:"Type",sk:"Type",uk:"Type",es:"Type",sv:"Typ"},creationTime:{
cs:"Čas vytvoření",en:"Creation time",sk:"Creation time",uk:"Creation time",es:"Creation time",sv:"Tid för skapande"},creationTimeFrom:{cs:"Čas vytvoření od",en:"Creation time from",
sk:"Creation time from",uk:"Creation time from",es:"Creation time from",sv:"Skapelsetid från"},creationTimeTo:{cs:"Čas vytvoření do",en:"Creation time to",sk:"Creation time to",uk:"Creation time to",
es:"Creation time to",sv:"Tidsåtgång för skapande till"},uuPerson:{cs:"uuPerson",en:"uuPerson",sk:"uuPerson",uk:"uuPerson",es:"uuPerson"},uuEe:{cs:"uuEe",en:"uuEe",sk:"uuEe",uk:"uuEe",es:"uuEe"},
uuAi:{cs:"uuAi",en:"uuAi",sk:"uuAi",uk:"uuAi",es:"uuAi"},uuThing:{cs:"uuThing",en:"uuThing",sk:"uuThing",uk:"uuThing",es:"uuThing"},active:{cs:"aktivní",en:"active",sk:"active",uk:"active",
es:"active",sv:"aktiv"},unverified:{cs:"neověřený",en:"unverified",sk:"unverified",uk:"unverified",es:"unverified",sv:"obekräftad"},suspended:{cs:"pozastavený",en:"suspended",sk:"suspended",
uk:"suspended",es:"suspended",sv:"avbruten"},terminated:{cs:"ukončený",en:"terminated",sk:"terminated",uk:"terminated",es:"terminated",sv:"avslutat"}},basicInfo:{id:{cs:"id",en:"id",sk:"id",uk:"id",
es:"id",sv:"id"},code:{cs:"kód",en:"code",sk:"code",uk:"code",es:"code",sv:"kod"},desc:{cs:"popis",en:"description",sk:"description",uk:"description",es:"description",sv:"beskrivning"},created:{
cs:"vytvořena",en:"created",sk:"created",uk:"created",es:"created",sv:"skapat"},update:{cs:"Upravit",en:"Update",sk:"Update",uk:"Update",es:"Update",sv:"Uppdatera"},delete:{cs:"Odstranit",en:"Delete",
sk:"Delete",uk:"Delete",es:"Delete",sv:"Ta bort"},sectionHeader:{cs:"Základní informace",en:"Basic information",sk:"Basic information",uk:"Basic information",es:"Basic information",
sv:"Grundläggande information"},sectionDesc:{cs:"Základní informace o načtené identityGroup.",en:"Basic information about identityGroup.",sk:"Basic information about identityGroup.",
uk:"Basic information about identityGroup.",es:"Basic information about identityGroup.",sv:"Grundläggande information om identityGroup."}},filterPanel:{filterTypeLabel:{cs:"Vyber typ filtru",
en:"Select filter type",sk:"Select filter type",uk:"Select filter type",es:"Select filter type",sv:"Välj filtertyp"},filterTypePlaceholder:{cs:"Vyber filtr",en:"Select filter",sk:"Select filter",
uk:"Select filter",es:"Select filter",sv:"Välj filter"},filterValueLabel:{cs:"A jeho hodnotu",en:"And its value",sk:"And its value",uk:"And its value",es:"And its value",sv:"Och dess värde"},
filterValuePlaceholder:{cs:"Hodnota filtru",en:"Filter value",sk:"Filter value",uk:"Filter value",es:"Filter value",sv:"Filtreringsvärde"},addButton:{cs:"Přidat",en:"Add",sk:"Add",uk:"Add",es:"Add",
sv:"Lägg till"}}},appTop:{name:{cs:"uuIdentityManagement",en:"uuIdentityManagement",sk:"uuIdentityManagement",uk:"uuIdentityManagement",es:"uuIdentityManagement",sv:"uuIdentityManagement"}},
aboutHeader:{cs:"O aplikaci uuIdentityManagement",en:"About application uuIdentityManagement",sk:"O aplikácii uuIdentityManagement",uk:"Про додаток uuIdentityManagement",
es:"Sobre la aplicación uuIdentityManagement",sv:"Om appen uuIdentityManagement"},aboutCreatorsHeader:{cs:"Tvůrci aplikace",en:"Application creators",sk:"Tvorcovia aplikácie",uk:"Розробники додатка",
es:"Creadores de la aplicación",sv:"Användare av ansökan"},welcome:i.a.Common.Element.create(i.a.Bricks.Lsi,null,i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"cs"
},"Vítejte v aplikaci uuIdentityManagement"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"en"
},"Welcome to the uuIdentityManagement application"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sk"
},"Vitajte v aplikácii uuIdentityManagement"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"uk"
},"Ласкаво просимо до додатка uuIdentityManagement"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"es"
},"Bienvenidos a la aplicación uuIdentityManagement"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sv"},"Välkommen till applikationen uuIdentityManagement")),
welcomeShort:i.a.Common.Element.create(i.a.Bricks.Lsi,null,i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"cs"},"Vítejte"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"en"
},"Welcome"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sk"},"Vitajte"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"uk"
},"Ласкаво просимо"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"es"},"Bienvenidos"),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sv"},"Välkommen")),
loginRequired:i.a.Common.Element.create(i.a.Bricks.Lsi,null,i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"cs"
},"Pro přístup do aplikace se prosím přihlaste..."),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"en"
},"To access the application, please log in..."),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sk"
},"Pre prístup do aplikácie sa, prosím, prihláste..."),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"uk"
},"Для доступу до додатка виконайте вхід..."),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"es"
},"Por favor, inicie la sesión para acceder a la aplicación..."),i.a.Common.Element.create(i.a.Bricks.Lsi.Item,{language:"sv"},"För att få tillgång till ansökan, vänligen logga in...")),
unexpectedError:{cs:"Při zpracování došlo k neočekávané chybě. Kontaktujte prosím administrátora aplikace.",
en:"An unexpected error occurred during processing. Please contact the application administrator.",sk:"Pri spracovaní došlo k neočakávanej chybe. Kontaktujte, prosím, administrátora aplikácie.",
uk:"Під час обробки сталася неочікувана помилка. Зверніться до адміністратора додатка.",
es:"Al procesar, se ha producido un error inesperado. Por favor, póngase en contacto con el administrador de la aplicación.",
sv:"Ett oväntat fel inträffade under bearbetningen. Vänligen kontakta programadministratören.."},accessCode:{accessCode:{cs:"Přístupový kód %s",en:"Access code %s",sk:"Prístupový kód %s",
uk:"Код доступу %s",es:"Código de acceso %s",sv:"Lösenord %s"},verifyAccessCode:{cs:"Potvrzení přístupového kódu %s",en:"Access code confirmation %s",sk:"Potvrdenie prístupového kódu %s",
uk:"Підтвердження коду доступу %s",es:"Confirmación del código de acceso %s",sv:"Bekräftelse av lösenord %s"},invalidConfirmation:{cs:"Přístupové kódy se neshodují.",en:"Access codes do not match.",
sk:"Prístupové kódy sa nezhodujú.",uk:"Коди доступу не збігаються.",es:"Los códigos de acceso no coinciden.",sv:"Lösenorden stämmer inte överens."},invalidConfirmation1:{
cs:"Přístupové kódy se neshodují.",en:"Access codes do not match.",sk:"Prístupové kódy sa nezhodujú.",uk:"Коди доступу не збігаються.",es:"Los códigos de acceso no coinciden.",
sv:"Lösenorden stämmer inte överens."},invalidConfirmation2:{cs:"Přístupové kódy se neshodují.",en:"Access codes do not match.",sk:"Prístupové kódy sa nezhodujú.",uk:"Коди доступу не збігаються.",
es:"Los códigos de acceso no coinciden.",sv:"Lösenorden stämmer inte överens."},tooGuessable:{cs:"Velmi slabé heslo",en:"Very weak password",sk:"Veľmi slabé heslo",uk:"Дуже ненадійний пароль",
es:"Contraseña muy débil",sv:"Mycket svagt lösenord"},veryGuessable:{cs:"Velmi slabé heslo",en:"Very weak password",sk:"Veľmi slabé heslo",uk:"Дуже ненадійний пароль",es:"Contraseña muy débil",
sv:"Mycket svagt lösenord"},somewhatGuessable:{cs:"Slabé heslo",en:"Weak password",sk:"Slabé heslo",uk:"Ненадійний пароль",es:"Contraseña débil",sv:"Svagt lösenord"},safelyUnguessable:{
cs:"Silné heslo",en:"Strong password",sk:"Silné heslo",uk:"Надійний пароль",es:"Contraseña fuerte",sv:"Starkt lösenord"},veryUnguessable:{cs:"Velmi silné heslo",en:"Very strong password",
sk:"Veľmi silné heslo",uk:"Дуже надійний пароль",es:"Contraseña muy fuerte",sv:"Mycket starkt lösenord"},minLengthInfo:{
cs:"Přístupový kód 1 musí obsahovat minimálně 3 znaky. Neměl by se shodovat s vámi zvoleným registračním e-mailem.",
en:"Access code 1 must contain a minimum of 3 characters. It should not match your chosen registration e-mail address.",
sk:"Prístupový kód 1 musí obsahovať minimálne 3 znaky. Nemal by sa zhodovať s vami zvoleným registračným e-mailom.",
uk:"Код доступу 1 повинен містити принаймні 3 символи. Він не повинен збігатися з вибраною вами реєстраційною електронною адресою.",
es:"El código de acceso 1 debe contener al menos 3 caracteres. No debe coincidir con el correo electrónico de registro que ha elegido.",
sv:"Lösenord 1 måste innehålla minst 3 tecken. Den får inte stämma överens med den e-postadress som du har valt vid registreringen."},combinationInfo:{
cs:"Použijte kombinaci malých a velkých písmen, čísel nebo jiných znaků. Heslo je vhodné zvolit tak, aby nekombinovalo vaše jméno a příjmení v základním tvaru, neobsahovalo běžné číselné posloupnosti (např. 123) atp. ",
en:"Use a combination of small and capital letters, numbers and other characters. The password should be selected in such a way that it does not combine your name and surname in basic form, and does not contain normal numerical sequences (e.g. 123) etc.",
sk:"Použite kombináciu malých a veľkých písmen, čísiel alebo iných znakov. Heslo je vhodné zvoliť tak, aby nekombinovalo vaše meno a priezvisko v základnom tvare, aby neobsahovalo bežné číselné postupnosti (napr. 123) atď.",
uk:"Використовуйте комбінацію малих і великих літер, цифр або інших знаків. Пароль слід обирати таким чином, щоб він не був комбінацією вашого імені та прізвища (в основній формі), щоб він не містив звичайні послідовності чисел (наприклад, 123) і так далі.",
es:"Use una combinación de mayúsculas y minúsculas, números u otros caracteres. Es conveniente elegir una contraseña que no contenga su nombre y apellidos en su forma básica y no contenga secuencias numéricas comunes (por ejemplo 123), etc.",
sv:"Använd en kombination av små och stora bokstäver, siffror och andra tecken. Lösenordet bör väljas så att det inte kombinerar ditt för- och efternamn i grundform och inte innehåller normala sifferföljder (t.ex. 123) osv."
}},consentBox:{optionalMarker:{cs:"volitelné",en:"optional",sk:"voliteľné",uk:"необов’язково",es:"opcional",sv:"valfritt"}},thirdPartyButtonGroup:{google:{cs:"Google",en:"Google",sk:"Google",
uk:"Google",es:"Google",sv:"Google"},facebook:{cs:"Facebook",en:"Facebook",sk:"Facebook",uk:"Facebook",es:"Facebook",sv:"Facebook"},microsoft:{cs:"Microsoft",en:"Microsoft",sk:"Microsoft",
uk:"Microsoft",es:"Microsoft",sv:"Microsoft"},showMore:{cs:"Zobrazit další možnosti",en:"Show other options",sk:"Zobraziť ďalšie možnosti",uk:"Показати більше",es:"Ver más opciones",
sv:"Visa andra alternativ"},hideMore:{cs:"Skrýt další možnosti",en:"Hide other options",sk:"Skryť ďalšie možnosti",uk:"Показати менше",es:"Ocultar más opciones",sv:"Dölja andra alternativ"},
tokenNotExists:{cs:"Přes tento účet se nelze registrovat.",en:"It is not possible to register via this account.",sk:"Cez tento účet sa nedá registrovať.",
uk:"Неможливо зареєструватися за допомогою цього облікового запису.",es:"No se puede registrar con esta cuenta.",sv:"Det är inte möjligt att registrera sig via detta konto."},tokenValid:{
cs:"Registrace vašeho účtu není kompletní.",en:"You account registration is incomplete.",sk:"Registrácia vášho účtu nie je kompletná.",uk:"Реєстрацію вашого облікового запису не завершено.",
es:"El registro de su cuenta está incompleto.",sv:"Registreringen av ditt konto är ofullständig.."},unExpectedError:{cs:"Omlouváme se, došlo k nečekané chybě.",
en:"We apologise; an unexpected error has occurred.",sk:"Ospravedlňujeme sa, došlo k nečakanej chybe.",uk:"Просимо вибачення, сталася неочікувана помилка.",
es:"Lo sentimos, se produjo un error inesperado.",sv:"Vi ber om ursäkt, ett oväntat fel har inträffat."},completeRegister:{cs:"Pokračovat v registraci.",en:"Continue with registration.",
sk:"Pokračovať v registrácii.",uk:"Продовжити реєстрацію.",es:"Continuar con el registro.",sv:"Fortsätt med registreringen."},unexpectedExternalIdPError:{
cs:"Odmítli jste přístup k rozsahu požadovanému aplikací Plus4U.",en:"You have refused access in the extent required by the Plus4U application.",
sk:"Odmietli ste prístup k rozsahu požadovanému aplikáciou Plus4U.",uk:"Ви відхилили доступ до області, що вимагається додатком Plus4U.",
es:"Ha denegado el acceso al rango requerido por la aplicación Plus4U.",sv:"Du har nekat tillträde i den omfattning som krävs i Plus4U-ansökan.."},emailIsNotUniqueError:{
cs:'<uu5string />Účet s touto emailovou adresou je již registrován. Přihlašte se pomocí Přístupového kódu 1 a 2. V případě nové <UU5.Bricks.Link target="_blank" href="%s">registrace</UU5.Bricks.Link> zvolte jiný registrační email nebo kontaktujte <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Helpdesk</UU5.Bricks.Link>.',
en:'<uu5string />An account with this email address is already registered. Log in using Access Code 1 and 2. If this is a new <UU5.Bricks.Link target="_blank" href="%s">registration</UU5.Bricks.Link>, select another registration e-mail or contact <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Helpdesk</UU5.Bricks.Link>.',
sk:'<uu5string />Účet s touto emailovou adresou je už registrovaný. Prihláste sa pomocou prístupového kódu 1 a 2. V prípade novej <UU5.Bricks.Link target="_blank" href="%s">registrácie</UU5.Bricks.Link> zvoľte iný registračný email alebo kontaktujte <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Helpdesk</UU5.Bricks.Link>.',
uk:'<uu5string />Обліковий запис з цією електронною адресою вже зареєстровано. Увійдіть за допомогою коду доступу 1 та 2. Якщо це нова <UU5.Bricks.Link target="_blank" href="%s">реєстрація</UU5.Bricks.Link>, виберіть іншу електронну пошту з реєстрацією або зв’яжіться з службою підтримки <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Helpdesk</UU5.Bricks.Link>.',
es:'<uu5string />Una cuenta con esta dirección de correo electrónico ya está registrada. Inicie sesión con los códigos de acceso 1 y 2. Si se trata de un nuevo <UU5.Bricks.Link target="_blank" href="%s">registro</UU5.Bricks.Link>, seleccione otro correo electrónico de registro o póngase en contacto con el servicio de asistencia de <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Helpdesk</UU5.Bricks.Link>.',
sv:'<uu5string />Ett konto med denna e-postadress är redan registrerat. Logga in med lösenord 1 och 2. Om detta är en ny <UU5.Bricks.Link target="_blank" href="%s">registrering</UU5.Bricks.Link>, välj ett annat e-postmeddelande eller en annan kontaktperson för registreringen <UU5.Bricks.Link target="_blank" href="https://www.plus4u.net/contact">Plus4U Kundservice</UU5.Bricks.Link>.'
}},anonymousAccessButton:{content:{cs:"Pokračovat bez přihlášení",en:"Continue without logging in",sk:"Pokračovať bez prihlásenia",uk:"Продовжити без облікового запису",
es:"Continuar sin iniciar la sesión",sv:"Fortsätt utan att logga in"}},formControls:{ok:{cs:"OK",en:"OK",sk:"OK",uk:"OK",es:"OK",sv:"OK"},validate:{cs:"Zvalidovat",en:"Validate",sk:"Validovať",
uk:"Підтвердити",es:"Validar",sv:"Validera"},reset:{cs:"Reset",en:"Reset",sk:"Resetovať",uk:"Скинути",es:"Resetear",sv:"Återställ"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",
es:"Cancelar",sv:"Avbryt"}},oidcTheme:{invalidParameters:{cs:"Zadaná adresa neobsahuje všechny požadované parametry.",en:"The entered address does not contain all of the required parameters.",
sk:"Zadaná adresa neobsahuje všetky požadované parametre.",uk:"Введена адреса не містить всі необхідні параметри.",es:"La dirección que insertó no contiene todos los parámetros requeridos.",
sv:"Den angivna adressen innehåller inte alla nödvändiga parametrar."}},personTile:{showIdentity:{cs:"Zobrazit uživatele",en:"Show user",sk:"Zobraziť používateľa",uk:"Відобразити користувача",
es:"Mostrar usuario",sv:"Visa användare"}},formFooter:{contactUs:{cs:'<uu5string/>V případě potíží kontaktuje náš <UU5.Bricks.Link target="_blank" href="%s">Helpdesk</UU5.Bricks.Link>.',
en:'<uu5string/>In the event of difficulties, contact our <UU5.Bricks.Link target="_blank" href="%s">Helpdesk</UU5.Bricks.Link>.',
sk:'<uu5string/>V prípade problémov kontaktuje náš <UU5.Bricks.Link target="_blank" href="%s">Helpdesk</UU5.Bricks.Link>.',
uk:'<uu5string/> Якщо у вас виникли проблеми, зв\'яжіться з <UU5.Bricks.Link target="_blank" href="%s">Helpdesk</UU5.Bricks.Link>.',
es:'<uu5string/>Si tiene algún problema, contacte con nuestro <UU5.Bricks.Link target="_blank" href="%s">Servicio de Asistencia</UU5.Bricks.Link>.',
sv:'<uu5string/>Vid problem kan du kontakta vår <UU5.Bricks.Link target="_blank" href="%s">Kundservice</UU5.Bricks.Link>.'},loginTermsOfUsePrefix:{cs:"Přihlášením souhlasíte s ",
en:"By logging in, you agree with ",sk:"Prihlásením súhlasíte s ",uk:"Здійснюючи вхід, ви погоджуєтеся з ",es:"Al iniciar sesión, acepta ",sv:"Genom att logga in godkänner du följande "},
registrationTermsOfUsePrefix:{cs:"Touto registrací souhlasíte s ",en:"By this registration, you agree with ",sk:"Touto registráciou súhlasíte s ",uk:"Здійснюючи реєстрацією, ви погоджуєтеся з ",
es:"Al registrarse, acepta ",sv:"Genom denna registrering godkänner du följande "},termsOfUse:{cs:"podmínkami užívání",en:"the terms of use",sk:"podmienkami používania",uk:"умовами користування",
es:"términos de uso",sv:"Användarvillkor"},termsOfUsePostfix:{cs:" internetové služby %s.",en:" of the %s internet service.",sk:" internetovej služby %s.",uk:" Інтернет-сервісом %s.",
es:" del servicio de internet %s.",sv:" för %s internettjänst."},gdprPrefix:{cs:"Vaše osobní údaje budou zpracovávány v souladu se zásadami zpracování osobních údajů ",
en:"Your personal data will be processed in accordance with the personal data processing principles of the ",
sk:"Vaše osobné údaje sa budú spracovávať v súlade so zásadami spracovania osobných údajov ",uk:"Ваші персональні дані будуть оброблятися згідно із засадами регламенту з обробки персональних даних ",
es:"Su información personal será procesada de acuerdo con la política de privacidad ",sv:"Dina personuppgifter kommer att behandlas i enlighet med principerna för behandling av personuppgifter i  "},
gdpr:{cs:"GDPR",en:"GDPR",sk:"GDPR",uk:"GDPR",es:"RGPD",sv:"GDPR"},gdprPostfix:{cs:".",en:".",sk:".",uk:".",es:".",sv:"."}},actionBar:{searchInactive:{cs:"Neaktivní ...",en:"Inactive ...",
sk:"Neaktívny ...",uk:"Неактивний ...",es:"Inactivo ...",sv:"Inaktiv ..."},searchFilterLabel:{cs:"Hledat",en:"Search",sk:"Hľadať",uk:"Пошук",es:"Buscar",sv:"Sök på"}},administrationPortal:{header:{
cs:"Portál administrace",en:"Administration portal",sk:"Portál administrácie",uk:"Портал адміністрування",es:"Portal de administración",sv:"Administrationsportal"},createIdentity:{
cs:"Vytvořit uživatele",en:"Create user",sk:"Vytvoriť používateľa",uk:"Створити користувача",es:"Crear usuario",sv:"Skapa en användare"},searchQuery:{
cs:"Vyhledejte uživatele pomocí jména, e-mailu nebo uuIdentity.",en:"Search for user by name, e-mail or uuIdentity.",sk:"Vyhľadajte používateľa pomocou mena, e-mailu nebo uuIdentity.",
uk:"Пошук користувача за іменем, електронною адресою або uuIdentity.",es:"Busque un usuario por nombre, correo electrónico o uuIdentity.",
sv:"Sök efter användare med hjälp av namn, e-post eller uuIdentitet."},found1:{cs:"<uu5string/>Nalezen <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> uživatel.",
en:"<uu5string/>Found <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> user.",sk:"<uu5string/>Nájdený <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> používateľ.",
uk:"<uu5string/>Знайдено <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> користувача.",es:"<uu5string/>Encontrado <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> usuario.",
sv:"<uu5string/>Hittade <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> användare."},foundFrom2To4:{cs:"<uu5string/>Nalezeni <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> uživatelé.",
en:"<uu5string/>Found <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> users.",sk:"<uu5string/>Nájdení <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> používatelia.",
uk:"<uu5string/>Знайдені <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> користувачі.",es:"<uu5string/>Encontrados <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> usuarios.",
sv:"<uu5string/>Hittade <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> användare."},foundMore:{cs:"<uu5string/>Nalezeno <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> uživatelů.",
en:"<uu5string/>Found <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> users.",sk:"<uu5string/>Nájdených<UU5.Bricks.Strong>%s</UU5.Bricks.Strong> používateľov.",
uk:"<uu5string/>Знайдено <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> користувачів.",es:"<uu5string/>Encontrados <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> usuarios.",
sv:"<uu5string/>Hittade <UU5.Bricks.Strong>%s</UU5.Bricks.Strong> användare."},notFound:{cs:"Uživatel nebyl nalezen.",en:"User not found.",sk:"Používateľ sa nenašiel.",
uk:"Користувач не був знайдений.",es:"Usuario no ha sido encontrado.",sv:"Användaren har inte hittats."},resetSearch:{cs:"Vymazat výsledky vyhledávání",en:"Delete search results",
sk:"Vymazať výsledky vyhľadávania",uk:"Видалити результати пошуку",es:"Borrar resultados de la búsqueda",sv:"Ta bort sökresultat"},unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},
changeAccessCodes:{header:{cs:"Změnit přístupové kódy",en:"Change access codes",sk:"Zmeniť prístupové kódy",uk:"Змінити коди доступу",es:"Cambiar códigos de acceso",sv:"Ändra lösenord"},header1:{
cs:"Změnit přístupový kód 1",en:"Change access code 1",sk:"Zmeniť prístupový kód 1",uk:"Змінити код доступу 1",es:"Cambiar el código de acceso 1",sv:"Ändra lösenord 1"},header2:{
cs:"Změnit přístupový kód 2",en:"Change access code 2",sk:"Zmeniť prístupový kód 2",uk:"Змінити код доступу 2",es:"Cambiar el código de acceso 2",sv:"Ändra lösenord 2"},currentAccessCodes:{
cs:"Původní přístupové kódy",en:"Original access codes",sk:"Pôvodné prístupové kódy",uk:"Поточні коди доступу",es:"Códigos de acceso originales",sv:"Ursprungliga lösenord"},newAccessCodes:{
cs:"Nové přístupové kódy",en:"New access codes",sk:"Nové prístupové kódy",uk:"Нові коди доступу",es:"Nuevos códigos de acceso",sv:"Nya lösenord"},newAccessCodes1:{cs:"Nový přístupový kód 1",
en:"New access code 1",sk:"Nový prístupový kód 1",uk:"Новий код доступу 1",es:"Nuevo código de acceso 1",sv:"Nytt lösenord 1"},newAccessCodes2:{cs:"Nový přístupový kód 2",en:"New access code 2",
sk:"Nový prístupový kód 2",uk:"Новий код доступу 2",es:"Nuevo código de acceso 2",sv:"Nytt lösenord 2"},oidcNotAuthorized:{
cs:"Nebylo možné ověřit uživatele podle zadaných stávajících přístupových kódů.",en:"It was not possible to verify the user according to the entered existing access codes.",
sk:"Nebolo možné overiť používateľa podľa zadaných existujúcich prístupových kódov.",uk:"Неможливо перевірити користувача на підставі введених існуючих кодів доступу.",
es:"No fue posible validar al usuario basándose en los códigos de acceso existentes.",sv:"Det var inte möjligt att verifiera användaren med hjälp av det inmatade befintliga lösenordet."},
newAccessCode1Blocked:{cs:"Nově zvolený přístupový kód 1 není možné použít.",en:"The newly selected access code 1 cannot be used.",sk:"Novozvolený prístupový kód 1 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 1.",es:"El código de acceso 1 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 1 kan inte användas."},
newAccessCode2Blocked:{cs:"Nově zvolený přístupový kód 2 není možné použít.",en:"The newly selected access code 2 cannot be used.",sk:"Novozvolený prístupový kód 2 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 2.",es:"El código de acceso 2 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 2 kan inte användas."},
newAccessCode2TooWeak:{cs:"Nastavte nový přístupový kód 2 a znovu jej vyplňte do druhého pole k ověření.",en:"Set a new access code 2, and re-enter it in the second verification field.",
sk:"Nastavte nový prístupový kód 2 a znovu ho vyplňte do druhého poľa na overenie.",uk:"Налаштуйте новий код доступу 2 та введіть його повторно у другому полі для перевірки.",
es:"Configure el nuevo código de acceso 2 e insértelo nuevamente en el segundo campo para verificar.",sv:"Ange ett nytt lösenord 2 och skriv in det på nytt i det andra verifieringsfältet."},
newAccessCodesDesc:{cs:"Nastavte nové přístupové kódy a znovu jej vyplňte do druhého pole k ověření.",en:"Set new access codes, and re-enter them in the second verification field.",
sk:"Nastavte nové prístupové kódy a znovu ich vyplňte do druhého poľa na overenie.",uk:"Налаштуйте нові коди доступу та введіть їх повторно у другому полі для перевірки.",
es:"Configure nuevos códigos de acceso e insértelos nuevamente en el segundo campo para verificar.",sv:"Ange en nytt lösenord 2 och skriv in det på nytt i det andra verifieringsfältet."},ok:{
cs:"Změnit",en:"Change",sk:"Zmeniť",uk:"Змінити",es:"Cambiar",sv:"Ändra"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},credentialsNotFound:{
cs:"Zadali jste neplatný přístupový kod 1 nebo přístupový kod 2.",en:"You have entered an invalid access code 1 or access code 2.",sk:"Zadali ste neplatný prístupový kód 1 alebo prístupový kód 2.",
uk:"Ви ввели недійсний код доступу 1 або код доступу 2.",es:"Ha insertado el código de acceso 1 o el código de acceso 2 incorrecto.",sv:"Du har angett ett ogiltigt lösenord 1 eller lösenord 2."},
accessCodesMatch:{cs:"Nové přístupové kódy se nesmí shodovat s původními přístupovými kódy.",en:"The new access codes must not match the original access codes.",
sk:"Nové prístupové kódy sa nesmú zhodovať s pôvodnými prístupovými kódmi.",uk:"Нові коди доступу не повинні збігатися з поточними кодами доступу.",
es:"Los nuevos códigos de acceso no pueden coincidir con los códigos de acceso originales.",sv:"Nya lösenord får inte överensstämma med tidigare lösenord."},unexpectedError:a.unexpectedError,
validContent:{cs:"Formulář je validní.",en:"The form is valid.",sk:"Formulár je platný.",uk:"Форма дійсна.",es:"Formulario es válido.",sv:"Formuläret är giltigt."},invalidContent:{
cs:"Chybné přístupové kódy.",en:"Erroneous access codes.",sk:"Chybné prístupové kódy.",uk:"Неправильні коди доступу.",es:"Códigos de acceso incorrectos.",sv:"Felaktiga lösenord."},successfullySet:{
cs:"Změna přístupového kódu úspěšně provedena.",en:"Access code successfully changed.",sk:"Zmena prístupového kódu úspešne uskutočnená.",uk:"Зміна коду доступу пройшла успішно.",
es:"Cambio de código de acceso realizado con éxito.",sv:"Lösenordet har ändrats."},userNotAuthorized:{cs:"Chybně zadané původní přístupové kódy.",en:"Erroneously entered original access codes.",
sk:"Chybne zadané pôvodné prístupové kódy.",uk:"Неправильно введені поточні коди доступу.",es:"Códigos de acceso originales ingresados incorrectamente.",sv:"Felaktigt inmatade ursprungliga lösenord."
},helpInfo:{
cs:"Pro změnu přístupového kódu %s je potřeba pro ověření vaší identity zadat oba původní přístupové kódy. Následně si zvolte nový přístupový kód %s. Pro kontrolu správnosti jej prosím zadejte dvakrát.",
en:"To change your access code %s, you need to enter both your original access codes to verify your identity. Then choose a new access code %s and enter it twice for confirmation.",
sk:"Pre zmenu prístupového kódu %s je potrebné pre overenie vašej identity zadať oba pôvodné prístupové kódy. Následne si zvoľte nový prístupový kód %s. Pre kontrolu správnosti ho prosím zadajte dvakrát.",
uk:"o змінити код доступу %s, вам потрібно ввести обидва Поточні коди доступу, щоб підтвердити свою особу. Потім виберіть новий код доступу %s та введіть його двічі для підтвердження.",
es:"Para cambiar su código de acceso %s, debe ingresar su códigos de acceso originales para verificar su identidad. Luego elija un nuevo código de acceso %s e ingréselo dos veces para su confirmación.",
sv:"Om du vill ändra ditt lösenord %s måste du ange båda dina ursprungliga lösenord för att verifiera din identitet. Välj sedan ett nytt lösenord %s och ange det två gånger för bekräftelse."}},
confirmRegistration:{unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},createIdentity:{header:{cs:"Vytvořit uživatele",en:"Create user",sk:"Vytvoriť používateľa",
uk:"Створити користувача",es:"Crear usuario",sv:"Skapa en användare"},name:{cs:"Jméno",en:"Name",sk:"Meno",uk:"Ім'я",es:"Nombre",sv:"Namn"},surname:{cs:"Příjmení",en:"Surname",sk:"Priezvisko",
uk:"Прізвище",es:"Apellidos",sv:"Efternamn"},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-mail"},language:{cs:"Jazyk",en:"Language",sk:"Jazyk",uk:"Мова",
es:"Lengua",sv:"Språk"},timezone:{cs:"Časové pásmo",en:"Time zone",sk:"Časové pásmo",uk:"Часовий діапазон",es:"Zona horaria",sv:"Tidszon"},ok:{cs:"Vytvořit",en:"Create",sk:"Vytvoriť",uk:"Створити",
es:"Crear",sv:"Skapa"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},emailIsNotUnique:{cs:"Účet s touto e-mailovou adresou již existuje.",
en:"An account with this e-mail address already exists.",sk:"Účet s touto e-mailovou adresou už existuje.",uk:"Обліковий запис з цією електронною адресою вже існує.",
es:"Ya existe una cuenta con esta dirección de correo electrónico.",sv:"Det finns redan ett konto med denna e-postadress."},unexpectedError:a.unexpectedError,invalidEmail:a.invalidEmail,
notAuthorized:a.notAuthorized,invalidContent:{cs:"Všechny údaje jsou povinné a musí být vyplněny.",en:"All of the information is mandatory, and must be filled in.",
sk:"Všetky údaje sú povinné a musia sa vyplniť.",uk:"Усі дані є обов'язковими та мають бути введені.",es:"Todos los datos son obligatorios y hay que completarlos.",
sv:"Alla uppgifter är obligatoriska och måste fyllas i."}},registrationEmail:{header:{cs:"Potvrzení registrace",en:"Registration confirmation",sk:"Potvrdenie registrácie",
uk:"Підтвердження реєстрації",es:"Confirmación de registro",sv:"Bekräftelse av registrering"},emailSent1:{
cs:"Na vámi uvedenou e-mailovou adresu jsme zaslali potvrzovací e-mail. K dokončení registrace klikněte na odkaz v e-mailu.",
en:"We have sent a confirmation e-mail to the e-mail address you have listed. To complete the registration, click on the link in the e-mail.",
sk:"Na vami uvedenú e-mailovú adresu sme zaslali potvrdzujúci e-mail. Na dokončenie registrácie kliknite na odkaz v e-maile.",
uk:"На вказану вами електронну адресу надіслано електронний лист-підтвердження. Для завершення реєстрації клацніть на посилання в електронному листі.",
es:"Hemos enviado un correo electrónico de confirmación a su dirección de correo electrónico que proporcionó. Para completar el registro, haga clic en el enlace contenido en el correo electrónico.",
sv:"Vi har skickat en bekräftelse till den e-postadress som du har angett. För att slutföra registreringen klickar du på länken i e-postmeddelandet."},emailSent2Start:{
cs:"Pokud jste potvrzovací e-mail neobdrželi, zkontrolujte si prosím složku Spam ve vaší e-mailové schránce. Případně vám e-mail ",
en:"If you did not receive the confirmation e-mail, please check the spam folder in your mailbox. If necessary, we will resend the e-mail ",
sk:"Pokiaľ ste potvrdzujúci e-mail nedostali, skontrolujte si, prosím, zložku Spam vo vašej e-mailovej schránke. Prípadne vám e-mail ",
uk:"Якщо ви не отримали електронний лист-підтвердження, перевірте папку «Спам» у вашій електронній поштовій скриньці. У разі необхідності ми повторно надішлемо вам ",
es:"Si no ha recibido el correo electrónico de confirmación, revise su carpeta de Spam. Eventualmente le enviaremos el e-mail ",
sv:"Om du inte fick bekräftelsen via e-post kan du kontrollera skräppostmappen i din brevlåda. Vid behov skickar vi e-postmeddelandet på nytt "},emailSent2Link:{cs:"zašleme znovu",en:"to you",
sk:"zašleme znova",uk:"електронний лист",es:"otra vez",sv:"till dig"},emailSent2End:{cs:".",en:".",sk:".",uk:".",es:".",sv:"."},identityNotActive1:{
cs:"Dokončete prosím svoji registraci kliknutím na aktivační odkaz v e-mailu, který Vám byl odeslán při registraci.",
en:"Please complete your registration by clicking on the activation link in the e-mail which was sent to you during registration.",
sk:"Dokončite, prosím, svoju registráciu kliknutím na aktivačný odkaz v e-maile, ktorý vám bol odoslaný pri registrácii.",
uk:"Завершіть реєстрацію, клацнувши на посилання для активації в електронному листі, який був вам відправлений при реєстрації.",
es:"Por favor, complete su registro haciendo clic en el enlace de activación en el correo electrónico que se le envió en el momento de registro.",
sv:"Slutför din registrering genom att klicka på aktiveringslänken i det e-postmeddelande som skickades till dig vid registreringen."},identityNotActive2Start:{
cs:"Pokud jste neobdrželi registrační e-mail, zkontrolujte prosím složku s nevyžádanou poštou. Případně Vám můžeme registrační e-mail ",
en:"If you did not receive the registration e-mail, please check the unwanted mail file. If necessary, we can resend the registration e-mail ",
sk:"Pokiaľ ste nedostali registračný e-mail, skontrolujte si, prosím, zložku s nevyžiadanou poštou. Prípadne vám môžeme registračný e-mail ",
uk:"Якщо ви не отримали електронний лист для реєстрації, перевірте папку з небажаною поштою. У разі необхідності ми можемо повторно надіслати вам ",
es:"Si no ha recibido su correo electrónico de registro, revise su carpeta de correo no deseado. Eventualmente podemos enviarle correo electrónico de registro ",
sv:"Om du inte har fått e-postmeddelandet om registrering kan du kontrollera filen med oönskad e-post. Vid behov kan vi skicka registreringsmeddelandet på nytt "},identityNotActive2Link:{
cs:"zaslat znovu",en:"to you",sk:"zaslať znova",uk:"електронний лист для реєстрації",es:"otra vez",sv:"till dig"},identityNotActive2End:{cs:".",en:".",sk:".",uk:".",es:".",sv:"."},
verificationCodeExpired1:{cs:"Platnost aktivačního odkazu již vypršela.",en:"The activation link is no longer valid.",sk:"Platnosť aktivačného odkazu už vypršala.",
uk:"Термін дії посилання для активації вже закінчився.",es:"El enlace de activación ha caducado.",sv:"Aktiveringslänken är inte längre giltig."},verificationCodeExpired2Start:{cs:"Nechte si zaslat ",
en:"Have a new registration e-mail ",sk:"Nechajte si zaslať ",uk:"Відправте запит на надсилання ",es:"Pida que le enviemos ",sv:"Har en ny e-postadress för registrering "},
verificationCodeExpired2Link:{cs:"nový registrační e-mail",en:"sent to you",sk:"nový registračný e-mail",uk:"нового електронного листа для реєстрації",es:"un nuevo e-mail de registro",
sv:"skickas till dig"},verificationCodeExpired2End:{cs:".",en:".",sk:".",uk:".",es:".",sv:"."},emailResent:{cs:"Registrační e-mail byl odeslán.",en:"The registration e-mail has been sent.",
sk:"Registračný e-mail bol odoslaný.",uk:"Електронний лист для реєстрації був відправлений.",es:"E- mail de registro ha sido enviado.",sv:"Registreringsmeddelandet har skickats."},
identityIsNotUnverified:{cs:"Odeslání e-mailu se nezdařilo, registrace pravděpodobně již byla dokončena.",en:"The e-mail could not be sent; the registration has probably already been completed.",
sk:"Odoslanie e-mailu sa nepodarilo, registrácia už bola pravdepodobne dokončená.",uk:"Не вдалося відправити електронний лист, ймовірно, реєстрація вже була завершена.",
es:"El envío de correo electrónico falló, probablemente el registro ya haya sido completado.",sv:"E-postmeddelandet kunde inte skickas; registreringen har förmodligen redan slutförts."},
identityIsNotUnverifiedByPerson:{cs:"Odeslání e-mailu se nezdařilo, registrace pravděpodobně již byla dokončena.",
en:"The e-mail could not be sent; the registration has probably already been completed.",sk:"Odoslanie e-mailu sa nepodarilo, registrácia už bola pravdepodobne dokončená.",
uk:"Не вдалося відправити електронний лист, ймовірно, реєстрація вже була завершена.",es:"El envío de correo electrónico falló, probablemente el registro ya haya sido completado.",
sv:"E-postmeddelandet kunde inte skickas; registreringen har förmodligen redan slutförts."},emailIsNotUnique:{
cs:"Účet s touto emailovou adresou je již registrován. Pokud se jedná o váš účet, zrušte prosím tuto registraci a přihlašte se k tomuto účtu. Přihlašovací metodu je možné připojit k vašemu účtu v nastavení.",
en:"An account is already registered with this email address. If it is your account, please cancel this registration and log in to the account. You can link other login methods to the account in the settings.",
sk:"Účet s touto emailovou adresou je už registrovaný. Pokiaľ sa jedná o váš účet, zrušte prosím túto registráciu a prihláste sa k tomuto účtu. Prihlasovacie metódu je možné pripojiť k vášmu účtu v nastavení.",
uk:"Обліковий запис із цією адресою електронної пошти вже зареєстрований. Якщо це ваш обліковий запис,будь ласка, скасуйте цю реєстрацію та увійдіть у свій обліковий запис. Спосіб входу можна додати до свого облікового запису в налаштуваннях.",
es:"Ya está registrada una cuenta con esta dirección de correo electrónico. Si esta es su cuenta, cancele este registro e inicie sesión en esta cuenta. El método de inicio de sesión se puede adjuntar a su cuenta en la configuración.",
sv:"Ett konto finns redan registrerat med denna mejladress. Om det är ditt konto, var god och avbryt denna registrering och logga in på kontot. Du kan koppla andra metoder för inloggning under inställningar."
},emailIsNotUniqueByPerson:{
cs:"Účet s touto emailovou adresou je již registrován. Pokud se jedná o váš účet, zrušte prosím tuto registraci a přihlašte se k tomuto účtu. Přihlašovací metodu je možné připojit k vašemu účtu v nastavení.",
en:"An account is already registered with this email address. If it is your account, please cancel this registration and log in to the account. You can link other login methods to the account in the settings.",
sk:"Účet s touto emailovou adresou je už registrovaný. Pokiaľ sa jedná o váš účet, zrušte prosím túto registráciu a prihláste sa k tomuto účtu. Prihlasovacie metódu je možné pripojiť k vášmu účtu v nastavení.",
uk:"Обліковий запис із цією адресою електронної пошти вже зареєстрований. Якщо це ваш обліковий запис,будь ласка, скасуйте цю реєстрацію та увійдіть у свій обліковий запис. Спосіб входу можна додати до свого облікового запису в налаштуваннях.",
es:"Ya está registrada una cuenta con esta dirección de correo electrónico. Si esta es su cuenta, cancele este registro e inicie sesión en esta cuenta. El método de inicio de sesión se puede adjuntar a su cuenta en la configuración.",
sv:"Ett konto finns redan registrerat med denna mejladress. Om det är ditt konto, var god och avbryt denna registrering och logga in på kontot. Du kan koppla andra metoder för inloggning under inställningar."
},sendEmailFailed:{cs:"Email na tuto emailovou adresu se nepodařilo odeslat.",en:"We were not able to send an email to this address.",sk:"Email na túto emailovú adresu sa nepodarilo odoslať.",
uk:"Не вдалося надіслати електронний лист на цю електронну адресу.",es:"No pudimos enviar un correo electrónico a esta dirección.",sv:"Vi kunde inte skicka något mejl till denna adressen."},
sendEmailFailedByPerson:{cs:"Email na tuto emailovou adresu se nepodařilo odeslat.",en:"We were not able to send an email to this address.",sk:"Email na túto emailovú adresu sa nepodarilo odoslať.",
uk:"Не вдалося надіслати електронний лист на цю електронну адресу.",es:"No pudimos enviar un correo electrónico a esta dirección.",sv:"Vi kunde inte skicka något mejl till denna adressen."},
emailWasNotConfirmed:{cs:"E-mail zatím nebyl potvrzen.",en:"The e-mail was not yet confirmed.",sk:"E-mail zatiaľ nebol potvrdený.",uk:"Електронна адреса ще не підтверджена.",
es:"El email aún no ha sido confirmado.",sv:"E-postmeddelandet har ännu inte bekräftats."},identityAccountDoesNotExistOrIsAlreadyActive:{cs:"Email byl již potvrzen.",
en:"The email has been already confirmed.",sk:"Email bol už potvrdený.",uk:"Електронна пошта підтверджена.",es:"El correo electrónico ya ha sido confirmado.",sv:"Mejlen har redan blivit bekräftad."},
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,invalidEmail:a.invalidEmail,emailConfirmed:{cs:"E-mail jsem potvrdil...",en:"I have confirmed the email...",sk:"E-mail som potvrdil...",
uk:"Я підтвердив електронну пошту...",es:"He confirmado el email...",sv:"Jag har bekräftat e-postmeddelandet..."},sendEmail:{cs:"Odeslat",en:"Send",sk:"Odoslať",uk:"Відправити",es:"Enviar",sv:"Skicka"
},cancelRegistration:{cs:"Rozmyslel jsem si to. Zrušit registraci.",en:"I have changed my mind. Cancel the registration.",sk:"Rozmyslel som si to. Zrušiť registráciu.",
uk:"Я змінив свою думку. Скасувати реєстрацію.",es:"He cambiado de opinión. Cancelar el registro.",sv:"Jag har ändrat mig. Avbryt registreringen."}},login:{header:{cs:"Přihlásit se do +4U",
en:"Log in to +4U",sk:"Prihlásiť sa do +4U",uk:"Увійти до +4U",es:"Iniciar sesión en +4U",sv:"Logga in på +4U"},simpleHeader:{cs:"Přihlásit se",en:"Log in",sk:"Prihlásiť sa",uk:"Увійти",
es:"Iniciar sesión",sv:"Logga in"},thirdPartyButtonsStart:{cs:"Přihlaste se pomocí:",en:"Log in with:",sk:"Prihláste sa pomocou:",uk:"Увійдіть, використовуючи:",es:"Iniciar sesión:",sv:"Logga in:"},
thirdPartyButtonsEnd:{cs:"nebo se přihlásit přes",en:"or log in via",sk:"alebo sa prihlásiť cez",uk:"або увійдіть через",es:"o inicie sesión con",sv:"eller logga in via"},forgottenAccessCodes:{
cs:"Nemůžete se přihlásit?",en:"Cannot log in?",sk:"Nemôžete sa prihlásiť?",uk:"Не можете увійти?",es:"¿No puede iniciar la sesión?",sv:"Kan du inte logga in?"},register:{cs:"Registrace",
en:"Registration",sk:"Registrácia",uk:"Реєстрація",es:"Registro",sv:"Registrera"},ok:{cs:"Přihlásit se",en:"Log in",sk:"Prihlásiť sa",uk:"Увійти",es:"Iniciar sesión",sv:"Logga in"},send:{cs:"Odeslat",
en:"Send",sk:"Odoslať",uk:"Відправити",es:"Enviar",sv:"Skicka"},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-post"},completeRegister:{
cs:"Pokračovat v registraci.",en:"Continue with registration.",sk:"Pokračovať v registrácii.",uk:"Продовжити реєстрацію.",es:"Continuar con el registro.",sv:"Fortsätt med registreringen."},
newRegister:{cs:"Nová registrace.",en:"New registration.",sk:"Nová registrácia.",uk:"Нова реєстрація.",es:"Registro nuevo.",sv:"Ny registrering."},emailSent:{
cs:"E-mail s odkazem pro reset zapomenutých přístupových kódů byl úspěšně odeslán.",en:"The e-mail containing a link for the reset of forgotten access codes was successfully sent.",
sk:"E-mail s odkazom na resetovanie zabudnutých prístupových kódov bol úspešne odoslaný.",uk:"Електронний лист із посиланням для скидання забутих кодів доступу був успішно відправлений.",
es:"Se ha enviado con éxito un correo electrónico que contiene enlace para reiniciar los códigos de acceso olvidados.",
sv:"E-postmeddelandet med en länk för återställning av glömda lösenord har skickats."},identityDoesNotExist:{cs:"Uživatel s touto e-mailovou adresou nebyl nalezen.",
en:"No user with this e-mail address found.",sk:"Používateľ s touto e-mailovou adresou sa nenašiel.",uk:"Користувач з цією електронною адресою не був знайдений.",
es:"No se ha encontrado usuario con esta dirección de correo electrónico.",sv:"Ingen användare med denna e-postadress hittades."},plus4U:{cs:"Plus4U",en:"Plus4U",sk:"Plus4U",uk:"Plus4U",es:"Plus4U",
sv:"Plus4U"},rememberMe:{cs:"Zapamatuj si mě",en:"Remember me",sk:"Pamätáš si ma",uk:"Запам'ятати мене",es:"Recuérdame",sv:"Kom ihåg mig"},headerPlus4UOnly:{cs:"Přihlaste se pomocí Plus4U ID",
en:"Log in using a Plus4U ID",sk:"Prihláste sa pomocou Plus4U ID",uk:"Увійдіть за допомогою Plus4U ID",es:"Inicie sesión con Plus4U ID",sv:"Logga in med ett Plus4U ID"},
unexpectedError:a.unexpectedError,invalidEmail:a.invalidEmail,notAuthorized:a.notAuthorized,validContent:{cs:"Formulář je validní.",en:"The form is valid.",sk:"Formulár je platný.",uk:"Форма дійсна.",
es:"Formulario es válido.",sv:"Formuläret är giltigt."},invalidContent:{cs:"Přístupový kód 1 a 2 jsou povinné a musí být vyplněny.",en:"Access codes 1 and 2 are mandatory, and must be filled in.",
sk:"Prístupové kódy 1 a 2 sú povinné a musia sa vyplniť.",uk:"Коди доступу 1 та 2 обов’язкові, і їх необхідно ввести.",es:"Los códigos de acceso 1 y 2 son obligatorios y deben ser completados.",
sv:"Lösenord 1 och 2 är obligatoriska och måste fyllas i."},notAuthenticated:{cs:"Byl zadán chybný přístupový kód 1 nebo přístupový kód 2.",
en:"An erroneous access code 1 or access code 2 was entered.",sk:"Bol zadaný chybný prístupový kód 1 alebo prístupový kód 2.",uk:"Було введено неправильний код доступу 1 або код доступу 2.",
es:"El código de acceso 1 o 2 no es correcto.",sv:"Lösenord 1 eller lösenord 2 har angetts felaktigt."},tokenNotExists:{cs:"Přes tento účet se nelze přihlásit.",
en:"It is not possible to log in via this account.",sk:"Cez tento účet sa nedá prihlásiť.",uk:"Через це неможливо увійти в обліковий запис.",es:"No puede iniciar sesión con esta cuenta.",
sv:"Det är inte möjligt att logga in med detta konto."},tokenValid:{cs:"Registrace tohoto účtu není kompletní.",en:"The registration of this account is incomplete.",
sk:"Registrácia tohto účtu nie je kompletná.",uk:"Реєстрація цього облікового запису ще не завершена.",es:"El registro de esta cuenta está incompleto.",
sv:"Registreringen av detta konto är ofullständig."},tokenInvalid:{cs:"Váš účet není validní. Proveďtě novou registraci.",en:"You account is invalid. Please perform a new registration.",
sk:"Váš účet nie je validný. Zaregistrujte sa znova.",uk:"Ваш обліковий запис недійсний. Виконайте нову реєстрацію.",es:"Su cuenta no es válida. Regístrese de nuevo.",
sv:"Ditt konto är ogiltigt. Vänligen gör en ny registrering."},unExpectedError:{cs:"Omlouváme se, došlo k nečekané chybě.",en:"We apologise; an unexpected error has occurred.",
sk:"Ospravedlňujeme sa, došlo k nečakanej chybe.",uk:"Просимо вибачення, сталася неочікувана помилка.",es:"Lo sentimos, se produjo un error inesperado.",
sv:"Vi ber om ursäkt, ett oväntat fel har inträffat."},loginFirstTime:{cs:"Úspěšně jste se zaregistroval(a) do aplikace %s. Pro dokončení registrace se přihlaste",
en:"You have successfully registered for the %s application. To complete the registration, log in",sk:"Úspešne ste sa zaregistrovali do aplikácie %s. Na dokončenie registrácie sa prihláste",
uk:"Ви успішно зареєструвалися в додатку %s. Увійдіть для завершення реєстрації.",es:"Se ha registrado correctamente en la aplicación %s. Por favor, inicie sesión para completar el registro",
sv:"Du har framgångsrikt registrerat dig för %s ansökan. För att slutföra registreringen, logga in"},notAuthenticatedThirdParty:{
cs:"Tento účet není ve službě Plus4U registrovaný. Zaregistrujte se, anebo se přihlaste pomocí přístupových kódů.",
en:"This account is not registered in the Plus4U service. Register, or log in using the access codes.",
sk:"Tento účet nie je v službe Plus4U registrovaný. Zaregistrujte sa alebo sa prihláste pomocou prístupových kódov.",
uk:"Цей обліковий запис не зареєстрований у сервісі Plus4U. Зареєструйтесь або увійдіть за допомогою кодів доступу.",
es:"Esta cuenta no está registrada en Plus4U. Regístrese o inicie sesión con los códigos de acceso.",
sv:"Det här kontot är inte registrerat i Plus4U-tjänsten. Registrera dig eller logga in med hjälp av lösenord."},accountNotMigratedText1:{
cs:"Váš účet nebyl zařazen do pilotního provozu nové přihlašovací brány. Použijte prosím přihlášení na ",
en:"Your account was not included in the pilot operation of the new login gate. Please use the login at ",
sk:"Váš účet nebol zaradený do pilotnej prevádzky novej prihlasovacej brány. Použite, prosím, prihlásenie na ",
uk:"Ваш обліковий запис не було включено до пілотної фази нового порту входу. Скористайтесь, будь ласка, входом до ",
es:"Su cuenta no ha sido seleccionada para nuestro proyecto piloto del nuevo portal de acceso. Por favor, inicie sesión en ",
sv:"Ditt konto ingick inte i pilotverksamheten för den nya inloggningsgrinden. Vänligen använd inloggningen på "},accountNotMigratedLink1:{cs:"Plus4U.net",en:"Plus4U.net",sk:"Plus4U.net",
uk:"Plus4U.net",es:"Plus4U.net",sv:"Plus4U.net"},accountNotMigratedText2:{cs:". Pokud se chcete do pilotního provozu zapojit, ",en:". If you would like to participate in the pilot operation, ",
sk:". Pokiaľ sa chcete zúčastniť na pilotnej prevádzke, ",uk:". Якщо ви бажаєте долучитися до пілотної фази, ",es:". Si quiere participar en el proyecto piloto, ",
sv:". Om du vill delta i pilotverksamheten, "},accountNotMigratedLink2:{cs:"kontaktujte nás",en:"contact us",sk:"kontaktujte nás",uk:"зв'яжіться з нами.",es:"contáctenos",sv:"kontakta oss"},
accountNotMigratedText3:{cs:".",en:".",sk:".",uk:".",es:".",sv:"."},tooManyInvalidAuthentications:{cs:"Váš účet byl dočasně zablokován po několika neúspěšných pokusech o přihlášení.",
en:"Too many invalid login attempts, your account is temporarily blocked, please try again later.",
sk:"Príliš veľa neplatných pokusov o prihlásenie, váš účet je dočasne zablokovaný, skúste to znova neskôr.",
uk:"Занадто багато недійсних спроб входу, ваш обліковий запис тимчасово заблоковано, спробуйте пізніше.",
es:"Demasiados intentos de inicio de sesión no válidos, su cuenta está bloqueada temporalmente, inténtelo de nuevo más tarde.",
sv:"För många ogiltiga inloggningsförsök, ditt konto är tillfälligt blockerat, försök igen senare.."},invalidTime:{
cs:"Přihlášení není možné provést z bezpečnostních důvodů, protože čas na vašem zařízení není správně nastaven. Zkontrolujte prosím správné nastavení času a časového pásma.",
en:"Login is not possible due to security reasons because the time on your device is not set correctly. Please check the time and time zone settings.",
sk:"Prihlásenie nie je možné uskutočniť z bezpečnostných dôvodov, pretože čas na vašom zariadení nie je správne nastavený. Skontrolujte prosím správne nastavenie času a časového pásma.",
uk:"Вхід в систему неможливий із міркувань безпеки, оскільки час на вашому пристрої встановлений неправильно. Перевірте налаштування часу та часового поясу.",
es:"No es posible iniciar sesión por razones de seguridad porque la hora en su dispositivo no está configurada correctamente. Compruebe la configuración de la hora y la zona horaria.",
sv:"Det går inte att logga in av säkerhetsskäl eftersom tiden på din enhet inte är korrekt inställd. Kontrollera inställningarna för tid och tidszon."},verificationTimeIsNotValid:{
cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",
sv:"Länken är inte längre giltig."},successfullySet:{cs:"Přístupové kódy byly úspěšně nastaveny. Nyní se můžete přihlásit.",en:"The access codes have been successfully set. You can now log in.",
sk:"Prístupové kódy boli úspešne nastavené. Teraz sa môžete prihlásiť.",uk:"Коди доступу було успішно налаштовано. Тепер ви можете виконати вхід.",
es:"Los códigos de acceso han sido establecidos correctamente. Ahora puede iniciar sesión.",sv:"Lösenorden har ändrats. Du kan nu logga in."}},registration:{header:{cs:"Pokud již máte účet, ",
en:"If you already have an account, ",sk:"Ak už máte účet, prosím, ",uk:"Якщо у вас вже є обліковий запис, ",es:"Si ya tiene una cuenta, ",sv:"Om du redan har ett konto, "},simpleHeader:{
cs:"Registrovat se",en:"Register",sk:"Registrovať sa",uk:"Зареєструватися",es:"Registrarse",sv:"Registrera dig"},name:{cs:"Jméno",en:"Name",sk:"Meno",uk:"Ім'я",es:"Nombre",sv:"Namn"},surname:{
cs:"Příjmení",en:"Surname",sk:"Priezvisko",uk:"Прізвище",es:"Apellidos",sv:"Efternamn"},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-post"},accessCodesDesc:{
cs:"K zajištění maximální bezpečnosti vašeho účtu používáme dvě hesla, Přístupový kód 1 a Přístupový kód 2, která slouží k přihlášení do vašeho účtu. Tato hesla nebudou nikde ve službě veřejně prezentována. ",
en:"In order to ensure that your account is as secure as possible, we use two passwords - Access Code 1 and Access Code 2 - which are used to log in to your account. These passwords will not be publicly presented anywhere in the service.",
sk:"Na zaistenie maximálnej bezpečnosti vášho účtu používame dve heslá, Prístupový kód 1 a Prístupový kód 2, ktoré slúžia na prihlásenie do účtu. Tieto heslá sa nebudú nikde v službe verejne prezentovať.",
uk:"Для забезпечення максимальної безпеки вашого облікового запису ми використовуємо два пароля, Код доступу 1 та Код доступу 2, які служать для входу до Вашого облікового запису. Ці паролі не будуть відкрито представлені в сервісі.",
es:"Para garantizar la máxima seguridad para su cuenta, utilizamos dos contraseñas, el Código de acceso 1 y el Código de acceso 2 que se utilizan para iniciar sesión en su cuenta. Estas contraseñas no se mostrarán públicamente en ningún lugar.",
sv:"För att ditt konto ska vara så säkert som möjligt använder vi två lösenord - Lösenord 1 och Lösenord 2 - som används för att logga in på ditt konto. Dessa lösenord kommer inte att visas offentligt någonstans i tjänsten.."
},login:{cs:"přihlaste se zde",en:"log in here",sk:"prihláste sa tu här",uk:"увійдіть тут",es:"Inicie la sesión",sv:"logga in här"},ok:{cs:"Vytvořit účet",en:"Create account",sk:"Vytvoriť účet",
uk:"Створити обліковий запис",es:"Crear cuenta",sv:"Skapa ett konto"},thirdPartyRegistrationHeaderStart:{cs:"Registrace pomocí:",en:"Register with:",sk:"Registrácia pomocou:",
uk:"Реєстрація за допомогою:",es:"Regístrese usando:",sv:"Registrera dig med:"},plus4UHeader:{cs:"nebo vyplňte registrační formulář",en:"or fill in the registration form",
sk:"alebo vyplňte registračný formulár",uk:"або заповніть реєстраційний формуляр",es:"o rellene el formulario de registro",sv:"eller fyll i registreringsformuläret."},plus4UHeaderRequired:{
cs:"Vyplňte registrační formulář",en:"Fill in the registration form",sk:"Vyplňte registračný formulár",uk:"Заповніть реєстраційний формуляр",es:"Rellene el formulario de registro",
sv:"Fyll i registreringsformuläret"},emailIsNotUnique:a.emailIsNotUnique,unexpectedError:a.unexpectedError,invalidEmail:a.invalidEmail,invalidName:{
cs:"Zadejte prosím jméno. Jméno nesmí přesáhnout délku 50 znaků.",en:"Please enter a name. The name must contain up to 50 characters.",
sk:"Zadajte prosím meno. Meno nesmie presiahnúť dĺžku 50 znakov.",uk:"Введіть ім’я. Ім'я повинно містити до 50 символів.",
es:"Por favor, introduzca un nombre. El nombre debe contener hasta 50 caracteres.",sv:"Ange ett namn. Namnet måste innehålla upp till 50 tecken."},invalidSurname:{
cs:"Zadejte prosím platné příjmení. Příjmení nesmí přesáhnout délku 50 znaků.",en:"Please enter a valid surname. The surname must contain up to 50 characters.",
sk:"Zadajte prosím priezvisko. Priezvisko nesmie presiahnúť dĺžku 50 znakov.",uk:"Введіть прізвище. Прізвище повинно містити до 50 символів.",
es:"Por favor, introduzca un apellido. El apellido debe contener hasta 50 caracteres.",sv:"Ange ett giltigt efternamn. Efternamnet måste innehålla högst 50 tecken."},notAuthorized:a.notAuthorized,
equalityAccessCodesError:a.equalityAccessCodesError,identityAccountWasNotCreated:{cs:"Zvolte jiný přístupový kód 1 a znovu jej vyplňte do druhého pole k ověření.",
en:"Select a different access code 1, and re-enter it in the second verification field.",sk:"Zvoľte iný prístupový kód 1 a znovu ho vyplňte do druhého poľa na overenie.",
uk:"Виберіть інший код доступу 1 та введіть його повторно у другому полі для перевірки.",es:"Seleccione nuevo código de acceso 1 e insértelo nuevamente en el segundo campo para verificarlo.",
sv:"Välj ett annat lösenord 1 och ange det på nytt i det andra verifieringsfältet."},invalidContent:{cs:"Všechna povinná pole musí být vyplněna.",en:"All of the mandatory fields must be filled in.",
sk:"Všetky povinné polia musia byť vyplnené.",uk:"Усі обов'язкові поля мають бути заповнені.",es:"Todos los campos requeridos deben ser completados.",sv:"Alla obligatoriska fält måste fyllas i."},
sendEmailFailed:{cs:"Email na tuto emailovou adresu se nepodařilo odeslat.",en:"We were not able to send an email to this address.",sk:"Email na túto emailovú adresu sa nepodarilo odoslať.",
uk:"Не вдалося надіслати електронний лист на цю електронну адресу.",es:"No pudimos enviar un correo electrónico a esta dirección.",sv:"Vi kunde inte skicka något mejl till denna adressen."}},
registrationLogin:{},setAccessCodes:{header:{cs:"Obnovení přístupových kódů",en:"Resetting access codes",sk:"Obnovenie prístupových kódov",uk:"Скидання кодів доступу",
es:"Restablecer códigos de acceso",sv:"Återställning av lösenord"},comment:{
cs:"Pro obnovení přístupových kódů nejdříve zvolte, zda chcete obnovit oba přístupové kódy, pouze přístupový kód 1 nebo pouze přístupový kód 2. Pokud jste ztratili pouze jeden přístupový kód, je za účelem jeho obnovení potřeba zadat i druhý přístupový kód pro ověření vaší identity.",
en:"To reset your access codes, first select whether you want to reset both access codes, only the access code 1, or only the access code 2. If you have lost only one access code, in order to recover it you will need to enter the other access code to verify your identity.",
sk:"Ak chcete resetovať svoje prístupové kódy, najprv vyberte, či chcete resetovať oba prístupové kódy, iba prístupový kód 1 nebo iba prístupový kód 2. Ak ste stratili iba jeden prístupový kód, na jeho obnovenie budete musieť zadať druhý prístupový kód, aby ste overili svoju totožnosť.",
uk:"Щоб скинути свої коди доступу, спершу виберіть, чи потрібно скинути обидва коди доступу, лише код доступу 1 або лише код доступу 2. Якщо ви втратили лише один доступ, для відновлення його вам потрібно буде ввести інший код доступу для підтвердження вашої особи.",
es:"Para restablecer sus códigos de acceso, primero seleccione si desea restablecer ambos códigos de acceso, solo el código de acceso 1 o solo el código de acceso 2. Si ha perdido solo un acceso, para recuperarlo deberá ingresar el otro código de acceso para verificar su identidad.",
sv:"Om du vill återställa dina lösenord väljer du först om du vill återställa båda lösenorden, endast lösenord 1 eller endast lösenord 2. Om du har glömt endast ett av lösenorden måste du ange det andra lösenordet för att bekräfta din identitet."
},headerWithoutAccessCodes:{cs:"Nastavení nových přístupových kódů",en:"Set new access codes",sk:"Nastavenie nových prístupových kódov",uk:"Налаштування нових кодів доступу",
es:"Selección de nuevos códigos de acceso",sv:"Ange nya lösenord"},commentWithoutAccessCodes:{
cs:"<uu5string />Tento Plus4U účet je napojený na službu %s. Pokud jste ztratili přístup na účet třetí strany, můžete si nastavit přístupová hesla do služby Plus4U pomocí formuláře níže. Pokud se vám pomocí služby třetí strany nedaří přihlásit, kontaktujte prosím +4U Helpdesk.<br />K zajištění maximální bezpečnosti vašeho účtu používáme dvě hesla, Přístupový kód 1 a Přístupový kód 2, která slouží k přihlášení do vašeho účtu. Tato hesla nebudou nikde ve službě veřejně prezentována.",
en:"<uu5string />This Plus4U account is linked to %s. If you have lost access to a third-party account, you can set up access codes to Plus4U service using the form below. If you are unable to log in using a third-party service, please contact our +4U Helpdesk.<br />In order to ensure that your account is as secure as possible, we use two passwords - Access Code 1 and Access Code 2 - which are used to log in to your account. These passwords will not be publicly presented anywhere in the service.",
sk:"<uu5string />Tento Plus4U účet je napojený na službu %s. Ak ste stratili prístup na účet tretej strany, môžete si nastaviť prístupové heslá do služby Plus4U pomocou formulára nižšie. Ak sa vám pomocou služby tretej strany nedarí prihlásiť, kontaktujte prosím +4U Helpdesk.<br />Na zaistenie maximálnej bezpečnosti vášho účtu používame dve heslá, Prístupový kód 1 a Prístupový kód 2, ktoré slúžia na prihlásenie do účtu. Tieto heslá sa nebudú nikde v službe verejne prezentovať.",
uk:"<uu5string />Цей обліковий запис Plus4U пов'язано з %s. Якщо ви втратили доступ до стороннього облікового запису, ви можете встановити коди доступу до служби Plus4U, скориставшись формою нижче. Якщо ви не можете увійти до систему за допомогою сторонньої служби, зверніться до нашої служби  +4U Helpdesk.<br />Для забезпечення максимальної безпеки вашого облікового запису ми використовуємо два пароля, Код доступу 1 та Код доступу 2, які служать для входу до Вашого облікового запису. Ці паролі не будуть відкрито представлені в сервісі.",
es:"<uu5string />Esta cuenta Plus4U está vinculada a% s. Si ha perdido el acceso a una cuenta de terceros, puede configurar códigos de acceso al servicio Plus4U utilizando el formulario a continuación. Si no puede iniciar sesión con un servicio de terceros, comuníquese con nuestro +4U Helpdesk.<br />Para garantizar la máxima seguridad para su cuenta, utilizamos dos contraseñas, el Código de acceso 1 y el Código de acceso 2 que se utilizan para iniciar sesión en su cuenta. Estas contraseñas no se mostrarán públicamente en ningún lugar.",
sv:"<uu5string />Det här Plus4U-kontot är kopplat till %s. Om du har förlorat tillgången till ett tredjepartskonto kan du skapa koder till Plus4U-tjänsten med hjälp av formuläret nedan. Om du inte kan logga in med hjälp av en tredjepartstjänst kan du kontakta vår +4U Kundservice.<br />För att ditt konto ska vara så säkert som möjligt använder vi två lösenord - Lösenord 1 och Lösenord 2 - som används för att logga in på ditt konto. Dessa lösenord kommer inte att visas offentligt någonstans i tjänsten."
},smsFormHeaderInfo:{en:"Enter the 6-digit code sent to phone number %s via SMS to confirm it is really you.",
cs:"Zadejte 6místný kód zaslaný na telefonní číslo %s prostřednictvím SMS pro potvrzení, že jste to skutečně vy.",
uk:"Введіть 6-значний код, надісланий на номер телефону %s за допомогою SMS, щоб підтвердити що це справді ви."},smsFormVerifyMe:{en:"Verify",cs:"Ověřit",uk:"Підтвердити"},ok:{cs:"Nastavit",en:"Set",
sk:"Nastaviť",uk:"Налаштувати",es:"Configurar",sv:"Ställ in"},successfullySet:{cs:"Přístupové kódy byly úspěšně nastaveny. Nyní se můžete přihlásit.",
en:"The access codes have been successfully set. You can now log in.",sk:"Prístupové kódy boli úspešne nastavené. Teraz sa môžete prihlásiť.",
uk:"Коди доступу було успішно налаштовано. Тепер ви можете виконати вхід.",es:"Los códigos de acceso han sido establecidos correctamente. Ahora puede iniciar sesión.",
sv:"Lösenorden har ändrats. Du kan nu logga in."},credentialsSet:{cs:"Plus4U účet byl úspěšně přidán a připojen k vašemu účtu.",
en:"The Plus4U account has been successfully added and connected to your account.",sk:"Plus4U účet bol úspešne pridaný a pripojený k vášmu účtu.",
uk:"Обліковий запис Plus4U було успішно додано та пов’язано з вашим обліковим записом.",es:"Cuenta Plus4U ha sido con éxito agregada y conectada a su cuenta.",
sv:"Plus4U-kontot har lagts till och kopplats till ditt konto.."},credentialsExist:{cs:"Již vlastníte Plus4U účet. Nemáte oprávnění vytvořit nový.",
en:"You already own a Plus4U account. You do not have the authorisation to create a new one.",sk:"Už vlastníte Plus4U účet. Nemáte oprávnenie vytvoriť nový.",
uk:"Ви вже маєте обліковий запис Plus4U. У вас немає дозволу на створення нового.",es:"Ya tiene una cuenta en Plus4U. No tiene permiso para crear una nueva.",
sv:"Du har redan ett Plus4U-konto. Du har inte behörighet att skapa ett nytt konto."},credentialsAlreadyExist:{cs:"Nově zvolený přístupový kód 1 není unikátní.",
en:"The newly selected access code 1 is not unique.",sk:"Novozvolený prístupový kód 1 nie je unikátny.",uk:"Новий вибраний код доступу 1 не є унікальним.",
es:"El código de acceso 1 nuevamente seleccionado no es único.",sv:"Det nyligen valda lösenord 1 är inte unikt."},equalityAccessCodesError:a.equalityAccessCodesError,unexpectedError:a.unexpectedError,
notAuthorized:a.notAuthorized,invalidContent:{cs:"Chybné přístupové kódy.",en:"Erroneous access codes.",sk:"Chybné prístupové kódy.",uk:"Неправильні коди доступу.",es:"Códigos de acceso incorrectos.",
sv:"Felaktiga lösenord."},setAccessCodesByStateVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",
uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},setAccessCodesVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",
en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},
setAccessCodesVerificationTimeIsNotValidStart:{cs:"Platnost odkazu již vypršela. Nechte si ",en:"The link is no longer valid. Have a new verification code ",
sk:"Platnosť odkazu už vypršala. Nechajte si ",uk:"Термін дії посилання вже закінчився. ",es:"El enlace ya ha caducado. Pida que le ",sv:"Länken är inte längre giltig. Har du en ny verifieringskod? "
},setAccessCodesVerificationTimeIsNotValidLink:{cs:"zaslat",en:"sent",sk:"zaslať",uk:"Надіслати",es:"enviemos",sv:"skickat"},setAccessCodesVerificationTimeIsNotValidEnd:{cs:" nový verifikační kód.",
en:" to you.",sk:" nový verifikačný kód.",uk:" новий код підтвердження.",es:" un código de verificación.",sv:" till dig."},setAccessCodesNewAccessCode1Blocked:{
cs:"Nově zvolený přístupový kód 1 není možné použít.",en:"The newly selected access code 1 cannot be used.",sk:"Novozvolený prístupový kód 1 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 1.",es:"El código de acceso 1 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 1 kan inte användas."},
setAccessCodesNewAccessCode2Blocked:{cs:"Nově zvolený přístupový kód 2 není možné použít.",en:"The newly selected access code 2 cannot be used.",sk:"Novozvolený prístupový kód 2 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 2.",es:"El código de acceso 2 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 2 kan inte användas."},
setAccessCodesWrongAccessCode1:{cs:"Chybný přístupový kód 1. Ujistěte se, že zadáváte váš stávající přístupový kód 1.",
en:"Incorrect access code 1. Make sure you are entering your current access code 1.",sk:"Nesprávny prístupový kód 1. Uistite sa, že zadávate váš súčasný prístupový kód 1.",
uk:"Неправильний код доступу 2. Переконайтеся, що ви вводите існуючий код доступу 2.",es:"Código de acceso incorrecto 1. Asegúrese de ingresar su código de acceso existente 1.",
sv:"Felaktigt lösenord 1. Kontrollera att du anger ditt nuvarande lösenord 1."},setAccessCodesWrongAccessCode2:{cs:"Chybný přístupový kód 2. Ujistěte se, že zadáváte váš stávající přístupový kód 2.",
en:"Incorrect access code 2. Make sure you are entering your current access code 2.",sk:"Nesprávny prístupový kód 2. Uistite sa, že zadávate váš súčasný prístupový kód 2.",
uk:"Неправильний код доступу 2. Переконайтеся, що ви вводите існуючий код доступу 2.",es:"Código de acceso incorrecto 2. Asegúrese de ingresar su código de acceso existente 2.",
sv:"Felaktigt lösenord 2. Kontrollera att du anger ditt nuvarande lösenord 2."},setAccessCodesByStateAdditionalVerificationFailed:{en:"Please enter a valid verfication code.",
cs:"Prosím zadejte platný ověřovací kód.",uk:"Введіть дійсний код підтвердження"},createAccessCodesVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",
sk:"Platnosť odkazu už vypršala.",uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},createAccessCodesNewAccessCode1Blocked:{
cs:"Nově zvolený přístupový kód 1 nelze použít, zvolte si prosím jiný.",en:"The newly selected access code 1 is not unique, please choose a different one.",
sk:"Novozvolený prístupový kód 1 nie je unikátny, zvolte si prosím iný.",uk:"Новий вибраний код доступу 1 не є унікальним, будь ласка, виберіть інший.",
es:"El código de acceso 1 nuevamente seleccionado no es único, por favor elija uno diferente.",sv:"Det nyligen valda lösenord 1 är inte unikt, var vänlig och ange ett annat lösenord."},
setAccessCodesAndActivateIdentityVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",
uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},setAccessCodesAndActivateIdentityNewAccessCode1Blocked:{
cs:"Nově zvolený přístupový kód 1 není možné použít.",en:"The newly selected access code 1 cannot be used.",sk:"Novozvolený prístupový kód 1 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 1.",es:"El código de acceso 1 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 1 kan inte användas."},
setAccessCodesAndActivateIdentityNewAccessCode2Blocked:{cs:"Nově zvolený přístupový kód 2 není možné použít.",en:"The newly selected access code 2 cannot be used.",
sk:"Novozvolený prístupový kód 2 nie je možné použiť.",uk:"Неможливо використати новий вибраний код доступу 2.",es:"El código de acceso 2 recién seleccionado no se puede utilizar.",
sv:"Det nyligen valda lösenord 2 kan inte användas."},setAccessCodesAndActivateIdentityWrongAccessCode1:{cs:"Chybný přístupový kód 1. Ujistěte se, že zadáváte váš stávající přístupový kód 1.",
en:"Incorrect access code 1. Make sure you are entering your current access code 1.",sk:"Nesprávny prístupový kód 1. Uistite sa, že zadávate váš súčasný prístupový kód 1.",
uk:"Неправильний код доступу 2. Переконайтеся, що ви вводите існуючий код доступу 2.",es:"Código de acceso incorrecto 1. Asegúrese de ingresar su código de acceso existente 1.",
sv:"Felaktigt lösenord 1. Kontrollera att du anger ditt nuvarande lösenord 1."},setAccessCodesAndActivateIdentityWrongAccessCode2:{
cs:"Chybný přístupový kód 2. Ujistěte se, že zadáváte váš stávající přístupový kód 2.",en:"Incorrect access code 2. Make sure you are entering your current access code 2.",
sk:"Nesprávny prístupový kód 2. Uistite sa, že zadávate váš súčasný prístupový kód 2.",uk:"Неправильний код доступу 2. Переконайтеся, що ви вводите існуючий код доступу 2.",
es:"Código de acceso incorrecto 2. Asegúrese de ingresar su código de acceso existente 2.",sv:"Felaktigt lösenord 2. Kontrollera att du anger ditt nuvarande lösenord 2."},
createAccessCodesAndActivateIdentityVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",
uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},createAccessCodesAndActivateIdentityNewAccessCode1Blocked:{
cs:"Nově zvolený přístupový kód 1 nelze použít, zvolte si prosím jiný.",en:"The newly selected access code 1 is not unique, please choose a different one.",
sk:"Novozvolený prístupový kód 1 nie je unikátny, zvolte si prosím iný.",uk:"Новий вибраний код доступу 1 не є унікальним, будь ласка, виберіть інший.",
es:"El código de acceso 1 nuevamente seleccionado no es único, por favor elija uno diferente.",sv:"Det nyligen valda lösenord 1 är inte unikt, var vänlig och ange ett annat lösenord."},
changeAccessCode1:{cs:"Chci změnit přístupový kód 1",en:"I want to change access code 1",sk:"Chcem zmeniť prístupový kód 1",uk:"Я хочу змінити код доступу 1",es:"Quiero cambiar el código de acceso 1",
sv:"Jag vill ändra lösenord 1"},checkSetAccessCodesPreconditionsNoRemainingAttemptsStart:{cs:"Platnost odkazu již vypršela. Nechte si ",en:"The link is no longer valid. Have a new verification code ",
sk:"Platnosť odkazu už vypršala. Nechajte si ",uk:"Термін дії посилання вже закінчився. ",es:"El enlace ya ha caducado. Pida que le ",sv:"Länken är inte längre giltig. Har du en ny verifieringskod? "
},checkSetAccessCodesPreconditionsNoRemainingAttemptsLink:{cs:"zaslat",en:"sent",sk:"zaslať",uk:"Надіслати",es:"enviemos",sv:"skickat"},checkSetAccessCodesPreconditionsNoRemainingAttemptsEnd:{
cs:" nový verifikační kód.",en:" to you.",sk:" nový verifikačný kód.",uk:" новий код підтвердження.",es:" un código de verificación.",sv:" till dig."},
checkSetAccessCodesPreconditionsIdentityDoesNotExist:{
cs:"<uu5string />Uživatel nebyl nalezen nebo vypršela platnost verifikačního odkazu v e-mailu. Můžete si nechat <UU5.Bricks.Link href='%s'>zaslat e-mail znovu</UU5.Bricks.Link>.",
en:"<uu5string />User not found or verfication link in e-mail is no longer valid. <UU5.Bricks.Link href='%s'>Send e-mail again</UU5.Bricks.Link>.",
sk:"<uu5string />Používateľ nebol nájdený alebo vypršala platnosť verifikačného odkazu v e-maile. Môžete si nechať <UU5.Bricks.Link href='%s'>zaslať e-mail znova</UU5.Bricks.Link>.",
uk:"<uu5string />Користувача не знайдено або посилання для підтвердження в електронному листі минуло. Ви можете знову надіслати <UU5.Bricks.Link href='%s'>повідомлення електронною поштою</UU5.Bricks.Link>.",
es:"<uu5string />No se encontró al usuario o el enlace de verificación en el correo electrónico ha caducado. Puede haber <UU5.Bricks.Link href='%s'>enviado un correo electrónico nuevamente</UU5.Bricks.Link>.",
sv:"<uu5string />Användaren hittas inte eller verifieringslänken i e-postmeddelandet är inte längre giltig. <UU5.Bricks.Link href='%s'>skicka e-post igen</UU5.Bricks.Link>."},changeLabel:{
cs:"Obnovit",en:"Reset",sk:"Obnoviť",uk:"Скидання",es:"Restablecer",sv:"Återställ"},changeOnlyAccessCode1:{cs:"Pouze přístupový kód 1",en:"Only access code 1",sk:"Iba prístupový kód 1",
uk:"Тільки код доступу 1",es:"Solo código de acceso 1",sv:"Endast lösenord 1"},changeOnlyAccessCode2:{cs:"Pouze přístupový kód 2",en:"Only access code 2",sk:"Iba prístupový kód 2",
uk:"Тільки код доступу 2",es:"Solo código de acceso 2",sv:"Endast lösenord 2"},changeBothAccessCodes:{cs:"Oba přístupové kódy",en:"Both access codes",sk:"Oba prístupové kódy",uk:"Обидва коди доступу",
es:"Ambos códigos de acceso",sv:"Båda lösenorden"},login:{cs:"Přihlásit se",en:"Log in",sk:"Prihlásiť sa",uk:"Увійти",es:"Iniciar sesión",sv:"Logga in"}},resetSecondFactor:{header:{
cs:"Přenastavení možností dvoufázového ověřování",en:"Reset second-step verification options"},login:{cs:"Přihlásit se",en:"Log in",sk:"Prihlásiť sa",uk:"Увійти",es:"Iniciar sesión",sv:"Logga in"},
comment:{cs:"Pro přenastavení možností dvoufázového ověřování potřebujeme ověřit, že jste to opravdu vy. Zadejte přístupový kód 1 a 2 a klikněte na tlačítko Reset.",
en:"To reset your second-step verification options, we need to verify that it is really you. Please enter access code 1 and 2 and click the Reset button."},
checkResetSecondFactorPreconditionsIdentityDoesNotExist:{
cs:"<uu5string />Uživatel nebyl nalezen nebo vypršela platnost verifikačního odkazu v e-mailu. Můžete si nechat <UU5.Bricks.Link href='%s'>zaslat e-mail znovu</UU5.Bricks.Link>.",
en:"<uu5string />User not found or verfication link in e-mail is no longer valid. <UU5.Bricks.Link href='%s'>Send e-mail again</UU5.Bricks.Link>.",
sk:"<uu5string />Používateľ nebol nájdený alebo vypršala platnosť verifikačného odkazu v e-maile. Môžete si nechať <UU5.Bricks.Link href='%s'>zaslať e-mail znova</UU5.Bricks.Link>.",
uk:"<uu5string />Користувача не знайдено або посилання для підтвердження в електронному листі минуло. Ви можете знову надіслати <UU5.Bricks.Link href='%s'>повідомлення електронною поштою</UU5.Bricks.Link>.",
es:"<uu5string />No se encontró al usuario o el enlace de verificación en el correo electrónico ha caducado. Puede haber <UU5.Bricks.Link href='%s'>enviado un correo electrónico nuevamente</UU5.Bricks.Link>.",
sv:"<uu5string />Användaren hittas inte eller verifieringslänken i e-postmeddelandet är inte längre giltig. <UU5.Bricks.Link href='%s'>Skicka e-post igen</UU5.Bricks.Link>."},ok:{cs:"Reset",
en:"Reset",sk:"Reset",uk:"Reset",es:"Reset",sv:"Reset"},successfullySet:{cs:"Reset byl úspěšně proveden.",en:"Reset has been susccessfully completed.",sk:"Reset bol úspešne vykonaný.",
uk:"Reset успішно завершено.",es:"Reset has been susccessfully completed.",sv:"Reset has been susccessfully completed."},successfullySetWithRedirect:{
cs:"Přenastavení možností dvoufázového ověřování bylo úspěšně dokončeno, budete přesměrováni na rozšířené možnosti zabezpečení",
en:"Reset of two-step verification options has been successfully completed, you will be redirected to advanced security options",
sk:"Reset bol úspešne vykonaný, budete presmerovaní na nastavenie zabezpečenia",uk:"Reset було успішно завершено, вас буде перенаправлено до налаштувань безпеки",
es:"Reset of two-step verification options has been successfully completed, you will be redirected to advanced security options",
sv:"Återställning av alternativ för tvåstegsverifiering har slutförts och du kommer att omdirigeras till avancerade säkerhetsalternativ."},unexpectedError:a.unexpectedError,
notAuthorized:a.notAuthorized,invalidContent:{cs:"Chybné přístupové kódy.",en:"Erroneous access codes.",sk:"Chybné prístupové kódy.",uk:"Неправильні коди доступу.",es:"Códigos de acceso incorrectos.",
sv:"Felaktiga lösenord."},resetSecondFactorVerificationTimeIsNotValid:{cs:"Platnost odkazu již vypršela.",en:"The link is no longer valid.",sk:"Platnosť odkazu už vypršala.",
uk:"Термін дії посилання вже закінчився.",es:"El enlace ya ha caducado.",sv:"Länken är inte längre giltig."},resetSecondFactorVerificationTimeIsNotValidStart:{
cs:"Platnost odkazu již vypršela. Nechte si ",en:"The link is no longer valid. Have a new verification code ",sk:"Platnosť odkazu už vypršala. Nechajte si ",uk:"Термін дії посилання вже закінчився. ",
es:"El enlace ya ha caducado. Pida que le ",sv:"Länken är inte längre giltig. Har en ny verifieringskod "},resetSecondFactorVerificationTimeIsNotValidLink:{cs:"zaslat",en:"sent",sk:"zaslať",
uk:"Надіслати",es:"enviemos",sv:"skickas"},resetSecondFactorVerificationTimeIsNotValidEnd:{cs:" nový verifikační kód.",en:" to you.",sk:" nový verifikačný kód.",uk:" новий код підтвердження.",
es:" un código de verificación.",sv:" till dig."},checkResetSecondFactorPreconditionsNoRemainingAttemptsStart:{cs:"Platnost odkazu již vypršela. Nechte si ",
en:"The link is no longer valid. Have a new verification code ",sk:"Platnosť odkazu už vypršala. Nechajte si ",uk:"Термін дії посилання вже закінчився. ",es:"El enlace ya ha caducado. Pida que le ",
sv:"Länken är inte längre giltig. Har en ny verifieringskod "},checkResetSecondFactorPreconditionsNoRemainingAttemptsLink:{cs:"zaslat",en:"sent",sk:"zaslať",uk:"Надіслати",es:"enviemos",sv:"skickas"},
checkResetSecondFactorPreconditionsNoRemainingAttemptsEnd:{cs:" nový verifikační kód.",en:" to you.",sk:" nový verifikačný kód.",uk:" новий код підтвердження.",es:" un código de verificación.",
sv:" till dig."},accessCodesVerificationFailed:{cs:"Ověření přístupových kódů se nezdařilo.",en:"Verification of access codes failed.",sk:"Overenie prístupových kódov zlyhalo.",
uk:"Помилка перевірки кодів доступу.",es:"Falló la verificación de los códigos de acceso.",sv:"Verifiering av lösenorden misslyckades."}},createCredentials:{header:{cs:"Nastavit nové přístupové kódy",
en:"Set new access codes",sk:"Nastaviť nové prístupové kódy",uk:"Налаштувати нові коди доступу",es:"Establecer nuevos códigos de acceso",sv:"Ange nya lösenord"},comment:{
cs:"Nastavte své nové přistupové kódy a ověřte je.",en:"Set your new access codes, and verify them.",sk:"Nastavte svoje nové prístupové kódy a overte ich.",
uk:"Налаштуйте нові коди доступу та перевірте їх.",es:"Inserte nuevos códigos de acceso y valídelos.",sv:"Ange dina nya lösenord och verifiera dem."},ok:{cs:"Nastavit",en:"Set",sk:"Nastaviť",
uk:"Налаштувати",es:"Configurar",sv:"Ställ in"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},successfullySet:{
cs:"Přístupové kódy byly úspěšně nastaveny. Nyní se můžete přihlásit.",en:"The access codes have been successfully set. You can now log in.",
sk:"Prístupové kódy boli úspešne nastavené. Teraz sa môžete prihlásiť.",uk:"Коди доступу було успішно налаштовано. Тепер ви можете виконати вхід.",
es:"Los códigos de acceso han sido establecidos correctamente. Ahora puede iniciar sesión.",sv:"Lösenorden har ändrats. Du kan nu logga in."},credentialsSet:{
cs:"Plus4U účet byl úspěšně přidán a připojen k vašemu účtu.",en:"The Plus4U account has been successfully added and connected to your account.",
sk:"Plus4U účet bol úspešne pridaný a pripojený k vášmu účtu.",uk:"Обліковий запис Plus4U було успішно додано та пов’язано з вашим обліковим записом.",
es:"Cuenta Plus4U ha sido con éxito agregada y conectada a su cuenta.",sv:"Plus4U-kontot har lagts till och kopplats till ditt konto."},credentialsExist:{
cs:"Již vlastníte Plus4U účet. Nemáte oprávnění vytvořit nový.",en:"You already own a Plus4U account. You do not have the authorisation to create a new one.",
sk:"Už vlastníte Plus4U účet. Nemáte oprávnenie vytvoriť nový.",uk:"Ви вже маєте обліковий запис Plus4U. У вас немає дозволу на створення нового.",
es:"Ya tiene una cuenta en Plus4U. No tiene permiso para crear una nueva.",sv:"Du har redan ett Plus4U-konto. Du har inte behörighet att skapa ett nytt konto."},credentialsAlreadyExist:{
cs:"Nově zvolený přístupový kód 1 není unikátní.",en:"The newly selected access code 1 is not unique.",sk:"Novozvolený prístupový kód 1 nie je unikátny.",
uk:"Новий вибраний код доступу 1 не є унікальним.",es:"El código de acceso 1 nuevamente seleccionado no es único.",sv:"Det nyligen valda lösenord 1 är inte unikt."},
equalityAccessCodesError:a.equalityAccessCodesError,unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,invalidContent:{cs:"Chybné přístupové kódy.",en:"Erroneous access codes.",
sk:"Chybné prístupové kódy.",uk:"Неправильні коди доступу.",es:"Códigos de acceso incorrectos.",sv:"Felaktiga lösenord."},newAccessCode1Blocked:{
cs:"Nově zvolený přístupový kód 1 nelze použít, zvolte si prosím jiný.",en:"The newly selected access code 1 is not unique, please choose a different one.",
sk:"Novozvolený prístupový kód 1 nie je unikátny, zvolte si prosím iný.",uk:"Новий вибраний код доступу 1 не є унікальним, будь ласка, виберіть інший.",
es:"El código de acceso 1 nuevamente seleccionado no es único, por favor elija uno diferente.",sv:"Det nyligen valda lösenord 1 är inte unikt, var vänlig och ange ett annat lösenord."},
newAccessCode2Blocked:{cs:"Nově zvolený přístupový kód 2 není možné použít.",en:"The newly selected access code 2 cannot be used.",sk:"Novozvolený prístupový kód 2 nie je možné použiť.",
uk:"Неможливо використати новий вибраний код доступу 2.",es:"El código de acceso 2 recién seleccionado no se puede utilizar.",sv:"Det nyligen valda lösenord 2 kan inte användas."}},showIdentity:{
title:{cs:"Detail uživatele",en:"User detail",sk:"Detail používateľa",uk:"Докладна інформація про користувача",es:"Detalle de usuario",sv:"Användaruppgifter"},email:{cs:"E-mail",en:"E-mail",
sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-post"},uuIdentity:{cs:"uuIdentity",en:"uuIdentity",sk:"uuIdentity",uk:"uuIdentity",es:"uuIdentity",sv:"uuIdentity"},state:{cs:"Stav",en:"Status",
sk:"Stav",uk:"Стан",es:"Estado",sv:"Status"},language:{cs:"Jazyk",en:"Language",sk:"Jazyk",uk:"Мова",es:"Lengua",sv:"Språk"},timezone:{cs:"Časové pásmo",en:"Time zone",sk:"Časové pásmo",
uk:"Часовий діапазон",es:"Zona horaria",sv:"Tidszon"},creationTime:{cs:"Čas vytvoření",en:"Creation time",sk:"Čas vytvorenia",uk:"Час створення",es:"Tiempo de creación",sv:"Tid för skapande"},type:{
cs:"Typ",en:"Type",sk:"Typ",uk:"Тип",es:"Tipo",sv:"Typ"},update:{cs:"Upravit údaje",en:"Edit information",sk:"Upraviť údaje",uk:"Відкоригувати дані",es:"Editar datos",sv:"Redigera information"},
changeAccessCode1:{cs:"Změnit přístupový kód 1",en:"Change access code 1",sk:"Zmeniť prístupový kód 1",uk:"Змінити код доступу 1",es:"Cambiar el código de acceso 1",sv:"Ändra lösenord 1"},
changeAccessCode2:{cs:"Změnit přístupový kód 2",en:"Change access code 2",sk:"Zmeniť prístupový kód 2",uk:"Змінити код доступу 2",es:"Cambiar el código de acceso 2",sv:"Ändra lösenord 2"},
setAccessCodes:{cs:"Nastavit přístupové kódy",en:"Set access codes",sk:"Nastaviť prístupové kódy",uk:"Налаштувати коди доступу",es:"Establecer códigos de acceso",sv:"Ange lösenord"},administrators:{
cs:"Administrátoři",en:"Administrators",sk:"Administrátori",uk:"Адміністратори",es:"Administradores",sv:"Administratörer"},suspend:{cs:"Pozastavit",en:"Suspend",sk:"Pozastaviť",uk:"Призупинити",
es:"Suspender",sv:"Avbryt"},terminate:{cs:"Ukončit",en:"Terminate",sk:"Ukončiť",uk:"Завершити",es:"Terminar",sv:"Avsluta"},resetAccessCodes:{cs:"Resetovat přístupové kódy",en:"Reset access codes",
sk:"Resetovať prístupové kódy",uk:"Скинути коди доступу",es:"Resetear códigos de acceso",sv:"Återställ lösenord"},changeEmail:{cs:"Změnit registrační e-mail",en:"Change registration email",
sk:"Zmeniť registračný e-mail",uk:"Змінити реєстраційну електронну пошту",es:"Cambiar el correo electrónico de registro",sv:"Ändra e-postadress för registrering"},showCredentials:{
cs:"Zobrazit připojené účty",en:"Show connected accounts",sk:"Zobraziť pripojené účty",uk:"Відобразити підключені облікові записи",es:"Mostrar cuentas relacionadas",sv:"Visa anslutna konton"},
levelOfAssuranceIdentity:{cs:"Stupeň prověření",en:"Verification level",sk:"Stupeň preverenia",uk:"Ступінь перевірки",es:"Nivel de verificación",sv:"Verifieringsnivå"},levelOfAssuranceAuthentication:{
cs:"Důvěryhodnost přihlášení",en:"Trustworthiness of login",sk:"Dôveryhodnosť prihlásenia",uk:"Надійність входу",es:"Nivel de seguridad de acceso",sv:"Trovärdighet av inloggningen"}},showProfile:{
myAccount:{cs:"Můj účet",en:"My account",sk:"Môj účet",uk:"Мій рахунок",es:"Mi cuenta",sv:"Mitt konto"},showToken:{cs:"Zobrazit token",en:"Show token",sk:"Zobraziť token",uk:"Показати маркер",
es:"Mostrar token",sv:"Visa symbol"},globalLogout:{cs:"Odhlásit z ostatních zařízení",en:"Logout from other devices",sk:"Odhlásiť z ostatných zariadení",uk:"Вийдіть з інших пристроїв",
es:"Cerrar sesión en otros dispositivos",sv:"Logga ut från andra enheter"}},thirdPartyRegistration:{header:{cs:"Dokončení registrace",en:"Completion of registration",sk:"Dokončenie registrácie",
uk:"Завершення реєстрації",es:"Completación del registro",sv:"Slutförande av registreringen"},subheader:{cs:"Prosím potvrďte svou identitu.",en:"Please confirm your identity.",
sk:"Potvrďte, prosím, svoju identitu.",uk:"Підтвердіть свою особу.",es:"Por favor, confirme su identidad.",sv:"Bekräfta din identitet."},name:{cs:"Jméno",en:"Name",sk:"Meno",uk:"Ім'я",es:"Nombre",
sv:"Namn"},surname:{cs:"Příjmení",en:"Surname",sk:"Priezvisko",uk:"Прізвище",es:"Apellidos",sv:"Efternamn"},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-post"},
ok:{cs:"Dokončit registraci",en:"Complete registration",sk:"Dokončiť registráciu",uk:"Завершити реєстрацію",es:"Completar el registro",sv:"Slutföra registreringen"},cancel:{cs:"Zrušit registraci",
en:"Cancel registration",sk:"Zrušiť registráciu",uk:"Скасувати реєстрацію",es:"Cancelar el registro",sv:"Avbryt registreringen"},invalidName:{cs:"Zadejte prosím platné jméno.",
en:"Please enter a valid name.",sk:"Zadajte, prosím, platné meno.",uk:"Введіть дійсне ім’я.",es:"Por favor, introduzca un nombre válido.",sv:"Ange ett giltigt namn."},invalidSurname:{
cs:"Zadejte prosím platné příjmení.",en:"Please enter a valid surname.",sk:"Zadajte, prosím, platné priezvisko.",uk:"Введіть дійсне прізвище.",es:"Por favor, introduzca un apellido válido.",
sv:"Ange ett giltigt efternamn."},invalidEmail:{cs:"Zadejte prosím platnou e-mailovou adresu.",en:"Please enter a valid e-mail address.",sk:"Zadajte, prosím, platnú e-mailovú adresu.",
uk:"Введіть дійсну електронну адресу.",es:"Por favor, introduzca una dirección de correo electrónico válida.",sv:"Ange en giltig e-postadress."},emailIsNotUnique:{
cs:"Účet s touto emailovou adresou je již registrován. Pokud se jedná o váš účet a přejete si k tomuto účtu připojit právě použitou přihlašovací metodu, zrušte prosím tuto registraci, přihlašte se k vašemu účtu a přihlašovací metodu připojte v nastavení.",
en:"An account is already registered with this email address. If this is your account and you would like to link the login method you are currently using, please cancel this registration, log in to the account and link the login method in the settings.",
sk:"Účet s touto emailovou adresou je už registrovaný. Pokiaľ sa jedná o váš účet a prajete si k tomuto účtu pripojiť práve použitú prihlasovacie metódu, zrušte prosím túto registráciu, prihláste sa k vášmu účtu a prihlasovacie metódu pripojte v nastavení.",
uk:"Обліковий запис із цією адресою електронної пошти вже зареєстрований. Якщо це ваш обліковий запис і ви хочете приєднати цей метод входу до свого облікового запису, скасуйте цю реєстрацію, увійдіть у свій обліковий запис і в налаштуваннях додайте цей метод входу.",
es:"Ya está registrada una cuenta con esta dirección de correo electrónico. Si esta es su cuenta y desea vincular el método de inicio de sesión que está utilizando actualmente a esta cuenta, cancele este registro, inicie sesión en su cuenta y adjunte el método de inicio de sesión en la configuración.",
sv:"Det finns redan ett konto kopplat till epostadressen. Om detta är ditt konto och du vill länka din inloggningsmetod, avbryt registreringen och ändra i inställningarna efter du loggat in."},
sendEmailFailed:{cs:"Email na tuto emailovou adresu se nepodařilo odeslat.",en:"We were not able to send an email to this address.",sk:"Email na túto emailovú adresu sa nepodarilo odoslať.",
uk:"Не вдалося надіслати електронний лист на цю електронну адресу.",es:"No pudimos enviar un correo electrónico a esta dirección.",sv:"Vi kunde inte skicka något mejl till denna adressen."},
identityAccountDoesNotExistOrIsAlreadyActive:{cs:"Email byl již potvrzen.",en:"The email has been already confirmed.",sk:"Email bol už potvrdený.",uk:"Електронна пошта підтверджена.",
es:"El correo electrónico ya ha sido confirmado.",sv:"Mejlen har redan blivit bekräftad."},unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,notLoaded:a.notLoaded,invalidContent:{
cs:"Všechny údaje jsou povinné a musí být vyplněny.",en:"All of the information is mandatory, and must be filled in.",sk:"Všetky údaje sú povinné a musia sa vyplniť.",
uk:"Усі дані є обов'язковими та мають бути введені.",es:"Todos los datos son obligatorios y hay que completarlos.",sv:"Alla uppgifter är obligatoriska och måste fyllas i."},
activateByVerificationCode:{cs:"Dokončete prosím svoji registraci kliknutím na aktivační odkaz v e-mailu.",en:"Please complete your registration by clicking on the activation link in the e-mail.",
sk:"Dokončite, prosím, svoju registráciu kliknutím na aktivačný odkaz v e-maile.",uk:"Завершіть реєстрацію, клацнувши на посилання для активації в електронному листі.",
es:"Por favor complete su registro haciendo clic en el enlace de activación en el correo electrónico.",sv:"Slutför din registrering genom att klicka på aktiveringslänken i e-postmeddelandet."}},
updateIdentity:{header:{cs:"Upravit údaje",en:"Edit information",sk:"Upraviť údaje",uk:"Відкоригувати дані",es:"Editar datos",sv:"Redigera information"},name:{cs:"Jméno",en:"Name",sk:"Meno",uk:"Ім'я",
es:"Nombre",sv:"Namn"},surname:{cs:"Příjmení",en:"Surname",sk:"Priezvisko",uk:"Прізвище",es:"Apellidos",sv:"Efternamn"},language:{cs:"Jazyk",en:"Language",sk:"Jazyk",uk:"Мова",es:"Lengua",sv:"Språk"},
timezone:{cs:"Časové pásmo",en:"Time zone",sk:"Časové pásmo",uk:"Часовий діапазон",es:"Zona horaria",sv:"Tidszon"},photo:{cs:"Profilový obrázek",en:"Profile picture",sk:"Profilový obrázok",
uk:"Зображення профілю",es:"Imagen de perfil",sv:"Profilbild"},change:{cs:"Změnit",en:"Change",sk:"Zmeniť",uk:"Змінити",es:"Cambiar",sv:"Ändra"},ok:{cs:"Potvrdit",en:"Confirm",sk:"Potvrdiť",
uk:"Підтвердити",es:"Confirmar",sv:"Bekräfta"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},maxInputLength:{cs:"Maximální povolený počet znaků je %s.",
en:"The maximum permitted number of characters is %s.",sk:"Maximálny povolený počet znakov je %s.",uk:"Максимально допустима кількість знаків %s.",es:"El número máximo de caracteres permitido es %s.",
sv:"Det högsta tillåtna antalet tecken är %s."},invalidImageType:{cs:"Nahrajte prosím obrázek ve formátu JPG, PNG nebo GIF.",en:"Please load a picture in JPG, PNG or GIF format.",
sk:"Nahrajte, prosím, obrázok vo formáte JPG, PNG alebo GIF.",uk:"Завантажте зображення в форматі JPG, PNG або GIF.",es:"Por favor suba una imagen en formatos JPG, PNG o GIF.",
sv:"Ladda in en bild i JPG-, PNG- eller GIF-format."},unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized},lostAccessCodes:{header:{cs:"Zapomenuté přihlašovací údaje",
en:"Forgotten login information",sk:"Zabudnuté prihlasovacie údaje",uk:"Забуті дані для входу",es:"Datos de inicio de sesión olvidados",sv:"Glömd inloggningsinformation"},desc:{
cs:"Zadejte vaši registrační e-mailovou adresu a my vám zašleme odkaz pro obnovení přihlašovacích údajů.",
en:"Enter your registration e-mail address, and we will send you a link for the renewal of login information.",
sk:"Zadajte vašu registračnú e-mailovú adresu a my vám zašleme odkaz na obnovenie prihlasovacích údajov.",
uk:"Введіть вашу реєстраційну електронну адресу і ми надішлемо вам посилання для відновлення даних для входу.",
es:"Ingrese por favor su dirección de correo electrónico de registro y le enviaremos un enlace para restablecer sus datos de inicio de sesión.",
sv:"Ange din e-postadress för registrering, så skickar vi dig en länk för förnyelse av inloggningsuppgifter."},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",sv:"E-post"
},submit:{cs:"Odeslat",en:"Send",sk:"Odoslať",uk:"Відправити",es:"Enviar",sv:"Skicka"},identityDoesNotExist:{cs:"Účet neexistuje.",en:"The account does not exist.",sk:"Účet neexistuje.",
uk:"Обліковий запис не існує.",es:"Esta cuenta no existe.",sv:"Kontot finns inte."},unexpectedError:{cs:"Při zpracování došlo k neočekávané chybě.",
en:"An unexpected error occurred during processing.",sk:"Pri spracovaní došlo k neočakávanej chybe.",uk:"Під час обробки сталася несподівана помилка.",
es:"Al procesar, se ha producido un error inesperado.",sv:"Ett oväntat fel inträffade under bearbetningen."},invalidContent:{
cs:"Tento e-mail není ve správném formátu, vyplňte prosím správnou e-mailovou adresu.",en:"This e-mail address is not in the correct format; please fill in the correct e-mail address.",
sk:"Tento e-mail nie je v správnom formáte, vyplňte, prosím, správnu e-mailovú adresu.",uk:"Неправильний формат електронної адреси; введіть правильну електронну адресу.",
es:"Este correo electrónico no está en el formato correcto, complete por favor correctamente la dirección de correo electrónico.",
sv:"Den här e-postadressen är inte i rätt format, fyll i den korrekta e-postadressen."}},lostAccessCodesEmail:{header:{cs:"Zaslali jsme vám e-mail!",en:"We’ve sent you an e-mail!",
sk:"Zaslali sme vám nový registračný e-mail!",uk:"Ми надіслали вам електронний лист!",es:"¡Le hemos enviado un e-mail!",sv:"Vi har skickat ett e-postmeddelande till dig!"},body:{
cs:"<uu5string /> Váš účet byl úspěšně ověřen, na váš e-mail jsme odeslali odkaz pro obnovení přihlašovacích údajů. Zkontrolujte prosím svou e-mailovou schránku, kde naleznete zprávu od nás a klikněte na odkaz v ní. Pokud e-mailovou zprávu nenaleznete, zkontrolujte si prosím složku Spam. <br /> <br /> Pokud jste e-mail neobdrželi, zkuste to prosím později. V případě, že jste to zkusili neúspěšně již dvakrát, kontaktujte prosím náš ",
en:"<uu5string /> Your account has been successfully verified, we have sent a link for the renewal of login information to your e-mail address. Please check your mailbox, where you will find a message from us, and click on the link in it. If you do not find the e-mail, please check the spam folder. <br /> <br /> If you did not receive the e-mail, please try later. If you have tried twice without success, please contact our ",
sk:"<uu5string /> Váš účet bol úspešne overený, na váš e-mail sme odoslali odkaz na obnovenie prihlasovacích údajov. Skontrolujte si, prosím, svoju e-mailovú schránku, kde nájdete správu od nás a kliknite na odkaz v nej. Pokiaľ e-mailovú správu nenájdete, skontrolujte si zložku Spam. <br /> <br /> Pokiaľ ste e-mail nedostali, skúste to neskôr. V prípade, že ste to skúsili neúspešne už dvakrát, kontaktujte náš ",
uk:"<uu5string /> Ваш обліковий запис було успішно перевірено, на вашу електронну адресу відправлено посилання для відновлення даних для входу. Перевірте свою електронну поштову скриньку, відкрийте наше повідомлення та клацніть на посилання в ньому. Якщо ви не знайдете електронне повідомлення, перевірте папку «Спам». <br /><br /> Якщо ви не отримали електронний лист, повторіть спробу пізніше. Якщо друга спроба теж була безуспішною, зв'яжіться з нами. ",
es:"<uu5string /> Su cuenta ha sido verificada con éxito, hemos enviado un enlace para restablecer datos de inicio de sesión a su correo electrónico. Consulte su correo electrónico para encontrar un mensaje nuestro y haga clic en el enlace que se encuentra en él. Si no encuentra el mensaje de correo electrónico, revise la carpeta Spam. <br /><br /> Si no ha recibido el correo electrónico, inténtelo de nuevo más tarde. Si ya lo ha intentado dos veces sin éxito, por favor contacte con nuestro ",
sv:"<uu5string /> Ditt konto har verifierats, vi har skickat en länk för förnyelse av inloggningsuppgifter till din e-postadress. Kontrollera din brevlåda, där du hittar ett meddelande från oss, och klicka på länken i meddelandet. Om du inte hittar e-postmeddelandet kan du kontrollera din skräppostmapp. <br /> <br /> Om du inte fick e-postmeddelandet kan du försöka senare. Om du har försökt två gånger utan att lyckas, vänligen kontakta vår "
},helpdesk:{cs:"Helpdesk",en:"Helpdesk",sk:"Helpdesk",uk:"Helpdesk",es:"Servicio de Asistencia",sv:"Kundservice"}},lostSecondFactor:{header:{cs:"Zapomenuté prostředky pro dvoufázové ověření",
en:"Forgotten second-step verification options"},desc:{cs:"Zadejte vaši registrační e-mailovou adresu a my vám zašleme odkaz pro přenastavení možností dvoufázového ověření.",
en:"Enter your registration e-mail address, and we will send you a link for resetting second-step verification options."},email:{cs:"E-mail",en:"E-mail",sk:"E-mail",uk:"Електронна адреса",es:"E-mail",
sv:"E-post"},submit:{cs:"Odeslat",en:"Send",sk:"Odoslať",uk:"Відправити",es:"Enviar",sv:"Skicka"},identityDoesNotExist:{cs:"Účet neexistuje.",en:"The account does not exist.",sk:"Účet neexistuje.",
uk:"Обліковий запис не існує.",es:"Esta cuenta no existe.",sv:"Kontot finns inte."},unexpectedError:{cs:"Při zpracování došlo k neočekávané chybě.",
en:"An unexpected error occurred during processing.",sk:"Pri spracovaní došlo k neočakávanej chybe.",uk:"Під час обробки сталася несподівана помилка.",
es:"Al procesar, se ha producido un error inesperado.",sv:"Ett oväntat fel inträffade under bearbetningen."},invalidContent:{
cs:"Tento e-mail není ve správném formátu, vyplňte prosím správnou e-mailovou adresu.",en:"This e-mail address is not in the correct format; please fill in the correct e-mail address.",
sk:"Tento e-mail nie je v správnom formáte, vyplňte, prosím, správnu e-mailovú adresu.",uk:"Неправильний формат електронної адреси; введіть правильну електронну адресу.",
es:"Este correo electrónico no está en el formato correcto, complete por favor correctamente la dirección de correo electrónico.",
sv:"Den här e-postadressen är inte i rätt format, fyll i den korrekta e-postadressen."}},lostSecondFactorEmail:{header:{cs:"Zaslali jsme vám e-mail!",en:"We’ve sent you an e-mail!",
sk:"Zaslali sme vám nový registračný e-mail!",uk:"Ми надіслали вам електронний лист!",es:"¡Le hemos enviado un e-mail!",sv:"Vi har skickat ett e-postmeddelande till dig!"},body:{
cs:"<uu5string /> Váš účet byl úspěšně ověřen, na Váš e-mail jsme odeslali odkaz pro přenastavení všech prostředků dvoufázového ověřování. Zkontrolujte prosím svou e-mailovou schránku, kde naleznete zprávu od nás a klikněte na odkaz v ní. Pokud e-mailovou zprávu nenaleznete, zkontrolujte si prosím složku Spam. <br /> <br /> Pokud jste e-mail neobdrželi, zkuste to prosím později. V případě, že jste to zkusili neúspěšně již dvakrát, kontaktujte prosím náš ",
en:"<uu5string /> Your account has been successfully verified, we have sent a link for resetting all second-step verification options to your e-mail address. Please check your mailbox, where you will find a message from us, and click on the link in it. If you do not find the e-mail, please check the spam folder. <br /> <br /> If you did not receive the e-mail, please try later. If you have tried twice without success, please contact our "
},helpdesk:{cs:"Helpdesk",en:"Helpdesk",sk:"Helpdesk",uk:"Helpdesk",es:"Servicio de Asistencia",sv:"Kundservice"}},showToken:{header:{cs:"Autentizační token",en:"Authentication token",
sk:"Autentizačný token",uk:"Маркер аутентифікації",es:"Token de autenticación",sv:"Autentiseringstoken"},copyButtonLabel:{cs:"Kopírovat do schránky",en:"Copy to clipboard",sk:"Kopírovať do schránky",
uk:"Скопіювати в буфер обміну",es:"Copiar a portapapeles",sv:"Kopiera till urklipp"}},showAuthorizationCode:{header:{cs:"Autorizační kód",en:"Authorisation code",sk:"Autorizačný kód",
uk:"Код авторизації",es:"Código de autorización",sv:"Behörighetskod"},clientLabel:{cs:"Klient",en:"Client",sk:"Klient",uk:"Клієнт",es:"Cliente",sv:"Kund"},successHeader:{cs:"Úspěch",en:"Success",
sk:"Úspech",uk:"Успіх",es:"Con éxito",sv:"Framgång"},failHeader:{cs:"Neúspěch",en:"Failure",sk:"Neúspech",uk:"Невдача",es:"Sin éxito",sv:"Fel"},successText:{
cs:"Autorizační kód byl přijat klientskou aplikací.",en:"The authorisation code was accepted by the client application.",sk:"Autorizačný kód bol prijatý klientskou aplikáciou.",
uk:"Код авторизації був прийнятий клієнтським додатком.",es:"El código de autorización fue recibido por la aplicación de cliente.",sv:"Godkännandekoden har godkänts av klientapplikationen.."},
closeHeader:{cs:"Uzavřete prosím tuto stránku.",en:"Please close this page.",sk:"Zavrite, prosím, túto stránku.",uk:"Закрийте цю сторінку.",es:"Por favor cierre esta página.",sv:"Stäng den här sidan."
},closeText:{cs:"Klient již získal váš Autorizační kód, ale tuto stránku nelze automaticky uzavřít z důvodů bezpečnostních omezení na straně prohlížeče.",
en:"The client has already obtained your Authorisation Code, but this page cannot be closed automatically due to the browser’s security restrictions.",
sk:"Klient už získal váš Autorizačný kód, ale túto stránku nie je možné automaticky zavrieť z dôvodu bezpečnostných obmedzení zo strany prehliadača.",
uk:"Клієнт вже отримав ваш Код авторизації, але цю сторінку неможливо автоматично закрити через обмеження щодо безпеки в рамках браузера.",
es:"El cliente ya ha obtenido su Código de autorización, pero esta página no puede cerrarse automáticamente debido a restricciones de seguridad en el navegador.",
sv:"Kunden har redan fått din auktoriseringskod, men denna sida kan inte stängas automatiskt på grund av webbläsarens säkerhetsbegränsningar."},failCloseText:{
cs:"Klient nemohl získat váš Autorizační kód, ale tuto stránku nelze automaticky uzavřít z důvodů bezpečnostních omezení na straně prohlížeče.",
en:"The client could not obtain your Authorisation Code, but this page cannot be closed automatically due to the browser’s security restrictions.",
sk:"Klient nemohol získať váš Autorizačný kód, ale túto stránku nie je možné automaticky zavrieť z dôvodu bezpečnostných obmedzení zo strany prehliadača.",
uk:"Клієнт не зміг отримати ваш Код авторизації, але цю сторінку неможливо автоматично закрити через обмеження щодо безпеки в рамках браузера.",
es:"El cliente no ha obtenido su Código de autorización, pero esta página no puede cerrarse automáticamente debido a restricciones de seguridad en el navegador.",
sv:"Klienten kunde inte få fram din auktoriseringskod, men den här sidan kan inte stängas automatiskt på grund av webbläsarens säkerhetsbegränsningar."},unexpectedError:a.unexpectedError},
showCredentials:{header:{cs:"Připojené účty",en:"Connected Accounts",sk:"Pripojené účty",uk:"Зв’язані облікові записи",es:"Cuentas relacionadas",sv:"Anslutna konton"},headerCustom:{
en:"Connected Accounts for the %s",cs:"Připojené účty pro %s",sv:"Anslutna konton för %s"},help:{
cs:"Tento přehled obsahuje seznam účtů, kterými se můžete přihlásit do služby Plus4U. Plus4U účet vyžaduje nastavení přístupových kódů, ostatní možnosti vyžadují potvrzení poskytnutí vašich osobních údajů třetí stranou. Pro připojení nového účtu klikněte v příslušném řádku na tlačítko Připojit. Pro odpojení účtu třetích stran klikněte na ikonu odpadkového koše v řádku zvoleného účtu.",
en:"This overview lists accounts which you can use to log in to Plus4U. The Plus4U account requires to set up access codes, other options require confirmation by your chosen third party to provide your personal information. To connect a new account, click on the Connect button in the appropriate row. To disconnect a third-party account, click the trash can icon in the row of the selected account.",
sk:"Tento prehľad obsahuje zoznam účtov, ktorými sa môžete prihlásiť do služby Plus4U. Plus4U účet vyžaduje nastavenie prístupových kódov, ostatné možnosti vyžadujú potvrdenie poskytnutie vašich osobných údajov treťou stranou. Pre pripojenie nového účtu kliknite v príslušnom riadku na tlačidlo Pripojiť. Pre odpojenie účtu tretích strán kliknite na ikonu odpadkového koša v riadku zvoleného účtu.",
uk:"У цьому огляді перераховані облікові записи, за допомогою яких ви можете ввійти в Plus4U. Для облікового запису Plus4U потрібно встановити коди доступу, інші параметри вимагають підтвердження обраною стороною стороною для надання вашої особистої інформації. Щоб підключити новий обліковий запис, натисніть кнопку Підключити у відповідному рядку. Щоб від’єднати сторонній обліковий запис, натисніть значок кошика у рядку вибраного облікового запису.",
es:"Esta descripción general enumera las cuentas que puede usar para iniciar sesión en Plus4U. La cuenta Plus4U requiere configurar códigos de acceso, otras opciones requieren la confirmación de su tercero elegido para proporcionar su información personal. Para conectar una nueva cuenta, haga clic en el botón Conectar en la fila correspondiente. Para desconectar una cuenta de terceros, haga clic en el icono de la papelera en la fila de la cuenta seleccionada.",
sv:"I den här översikten visas konton som du kan använda för att logga in på Plus4U. Plus4U-kontot kräver att du ställer in lösenord, medan andra alternativ kräver en bekräftelse från den tredje part som du valt för att tillhandahålla dina personuppgifter. Om du vill ansluta ett nytt konto klickar du på knappen Anslut i lämplig rad. Om du vill koppla bort ett tredjepartskonto klickar du på papperskorgen i raden för det valda kontot."
},helpCustom:{
en:'<uu5string/>This overview lists accounts which you can use to log into <b>%s</b>. The Plus4U account requires to set up access codes, other options (if available) require confirmation by corresponding third party to provide your personal information. To connect a new account, click on the Connect button in the appropriate row. To disconnect a third-party account, click the trash can icon in the row of the selected account. To show all your connected accounts, follow <a href="'.concat(i.a.Environment.getAppBasePath(),'showCredentials" target="_self" className="uu5-bricks-link">this link</a>.'),
cs:'<uu5string/>Tento přehled obsahuje seznam účtů, kterými se můžete přihlásit do aplikace <b>%s</b>. Plus4U účet vyžaduje nastavení přístupových kódů, ostatní možnosti (pokud jsou dostupné) vyžadují potvrzení poskytnutí vašich osobních údajů třetí stranou. Pro připojení nového účtu klikněte v příslušném řádku na tlačítko Připojit. Pro odpojení účtu třetích stran klikněte na ikonu odpadkového koše v řádku zvoleného účtu. Pro zobrazení všech vašich připojených účtů, klikněte na <a href="'.concat(i.a.Environment.getAppBasePath(),'showCredentials" target="_self" className="uu5-bricks-link">tento odkaz</a>.'),
sv:'<uu5string/>I den här översikten visas konton som du kan använda för att logga in <b>%s</b>. Plus4U-kontot kräver att du ställer in lösenord,, medan andra alternativ kräver en bekräftelse från din valda tredje part för att tillhandahålla dina personuppgifter. Om du vill ansluta ett nytt konto klickar du på knappen Anslut i lämplig rad. Om du vill koppla bort ett tredjepartskonto klickar du på papperskorgen i raden för det valda kontot. För att visa alla dina anslutna konton, följ <a href="'.concat(i.a.Environment.getAppBasePath(),'showCredentials" target="_self" className="uu5-bricks-link">den här länken</a>.')
},accountHeaderLabel:{cs:"Účet",en:"Account",sk:"Účet",uk:"Обліковий запис",es:"Cuenta",sv:"Konto"},nameHeaderLabel:{cs:"Jméno",en:"Name",sk:"Meno",uk:"Ім'я",es:"Nombre",sv:"Namn"},
createdAtHeaderLabel:{cs:"Připojeno v",en:"Connected in",sk:"Pripojené v",uk:"Підключено до",es:"Conectado en",sv:"Ansluten i"},lastAccessHeaderLabel:{cs:"Poslední přihlášení",en:"Last login",
sk:"Posledné prihlásenie",uk:"Останній вхід",es:"Último inicio de sesión",sv:"Senaste inloggning"},accountError:{cs:"Nepodařilo se načíst informace o připojených účtech. Opakujte akci později.",
en:"Information regarding connected accounts could not be loaded. Repeat the action later.",sk:"Nepodarilo sa načítať informácie o pripojených účtoch. Opakujte akciu neskôr.",
uk:"Не вдалося завантажити інформацію про зв’язані облікові записи. Повторіть спробу пізніше.",es:"Error al recuperar la información de la cuenta asociada. Por favor, inténtelo de nuevo más tarde.",
sv:"Information om anslutna konton kunde inte laddas. Upprepa åtgärden senare."},lloaHeaderLabel:{cs:"Důvěryhodnost přihlášení",en:"Trustworthiness of login",sk:"Dôveryhodnosť prihlásenia",
uk:"Надійність входу",es:"Nivel de seguridad de acceso",sv:"Trovärdighet av inloggningen"},realmHeaderLabel:{cs:"Realm",en:"Realm",sk:"Realm",uk:"Realm",es:"Realm",sv:"Realm"},connectLabel:{
cs:"Připojit",en:"Connect",sk:"Pripojiť",uk:"Підключити",es:"Conectar",sv:"Anslut"},disconnectLabel:{cs:"Odpojit",en:"Disconnect",sk:"Odpojiť",uk:"Відключити",es:"Desconectar",sv:"Koppla bort"},
externalProvidersLabel:{en:"Additional Accounts",cs:"Další účty"},deleteCredentials:{cs:"Účet byl úspěšně odstraněn.",en:"The account was successfully removed.",sk:"Účet bol úspešne odstránený.",
uk:"Обліковий запис був успішно видалений.",es:"Cuenta ha sido eliminada con éxito.",sv:"Kontot togs bort framgångsrikt."},deleteCredentialsError:{cs:"Tento účet nemůže být odstraněn.",
en:"This account cannot be removed.",sk:"Tento účet nemôže byť odstránený.",uk:"Цей обліковий запис не може бути видалений.",es:"No se puede eliminar esta cuenta.",
sv:"Det här kontot kan inte tas bort."},addCredentials:{cs:"Účet byl úspěšně připojen.",en:"The account was successfully connected.",sk:"Účet bol úspešne pripojený.",
uk:"Обліковий запис був успішно підключений.",es:"Cuenta ha sido creada con éxito.",sv:"Kontot har anslutits med framgång."},unexpectedExternalIdPError:{
cs:"Odmítli jste přístup k rozsahu požadovanému aplikací Plus4U.",en:"You have refused access in the extent required by the Plus4U application.",
sk:"Odmietli ste prístup k rozsahu požadovanému aplikáciou Plus4U.",uk:"Ви відхилили доступ до області, що вимагається додатком Plus4U.",
es:"Ha denegado el acceso al rango requerido por la aplicación Plus4U.",sv:"Du har nekat tillträde i den omfattning som krävs i Plus4U-ansökan."},unexpectedError:a.unexpectedError,
alreadyAssociatedCredentials:a.alreadyAssociatedCredentials},connectionButton:{connectLabel:{cs:"Připojit",en:"Connect",sk:"Pripojiť",uk:"Підключити",es:"Conectar",sv:"Anslut"},disconnectLabel:{
cs:"Odpojit",en:"Disconnect",sk:"Odpojiť",uk:"Відключити",es:"Desconectar",sv:"Koppla bort"},changeAccessCode1Label:{cs:"Změnit přístupový kód 1",en:"Change access code 1",
sk:"Zmeniť prístupový kód 1",uk:"Змінити код доступу 1",es:"Cambiar el código de acceso 1",sv:"Ändra lösenord 1"},changeAccessCode2Label:{cs:"Změnit přístupový kód 2",en:"Change access code 2",
sk:"Zmeniť prístupový kód 2",uk:"Змінити код доступу 2",es:"Cambiar el código de acceso 2",sv:"Ändra lösenord 2"},changeRegistrationEmailLabel:{cs:"Změnit registrační e-mail",
en:"Change registration email",sk:"Zmeniť registračný e-mail",uk:"Змінити реєстраційну електронну пошту",es:"Cambiar el correo electrónico de registro",sv:"Ändra e-postadress för registrering"}},
section:{unknownError:{cs:"Došlo k neznámé chybě.",en:"An unknown error has occurred.",sk:"Došlo k neznámej chybe.",uk:"Сталася невідома помилка.",es:"Ha surgido un error desconocido.",
sv:"Ett okänt fel har inträffat."}},changeEmail:{header:{cs:"Změnit registrační e-mail",en:"Change registration email",sk:"Zmeniť registračný e-mail",uk:"Змінити реєстраційну електронну пошту",
es:"Cambiar el correo electrónico de registro",sv:"Ändra e-postadress för registrering"},authorizationHeader:{cs:"Autorizace",en:"Authorization",uk:"Авторизація"},emailHeader:{cs:"Emailová adresa",
en:"E-mail address",sk:"Zmeniť e-mail",uk:"Електронна адреса",es:"Dirección de correo electrónico",sv:"E-postadress"},formDescription:{
cs:"<uu5string/>Nový registrační e-mail můžete zvolit buď ze seznamu ověřených e-mailů náležících k účtům, které máte ke službě Plus4U připojené, nebo můžete zadat novou e-mailovou adresu.<br/>Pokud zvolíte e-mail ze seznamu, bude změna provedena okamžitě.<br/>Pokud vyplníte novou e-mailovou adresu, odešleme vám na tuto adresu e-mail s odkazem pro ověření vaší identity. Změna registračního e-mailu bude provedena ihned po kliknutí na odkaz v e-mailu.",
en:"<uu5string/>You can either select a new registration e-mail address from the list of verified e-mail addresses appertaining to the accounts which you have connected to the Plus4U service, or you can enter a new e-mail address.<br/>If you select an e-mail address from the list, the change will take place immediately.<br/>If you fill in a new e-mail address, then we will send an e-mail to that address with a link in order to verify your identity. The change of registration e-mail address will take place immediately after you click on the link in the e-mail.",
sk:"<uu5string/>Nový registračný e-mail môžete zvoliť buď zo zoznamu overených e-mailov patriacich k účtom, ktoré máte k službe Plus4U pripojené, alebo môžete zadať novú e-mailovú adresu.<br/>Pokiaľ zvolíte e-mail zo zoznamu, bude zmena vykonaná okamžite.<br/>Pokiaľ vyplníte novú e-mailovú adresu, odošleme vám na túto adresu e-mail s odkazom na overenie vašej identity. Zmena registračného e-mailu bude vykonaná ihneď po kliknutí na odkaz v e-maile.",
uk:"<uu5string/>Нову реєстраційну електронну адресу можна вибрати зі списку перевірених електронних адрес, що відносяться до облікових записів, підключених до сервісу Plus4U, або ввести нову електронну адресу.<br/>Якщо ви виберете електронну адресу зі списку, зміна відбудеться миттєво.<br/>Якщо ви введете нову електронну адресу, на цю адресу надійде електронний лист із посиланням для перевірки вашої особи. Зміна реєстраційної електронної адреси буде здійснена відразу після того, як ви клацнете на посилання в електронному листі.",
es:"<uu5string/>Puede elegir un nuevo e-mail de registro de una lista de correos electrónicos verificados pertenecientes a cuentas que tiene conectadas a Plus4U o puede ingresar una nueva dirección de correo electrónico.<br/>Si selecciona un correo electrónico de la lista, el cambio se realizará de inmediato.<br/>Si completa una nueva dirección de correo electrónico, le enviaremos un correo electrónico con este enlace para verificar su identidad. El cambio de correo electrónico de registro se realizará inmediatamente después de hacer clic en el enlace del correo electrónico.",
sv:"<uu5string/>Du kan antingen välja en ny e-postadress för registrering från listan över verifierade e-postadresser för de konton som du har anslutit till Plus4U-tjänsten, eller så kan du ange en ny e-postadress.<br/>Om du väljer en e-postadress från listan kommer ändringen att ske omedelbart.<br/>Om du anger en ny e-postadress skickar vi ett e-postmeddelande till den adressen med en länk för att kontrollera din identitet. Ändringen av e-postadressen för registrering sker omedelbart efter det att du klickar på länken i e-postmeddelandet."
},currentEmail:{cs:"Původní e-mail",en:"Original e-mail address",sk:"Pôvodný e-mail",uk:"Поточна електронна адреса",es:"E-mail original",sv:"Ursprunglig e-postadress"},unverifiedEmail:{
cs:"Zadat nový e-mail",en:"Enter new e-mail address",sk:"Zadať nový e-mail",uk:"Ввести нову електронну адресу",es:"Insertar nuevo e-mail",sv:"Ange en ny e-postadress"},newEmail:{cs:"Nový e-mail",
en:"New e-mail address",sk:"Nový e-mail",uk:"Нова електронна адреса",es:"Nuevo e-mail",sv:"Ny e-postadress"},verifiedEmails:{cs:"Ověřené e-maily",en:"Verified e-mail addresses",sk:"Overené e-maily",
uk:"Перевірені електронні адреси",es:"Correos electrónicos verificados",sv:"Kontrollerade e-postadresser"},next:{cs:"Další",en:"Next",sk:"Ďalšie",uk:"Далі",es:"Próximo",sv:"Nästa"},ok:{cs:"Nastavit",
en:"Set",sk:"Nastaviť",uk:"Налаштувати",es:"Configurar",sv:"Ställ in"},cancel:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},invalidEmail:a.invalidEmail,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,newEmailDoesNotExist:{cs:"Nový e-mail neexistuje. Zkuste jej změnit znovu.",
en:"The new e-mail address does not exist. Try changing it again.",sk:"Nový e-mail neexistuje. Skúste ho zmeniť znovu.",uk:"Нова електронна адреса не існує. Спробуйте змінити її ще раз.",
es:"Nuevo e-mail no existe. Intente cambiarlo de nuevo.",sv:"Den nya e-postadressen finns inte. Försök att ändra den igen."},identityDoesNotFoundByVerificationCode:{cs:"Verifikační kód vypršel.",
en:"The verification code has expired.",sk:"Verifikačný kód vypršal.",uk:"Термін дії коду верифікації закінчився.",es:"El código de verificación ha caducado.",sv:"Verifieringskoden har gått ut."},
emailIsNotUnique:{cs:"E-mail je již použitý.",en:"The e-mail address is already being used.",sk:"E-mail sa už používa.",uk:"Електронна адреса вже використовується.",
es:"El correo electrónico ya está en uso.",sv:"E-postadressen används redan."},accessCodesVerificationFailed:{cs:"Ověření přístupových kódů se nezdařilo.",en:"Verification of access codes failed.",
sk:"Overenie prístupových kódov zlyhalo.",uk:"Помилка перевірки кодів доступу.",es:"Falló la verificación de los códigos de acceso.",sv:"Verifiering av lösenorden misslyckades."},verificationSent:{
cs:"Dokončete prosím změnu e-mailu kliknutím na aktivační odkaz v e-mailu.",en:"Please complete the change of e-mail address by clicking on the activation link in the e-mail.",
sk:"Dokončite, prosím, zmenu e-mailu kliknutím na aktivačný odkaz v e-maile.",uk:"Завершіть зміну електронної адреси, клацнувши на посилання для активації в електронному листі.",
es:"Por favor complete el cambio haciendo clic en el enlace de activación dentro del correo electrónico.",
sv:"Vänligen slutför ändringen av e-postadressen genom att klicka på aktiveringslänken i e-postmeddelandet."},successfullySet:{cs:"Změna e-mailu úspěšně provedena.",
en:"E-mail address successfully changed.",sk:"E-mail úspešne zmenený.",uk:"Зміна електронної адреси пройшла успішно.",es:"Cambio de correo electrónico se ha realizado con éxito.",
sv:"E-postadressen har ändrats med framgång."}}};r.mfa={phoneType:{primary:{en:"Primary phone",cs:"Hlavní telefon",sk:"Hlavný telefón",uk:"Головний телефон",es:"Teléfono principal"},secondary:{
en:"Backup phone",cs:"Záložní telefon",sk:"Záložný telefón",uk:"Резервний телефон",es:"Teléfono de respaldo"}},defaultTotpType:{en:"Authenticator",cs:"Autentikátor",sk:"Autentikátor",
uk:"Автентифікатор",es:"Autentificador"},defaultBackupCodesType:{en:"Backup codes",cs:"Záložní kódy",sk:"Záložné kódy",uk:"Резервні коди",es:"Códigos de respaldo"},login:{header:{
en:"Additional verification",cs:"Dodatečné ověření",sk:"Dodatočné overenie",uk:"Додаткова автентифікація",es:"Autenticación adicional"},alternateMethods:{en:"Another method",cs:"Jiný způsob",
sk:"Iný spôsob",uk:"Інший спосіб",es:"Otra forma"},lostSecondFactor:{en:"Unable to use two-step verification?",cs:"Nemůžete použít dvoufázové ověření?",sk:"Nemôžete použiť dvojfázové overenie?",
uk:"Неможливо застосувати двоетапну перевірку?",es:"¿No puede utilizar la autenticación de dos factores?"},configRedirectForm:{headerInfo:{
en:"Additional verification of your identity is required. First set it up on your account please.",cs:"Je požadované dodatečné ověření vaší identity. Nejprve jej prosím pro svůj účet nastavte.",
sk:"Je požadované dodatočné overenie vašej identity. Najprv ho prosím pre svoj účet nastavte.",
uk:"Вимагається додаткова перевірка особи. Будь ласка, спочатку налаштуйте її для свого облікового запису.",
es:"Se requiere una autenticación adicional de su identidad. Por favor, configúrela primero para su cuenta."},redirectToMfaConfiguration:{en:"Go to configuration of advanced security options",
cs:"Přejděte na nastavení rozšířených možností zabezpečení",sk:"Prejdite na nastavenie rozšírených možností zabezpečenia",uk:"Перейдіть до налаштування розширених можливостей забезпечення",
es:"Vaya a la configuración de opciones avanzadas de seguridad"}},totpForm:{headerInfo:{en:"Enter the 6-digit code from your authentication application to confirm it is really you signing in.",
cs:"Zadejte 6místný kód z autentizační aplikace pro potvrzení, že jste to skutečně vy.",sk:"Zadajte 6miestny kód z autentizačnej aplikácie pre potvrdenie, že ste to skutočne vy.",
uk:"Введіть 6-значний код з додатку для автентифікації, щоб підтвердити, що це дійсно ви.",es:"Introduzca el código de 6 dígitos de la aplicación de autenticación para confirmar su identidad."},
textPlaceholder:{en:"Verification code",cs:"Ověřovací kód",sk:"Overovací kód",uk:"Код автентифікації",es:"Código de autenticación"},verifyMe:{en:"Verify",cs:"Ověřit",sk:"Overiť",uk:"Перевірити",
es:"Autenticar"},unexpectedError:a.unexpectedError,invalidCodeError:{en:"Please enter a valid verification code.",cs:"Prosím zadejte platný ověřovací kód.",sk:"Prosím zadajte platný overovací kód.",
uk:"Будь ласка, введіть дійсний код автентифікації.",es:"Por favor, introduzca un código de autenticación válido."}},backupCodesForm:{headerInfo:{
en:"Enter the 6-digit backup code to confirm it is really you signing in.",cs:"Zadejte 6místný záložní kód pro potvrzení, že jste to skutečně vy.",
sk:"Zadajte 6miestny záložný kód pre potvrdenie, že ste to skutočne vy.",uk:"Введіть 6-значний код для підтвердження, що це дійсно ви.",
es:"Introduzca el código de seguridad de 6 dígitos para confirmar su identidad."},textPlaceholder:{en:"Verification code",cs:"Ověřovací kód",sk:"Overovací kód",uk:"Код автентифікації",
es:"Código de autenticación"},verifyMe:{en:"Verify",cs:"Ověřit",sk:"Overiť",uk:"Перевірити",es:"Autenticar"},unexpectedError:a.unexpectedError,invalidCodeError:{en:"Please enter a valid backup code.",
cs:"Prosím zadejte platný záložní kód.",sk:"Prosím zadajte platný záložný kód.",uk:"Будь ласка, введіть дійсний резервний код.",es:"Por favor, introduzca un código de respaldo válido."}},smsForm:{
headerInfo:{en:"Enter the 6-digit code sent to phone number %s via SMS to confirm it is really you signing in.",
cs:"Zadejte 6místný kód zaslaný na telefonní číslo %s prostřednictvím SMS pro potvrzení, že jste to skutečně vy.",
sk:"Zadajte 6miestny kód zaslaný na telefónne číslo %s prostredníctvom SMS pre potvrdenie, že ste to skutočne vy.",
uk:"Введіть 6-значний код, який вам надіслали у SMS повідомленні за номером телефону %s, щоб підтвердити, що це дійсно ви.",
es:"Introduzca el código de 6 dígitos enviado al número de teléfono de %s en un SMS para confirmar su identidad."},textPlaceholder:{en:"Verification code",cs:"Ověřovací kód",sk:"Overovací kód",
uk:"Код автентифікації",es:"Código de autenticación"},verifyMe:{en:"Verify",cs:"Ověřit",sk:"Overiť",uk:"Перевірити",es:"Autenticar"},resendCodeLink:{en:"Resend verification code",
cs:"Znovu odeslat ověřovací kód",sk:"Znovu odoslať overovací kód",uk:"Знову надіслати код автентифікації",es:"Reenviar el código de autenticación"},primaryPhoneSmsAlert:{
en:"A verification code was sent to the primary phone.",cs:"Ověřovací kód byl odeslán na primární telefon.",sk:"Overovací kód bol odoslaný na primárny telefón.",
uk:"Код автентифікації було надіслано на головний телефон.",es:"El código de autenticación ha sido enviado al teléfono principal."},secondaryPhoneSmsAlert:{
en:"A verification code was sent to the backup phone.",cs:"Ověřovací kód byl odeslán na záložní telefon.",sk:"Overovací kód bol odoslaný na záložný telefón.",
uk:"Код автентифікації було надіслано на резервний телефон.",es:"El código de autenticación ha sido enviado al teléfono de respaldo."},unexpectedError:a.unexpectedError,invalidCodeError:{
en:"Please enter a valid verification code.",cs:"Prosím zadejte platný ověřovací kód.",sk:"Prosím zadajte platný overovací kód.",uk:"Будь ласка, введіть дійсний код автентифікації.",
es:"Por favor, introduzca un código de autenticación válido."}}},configuration:{eventCredentialsAdded:{en:"Two-step verification method was successfully added.",
cs:"Možnost dvoufázového přihlášení byla úspěšně přidána.",sk:"Možnosť dvojfázového prihlásenia bola úspěšne pridaná.",uk:"Можливість двоетапної реєстрації було успішно додано.",
es:"La opción de inicio de sesión de dos factores ha sido añadida con éxito."},eventCredentialsAddedNotActive:{
en:"Two-step verification method was added but requires further steps before it can be used.",cs:"Možnost dvoufázového přihlášení přidána, ale před jejím použitím jsou vyžadované další kroky.",
sk:"Možnosť dvojfázového prihlásenia pridaná, ale pred jej použitím sú požadované ďalšie kroky.",uk:"Можливість двоетапної реєстрації додано, але перед їх застосуванням вимагаються додаткові кроки.",
es:"Se ha añadido la opción de inicio de sesión de dos factores, pero se requieren pasos adicionales antes de poder utilizarla."},eventCredentialsUpdated:{
en:"Two-step verification method was successfully updated.",cs:"Možnost dvoufázového přihlášení byla úspěšně aktualizována.",sk:"Možnosť dvojfázového prihlásenia bola úspešne aktualizovaná.",
uk:"Можливість двоетапної реєстрації було успішно оновлено.",es:"La opción de inicio de sesión de dos factores se ha actualizado con éxito."},eventCredentialsDeleted:{
en:"Two-step verification method was successfully removed.",cs:"Možnost dvoufázového přihlášení byla úspěšně odebrána.",sk:"Možnosť dvojfázového prihlásenia bola úspešne odobraná.",
uk:"Можливість двоетапної реєстрації було успішно видалено.",es:"La opción de inicio de sesión de dos factores se ha eliminado con éxito."},eventGlobalMfaEnabled:{
en:"Global use of two-step verification was successfully turned on.",cs:"Globální použití dvoufázového ověření bylo úspěšně zapnuto.",
sk:"Globálne použitie dvojfázového overenia bolo úspešne zapnuté.",uk:"Глобальне застосування двоетапної автентифікації було успішно увімкнено.",
es:"El uso global de la autenticación de dos factores se ha activado con éxito."},eventGlobalMfaDisabled:{en:"Global use of two-step verification was successfully turned off.",
cs:"Globální použití dvoufázového ověření bylo úspěšně vypnuto.",sk:"Globálne použitie dvojfázového overenia bolo úspešne vypnuté.",
uk:"Глобальне застосування двоетапної автентифікації було успішно вимкнено.",es:"El uso global de la autenticación de dos factores se ha desactivado con éxito."},eventGlobalMfaRemoved:{
en:"Global use of two-step verification was automatically turned off as it cannot be used without any Two-step verification method set up.",
cs:"Globální použití dvoufázového ověření bylo automaticky vypnuto, protože není možné jej použít bez nastavení způsobu ověřování.",
sk:"Globálne použitie dvojfázového overenia bolo automaticky vypnuté, pretože nie je možné ho použiť bez nastavenia spôsobu overovania.",
uk:"Глобальне застосування двофазної автентифікації було автоматично вимкнено, оскільки його застосування неможливе без налаштування способу автентифікації.",
es:"El uso global de la autenticación de dos factores se ha desactivado automáticamente porque no se puede utilizar sin configurar el método de autenticación."},eventUnexpectedError:{
en:"Operation did not succeed.",cs:"Operace se nezdařila.",sk:"Operácia sa nepodarila.",uk:"Помилка операції.",es:"La operación ha fallado."},accessCode:{en:"Access code %s",cs:"Přístupový kód %s",
sk:"Prístupový kód %s",uk:"Код для доступу %s",es:"Código de acceso %s",sv:"Lösenord %s"},verificationCode:{en:"Verification Code",cs:"Ověřovací kód",sk:"Overovací kód",uk:"Код автентифікації",
es:"Código de autenticación"},authorizationForm:{accessCodesDesc:{en:"To continue, first verify that it's you. Please enter access code 1 and 2.",
cs:"Chcete-li pokračovat, nejprve ověřte, že jste to vy. Zadejte přístupový kód 1 a 2.",sk:"Pokiaľ chcete pokračovať, najprv overte, že ste to vy. Zadajte prístupový kód 1 a 2. ",
uk:"Якщо бажаєте продовжити, спочатку підтвердіть, що це ви. Введіть код для доступу 1 і 2.",es:"Para continuar, primero verifique su identidad. Introduzca el código de acceso 1 y 2."},
alternateMethods:{en:"Choose another verification method",cs:"Zvolte jiný způsob ověření",sk:"Zvoľte iný spôsob overenia",uk:"Оберіть інший спосіб автентифікації",
es:"Seleccione un método de autenticación diferente"},totpDesc:{en:"For higher security, enter the 6-digit verification code from your authenticator application.",
cs:"Z důvodu vyššího zabezpečení, zadejte 6místný ověřovací kód z autentizační aplikace.",sk:"Z dôvodu vyššieho zabezpečenia, zadajte 6miestny overovací kód z autentizačnej aplikácie.",
uk:"З міркувань вищого забезпечення введіть 6-значний код автентифікації з програми автентифікації.",
es:"Para mayor seguridad, introduzca el código de autenticación de 6 dígitos de la aplicación de autenticación."},smsDesc:{
en:"For higher security, enter the 6-digit verification code sent to phone number %s.",cs:"Z důvodu vyššího zabezpečení, zadejte 6místný ověřovací kód zaslaný na telefonní číslo %s.",
sk:"Z dôvodu vyššieho zabezpečenia, zadajte 6miestny overovací kód zaslaný na telefónne číslo %s.",
uk:"З міркувань вищого забезпечення введіть 6-значний код автентифікації, який вам надіслали на телефон %s.",
es:"Para mayor seguridad, introduzca el código de autenticación de 6 dígitos enviado al número de teléfono %s."},smsSent:{en:"SMS with verification code to number %s was successfully sent.",
cs:"SMS s ověřovacím kódem byla úspěšně odeslána na číslo %s.",sk:"SMS s overovacím kódom bola úspešne zaslaná na číslo %s.",uk:"SMS з кодом автентифікації було успішно надіслано за номером %s.",
es:"El SMS con el código de autenticación se ha enviado con éxito al número %s."},smsNotReceived:{en:"SMS not delivered? ",cs:"SMS zpráva nepřišla? ",sk:"SMS správa neprišla? ",
uk:"SMS-повідомлення не надійшло? ",es:"¿No ha recibido el SMS? "},smsResend:{en:"Try resending.",cs:"Zkuste odeslat znovu.",sk:"Skúste odoslať znovu.",uk:"Спробуйте відправити знову.",
es:"Intente volver a enviarlo."},backupCodesDesc:{en:"For higher security, enter any of the remaining unused backup codes.",
cs:"Z důvodu vyššího zabezpečení, zadejte jakýkoliv ze zbývajících nepoužitých záložních kódu.",sk:"Z dôvodu vyššieho zabezpečenia, zadajte ktorýkoľvek zo zostávajúcich nepoužitých záložných kódov.",
uk:"З міркувань вищого забезпечення введіть будь-який з решти незастосованих резервних кодів.",es:"Para mayor seguridad, introduzca cualquiera de los códigos de respaldo restantes no utilizados."},
errors:{accessCodesVerificationFailed:{en:"Verification of access codes failed.",cs:"Ověření přístupových kódů se nezdařilo.",sk:"Overenie prístupových kódov sa nepodarilo.",
uk:"Перевірка кодів для доступу не вдалася.",es:"Ha fallado la verificación de los códigos de acceso."},invalidAccessCodes:{en:"An incorrect access code 1 or access code 2 was entered.",
cs:"Byl zadán chybný přístupový kód 1 nebo přístupový kód 2.",sk:"Bol zadaný chybný prístupový kód 1 alebo prístupový kód 2.",uk:"Було введено неправильний код для доступу 1 або код для доступу 2.",
es:"Se ha introducido un código de acceso 1 o un código de acceso 2 incorrecto."},verificationCodeVerificationFailed:{en:"Verification of code failed.",cs:"Ověření kódu se nezdařilo.",
sk:"Overenie kódu sa nepodarilo.",uk:"Помилка перевірки коду.",es:"La validación del código ha fallado."},invalidVerificationCode:{en:"An incorrect verification code was entered.",
cs:"Byl zadán chybný ověřovací kód.",sk:"Bol zadaný chybný overovací kód.",uk:"Введено неправильний код автентифікації.",es:"Se ha introducido un código de autenticación incorrecto."}}},
headerSection:{header:{en:"Advanced Security Options",cs:"Rozšířené možnosti zabezpečení",sk:"Rozšírené možnosti zabezpečenia",uk:"Розширені можливості забезпечення",
es:"Opciones de seguridad avanzadas"},help:{
en:"This page allows you to set up and manage additional authentication methods providing better protection of your identity and allowing you to access applications requiring higher level of security.",
cs:"Tato stránka vám umožňuje nastavit a spravovat další možnosti ověřování, které vám poskytnou lepší ochranu vaší identity a umožní vám přístup k aplikacím požadujícím vyšší úroveň zabezpečení.",
sk:"Táto stránka vám umožňuje nastaviť a spravovať ďalšie možnosti overovania, ktoré vám poskytnú lepšiu ochranu vašej identity a umožnia vám prístup k aplikáciám vyžadujúcim vyššiu úroveň zabezpečenia.",
uk:"Ця сторінка дозволяє вам налаштувати і адмініструвати інші можливості автентифікації, які забезпечать вам кращий захист вашої особи і нададуть вам доступ до програм, що вимагають вищого рівня забезпечення.",
es:"Esta página le permite configurar y gestionar opciones de autenticación adicionales para una mejor protección de su identidad y le permite el acceso a las aplicaciones que requieren un mayor nivel de seguridad."
},warning:{
en:'<uu5string/>In order to be able to use additional authentication methods, you first need to secure your account by access codes. You may do so by following <UU5.Bricks.Link target="_self" href="{0}">this link</UU5.Bricks.Link>.',
cs:'<uu5string/>Abyste mohli nastavit další možnosti ověřování, musíte nejprve zabezpečit svůj účet přístupovými kódy. Můžete tak učinit kliknutím na <UU5.Bricks.Link target="_self" href="{0}">tento odkaz</UU5.Bricks.Link>.',
sk:'<uu5string/>Aby ste mohli nastaviť ďalšie možnosti overovania, musíte najprv zabezpečiť svoj účet prístupovými kódmi. Môžete tak urobiť kliknutím na <UU5.Bricks.Link target="_self" href="{0}">tento odkaz</UU5.Bricks.Link>.',
uk:'<uu5string/>Щоб можна було налаштувати інші можливості автентифікації, необхідно спочатку забезпечити свій обліковий запис кодами для доступу. Це можна зробити, якщо натиснути на <UU5.Bricks.Link target="_self" href="{0}">наступне посилання</UU5.Bricks.Link>.',
es:'<uu5string/>Para configurar opciones de autenticación adicionales, primero debe asegurar su cuenta con códigos de acceso. Puede hacerlo haciendo clic en <UU5.Bricks.Link target="_self" href="{0}">en este enlace</UU5.Bricks.Link>.'
}},backupCodesSection:{header:{en:"Backup codes",cs:"Záložní kódy",sk:"Záložné kódy",uk:"Резервні коди",es:"Códigos de respaldo",sv:"Koder för säkerhetskopiering"},help:{
en:"This section allows you to generate backup verification codes which can be used for additional verification if you are not able to use an authentication application or can't receive a verification code via text message.",
cs:"Tato část umožňuje vygenerovat záložní ověřovací kódy, které vám umožní dodatečné ověření v případě, že nemůžete použít autentizační aplikaci anebo potvrzovací kód z SMS.",
sk:"Táto časť umožňuje vygenerovať záložné overovacie kódy, ktoré vám umožnia dodatočné overenie v prípade, že nemôžete použiť autentizačnú aplikáciu alebo potvrdzovací kód z SMS.",
uk:"Цей розділ дозволяє створювати резервні коди автентифікації, які дозволяють проводити додаткову перевірку в разі, якщо ви не можете використовувати додаток для аутентифікації або код підтвердження з SMS.",
es:"Esta sección le permite generar códigos de autenticación de respaldo para proporcionar una autenticación adicional en caso de que no pueda utilizar la aplicación de autenticación o el código de confirmación por SMS."
},codeLabel:{en:"Code",cs:"Kód",sk:"Kód",uk:"Код",es:"Código",sv:"Kod"},connectedLabel:{cs:"Připojeno",en:"Connected",sk:"Pripojené",uk:"Підключено",es:"Conectado",sv:"Ansluten"},
lastVerificationLabel:{cs:"Poslední ověření",en:"Last verification",sk:"Posledné overenie",uk:"Остання автентифікація",es:"Última verificación",sv:"Sista verifiering"},enableButton:{en:"Enable",
cs:"Přidat",uk:"Додати",es:"Añadir"},deleteButton:{cs:"Odstranit",en:"Delete",sk:"Odstrániť",uk:"Видалити",es:"Eliminar",sv:"Ta bort"},deleteLabel:{cs:"Odstranit",en:"Delete",sk:"Odstrániť",
uk:"Видалити",es:"Eliminar",sv:"Ta bort"},authorizationHeader:{cs:"Oprávnění",en:"Authorization",sk:"Oprávnenie",uk:"Дозвіл",es:"Autorización",sv:"Auktorisering"},confirmationHeader:{
en:"Confirmation",cs:"Potvrzení",sk:"Potvrdenie",uk:"Підтвердження",es:"Confirmación"},backupCodesHeader:{cs:"Záložní kódy",en:"Backup codes",sk:"Záložné kódy",uk:"Резервні коди",
es:"Códigos de respaldo",sv:"Koder för säkerhetskopiering"},renewBackupCodesHeader:{cs:"Obnovit konfiguraci",sk:"Obnoviť konfiguráciu",en:"Renew configuration",uk:"Відновити конфігурацію",
es:"Restaurar la configuración"},createBackupCodesHeader:{cs:"Vygenerujte záložní kódy",en:"Generate backup codes",sk:"Vygenerujte záložné kódy",uk:"Генерувати резервні коди",
es:"Genera códigos de respaldo",sv:"Generera säkerhetskopieringskoder"},deleteBackupCodesHeader:{en:"Remove backup codes",cs:"Odeberte záložní kódy",sk:"Odoberte záložné kódy",
uk:"Видалити резервні коди",es:"Elimine códigos de respaldo"},enableLabel:{en:"Enable",cs:"Zapnout",sk:"Zapnúť",uk:"Увімкнути",es:"Activar"},renewLabel:{cs:"Obnovit",sk:"Obnoviť",en:"Renew",
uk:"Відновити",es:"Restaurar"},revealBackupCodesHeader:{cs:"Zobrazit záložní kódy",en:"Show backup codes",sk:"Zobraziť záložné kódy",uk:"Показати резервні коди",es:"Mostrar códigos de respaldo",
sv:"Visa koder för säkerhetskopiering"},revealLabel:{cs:"Zobrazit",en:"Show",sk:"Zobraziť",uk:"Показати",es:"Mostrar",sv:"Visa"},cancelButton:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",
es:"Cancelar",sv:"Avbryt"},renewButton:{en:"Renew",cs:"Obnovit",sk:"Obnoviť",uk:"Відновити",es:"Restaurar"},copyButton:{cs:"Kopírovat",sk:"Kopírovať",en:"Copy",uk:"Копіювати",es:"Copiar"},
printButton:{cs:"Vytisknout",sk:"Vytlačiť",en:"Print",uk:"Роздрукувати",es:"Imprimir"},copyMessage:{cs:"Záložní kódy byly zkopírovány do schránky",sk:"Záložné kódy boli skopírované do schránky",
en:"Backup codes copied to clipboard",uk:"Резервні коди були скопійовані в буфер обміну",es:"Los códigos de respaldo se han copiado en el portapapeles"},closeButton:{cs:"Zavřít",en:"Close",
sk:"Zavrieť",uk:"Закрити",es:"Cerca",sv:"Stäng"},nextButton:{cs:"Další",en:"Next",sk:"Ďalšie",uk:"Далі",es:"Próximo",sv:"Nästa"},backupCodesPdfHeader:{
en:"Save backup codes to always have access to your account",cs:"Uložte záložní kódy, abyste měli vždy přístup ke svému účtu",sk:"Uložte záložné kódy, aby ste mali vždy prístup k svojmu účtu",
uk:"Збережіть ваші резервні коди, щоб завжди мати доступ до вашого облікового запису",es:"Guarde los códigos de respaldo para tener siempre acceso a su cuenta"},backupCodesPdfDesc:{
en:"Backup codes are one-time access codes that allow you to log in to your account when you can't use an authentication application or can't receive a verification text message. Each code can only be used once.",
cs:"Záložní kódy jsou jednorázové přístupové kódy, které vám umožňují přihlásit se ke svému účtu, když nemůžete použít autentizační aplikaci anebo potvrzovací kód z SMS. Každý kód lze použít pouze jednou.",
sk:"Záložné kódy sú jednorázové prístupové kódy, ktoré vám umožňujú prihlásiť sa k svojmu účtu, keď nemôžete použiť autentizačnú aplikáciu alebo potvrdzovací kód z SMS. Každý kód sa dá použiť iba raz",
uk:"Резервні коди - це одноразові коди доступу, які дозволяють вам увійти в свій обліковий запис, коли ви не можете використовувати додаток для аутентифікації або код підтвердження з SMS. Кожним кодом можна скористатися тільки один раз.",
es:"Los códigos de respaldo son códigos de acceso de un solo uso que le permiten acceder a su cuenta cuando no puede utilizar la aplicación de autenticación o el código de confirmación por SMS. Cada código sólo se puede utilizar una vez."
},createBackupCodes:{verificationHeader:{cs:"Ověření",en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},authorizationInfo:{
cs:"Chcete-li pokračovat, nejprve ověřte, že jste to vy. Zadejte přístupový kód 1 a 2.",en:"To continue, first verify that it's you. Please enter access code 1 and 2.",
sk:"Ak chcete pokračovať, najskôr overte, či ste to vy. Zadajte prístupový kód 1 a 2.",uk:"Якщо бажаєте продовжити, спочатку підтвердіть, що це ви. Введіть код для доступу 1 і 2.",
es:"Para continuar, primero verifique que sea usted. Ingrese el código de acceso 1 y 2.",sv:"För att fortsätta, kontrollera först att det är du. Ange lösenord 1 och 2."},backupCodesInfo:{
cs:"Tyto záložní ověřovací kódy vám umožní přihlášení v případě, že nemůžete použít autentizační aplikaci anebo potvrzovací kód z SMS.",
sk:"Tieto záložné overovacie kódy vám umožnia prihlásenie v prípade, že nemôžete použiť autentizačnú aplikáciu alebo potvrdzovací kód z SMS.",
en:"These verification codes can be used to log in if you can't use an authentication application or can't receive a verification text message.",
uk:"Ці резервні коди автентифікації дозволять вам увійти в систему, якщо ви не можете використовувати додаток для аутентифікації або код підтвердження з SMS.",
es:"Estos códigos de autenticación de respaldo le permiten iniciar sesión en caso de que no pueda utilizar la aplicación de autenticación o el código de confirmación por SMS."},confirmationText:{
en:"You are about to show details to configure two-step verification with backup codes.",cs:"Chystáte se zobrazit podrobnosti konfigurace dvoustupňového ověření se záložními kódy.",
sk:"Chystáte sa zobraziť podrobnosti konfigurácie dvojstupňového overenia so záložnými kódmi.",
uk:"Ви збираєтеся переглянути детальну інформацію про конфігурацію двоетапної перевірки з резервними кодами.",
es:"Está a punto de ver los detalles de configuración de la autenticación de dos factores con códigos de respaldo."},finalConfirmationText:{
en:"Do you really want to enable two-step verification with backup codes? If so, click the Enable button.",
cs:"Opravdu chcete povolit dvoufázové ověření pomocí záložních kódů? Pokud ano, klikněte na tlačítko Zapnout.",
sk:"Naozaj chete povoliť dvojfázové overenie pomocou záložných kódov? Ak áno, kliknite na tlačidlo Zapnúť",
uk:"Ви дійсно бажаєте дозволити двоетапну перевірку за допомогою резервних кодів? Якщо так, натисніть кнопку Увімкнути.",
es:"¿Está seguro de que quiere habilitar la autenticación de dos factores mediante códigos de respaldo? Si es así, haga clic en el botón Activar."}},revealBackupCodes:{verificationHeader:{
cs:"Ověření",en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},authorizationInfo:{
cs:"Chcete-li pokračovat, nejprve ověřte, že jste to vy. Zadejte přístupový kód 1 a 2.",en:"To continue, first verify that it's you. Please enter access code 1 and 2.",
sk:"Ak chcete pokračovať, najskôr overte, či ste to vy. Zadajte prístupový kód 1 a 2.",uk:"Якщо бажаєте продовжити, спочатку підтвердіть, що це ви. Введіть код для доступу 1 і 2.",
es:"Para continuar, primero verifique su identidad. Introduzca el código de acceso 1 y 2.",sv:"För att fortsätta, kontrollera först att det är du. Ange lösenord 1 och 2."},backupCodesInfo:{
cs:"Tyto záložní ověřovací kódy vám umožní přihlášení v případě, že nemůžete použít autentizační aplikaci anebo potvrzovací kód z SMS.",
sk:"Tieto záložné overovacie kódy vám umožnia prihlásenie v prípade, že nemôžete použiť autentizačnú aplikáciu alebo potvrdzovací kód z SMS.",
en:"These verification codes can be used to log in if you can't use an authentication application or can't receive a verification text message.",
uk:"Ці резервні коди автентифікації дозволять вам увійти в систему, якщо ви не можете використовувати додаток для аутентифікації або код підтвердження з SMS.",
es:"Estos códigos de autenticación de respaldo le permiten iniciar sesión en caso de que no pueda utilizar la aplicación de autenticación o el código de confirmación por SMS."},confirmationText:{
cs:"Chystáte se zobrazit detaily konfigurace pro ověření pomocí záložních kódů.",sk:"Chystáte sa zobraziť detaily konfigurácie pre overenie pomocou záložných kódov.",
en:"You are about to show details to configure two-step verification with backup codes.",uk:"Ви збираєтесь переглянути подробиці конфігурації автентифікації за допомогою резервних кодів.",
es:"Está a punto de ver los detalles de la configuración para la verificación mediante códigos de respaldo."},finalConfirmationText:{
cs:"Chcete opravdu přidat možnost dvoufázového ověření pomocí záložních kódů? Pokud ano, klikněte na tlačítko Přidat.",
sk:"Chcete naozaj pridať možnosť dvojfázového overenia pomocou záložných kódov? Pokud ano, klikněte na tlačítko Přidat.",
en:"Do you really want to enable two-step verification with backup codes? If so, click the Enable button.",
uk:"Ви дійсно хочете додати можливість двоетапної перевірки з використанням резервних кодів? Якщо так, натисніть на кнопку Додати.",
es:"¿Está seguro de que quiere añadir la opción de autenticación de dos factores mediante códigos de respaldo? Si es así, haga clic en el botón Añadir."}},renewBackupCodes:{verificationHeader:{
cs:"Ověření",en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},confirmationText:{
cs:"Chystáte se vygenerovat novou konfiguraci pro dvoufázové ověření pomocí záložních kódů.",sk:"Chystáte sa vygenerovať novú konfiguráciu pre dvojfázové overenie pomocou záložných kódov.",
en:"You are about to generate new configuration for two-step verification with backup codes.",uk:"Ви збираєтеся створити нову конфігурацію для двоетапної перевірки з використанням резервних кодів.",
es:"Está a punto de generar una nueva configuración para la autenticación de dos factores mediante códigos de respaldo."},finalConfirmationText:{
cs:"Chcete opravdu vygenerovat novou konfiguraci pro dvoufázové ověření pomocí záložních kódů? Původní konfigurace již nebude funkční. Pokud ano, klikněte na tlačítko Obnovit.",
sk:"Chcete naozaj vygenerovať novú konfiguráciu pre dvojfázové overenie pomocou záložných kódov? Pôvodná konfigurácia už nebude funkčná. Ak áno, kliknite na tlačidlo Obnoviť.",
en:"Do you really want to generate a new configuration for two-step verification with backup codes? Original configuration will no longer be valid. If so, click the Renew button.",
uk:"Ви дійсно хочете створити нову конфігурацію для двоетапної перевірки з використанням резервних кодів? Вихідна конфігурація більше не буде працювати. Якщо це так, натисніть кнопку Відновити.",
es:"¿Está seguro de que quiere generar una nueva configuración para la autenticación de dos factores mediante códigos de respaldo? La configuración original ya no será funcional. Si es así, haga clic en el botón Restaurar."
},backupCodesInfo:{cs:"Tyto záložní ověřovací kódy vám umožní přihlášení v případě, že nemůžete použít autentizační aplikaci anebo potvrzovací kód z SMS.",
sk:"Tieto záložné overovacie kódy vám umožnia prihlásenie v prípade, že nemôžete použiť autentizačnú aplikáciu alebo potvrdzovací kód z SMS.",
en:"These verification codes can be used to log in if you can't use an authentication application or can't receive a verification text message.",
uk:"Ці резервні коди автентифікації дозволять вам увійти в систему, якщо ви не можете використовувати додаток для аутентифікації або код підтвердження з SMS.",
es:"Estos códigos de autenticación de respaldo le permiten iniciar sesión en caso de que no pueda utilizar la aplicación de autenticación o el código de confirmación por SMS."}},deleteBackupCodes:{
confirmationText:{cs:"Chystáte se odebrat možnost dvoufázového ověření pomocí záložních kódů.",sk:"Chystáte sa odobrať možnosť dvojfázového overenia pomocou záložných kódov.",
en:"You are about to remove two-step verification with backup codes.",uk:"Ви збираєтеся видалити можливість двоетапної перевірки з використанням резервних кодів.",
es:"Está a punto de eliminar la opción de autenticación de dos factores mediante códigos de respaldo."},finalConfirmationText:{
cs:"Chcete opravdu odebrat možnost dvoufázového ověření pomocí záložních kódů? Pokud ano, klikněte na tlačítko Odstranit.",
sk:"Chcete naozaj odobrať možnosť dvojfázového overenia pomocou záložných kódov? Pokud ano, klikněte na tlačítko Odstranit.",
en:"Do you really want to remove two-step verification with backup codes? If so, click the Delete button.",
uk:"Ви дійсно хочете виключити можливість двоетапної перевірки з використанням резервних кодів? Якщо це так, натисніть кнопку Видалити.",
es:"¿Está seguro de que quiere eliminar la opción de autenticación de dos factores mediante códigos de respaldo? Si es así, haga clic en el botón Eliminar."}},errors:{invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,verificationCodeNotValid:{en:"The provided verification code is not valid.",cs:"Poskytnutý ověřovací kód není platný.",
sk:"Poskytnutý overovací kód nie je platný.",uk:"Наданий код автентифікації недійсний.",es:"El código de autenticación introducido no es válido."},accessCodesNotValid:{
en:"The provided access codes are not valid.",cs:"Poskytnuté přístupové kódy nejsou platné.",sk:"Poskytnuté prístupové kódy nie sú platné.",uk:"Введені коди доступу недійсні.",
es:"Los códigos de acceso introducidos no son válidos."},mfaCredentialsNotFound:{en:"Credentials required for additional verification were not found.",
cs:"Pověření požadovaná pro další ověření nebyla nalezena.",sk:"Poverenia požadované pre ďalšie overenie neboli nájdené.",uk:"Повноваження, необхідні для подальшої перевірки, не знайдені.",
es:"No se han encontrado las credenciales requeridas para la autenticación adicional."}}},totpSection:{header:{en:"Authentication Application",cs:"Autentizační aplikace",sk:"Autentizačná aplikácia",
uk:"Програма автентифікації",es:"Aplicación de autenticación"},help:{
en:'<uu5string/>This section allows you to setup authenticator application providing verification codes, such as <UU5.Bricks.Link target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</UU5.Bricks.Link> or Google Authenticator (available for <UU5.Bricks.Link target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">Android</UU5.Bricks.Link> or <UU5.Bricks.Link target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</UU5.Bricks.Link>).',
cs:'<uu5string/>Tato sekce vám umožní nastavit autentizační aplikaci poskytující ověřovací kódy, jako je například <UU5.Bricks.Link target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</UU5.Bricks.Link>, či Google Authenticator (dostupný pro <UU5.Bricks.Link target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">Android</UU5.Bricks.Link> a <UU5.Bricks.Link target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</UU5.Bricks.Link>).',
sk:'<uu5string/>Táto sekcia vám umožní nastaviť autentizačnú aplikáciu poskytujúcu overovacie kódy, ako je napríklad <UU5.Bricks.Link target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</UU5.Bricks.Link>, či Google Authenticator (dostupný pro <UU5.Bricks.Link target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">Android</UU5.Bricks.Link> a <UU5.Bricks.Link target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</UU5.Bricks.Link>).',
uk:'<uu5string/>У цьому розділі ви можете налаштувати програму автентифікації, яка надає коди автентифікації, такі як <UU5.Bricks.Link target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</UU5.Bricks.Link>, або Google Authenticator (доступне для <UU5.Bricks.Link target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">Android</UU5.Bricks.Link> a <UU5.Bricks.Link target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</UU5.Bricks.Link>).',
es:'<uu5string/>Esta sección permite configurar una aplicación de autenticación que proporciona códigos de autenticación, como, por ejemplo, <UU5.Bricks.Link target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</UU5.Bricks.Link>, o Google Authenticator (disponible para <U5.Bricks.Link target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">Android</UU5.Bricks.Link> y <U5.Bricks.Link target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</U5.Bricks.Link>).'
},deviceLabel:{en:"Device",cs:"Zařízení",sk:"Zariadenie",uk:"Пристрій",es:"Equipo"},actionLabel:{en:""},connectedLabel:{cs:"Připojeno",en:"Connected",sk:"Pripojené",uk:"Підключено",es:"Conectado",
sv:"Ansluten"},lastVerificationLabel:{cs:"Poslední ověření",en:"Last verification",sk:"Posledné overenie",uk:"Остання автентифікація",es:"Última verificación",sv:"Sista verifiering"},enableLabel:{
en:"Enable",cs:"Zapnout",sk:"Zapnúť",uk:"Увімкнути",es:"Activar"},revealLabel:{en:"QR Code",cs:"QR kód",sk:"QR kód",uk:"QR код",es:"Código QR"},cancelButton:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",
uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},enableButton:{en:"Enable",cs:"Přidat",sk:"Pridať",uk:"Додати",es:"Añadir"},nextButton:{cs:"Další",en:"Next",sk:"Ďalšie",uk:"Далі",es:"Próximo",sv:"Nästa"},
renewButton:{en:"Renew",cs:"Obnovit",sk:"Obnoviť",uk:"Відновити",es:"Restaurar"},deleteButton:{cs:"Odstranit",en:"Delete",sk:"Odstrániť",uk:"Видалити",es:"Eliminar",sv:"Ta bort"},closeButton:{
cs:"Zavřít",sk:"Zavrieť",en:"Close",uk:"Закрити",es:"Cerrar"},deleteLabel:{cs:"Odstranit",en:"Delete",sk:"Odstrániť",uk:"Видалити",es:"Eliminar",sv:"Ta bort"},renewLabel:{cs:"Obnovit",sk:"Obnoviť",
en:"Renew",uk:"Відновити",es:"Restaurar"},authorizationHeader:{cs:"Oprávnění",en:"Authorization",sk:"Oprávnenie",uk:"Дозвіл",es:"Autorización",sv:"Auktorisering"},qrCodeHeader:{en:"QR Code",
cs:"QR kód",sk:"QR kód",uk:"QR код",es:"Código QR"},addTotpHeader:{cs:"Přidat zařízení",sk:"Pridať zariadenie",en:"Add Device",uk:"Додати пристрій",es:"Añadir equipo"},revealTotpHeader:{
cs:"Zobrazit konfiguraci",sk:"Zobraziť konfiguráciu",en:"Show configuration",uk:"Показати конфігурацію",es:"Mostrar la configuración"},renewTotpHeader:{cs:"Obnovit konfiguraci",
sk:"Obnoviť konfiguráciu",en:"Renew configuration",uk:"Відновити конфігурацію",es:"Restaurar la configuración"},deleteTotpHeader:{en:"Remove device",cs:"Odebrat zařízení",sk:"Odobrať zariadenie",
uk:"Видалити пристрій",es:"Eliminar el equipo"},confirmationHeader:{en:"Confirmation",cs:"Potvrzení",sk:"Potvrdenie",uk:"Підтвердження",es:"Confirmación"},addTotp:{verificationHeader:{cs:"Ověření",
en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},confirmationText:{cs:"Chystáte se přidat možnost dvoufázového ověření pomocí autentizační aplikace.",
sk:"Chystáte sa pridať možnosť dvojfázového overenia pomocou autentizačnej aplikácie.",en:"You are about to enable two-step verification with authentication application.",
uk:"Ви збираєтеся додати можливість двоетапної перевірки за допомогою програми для аутентифікації.",
es:"Está a punto de añadir la opción de autenticación de dos factores mediante una aplicación de autenticación."},finalConfirmationText:{
cs:"Chcete opravdu přidat možnost dvoufázového ověření pomocí autentizační aplikace? Pokud ano, klikněte na tlačítko Přidat.",
sk:"Chcete naozaj pridať možnosť dvojfázového overenia pomocou autentizačnej aplikácie? Ak áno, kliknite na tlačidlo Pridať.",
en:"Do you really want to enable two-step verification with authentication application? If so, click the Enable button.",
uk:"Ви дійсно хочете додати можливість двоетапної перевірки за допомогою програми для аутентифікації? Якщо так, натисніть на кнопку Додати.",
es:"¿Está seguro de que quiere añadir la opción de autenticación de dos factores mediante una aplicación de autenticación? Si es así, haga clic en el botón Añadir."},qrCodeInfo:{
cs:"Naskenujte tento QR kód v autentizační aplikaci.",sk:"Naskenujte tento QR kód v autentizačnej aplikácii.",en:"Scan this QR code in your authentication application.",
uk:"Відскануйте цей QR-код у програмі для аутентифікації.",es:"Escanee este código QR en una aplicación de autenticación."}},revealTotp:{verificationHeader:{cs:"Ověření",en:"Verification",
sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},confirmationText:{cs:"Chystáte se zobrazit detaily konfigurace pro ověření pomocí autentizační aplikace.",
sk:"Chystáte sa zobraziť detaily konfigurácie pre overenie pomocou autentizačnej aplikácie.",en:"You are about to show details to configure two-step verification with authentication application.",
uk:"Ви збираєтеся переглянути подробиці конфігурації автентифікації за допомогою програми автентифікації.",
es:"Está a punto de ver los detalles de la configuración para la verificación mediante una aplicación de autenticación."},qrCodeInfo:{cs:"QR kód pro konfiguraci autentizační aplikace.",
sk:"QR kód pre konfiguráciu autentizačnej aplikácie.",en:"QR code for configuration of authenticator application.",uk:"QR-код для конфігурації програми автентифікації.",
es:"Código QR para configurar una aplicación de autenticación."}},renewTotp:{verificationHeader:{cs:"Ověření",en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},
confirmationText:{cs:"Chystáte se vygenerovat novou konfiguraci pro dvoufázové ověření pomocí autentizační aplikace.",
sk:"Chystáte sa vygenerovať novú konfiguráciu pre dvojfázové overenie pomocou autentizačnej aplikácie.",
en:"You are about to generate new configuration for two-step verification with authentication application.",
uk:"Ви збираєтеся створити нову конфігурацію для двоетапної перевірки за допомогою програми автентифікації.",
es:"Está a punto de generar una nueva configuración para la autenticación de dos factores mediante una aplicación de autenticación."},finalConfirmationText:{
cs:"Chcete opravdu vygenerovat novou konfiguraci pro dvoufázové ověření pomocí autentizační aplikace? Původní konfigurace již nebude funkční. Pokud ano, klikněte na tlačítko Obnovit.",
sk:"Chcete naozaj vygenerovať novú konfiguráciu pre dvojfázové overenie pomocou autentizačnej aplikácie? Pôvodná konfigurácia už nebude funkčná. Ak áno, kliknite na tlačidlo Obnoviť.",
en:"Do you really want to generate new configuration for two-step verification with authentication application? Original configuration will no longer be valid. If so, click the Renew button.",
uk:"Ви дійсно хочете створити нову конфігурацію для двоетапної перевірки за допомогою програми аутентифікації? Вихідна конфігурація більше не буде працювати. Якщо це так, натисніть кнопку Відновити.",
es:"¿Está seguro de que quiere generar una nueva configuración para la autenticación de dos factores mediante una aplicación de autenticación? La configuración original ya no será funcional. Si es así, haga clic en el botón Restaurar."
},qrCodeInfo:{cs:"Naskenujte tento QR kód v autentizační aplikaci.",sk:"Naskenujte tento QR kód v autentizačnej aplikácii.",en:"Scan this QR code in your authentication application.",
uk:"Відскануйте цей QR-код у програмі для аутентифікації.",es:"Escanee este código QR en una aplicación de autenticación."}},deleteTotp:{confirmationText:{
cs:"Chystáte se odebrat možnost dvoufázového ověření pomocí autentizační aplikace.",sk:"Chystáte sa odobrať možnosť dvojfázového overenia pomocou autentizačnej aplikácie.",
en:"You are about to remove two-step verification with authentication application.",uk:"Ви збираєтеся видалити можливість двоетапної автентифікації за допомогою програми автентифікації.",
es:"Está a punto de eliminar la opción de autenticación de dos factores mediante una aplicación de autenticación."},finalConfirmationText:{
cs:"Chcete opravdu odebrat možnost dvoufázového ověření pomocí autentizační aplikace? Pokud ano, klikněte na tlačítko Odstranit.",
sk:"Chcete naozaj odobrať možnosť dvojfázového overenia pomocou autentizačnej aplikácie? Ak áno, kliknite na tlačidlo Odstrániť.",
en:"Do you really want to remove two-step verification with authentication application? If so, click the Delete button.",
uk:"Ви дійсно хочете виключити можливість двоетапної перевірки за допомогою програми автентифікації? Якщо це так, натисніть кнопку Видалити.",
es:"¿Está seguro de que quiere eliminar la opción de autenticación de dos factores mediante una aplicación de autenticación? Si es así, haga clic en el botón Eliminar."}},errors:{
invalidDtoIn:a.invalidDtoIn,unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,accessCodesVerificationFailed:{cs:"Ověření přístupových kódů se nezdařilo.",
en:"Verification of access codes failed.",sk:"Overenie prístupových kódov zlyhalo.",uk:"Перевірка кодів для доступу не вдалася.",es:"Ha fallado la verificación de los códigos de acceso.",
sv:"Verifiering av lösenorden misslyckades."},cannotDeleteLastCredentials:{
en:"You cannot remove the last two-step verification method because you enabled the usage of additional verification with every login.",
cs:"Nelze odebrat poslední způsob dvoufázového ověřování, protože máte zapnuté vyžadování dodatečného ověřování s každým přihlášením.",
sk:"Nedá sa odobrať posledný spôsob dvojfázového overovania, pretože máte zapnuté vyžadovanie dodatočného overenia s každým prihlásením.",
uk:"Неможливо видалити останній двоетапний метод перевірки, оскільки у вас увімкнено опцію вимагати додаткової перевірки автентичності при кожному вході в систему.",
es:"No puede eliminar el último método de autenticación de dos factores porque ha activado la exigencia de autenticación adicional en cada inicio de sesión."}}},phoneSection:{header:{
en:"Associated Phone Numbers",cs:"Připojená telefonní čísla",sk:"Pripojené telefónne čísla",uk:"Приєднані номери телефонів",es:"Números de teléfono conectados"},help:{
en:"This overview lists the phone numbers that are connected to your Plus4U account. To connect a new phone number click on the Connect button in the appropriate row. To disconnect a phone, click the trash icon in the row of the selected phone.",
cs:"Tento přehled uvádí telefonní čísla, která jsou připojena k vašemu účtu Plus4U. Pro připojení nového telefonního čísla, klikněte v příslušném řádku na tlačítko Připojit. Pro odpojení telefonu, klikněte na ikonu odpadkového koše v řádku vybraného telefonu.",
sk:"Tento prehľad uvádza telefónne čísla, ktoré sú pripojené k vášmu účtu Plus4U. Pre pripojenie nového telefónneho čísla, kliknite v príslušnom riadku na tlačidlo Pripojiť. Pre odpojenie telefónu, kliknite na ikonu odpadkového koša v riadku vybraného telefónu.",
uk:"У цьому переліку наведено номери телефонів, які приєднані до вашого облікового запису Plus4U. Щоб приєднати новий номер телефону, натисніть на кнопку Підключити у відповідному рядку. Для від’єднання телефону натисніть на значок кошика в рядку обраного телефону.",
es:"Esta lista muestra los números de teléfono que están conectados a su cuenta Plus4U. Para conectar un nuevo número de teléfono, haga clic en el botón Conectar en la línea correspondiente. Para desconectar el teléfono, haga clic en el icono de la papelera en la línea del teléfono seleccionado."
},typeLabel:{en:"Phone",cs:"Telefon",sk:"Telefón",uk:"Телефон",es:"Teléfono"},numberLabel:{cs:"Číslo",en:"Number",sk:"Číslo",uk:"Номер",es:"Número",sv:"Antal"},connectLabel:{cs:"Připojit",
en:"Connect",sk:"Pripojiť",uk:"Підключити",es:"Conectar",sv:"Anslut"},activateLabel:{cs:"Aktivovat",en:"Activate",sk:"Aktivovať",uk:"Активувати",es:"Activar",sv:"Aktivera"},deleteLabel:{
cs:"Odstranit",en:"Delete",sk:"Odstrániť",uk:"Видалити",es:"Eliminar",sv:"Ta bort"},connectedLabel:{cs:"Připojeno",en:"Connected",sk:"Pripojené",uk:"Підключено",es:"Conectado",sv:"Ansluten"},
lastVerificationLabel:{cs:"Poslední ověření",en:"Last Verification",sk:"Posledné overenie",uk:"Остання автентифікація",es:"Última verificación",sv:"Senaste verifiering"},addButton:{cs:"Přidat",
en:"Add",sk:"Pridať",uk:"Додати",es:"Añadir",sv:"Lägg till"},cancelButton:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},nextButton:{cs:"Další",en:"Next",sk:"Ďalšie",
uk:"Далі",es:"Próximo",sv:"Nästa"},finishButton:{cs:"Dokončit",sk:"Dokončiť",en:"Finish",uk:"Завершити",es:"Finalizar"},deleteButton:{cs:"Odstranit",en:"Delete",sk:"Odstrániť",uk:"Видалити",
es:"Eliminar",sv:"Ta bort"},addPhoneNumberHeader:{cs:"Přidat telefonní číslo",en:"Add phone number",sk:"Pridať telefón",uk:"Додати номер телефону",es:"Añadir número de teléfono",
sv:"Lägg till telefonnummer"},deletePhoneNumberHeader:{en:"Remove phone",cs:"Odebrat telefon",sk:"Odobrať telefón",uk:"Видалити телефон",es:"Eliminar teléfono"},resendCodeSuccessMessage:{
cs:"Kód byl úspěšně odeslán.",en:"Code was successfully sent.",sk:"Kód bol úspešne odoslaný.",uk:"Код було успішно відправлено.",es:"El código se ha enviado con éxito.",
sv:"Koden skickades framgångsrikt."},authorizationHeader:{cs:"Oprávnění",en:"Authorization",sk:"Povolenie",uk:"Дозвіл",es:"Autorización",sv:"Auktorisering"},confirmationHeader:{en:"Confirmation",
cs:"Potvrzení",sk:"Potvrdenie",uk:"Підтвердження",es:"Confirmación"},addPhone:{numberHeader:{cs:"Číslo",en:"Number",sk:"Číslo",uk:"Номер",es:"Número",sv:"Antal"},verificationHeader:{cs:"Ověření",
en:"Verification",sk:"Overenie",uk:"Автентифікація",es:"Verificación",sv:"Verifiering"},confirmationText:{cs:"Chystáte se připojit nové telefonní číslo, které bude použito pro dvoufázové ověření.",
sk:"Chystáte sa pripojiť nové telefónne číslo, ktoré bude použité pre dvojfázové overenie.",en:"You are about to add new phone number to be used for two-step verification.",
uk:"Ви збираєтеся підключити новий номер телефону, який буде використовуватися для двоетапної перевірки.",
es:"Está a punto de conectar un nuevo número de teléfono que se utilizará para la autenticación de dos factores."},numberInfo:{
cs:"Zadejte telefonní číslo, které bude použito pro dvoufázové ověření. Toto číslo uvidíte ve svém profilu pouze vy.",
sk:"Zadajte telefónne číslo, ktoré bude použité pre dvojfázové overenie. Toto číslo uvidíte vo svojom profile iba vy.",
en:"Please enter a phone number which will be used for two-step verification. Only you will see this number in your profile.",
uk:"Введіть номер телефону, який буде використовуватися для двоетапної перевірки. Цей номер побачите у своєму профілі тільки ви.",
es:"Introduzca el número de teléfono que se utilizará para la autenticación de dos factores. Este número sólo será visible en su perfil. "},phoneNumberLabel:{cs:"Telefonní číslo",en:"Phone Number",
sk:"Telefónne číslo",uk:"Номер телефону",es:"Número de teléfono",sv:"Telefonnummer"},phoneNumberPatternMessage:{
cs:"<uu5string/>Zadejte telefonní číslo ve formátu: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",en:"<uu5string/>Please enter a phone number in the format: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",
sk:"<uu5string/>Zadajte telefónne číslo vo formáte: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",uk:"<uu5string/>Введіть номер телефону у форматі: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",
es:"<uu5string/>Introduzca un número de teléfono en el siguiente formato: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",
sv:"<uu5string/>Ange ett telefonnummer i formatet: <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>."},phoneNumberPlaceholder:{cs:"+(420) XXX XXX XXX",en:"+(XXX) XX XXXX XXXX",sk:"+(421) XX XXXX XXXX",
uk:"+(380) XX XXX XX XX",es:"+(34) XX XXX XXX",sv:"+(46) XX XXXX XXXX"},verificationDesc:{cs:"Zadejte ověřovací kód, který byl právě odeslán na vaše telefonní číslo prostřednictvím SMS.",
en:"Please enter a verification code which was just sent to your phone number via SMS.",sk:"Zadajte verifikačný kód, ktorý bol práve odoslaný na vaše telefónne číslo prostredníctvom SMS.",
uk:"Введіть код автентифікації, який тільки що був відправлений на ваш номер телефону як SMS.",es:"Introduzca el código de autenticación que acaba de enviarse a su número de teléfono por SMS.",
sv:"Ange en verifieringskod som just skickades till ditt telefonnummer via SMS.."},smsVerificationCodeLabel:{cs:"Ověřovací kód",sk:"Overovací kód",en:"Verification code",uk:"Код автентифікації",
es:"Código de autenticación"},resendCodeLink:{en:"Resend verification code.",cs:"Znovu odeslat ověřovací kód.",sk:"Znovu odoslať overovací kód.",uk:"Знову надіслати код автентифікації.",
es:"Reenviar el código de autenticación."},smsCodePatternMessage:{cs:"Zadejte prosím platný ověřovací kód.",sk:"Zadajte prosím platný overovací kód.",en:"Please enter a valid verification code.",
uk:"Введіть, будь ласка, дійсний код автентифікації.",es:"Por favor, introduzca un código de autenticación válido."},errors:{duplicateCredentials:{en:"This phone number is already registered.",
cs:"Toto telefonní číslo je již registrováno.",sk:"Toto telefónne číslo je už registrované.",uk:"Цей номер телефону вже зареєстрований.",es:"Este número de teléfono ya está registrado."},
invalidVerificationCode:{en:"An incorrect verification code was entered.",cs:"Byl zadán chybný ověřovací kód.",sk:"Bol zadaný chybný overovací kód.",uk:"Введено неправильний код автентифікації.",
es:"Se ha introducido un código de autenticación incorrecto."},unexpectedError:a.unexpectedError}},deletePhone:{confirmationText:{
cs:"<uu5string/>Chystáte se odebrat telefonní číslo <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",sk:"<uu5string/>Chystáte sa odobrať telefónne číslo <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",
en:"<uu5string/>You are about to remove the phone number <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",uk:"<uu5string/>Ви збираєтесь видалити номер телефону <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>.",
es:"<uu5string/>Está a punto de eliminar el número de teléfono <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>."},finalConfirmationText:{
cs:"<uu5string/>Chcete opravdu odebrat telefonní číslo <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>? Pokud ano, klikněte na tlačítko Odstranit.",
sk:"<uu5string/>Chcete naozaj odobrať telefónne číslo <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>? Ak áno, kliknite na tlačidlo odstrániť.",
en:"<uu5string/>Do you really want to remove the phone number <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>? If so, click the Delete button.",
uk:"<uu5string/>Ви дійсно хочете видалити номер телефону <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>? Якщо це так, натисніть кнопку Видалити.",
es:"<uu5string/>¿Está seguro de que quiere eliminar el número de teléfono <UU5.Bricks.Strong>%s</UU5.Bricks.Strong>? Si es así, haga clic en el botón Eliminar."}},errors:{invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,accessCodesVerificationFailed:{cs:"Ověření přístupových kódů se nezdařilo.",en:"Verification of access codes failed.",
sk:"Overenie prístupových kódov zlyhalo.",uk:"Перевірка кодів для доступу не вдалася.",es:"Ha fallado la verificación de los códigos de acceso.",sv:"Verifiering av lösenorden misslyckades."},
credentialsVerificationFailed:{en:"Please enter a valid verification code.",cs:"Zadejte prosím platný ověřovací kód.",sk:"Zadajte platný SMS kód.",
uk:"Введіть, будь ласка, дійсний код автентифікації.",es:"Por favor, introduzca un código de autenticación válido.",sv:"Ange en giltig verifieringskod."},cannotDeleteLastCredentials:{
en:"It is not possible to delete last authentication method because Always Use Second-step verification is enabled.",
cs:"Nelze odebrat poslední autentizační metodu z důvodu zapnutého globálního použití dvoufázového ověřování.",
sk:"Nedá sa odobrať posledná autentizačná metóda, pretože je zapnuté globálne použitie dvojfázového overovania.",
uk:"Неможливо видалити останній метод автентифікації, оскільки увімкнено глобальну двоетапну автентифікацію.",
es:"No se puede eliminar el último método de autenticación porque el uso global de la autenticación de dos factores está activado."}}},forceSection:{header:{en:"Always Use Additional Verification",
cs:"Vždy použít dodatečné ověření",sk:"Vždy použiť dodatočné overenie",uk:"Завжди використовувати додаткову автентифікацію",es:"Utilice siempre una autenticación adicional"},help:{
en:"By enabling this option you will be asked for two-step verification with every login.",cs:"Povolením této možnosti budete vždy požádáni o dvoufázové ověření při každém přihlášení.",
sk:"Povolením tejto možnosti budete vždy požiadaní o dvojfázové overenie pri každom prihlásení.",
uk:"Включивши цю опцію, Ви завжди будете отримувати запит на двоетапну автентифікацію при кожному вході в систему.",
es:"Al activar esta opción, siempre se le pedirá la autenticación de dos factores cada vez que inicie sesión."},info:{
en:"You have only one two-step verification method configured. Before enabling this option, please consider adding at least one more method to be able to log in in the case your preferred method is not available.",
cs:"Máte nastavenu pouze jedno metodu dvoufázového ověřování. Před zapnutím této možnosti prosím zvažte přidání další metody, abyste se mohli přihlásit v případě, že vaše preferovaná metoda není dostupná.",
sk:"Máte nastavenú iba jednu metódu dvojfázového overovania. Pred zapnutím tejto možnosti prosím zvážte pridanie ďalšej metódy, aby ste sa mohli prihlásiť v prípade, že vaša preferovaná metóda nie je dostupná.",
uk:"У вас налаштований тільки один метод двоетапної автентифікації. Перш ніж включити цю опцію, будь ласка, подумайте про можливість додавання іншого методу, щоб ви могли увійти в систему, якщо ваш бажаний метод недоступний.",
es:"Sólo tiene configurado un método de autenticación de dos factores. Antes de activar esta opción, por favor, considere la posibilidad de añadir otro método para poder iniciar sesión en caso de que su método preferido no esté disponible."
},warning:{en:"You have only one two-step verification method configured. Please consider adding at least one more method to be able to log in in the case your preferred method is not available.",
cs:"Máte nastavenu pouze jedno metodu dvoufázového ověřování. Prosím zvažte přidání další metody, abyste se mohli přihlásit v případě, že vaše preferovaná metoda není dostupná.",
sk:"Máte nastavenú iba jednu metódu dvojfázového overovania. Prosím zvážte pridanie ďalšej metódy, aby ste sa mohli prihlásiť v prípade, že vaša preferovaná metóda nie je dostupná.",
uk:"У вас налаштований тільки один метод двоетапної автентифікації. Будь ласка, подумайте про можливість додавання іншого методу, щоб ви могли увійти в систему, якщо ваш бажаний метод недоступний.",
es:"Sólo tiene configurado un método de autenticación de dos factores. Por favor, considere la posibilidad de añadir otro método para poder iniciar sesión en caso de que su método preferido no esté disponible."
},checkbox:{en:"Always use two-step verification",cs:"Vždy použít dvoufázové ověření",sk:"Vždy použiť dvojfázové overenie",uk:"Завжди використовувати двоетапну автентифікацію",
es:"Utilizar siempre la autenticación de dos factores"},cancelButton:{cs:"Zrušit",en:"Cancel",sk:"Zrušiť",uk:"Скасувати",es:"Cancelar",sv:"Avbryt"},nextButton:{cs:"Další",en:"Next",sk:"Ďalšie",
uk:"Далі",es:"Próximo",sv:"Nästa"},confirmButton:{cs:"Potvrdit",sk:"Potvrdiť",en:"Confirm",uk:"Підтвердити",es:"Confirmar"},authorizationHeader:{cs:"Oprávnění",en:"Authorization",sk:"Oprávnenie",
uk:"Дозвіл",es:"Autorización",sv:"Auktorisering"},confirmationHeader:{en:"Confirmation",cs:"Potvrzení",sk:"Potvrdenie",uk:"Підтвердження",es:"Confirmación"},enable:{header:{
en:"Enable two-step verification with every login",cs:"Zapnout dvoufázové ověření s každým přihlášením",sk:"Zapnúť dvojfázové overenie s každým prihlásením",
uk:"Увімкнути двоетапну автентифікацію при кожному вході в систему",es:"Activar la autenticación de dos factores en cada inicio de sesión"},confirmationText:{
en:"You are about to enable two-step verification with every login.",cs:"Chystáte se zapnout použití dvoufázového ověření s každým přihlášením.",
sk:"Chystáte sa zapnúť použitie dvojfázového overenia s každým prihlásením.",uk:"Ви збираєтеся включити використання двоетапної автентифікації при кожному вході в систему.",
es:"Está a punto de activar el uso de la autenticación de dos factores en cada inicio de sesión."},finalConfirmationText:{
en:"Do you really want to enable two-step verification with every login? If so, click the Confirm button",
cs:"Opravdu chcete zapnout použití dvoufázového ověření s každým přihlášením? Pokud ano, klikněte na tlačítko Potvrdit.",
sk:"Naozaj chcete zapnúť použitie dvojfázového overenia s každým prihlásením? Ak áno, kliknite na tlačidlo Potvrdiť.",
uk:"Ви дійсно хочете включити використання двоетапної автентифікації при кожному вході в систему? Якщо так, натисніть на кнопку Підтвердити.",
es:"¿Está seguro de que quiere activar el uso de la autenticación de dos factores en cada inicio de sesión? Si es así, haga clic en el botón Confirmar."}},disable:{header:{
en:"Disable two-step verification with thery login",cs:"Vypnout dvoufázové ověření s každým přihlášením",sk:"Vypnúť dvojfázové overenie s každým prihlásením",
uk:"Вимкнути двоетапну перевірку при кожному вході в систему",es:"Desactivar la autenticación de dos factores en cada inicio de sesión"},confirmationText:{
en:"You are about to disable two-step verification with every login.",cs:"Chystáte se zrušit použití dvoufázového ověření s každým přihlášením.",
sk:"Chystáte sa zrušiť použitie dvojfázového overenia s každým prihlásením.",uk:"Ви збираєтеся вимкнути двоетапну автентифікацію при кожному вході в систему.",
es:"Está a punto de desactivar el uso de la autenticación de dos factores en cada inicio de sesión."},finalConfirmationText:{
en:"Do you really want to disable two-step verification with every login? If so, click the Confirm button",
cs:"Opravdu chcete zrušit použití dvoufázového ověření s každým přihlášením? Pokud ano, klikněte na tlačítko Potvrdit.",
sk:"Naozaj chcete zrušiť použitie dvojfázového overenia s každým prihlásením? Ak áno, kliknite na tlačidlo Potvrdiť.",
uk:"Ви дійсно хочете скасувати використання двоетапної автентифікації при кожному вході в систему? Якщо так, натисніть на кнопку Підтвердити.",
es:"¿Está seguro de que quiere desactivar el uso de la autenticación de dos factores en cada inicio de sesión? Si es así, haga clic en el botón Confirmar."}},errors:{invalidDtoIn:a.invalidDtoIn,
unexpectedError:a.unexpectedError,notAuthorized:a.notAuthorized,accessCodesVerificationFailed:{cs:"Ověření přístupových kódů se nezdařilo.",en:"Verification of access codes failed.",
sk:"Overenie prístupových kódov zlyhalo.",uk:"Перевірка кодів для доступу не вдалася.",es:"Ha fallado la verificación de los códigos de acceso.",sv:"Verifiering av lösenorden misslyckades."}}}}},t.a=r
},31:function(e,t,n){"use strict";e.exports=n(44)},33:function(e,t,n){"use strict";const o=n(28),i=n(42),a=new Date("foo");e.exports=class{static toString(e){return null==e?null:e.toString()}
static toNumber(e){if(null==e)return null;if("number"==typeof e)return e;if("string"==typeof e){if(/^[+-]?[\d]+(\.[\d]+)?([eE][+-]?[\d]+)?$/.test(e))return Number(e)
;throw new o(`No implicit conversion of "${e}" to number`)}throw new o(`No implicit conversion of "${typeof e}" to number`)}static toBoolean(e){if(null==e)return null;if("boolean"==typeof e)return e
;if("number"==typeof e)return 0!==e;if("string"==typeof e){if(/^(false|0)$/i.test(e))return!1;if(/^(true|1)$/i.test(e))return!0;throw new o(`No implicit conversion of "${e}" to boolean`)}
throw new o(`No implicit conversion of "${typeof e}" to boolean`)}static toTime(e){if(null==e)return null;if(e instanceof Date)return e;if("number"==typeof e)return new Date(e);if("string"==typeof e){
let t=new Date(e);if(t.toString()===a.toString())throw new o(`No implicit conversion of "${e}" to time`);return t}throw new o(`No implicit conversion of "${typeof e}" to time`)}static toClass(e,t){
if(null==e)return null;if("function"==typeof e)return e;if("string"==typeof e){if(null==t)throw new o("Parameter sourcePath is required to resolve class from string");return i.loadRealization(t,e,!1)}
return e.constructor}static toArray(e,t=null,n=null){let i=null;if(null==e)return null;switch(i=e instanceof Array?e:"string"==typeof e?e.split(/[ ]*,[ ]*/):[e],t){case null:case void 0:break
;case"string":i=i.map(e=>this.toString(e));break;case"number":i=i.map(e=>this.toNumber(e));break;case"boolean":i=i.map(e=>this.toBoolean(e));break;case"time":i=i.map(e=>this.toTime(e));break
;case"class":i=i.map(e=>this.toClass(e,n));break;default:throw new o(`Unknown conversion type "${t}"`)}return i}}},35:function(e,t){var n,o,i=e.exports={};function a(){
throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0)
;if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{
n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{o="function"==typeof clearTimeout?clearTimeout:r}catch(e){o=r}}();var c,u=[],d=!1,l=-1;function m(){d&&c&&(d=!1,
c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!d){var e=s(m);d=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,d=!1,function(e){
if(o===clearTimeout)return clearTimeout(e);if((o===r||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}
function h(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
;u.push(new h(e,t)),1!==u.length||d||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,
i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){
throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},37:function(e,t){
e.exports=__WEBPACK_EXTERNAL_MODULE__37__},38:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location")
;if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){
var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}))
;return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},39:function(e,t){
e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),
Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},4:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(6),r=function(){var e={clientId:{required:!0,
pass:!0},loginHint:{required:!1,pass:!0},realms:{required:!1,pass:!0},uuAppErrorMap:{required:!1,pass:!1},themeCode:{required:!1,pass:!0},invitationId:{required:!1,pass:!0}}
;return e[a.a.loginRegistrationParams.state]={required:!0,pass:!0},e},s={about:function(){return{}},home:function(){return{}},registration:function(){return r()},registrationEmail:function(){var e={
clientId:{required:!0,pass:!0},invitationId:{required:!1,pass:!0},id:{required:!0,pass:!1},origin:{required:!0,pass:!1},state:{required:!0,pass:!0}};return e},login:function(){return r()},
lostAccessCodes:function(){var e={clientId:{required:!0,pass:!0},invitationId:{required:!1,pass:!0},state:{required:!1,pass:!0}};return e},lostAccessCodesEmail:function(){return{clientId:{required:!0,
pass:!0},invitationId:{required:!1,pass:!0}}},confirmRegistration:function(){var e={clientId:{required:!0,pass:!0},invitationId:{required:!1,pass:!0},verificationCode:{required:!0,pass:!1},state:{
required:!0,pass:!0},id:{required:!0,pass:!0}};return e},setAccessCodes:function(){var e={clientId:{required:!0,pass:!0},invitationId:{required:!1,pass:!0},verificationCode:{required:!0,pass:!1},
state:{required:!1,pass:!0}};return e},administrationPortal:function(){return{}},changeAccessCodes:function(){return{accessCode:{required:!0,pass:!1}}},createIdentity:function(){return{}},
showIdentity:function(){return{uuIdentity:{required:!1,pass:!1}}},updateIdentity:function(){return{uuIdentity:{required:!1,pass:!1}}}},c={isRegistration:function(){
return i.a.Common.Url.parse().useCase===a.a.routes.registration},getParam:function(e){var t=i.a.Common.Tools.getUrlParam(e);return t?decodeURIComponent(t):t},getParams:function(e){var t={}
;return e.forEach((function(e){var n=c.getParam(e);n&&(t[e]=n)})),t},getParamsToPass:function(e,t){var n,o,i={};if(Object.keys(a.a.routes).forEach((function(i){
a.a.routes[i]===e?n=i:a.a.routes[i]===t&&(o=i)})),!n||!o)return{};var r=s[n]?s[n]():{},u=s[o]?s[o]():{};return Object.keys(u).forEach((function(e){r[e]&&r[e].pass&&(i[e]=c.getParam(e))})),i},
getLoginHint:function(){return c.getParam(a.a.loginRegistrationParams.loginHint)},getClientId:function(){return c.getParam(a.a.loginRegistrationParams.clientId)},getOidcState:function(){
return c.getParam(a.a.loginRegistrationParams.state)},getAcrValues:function(){return c.getParam(a.a.loginRegistrationParams.acrValues)},getTokenType:function(){
return c.getParam(a.a.showTokenParams.tokenType)},getValidLanguage:function(){var e=c.getParam(a.a.commonUrlParams.language);if(a.a.shownLanguages.includes(e))return e},
getLoginRegistrationParams:function(){var e={};return Object.values(a.a.loginRegistrationParams).forEach((function(t){var n=c.getParam(t);n&&(e[t]=n)})),e},getUuAppErrorMap:function(){
return c.getParam(a.a.loginRegistrationParams.uuAppErrorMap)},getAuthNRealmCode:function(){return c.getParam(a.a.loginRegistrationParams.realmCode)},getAuthNProvider:function(){
return c.getParam(a.a.loginRegistrationParams.authNProvider)},getThirdPartyRegistrationParams:function(e,t){var n={clientId:c.getClientId(),state:c.getOidcState()},o=c.getLoginHint()
;return o&&(n.loginHint=o),e&&(n.authNProvider=e),t&&(n.realmCode=t),n},getRecaptchaRenderURL:function(e){return i.a.Common.Url.parse(e.reCaptchaScriptUri).set({parameters:{render:e.reCaptchaSiteKey}
})},getRoleIfcUri:function(e){return a.a.sessFreePrefix+e.replace(a.a.urnIdentityPrefix,a.a.vphAccessRolePrefix)}};t.a=c},40:function(e,t,n){"use strict";(function(e,t){const o=n(70),i=n(71),a=n(26)
;if("undefined"==typeof window){n(72).ensureSingleVersion(e);var r=n(73),s=n(41),c=n(74)}class u{static registerImplicitSource(e){u.implicitSources.push(new o(e));let t=u.activeProfiles
;t&&t.length>0&&u.activateProfiles(...t)}static registerSource(e,t,n){let i=u.sources[e];i?i.push(new o(t,n)):u.sources[e]=[new o(t,n)];let a=u.activeProfiles;a.includes(e)&&u.activateProfiles(...a)}
static atProfileActivation(e,...t){u.callbacks.push([e,t])}static activateProfiles(...e){let t=[];if("undefined"==typeof window){e.forEach((function(e){let n=u.sources[e]||[];n.reverse(),t.push(...n),
n.reverse()})),t.push(new o("env://SERVER_CFG")),t.push(new o(/.*/));let n=Object({NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",
OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",MOCK_DATA_BASE_URI:""}).CONFIG_DIR||u._getDefaultConfigDir(),i=Object({
NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",
MOCK_DATA_BASE_URI:""}).SYS_CONFIG_DIR||u._getDefaultSysConfigDir(),a=u._getTestConfigDir();e.forEach((function(e){
let c=r.join(n,e.toLowerCase()+".properties"),u=r.join(n,e.toLowerCase()+".json"),d=r.join(i,e.toLowerCase()+".properties"),l=r.join(i,e.toLowerCase()+".json"),m=r.join(a,e.toLowerCase()+".properties"),p=r.join(a,e.toLowerCase()+".json")
;s.existsSync(p)&&t.push(new o("file://"+p,0)),s.existsSync(l)&&t.push(new o("file://"+l,0)),s.existsSync(u)&&t.push(new o("file://"+u,0)),s.existsSync(m)&&t.push(new o("file://"+m,0)),
s.existsSync(d)&&t.push(new o("file://"+d,0)),s.existsSync(c)&&t.push(new o("file://"+c,0))})),t.push(...u.implicitSources)}else{let e=window.UU5,n=(e?e.Environment:null)||{};t.push(new o(n))}
let n=new i(t,e);u.chain&&(n._custom=a.parse(a.stringify(u.chain._custom))),u.chain=n,n.load(!0),u.callbacks.forEach((function(t){let n=t[0],o=t[1];u._doArraysIntersect(e,o)||n.call()})),
u.activeProfiles=Array.from(new Set([...u.activeProfiles,...e]))}static isProfileActive(...e){let t=u.activeProfiles;return!!t&&u._doArraysIntersect(t,e)}static get(e,t=!0){
return u._getChain().get(e,t)}static getString(e,t=!0){return u._getChain().getString(e,t)}static getNumber(e,t=!0){return u._getChain().getNumber(e,t)}static getBoolean(e,t=!0){
return u._getChain().getBoolean(e,t)}static getTime(e,t=!0){return u._getChain().getTime(e,t)}static getClass(e,t,n=!0){return u._getChain().getClass(e,t,n)}static getArray(e,t=null,n=!0,o=null){
return u._getChain().getArray(e,t,n,o)}static set(e,t){u._getChain().set(e,t)}static delete(e){u._getChain().delete(e)}static hasKey(e,t=!0){return u._getChain().hasKey(e,t)}static toJSON(e=!1){
return u._getChain().toJSON(e)}static reload(e=!1){u._getChain().load(e)}static clear(){u.activeProfiles=[],u.callbacks=[],u.implicitSources=[],u.sources={},u.chain=null}static _getChain(){
let e=u.chain;if(!e){let t=u.activeProfiles;if(0===t.length){let e=Object({NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",
OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",MOCK_DATA_BASE_URI:""}).CONFIG_PROFILE||"production";if(e){let n=e.split(",");t=[],
n.forEach((function(e){t.push(e.trim())})),u.activateProfiles(...t)}else t="production",u.activateProfiles(t)}e=u.chain}return e}static _doArraysIntersect(e,t){let n=!1;return e.forEach((function(e){
t.includes(e)&&(n=!0)})),n}static _getDefaultConfigDir(){let e=r.join(t.cwd(),"env");return s.existsSync(e)||(e=r.join(t.cwd(),"config")),e}static _getDefaultSysConfigDir(){
let e=r.join(c.homedir(),".uu","env");return s.existsSync(e)||(e=r.join(c.homedir(),".uu","config")),e}static _getTestConfigDir(){return r.join(t.cwd(),"test","env")}}u.activeProfiles=[],
u.callbacks=[],u.implicitSources=[],u.sources={},u.chain=null,e.exports=u}).call(this,n(39)(e),n(35))},409:function(e,t,n){e.exports=n(410)},41:function(e,t){},410:function(e,t,n){
var o=n(37),i="undefined"!=typeof document,a=((o?o.uri:i&&(document.currentScript||Array.prototype.slice.call(document.getElementsByTagName("script"),-1)[0]||{}).src)||"").toString()
;"/1.0.0/"===(a=a.split(/\//).slice(0,-1).join("/")+"/").substr(-"/1.0.0/".length)&&(a=a.substr(0,a.length-"/1.0.0/".length)+"/1.12.0-dev/"),n.p=a,e.exports=n(433)},411:function(e,t,n){var o=n(412)
;"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},412:function(e,t,n){var o=n(9),i=n(413),a=n(414)
;t=o(!1);var r=i(a)
;t.push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-login-form{background:#fafafa}.uu-identitymanagement-core-login-form .uu5-forms-input-label-right.uu5-forms-checkbox .uu5-forms-input-wrapper{width:inherit}.uu-identitymanagement-core-login-form .uu5-forms-input-m.uu5-forms-checkbox{margin:0;-webkit-justify-content:center;justify-content:center}.uu-identitymanagement-core-login-form .uu5-bricks-alert{padding-right:16px}.uu-identitymanagement-core-login-form-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-core-login-form-content-remember{display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;margin-top:16px;margin-bottom:-16px}.uu-identitymanagement-core-login-form-content-plus4u{font-family:ClearSans-Medium,sans-serif}.uu-identitymanagement-core-login-form-content-plus4u-form{padding:0;transition:opacity .2s,visibility .2s,height .2s,max-height .2s}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-content:before{font-family:Material Design Icons,sans-serif;content:"\\F028";font-size:26px;color:#fff;text-align:center;line-height:20px;margin-right:15px;margin-left:15px}.uu-identitymanagement-core-login-form-content-plus4u-form .color-schema-red.uu5-bricks-alert{background:#de4847;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:3px}.uu-identitymanagement-core-login-form-content-plus4u-form .color-schema-red.uu5-bricks-alert .uu5-bricks-alert-content{color:#fff}.uu-identitymanagement-core-login-form-content-plus4u-form .color-schema-red.uu5-bricks-alert .uu5-bricks-link:not([class*=color-schema-]){color:#fff;text-decoration:underline}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-center{left:unset;-webkit-transform:unset;transform:unset}.uu5-ua-ie .uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-center{left:auto;-webkit-transform:none;transform:none}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert{position:static}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert.uu5-common-hidden{display:none!important}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-content{font-size:14px;letter-spacing:0;line-height:19px;padding:2px 0}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-content .uu5-bricks-span{font-size:14px;letter-spacing:0;line-height:19px}@media screen and (min-width:481px){.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert-content{padding:10px 0}}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-bricks-alert{margin-bottom:10px;margin-left:-16px;margin-right:-16px}.uu-identitymanagement-core-login-form-content-plus4u-form .uu5-forms-message{padding-top:0;padding-bottom:0}.uu-identitymanagement-core-login-form-content-plus4u-form-header{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:16px;margin-bottom:16px;color:rgba(0,0,0,.54)}.uu-identitymanagement-core-login-form-content-plus4u-form-access-code{margin-top:0;margin-bottom:4px}.uu-identitymanagement-core-login-form-content-plus4u-form-button{margin-top:0;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;color:#fff;width:100%;height:40px;font-size:16px;font-family:ClearSans-Medium,sans-serif}.uu-identitymanagement-core-login-form-content-plus4u-form-hidden{overflow:hidden;visibility:hidden;opacity:0;height:0;padding:0;margin:0}.uu-identitymanagement-core-login-form-content-plus4u-expander{font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;margin:auto;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-login-form-content-plus4u-expander:focus,.uu-identitymanagement-core-login-form-content-plus4u-expander:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-login-form-content-plus4u-expander:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-login-form-content-plus4u-expander.uu5-bricks-button-transparent:focus,.uu-identitymanagement-core-login-form-content-plus4u-expander.uu5-bricks-button-transparent:hover{background-color:#fff}.uu-identitymanagement-core-login-form-content-plus4u-expander-logo{background:url('+r+");display:inline-block;width:60px;height:32px;background-size:cover}.uu-identitymanagement-core-login-form-content-plus4u-expander-text{font-family:ClearSans-Medium,sans-serif;font-size:16px;color:#4a4a4a;text-align:center}.uu-identitymanagement-core-login-form-content-plus4u-expander-icon{color:#4a4a4a}.uu-identitymanagement-core-login-form-content-plus4u-expander:not(.uu5-bricks-button-link)>.uu-identitymanagement-core-login-form-content-plus4u-expander-icon:last-child{margin-right:16px;font-size:20px}.uu-identitymanagement-core-login-form-content-registration-button{font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center;margin:28px auto auto}.uu-identitymanagement-core-login-form-content-registration-button:focus,.uu-identitymanagement-core-login-form-content-registration-button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-login-form-content-registration-button:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-login-form-content-registration-button.uu5-bricks-button-transparent:focus,.uu-identitymanagement-core-login-form-content-registration-button.uu5-bricks-button-transparent:hover{background-color:#fff}.uu-identitymanagement-core-login-form-content-anonymous-access-button,.uu-identitymanagement-core-login-form-content-plus4u-form-hidden+.uu-identitymanagement-core-login-form-content-registration-button{margin-top:4px}.uu-identitymanagement-core-login-form-footer{font-family:ClearSans-Medium,sans-serif;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-login-form-footer-link{font-size:14px;color:#000}.uu-identitymanagement-core-login-form-footer-link:first-child{color:#000;text-align:left;margin-left:-16px}.uu-identitymanagement-core-login-form-footer-link:first-child:focus{outline:none}.uu-identitymanagement-core-login-form-footer-link:first-child .uu5-bricks-button:hover{background:transparent}.uu-identitymanagement-core-login-form-footer-link:last-child{text-align:right;vertical-align:middle}@media screen and (min-width:481px){.uu-identitymanagement-core-login-form{max-width:320px}}",""]),
e.exports=t},413:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),
/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},414:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/img/provider_plus4u_logo.svg"},
415:function(e,t,n){var o=n(416);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
416:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}@media screen and (min-width:769px){.uu-identitymanagement-routes-login{padding-top:48px}}@media screen and (min-width:993px){.uu-identitymanagement-routes-login{padding-top:64px}}',""]),
e.exports=t},417:function(e,t,n){var o=n(418);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
418:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-totp-form .uu5-bricks-alert{padding-right:16px}.uu-identitymanagement-core-totp-form-header{text-align:center;font-size:14px;margin-bottom:12px;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-totp-form-header-info{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);margin-bottom:-18px}.uu-identitymanagement-core-totp-form-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-core-totp-form-content-verify-button{color:#fff!important;background:#4caf50!important;font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center;margin:4px auto auto}.uu-identitymanagement-core-totp-form-content-verify-button:focus,.uu-identitymanagement-core-totp-form-content-verify-button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-totp-form-content-verify-button:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-totp-form-content-verify-button.uu5-bricks-button-transparent:focus,.uu-identitymanagement-core-totp-form-content-verify-button.uu5-bricks-button-transparent:hover{background-color:#fff}.uu-identitymanagement-core-totp-form-footer{font-family:ClearSans-Medium,sans-serif;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-totp-form-footer-link{font-size:14px;color:#000}.uu-identitymanagement-core-totp-form-footer-link:first-child{color:#000;text-align:left;margin-left:-16px}.uu-identitymanagement-core-totp-form-footer-link:first-child:focus{outline:none}.uu-identitymanagement-core-totp-form-footer-link:first-child .uu5-bricks-button:hover{background:transparent}.uu-identitymanagement-core-totp-form-footer-link:last-child{text-align:right;vertical-align:middle}.uu-identitymanagement-core-totp-form-footer-link:last-child .uu5-bricks-button-filled{background:#fafafa}.uu-identitymanagement-core-totp-form-footer-icon{padding-right:8px}.uu-identitymanagement-core-totp-form-footer-text{vertical-align:top;line-height:inherit}.uu-identitymanagement-core-totp-form-footer-lost-credentials{border-top:1px solid rgba(0,0,0,.12)}@media screen and (min-width:481px){.uu-identitymanagement-core-totp-form{max-width:320px}}',""]),
e.exports=t},419:function(e,t,n){var o=n(420);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
42:function(e,t){},420:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-sms-form .uu5-bricks-alert{padding-right:16px}.uu-identitymanagement-core-sms-form-header{text-align:center;font-size:14px;margin-bottom:12px;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-sms-form-header-info{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);margin-bottom:-18px}.uu-identitymanagement-core-sms-form-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-core-sms-form-content-verify-button{color:#fff!important;background:#4caf50!important;font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center;margin:4px auto auto}.uu-identitymanagement-core-sms-form-content-verify-button:focus,.uu-identitymanagement-core-sms-form-content-verify-button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-sms-form-content-verify-button:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-sms-form-content-verify-button.uu5-bricks-button-transparent:focus,.uu-identitymanagement-core-sms-form-content-verify-button.uu5-bricks-button-transparent:hover{background-color:#fff}.uu-identitymanagement-core-sms-form-resend-link{margin-top:-16px;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:16px;color:#000;vertical-align:middle;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-sms-form-footer{font-family:ClearSans-Medium,sans-serif;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-sms-form-footer-link{font-size:14px;color:#000}.uu-identitymanagement-core-sms-form-footer-link:first-child{color:#000;text-align:left;margin-left:-16px}.uu-identitymanagement-core-sms-form-footer-link:first-child:focus{outline:none}.uu-identitymanagement-core-sms-form-footer-link:first-child .uu5-bricks-button:hover{background:transparent}.uu-identitymanagement-core-sms-form-footer-link:last-child{text-align:right;vertical-align:middle}.uu-identitymanagement-core-sms-form-footer-link:last-child .uu5-bricks-button-filled{background:#fafafa}.uu-identitymanagement-core-sms-form-footer-icon{padding-right:8px}.uu-identitymanagement-core-sms-form-footer-text{vertical-align:top;line-height:inherit}.uu-identitymanagement-core-sms-form-footer-lost-credentials{border-top:1px solid rgba(0,0,0,.12)}@media screen and (min-width:481px){.uu-identitymanagement-core-sms-form{max-width:320px}}',""]),
e.exports=t},421:function(e,t,n){var o=n(422);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
422:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-backup-codes-form .uu5-bricks-alert{padding-right:16px}.uu-identitymanagement-core-backup-codes-form-header{text-align:center;font-size:14px;margin-bottom:12px;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-backup-codes-form-header-info{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);margin-bottom:-18px}.uu-identitymanagement-core-backup-codes-form-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-core-backup-codes-form-content-verify-button{color:#fff!important;background:#4caf50!important;font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center;margin:4px auto auto}.uu-identitymanagement-core-backup-codes-form-content-verify-button:focus,.uu-identitymanagement-core-backup-codes-form-content-verify-button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-backup-codes-form-content-verify-button:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-core-backup-codes-form-content-verify-button.uu5-bricks-button-transparent:focus,.uu-identitymanagement-core-backup-codes-form-content-verify-button.uu5-bricks-button-transparent:hover{background-color:#fff}.uu-identitymanagement-core-backup-codes-form-footer{font-family:ClearSans-Medium,sans-serif;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-backup-codes-form-footer-link{font-size:14px;color:#000}.uu-identitymanagement-core-backup-codes-form-footer-link:first-child{color:#000;text-align:left;margin-left:-16px}.uu-identitymanagement-core-backup-codes-form-footer-link:first-child:focus{outline:none}.uu-identitymanagement-core-backup-codes-form-footer-link:first-child .uu5-bricks-button:hover{background:transparent}.uu-identitymanagement-core-backup-codes-form-footer-link:last-child{text-align:right;vertical-align:middle}.uu-identitymanagement-core-backup-codes-form-footer-link:last-child .uu5-bricks-button-filled{background:#fafafa}.uu-identitymanagement-core-backup-codes-form-footer-icon{padding-right:8px}.uu-identitymanagement-core-backup-codes-form-footer-text{vertical-align:top;line-height:inherit}.uu-identitymanagement-core-backup-codes-form-footer-lost-credentials{border-top:1px solid rgba(0,0,0,.12)}@media screen and (min-width:481px){.uu-identitymanagement-core-backup-codes-form{max-width:320px}}',""]),
e.exports=t},423:function(e,t,n){var o=n(424);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
424:function(e,t,n){(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}',""]),e.exports=t},425:function(e,t,n){
var o=n(426);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},426:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-login-bottom{padding:0;text-align:center;border-top:1px solid rgba(0,0,0,.12);font-size:13px;color:rgba(15,15,15,.3);line-height:32px}.uu-identitymanagement-core-login-bottom .uu5-bricks-link{color:#1565c0}',""]),
e.exports=t},427:function(e,t,n){var o=n(428);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
428:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.flexParent,.flexParentWithOverflow{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.flexParentWithOverflow{overflow:auto}.flexChild{-webkit-flex-grow:1;flex-grow:1}body{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;overflow:auto}.uu-identitymanagement-core-spa,.uu-identitymanagement-core-spa .uu5-bricks-page-flex-grow,body #uuApp{overflow:auto}.uu-identitymanagement-core-spa,.uu-identitymanagement-core-spa .uu5-bricks-page-flex-grow,.uu-identitymanagement-core-spa .uu5-bricks-page-flex-grow .uu5-bricks-page-content,.uu-identitymanagement-core-spa .uu5-bricks-page-flex-grow .uu5-bricks-page-content .uu5-bricks-page-content-body,body #uuApp{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;flex-grow:1}.uu5-ua-ie .uu5-bricks-page-bottom-ie-fix{margin-bottom:66px}@media screen and (min-width:481px){.uu5-ua-ie .uu5-bricks-page-bottom-ie-fix{margin-bottom:33px}}',""]),
e.exports=t},429:function(e,t,n){var o=n(430);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
43:function(e,t,n){"use strict";const o=n(83);e.exports=class{static sha1(e){return o(e)}}},430:function(e,t,n){
(t=n(9)(!1)).push([e.i,".uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-danger,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-default,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-help,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-info,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-success,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-warning{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-danger>.uucontentkit-bricks-icon-table-cell,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-default>.uucontentkit-bricks-icon-table-cell,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-help>.uucontentkit-bricks-icon-table-cell,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-info>.uucontentkit-bricks-icon-table-cell,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-success>.uucontentkit-bricks-icon-table-cell,.uu5-ua-ie .uucontentkit-bricks-block .uucontentkit-bricks-block-warning>.uucontentkit-bricks-icon-table-cell{-webkit-flex:none;flex:none}",""]),
e.exports=t},433:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return X}));n(15);var o=n(45),i=n.n(o),a=n(31),r=n(0),s=n.n(r),c=(n(12),n(5)),u=n(14),d=n(6);function l(e,t){
var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}
return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))
}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=m(m({},d.a),{},{TAG:d.a.namespace.routes.tag,
CSS:d.a.namespace.routes.css}),f=n(13),g=n(2),k=n(4),v=n(47),y=n(20),b=n(16),C=n(19),S=n(49),P=n(3);n(411);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){
var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var A=Date.now(),x=s.a.Common.Component.create({
mixins:[s.a.Common.BaseMixin,s.a.Common.CallsMixin,s.a.Common.LsiMixin],statics:{tagName:g.a.TAG+".LoginForm",classNames:{main:g.a.CSS+"-login-form",alertText:g.a.CSS+"-login-form-alert-text",
content:g.a.CSS+"-login-form-content",contentRememberMe:g.a.CSS+"-login-form-content-remember",plus4UForm:g.a.CSS+"-login-form-content-plus4u-form",
plus4UFormShown:g.a.CSS+"-login-form-content-plus4u-form-shown",plus4UFormHidden:g.a.CSS+"-login-form-content-plus4u-form-hidden",plus4UFormHeader:g.a.CSS+"-login-form-content-plus4u-form-header",
plus4UFormAccessCode:g.a.CSS+"-login-form-content-plus4u-form-access-code",plus4UFormButton:g.a.CSS+"-login-form-content-plus4u-form-button uu5-bricks-button",
plus4UExpander:g.a.CSS+"-login-form-content-plus4u-expander",plus4UExpanderShown:g.a.CSS+"-login-form-content-plus4u-expander-shown",
plus4UExpanderHidden:g.a.CSS+"-login-form-content-plus4u-expander-hidden",plus4UExpanderLogo:g.a.CSS+"-login-form-content-plus4u-expander-logo",
plus4UExpanderText:g.a.CSS+"-login-form-content-plus4u-expander-text",plus4UExpanderIcon:g.a.CSS+"-login-form-content-plus4u-expander-icon",
registrationButton:g.a.CSS+"-login-form-content-registration-button",anonymousAccessButton:g.a.CSS+"-login-form-content-anonymous-access-button",footer:g.a.CSS+"-login-form-footer",
footerLink:g.a.CSS+"-login-form-footer-link"},lsi:P.a.login,calls:{authenticate:"authenticate",checkIdentityLoginStatus:"checkIdentityLoginStatus"}},propTypes:{identity:g.a.commonPropTypes.identity,
configuration:g.a.commonPropTypes.configuration,alert:s.a.PropTypes.shape({lsi:s.a.PropTypes.object.isRequired,colorSchema:s.a.PropTypes.oneOf(Object.values(g.a.colorSchemas))})},
getInitialState:function(){return{alertShow:!1,loginStatus:{},alertBusHeight:0,plus4UExpanded:this._shouldShowPlus4UExpanded(),rememberMe:!1,submitEnabled:!1}},componentWillMount:function(){
this.setCalls(u.a)},componentDidMount:function(){var e=this._getAlertData();e&&this._addAlert({content:e.content,colorSchema:e.colorSchema})},_shouldShowAnonymousAccessButton:function(){
return this.props.configuration.allowAnonymous},_shouldShowPlus4UExpanded:function(){
return!this._shouldShowThirdParties()||this.props.configuration.expandPlus4ULogin||!this.props.configuration.shownThirdParties||this._getAlertData()},_shouldShowThirdParties:function(){
return this.props.configuration.thirdPartyList&&this.props.configuration.thirdPartyList.length>0},_shouldShowRememberMe:function(){var e=k.a.getAcrValues();return e&&e.includes("low")},
_shouldPassUuAppErrorMap:function(e){if(e&&this._shouldShowThirdParties()){var t=Object.keys(e)[0];return g.a.thirdPartyButtonErrorCodes.find((function(e){return t.includes(e)}))}},
_expandPlus4U:function(){return this.setState({plus4UExpanded:!0}),this},_redirectToRegistration:function(){var e=f.Uri.UriBuilder.parse(u.a.getCommandUri(g.a.routes.registration))
;if(e.setParameters(k.a.getLoginRegistrationParams()),e=e.toUri().toString(),opener&&opener!==window){var t=window.open(g.a.windowParams.href.blank,g.a.windowParams.target.blank);t.opener=null,
t.location.href=e,window.close()}else window.location.href=e},_redirectToLostAccessCodes:function(){var e=f.Uri.UriBuilder.parse(u.a.getCommandUri(g.a.routes.lostAccessCodes))
;e.setParameters(k.a.getParamsToPass(g.a.routes.login,g.a.routes.lostAccessCodes)),e=e.toUri().toString(),window.open(e,g.a.windowParams.target.blank),window.close()},
_redirectToLegacyLogin:function(){window.open(g.a.legacyLogin,g.a.windowParams.target.blank),window.close()},_redirectToHelpdesk:function(){
window.open(g.a.participateInPilotReq,g.a.windowParams.target.blank),window.close()},_redirectToThirdPartyRegistration:function(e){
var t=f.Uri.UriBuilder.parse(u.a.getCommandUri(g.a.routes.thirdPartyRegistration));t.setParameters(k.a.getThirdPartyRegistrationParams(e)),t=t.toUri().toString(),window.location.href=t},
_getThirdPartyButtonGroup:function(){var e=JSON.parse(k.a.getParam("uuAppErrorMap"));return s.a.Common.Element.create(S.a,{type:g.a.thirdPartyButtonTypes.login,
services:this.props.configuration.thirdPartyList,servicesRealms:this.props.configuration.thirdPartyRealms,shownServices:this.props.configuration.shownThirdParties,
header:this.getLsiComponent("thirdPartyButtonsStart"),withAlert:this.state.alertShow,alertBusHeight:this.state.alertBusHeight,rememberMe:this.state.rememberMe,
uuAppErrorMap:this._shouldPassUuAppErrorMap(e)?e:null})},_getAuthenticateUrl:function(){return u.a.getOidcCommandUrl(g.a.oidc.authAccessCodes.authenticate)},_handleAccessCodeChange:function(e){
var t=this;e.component.onChangeDefault(e),this.setState((function(n){var o=!(!t._form||!t._form.areInputsFilledIn(e,g.a.requiredFormInputs.login));return n.submitEnabled!==o?{submitEnabled:o}:void 0
}))},_getPlus4UForm:function(e){var t=this;return s.a.Common.Element.create(s.a.Bricks.Div,{
className:s.a.Common.Tools.joinClassNames(e.plus4UForm,this.state.plus4UExpanded?e.plus4UFormShown:e.plus4UFormHidden)},!this._shouldShowThirdParties()&&s.a.Common.Element.create(s.a.Bricks.Text,{
content:this.getLsiComponent("headerPlus4UOnly"),className:e.plus4UFormHeader}),s.a.Common.Element.create(b.a,{ownStyle:!0,action:this._getAuthenticateUrl(),method:g.a.httpMethods.post,
ref_:function(e){return t._form=e},component:this,alertCloseTimer:0},s.a.Common.Element.create(s.a.Forms.Text,{name:g.a.loginRegistrationParams.state,hidden:!0,value:k.a.getOidcState()
}),s.a.Common.Element.create(s.a.Forms.Text,{name:g.a.loginRegistrationParams.rememberMe,hidden:!0,value:this.state.rememberMe.toString()}),s.a.Common.Element.create(s.a.Forms.Text,{
name:g.a.loginRegistrationParams.accessCode1,placeholder:this.getLsiItem(P.a.accessCode.accessCode,[1]),size:g.a.size.l,password:!0,onChange:this._handleAccessCodeChange,
className:e.plus4UFormAccessCode,controlled:!1}),s.a.Common.Element.create(s.a.Forms.Text,{name:g.a.loginRegistrationParams.accessCode2,placeholder:this.getLsiItem(P.a.accessCode.accessCode,[2]),
size:g.a.size.l,password:!0,onChange:this._handleAccessCodeChange,className:e.plus4UFormAccessCode,controlled:!1}),s.a.Common.Element.create(y.a,{content:this.getLsiComponent("ok"),
className:e.plus4UFormButton,colorSchema:g.a.colorSchemas.success,mainAttrs:{type:g.a.buttonTypes.submit},ref_:function(e){return t._submitButton=e},disabled:!this.state.submitEnabled})))},
_getPlus4UExpander:function(e){return s.a.Common.Element.create(s.a.Bricks.Button,{
className:s.a.Common.Tools.joinClassNames(e.plus4UExpander,this.state.plus4UExpanded?e.plus4UExpanderHidden:e.plus4UExpanderShown),size:g.a.size.l,onClick:this._expandPlus4U,
bgStyle:g.a.bgStyles.transparent},s.a.Common.Element.create(s.a.Bricks.Span,{className:e.plus4UExpanderLogo}),s.a.Common.Element.create(s.a.Bricks.Span,{className:e.plus4UExpanderText
},s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.login.plus4U})),s.a.Common.Element.create(s.a.Bricks.Icon,{className:e.plus4UExpanderIcon,icon:g.a.icons.mdiChevronDoubleDown}))},
_getFooter:function(e){var t={};return g.a.shownLanguages.forEach((function(e){t[e]=s.a.Environment.languageList[e]})),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.footer
},s.a.Common.Element.create(s.a.Bricks.LanguageSelector,{className:e.footerLink,languages:t,size:g.a.size.m}),s.a.Common.Element.create(s.a.Bricks.Link,{className:e.footerLink,
onClick:this._redirectToLostAccessCodes,content:this.getLsiComponent("forgottenAccessCodes")}))},_onChangeCheckbox:function(e){this.setState({rememberMe:e.value}),e.component.onChangeDefault(e)},
_getContent:function(e){return s.a.Common.Element.create(s.a.Bricks.Div,{className:e.content
},!this.state.plus4UExpanded&&this._getPlus4UExpander(e),this._getPlus4UForm(e),this._shouldShowRememberMe()&&s.a.Common.Element.create(s.a.Bricks.Div,{className:e.contentRememberMe
},s.a.Common.Element.create(s.a.Forms.Checkbox,{onChange:this._onChangeCheckbox,value:this.state.rememberMe,type:2,labelPosition:"right",label:s.a.Common.Element.create(s.a.Bricks.Lsi,{
lsi:P.a.login.rememberMe}),size:g.a.size.m,bgStyleChecked:g.a.bgStyles.filled,colorSchema:g.a.colorSchemas.blue})),s.a.Common.Element.create(s.a.Bricks.Button,{className:e.registrationButton,
onClick:this._redirectToRegistration,content:this.getLsiComponent("register"),bgStyle:g.a.bgStyles.transparent,size:g.a.size.l
}),this._shouldShowAnonymousAccessButton()&&s.a.Common.Element.create(v.a,{className:e.anonymousAccessButton}))},_getBodySections:function(e){var t=[];return this._shouldShowThirdParties()&&t.push({
content:this._getThirdPartyButtonGroup(),key:g.a.componentKeys.login.loginThirdParties,bottomBorder:!0,noVerticalPadding:!0}),t.push({content:this._getContent(e),
key:g.a.componentKeys.login.plus4ULogin,bottomBorder:!1}),t.push({content:this._getFooter(e),key:g.a.componentKeys.login.footer}),t},_addAlert:function(e,t){
var n=this._form?this._form.getAlertBus():null;n&&n.addAlert(e,t)},_checkLoginHintStatus:function(e){var t=this,n=this.state.loginStatus,o=n[e]
;e&&(!o||o&&!o.loaded)&&this.getCall("checkIdentityLoginStatus")({data:{uuIdentity:e},done:function(o){var i=o.isLoginFirstTime;n[e]={loaded:!0,isLoginFirstTime:i};var a={loginStatus:n}
;i&&(a.plus4UExpanded=!0),t.setState(a),i&&t._addAlert({content:t.getLsiComponent("loginFirstTime",null,[t.props.configuration.name]),colorSchema:g.a.colorSchemas.success})},fail:function(o){
console.error(o),n[e]={loaded:!0},t.setState(n)}})},_getNotMigratedAlertContent:function(e){return s.a.Common.Element.create(s.a.Bricks.Span,{className:e.alertText
},this.getLsiComponent("accountNotMigratedText1"),s.a.Common.Element.create(s.a.Bricks.Link,{content:this.getLsiComponent("accountNotMigratedLink1"),onClick:this._redirectToLegacyLogin
}),this.getLsiComponent("accountNotMigratedText2"),s.a.Common.Element.create(s.a.Bricks.Link,{content:this.getLsiComponent("accountNotMigratedLink2"),onClick:this._redirectToHelpdesk
}),this.getLsiComponent("accountNotMigratedText3"))},_getAlertData:function(){var e=this.props.alert;if(e){if(e.lsi)return{content:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:e.lsi}),
colorSchema:e.colorSchema};if(e.lsiKey)return{content:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.login[e.lsiKey]}),colorSchema:e.colorSchema}}var t=JSON.parse(k.a.getParam("alert"));if(t){
if(t.lsi)return{content:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:t.lsi}),colorSchema:t.colorSchema};if(t.lsiKey)return{content:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.login[t.lsiKey]}),
colorSchema:t.colorSchema}}var n=JSON.parse(k.a.getParam("uuAppErrorMap"));if(!n&&!this._haveCorrectTime())return{content:this.getLsiComponent("invalidTime"),colorSchema:g.a.colorSchemas.danger}
;if(this._shouldPassUuAppErrorMap(n))return null;if(n&&n[g.a.errorCodes.login.acrValuesNotSatisfiedErrorCode]){var o=n[g.a.errorCodes.login.acrValuesNotSatisfiedErrorCode]
;if(o.paramMap&&o.paramMap.acrValues&&o.paramMap.acrValues.includes("standard"))return null}var i=this.getClassName();if(n){var a={content:this.getLsiComponent("unExpectedError"),
colorSchema:g.a.colorSchemas.danger},r=Object.keys(n)[0];return r.includes(g.a.notAuthenticated)&&(a.content=s.a.Common.Element.create(s.a.Bricks.Span,{className:i.alertText
},this.getLsiComponent("notAuthenticatedThirdParty"),s.a.Common.Element.create(s.a.Bricks.Link,{onClick:this._redirectToRegistration,content:this.getLsiComponent("newRegister")})),
a.colorSchema=g.a.colorSchemas.danger),r.includes(g.a.accountNotMigrated)&&(a.content=this._getNotMigratedAlertContent(i),a.colorSchema=g.a.colorSchemas.danger),
r.includes(g.a.tooManyInvalidAuthentications)&&(a.content=this.getLsiComponent("tooManyInvalidAuthentications"),a.colorSchema=g.a.colorSchemas.danger),
r.includes(g.a.verificationTimeIsNotValid)&&(a.content=this.getLsiComponent("verificationTimeIsNotValid"),a.colorSchema=g.a.colorSchemas.danger),
r===g.a.errorCodes.login.notAuthenticated&&(a.content=this.getLsiComponent("notAuthenticated"),a.colorSchema=g.a.colorSchemas.danger),a}},_haveCorrectTime:function(){
var e=window.document.querySelector("meta[name=server-time]"),t=e?e.attributes.content.value:null;if(!t)return!0;return(t=Number(t))-3e5<=A&&A<=t+3e5},render:function(){var e=k.a.getLoginHint()
;e&&this._checkLoginHintStatus(e);var t=this.getClassName();return s.a.Common.Element.create(C.a,w({},this.getMainPropsToPass(),{configuration:this.props.configuration,
bodySections:this._getBodySections(t)}))}}),E=n(23);n(415);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var _=s.a.Common.Component.create({mixins:[s.a.Common.BaseMixin],statics:{
tagName:h.TAG+".Login",classNames:{main:h.CSS+"-login"}},propTypes:{identity:h.commonPropTypes.identity,alert:s.a.PropTypes.shape({lsi:s.a.PropTypes.object.isRequired,
colorSchema:s.a.PropTypes.oneOf(Object.keys(h.colorSchemas).map((function(e){return h.colorSchemas[e]}))).isRequired})},render:function(){
return s.a.Common.Element.create(E.a,z({},this.getMainPropsToPass(),{showGDPRLogin:!0,showLanguageSelector:!1}),s.a.Common.Element.create(x,{identity:this.props.identity,alert:this.props.alert}))}})
;n(24),n(417);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e
}).apply(this,arguments)}var T=s.a.Common.VisualComponent.create({mixins:[s.a.Common.BaseMixin,s.a.Common.LsiMixin],statics:{tagName:c.a.TAG+".TotpForm",classNames:{main:c.a.CSS+"-totp-form",
alertText:c.a.CSS+"-totp-form-alert-text",header:c.a.CSS+"-totp-form-header",headerInfo:c.a.CSS+"-totp-form-header-info",content:c.a.CSS+"-totp-form-content",
verifyButton:c.a.CSS+"-totp-form-content-verify-button",footer:c.a.CSS+"-totp-form-footer",footerLink:c.a.CSS+"-totp-form-footer-link",footerIcon:c.a.CSS+"-totp-form-footer-icon",
footerText:c.a.CSS+"-totp-form-footer-text",linkLostCredentials:c.a.CSS+"-totp-form-footer-lost-credentials"},lsi:P.a.mfa.login.totpForm},propTypes:{credentials:s.a.PropTypes.array,
onSwitch:s.a.PropTypes.func,alert:s.a.PropTypes.shape({lsi:s.a.PropTypes.object.isRequired,colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))}),error:s.a.PropTypes.shape({
lsi:s.a.PropTypes.object,colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))})},_addAlert:function(e,t){var n=this._form?this._form.getAlertBus():null;n&&n.addAlert(e,t)},
_setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._addAlert({content:e,colorSchema:t,closeTimer:n})},_shouldPassUuAppErrorMap:function(e){if(e){
var t=Object.keys(e)[0];return c.a.mfa.login.shownErrorCodes.find((function(e){return t.includes(e)}))}},_getUuAppErrorMap:function(){var e=JSON.parse(k.a.getParam("uuAppErrorMap"));if(e){var t={
lsi:this.getLsiComponent("unexpectedError"),colorSchema:c.a.colorSchemas.danger},n=Object.keys(e)[0]
;return(n.includes(c.a.mfa.login.invalidDtoIn)||n.includes(c.a.mfa.login.notAuthenticated))&&(t.lsi=this.getLsiComponent("invalidCodeError"),t.colorSchema=c.a.colorSchemas.danger),t}return null},
_getFooter:function(e){this.props.credentials;var t={};return c.a.shownLanguages.forEach((function(e){t[e]=s.a.Environment.languageList[e]})),s.a.Common.Element.create(s.a.Bricks.Div,{
className:e.footer},s.a.Common.Element.create(s.a.Bricks.LanguageSelector,{className:e.footerLink,languages:t,size:c.a.size.m}),s.a.Common.Element.create(s.a.Bricks.Dropdown,{className:e.footerLink,
label:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.alternateMethods}),size:c.a.size.m},this._getCredentialsItem()))},_getCredentialsItem:function(){
var e=this,t=this.getClassName(),n=this._credentialList.map((function(n){return n.id!==e._credentialsId?s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{key:s.a.Common.Tools.generateUUID(),
label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:n.icon}),s.a.Common.Element.create(s.a.Bricks.Lsi,{
className:t.footerText,lsi:n.label})),onClick:function(){e.props.onSwitch(n)}}):null})),o=s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{className:t.linkLostCredentials,
key:s.a.Common.Tools.generateUUID(),label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:c.a.mfa.lostSecondFactorIcon
}),s.a.Common.Element.create(s.a.Bricks.Lsi,{className:t.footerText,lsi:P.a.mfa.login.lostSecondFactor})),onClick:this._redirectToLostSecondFactor});return n.push(o),n},_getHeader:function(e){
return s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Div,{className:e.header},s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.header
})),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.headerInfo},s.a.Common.Element.create(s.a.Bricks.Text,{content:this.getLsiComponent("headerInfo")}," ")))},_setFormRef:function(e){
this._form=e},_getForm:function(e){return s.a.Common.Element.create(b.a,U({action:u.a.getOidcCommandUrl(c.a.mfa.login.totpForm.authenticateUri),ref_:this._setFormRef,method:c.a.httpMethods.post,
component:this},this.getMainPropsToPass()),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.content},s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"state",value:k.a.getOidcState()
}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"credentialsId",value:this._credentialsId}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"realmCode",value:this._realmCode
}),s.a.Common.Element.create(s.a.Forms.Text,{placeholder:P.a.mfa.login.totpForm.textPlaceholder,name:"oneTimePassword",autocompleteItems:[],required:!0,requiredMessage:" "
}),s.a.Common.Element.create(y.a,{mainAttrs:{type:c.a.buttonTypes.submit},id:s.a.Common.Tools.generateUUID(),className:e.verifyButton,onClick:this._onClickHandler,colorSchema:c.a.colorSchemas.success
},this.getLsiComponent("verifyMe"))))},_onClickHandler:function(e,t){t.stopPropagation()},_getBodySections:function(e){var t=this,n=[];n.push({content:this._getHeader(e),
key:c.a.mfa.login.totpForm.headerKey}),n.push({content:this._getForm(e),key:c.a.mfa.login.totpForm.formKey}),n.push({content:this._getFooter(e),key:c.a.mfa.login.totpForm.footerKey})
;var o=JSON.parse(k.a.getUuAppErrorMap());if(this._shouldPassUuAppErrorMap(o)?o:null){var i=this._getUuAppErrorMap();i&&setTimeout((function(){t._setAlert(i.lsi,i.colorSchema)}),0)}return n},
_redirectToLostSecondFactor:function(){var e=f.Uri.UriBuilder.parse(u.a.getCommandUri(c.a.routes.lostSecondFactor));e.setParameters(k.a.getParamsToPass(c.a.routes.login,c.a.routes.lostSecondFactor)),
e=e.toUri().toString(),window.open(e,c.a.windowParams.target.blank),window.close()},render:function(){var e=this.getClassName();this._credentialList=this.props.credentials
;var t=window.sessionStorage.getItem(c.a.sessionStorageKeys.selectedCredentials),n=this._credentialList.find((function(e){return e.id===t}));return n||(n=this._credentialList[0]),
this._credentialsId=n.id,this._realmCode=n.realmCode,s.a.Common.Element.create(C.a,U({},this.getMainPropsToPass(),{bodySections:this._getBodySections(e)}))}});n(419);function I(e,t,n,o,i,a,r){try{
var s=e[a](r),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,i)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n)
;function r(e){I(a,o,i,r,s,"next",e)}function s(e){I(a,o,i,r,s,"throw",e)}r(void 0)}))}}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}
var B=f.Logging.LoggerFactory.get("uu.identitymanagement.main.Login"),L=s.a.Common.VisualComponent.create({mixins:[s.a.Common.BaseMixin,s.a.Common.LsiMixin],statics:{tagName:c.a.TAG+".SmsForm",
classNames:{main:c.a.CSS+"-sms-form",alertText:c.a.CSS+"-sms-form-alert-text",header:c.a.CSS+"-sms-form-header",headerInfo:c.a.CSS+"-sms-form-header-info",content:c.a.CSS+"-sms-form-content",
verifyButton:c.a.CSS+"-sms-form-content-verify-button",footer:c.a.CSS+"-sms-form-footer",footerLink:c.a.CSS+"-sms-form-footer-link",footerIcon:c.a.CSS+"-sms-form-footer-icon",
footerText:c.a.CSS+"-sms-form-footer-text",resendLink:c.a.CSS+"-sms-form-resend-link",linkLostCredentials:c.a.CSS+"-sms-form-footer-lost-credentials"},lsi:P.a.mfa.login.smsForm},propTypes:{
credentials:s.a.PropTypes.array,onSwitch:s.a.PropTypes.func,alert:s.a.PropTypes.shape({lsi:s.a.PropTypes.object.isRequired,colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))}),
error:s.a.PropTypes.shape({lsi:s.a.PropTypes.object,colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))})},getInitialState:function(){return{showResendLink:!1}},
componentWillMount:function(){var e=document.createElement("script");e.src=k.a.getRecaptchaRenderURL(s.a.Environment),this._loadCaptcha=new Promise((function(t,n){e.onload=t,e.onerror=n})),
document.body.appendChild(e)},componentDidMount:function(){!this.props.error&&this._credentialsId&&this._sendAuthenticationSms()},componentDidUpdate:function(){if(this._phoneSwitched){
var e="".concat(this._phoneType,"PhoneSmsAlert");this._setAlert(this.getLsiComponent(e),c.a.colorSchemas.primary,3e3),this._sendAuthenticationSms()}},_addAlert:function(e,t){
var n=this._form?this._form.getAlertBus():null;n&&n.addAlert(e,t)},_setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._addAlert({content:e,
colorSchema:t,closeTimer:n})},_shouldPassUuAppErrorMap:function(e){if(e){var t=Object.keys(e)[0];return c.a.mfa.login.shownErrorCodes.find((function(e){return t.includes(e)}))}},
_getUuAppErrorMap:function(){var e=JSON.parse(k.a.getParam("uuAppErrorMap"));if(e){var t={lsi:this.getLsiComponent("unexpectedError"),colorSchema:c.a.colorSchemas.danger},n=Object.keys(e)[0]
;return(n.includes(c.a.mfa.login.invalidDtoIn)||n.includes(c.a.mfa.login.notAuthenticated))&&(t.lsi=this.getLsiComponent("invalidCodeError"),t.colorSchema=c.a.colorSchemas.danger),t}return null},
_getFooter:function(e){this.props.credentials;var t={};return c.a.shownLanguages.forEach((function(e){t[e]=s.a.Environment.languageList[e]})),s.a.Common.Element.create(s.a.Bricks.Div,{
className:e.footer},s.a.Common.Element.create(s.a.Bricks.LanguageSelector,{className:e.footerLink,languages:t,size:c.a.size.m}),s.a.Common.Element.create(s.a.Bricks.Dropdown,{className:e.footerLink,
label:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.alternateMethods}),size:c.a.size.m},this._getCredentialsItem()))},_getCredentialsItem:function(){
var e=this,t=this.getClassName(),n=this._credentialList.map((function(n){return n.id!==e._credentialsId?s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{key:s.a.Common.Tools.generateUUID(),
label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:n.icon}),s.a.Common.Element.create(s.a.Bricks.Lsi,{
className:t.footerText,lsi:n.label})),onClick:function(){e._switchCredentials(n)}}):null})),o=s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{className:t.linkLostCredentials,
key:s.a.Common.Tools.generateUUID(),label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:c.a.mfa.lostSecondFactorIcon
}),s.a.Common.Element.create(s.a.Bricks.Lsi,{className:t.footerText,lsi:P.a.mfa.login.lostSecondFactor})),onClick:this._redirectToLostSecondFactor});return n.push(o),n},_switchCredentials:function(e){
this._smsSendInProgress&&(clearTimeout(this._smsSendInProgress),this._smsSendInProgress=null),this.props.onSwitch(e)},_getHeader:function(e){
return s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Div,{className:e.header},s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.header
})),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.headerInfo},s.a.Common.Element.create(s.a.Bricks.Text,{content:this.getLsiComponent("headerInfo",null,[this._phoneNumber])}," ")))},
_setFormRef:function(e){this._form=e},_getForm:function(e){return s.a.Common.Element.create(b.a,j({action:u.a.getOidcCommandUrl(c.a.mfa.login.smsForm.authenticateUri),ref_:this._setFormRef,
method:c.a.httpMethods.post,component:this},this.getMainPropsToPass()),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.content},s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"state",
value:k.a.getOidcState()}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"credentialsId",value:this._credentialsId}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"realmCode",
value:this._realmCode}),s.a.Common.Element.create(s.a.Forms.Text,{placeholder:P.a.mfa.login.smsForm.textPlaceholder,name:"smsCode",autocompleteItems:[],required:!0,requiredMessage:" "
}),s.a.Common.Element.create(y.a,{mainAttrs:{type:c.a.buttonTypes.submit},id:s.a.Common.Tools.generateUUID(),className:e.verifyButton,onClick:this._onClickHandler,colorSchema:c.a.colorSchemas.success
},this.getLsiComponent("verifyMe"))))},_onClickHandler:function(e,t){t.stopPropagation()},_getResendCodeInfo:function(e){
return s.a.Common.Element.create(s.a.Bricks.Div,null,s.a.Common.Element.create(s.a.Bricks.Link,{className:e.resendLink,content:this.getLsiComponent("resendCodeLink"),
onClick:this._sendAuthenticationSms}))},_getBodySections:function(e){var t=this,n=[];n.push({content:this._getHeader(e),key:c.a.mfa.login.smsForm.headerKey}),n.push({content:this._getForm(e),
key:c.a.mfa.login.smsForm.formKey}),this.state.showResendLink&&n.push({content:this._getResendCodeInfo(e),key:c.a.mfa.login.smsForm.resendCodeKey}),n.push({content:this._getFooter(e),
key:c.a.mfa.login.smsForm.footerKey});var o=JSON.parse(k.a.getUuAppErrorMap());if(this._shouldPassUuAppErrorMap(o)?o:null){var i=this._getUuAppErrorMap();i&&setTimeout((function(){
t._setAlert(i.lsi,i.colorSchema)}),0)}return n},_sendAuthenticationSms:function(e){var t=this
;this._smsSendInProgress?B.warn("Waiting for processing of previous SMS request."):(this._smsSendInProgress=setTimeout(N(regeneratorRuntime.mark((function e(){var n,o,i
;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t._executeReCaptcha();case 3:return n=e.sent,o=k.a.getClientId(),e.next=7,
u.a.sendAuthenticationSms({response:n,clientId:o,credentialsId:t._credentialsId,identityAccountCode:k.a.getLoginHint()});case 7:t._smsSendInProgress=null,e.next=15;break;case 10:e.prev=10,
e.t0=e.catch(0),"uu-identitymanagement-maing01/mfa/sendAuthenticationSms/smsSendRateExceeded"===e.t0.code?(i=e.t0.paramMap.retryAfter+1,
B.warn("SMS send rate exceeded, retrying in "+i+" seconds.")):(i=5,B.error("Sending of SMS failed, automatically retrying in "+i+" seconds.",e.t0)),t._smsSendInProgress=null,
t._sendAuthenticationSms(1e3*i);case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),e||0),setTimeout((function(){t.setState((function(e){return{showResendLink:e.showResendLink=!0}}))}),3e4))},
_executeReCaptcha:function(){var e=this;return new Promise((function(t,n){e._loadCaptcha.then((function(){var e=s.a.Environment.reCaptchaSiteKey,o=c.a.reCaptcha.actions.sendAuthenticationSms
;window.grecaptcha.ready((function(){window.grecaptcha.execute(e,{action:o}).then(t,n)}))}),n)}))},_redirectToLostSecondFactor:function(){
var e=f.Uri.UriBuilder.parse(u.a.getCommandUri(c.a.routes.lostSecondFactor));e.setParameters(k.a.getParamsToPass(c.a.routes.login,c.a.routes.lostSecondFactor)),e=e.toUri().toString(),
window.open(e,c.a.windowParams.target.blank),window.close()},render:function(){var e=this.getClassName();this._credentialList=this.props.credentials
;var t=window.sessionStorage.getItem(c.a.sessionStorageKeys.selectedCredentials),n=this._credentialList.find((function(e){return e.id===t}));n||(n=this._credentialList[0]),this._phoneSwitched=!1,
this._credentialsId&&this._credentialsId!==n.id&&(this._phoneSwitched=!0),this._credentialsId=n.id,this._realmCode=n.realmCode;var o=n.name&&n.name.split("@");return this._phoneNumber=o?o[0]:null,
this._phoneType=o?o[1]:null,s.a.Common.Element.create(C.a,j({},this.getMainPropsToPass(),{bodySections:this._getBodySections(e)}))}});n(421);function O(){return(O=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var R=s.a.Common.VisualComponent.create({
mixins:[s.a.Common.BaseMixin,s.a.Common.LsiMixin],statics:{tagName:c.a.TAG+".BackupCodesForm",classNames:{main:c.a.CSS+"-backup-codes-form",alertText:c.a.CSS+"-backup-codes-form-alert-text",
header:c.a.CSS+"-backup-codes-form-header",headerInfo:c.a.CSS+"-backup-codes-form-header-info",content:c.a.CSS+"-backup-codes-form-content",
verifyButton:c.a.CSS+"-backup-codes-form-content-verify-button",footer:c.a.CSS+"-backup-codes-form-footer",footerLink:c.a.CSS+"-backup-codes-form-footer-link",
footerIcon:c.a.CSS+"-backup-codes-form-footer-icon",footerText:c.a.CSS+"-backup-codes-form-footer-text",linkLostCredentials:c.a.CSS+"-totp-form-footer-lost-credentials"},
lsi:P.a.mfa.login.backupCodesForm},propTypes:{credentials:s.a.PropTypes.array,onSwitch:s.a.PropTypes.func,alert:s.a.PropTypes.shape({lsi:s.a.PropTypes.object.isRequired,
colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))}),error:s.a.PropTypes.shape({lsi:s.a.PropTypes.object,colorSchema:s.a.PropTypes.oneOf(Object.values(c.a.colorSchemas))})},
_addAlert:function(e,t){var n=this._form?this._form.getAlertBus():null;n&&n.addAlert(e,t)},_setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
;return this._addAlert({content:e,colorSchema:t,closeTimer:n})},_shouldPassUuAppErrorMap:function(e){if(e){var t=Object.keys(e)[0];return c.a.mfa.login.shownErrorCodes.find((function(e){
return t.includes(e)}))}},_getUuAppErrorMap:function(){var e=JSON.parse(k.a.getParam("uuAppErrorMap"));if(e){var t={lsi:this.getLsiComponent("unexpectedError"),colorSchema:c.a.colorSchemas.danger
},n=Object.keys(e)[0];return(n.includes(c.a.mfa.login.invalidDtoIn)||n.includes(c.a.mfa.login.notAuthenticated))&&(t.lsi=this.getLsiComponent("invalidCodeError"),
t.colorSchema=c.a.colorSchemas.danger),t}return null},_getFooter:function(e){this.props.credentials;var t={};return c.a.shownLanguages.forEach((function(e){t[e]=s.a.Environment.languageList[e]})),
s.a.Common.Element.create(s.a.Bricks.Div,{className:e.footer},s.a.Common.Element.create(s.a.Bricks.LanguageSelector,{className:e.footerLink,languages:t,size:c.a.size.m
}),s.a.Common.Element.create(s.a.Bricks.Dropdown,{className:e.footerLink,label:s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.alternateMethods}),size:c.a.size.m
},this._getCredentialsItem()))},_getCredentialsItem:function(){var e=this,t=this.getClassName(),n=this._credentialList.map((function(n){
return n.id!==e._credentialsId?s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{key:s.a.Common.Tools.generateUUID(),
label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:n.icon}),s.a.Common.Element.create(s.a.Bricks.Lsi,{
className:t.footerText,lsi:n.label})),onClick:function(){e.props.onSwitch(n)}}):null})),o=s.a.Common.Element.create(s.a.Bricks.Dropdown.Item,{className:t.linkLostCredentials,
key:s.a.Common.Tools.generateUUID(),label:s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Icon,{className:t.footerIcon,icon:c.a.mfa.lostSecondFactorIcon
}),s.a.Common.Element.create(s.a.Bricks.Lsi,{className:t.footerText,lsi:P.a.mfa.login.lostSecondFactor})),onClick:this._redirectToLostSecondFactor});return n.push(o),n},_getHeader:function(e){
return s.a.Common.Element.create(s.a.Common.Fragment,null,s.a.Common.Element.create(s.a.Bricks.Div,{className:e.header},s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.mfa.login.header
})),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.headerInfo},s.a.Common.Element.create(s.a.Bricks.Text,{content:this.getLsiComponent("headerInfo")}," ")))},_setFormRef:function(e){
this._form=e},_getForm:function(e){return s.a.Common.Element.create(b.a,O({action:u.a.getOidcCommandUrl(c.a.mfa.login.backupCodesForm.authenticateUri),ref_:this._setFormRef,
method:c.a.httpMethods.post,component:this},this.getMainPropsToPass()),s.a.Common.Element.create(s.a.Bricks.Div,{className:e.content},s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"state",
value:k.a.getOidcState()}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"credentialsId",value:this._credentialsId}),s.a.Common.Element.create(s.a.Forms.Text,{hidden:!0,name:"realmCode",
value:this._realmCode}),s.a.Common.Element.create(s.a.Forms.Text,{placeholder:P.a.mfa.login.backupCodesForm.textPlaceholder,name:"backupCode",autocompleteItems:[],required:!0,requiredMessage:" "
}),s.a.Common.Element.create(y.a,{mainAttrs:{type:c.a.buttonTypes.submit},id:s.a.Common.Tools.generateUUID(),className:e.verifyButton,onClick:this._onClickHandler,colorSchema:c.a.colorSchemas.success
},this.getLsiComponent("verifyMe"))))},_onClickHandler:function(e,t){t.stopPropagation()},_getBodySections:function(e){var t=this,n=[];n.push({content:this._getHeader(e),
key:c.a.mfa.login.backupCodesForm.headerKey}),n.push({content:this._getForm(e),key:c.a.mfa.login.backupCodesForm.formKey}),n.push({content:this._getFooter(e),
key:c.a.mfa.login.backupCodesForm.footerKey});var o=JSON.parse(k.a.getUuAppErrorMap());if(this._shouldPassUuAppErrorMap(o)?o:null){var i=this._getUuAppErrorMap();i&&setTimeout((function(){
t._setAlert(i.lsi,i.colorSchema)}),0)}return n},_redirectToLostSecondFactor:function(){var e=f.Uri.UriBuilder.parse(u.a.getCommandUri(c.a.routes.lostSecondFactor))
;e.setParameters(k.a.getParamsToPass(c.a.routes.login,c.a.routes.lostSecondFactor)),e=e.toUri().toString(),window.open(e,c.a.windowParams.target.blank),window.close()},render:function(){
var e=this.getClassName();this._credentialList=this.props.credentials;var t=window.sessionStorage.getItem(c.a.sessionStorageKeys.selectedCredentials),n=this._credentialList.find((function(e){
return e.id===t}));return n||(n=this._credentialList[0]),this._credentialsId=n.id,this._realmCode=n.realmCode,s.a.Common.Element.create(C.a,O({},this.getMainPropsToPass(),{
bodySections:this._getBodySections(e)}))}}),D=n(50);n(423);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function F(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){
if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
;var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){
n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw a}}}}function V(e,t){
(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var G=s.a.Common.Component.create({mixins:[s.a.Common.BaseMixin],statics:{tagName:h.TAG+".Mfa",classNames:{
main:h.CSS+"-mfa"},lsi:P.a.authSmsForm},_loadCredentials:function(){this._selectedAuthNProvider=null,this._selectedCredentials=window.sessionStorage.getItem(h.sessionStorageKeys.selectedCredentials)
;var e,t=window.sessionStorage.getItem(h.sessionStorageKeys.availableCredentials),n=[],o=[],i=[],a=F(t=t?JSON.parse(t):[]);try{for(a.s();!(e=a.n()).done;){var r=e.value
;switch(this._selectedCredentials&&this._selectedCredentials===r.id&&(this._selectedAuthNProvider=r.authNProvider),r.authNProvider){case h.mfa.smsAuthNProvider:
var s=r.name&&r.name.split("@"),c=s?s[0]:null,u=s?s[1]:null;r.icon=h.mfa.phoneIcon[u]||h.mfa.phoneIcon.default,P.a.mfa.phoneType[u]?r.label=P.a.mfa.phoneType[u]:r.label=c,
u===h.mfa.primaryPhoneType?o.unshift(r):o.push(r);break;case h.mfa.totpAuthNProvider:r.icon=h.mfa.totpIcon,r.name?r.label=r.name:r.label=P.a.mfa.defaultTotpType,n.push(r);break
;case h.mfa.backupCodesAuthNProvider:r.icon=h.mfa.backupCodesIcon,r.name?r.label=r.name:r.label=P.a.mfa.defaultBackupCodesType,i.push(r)}}}catch(e){a.e(e)}finally{a.f()}
this._selectedAuthNProvider||(n.length>0?this._selectedAuthNProvider=h.mfa.totpAuthNProvider:o.length>0?this._selectedAuthNProvider=h.mfa.smsAuthNProvider:i.length>0&&(this._selectedAuthNProvider=h.mfa.backupCodesAuthNProvider)),
this._credentialsList=[].concat(n,o,i),!this._selectedCredentials&&this._credentialsList.length>0&&(this._selectedCredentials=this._credentialsList[0].id,
window.sessionStorage.setItem(h.sessionStorageKeys.selectedCredentials,this._selectedCredentials))},_onSwitch:function(e){window.sessionStorage.setItem(h.sessionStorageKeys.selectedCredentials,e.id),
this.setState({state:this.state})},render:function(){return this._loadCredentials(),s.a.Common.Element.create(E.a,M({},this.getMainPropsToPass(),{showGDPRLogin:!0,showLanguageSelector:!1
}),this._selectedAuthNProvider===h.mfa.smsAuthNProvider?s.a.Common.Element.create(L,M({credentials:this._credentialsList,onSwitch:this._onSwitch
},this.getMainPropsToPass())):this._selectedAuthNProvider===h.mfa.totpAuthNProvider?s.a.Common.Element.create(T,M({credentials:this._credentialsList,onSwitch:this._onSwitch
},this.getMainPropsToPass())):this._selectedAuthNProvider===h.mfa.backupCodesAuthNProvider?s.a.Common.Element.create(R,M({credentials:this._credentialsList,onSwitch:this._onSwitch
},this.getMainPropsToPass())):s.a.Common.Element.create(D.a,this.getMainPropsToPass()))}}),H=(n(425),s.a.Common.Component.create({mixins:[s.a.Common.BaseMixin],statics:{tagName:g.a.TAG+".LoginBottom",
classNames:{main:g.a.CSS+"-login-bottom"},lsi:P.a.defaultCopyright},render:function(){
return s.a.Common.Element.create(s.a.Common.Div,this.getMainPropsToPass(),s.a.Common.Element.create(s.a.Bricks.Span,null,s.a.Common.Element.create(s.a.Bricks.Lsi,{lsi:P.a.defaultCopyright.content,
params:[g.a.product,s.a.Environment.appVersion,u.a.getCommandUri(g.a.routes.about)]})))}}));n(427);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){
var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Z=s.a.Common.Component.create({mixins:[s.a.Common.BaseMixin],statics:{
tagName:c.a.TAG+".Spa",classNames:{main:c.a.CSS+"-spa"}},componentWillMount:function(){var e=k.a.getValidLanguage();e?(s.a.Common.Tools.setLanguage(e),
window.localStorage&&window.localStorage.setItem(c.a.localStorageKeys.language,e)):(e=window.localStorage&&window.localStorage.getItem(c.a.localStorageKeys.language))&&s.a.Common.Tools.setLanguage(e),
s.a.Environment.EventListener.registerEvent("lsi",this.getId(),this._saveLanguageToLocalStorage),this._goToMfa=!1;var t=k.a.getUuAppErrorMap();if(t){var n=JSON.parse(t),o=Object.keys(n)[0]
;if(o===c.a.mfa.login.acrValuesNotSatisfiedErrorCode){var i=n[o].paramMap.acrValues;if(-1===i.indexOf("low")&&-1===i.indexOf("standard")){var a=n[o].paramMap.credentials
;window.sessionStorage.setItem(c.a.sessionStorageKeys.availableCredentials,JSON.stringify(a)),window.sessionStorage.removeItem(c.a.sessionStorageKeys.selectedCredentials),this._goToMfa=!0}
}else o&&(o.indexOf(c.a.mfa.login.authTotpErrorCodePrefix)>-1||o.indexOf(c.a.mfa.login.authSmsErrorCodePrefix)>-1||o.indexOf(c.a.mfa.login.authBackupCodesErrorCodePrefix)>-1)&&(this._goToMfa=!0)}},
_saveLanguageToLocalStorage:function(e){window.localStorage&&window.localStorage.setItem(c.a.localStorageKeys.language,e)},render:function(){
return k.a.getOidcState()?this._goToMfa?k.a.getLoginHint()?s.a.Common.Element.create(s.a.Bricks.Page,q({},this.getMainPropsToPass(),{type:2,bottom:s.a.Common.Element.create(H,null)
}),s.a.Common.Element.create(G,null)):s.a.Common.Element.create(s.a.Common.Redirect,{uri:u.a.APP_BASE_URI}):s.a.Common.Element.create(s.a.Bricks.Page,q({},this.getMainPropsToPass(),{type:2,
bottom:s.a.Common.Element.create(H,null)}),s.a.Common.Element.create(_,null)):s.a.Common.Element.create(s.a.Common.Redirect,{uri:u.a.APP_BASE_URI})}});n(429)
;if(s.a.Environment.appVersion="1.12.0-dev",s.a.Environment.languageList.sv||(s.a.Environment.languageList.sv={flag:s.a.Environment.basePath+"assets/flags/se.png",language:"Svenska"}),
!navigator.userAgent.match(/iPhone|iPad|iPod/)){var K=document.createElement("link");K.rel="manifest",K.href="assets/manifest.json",document.head.appendChild(K)}function X(e){e,
i.a.render(s.a.Common.Element.create(a.AppContainer,null,s.a.Common.Element.create(Z,null)),document.getElementById(e))}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0
});var o,i=(o=n(15))&&"object"==typeof o&&"default"in o?o.default:o;function a(e){return a.warnAboutHMRDisabled&&(a.warnAboutHMRDisabled=!0,
console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),
i.Children.only(e.children)}a.warnAboutHMRDisabled=!1;var r=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return i.createElement(a,null,i.createElement(e,t))}
}:function(e){return e}};r.shouldWrapWithAppContainer=!1;t.AppContainer=a,t.hot=r,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},
t.configureComponent=function(){}},45:function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__45__},47:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(12),n(24),
n(1)),r=n(14),s=n(4),c=n(20),u=n(16),d=(n(66),n(3));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var m=i.a.Common.Component.create({mixins:[i.a.Common.BaseMixin,i.a.Common.ElementaryMixin],
statics:{tagName:a.a.TAG+".AnonymousAccessButton",classNames:{main:a.a.CSS+"-anonymous-access-button",button:a.a.CSS+"-anonymous-access-button-button"},lsi:d.a.anonymousAccessButton},
render:function(){var e=this,t=this.getClassName();return i.a.Common.Element.create(u.a,l({},this.getMainPropsToPass(),{action:r.a.getOidcCommandUrl(a.a.oidc.authAccessCodes.authenticate),
method:a.a.httpMethods.post,ref_:function(t){return e._form=t},component:this,alertCloseTimer:0}),i.a.Common.Element.create(i.a.Forms.Text,{name:a.a.loginRegistrationParams.state,hidden:!0,
value:s.a.getOidcState()}),i.a.Common.Element.create(i.a.Forms.Text,{name:a.a.loginRegistrationParams.accessCode1,hidden:!0,value:a.a.anonymousAccessCodes.accessCode1
}),i.a.Common.Element.create(i.a.Forms.Text,{name:a.a.loginRegistrationParams.accessCode2,hidden:!0,value:a.a.anonymousAccessCodes.accessCode2}),i.a.Common.Element.create(c.a,{mainAttrs:{
type:a.a.buttonTypes.submit},id:i.a.Common.Tools.generateUUID(),className:t.button,content:this.getLsiComponent("content"),size:a.a.size.l}))}});t.a=m},48:function(e,t,n){"use strict";e.exports={
get BaseError(){return n(28)},get Config(){return n(40)},get NameConverter(){return n(75)},get Loader(){return n(42)},get ValueConverter(){return n(33)},get OptsReader(){return n(76)},
get ContextStore(){return n(77)},get GlobalStore(){return n(79)},get Histogram(){return n(80)},get DuplicateLibraryValidator(){return n(81)},get Finder(){return n(82)},get Digest(){return n(43)},
get Mutex(){return n(85)},get LruCache(){return n(87)},get Base64(){return n(88)},get Json(){return n(26)}}},49:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(12),
n(13)),r=n(1),s=n(14),c=n(4),u=n(16),d=n(20),l=n(3);n(93);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
var p=i.a.Common.Component.create({mixins:[i.a.Common.BaseMixin,i.a.Common.ElementaryMixin,i.a.Common.CallsMixin,i.a.Common.ScreenSizeMixin,i.a.Common.IdentityMixin],statics:{
tagName:r.a.TAG+".ThirdPartyButtonGroup",classNames:{main:r.a.CSS+"-third-party-button-group",header:r.a.CSS+"-third-party-button-group-header",services:r.a.CSS+"-third-party-button-group-services",
servicesExpanded:r.a.CSS+"-third-party-button-group-services-expanded",service:r.a.CSS+"-third-party-button-group-services-service",
serviceIcon:r.a.CSS+"-third-party-button-group-services-service-icon",serviceText:r.a.CSS+"-third-party-button-group-services-service-text",
serviceGoogle:r.a.CSS+"-third-party-button-group-services-service-google",serviceFacebook:r.a.CSS+"-third-party-button-group-services-service-facebook",
serviceMicrosoft:r.a.CSS+"-third-party-button-group-services-service-microsoft",alertContainer:r.a.CSS+"-third-party-button-group-alert-container",
alertText:r.a.CSS+"-third-party-button-group-alert-text",showMore:r.a.CSS+"-third-party-button-group-show-more",showMoreShown:r.a.CSS+"-third-party-button-group-show-more-shown",
showMoreHidden:r.a.CSS+"-third-party-button-group-show-more-hidden",showMoreText:r.a.CSS+"-third-party-button-group-show-more-text",showMoreIcon:r.a.CSS+"-third-party-button-group-show-more-icon"},
lsi:l.a.thirdPartyButtonGroup},propTypes:{buttonsAbove:i.a.PropTypes.array,buttonsBellow:i.a.PropTypes.array,
type:i.a.PropTypes.oneOf([r.a.thirdPartyButtonTypes.registration,r.a.thirdPartyButtonTypes.login]),services:i.a.PropTypes.arrayOf(i.a.PropTypes.string),servicesRealms:i.a.PropTypes.shape(),
shownServices:i.a.PropTypes.number,header:i.a.PropTypes.oneOfType([i.a.PropTypes.string,i.a.PropTypes.object]),withAlert:i.a.PropTypes.bool,hideMoreServicesIcon:i.a.PropTypes.bool,
rememberMe:i.a.PropTypes.bool,alertBusHeight:i.a.PropTypes.number,uuAppErrorMap:i.a.PropTypes.shape(),identity:r.a.commonPropTypes.identity},getDefaultProps:function(){var e;return{
services:[r.a.thirdPartyButtonServices.google,r.a.thirdPartyButtonServices.facebook,r.a.thirdPartyButtonServices.microsoft],servicesRealms:(e={},m(e,r.a.thirdPartyButtonServices.google,{
authNProvider:r.a.thirdPartyButtonProviders.google,code:r.a.thirdPartyButtonRealmCodes.google,logoUrl:r.a.thirdPartyButtonLogos.google,label:r.a.thirdPartyButtonLabels.google}),
m(e,r.a.thirdPartyButtonServices.facebook,{authNProvider:r.a.thirdPartyButtonProviders.facebook,code:r.a.thirdPartyButtonRealmCodes.facebook,logoUrl:r.a.thirdPartyButtonLogos.facebook,
label:r.a.thirdPartyButtonLabels.facebook}),m(e,r.a.thirdPartyButtonServices.microsoft,{authNProvider:r.a.thirdPartyButtonProviders.microsoft,code:r.a.thirdPartyButtonRealmCodes.microsoft,
logoUrl:r.a.thirdPartyButtonLogos.microsoft,label:r.a.thirdPartyButtonLabels.microsoft}),e),shownServices:3,withAlert:!1,hideMoreServicesIcon:!0,alertBusHeight:0,uuAppErrorMap:null}},
getInitialState:function(){return{showMore:!1}},componentWillMount:function(){this.setCalls(s.a)},componentDidMount:function(){if(this.props.uuAppErrorMap){var e=this._getUuAppErrorMap();if(e){
var t=this._alertBus;t&&t.addAlert({content:e.content,colorSchema:e.colorSchema})}}},_redirectToThirdPartyRegistration:function(e,t){
var n=a.Uri.UriBuilder.parse(s.a.getCommandUri(r.a.routes.thirdPartyRegistration));n.setParameters(c.a.getThirdPartyRegistrationParams(e,t)),n=n.toUri().toString(),window.location.href=n},
_getRedirectToOidc:function(e){var t=this.props.servicesRealms[e],n=r.a.oidc.credentials[t.authNProvider]
;return this.props.type===r.a.thirdPartyButtonTypes.registration?s.a.getOidcCommandUrl(n.createCredentials):s.a.getOidcCommandUrl(n.authenticate)},_getButton:function(e){
var t=this,n=this.props.servicesRealms[e],o=this.getClassName(),a={backgroundImage:'url("'.concat(n.logoUrl,'")')};return i.a.Common.Element.create(u.a,{action:this._getRedirectToOidc(e),
method:r.a.httpMethods.get,ref_:function(e){return t._form=e},component:this,key:i.a.Common.Tools.generateUUID()},i.a.Common.Element.create(i.a.Forms.Text,{name:r.a.loginRegistrationParams.realmCode,
hidden:!0,value:n.code,key:"realmCode"}),i.a.Common.Element.create(i.a.Forms.Text,{name:r.a.loginRegistrationParams.state,key:"redirectAfterAuthNUri",hidden:!0,value:c.a.getOidcState()
}),i.a.Common.Element.create(i.a.Forms.Text,{name:r.a.loginRegistrationParams.rememberMe,key:"rememberMe",hidden:!0,value:this.props.rememberMe?this.props.rememberMe.toString():"false"
}),i.a.Common.Element.create(d.a,{mainAttrs:{type:r.a.buttonTypes.submit},key:n.code,id:i.a.Common.Tools.generateUUID(),className:o.service},i.a.Common.Element.create(i.a.Bricks.Span,{style:a,
className:o.serviceIcon}),i.a.Common.Element.create(i.a.Bricks.Span,{className:o.serviceText,content:n.label})))},_shouldHideAdditionalServices:function(){
return this.props.shownServices<this.props.services.length&&!this.state.showMore},_getButtons:function(){
return(this._shouldHideAdditionalServices()?this.props.services.slice(0,this.props.shownServices):this.props.services).map(this._getButton)},_toggleShowMore:function(){this.setState((function(e){
return{showMore:!e.showMore}}))},_buttonOffset:function(){var e;if(this.props.withAlert&&!this.isXs()){var t=this.props.header?28:52;e={marginTop:this.props.alertBusHeight+t}}else e=null;return e},
_getUuAppErrorMap:function(){var e=JSON.parse(c.a.getParam("uuAppErrorMap"));if(e){var t={content:this.getLsiComponent("unExpectedError"),colorSchema:r.a.colorSchemas.danger
},n=Object.keys(e)[0],o="".concat(n).match(r.a.identityAccountNotInProperStateRegex);if(o){var i=e[n].paramMap;if(i&&"terminated"===i.identityAccountState)return null
;var a=i.realmCode,s=i.authNProvider;if(!a){var u="".concat(o[4]).toLowerCase(),d=this.props.servicesRealms[u];d&&(a=d.code,s=d.authNProvider)}a||(a=c.a.getAuthNRealmCode(),s=c.a.getAuthNProvider()),
t=this._checkToken(e[n].paramMap,s,a)}return n.includes(r.a.unexpectedExternalIdPError)&&(t.content=this.getLsiComponent("unexpectedExternalIdPError"),t.colorSchema=r.a.colorSchemas.danger),
n.includes(r.a.errorCodes.loadOrCreateExternalIdentity.accountWithEmailExisted)&&(t.content=this.getLsiComponent("emailIsNotUniqueError",null,[this._getRegistrationUrl()]),
t.colorSchema=r.a.colorSchemas.danger),t}},_getRegistrationUrl:function(){return s.a.getCommandUri(r.a.routes.registration,c.a.getParamsToPass(r.a.routes.login,r.a.routes.registration))},
_checkToken:function(e,t,n){var o=this,a={content:this.getLsiComponent("tokenNotExists"),colorSchema:r.a.colorSchemas.danger}
;return e&&e.identityAccountState&&"created"===e.identityAccountState&&(a.content=i.a.Common.Element.create(i.a.Bricks.Span,{className:this.getClassName("alertText")
},this.getLsiComponent("tokenValid"),i.a.Common.Element.create(i.a.Bricks.Link,{onClick:function(){return o._redirectToThirdPartyRegistration(t,n)},content:this.getLsiComponent("completeRegister")})),
a.colorSchema=r.a.colorSchemas.primary),a},_getAlertBus:function(){var e=this;return i.a.Common.Element.create(i.a.Bricks.Div,{className:this.getClassName("alertContainer")
},i.a.Common.Element.create(i.a.Bricks.AlertBus,{ref_:function(t){return e._alertBus=t},closeTimer:0,forceRender:!0,closeDisabled:!0}))},_getShowMoreButton:function(){var e=this.getClassName()
;return i.a.Common.Element.create(i.a.Bricks.Link,{className:i.a.Common.Tools.joinClassNames(e.showMore,this._shouldHideAdditionalServices()?e.showMoreShown:e.showMoreHidden),
onClick:this._toggleShowMore},i.a.Common.Element.create(i.a.Bricks.Span,{className:e.showMoreText,content:this.getLsiComponent("showMore")}),i.a.Common.Element.create(i.a.Bricks.Icon,{
className:e.showMoreIcon,icon:r.a.icons.mdiChevronDoubleDown}))},render:function(){var e=this.getMainPropsToPass(),t=this.getClassName(),n=this._buttonOffset()
;return i.a.Common.Element.create(i.a.Bricks.Div,e,this.props.header?i.a.Common.Element.create(i.a.Bricks.Text,{content:this.props.header,className:t.header
}):null,this.props.uuAppErrorMap&&this._getAlertBus(),i.a.Common.Element.create(i.a.Bricks.Div,{
className:this._shouldHideAdditionalServices()?t.services:i.a.Common.Tools.joinClassNames(t.services,t.servicesExpanded),style:n},this._getButtons()),this._getShowMoreButton())}});t.a=p},
5:function(e,t,n){"use strict";var o=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){
return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
;t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){
Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
var s=a(a({},o.a),{},{TAG:o.a.namespace.core.tag,CSS:o.a.namespace.core.css});t.a=s},50:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(12),n(13)),r=n(5),s=n(14),c=n(19),u=n(3);n(95)
;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e
}).apply(this,arguments)}var l=i.a.Common.VisualComponent.create({mixins:[i.a.Common.BaseMixin,i.a.Common.LsiMixin],statics:{tagName:r.a.TAG+".ConfigRedirectForm",classNames:{
main:r.a.CSS+"-config-redirect-form",header:r.a.CSS+"-config-redirect-form-header",headerInfo:r.a.CSS+"-config-redirect-form-header-info",content:r.a.CSS+"-config-redirect-form-content",
footer:r.a.CSS+"-config-redirect-form-footer",footerLink:r.a.CSS+"-config-redirect-form-footer-link",footerIcon:r.a.CSS+"-config-redirect-form-footer-icon",
redirectHeader:r.a.CSS+"-config-redirect-form-redirect-header",redirectLink:r.a.CSS+"-config-redirect-form-redirect-link"},lsi:u.a.mfa.login.configRedirectForm},_redirectToMfaConfiguration:function(){
var e=a.Uri.UriBuilder.parse(s.a.getCommandUri(r.a.routes.mfaConfiguration));window.open(e.toUri().toString(),r.a.windowParams.target.blank),window.close()},_getFooter:function(e){var t={}
;return r.a.shownLanguages.forEach((function(e){t[e]=i.a.Environment.languageList[e]})),i.a.Common.Element.create(i.a.Bricks.Div,{className:e.footer
},i.a.Common.Element.create(i.a.Bricks.LanguageSelector,{className:e.footerLink,languages:t,size:r.a.size.m}))},_getHeader:function(e){
return i.a.Common.Element.create(i.a.Common.Fragment,null,i.a.Common.Element.create(i.a.Bricks.Div,{className:e.header},i.a.Common.Element.create(i.a.Bricks.Lsi,{lsi:u.a.mfa.login.header
})),i.a.Common.Element.create(i.a.Bricks.Div,{className:e.headerInfo},i.a.Common.Element.create(i.a.Bricks.Text,{content:this.getLsiComponent("headerInfo")}," ")))},
_getRedirectToMfaConfiguration:function(e){return i.a.Common.Element.create(i.a.Bricks.Div,null,i.a.Common.Element.create(i.a.Bricks.Link,{onClick:this._redirectToMfaConfiguration,
className:e.redirectLink,content:this.getLsiComponent("redirectToMfaConfiguration")}))},_getBodySections:function(e,t){var n=[];return n.push({content:this._getHeader(e),
key:r.a.mfa.login.configRedirectForm.headerKey}),n.push({content:this._getRedirectToMfaConfiguration(e,t),key:r.a.mfa.login.configRedirectForm.redirectToConfigKey}),n.push({content:this._getFooter(e),
key:r.a.mfa.login.configRedirectForm.footerKey}),n},render:function(){var e=this.getClassName();return i.a.Common.Element.create(c.a,d({},this.getMainPropsToPass(),{
configuration:this.props.configuration,bodySections:this._getBodySections(e)}))}});t.a=l},58:function(e,t,n){var o=n(59);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,
insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},59:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-form{padding:0}.uu-identitymanagement-bricks-form .uu5-forms-label-required>label:after,.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-label-required>label:after{display:none}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-label{padding:0;font-size:16px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-input-wrapper{margin-top:0;font-size:16px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-input{margin-top:10px;margin-bottom:10px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-input-error .uu5-forms-input-form-item{border:2px solid #de4847;border-radius:2px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-items-input,.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-text-input{margin-top:6px;margin-bottom:6px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-message{padding:0;margin:0 0 6px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-content:before{font-family:Material Design Icons,sans-serif;content:"\\F028";font-size:26px;color:#fff;text-align:center;line-height:20px;margin-right:15px;margin-left:15px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .color-schema-red.uu5-bricks-alert{background:#de4847;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:3px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .color-schema-red.uu5-bricks-alert .uu5-bricks-alert-content{color:#fff}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .color-schema-red.uu5-bricks-alert .uu5-bricks-link:not([class*=color-schema-]){color:#fff;text-decoration:underline}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-center{left:unset;-webkit-transform:unset;transform:unset}.uu5-ua-ie .uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-center{left:auto;-webkit-transform:none;transform:none}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert{position:static}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert.uu5-common-hidden{display:none!important}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-content{font-size:14px;letter-spacing:0;line-height:19px;padding:2px 0}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-content .uu5-bricks-span{font-size:14px;letter-spacing:0;line-height:19px}@media screen and (min-width:481px){.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert-content{padding:10px 0}}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-bricks-alert{margin-bottom:10px;margin-left:-16px;margin-right:-16px}@media screen and (min-width:481px){.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-label{margin-top:6px;margin-bottom:6px;text-align:right;font-size:14px;padding-right:16px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-label .uu5-bricks-span,.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-label label{vertical-align:middle}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-input-wrapper{font-size:14px}.uu-identitymanagement-bricks-form:not(.uu-identitymanagement-bricks-form-own-style) .uu5-forms-input{margin-top:4px;margin-bottom:4px}}',""]),
e.exports=t},6:function(e,t,n){"use strict";var o,i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
var s="identityManagement-maing01",c="uu-identitymanagement-maing01",u="UuIdentitymanagement",d="uu-identitymanagement",l={product:"uuIdentitymanagementg01",SPA_CCR_KEY:"spaCCRkey",
SPA_AUTHENTICATED_CCR_KEY:"spaAuthenticatedCCRkey",FORM_CCR_KEY:"formCCRkey",TAG:u,CSS:d,namespace:{core:{tag:u+".Core",css:d+"-core"},bricks:{tag:u+".Bricks",css:d+"-bricks"},routes:{tag:u+".Routes",
css:d+"-routes"}},missingValue:"-",weight:{primary:"primary",secondary:"secondary"},identityType:{uuEe:"uuEe",uuThing:"uuThing",uuAi:"uuAi",uuPerson:"uuPerson"},filterPanelInputType:{text:"text",
select:"select",date:"date"},spaAuthenticatedCcr:u+".SpaAuthenticated",accessCode:{currentPostfix:"Current",newPostfix:"New",currentAccessCode1:"accessCode1Current",
currentAccessCode2:"accessCode2Current",newAccessCode1:"accessCode1New",newAccessCode2:"accessCode2New",
strengthScoreLsi:["tooGuessable","veryGuessable","somewhatGuessable","safelyUnguessable","veryUnguessable"]},reCaptcha:{actions:{thirdPartyRegistration:"thirdPartyRegistration",
registration:"registration",registrationEmail:"registrationEmail",checkIdentityState:"checkIdentityState",deleteUnverifiedIdentity:"deleteUnverifiedIdentity",lostAccessCodes:"lostAccessCodes",
setAccessCodes:"setAccessCodes",resetAccessCodes:"resetAccessCodes",sendVerificationSms:"sendVerificationSms",sendAuthenticationSms:"sendAuthenticationSms",lostSecondFactor:"lostSecondFactor",
resetSecondFactor:"resetSecondFactor"}},defaultButtons:{ok:{show:!0}},defaultLanguage:"en",defaultTimezone:"Europe/Prague",colorThemes:{black:"BLACK",white:"WHITE"},errorCodes:{common:{
notAuthorized:"uu-app-workspace/authorization/userIsNotAuthorized",appNotAuthorized:"notAuthorized"},activatePersonIdentity:{
verificationTimeIsNotValid:"".concat(s,"/activatePersonIdentity/verificationTimeIsNotValid")},setAccessCodesByState:{cmdFailed:"".concat(s,"/setAccessCodesByState/cmdFailed"),
setAccessCodesByStateAdditionalVerificationFailed:"".concat(s,"/setAccessCodesByState/additionalVerificationFailed")},resetSecondFactor:{
accessCodesVerificationFailed:"".concat(s,"/resetSecondFactor/accessCodesVerificationFailed")},setAccessCodes:{
setAccessCodesByStateVerificationTimeIsNotValid:"".concat(s,"/setAccessCodesByState/verificationTimeIsNotValid"),
setAccessCodesVerificationTimeIsNotValid:"".concat(s,"/setAccessCodes/verificationTimeIsNotValid"),setAccessCodesNewAccessCode1Blocked:"".concat(s,"/setAccessCodes/newAccessCode1Blocked"),
setAccessCodesNewAccessCode2Blocked:"".concat(s,"/setAccessCodes/newAccessCode2Blocked"),setAccessCodesWrongAccessCode1:"".concat(s,"/setAccessCodes/wrongAccessCode1"),
setAccessCodesWrongAccessCode2:"".concat(s,"/setAccessCodes/wrongAccessCode2"),createAccessCodesVerificationTimeIsNotValid:"".concat(s,"/createAccessCodes/verificationTimeIsNotValid"),
createAccessCodesNewAccessCode1Blocked:"".concat(s,"/createAccessCodes/newAccessCode1Blocked"),
setAccessCodesAndActivateIdentityVerificationTimeIsNotValid:"".concat(s,"/setAccessCodesAndActivateIdentity/verificationTimeIsNotValid"),
setAccessCodesAndActivateIdentityNewAccessCode1Blocked:"".concat(s,"/setAccessCodesAndActivateIdentity/newAccessCode1Blocked"),
setAccessCodesAndActivateIdentityNewAccessCode2Blocked:"".concat(s,"/setAccessCodesAndActivateIdentity/newAccessCode2Blocked"),
setAccessCodesAndActivateIdentityWrongAccessCode1:"".concat(s,"/setAccessCodesAndActivateIdentity/wrongAccessCode1"),
setAccessCodesAndActivateIdentityWrongAccessCode2:"".concat(s,"/setAccessCodesAndActivateIdentity/wrongAccessCode2"),
createAccessCodesAndActivateIdentityVerificationTimeIsNotValid:"".concat(s,"/createAccessCodesAndActivateIdentity/verificationTimeIsNotValid"),
createAccessCodesAndActivateIdentityNewAccessCode1Blocked:"".concat(s,"/createAccessCodesAndActivateIdentity/newAccessCode2Blocked")},checkSetAccessCodesPreconditions:{
checkSetAccessCodesPreconditionsVerificationTimeIsNotValid:"".concat(s,"/checkSetAccessCodesPreconditions/verificationTimeIsNotValid"),
checkSetAccessCodesPreconditionsNoRemainingAttempts:"".concat(s,"/checkSetAccessCodesPreconditions/noRemainingAttempts"),
checkSetAccessCodesPreconditionsIdentityDoesNotExist:"".concat(s,"/checkSetAccessCodesPreconditions/identityDoesNotExist")},checkResetSecondFactorPreconditions:{
checkResetSecondFactorPreconditionsVerificationTimeIsNotValid:"".concat(s,"/checkResetSecondFactorPreconditions/verificationTimeIsNotValid"),
checkResetSecondFactorPreconditionsNoRemainingAttempts:"".concat(s,"/checkResetSecondFactorPreconditions/noRemainingAttempts"),
checkResetSecondFactorPreconditionsIdentityDoesNotExist:"".concat(s,"/checkResetSecondFactorPreconditions/identityDoesNotExist")},passAccessCodes:{
newAccessCode1Blocked:"".concat(s,"/passAccessCodes/newAccessCode1Blocked"),newAccessCode2Blocked:"".concat(s,"/passAccessCodes/newAccessCode2Blocked"),
credentialsNotFound:"".concat(s,"/passAccessCodes/credentialsNotFound"),oidcNotAuthorized:"".concat(s,"/passAccessCodes/oidcNotAuthorized"),
newAccessCode2TooWeak:"".concat(s,"/passAccessCodes/newAccessCode2TooWeak")},createAccessCodesByPerson:{uuIdentityAccessCodesAuthNRealm:{
credentialsAlreadyExist:"".concat(s,"/createAccessCodesByPerson/credentialsAlreadyExist"),newAccessCode1Blocked:"".concat(s,"/createAccessCodesByPerson/newAccessCode1Blocked"),
newAccessCode2Blocked:"".concat(s,"/createAccessCodesByPerson/newAccessCode2Blocked")},uuIdentityFacebookAuthNRealm:{},uuIdentityGoogleAuthNRealm:{},uuIdentityMicrosoftAuthNRealm:{}},
createPersonIdentity:{emailIsNotUnique:"".concat(s,"/createPersonIdentity/emailIsNotUnique"),identityAccountWasNotCreated:"".concat(s,"/createPersonIdentity/identityAccountWasNotCreated"),
sendEmailFailed:"".concat(s,"/createPersonIdentity/sendEmailFailed")},createPersonBySpecialExecutive:{emailIsNotUnique:"".concat(s,"/createPersonBySpecialExecutive/emailIsNotUnique")},
createAndActivatePersonIdentity:{emailIsNotUnique:"".concat(s,"/createAndActivatePersonIdentity/emailIsNotUnique")},resetAccessCodes:{
identityDoesNotExist:"".concat(s,"/resetAccessCodes/identityDoesNotExist"),identityIsNotActive:"".concat(s,"/resetAccessCodes/identityIsNotActive")},lostSecondFactor:{
identityDoesNotExist:"".concat(s,"/lostSecondFactor/identityDoesNotExist"),identityIsNotActive:"".concat(s,"/lostSecondFactor/identityIsNotActive")},sendVerificationEmail:{
identityIsNotUnverified:"".concat(s,"/sendVerificationEmail/identityIsNotUnverified"),identityIsNotUnverifiedByPerson:"".concat(s,"/sendVerificationEmailByPerson/identityIsNotUnverified"),
emailIsNotUnique:"".concat(s,"/sendVerificationEmail/emailIsNotUnique"),emailIsNotUniqueByPerson:"".concat(s,"/sendVerificationEmailByPerson/emailIsNotUnique"),
sendEmailFailed:"".concat(s,"/sendVerificationEmail/sendEmailFailed"),sendEmailFailedByPerson:"".concat(s,"/sendVerificationEmailByPerson/sendEmailFailed")},administrationPortal:{
identityDoesNotExist:"".concat(s,"/getIdentity/identityDoesNotExist"),identityWasNotFound:"".concat(s,"/getIdentityByEmail/identityWasNotFound")},login:{
notAuthenticated:"uu-oidc-main/authAccessCodes/authenticateCredentials/notAuthenticated",identityAccountNotInProperState:"identityAccountNotInProperState",authThirdPartyCodes:{
authFacebook:"authFacebook",authGoogle:"authGoogle",authMicrosoft:"authMicrosoft"},acrValuesNotSatisfiedErrorCode:"uu-oidc-main/auth/acrValuesNotSatisfied"},activateOrVerifyExternalIdentity:{
emailIsNotUnique:"".concat(s,"/activateOrVerifyExternalIdentity/emailIsNotUnique"),sendEmailFailed:"".concat(s,"/activateOrVerifyExternalIdentity/sendEmailFailed")},deleteUnverifiedIdentity:{
identityAccountDoesNotExistOrIsAlreadyActive:"".concat(s,"/uuPersonIdentity/deleteUnverifiedIdentity/identityAccountDoesNotExistOrIsAlreadyActive")},loadOrCreateExternalIdentity:{
identityIsNotInValidState:"".concat(s,"/loadOrCreateExternalIdentity/identityIsNotInValidState"),accountWithEmailExisted:"".concat(s,"/loadOrCreateExternalIdentity/emailIsNotUnique")},
showAuthorizationCode:{},changeEmail:{emailIsNotUnique:"".concat(s,"/changeIdentityEmail/emailIsNotUnique"),
identityDoesNotFoundByVerificationCode:"".concat(s,"/changeIdentityEmail/identityDoesNotFoundByVerificationCode"),newEmailDoesNotExist:"".concat(s,"/changeIdentityEmail/newEmailDoesNotExist")},
changeOrVerifyEmail:{emailIsNotUnique:"".concat(s,"/changeOrVerifyIdentityEmail/emailIsNotUnique"),
accessCodesVerificationFailed:"".concat(s,"/changeOrVerifyIdentityEmail/accessCodesVerificationFailed")},showCredentials:{alreadyAssociatedCredentials:"alreadyAssociatedCredentials"},identityGroup:{
getByIdOrCode:{identityGroupDoesNotExist:"".concat(c,"/identityGroup/getByIdOrCode/identityGroupDoesNotExist"),invalidDtoIn:"".concat(c,"/identityGroup/getByIdOrCode/invalidDtoIn")},create:{
codeIsNotUnique:"".concat(c,"/identityGroup/create/codeIsNotUnique"),invalidDtoIn:"".concat(c,"/identityGroup/create/invalidDtoIn")},update:{
invalidDtoIn:"".concat(c,"/identityGroup/update/invalidDtoIn")},delete:{invalidDtoIn:"".concat(c,"/identityGroup/delete/invalidDtoIn"),
identityGroupIsNotEmpty:"".concat(c,"/identityGroup/delete/identityGroupIsNotEmpty"),cannotDeleteDefaultIdentityGroup:"".concat(c,"/identityGroup/delete/cannotDeleteDefaultIdentityGroup")}},identity:{
create:{identityCreateFailed:"identityCreateFailed",uuThingInvalidDtoIn:"".concat(c,"/uuThingIdentity/create/invalidDtoIn"),uuAiInvalidDtoIn:"".concat(c,"/uuAiIdentity/create/invalidDtoIn"),
uuEeInvalidDtoIn:"".concat(c,"/uuEeIdentity/create/invalidDtoIn"),emailIsNotUnique:"".concat(c,"/identityAbl/create/emailIsNotUnique")},setBasicAttributes:{
invalidDtoIn:"".concat(c,"/identityIfc/setBasicAttributes/invalidDtoIn"),emailIsNotUnique:"".concat(c,"/identityIfc/setBasicAttributes/emailIsNotUnique")},terminate:{
invalidDtoIn:"".concat(c,"/identityIfc/terminate/invalidDtoIn")}}},profiles:{specialExecutives:"SpecialExecutives",auditors:"Auditors"},colorSchemas:{danger:"danger",primary:"primary",
success:"success",warning:"warning",info:"info",grey:"grey",blue:"blue"},feedbacks:{error:"error",initial:"initial",success:"success",warning:"warning"},routes:{about:"about",
administrationPortal:"administrationPortal",changeAccessCodes:"changeAccessCodes",createIdentity:"createIdentity",registrationEmail:"registrationEmail",login:"login",lostAccessCodes:"lostAccessCodes",
changeAccessCode1:"changeAccessCode1",changeAccessCode2:"changeAccessCode2",showAssociatedPhoneNumbers:"mfaConfiguration",mfaConfiguration:"mfaConfiguration",
lostAccessCodesEmail:"lostAccessCodesEmail",lostSecondFactor:"lostSecondFactor",lostSecondFactorEmail:"lostSecondFactorEmail",registration:"registration",setAccessCodes:"settingAccessCodes",
resetSecondFactor:"resettingSecondFactor",showIdentity:"showIdentity",showProfile:"showProfile",showToken:"showToken",showCredentials:"showCredentials",thirdPartyRegistration:"thirdPartyRegistration",
updateIdentity:"editIdentity",createCredentials:"createCredentials",changeEmail:"changeEmail",operatorGate:{operatorGate:"operatorGate",identityGroupList:"operatorGate/identityGroupList",
identityGroupDetail:"operatorGate/identityGroupDetail",about:"operatorGate/about",home:"operatorGate/home"}},notAuthRoutes:{registrationEmail:"registrationEmail",login:"login",
lostAccessCodes:"lostAccessCodes",lostAccessCodesEmail:"lostAccessCodesEmail",lostSecondFactor:"lostSecondFactor",lostSecondFactorEmail:"lostSecondFactorEmail",registration:"registration",
setAccessCodes:"settingAccessCodes",thirdPartyRegistration:"thirdPartyRegistration"},thirdPartyButtonTypes:{login:"login",registration:"registration"},thirdPartyButtonServices:{google:"google",
facebook:"facebook",microsoft:"microsoft"},thirdPartyButtonProviders:{google:"googleAuthNProvider",facebook:"facebookAuthNProvider",microsoft:"microsoftAuthNProvider"},thirdPartyButtonRealmCodes:{
facebook:"uuIdentityFacebookAuthNRealm",google:"uuIdentityGoogleAuthNRealm",microsoft:"uuIdentityMicrosoftAuthNRealm"},thirdPartyButtonLabels:{facebook:"Facebook",google:"Google",microsoft:"Microsoft"
},thirdPartyButtonLogos:{facebook:"assets/img/provider_facebook_logo.svg",google:"assets/img/provider_google_logo.svg",microsoft:"assets/img/provider_microsoft_logo.svg"},regexp:{
email:/^\s*[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\s*$/,uuIdentity:/^[0-9]{1,4}-[0-9]{1,4}(-[0-9]{1,4}(-[0-9]{1,4})?)?$/,accessCode1:/^[^:]{3,256}$/,
accessCode2:/^[^:]{8,256}$/,credentialsNameParts:/([^(]*?)(\(.*?\))/,name:/^(?!.{51,})[^^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]\v\t]*$/,surname:/^(?!.{51,})[^^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]\v\t]*$/,
uesuri:/^[a-zA-Z]([a-zA-Z0-9\-_])*:((((([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+|\[[a-zA-Z0-9\-_]+\]|(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\[[a-zA-Z0-9\-_]+\]|(\$|#)\{(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\})@((([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+|\[[a-zA-Z0-9\-_]+\]|(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\[[a-zA-Z0-9\-_]+\]|(\$|#)\{(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\}))|(((([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+|\[[a-zA-Z0-9\-_]+\]|(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\[[a-zA-Z0-9\-_]+\]|(\$|#)\{(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\})))(:((([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+|\[[a-zA-Z0-9\-_]+\]|(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\[[a-zA-Z0-9\-_]+\]|(\$|#)\{(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\})){1,2}(:)?(\?(((([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+|\[[a-zA-Z0-9\-_]+\]|(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\[[a-zA-Z0-9\-_]+\]|(\$|#)\{(([^\$#=&\?:@\[\]\{\} ])|(([\\][\$#=&\?:@\[\]\{\}])))+\}))?(:([a-zA-Z0-9_])+)?(&(([^\$#=&\?:@\[\]\{\}])|(([\\][\$#=&\?:@\[\]\{\}])))+=(([^\$#=&\?:@\[\]\{\}])|(([\\][\$#=&\?:@\[\]\{\}])))+)*)?(#(([^\$#=&\?:@\[\]\{\}])|(([\\][\$#=&\?:@\[\]\{\}])))+)?$/,
uri:/^(?:([a-zA-Z]+[a-zA-Z0-9\+\-\.]*):(?:(?:\/\/(?:(?:((?:[a-zA-Z0-9\-\._~]|(?:%[a-fA-F0-9]{2})|[!\$&'\(\)\*\+\,;=]|:)+)@)?((?:[0-9]{1,3}(?:\.[0-9]{1,3}(?:\.[0-9]{1,3}(?:\.[0-9]{1,3})?)?)?)|(?:\[[a-fA-F0-9]{1,4}(?::(?:[a-fA-F0-9]{1,4})?){1,7}\])|(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2}))+))(?::(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[0-5][0-9]{4}|[1-9][0-9]{0,3}))?)?(\/(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|:|@)+)?(?:\/(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|:|@)+)?)*)?)|((?:(?:\/(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|:|@)+))|(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|:|@)+))(?:\/(?:(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|:|@)+)?)*))?(\?(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|\?|\/)*)?(#(?:[a-zA-Z0-9\-\._~]|[!\$&'\(\)\*\+\,;=]|(?:%[a-fA-F0-9]{2})|\?|\/)*)?)$/,
code:/^[0-9a-zA-Z_]{3,64}$/,identityGroupName:/^.{0,1000}$/,identityGroupDesc:/^.{0,5000}$/},tokenType:{idToken:"id_token",accessToken:"access_token",
urnAccessToken:"urn:ietf:params:oauth:token-type:access_token"},registrationEmailOrigin:{registration:"registration",thirdPartyRegistration:"thirdPartyRegistration",login:"login",
confirmRegistration:"confirmRegistration"},loadFeedbacks:{ready:"ready",error:"error",loading:"loading"},tags:{link:"UU5.Bricks.Link",form:"UU5.Forms.Form",
credentialsAccordionFormPanel:"UuIdentitymanagement.Bricks.CredentialsAccordionFormPanel",flsButton:"UuFls.Bricks.CreateIssueButton",productInfo:"UuProductCatalogue.Bricks.ProductInfo"},bgStyles:{
filled:"filled",inverted:"inverted",outline:"outline",transparent:"transparent"},oidcThemeStyles:{gradient:function(e){return"linear-gradient(".concat(e,")")},image:function(e){
return"url(".concat(e,")")},imageGradient:function(e,t){return"url(".concat(e,"), linear-gradient(").concat(t,")")}},imgTypes:["image/gif","image/jpeg","image/png"],outputImgType:"jpg",
userPhotoTypes:{circle:"circle"},userPhotoHeight:{showProfile:104,thirdPartyRegistration:80},userPhotoWidth:{showProfile:104,thirdPartyRegistration:80},labelPosition:{left:"left",right:"right"},
labelColWidthDefault:{xs:12,s:5},inputColWidthDefault:{xs:12,s:7},labelColWidth:{registration:{m:12},setAccessCodes:{xs:12}},inputColWidth:{registration:{m:12},setAccessCodes:{xs:12}},
defaultColWidth:{xs:12},registrationColWidth:{xs:12,s:6},setAccessCodesColWidth:{xs:12,s:6},identityState:{active:"active",unverified:"unverified",terminated:"terminated",suspended:"suspended"},
activateOrVerifyExternalIdentityResults:{verify:"verify"},realmState:{active:"active"},popoverPositions:{left:"left",right:"right",bottom:"bottom",top:"top",leftTop:"left-top",
leftBottom:"left-bottom",rightTop:"right-top",rightBottom:"right-bottom",topLeft:"top-left",bottomLeft:"bottom-left",topRight:"top-right",bottomRight:"bottom-right"},loggerMessage:{
realmNotActive:"Realm state is not active."},commonPropTypes:{identity:a.a.PropTypes.shape({name:a.a.PropTypes.string,uuIdentity:a.a.PropTypes.string}),configuration:a.a.PropTypes.shape({
thirdPartyList:a.a.PropTypes.array,shownThirdParties:a.a.PropTypes.number,bgColor:a.a.PropTypes.string,bgGradient:a.a.PropTypes.string,bgImageUrl:a.a.PropTypes.string,repeatBgX:a.a.PropTypes.bool,
repeatBgY:a.a.PropTypes.bool,logoUrl:a.a.PropTypes.string,textColor:a.a.PropTypes.oneOf(["WHITE","BLACK"]),registrationUrl:a.a.PropTypes.string,forgottenPasswordUrl:a.a.PropTypes.string,
helpdeskUrl:a.a.PropTypes.string,allowAnonymous:a.a.PropTypes.bool,expandPlus4ULogin:a.a.PropTypes.bool,expandPlus4URegistration:a.a.PropTypes.bool,name:a.a.PropTypes.string})},componentKeys:{login:{
loginThirdParties:"loginThirdParties",plus4ULogin:"plus4ULogin",anonymousAccessButton:"anonymousAccessButton",footer:"footer"},registrationEmail:{identityNotActive1:"identityNotActive1",
identityNotActive2:"identityNotActive2",verificationCodeExpired1:"verificationCodeExpired1",verificationCodeExpired2:"verificationCodeExpired2",emailSent1:"emailSent1",emailSent2:"emailSent2"},
registration:{registrationThirdParties:"registrationThirdParties",alternativeText:"alternativeText",registrationBody:"registrationBody",anonymousAccessButton:"anonymousAccessButton",footer:"footer"},
thirdPartyRegistration:{form:"form",footer:"footer"},setAccessCodes:{header:"header",form:"form",footer:"footer"},resetSecondFactor:{header:"header",form:"form",footer:"footer"}},stateColors:{
active:"#4CAF50",unverified:"#a9a9a9",terminated:"#d32f2f",suspended:"#fbb9c4"},icons:{mdiCheckboxBlankCircle:"mdi-checkbox-blank-circle",mdiPencil:"mdi-pencil",faUndo:"fa-undo",mdiEmail:"mdi-email",
mdiLock:"mdi-lock",mdiLockOpen:"mdi-lock-open",mdiKeyVariant:"mdi-key-variant",mdiAccount:"mdi-account",mdiAccountGroup:"mdi-account-group",mdiAccountOff:"mdi-account-off",
mdiAccountRemove:"mdi-account-remove",mdiAccountKey:"mdi-account-key",mdiAccountBox:"mdi-account-box",mdiAccountMultiple:"mdi-account-multiple",mdiPlusCircle:"mdi-plus-circle",mdiClose:"mdi-close",
mdiChevronDoubleDown:"mdi-chevron-double-down",mdiChevronDoubleUp:"mdi-chevron-double-up",mdiDotsVertical:"mdi-dots-vertical",mdiChevronUp:"mdi-chevron-up",mdiChevronDown:"mdi-chevron-down",
mdiDelete:"mdi-delete",mdiRefresh:"mdi-refresh",mdiMagnify:"mdi-magnify",mdiOpenInNew:"mdi-open-in-new",mdiRobot:"mdi-robot",mdiCogs:"mdi-cogs",mdiWifiStar:"mdi-wifi-star",
glyphiconChevronUp:"glyphicon-chevron-up",glyphiconChevronDown:"glyphicon-chevron-down",mdiQrcode:"mdi-qrcode",information:"mdi-information-outline",check:"mdi-check",uuBmlUuPerson:"uubml-uuperson",
uuBmlUuEe:"uubml-uuee",uuBmlUuAi:"uubml-uuai",uuBmlUuThing:"uubml-uuthing",mdiLogout:"mdi-logout",mdiContentCopy:"mdi-content-copy",mdiPrinter:"mdi-printer",mdiMenu:"mdi-dots-vertical"},
iconPositions:{right:"right",left:"left"},actionBarInputNames:{search:"search"},updateIdentityInputNames:{name:"name",surname:"surname",language:"language",timezone:"timezone",photo:"photo"},
registrationInputNames:{name:"name",surname:"surname",email:"email",accessCode1:"accessCode1",accessCode1Confirm:"accessCode1Confirm",accessCode2:"accessCode2",accessCode2Confirm:"accessCode2Confirm",
consents:"consents"},changeEmailInputNames:{currentEmail:"currentEmail",showUnverifiedEmail:"showUnverifiedEmail",unverifiedEmail:"unverifiedEmail"},lostAccessCodesInputNames:{email:"email"},
lostSecondFactorInputNames:{email:"email"},events:{onChange:"onChange",onBlur:"onBlur",onEnter:"onEnter",onClick:"onClick"},defaultHelpdeskUrl:"https://www.plus4u.net/contact",
defaultServiceName:"Plus4U",legacyLogin:"https://oidc.plus4u.net/",participateInPilotReq:"https://plus4u.net/ues/sesm?SessFree=ues%3AVPH-BT%3ANET%2FPILOTIDM_PRIHLASENI",bearerPrefix:"Bearer ",
languageSelectorModes:{all:"all",flag:"flag",label:"label"},links:{termsOfUse:"https://www.plus4u.net/terms",gdpr:"https://www.plus4u.net/plus4u/gdpr"},formContainerColors:{white:"White",gray:"Gray"},
justifyContent:{center:"center"},shownLanguages:["cs","sk","en","uk","es","sv"],uuIdentityAccessCodesAuthNRealm:"uuIdentityAccessCodesAuthNRealm",redirectParamKeys:["authId","identityAccountId"],
notAuthenticatedUrlParams:["clientId","invitationId"],windowParams:{href:{blank:"about:blank"},target:{blank:"_blank",self:"_self",parent:"_parent",top:"_top"}},httpMethods:{get:"GET",post:"POST"},
buttonTypes:{button:"button",submit:"submit"},momentFormats:{zoneOnly:"Z"},size:{s:"s",m:"m",l:"l",xl:"xl"},anonymousAccessCodes:{accessCode1:"anonymous",accessCode2:"anonymous"},commonUrlParams:{
language:"ui_locales"},authSmsParams:{clientId:"clientId",themeCode:"themeCode",state:"state",uuAppErrorMap:"uuAppErrorMap"},loginRegistrationParams:{clientId:"clientId",state:"state",
rememberMe:"rememberMe",loginHint:"loginHint",realms:"realms",acrValues:"acrValues",themeCode:"themeCode",realmCode:"realmCode",authNProvider:"authNProvider",accessCode1:"accessCode1",
accessCode2:"accessCode2",uuAppErrorMap:"uuAppErrorMap"},showTokenParams:{tokenType:"tokenType"},accountSettingsUrl:{
accessCodesAuthNProvider:"https://plus4u.net/ues/sesm?SessFree=ues%3AUNIVERSE%3AUNIVERSE%3A%3FUC101016%26propertycode%3DUU.MT.PROFILE",googleAuthNProvider:"https://accounts.google.com",
facebookAuthNProvider:"https://www.facebook.com/settings",microsoftAuthNProvider:"https://account.microsoft.com"},
thirdPartyButtonErrorCodes:["identityAccountNotInProperState","unexpectedExternalIdPError","emailIsNotUnique"],registrationRealms:{accessCodes:"accessCodes"},
defaultScope:"openid https:// http://localhost",peopleCardCodePrefix:"PLUS4UPPL/CARD/",peopleCpCode:"PLUS4UPPL/CP",defaultPeopleCpUri:"ues:PLUS4U-BT:PLUS4UPPL/CP",
sessFreePrefix:"https://plus4u.net/ues/sesm?SessFree=",urnIdentityPrefix:"urn:uuIdentity:",vphAccessRolePrefix:"ues:VPH-BT:",emptyFunc:function(){return!1},localStorageKeys:{
language:"uuIdentityManagementUiLocales"},sessionStorageKeys:{availableCredentials:"uuIdentityManagementAvailableCredentials",selectedCredentials:"uuIdentityManagementSelectedCredentials"},
setAccessCodesValues:{acc1:"acc1",acc2:"acc2",both:"both"}};l.defaultOidcClientConfiguration={allowAnonymous:!1,expandPlus4ULogin:!0,expandPlus4URegistration:!0,logoUrl:"",shownThirdParties:3,
textColor:l.colorThemes.white,thirdPartyList:[l.thirdPartyButtonServices.google,l.thirdPartyButtonServices.facebook,l.thirdPartyButtonServices.microsoft]},l.requiredFormInputs={
login:[l.loginRegistrationParams.accessCode1,l.loginRegistrationParams.accessCode2]},l.accessCodesConfig={accessCode2MinStrengthScore:2,accessCode1Pattern:l.regexp.accessCode1,
accessCode2Pattern:l.regexp.accessCode2},l.oidc={scope:{openid:"openid"},responseType:{idToken:"id_token"},prompt:{login:"login",registration:"registration"},credentials:{accessCodesAuthNProvider:{
defaultRealmCode:"uuIdentityAccessCodesAuthNRealm",defaultProviderName:"Access Codes",createCredentials:"authAccessCodes/createCredentials",deleteCredentials:"authAccessCodes/deleteCredentials",
authenticate:"authAccessCodes/authenticate"},genericOidcAuthNProvider:{createCredentials:"authGenericOidc/connectExternalIdentity",deleteCredentials:"authGenericOidc/deleteCredentials",
authenticate:"authGenericOidc/authenticate"},googleAuthNProvider:{defaultRealmCode:"uuIdentityGoogleAuthNRealm",defaultProviderName:"Google",createCredentials:"authGoogle/connectExternalIdentity",
deleteCredentials:"authGoogle/deleteCredentials",authenticate:"authGoogle/authenticate"},facebookAuthNProvider:{defaultRealmCode:"uuIdentityFacebookAuthNRealm",defaultProviderName:"Facebook",
createCredentials:"authFacebook/connectExternalIdentity",deleteCredentials:"authFacebook/deleteCredentials",authenticate:"authFacebook/authenticate"},microsoftAuthNProvider:{
defaultRealmCode:"uuIdentityMicrosoftAuthNRealm",defaultProviderName:"Microsoft",createCredentials:"authMicrosoft/connectExternalIdentity",deleteCredentials:"authMicrosoft/deleteCredentials",
authenticate:"authMicrosoft/authenticate"},keycloakAuthNProvider:{createCredentials:"authKeycloak/connectExternalIdentity",deleteCredentials:"authKeycloak/deleteCredentials",
authenticate:"authKeycloak/authenticate"}},identityAccount:{registrationCallback:"identityAccount/registrationCallback"},authAccessCodes:{authenticate:"authAccessCodes/authenticate"}},
l.levelOfAssurance={0:"NONE",none:"NONE",1:"LOW",low:"LOW",2:"STANDARD",medium:"STANDARD",3:"HIGH",high:"HIGH",4:"VERY_HIGH",veryHigh:"VERY_HIGH"},l.realmCode={authGoogle:"uuIdentityGoogleAuthNRealm",
authFacebook:"uuIdentityFacebookAuthNRealm",authMicrosoft:"uuIdentityMicrosoftAuthNRealm"},
l.identityAccountNotInProperStateRegex=/uu-oidc-main\/(auth|((auth([A-Z][A-Za-z]+))\/callback))\/identityAccountNotInProperState/,l.notAuthenticated="notAuthenticated",
l.unexpectedExternalIdPError="unexpectedExternalIdPError",l.accountNotMigrated="accountNotMigrated",l.tooManyInvalidAuthentications="tooManyInvalidAuthentications",
l.verificationTimeIsNotValid="verificationTimeIsNotValid",l.credentialsAlreadyExist="credentialsAlreadyExist",l.newEmailDoesNotExist="newEmailDoesNotExist",
l.additionalVerificationRequired="additionalVerificationRequired",l.invalidTime="invalidTime",l.oidcState="oidcState",l.form={defaultLabelColWidth:l.labelColWidthDefault,
defaultInputColWidth:l.inputColWidthDefault},l.formNames={realmCode:"realmCode",name:"name",type:"type",code:"code",desc:"desc",surname:"surname",email:"email",consents:"consents",value:"value",
identifier:"identifier",identityOperatorRoleIfcUri:"identityOperatorRoleIfcUri",identityOperatorAppBaseUri:"identityOperatorAppBaseUri",language:"language",timezone:"timezone",
creationTime:"creationTime",uuIdentity:"uuIdentity",state:"state",stateList:"stateList",creationTimeFrom:"creationTimeFrom",creationTimeTo:"creationTimeTo"},l.date={date:"DATE",time:"TIME",
dateTime:"DATETIME"},l.connectionButton={buttonDisconnect:"buttonDisconnect",buttonConnect:"buttonConnect"},l.credentialsList={type:{create:"createCredentials",delete:"deleteCredentials"},
levelOfAssurance:{none:"NONE",low:"LOW",standard:"STANDARD",high:"HIGH",very_high:"VERY_HIGH"},accessCodesProvider:"accessCodesAuthNProvider"},
l.authenticatedUseCaseWithoutTopPanel=["login","registration","thirdPartyRegistration","activateAccount","registrationEmail"],l.accessCodeInputValidateType={strengthValidResult:"strengthValidResult",
identicalValidResult:"identicalValidResult"},l.iconsByIdentityType=(r(o={},l.identityType.uuPerson,l.icons.uuBmlUuPerson),r(o,l.identityType.uuEe,l.icons.uuBmlUuEe),
r(o,l.identityType.uuAi,l.icons.uuBmlUuAi),r(o,l.identityType.uuThing,l.icons.uuBmlUuThing),o),l.mfa={totpAuthNProvider:"totpAuthNProvider",smsAuthNProvider:"smsAuthNProvider",
backupCodesAuthNProvider:"backupCodesAuthNProvider",accessCodesAuthNProvider:"accessCodesAuthNProvider",primaryPhoneType:"primary",secondaryPhoneType:"secondary",phoneTypeMap:["primary","secondary"],
activeState:"active",phoneIcon:{default:"mdi-phone",primary:"mdi-phone",secondary:"mdi-phone-plus"},lostSecondFactorIcon:"mdi-alert",totpIcon:"mdi-cellphone-key",
backupCodesIcon:"mdi-card-text-outline",login:{acrValuesNotSatisfiedErrorCode:"uu-oidc-main/auth/acrValuesNotSatisfied",authTotpErrorCodePrefix:"uu-oidc-main/authTotp/",
authSmsErrorCodePrefix:"uu-oidc-main/authSms/",authBackupCodesErrorCodePrefix:"uu-oidc-main/authBackupCodes/",shownErrorCodes:["invalidDtoIn","notAuthenticated"],notAuthenticated:["notAuthenticated"],
invalidDtoIn:["invalidDtoIn"],configRedirectForm:{headerKey:"emptyHeader",redirectToConfigKey:"redirectToConfig",footerKey:"emptyFooter"},totpForm:{authenticateUri:"authTotp/authenticate",
headerKey:"totpHeader",formKey:"totpForm",footerKey:"totpFooter"},backupCodesForm:{authenticateUri:"authBackupCodes/authenticate",headerKey:"backupCodesHeader",formKey:"backupCodesForm",
footerKey:"backupCodesFooter"},smsForm:{authenticateUri:"authSms/authenticate",headerKey:"smsHeader",formKey:"smsForm",resendCodeKey:"smsResendCode",footerKey:"smsFooter"}},setAccessCodes:{
shownErrorCodes:["invalidDtoIn"],smsForm:{setAccessCodesByStateCmdUri:"setAccessCodesByState",headerKey:"smsHeader",formKey:"smsForm",resendCodeKey:"smsResendCode",footerKey:"smsFooter"}},
configuration:{eventCredentialsAdded:"credentialsAdded",eventCredentialsAddedNotActive:"credentialsAddedNotActive",eventCredentialsUpdated:"credentialsUpdated",
eventCredentialsDeleted:"credentialsDeleted",eventGlobalMfaEnabled:"globalMfaEnabled",eventGlobalMfaDisabled:"globalMfaDisabled",eventGlobalMfaRemoved:"globalMfaRemoved",
eventUnexpectedError:"unexpectedError",inactivityTimeout:3e5,totpSection:{issuer:"Plus4U",createCredentials:{invalidDtoIn:"uu-oidc-main/authTotp/createCredentials/invalidDtoIn",
accessCodesVerificationFailed:"uu-oidc-main/authTotp/createCredentials/accessCodesVerificationFailed"},revealCredentials:{invalidDtoIn:"uu-oidc-main/authTotp/revealSharedSecret/invalidDtoIn",
accessCodesVerificationFailed:"uu-oidc-main/authTotp/revealSharedSecret/accessCodesVerificationFailed"},deleteCredentials:{
invalidDtoIn:"uu-identitymanagement-maing01/mfa/deleteCredentials/invalidDtoIn",accessCodesVerificationFailed:"uu-identitymanagement-maing01/mfa/deleteCredentials/accessCodesVerificationFailed",
cannotDeleteLastCredentials:"uu-identitymanagement-maing01/mfa/deleteCredentials/cannotDeleteLastCredentials"}},backupCodesSection:{authBackupCodesCreateCredentials:{
invalidDtoIn:"uu-oidc-main/authBackupCodes/createCredentials/invalidDtoIn",verificationCodeNotValid:"uu-oidc-main/authBackupCodes/createCredentials/verificationCodeNotValid",
accessCodesNotValid:"uu-oidc-main/authBackupCodes/createCredentials/accessCodesNotValid",mfaCredentialsNotFound:"uu-oidc-main/authBackupCodes/createCredentials/mfaCredentialsNotFound"},
authBackupCodesRevealCredentials:{invalidDtoIn:"uu-oidc-main/authBackupCodes/revealBackupCodes/invalidDtoIn",
verificationCodeNotValid:"uu-oidc-main/authBackupCodes/revealBackupCodes/verificationCodeNotValid",accessCodesNotValid:"uu-oidc-main/authBackupCodes/revealBackupCodes/accessCodesNotValid",
mfaCredentialsNotFound:"uu-oidc-main/authBackupCodes/revealBackupCodes/mfaCredentialsNotFound"},authBackupCodesGenerateBackupCodes:{
invalidDtoIn:"uu-oidc-main/authBackupCodes/generateBackupCodes/invalidDtoIn",verificationCodeNotValid:"uu-oidc-main/authBackupCodes/generateBackupCodes/verificationCodeNotValid",
accessCodesNotValid:"uu-oidc-main/authBackupCodes/generateBackupCodes/accessCodesNotValid",mfaCredentialsNotFound:"uu-oidc-main/authBackupCodes/generateBackupCodes/mfaCredentialsNotFound"}},
phoneSection:{phoneNumberPattern:"^([+]{1}|[0]{2})[\\s()-]*(?:[\\d][\\s()-]*){9,15}$",phoneNumberInvalidCharacters:/[\s()-]/g,smsCodePattern:"^[0-9\\s]{1,32}$",deleteCredentials:{
invalidDtoIn:"uu-identitymanagement-maing01/mfa/deleteCredentials/invalidDtoIn",accessCodesVerificationFailed:"uu-identitymanagement-maing01/mfa/deleteCredentials/accessCodesVerificationFailed",
cannotDeleteLastCredentials:"uu-identitymanagement-maing01/mfa/deleteCredentials/cannotDeleteLastCredentials"},createCredentials:{invalidDtoIn:"uu-oidc-main/authSms/createCredentials/invalidDtoIn",
accessCodesVerificationFailed:"uu-oidc-main/authSms/deleteCredentials/accessCodesVerificationFailed",usedCredentialsCode:"uu-oidc-main/authSms/createCredentials/usedCredentialsCode"},
activateCredentials:{invalidDtoIn:"uu-oidc-main/authSms/activateCredentials/invalidDtoIn",credentialsVerificationFailed:"uu-oidc-main/authSms/activateCredentials/credentialsVerificationFailed"},
verifyCredentials:{invalidDtoIn:"uu-oidc-main/authAccessCodes/verifyCredentials/invalidDtoIn"}},forceSection:{enable:{
accessCodesVerificationFailed:"uu-identitymanagement-maing01/mfa/enableGlobalMfa/accessCodesVerificationFailed"},disable:{
accessCodesVerificationFailed:"uu-identitymanagement-maing01/mfa/disableGlobalMfa/accessCodesVerificationFailed"}}}},t.a=l},60:function(e,t,n){var o=n(61);"string"==typeof o&&(o=[[e.i,o,""]]);var i={
hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},61:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-button{border:none;border-radius:2px;text-align:center;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none}.uu-identitymanagement-bricks-button>.uu-identitymanagement-bricks-button-text{position:relative}.uu5-ua-edge .uu-identitymanagement-bricks-button>.uu-identitymanagement-bricks-button-text,.uu5-ua-ff .uu-identitymanagement-bricks-button>.uu-identitymanagement-bricks-button-text{top:-1px}.uu-identitymanagement-bricks-button:focus{outline:none}.uu-identitymanagement-bricks-button.uu5-common-selected{box-shadow:0 0 0 1px #66afe9}.uu-identitymanagement-bricks-button.uu5-common-disabled{border-color:hsla(0,0%,74.1%,.43)}.uu-identitymanagement-bricks-button>*{vertical-align:middle}.uu-identitymanagement-bricks-button-s{min-height:24px;font-size:12px;padding:0 12px}.uu-identitymanagement-bricks-button-s>.uu-identitymanagement-bricks-icon{font-size:16px}.uu-identitymanagement-bricks-button-s>.uu-identitymanagement-bricks-icon:first-child{margin-left:-8px;margin-right:6px}.uu-identitymanagement-bricks-button-s>.uu-identitymanagement-bricks-icon:last-child{margin-left:6px;margin-right:-8px}.uu-identitymanagement-bricks-button-s>.uu-identitymanagement-bricks-icon:first-child:last-child{margin-left:-8px;margin-right:-8px}.uu-identitymanagement-bricks-button-s>.uu-identitymanagement-bricks-icon+.uu-identitymanagement-bricks-icon{margin-left:-6px}.uu-identitymanagement-bricks-button-m{min-height:32px;font-size:14px;padding:0 16px}.uu-identitymanagement-bricks-button-m>.uu-identitymanagement-bricks-icon{font-size:20px}.uu-identitymanagement-bricks-button-m>.uu-identitymanagement-bricks-icon:first-child{margin-left:-10px;margin-right:8px}.uu-identitymanagement-bricks-button-m>.uu-identitymanagement-bricks-icon:last-child{margin-left:8px;margin-right:-10px}.uu-identitymanagement-bricks-button-m>.uu-identitymanagement-bricks-icon:first-child:last-child{margin-left:-10px;margin-right:-10px}.uu-identitymanagement-bricks-button-m>.uu-identitymanagement-bricks-icon+.uu-identitymanagement-bricks-icon{margin-left:-8px}.uu-identitymanagement-bricks-button-l{min-height:40px;font-size:16px;padding:0 20px}.uu-identitymanagement-bricks-button-l>.uu-identitymanagement-bricks-icon{font-size:26px}.uu-identitymanagement-bricks-button-l>.uu-identitymanagement-bricks-icon:first-child{margin-left:-13px;margin-right:8px}.uu-identitymanagement-bricks-button-l>.uu-identitymanagement-bricks-icon:last-child{margin-left:8px;margin-right:-13px}.uu-identitymanagement-bricks-button-l>.uu-identitymanagement-bricks-icon:first-child:last-child{margin-left:-13px;margin-right:-13px}.uu-identitymanagement-bricks-button-l>.uu-identitymanagement-bricks-icon+.uu-identitymanagement-bricks-icon{margin-left:-8px}.uu-identitymanagement-bricks-button-xl{min-height:48px;font-size:16px;padding:0 24px}.uu-identitymanagement-bricks-button-xl>.uu-identitymanagement-bricks-icon{font-size:34px}.uu-identitymanagement-bricks-button-xl>.uu-identitymanagement-bricks-icon:first-child{margin-left:-17px;margin-right:8px}.uu-identitymanagement-bricks-button-xl>.uu-identitymanagement-bricks-icon:last-child{margin-left:8px;margin-right:-17px}.uu-identitymanagement-bricks-button-xl>.uu-identitymanagement-bricks-icon:first-child:last-child{margin-left:-17px;margin-right:-17px}.uu-identitymanagement-bricks-button-xl>.uu-identitymanagement-bricks-icon+.uu-identitymanagement-bricks-icon{margin-left:-8px}.uu-identitymanagement-bricks-button-inverted{border:1px solid}.uu-identitymanagement-bricks-button-block{display:block;width:100%}.uu-identitymanagement-bricks-button-block+.uu-identitymanagement-bricks-button-block{margin-top:4px}.uu5-forms-input-read-only .uu-identitymanagement-bricks-button,.uu-identitymanagement-bricks-button-disabled{cursor:default}',""]),
e.exports=t},62:function(e,t,n){var o=n(63);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
63:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-form-footer{text-align:center;padding-top:24px}.uu-identitymanagement-bricks-form-footer-contact-us{font-family:ClearSans,sans-serif;padding:8px 0 32px;text-align:center;font-size:14px;color:#fff;letter-spacing:0;opacity:.7;margin:0}.uu-identitymanagement-bricks-form-footer-contact-us .uu5-bricks-link{color:#fff;text-decoration:underline}.uu-identitymanagement-bricks-form-footer-terms-and-gdpr{font-family:ClearSans,sans-serif;max-width:320px;text-align:center;margin-left:auto;margin-right:auto;margin-bottom:8px;font-size:14px;color:#fff;letter-spacing:0;line-height:19px}.uu-identitymanagement-bricks-form-footer-terms-and-gdpr .uu5-bricks-link{color:#fff;text-decoration:underline}.uu-identitymanagement-bricks-form-footer-language-selector{background:rgba(0,0,0,.24);border-radius:3px}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-button>.uu5-bricks-icon:last-child{margin:6px 4px;width:20px;height:20px}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-icon,.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-span{color:#fff}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-popover .uu5-bricks-icon,.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-popover .uu5-bricks-span{color:#000}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-language-selector-label:before{font-family:Material Design Icons,sans-serif;content:"\\F1E7";font-size:20px;padding:6px 8px 6px 6px;vertical-align:middle}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-dropdown-button{padding:0}.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-dropdown-button:focus,.uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-dropdown-button:hover{background:rgba(0,0,0,.24)}@media screen and (min-width:769px){.uu-identitymanagement-bricks-form-footer-terms-and-gdpr-registration{width:600px}}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-contact-us{padding:22px 0 40px;text-align:center;font-size:14px;color:#000;letter-spacing:0;opacity:.7;margin:0}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-contact-us .uu5-bricks-link{color:#000;text-decoration:underline}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-terms-and-gdpr{color:#000}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-terms-and-gdpr .uu5-bricks-link{color:#000;text-decoration:underline}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-language-selector{background:hsla(0,0%,100%,.24)}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-icon,.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-span{color:#000}.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-dropdown-button:focus,.uu-identitymanagement-bricks-oidc-theme-black .uu-identitymanagement-bricks-form-footer-language-selector .uu5-bricks-dropdown-button:hover{background:hsla(0,0%,100%,.24)}',""]),
e.exports=t},64:function(e,t,n){var o=n(65);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
65:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-oidc-theme{padding:16px;background-position:50%;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;max-height:10000px;height:100%;min-height:100%}.uu-identitymanagement-bricks-oidc-theme-logo{width:100%;padding:0 0 16px}.uu-identitymanagement-bricks-oidc-theme-logo .uu5-bricks-image{margin:auto;max-height:208px;max-width:208px}.uu-identitymanagement-bricks-oidc-theme-without-logo{padding:16px 8px 8px}.uu-identitymanagement-bricks-oidc-theme-contact-us{padding:20px;text-align:center;margin:0;width:100%}.uu-identitymanagement-bricks-oidc-theme-default{background:#004a94}.uu-identitymanagement-bricks-oidc-theme-cover{background-size:cover}.uu-identitymanagement-bricks-oidc-theme-repeat-x{background-repeat:repeat-x}.uu-identitymanagement-bricks-oidc-theme-repeat-y{background-repeat:repeat-y}.uu-identitymanagement-bricks-oidc-theme-repeat{background-repeat:repeat}',""]),
e.exports=t},66:function(e,t,n){var o=n(67);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
67:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-anonymous-access-button{width:100%}.uu-identitymanagement-bricks-anonymous-access-button-button{font-family:ClearSans-Medium,sans-serif;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px;width:100%;margin:auto;font-size:16px;color:#4a4a4a;letter-spacing:0;text-align:center}.uu-identitymanagement-bricks-anonymous-access-button-button:focus,.uu-identitymanagement-bricks-anonymous-access-button-button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-bricks-anonymous-access-button-button:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-bricks-anonymous-access-button-button.uu5-bricks-button-transparent:focus,.uu-identitymanagement-bricks-anonymous-access-button-button.uu5-bricks-button-transparent:hover{background-color:#fff}',""]),
e.exports=t},68:function(e,t,n){var o=n(69);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
69:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-form-container{width:100%;margin:auto;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;box-shadow:0 2px 4px 0 rgba(0,0,0,.5);border-radius:4px}.uu-identitymanagement-bricks-form-container-white .uu-identitymanagement-bricks-form-container-header{background:#fff}.uu-identitymanagement-bricks-form-container-gray .uu-identitymanagement-bricks-form-container-header{background:#fafafa}.uu-identitymanagement-bricks-form-container-body{width:100%;-webkit-flex-shrink:1;flex-shrink:1;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-bricks-form-container-body-section{background:#fafafa;padding:16px 24px;-webkit-flex-grow:1;flex-grow:1}.uu-identitymanagement-bricks-form-container-body-section-top-border{border-top:1px solid #d6d6d6}.uu-identitymanagement-bricks-form-container-body-section-bottom-border{border-bottom:1px solid #d6d6d6}.uu-identitymanagement-bricks-form-container-body-section-no-vertical-padding{padding-top:0;padding-bottom:0}.uu-identitymanagement-bricks-form-container-body-section-no-horizontal-padding{padding-left:0;padding-right:0}.uu-identitymanagement-bricks-form-container-body-section:last-child{border-radius:0 0 4px 4px}.uu-identitymanagement-bricks-form-container-header{border-radius:4px 4px 0 0;padding:16px 0}.uu-identitymanagement-bricks-form-container-header-image{width:108.7px;height:32.9px;margin:0 auto}.uu-identitymanagement-bricks-form-container-header-redirection{font-family:ClearSans,sans-serif;text-align:center;margin:0 auto;width:311px;font-size:16px;line-height:21px}.uu-identitymanagement-bricks-form-container-header-redirection .uu5-bricks-link{color:#000;text-decoration:underline}.uu-identitymanagement-bricks-form-container-header-image+.uu-identitymanagement-bricks-form-container-header-redirection{padding-top:8.1px}.uu-identitymanagement-bricks-form-container-close-button-link{display:block;text-align:right;width:100%;font-size:large;margin-top:-12px;padding-right:7px}.uu-identitymanagement-bricks-form-container-close-button-link.uu5-bricks-link,.uu-identitymanagement-bricks-form-container-close-button-link.uu5-bricks-link:focus,.uu-identitymanagement-bricks-form-container-close-button-link.uu5-bricks-link:hover,.uu-identitymanagement-bricks-form-container-close-button-link.uu5-bricks-link:visited{text-decoration:none;color:rgba(0,0,0,.54)}@media screen and (min-width:481px){.uu-identitymanagement-bricks-form-container{max-width:480px;border-radius:8px}.uu-identitymanagement-bricks-form-container-header{border-radius:8px 8px 0 0}.uu-identitymanagement-bricks-form-container-body-section:last-child{border-radius:0 0 8px 8px}}@media screen and (min-width:769px){.uu-identitymanagement-bricks-form-container{max-width:600px}.uu-identitymanagement-bricks-form-container-right{width:260px}}',""]),
e.exports=t},70:function(e,t,n){"use strict";const o=n(26);if("undefined"==typeof window)var i=n(41);e.exports=class{constructor(e,t=-1){if(this._ttl=t,"string"==typeof e||e instanceof String){
let t=/^file:\/\/(.*)/i.exec(e);if(null!==t){if("undefined"!=typeof window)throw new TypeError("Unable to use "+e+" as configuration source in browser environment.");this._fileSrc=t[1]}else{
if(t=/^env:\/\/([a-z_][a-z0-9_]*)/i.exec(e),null===t)throw new TypeError("unable to use "+e+" as configuration source");this._senvSrc=t[1]}}else if(e instanceof RegExp)this._menvSrc=e;else{
if(!e||"object"!=typeof e)throw new TypeError("unable to use "+typeof e.constructor+" as configuration source");this._data=e}}load(e=!1){let t;try{if(void 0!==this._fileSrc&&this._fileSrc){
t=this._fileSrc;let e=i.readFileSync(this._fileSrc,"utf8");this._data=this._parse(e)}else if(void 0!==this._senvSrc&&this._senvSrc){t=this._senvSrc;let e=Object({
NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",
MOCK_DATA_BASE_URI:""})[this._senvSrc]||"";this._data=this._parse(e)}else if(void 0!==this._menvSrc&&this._menvSrc){t=this._menvSrc;let e=this._menvSrc,n=Object.keys(Object({
NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",
MOCK_DATA_BASE_URI:""})),o={};n.forEach((function(t){e.test(t)&&(o[t.toLowerCase()]=Object({NAME:"uu_identitymanagement_maing01-client",VERSION:"1.12.0-dev",NAMESPACE:"UuIdentitymanagement",
OUTPUT_NAME:"uu_identitymanagement_maing01-client",NODE_ENV:"production",TARGET_ENVIRONMENT:"browser",MOCK_DATA_BASE_URI:""})[t])})),this._data=o}this._loaded=new Date}catch(n){
let o=`Loading of configuration from source [${t}] failed: ${n.toString()}`;if(e)throw new Error(o);console.log(o)}}get(e){return this._reload()&&this.load(),this._data[e]}setTtl(e){this._ttl=e}
hasKey(e){return this._reload()&&this.load(),void 0!==this._data[e]}toJSON(e=!1){return this._reload()&&this.load(e),o.parse(o.stringify(this._data))}_parse(e){
if(/^[\r\n\t ]*{[\s\S]*}[\r\n\t ]*$/.test(e))return o.parse(e);{let t={};return(e=e.replace(/\r\n?/g,"\n")).split("\n").forEach((function(e){if(e=e.trim(),/^[#!]/.test(e))return
;let n=e.split(/[=:](.*)/,2),i=n[0],a=n[1];if(null!==i&&(i=i.trim(),0!==i.length)){if(void 0===a)a=null;else{a=a.trimLeft();try{a=o.parse(a.trim())}catch(e){}}t[i]=a}})),t}}_reload(){
if(!this._loaded)return!0;if(this._ttl<0)return!1;let e=(new Date).getTime()>this._loaded.getTime()+1e3*this._ttl;if(this._fileSrc){let t=i.statSync(this._fileSrc);if(t.isFile()){
let n=new Date(t.mtime);return e&&n.getTime()>this._loaded.getTime()}return e}return e}}},71:function(module,exports,__webpack_require__){"use strict"
;const BaseError=__webpack_require__(28),ValueConverter=__webpack_require__(33),Json=__webpack_require__(26),expression=/(?:^|[^\\])(\${([\w_.]+)(?::([^}]*))?}|#{([^}]+)})/;class ConfigChain{
constructor(e,t){this._sources=e,this._profiles=t,this._custom={}}activeProfiles(){return Json.parse(Json.stringify(this._profiles))}get(e,t=!0,n=[]){let o,i=this;if(t){let t=e.split(".")
;for(;t.length>0;){let e=t.join(".");if(void 0!==this._custom[e])return this._custom[e];if(this._sources.forEach((function(t){let a=t.get(e);void 0!==a&&void 0===o&&(o=i._resolve(a,n))})),
void 0!==o)return o;let a=t.length,r=1===a?0:a-2;t.splice(r,1)}}else{if(void 0!==this._custom[e])return this._custom[e];if(this._sources.forEach((function(t){let a=t.get(e)
;void 0!==a&&void 0===o&&(o=i._resolve(a,n))})),void 0!==o)return o}return o}getString(e,t=!0){let n=this.get(e,t);return ValueConverter.toString(n)}getNumber(e,t=!0){let n=this.get(e,t)
;return ValueConverter.toNumber(n)}getBoolean(e,t=!0){let n=this.get(e,t);return ValueConverter.toBoolean(n)}getTime(e,t=!0){let n=this.get(e,t);return ValueConverter.toTime(n)}getClass(e,t,n=!0){
let o=this.get(e,n);return t=t||this._serverSourcePath(),ValueConverter.toClass(o,t)}getArray(e,t=null,n=!0,o=null){let i=this.get(e,n);return o=o||this._serverSourcePath(),
ValueConverter.toArray(i,t,o)}set(e,t){this._custom[e]=t}delete(e){delete this._custom[e]}hasKey(e,t=!0){let n=!1;if(t){let t=e.split(".");for(;t.length>0;){let e=t.join(".")
;if(void 0!==this._custom[e])return!0;if(this._sources.forEach((function(t){!n&&t.hasKey(e)&&(n=!0)})),n)return n;let o=t.length,i=1===o?0:o-2;t.splice(i,1)}}else{if(void 0!==this._custom[e])return!0
;this._sources.forEach((function(t){t.hasKey(e)&&(n=!0)}))}return n}toJSON(){let e={},t=this._resolve.bind(this);this._sources.reverse(),this._sources.forEach((function(n){let o=n.toJSON()
;Object.keys(o).forEach((function(n){e[n]=t(o[n])}))})),this._sources.reverse();let n=Object.keys(this._custom),o=this._custom;return n.forEach((function(n){e[n]=t(o[n])})),e}load(e=!1){
this._sources.reverse(),this._sources.forEach((function(t){t.load(e)})),this._sources.reverse()}_resolve(value,loopCheck=[]){if(value&&value.constructor===Object){let e={}
;for(let t of Object.keys(value))e[t]=this._resolve(value[t]);return e}if("string"!=typeof value&&!(value instanceof String))return value;let matchResult=value.match(expression);if(matchResult){
let expression=matchResult[1],key=matchResult[2],defolt=matchResult[3],prog=matchResult[4];if(prog)return value=eval(prog),this._resolve(value);{
if(loopCheck.includes(key))throw new BaseError("endless configuration loop caused by ["+loopCheck+"]");loopCheck.push(key);let e=this.get(key,!0,loopCheck);return e||(e=defolt),
value=value.replace(new RegExp(expression.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),"g"),e),this._resolve(value)}}return value}_serverSourcePath(){return this.get("server_root")}}
module.exports=ConfigChain},72:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){e.exports=function(e){let t=[],n=""
;e.match(/^([_]*[$@#]?)?(?:[a-zA-Z0-9]+(?:[_]+[a-zA-Z0-9]+)?)*([_]+)?$/);let o=e.match(/^[_]*/)[0],i=(e=e.substring(o.length,e.length)).match(/[_]*$/)[0];e=e.substring(0,e.length-i.length);let a=0
;(function(e,t){if(!t.global)throw"Name Converter Error";let n=t.exec(e),o=[];for(;n;)n.shift(),o.push(n),n=t.exec(e);return o})(e,/[a-z]+|[A-Z]+|[0-9]+/g).forEach(n=>{let o=n.index
;t.push(e.substring(a,o)),a=o}),t.push(e.substring(a)),"/"!==t[0]&&"\\"!==t[0]||t.shift();for(let e=0;e<t.length;e+=1){let o=t[e],i=t[e+1];o.match(/^[a-z]+|[0-9]+$/)?(n+=o,
n+=void 0!==i?"-":""):o.match(/^[A-Z]$/)?n+=o.toLowerCase():o.match(/^[A-Z]+$/)&&(void 0===i||i.match(/^[0-9]+$/)?(n+=o.toLowerCase(),n+=void 0!==i?"-":""):(n+=o.substring(0,o.length-1).toLowerCase(),
n+="-",n+=o[o.length-1].toLowerCase()))}return n=o+n+i,n}},76:function(e,t,n){"use strict";const o=n(40),i=n(33);e.exports=class{constructor(...e){this._optList=e}get(e,t=null){let n=null
;for(let t of this._optList)if(t===o?t.hasKey(e,!1)&&(n=t.get(e,!1)):t&&t.hasOwnProperty(e)&&void 0!==t[e]&&(n=t[e]),null!=n)break;return null==n&&(n=t),n}hasKey(e){
for(let t of this._optList)if(t===o){if(t.hasKey(e))return!0}else if(t&&t.hasOwnProperty(e)&&void 0!==t[e])return!0;return!1}getString(e,t=null){let n=this.get(e,t);return i.toString(n)}
getNumber(e,t=null){let n=this.get(e,t);return i.toNumber(n)}getBoolean(e,t=null){let n=this.get(e,t);return i.toBoolean(n)}getTime(e,t=null){let n=this.get(e,t);return i.toTime(n)}
getClass(e,t,n=null){let o=this.get(e,n);return i.toClass(o,t)}getArray(e,t=null,n=null,o=null){let a=this.get(e,n);return i.toArray(a,t,o)}}},77:function(e,t,n){"use strict";const o=n(78),i=n(28)
;class a{static create(e,t){let n,a=o.getNamespace(e);if(a){if(a.active)throw new i(`Context "${e}" is already created.`)}else a=o.createNamespace(e);return a.run(()=>{n=t()}),n}static get(e){
let t=o.getNamespace(e);return t&&t.active?new a(t):null}set(e,t){this._namespace.set(e,t)}get(e){return this._namespace.get(e)}fork(e){let t;return this._namespace.run(()=>{t=e()}),t}constructor(e){
this._namespace=e}bindEmitter(e){this._namespace.bindEmitter(e)}}e.exports=a},78:function(e,t,n){"use strict";const o={};class i{constructor(){this.active={}}set(e,t){this.active[e]=t}get(e){
return this.active[e]}run(e){return e(),this}bindEmitter(e){}}e.exports=class{static getNamespace(e){return o[e]}static createNamespace(e){let t=new i;return o[e]=t,t}}},79:function(e,t,n){
"use strict";(function(t){t._uuAppGlobals||(t._uuAppGlobals={});class n{static get(e){let o=t._uuAppGlobals[e];return o||(o=t._uuAppGlobals[e]=new n),o}set(e,t){this._attributes[e]=t}get(e){
return this._attributes[e]}constructor(){this._attributes={}}}e.exports=n}).call(this,n(27))},80:function(e,t){},81:function(e,t){},82:function(e,t){},83:function(module,exports,__webpack_require__){
(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){"use strict";var root="object"==typeof window?window:{},NODE_JS=!root.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS&&(root=global)
;var COMMON_JS=!root.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__(84),HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[],createOutputMethod=function(e){
return function(t){return new Sha1(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Sha1},e.update=function(t){
return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var n=OUTPUT_TYPES[t];e[n]=createOutputMethod(n)}return e},nodeWrap=function(method){
var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("sha1").update(e,"utf8").digest("hex")
;if(e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(void 0===e.length)return method(e);return crypto.createHash("sha1").update(new Buffer(e)).digest("hex")};return nodeMethod}
;function Sha1(e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,
this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,
this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Sha1.prototype.update=function(e){if(!this.finalized){var t="string"!=typeof e
;t&&e.constructor===root.ArrayBuffer&&(e=new Uint8Array(e));for(var n,o,i=0,a=e.length||0,r=this.blocks;i<a;){if(this.hashed&&(this.hashed=!1,r[0]=this.block,
r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),
t)for(o=this.start;i<a&&o<64;++i)r[o>>2]|=e[i]<<SHIFT[3&o++];else for(o=this.start;i<a&&o<64;++i)(n=e.charCodeAt(i))<128?r[o>>2]|=n<<SHIFT[3&o++]:n<2048?(r[o>>2]|=(192|n>>6)<<SHIFT[3&o++],
r[o>>2]|=(128|63&n)<<SHIFT[3&o++]):n<55296||n>=57344?(r[o>>2]|=(224|n>>12)<<SHIFT[3&o++],r[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],
r[o>>2]|=(128|63&n)<<SHIFT[3&o++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),r[o>>2]|=(240|n>>18)<<SHIFT[3&o++],r[o>>2]|=(128|n>>12&63)<<SHIFT[3&o++],r[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],
r[o>>2]|=(128|63&n)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=r[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}
return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha1.prototype.finalize=function(){if(!this.finalized){this.finalized=!0
;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,
e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha1.prototype.hash=function(){
var e,t,n=this.h0,o=this.h1,i=this.h2,a=this.h3,r=this.h4,s=this.blocks;for(e=16;e<80;++e)t=s[e-3]^s[e-8]^s[e-14]^s[e-16],s[e]=t<<1|t>>>31
;for(e=0;e<20;e+=5)n=(t=(o=(t=(i=(t=(a=(t=(r=(t=n<<5|n>>>27)+(o&i|~o&a)+r+1518500249+s[e]<<0)<<5|r>>>27)+(n&(o=o<<30|o>>>2)|~n&i)+a+1518500249+s[e+1]<<0)<<5|a>>>27)+(r&(n=n<<30|n>>>2)|~r&o)+i+1518500249+s[e+2]<<0)<<5|i>>>27)+(a&(r=r<<30|r>>>2)|~a&n)+o+1518500249+s[e+3]<<0)<<5|o>>>27)+(i&(a=a<<30|a>>>2)|~i&r)+n+1518500249+s[e+4]<<0,
i=i<<30|i>>>2
;for(;e<40;e+=5)n=(t=(o=(t=(i=(t=(a=(t=(r=(t=n<<5|n>>>27)+(o^i^a)+r+1859775393+s[e]<<0)<<5|r>>>27)+(n^(o=o<<30|o>>>2)^i)+a+1859775393+s[e+1]<<0)<<5|a>>>27)+(r^(n=n<<30|n>>>2)^o)+i+1859775393+s[e+2]<<0)<<5|i>>>27)+(a^(r=r<<30|r>>>2)^n)+o+1859775393+s[e+3]<<0)<<5|o>>>27)+(i^(a=a<<30|a>>>2)^r)+n+1859775393+s[e+4]<<0,
i=i<<30|i>>>2
;for(;e<60;e+=5)n=(t=(o=(t=(i=(t=(a=(t=(r=(t=n<<5|n>>>27)+(o&i|o&a|i&a)+r-1894007588+s[e]<<0)<<5|r>>>27)+(n&(o=o<<30|o>>>2)|n&i|o&i)+a-1894007588+s[e+1]<<0)<<5|a>>>27)+(r&(n=n<<30|n>>>2)|r&o|n&o)+i-1894007588+s[e+2]<<0)<<5|i>>>27)+(a&(r=r<<30|r>>>2)|a&n|r&n)+o-1894007588+s[e+3]<<0)<<5|o>>>27)+(i&(a=a<<30|a>>>2)|i&r|a&r)+n-1894007588+s[e+4]<<0,
i=i<<30|i>>>2
;for(;e<80;e+=5)n=(t=(o=(t=(i=(t=(a=(t=(r=(t=n<<5|n>>>27)+(o^i^a)+r-899497514+s[e]<<0)<<5|r>>>27)+(n^(o=o<<30|o>>>2)^i)+a-899497514+s[e+1]<<0)<<5|a>>>27)+(r^(n=n<<30|n>>>2)^o)+i-899497514+s[e+2]<<0)<<5|i>>>27)+(a^(r=r<<30|r>>>2)^n)+o-899497514+s[e+3]<<0)<<5|o>>>27)+(i^(a=a<<30|a>>>2)^r)+n-899497514+s[e+4]<<0,
i=i<<30|i>>>2;this.h0=this.h0+n<<0,this.h1=this.h1+o<<0,this.h2=this.h2+i<<0,this.h3=this.h3+a<<0,this.h4=this.h4+r<<0},Sha1.prototype.hex=function(){this.finalize()
;var e=this.h0,t=this.h1,n=this.h2,o=this.h3,i=this.h4
;return HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]
},Sha1.prototype.toString=Sha1.prototype.hex,Sha1.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,o=this.h3,i=this.h4
;return[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i]},
Sha1.prototype.array=Sha1.prototype.digest,Sha1.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(20),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),
t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),e};var exports=createMethod();COMMON_JS?module.exports=exports:(root.sha1=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){
return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()
}).call(this,__webpack_require__(35),__webpack_require__(27))},84:function(e,t){(function(t){e.exports=t}).call(this,{})},85:function(e,t,n){"use strict";const o=n(43),i=n(86);e.exports=class{
static async sleep(e){let t=Date.now();return new Promise(n=>{setTimeout(()=>n(Date.now()-t),e)})}static async yield(){let e=Date.now();return(async()=>{})().then(()=>Date.now()-e)}constructor(){
this._promises={}}runOneAtTime(e=null,t,...n){"function"==typeof e&&(n.unshift(t),t=e,e=null);let o=e||this._getSignature(t,...n),i=this._promises[o];if(!i||i._finished){i=this._invokeFn(t,...n),
i._finished=!1,this._promises[o]=i;let e=()=>{i._finished=!0,delete this._promises[o]};i.then(e,e)}return i}runInBand(e,...t){let n,o=this._promises.runInBand
;if(!o||o._finished)n=this._invokeFn(e,...t);else{let i=()=>this._invokeFn(e,...t);n=o.then(i,i)}n._finished=!1,this._promises.runInBand=n;let i=()=>{n._finished=!0};return n.then(i,i),n}
_getSignature(e,...t){let n=i(t,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER),a=o.sha1(n);return`${e.name}:${a}`}_invokeFn(e,...t){if("AsyncFunction"===e.constructor.name)return e(...t)
;return(async()=>e(...t))()}}},86:function(e,t,n){!function(){"use strict";var t,n,o=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n)},i=function(e,t){for(var n in e)t(n)
},a=function(e,t,n){null!=e&&(n=n||{},Object.getOwnPropertyNames(e).forEach((function(e){n[e]||(t(e),n[e]=!0)})),a(Object.getPrototypeOf(e),t,n))};Object.defineProperty(Date.prototype,"toPrunedJSON",{
value:Date.prototype.toJSON});var r=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","\t":"\\t","\n":"\\n",
"\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function c(e){return r.lastIndex=0,r.test(e)?'"'+e.replace(r,(function(e){var t=s[e]
;return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}var u=function(e,r,s){var u,d='"-pruned-"';if("object"==typeof r){var l=r;r=l.depthDecr,
s=l.arrayMaxLength,n=l.iterator||o,l.allProperties?n=a:l.inheritedProperties&&(n=i),"prunedString"in l&&(d=l.prunedString),l.replacer&&(u=l.replacer)}else n=o;return t=[],s=s||50,function e(o,i,a){
var r,l,m,p,h=i[o];switch(h&&"object"==typeof h&&"function"==typeof h.toPrunedJSON&&(h=h.toPrunedJSON(o)),h&&"function"==typeof h.toJSON&&(h=h.toJSON()),typeof h){case"string":return c(h)
;case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":return String(h);case"object":if(!h)return"null";if(a<=0||-1!==t.indexOf(h)){if(u){var f=u(h,d,!0)
;return void 0===f?void 0:""+f}return d}if(t.push(h),p=[],"[object Array]"===Object.prototype.toString.apply(h)){for(m=Math.min(h.length,s),r=0;r<m;r+=1)p[r]=e(r,h,a-1)||"null"
;return l="["+p.join(",")+"]",u&&h.length>s?u(h,l,!1):l}return n(h,(function(t){try{(l=e(t,h,a-1))&&p.push(c(t)+":"+l)}catch(e){}})),"{"+p.join(",")+"}";case"function":case"undefined":
return u?u(h,void 0,!1):void 0}}("",{"":e},r=r||6)};u.log=function(){console.log.apply(console,Array.prototype.map.call(arguments,(function(e){return JSON.parse(JSON.prune(e))})))},
u.forEachProperty=a,e.exports=u}()},87:function(e,t,n){"use strict";const o=n(26);let i;try{let e=localStorage;i=!!e}catch(e){i=!1}class a{constructor(e,t,n){this.key=e,this.value=t,this.exp=n,
this.next=null,this.prev=null}isExpired(){return this.exp>-1&&this.exp<=Date.now()}toJSON(){return[this.key,this.value,this.exp]}}e.exports=class{constructor(e={}){
"number"==typeof e.maxSize?this._maxSize=e.maxSize:this._maxSize=-1,"number"==typeof e.maxAge?this._maxAge=e.maxAge:this._maxAge=-1,this._name=e.localStorageKey,this._size=0,this._items={},
this._first=null,this._last=null,this._loadFromStorage(),this._storeToStorage()}set(e,t,n=null){this._loadFromStorage()
;let o=null,i=(n="number"==typeof n?n:this._maxAge)>-1?n+Date.now():-1,r=new a(e,t,i);return this._items[e]?o=this.delete(e):this._maxSize>-1&&this._size>=this._maxSize&&this._prune(1),this._push(r),
this._storeToStorage(),o}has(e){this._loadFromStorage();let t=this._items[e];return t&&!t.isExpired()}get(e){this._loadFromStorage();let t=this._items[e],n=null
;return t&&(t.isExpired()?this._remove(t):(n=t.value,this._touch(t))),this._storeToStorage(),n}delete(e){this._loadFromStorage();let t=null;if(this._items[e]){let n=this._items[e]
;n.isExpired()||(t=n.value),this._remove(n)}return this._storeToStorage(),t}clear(){this._size=0,this._items={},this._first=null,this._last=null,this._storeToStorage()}getSize(){return this._size}
toJSON(){let e=[],t=this._last;for(;t;)e.push(t.toJSON()),t=t.prev;return[this._maxSize,this._maxAge,e]}fromJSON(e){this.clear(),"string"==typeof e&&(e=o.parse(e));let[t,n,i]=e;this._maxSize=t,
this._maxAge=n;for(let[e,t,n]of i)this._push(new a(e,t,n))}keys(){this._loadFromStorage();let e=[],t=this._first;for(;t;)t.isExpired()||e.push(t.key),t=t.next}values(){this._loadFromStorage()
;let e=[],t=this._first;for(;t;)t.isExpired()||e.push(t.value),t=t.next}forEach(e){if("function"!=typeof e)throw new BaseError("Parameter must be function");this._loadFromStorage();let t=this._first
;for(;t;){let n=null;if(t.isExpired()||(n=e(t.key,t.value)),"boolean"==typeof n&&!n)break;t=t.next}}_push(e){e.next=this._first,e.prev=null,this._first&&(this._first.prev=e),this._first=e,
this._last||(this._last=e),this._items[e.key]=e,this._size++}_touch(e){e.prev&&(e.prev.next=e.next,e.next?e.next.prev=e.prev:this._last=e.prev,e.next=this._first,e.prev=null,
this._first&&(this._first.prev=e),this._first=e)}_remove(e){e.prev?e.prev.next=e.next:this._first=e.next,e.next?e.next.prev=e.prev:this._last=e.prev,delete this._items[e.key],this._size--}_prune(e=1){
let t=0,n=this._last;for(;n;)n.isExpired()&&(this._remove(n),t++),n=n.prev;if(t<e){let n=this._last;for(let o=0;o<e-t&&(this._remove(n),n=n.prev,n);o++);}}_loadFromStorage(){if(i&&this._name){
let e=localStorage.getItem(this._name);e&&this.fromJSON(e)}}_storeToStorage(){i&&this._name&&localStorage.setItem(this._name,o.stringify(this))}}},88:function(e,t,n){"use strict";(function(t){
e.exports=class{static encode(e,n="utf8"){return t.from(e,n).toString("base64")}static decode(e,n="utf8"){let o=t.from(e,"base64");return"binary"===n?o:o.toString(n)}
static urlSafeEncode(e,t="utf8",n=!0){"boolean"==typeof t&&(n=t,t="utf8");let o=this.encode(e,t);return o=o.replace(/\+/g,"-").replace(/\//g,"_"),n&&(o=o.replace(/=/g,"")),o}
static urlSafeDecode(e,t="utf8"){let n=e.replace(/-/g,"+").replace(/_/g,"/");return this.decode(n,t)}}}).call(this,n(89).Buffer)},89:function(e,t,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var o=n(90),i=n(91),a=n(92);function r(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(r()<t)throw new RangeError("Invalid typed array length")
;return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=c.prototype:(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(e,t,n)
;if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return l(this,e)}return u(this,e,t,n)}function u(e,t,n,o){
if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,o){if(t.byteLength,
n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(o||0))throw new RangeError("'length' is out of bounds")
;t=void 0===n&&void 0===o?new Uint8Array(t):void 0===o?new Uint8Array(t,n):new Uint8Array(t,n,o);c.TYPED_ARRAY_SUPPORT?(e=t).__proto__=c.prototype:e=m(e,t);return e
}(e,t,n,o):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
;var o=0|h(t,n),i=(e=s(e,o)).write(t,n);i!==o&&(e=e.slice(0,i));return e}(e,t,n):function(e,t){if(c.isBuffer(t)){var n=0|p(t.length);return 0===(e=s(e,n)).length||t.copy(e,0,0,n),e}if(t){
if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(o=t.length)!=o?s(e,0):m(e,t);if("Buffer"===t.type&&a(t.data))return m(e,t.data)}
var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function d(e){
if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function l(e,t){if(d(t),e=s(e,t<0?0:0|p(t)),
!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function m(e,t){var n=t.length<0?0:0|p(t.length);e=s(e,n);for(var o=0;o<n;o+=1)e[o]=255&t[o];return e}function p(e){
if(e>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes");return 0|e}function h(e,t){if(c.isBuffer(e))return e.length
;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length
;if(0===n)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return M(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":
return 2*n;case"hex":return n>>>1;case"base64":return F(e).length;default:if(o)return M(e).length;t=(""+t).toLowerCase(),o=!0}}function f(e,t,n){var o=!1;if((void 0===t||t<0)&&(t=0),
t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,n);case"utf8":case"utf-8":
return x(this,t,n);case"ascii":return E(this,t,n);case"latin1":case"binary":return z(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,n)
;default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function g(e,t,n){var o=e[t];e[t]=e[n],e[n]=o}function k(e,t,n,o,i){if(0===e.length)return-1
;if("string"==typeof n?(o=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){
if(!i)return-1;n=0}if("string"==typeof t&&(t=c.from(t,o)),c.isBuffer(t))return 0===t.length?-1:v(e,t,n,o,i);if("number"==typeof t)return t&=255,
c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,o,i)
;throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,o,i){var a,r=1,s=e.length,c=t.length
;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||t.length<2)return-1;r=2,s/=2,c/=2,n/=2}function u(e,t){
return 1===r?e[t]:e.readUInt16BE(t*r)}if(i){var d=-1;for(a=n;a<s;a++)if(u(e,a)===u(t,-1===d?0:a-d)){if(-1===d&&(d=a),a-d+1===c)return d*r}else-1!==d&&(a-=a-d),d=-1}else for(n+c>s&&(n=s-c),
a=n;a>=0;a--){for(var l=!0,m=0;m<c;m++)if(u(e,a+m)!==u(t,m)){l=!1;break}if(l)return a}return-1}function y(e,t,n,o){n=Number(n)||0;var i=e.length-n;o?(o=Number(o))>i&&(o=i):o=i;var a=t.length
;if(a%2!=0)throw new TypeError("Invalid hex string");o>a/2&&(o=a/2);for(var r=0;r<o;++r){var s=parseInt(t.substr(2*r,2),16);if(isNaN(s))return r;e[n+r]=s}return r}function b(e,t,n,o){
return V(M(t,e.length-n),e,n,o)}function C(e,t,n,o){return V(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,o)}function S(e,t,n,o){return C(e,t,n,o)}
function P(e,t,n,o){return V(F(t),e,n,o)}function w(e,t,n,o){return V(function(e,t){for(var n,o,i,a=[],r=0;r<e.length&&!((t-=2)<0);++r)n=e.charCodeAt(r),o=n>>8,i=n%256,a.push(i),a.push(o);return a
}(t,e.length-n),e,n,o)}function A(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function x(e,t,n){n=Math.min(e.length,n);for(var o=[],i=t;i<n;){
var a,r,s,c,u=e[i],d=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l<=n)switch(l){case 1:u<128&&(d=u);break;case 2:128==(192&(a=e[i+1]))&&(c=(31&u)<<6|63&a)>127&&(d=c);break;case 3:a=e[i+1],r=e[i+2],
128==(192&a)&&128==(192&r)&&(c=(15&u)<<12|(63&a)<<6|63&r)>2047&&(c<55296||c>57343)&&(d=c);break;case 4:a=e[i+1],r=e[i+2],s=e[i+3],
128==(192&a)&&128==(192&r)&&128==(192&s)&&(c=(15&u)<<18|(63&a)<<12|(63&r)<<6|63&s)>65535&&c<1114112&&(d=c)}null===d?(d=65533,l=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|1023&d),
o.push(d),i+=l}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var n="",o=0;for(;o<t;)n+=String.fromCharCode.apply(String,e.slice(o,o+=4096));return n}(o)}
t.Buffer=c,t.SlowBuffer=function(e){+e!=e&&(e=0);return c.alloc(+e)},t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{
var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),
t.kMaxLength=r(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,n){return u(null,e,t,n)},
c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{
value:null,configurable:!0})),c.alloc=function(e,t,n){return function(e,t,n,o){return d(t),t<=0?s(e,t):void 0!==n?"string"==typeof o?s(e,t).fill(n,o):s(e,t).fill(n):s(e,t)}(null,e,t,n)},
c.allocUnsafe=function(e){return l(null,e)},c.allocUnsafeSlow=function(e){return l(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){
if(!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,o=t.length,i=0,a=Math.min(n,o);i<a;++i)if(e[i]!==t[i]){n=e[i],o=t[i];break}
return n<o?-1:o<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":
case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!a(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);var n
;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var o=c.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var r=e[n]
;if(!c.isBuffer(r))throw new TypeError('"list" argument must be an Array of Buffers');r.copy(o,i),i+=r.length}return o},c.byteLength=h,c.prototype._isBuffer=!0,c.prototype.swap16=function(){
var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length
;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length
;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},
c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?x(this,0,e):f.apply(this,arguments)},c.prototype.equals=function(e){
if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES
;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,n,o,i){
if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),
t<0||n>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&t>=n)return 0;if(o>=i)return-1;if(t>=n)return 1;if(this===e)return 0
;for(var a=(i>>>=0)-(o>>>=0),r=(n>>>=0)-(t>>>=0),s=Math.min(a,r),u=this.slice(o,i),d=e.slice(t,n),l=0;l<s;++l)if(u[l]!==d[l]){a=u[l],r=d[l];break}return a<r?-1:r<a?1:0},
c.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return k(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return k(this,e,t,n,!1)},
c.prototype.write=function(e,t,n,o){if(void 0===t)o="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)o=t,n=this.length,t=0;else{
if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===o&&(o="utf8")):(o=n,n=void 0)}var i=this.length-t
;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return y(this,e,t,n)
;case"utf8":case"utf-8":return b(this,e,t,n);case"ascii":return C(this,e,t,n);case"latin1":case"binary":return S(this,e,t,n);case"base64":return P(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":
case"utf-16le":return w(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},c.prototype.toJSON=function(){return{type:"Buffer",
data:Array.prototype.slice.call(this._arr||this,0)}};function E(e,t,n){var o="";n=Math.min(e.length,n);for(var i=t;i<n;++i)o+=String.fromCharCode(127&e[i]);return o}function z(e,t,n){var o=""
;n=Math.min(e.length,n);for(var i=t;i<n;++i)o+=String.fromCharCode(e[i]);return o}function _(e,t,n){var o=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>o)&&(n=o);for(var i="",a=t;a<n;++a)i+=D(e[a]);return i}
function U(e,t,n){for(var o=e.slice(t,n),i="",a=0;a<o.length;a+=2)i+=String.fromCharCode(o[a]+256*o[a+1]);return i}function T(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
;if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function I(e,t,n,o,i,a){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
;if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(n+o>e.length)throw new RangeError("Index out of range")}function N(e,t,n,o){t<0&&(t=65535+t+1)
;for(var i=0,a=Math.min(e.length-n,2);i<a;++i)e[n+i]=(t&255<<8*(o?i:1-i))>>>8*(o?i:1-i)}function j(e,t,n,o){t<0&&(t=4294967295+t+1)
;for(var i=0,a=Math.min(e.length-n,4);i<a;++i)e[n+i]=t>>>8*(o?i:3-i)&255}function B(e,t,n,o,i,a){if(n+o>e.length)throw new RangeError("Index out of range")
;if(n<0)throw new RangeError("Index out of range")}function L(e,t,n,o,a){return a||B(e,0,n,4),i.write(e,t,n,o,23,4),n+4}function O(e,t,n,o,a){return a||B(e,0,n,8),i.write(e,t,n,o,52,8),n+8}
c.prototype.slice=function(e,t){var n,o=this.length;if((e=~~e)<0?(e+=o)<0&&(e=0):e>o&&(e=o),(t=void 0===t?o:~~t)<0?(t+=o)<0&&(t=0):t>o&&(t=o),t<e&&(t=e),
c.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=c.prototype;else{var i=t-e;n=new c(i,void 0);for(var a=0;a<i;++a)n[a]=this[a+e]}return n},c.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,
n||T(e,t,this.length);for(var o=this[e],i=1,a=0;++a<t&&(i*=256);)o+=this[e+a]*i;return o},c.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||T(e,t,this.length)
;for(var o=this[e+--t],i=1;t>0&&(i*=256);)o+=this[e+--t]*i;return o},c.prototype.readUInt8=function(e,t){return t||T(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){
return t||T(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||T(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){
return t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||T(e,4,this.length),
16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||T(e,t,this.length);for(var o=this[e],i=1,a=0;++a<t&&(i*=256);)o+=this[e+a]*i
;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},c.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||T(e,t,this.length);for(var o=t,i=1,a=this[e+--o];o>0&&(i*=256);)a+=this[e+--o]*i
;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},c.prototype.readInt8=function(e,t){return t||T(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){
t||T(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){t||T(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},
c.prototype.readInt32LE=function(e,t){return t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||T(e,4,this.length),
this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||T(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){
return t||T(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||T(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){
return t||T(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,n,o){(e=+e,t|=0,n|=0,o)||I(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,a=0
;for(this[t]=255&e;++a<n&&(i*=256);)this[t+a]=e/i&255;return t+n},c.prototype.writeUIntBE=function(e,t,n,o){(e=+e,t|=0,n|=0,o)||I(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,a=1
;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+n},c.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),
this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):N(this,e,t,!0),t+2},
c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):N(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,n){
return e=+e,t|=0,n||I(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):j(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,n){
return e=+e,t|=0,n||I(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,n,o){
if(e=+e,t|=0,!o){var i=Math.pow(2,8*n-1);I(this,e,t,n,i-1,-i)}var a=0,r=1,s=0;for(this[t]=255&e;++a<n&&(r*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/r>>0)-s&255;return t+n},
c.prototype.writeIntBE=function(e,t,n,o){if(e=+e,t|=0,!o){var i=Math.pow(2,8*n-1);I(this,e,t,n,i-1,-i)}var a=n-1,r=1,s=0;for(this[t+a]=255&e;--a>=0&&(r*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),
this[t+a]=(e/r>>0)-s&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},
c.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):N(this,e,t,!0),t+2},
c.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):N(this,e,t,!1),t+2},
c.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,
this[t+3]=e>>>24):j(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,
this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,n){return L(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return L(this,e,t,!1,n)
},c.prototype.writeDoubleLE=function(e,t,n){return O(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return O(this,e,t,!1,n)},c.prototype.copy=function(e,t,n,o){if(n||(n=0),
o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<n&&(o=n),o===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds")
;if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n)
;var i,a=o-n
;if(this===e&&n<t&&t<o)for(i=a-1;i>=0;--i)e[i+t]=this[i+n];else if(a<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+a),t);return a
},c.prototype.fill=function(e,t,n,o){if("string"==typeof e){if("string"==typeof t?(o=t,t=0,n=this.length):"string"==typeof n&&(o=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}
if(void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o)}else"number"==typeof e&&(e&=255)
;if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var a;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),
"number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{var r=c.isBuffer(e)?e:M(new c(e,o).toString()),s=r.length;for(a=0;a<n-t;++a)this[a+t]=r[a%s]}return this};var R=/[^+\/0-9A-Za-z-_]/g;function D(e){
return e<16?"0"+e.toString(16):e.toString(16)}function M(e,t){var n;t=t||1/0;for(var o=e.length,i=null,a=[],r=0;r<o;++r){if((n=e.charCodeAt(r))>55295&&n<57344){if(!i){if(n>56319){
(t-=3)>-1&&a.push(239,191,189);continue}if(r+1===o){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)
}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
;a.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return a}function F(e){
return o.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function V(e,t,n,o){
for(var i=0;i<o&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}}).call(this,n(27))},9:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){
return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}))
;return[n].concat(a).concat([i]).join("\n")}var r,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){
"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s])
;o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},90:function(e,t,n){"use strict";t.byteLength=function(e){var t=u(e),n=t[0],o=t[1];return 3*(n+o)/4-o},
t.toByteArray=function(e){var t,n,o=u(e),r=o[0],s=o[1],c=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),d=0,l=s>0?r-4:r
;for(n=0;n<l;n+=4)t=i[e.charCodeAt(n)]<<18|i[e.charCodeAt(n+1)]<<12|i[e.charCodeAt(n+2)]<<6|i[e.charCodeAt(n+3)],c[d++]=t>>16&255,c[d++]=t>>8&255,c[d++]=255&t
;2===s&&(t=i[e.charCodeAt(n)]<<2|i[e.charCodeAt(n+1)]>>4,c[d++]=255&t);1===s&&(t=i[e.charCodeAt(n)]<<10|i[e.charCodeAt(n+1)]<<4|i[e.charCodeAt(n+2)]>>2,c[d++]=t>>8&255,c[d++]=255&t);return c},
t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,a=[],r=0,s=n-i;r<s;r+=16383)a.push(d(e,r,r+16383>s?s:r+16383));1===i?(t=e[n-1],a.push(o[t>>2]+o[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],
a.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return a.join("")}
;for(var o=[],i=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=r.length;s<c;++s)o[s]=r[s],i[r.charCodeAt(s)]=s
;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){
for(var i,a,r=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),r.push(o[(a=i)>>18&63]+o[a>>12&63]+o[a>>6&63]+o[63&a]);return r.join("")}i["-".charCodeAt(0)]=62,
i["_".charCodeAt(0)]=63},91:function(e,t){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,n,o,i){var a,r,s=8*i-o-1,c=(1<<s)-1,u=c>>1,d=-7,l=n?i-1:0,m=n?-1:1,p=e[t+l];for(l+=m,a=p&(1<<-d)-1,p>>=-d,d+=s;d>0;a=256*a+e[t+l],l+=m,d-=8);for(r=a&(1<<-d)-1,a>>=-d,
d+=o;d>0;r=256*r+e[t+l],l+=m,d-=8);if(0===a)a=1-u;else{if(a===c)return r?NaN:1/0*(p?-1:1);r+=Math.pow(2,o),a-=u}return(p?-1:1)*r*Math.pow(2,a-o)},t.write=function(e,t,n,o,i,a){
var r,s,c,u=8*a-i-1,d=(1<<u)-1,l=d>>1,m=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=o?0:a-1,h=o?1:-1,f=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,
r=d):(r=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-r))<1&&(r--,c*=2),(t+=r+l>=1?m/c:m*Math.pow(2,1-l))*c>=2&&(r++,c/=2),r+l>=d?(s=0,r=d):r+l>=1?(s=(t*c-1)*Math.pow(2,i),
r+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),r=0));i>=8;e[n+p]=255&s,p+=h,s/=256,i-=8);for(r=r<<i|s,u+=i;u>0;e[n+p]=255&r,p+=h,r/=256,u-=8);e[n+p-h]|=128*f}},92:function(e,t){var n={}.toString
;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},93:function(e,t,n){var o=n(94);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){
return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},94:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-bricks-third-party-button-group{padding-bottom:12px}.uu-identitymanagement-bricks-third-party-button-group-alert-text>.uu5-bricks-span{display:block}.uu-identitymanagement-bricks-third-party-button-group-alert-container{margin-left:-16px;margin-right:-16px;margin-bottom:8px}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-content:before{font-family:Material Design Icons,sans-serif;content:"\\F028";font-size:26px;color:#fff;text-align:center;line-height:20px;margin-right:15px;margin-left:15px}.uu-identitymanagement-bricks-third-party-button-group-alert-container .color-schema-red.uu5-bricks-alert{background:#de4847;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:3px}.uu-identitymanagement-bricks-third-party-button-group-alert-container .color-schema-red.uu5-bricks-alert .uu5-bricks-alert-content{color:#fff}.uu-identitymanagement-bricks-third-party-button-group-alert-container .color-schema-red.uu5-bricks-alert .uu5-bricks-link:not([class*=color-schema-]){color:#fff;text-decoration:underline}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-center{left:unset;-webkit-transform:unset;transform:unset}.uu5-ua-ie .uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-center{left:auto;-webkit-transform:none;transform:none}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert{position:static}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert.uu5-common-hidden{display:none!important}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-content{font-size:14px;letter-spacing:0;line-height:19px;padding:2px 0}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-content .uu5-bricks-span{font-size:14px;letter-spacing:0;line-height:19px}@media screen and (min-width:481px){.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert-content{padding:10px 0}}.uu-identitymanagement-bricks-third-party-button-group-alert-container .uu5-bricks-alert{margin:15px 0 0;width:100%}.uu-identitymanagement-bricks-third-party-button-group-header{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);margin-bottom:12px}.uu-identitymanagement-bricks-third-party-button-group-show-more{margin-top:4px;text-align:center;cursor:pointer;display:block;height:32px;transition:opacity .2s,visibility .2s,height .2s,max-height .2s}.uu-identitymanagement-bricks-third-party-button-group-show-more:hover{text-decoration:none}.uu-identitymanagement-bricks-third-party-button-group-show-more-text{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);letter-spacing:0;vertical-align:middle}.uu-identitymanagement-bricks-third-party-button-group-show-more-icon{margin-left:8px;line-height:20px;font-size:20px;color:rgba(0,0,0,.54);vertical-align:middle}.uu-identitymanagement-bricks-third-party-button-group-show-more-hidden{overflow:hidden;visibility:hidden;opacity:0;height:0;padding:0;margin:0}.uu-identitymanagement-bricks-third-party-button-group-services{margin-left:-4px;margin-right:-4px;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uu-identitymanagement-bricks-third-party-button-group-services-service{visibility:visible;opacity:1;width:85px;height:72px;margin:4px;padding:6px 0 0;background:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.18),0 0 2px 0 rgba(0,0,0,.12);border-radius:4px}.uu-identitymanagement-bricks-third-party-button-group-services-service-text{font-family:ClearSans-Medium,sans-serif;padding-top:9px;display:block;text-align:center;margin-left:auto;margin-right:auto;font-size:13px;line-height:18px;color:#4a4a4a;letter-spacing:0}.uu-identitymanagement-bricks-third-party-button-group-services-service:focus,.uu-identitymanagement-bricks-third-party-button-group-services-service:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.uu-identitymanagement-bricks-third-party-button-group-services-service:active{box-shadow:0 -1px 1px 0 rgba(0,0,0,.5)}.uu-identitymanagement-bricks-third-party-button-group-services-service-icon{position:relative;display:inline-block;width:26px;height:26px;background-size:cover}',""]),
e.exports=t},95:function(e,t,n){var o=n(96);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1,transform:void 0,insertInto:function(){return n(10)()}};n(11)(o,i);o.locals&&(e.exports=o.locals)},
96:function(e,t,n){
(t=n(9)(!1)).push([e.i,'.content-mdi-check{content:"\\F12C"}.content-mdi-earth{content:"\\F1E7"}.content-mdi-alert-circle{content:"\\F028"}.uu-identitymanagement-core-config-redirect-form-header{text-align:center;font-size:14px;margin-bottom:12px;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-config-redirect-form-header-info{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:14px;color:rgba(0,0,0,.54);margin-bottom:-18px}.uu-identitymanagement-core-config-redirect-form-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.uu-identitymanagement-core-config-redirect-form-redirect-header{font-family:ClearSans-Light,sans-serif;text-align:center;font-size:16px;color:#4a4a4a}.uu-identitymanagement-core-config-redirect-form-redirect-link{margin-top:16px;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:16px;color:#000;vertical-align:middle;color:#4a4a4a;font-weight:700}.uu-identitymanagement-core-config-redirect-form-footer{font-family:ClearSans-Medium,sans-serif;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;-webkit-align-items:center;align-items:center;padding:0}.uu-identitymanagement-core-config-redirect-form-footer-link{font-size:14px;color:#000}.uu-identitymanagement-core-config-redirect-form-footer-link:first-child{color:#000;text-align:left;margin-left:-16px}.uu-identitymanagement-core-config-redirect-form-footer-link:first-child:focus{outline:none}.uu-identitymanagement-core-config-redirect-form-footer-link:first-child .uu5-bricks-button:hover{background:transparent}.uu-identitymanagement-core-config-redirect-form-footer-link:last-child{text-align:right;vertical-align:middle}.uu-identitymanagement-core-config-redirect-form-footer-link:last-child .uu5-bricks-button-filled{background:#fafafa}.uu-identitymanagement-core-config-redirect-form-footer-icon{padding-right:8px}@media screen and (min-width:481px){.uu-identitymanagement-core-config-redirect-form{max-width:320px}}',""]),
e.exports=t}})}));