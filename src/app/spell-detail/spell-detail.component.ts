import { Component, Input, OnInit } from '@angular/core';
import { ISpell } from '../dto/dto';
import { WizardWorldApiService } from '../services/wizard-world-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-spell-detail',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './spell-detail.component.html',
  styleUrl: './spell-detail.component.css'
})
export class SpellDetailComponent implements OnInit {
  @Input('id') spellId!: string;
  public spellDetail! : ISpell;

  constructor(public wizardWorldService: WizardWorldApiService){}

  ngOnInit(): void {
    this.wizardWorldService.getOneSpell(this.spellId).subscribe(data =>
      this.spellDetail = data
    );
  }
}
