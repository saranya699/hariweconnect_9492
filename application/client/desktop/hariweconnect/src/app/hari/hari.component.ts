import { Component, OnInit } from '@angular/core';
import { HariService } from './hari.service';

@Component({
  selector: 'app-hari',
  templateUrl: './hari.component.html',
  styleUrls: ['./hari.component.scss'],
})

export class HariComponent implements OnInit {
    public hari = {
        name: '',
    }

    constructor (
        private hariService: HariService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.hariService.GpCreate(this.hari).subscribe(data => {
            this.hari.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}