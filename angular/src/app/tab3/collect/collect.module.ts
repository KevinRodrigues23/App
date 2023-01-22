import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectComponent } from './collect.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CollectComponent],
  exports: [CollectComponent]
})
export class CollectComponentModule {}