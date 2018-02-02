webpackJsonp([9],{116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),s=n(59),c=n(120),a=n(158),r=n(171),o=n.n(r),u=n(296);n.n(u);n(117),i.a.config.productionTip=!1;var v={};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7004")||(v={httpConfig:{server:"https://localhost",port:9005},mqttConfig:{server:"ws://localhost:9016"}}),i.a.use(o.a,v),i.a.use(s.G),s.a.set("#333333"),n(294),s.G.start(function(){new i.a({el:"#q-app",router:c.a,store:a.a,render:function(e){return e(n(298))}})})},117:function(e,t){},120:function(e,t,n){"use strict";function i(e){return function(){return n(122)("./"+e+".vue")}}var s=n(8),c=n(121);s.a.use(c.a),t.a=new c.a({routes:[{path:"/",component:i("Index")},{path:"/login",component:i("Login")},{path:"/login/:token",component:i("Login")},{path:"*",component:i("Error404")}]})},122:function(e,t,n){function i(e){var t=s[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./Device.vue":[305,7],"./DeviceList.vue":[308,3],"./Error404.vue":[311,6],"./Index.vue":[312,0],"./Login.vue":[310,4],"./Map.vue":[309,1],"./PostMessageModal.vue":[307,5],"./Queue.vue":[306,2]};i.keys=function(){return Object.keys(s)},i.id=122,e.exports=i},158:function(e,t,n){"use strict";var i=n(115),s=n(8),c=n(159),a=n(160),r=n(161),o=n(162);s.a.use(i.b);var u={token:"",devices:[],activeDevicesID:[],hasDevicesInit:!1,offline:!1};t.a=new i.b.Store({state:u,actions:c.a,mutations:a.a,getters:r.a,modules:o.a})},159:function(e,t,n){"use strict";function i(e){var t=(e.state,e.commit);o.a.connector.http.get("/statics/icons/favicon-16x16.png?_="+(new Date).getTime()).then(function(e){200===e.status&&t("setOfflineFlag",!1)}).catch(function(e){console.log(e)})}var s=n(38),c=n.n(s),a=n(39),r=n.n(a),o=n(8),u=function(){var e=r()(c.a.mark(function e(t){var n,i=this,s=t.state,a=t.commit;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a("reqStart"),e.prev=1,!s.token){e.next=7;break}return e.next=5,o.a.connector.poolDevices(function(e){a("setDevices",e)},function(e,t){a("updateDevices",{type:e,device:t})});case 5:return n=e.sent,e.abrupt("return",r()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.connector.poolDevicesStop(n);case 2:case"end":return e.stop()}},e,i)})));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a("reqFailed",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=r()(c.a.mark(function e(t,n){var i,s,a=(t.state,t.commit),r=n.data,u=n.id;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a("reqStart"),e.prev=1,e.next=4,o.a.connector.postDevicesMessages(u,r);case 4:i=e.sent,s=i.data,a("reqSuccessful",{type:"postMessage",payload:s}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a("reqFailed",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}();t.a={poolDevices:u,postMessage:v,checkConnection:i}},160:function(e,t,n){"use strict";function i(e){}function s(e,t){var n=t.type,i=t.payload,s=i.result;switch(n){case"postMessage":k.F.create.positive({html:"Post message to devices with IDs "+s+" success",icon:"alarm_add",timeout:2500,bgColor:"white"});break;default:g()(e[n])!==g()(s)&&w.a.set(e,n,s)}}function c(e,t){if(g()(e.devices)!==g()(t.data.result)&&(w.a.set(e,"devices",t.data.result),!e.hasDevicesInit)){l(e);var n=k.e.get.item("TrackIt Active Devices");n&&n.length&&n.forEach(function(n){t.data.result.filter(function(e){return e.id===n}).length&&f(e,n)})}}function a(e,t){switch(t.type){case"created":e.devices.push(t.device);break;case"updated":e.devices.some(function(n,i){return n.id===t.device.id&&(e.devices[i]=D()(e.devices[i],t.device),!0)});break;case"deleted":e.devices.some(function(n,i){return n.id===t.device.id&&(e.devices.splice(i,1),!0)})}}function r(e,t){switch(t.response.status){case 0:o(e,!0),d(e),w.a.set(e,"token","");break;case 401:v(e)}}function o(e,t){w.a.set(e,"offline",t)}function u(e,t){var n=t.replace("FlespiToken ","");t&&n.match(/^[a-z0-9]+$/i)?(w.a.connector.token="FlespiToken "+n,k.e.set("X-Flespi-Token",n)):(n="",w.a.connector.token="",v(e)),w.a.set(e,"token",n)}function v(e){var t=k.b.get("X-Flespi-Token"),n=k.e.get.item("X-Flespi-Token");t&&n&&t===n&&k.b.remove("X-Flespi-Token"),k.e.remove("X-Flespi-Token"),w.a.connector.token="",w.a.set(e,"token","")}function f(e,t){e.devices.filter(function(e){return e.id===t})[0].messages_ttl&&(e.activeDevicesID.push(t),k.e.set("TrackIt Active Devices",e.activeDevicesID))}function p(e,t){e.activeDevicesID=e.activeDevicesID.filter(function(e){return e!==t}),k.e.set("TrackIt Active Devices",e.activeDevicesID)}function l(e){e.hasDevicesInit=!0}function d(e){e.hasDevicesInit=!1,w.a.set(e,"devices",[]),w.a.set(e,"activeDevicesID",[])}var h=n(114),D=n.n(h),m=n(61),g=n.n(m),k=n(59),w=n(8);t.a={reqStart:i,reqSuccessful:s,reqFailed:r,setToken:u,clearToken:v,setActiveDevice:f,unsetActiveDevice:p,setDevicesInit:l,unsetDevicesInit:d,setOfflineFlag:o,updateDevices:a,setDevices:c}},161:function(e,t,n){"use strict";t.a={}},162:function(e,t,n){"use strict";var i=n(163);t.a={messages:i.a}},163:function(e,t,n){"use strict";var i=n(164),s=n(165),c={entities:{},timestamp:0,activeDevicesID:[]};t.a={namespaced:!0,state:c,actions:i.a,mutations:s.a}},164:function(e,t,n){"use strict";function i(e,t){var n=this,i=e.state,s=e.commit,a=e.rootState;s("reqStart");var o={count:10,reverse:!0,filter:"position.latitude,position.longitude",to:i.timestamp||0};t.forEach(function(e){i.entities[e]||v.a.set(i.entities,e,[])});try{a.token&&t.forEach(function(){var e=u()(c.a.mark(function e(t){var i,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.connector.getDevicesMessages(t,{data:r()(o)});case 2:i=e.sent,a=i.data,s("reqSuccessful",a);case 5:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())}catch(e){s("reqFailed",e,{root:!0})}}var s=n(38),c=n.n(s),a=n(61),r=n.n(a),o=n(39),u=n.n(o),v=n(8);t.a={getHistoryByDeviceID:i}},165:function(e,t,n){"use strict";function i(e){}function s(e,t){var n=t.result;e.activeDevicesID.forEach(function(t){var i=n.filter(function(e){return e.device_id===t});if(!i.length)return e.entities[t]||d.a.set(e.entities,t,[]),!1;var s=e.entities[t]||[];d.a.set(e.entities,t,[].concat(l()(i),l()(s)).slice(0,10))}),d.a.set(e,"timestamp",parseInt(e.activeDevicesID.reduce(function(t,n){return e.entities[n].length&&e.entities[n][0].timestamp>t?e.entities[n][0].timestamp:t},0)))}function c(e){var t=this;e.activeDevicesID.length&&(e.activeDevicesID.forEach(function(){var e=f()(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.connector.unsubscribeMessagesDevices(n);case 2:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()),d.a.set(e,"entities",{}),d.a.set(e,"activeDevicesID",[]),d.a.set(e,"timestamp",0))}function a(e,t){d.a.connector.unsubscribeMessagesDevices(t),d.a.delete(e.entities,t)}function r(e,t){var n=this;t.filter(function(t){return!e.activeDevicesID.includes(t)}).forEach(function(){var t=f()(u.a.mark(function t(i){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.connector.subscribeMessagesDevices(i,function(t){s(e,{result:[JSON.parse(t)]})});case 2:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()),d.a.set(e,"activeDevicesID",t)}var o=n(38),u=n.n(o),v=n(39),f=n.n(v),p=n(166),l=n.n(p),d=n(8);t.a={reqStart:i,reqSuccessful:s,clear:c,clearByID:a,setActiveDevicesID:r}},262:function(e,t){},284:function(e,t){},285:function(e,t){},295:function(e,t){},297:function(e,t){},298:function(e,t,n){function i(e){n(299)}var s=n(113)(n(300),n(301),i,null,null);e.exports=s.exports},299:function(e,t){},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},301:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},staticRenderFns:[]}}},[116]);