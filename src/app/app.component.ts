import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  serverElements =[{type: 'server',
  name: 'TestServer' , content:'just a Test'
}];

onServerAdd(serverData: {serverName:string, serverContent:string}){
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdd(serverData: {serverName:string, serverContent:string}){
  this.serverElements.push({
    type:'blueprint',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

ngOnChange() {
  this.serverElements[0].name = "Changed!";
}

ngOnDestoryed() {
  this.serverElements.splice(0,1);
}


}

