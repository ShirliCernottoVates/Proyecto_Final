import { Component, Input, OnInit } from '@angular/core';
import { ISpell } from '../dto/dto';
import { WizardWorldApiService } from '../services/wizard-world-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent implements OnInit{
  public spellsList! : ISpell[];

  constructor(
    private wizardWorldService : WizardWorldApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.wizardWorldService.getAllSpells().subscribe(data =>
      this.spellsList = data
    );
  }

  onSpellClicked(spellId:string){
    this.router.navigate(['/spell-detail', spellId]);
  }
}
