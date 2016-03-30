!function(){"use strict";angular.module("gardeningApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr","maintenence","ui.bootstrap","ngMap","ngFileUpload","infinite-scroll"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"}];this.getTec=e}angular.module("gardeningApp").service("webDevTec",e)}(),function(){"use strict";function e(){return{restrict:"AE",templateUrl:"app/components/topHeader/top.html",link:function(e,t,n){console.log("hi")}}}angular.module("gardeningApp").directive("top",e)}(),function(){"use strict";function e(e){function t(t,n,i,a){var o,s=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){s.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function n(e,t){function n(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return t.getContributors(10).then(function(e){return a.contributors=e,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return i}e.$inject=["malarkey"],angular.module("gardeningApp").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("gardeningApp").directive("acmeNavbar",e)}(),function(){"use strict";function e(){this.get=function(){return{select_garden:"Bitte Projekt auswählen",active_success:"Erfolgreich aktiviert",inactive_success:"Erfolgreich deaktiviert",enter_name:"Bitte Nachnamen eingeben",less_character:"Bitte mindestens 2 Zeichen eingeben",more_character:"Bitte maximal 20 Zeichen eingeben",enter_first:"Bitte Vornamen eingeben",enter_address:"Bitte Adresse eingeben",invalid_postal:"Ungültige Postleitzahl",enter_postal:"Bitte Postleitzahl eingeben",enter_phone:"Bitte Telefonnummer eingeben",invalid_email:"Ungültige E-Mail Adresse",enter_email:"Bitte E-Mail Adresse eingeben",add_success:"Erfolgreich hinzugefügt",update_success:"Erfolgreich aktualisiert",are_you_sure:"are you sure?"}}}angular.module("gardeningApp").service("lang",e)}(),/*!
 * ScrewDefaultButtons v2.0.6
 * http://screwdefaultbuttons.com/
 *
 * Licensed under the MIT license.
 * Copyright 2013 Matt Solano http://mattsolano.com
 *
 * Date: Mon February 25 2013
 */
function(e,t,n,i){var a={init:function(t){var n=e.extend({image:null,width:50,height:50,disabled:!1},t);return this.each(function(){var t=e(this),i=n.image,a=t.data("sdb-image");a&&(i=a),i||e.error("There is no image assigned for ScrewDefaultButtons"),t.wrap("<div >").css({display:"none"});var o=t.attr("class"),s=t.attr("onclick"),r=t.parent("div");r.addClass(o),r.attr("onclick",s),r.css({"background-image":i,width:n.width,height:n.height,cursor:"pointer"});var l=0,c=-n.height;if(t.is(":disabled")&&(l=-(2*n.height),c=-(3*n.height)),t.on("disableBtn",function(){t.attr("disabled","disabled"),l=-(2*n.height),c=-(3*n.height),t.trigger("resetBackground")}),t.on("enableBtn",function(){t.removeAttr("disabled"),l=0,c=-n.height,t.trigger("resetBackground")}),t.on("resetBackground",function(){t.is(":checked")?r.css({backgroundPosition:"0 "+c+"px"}):r.css({backgroundPosition:"0 "+l+"px"})}),t.trigger("resetBackground"),t.is(":checkbox"))r.on("click",function(){t.is(":disabled")||t.change()}),r.addClass("styledCheckbox"),t.on("change",function(){t.prop("checked")?(t.prop("checked",!1),r.css({backgroundPosition:"0 "+l+"px"})):(t.prop("checked",!0),r.css({backgroundPosition:"0 "+c+"px"}))});else if(t.is(":radio")){r.addClass("styledRadio");var d=t.attr("name");r.on("click",function(){!t.prop("checked")&&!t.is(":disabled")&&t.change()}),t.on("change",function(){if(t.prop("checked"))t.prop("checked",!1),r.css({backgroundPosition:"0 "+l+"px"});else{t.prop("checked",!0),r.css({backgroundPosition:"0 "+c+"px"});var n=e('input[name="'+d+'"]').not(t);n.trigger("radioSwitch")}}),t.on("radioSwitch",function(){r.css({backgroundPosition:"0 "+l+"px"})});var m=e(this).attr("id"),u=e('label[for="'+m+'"]');u.on("click",function(){r.trigger("click")})}if(!e.support.leadingWhitespace){var m=e(this).attr("id"),u=e('label[for="'+m+'"]');u.on("click",function(){r.trigger("click")})}})},check:function(){return this.each(function(){var t=e(this);a.isChecked(t)||t.change()})},uncheck:function(){return this.each(function(){var t=e(this);a.isChecked(t)&&t.change()})},toggle:function(){return this.each(function(){var t=e(this);t.change()})},disable:function(){return this.each(function(){var t=e(this);t.trigger("disableBtn")})},enable:function(){return this.each(function(){var t=e(this);t.trigger("enableBtn")})},isChecked:function(e){return e.prop("checked")?!0:!1}};return e.fn.screwDefaultButtons=function(t,n){return a[t]?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.screwDefaultButtons"):a.init.apply(this,arguments)},this}(jQuery),function(){function e(e,t,n){var i;this.maintenence=function(n,i){return e.get(t+n+"/projects?page="+i)},this.getGardenById=function(n){return e.get(t+"project/"+n)},this.setStorage=function(e){i=e},this.getStorage=function(){return i},this.metaData=function(){return e.get(t+"project/meta-data")},this.getDoneList=function(n){return e.get(t+n+"/projects/done")},this.uploader=function(e){return n.upload({url:t+"file/upload",data:{project_file:e}})}}e.$inject=["$http","appUrl","Upload"],angular.module("gardeningApp").service("GardenService",e)}(),function(){"use strict";function e(e,t){function n(n){function a(e){return e.data}function o(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(i+"/contributors?per_page="+n).then(a)["catch"](o)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:i,getContributors:n};return a}e.$inject=["$log","$http"],angular.module("gardeningApp").factory("githubContributor",e)}(),function(){"use strict";function e(e){e.state("reminder",{url:"/reminder",controller:"reminderCtrl",controllerAs:"remind",templateUrl:"app/reminder/reminder.html"})}e.$inject=["$stateProvider"],angular.module("gardeningApp").config(e)}(),function(){"use strict";function e(){}angular.module("gardeningApp").controller("reminderCtrl",e)}(),function(){"use strict";function e(e,t,n,i){function a(){r(),e(function(){l.classAnimation="rubberBand"},4e3)}function o(e){i.go(e)}function s(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1458543673656,l.showToastr=s,l.trigger=o.bind(l),a()}e.$inject=["$timeout","webDevTec","toastr","$state"],angular.module("gardeningApp").controller("MainController",e)}(),function(){"use strict";function e(e){}e.$inject=["GardenService"],angular.module("gardeningApp").controller("taskCtrl",e)}(),function(){"use strict";function e(e,t,n,i,a,o){return{restrict:"AE",scope:{radioBeautify:"=",data:"="},link:function(a,s,r,l){console.log(a),e(function(){s.screwDefaultButtons({image:'url("assets/images/radio-2.png")',width:32,height:33})},0);var c=function(e,t){a.data.filter(function(n){n.id==e&&(n.status=t)})};s.on("change",function(e){var a=null,s=JSON.parse(e.target.value);console.log(s.status),a=0==s.status?n+"project/"+s.id+"/set-status/1":n+"project/"+s.id+"/set-status/0",console.log(a),t.post(a).then(function(e){if(console.log(e),200==e.status){var t=null;0==s.status?(c(s.id,1),t=o.get().active_success):(c(s.id,0),t=o.get().inactive_success),i.show({template:'<md-toast class="md-toast toastClass">'+t+"</md-toast>",hideDelay:6e3,position:"top right"})}})})}}}e.$inject=["$timeout","$http","appUrl","$mdToast","$mdDialog","lang"],angular.module("gardeningApp").directive("radioBeautify",e)}(),function(){"use strict";function e(e,t){e.state("gartenunterhalt",{url:"/gartenunterhalt",controller:"maintenenceCtrl",controllerAs:"vm",templateUrl:"app/gardenMaintenence/gardenMaintenence.html"}).state("gartenumaenderung",{url:"/gartenumaenderung",controller:"maintenenceCtrl",controllerAs:"vm",templateUrl:"app/gardenMaintenence/gardenMaintenence.html"})}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gardeningApp").config(e)}(),function(){"use strict";function e(e,t,n,i,a){function o(){l.Infiniteloading&&(l.Infiniteloading=!1,e.maintenence(l.state,d).then(function(e){c=e.data.data.last_page,d++,l.count==c?l.Infiniteloading=!1:(l.lists=l.lists.concat(e.data.data.data),l.Infiniteloading=!0),l.loading=!1}))}function s(e){l.selection||(l.selection=e),i.url(u+"/"+e)}function r(){return l.selection?(l.selected=l.lists.filter(function(e){return e.id==l.selection}),void(l.selected.length>0&&e.setStorage(l.selected))):void t.info(a.get().select_garden)}var l=this,c=100;l.lists=[],l.Infiniteloading=!0;var d=0,m=i.$$absUrl,u=m.substring(m.lastIndexOf("/"),m.length);l.selection=null,l.disableScroll=!1,l.loading=!0,l.getList=o.bind(l),l.addGarden=function(){"/gartenumaenderung"==u?n.go("addGartenumaenderung"):n.go("addGartenunterhalt")},l.goDone=function(){"/gartenumaenderung"==u?n.go("doneGartenumaenderung"):n.go("doneGartenunterhalt")},l.state=n.current.name,l.selectionFilter=r.bind(l),l.editor=s.bind(l),l.getList()}e.$inject=["GardenService","toastr","$state","$location","lang"],angular.module("maintenence",[]).controller("maintenenceCtrl",e)}(),function(){"use strict";function e(e){e.state("editGartenumaenderung",{url:"/gartenumaenderung/:id",controller:"editCtrl",controllerAs:"edit",templateUrl:"app/edit/edit.html",resolve:{appData:["GardenService","$stateParams","toastr","$q","$location",function(e,t,n,i,a){var o=i.defer(),s={type:"gartenumaenderung"};return e.getGardenById(t.id).then(function(e){s.data=e.data.data,o.resolve(s)},function(e){n.info("Not Found"),a.url("/")}),o.promise}]}}).state("editGartenunterhalt",{url:"/gartenunterhalt/:id",controller:"editCtrl",controllerAs:"edit",templateUrl:"app/edit/edit.html",resolve:{appData:["GardenService","$stateParams","toastr","$q","$location",function(e,t,n,i,a){console.log("hi");var o=i.defer(),s={type:"gartenunterhalt"};return e.getGardenById(t.id).then(function(e){s.data=e.data.data,o.resolve(s)},function(e){n.info("Not Found"),a.url("/")}),o.promise}]}}).state("addGartenumaenderung",{url:"/add-gartenumaenderung",controller:"editCtrl",controllerAs:"edit",templateUrl:"app/edit/edit.html",resolve:{appData:function(){return{type:"gartenumaenderung"}}}}).state("addGartenunterhalt",{url:"/add-gartenunterhalt",controller:"editCtrl",controllerAs:"edit",templateUrl:"app/edit/edit.html",resolve:{appData:function(){return{type:"gartenunterhalt"}}}})}e.$inject=["$stateProvider"],angular.module("gardeningApp").config(e)}(),function(){"use strict";function e(e,t,n,i,a,o,s,r,l){function c(){e.metaData().then(function(e){200==e.status&&(m.type=e.data.data.repeat,m.users=e.data.data.users)})}function d(t){t&&(m.uploadStatus=!0,e.uploader(t).then(function(e){m.uploadStatus=!1,m.profile.resources.push(e.data.data.name),console.log(m.profile.resources)},function(e){m.uploadStatus=!1}))}var m=this;m.profile=i.data,m.lang=r.get(),"gartenumaenderung"==i.type?m.header="Gartenumänderung":m.header="Gartenunterhalt",m.profile&&m.profile.type&&delete m.profile.type,m.profile&&m.profile.execution_time&&(m.profile.execution_time=new Date(m.profile.execution_time)),m.metData=c.bind(m),m.opened=!1,m.uploadStatus=!1,m.upload=d.bind(m),m.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],m.format=m.formats[0],m.submit=function(e,t){if(e){var a=null;a=m.profile.id?s+"project/"+m.profile.id:s+i.type+"/project",o.post(a,m.profile).then(function(e){200==e.status&&(m.profile.id?n.info(r.get().update_success):($("#postForm")[0].reset(),t.$setPristine(!0),n.info(r.get().add_success)))})}else $(document).scrollTop()},m.metData(),m.cancel=function(){l.cancel()},m.imageDelete=function(e,t){l.show({controller:"DialogController",template:'<md-dialog><md-toolbar><div class="md-toolbar-tools"><h2>Bist du sicher?</h2> <span flex></span></div></md-toolbar><md-dialog-content></md-dialog-content><md-dialog-actions layout="row"><md-button ng-click="close()">Cancel</md-button ><md-button ng-click="ok()">Ok</md-button><md-dialog-actions></md-dialog>',parent:angular.element(document.body),clickOutsideToClose:!0,fullscreen:!0}).then(function(){console.log(e),m.profile.resources.splice(e,1),m.profile.thumbs.forEach(function(e,n){e.name==t&&m.profile.thumbs.splice(n,1)})})}}e.$inject=["GardenService","$state","toastr","appData","moment","$http","appUrl","lang","$mdDialog"],angular.module("gardeningApp").controller("editCtrl",e).controller("DialogController",["$scope","$mdDialog",function(e,t){e.close=function(){t.cancel()},e.ok=function(){t.hide()}}])}(),function(){"use strict";function e(e){e.state("doneGartenumaenderung",{url:"/done-gartenumaenderung",controller:"doneCtrl",controllerAs:"done",templateUrl:"app/done/done.html",resolve:{appData:["$q",function(e){var t=e.defer(),n={name:"gartenumaenderung"};return t.resolve(n),t.promise}]}}).state("doneGartenunterhalt",{url:"/done-gartenunterhalt",controller:"doneCtrl",controllerAs:"done",templateUrl:"app/done/done.html",resolve:{appData:["$q",function(e){var t=e.defer(),n={name:"gartenunterhalt"};return t.resolve(n),t.promise}]}})}e.$inject=["$stateProvider"],angular.module("gardeningApp").config(e)}(),function(){"use strict";function e(e,t){function n(){t.getDoneList(e.name).then(function(e){200==e.status&&(a.lists=e.data.data,a.oldValue=JSON.parse(JSON.stringify(a.lists)))})}function i(e){}var a=this;a.lists=[],a.getList=n.bind(a),a.search=i.bind(a),a.getList()}e.$inject=["appData","GardenService"],angular.module("gardeningApp").controller("doneCtrl",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("gardeningApp").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gardeningApp").config(e)}(),function(){"use strict";angular.module("gardeningApp").constant("malarkey",malarkey).constant("moment",moment).constant("appUrl","http://slctn.us/garden/public/api/")}(),function(){"use strict";function e(e,t,n){e.debugEnabled(!0),t.allowHtml=!0,n.html5Mode(!0),t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig","$locationProvider"],angular.module("gardeningApp").config(e)}(),angular.module("gardeningApp").run(["$templateCache",function(e){e.put("app/done/done.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a href="index.html"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a href="/"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title"><strong>Erledigte Arbeiten</strong></li></ul></div></div></div></section><section class="search"><div class="container"><div class="row"><form action="" class="form-inline form-search col-md-offset-1 col-md-10 col-sm-12 col-xs-12"><div class="form-group"><input ng-model="searchTerm" type="text" class="form-control" id="" placeholder="Suche" ng-change="done.search(searchTerm)"> <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div></form></div></div></section><section class="form white-bg"><div class="container"><div class="row"><form class="form-gardenmaintenance"><div ng-repeat="list in done.lists"><div class="post-title col-md-12"><h3>{{list.year}}</h3></div><div class="form-group" ng-repeat="l in list.projects"><div class="post-icons col-md-1 col-sm-2 col-xs-2"><input type="checkbox" ng-checked="l.status==1" radio-beautify="l" data="list.projects" name="maintenance" id="maintenance" value="{{l}}"></div><div class="col-md-10 col-sm-10 col-xs-10"><textarea name="maintenancedetails" id="maintenancedetails" class="form-control">{{l.firstname + \' \' + l.lastname + \',\' + l.address}}</textarea></div></div><hr class="col-md-offset-1 col-md-10"></div></form></div></div></section>'),e.put("app/edit/edit.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a onclick="window.history.go(-2); return false;"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a href="/"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title"><strong>{{edit.header}}</strong></li><li class="col-md-4"><a href="erledigte.html">Erledigte</a></li></ul></div></div></div></section><section class="form"><div class="container"><div class="row"><form class="form-newproject" name="postForm" id="postForm" novalidate="" ng-submit="edit.submit(postForm.$valid, postForm)"><div class="form-group"><div class="col-md-4"><label for="">Name</label> <input type="text" name="lastName" class="form-control" ng-model="edit.profile.lastname" placeholder="Name" required="" ng-minlength="3" ng-maxlength="20"> <span class="text-danger" ng-if="postForm.lastName.$invalid && postForm.$submitted"><p ng-if="postForm.lastName.$error.required">{{edit.lang.enter_name}}</p><p ng-if="postForm.lastName.$error.minlength">{{edit.lang.less_character}}</p><p ng-if="postForm.lastName.$error.minlength">{{edit.lang.more_character}}</p></span></div><div class="col-md-4"><label for="">Vorname</label> <input type="text" name="firstName" class="form-control" id="" ng-model="edit.profile.firstname" placeholder="Vorname" required="" ng-minlength="3" ng-maxlength="20"> <span class="text-danger" ng-if="postForm.firstName.$invalid && postForm.$submitted"><p ng-if="postForm.firstName.$error.required">{{edit.lang.enter_first}}</p><p ng-if="postForm.firstName.$error.minlength">{{edit.lang.less_character}}</p><p ng-if="postForm.firstName.$error.minlength">{{edit.lang.more_character}}</p></span></div><div class="col-md-4"><label for="">Adresse</label> <input type="text" class="form-control" name="address" required="" id="" ng-model="edit.profile.address" placeholder="Adresse"> <span class="text-danger" ng-if="postForm.address.$invalid && postForm.$submitted"><p ng-if="postForm.address.$error.required">{{edit.lang.enter_address}}</p></span></div></div><div class="form-group"><div class="col-md-4"><label for="">Postleitzahl</label> <input type="text" ng-model="edit.profile.postal_code" required="" name="postal_code" ng-pattern="/^\\d+$/" class="form-control" id="" placeholder="Postleitzahl"> <span class="text-danger" ng-if="postForm.postal_code.$invalid && postForm.$submitted"><p ng-if="postForm.postal_code.$error.pattern">{{edit.lang.invalid_postal}}</p><p ng-if="postForm.postal_code.$error.required">{{edit.lang.enter_postal}}</p></span></div><div class="col-md-4"><label for="">Ort</label> <input type="text" name="place" class="form-control" ng-model="edit.profile.place" id="" placeholder="Ort" ng-maxlength="20"> <span class="text-danger" ng-if="postForm.place.$invalid && postForm.$submitted"><p ng-if="postForm.place.$error.maxlength">{{edit.lang.more_character}}</p></span></div><div class="col-md-4"><label for="">Telefon <img src="assets/images/icon-phone.png"></label> <input type="text" name="telephone" class="form-control" required="" id="" ng-model="edit.profile.phone" placeholder="Telefon"> <span class="text-danger" ng-if="postForm.telephone.$invalid && postForm.$submitted"><p ng-if="postForm.telephone.$error.required">{{edit.lang.enter_phone}}</p></span></div></div><div class="form-group"><div class="col-md-4"><label for="">Email</label> <input type="text" name="email" ng-pattern="/^[a-zA-Z][-.\\w]+\\@[-\\w]+(?:\\.[a-z]+)?\\.[a-z]{2,}/" required="" class="form-control" id="" ng-model="edit.profile.mail" placeholder="Email"> <span class="text-danger" ng-if="postForm.email.$invalid && postForm.$submitted"><p ng-if="postForm.email.$error.pattern">{{edit.lang.invalid_email}}</p><p ng-if="postForm.email.$error.required">{{edit.lang.enter_email}}</p></span></div><div class="col-md-4"><label for="">Ausführungs-zeitpunkt</label><md-datepicker ng-model="edit.profile.execution_time" md-placeholder="Enter date"></md-datepicker></div><div class="col-md-4"><label for="">Arbeitsaufwand</label><select class="form-control" name="" ng-options="user.name as user.name for user in edit.users" ng-model="edit.profile.worker"><option value="">Select</option></select></div></div><div class="form-group"><div class="col-md-4"><label for="">Zuständigkeit</label> <input type="text" class="form-control" id="" placeholder="Zuständigkeit"></div><div class="col-md-4"><label for="">Terminserie</label><select class="form-control" name="" ng-options="rep.name as rep.name for rep in edit.type" ng-model="edit.profile.repeat"><option value="">Select</option></select></div></div><div class="form-group"><div class="col-md-6"><label for="">&nbsp;</label> <textarea name="" id="" ng-model="edit.profile.notice" cols="30" rows="10" class="form-control" placeholder="Weitere Informationen"></textarea></div><div class="col-md-6"><label for="">&nbsp;</label><div map-lazy-load="https://maps.google.com/maps/api/js"><ng-map center="{{edit.profile.address}}" zoom="13"></ng-map></div></div></div><div class="form-group"><div class="col-md-2" ng-repeat="l in edit.profile.thumbs track by $index"><div class="" style="position:relative;"><img ng-src="{{l.thumb}}" height="100px" width="100px"> <span style="postion:absolute;top:0px;right:0px;z-index:2" ng-click="edit.imageDelete($index, l.name)">X</span></div></div></div><div class="form-group"><div class="col-md-4"><div class="" style="position:relative;display:inline-block"><img ngf-thumbnail="vm.file || \'http://www.instagramprivate.gamersden.org/img/icon-user-default.png\'"><div class="close" style="position:absolute;right:0px;top:0px;z-index:10;cursor:pointer" ng-click="$file=null;vm.file=\'http://www.instagramprivate.gamersden.org/img/icon-user-default.png\'">X</div></div></div><div class="col-md-8"><div class="post-upload" ngf-select="edit.upload($file)" ng-model="vm.file"><span ngf-drop="edit.upload($file)">Drag and Drop Files</span> <i class="fa fa-upload"></i></div><md-progress-linear ng-show="edit.uploadStatus"></md-progress-linear></div></div><div class="col-md-12 text-center" style="margin-bottom:20px"></div><div class="col-md-12 btn-holder"><button type="submit" class="btn btn-green">Submit</button></div></form></div></div></section><style>\n\n	.md-datepicker-calendar-pane.md-pane-open{\n		background: #fff !important;\n	}\n</style>'),e.put("app/gardenMaintenence/gardenChange.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a href="index.html"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a href="index.html"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title"><strong>Gartenunterhalt</strong></li><li class="col-md-4"><a href="erledigte.html">Erledigte</a></li></ul></div></div></div></section><section class="form"><div class="container"><div class="row"><form class="form-gardenmaintenance"><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="maintenancedetails" class="form-control">Patrick Epler, Dortmund 03/14/2016, Zuständigkeit.</textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="" class="form-control"></textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="" class="form-control"></textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="" class="form-control"></textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="" class="form-control"></textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="form-group"><div class="post-icons col-md-1"><input type="radio" name="maintenance" id="" value=""></div><div class="col-md-10"><textarea name="maintenancedetails" id="" class="form-control"></textarea></div><div class="post-icons col-md-1"><img src="assets/images/icon-edit.png" alt="" class="img-responsive"></div></div><div class="btn-holder form-group"><a href="new-project.html"><i class="fa fa-plus-circle fa-3x"></i></a></div></form></div></div></section><script src="assets/js/jquery.screwdefaultbuttonsV2.min.js"></script><script>\n		$(document).ready(function(){\n			$(\'input:radio\').screwDefaultButtons({\n				image: \'url("assets/images/radio-2.png")\',\n				width: 32,\n				height: 33\n			});\n\n		});\n	</script>'),e.put("app/gardenMaintenence/gardenMaintenence.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a href="/"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a onclick="window.history.go(-1); return false;"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title" ng-if="vm.state==\'gartenunterhalt\'"><strong>Gartenunterhalt</strong></li><li class="col-md-4 title" ng-if="vm.state==\'gartenumaenderung\'"><strong>Gartenumänderung</strong></li><li class="col-md-4"><a ng-click="vm.goDone()">Erledigte</a></li></ul></div></div></div></section><section class="form"><div class="container"><div class="row" ng-if="vm.loading"><div layout="row" layout-sm="column" layout-align="space-around"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div></div><div class="row"><form class="form-gardenmaintenance"><div class="form-group" ng-repeat="list in vm.lists track by $index" infinite-scroll="vm.getList()" infinite-scroll-disabled="vm.disableScroll" infinite-scroll-distance="3"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="checkbox" ng-model="selection" ng-checked="list.status==1" radio-beautify="list" data="vm.lists" id="maintenance" value="{{list}}"></div><div class="col-md-10 col-sm-10 col-xs-8"><textarea name="maintenancedetails" id="maintenancedetails" class="form-control" disabled="disabled">{{list.firstname + \' \' + list.lastname + \',\' + list.address}}</textarea></div><div class="post-icons col-md-1 col-sm-1 col-xs-2"><img src="assets/images/icon-edit.png" alt="" class="img-responsive" ng-click="vm.editor(list.id)"></div></div><div class="btn-holder form-group" ng-if="!vm.loading"><a ng-click="vm.addGarden()"><i class="fa fa-plus-circle fa-3x"></i></a></div></form></div><div class="row" ng-if="vm.Infiniteloading"><div layout="row" layout-sm="column" layout-align="space-around"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div></div></div></section><style>\n  .toastClass{\n    background-color: green;\n  }\n</style>'),e.put("app/main/main.html",'<section class="splashscreen"><div class="container"><div class="row"><div class="logo col-md-12"><img src="assets/images/logo-muller.png" alt="" class="img-responsive"></div></div><div class="row"><div class="home-button col-md-12"><ul class="row"><li class="col-md-4"><a class="btn btn-home" ng-click="main.trigger(\'gartenunterhalt\')">Gartenunterhalt</a></li><li class="col-md-4"><a class="btn btn-home" ng-click="main.trigger(\'gartenumaenderung\')">Gartenumänderung</a></li><li class="col-md-4"><a class="btn btn-home" href="/reminder">Erinnerung</a></li></ul></div></div></div></section><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script><script>\n		$(document).ready(function() {\n			function setHeight() {\n				windowHeight = $(window).innerHeight();\n				$(\'.splashscreen\').css(\'min-height\', windowHeight);\n			};\n			setHeight();\n\n			$(window).resize(function() {\n				setHeight();\n			});\n		});\n	</script>'),e.put("app/reminder/reminder.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a href="index.html"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a href="index.html"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title"><strong>Erinnerung</strong></li><li class="col-md-4"><a href="erledigte-erinnerungen.html">Erledigte</a></li></ul></div></div></div></section><section class="form"><div class="container"><div class="row"><form class="form-erinnerung"><div class="form-group"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10 col-sm-11 col-xs-10"><input type="text" text="" placeholder="Erinnerung" class="form-control"></div></div><div class="form-group"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10 col-sm-11 col-xs-10"><input type="text" text="" placeholder="Erinnerung" class="form-control"></div></div><div class="form-group"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10 col-sm-11 col-xs-10"><input type="text" text="" placeholder="Erinnerung" class="form-control"></div></div><div class="form-group"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10 col-sm-11 col-xs-10"><input type="text" text="" placeholder="Erinnerung" class="form-control"></div></div><div class="form-group"><div class="post-icons col-md-1 col-sm-1 col-xs-2"><input type="radio" name="maintenance" id="maintenance" value=""></div><div class="col-md-10 col-sm-11 col-xs-10"><input type="text" text="" placeholder="Erinnerung" class="form-control"></div></div><div class="btn-holder form-group"><button type="button" class="btn btn-modal" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus-circle fa-3x"></i></button></div></form></div></div></section><div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">Neue Erinnerungen</h4></div><div class="modal-body"><form action=""><input type="text" text="" class="form-control" placeholder="Titel"></form></div><div class="modal-footer"><button type="button" class="btn btn-cancel" data-dismiss="modal">Abbrechen</button> <button type="button" class="btn btn-save">Speichern</button></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>'),e.put("app/components/topHeader/top.html",'<section class="mainheader"><div class="container"><div class="row"><div class="logo inside col-md-12"><a onclick="window.history.go(-2); return false;"><img src="assets/images/logo-muller-small.png" alt="" class="img-responsive"></a></div></div></div></section><section class="nav"><div class="container"><div class="row"><div class="menu col-md-12"><ul><li class="col-md-4"><a href="/"><i class="fa fa-angle-left"></i> Zurück</a></li><li class="col-md-4 title"><strong>Gartenunterhalt</strong></li><li class="col-md-4"><a href="erledigte.html">Erledigte</a></li></ul></div></div></div></section>')}]);
//# sourceMappingURL=../maps/scripts/app-f10d4f77ac.js.map
