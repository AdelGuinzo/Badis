import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';  // Assume we have a service for handling API requests

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.scss']
})
export class ManageClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  addClient(client: any) {
    this.clientService.addClient(client).subscribe(() => {
      this.getClients();
    });
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getClients();
    });
  }
}
