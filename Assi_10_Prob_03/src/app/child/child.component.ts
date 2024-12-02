import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  number = 29; // Hardcoded value for checking prime
  isPrime: boolean = false;

  inputString = 'Hello Angular!'; // Hardcoded string
  capitalCount: number = 0;

  constructor(
    private numberService: NumberService,
    private stringService: StringService
  ) {}

  ngOnInit(): void {
    // Call NumberService's ChkPrime method
    this.isPrime = this.numberService.ChkPrime(this.number);

    // Call StringService's CountCapital method
    this.capitalCount = this.stringService.CountCapital(this.inputString);
  }
}
