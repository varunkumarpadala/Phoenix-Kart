(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Home | Phoenix-Kart</title>\n\n  </head>\n\n  <body>\n  \n    <app-header></app-header>\n\n    \n    <router-outlet></router-outlet>\n  \n    <app-footer></app-footer>\n  \n  </body>\n\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/body/body.component */ "./src/app/components/body/body.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_termsofuse_termsofuse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/termsofuse/termsofuse.component */ "./src/app/components/termsofuse/termsofuse.component.ts");
/* harmony import */ var _components_addpo_addpo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/addpo/addpo.component */ "./src/app/components/addpo/addpo.component.ts");
/* harmony import */ var _components_editpo_editpo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/editpo/editpo.component */ "./src/app/components/editpo/editpo.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/status/status.component */ "./src/app/components/status/status.component.ts");
/* harmony import */ var _components_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/open-orders/open-orders.component */ "./src/app/components/open-orders/open-orders.component.ts");
/* harmony import */ var _components_complete_orders_complete_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/complete-orders/complete-orders.component */ "./src/app/components/complete-orders/complete-orders.component.ts");
/* harmony import */ var _components_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/all-orders/all-orders.component */ "./src/app/components/all-orders/all-orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { User } from './user';

// import { Order } from './order';
// import { Product } from './product';




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _components_termsofuse_termsofuse_component__WEBPACK_IMPORTED_MODULE_11__["TermsofuseComponent"],
                _components_addpo_addpo_component__WEBPACK_IMPORTED_MODULE_12__["AddpoComponent"],
                _components_editpo_editpo_component__WEBPACK_IMPORTED_MODULE_13__["EditpoComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _components_status_status_component__WEBPACK_IMPORTED_MODULE_17__["StatusComponent"],
                _components_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_18__["OpenOrdersComponent"],
                _components_complete_orders_complete_orders_component__WEBPACK_IMPORTED_MODULE_19__["CompleteOrdersComponent"],
                _components_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_20__["AllOrdersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_route__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]
            ],
            providers: [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__["PhoenixService"], _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _components_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/open-orders/open-orders.component */ "./src/app/components/open-orders/open-orders.component.ts");
/* harmony import */ var _components_complete_orders_complete_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/complete-orders/complete-orders.component */ "./src/app/components/complete-orders/complete-orders.component.ts");
/* harmony import */ var _components_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-orders/all-orders.component */ "./src/app/components/all-orders/all-orders.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_editpo_editpo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editpo/editpo.component */ "./src/app/components/editpo/editpo.component.ts");
/* harmony import */ var _components_addpo_addpo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addpo/addpo.component */ "./src/app/components/addpo/addpo.component.ts");
/* harmony import */ var _components_termsofuse_termsofuse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/termsofuse/termsofuse.component */ "./src/app/components/termsofuse/termsofuse.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/status/status.component */ "./src/app/components/status/status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
    },
    {
        path: 'termsofuse',
        component: _components_termsofuse_termsofuse_component__WEBPACK_IMPORTED_MODULE_6__["TermsofuseComponent"]
    },
    {
        path: 'addpo',
        component: _components_addpo_addpo_component__WEBPACK_IMPORTED_MODULE_5__["AddpoComponent"]
    },
    {
        path: 'editpo',
        component: _components_editpo_editpo_component__WEBPACK_IMPORTED_MODULE_4__["EditpoComponent"]
    },
    {
        path: 'admin',
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                component: _components_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_2__["AllOrdersComponent"]
            },
            {
                path: 'completeOrders',
                component: _components_complete_orders_complete_orders_component__WEBPACK_IMPORTED_MODULE_1__["CompleteOrdersComponent"]
            },
            {
                path: 'openOrders',
                component: _components_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_0__["OpenOrdersComponent"]
            }
        ]
    },
    {
        path: 'status',
        component: _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/components/addpo/addpo.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/addpo/addpo.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  padding-top:20px;\r\n  padding-bottom:4.2rem;\r\n  text-align: center;\r\n  }\r\n\r\ninput,textarea{\r\n  width:700px;\r\n}\r\n\r\n/* .right{\r\n  text-align: right;\r\n}\r\n\r\n.left\r\n{\r\n  text-align: left;\r\n} */\r\n\r\n#Place{\r\n  font-size: 26px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\ntextarea{\r\n  resize:none;\r\n}\r\n\r\n.btn{\r\n  padding: 15px;\r\n}\r\n\r\n.jumbotron{\r\n  padding:10px;\r\n  width:75%;\r\n}"

/***/ }),

/***/ "./src/app/components/addpo/addpo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/addpo/addpo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <form #order='ngForm' (ngSubmit)='gotoConfirm(order);' ngNativeValidate>\n    <div class=\"container\" align='center'>\n      <div class=\"form-group\">\n        <b id='Place'>PURCHASE ORDER</b>\n      </div>\n      <div class='jumbotron jumbotron-default'>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <b>Purchase ID: </b>PID-000{{excess.Psid}}\n        </div>\n        <div class=\"form-group col-md-6\">\n          <b>Supplier ID: </b>SID-000{{excess.Psid}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <b>Supplier Name: </b>{{excess.Psname}}\n        </div>\n        <div class=\"form-group col-md-6\">\n          <b>Item Brand: </b>{{excess.Pbrand}}\n        </div>\n      </div>\n      <hr>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Contact Person:</label>\n        <input type=\"text\" class=\"form-control\" ngModel id=\"inputAddress\" name='contact' required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress2\">Mobile Number:</label>\n        <input type=\"number\" maxlength=10 ngModel class=\"form-control\" id=\"inputAddress2\" name='mobile' required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress3\">Address:</label>\n        <textarea cols=10 rows=3 class=\"form-control\" ngModel id=\"inputAddress3\" name='address' required></textarea>\n      </div>\n      <hr/>\n      <div class=\"form-group\">\n        <b>Expected Delivery Date:{{datevar}}</b>\n      </div>\n      <hr>\n      <div class=\"form-group\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6 right\">\n            <button type=\"submit\" class=\"btn btn-primary\">Proceed</button>\n          </div>\n          <div class=\"form-group col-md-6 left\">\n            <button class=\"btn btn-primary\" >Cancel</button>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </form>\n</body>\n"

/***/ }),

/***/ "./src/app/components/addpo/addpo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/addpo/addpo.component.ts ***!
  \*****************************************************/
/*! exports provided: AddpoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpoComponent", function() { return AddpoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddpoComponent = /** @class */ (function () {
    function AddpoComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    AddpoComponent.prototype.ngOnInit = function () {
        this.date = new Date(Date.now());
        this.datevar = (this.date.getDate() + 5) + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
        this.excess = this.phoenixservice.getter();
    };
    AddpoComponent.prototype.gotoConfirm = function (form) {
        form.value['exdate'] = (this.date.getDate() + 5) + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
        form.value['Odate'] = (this.date.getDate()) + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
        this.phoenixservice.setForm(form.value);
        this.router.navigate(['/editpo']);
    };
    AddpoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addpo',
            template: __webpack_require__(/*! ./addpo.component.html */ "./src/app/components/addpo/addpo.component.html"),
            styles: [__webpack_require__(/*! ./addpo.component.css */ "./src/app/components/addpo/addpo.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AddpoComponent);
    return AddpoComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='radio']\r\n{\r\n    height:20px;\r\n    width:20px;\r\n}\r\ninput[type='radio']:hover\r\n{\r\n    cursor: pointer;\r\n    -webkit-transform:scale(1.1);\r\n            transform:scale(1.1);\r\n}\r\n/* #radio1, #radio2, #radio3\r\n{\r\n    font-size: 30px;\r\n} */\r\nbody\r\n{\r\n    margin:20px;\r\n}\r\nh2{\r\n    \r\n    font-family: monospace;\r\n    font-size:30px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <br/>\n  <!-- <div class='container-fluid'> -->\n    <!-- <div class='row'>\n      <div class='col-sm-6 col-xs-12 col-md-4'>\n        <div class=\"dropdown\">\n          &nbsp;&nbsp;&nbsp;\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Search By:\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">PO Number</a>\n            <a class=\"dropdown-item\" href=\"#\">Supplier ID</a>\n          </div>\n        </div>\n      </div>-->\n      \n    <!-- </div>\n  </div> -->\n\n  <h2 align='center'>Orders List</h2>\n  <br/>\n\n  <div class='container-fluid'>\n    <div class=\"row\">\n  <!-- <div class='col-md-2'>\n        <input type='radio' (click)=\"checked='true'\" name='radio' id='radio1' ><a routerLink=\"/admin/openOrders\"><label for='radio1'>Open</label></a>\n    </div>\n    <div class='col-md-2'>\n      <a routerLink=\"/admin/completeOrders\"><input (click)=\"checked='true'\"  type='radio' name='radio' id='radio2'><label for='radio2'>Complete</label></a>\n    </div> -->\n    <!-- <div class='col-md-2'> -->\n    <!-- <a routerLink=\"/admin/allOrders\">  -->\n      \n      \n      <div class=\"btn-toolbar mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n          <button type=\"button\" routerLink=\"/admin/openOrders\" class=\"btn btn-secondary\">Open</button>\n          <button type=\"button\" routerLink=\"/admin/completeOrders\" class=\"btn btn-secondary\">Complete</button>\n          <button type=\"button\" routerLink=\"/admin/\" class=\"btn btn-secondary\">All</button>\n        </div>\n\n</div>\n</div>\n    </div>\n<!-- </div> -->\n<br/>\n<div class='container-fluid'>\n<router-outlet></router-outlet>\n</div>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <!-- <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <br/> -->\n</body>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.arrays = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.router.navigate(['/admin/allOrders']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/all-orders/all-orders.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/all-orders/all-orders.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all-orders/all-orders.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-orders/all-orders.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"table-responsive table--no-card lg-b-0\">\n            <table class=\"table table-border table-striped table-earning\" border=1px>\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">Edit_Status</th>\n                        <th class=\"text-center\">Status</th>\n                        <th class=\"text-center\">Order_ID</th>\n                        <th class=\"text-center\">Supplier_ID</th>\n                        <th class=\"text-center\">Supplier_Name</th>\n                        <th class=\"text-center\">Item_Name</th>\n                        <th class=\"text-center\">Contact_Person</th>\n                        <th class=\"text-center\">Mobile_Number</th>\n                        <th class=\"text-center\">Delivery_Address</th>\n                        <th class=\"text-center\">Price</th>\n                        <th class=\"text-center\">Order_Date</th>\n                        <th class=\"text-center\">Expected_Delivery_Date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let data of arrays'>\n                        <td class=\"text-center\"><a class='btn btn-primary' (click)='changeStatus(data);'>Change</a></td>\n                        <td class=\"text-center\">{{data.Pstatus}}</td>\n                        <td class='text-center'>{{data._id}}</td>\n                        <td class=\"text-center\">SID000{{data.Psid}}</td>\n                        <td class=\"text-center\">{{data.Psname}}</td>\n                        <td class=\"text-center\">{{data.Pbrand}}</td>\n                        <td class=\"text-center\">{{data.Person}}</td>\n                        <td class=\"text-center\">{{data.Mobile}}</td>\n                        <td class=\"text-center\">{{data.Daddress}}</td>\n                        <td class=\"text-center\">{{data.Pprice}}</td>\n                        <td class=\"text-center\">{{data.Odate}}</td>\n                        <td class=\"text-center\">{{data.Exdate}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/all-orders/all-orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/all-orders/all-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllOrdersComponent = /** @class */ (function () {
    function AllOrdersComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phoenixservice.getOrders().subscribe(function (data) {
            console.log(data);
            _this.arrays = data['msg'];
        });
    };
    AllOrdersComponent.prototype.changeStatus = function (data) {
        this.phoenixservice.setstatus(data);
        this.router.navigate(['/status']);
    };
    AllOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-orders',
            template: __webpack_require__(/*! ./all-orders.component.html */ "./src/app/components/all-orders/all-orders.component.html"),
            styles: [__webpack_require__(/*! ./all-orders.component.css */ "./src/app/components/all-orders/all-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/body/body.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/body/body.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin-top: 30px;\r\n}\r\n\r\n.dropdown,\r\n.dropdown-toggle {\r\n  letter-spacing: 2px;\r\n  text-align: right;\r\n  margin-right: 20px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 70px;\r\n  border-radius: 10px;\r\n  border-bottom-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n}\r\n\r\n#Previous .page-item {\r\n  font-size: 20px;\r\n  width: 180px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  border-bottom-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n}\r\n\r\n#Next .page-item {\r\n  font-size: 20px;\r\n  width: 180px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  border-bottom-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n}\r\n\r\n.card {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n  border-bottom-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\n.yellow {\r\n  color: orange;\r\n  /* background-color: yellow; */\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 75%;\r\n  color: darkslategrey;\r\n  border-color: black;\r\n  border-right-color: white;\r\n  border-top-left-radius: 15px;\r\n}\r\n\r\n#go {\r\n  margin-left: 0px;\r\n  padding: 10px;\r\n  border-radius: 0px;\r\n  border-color: black;\r\n  border-left-color: blue;\r\n  border-bottom-right-radius: 15px;\r\n}\r\n\r\nimg {\r\n  margin: 10%;\r\n  height: 30%;\r\n  width: 80%;\r\n  margin-top: 8%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n#cards {\r\n  margin-top: 30px;\r\n}\r\n\r\n.card-footer {\r\n    border-bottom-right-radius:20px;\r\n}\r\n\r\n*{\r\n  margin: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/body/body.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/body/body.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n    <div class='row'>\n      <div class='col-sm-6 col-xs-12 col-md-6'>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" id='go' type=\"button\">Go!</button>\n          </span>\n        </div>\n      </div>\n      <div class='col-sm-6 col-xs-12 col-md-6'>\n        <div class=\"dropdown\">\n          &nbsp;&nbsp;&nbsp;\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Sort By:\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">New &amp; Popular</a>\n            <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n            <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            <a class=\"dropdown-item\" href=\"#\">Avg. Customer Reviews</a>\n            <a class=\"dropdown-item\" href=\"#\">Newest Arrivals</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\" id='cards'>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4\" *ngFor='let data of arrays'>\n        <div class=\"card h-100\">\n          \n          <img class=\"card-img-top\" src=\"{{data.img}}\" alt=\"\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              {{data.Ptitle}}\n            </h5>\n            <h5>&#8377;{{data.Pprice}}</h5>\n            <span>Brand: {{data.Pbrand}}</span><br/>\n            <span>Hard Disk: {{data.Phdd}}GB</span><br/>\n            <span>OS: {{data.Pos}}</span><br/>\n            <span>RAM: {{data.Pram}}GB</span><br/>\n          </div>\n          <div class=\"card-footer\">\n              <span class='yellow'>Rating: {{data.Prating}}</span>\n              <!-- &#9733; &#9733; &#9733; &#9733; &#9734; -->\n            <button class='btn btn-primary float-right' (click)='addpo(data);'>Buy</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <br/>\n\n      <br/>\n      <br/>\n      <br/>    \n  <!-- <div class='container-fluid'>\n    <div class='row'>\n      <div class='col-sm-6'>\n        <ul class=\"pagination\" id='Previous'>\n          <li class=\"page-item btn btn-primary disabled\">&lt; Previous</li>\n        </ul>\n      </div>\n      <div class='col-sm-6'>\n        <ul class=\"pagination right\" id='Next'>\n          <li class=\"page-item btn btn-primary\">Next &gt;</li>\n        </ul>\n      </div>\n    </div>\n  </div> -->\n<!-- <div *ngFor='let myimage of array'>\n<img src='{{myimage}}'>\n</div> -->\n\n\n \n"

/***/ }),

/***/ "./src/app/components/body/body.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/body/body.component.ts ***!
  \***************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(phoenixService, router) {
        this.phoenixService = phoenixService;
        this.router = router;
        this.arrays = [];
        this.images = ['../../assets/pics/Apple.jpg', '../../assets/pics/acer.png', '../../assets/pics/hp.png', '../../assets/pics/iball.jpg', '../../assets/pics/dell.jpg', '../../assets/pics/lenovo.jpg', '../../assets/pics/samsung.jpg', '../../assets/pics/sony.jpg'];
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.displayProducts();
        console.log('Designed & Developed By:\nVarun\nKomali\nVamsi\nNidesh\nThanmayi\nSreepadh\nAshish\nParimala\nRajesh\nKrishna\nAnusha\nYamuna\nPriya\nVaishnavi\nGayatri\nYamuna\nAnjana');
    };
    BodyComponent.prototype.displayProducts = function () {
        var _this = this;
        this.phoenixService.getProducts().subscribe(function (data) {
            console.log(data['msg']);
            _this.arrays = data['msg'];
        });
    };
    BodyComponent.prototype.addpo = function (data) {
        this.phoenixService.setter(data);
        this.router.navigate(['/addpo']);
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/components/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/components/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/components/complete-orders/complete-orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/complete-orders/complete-orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/complete-orders/complete-orders.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/complete-orders/complete-orders.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"table-responsive table--no-card lg-b-80\">\n            <table class=\"table table-borderless table-striped table-earning\" border=3px>\n                <thead>\n                    <tr>\n                        <th class=\"text-center\"></th>\n                        <th class=\"text-center\">Status</th>\n                        <th class=\"text-center\">Order_ID</th>\n                        <th class=\"text-center\">Supplier_ID</th>\n                        <th class=\"text-center\">Supplier_Name</th>\n                        <th class=\"text-center\">Item_Name</th>\n                        <th class=\"text-center\">Contact_Person</th>\n                        <th class=\"text-center\">Mobile_Number</th>\n                        <th class=\"text-center\">Delivery_Address</th>\n                        <th class=\"text-center\">Price</th>\n                        <th class=\"text-center\">Order_Date</th>\n                        <th class=\"text-center\">Expected_Delivery_Date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let data of arrays'>\n                      <td class=\"text-center\"><a class='btn btn-primary' (click)='changeStatus(data);'>Change</a></td>\n                      <td class=\"text-center\">{{data.Pstatus}}</td>\n                      <td class='text-center'>{{data._id}}</td>\n                      <td class=\"text-center\">SID000{{data.Psid}}</td>\n                        <td class=\"text-center\">{{data.Psname}}</td>\n                        <td class=\"text-center\">{{data.Pbrand}}</td>\n                        <td class=\"text-center\">{{data.Person}}</td>\n                        <td class=\"text-center\">{{data.Mobile}}</td>\n                        <td class=\"text-center\">{{data.Daddress}}</td>\n                        <td class=\"text-center\">{{data.Pprice}}</td>\n                        <td class=\"text-center\">{{data.Odate}}</td>\n                        <td class=\"text-center\">{{data.Exdate}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/complete-orders/complete-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/complete-orders/complete-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompleteOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteOrdersComponent", function() { return CompleteOrdersComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompleteOrdersComponent = /** @class */ (function () {
    function CompleteOrdersComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    CompleteOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phoenixservice.getcompletedOrders().subscribe(function (data) {
            console.log(data);
            _this.arrays = data['msg'];
        });
    };
    CompleteOrdersComponent.prototype.changeStatus = function (data) {
        this.phoenixservice.setstatus(data);
        this.router.navigate(['/status']);
    };
    CompleteOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-complete-orders',
            template: __webpack_require__(/*! ./complete-orders.component.html */ "./src/app/components/complete-orders/complete-orders.component.html"),
            styles: [__webpack_require__(/*! ./complete-orders.component.css */ "./src/app/components/complete-orders/complete-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], CompleteOrdersComponent);
    return CompleteOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  /* .container-fluid {\r\n      padding:10px;\r\n  } */\r\n  \r\n\r\n\r\n\r\n  body {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .dropdown,\r\n  .dropdown-toggle {\r\n    letter-spacing: 2px;\r\n    text-align: right;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  button {\r\n    margin-left: 70px;\r\n    border-radius: 10px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  #Previous .page-item {\r\n    font-size: 20px;\r\n    width: 180px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  #Next .page-item {\r\n    font-size: 20px;\r\n    width: 180px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .card {\r\n    width: 90%;\r\n    border-radius: 20px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .right {\r\n    float: right;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .yellow {\r\n    color: orange;\r\n    /* background-color: yellow; */\r\n  }\r\n  \r\n\r\n\r\n\r\n  input[type='text'] {\r\n    width: 75%;\r\n    color: darkslategrey;\r\n    border-color: black;\r\n    border-right-color: white;\r\n    border-top-left-radius: 15px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  #go {\r\n    margin-left: 0px;\r\n    padding: 10px;\r\n    border-radius: 0px;\r\n    border-color: black;\r\n    border-left-color: blue;\r\n    border-bottom-right-radius: 15px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  img {\r\n    margin: 10%;\r\n    height: 30%;\r\n    width: 80%;\r\n    margin-top: 8%;\r\n    margin-bottom: 4%;\r\n  }\r\n  \r\n\r\n\r\n\r\n  #cards {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .card-footer {\r\n      border-bottom-right-radius:20px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  *{\r\n    margin: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  dt {\r\n    margin:10px;\r\n    text-indent: 10px;\r\n    line-height: 25px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  dd {\r\n    text-indent: 40px;\r\n    letter-spacing: 1px;\r\n    line-height: 25px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .filters {\r\n    padding-top:10px;\r\n    margin-left:5px;\r\n    border: 1px rgba(0,0,0,0.1) groove;\r\n    border-radius:20px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  h5 {\r\n    letter-spacing: 2px;\r\n  }\r\n  \r\n\r\n\r\n\r\n  .sortby{\r\n    margin-top:20px;\r\n  }"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2'>\n      <body>\n        <div class='vl'>\n          <div class='container-fluid filters'>\n            <h5>\n              <a data-toggle=\"collapse\" href=\"#filters\" role=\"button\" aria-expanded=\"true\" aria-controls=\"filters\">Filters:</a>\n            </h5>\n            <div class='collapse show' id='filters'>\n              <dl>\n                <dt>\n                  <a data-toggle=\"collapse\" href=\"#memorySize\" role=\"button\" aria-expanded=\"false\" aria-controls=\"memorySize\">Memory Size&gt;&gt;</a>\n                </dt>\n                <div class=\"collapse multi-collapse\" id=\"memorySize\">\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(2);'>&nbsp;Up to 2 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(3);'>&nbsp;3 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(4);'>&nbsp;4 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(6);'>&nbsp;6 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(8);'>&nbsp;8 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(12);'>&nbsp;12 GB</dd>\n                  <dd>\n                    <input name='ms' type=\"radio\" (click)='ms(16);'>&nbsp;16 GB &amp; more</dd>\n                </div>\n              </dl>\n              <dl>\n                <dt>\n                  <a data-toggle=\"collapse\" href=\"#operatingSystem\" role=\"button\" aria-expanded=\"false\" aria-controls=\"operatingSystem\">Operating System&gt;&gt;</a>\n                </dt>\n                <div class=\"collapse multi-collapse\" id='operatingSystem'>\n                  <dd>\n                    <input name='os' type=\"radio\" (click)=\"os('Windows');\">&nbsp;Windows</dd>\n                  <dd>\n                    <input name='os' type=\"radio\" (click)=\"os('Dos');\">&nbsp;DOS</dd>\n                  <dd>\n                    <input name='os' type=\"radio\"  (click)=\"os('Linux');\">&nbsp;Linux</dd>\n                  <dd>\n                    <input name='os' type=\"radio\" (click)=\"os('Mac');\">&nbsp;Mac OS</dd>\n                </div>\n              </dl>\n              <dl>\n                <dt>\n                  <a data-toggle=\"collapse\" href=\"#hardDisk\" role=\"button\" aria-expanded=\"false\" aria-controls=\"hardDisk\">HDD Size&gt;&gt;</a>\n                </dt>\n                <div class=\"collapse multi-collapse\" id='hardDisk'>\n                  <dd>\n                    <input name='hs' type=\"radio\" (click)=\"hs(1);\">&nbsp;Up to 159 GB</dd>\n                  <dd>\n                    <input name='hs' type=\"radio\" (click)=\"hs(2);\">&nbsp;160 - 249 GB</dd>\n                  <dd>\n                    <input name='hs' type=\"radio\" (click)=\"hs(3);\">&nbsp;250 - 499 GB</dd>\n                  <dd>\n                    <input name='hs' type=\"radio\" (click)=\"hs(4);\">&nbsp;500 - 999 GB</dd>\n                  <dd>\n                    <input name='hs' type=\"radio\" (click)=\"hs(5);\">&nbsp;1TB &amp; More</dd>\n                </div>\n              </dl>\n              <dl>\n                <dt>\n                  <a data-toggle=\"collapse\" href=\"#price\" role=\"button\" aria-expanded=\"false\" aria-controls=\"price\">Price&gt;&gt;</a>\n                </dt>\n                <div class='collapse multi-collapse' id='price'>\n                  <dd>\n                    <input name='p' type=\"radio\" (click)='p(10000);'> &nbsp;Under ₹20,000</dd>\n                  <dd>\n                    <input name='p' type=\"radio\" (click)='p(20000);'>&nbsp;₹20,000 – ₹30,000</dd>\n                  <dd>\n                    <input name='p' type=\"radio\" (click)='p(30000);'>&nbsp;₹30,000 – ₹40,000</dd>\n                  <dd>\n                    <input name='p' type=\"radio\" (click)='p(40000);'>&nbsp;₹40,000 – ₹50,000</dd>\n                  <dd>\n                    <input name='p' type=\"radio\" (click)='p(50000);'>&nbsp;Over ₹50,000</dd>\n                </div>\n              </dl>\n              <dl>\n                <dt>\n                  <a data-toggle=\"collapse\" href=\"#customerReview\" role=\"button\" aria-expanded=\"false\" aria-controls=\"customerReview\">Average Review&gt;&gt;</a>\n                </dt>\n                <div class='collapse multi-collapse' id='customerReview'>\n                  <dd>\n                    <input name='acr' type=\"radio\" (click)='acr(4);'>&nbsp;4 Stars &amp; Up</dd>\n                  <dd>\n                    <input name='acr' type=\"radio\" (click)='acr(3);'>&nbsp;3 Stars &amp; Up</dd>\n                  <dd>\n                    <input name='acr' type=\"radio\" (click)='acr(2);'>&nbsp;2 Stars &amp; Up</dd>\n                  <dd>\n                    <input name='acr' type=\"radio\" (click)='acr(1);'>&nbsp;1 Star &amp; Up</dd>\n                </div>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </body>\n      <br/>\n      <a data-toggle=\"collapse\" href=\".multi-collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"memorySize hardDisk operatingSystem customerReview price\"> Click here to collapse all filters</a>\n      <br/>\n      <br/>\n    </div>\n    <main class='col-xs-6 col-sm-6 col-md-8 col-lg-9 col-xl-10'>\n\n        <div class='container-fluid sortby'>\n          <div class='row'>\n            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-right'>\n            <div class=\"dropdown\">\n              &nbsp;&nbsp;&nbsp;\n              <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                Sort By:\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <!-- <a class=\"dropdown-item\" href=\"#\">New &amp; Popular</a> -->\n                <a class=\"dropdown-item\" (click)=\"sortBy('lh');\">Price: Low to High</a>\n                <a class=\"dropdown-item\" (click)=\"sortBy('hl');\">Price: High to Low</a>\n                <a class=\"dropdown-item\" (click)=\"sortBy('cr');\">Avg. Customer Reviews</a>\n                <!-- <a class=\"dropdown-item\" href=\"#\">Newest Arrivals</a> -->\n              </div>\n            </div>\n          </div>\n          </div>\n          </div>\n          <div class=\"container-fluid\" id='cards'>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4\" *ngFor='let data of arrays'>\n            <div class=\"card h-100\">\n              <img class=\"card-img-top\" src=\"{{data.img}}\" alt=\"\">\n              <div class=\"card-body\">\n                <h6 class=\"card-title\">\n                  {{data.Ptitle}}\n                </h6>\n                <h5>&#8377;{{data.Pprice}}</h5>\n                <span>Brand: {{data.Pbrand}}</span>\n                <br/>\n                <span>Hard Disk: {{data.Phdd}}GB</span>\n                <br/>\n                <span>OS: {{data.Pos}}</span>\n                <br/>\n                <span>RAM: {{data.Pram}}GB</span>\n                <br/>\n              </div>\n              <div class=\"card-footer\">\n                <span class='yellow'>Rating: {{data.Prating}}</span>\n                <button class='btn btn-primary float-right' (click)='addpo(data);'>Buy</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n    </main>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
        this.arrays = [];
        this.arrays2 = [];
        this.memorySize = 0;
        this.operatingSystem = 0;
        this.hddSize = 0;
        this.price = 0;
        this.averageCustomerReview = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.displayProducts();
        console.log('Designed & Developed By:\nVarun\nKomali\nVamsi\nNidesh\nThanmayi\nSreepadh\nAshish\nParimala\nRajesh\nKrishna\nAnusha\nYamuna\nPriya\nVaishnavi\nGayatri\nYamuna\nAnjana');
    };
    DashboardComponent.prototype.displayProducts = function () {
        var _this = this;
        this.phoenixservice.getProducts().subscribe(function (data) {
            console.log(data['msg']);
            _this.arrays = data['msg'];
        });
    };
    DashboardComponent.prototype.addpo = function (data) {
        this.phoenixservice.setter(data);
        this.router.navigate(['/addpo']);
    };
    DashboardComponent.prototype.ms = function (size) {
        var _this = this;
        console.log(size);
        this.phoenixservice.getMemoryFilter(size).subscribe(function (data) {
            _this.phoenixservice.setarray(data['msg']);
            console.log(data['msg']);
            _this.arrays = data['msg'];
        });
    };
    DashboardComponent.prototype.sortBy = function (state) {
        if (state == 'lh') {
            console.log('low to high price');
            this.arrays2 = this.arrays;
            for (var i = 1; i < this.arrays2.length; i++) {
                for (var j = i; j > 0; j--) {
                    if (this.arrays2[j].Pprice < this.arrays2[j - 1].Pprice) {
                        this.temp = this.arrays2[j];
                        this.arrays2[j] = this.arrays2[j - 1];
                        this.arrays2[j - 1] = this.temp;
                    }
                }
            }
            console.log(this.arrays2);
            this.arrays = this.arrays2;
        }
        else if (state == 'hl') {
            console.log('high to low price');
            this.arrays2 = this.arrays;
            for (var i = 1; i < this.arrays2.length; i++) {
                for (var j = i; j > 0; j--) {
                    if (this.arrays2[j].Pprice > this.arrays2[j - 1].Pprice) {
                        this.temp = this.arrays2[j];
                        this.arrays2[j] = this.arrays2[j - 1];
                        this.arrays2[j - 1] = this.temp;
                    }
                }
            }
            console.log(this.arrays2);
            this.arrays = this.arrays2;
        }
        else {
            console.log('low to high price');
            this.arrays2 = this.arrays;
            for (var i = 1; i < this.arrays2.length; i++) {
                for (var j = i; j > 0; j--) {
                    if (this.arrays2[j].Prating < this.arrays2[j - 1].Prating) {
                        this.temp = this.arrays2[j];
                        this.arrays2[j] = this.arrays2[j - 1];
                        this.arrays2[j - 1] = this.temp;
                    }
                }
            }
            console.log(this.arrays2);
            this.arrays = this.arrays2;
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/editpo/editpo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editpo/editpo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n  body\r\n  {\r\n      padding:0px;\r\n      margin:0px;\r\n  }\r\n  #sendMessageButton\r\n  {\r\n      border-top-left-radius:15px;\r\n      border-bottom-right-radius:15px;\r\n      padding:5px 50px 5px 50px;\r\n  }\r\n  *{\r\n    font-size: 24px;\r\n    letter-spacing: 1px;\r\n    line-height: 50px;\r\n  }\r\n  h2\r\n  {\r\n    font-size:28px;\r\n    font-family: monospace;\r\n  }\r\n  td{\r\n    text-indent: 80px;\r\n  }"

/***/ }),

/***/ "./src/app/components/editpo/editpo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editpo/editpo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <br/>\n    <div class=\"container\">\n      <h2 class=\"text-center text-uppercase\" id='po'>Invoice</h2>\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n          <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->\n          <form name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\" #form='ngForm'  (ngSubmit)='proceed($event);'>\n            <table>\n                <tr>\n                    <td>\n                        ProductId\n                    </td>\n                    <td>\n                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PID-000{{excess.Psid}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        SupplierId\n                    </td> \n                    <td>\n                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SID-000{{excess.Psid}}\n                    </td>\n            </tr>\n            <tr>\n                <td>\n                    Supplier Name\n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess.Psname}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Item Name\n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess.Pbrand}}\n                </td>\n            </tr>\n            <tr>\n                    <td>\n                        Amount\n                    </td>\n                    <td>\n                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess.Pprice}}/-\n                    </td>\n                </tr>\n            <tr>\n                <td>\n                    Contact Person\n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess2.contact}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Mobile Number\n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess2.mobile}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Address\n                </td>\n                <td> \n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess2.address}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Ordered Date\n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess2.Odate}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Expected Delivery Date \n                </td>\n                <td>\n                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{excess2.exdate}}\n                </td>\n            </tr>\n            </table>\n            <br/>\n            <div class=\"form-group\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 align-right\" >\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"submit\" class=\"btn btn-primary\">Proceed</button>\n                    </div>\n                    <div class=\"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"submit\" class=\"btn btn-primary\">Cancel</button>\n                    </div>\n                  </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./src/app/components/editpo/editpo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editpo/editpo.component.ts ***!
  \*******************************************************/
/*! exports provided: EditpoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpoComponent", function() { return EditpoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditpoComponent = /** @class */ (function () {
    function EditpoComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    EditpoComponent.prototype.ngOnInit = function () {
        this.excess = this.phoenixservice.getter();
        this.excess2 = this.phoenixservice.getForm();
    };
    EditpoComponent.prototype.proceed = function (event) {
        event.preventDefault();
        console.log();
        this.phoenixservice.createOrder({
            'Oid': this.excess.Psid,
            'Psid': this.excess.Psid,
            'Sname': this.excess.Psname,
            'Pbrand': this.excess.Pbrand,
            'Pprice': this.excess.Pprice,
            'Person': this.excess2.contact,
            'Mobile': this.excess2.mobile,
            'Address': this.excess2.address,
            'Odate': this.excess2.Odate,
            'Exdate': this.excess2.exdate
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('parimala not found.');
            console.log(err);
        });
        this.router.navigate(['/']);
    };
    EditpoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editpo',
            template: __webpack_require__(/*! ./editpo.component.html */ "./src/app/components/editpo/editpo.component.html"),
            styles: [__webpack_require__(/*! ./editpo.component.css */ "./src/app/components/editpo/editpo.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], EditpoComponent);
    return EditpoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer\r\n{\r\n    margin:0px;\r\n    position: relative;\r\n    bottom: 0;\r\n    padding:10px;\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <div class='row'>\n      <div class='col-md-12'>\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2017</p>\n  </div>\n  </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .komali .farimala .priya\r\n{\r\n    margin-left:500px;\r\n} */\r\n.navbar\r\n{\r\n    padding-top:15px;\r\n    padding-bottom: 15px;\r\n    letter-spacing: 3px;\r\n}\r\n/* .komali .farimala .varun\r\n{\r\n    margin-left:50px;\r\n} */\r\n.varun:hover , .priya:hover{\r\n    /* text-shadow: 1px 10px 100px white; */\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\nbody {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n.topnav a:hover {\r\n    background-color:white;\r\n    color: black;\r\n  }\r\n/* .topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  } */\r\n.topnav-right {\r\n    float: right;\r\n  }\r\n#main\r\n  {\r\n      font-size: 26px;\r\n  }\r\n#sub\r\n  {\r\n      margin-top:7px;\r\n      padding-right:30px;\r\n  }"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\n  <a id='main' routerLink='/'>Phoenix-Kart</a>\n  <div class=\"topnav-right\">\n    <a id='sub' routerLink='/'>Home</a>\n    <a id='sub' routerLink='/login'>Login</a>\n  </div>\n</div>\n\n<!-- <div class=\"topnav\">\n  <a routerLink='/'>PHOENIX-Kart</a>\n    <div class=\"col-md-6\" id=\"navbarNav\">\n      <div class=\"topnav-right\">\n         <a class=\"\" href=\"#\" routerLink='/'>Home</a>\n         <a class=\"\" href=\"#\" routerLink='/login'>Login/Signup</a>\n      </div>\n      </div>\n      </div> -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding-top:4.2rem;\r\n    padding-bottom:4.2rem;\r\n    /* background:rgba(0, 0, 0, 0.76); */\r\n    }\r\n    a{\r\n     text-decoration:none !important;\r\n     }\r\n    h1,h2,h3{\r\n     font-family: 'Kaushan Script', cursive;\r\n     }\r\n    .myform{\r\n    position: relative;\r\n    display: flex;\r\n    padding: 1rem;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.2);\r\n    border-radius: 1.1rem;\r\n    outline: 0;\r\n    max-width: 500px;\r\n     }\r\n    .tx-tfm{\r\n     text-transform:uppercase;\r\n     }\r\n    .mybtn{\r\n     border-radius:50px;\r\n     }\r\n    .login-or {\r\n        position: relative;\r\n        color: #aaa;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        }\r\n    .span-or {\r\n        display: block;\r\n        position: absolute;\r\n        left: 50%;\r\n        top: -2px;\r\n        margin-left: -25px;\r\n        background-color: #fff;\r\n        width: 50px;\r\n        text-align: center;\r\n        }\r\n    .hr-or {\r\n        height: 1px;\r\n        margin-top: 0px !important;\r\n        margin-bottom: 0px !important;\r\n        }\r\n    .google {\r\n        color:#666;\r\n        width:100%;\r\n        height:40px;\r\n        text-align:center;\r\n        outline:none;\r\n        border: 1px solid lightgrey;\r\n        }\r\n    form .error {\r\n        color: #ff0000;\r\n        }\r\n    #second{display:none;}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <br/>\n  <br/>\n  <br/>\n  <br/>\n    <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-5 mx-auto\">\n        <div id=\"first\">\n        <div class=\"myform form \">\n           <div class=\"logo mb-3\">\n             <div class=\"col-md-12 text-center\">\n              <h1>Login</h1>\n             </div>\n          </div>\n                   <form #login='ngForm' (ngSubmit)='submitLogin(login)'>\n                           <div class=\"form-group\">\n                              <label for=\"email\">Email address</label>\n                              <input type=\"email\"  name=\"email\"  class=\"form-control\" id=\"email\" ngModel placeholder=\"Enter email\">\n                           </div>\n                           <br/>\n                           <div class=\"form-group\">\n                              <label for=\"password\">Password</label>\n                              <input type=\"password\" name=\"pass\" id=\"password\" ngModel  class=\"form-control\" placeholder=\"Enter Password\">\n                           </div>\n                           <br/>\n                           <div class=\"form-group\">\n                              <p class=\"text-center\">By signing up you accept our <a href=\"#\" routerLink='/termsofuse'>Terms Of Use</a></p>\n                           </div>\n                           <div class=\"col-md-12 text-center \">\n                              <button type=\"submit\" class=\" btn btn-block mybtn btn-primary tx-tfm\">Login</button>\n                           </div>\n                           <!-- <div class=\"col-md-12 \">\n                              <div class=\"login-or\">\n                                 <hr class=\"hr-or\">\n                            </div>\n                           </div>\n                       <div class=\"form-group\">\n                              <p class=\"text-center\">Don't have account? \n                                  <a  routerLink='/signup'  id=\"signup\">Sign up here</a>\n                                </p>\n                           </div> -->\n                        </form>                      \n        </div>\n      </div>\n       </div>\n      </div>   \n </div> \n <br/>\n<br/>\n<br/>  \n</body>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitLogin = function (login) {
        var _this = this;
        console.log(login.value);
        this.phoenixservice.getUsers(login).subscribe(function (data) {
            console.log(data);
            _this.array = data;
            if (_this.array.result == 'Empty' || _this.array.result == 'Oops' || _this.array.result == 'User') {
                alert('Enter valid login Details...!');
            }
            if (_this.array.result == 'Admin') {
                _this.router.navigate(['/admin']);
            }
            // if(this.array.result=='User'){
            //   this.router.navigate(['/']);
            // }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/open-orders/open-orders.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/open-orders/open-orders.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/open-orders/open-orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/open-orders/open-orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"table-responsive table--no-card lg-b-80\">\n            <table class=\"table table-borderless table-striped table-earning\" border=3px>\n                <thead>\n                    <tr>\n                        <th class=\"text-center\"></th>\n                        <th class=\"text-center\">Status</th>\n                        <th class=\"text-center\">Order_ID</th>\n                        <th class=\"text-center\">Supplier_ID</th>\n                        <th class=\"text-center\">Supplier_Name</th>\n                        <th class=\"text-center\">Item_Name</th>\n                        <th class=\"text-center\">Contact_Person</th>\n                        <th class=\"text-center\">Mobile_Number</th>\n                        <th class=\"text-center\">Delivery_Address</th>\n                        <th class=\"text-center\">Price</th>\n                        <th class=\"text-center\">Order_Date</th>\n                        <th class=\"text-center\">Expected_Delivery_Date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let data of arrays'>\n                      <td class=\"text-center\"><a class='btn btn-primary' (click)='changeStatus(data);'>Change</a></td>\n                      <td class=\"text-center\">{{data.Pstatus}}</td>\n                      <td class='text-center'>{{data._id}}</td>\n                      <td class=\"text-center\">SID000{{data.Psid}}</td>\n                        <td class=\"text-center\">{{data.Psname}}</td>\n                        <td class=\"text-center\">{{data.Pbrand}}</td>\n                        <td class=\"text-center\">{{data.Person}}</td>\n                        <td class=\"text-center\">{{data.Mobile}}</td>\n                        <td class=\"text-center\">{{data.Daddress}}</td>\n                        <td class=\"text-center\">{{data.Pprice}}</td>\n                        <td class=\"text-center\">{{data.Odate}}</td>\n                        <td class=\"text-center\">{{data.Exdate}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/open-orders/open-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/open-orders/open-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: OpenOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOrdersComponent", function() { return OpenOrdersComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenOrdersComponent = /** @class */ (function () {
    function OpenOrdersComponent(phoenixservice, router) {
        this.phoenixservice = phoenixservice;
        this.router = router;
    }
    OpenOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phoenixservice.getopenOrders().subscribe(function (data) {
            console.log(data);
            _this.arrays = data['msg'];
        });
    };
    OpenOrdersComponent.prototype.changeStatus = function (data) {
        this.phoenixservice.setstatus(data);
        this.router.navigate(['/status']);
    };
    OpenOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-open-orders',
            template: __webpack_require__(/*! ./open-orders.component.html */ "./src/app/components/open-orders/open-orders.component.html"),
            styles: [__webpack_require__(/*! ./open-orders.component.css */ "./src/app/components/open-orders/open-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_1__["PhoenixService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], OpenOrdersComponent);
    return OpenOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding-top:4.2rem;\r\n    padding-bottom:4.2rem;\r\n    /* background:#000000c2; */\r\n    }\r\n    a{\r\n     text-decoration:none !important;\r\n     }\r\n    h1,h2,h3{\r\n     font-family: 'Kaushan Script', cursive;\r\n     }\r\n    .myform{\r\n    position: relative;\r\n    display: flex;\r\n    padding: 1rem;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\r\n    background-color: rgb(255, 255, 255);\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 1.1rem;\r\n    outline: 0;\r\n    max-width: 500px;\r\n     }\r\n    .tx-tfm{\r\n     text-transform:uppercase;\r\n     }\r\n    .mybtn{\r\n     border-radius:50px;\r\n     }\r\n    .login-or {\r\n        position: relative;\r\n        color: rgb(170, 170, 170);\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        }\r\n    .span-or {\r\n        display: block;\r\n        position: absolute;\r\n        left: 50%;\r\n        top: -2px;\r\n        margin-left: -25px;\r\n        background-color: #fff;\r\n        width: 50px;\r\n        text-align: center;\r\n        }\r\n    .hr-or {\r\n        height: 1px;\r\n        margin-top: 0px !important;\r\n        margin-bottom: 0px !important;\r\n        }\r\n    form .error {\r\n        color: #ff0000;\r\n        }\r\n    #second{display:auto;}"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 mx-auto\">\n        <div id=\"second\">\n          <div class=\"myform form \">\n            <div class=\"logo mb-3\">\n              <div class=\"col-md-12 text-center\">\n                <h1>Signup</h1>\n              </div>\n            </div>\n            <form #signupForm=\"ngForm\" (ngSubmit)=\"registerUser(signupForm)\" ngNativeValidate>\n              <div class=\"form-group\">\n                <label for=\"First\">User Name</label>\n                <input type=\"text\" id='First' ngModel name=\"username\" class=\"form-control\" placeholder=\"Enter Username\" required pattern='[a-zA-Z][a-zA-Z]+' #userName='ngModel'>\n              </div>\n              <div *ngIf='userName?.touched' class=\"alert alert-danger\">\n                <div *ngIf='userName.errors?.required'>\n                Note: User Name must be filled\n              </div>\n              <div *ngIf='userName.errors?.pattern'>\n                Note: Invalid User Name\n              </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Email\">Email Address</label>\n                <input type=\"email\" id='Email' ngModel name=\"email\" class=\"form-control\" placeholder=\"Enter Email address\" required pattern='^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$' #emailAddress='ngModel' minlength=\"10\" maxlength=\"10\">\n              </div>\n              <div *ngIf='emailAddress?.touched' class=\"alert alert-danger\">\n                <div *ngIf='emailAddress.errors?.required'>\n                Note: E-mail must be filled\n                </div>\n                <div *ngIf='emailAddress.errors?.pattern'>\n                  Note: Invalid E-mail Address\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Mobile\">Mobile Number</label>\n                <input type=\"text\" id='Mobile' ngModel name=\"mobile\" class=\"form-control\" placeholder=\"Enter mobile number\" required pattern='[0-9]*' #mobileNumber='ngModel'>\n              </div>\n              <div *ngIf='mobileNumber?.touched'>\n                <div *ngIf='mobileNumber.errors?.required' class=\"alert alert-danger\">\n                Note: Mobile Number must be filled\n                </div>\n                <div *ngIf='mobileNumber.errors?.pattern || emailAddress.errors?.minlength' class=\"alert alert-danger\">\n                    Note: Invalid Mobile Number\n                    </div>\n              \n                </div>\n                \n              <!-- <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id='password' ngModel name=\"pass\" class=\"form-control\" placeholder=\"Enter Password\" required #password='ngModel' minlength=\"8\">\n              </div> -->\n\n\n\n              <!-- <div *ngIf='password?.touched' class=\"alert alert-danger\">\n                <div *ngIf='password.errors?.required'>\n                Note: Password must be filled\n                </div>\n                <div *ngIf='password.errors?.minlength'>\n                  Note: Invalid Password\n                  </div>\n              </div> -->\n\n\n              <div class=\"form-group\">\n                  <label>Password</label>\n                  <input type=\"password\" class='form-control' name=\"pass\" ngModel required #pass=\"ngModel\" placeholder='Enter Password'>\n                  </div>\n                  <div class='alert alert-danger' [hidden]=\"pass.valid || (pass.pristine && !signupForm.submitted)\">\n                      Password is required\n                  </div>\n\n              <div class=\"form-group\">\n                  <label>Retype password</label>\n                  <input type=\"password\" class='form-control' name=\"pass2\" ngModel required validateEqual=\"pass\" #pass2=\"ngModel\" placeholder=\"Enter Confirm Password\">\n                  </div>\n                  <div class='alert alert-danger' [hidden]=\"pass2.valid || (pass2.pristine && !signupForm.submitted)\">\n                      Password mismatch\n                  </div>\n\n\n\n\n              <!-- <div class=\"form-group\">\n                <label for=\"password2\">Re-enter Password</label>\n                <input type=\"password\" id=\"password2\" name=\"pass2\" (keyup)='validatePasswords(signupForm.value.pass,signupForm.value.pass2);' ngModel class=\"form-control\" placeholder=\"confirm Password\" required #password2='ngModel'>\n              </div>\n              <div *ngIf='password2?.touched || password?.touched' class=\"alert alert-danger\">\n              <div *ngIf='isValid; else notMatched'>         \n                Matched!\n                </div>\n                <ng-template #notMatched>Alternate text while primary text is hidden</ng-template>\n                </div> -->\n\n\n                <!-- <div *ngIf='password2.touched' class=\"alert alert-danger\">\n                <div *ngIf='password2.errors?.required'>\n                Note: Confirm Password must be filled\n                </div>\n                <div *ngIf='password2.errors?.minlength'>\n                  Note: Invalid password\n                  </div> -->\n              <!-- </div> -->\n              <div class=\"col-md-12 text-center mb-3\">\n                <button class=\" btn btn-block mybtn btn-primary tx-tfm\" type=\"submit\" [disabled]='signupForm.invalid'>Get Started For Free</button>\n              </div>\n              <div class=\"col-md-12 \">\n                <div class=\"form-group\">\n                  <p class=\"text-center\">\n                    <a routerLink=\"/login\">Already have an account?</a>\n                  </p>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, phoenixService) {
        this.router = router;
        this.phoenixService = phoenixService;
        this.isvalid = true;
    }
    SignupComponent.prototype.newUser = function (frm) {
        console.log(frm.value);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__["PhoenixService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/status/status.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/status/status.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    line-height: 50px;\r\n    font-size: 24px;\r\n}\r\n.btn{\r\n    font-size: 18px;\r\n    height:50px;\r\n    padding:5px;\r\n    padding-top:0px;\r\n}\r\ntd\r\n{\r\n    text-indent:100px;\r\n}\r\ntd .dropdown-menu{\r\n    text-indent:0px;\r\n}\r\ntable{\r\n    margin-top:10px;\r\n}"

/***/ }),

/***/ "./src/app/components/status/status.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/status/status.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n      <td>\n          Order ID\n      </td>\n      <td>\n          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data._id}}\n      </td>\n  </tr>\n  <tr>\n      <td>\n          SupplierId\n      </td> \n      <td>\n          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SID-000{{data.Psid}}\n      </td>\n</tr>\n<tr>\n  <td>\n      Supplier Name\n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Psname}}\n  </td>\n</tr>\n<tr>\n  <td>\n      Item Name\n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Pbrand}}\n  </td>\n</tr>\n<tr>\n      <td>\n          Amount\n      </td>\n      <td>\n          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Pprice}}/-\n      </td>\n  </tr>\n<tr>\n  <td>\n      Contact Person\n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Person}}\n  </td>\n</tr>\n<tr>\n  <td>\n      Mobile Number\n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Mobile}}\n  </td>\n</tr>\n<tr>\n  <td>\n      Address\n  </td>\n  <td> \n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Daddress}}\n  </td>\n</tr>\n<tr>\n  <td>\n      Ordered Date\n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Odate}}\n  </td>\n</tr>\n<tr>\n  <td>\n      Expected Delivery Date \n  </td>\n  <td>\n      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.Exdate}}\n  </td>\n</tr>\n<tr>\n  <td>Status</td>\n  <td>\n<div class=\"dropdown\">\n  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  Change here\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" (click)=\"status('Submitted',data._id);\">Submitted</a>\n    <a class=\"dropdown-item\" (click)=\"status('Approved',data._id);\">Approved</a>\n    <a class=\"dropdown-item\" (click)=\"status('Declined',data._id);\">Declined</a>\n  </div>\n  </div>\n</td>\n</tr>\n</table>\n\n<a class='btn btn-danger float-right mr-3' routerLink='/admin'>&lt;&lt;&lt; Go Back</a>\n<br/>\n<br/>\n\n"

/***/ }),

/***/ "./src/app/components/status/status.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/status/status.component.ts ***!
  \*******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/phoenix.service */ "./src/app/shared/phoenix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = /** @class */ (function () {
    function StatusComponent(phoenixService) {
        this.phoenixService = phoenixService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.data = this.phoenixService.getstatus();
    };
    StatusComponent.prototype.status = function (cs, id) {
        console.log(cs + '  ' + id);
        this.phoenixService.updateOrder(cs, id).subscribe(function (data) {
            console.log(data);
        });
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/components/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/components/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_phoenix_service__WEBPACK_IMPORTED_MODULE_0__["PhoenixService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/components/termsofuse/termsofuse.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/termsofuse/termsofuse.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n    margin:30px 150px 10px 150px;\r\n    letter-spacing: 2px;\r\n    text-align:justify;\r\n    color:black;\r\n}\r\n\r\n.question\r\n{\r\n    font-size:24px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/termsofuse/termsofuse.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/termsofuse/termsofuse.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class='container-fluid'>\n  <div class='row'>\n<div class=\"article\">\n  <h3>Terms &amp; Conditions</h3>\n  <h4>Operating Agreement</h4>\n  <p>This Agreement contains the complete terms and conditions that apply to an individual's or entity's participation in the\n    Flipkart Affiliates Program (the \"\n    <strong>Program</strong>\"). As used in this Agreement, \"\n    <strong>we</strong>\", \"\n    <strong>us</strong>\", or \"\n    <strong>our</strong>\" means Flipkart Internet Private Limited or any of our affiliate; parent; or group companies and our successors\n    and assigns, as the case may be, and \"\n    <strong>you</strong>\" means the applicant.\n    <strong>Flipkart Site</strong> means, collectively, the flipkart.com website. \"\n    <strong>Your site</strong>\" means your website where you will link to the Flipkart Site (and which you will identify in your\n    Program application). Save for our obligation to pay referral fees under Section 4, which may be performed solely by\n    us, we may cause any of our obligations under this Agreement to be fulfilled by any of our Affiliates (defined below),\n    on our behalf.</p>\n  <ol>\n    <li>\n      <div class=\"question\">\n        Enrollment in the Program\n      </div>\n      <p>You have to be 18 years or above to enroll in this Program. To begin the enrollment process, you will submit a complete\n        Program Application via the Flipkart Site. We will evaluate your application in good faith and will notify you of\n        its acceptance or rejection. We may reject your application if we determine (in our sole discretion) that your site\n        is unsuitable for the Program. Unsuitable sites include, but are not limited to, those that:\n      </p>\n      <ul>\n        <li>Advertise affiliate links through pop-up windows / pop-unders</li>\n        <li>Advertise affiliate links as a cashback offer</li>\n        <li>Advertise misleading/wrong offers/deals running on Flipkart</li>\n        <li>Use affiliate links, whether directly or indirectly, on web sites offering any kind of referral program with/without\n          payment of fees and/or sites in the nature of multi-level marketing arrangements</li>\n        <li>Use affiliate links in HTML emailers, newsletters or any other form of bulk emails\n        </li>\n        <li>Use affiliate links on illegal audio/video download sites</li>\n        <li>Promote affiliate link via use of paid ads on search engine result pages and social media websites by bidding on\n          trademark of Flipkart.com or any variation or misspelling of any trademark of Flipkart.com</li>\n        <li>Promote pornography and sexually explicit materials</li>\n        <li>Promote violence</li>\n        <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age</li>\n        <li>Promote illegal activities</li>\n        <li>Include any trademark of Flipkart.com, or its affiliates, or any variation or misspelling of any trademark of Flipkart.com,\n          or its affiliates, in any domain name -- for example, a domain name such as \"flipkart.mydomain.com\", \"flipkartauctions.net\",\n          \"facebook.com/flipkartdealsgroup,\" would be unsuitable\n        </li>\n        <li>Include any trademark of Flipkart.com, Inc. or its affiliates in any username, group name, or other identifier on\n          any social networking website</li>\n        <li>Include any colour combination or layout similar or identical to Flipkart.com, with the intention to deceive</li>\n        <li>Use links or URLs which are not published by the Flipkart Site or by Flipkart Affiliate Program.</li>\n        <li>Add products directly to the customer's cart using scripts or any tools.</li>\n        <li>Otherwise violate intellectual property rights.</li>\n      </ul>\n      <p>Please also note that you may not purchase products during sessions initiated through the links on your site for your\n        own use, for resale or commercial use of any kind. This includes orders for customers or on behalf of customers or\n        orders for products to be used by you or your friends, relatives, or associates in any manner. The reason behind\n        this policy is that the Flipkart Affiliate Program is an advertising program rather than a discount program. Our\n        goal is to have our affiliates refer new customers to us in return for referral fees. Affiliates are not eligible\n        for referral fees when they place orders themselves, or ask people they know to routinely place orders through their\n        affiliate links so they can earn referral fees</p>\n      <p>With respect to our Mobile App install campaigns through Flipkart Affiliate Program, we do a rigorous data check using\n        industry standard parameters for checking the authenticity & quality of app installs through your affiliate id to\n        keep a check on fraudulent / low quality app installs happening through unethical means. Please note that we hold\n        the right to check the quality of installs being served by our affiliates and the right to suspend/disable their\n        affiliate account or withhold payments if we observe any fraudulent stuff happening through your affiliate id. Under\n        such circumstances we hold the right to terminate/disable your affiliate account and/or withhold all pending affiliate\n        commissions with immediate effect without any prior notice.</p>\n      <p>By participating in the Program you agree that you will not engage in any such activities. If we reject your application,\n        you are welcome to reapply to the Program at any time. You should also note that if we accept your application and\n        your site is thereafter determined (in our sole discretion) to be unsuitable for the Program at a later period, we\n        may terminate this Agreement with immediate effect including withholding all your pending commission payments, with\n        or without notice, as may be determined in sole discretion of Flipkart.com. Participation in the Program is limited\n        to parties that lawfully can enter into and form contracts under applicable law. For example, minors are not allowed\n        to participate in the Program.\n      </p>\n      <p>During the registration process on\n        <a href=\"/affiliate/signup\">/affiliate/signup</a>, it is compulsory to provide the information of all \"Your Website(s)\" in the \"Affiliate Website\n        Information\" section, which you would be linking to the Flipkart Site. We record your traffic from these websites/blogs\n        and hold the authority to withhold your payments/disable your account in case of:</p>\n      <ol>\n        <li>Traffic coming from any website / blogs not mentioned by you in the \"Affiliate Website Information\" section</li>\n        <li>In case of any violations made by the websites / blogs not mentioned in the \"Affiliate Website Information\" section</li>\n      </ol>\n      <p>Further, by participating in the Program you agree that you have read and understood the contents of Flipkart Terms\n        of Use (http://www.flipkart.com/s/terms) and contents of the said Terms of Use shall be read as part and parcel of\n        the Agreement, wherever applicable and be binding upon you.\n      </p>\n    </li>\n    <li>\n      <div class=\"question\">\n        Links on Your Site\n      </div>\n      <p>Once you have been notified that your site has been accepted into the Program, and subject to clause 1 of this Terms\n        and Conditions, we grant you a revocable, non-exclusive, worldwide, royalty-free license for the duration of the\n        term of this Agreement, solely for purposes of facilitating referrals from your site to the Flipkart Site, to provide\n        on your site one or more of the following types of links to the Flipkart Site:</p>\n      <ul>\n        <li>\n          <h3>Product Links:</h3>\n          <p>You may select one or more Products to list on your site using a variety of formats that we make available to you,\n            such as text link format, graphical link format, customizable \"widget\" format, or \"product preview\" link format.\n            A \"Product\" is any product listed on the Flipkart Site that is fulfilled by us or on our behalf, a Digital Product\n            (defined below), or any product sold by a third party seller on the Flipkart Site. For each selected Product,\n            you will display on your site a short description, review, or other reference. You will be responsible for the\n            content, style, and placement of these references. You will provide a Special Link (as defined below) from each\n            Product reference on your site to the corresponding Flipkart Site online catalog entry. Each such link will connect\n            directly to a single item in our online catalog. You may add or delete Products (and related links) from your\n            site at any time without our approval. You may not use Special Links to link to the Flipkart Site from references\n            to products on your site that are not \"Products\" as defined above.</p>\n        </li>\n        <li>\n          <h3>Search Box Link:</h3>\n          <p>You may provide a Flipkart Site search box on your site that will permit your site visitors to view Products that\n            are the results of their search query within the Search Box link or view results that link directly to a page\n            on the Flipkart Site that contains the results of their search query. We will provide you with technical specifications\n            describing how to include an Flipkart Site search box on your site.</p>\n        </li>\n        <li>\n          <h3>General Link to Flipkart Site Home Page:</h3>\n          <p>You may provide a general link on your site to the home page of the Flipkart Site.</p>\n        </li>\n        <li>\n          <h3>Search Results Link:</h3>\n          <p>You may provide a link on your site that will link to a particular search result on the Flipkart Site, the parameters\n            of which will be determined by you based on search generating alternatives we make available to you.</p>\n        </li>\n        <li>\n          <h3>Any Page Link:</h3>\n          <p>You may provide a link on your site that will link to any particular page on the Flipkart Site, provided that you\n            properly use the special link formats provided on the Flipkart Site as part of the Program to create such link.\n            We will provide you with guidelines and graphical artwork to use in linking to the Flipkart Site home page. To\n            permit accurate tracking, reporting, and referral fee accrual, we will provide you with special \"tagged\" link\n            formats to be used in all links between your site and the Flipkart Site (and for purposes of this Agreement,\n            the browser window described above that opens upon a user's clicking on a Quick-Click link is deemed a part of\n            the Flipkart Site, and any Quick-Click link is deemed a link between your site and the Flipkart Site). You must\n            ensure that each of the links between your site and the Flipkart Site properly utilizes such special link formats.\n            Links to the Flipkart Site placed on your site pursuant to this Agreement and which properly utilize such special\n            link formats are referred to as \"Special Links.\" You will earn referral fees only with respect to activity on\n            the Flipkart Site occurring directly through Special Links; we will not be liable to you with respect to any\n            failure by you to use Special Links, including to the extent that such failure may result in any reduction of\n            amounts that would otherwise be paid to you pursuant to this Agreement. You acknowledge that, by participating\n            in the Affiliate Program and placing any of the above links within your site, we may receive information from\n            or about visitors to your site or communications between your site and those visitors. Your participation in\n            the Program constitutes your specific and unconditional consent to and authorization for our access to, receipt,\n            storage, use, and disclosure of any and all such information, consistent with the policies and procedures set\n            forth in the Privacy Notice on the Flipkart Site. Except for the license granted under this Section 2, you do\n            not obtain any rights under this Agreement in any intellectual property, including, without limitation, any intellectual\n            property with respect to the Special Links, link formats, technical specifications, guidelines or graphical artwork\n            referenced above, or with respect to the Flipkart.com domain names. You also acknowledge that we (and our corporate\n            affiliates) may crawl or otherwise monitor your site for the purpose of ensuring the quality and reliability\n            of Special Links on your site (for example, to detect links that are broken or non-functional, links to products\n            that are out of stock or otherwise unavailable, etc.). Therefore, you agree that we and our corporate affiliates\n            may take such actions and that you will not seek to block or otherwise interfere with such crawling or monitoring\n            (and that we and our corporate affiliates may use technical means to overcome any methods used on your site to\n            block or interfere with such crawling or monitoring). You also acknowledge that as a participant in the Program,\n            we may from time to time send you email updates about the Program. By participating in the Program, you consent\n            to our sending you these email updates. Further, you acknowledge and agree that you will: (a) not, in connection\n            with this Agreement, display or reference on your site, any trademark or logo of any third party seller on the\n            Flipkart Site; (b) ensure that any \"Privacy Information\" link or Flipkart trademark (either in logo or text form)\n            that we include in a Special Link is not obscured or altered in any way or made invisible, illegible or indecipherable\n            to visitors of your site; (c) use any data, images, text, or other information obtained by you from us or the\n            Flipkart Site in connection with this Agreement (\"Content\") only in a lawful manner and only in accordance with\n            the terms of this Agreement; (d) not use any Content relating to any Excluded Merchant or any product sold by\n            any Excluded Merchant; (e) not modify or alter any Content that consists of a graphic image, other than to resize\n            it; (f) not edit any Content that consists of text, other than to shorten its length; (g) not sell, redistribute,\n            sublicense or transfer any Content; (h) not use any Content in a manner intended to send sales to any site other\n            than the Flipkart Site; (i) promptly delete any Content that is no longer displayed on the Flipkart Site or that\n            we notify you is no longer available for your use and (j) not use any Content, including any name or likeness\n            embodied therein, in a manner (e.g., a closely proximate placement to unrelated third party materials) that implies\n            a person's or company's endorsement or sponsorship of, or commercial tie-in or other association with, any product,\n            service, party or cause.</p>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <div class=\"question\">\n        Order Processing\n      </div>\n      <p>We will process Product orders placed by customers who follow Special Links from your site to the Flipkart Site. We\n        reserve the right to reject/disapprove orders that do not comply with any requirements that we periodically may establish.\n        We will be responsible for all aspects of order processing and fulfillment. Among other things, we will prepare order\n        forms, process payments, cancellations, and returns, and handle customer service. We will track sales made to customers\n        who purchase Products by using Special Links from your site to the Flipkart Site and will make available to you reports\n        summarizing this sales activity. The form, content, and frequency of the reports may vary from time to time in our\n        discretion.\n      </p>\n    </li>\n    <li>\n      <div class=\"question\">\n        Referral Fees\n      </div>\n      <p>We will pay you (in accordance with Sections 5 and 6 below) referral fees on certain Product sales to third parties.\n        For a Product sale to be eligible to earn a referral fee, the customer must click-through a Special Link on your\n        site to the Flipkart Site and during a single session, add the Product to his or her shopping cart. The session begins\n        when the customer clicks through a Special Link on your site to the Flipkart Site and ends upon the first to occur\n        of the following events:</p>\n      <ol type=\"a\">\n        <li>24 hours elapse from the customer's initial click-through, or</li>\n        <li>the customer places an order for a Product, or</li>\n        <li>the customer follows a third party link to the Flipkart Site that is appended with a different affiliate's tag, or</li>\n        <li>The customer follows a link to the Flipkart Site that is appended with Flipkart's email campaign tag</li>\n      </ol>\n      <p>We will only pay referral fees on eligible Products after order, payment, and shipping. To permit accurate tracking,\n        reporting and fee accrual, you must ensure that the Special Links between your site and the Flipkart Site are properly\n        formatted. We will not be liable for paying referral fees on purchases that are not correctly tracked and reported\n        because the links between your site and the Flipkart Site are not properly formatted. We will not, however, pay referral\n        fees on any Products that are added to a customer's Shopping Cart after the customer has reentered the Flipkart Site\n        (other than through a Special Link from your site), as determined by us, even if the customer previously followed\n        a link from your site to the Flipkart Site. In addition, we will not pay referral fees for any purchases made by\n        customers referred to us through Special Links generated or displayed in response to general Internet search queries\n        or keywords. For avoidance of doubt, the Search Box Link, which searches the Flipkart Product catalog, or searches\n        of product databases that include Flipkart Products, such as shopping comparison engines, are still eligible for\n        referral fees. You may not purchase products during sessions initiated through the links on your site for your own\n        use, for resale or commercial use of any kind. This includes orders for customers or on behalf of customers or orders\n        for products to be used by you or your friends, relatives, or associates in any manner. Such purchases may result\n        (in our sole discretion) in the withholding of referral fees and/or the termination of this Agreement. In addition,\n        you may not:</p>\n      <ol type=\"a\">\n        <li>directly or indirectly offer any person or entity any consideration or incentive (including, without limitation,\n          payment of money (including any rebate), or granting of any discount or other benefit) for using Special Links\n          on your site to access the Flipkart Site (e.g., by implementing any \"cashback\" program for persons or entities\n          who use Special Links on your site to access the Flipkart Site);</li>\n        <li>read, intercept, record, redirect, interpret, or fill in the contents of any electronic form or other materials submitted\n          to us by any person or entity;\n        </li>\n        <li>in any way modify, redirect, suppress, or substitute the operation of any button, link, or other interactive feature\n          of the Flipkart Site;</li>\n        <li>make any orders or subscription requests, or engage in other transactions of any kind on the Flipkart Site on behalf\n          of any third party, or authorize, assist, or encourage any other person or entity to do so;</li>\n        <li>take any action that could reasonably cause any customer confusion as to our relationship with you, or as to the\n          site on which any functions or transactions (e.g., search, order, browse, and so on) are occurring;</li>\n        <li>other than providing Special Links on your site in accordance with this Agreement, post or serve any advertisements\n          or promotional content promoting the Flipkart Site or otherwise around or in conjunction with the display of the\n          Flipkart Site (e.g., through any \"framing\" technique or technology or pop-up or pop-under windows), or assist,\n          authorize, or encourage any third party to take any such action;</li>\n        <li>attempt to circumvent the referral fee schedule or artificially increase your referral fees (e.g. by intentionally\n          featuring, purchasing or requesting or encouraging any third party to purchase low-price items offered on the Flipkart\n          Site (as determined by us) for the purpose of exceeding any referral fee threshold or by causing any page of the\n          Flipkart Site to open in a customer's browser other than as a result of the customer clicking on a Special Link\n          on your site);</li>\n        <li>attempt to intercept or re-direct (including, without limitation, via user-installed software) traffic from or on,\n          or divert referral fees from, any web site that participates in the Program; or</li>\n        <li>seek to purchase or register any keywords, search terms or other identifiers that include the words \"Flipkart,\" \"Flipcart\",\n          \"Digiflip\", \"Flyte\" or any other trademark of Flipkart Internet Private Limited or its affiliates, or variations\n          or misspellings thereof (\"Proprietary Terms\") for use in any search engine, portal, sponsored advertising service\n          or other search or referral service.</li>\n      </ol>\n      <p>From time to time we may request that you cause any applicable web search provider to exclude Proprietary Terms from\n        keywords used to display your advertising content in association with search results, assuming the provider of such\n        Web search engine offers such exclusion capabilities.</p>\n    </li>\n    <li>\n      <div class=\"question\">\n        Referral Fee Schedule\n      </div>\n      <p>During each calendar month, for Qualifying Products sold during sessions initiated through Special Links on your site,\n        you will earn (subject to the other terms of this Agreement) referral fees in accordance with the \"Fee Structure\"\n        described below.\n        <strong>Fee Structure:</strong> Subject to the other terms of this Agreement, you will earn a percentage of Qualifying Revenues\n        (revenues derived by us from customers as a result of sales of Qualifying Product units sold during sessions initiated\n        through Special Links on your site, excluding costs for shipping, handling, gift-wrapping, taxes separately stated\n        and charged to the customer, service charges, rebates, credit card processing fees, returns and bad debt) set forth\n        in the table below that corresponds to the number of such Qualifying Product units sold during sessions initiated\n        through Special Links on your site.</p>\n    </li>\n    <li>\n      <div class=\"question\">\n        Referral Fee Payment\n      </div>\n      <p>We will pay you referral fees on a monthly basis for Qualifying Products shipped in the applicable month. Approximately\n        60 days following the end of each calendar month, based on the payment mode/ option selected by you in your Affiliate\n        Account, we will either:</p>\n      <ol type=\"a\">\n        <li>send you payments via Electronic Funds Transfer (EFT) for the referral fees earned; or</li>\n        <li>send you a gift card good for purchase of Products through the Flipkart.com site, subject to our standard terms or\n          conditions.</li>\n        <p>If you select payment via Flipkart.com site gift card, we will accrue and withhold referral fees until the total\n          amount due is at least INR 250. If you select payment via cheque, we will accrue and withhold referral fees until\n          the total amount due is at least INR 1,000 (subject to all the necessary documents having been submitted by the\n          affiliate to Flipkart for processing payments through EFT)</p>\n        <p>Documents required for EFT payments are as follows:</p>\n        <ol>\n          <li>Scanned Copy of cancelled cheque (same Bank details as mentioned in the Affiliate Account). In case you do not\n            have a cheque, you can send us the scanned copy of the first page of your passbook. However, the IFSC code and\n            the Bank account number should be clearly mentioned on it.</li>\n          <li>Scanned Copy of your/ company PAN card (same name with which you have registered for the Affiliate Account)</li>\n          <li>Completed vendor creation form. Its mandatory to fill all the details for cells marked in yellow.</li>\n          <p>\n            <b>Important:</b> Please mention the same email ID in the form with which you are registered for the affiliate program.</p>\n          <p>Also, if you have registered as an 'Organisation' in the affiliate account, the following 2 additional documents\n            are required:</p>\n          <li>Scanned Copy of your Incorporation Certificate (same company name with which you have registered for the Affiliate\n            Account)</li>\n          <li>Scanned Copy of your Service Tax Registration Certificate (same company name with which you have registered for\n            the Affiliate Account)</li>\n        </ol>\n        <p>Please ensure that all details match with the details mentioned in your Affiliate Account.</p>\n        <p>Document required for Gift Voucher payments are as follows: Scanned Copy of your/ company PAN card (same name with\n          which you have registered for the Affiliate Account).</p>\n        <p>Please note that the referral fees will be processed as per the payment mode selected by you in your affiliate account\n          ('My Account' section) as on the 1st of every month. In case you change your payment mode after the 1st of the\n          month, the new payment mode will be applicable from next month's payment cycle.</p>\n        <p>\n          <b>The referral fee payable to you is inclusive of all taxes including service tax or other tax or levy that you may\n            be required to remit in connection with such services.</b> If required by applicable Indian tax law, we may deduct\n          or withhold income taxes from the referral fees payable to you. If you are an Indian resident, your referral fees\n          payable to you will be subject to a 10% income tax (TDS) withholding subject to providing the PAN; and in case\n          if there is no PAN, referral fees would be subject to a 20% income tax (TDS) withholding. If you are not an Indian\n          resident or have not provided us your PAN (Permanent Account Number), the rate of income tax withholding applicable\n          to you will vary and income tax would be withheld from the referral fees accrued to you on the basis of documents\n          submitted by you which are required as per the provisions of Income Tax of India. If we deduct or withhold income\n          taxes from referral fees payable to you, we will issue to you the relevant withholding tax certificate evidencing\n          deposit of the taxes with the relevant regulatory authorities. If you provide us with a nil or reduced withholding\n          tax certificate, we will apply such nil or reduced tax rate as the applicable withholding tax rate on referral\n          fees payable to you. You hereby agree that you will not pursue any claim against Flipkart or any of its affiliates,\n          and hereby waive all such claims you may now or in the future have, in respect of any income taxes Flipkart deposits\n          with a relevant taxing authority pursuant to the this Operating Agreement.</p>\n      </ol>\n      <li>\n        <div class=\"question\">\n          Policies and Pricing\n        </div>\n        <p>Customers who buy products through this Program will be deemed to be our customers. Accordingly, all of our rules,\n          policies, and operating procedures concerning customer orders, customer service, and product sales will apply to\n          those customers. We may change our policies and operating procedures at any time. For example, we will determine\n          the prices to be charged for products sold under this Program in accordance with our own pricing policies. Product\n          prices and availability may vary from time to time. Because price changes may affect Products that you have listed\n          on your site, your site may only show prices when we serve the link in which those prices are displayed. We will\n          use commercially reasonable efforts to present accurate information, but we cannot guarantee the availability or\n          price of any particular product.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Identifying Yourself as an Affiliate\n        </div>\n        <p>\n          <strong>You may not issue any press release with respect to this Agreement or your participation in the Program; such action\n            may result in your termination from the Program.</strong> You may not in any manner misrepresent or embellish\n          the relationship between us and you, or express or imply any relationship or affiliation between us and you or\n          any other person or entity except as expressly permitted by this Agreement (including by expressing or implying\n          that we support, sponsor, endorse, or contribute money to any charity or other cause).</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Limited License\n        </div>\n        <p>We grant you a nonexclusive, revocable right to use the graphic image and text described in Section 8 and such other\n          text or images for which we grant express permission, solely for the purpose of identifying your site as a Program\n          participant and to assist in generating Product sales. You may not use such image or text in an offline promotion\n          or other offline manner (e.g., in any printed material, mailing or other document). You may not modify the graphic\n          image or text, or any other of our images, in any way. We reserve all of our rights in the graphic image and text,\n          any other images, our trade names and trademarks, and all other intellectual property rights. You agree to follow\n          our Trademark Guidelines, as those guidelines may change from time to time. We may revoke your license at any time\n          by giving you written notice.\n        </p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Responsibility for Your Site\n        </div>\n        <p>You will be solely responsible for the development, operation, and maintenance of your site and for all materials\n          that appear on your site. For example, you will be solely responsible for:</p>\n        <ul>\n          <li>The technical operation of your site and all related equipment</li>\n          <li>Ensuring the display of Special Links on your site does not violate any agreement between you and any third party\n            (including without limitation any restrictions or requirements placed on you by a third party that hosts your\n            site)\n          </li>\n          <li>Creating and posting Product descriptions on your site and linking those descriptions to the Flipkart Site catalog</li>\n          <li>The accuracy and appropriateness of materials posted on your site (including, among other things, all Product-related\n            materials and any information you include within or associate with Special Links)</li>\n          <li>Ensuring that materials posted on your site do not violate or infringe upon the rights of any third party (including,\n            for example, copyrights, trademarks, privacy, or other personal or proprietary rights)</li>\n          <li>Ensuring that materials posted on your site are not libelous or otherwise illegal</li>\n          <li>Ensuring that your site accurately and adequately discloses, either through a privacy policy or otherwise, how\n            you collect, use, store, and disclose data collected from visitors, including, where applicable, that third parties\n            (including advertisers) may serve content and/or advertisements and collect information directly from visitors\n            and may place or recognize cookies on visitors' browsers.</li>\n          <li>We disclaim all liability for these matters. Further, you will indemnify and hold us harmless from all claims,\n            damages, and expenses (including, without limitation, attorneys' fees) relating to the development, operation,\n            maintenance, and contents of your site. We also advise you to strictly abide by the terms narrated in Clause\n            1 above of this terms and conditions and any non-observance of the terms therein shall determine our association\n            with immediate effect.</li>\n        </ul>\n      </li>\n      <li>\n        <div class=\"question\">\n          Compliance with Laws\n        </div>\n        <p>As a condition to your participation in the Program, you agree that while you are a Program participant you will\n          comply with all laws, ordinances, rules, regulations, orders, licenses, permits, judgments, decisions or other\n          requirements of any governmental authority that has jurisdiction over you, whether those laws, etc. are now in\n          effect or later come into effect during the time you are a Program participant. Without limiting the foregoing\n          obligation, you agree that as a condition of your participation in the Program you will comply with all applicable\n          laws (federal, state or otherwise) that govern marketing email and all other anti-spam laws.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Term of the Agreement\n        </div>\n        <p>The term of this Agreement will begin upon our acceptance of your Program Application and will end when terminated\n          by either party. Either you or we may terminate this Agreement at any time, with or without cause, by giving the\n          other party written notice of termination. Upon the termination of this Agreement for any reason, you will immediately\n          cease use of, and remove from your site, all links to the Flipkart Site, and all of our trademarks, trade dress,\n          and logos, and all other materials provided by or on behalf of us to you pursuant hereto or in connection with\n          the Program. You are eligible to earn referral fees only on sales of Qualifying Products that occur during the\n          term, and referral fees earned through the date of termination will remain payable only if the related orders are\n          not canceled or returned. We may withhold your final payment for a reasonable time to ensure that the correct amount\n          is paid. Effect of Termination: Upon termination of this Agreement by either side you will cease to be an affiliate\n          and shall remove all links to the Flipkart site as detailed in clause 12 herein above and non-removal of links\n          and use of all or any of our trademark, trade dress, logos and price are treated as illegal crawling and infringement\n          of our Trademark.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Modification\n        </div>\n        <p>We may modify any of the terms and conditions contained in this Agreement, without prior notice at any time and in\n          our sole discretion, by posting a change notice or a new agreement on the Flipkart Site. Modifications may include,\n          for example, changes in the scope of available referral fees, referral fee schedules, payment procedures, and Program\n          rules. If any modification is unacceptable to you, your only recourse is to terminate this agreement. Your continued\n          participation in the program following our posting of a change notice or new agreement on the flipkart site will\n          constitute binding acceptance of the change.\n        </p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Relationship of Parties\n        </div>\n        <p>You and we are independent contractors, and nothing in this Agreement will create any partnership, joint venture,\n          agency, franchise, sales representative, or employment relationship between the parties. You will have no authority\n          to make or accept any offers or representations on our behalf. You will not make any statement, whether on your\n          site or otherwise, that reasonably would contradict anything in this clause.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Limitation of Liability\n        </div>\n        <p>We will not be liable for indirect, special, or consequential damages (or any loss of revenue, profits, or data)\n          arising in connection with this Agreement or the Program, even if we have been advised of the possibility of such\n          damages. Further, our aggregate liability arising with respect to this Agreement and the Program will not exceed\n          the total referral fees paid or payable to you under this Agreement.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Disclaimers\n        </div>\n        <p>We make no express or implied warranties or representations with respect to the Program or any products sold through\n          the Program (including, without limitation, warranties of fitness, merchantability, non-infringement, or any implied\n          warranties arising out of a course of performance, dealing, or trade usage). In addition, we make no representation\n          that the operation of the Flipkart Site will be uninterrupted or error-free, and we will not be liable for the\n          consequences of any interruptions or errors.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Independent Investigation\n        </div>\n        <p>You acknowledge that you have read this agreement and agree to all its terms and conditions. You understand that\n          we may at any time (directly or indirectly) solicit customer referrals on terms that may differ from those contained\n          in this agreement or operate web sites that are similar to or compete with your web site. You have independently\n          evaluated the desirability of participating in the program and are not relying on any representation, guarantee,\n          or statement other than as set forth in this agreement.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Disputes\n        </div>\n        <p>Any dispute relating in any way to the Program or this Agreement in which the aggregate total claim for relief sought\n          on behalf of one or more parties exceeds INR1,00,000 will be adjudicated in any state or federal court in Bangalore,\n          Karnataka, and you hereby consent to exclusive jurisdiction and venue in those courts. You further acknowledge\n          and agree that our rights in the Content are of a special, unique, extraordinary character, giving them peculiar\n          value, the loss of which cannot be readily estimated and may not be adequately compensated for in monetary damages.</p>\n      </li>\n      <li>\n        <div class=\"question\">\n          Miscellaneous\n        </div>\n        <p>This Agreement will be governed by the laws of the Indian Republic and the state of Karnataka, without reference\n          to rules governing choice of laws. You may not assign this Agreement, by operation of law or otherwise, without\n          our prior written consent. Subject to that restriction, this Agreement will be binding on, inure to the benefit\n          of, and be enforceable against the parties and their respective successors and assigns. Our failure to enforce\n          your strict performance of any provision of this Agreement will not constitute a waiver of our right to subsequently\n          enforce such provision or any other provision of this Agreement.</p>\n      </li>\n  </ol>\n\n<br> </div>\n</div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/components/termsofuse/termsofuse.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/termsofuse/termsofuse.component.ts ***!
  \***************************************************************/
/*! exports provided: TermsofuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsofuseComponent", function() { return TermsofuseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsofuseComponent = /** @class */ (function () {
    function TermsofuseComponent() {
    }
    TermsofuseComponent.prototype.ngOnInit = function () {
    };
    TermsofuseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsofuse',
            template: __webpack_require__(/*! ./termsofuse.component.html */ "./src/app/components/termsofuse/termsofuse.component.html"),
            styles: [__webpack_require__(/*! ./termsofuse.component.css */ "./src/app/components/termsofuse/termsofuse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsofuseComponent);
    return TermsofuseComponent;
}());



/***/ }),

/***/ "./src/app/shared/phoenix.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/phoenix.service.ts ***!
  \*******************************************/
/*! exports provided: PhoenixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoenixService", function() { return PhoenixService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoenixService = /** @class */ (function () {
    function PhoenixService(http) {
        this.http = http;
        this.baseUri = "http://localhost:8080";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    //Get products to display in home page
    PhoenixService.prototype.getProducts = function () {
        return this.http.get(this.baseUri + '/getProducts', { headers: this.headers });
    };
    //signup page
    // createUser(form: NgForm) {
    //   return this.http.post(this.baseUri + '/createUser', form.value, { headers: this.headers });
    // }
    //Validate admin login
    PhoenixService.prototype.getUsers = function (form) {
        return this.http.post(this.baseUri + '/getLogin', form.value, { headers: this.headers });
    };
    //Display all orders in admin dashboard
    PhoenixService.prototype.getOrders = function () {
        return this.http.get(this.baseUri + '/getOrders', { headers: this.headers });
    };
    PhoenixService.prototype.getcompletedOrders = function () {
        return this.http.get(this.baseUri + '/getcompletedOrders', { headers: this.headers });
    };
    PhoenixService.prototype.getopenOrders = function () {
        return this.http.get(this.baseUri + '/getopenOrders', { headers: this.headers });
    };
    //Store the new order details
    PhoenixService.prototype.createOrder = function (h) {
        return this.http.post(this.baseUri + '/createOrder', h, { headers: this.headers });
    };
    //update status of an order
    PhoenixService.prototype.updateOrder = function (cs, id) {
        console.log(cs + " " + id);
        return this.http.put(this.baseUri + '/updateOrder', { 'Pstatus': cs, 'id': id }, { headers: this.headers });
    };
    PhoenixService.prototype.getMemoryFilter = function (size) {
        return this.http.post(this.baseUri + '/memoryFilter', { 'Pram': size }, { headers: this.headers });
    };
    PhoenixService.prototype.setter = function (excess) {
        this.excess = excess;
    };
    PhoenixService.prototype.getter = function () {
        return this.excess;
    };
    PhoenixService.prototype.setForm = function (excess2) {
        this.excess2 = excess2;
    };
    PhoenixService.prototype.getForm = function () {
        return this.excess2;
    };
    PhoenixService.prototype.setstatus = function (status) {
        this.status = status;
    };
    PhoenixService.prototype.getstatus = function () {
        return this.status;
    };
    PhoenixService.prototype.setarray = function (array) {
        console.log(array);
        console.log('hiiii');
        this.array = array;
    };
    PhoenixService.prototype.getarray = function () {
        return this.array;
    };
    PhoenixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PhoenixService);
    return PhoenixService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\MiRACLE SOFTWARE SYSTEMS\E-commerce app\Phoenix-Kart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map