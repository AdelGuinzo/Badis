import { Component, OnInit } from '@angular/core';
import { MachineService } from './machine.service';  // Assume we have a service for handling API requests

@Component({
  selector: 'app-machine-tracking',
  templateUrl: './machine-tracking.component.html',
  styleUrls: ['./machine-tracking.component.scss']
})
export class MachineTrackingComponent implements OnInit {
  itemsPerPage = 5;
  currentPage = 1;
  totalItems = 20; // Update this to match the total number of items you have
  totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

  machines = [
    { id: 'Mx001234', type: 'Mixer', status: 'pending', channel: '4', completion: 45 },
    { id: 'Cx009876', type: 'Cutter', status: 'completed', channel: '2', completion: 90 },
    { id: 'Tx003456', type: 'Tiller', status: 'on schedule', channel: '7', completion: 70 },
    { id: 'Mx004567', type: 'Mixer', status: 'pending', channel: '6', completion: 30 },
    { id: 'Cx005678', type: 'Cutter', status: 'completed', channel: '3', completion: 85 },
    { id: 'Tx006789', type: 'Tiller', status: 'on schedule', channel: '8', completion: 65 },
    { id: 'Mx007890', type: 'Mixer', status: 'pending', channel: '2', completion: 50 },
    { id: 'Cx008901', type: 'Cutter', status: 'completed', channel: '5', completion: 95 },
    { id: 'Tx009012', type: 'Tiller', status: 'on schedule', channel: '4', completion: 75 },
    { id: 'Mx010123', type: 'Mixer', status: 'pending', channel: '1', completion: 40 },
    { id: 'Cx011234', type: 'Cutter', status: 'completed', channel: '7', completion: 100 },
    { id: 'Tx012345', type: 'Tiller', status: 'on schedule', channel: '6', completion: 85 },
    { id: 'Mx013456', type: 'Mixer', status: 'pending', channel: '3', completion: 55 },
    { id: 'Cx014567', type: 'Cutter', status: 'completed', channel: '8', completion: 80 },
    { id: 'Tx015678', type: 'Tiller', status: 'on schedule', channel: '2', completion: 60 },
    { id: 'Mx016789', type: 'Mixer', status: 'pending', channel: '4', completion: 35 },
    { id: 'Cx017890', type: 'Cutter', status: 'completed', channel: '1', completion: 90 },
    { id: 'Tx018901', type: 'Tiller', status: 'on schedule', channel: '5', completion: 70 },
    { id: 'Mx019012', type: 'Mixer', status: 'pending', channel: '6', completion: 50 },
    { id: 'Cx020123', type: 'Cutter', status: 'completed', channel: '2', completion: 95 },
    { id: 'Tx021234', type: 'Tiller', status: 'on schedule', channel: '7', completion: 80 },
  ];
  paginatedMachines = this.getPaginatedMachines();


  constructor(private machineService: MachineService) {}

  ngOnInit() {
    this.getMachines();
  }

  getPaginatedMachines() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.machines.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatedMachines = this.getPaginatedMachines();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginatedMachines = this.getPaginatedMachines();
    }
  }


  getMachines() {
    this.machineService.getMachines().subscribe(data => {
      this.machines = data;
    });
  }

  addMachine(machine: any) {
    this.machineService.addMachine(machine).subscribe(() => {
      this.getMachines();
    });
  }

  deleteMachine(id: number) {
    this.machineService.deleteMachine(id).subscribe(() => {
      this.getMachines();
    });
  }
}
