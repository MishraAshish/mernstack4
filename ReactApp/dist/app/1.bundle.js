(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{40:function(t,e,n){"use strict";n.r(e),n.d(e,"addUserToStore",function(){return a}),n.d(e,"signInUpUser",function(){return c}),n.d(e,"saveProduct",function(){return i}),n.d(e,"fetchProducts",function(){return l}),n.d(e,"addItemToCart",function(){return f}),n.d(e,"emptyTheCart",function(){return s}),n.d(e,"updateItem",function(){return p}),n.d(e,"removeItem",function(){return d}),n.d(e,"saveItemsForCheckout",function(){return m}),n.d(e,"getUserCart",function(){return y}),n.d(e,"addCoupon",function(){return h}),n.d(e,"loading",function(){return b}),n.d(e,"addItemToNCart",function(){return g}),n.d(e,"removeItemN",function(){return v}),n.d(e,"fetchNProducts",function(){return E}),n.d(e,"saveNProduct",function(){return O});var r=n(3);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=function(t){return{type:r.d,payload:{user:t}}},c=function(e){return function(n,t){console.log("called by thunk"),window.fetch("http://localhost:9090/api/signinupuser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){console.log("response ",t);var e=a(t);n(e),n(y(t._id))}).catch(function(t){console.log("Error While Login",t)})}},i=function(t){return console.log("Product ",t),function(e){window.fetch("http://localhost:9090/api/saveProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){console.log("product save response ",t),e(l())}).catch(function(t){console.log("Error While SAving Product",t)})}},l=function(){return{type:r.i,payload:{promise:new Promise(function(e,n){fetch("http://localhost:9090/api/getproducts",{method:"GET"}).then(function(t){return t.json()},function(t){return console.log("An error occurred.",t)}).then(function(t){console.log("responseProducts ",t),e(t)}).catch(function(t){n(t)})})}}},f=function(t){return{type:r.b,payload:{item:t}}},s=function(){return{type:r.e}},p=function(t,e){return{type:r.n,payload:{id:t,qty:parseInt(e)}}},d=function(t){return{type:r.k,payload:{id:t}}},m=function(t,n){return console.log("Items To Be Saved",t),function(e){e(b(!0)),window.fetch("http://localhost:9090/api/saveUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:n,cart:t})}).then(function(t){return t.json()}).then(function(t){console.log("response ",t),e(b(!1))}).catch(function(t){e(b(!1)),console.log("Error While Saving Cart",t)})}},y=function(t){return function(r){console.log("Get List Of items"),window.fetch("http://localhost:9090/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:t})}).then(function(t){return t.json()}).then(function(t){console.log("response - get user cart ",t),r(s());var e=o(t.cart);try{for(e.s();!(n=e.n()).done;){var n=n.value;console.log("item in for of",n);n=f(n);r(n)}}catch(t){e.e(t)}finally{e.f()}}).catch(function(t){console.log("Error While Login",t)})}},h=function(t){return{type:r.a,payload:t}},b=function(t){return{type:r.m,payload:t}},g=function(t){return{type:r.c,payload:{item:t}}},v=function(t){return{type:r.l,payload:{id:t}}},E=function(){return{type:r.g,payload:{promise:new Promise(function(e,n){fetch("http://localhost:9090/api/getnproducts",{method:"GET"}).then(function(t){return t.json()},function(t){return console.log("An error occurred.",t)}).then(function(t){console.log("responseProducts ",t),e(t)}).catch(function(t){n(t)})})}}},O=function(t){return console.log("Product ",t),function(e){window.fetch("http://localhost:9090/api/savenProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){console.log("product save response ",t),e(E())}).catch(function(t){console.log("Error While SAving Product",t)})}}},41:function(t,e,n){"use strict";var r=n(19),o=n(0),a=n.n(o),c=n(10);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==u(t)&&"function"!=typeof t?s(e):t}}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,o["Component"]);var t,e,n,c=f(u);function u(t,e){var n,r,o,a;return function(t){if(!(t instanceof u))throw new TypeError("Cannot call a class as a function")}(this),n=c.call(this),r=s(n),a=function(t){t=t.target;n.setState({qty:t.value})},(o="onChangeQuantity")in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n.state={qty:t.item.qty},n}return t=u,(e=[{key:"componentWillReceiveProps",value:function(t){this.setState({qty:t.item.qty})}},{key:"render",value:function(){var t=this;console.log("CartItem render",this.props.item.id);var e=this.props.item;return a.a.createElement("tr",null,a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.price),a.a.createElement("td",null,this.props.donotMakeEditable?this.state.qty:a.a.createElement("input",{value:this.state.qty,type:"number",onChange:this.onChangeQuantity})),a.a.createElement("td",null," ",e.price*e.qty," "),a.a.createElement("td",null,this.props.donotMakeEditable?" ":a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){return t.props.actions.updateItem(e.id,t.state.qty)}},"Update"),a.a.createElement("button",{onClick:function(){return t.props.actions.removeItem(e.id)}},"Remove"))))}}])&&i(t.prototype,e),n&&i(t,n),u}(),m=n(40),y=Object(r.b)(null,function(t){return{actions:Object(c.b)(m,t)}})(d),d=function(e){var t=e.items;return a.a.createElement("div",null,a.a.createElement("h2",null,"Cart List"),t.length<=0?a.a.createElement("b",null,"No Items In Your Cart Kindly Add One"):a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Qty"),a.a.createElement("th",null,"Total"),e.donotMakeEditable?"":a.a.createElement("th",null,"Remove/Edit"))),a.a.createElement("tbody",null,t.map(function(t){return a.a.createElement(y,{item:t,key:t.id,donotMakeEditable:e.donotMakeEditable})}))))};e.a=Object(r.b)(function(t){return{items:t.cart}},null)(d)},42:function(t,e,n){"use strict";var r=n(19),o=n(0),a=n.n(o);function c(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function u(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach(function(t){var e,n;e=r,t=o[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=Object(r.b)(function(t){return u({},function(t){var e=0,n=0,r=i(t);try{for(r.s();!(o=r.n()).done;){var o=o.value;e+=o.qty*o.price,n+=o.qty}}catch(t){r.e(t)}finally{r.f()}return{amount:e,count:n}}(t.cart))},null)(function(t){var e=t.count,t=t.amount;return a.a.createElement("div",null,a.a.createElement("h2",null,"Cart Summary"),a.a.createElement("p",null," Amount: ",t," "),a.a.createElement("p",null," Count: ",e," "))})},54:function(t,e,n){"use strict";n.r(e);var r=n(19),o=n(0),a=n.n(o),c=n(41),u=n(42),o=function(t){return a.a.createElement("div",{className:"cartComponent"},a.a.createElement("h2",null,"SynergisticIT Shopping Cart To Add Items"),t.loading?a.a.createElement(a.a.Fragment,null,"...Saving Cart Items"):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,a.a.createElement("b",null,"Cart Length : ",t.cart.length)),a.a.createElement("button",{onClick:t.addItemToCart},"Add Item"),a.a.createElement("button",{onClick:t.emptyCart},"Empty"),a.a.createElement(c.a,null),a.a.createElement(u.a,null),a.a.createElement("button",{onClick:function(){return t.saveItemsForCheckout(t.cart,t.user._id)}},"Save For Checkout"),a.a.createElement("button",{onClick:function(){return t.history.push("/checkout")}},"Go To Checkout")))},i=n(40);e.default=Object(r.b)(function(t){return{cart:t.cart,user:t.user.user,loading:t.loading.loading}},function(n){return{addItemToCart:function(){var t=Math.ceil(1e4*Math.random()),t={id:t,name:"Product ".concat(t),price:Math.ceil(100*Math.random()),qty:1},t=Object(i.addItemToCart)(t);n(t)},emptyCart:function(){n(Object(i.emptyTheCart)())},saveItemsForCheckout:function(t,e){e?t&&1<=t.length?n(Object(i.saveItemsForCheckout)(t,e)):alert("Please add items to cart!"):alert("Please Login to save cart!")}}})(o)}}]);