(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open-match-open-match-module"], {
    /***/
    "WR6E":
    /*!*********************************************************!*\
      !*** ./src/app/open-match/open-match-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OpenMatchPageRoutingModule */

    /***/
    function WR6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenMatchPageRoutingModule", function () {
        return OpenMatchPageRoutingModule;
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


      var _open_match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./open-match.page */
      "f9+U");

      var routes = [{
        path: '',
        component: _open_match_page__WEBPACK_IMPORTED_MODULE_3__["OpenMatchPage"]
      }, {
        path: '',
        component: _open_match_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
      }];

      var OpenMatchPageRoutingModule = function OpenMatchPageRoutingModule() {
        _classCallCheck(this, OpenMatchPageRoutingModule);
      };

      OpenMatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OpenMatchPageRoutingModule);
      /***/
    },

    /***/
    "f9+U":
    /*!***********************************************!*\
      !*** ./src/app/open-match/open-match.page.ts ***!
      \***********************************************/

    /*! exports provided: OpenMatchPage, PopoverComponent */

    /***/
    function f9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenMatchPage", function () {
        return OpenMatchPage;
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


      var _raw_loader_open_match_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./open-match.page.html */
      "vFzZ");
      /* harmony import */


      var _open_match_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./open-match.page.scss */
      "tCyL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var OpenMatchPage = /*#__PURE__*/function () {
        function OpenMatchPage(storageservice, popoverController, common) {
          var _this = this;

          _classCallCheck(this, OpenMatchPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.common = common;
          this.userDetails = [];
          this.openMatches = [];
          this.OpenMatchImage = [];
          this.OpenMatchAudio = [];
          this.OpenMatchVideo = [];
          this.OpenMatchLink = [];
          this.OpenMatchText = [];
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;
            _this.personalMatchSlideIndex = _this.userDetails.personalMatchSlideIndex;
          });
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(OpenMatchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  userid: _this2.userDetails.userid
                };

                _this2.common.postMethod('OpenMatch', params).then(function (res) {
                  //  this.openMatches = res.details.image;
                  _this2.OpenMatchImage = res.details.image;
                  _this2.OpenMatchAudio = res.details.audio;
                  _this2.OpenMatchVideo = res.details.video;
                  _this2.OpenMatchLink = res.details.link;
                  _this2.OpenMatchText = res.details.text;

                  _this2.slides.slideTo(_this2.personalMatchSlideIndex);

                  if (_this2.OpenMatchAudio != null && _this2.OpenMatchAudio.length !== 0) {
                    for (var i = 0; i < _this2.OpenMatchAudio.length; i++) {
                      _this2.openMatches.push(_this2.OpenMatchAudio[i]);
                    }
                  }

                  if (_this2.OpenMatchImage != null && _this2.OpenMatchImage.length !== 0) {
                    for (var _i = 0; _i < _this2.OpenMatchImage.length; _i++) {
                      _this2.openMatches.push(_this2.OpenMatchImage[_i]);
                    }
                  }

                  if (_this2.OpenMatchLink != null && _this2.OpenMatchLink.length !== 0) {
                    for (var _i2 = 0; _i2 < _this2.OpenMatchLink.length; _i2++) {
                      _this2.openMatches.push(_this2.OpenMatchLink[_i2]);
                    }
                  }

                  if (_this2.OpenMatchText != null && _this2.OpenMatchText.length !== 0) {
                    for (var _i3 = 0; _i3 < _this2.OpenMatchText.length; _i3++) {
                      _this2.openMatches.push(_this2.OpenMatchText[_i3]);
                    }
                  }

                  if (_this2.OpenMatchVideo != null && _this2.OpenMatchVideo.length !== 0) {
                    for (var _i4 = 0; _i4 < _this2.OpenMatchVideo.length; _i4++) {
                      _this2.openMatches.push(_this2.OpenMatchVideo[_i4]);
                    }
                  }
                });
              }
            });
          }
        }, {
          key: "gotoOpenMatchComments",
          value: function gotoOpenMatchComments(event, match) {
            this.common.navCtrl.navigateForward(['/comments'], {
              queryParams: match
            });
          }
        }, {
          key: "toLikeOpenMatch",
          value: function toLikeOpenMatch(event, match) {
            var _this3 = this;

            var params = {
              userid: this.userDetails.userid,
              matchid: match.match_id,
              contestentid: '',
              status: 'like'
            };
            this.common.postMethod('Like', params).then(function (res) {
              _this3.ionViewWillEnter();
            });
          }
        }, {
          key: "toDisLikeOpenMatch",
          value: function toDisLikeOpenMatch(event, match) {
            var _this4 = this;

            var params = {
              userid: this.userDetails.userid,
              matchid: match.match_id,
              contestentid: '',
              status: 'dislike'
            };
            this.common.postMethod('Like', params).then(function (res) {
              _this4.ionViewWillEnter();
            });
          }
        }, {
          key: "toCommentOpenMatch",
          value: function toCommentOpenMatch(event, match) {
            this.common.navCtrl.navigateForward(['/open-match-comments'], {
              queryParams: match
            });
          }
        }, {
          key: "GetIconSearch",
          value: function GetIconSearch(icon) {
            var _this5 = this;

            if (icon === 'image') {
              // await this.common.showLoader();
              var params = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('OpenMatch', params).then(function (res) {
                _this5.openMatches = res.details.image;

                if (_this5.openMatches.length === 0) {
                  _this5.common.presentToast('You are having no image Open Matches');
                } else {
                  _this5.common.presentToast('You are having ' + _this5.openMatches.length + ' image Open Matches');
                }
              }, function (err) {
                console.log('err:', err);
              }); // this.common.hideLoader();
            } else if (icon === 'video') {
              // this.common.showLoader();
              var _params = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('OpenMatch', _params).then(function (res) {
                _this5.openMatches = res.details.video;

                if (_this5.openMatches.length === 0) {
                  _this5.common.presentToast('You are having no video Open Matches');
                } else {
                  _this5.common.presentToast('You are having ' + _this5.openMatches.length + ' video Open Matches');
                }
              }, function (err) {
                console.log('err:', err);
              }); // this.common.hideLoader();
            } else if (icon === 'audio') {
              // this.common.showLoader();
              var _params2 = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('OpenMatch', _params2).then(function (res) {
                _this5.openMatches = res.details.audio;

                if (_this5.openMatches.length === 0) {
                  _this5.common.presentToast('You are having no audio Open Matches');
                } else {
                  _this5.common.presentToast('You are having ' + _this5.openMatches.length + ' audio Open Matches');
                }
              }, function (err) {
                console.log('err:', err);
              }); // this.common.hideLoader();
            } else if (icon === 'attachment') {
              // this.common.showLoader();
              var _params3 = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('OpenMatch', _params3).then(function (res) {
                _this5.openMatches = res.details.text;

                if (_this5.openMatches.length === 0) {
                  _this5.common.presentToast('You are having no text Open Matches');
                } else {
                  _this5.common.presentToast('You are having ' + _this5.openMatches.length + ' text Open Matches');
                }
              }, function (err) {
                console.log('err:', err);
              }); // this.common.hideLoader();
            } else if (icon === 'link') {
              // this.common.showLoader();
              var _params4 = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('OpenMatch', _params4).then(function (res) {
                _this5.openMatches = res.details.link;

                if (_this5.openMatches.length === 0) {
                  _this5.common.presentToast('You are having no link Open Matches');
                } else {
                  _this5.common.presentToast('You are having ' + _this5.openMatches.length + ' link Open Matches');
                }
              }, function (err) {
                console.log('err:', err);
              }); // this.common.hideLoader();
            }
          }
        }, {
          key: "toShowMatchHistory",
          value: function toShowMatchHistory(ev, match) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: PopoverComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: match
                        },
                        translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return OpenMatchPage;
      }();

      OpenMatchPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }];
      };

      OpenMatchPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      };
      OpenMatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-open-match',
        template: _raw_loader_open_match_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_open_match_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OpenMatchPage);

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(popoverController, common, navParams) {
          _classCallCheck(this, PopoverComponent);

          this.popoverController = popoverController;
          this.common = common;
          this.navParams = navParams;
          this.Match = [];
          this.Match = this.navParams.get('key');
        }

        _createClass(PopoverComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: "\n        <div style=\" text-align: center; \">\n          <h4 style=\" font-weight: 600; \"> Match History </h4>\n          <div style=\" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;\">\n            <p>Match Date : <span> {{Match.match_start | date}} </span> </p>\n            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>\n            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>\n            <p>Total Hours : <span> {{Match.time_duration}} </span> </p>\n          </div>\n        </div>\n   "
      })], PopoverComponent);
      /***/
    },

    /***/
    "jolV":
    /*!*************************************************!*\
      !*** ./src/app/open-match/open-match.module.ts ***!
      \*************************************************/

    /*! exports provided: OpenMatchPageModule */

    /***/
    function jolV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenMatchPageModule", function () {
        return OpenMatchPageModule;
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


      var _open_match_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./open-match-routing.module */
      "WR6E");
      /* harmony import */


      var _open_match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./open-match.page */
      "f9+U");

      var OpenMatchPageModule = function OpenMatchPageModule() {
        _classCallCheck(this, OpenMatchPageModule);
      };

      OpenMatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _open_match_routing_module__WEBPACK_IMPORTED_MODULE_5__["OpenMatchPageRoutingModule"]],
        declarations: [_open_match_page__WEBPACK_IMPORTED_MODULE_6__["OpenMatchPage"], _open_match_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
      })], OpenMatchPageModule);
      /***/
    },

    /***/
    "tCyL":
    /*!*************************************************!*\
      !*** ./src/app/open-match/open-match.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function tCyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 25px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -15px;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9wZW4tbWF0Y2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVZBO0VBQ1UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQWFWOztBQVhBO0VBQ0kseUJBQUE7QUFjSjs7QUFaQTs7O0VBSUksYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBY0oiLCJmaWxlIjoib3Blbi1tYXRjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWljb25zLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNvbC1pY29ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlYmViZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG5cclxufVxyXG4ubWFpbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi52cy1pbWd7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTA0cHg7XHJcbiAgICBtYXJnaW46IDBweCAtMTRweCAwcHggLTI1cHg7O1xyXG59XHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcbi50aHVtbmFpbC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5oNntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdGFyLWljb24tbmVhci1uYW1le1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDY3cHg7XHJcbiAgICByaWdodDogMjZweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1yaWdodHtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwcHhcclxufVxyXG4uYm90dG9tLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM4MDgwODAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3R0b20tY2xvY2staW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sIFxyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+XHJcbiAgICAgICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "vFzZ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-match/open-match.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function vFzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 15px;\">OPEN MATCH</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"top-icons-container\">\r\n    <ion-row>\r\n      <ion-col class=\"col-icon\" (click)=\"GetIconSearch('image')\">\r\n        <img src=\"../../assets/icon/img.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"GetIconSearch('video')\">\r\n        <img src=\"../../assets/icon/vid.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"GetIconSearch('audio')\">\r\n        <img src=\"../../assets/icon/aud.png\" alt=\"\" style=\"height: 17px;width: 15px;\">      \r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"GetIconSearch('attachment')\">\r\n        <img src=\"../../assets/icon/attach.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 1px solid #bebebf; border-radius: 5px;\" (click)=\"GetIconSearch('link')\">\r\n        <img src=\"../../assets/icon/link.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-slides pager=\"true\" #slides>\r\n\r\n    <!-- slide starts here -->\r\n<ion-slide *ngFor=\"let match of openMatches\" class=\"animate__animated animate__flipInY\">\r\n\r\n  <div style=\" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 35px;\">\r\n\r\n    <div style=\" display: flex; \">\r\n\r\n      <div>\r\n\r\n        <div style=\"height: 255px; width: 195px;\">\r\n          <img *ngIf=\"match.receiver_image_type===''\" src=\"../../assets/icon/no_media.png\" alt=\"\" style=\" border-radius: 7px; height: 255px; width: 195px; \">\r\n          <img *ngIf=\"match.receiver_image_type==='image'\" [src]=\"match.receiver_image\" alt=\"\" style=\" border-radius: 7px; height: 255px; width: 195px; \" onerror=\"this.src='../../assets/icon/no_media.png';\">\r\n          <a *ngIf=\"match.receiver_image_type==='link'\" [href]=\"match.receiver_image\" style=\" border-radius: 7px; height: 255px; width: 195px; font-size: 10px; padding: 7px;\"> {{match.receiver_image}} </a>\r\n          <ion-textarea *ngIf=\"match.receiver_image_type==='text'\" readonly autoGrow style=\" border-radius: 7px; height: 255px; width: 195px; font-size: 10px; padding: 7px;\"> {{match.receiver_image}} </ion-textarea>\r\n          <video *ngIf=\"match.receiver_image_type==='video'\" [src]=\"match.receiver_image\" controls controlsList=\"nodownload\" style=\" border-radius: 7px; height: 255px; width: 195px;\"></video>\r\n          <audio *ngIf=\"match.receiver_image_type==='audio'\" [src]=\"match.receiver_image\" controls controlsList=\"nodownload\" style=\" border-radius: 7px; height: 255px; width: 195px;\"></audio>\r\n        </div>\r\n\r\n        <div style=\"position: relative;bottom: 6%\">\r\n          <img [src]=\"match.receiver_profile\" alt=\"\" style=\" border-radius: 50%; height: 40px; width: 40px; float: left; border: 1px solid;\">\r\n          <p style=\" font-size: 14px; margin-top: 25px; font-weight: 600; position: relative; left: 10px; text-align: left;\">{{match.receiver_name}}</p>\r\n          <!-- <span style=\" font-size: 10px; position: relative; bottom: 20px; color: grey;\">{{match.receiver_email}}</span> -->\r\n        </div>\r\n\r\n        <h6 style=\"font-size: 16px !important; margin: 0px 6px !important;position: relative;bottom: 25px;\">{{match.description}}</h6>\r\n\r\n      </div>\r\n\r\n      <div style=\" padding: 3px; \"></div>\r\n\r\n      <div style=\" position: absolute; height: 30px; top: 20%; right: 46%; \">\r\n        <img src=\"../../assets/icon/vs.png\" alt=\"\">\r\n      </div>\r\n\r\n      <div>\r\n\r\n        <div style=\"height: 255px; width: 195px;\">\r\n          <img *ngIf=\"match.sender_image_type===''\" src=\"../../assets/icon/no_media.png\" alt=\"\" style=\" border-radius: 7px; height: 255px; width: 195px; \">\r\n          <img *ngIf=\"match.sender_image_type==='image'\" [src]=\"match.sender_image\" alt=\"\" style=\"border-radius: 7px; height: 255px; width: 195px;\" onerror=\"this.src='../../assets/icon/no_media.png';\">\r\n          <a *ngIf=\"match.sender_image_type==='link'\" [href]=\"match.sender_image\" style=\"border-radius: 7px; height: 255px; width: 195px; font-size: 10px; padding: 7px;\"> {{match.sender_image}} </a>\r\n          <ion-textarea *ngIf=\"match.sender_image_type==='text'\" readonly autoGrow style=\"border-radius: 7px; height: 255px; width: 195px; font-size: 10px; padding: 7px;\"> {{match.sender_image}} </ion-textarea>\r\n          <video *ngIf=\"match.sender_image_type==='video'\" [src]=\"match.sender_image\" controls controlsList=\"nodownload\" style=\" border-radius: 7px; height: 255px; width: 195px;\"></video>\r\n          <audio *ngIf=\"match.sender_image_type==='audio'\" [src]=\"match.sender_image\" controls controlsList=\"nodownload\" style=\" border-radius: 7px; height: 255px; width: 195px;\"></audio>\r\n        </div>\r\n\r\n        <div style=\"position: relative;bottom: 6%\">\r\n          <img [src]=\"match.sender_profile\" alt=\"\" style=\"border-radius: 50%; height: 40px; width: 40px; float: left; border: 1px solid;\">\r\n          <p style=\"font-size: 14px; margin-top: 25px; font-weight: 600; position: relative; left: 10px; text-align: left;\">{{match.sender_name}}</p>\r\n          <!-- <span style=\"font-size: 10px; position: relative; bottom: 20px;  color: grey;\">{{match.sender_email}}</span> -->\r\n        </div>\r\n        <h6 style=\"font-size: 16px !important; margin: 0px 6px !important;position: relative;bottom: 25px;\">{{match.description}}</h6>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"display: flex;position: relative;left: 18%;\">\r\n      <div>\r\n        <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \">\r\n        <span style=\"margin-left: 10px; position: relative; bottom: 5px;\">{{match.receiver_likecount}}</span>\r\n      </div>\r\n\r\n      <div style=\"position: relative;left: 40%;\">\r\n        <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \">\r\n        <span style=\"margin-left: 10px; position: relative; bottom: 5px;\">{{match.sender_likecount}}</span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"display: flex; position: relative;left: 35%;top: 15px;\">\r\n\r\n      <div style=\"margin-left: 20px;\">\r\n        <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_comment}} </span>\r\n        <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoOpenMatchComments($event,match)\">\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background-color: #8080803d;padding:23px 0px 15px 0px;margin: 45px -5px -5px;\">\r\n      <div style=\"position: relative;bottom: 45px;background-color: white;width: 35px;height: 35px;border-radius: 50%;box-shadow: 0.5px 0.5px 5px 0px grey;left: 35px;\">\r\n        <img src=\"../../assets/icon/03.png\" alt=\"\" style=\"height: 22px;margin-top: 6px;\" (click)=\"toShowMatchHistory($event,match)\">\r\n      </div>\r\n\r\n      <div style=\"display: flex; position: relative;bottom: 35px;margin-left: 10px;\">\r\n\r\n        <div style=\"height: 45px;margin-left: 20px;\">\r\n        <p style=\"margin: 0px !important;font-weight: 600;\"> {{match.agree_count}} </p>\r\n          <img src=\"../../assets/icon/01.png\" alt=\"\" (click)=\"toLikeOpenMatch($event,match)\">\r\n          <p style=\"color: grey; margin: 0px !important;position: relative;bottom: 3px;font-size: 13px;\">i Agree</p>\r\n        </div>\r\n\r\n        <div style=\"height: 45px;margin-left: 55px;\">\r\n          <p style=\"margin: 0px !important;font-weight: 600;\"> {{match.disagree_count}} </p>\r\n          <img src=\"../../assets/icon/01a.png\" alt=\"\" (click)=\"toDisLikeOpenMatch($event,match)\">\r\n          <p style=\"color: grey; margin: 0px !important;position: relative;bottom: 3px;font-size: 13px;\">i Disagree</p>\r\n        </div>\r\n\r\n        <div style=\"height: 40px;margin-left: 55px;position: relative;top: 15px\">\r\n          <img src=\"../../assets/icon/02.png\" alt=\"\" (click)=\"toCommentOpenMatch($event,match)\">\r\n          <span style=\"position: relative;bottom: 19px;margin-left: 5px;font-weight: 600;\"> {{match.total_commoncomments}} </span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-slide>\r\n<!-- slide ends here -->\r\n\r\n</ion-slides>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=open-match-open-match-module-es5.js.map