import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { candidatesReducer } from './store/candidates/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CandidatesEffects } from './store/candidates/effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ candidates: candidatesReducer }),
    EffectsModule.forRoot([CandidatesEffects])
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class AppStoreModule { }
