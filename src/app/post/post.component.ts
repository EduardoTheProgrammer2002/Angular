import { 
  Component, 
  Input, 
  EventEmitter, 
  Output, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called');
  }

  ngOnInit(): void {
    console.log('ngOnInit() called')
  }

  ngOnChanges(): void {
    console.log("ngOnChanges() called");
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck() called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit(): called");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked(): called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit(): called");

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewInit(): called");

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() called")
  }

}
