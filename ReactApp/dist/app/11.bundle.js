(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{44:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var u=n(0),a=n.n(u),t=n(9),t=n.n(t);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(n);return e=o?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==r(e)&&"function"!=typeof e?s(t):e}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,u["PureComponent"]);var e,t,n,o=i(r);function r(e,t){var n;return function(e){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),f(s(n=o.call(this)),"updateAge",function(){setInterval(function(){n.setState({age:20,name:"Ashish"}),console.log("Name Updates "+n.state.name)},1e3)}),f(s(n),"onTextChange",function(e){console.log("Typed Value - "+e.target.value);e=e.target.value;n.setState({name:e})}),f(s(n),"handleSubmit",function(e){e.preventDefault(),n.setState({name:n.input.current.value,age:n.inputAge.current.value})}),n.state={name:e.name,age:18},n.input=a.a.createRef(),n.inputAge=a.a.createRef(),n}return e=r,(t=[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),setTimeout(function(){e.input.current.focus(),e.inputAge.current.value="Trump",e.updateAge()},3e3)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate"),console.log("prevState",e),console.log("prevProps",t),{prevState:e,prevProps:t}}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate"),console.log("prevState",e),console.log("prevProps",t)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"loadimage",style:{backgroundImage:"url(./images/hm_pic4.jpg)"}},this.state.Title,a.a.createElement("br",null),a.a.createElement("b",{className:"feature"},"Below Feature's We've Implemented in our project :"),a.a.createElement("ul",null,a.a.createElement("li",null,"Sign up new users"),a.a.createElement("li",null,"Login existing users."),a.a.createElement("li",null,"Add products/items to user's cart."),a.a.createElement("li",null,"Save the user's cart."),a.a.createElement("li",null,"Checkout and pay for items.")),a.a.createElement("button",{onClick:function(){return e.props.history.push("/about/2500")}},"GoTo About Page"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return e.props.history.push("/userhook")}},"GoTo User Hooks"))}}])&&c(e.prototype,t),n&&c(e,n),r}();o.propTypes={name:t.a.string.isRequired}}}]);