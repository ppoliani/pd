var pd=function a(a){var b=Object.keys(a),c={};return b.forEach(function d(b){var d=Object.getOwnPropertyDescriptor(a,b);c[b]=d}),c};pd.merge=function b(){var a={};for(var b in arguments){var c=arguments[b];Object.keys(c).forEach(function(b){a[b]=c[b]})}return a},pd.object=function(a){return Object.create(Object.prototype,pd(a))},window.pd=pd