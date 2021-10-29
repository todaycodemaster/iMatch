(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-match-media-upload-personal-match-media-upload-module"], {
    /***/
    "/EVX":
    /*!*********************************************************************************!*\
      !*** ./src/app/personal-match-media-upload/personal-match-media-upload.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: PersonalMatchMediaUploadPage */

    /***/
    function EVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPage", function () {
        return PersonalMatchMediaUploadPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personal_match_media_upload_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personal-match-media-upload.page.html */
      "JzAD");
      /* harmony import */


      var _personal_match_media_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personal-match-media-upload.page.scss */
      "oLLq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
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


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/config */
      "82od");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem;

      var PersonalMatchMediaUploadPage = /*#__PURE__*/function () {
        function PersonalMatchMediaUploadPage(common, formbuilder, fileChooser, transfer, filePath, mediaCapture, storageservice, actionSheetCtrl, http) {
          _classCallCheck(this, PersonalMatchMediaUploadPage);

          this.common = common;
          this.formbuilder = formbuilder;
          this.fileChooser = fileChooser;
          this.transfer = transfer;
          this.filePath = filePath;
          this.mediaCapture = mediaCapture;
          this.storageservice = storageservice;
          this.actionSheetCtrl = actionSheetCtrl;
          this.http = http;
          this.myFiles = [];
          this.FormSubmit = false;
          this.showUploadSection = false;
          this.isLink = false;
          this.hideImageSpace = true;
          this.anArray = [];
          this.linkArray = [];
          this.wordArray = [];
          this.userData = {
            "caption": ""
          };
          this.sub_captions_data = [{
            "caption": ""
          }, {
            "caption": ""
          }, {
            "caption": ""
          }, {
            "caption": ""
          }];
          this.userLink = {
            "caption": "",
            "link1": "",
            "link2": ""
          };
          this.userText = {
            "caption": "",
            "text1": "",
            "text2": ""
          };
          this.MediaArray = [];
          this.FileTransferResponse = [];
          this.isWordings = false;
          this.MediaFiles = [];
          this.MediaCaptions = [];
          this.progressInfos = [];
          this.Links = [];
          this.urls = new Array();
          this.Text = [];
          this.isCaptureImage = false;
          this.FolderClicked = false;
          this.CaptureClicked = false;
          this.Invitation = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0)])],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)])]
          });
          this.LinkInputForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0)])],
            link1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([// Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])],
            link2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([// Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])]
          });
          this.TextInputForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0)])],
            text1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)])],
            text2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)])]
          });
          this.caption = this.LinkInputForm.controls['caption'];
          this.link1 = this.LinkInputForm.controls['link1'];
          this.link2 = this.LinkInputForm.controls['link2'];
          this.caption = this.TextInputForm.controls['caption'];
          this.Text1 = this.TextInputForm.controls['text1'];
          this.Text2 = this.TextInputForm.controls['text2'];
          this.caption = this.Invitation.controls['caption'];
        }

        _createClass(PersonalMatchMediaUploadPage, [{
          key: "goTo",
          value: function goTo() {
            console.log('this.anArray', this.anArray);
          }
        }, {
          key: "Add",
          value: function Add(type) {
            if (this.anArray.length >= 4) {
              this.common.showAlert('Maximum is 4 items');
              return;
            }

            if (type == 'link') {
              var position = 0;

              for (var i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'link') {
                  position++;
                }
              }

              this.anArray.push({
                'value': '',
                'type': type,
                position: position
              });
            }

            if (type == 'file') {
              var _position = 0;

              for (var _i = 0; _i < this.anArray.length; _i++) {
                if (this.anArray[_i].type == 'file') {
                  _position++;
                }
              }

              this.anArray.push({
                'value': '',
                'type': type,
                position: _position
              });
            }

            if (type == 'text') {
              var _position2 = 0;

              for (var _i2 = 0; _i2 < this.anArray.length; _i2++) {
                if (this.anArray[_i2].type == 'text') {
                  _position2++;
                }
              }

              this.anArray.push({
                'value': '',
                'type': type,
                position: _position2
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('Entered Into Personal Match Media Upload Page');
            this.storageservice.storage.get('userDetails').then(function (val) {
              _this.userDetails = val;
            });
          }
        }, {
          key: "toShowLinkInputFiled",
          value: function toShowLinkInputFiled() {
            // console.log('Link Input Clicked');
            // this.isLink = true;
            // this.isWordings = false;
            // this.hideImageSpace = false;
            this.linkArray.push({
              value: 'http://'
            });
            this.Add('link');
          }
        }, {
          key: "toShowTextArea",
          value: function toShowTextArea() {
            // console.log('Text Input Clicked');
            // this.isWordings = true;
            // this.isLink =false;
            // this.hideImageSpace = false;
            this.wordArray.push({
              value: ''
            });
            this.Add('text');
          } // toProceed() {
          //   this.FormSubmit = true;
          //   if (this.Invitation.valid) {
          //     let params = {
          //       rival_id : this.userDetails.userid,
          //       // opponent_id : this.opponentDetails.userid,
          //       description : this.userData.description,
          //       // time_duration : this.userData.duration,
          //       caption : this.userData.caption,
          //       category : 'Personal Match',
          //       // uploaded_id : this.ImageDetails.upload_details.uploaded_id,
          //     }
          //     console.log('params:',params);
          //     this.common.postMethod('MatchInvitation',params).then((res:any) => {
          //       console.log('res:',res);
          //       if (res.status == true) {
          //         this.Invitation.reset();
          //         this.common.presentToast('Your Personal Match is Successfully Uploaded');
          //         this.common.router.navigate(['/tabs/tab6']);
          //       } else {
          //         this.common.presentToast('Your Personal Match Media Uploading Failed');
          //       }
          //       this.MatchDetails = res;
          //       console.log('matchDetails:',this.MatchDetails.matchid);
          //     } , (err) => {
          //       console.log('Error:',err);
          //       console.log(err.headers);
          //     });
          //   } else {
          //     this.common.presentToast(' All Fields Are Mandatory ');
          //   }
          // }

        }, {
          key: "toSubmitLinkField",
          value: function toSubmitLinkField() {
            var _this2 = this;

            console.log('Form Validation Done');

            if (this.LinkInputForm.valid) {
              var params = {
                // text : this.userLink.link1,
                filetype: 'link',
                userid: this.userDetails.userid
              };
              console.log('params:', params);
              this.common.postMethod('MatchUpload', params).then(function (res) {
                console.log('res:', res);
                _this2.statusId = res.details.uploaded_id;
              }, function (err) {
                console.log('Error:', err);
                console.log(err.headers);
              });
            } else if (this.isLink == true && this.LinkInputForm.dirty) {
              this.common.presentToast('Please Input A Valid Link');
              this.LinkInputForm.reset();
            }
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('Action Sheet Clicked');
                      _context.next = 3;
                      return this.actionSheetCtrl.create({
                        header: 'Choose Atleast 2 File For Personal Match',
                        buttons: [{
                          text: 'Send Wordings',
                          icon: 'text',
                          handler: function handler() {
                            _this3.SendWordings();

                            console.log('Wording clicked');
                          }
                        }, {
                          text: 'Share Links',
                          icon: 'link',
                          handler: function handler() {
                            _this3.PickLinks();

                            console.log('Share clicked');
                          }
                        }, {
                          text: 'Capture Image',
                          icon: 'camera',
                          handler: function handler() {
                            _this3.CaptureImage();

                            console.log('Camera clicked');
                          }
                        }, {
                          text: 'Capture Video',
                          icon: 'videocam',
                          handler: function handler() {
                            _this3.CaptureVideo();

                            console.log("Gallery clicked");
                          }
                        }, {
                          text: 'Capture Audio',
                          icon: 'mic-circle',
                          handler: function handler() {
                            _this3.CaptureAudio();

                            console.log("Audio clicked");
                          }
                        }, {
                          text: 'Other Files',
                          icon: 'folder-open',
                          handler: function handler() {
                            _this3.PickDocuments();

                            console.log('Folder clicked');
                          }
                        }, {
                          text: "Cancel",
                          role: "cancel",
                          handler: function handler() {
                            console.log("Cancel clicked");
                          }
                        }]
                      });

                    case 3:
                      actionSheet = _context.sent;
                      _context.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "SendWordings",
          value: function SendWordings() {
            console.log('Wording');
            this.isWordings = true;
            this.hideImageSpace = false;
            this.isLink = false;
            var params = {
              userid: this.userDetails.userid,
              word1: '',
              word2: ''
            };
            console.log('params:', params);
            this.common.postMethod('', params).then(function (res) {
              console.log('res:', res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "CaptureImage",
          value: function CaptureImage() {
            var _this4 = this;

            console.log('CaptureImage');
            this.isCaptureImage = true;
            var options = {
              limit: 2
            };
            this.mediaCapture.captureImage(options).then(function (data) {
              console.log('data[0]:', data[0]);
              console.log('data[1]:', data[1]);
              _this4.MediaFiles[0] = data[0].name;
              _this4.MediaFiles[1] = data[1].name;

              for (var i = 0; i < _this4.MediaFiles.length; i++) {
                _this4.myFiles.push(_this4.MediaFiles[i]);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureVideo",
          value: function CaptureVideo() {
            console.log('CaptureVideo');
            var options = {
              limit: 2
            };
            this.mediaCapture.captureVideo(options).then(function (data) {
              console.log(data[0]); // this.uploadFile2(data[0], 'video');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureAudio",
          value: function CaptureAudio() {
            console.log('CaptureAudio');
            var options = {
              limit: 2
            };
            this.mediaCapture.captureAudio(options).then(function (data) {
              console.log(data[0]); // this.uploadFile2(data[0], 'audio');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "PickLinks",
          value: function PickLinks() {
            console.log('Pick Links Button Presses');
            this.isLink = true;
            console.log('isLink:', this.isLink);
            this.hideImageSpace = false;
            console.log('hideImageSpace:', this.hideImageSpace);
          }
        }, {
          key: "PickDocuments",
          value: function PickDocuments() {
            var _this5 = this;

            console.log('PickDocuments');
            var file;
            this.fileChooser.open().then(function (uri) {
              console.log(uri);

              _this5.filePath.resolveNativePath(uri).then(function (filePath) {
                console.log(filePath);
                file = {
                  name: '',
                  fullPath: filePath
                }; // this.uploadFile2(file, 'file');
              })["catch"](function (err) {
                return console.log(err);
              });
            })["catch"](function (e) {
              return console.log(e);
            });
          } // click() {
          //   // var clicks  = 0;
          //   clicks += 1;
          //   document.getElementById('clicks').innerHTML =  clicks;
          // }

        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(e, type) {
            var _this6 = this;

            if (type === 'folder') {
              this.FolderClicked = true;
              console.log('FolderClicked:', this.FolderClicked); // if (e.target.files.length>2) {
              //   this.Invitation.reset();
              //   this.common.presentToast('Your are not allowed to choose more than two images');
              // } 

              if (e.target.files === 0) {
                this.common.presentToast('You Have Selected No File !!!');
                return;
              } // if (e.target.files.length===1) {
              //   this.Invitation.reset();
              //   this.common.showAlert('Try to choose maximum 2 media');
              // } 


              this.selectedFiles = e.target.files;

              for (var i = 0; i < e.target.files.length; i++) {
                this.myFiles.push(e.target.files[i]);
                this.Add('file');
              }

              this.urls = [];
              console.log('urls:', this.urls);
              var files = e.target.files;
              console.log('files:', files);

              if (files) {
                var _iterator = _createForOfIteratorHelper(files),
                    _step;

                try {
                  var _loop = function _loop() {
                    var file = _step.value;
                    var reader = new FileReader();
                    error = reader.error;

                    reader.onload = function (e) {
                      console.log('Loaded:', reader.result);
                      console.log('error:', error);

                      _this6.urls.push(e.target.result);

                      console.log('urls:', _this6.urls);
                    };

                    reader.readAsDataURL(file);
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var error;

                    _loop();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            } else if (type === 'image') {
              this.MediaCaptions = [];
              this.FolderClicked = false;

              if (this.MediaFiles.length === 0) {
                this.MediaFiles[0] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);
                this.common.showAlert('Try to capture maximum 2 images');
              } else {
                this.MediaFiles[1] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);

                for (var _i3 = 0; _i3 < this.MediaFiles.length; _i3++) {
                  this.myFiles.push(this.MediaFiles[_i3]);
                  this.MediaCaptions.push(this.MediaFiles[_i3]);
                }
              }
            } else if (type === 'audio') {
              this.FolderClicked = false;
              console.log('recorder clicked:', this.FolderClicked);

              if (this.MediaFiles.length === 0) {
                this.MediaFiles[0] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);
                this.common.showAlert('Try to capture maximum 2 audio');
              } else {
                this.MediaFiles[1] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);

                for (var _i4 = 0; _i4 < this.MediaFiles.length; _i4++) {
                  this.myFiles.push(this.MediaFiles[_i4]);
                  console.log('myFiles:', this.myFiles);
                }
              }
            } else if (type === 'video') {
              this.FolderClicked = false;
              console.log('recorder clicked:', this.FolderClicked);

              if (this.MediaFiles.length === 0) {
                this.MediaFiles[0] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);
                this.common.showAlert('Try to capture maximum 2 video');
              } else {
                this.MediaFiles[1] = e.target.files[0];
                console.log('MediaFiles:', this.MediaFiles);

                for (var _i5 = 0; _i5 < this.MediaFiles.length; _i5++) {
                  this.myFiles.push(this.MediaFiles[_i5]);
                  console.log('myFiles:', this.myFiles);
                }
              }
            }
          } //   fileChangeEvent(e,type) {
          //     console.log('E:',e);
          //     if (type==='folder') {
          //       this.FolderClicked = true;
          //       console.log('FolderClicked:',this.FolderClicked);
          //       if (e.target.files.length>2) {
          //         this.Invitation.reset();
          //         this.common.presentToast('Your are not allowed to choose more than two images');
          //       } 
          //       if (e.target.files === 0) {
          //         this.common.presentToast('You Have Selected No File !!!');
          //         return;
          //       }
          //       if (e.target.files.length===1) {
          //         this.Invitation.reset();
          //         this.common.showAlert('Try to choose maximum 2 media');
          //       } 
          //     } else if (type==='image') {
          //       this.FolderClicked = false;
          //       console.log('FolderClicked:',this.FolderClicked);
          //       if (e.target.accept === "image/*" && e.target.files.length!==0) {
          //         // this.storageservice.setStorage('FirstImage',e.target.files[0]);
          //         // console.log('Image File Successfully saved in device');
          //         // if (e.target.files.length>2) {
          //         //   this.Invitation.reset();
          //         //   this.common.presentToast('Your are not allowed to capture more than two images');
          //         // } 
          //         // if (e.target.files === 0) {
          //         //   this.common.presentToast('You Have Selected No File !!!');
          //         //   return;
          //         // }
          //         // if (e.target.files.length===1) {
          //         //   // this.Invitation.reset();
          //         //   this.common.showAlert('Try to capture maximum 2 images');
          //         // } 
          //         if (this.MediaFiles.length===0) {
          //           this.MediaFiles[0] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //           this.common.showAlert('Try to capture maximum 2 images');
          //         } else {
          //           this.MediaFiles[1] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //           // this.selectedFiles = this.MediaFiles;
          //           if (this.MediaFiles.length===2) {
          //             for (let i=0; i<this.MediaFiles.length; i++) {
          //               this.myFiles.push(this.MediaFiles[i]);
          //               console.log('myFiles:',this.myFiles);
          //             }
          //           } else {
          //             console.log('Media Files array index 2 is vacant');
          //           }
          //         }
          //       } else {
          //         console.log('Two Image Files Selected');
          //       }
          //     } else if (type==='video') {
          //       // this.CaptureClicked = true;
          //       // console.log('CaptureClicked:',this.CaptureClicked);
          //       this.FolderClicked = false;
          //       console.log('FolderClicked:',this.FolderClicked);
          //       // if (e.target.files.length>2) {
          //       //   this.Invitation.reset();
          //       //   this.common.presentToast('Your are not allowed to capture more than two videos');
          //       // } 
          //       // if (e.target.files === 0) {
          //       //   this.common.presentToast('You Have Captured No Videos !!!');
          //       //   return;
          //       // }
          //       if (e.target.files.length===1) {
          //         // this.Invitation.reset();
          //         this.common.showAlert('Try to capture maximum 2 video');
          //       } 
          //       if (e.target.accept === "video/*" && e.target.files.length !== 0) {
          //         // this.storageservice.setStorage('FirstVideo',e.target.files[0])
          //         // console.log('Video File Successfully saved in device');
          //         // this.MediaFiles[0] = 
          //         if (this.MediaFiles.length===0) {
          //           this.MediaFiles[0] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //         } else {
          //           this.MediaFiles[1] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //           for (let i=0; i<this.MediaFiles.length; i++) {
          //             this.myFiles.push(this.MediaFiles[i]);
          //           }
          //           console.log('myFiles:',this.myFiles);
          //         }
          //         // if (this.MediaFiles.length===2) {
          //         //   for (let i=0; i<this.MediaFiles.length; i++) {
          //         //     this.myFiles.push(this.MediaFiles[i]);
          //         //   }
          //         // } else {
          //         //   console.log('Media Files array index 2 is vacant');
          //         // }
          //       } else {
          //         console.log('Two Video Files Selected');
          //       }
          //     } else if (type==='audio') {
          //       // this.CaptureClicked = true;
          //       // console.log('CaptureClicked:',this.CaptureClicked);
          //       this.FolderClicked = false;
          //       console.log('FolderClicked:',this.FolderClicked);
          //       if (e.target.accept === "audio/*" && e.target.files.length != 0) {
          //         // this.storageservice.setStorage('FirstAudio',e.target.files[0]);
          //         // console.log('Audio File Successfully saved in device');
          //         if (e.target.files.length>2) {
          //           this.Invitation.reset();
          //           this.common.presentToast('Your are not allowed to record more than two audio');
          //         } 
          //         if (e.target.files === 0) {
          //           this.common.presentToast('You Have Recorded No Audio !!!');
          //           return;
          //         }
          //         if (e.target.files.length===1) {
          //           // this.Invitation.reset();
          //           this.common.showAlert('Try to record maximum 2 audio');
          //         } 
          //         if (this.MediaFiles.length===0) {
          //           this.MediaFiles[0] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //         } else {
          //           this.MediaFiles[1] = e.target.files[0];
          //           console.log('MediaFiles:',this.MediaFiles);
          //           // this.selectedFiles = this.MediaFiles;
          //         }
          //         if (this.MediaFiles.length===2) {
          //           for (let i=0; i<this.MediaFiles.length; i++) {
          //             this.myFiles.push(this.MediaFiles[i]);
          //           }
          //         } else {
          //           console.log('Media Files array index 2 is vacant');
          //         }
          //       } else {
          //         console.log('Two Audio Files Selected');
          //       }
          //     }
          //     this.urls = [];
          //     console.log('urls:',this.urls);
          //     let files = e.target.files;
          //     console.log('files:',files);
          //     if (files) {
          //       for (let file of files) {
          //         let reader = new FileReader();
          //         var error = reader.error
          //         reader.onload = (e:any) => {
          //           console.log('Loaded:', reader.result);
          //           console.log('error:', error);
          //           this.urls.push(e.target.result);
          //           console.log('urls:',this.urls);
          //         }
          //         reader.onerror = error => {
          //           console.log('error:', error);
          //         }
          //         reader.onprogress = (e:any) => {
          //           console.log('e:', e);
          //         }
          //         reader.onabort = (e:any) => {
          //           console.log('Aborted');
          //         }
          //         reader.readAsDataURL(file);
          //         // getFileCon
          //       }
          //     }
          //     // var mimeType = e.target.files[0].type;
          //     // if (mimeType.match(/png\/*/)==null) {
          //     //   this.message = 'only image';
          //     //   console.log('message',this.message);
          //     //   return;
          //     // }
          //     // for (let i=0; i<e.target.files.length; i++) {
          //     //   var reader = new FileReader();
          //     //   this.imagePath = e.target.files;
          //     //   console.log('imagePath',this.imagePath);
          //     //   reader.onload = (_event) => { 
          //     //     this.imgURL = reader.result;
          //     //     console.log('imgURL',this.imgURL);
          //     //   }
          //     //   reader.readAsDataURL(e.target.files[i]);
          //     // }
          //       // for (let i=0; i<e.target.length; i++) {
          //       //   var reader = new FileReader();
          //       //   this.imagePath = e.target.files;
          //       //   console.log('imagePath',this.imagePath);
          //       //   reader.onload = (_event) => {
          //       //     console.log('Event:',reader.result);
          //       //     this.imgURL.push(reader.result);
          //       //     console.log('imgURL',this.imgURL);
          //       //     // this.Invitation.patchValue({
          //       //     //   fileSource: this.imgURL
          //       //     // });
          //       //   }
          //       //   reader.readAsDataURL(e.target.files[i]);
          //       // }
          //     //   var reader = new FileReader();
          //     //   this.imagePath2 = e.target.files[1];
          //     //   console.log('imagePath2',this.imagePath2);
          //     //   reader.readAsDataURL(e.target.files[1]);
          //     //   reader.onload = (_event) => { 
          //     //     this.imgURL2 = reader.result;
          //     //     console.log('imgURL2',this.imgURL2);
          //     // }
          //     // this.previewImages(e);
          //     this.progressInfos = [];
          //     this.selectedFiles = e.target.files;
          //     // document.getElementById('UploadFile').nodeValue =='';
          //     for (let i=0; i<e.target.files.length; i++) {
          //       this.message = '';
          //       this.myFiles.push(e.target.files[i]);
          //     }
          //     // this.MediaFiles = e.target.files;
          //     // this.imgURL = e.target.value;
          // }
          // previewImages(e) {
          //   var preview = document.querySelector('#preview');
          //   if (e.target.files) {
          //     [].forEach.call(e.target.files, readAndPreview);
          //   }
          //   function readAndPreview(file) {
          //     // Make sure `file.name` matches our extensions criteria
          //     if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
          //       return alert(file.name + " is not an image");
          //     } // else...
          //     var reader = new FileReader();
          //     reader.addEventListener("load", function() {
          //       var image = new Image();
          //       image.height = 100;
          //       image.title  = file.name;
          //       image.src    = e.target.result;
          //       preview.append(image);
          //     });
          //     reader.readAsDataURL(file);
          //   }
          //   document.querySelector('#file-input').addEventListener("change", this.previewImages);
          // }
          // document.querySelector('#file-input').addEventListener("change", previewImages);
          //   getFileContentAsBase64(path,callback){
          //     window.resolveLocalFileSystemURL(path, gotFile, fail);
          //     function fail(e) {
          //           alert('Cannot found requested file');
          //     }
          //     function gotFile(fileEntry) {
          //            fileEntry.file(function(file) {
          //               var reader = new FileReader();
          //               reader.onloadend = function(e) {
          //                    var content = this.result;
          //                    callback(content);
          //               };
          //               // The most important point, use the readAsDatURL Method from the file plugin
          //               reader.readAsDataURL(file);
          //            });
          //     }
          // }
          //     var path = "file://storage/0/downloads/myimage.png";
          // // Convert image
          //     getFileContentAsBase64(path,function(base64Image){
          //       //window.open(base64Image);
          //       console.log(base64Image); 
          //       // Then you'll be able to handle the myimage.png file as base64
          //     });

        }, {
          key: "keychage",
          value: function keychage(e, i) {
            console.log(e); // this.sub_captions_data[i].caption = e.target.value;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this7 = this;

            // this.storageservice.storage.get('FirstAudio').then((val) => {
            //   console.log('Value:',val);
            //   // console.log('');
            // });
            if (this.anArray.length > 2) {
              var formData = new FormData();

              for (var i = 0; i < this.myFiles.length; i++) {
                formData.append("filename[]", this.myFiles[i]);
              }

              formData.append("caption", this.userData.caption);
              formData.append("userid", this.userDetails.userid);
              formData.append("sub_caption", JSON.stringify(this.anArray));
              formData.append("links", JSON.stringify(this.linkArray));
              formData.append("texts", JSON.stringify(this.wordArray));
              this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/create_personalmatch', formData).subscribe(function (res) {
                console.log(res);

                if (res['message'] === 'Successfully uploaded') {
                  _this7.Invitation.reset();

                  _this7.common.presentToast('File Uploaded Successful');

                  _this7.common.router.navigate(['tabs/tab6']);

                  _this7.common.hideLoader();
                } else {
                  _this7.common.hideLoader();

                  _this7.common.presentToast('File Upload Failed !!!');
                }
              }, function (err) {
                _this7.common.hideLoader();

                console.log('err', err);
                console.log(err.headers);
              });
            } // if (this.hideImageSpace==true && this.Invitation.valid) {
            //   if (this.myFiles.length >= 2) {
            //   this.common.showLoader();
            //   this.common.presentToast('⏳ Please wait... we are uploading your file ...');
            //   const formData = new FormData();
            //     console.log("----------------------------", this.sub_captions_data);
            //   for( let i=0;i<this.myFiles.length; i++) 
            //   {
            //     formData.append("filename[]",this.myFiles[i]);
            //   }
            //     formData.append("caption", this.userData.caption);
            //     formData.append("userid", this.userDetails.userid);
            //     formData.append("sub_caption", JSON.stringify(this.sub_captions_data));
            //     formData.append("links", '');
            //     formData.append("texts", '');
            //       console.log('formData:', formData);
            //     this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_personalmatch',formData 
            //     ).subscribe((res) => {
            //       console.log(res);
            //       if (res['message']==='Successfully uploaded') {
            //         this.Invitation.reset();
            //         this.common.presentToast('File Uploaded Successful');
            //         this.common.router.navigate(['tabs/tab6']);
            //         this.common.hideLoader();
            //       } else {
            //         this.common.hideLoader();
            //         this.common.presentToast('File Upload Failed !!!');
            //       }
            //     }, err => {
            //       this.common.hideLoader();
            //       console.log('err',err);
            //       console.log(err.headers);
            //     });
            //   } else {
            //     this.common.showAlert('You are not allowed to submit a personal match with single media');
            //   }
            // } else if (this.isLink==true) {
            //     const regex  = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';
            //   if (this.userLink.link1.match(regex)!=null) {
            //     console.log('Matching link');
            //       this.Links[0] = this.userLink.link1;
            //         console.log('link1',this.Links[0]);
            //   } else {
            //     console.log('No Match');
            //       this.Links[0] = 'https://'+this.userLink.link1;
            //         console.log('link1',this.Links[0]);
            //   }
            //   if (this.userLink.link2.match(regex)!=null) {
            //     console.log('Matching link');
            //       this.Links[1] = this.userLink.link2;
            //         console.log('link2',this.Links[1]);
            //   } else {
            //     console.log('No Match');
            //       this.Links[1] = 'https://'+this.userLink.link2;
            //         console.log('link2',this.Links[1]);
            //   }
            //   console.log('link1',this.userLink.link1);
            //   console.log('link2',this.userLink.link2);
            //   if (this.LinkInputForm.valid) {
            //     this.common.presentLoading();
            //     const formData = new FormData();
            //     formData.append("filename[]",'');
            //     formData.append("caption", this.userLink.caption);
            //     formData.append("userid", this.userDetails.userid);
            //     for( let i=0;i<this.Links.length; i++) {
            //       formData.append("links[]", this.Links[i]);
            //     }
            //     formData.append("texts", '');
            //       console.log('formData:', formData);
            //       this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_personalmatch',formData).subscribe(res => {
            //       console.log(res);
            //       if (res['message']==='Successfully uploaded') {
            //         this.Invitation.reset();
            //         this.common.presentToast('File Uploaded Successful');
            //         this.common.router.navigate(['tabs/tab6']);
            //       } else {
            //         this.common.presentToast('File Upload Failed !!!');
            //       }
            //     }, err => {
            //       console.log('err',err);
            //       console.log(err.headers);
            //     });
            //   } else {
            //     console.log('Link is not valid');
            //     this.common.showAlert('The link you entered is not valid, Please enter a valid link and press launch');
            //   }
            // } else if (this.isWordings==true && this.TextInputForm.valid) {
            //   this.common.showLoader();
            //   console.log('Text1',this.userText.text1);
            //   console.log('Text2',this.userText.text2);
            //   this.Text[0] = this.userText.text1;
            //   this.Text[1] = this.userText.text2;
            //   console.log('Text:',this.Text);
            //   const formData = new FormData();
            //   formData.append("filename[]",'');
            //   formData.append("caption", this.userText.caption);
            //   formData.append("userid", this.userDetails.userid);
            //   formData.append("links", '');
            //   for( let i=0;i<this.Text.length; i++) {
            //     formData.append("texts[]", this.Text[i]);
            //   }
            //   console.log('formData:', formData.getAll("texts"));
            //   this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_personalmatch',formData).subscribe(res => {
            //     console.log(res);
            //     if (res['message']==='Successfully uploaded') {
            //       this.Invitation.reset();
            //       this.common.presentToast('File Uploaded Successful');
            //       this.common.router.navigate(['tabs/tab6']);
            //       this.common.hideLoader();
            //     } else {
            //       this.common.presentToast('File Upload Failed !!!');
            //       this.common.hideLoader();
            //     }
            //   }, err => {
            //     console.log('err',err);
            //     console.log(err.headers);
            //     this.common.hideLoader();
            //   });
            // } else if (this.isCaptureImage==true) {
            //   this.common.showLoader();
            //   const formData = new FormData();
            //   for( let i=0;i<this.myFiles.length; i++) 
            //   {
            //     formData.append("filename[]",this.myFiles[i]);
            //     console.log('myFiles:',this.myFiles[i]);
            //   }
            //     formData.append("caption", this.userData.caption);
            //     formData.append("userid", this.userDetails.userid);
            //     formData.append("links[]", '');
            //     formData.append("texts", '');
            //     console.log('formData:', formData);
            //     this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_personalmatch',formData 
            //     ).subscribe((res) => {
            //       console.log(res);
            //       if (res['message']==='Successfully uploaded') {
            //         this.Invitation.reset();
            //         this.common.presentToast('File Uploaded Successful');
            //         this.common.router.navigate(['tabs/tab6']);
            //         this.common.hideLoader();
            //       } else {
            //         this.common.presentToast('File Upload Failed !!!');
            //         this.common.hideLoader();
            //       }
            //     }, err => {
            //       console.log('err',err);
            //       console.log(err.headers);
            //       this.common.presentToast('File Upload Failed !!!');
            //       this.common.hideLoader();
            //     });
            // }

          }
        }, {
          key: "uploadFile2",
          value: function uploadFile2(file, type) {
            var _this8 = this;

            var arr = new Array(file[0]['name'], file[1]['name']);
            var str = arr.toString();
            console.log('Returned string is :' + str); // Upload audio to server

            var options; // for(i=0;i<file.length;i++)

            options = {
              fileKey: "filename[]",
              fileName: str,
              httpMethod: 'POST',
              mimeType: 'multipart/form-data',
              chunkedMode: false,
              params: {
                caption: this.userData.caption,
                userid: this.userDetails.userid
              },
              headers: {
                Connection: 'close'
              }
            };
            console.log('options:', options);
            var filePath;

            if (type !== 'audio') {
              filePath = encodeURI(file.fullPath);
            } else {
              filePath = file.fullPath;
            }

            var fileTransfer = this.transfer.create();
            var fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + '/iMatch/api/v1/create_personalmatch';
            fileTransfer.onProgress(function (e) {
              var prg = e.lengthComputable ? Math.round(e.loaded / e.total * 100) : -1;
              console.log("progress:" + prg);
            });
            fileTransfer.upload(filePath, fileUplaodUrl, options).then(function (data) {
              console.log('File Transfer Success:', data);
              _this8.FileTransferResponse = data;
            }, function (err) {
              console.log('File Transfer Error:', err);
            });
          }
        }, {
          key: "ToLaunchAMatch",
          value: function ToLaunchAMatch(e) {
            var _this9 = this;

            console.log('To Launch A Match Clicked', e);

            if (e.type == 'click' && this.FileTransferResponse.responseCode != undefined) {
              if (this.FileTransferResponse.response === true) {
                // this.common.presentLoading();
                this.common.showLoader();
                setTimeout(function () {
                  _this9.common.presentToast('Your Personal Match is Uploaded Successfully');

                  _this9.common.router.navigate(['tabs/tab6']);
                }, 3000);
                this.common.hideLoader();
              } else {
                this.common.presentLoading();
                this.common.presentToast('Your Personal Match Upload Failed');
              }
            } else {
              // this.common.showLoader();
              console.log('File Response is empty');
              this.common.presentToast('Submit with valid details... and wait for a while to gets uploaded to our server ...'); // this.common.hideLoader();
            }
          }
        }]);

        return PersonalMatchMediaUploadPage;
      }();

      PersonalMatchMediaUploadPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__["MediaCapture"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      PersonalMatchMediaUploadPage.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['fileInput', {
            "static": false
          }]
        }]
      };
      PersonalMatchMediaUploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-personal-match-media-upload',
        template: _raw_loader_personal_match_media_upload_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_match_media_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PersonalMatchMediaUploadPage);
      /***/
    },

    /***/
    "200W":
    /*!***********************************************************************************!*\
      !*** ./src/app/personal-match-media-upload/personal-match-media-upload.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: PersonalMatchMediaUploadPageModule */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPageModule", function () {
        return PersonalMatchMediaUploadPageModule;
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


      var _personal_match_media_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./personal-match-media-upload-routing.module */
      "mAHn");
      /* harmony import */


      var _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./personal-match-media-upload.page */
      "/EVX");

      var PersonalMatchMediaUploadPageModule = function PersonalMatchMediaUploadPageModule() {
        _classCallCheck(this, PersonalMatchMediaUploadPageModule);
      };

      PersonalMatchMediaUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _personal_match_media_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalMatchMediaUploadPageRoutingModule"]],
        declarations: [_personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_6__["PersonalMatchMediaUploadPage"]]
      })], PersonalMatchMediaUploadPageModule);
      /***/
    },

    /***/
    "82od":
    /*!************************************!*\
      !*** ./src/app/services/config.ts ***!
      \************************************/

    /*! exports provided: baseUrl */

    /***/
    function od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
        return baseUrl;
      });

      var baseUrl = "http://192.168.107.183/";
      /***/
    },

    /***/
    "JzAD":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-match-media-upload/personal-match-media-upload.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JzAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 15px;\">PERSONAL MATCH MEDIA UPLOAD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"box\">\r\n    <div  class=\"inner-box\">\r\n      <div style=\"text-align: center;\">\r\n          <img src=\"../../assets/icon/help-invitation-terms/bar.png\" style=\"height: 130px; width: 180px;\">\r\n      </div>\r\n\r\n      <div style=\"background-color: #444446; margin-top: -5%; padding: 20px 10px 10px 10px; border-right: 1px solid #e0e0e0; text-align: center;\">\r\n        <div *ngFor=\"let att of this.anArray; let idx = index\">\r\n          <div *ngIf=\"att.type=='file'\">\r\n            <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{selectedFiles[att.position].name}} </p>\r\n          </div>\r\n          <div *ngIf=\"att.type=='text'\">\r\n            <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"wordArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n          </div>\r\n          <div *ngIf=\"att.type=='link'\">\r\n            <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"linkArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n          </div>\r\n          <ion-input type=\"text\" placeholder=\"Enter sub caption\" [(ngModel)]=\"anArray[idx].value\" class=\"input-field\"></ion-input>\r\n        </div>\r\n        <!-- <ion-item *ngFor=\"let att of this.linkArray; let idx = index\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"linkArray[idx].value\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let att of this.wordArray; let idx = index\">\r\n          <ion-input type=\"text\"  text-right  [(ngModel)]=\"wordArray[idx].value\"></ion-input>\r\n        </ion-item> -->\r\n        <!-- <button ion-button   (click)=\"Add()\">Add More</button>\r\n        <button ion-button full  (click)=\"goTo()\" >let's go</button> -->\r\n      \r\n        <!-- <div *ngIf=\"this.FolderClicked===true\" style=\"text-align: -webkit-center; margin-bottom: 20px;\">\r\n          <div *ngFor=\"let files of selectedFiles; let i = index\">\r\n            <ion-input (ionInput)=\"keychage($event, i)\" placeholder=\"Enter sub caption\" type=\"text\" class=\"input-field\"></ion-input>\r\n            <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{files.name}} </p>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"this.FolderClicked===false\" style=\"text-align: -webkit-center; margin-bottom: 20px;\">\r\n          <div *ngFor=\"let files of MediaFiles; let i = index\" style=\"width: 130px;\">\r\n            <ion-input [(ngModel)]=\"sub_captions_data[i].caption\" placeholder=\"Enter sub caption\" type=\"text\" class=\"input-field\"></ion-input>\r\n            <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{files.name}} </p>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div *ngIf=\"hideImageSpace==true\">\r\n\r\n          <form [formGroup]=\"Invitation\">\r\n\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userData.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n\r\n            <div style=\"justify-content: center;display: flex;flex-wrap: wrap;\">\r\n            <ion-chip style=\"background-color: #f44336; display: inline-block;\r\n            justify-content: center;\r\n            flex-wrap: nowrap;\">\r\n              <!-- <ion-icon name=\"folder-open\"></ion-icon> -->\r\n              <input #file class=\"custom-file-input-storage\" formControlName=\"file\" style=\"width: 160px;\" type=\"file\" multiple (change)=\"fileChangeEvent($event, 'folder')\">\r\n              <!-- (change)=\"fileChangeEvent($event,'folder')\" -->\r\n\r\n              <!-- value=\"file\" formControlName=\"file\" [(ngModel)]=\"userData.file\" -->\r\n              <!-- <ion-label>Files From Phone Storage</ion-label> -->\r\n            </ion-chip>\r\n\r\n            <ion-chip style=\"background-color: #9c27b0; display: inline-block;\r\n            flex-wrap: nowrap;\">\r\n              <!-- (click)=\"CaptureImage()\" -->\r\n              <!-- <ion-icon name=\"camera\"></ion-icon> -->\r\n              <input #file class=\"custom-file-input-Capture-Image\" style=\"width: 92px;\" formControlName=\"file\" accept=\"image/*\" capture type=\"file\" multiple (change)=\"fileChangeEvent($event,'image')\">\r\n              <!-- <ion-label>Capture Image</ion-label> -->\r\n            </ion-chip>\r\n\r\n            <ion-chip style=\"background-color: #3f51b5; display: inline-block;\r\n            flex-wrap: nowrap;\">\r\n              <!-- <ion-icon name=\"videocam\"></ion-icon> -->\r\n              <input #file class=\"custom-file-input-Capture-Video\" formControlName=\"file\" style=\"width: 92px;\" accept=\"video/*\" capture type=\"file\" multiple (change)=\"fileChangeEvent($event,'video')\">\r\n              <!-- <ion-label>Capture Video</ion-label> -->\r\n            </ion-chip>\r\n\r\n            <ion-chip style=\"background-color: #2196f3; display: inline-block;\r\n            flex-wrap: nowrap;\">\r\n              <!-- <ion-icon name=\"mic-circle\"></ion-icon> -->\r\n              <input #file class=\"custom-file-input-Capture-Audio\" formControlName=\"file\" style=\"width: 90px;\" accept=\"audio/*\" capture type=\"file\" multiple (change)=\"fileChangeEvent($event,'audio')\">\r\n              <!-- <ion-label>Capture Audio</ion-label> -->\r\n            </ion-chip>\r\n\r\n            <ion-chip style=\"background-color: #009688;\" (click)=\"toShowLinkInputFiled()\">\r\n              <!-- <ion-icon name=\"link\"></ion-icon> -->\r\n              <!-- <ion-input formControlName=\"file\" [(ngModel)]=\"userData.file\" style=\"display: none;\" accept=\"audio/*\" capture type=\"file\" multiple (change)=\"fileChangeEvent($event)\"></ion-input> -->\r\n              <ion-label>Share Links</ion-label>\r\n            </ion-chip>\r\n\r\n            <ion-chip style=\"background-color: #ff9800;\" (click)=\"toShowTextArea()\">\r\n              <!-- <ion-icon name=\"text\"></ion-icon> -->\r\n              <!-- <ion-input formControlName=\"file\" [(ngModel)]=\"userData.file\" style=\"display: none;\" accept=\"audio/*\" capture type=\"file\" multiple (change)=\"fileChangeEvent($event)\"></ion-input> -->\r\n              <ion-label>Share Wordings</ion-label>\r\n            </ion-chip>\r\n\r\n          </div>\r\n\r\n            <!-- (click)=\"toSubmitLinkField()\" -->\r\n\r\n            <!-- <ion-label> media\r\n              <ion-input class=\"custom-file-input\" formControlName=\"file\" accept=\"image/*,video/*,audio/*\" capture [(ngModel)]=\"userData.file\" type=\"file\" multiple placeholder=\"Upload a file ...\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n            </ion-label> -->\r\n\r\n            <!-- <input type=\"file\" class=\"custom-file-input\"> -->\r\n\r\n            <!-- <div>\r\n\r\n              <div style=\"display: flex;\r\n              justify-content: center;\r\n              padding: 10px;\">\r\n                <img *ngIf=\"urls\" [src]=\"urls[0]\" alt=\"\" style=\"height: 180px;\r\n                width: 125px;\r\n                padding: 15px;\"> -->\r\n                                <!-- <img *ngIf=\"urls\" [src]=\"urls[1]\" alt=\"\" style=\"height: 180px;\r\n                                width: 125px;\r\n                                padding: 15px;\"> -->\r\n                <!-- *ngIf=\"imgURL\" -->\r\n                <!-- <p *ngFor=\"let files of selectedFiles\" style=\"font-size: 15px; color: white; background-color: #5e5e5f; border-radius: 10px; padding: 20px; width: 150px;\"> {{files.name}} </p> -->\r\n              <!-- </div> -->\r\n\r\n              <!-- <div style=\"display: flex;\r\n              justify-content: center;\r\n              padding: 10px;\">\r\n                <img  [src]=\"imgURL\" alt=\"\" style=\"height: 180px;\r\n                width: 125px;\r\n                padding: 15px;\"> -->\r\n                <!-- *ngIf=\"imgURL\" -->\r\n                <!-- <p style=\"font-size: 15px; color: white; background-color: #5e5e5f; border-radius: 10px; padding: 20px; width: 150px;\"> {{files[1]?.name}} </p>\r\n              </div> -->\r\n\r\n            <!-- </div> -->\r\n\r\n            <!-- <div> -->\r\n  \r\n              <!-- <img *ngIf=\"imgURL\" [src]=\"imgURL\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/help-invitation-terms/bg2.png';\"> -->\r\n              <!-- <img *ngIf=\"MediaFiles\" [src]=\"MediaFiles[1]?.name\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/help-invitation-terms/bg2.png';\"> -->\r\n  \r\n            <!-- </div> -->\r\n\r\n            <!-- <div style=\"display: flex; text-align: center; justify-content: center;\" *ngIf=\"hideImageSpace==true\">\r\n              <img *ngIf=\"MediaArray\" [src]=\"MediaArray.name\" onerror=\"this.onerror=null;this.src='../../assets/icon/help-invitation-terms/bg2.png';\" style=\"height: 150px; width: 130px;\" (click)=\"presentActionSheet()\">\r\n              <img *ngIf=\"MediaArray\" [src]=\"MediaArray.name\" onerror=\"this.onerror=null;this.src='../../assets/icon/help-invitation-terms/bg2.png';\" style=\"height: 150px; width: 130px;\" (click)=\"presentActionSheet()\">\r\n              </div> -->\r\n\r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n            <!-- (click)=\"ToLaunchAMatch($event)\" -->\r\n\r\n          </form>\r\n        </div>\r\n\r\n\r\n        <form [formGroup]=\"LinkInputForm\">\r\n          <div *ngIf=\"isLink==true\" class=\"animate__animated animate__fadeInUp\">\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userLink.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n\r\n            <ion-textarea formControlName=\"link1\" [(ngModel)]=\"userLink.link1\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\" value=\"https://\"></ion-textarea>\r\n            <ion-textarea formControlName=\"link2\" [(ngModel)]=\"userLink.link2\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\" value=\"https://\"></ion-textarea>\r\n\r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n          </div>\r\n        </form>\r\n\r\n        <form [formGroup]=\"TextInputForm\">\r\n          <div *ngIf=\"isWordings==true\" class=\"animate__animated animate__fadeInUp\">\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userText.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n\r\n            <ion-textarea formControlName=\"text1\" [(ngModel)]=\"userText.text1\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n            <ion-textarea formControlName=\"text2\" [(ngModel)]=\"userText.text2\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n            \r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "mAHn":
    /*!*******************************************************************************************!*\
      !*** ./src/app/personal-match-media-upload/personal-match-media-upload-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PersonalMatchMediaUploadPageRoutingModule */

    /***/
    function mAHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPageRoutingModule", function () {
        return PersonalMatchMediaUploadPageRoutingModule;
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


      var _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./personal-match-media-upload.page */
      "/EVX");

      var routes = [{
        path: '',
        component: _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_3__["PersonalMatchMediaUploadPage"]
      }];

      var PersonalMatchMediaUploadPageRoutingModule = function PersonalMatchMediaUploadPageRoutingModule() {
        _classCallCheck(this, PersonalMatchMediaUploadPageRoutingModule);
      };

      PersonalMatchMediaUploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonalMatchMediaUploadPageRoutingModule);
      /***/
    },

    /***/
    "oLLq":
    /*!***********************************************************************************!*\
      !*** ./src/app/personal-match-media-upload/personal-match-media-upload.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function oLLq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.input-field {\n  border: 1px solid #b6b6b7;\n  background: #cdcdce30;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.box {\n  width: 88%;\n  border: 1px solid transparent;\n  background-color: #707072;\n  margin-left: 6%;\n  margin-top: 6%;\n  border-radius: 5px;\n}\n\n.inner-box {\n  border: 1px solid #e0e0e0;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  margin: 5%;\n  border-radius: 5px;\n}\n\n.inner-box div {\n  position: relative;\n}\n\n.inner-box div ion-img {\n  width: 45%;\n}\n\n.inner-box div ion-thumbnail {\n  border: 1px solid #fcbb3b;\n  background-color: #ffffffcc;\n  position: absolute;\n  right: 4%;\n  top: 12%;\n  height: 65px;\n  width: 65px;\n}\n\n.custom-file-input {\n  color: transparent;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active {\n  outline: 0;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Image {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Image::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Image::before {\n  content: \"Capture Image\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-storage {\n  color: transparent;\n}\n\n.custom-file-input-storage::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-storage::before {\n  content: \"Files From Phone Storage\";\n  color: #4c2d00;\n  width: 180px;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n  position: relative;\n  top: 10%;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Video {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Video::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Video::before {\n  content: \"Capture Video\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Audio {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Audio::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Audio::before {\n  content: \"Capture Audio\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLW1hdGNoLW1lZGlhLXVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4REFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUNJO0VBQ0ksVUFBQTtBQUNSOztBQUNJO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBQ0U7RUFDRSwwREFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtBQUVKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtFQUdBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUU7RUFDRSxhQUFBO0FBTEo7O0FBV0U7RUFDRSxrQkFBQTtBQVJKOztBQVVFO0VBQ0Usa0JBQUE7QUFQSjs7QUFTRTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBWko7O0FBZ0JFO0VBQ0UsYUFBQTtBQWJKOztBQW1CQTtFQUNJLGtCQUFBO0FBaEJKOztBQWtCRTtFQUNFLGtCQUFBO0FBZko7O0FBaUJFO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7RUFHQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQW5CSjs7QUF5QkU7RUFDRSxhQUFBO0FBdEJKOztBQTRCQTtFQUNJLGtCQUFBO0FBekJKOztBQTJCRTtFQUNFLGtCQUFBO0FBeEJKOztBQTBCRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0VBR0EsbUJBQUE7RUFJQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUE5Qko7O0FBa0NJO0VBQ0EsYUFBQTtBQS9CSiIsImZpbGUiOiJwZXJzb25hbC1tYXRjaC1tZWRpYS11cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaGVscC1pbnZpdGF0aW9uLXRlcm1zL2ludml0YXRpb24tYmcucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI3O1xyXG4gICAgYmFja2dyb3VuZDogI2NkY2RjZTMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgLy8gaGVpZ2h0OiAyNDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW5uZXItYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlubmVyLWJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpb24taW1ne1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2JiM2I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNjO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1NlbGVjdCBzb21lIGZpbGVzJztcclxuICAgIGNvbG9yOiAjNGMyZDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjlmOWY5LCAjZTNlM2UzKTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dDphY3RpdmU6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpOyBcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbi8vICAgY3VzdG9tLWZpbGUtaW5wdXQtQ2FwdHVyZS1JbWFnZVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUltYWdlIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtSW1hZ2U6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtSW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBJbWFnZSc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUltYWdlXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1zdG9yYWdlXHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2Uge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdGaWxlcyBGcm9tIFBob25lIFN0b3JhZ2UnO1xyXG4gICAgY29sb3I6ICM0YzJkMDA7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOWY5ZjksICNlM2UzZTMpO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1zdG9yYWdlXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvXHJcbi5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtVmlkZW86Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtVmlkZW86OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBWaWRlbyc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcblxyXG4gIH1cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUF1ZGlvXHJcbi5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUF1ZGlvIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtQXVkaW86Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtQXVkaW86OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBBdWRpbyc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIH1cclxuICAgIGJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbi8vICAgY3VzdG9tLWZpbGUtaW5wdXQtQ2FwdHVyZS1BdWRpb1xyXG5cclxuXHJcbi8vICAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2U6aG92ZXI6OmJlZm9yZSB7XHJcbi8vICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4vLyAgIH1cclxuLy8gICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTphY3RpdmUge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICB9XHJcbi8vICAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2U6YWN0aXZlOjpiZWZvcmUge1xyXG4vLyAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTsgXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGJvZHkge1xyXG4vLyAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=personal-match-media-upload-personal-match-media-upload-module-es5.js.map