import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // userDetails: any;
  ongoingDetails: any;
  showPersonalScores: boolean = false;
  hideValue: boolean = true;

  RemainingTime: number;
  interval: any;
  HoursAgo: number;


  public searchControl: FormControl;

  public searchTerm: string = "";
  searching: any = false;
  ShowFooter: any = true;
  showCategory: boolean = true;

  userDetails : any = [];
  allUsers: any = [];
  BestiesList: any = [];
  SquadList: any = [];
  Fans: any = [];
  FansOf: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService,    
    public popoverController: PopoverController,
    public socialSharing: SocialSharing,

    ) 
    {

      this.searchControl = new FormControl();

      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });
      
    }

    ngOnInit() {

      this.listAllUsers();
      this.setFilteredItems();

      this.searchControl.valueChanges
      .pipe(debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe(search => {
        this.searching = false;
        this.showCategory = true;
        this.searchTerm = search;
        this.setFilteredItems();
      });

    }
  
    ionViewWillEnter() {
  
  
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
        if (this.userDetails.userid!=undefined) {
          this.listAllUsers();
          this.toGetUsersCategory();
        }
      });
      // this.presentPopover();
    }
  
    listAllUsers() {
  
      let params = {
        userid : this.userDetails.userid
      }
  
      this.common.listUsers('Listusers',params).subscribe((res:any) => {
        this.allUsers = res.details.name;
      });
  
    }
  
    onSearchInput(e) {
      this.searching = true;
      this.showCategory = false;
      this.setFilteredItems();
    }
  
    setFilteredItems() {
      this.allUsers = this.filterItems(this.searchTerm);
    }
  
    addToMatch(event,user) {
      this.common.navCtrl.navigateForward(['/before-match-invitation'], {queryParams: user});
    }
  
    filterItems(searchTerm) {
      return this.allUsers.filter(user => {
        return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
  
    }

    gotoVisitorsActivity(event,user){
      this.common.navCtrl.navigateForward(['/visitors-view-activity'], {queryParams: user});
    }
  
    togoBack() {
      this.common.router.navigate(['/tabs/tab6']);
    }
  
    toShare() {
  
      const msg = 'Share iMatch with your friends:';
  
      this.socialSharing.share(msg).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
  
    }
  
    toListCategory(val) {
  
      this.ShowFooter=false;
  
          if (val=='bestie') {
  
            if (this.BestiesList.length!=0) {
  
              this.common.presentLoading();
              this.allUsers = this.BestiesList ;
              this.common.presentToast('Your Bestie List is Successfully Fetched ...');
  
            } else {
  
              this.allUsers = this.BestiesList ;
              this.common.presentToast('You are having no besties in your Bestie List');
  
            }
  
          } else if (val=='squad') {
  
            if (this.SquadList.length!=0) {
  
              this.common.presentLoading();
              this.allUsers = this.SquadList;
              this.common.presentToast(' Your Squad List is Successfully Fetched ... ');
  
            } else {
  
              this.allUsers = this.SquadList;
              this.common.presentToast(' You are having no squad in your `Squad List` ');
              
            }
  
          } else if (val=='fan') {
  
            if (this.Fans.length!=0) {
  
              this.common.presentLoading();
              this.allUsers = this.Fans;
              this.common.presentToast(' Your Fan List is Successfully Fetched ... ');
  
            } else {
  
              this.allUsers = this.Fans;
              this.common.presentToast(' You are having no fans in your `Fans List` ');
              
            }
  
          } else if (val=='fan-of') {
  
            if (this.FansOf.length!=0) {
  
              this.common.presentLoading();
              this.allUsers = this.FansOf;
              this.common.presentToast(' Your Fan Of List is Successfully Fetched ... ');
  
            } else {
              
              this.allUsers = this.FansOf;
              this.common.presentToast(' You are having no fan of in your `Fan Of List` ');
              
            }
  
          } else if (val=='invite') {
  
              this.toShare();
              this.listAllUsers();
  
          }
  
    }
  
    toGetUsersCategory() {
      let params = {
        id : this.userDetails.userid
      }
  
      this.common.postMethod('getBestieList',params).then((res:any) => {
        if (res.status == true) {
  
          this.BestiesList = res.details.besties;
          this.SquadList = res.details.squad;
          this.Fans = res.details.fan;
          this.FansOf = res.details.fan_of;
        } else {
          this.common.presentToast(' Error Loading Categories ');
        }
      } , err => {
        console.log('Error:',err);
  
      });
  
    }
  
    async presentPopover() {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        cssClass: 'c-ion-popover-md-h',
        showBackdrop: true,
        translucent: true
      });
      return await popover.present();
    }
}

@Component({
  template: `
  <div style="padding: 15px; background-color: #707072;">
    <div style="border: 1px solid #ffffff8f; padding: 15px; border-radius: 4px; color: #dcdcdc;">
      <img src="../../assets/icon/help-invitation-terms/bar.png" alt="">
      <h6>Hai {{userDetails.name}} !</h6>
      <h2>Whom you want to call for a media match ?
      </h2>
    </div>
  </div>  
   `,
   styles: [` .my-custom-class: --width: 300px `]
})

export class PopoverComponent {

  userDetails: any = [];

 constructor(
   public popoverController: PopoverController,
   public storageservice: StorageService,

 ) {}

    ionViewWillEnter(){
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

       setTimeout(() => {
         this.popoverController.dismiss();
       }, 4000);

    }
}