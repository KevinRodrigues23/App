import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ExploreContainerComponentModule } from "../tab2/explore-container/explore-container.module";
import { CollectComponentModule } from '../tab3/collect/collect.module';
import { ChatComponentModule } from '../tab1/chat/chat.module';

@NgModule({
    declarations: [TabsPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        ExploreContainerComponentModule,
        CollectComponentModule,
        ChatComponentModule
        

    ]
})
export class TabsPageModule {}
