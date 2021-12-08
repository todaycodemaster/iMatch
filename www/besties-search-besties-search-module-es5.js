(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["besties-search-besties-search-module"], {
    /***/
    "9po+":
    /*!*********************************************************!*\
      !*** ./src/app/besties-search/besties-search.module.ts ***!
      \*********************************************************/

    /*! exports provided: BestiesSearchPageModule */

    /***/
    function po(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesSearchPageModule", function () {
        return BestiesSearchPageModule;
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


      var _besties_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./besties-search-routing.module */
      "fP/i");
      /* harmony import */


      var _besties_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./besties-search.page */
      "WO9J");

      var BestiesSearchPageModule = function BestiesSearchPageModule() {
        _classCallCheck(this, BestiesSearchPageModule);
      };

      BestiesSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _besties_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestiesSearchPageRoutingModule"]],
        declarations: [_besties_search_page__WEBPACK_IMPORTED_MODULE_6__["BestiesSearchPage"], _besties_search_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
      })], BestiesSearchPageModule);
      /***/
    },

    /***/
    "K4v7":
    /*!*********************************************************!*\
      !*** ./src/app/besties-search/besties-search.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function K4v7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3RpZXMtc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKIiwiZmlsZSI6ImJlc3RpZXMtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXN0eWxlc3tcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2JjYmNiYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggI2NjY2NjZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwMzg7XHJcbn1cclxuLnNwaW5uZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "WAQv":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/besties-search/besties-search.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WAQv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/besties\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 20px;\">SEARCH BESTIES</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngFor=\" let user of allUsers\">  \r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\">\r\n        <div>\r\n      <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%;\">\r\n        </div>\r\n\r\n    <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n    <div>\r\n      <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; --background: #707072;\"  (click)=\"addToList($event,user.name,user)\">Send Request</ion-button>\r\n    </div>\r\n    <!-- <img src=\"../../assets/icon/add.png\" alt=\"\" style=\"height: 30px; width: 30px;\"> -->\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "WO9J":
    /*!*******************************************************!*\
      !*** ./src/app/besties-search/besties-search.page.ts ***!
      \*******************************************************/

    /*! exports provided: BestiesSearchPage, PopoverComponent */

    /***/
    function WO9J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesSearchPage", function () {
        return BestiesSearchPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_besties_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./besties-search.page.html */
      "WAQv");
      /* harmony import */


      var _besties_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./besties-search.page.scss */
      "K4v7");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var BestiesSearchPage = /*#__PURE__*/function () {
        function BestiesSearchPage(storageservice, popoverController, route, common) {
          var _this = this;

          _classCallCheck(this, BestiesSearchPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.route = route;
          this.common = common;
          this.searchTerm = "";
          this.searching = false;
          this.userDetails = [];
          this.allUsers = [];
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(BestiesSearchPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.listAllUsers();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.storageservice.storage.get('bestieDetails').then(function (val) {
              _this2.bestieDetails = val;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.storage();
            this.setFilteredItems();
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (search) {
              _this3.searching = false;
              _this3.searchTerm = search;

              _this3.setFilteredItems();
            });
          }
        }, {
          key: "storage",
          value: function storage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.storageservice.storage.get('userDetails').then(function (val) {
                        _this4.userDetails = val; // this.user_id = this.userDetails.userid;

                        if (_this4.userDetails) {
                          _this4.common.presentLoading();

                          _this4.listAllUsers();
                        } else {////
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "listAllUsers",
          value: function listAllUsers() {
            var _this5 = this;

            var userid = this.userDetails["userid"];
            var params = {
              userid: userid
            };
            this.common.postMethod('Listusers', params).then(function (res) {
              _this5.allUsers = res.details.name;
            });
          }
        }, {
          key: "onSearchInput",
          value: function onSearchInput(e) {
            this.searching = true;
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems() {
            this.allUsers = this.filterItems(this.searchTerm);
          }
        }, {
          key: "addToList",
          value: function addToList(event, name, user) {
            var _this6 = this;

            if (user.userid != '') {
              var params = {
                req_from: this.userDetails.userid,
                req_to: user.userid,
                category: 'bestie'
              };
              this.common.postMethod('add_bestie', params).then(function (res) {
                if (res.message == "Successfully added as Bestie") {
                  _this6.common.presentToast(name + ' is successfully added to your besties list ...');

                  _this6.common.navCtrl.navigateForward(['besties'], {
                    queryParams: user
                  });
                } else if (res.message == "Already added ") {
                  _this6.common.presentToast(name + ' is already added to your besties list ...');
                }
              });
            } else {/////
            }
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            return this.allUsers.filter(function (user) {
              return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }]);

        return BestiesSearchPage;
      }();

      BestiesSearchPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      };

      BestiesSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-besties-search',
        template: _raw_loader_besties_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_besties_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BestiesSearchPage);

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(popoverController, common, navParams) {
          _classCallCheck(this, PopoverComponent);

          this.popoverController = popoverController;
          this.common = common;
          this.navParams = navParams;
          this.User = [];
          this.userdetails = [];
          this.userdetails = this.navParams.get('key');
          this.User = this.navParams.get('key');
        }

        _createClass(PopoverComponent, [{
          key: "onDismiss",
          value: function onDismiss(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var params;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      try {
                        this.popoverController.dismiss(value);

                        if (value == 'bestie') {
                          params = {
                            // from : userdetails.userid,
                            // to : ,
                            category: 'bestie'
                          }; // this.common.router.navigate(['/profile']); 
                        } else if (value == 'squad') {// this.common.router.navigate(['/besties']); 
                        } else if (value == 'fan') {// this.common.router.navigate(['/squad-list']);
                        } else if (value == '') {// this.common.router.navigate(['/fans-of']);
                        } else if (value == 'match') {// this.common.navCtrl.navigateForward(['/tabs/tab1']);
                        }
                      } catch (e) {
                        console.log(e); //click more than one time popover throws error, so ignore...
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavParams"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        template: "\n        <ion-list mode=\"ios\">\n            <ion-item (click)=\"onDismiss('bestie')\">Add to Bestie</ion-item>\n            <ion-item (click)=\"onDismiss('squad')\">Add to Squad</ion-item>\n            <ion-item (click)=\"onDismiss('fan')\">Add to Fan</ion-item>\n            <ion-item (click)=\"onDismiss('')\">Add to Fans Of</ion-item>\n            <ion-item (click)=\"onDismiss('match')\">Invite for Match</ion-item>\n        </ion-list>\n    "
      })], PopoverComponent);
      /***/
    },

    /***/
    "fP/i":
    /*!*****************************************************************!*\
      !*** ./src/app/besties-search/besties-search-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BestiesSearchPageRoutingModule */

    /***/
    function fPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesSearchPageRoutingModule", function () {
        return BestiesSearchPageRoutingModule;
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


      var _besties_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./besties-search.page */
      "WO9J");

      var routes = [{
        path: '',
        component: _besties_search_page__WEBPACK_IMPORTED_MODULE_3__["BestiesSearchPage"]
      }, {
        path: '',
        component: _besties_search_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
      }];

      var BestiesSearchPageRoutingModule = function BestiesSearchPageRoutingModule() {
        _classCallCheck(this, BestiesSearchPageRoutingModule);
      };

      BestiesSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BestiesSearchPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=besties-search-besties-search-module-es5.js.map