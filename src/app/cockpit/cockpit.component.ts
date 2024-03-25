import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }
 // serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') newServerContent! : ElementRef;
  
  onAddServer(inputData: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputData.value, 
      serverContent: this.newServerContent.nativeElement.value
    });
  }
  onAddBlueprint(inputData: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:inputData.value,
      serverContent:this.newServerContent.nativeElement.value
    });
  }


  

}
