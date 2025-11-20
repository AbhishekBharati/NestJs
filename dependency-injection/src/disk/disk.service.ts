import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) { }

  getData() {
    console.log("Drawing 20 watts of Power from PowerSupply");
    this.powerService.supplyPower(20);
    return 'Data';
  }
}
