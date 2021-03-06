(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["besties-besties-module"],{

/***/ "BCzL":
/*!*******************************************!*\
  !*** ./src/app/besties/besties.module.ts ***!
  \*******************************************/
/*! exports provided: BestiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesPageModule", function() { return BestiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _besties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./besties-routing.module */ "KENN");
/* harmony import */ var _besties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./besties.page */ "Wamc");







let BestiesPageModule = class BestiesPageModule {
};
BestiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _besties_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestiesPageRoutingModule"]
        ],
        declarations: [_besties_page__WEBPACK_IMPORTED_MODULE_6__["BestiesPage"]]
    })
], BestiesPageModule);



/***/ }),

/***/ "DRzt":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/besties/besties.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- -- besties page design -- -->\r\n\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar style=\"--background: #707072;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"ios\" style=\"color: white;\r\n    font-size: 15px;\" *ngIf=\"userDetails\">\r\n    <div  class=\"top-number\">\r\n      <span>{{userDetails.bestie_count}}</span>\r\n    </div>\r\n      BESTIES\r\n\r\n      <img *ngIf=\"userDetails.profile_pic != '' || userDetails.profile_pic != null || userDetails.profile_pic != undefined\" [src]=userDetails.profile_pic alt=\"\" class=\"top-profile-pic\" style=\"background-color: white;\" (click)=\"gotoProfile()\">\r\n\r\n      <!-- <ion-icon name=\"caret-down-outline\" class=\"top-drop-icon\"></ion-icon> -->\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <!-- <ion-grid> -->\r\n    <ion-row *ngIf=\"bestieDetails\">\r\n\r\n      <div class=\"top-container-style\">\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar class=\"person-profile-img\">\r\n            <img *ngIf=\"bestieDetails.pic != '' || bestieDetails.pic != null || bestieDetails.pic != undefined\" [src]=\"bestieDetails.pic\" alt=\"\">\r\n          </ion-avatar>\r\n          <!-- <ion-label class=\"person-name-text\">Pritty Kavitha</ion-label> -->\r\n          <ion-label class=\"person-name-text\"> {{bestieDetails.name}} </ion-label>\r\n\r\n\r\n          <ion-chip slot=\"end\" class=\"top-chip-styles\" (click)=\"addMoreBesties()\">\r\n            <!-- <img src=\"../../assets/icon/add.png\" alt=\"\" class=\"add-more-icon\"> -->\r\n            <ion-icon name=\"add-circle\" class=\"add-more-icon\"></ion-icon>\r\n            <ion-label class=\"chip-label-text\">ADD MORE BESTIE</ion-label>\r\n          </ion-chip>\r\n\r\n        </ion-item>\r\n\r\n      </div>\r\n\r\n    </ion-row>\r\n    <div>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #ee1809 , #8a5a5a); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourStory\">\r\n        <ion-card-header style=\"color: white;\">OUR STORY</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoOurStory()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourStory.story?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #0a0700 , #595d5e); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourSlogan\">\r\n        <ion-card-header style=\"color: white;\">OUR FAVOURITE WORD / SLOGAN</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoOurSlogan()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourSlogan[0]?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #e39b09 , #787570); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourLetter\">\r\n        <ion-card-header style=\"color: white;\">A LETTER TO MY BEST FRIEND</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoLetter()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourLetter[0]?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <div style=\"display: flex; padding: 7px;\">\r\n      <div style=\"text-align: center;\">\r\n        <ion-card class=\"bottom-card\">\r\n          <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n            <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[0]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n          </div>\r\n          <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n          <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n          <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n        </ion-card>\r\n      </div>\r\n      <div style=\"text-align: center;\">\r\n        <ion-card class=\"bottom-card\">\r\n          <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n            <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[1]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n          </div>\r\n          <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n          <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n          <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n        </ion-card>\r\n      </div>\r\n      <div style=\"text-align: center;\">\r\n        <ion-card class=\"bottom-card\">\r\n          <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n            <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[2]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n          </div>           \r\n            <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n          <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n          <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; justify-content: flex-end; margin: 15px 0px 15px;\">\r\n      <img *ngIf=\"CountDetails\" src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\"height: 20px; margin-right: 5px; position: relative; top: 7px;\"  (click)=\"ToLikeBesties()\"> \r\n      <span style=\"margin-right: 10px; position: relative; top: 7px; font-size: 12px;\"> {{bestieDetails.like_count}} </span>\r\n      <img *ngIf=\"CountDetails\" src=\"../../assets/icon/com.png\" alt=\"\" style=\"height: 20px; margin-right: 5px; position: relative; top: 7px;\" (click)=\"GoToBestiesComment()\"> \r\n      <span style=\"margin-right: 10px; position: relative; top: 7px; font-size: 12px;\"> {{bestieDetails.comment_count}} </span>\r\n      <ion-button *ngIf=\"isDisable==true\" style=\"text-transform: none; margin-right: 10px;\" size=\"small\" shape=\"round\" (click)=\"ToDisableComment($event, 'disable')\">Disable Comment</ion-button>\r\n      <ion-button *ngIf=\"isDisable==false\" style=\"text-transform: none; margin-right: 10px; --background: #707072; color: black;\" size=\"small\" shape=\"round\" (click)=\"ToDisableComment($event, 'enable')\">Enable Comment</ion-button>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "JcBW":
/*!*******************************************!*\
  !*** ./src/app/besties/besties.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-profile-pic {\n  height: 46px;\n  width: 46px;\n  border-radius: 50%;\n  border: 1px solid white;\n  position: absolute;\n  right: 20px;\n  bottom: 6px;\n}\n\n.top-number {\n  border-radius: 50%;\n  background-color: white;\n  color: #707072;\n  font-size: small;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  margin-right: 10px;\n  left: 115px;\n}\n\n.top-drop-icon {\n  position: absolute;\n  right: 30px;\n  color: white;\n}\n\n.top-container-style {\n  width: 100%;\n  border-bottom: 3px solid #0000002e;\n}\n\n.chip-label-text {\n  color: white;\n  font-size: 9px;\n  position: absolute;\n  right: 9px;\n}\n\n.person-profile-img {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  margin-right: 10px;\n}\n\n.person-name-text {\n  font-size: small;\n  font-weight: 700;\n}\n\n.near-card-header-img {\n  height: 15px;\n  float: right;\n  width: 15px;\n  position: relative;\n  bottom: 38px;\n  right: 5px;\n}\n\n.bottom-card-small-img {\n  border-radius: 11px;\n  height: 105px;\n  width: 87px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bottom-card {\n  border-radius: 10px;\n  line-height: 0px;\n  margin: 4px;\n  background-color: #d2d2d4;\n}\n\n.inside-card-upload-img {\n  height: 35px;\n  width: 35px;\n  position: relative;\n  bottom: 20px;\n}\n\n.card-header-text {\n  position: absolute;\n  font-size: x-small;\n  color: black;\n  bottom: 16px;\n  left: 30px;\n  text-align: center;\n}\n\n.text-below-card-header {\n  color: black;\n  font-size: smaller;\n  font-weight: 700;\n  position: relative;\n  bottom: 7px;\n}\n\n.add-more-icon {\n  font-size: x-large;\n  position: relative;\n  right: 6px;\n}\n\n.top-chip-styles {\n  background-color: #707072;\n  width: 118px;\n  height: 26px;\n  border: 1px solid black;\n}\n\n.my-custom-class {\n  top: 140px;\n  left: 60px;\n  transform-origin: right top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3RpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUE0RUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBekVKIiwiZmlsZSI6ImJlc3RpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0gYmVzdGllcyBwYWdlIHN0eWxlcyAtLSBcclxuXHJcbi50b3AtcHJvZmlsZS1waWN7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDZweDtcclxufVxyXG4udG9wLW51bWJlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM3MDcwNzI7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxufVxyXG4udG9wLWRyb3AtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50b3AtY29udGFpbmVyLXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDAwMDJlO1xyXG59XHJcbi5jaGlwLWxhYmVsLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbn1cclxuLnBlcnNvbi1wcm9maWxlLWltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubmVhci1jYXJkLWhlYWRlci1pbWd7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzhweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbn1cclxuLmJvdHRvbS1jYXJkLXNtYWxsLWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgd2lkdGg6IDg3cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmJvdHRvbS1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDQ7XHJcbn1cclxuLmluc2lkZS1jYXJkLXVwbG9hZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxufVxyXG4uY2FyZC1oZWFkZXItdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtYmVsb3ctY2FyZC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbn1cclxuLmFkZC1tb3JlLWljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNnB4O1xyXG59XHJcbi50b3AtY2hpcC1zdHlsZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgd2lkdGg6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8vIC0tIGJlc3RpZXMtdXNlci12aWV3LXBhZ2Ugc3R5bGVzIC0tXHJcblxyXG4vLyAudG9wLXByb2ZpbGUtcGlje1xyXG4vLyAgICAgaGVpZ2h0OiA0NnB4O1xyXG4vLyAgICAgd2lkdGg6IDQ2cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA1MHB4O1xyXG4vLyAgICAgYm90dG9tOiA2cHg7XHJcbi8vIH1cclxuLy8gLnRvcC1udW1iZXJ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGNvbG9yOiAjNzA3MDcyO1xyXG4vLyAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuLy8gICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMTM1cHg7XHJcbi8vICAgICBib3R0b206IDE2cHg7XHJcbi8vIH1cclxuLy8gLnRvcC1kcm9wLWljb257XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMzBweDtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG4vLyAudG9wLWNvbnRhaW5lci1zdHlsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDAwMDAyZTtcclxuLy8gfVxyXG5cclxuLy8gLnBlcnNvbi1wcm9maWxlLWltZ3tcclxuLy8gICAgIGhlaWdodDogNTVweDtcclxuLy8gICAgIHdpZHRoOiA1NXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuLy8gLnBlcnNvbi1uYW1lLXRleHR7XHJcbi8vICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gfVxyXG5cclxuLy8gLmJvdHRvbS1jYXJkLXNtYWxsLWltZ3tcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbi8vICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4vLyAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyB9XHJcbi8vIC5ib3R0b20tY2FyZHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4vLyAgICAgbWFyZ2luOiA1cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQ0O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDVweDtcclxuLy8gfVxyXG4vLyAuYWRkLW1vcmUtaWNvbntcclxuLy8gICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgIHdpZHRoOiAzMHB4O1xyXG5cclxuLy8gfVxyXG4vLyAucGxheS1idXR0b24taW5zaWRlLWNhcmR7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDMzcHg7XHJcbi8vICAgICBsZWZ0OiAzNXB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzNXB4O1xyXG4vLyAgICAgd2lkdGg6IDM1cHg7XHJcbi8vIH1cclxuLy8gLmxhc3QtY29udGFpbmVye1xyXG4vLyAgICAgd2lkdGg6IDE0NXB4O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gfVxyXG4vLyAubGFzdC1jb2xze1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDYxO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcbi8vIC5sYXN0LWNvbC10ZXh0e1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm90dG9tOiAzcHg7XHJcbi8vICAgICBsZWZ0OiAzcHg7XHJcbi8vIH1cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgdG9wOiAxNDBweDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "KENN":
/*!***************************************************!*\
  !*** ./src/app/besties/besties-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BestiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesPageRoutingModule", function() { return BestiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _besties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./besties.page */ "Wamc");




const routes = [
    {
        path: '',
        component: _besties_page__WEBPACK_IMPORTED_MODULE_3__["BestiesPage"]
    }
];
let BestiesPageRoutingModule = class BestiesPageRoutingModule {
};
BestiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BestiesPageRoutingModule);



/***/ }),

/***/ "Wamc":
/*!*****************************************!*\
  !*** ./src/app/besties/besties.page.ts ***!
  \*****************************************/
/*! exports provided: BestiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesPage", function() { return BestiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_besties_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./besties.page.html */ "DRzt");
/* harmony import */ var _besties_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./besties.page.scss */ "JcBW");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/config */ "82od");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");









const { Camera, Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"];






// import { copyFileSync } from 'fs';
let BestiesPage = class BestiesPage {
    constructor(storageservice, popoverController, actionSheetController, fileChooser, transfer, filePath, mediaCapture, formbuilder, common) {
        this.storageservice = storageservice;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.mediaCapture = mediaCapture;
        this.formbuilder = formbuilder;
        this.common = common;
        this.userDetails = [];
        this.ourStory = [];
        this.ourSlogan = [];
        this.ourLetter = [];
        this.bestieDetails = [];
        this.MediaFiles = [];
        this.isDisable = true;
        this.CountDetails = [];
        this.CommentStatus = [];
        this.common.route.queryParams.subscribe((resp) => {
            this.bestieDetails = resp;
        });
        // this.showTextContent();
    }
    ngOnInit() {
        // this.storageservice.setStorage('isDisable',1);
    }
    ionViewWillEnter() {
        this.GetStorageDetails();
        this.GetEnableDisableCommStatus();
    }
    GetStorageDetails() {
        this.storageservice.storage.get("userDetails").then((val) => {
            this.userDetails = val;
            console.log(val);
            this.GetPageContent();
        });
    }
    GetPageContent() {
        let params = {
            userid: this.userDetails.userid,
            senderid: this.bestieDetails.userid
        };
        this.common.postMethod("GetStatus", params).then((res) => {
            if (res.message === "success") {
                this.CountDetails = res;
                this.ourStory = res.details.story;
                this.ourSlogan = res.details.slogan;
                this.ourLetter = res.details.letter;
                this.MediaFiles = res.link;
                return;
            }
        }, (err) => {
            console.log("Error:", err);
        });
    }
    GetEnableDisableCommStatus() {
        this.storageservice.storage.get("isDisable").then((val) => {
            this.CommentStatus = val;
            if (this.CommentStatus == 0) {
                this.isDisable = false;
                return;
            }
            if (this.CommentStatus == 1) {
                this.isDisable = true;
                return;
            }
        });
    }
    showTextContent() {
        this.storageservice.storage.get("userDetails").then((val) => {
            this.userDetails = val;
            if (this.userDetails.userid != "") {
                this.common.presentToast("??? Please wait . we are fetching your updates");
                let params = {
                    userid: this.userDetails.userid,
                    senderid: this.bestieDetails.userid,
                };
                this.common.postMethod("GetStatus", params).then((res) => {
                    if (res.message == "success") {
                        this.CountDetails = res;
                        this.ourStory = res.details.story;
                        this.ourSlogan = res.details.slogan;
                        this.ourLetter = res.details.letter;
                        this.MediaFiles = res.link;
                    }
                    else if ((res.message = "failed")) {
                        this.ourStory = res.details;
                        this.ourSlogan = res.details;
                        this.ourLetter = res.details;
                    }
                });
            }
            else {
                this.common.presentToast("?????? Something went wrong ...");
            }
        });
    }
    ToLikeBesties() {
        let params = {
            userid: this.userDetails.userid,
            bestieid: this.bestieDetails.userid,
        };
        this.common.postMethod("bestielike", params).then((res) => {
            if (res.status == true) {
                this.GetPageContent();
            }
        }, (err) => {
            console.log("err:", err);
        });
    }
    ToDisableComment(e, status) {
        if (status === "disable") {
            this.isDisable = false;
            this.storageservice.setStorage("isDisable", 0);
        }
        else {
            this.isDisable = true;
        }
    }
    GoToBestiesComment() {
        this.common.navCtrl.navigateForward(["besties-comment"], {
            queryParams: this.bestieDetails,
        });
    }
    addMoreBesties() {
        this.common.navCtrl.navigateForward(["/besties-search"], {
            queryParams: this.bestieDetails,
        });
    }
    gotoBestiesCount() {
        this.common.navCtrl.navigateForward(["/besties-before"]);
    }
    gotoOurStory() {
        this.common.navCtrl.navigateForward(["/our-story"], {
            queryParams: this.bestieDetails,
        });
    }
    gotoOurSlogan() {
        this.common.navCtrl.navigateForward(["/our-slogan"], {
            queryParams: this.bestieDetails,
        });
    }
    gotoLetter() {
        this.common.navCtrl.navigateForward(["/letter"], {
            queryParams: this.bestieDetails,
        });
    }
    gotoProfile() {
        this.common.router.navigate(["/tabs/tab7"]);
    }
    PresentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: "my-custom-class",
                header: " File format must be MP4, PNG, JPG , JPEG",
                buttons: [
                    {
                        text: "Other Files",
                        icon: "folder-open",
                        handler: () => {
                            this.pickDocuments();
                        },
                    },
                    {
                        text: "Capture Image",
                        icon: "camera",
                        handler: () => {
                            this.captureImage();
                            // this.isImage = true;
                        },
                    },
                    {
                        text: "Capture Video",
                        icon: "videocam",
                        handler: () => {
                            this.captureVideo();
                            // this.isVideo = true;
                        },
                    },
                    {
                        text: "Cancel",
                        icon: "close",
                        role: "cancel",
                        handler: () => {
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    captureImage() {
        // this.isMedia = true;
        const options = { limit: 1 };
        this.mediaCapture.captureImage(options).then((data) => {
            // this.isImage = true;
            this.uploadFile2(data[0], "image");
        }, (err) => console.error(err));
    }
    captureVideo() {
        // this.isMedia = true;
        const options = { limit: 1, duration: 2, quality: 80 };
        this.mediaCapture.captureVideo(options).then((data) => {
            // this.isVideo = true;
            this.uploadFile2(data[0], "video");
        }, (err) => console.error(err));
    }
    pickDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.isMedia = true;
            let file;
            this.fileChooser
                .open()
                .then((uri) => {
                this.filePath
                    .resolveNativePath(uri)
                    .then((filePath) => {
                    let fileNameFromPath = filePath.substring(filePath.lastIndexOf("/") + 1);
                    let currentName = uri.substring(uri.lastIndexOf("/") + 1, uri.lastIndexOf("?"));
                    file = {
                        name: fileNameFromPath,
                        fullPath: filePath,
                    };
                    this.uploadFile2(file, "file");
                })
                    .catch((err) => console.log(err));
            })
                .catch((e) => console.log(e));
        });
    }
    uploadFile2(file, type) {
        // this.isDummyImage = false;
        let options;
        options = {
            fileKey: "matchfile",
            fileName: file.name,
            httpMethod: "POST",
            mimeType: "multipart/form-data",
            chunkedMode: false,
            params: {
                matchid: "",
                userid: this.userDetails.userid,
                upload_id: 0,
            },
            headers: {
                Connection: "close",
            },
        };
        let filePath;
        if (type !== "audio") {
            filePath = encodeURI(file.fullPath);
        }
        else {
            filePath = file.fullPath;
        }
        this.common.showLoader();
        const fileTransfer = this.transfer.create();
        const fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + "iMatch/api/v1/MatchFileUpload";
        fileTransfer.onProgress((e) => {
            let prg = e.lengthComputable
                ? Math.round((e.loaded / e.total) * 100)
                : -1;
            this.common.presentToast("Uploaded " + prg + "% of file");
        });
        fileTransfer.upload(filePath, fileUplaodUrl, options).then((data) => {
            let res = JSON.parse(data.response);
            if (res.status == true) {
                this.ionViewWillEnter();
                // this.FileTransferResponse = res.upload_details;
            }
            else {
                console.log("File Transfer Error");
            }
            this.common.hideLoader();
        }, (err) => {
            console.log("File Transfer Error:", err);
        });
    }
    toUploadImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 60,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["CameraResultType"].Base64,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["CameraSource"].Photos,
            });
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            this.uploadImage(blobData, image.format).subscribe((newImage) => {
                this.showTextContent();
            }, (err) => {
                console.log(err);
            });
        });
    }
    b64toBlob(b64Data, contentType = "", sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    uploadImage(blobData, ext) {
        const formData = new FormData();
        formData.append("userfile", blobData, `myimage.${ext}`);
        formData.append("userid", this.userDetails.userid);
        formData.append("send_to", this.bestieDetails.userid);
        this.common.presentLoading();
        return this.common.http.post(`${_services_config__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + "iMatch/api/v1/Upload_File"}`, formData);
    }
};
BestiesPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__["MediaCapture"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
BestiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-besties",
        template: _raw_loader_besties_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_besties_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BestiesPage);



/***/ })

}]);
//# sourceMappingURL=besties-besties-module-es2015.js.map