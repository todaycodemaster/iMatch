(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitation-invitation-module"], {
    /***/
    "G0lb":
    /*!*************************************************!*\
      !*** ./src/app/invitation/invitation.module.ts ***!
      \*************************************************/

    /*! exports provided: InvitationPageModule */

    /***/
    function G0lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationPageModule", function () {
        return InvitationPageModule;
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


      var _invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invitation-routing.module */
      "ln8A");
      /* harmony import */


      var _invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invitation.page */
      "R2+f");

      var InvitationPageModule = function InvitationPageModule() {
        _classCallCheck(this, InvitationPageModule);
      };

      InvitationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitationPageRoutingModule"]],
        declarations: [_invitation_page__WEBPACK_IMPORTED_MODULE_6__["InvitationPage"]]
      })], InvitationPageModule);
      /***/
    },

    /***/
    "R2+f":
    /*!***********************************************!*\
      !*** ./src/app/invitation/invitation.page.ts ***!
      \***********************************************/

    /*! exports provided: InvitationPage */

    /***/
    function R2F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationPage", function () {
        return InvitationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invitation.page.html */
      "mD2B");
      /* harmony import */


      var _invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invitation.page.scss */
      "xWm9");
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
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "uRF+");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "iWj2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/config */
      "82od");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem;

      var InvitationPage = /*#__PURE__*/function () {
        // isImage: boolean = false;
        // isAudio: boolean = false;
        // isVideo: boolean = false;
        function InvitationPage(storageservice, actionSheetController, common, formbuilder, mediaCapture, fileChooser, transfer, filePath, http) {
          var _this = this;

          _classCallCheck(this, InvitationPage);

          this.storageservice = storageservice;
          this.actionSheetController = actionSheetController;
          this.common = common;
          this.formbuilder = formbuilder;
          this.mediaCapture = mediaCapture;
          this.fileChooser = fileChooser;
          this.transfer = transfer;
          this.filePath = filePath;
          this.http = http;
          this.showUploadSection = false;
          this.FormSubmit = false; // isLink: boolean = false;

          this.isLink = {}; // hideImageSpace: boolean = true;

          this.hideImageSpace = {};
          this.anArray = [];
          this.wordArray = [];
          this.linkArray = [];
          this.fileArray = [];
          this.userDetails = [];
          this.invitationDetails = [];
          this.invite = [];
          this.MatchFiles = [];
          this.ImageDetails = [];
          this.userLink = {
            "link": ""
          };
          this.FileTransferResponse = [];
          this.isWording = {};
          this.isVideo = {};
          this.isAudio = {};
          this.isImage = {};
          this.LinkInputForm = formbuilder.group({
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])]
          });
          this.link = this.LinkInputForm.controls['link'];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;
            _this.personalMatchSlideIndex = _this.userDetails.personalMatchSlideIndex;
          });
        }

        _createClass(InvitationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.common.showLoader();
            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  userid: _this2.userDetails.userid
                };

                _this2.common.postMethod('AllInvitation', params).then(function (res) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var i;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            this.invitationDetails = res.details;
                            this.MatchFiles = res.details.files;

                            for (i = 0; i < this.invitationDetails.length; i++) {
                              this.hideImageSpace[i] = true;
                              this.anArray[i] = [];
                              this.fileArray[i] = [];
                              this.wordArray[i] = [];
                              this.linkArray[i] = [];
                            }

                            _context.next = 5;
                            return this.common.hideLoader();

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }, function (err) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return this.common.hideLoader();

                          case 2:
                            console.log('Error:', err);

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                });
              } else {}
            });
          }
        }, {
          key: "Add",
          value: function Add(type, k) {
            if (this.anArray[k].length >= 4) {
              this.common.showAlert('Maximum is 4 items');
              return;
            }

            if (type == 'link') {
              var position = 0;

              for (var i = 0; i < this.anArray[k].length; i++) {
                if (this.anArray[k][i].type == 'link') {
                  position++;
                }
              }

              this.anArray[k].push({
                'value': '',
                'type': type,
                position: position
              });
            }

            if (type == 'file') {
              var _position = 0;

              for (var _i = 0; _i < this.anArray[k].length; _i++) {
                if (this.anArray[k][_i].type == 'file') {
                  _position++;
                }
              }

              this.anArray[k].push({
                'value': '',
                'type': type,
                position: _position
              });
            }

            if (type == 'text') {
              var _position2 = 0;

              for (var _i2 = 0; _i2 < this.anArray[k].length; _i2++) {
                if (this.anArray[k][_i2].type == 'text') {
                  _position2++;
                }
              }

              this.anArray[k].push({
                'value': '',
                'type': type,
                position: _position2
              });
            }
          }
        }, {
          key: "openUploadSection",
          value: function openUploadSection(e, invite) {
            this.showUploadSection = !this.showUploadSection;
          }
        }, {
          key: "closeUploadSection",
          value: function closeUploadSection(e, invite, i) {
            var _this3 = this;

            this.showUploadSection = false;
            var params = {
              matchid: invite.match_id,
              status: 'reject',
              userid: this.userDetails.userid
            };
            this.common.postMethod('Match_reply', params).then(function (res) {
              if (res.status == true) {
                // this.RefreshInvitaionList(i);
                // this.common.presentToast('You had rejected ' + invite.sender_name + '`s match ');
                // this.common.navCtrl.navigateForward(['tabs/tab5'], {queryParams: this.userDetails});
                _this3.common.router.navigate(['tabs/tab6']);
              } else {
                _this3.common.presentToast('You had already replied to ' + invite.sender_name + '`s invitation ');

                _this3.common.router.navigate(['tabs/tab6']);
              }
            });
          }
        }, {
          key: "RefreshInvitaionList",
          value: function RefreshInvitaionList(i) {
            var _this4 = this;

            this.FileTransferResponse = [];
            this.hideImageSpace[i] = true;
            this.isImage[i] = false;
            this.isAudio[i] = false;
            this.isVideo[i] = false;
            this.isLink[i] = false;
            this.isWording[i] = false;
            var params = {
              userid: this.userDetails.userid
            };
            this.common.postMethod('AllInvitation', params).then(function (res) {
              _this4.invitationDetails = res.details;
            }, function (err) {
              console.log('Error:', err);
            });
          }
        }, {
          key: "acceptInvitation",
          value: function acceptInvitation(e, invite, i) {
            var _this5 = this;

            if (this.anArray[i].length > 0) {
              this.common.showLoader();
              var formData = new FormData();
              formData.append("matchid", invite.match_id);
              formData.append("userid", this.userDetails.userid);
              formData.append("sub_caption", JSON.stringify(this.anArray[i]));
              formData.append("links", JSON.stringify(this.linkArray[i]));
              formData.append("texts", JSON.stringify(this.wordArray[i]));
              this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/acceptInvitation', formData).subscribe(function (res) {
                console.dir("---------------------------------", res);
                var matchid = res['matchid'];

                _this5.fileArray[i].forEach(function (item) {
                  var fileTransfer = _this5.transfer.create();

                  fileTransfer.onProgress(function (e) {
                    var prg = e.lengthComputable ? Math.round(e.loaded / e.total * 100) : -1;

                    _this5.common.presentToast('Uploaded ' + prg + '% of file');
                  });
                  var options = {
                    fileKey: 'matchfile',
                    fileName: item.name,
                    httpMethod: 'POST',
                    mimeType: 'multipart/form-data',
                    chunkedMode: false,
                    params: {
                      match_id: matchid,
                      userid: _this5.userDetails.userid
                    },
                    headers: {
                      Connection: 'close'
                    }
                  };
                  fileTransfer.upload(item.filePath, _services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/MatchFileUpload', options).then(function (data) {
                    console.dir('*****************' + data);
                  }, function (err) {
                    console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));
                  });
                });

                _this5.common.presentToast('File Uploaded Successful');

                _this5.common.router.navigate(['tabs/tab6']);

                _this5.common.hideLoader();
              }, function (err) {
                console.dir('**********************************', JSON.stringify(err));

                _this5.common.hideLoader();

                _this5.common.router.navigate(['tabs/tab6']);

                console.log('err', err);
              });
            } else {
              this.common.showAlert('You must select file or word or link');
            }
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(e, invite, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.invite = invite;
                      _context3.next = 3;
                      return this.actionSheetController.create({
                        cssClass: 'my-custom-class',
                        header: ' File format must be MP4, AAC, Mp3, PNG, JPG ',
                        buttons: [{
                          text: 'Send Wordings',
                          icon: 'text',
                          handler: function handler() {
                            // this.SendWordings(i);
                            _this6.wordArray[i].push({
                              value: ''
                            });

                            _this6.Add('text', i);
                          }
                        }, {
                          text: 'Share Links',
                          icon: 'link',
                          handler: function handler() {
                            // this.pickLinks(i);
                            _this6.linkArray[i].push({
                              value: 'http://'
                            });

                            console.log(_this6.linkArray);

                            _this6.Add('link', i);
                          }
                        }, {
                          text: 'Capture Image',
                          icon: 'camera',
                          handler: function handler() {
                            _this6.CaptureImage(i);
                          }
                        }, {
                          text: 'Capture Video',
                          icon: 'videocam',
                          handler: function handler() {
                            _this6.CaptureVideo(i);
                          }
                        }, {
                          text: 'Capture Audio',
                          icon: 'mic-circle',
                          handler: function handler() {
                            _this6.CaptureAudio(i);
                          }
                        }, {
                          text: 'Other Files',
                          icon: 'folder-open',
                          handler: function handler() {
                            _this6.PickDocuments(i);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 3:
                      actionSheet = _context3.sent;
                      _context3.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "BringItOn",
          value: function BringItOn() {
            var _this7 = this;

            var _a;

            if (((_a = this.FileTransferResponse) === null || _a === void 0 ? void 0 : _a.length) != 0 || this.statusId != undefined) {
              var params = {
                request_id: this.invite.match_id,
                status: 'accept'
              };
              this.common.postMethod('Match_reply', params).then(function (res) {
                if (res.status == true) {
                  _this7.ionViewWillEnter();

                  _this7.common.router.navigate(['/tabs/tab8']);

                  _this7.common.presentToast('You have successfully accepted ' + _this7.invite.sender_name + '`s match ');
                } else {
                  _this7.common.presentToast('You had already replied to ' + _this7.invite.sender_name + '`s invitation ');
                }
              }, function (err) {
                console.log('Error:', err);
              });
            } else {
              this.common.presentToast('Please upload a media , and then click `Bring It On!` ');
            }
          }
        }, {
          key: "pickLinks",
          value: function pickLinks(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.isLink[i] = true;
                      this.hideImageSpace[i] = false;
                      this.isWording[i] = false;

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "SendWordings",
          value: function SendWordings(i) {
            this.isLink[i] = false;
            this.hideImageSpace[i] = false;
            this.isWording[i] = true;
          }
        }, {
          key: "CaptureImage",
          value: function CaptureImage(i) {
            var _this8 = this;

            var options = {
              limit: 1
            };
            this.mediaCapture.captureImage(options).then(function (data) {
              _this8.Add('file', i);

              _this8.fileArray[i].push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'jpg'
              });
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureVideo",
          value: function CaptureVideo(i) {
            var _this9 = this;

            var options = {
              limit: 1,
              duration: 120,
              quality: 80
            };
            this.mediaCapture.captureVideo(options).then(function (data) {
              _this9.Add('file', i);

              _this9.fileArray[i].push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp4'
              });
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureAudio",
          value: function CaptureAudio(i) {
            var _this10 = this;

            var options = {
              limit: 1
            };
            this.mediaCapture.captureAudio(options).then(function (data) {
              _this10.Add('file', i);

              _this10.fileArray[i].push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp3'
              });
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "PickDocuments",
          value: function PickDocuments(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.fileChooser.open().then(function (uri) {
                        _this11.filePath.resolveNativePath(uri).then(function (filePath) {
                          _this11.filesPath = filePath;
                          _this11.filesName = _this11.filesPath.substring(_this11.filesPath.lastIndexOf("/") + 1);
                          _this11.filesType = _this11.filesName.substring(_this11.filesName.lastIndexOf(".") + 1);

                          _this11.Add('file', i);

                          _this11.fileArray[i].push({
                            name: _this11.filesName,
                            type: _this11.filesType,
                            uri: uri,
                            filePath: filePath
                          });
                        }, function (err) {
                          console.log(err);
                          throw err;
                        });
                      }, function (err) {
                        console.log(err);
                        throw err;
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return InvitationPage;
      }();

      InvitationPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__["MediaCapture"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
        }];
      };

      InvitationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invitation',
        template: _raw_loader_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InvitationPage);
      /***/
    },

    /***/
    "ln8A":
    /*!*********************************************************!*\
      !*** ./src/app/invitation/invitation-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: InvitationPageRoutingModule */

    /***/
    function ln8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationPageRoutingModule", function () {
        return InvitationPageRoutingModule;
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


      var _invitation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invitation.page */
      "R2+f");

      var routes = [{
        path: '',
        component: _invitation_page__WEBPACK_IMPORTED_MODULE_3__["InvitationPage"]
      }];

      var InvitationPageRoutingModule = function InvitationPageRoutingModule() {
        _classCallCheck(this, InvitationPageRoutingModule);
      };

      InvitationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvitationPageRoutingModule);
      /***/
    },

    /***/
    "mD2B":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invitation/invitation.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function mD2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"position: relative;right: 25px;\">INVITATION</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"invitationDetails\">\r\n\r\n    <!-- <ion-slides pager=\"true\"> -->\r\n\r\n    <!-- <ion-slide> -->\r\n\r\n    <div style=\"text-align: center; margin-top: 15vh;\" *ngIf=\"invitationDetails==''\">\r\n\r\n        <div>\r\n            <img src=\"../../assets/icon/download.jpeg\" alt=\"\" style=\"border: 15px solid #9E9E9E; border-radius: 50%; height: 300px; width: 300px;\">\r\n        </div>\r\n\r\n        <div>\r\n            <h4 style=\"background: #9E9E9E; padding: 10px; border-radius: 35px;\">Currently you are having no invitations</h4>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- <ion-slides pager=\"true\"> -->\r\n\r\n    <!-- <ion-slide> -->\r\n\r\n    <div class=\"box , animate__animated animate__fadeIn\" *ngFor=\"let invite of invitationDetails; let i=index\">\r\n        <div class=\"inner-box\">\r\n            <div>\r\n                <ion-img src=\"../../assets/icon/help-invitation-terms/bar.png\"></ion-img>\r\n                <ion-thumbnail slot=\"end\">\r\n                    <img [src]=\"invite.user_profile\">\r\n                </ion-thumbnail>\r\n                <span>{{invite.sender_name}}</span>\r\n\r\n            </div>\r\n            <div style=\"font-size: 13px; text-align: center; margin-left: 5%; margin-top: 15%; margin-right: 5%; color: #fcfcfc;\">\r\n                {{invite.caption}}\r\n            </div>\r\n\r\n            <div *ngFor=\"let att of this.anArray[i]; let idx = index\">\r\n                <div *ngIf=\"att.type=='text'\">\r\n                    <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"wordArray[i][att.position].value\" class=\"input-field\"></ion-input>\r\n                </div>\r\n                <div *ngIf=\"att.type=='link'\">\r\n                    <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"linkArray[i][att.position].value\" class=\"input-field\"></ion-input>\r\n                </div>\r\n                <div *ngIf=\"att.type=='file'\">\r\n                    <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{this.fileArray[i][att.position].name}} </p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div style=\"background-color: #444446; margin-top: 15%; padding: 8px; border-right: 1px solid #e0e0e0; text-align: center;\">\r\n                <div>\r\n                    <div style=\"font-size: 13px; color: #fcfcfc; text-align: center; margin-left: 11px; margin-right: 11px; margin-top: 11px;\">{{invite.description}}</div>\r\n\r\n                    <div style=\"margin-top: 20px; margin-bottom: 20px; display: flex;\" *ngIf=\"hideImageSpace[i]==true\">\r\n\r\n                        <img style=\"width: 42%; height: 160px; margin-left: 10px; filter: blur(8px);\" [src]=\"invite.receiver_image\" onerror=\"this.onerror=null;this.src='../../assets/icon/no_media.png'\">\r\n\r\n                        <img *ngIf=\"FileTransferResponse?.length!=0 && isImage[i]==true\" style=\"right: 10px; position: absolute; top: 0px; width: 42%; height: 160px;\" [src]=\"FileTransferResponse.filename\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\">\r\n                        <img *ngIf=\"FileTransferResponse?.length===0\" style=\"right: 10px; position: absolute; top: 0px; width: 42%; \" src=\"../../assets/icon/bg2new.png\" (click)=\"presentActionSheet($event, invite, i)\">\r\n                        <video *ngIf=\"FileTransferResponse?.length!=0 && isVideo[i]==true\" style=\"right: 10px; position: absolute; top: 0px; width: 42%; height: 160px;\" [src]=\"FileTransferResponse.filename\" controls controlsList=\"nodownload\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\"></video>\r\n                        <audio *ngIf=\"FileTransferResponse?.length!=0 && isAudio[i]==true\" style=\"right: 10px; position: absolute; top: 0px; width: 42%; \" [src]=\"FileTransferResponse.filename\" controls controlsList=\"nodownload\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\"></audio>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isLink[i]==true\" class=\"animate__animated animate__fadeIn\">\r\n\r\n                        <div style=\"margin: 15px; text-align: -webkit-center;\">\r\n                            <img style=\"width: 140px; height: 145px; margin-left: 10px; filter: blur(8px);\" [src]=\"invite.receiver_image\" onerror=\"this.onerror=null;this.src='../../assets/icon/no_media.png'\" (click)=\"presentActionSheet($event,invite,i)\">\r\n                        </div>\r\n\r\n                        <form [formGroup]=\"LinkInputForm\">\r\n                            <ion-textarea formControlName=\"link\" [(ngModel)]=\"userLink.link\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\"></ion-textarea>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isWording[i]==true\" class=\"animate__animated animate__fadeIn\">\r\n\r\n                        <div style=\"margin: 15px; text-align: -webkit-center;\">\r\n                            <img style=\"width: 140px; height: 145px; margin-left: 10px; filter: blur(8px);\" [src]=\"invite.receiver_image\" onerror=\"this.onerror=null;this.src='../../assets/icon/no_media.png'\" (click)=\"presentActionSheet($event,invite,i)\">\r\n                        </div>\r\n\r\n                        <!-- <form [formGroup]=\"LinkInputForm\"> -->\r\n                        <ion-textarea [(ngModel)]=\"InvitationWording\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n                        <!-- </form> -->\r\n                    </div>\r\n\r\n                </div>\r\n                <ion-button color=\"warning\" style=\"font-family: OpenSansBold; font-size: 12px; width: 120px; height: 34px;\" (click)=\"acceptInvitation($event, invite, i)\">BRING IT ON!</ion-button>\r\n                <ion-button (click)=\"closeUploadSection($event, invite, i)\" color=\"warning\" style=\"font-family: OpenSansBold; font-size: 12px; width: 120px; height: 34px; margin-left: 18px;\">NO THANKS</ion-button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!-- </ion-slide> -->\r\n\r\n    <!-- </ion-slides> -->\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "xWm9":
    /*!*************************************************!*\
      !*** ./src/app/invitation/invitation.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function xWm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.input-field {\n  border: 1px solid #b6b6b7;\n  background: #cdcdce30;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.box {\n  width: 88%;\n  border: 1px solid transparent;\n  background-color: #707072;\n  margin-left: 6%;\n  margin-top: 6%;\n  border-radius: 5px;\n}\n\n.inner-box {\n  border: 1px solid #e0e0e0;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  margin: 5%;\n  border-radius: 5px;\n}\n\n.inner-box div {\n  position: relative;\n}\n\n.inner-box div ion-img {\n  width: 45%;\n}\n\n.inner-box div ion-thumbnail {\n  border: 1px solid #fcbb3b;\n  background-color: #ffffffcc;\n  position: absolute;\n  right: 4%;\n  top: 12%;\n  height: 65px;\n  width: 65px;\n}\n\n.inner-box div span {\n  position: absolute;\n  right: 5%;\n  top: 90%;\n  font-size: 13px;\n  color: #fcbb3b;\n  font-family: OpenSansRegular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludml0YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOERBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBRUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFDSTtFQUNJLFVBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBQ1IiLCJmaWxlIjoiaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWxwLWludml0YXRpb24tdGVybXMvaW52aXRhdGlvbi1iZy5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2Yjc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2RjZGNlMzA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJveHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICAvLyBoZWlnaHQ6IDI0M3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbm5lci1ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW5uZXItYm94IGRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYmIzYjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2M7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgdG9wOiA5MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjZmNiYjNiO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=invitation-invitation-module-es5.js.map