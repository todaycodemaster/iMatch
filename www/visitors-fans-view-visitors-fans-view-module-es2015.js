(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-fans-view-visitors-fans-view-module"],{

/***/ "1soL":
/*!*****************************************************************!*\
  !*** ./src/app/visitors-fans-view/visitors-fans-view.module.ts ***!
  \*****************************************************************/
/*! exports provided: VisitorsFansViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsFansViewPageModule", function() { return VisitorsFansViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _visitors_fans_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors-fans-view-routing.module */ "a/jy");
/* harmony import */ var _visitors_fans_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-fans-view.page */ "ie3+");







let VisitorsFansViewPageModule = class VisitorsFansViewPageModule {
};
VisitorsFansViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visitors_fans_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorsFansViewPageRoutingModule"]
        ],
        declarations: [_visitors_fans_view_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsFansViewPage"]]
    })
], VisitorsFansViewPageModule);



/***/ }),

/***/ "2SiI":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-fans-view/visitors-fans-view.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 20px;\">FANS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n    <div style=\"padding: 10px; display: flex; border-bottom: 2.5px solid #808080a1;\" *ngIf=\"UserInfo\">\r\n      <ion-avatar style=\"height: 57px; width: 57px;border: 1px solid; margin-left: 15px;\">\r\n        <img [src]=\"UserInfo.user_profilepic\" alt=\"\">\r\n      </ion-avatar>\r\n      <ion-label style=\"margin-left: 15px; font-weight: 600; margin-top: 5px;\"> {{UserInfo.username}} </ion-label>\r\n      <p class=\"be-a-fan-text\">BE A FAN</p>\r\n      <img src=\"../../assets/icon/activity/011.png\" alt=\"\" style=\"position: relative; left: 190px;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"padding-left: 25px; font-weight: 600; letter-spacing: 1px;\">\r\n    <p>FANS {{this.myfans.length}} </p>\r\n  </div>\r\n\r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\" *ngFor=\"let fan of myfans\">\r\n    <ion-avatar style=\"height: 50px; width: 50px;\">\r\n      <img [src]=\"fan.pic\" alt=\"\">\r\n    </ion-avatar>\r\n    <ion-label style=\"margin-left: 15px; position: relative; bottom: 10px;\"> {{fan.name}} </ion-label>\r\n    <p style=\"position: absolute; top: 25px; left: 64px; color: grey; font-size: 12px;\"> {{fan.email}} </p>\r\n    <!-- <img src=\"../../assets/icon/cls.png\" alt=\"\" style=\"height: 30px; width: 30px;\"> -->\r\n  </ion-item>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "83gC":
/*!*****************************************************************!*\
  !*** ./src/app/visitors-fans-view/visitors-fans-view.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".be-a-fan-text {\n  position: absolute;\n  left: 95px;\n  top: 26px;\n  background-color: #afafaf5c;\n  height: 22px;\n  padding-left: 5px;\n  padding-top: 2px;\n  width: 60px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #39393cad;\n  border-radius: 5px;\n}\n\n.top-search-icon {\n  position: absolute;\n  right: 30px;\n  color: white;\n  font-size: 1.5rem;\n}\n\n.item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0b3JzLWZhbnMtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUdKIiwiZmlsZSI6InZpc2l0b3JzLWZhbnMtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmUtYS1mYW4tdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA5NXB4O1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjVjO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzOTM5M2NhZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udG9wLXNlYXJjaC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uaXRlbS1zdHlsZXN7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4ICNjY2NjY2U7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzgwODA4MDM4O1xyXG59Il19 */");

/***/ }),

/***/ "a/jy":
/*!*************************************************************************!*\
  !*** ./src/app/visitors-fans-view/visitors-fans-view-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: VisitorsFansViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsFansViewPageRoutingModule", function() { return VisitorsFansViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _visitors_fans_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitors-fans-view.page */ "ie3+");




const routes = [
    {
        path: '',
        component: _visitors_fans_view_page__WEBPACK_IMPORTED_MODULE_3__["VisitorsFansViewPage"]
    }
];
let VisitorsFansViewPageRoutingModule = class VisitorsFansViewPageRoutingModule {
};
VisitorsFansViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitorsFansViewPageRoutingModule);



/***/ }),

/***/ "ie3+":
/*!***************************************************************!*\
  !*** ./src/app/visitors-fans-view/visitors-fans-view.page.ts ***!
  \***************************************************************/
/*! exports provided: VisitorsFansViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsFansViewPage", function() { return VisitorsFansViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visitors_fans_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visitors-fans-view.page.html */ "2SiI");
/* harmony import */ var _visitors_fans_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors-fans-view.page.scss */ "83gC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let VisitorsFansViewPage = class VisitorsFansViewPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.UserInfo = [];
        this.myfans = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.common.route.queryParams.subscribe(resp => {
            this.UserInfo = resp;
            let params = {
                id: this.UserInfo.userid,
            };
            this.common.presentLoading();
            this.common.postMethod('getBestieList', params).then((res) => {
                this.myfans = res.details.fan;
            }, (err) => {
                console.log('Error:', err);
            });
        });
    }
};
VisitorsFansViewPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
VisitorsFansViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitors-fans-view',
        template: _raw_loader_visitors_fans_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitors_fans_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitorsFansViewPage);



/***/ })

}]);
//# sourceMappingURL=visitors-fans-view-visitors-fans-view-module-es2015.js.map