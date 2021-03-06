import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent } from '@ionic/angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import * as BaseConfig from '../services/config';

const { Camera, Filesystem } = Plugins;
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.page.html',
  styleUrls: ['./chat-message.page.scss'],
})
export class ChatMessagePage implements OnInit {
  [x: string]: any;

  @ViewChild(IonContent) content: IonContent;
  @HostListener('window:scroll', ['$event']) 

  FormSubmit : boolean = false;
  userDetails : any = [];
  chatDetails: any;
  chatMessage: any;
  ChattedUser: any = [];
  interval:any;
  showPlusView : boolean = false;

  public MessageForm: FormGroup;

  message: AbstractControl;

  userMessage = {
    "message" : ""
  }

  isTyping: boolean = false;

  constructor(
    public storageservice: StorageService,
    private common: CommonService,
    public formbuilder: FormBuilder,
    private mediaCapture: MediaCapture,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private photoView: PhotoViewer
  )  {

    this.MessageForm = formbuilder.group({
      message: ['', Validators.compose([Validators.required,Validators.minLength(1)])]
    });

    this.message = this.MessageForm.controls['message'];

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.chatDetails = resp;
  });

  // this.interval = setInterval(() => {
  //   this.ionViewWillEnter();
  // },1000);

   setTimeout(() => {
   this.content.scrollToBottom(1500);
   },100);

   }

  ngOnInit() {
  }

  ionViewWillEnter(){

      let params = {
        loggeduserid : this.chatDetails.OpponentId,
        chatuserid : this.chatDetails.userid,
      }
      this.common.postMethod('GetDetailChat',params).then((res:any) => {
        this.chatMessage = res.details;
        if (res.details > res.details[5]) {
          this.content.scrollToBottom(1500);
        } else {
          this.content.scrollToTop(1500);
        }
      });

      this.ChattedUsers();

  }

  ionViewWillLeave(){
   clearInterval(this.interval);
  }

  ChattedUsers() {
    let params = {
      userid: this.userDetails.userid,
    }
    this.common.postMethod('GetChat',params).then((res:any) => {
      this.ChattedUser = res.details;
    });
  }

  toViewNextChat(event,ChattedUser) {
    if(ChattedUser != undefined) {
      this.common.navCtrl.navigateForward(['chat-message'], {queryParams: ChattedUser});
    } else {
      
      this.common.presentToast('???? Sorry the user is empty !');
    }
  }

  gotoSettings() {
    this.common.router.navigate(['settings']);
  }

  onChange(e) {

    // if (e.key=='Backspace') {
    //   this.isTyping = false;

    // } else {
    //   this.isTyping = true;
    // }

  }

  chatSubmit() {
    this.FormSubmit = true;
    let params  = {
      userid_from : this.userDetails.userid,
      userid_to : this.chatDetails.userid,
      message : this.userMessage.message,
    }
    this.common.postMethod('Chat',params).then((res:any) => {
      if(res.status == true) {
        setTimeout(() => {
        this.content.scrollToBottom(1500);
        },100);
        this.MessageForm.reset();
      } else {
        //////////////////////////
      }
    });
  }

  ClickedOnImage(e, message, i) {
    this.photoView.show(message.filename, this.chatDetails.name, {share: false});
  }

  showEnlargedView() {
    this.showPlusView = !this.showPlusView;
  }

  toShareAttachment() {
    let file: any;

    this.fileChooser.open()
      .then(uri => {

        this.filePath.resolveNativePath(uri)
          .then(filePath => {
            let fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
            let currentName = uri.substring(uri.lastIndexOf('/') + 1, uri.lastIndexOf('?'));
            file = {
              name: fileNameFromPath,
              fullPath: filePath
            };
            this.uploadFile(file, 'file');
          })
          .catch(err => console.log(err));
    })
    .catch(e => console.log(e));
  }

  toShareImage() {
    const options: CaptureImageOptions = { limit: 1};
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          this.uploadFile(data[0], 'image');
        },
        (err: CaptureError) => console.error(err)
      );
  }

  toShareAudio() {
    const options: CaptureAudioOptions = { limit: 1};
    this.mediaCapture.captureAudio(options)
      .then(
        (data: MediaFile[]) => {
          this.uploadFile(data[0], 'audio');
        },
        (err: CaptureError) => console.error(err)
      );
  }

  uploadFile(file:any, type: string) {

    let options: FileUploadOptions;

    options = {
      fileKey: 'userfile',
      fileName: file.name,
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      params: {
        userid_from : this.userDetails.userid,
        userid_to : this.chatDetails.userid,
        // userfile: '',
      },
      headers: {
        Connection: 'close'
      }
   };


    let filePath: any;
    if (type !== 'audio') {
      filePath = encodeURI(file.fullPath);
    } else {
      filePath = file.fullPath;
    }

    const fileTransfer: FileTransferObject = this.transfer.create();

    const fileUplaodUrl = BaseConfig.baseUrl + 'iMatch/api/v1/UploadChatFile';

    fileTransfer.onProgress((e) =>
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
    });

    fileTransfer.upload(filePath, fileUplaodUrl, options)
      .then((data) => {
        // this.FileTransferResponse = data;
      }, (err) => {
        console.log('File Transfer Error:', err);

      });

}

}
