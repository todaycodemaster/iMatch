(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-match-media-upload-personal-match-media-upload-module"],{

/***/ "/EVX":
/*!*********************************************************************************!*\
  !*** ./src/app/personal-match-media-upload/personal-match-media-upload.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonalMatchMediaUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPage", function() { return PersonalMatchMediaUploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_match_media_upload_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-match-media-upload.page.html */ "JzAD");
/* harmony import */ var _personal_match_media_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-match-media-upload.page.scss */ "oLLq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/File/ngx */ "t8sF");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/config */ "82od");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "Pn9U");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "Yttj");



















const STORAGE_KEY = 'my_images';
let PersonalMatchMediaUploadPage = class PersonalMatchMediaUploadPage {
    constructor(common, formbuilder, storageservice, fileChooser, transfer, filePath, mediaCapture, actionSheetCtrl, http, camera, platform, storage, webview, file) {
        this.common = common;
        this.formbuilder = formbuilder;
        this.storageservice = storageservice;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.mediaCapture = mediaCapture;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.camera = camera;
        this.platform = platform;
        this.storage = storage;
        this.webview = webview;
        this.file = file;
        this.myFiles = [];
        this.FormSubmit = false;
        this.isLink = false;
        this.hideImageSpace = true;
        this.anArray = [];
        this.linkArray = [];
        this.wordArray = [];
        this.fileArray = [];
        this.userData = {
            "caption": "",
        };
        this.MediaArray = [];
        this.FileTransferResponse = [];
        this.isWordings = false;
        this.MediaFiles = [];
        this.MediaCaptions = [];
        this.progressInfos = [];
        this.Links = [];
        this.images = [];
        this.urls = new Array();
        this.Text = [];
        this.isCaptureImage = false;
        this.FolderClicked = false;
        this.CaptureClicked = false;
        this.Invitation = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0),
                ])],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2),
                ])],
        });
        this.LinkInputForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0),
                ])],
            link1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    // Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                ])],
            link2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    // Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                ])],
        });
        this.TextInputForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(0),
                ])],
            text1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                ])],
            text2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                ])],
        });
        this.caption = this.LinkInputForm.controls['caption'];
        this.link1 = this.LinkInputForm.controls['link1'];
        this.link2 = this.LinkInputForm.controls['link2'];
        this.caption = this.TextInputForm.controls['caption'];
        this.Text1 = this.TextInputForm.controls['text1'];
        this.Text2 = this.TextInputForm.controls['text2'];
        this.caption = this.Invitation.controls['caption'];
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);
            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            this.images = [newEntry, ...this.images];
        });
    }
    Add(type) {
        if (this.anArray.length >= 4) {
            this.common.showAlert('Maximum is 4 items');
            return;
        }
        if (type == 'link') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'link') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'file') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'file') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'text') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'text') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    toShowLinkInputFiled() {
        this.linkArray.push({ value: 'http://' });
        this.Add('link');
    }
    toShowTextArea() {
        this.wordArray.push({ value: '' });
        this.Add('text');
    }
    toSubmitLinkField() {
        if (this.LinkInputForm.valid) {
            let params = {
                filetype: 'link',
                userid: this.userDetails.userid
            };
            this.common.postMethod('MatchUpload', params).then((res) => {
                this.statusId = res.details.uploaded_id;
            }, (err) => {
                console.log('Error:', err);
            });
        }
        else if (this.isLink == true && this.LinkInputForm.dirty) {
            this.common.presentToast('Please Input A Valid Link');
            this.LinkInputForm.reset();
        }
    }
    SendWordings() {
        this.isWordings = true;
        this.hideImageSpace = false;
        this.isLink = false;
        let params = {
            userid: this.userDetails.userid,
            word1: '',
            word2: ''
        };
        this.common.postMethod('', params).then((res) => {
        }, err => {
            console.log(err);
        });
    }
    CaptureImage() {
        this.isCaptureImage = true;
        const options = { limit: 1 };
        this.mediaCapture.captureImage(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'jpg'
            });
        }, (err) => console.error(err));
    }
    CaptureVideo() {
        const options = { limit: 1, duration: 120, quality: 80 };
        this.mediaCapture.captureVideo(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp4'
            });
        }, (err) => console.error(err));
    }
    CaptureAudio() {
        const options = { limit: 1 };
        this.mediaCapture.captureAudio(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp3'
            });
        }, (err) => console.error(err));
    }
    PickLinks() {
        this.isLink = true;
        this.hideImageSpace = false;
    }
    PickDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fileChooser.open().then(uri => {
                this.filePath.resolveNativePath(uri).then(filePath => {
                    this.filesPath = filePath;
                    this.filesName = this.filesPath.substring(this.filesPath.lastIndexOf("/") + 1);
                    this.filesType = this.filesName.substring(this.filesName.lastIndexOf(".") + 1);
                    this.Add('file');
                    this.fileArray.push({
                        name: this.filesName,
                        type: this.filesType,
                        uri: uri,
                        filePath: filePath
                    });
                    // this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
                    //   let files = fileInfo as FileEntry;
                    //   files.file(success => {
                    //     this.filesType   = success.type;
                    //     this.filesName  = success.name;
                    //     this.fileArray.push({
                    //       name: this.filesName,
                    //       type: this.filesType,
                    //       uri: uri
                    //     })
                    //     this.Add('file');
                    //   });
                    // },err => {
                    //   console.log(err);
                    //   throw err;
                    // });
                }, err => {
                    console.log(err);
                    throw err;
                });
            }, err => {
                console.log(err);
                throw err;
            });
        });
    }
    fileChangeEvent(e, type) {
        if (type === 'folder') {
            this.FolderClicked = true;
            if (e.target.files === 0) {
                this.common.presentToast('You Have Selected No File !!!');
                return;
            }
            this.selectedFiles = e.target.files;
            for (let i = 0; i < e.target.files.length; i++) {
                this.myFiles.push(e.target.files[i]);
                this.Add('file');
            }
            this.urls = [];
            let files = e.target.files;
            if (files) {
                for (let file of files) {
                    let reader = new FileReader();
                    var error = reader.error;
                    reader.onload = (e) => {
                        this.urls.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
        else if (type === 'image') {
            this.FolderClicked = true;
            // if (e.target.files.length>2) {
            //   this.Invitation.reset();
            //   this.common.presentToast('Your are not allowed to choose more than two images');
            // } 
            if (e.target.files === 0) {
                this.common.presentToast('You Have Selected No File !!!');
                return;
            }
            // if (e.target.files.length===1) {
            //   this.Invitation.reset();
            //   this.common.showAlert('Try to choose maximum 2 media');
            // } 
            this.selectedFiles = e.target.files;
            for (let i = 0; i < e.target.files.length; i++) {
                this.myFiles.push(e.target.files[i]);
                this.Add('file');
            }
            this.urls = [];
            let files = e.target.files;
            if (files) {
                for (let file of files) {
                    let reader = new FileReader();
                    var error = reader.error;
                    reader.onload = (e) => {
                        this.urls.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
        else if (type === 'audio') {
            this.FolderClicked = false;
            if (this.MediaFiles.length === 0) {
                this.MediaFiles[0] = e.target.files[0];
                this.common.showAlert('Try to capture maximum 2 audio');
            }
            else {
                this.MediaFiles[1] = e.target.files[0];
                for (let i = 0; i < this.MediaFiles.length; i++) {
                    this.myFiles.push(this.MediaFiles[i]);
                }
            }
        }
        else if (type === 'video') {
            this.FolderClicked = false;
            if (this.MediaFiles.length === 0) {
                this.MediaFiles[0] = e.target.files[0];
                this.common.showAlert('Try to capture maximum 2 video');
            }
            else {
                this.MediaFiles[1] = e.target.files[0];
                for (let i = 0; i < this.MediaFiles.length; i++) {
                    this.myFiles.push(this.MediaFiles[i]);
                }
            }
        }
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.anArray.length >= 2) {
                const formData = new FormData();
                // for( let i=0;i<this.fileArray.length; i++) 
                // {
                //   this.filePath.resolveNativePath(this.fileArray[i].uri).then(filePath => {
                //     this.filesPath = filePath;
                //     var fileName = this.fileArray[i].name;
                //     this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
                //       let files = fileInfo as FileEntry;
                //       files.file(success => {
                //         // console.log('now i have a file ob');
                //         console.dir(JSON.stringify(success));
                //         // var reader = new FileReader();
                //         // reader.onloadend = function(e) {
                //         //   var imgBlob = new Blob([this.result], { type:success.type});
                //         //   console.dir("blob--------------------------" + imgBlob);
                //         //   formData.append('filename[]', imgBlob, fileName);
                //         // };
                //         // reader.readAsArrayBuffer(success);
                //         formData.append('filename', success);
                //       });
                //     },err => {
                //       console.log(err);
                //       throw err;
                //     });
                //   },err => {
                //     console.log(err);
                //     throw err;
                //   });
                // }
                formData.append("caption", this.userData.caption);
                formData.append("userid", this.userDetails.userid);
                formData.append("sub_caption", JSON.stringify(this.anArray));
                formData.append("links", JSON.stringify(this.linkArray));
                formData.append("texts", JSON.stringify(this.wordArray));
                yield this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_15__["baseUrl"] + 'iMatch/api/v1/create_personalmatch', formData).subscribe((res) => {
                    if (res['status']) {
                        var matchid = res['matchid'];
                        this.fileArray.forEach(item => {
                            const fileTransfer = this.transfer.create();
                            fileTransfer.onProgress((e) => {
                                let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
                                this.common.presentToast('Uploaded ' + prg + '% of file');
                            });
                            let options = {
                                fileKey: 'matchfile',
                                fileName: item.name,
                                httpMethod: 'POST',
                                mimeType: 'multipart/form-data',
                                chunkedMode: false,
                                params: {
                                    match_id: matchid,
                                    userid: this.userDetails.userid
                                },
                                headers: {
                                    Connection: 'close'
                                }
                            };
                            fileTransfer.upload(item.filePath, _services_config__WEBPACK_IMPORTED_MODULE_15__["baseUrl"] + 'iMatch/api/v1/MatchFileUpload', options)
                                .then((data) => {
                                console.dir('*****************' + data);
                            }, (err) => {
                                console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));
                            });
                        });
                        this.common.presentToast('File Uploaded Successful');
                        this.common.router.navigate(['tabs/tab6']);
                        this.common.hideLoader();
                    }
                    else {
                        this.common.hideLoader();
                        this.common.presentToast('File Upload Failed !!!');
                    }
                }, err => {
                    console.dir("*****************err", JSON.stringify(err));
                    this.common.hideLoader();
                    console.log('err', err);
                });
            }
            else if (this.anArray.length < 2) {
                this.common.showAlert("Maximum media more than 2");
            }
        });
    }
    uploadFile2(file, type) {
        var arr = new Array(file[0]['name'], file[1]['name']);
        var str = arr.toString();
        let options;
        options = {
            fileKey: "filename[]",
            fileName: str,
            httpMethod: 'POST',
            mimeType: 'multipart/form-data',
            chunkedMode: false,
            params: {
                caption: this.userData.caption,
                userid: this.userDetails.userid,
            },
            headers: {
                Connection: 'close'
            }
        };
        let filePath;
        if (type !== 'audio') {
            filePath = encodeURI(file.fullPath);
        }
        else {
            filePath = file.fullPath;
        }
        const fileTransfer = this.transfer.create();
        const fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_15__["baseUrl"] + '/iMatch/api/v1/create_personalmatch';
        fileTransfer.onProgress((e) => {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
        });
        fileTransfer.upload(filePath, fileUplaodUrl, options)
            .then((data) => {
            this.FileTransferResponse = data;
        }, (err) => {
            console.log('File Transfer Error:', err);
        });
    }
    ToLaunchAMatch(e) {
        if (e.type == 'click' && this.FileTransferResponse.responseCode != undefined) {
            if (this.FileTransferResponse.response === true) {
                this.common.presentLoading();
                this.common.showLoader();
                setTimeout(() => {
                    this.common.presentToast('Your Personal Match is Uploaded Successfully');
                    this.common.router.navigate(['tabs/tab6']);
                }, 3000);
                this.common.hideLoader();
            }
            else {
                this.common.presentLoading();
                this.common.presentToast('Your Personal Match Upload Failed');
            }
        }
        else {
            this.common.showLoader();
            this.common.presentToast('Submit with valid details... and wait for a while to gets uploaded to our server ...');
            this.common.hideLoader();
        }
    }
};
PersonalMatchMediaUploadPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_14__["MediaCapture"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__["WebView"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_13__["File"] }
];
PersonalMatchMediaUploadPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['fileInput', { static: false },] }]
};
PersonalMatchMediaUploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-personal-match-media-upload',
        template: _raw_loader_personal_match_media_upload_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_match_media_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonalMatchMediaUploadPage);



/***/ }),

/***/ "200W":
/*!***********************************************************************************!*\
  !*** ./src/app/personal-match-media-upload/personal-match-media-upload.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalMatchMediaUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPageModule", function() { return PersonalMatchMediaUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _personal_match_media_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-match-media-upload-routing.module */ "mAHn");
/* harmony import */ var _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-match-media-upload.page */ "/EVX");







let PersonalMatchMediaUploadPageModule = class PersonalMatchMediaUploadPageModule {
};
PersonalMatchMediaUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _personal_match_media_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalMatchMediaUploadPageRoutingModule"]
        ],
        declarations: [_personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_6__["PersonalMatchMediaUploadPage"]]
    })
], PersonalMatchMediaUploadPageModule);



/***/ }),

/***/ "JzAD":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-match-media-upload/personal-match-media-upload.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 15px;\">PERSONAL MATCH MEDIA UPLOAD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"box\">\r\n    <div  class=\"inner-box\">\r\n      <div style=\"text-align: center;\">\r\n          <img src=\"../../assets/icon/help-invitation-terms/bar.png\" style=\"height: 130px; width: 180px;\">\r\n      </div>\r\n\r\n      <div style=\"background-color: #444446; margin-top: -5%; padding: 20px 10px 10px 10px; border-right: 1px solid #e0e0e0; text-align: center;\">\r\n        <div *ngFor=\"let att of this.anArray; let idx = index\">\r\n          <div *ngIf=\"att.type=='file'\">\r\n            <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{this.fileArray[att.position].name}} </p>\r\n          </div>\r\n          <div *ngIf=\"att.type=='text'\">\r\n            <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"wordArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n          </div>\r\n          <div *ngIf=\"att.type=='link'\">\r\n            <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"linkArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n          </div>\r\n          <!--<ion-input type=\"text\" placeholder=\"Enter sub caption\" [(ngModel)]=\"anArray[idx].value\" class=\"input-field\"></ion-input> -->\r\n        </div>\r\n        <div *ngIf=\"hideImageSpace==true\">\r\n          <form [formGroup]=\"Invitation\">\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userData.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n            <div style=\"justify-content: center;display: flex;flex-wrap: wrap;\">\r\n              <!-- <ion-chip style=\"background-color: #f44336; display: inline-block;justify-content: center; flex-wrap: nowrap;\">\r\n                <input #file class=\"custom-file-input-storage\" formControlName=\"file\" style=\"width: 160px;\" type=\"file\" multiple (change)=\"fileChangeEvent($event, 'folder')\">\r\n              </ion-chip> -->\r\n              <ion-chip   (click)=\"PickDocuments()\" style=\"background-color: #f44336; display: inline-block;justify-content: center; flex-wrap: nowrap;\">Select File</ion-chip>\r\n              <ion-chip   (click)=\"CaptureImage()\" style=\"background-color: #9c27b0; display: inline-block;  flex-wrap: nowrap;\">Capture Image</ion-chip>\r\n\r\n                <!-- <ion-icon name=\"videocam\"></ion-icon> -->\r\n                <ion-chip   (click)=\"CaptureVideo()\" style=\"background-color: #3f51b5; display: inline-block;  flex-wrap: nowrap;\">Capture Video</ion-chip>\r\n                <!-- <ion-label>Capture Video</ion-label> -->\r\n\r\n                <ion-chip   (click)=\"CaptureAudio()\" style=\"background-color: #2196f3; display: inline-block;  flex-wrap: nowrap;\">Capture Audio</ion-chip>\r\n\r\n              <ion-chip style=\"background-color: #009688;\" (click)=\"toShowLinkInputFiled()\">\r\n                <ion-label>Share Links</ion-label>\r\n              </ion-chip>\r\n\r\n              <ion-chip style=\"background-color: #ff9800;\" (click)=\"toShowTextArea()\">\r\n                <ion-label>Share Wordings</ion-label>\r\n              </ion-chip>\r\n\r\n            </div>\r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n          </form>\r\n        </div>\r\n\r\n        <form [formGroup]=\"LinkInputForm\">\r\n          <div *ngIf=\"isLink==true\" class=\"animate__animated animate__fadeInUp\">\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userLink.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n            <ion-textarea formControlName=\"link1\" [(ngModel)]=\"userLink.link1\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\" value=\"https://\"></ion-textarea>\r\n            <ion-textarea formControlName=\"link2\" [(ngModel)]=\"userLink.link2\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\" value=\"https://\"></ion-textarea>\r\n\r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n          </div>\r\n        </form>\r\n        <form [formGroup]=\"TextInputForm\">\r\n          <div *ngIf=\"isWordings==true\" class=\"animate__animated animate__fadeInUp\">\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userText.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n            <ion-textarea formControlName=\"text1\" [(ngModel)]=\"userText.text1\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n            <ion-textarea formControlName=\"text2\" [(ngModel)]=\"userText.text2\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n            <ion-button color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"submit()\">Launch</ion-button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "mAHn":
/*!*******************************************************************************************!*\
  !*** ./src/app/personal-match-media-upload/personal-match-media-upload-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PersonalMatchMediaUploadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchMediaUploadPageRoutingModule", function() { return PersonalMatchMediaUploadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-match-media-upload.page */ "/EVX");




const routes = [
    {
        path: '',
        component: _personal_match_media_upload_page__WEBPACK_IMPORTED_MODULE_3__["PersonalMatchMediaUploadPage"]
    }
];
let PersonalMatchMediaUploadPageRoutingModule = class PersonalMatchMediaUploadPageRoutingModule {
};
PersonalMatchMediaUploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalMatchMediaUploadPageRoutingModule);



/***/ }),

/***/ "oLLq":
/*!***********************************************************************************!*\
  !*** ./src/app/personal-match-media-upload/personal-match-media-upload.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.input-field {\n  border: 1px solid #b6b6b7;\n  background: #cdcdce30;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.box {\n  width: 88%;\n  border: 1px solid transparent;\n  background-color: #707072;\n  margin-left: 6%;\n  margin-top: 6%;\n  border-radius: 5px;\n}\n\n.inner-box {\n  border: 1px solid #e0e0e0;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  margin: 5%;\n  border-radius: 5px;\n}\n\n.inner-box div {\n  position: relative;\n}\n\n.inner-box div ion-img {\n  width: 45%;\n}\n\n.inner-box div ion-thumbnail {\n  border: 1px solid #fcbb3b;\n  background-color: #ffffffcc;\n  position: absolute;\n  right: 4%;\n  top: 12%;\n  height: 65px;\n  width: 65px;\n}\n\n.custom-file-input {\n  color: transparent;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active {\n  outline: 0;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Image {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Image::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Image::before {\n  content: \"Capture Image\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-storage {\n  color: transparent;\n}\n\n.custom-file-input-storage::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-storage::before {\n  content: \"Files From Phone Storage\";\n  color: #4c2d00;\n  width: 180px;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n  position: relative;\n  top: 10%;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Video {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Video::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Video::before {\n  content: \"Capture Video\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n\n.custom-file-input-Capture-Audio {\n  color: transparent;\n}\n\n.custom-file-input-Capture-Audio::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input-Capture-Audio::before {\n  content: \"Capture Audio\";\n  color: #4c2d00;\n  display: inline-block;\n  border-radius: 20px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\nbody {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLW1hdGNoLW1lZGlhLXVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4REFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUFJO0VBQ0ksVUFBQTtBQUVSOztBQUFJO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVSOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSwwREFBQTtBQUdKOztBQUFFO0VBQ0UsYUFBQTtBQUdKOztBQUNFO0VBQ0Usa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0FBR0o7O0FBREU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtFQUdBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBT0U7RUFDRSxhQUFBO0FBSko7O0FBVUU7RUFDRSxrQkFBQTtBQVBKOztBQVNFO0VBQ0Usa0JBQUE7QUFOSjs7QUFRRTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBWEo7O0FBZUU7RUFDRSxhQUFBO0FBWko7O0FBa0JBO0VBQ0ksa0JBQUE7QUFmSjs7QUFpQkU7RUFDRSxrQkFBQTtBQWRKOztBQWdCRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0VBR0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFsQko7O0FBd0JFO0VBQ0UsYUFBQTtBQXJCSjs7QUEyQkE7RUFDSSxrQkFBQTtBQXhCSjs7QUEwQkU7RUFDRSxrQkFBQTtBQXZCSjs7QUF5QkU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtFQUdBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBN0JKOztBQWlDSTtFQUNBLGFBQUE7QUE5QkoiLCJmaWxlIjoicGVyc29uYWwtbWF0Y2gtbWVkaWEtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hlbHAtaW52aXRhdGlvbi10ZXJtcy9pbnZpdGF0aW9uLWJnLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNztcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2UzMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5ib3h7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgLy8gaGVpZ2h0OiAyNDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW5uZXItYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlubmVyLWJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpb24taW1ne1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2JiM2I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNjO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1NlbGVjdCBzb21lIGZpbGVzJztcclxuICAgIGNvbG9yOiAjNGMyZDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjlmOWY5LCAjZTNlM2UzKTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dDphY3RpdmU6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpOyBcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbi8vICAgY3VzdG9tLWZpbGUtaW5wdXQtQ2FwdHVyZS1JbWFnZVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUltYWdlIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtSW1hZ2U6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtSW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBJbWFnZSc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUltYWdlXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1zdG9yYWdlXHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2Uge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdGaWxlcyBGcm9tIFBob25lIFN0b3JhZ2UnO1xyXG4gICAgY29sb3I6ICM0YzJkMDA7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOWY5ZjksICNlM2UzZTMpO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1zdG9yYWdlXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvXHJcbi5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtVmlkZW86Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtVmlkZW86OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBWaWRlbyc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcblxyXG4gIH1cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gICBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLVZpZGVvXHJcblxyXG4vLyBjdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUF1ZGlvXHJcbi5jdXN0b20tZmlsZS1pbnB1dC1DYXB0dXJlLUF1ZGlvIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtQXVkaW86Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0LUNhcHR1cmUtQXVkaW86OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQ2FwdHVyZSBBdWRpbyc7XHJcbiAgICBjb2xvcjogIzRjMmQwMDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIH1cclxuICAgIGJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbi8vICAgY3VzdG9tLWZpbGUtaW5wdXQtQ2FwdHVyZS1BdWRpb1xyXG5cclxuXHJcbi8vICAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2U6aG92ZXI6OmJlZm9yZSB7XHJcbi8vICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4vLyAgIH1cclxuLy8gICAuY3VzdG9tLWZpbGUtaW5wdXQtc3RvcmFnZTphY3RpdmUge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICB9XHJcbi8vICAgLmN1c3RvbS1maWxlLWlucHV0LXN0b3JhZ2U6YWN0aXZlOjpiZWZvcmUge1xyXG4vLyAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTsgXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGJvZHkge1xyXG4vLyAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=personal-match-media-upload-personal-match-media-upload-module-es2015.js.map