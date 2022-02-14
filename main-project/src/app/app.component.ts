import { Component, OnInit } from '@angular/core';

interface MicroApp {
  url: string;
  customelement: string;
  nomeApp: string;
  id: string;
  inputStatus: string;
  outputStatus: string;
}

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  status: 'status 1' | 'status 2' | 'status 3' = 'status 1';

  microapps: MicroApp[] = [
    { 
      url:'http://localhost:8081/app-1/main.js',
      customelement: 'app-1',
      nomeApp: 'MicroApp 1',
      id: 'microapp1',
      inputStatus: 'status 1',
      outputStatus: 'status 2'
    },
    { 
      url:'http://localhost:8082/app-2/main.js',
      customelement: 'app-2',
      nomeApp: 'MicroApp 2',
      id: 'microapp2',
      inputStatus: 'status 2', 
      outputStatus: 'status 3'
    },
    { 
      url:'http://localhost:8083/app-3/main.js',
      customelement: 'app-3',
      nomeApp: 'MicroApp 3',
      id: 'microapp3',
      inputStatus: 'status 3', 
      outputStatus: 'status 1' 
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.microapps.forEach(microapp => this.addMicroApp(microapp));
  }

  private addMicroApp(microapp: MicroApp) {
    console.log('loading microapp =>', microapp);

    const script = document.createElement('script');
    script.src = microapp.url;

    script.onload = () => {
      const element = document.getElementById(microapp.id);
      
      element?.addEventListener('nextstatus', ($event: any) => {
        console.log('$event =>', $event);
        this.status = $event.detail;
      });
    };

    document.body.appendChild(script);
  }
}
