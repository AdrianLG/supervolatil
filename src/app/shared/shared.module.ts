import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToggleFullscreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {AccordionDirective} from './accordion/accordion.directive';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScrollModule} from './scroll/scroll.module';
import {MenuItems} from './menu-items/menu-items';
import {DataFilterPipe} from './element/data-filter.pipe';

import {SpinnerComponent} from './spinner/spinner.component';
import {CardComponent} from './card/card.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    SpinnerComponent,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ScrollModule,
    NgbModule,
    SpinnerComponent,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe
  ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
