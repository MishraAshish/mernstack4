(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{40:function(t,n,e){"use strict";e.r(n),e.d(n,"addUserToStore",function(){return c}),e.d(n,"signInUpUser",function(){return u}),e.d(n,"saveProduct",function(){return a}),e.d(n,"fetchProducts",function(){return l}),e.d(n,"addItemToCart",function(){return f}),e.d(n,"emptyTheCart",function(){return s}),e.d(n,"updateItem",function(){return p}),e.d(n,"removeItem",function(){return y}),e.d(n,"saveItemsForCheckout",function(){return d}),e.d(n,"getUserCart",function(){return h}),e.d(n,"addCoupon",function(){return m}),e.d(n,"loading",function(){return b}),e.d(n,"addItemToNCart",function(){return g}),e.d(n,"removeItemN",function(){return v});var o=e(3);function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw r}}}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var c=function(t){return{type:o.d,payload:{user:t}}},u=function(n){return function(e,t){console.log("called by thunk"),window.fetch("http://localhost:9090/api/signinupuser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(t){return t.json()}).then(function(t){console.log("response ",t);var n=c(t);e(n),e(h(t._id))}).catch(function(t){console.log("Error While Login",t)})}},a=function(t){return console.log("Product ",t),function(n){window.fetch("http://localhost:9090/api/saveProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){console.log("product save response ",t),n(l())}).catch(function(t){console.log("Error While SAving Product",t)})}},l=function(){return{type:o.g,payload:{promise:new Promise(function(n,e){fetch("http://localhost:9090/api/getproducts",{method:"GET"}).then(function(t){return t.json()},function(t){return console.log("An error occurred.",t)}).then(function(t){console.log("responseProducts ",t),n(t)}).catch(function(t){e(t)})})}}},f=function(t){return{type:o.b,payload:{item:t}}},s=function(){return{type:o.e}},p=function(t,n){return{type:o.l,payload:{id:t,qty:parseInt(n)}}},y=function(t){return{type:o.i,payload:{id:t}}},d=function(t,e){return console.log("Items To Be Saved",t),function(n){n(b(!0)),window.fetch("http://localhost:9090/api/saveUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:e,cart:t})}).then(function(t){return t.json()}).then(function(t){console.log("response ",t),n(b(!1))}).catch(function(t){n(b(!1)),console.log("Error While Saving Cart",t)})}},h=function(t){return function(o){console.log("Get List Of items"),window.fetch("http://localhost:9090/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:t})}).then(function(t){return t.json()}).then(function(t){console.log("response - get user cart ",t),o(s());var n=r(t.cart);try{for(n.s();!(e=n.n()).done;){var e=e.value;console.log("item in for of",e);e=f(e);o(e)}}catch(t){n.e(t)}finally{n.f()}}).catch(function(t){console.log("Error While Login",t)})}},m=function(t){return{type:o.a,payload:t}},b=function(t){return{type:o.k,payload:t}},g=function(t){return{type:o.c,payload:{item:t}}},v=function(t){return{type:o.j,payload:{id:t}}}},51:function(t,n,e){"use strict";e.r(n);var o=e(19),r=e(0),u=e.n(r);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,n=s(e);return t=o?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==c(t)&&"function"!=typeof t?f(n):t}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(c,u.a.Component);var t,n,e,r=l(c);function c(){var t,n,e,o;return function(t){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}(this),t=r.call(this),n=f(t),o=function(){t.setState({showDetails:!t.state.showDetails})},(e="showHideDetails")in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,t.state={showDetails:!1},t}return t=c,(n=[{key:"render",value:function(){var t=this.props.product;return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",{className:"product",onClick:this.showHideDetails},u.a.createElement("li",null,t.name,this.state.showDetails?u.a.createElement("ul",{className:"productDetails"},u.a.createElement("li",null,t.price),u.a.createElement("li",null,t.camera),u.a.createElement("li",null,t.ram),u.a.createElement("li",null,t.display),u.a.createElement("li",null,t.color)):"")))}}])&&i(t.prototype,n),e&&i(t,e),c}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,n){return(h=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function m(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,n=b(e);return t=o?(t=b(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==y(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var r=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&h(t,n)}(r,u.a.Component);var t,n,e,o=m(r);function r(t,n){return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),o.call(this)}return t=r,(n=[{key:"componentDidMount",value:function(){console.log("Hello"),this.props.fetchProducts()}},{key:"render",value:function(){var t=this.props.products;return u.a.createElement("div",null,1<=t.length?t.map(function(t){return u.a.createElement(p,{product:t,key:t._id})}):u.a.createElement("p",null,"No Products to display"))}}])&&d(t.prototype,n),e&&d(t,e),r}(),g=e(40);n.default=Object(o.b)(function(t){return{products:t.product.products}},function(t){return{fetchProducts:function(){t(Object(g.fetchProducts)())}}})(r)}}]);