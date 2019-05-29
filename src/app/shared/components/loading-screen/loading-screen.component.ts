import {Component, OnInit} from '@angular/core';
import {LoadingScreenService} from "../../services/loading-screen.service";

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  isLoading = false;

  constructor(private service: LoadingScreenService) {
  }

  ngOnInit() {
    this.service.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }

}
