import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styles: [
  ],
//   encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element!: {type: string; name: string; content: string;};
  @Input() name: string | undefined;
  @ViewChild('heading', {static:false})header!: ElementRef;
  

  ngOnInit(): void {
    console.log("NG On Init is called!")
    console.log("This is Init " + this.header.nativeElement.textContent)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("Ng After View Init is called!")
    console.log("This is After View Init " + this.header.nativeElement.textContent)
  }

  constructor() {
    console.log("Constructor is called!")
   }

  ngOnChanges(change: SimpleChanges): void {
    console.log("Ng on Changes is called!")
    console.log(change)
  }
  ngDoCheck(): void {
   console.log("Ng Do Check is called!")
    
  }

  

  ngAfterContentInit(): void {
    console.log("Ng After Content Init is called!")
    // console.log("This is AfterContent Init " + this.header)
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("Ng After Content Check is called!")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Ng On Destroy is called!")
  }

}
