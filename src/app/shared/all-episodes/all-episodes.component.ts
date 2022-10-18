import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-all-episodes',
  templateUrl: './all-episodes.component.html',
  styleUrls: ['./all-episodes.component.scss'],
})
export class AllEpisodesComponent implements OnInit {
  allepisodes: any;
  constructor(private randmService: RickAndMortyService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.randmService.getAllEpisodes().then((res: any) => {
      this.allepisodes = res;
      console.log(this.allepisodes);
  });

}
async openModal(data: any) {
  const modal = await this.modalController.create({
  component:AllEpisodesComponent ,
  componentProps: { character: data }
  });
  return await modal.present();
 }
}
