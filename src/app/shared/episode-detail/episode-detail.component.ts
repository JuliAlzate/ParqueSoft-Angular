import { Component,Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  @Input() item: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.item);
  }
  async close(){
    await this.modalCtrl.dismiss();
  }

}
