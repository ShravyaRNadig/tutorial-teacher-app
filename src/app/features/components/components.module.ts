import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { SqlComponent } from './sql/sql.component';
import { PhpComponent } from './php/php.component';
import { XmlComponent } from './xml/xml.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ReasoningComponent } from './reasoning/reasoning.component';

@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    AngularComponent,
    ReactComponent,
    TypescriptComponent,
    DotNetComponent,
    SqlComponent,
    PhpComponent,
    XmlComponent,
    CloudComputingComponent,
    AiMlComponent,
    AptitudeComponent,
    ReasoningComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
