import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WizardWorldApiService } from '../services/wizard-world-api.service';
import { IFeedback } from '../dto/dto';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  feedbackForm = new FormGroup({
    feedbackType: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required)
  });

  constructor(private wizardWorldService : WizardWorldApiService){}

  get feedbackType() {
    return this.feedbackForm.get('feedbackType') as FormControl;
  }
  get feedback() {
    return this.feedbackForm.get('feedback') as FormControl;
  }

  handleSubmit() {
    if (this.feedbackForm.invalid) return;
    const addFeedback : IFeedback = {
      feedBackType: this.feedbackType.value,
      feedBack: this.feedback.value,
      entityId: this.generateRandomString(10)
    }
    this.wizardWorldService.postFeedback(addFeedback);
    alert("Your feedback has been sent successfully!");
    this.feedbackForm.reset();
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
