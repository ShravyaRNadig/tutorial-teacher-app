import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { SqlComponent } from './sql/sql.component';
import { PhpComponent } from './php/php.component';
import { XmlComponent } from './xml/xml.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ReasoningComponent } from './reasoning/reasoning.component';

const routes: Routes = [
  { 
    path: 'html',
   component:  HtmlComponent
  },
  { 
    path: 'css',
   component:  CssComponent
  },
  { 
    path: 'js',
   component:  JavascriptComponent
  },
  { 
    path: 'ts',
   component:  TypescriptComponent
  },
  { 
    path: 'angular',
   component:  AngularComponent
  },
  { 
    path: 'react',
   component:  ReactComponent
  },
  { 
    path: 'dot-net',
   component:  DotNetComponent
  },
  { 
    path: 'sql',
   component:  SqlComponent
  },
  { 
    path: 'php',
   component:  PhpComponent
  },
  { 
    path: 'php',
   component:  PhpComponent
  },
  { 
    path: 'xml',
   component:  XmlComponent
  },
  { 
    path: 'cloud-computing',
   component:  CloudComputingComponent
  },
  { 
    path: 'ai-ml',
   component:  AiMlComponent
  },
  { 
    path: 'aptitude',
   component:  AptitudeComponent
  },
  { 
    path: 'reasoning',
   component:  ReasoningComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
