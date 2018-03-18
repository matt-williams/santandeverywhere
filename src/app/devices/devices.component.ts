import { Component } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
  devices: Device[];

  constructor(private devicesService:DevicesService, private authService:AuthService) {
    this.devicesService.getDevices(authService.getUsername())
      .subscribe(devices => this.devices = devices,
                 error => this.devices = [new Device("abcdef", 123), new Device("ghijkl", 456)]);
  }
}
