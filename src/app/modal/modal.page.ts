import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() heading: string;
  @Input() content: any;

  constructor(private common: CommonService) { }

  ngOnInit() {}

  dismissModal() {
    this.common.modalController.dismiss({
      dismissed: true
    });
  }

}
