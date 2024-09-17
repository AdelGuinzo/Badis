import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  machines: any[] = [];
  schedules: any[] = [];
  selectedMachine: string = '';
  scheduleDate: string = '';
  scheduleTime: string = '';
  machineAvailability: string = '';

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    // Fetch machines from API
    this.getMachines();

    // Fetch scheduled machines
    this.getSchedules();
  }

  getMachines(): void {
    // Mocked machines for now (replace this with actual service call)
    this.machines = [
      { id: 1, name: 'Machine 1' },
      { id: 2, name: 'Machine 2' },
      { id: 3, name: 'Machine 3' }
    ];
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe((schedules) => {
      this.schedules = schedules;
    });
  }

  scheduleMachine(): void {
    const newSchedule = {
      machineName: this.machines.find(machine => machine.id === this.selectedMachine)?.name,
      date: this.scheduleDate,
      time: this.scheduleTime,
      availability: this.machineAvailability
    };

    // Add the new schedule to the list and reset the form
    this.scheduleService.addSchedule(newSchedule).subscribe((schedule) => {
      this.schedules.push(schedule);
      this.resetForm();
    });
  }

  resetForm(): void {
    this.selectedMachine = '';
    this.scheduleDate = '';
    this.scheduleTime = '';
    this.machineAvailability = '';
  }
}
