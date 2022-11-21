import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnInit() {
    console.log('OnInit')
  }

  OnChanges() {
    console.log('OnChanges')
  }

  OnInit() {
    console.log('OnInit')
  }

  DoCheck() {
    console.log('DoCheck')
  }

  AfterContentInit() {
    console.log('AfterContentInit')
  }

  AfterContentChecked() {
    console.log('AfterContentChecked')
  }

  AfterViewInit() {
    console.log('AfterViewInit')
  }

  AfterViewChecked() {
    console.log('AfterViewChecked')
  }

  OnDestroy() {
    console.log('OnDestroy')
  }
}
