!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/previewer/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([8,2,0]),n()}({10:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0);n(13),n(18);var u=n(19);c.BasicMaterial.prototype.initCommonOptions=function(){},c.MetaSMaterials.BasicMaterial=function(e){var t=e.uniforms,n=(e.options,i(e,["uniforms","options"])),o=t.lightType.value,a=0===o?"NONE":1===o?"PHONE":2===o?"BLINN-PHONE":"LAMBERT";return console.log(a),new c.BasicMaterial(r({lightType:a,diffuse:(t.u_diffuseMap||t.u_diffuse||{}).value,ambient:(t.u_ambientMap||{}).value,specular:(t.u_specularMap||t.u_specular||{}).value,normalMap:(t.u_normalMap||{}).value,normalMapScale:(t.u_normalMapScale||{}).value,emission:(t.u_emissionMap||t.u_emission||{}).value,shininess:(t.u_shininess||{}).value,reflectivity:(t.u_reflectivity||{}).value,refractivity:(t.u_refractivity||{}).value,refractRatio:(t.u_refractRatio||{}).value},n))};var l=n(7);t.EModelEvents=l.EModelEvents;var s=n(20),f=[];t.main=function(e){return o(this,void 0,void 0,(function(){var t,n,r,i,d=this;return a(this,(function(p){switch(p.label){case 0:return t=new c.Engine,n=new c.Game("intro-game",{canvas:e,clearColor:new c.Color(.5,.5,.5,1),width:e.offsetWidth,height:e.offsetHeight,pixelRatio:window.devicePixelRatio}),t.addGame(n),n.onError=function(e,t){n.event.trigger(l.EModelEvents.Error,{error:e,details:t})},n.addWorld("main",c.GameModeActor,c.LevelScriptActor),[4,n.start()];case 1:return p.sent(),r=n.addActor("inspector",c.Inspector.Actor,{dom:document.getElementById("container"),updateRate:10}),n.world.enablePhysic(new c.CannonPhysicWorld(u)),n.resource.register("Audio",c.Audio.Loader),n.addActor("audioSystem",c.Audio.SystemActor),[4,s.initEvents(n)];case 2:return p.sent(),i=document.getElementById("loading"),n.event.add(l.EModelEvents.New,(function(e){return o(d,void 0,void 0,(function(){var t;return a(this,(function(r){switch(r.label){case 0:return i.style.display="block",[4,s.createNewModels(n,e,f)];case 1:return t=r.sent(),i.style.display="none",f.slice(0,0),n.event.trigger(l.EModelEvents.LoadStart),f.push.apply(f,t),n.event.trigger(l.EModelEvents.LoadEnd,{models:t}),console.log(t),[2]}}))}))})),n.event.add(l.EModelEvents.Loading,(function(e){i.innerText="Loading: "+e.source.name})),n.event.add(l.EModelEvents.LoadEnd,(function(e){var t=e.models,o=!1;t.forEach((function(e){(c.isPerspectiveCameraActor(e)||c.isOrthographicCameraActor(e))&&(s.bindCameraControl(e,t),o=!0),e.findComponentsByClass(c.StaticMeshComponent).forEach((function(e){e.material.exposure=1.5,e.material.gammaCorrection=!0}))})),o||s.createDefaultCamera(n,t),r.syncVerticesInfo()})),n.event.trigger(l.EModelEvents.New,[{name:"scene.gltf",url:"/previewer/scene.gltf"}]),location.search.indexOf("qrcode=true")<0&&s.checkUpdate(),[2,n]}}))}))}},20:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);n(21);var i=n(7);function c(e){var t={x0:0,x1:0,y0:0,y1:0,z0:0,z1:0};return e.forEach((function(e){var n=e.getBounds();n&&(t.x0=n.xMin<t.x0?n.xMin:t.x0,t.x1=n.xMax>t.x1?n.xMax:t.x1,t.y0=n.yMin<t.y0?n.yMin:t.y0,t.y1=n.yMax>t.y1?n.yMax:t.y1,t.z0=n.zMin<t.z0?n.zMin:t.z0,t.z1=n.zMax>t.z1?n.zMax:t.z1)})),t}t.initEvents=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){return e.event.register(i.EModelEvents.New),e.event.register(i.EModelEvents.LoadStart),e.event.register(i.EModelEvents.Loading),e.event.register(i.EModelEvents.LoadEnd),e.event.register(i.EModelEvents.Error),[2]}))}))},t.createNewModels=function(e,t,n){return r(this,void 0,void 0,(function(){var r,a,c,u,l,s,f;return o(this,(function(o){switch(o.label){case 0:r=e.world,a=[],s=0,o.label=1;case 1:return s<t.length?(c=t[s],u=c.name,l=c.url,e.event.trigger(i.EModelEvents.Loading,{source:{name:u,url:l}}),[4,e.resource.load({type:"GlTF",name:u,url:l})]):[3,4];case 2:o.sent(),console.log(e.resource.get(u)),o.label=3;case 3:return s+=1,[3,1];case 4:for(n.forEach((function(e){return r.removeActor(e)})),s=0;s<t.length;s+=1)f=e.resource.instantiate(t[s].name),a.push.apply(a,f.array);return[2,a]}}))}))},t.bindCameraControl=function(e,t){var n=c(t),r=new a.Vector3((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2);e.lookAt(r),e.addComponent("control",a.CameraControls.CameraOrbitControlComponent,{enableDamping:!0,dampingFactor:.2,zoomMax:1e3,zoomMin:.01,target:r}),e.getWorld().setMainCamera(e)},t.createDefaultCamera=function(e,t){return r(this,void 0,void 0,(function(){var n,r,i,u,l;return o(this,(function(o){return n=e.world,r=n.addActor("camera",a.PerspectiveCameraActor,{far:1e3,near:.01,fov:60,aspect:e.screenWidth/e.screenHeight,position:new a.Vector3(0,0,5)}),u=c(t),l=2*Math.sqrt(Math.pow((u.x1-u.x0)/2,2)+Math.pow((u.y1-u.y0)/2,2)+Math.pow((u.z1-u.z0)/2,2)),r.transform.setPosition((u.x0+u.x1)/2,(u.y0+u.y1)/2,u.z0+u.z1+l),i=new a.Vector3(r.transform.x,r.transform.y,(u.z0+u.z1)/2),r.lookAt(i),r.addComponent("control",a.CameraControls.CameraOrbitControlComponent,{enableDamping:!0,dampingFactor:.2,zoomMax:1e3,zoomMin:.01,target:i}),[2]}))}))},t.createDefaultLights=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){return(t=e.world).addActor("aLight",a.AmbientLightActor,{color:new a.Color(1,1,1),amount:.5}),t.addActor("dLight",a.DirectionalLightActor,{direction:new a.Vector3(0,-1,1),color:new a.Color(1,1,1),amount:2}),[2]}))}))},t.checkUpdate=function e(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return[4,a.HTTP.get("/heart-beat-and-update")];case 1:return(t=n.sent()).data&&t.data.update&&location.reload(),setTimeout((function(){return e()}),1e3),[2]}}))}))}},28:function(e,t,n){},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.New="New",e.LoadStart="LoadStart",e.Loading="Loading",e.LoadEnd="LoadEnd",e.Error="Error"}(t.EModelEvents||(t.EModelEvents={}))},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);n(28);var o=document.createElement("canvas");o.className="game",document.getElementById("container").appendChild(o),r.main(o)}});