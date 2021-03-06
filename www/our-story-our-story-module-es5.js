(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-story-our-story-module"], {
    /***/
    "CB82":
    /*!*********************************************!*\
      !*** ./src/app/our-story/our-story.page.ts ***!
      \*********************************************/

    /*! exports provided: OurStoryPage */

    /***/
    function CB82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OurStoryPage", function () {
        return OurStoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_our_story_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./our-story.page.html */
      "Rix/");
      /* harmony import */


      var _our_story_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./our-story.page.scss */
      "DEY7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");

      var OurStoryPage = /*#__PURE__*/function () {
        function OurStoryPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, OurStoryPage);

          this.storageservice = storageservice;
          this.common = common;
          this.userDetails = [];
          this.bestieDetails = [];
          this.common.route.queryParams.subscribe(function (resp) {
            _this.bestieDetails = resp;
          });
        }

        _createClass(OurStoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.GetStoredUserDetails();
          }
        }, {
          key: "GetStoredUserDetails",
          value: function GetStoredUserDetails() {
            var _this2 = this;

            this.storageservice.storage.get("userDetails").then(function (val) {
              _this2.userDetails = val;

              _this2.GetUserStory();
            });
          }
        }, {
          key: "GetUserStory",
          value: function GetUserStory() {
            var _this3 = this;

            var params = {
              userid: this.userDetails.userid,
              senderid: this.bestieDetails.userid
            };
            this.common.postMethod("GetStatus", params).then(function (res) {
              _this3.userStory = res.details.story[0].text;
            }, function (err) {
              console.log("Error:", err);
            });
          }
        }, {
          key: "SubmitUserStory",
          value: function SubmitUserStory() {
            var _this4 = this;

            if (this.userStory != "" && this.userStory != undefined) {
              var params = {
                userid: this.userDetails.userid,
                category: "story",
                text: this.userStory,
                send_to: this.bestieDetails.userid
              };
              this.common.postMethod("statusbar", params).then(function (res) {
                if (res.status == true) {
                  _this4.userStory = "";

                  _this4.common.presentToast(" ???  Your Our Story Content Updated Successfully ...");

                  _this4.common.router.navigate(["besties"], {
                    queryParams: _this4.bestieDetails
                  });
                }
              }, function (err) {
                console.log("Error:", err);
              });
            } else {
              this.common.showAlert("You cannot send an empty story!");
            }
          }
        }]);

        return OurStoryPage;
      }();

      OurStoryPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      OurStoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-our-story",
        template: _raw_loader_our_story_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_our_story_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OurStoryPage);
      /***/
    },

    /***/
    "DEY7":
    /*!***********************************************!*\
      !*** ./src/app/our-story/our-story.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function DEY7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".textarea {\n  padding: 8px;\n  background-color: #a9a9a985;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG91ci1zdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im91ci1zdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTg1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC8vIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "GXVL":
    /*!*******************************************************!*\
      !*** ./src/app/our-story/our-story-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: OurStoryPageRoutingModule */

    /***/
    function GXVL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OurStoryPageRoutingModule", function () {
        return OurStoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _our_story_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./our-story.page */
      "CB82");

      var routes = [{
        path: '',
        component: _our_story_page__WEBPACK_IMPORTED_MODULE_3__["OurStoryPage"]
      }];

      var OurStoryPageRoutingModule = function OurStoryPageRoutingModule() {
        _classCallCheck(this, OurStoryPageRoutingModule);
      };

      OurStoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OurStoryPageRoutingModule);
      /***/
    },

    /***/
    "OWlh":
    /*!***********************************************!*\
      !*** ./src/app/our-story/our-story.module.ts ***!
      \***********************************************/

    /*! exports provided: OurStoryPageModule */

    /***/
    function OWlh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OurStoryPageModule", function () {
        return OurStoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _our_story_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./our-story-routing.module */
      "GXVL");
      /* harmony import */


      var _our_story_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./our-story.page */
      "CB82");

      var OurStoryPageModule = function OurStoryPageModule() {
        _classCallCheck(this, OurStoryPageModule);
      };

      OurStoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _our_story_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurStoryPageRoutingModule"]],
        declarations: [_our_story_page__WEBPACK_IMPORTED_MODULE_6__["OurStoryPage"]]
      })], OurStoryPageModule);
      /***/
    },

    /***/
    "Rix/":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-story/our-story.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <div style=\"text-align: center; position: relative; right: 25px;\">\r\n    <ion-title>OUR STORY</ion-title>\r\n   </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n\r\n    <div style=\"margin: 20px;\">\r\n      <ion-textarea  type=\"text\" [(ngModel)]=\"userStory\" autocapitalize=\"true\" auto-grow=\"true\" class=\"textarea\" placeholder=\"What is on your mind .....\"></ion-textarea>\r\n    </div>\r\n\r\n    <div style=\"text-align: center;\">\r\n      <ion-button size=\"small\" shape=\"round\" style=\"text-transform: none;\" (click)=\"SubmitUserStory()\">Save</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=our-story-our-story-module-es5.js.map