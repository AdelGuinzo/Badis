import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showSuccessMessage = false;

  onSubmit(form: any) {
    if (form.valid) {
      // Show success message
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000); // Hide message after 3 seconds

      // Reset form if needed
      form.reset();
    } else {
      alert('Please fill all inputs.');
    }
  }
}

