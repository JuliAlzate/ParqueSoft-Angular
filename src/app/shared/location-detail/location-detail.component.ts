import { Component,Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
  @Input() item: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.item);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}


