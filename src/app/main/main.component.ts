import { Component } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  devices: Device[];

  constructor(private devicesService:DevicesService) {
    this.devicesService.getDevices('whoever')
      .subscribe(devices => this.devices = devices);
  }
}
