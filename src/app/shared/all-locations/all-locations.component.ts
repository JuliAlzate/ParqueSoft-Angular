import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.scss'],
})
export class AllLocationsComponent implements OnInit {
  alllocations: any;

  constructor(private randmService: RickAndMortyService,
    private modalController: ModalController) {}

  ngOnInit() {
    this.randmService.getAlllocations().then((res: any) => {
      this.alllocations = res;
      console.log(this.alllocations);
    });
  }
  async openModal(data: any) {
    const modal = await this.modalController.create({
    component:AllLocationsComponent ,
    componentProps: { character: data }
    });
    return await modal.present();
   }
}
