(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{40:function(t,e,n){"use strict";n.r(e),n.d(e,"addUserToStore",function(){return c}),n.d(e,"signInUpUser",function(){return a}),n.d(e,"saveProduct",function(){return i}),n.d(e,"fetchProducts",function(){return l}),n.d(e,"addItemToCart",function(){return s}),n.d(e,"emptyTheCart",function(){return d}),n.d(e,"updateItem",function(){return f}),n.d(e,"removeItem",function(){return p}),n.d(e,"saveItemsForCheckout",function(){return m}),n.d(e,"getUserCart",function(){return h}),n.d(e,"addCoupon",function(){return y}),n.d(e,"loading",function(){return g}),n.d(e,"addItemToNCart",function(){return v}),n.d(e,"removeItemN",function(){return b}),n.d(e,"fetchNProducts",function(){return j}),n.d(e,"saveNProduct",function(){return E});var r=n(3);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(t){return{type:r.d,payload:{user:t}}},a=function(e){return function(n,t){console.log("called by thunk"),window.fetch("http://localhost:9090/api/signinupuser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){console.log("response ",t);var e=c(t);n(e),n(h(t._id))}).catch(function(t){console.log("Error While Login",t)})}},i=function(t){return console.log("Product ",t),function(e){window.fetch("http://localhost:9090/api/saveProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){console.log("product save response ",t),e(l())}).catch(function(t){console.log("Error While SAving Product",t)})}},l=function(){return{type:r.i,payload:{promise:new Promise(function(e,n){fetch("http://localhost:9090/api/getproducts",{method:"GET"}).then(function(t){return t.json()},function(t){return console.log("An error occurred.",t)}).then(function(t){console.log("responseProducts ",t),e(t)}).catch(function(t){n(t)})})}}},s=function(t){return{type:r.b,payload:{item:t}}},d=function(){return{type:r.e}},f=function(t,e){return{type:r.n,payload:{id:t,qty:parseInt(e)}}},p=function(t){return{type:r.k,payload:{id:t}}},m=function(t,n){return console.log("Items To Be Saved",t),function(e){e(g(!0)),window.fetch("http://localhost:9090/api/saveUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:n,cart:t})}).then(function(t){return t.json()}).then(function(t){console.log("response ",t),e(g(!1))}).catch(function(t){e(g(!1)),console.log("Error While Saving Cart",t)})}},h=function(t){return function(r){console.log("Get List Of items"),window.fetch("http://localhost:9090/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:t})}).then(function(t){return t.json()}).then(function(t){console.log("response - get user cart ",t),r(d());var e=o(t.cart);try{for(e.s();!(n=e.n()).done;){var n=n.value;console.log("item in for of",n);n=s(n);r(n)}}catch(t){e.e(t)}finally{e.f()}}).catch(function(t){console.log("Error While Login",t)})}},y=function(t){return{type:r.a,payload:t}},g=function(t){return{type:r.m,payload:t}},v=function(t){return{type:r.c,payload:{item:t}}},b=function(t){return{type:r.l,payload:{id:t}}},j=function(){return{type:r.g,payload:{promise:new Promise(function(e,n){fetch("http://localhost:9090/api/getnproducts",{method:"GET"}).then(function(t){return t.json()},function(t){return console.log("An error occurred.",t)}).then(function(t){console.log("responseProducts ",t),e(t)}).catch(function(t){n(t)})})}}},E=function(t){return console.log("Product ",t),function(e){window.fetch("http://localhost:9090/api/savenProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){console.log("product save response ",t),e(j())}).catch(function(t){console.log("Error While SAving Product",t)})}}},52:function(t,e,n){"use strict";n.r(e);var d=n(0),f=n.n(d),p=n(19),m=n(40);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){var e=t.product,t=c(Object(d.useState)(!1),2),n=t[0],r=t[1],o=Object(p.c)();return f.a.createElement(f.a.Fragment,null,f.a.createElement("ul",{className:"product",onClick:function(t){t.target.classList.contains("product")&&r(!n)}},f.a.createElement("li",{className:"product"},e.name,n?f.a.createElement("ul",{className:"productDetails"},f.a.createElement("li",null,e.price),f.a.createElement("li",null,e.desc),f.a.createElement("li",null,e.rating),f.a.createElement("button",{onClick:function(){return t=e,void o(Object(m.addItemToNCart)(t));var t}},"Add To Cart")):"")))}function h(){var t=Object(p.d)(function(t){return t.product.nproducts}),e=Object(p.c)();return Object(d.useEffect)(function(){console.log("Use Effect Gets Called a replacement of componentdidmount and componentdidupdate"),t.length<1&&e(Object(m.fetchNProducts)())},[]),f.a.createElement(f.a.Fragment,null,1<=t.length?t.map(function(t){return f.a.createElement(o,{product:t,key:t._id})}):f.a.createElement("p",null,"No Products to display"))}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){var e=y(Object(d.useState)("Product Name"),2),n=e[0],r=e[1],e=y(Object(d.useState)(0),2),o=e[0],c=e[1],e=y(Object(d.useState)("Product Description"),2),a=e[0],u=e[1],e=y(Object(d.useState)("Product Rating"),2),i=e[0],l=e[1],s=Object(p.c)(),e=function(t){var e=t.target,t=e.classList;t.contains("pname")?r(e.value):t.contains("price")?c(parseInt(e.value)):(t.contains("desc")?u:l)(e.value)};return f.a.createElement(f.a.Fragment,null,f.a.createElement("section",{className:"componentClass"},f.a.createElement("div",{className:"form col-md-8"},f.a.createElement("div",{className:"col-md-12"},f.a.createElement("b",null,"Product Name"),f.a.createElement("input",{type:"text",className:"form-control col-md-6 pname",value:n,placeholder:"Product Name",onChange:e})),f.a.createElement("div",{className:"col-md-12"},f.a.createElement("b",null,"Price "),f.a.createElement("input",{type:"number",className:"form-control col-md-6 price",value:o,placeholder:"Product Price",onChange:e})),f.a.createElement("div",{className:"col-md-12"},f.a.createElement("b",null,"Description "),f.a.createElement("input",{type:"text",className:"form-control col-md-6 desc",value:a,placeholder:"Please Describe the product",onChange:e})),f.a.createElement("div",{className:"col-md-12"},f.a.createElement("b",null,"Ratings "),f.a.createElement("input",{type:"text",className:"form-control col-md-6",value:i,placeholder:"Ratings",onChange:e})),f.a.createElement("input",{type:"button",className:"btn btn-primary col-md-3",value:"Save Product",onClick:function(){alert("You've saved a product with these details: Name = ".concat(n,", Price = $").concat(o,", Description = ").concat(a,", Rating = ").concat(i));var t={name:n,price:o,desc:a,rating:i};s(Object(m.saveNProduct)(t))}})),f.a.createElement("br",null),f.a.createElement(h,null)))}}}]);