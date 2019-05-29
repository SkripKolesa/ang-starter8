import { Component, OnInit } from '@angular/core';
import {LoadingScreenService} from "../../shared/services/loading-screen.service";

@Component({
  selector: 'app-example-content',
  templateUrl: './example-content.component.html',
  styleUrls: ['./example-content.component.scss']
})
export class ExampleContentComponent implements OnInit {

  constructor(private loadingService: LoadingScreenService) { }

  ngOnInit() {
    this.loadingService.show();
    setTimeout(() => this.loadingService.hide(), 3000);
  }

}
