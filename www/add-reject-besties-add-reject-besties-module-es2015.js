(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-reject-besties-add-reject-besties-module"],{

/***/ "8Ign":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-reject-besties/add-reject-besties.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 25px;\">BESTIES INVITATIONS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <div style=\"padding: 10px;\" *ngFor=\"let invitation of BestiesInvitation; let i = index;\">\r\n      <div style=\"border-top: 30px solid #f21908; border-radius: 13px 13px 5px 5px; box-shadow: 1px 1px 5px 1px grey; background-color: #f21908;\">\r\n        <div style=\"padding: 15px; border-radius: 13px 13px 5px 5px; background-color: white;\">\r\n          <div style=\"display: flex; justify-content: space-between;\">\r\n            <div>\r\n              <h5 style=\"font-weight: 600;\">Hi! {{this.userDetails.name}}</h5>\r\n              <span>{{invitation.message}} </span>\r\n            </div>\r\n            <div style=\"text-align: center;\">\r\n              <img src=\"{{invitation.pic}}\" alt=\"\" style=\"height: 55px; width: 55px; border-radius: 50%; border: 1px solid #707070\">\r\n              <p style=\"margin: 0px; font-weight: 600; font-size: 13px;\">{{invitation.name}}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 15px;\">\r\n            <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; --background: #ffc107; color: black;\"\r\n              (click)=\"updateInvitation($event, invitation, '1')\">\r\n              Add As Bestie</ion-button>\r\n            <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; --background: #707072; color: black;\"\r\n              (click)=\"updateInvitation($event, invitation, '2')\">\r\n              Reject Invitation</ion-button>\r\n            <!-- <ion-button shape=\"round\" size=\"small\" fill=\"outline\" style=\"text-transform: none; color: black;\"\r\n              (click)=\"BlockTheUser($event, invitation, i)\">Block This user\r\n            </ion-button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "Jpob":
/*!***************************************************************!*\
  !*** ./src/app/add-reject-besties/add-reject-besties.page.ts ***!
  \***************************************************************/
/*! exports provided: AddRejectBestiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRejectBestiesPage", function() { return AddRejectBestiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_reject_besties_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-reject-besties.page.html */ "8Ign");
/* harmony import */ var _add_reject_besties_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reject-besties.page.scss */ "MEcG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let AddRejectBestiesPage = class AddRejectBestiesPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.BestiesInvitation = [];
        this.userDetails = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.GetStoredUserDetails();
    }
    GetStoredUserDetails() {
        this.storageservice.storage.get("userDetails").then((val) => {
            this.userDetails = val;
            this.GetBestieInvitations();
        });
    }
    GetBestieInvitations() {
        let params = {
            receiver_id: this.userDetails.userid,
            notification_status: 'Add_bestie',
            read_status: '1'
        };
        this.common.postMethod("getNotifications", params).then((res) => {
            this.BestiesInvitation = res.details;
        }, (err) => {
            console.log("Error:", err);
        });
    }
    updateInvitation(e, invitation, status) {
        let params = {
            request_id: invitation.request_id,
            read_status: "1",
            req_status: status,
            not_id: invitation.not_id,
            type: invitation.notification_status
        };
        this.common.postMethod("setNotificationRead", params).then((res) => {
            if (res.status === true) {
                this.GetBestieInvitations();
            }
        }, (err) => {
            console.log("Error:", err);
        });
    }
    BlockTheUser(e, invitaion, i) {
        let params = {
            request_id: '',
            status: 'block'
        };
        this.common.postMethod("abc", params).then((res) => {
            if (res.status === true) {
                this.GetBestieInvitations();
            }
        }, (err) => {
            console.log("Error:", err);
        });
    }
};
AddRejectBestiesPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
AddRejectBestiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-reject-besties",
        template: _raw_loader_add_reject_besties_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_reject_besties_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddRejectBestiesPage);



/***/ }),

/***/ "MEcG":
/*!*****************************************************************!*\
  !*** ./src/app/add-reject-besties/add-reject-besties.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1yZWplY3QtYmVzdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtcmVqZWN0LWJlc3RpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufSJdfQ== */");

/***/ }),

/***/ "U5Cs":
/*!*************************************************************************!*\
  !*** ./src/app/add-reject-besties/add-reject-besties-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddRejectBestiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRejectBestiesPageRoutingModule", function() { return AddRejectBestiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _add_reject_besties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-reject-besties.page */ "Jpob");




const routes = [
    {
        path: '',
        component: _add_reject_besties_page__WEBPACK_IMPORTED_MODULE_3__["AddRejectBestiesPage"]
    }
];
let AddRejectBestiesPageRoutingModule = class AddRejectBestiesPageRoutingModule {
};
AddRejectBestiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddRejectBestiesPageRoutingModule);



/***/ }),

/***/ "b4cN":
/*!*****************************************************************!*\
  !*** ./src/app/add-reject-besties/add-reject-besties.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddRejectBestiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRejectBestiesPageModule", function() { return AddRejectBestiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _add_reject_besties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-reject-besties-routing.module */ "U5Cs");
/* harmony import */ var _add_reject_besties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-reject-besties.page */ "Jpob");







let AddRejectBestiesPageModule = class AddRejectBestiesPageModule {
};
AddRejectBestiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_reject_besties_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddRejectBestiesPageRoutingModule"]
        ],
        declarations: [_add_reject_besties_page__WEBPACK_IMPORTED_MODULE_6__["AddRejectBestiesPage"]]
    })
], AddRejectBestiesPageModule);



/***/ })

}]);
//# sourceMappingURL=add-reject-besties-add-reject-besties-module-es2015.js.map