import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of, combineLatest, map, startWith} from 'rxjs';
import { MultiJobsModel } from '../../models/multi-jobs.model';
import { MultiJobsService } from '../../services/multi-jobs.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-multi-jobs',
  styleUrls: ['./multi-jobs.component.scss'],
  templateUrl: './multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiJobsComponent {
  readonly property$: Observable<string[]> = of(['title', 'description']);
  readonly order$: Observable<string[]> = of(['asc', 'desc']);
  readonly getJobs$: Observable<MultiJobsModel[]> = this._multiJobsService.getAll();

  readonly form : FormGroup = new FormGroup({
    property : new FormControl(''),
    directions : new FormControl('')
  })
  readonly jobList$ : Observable<MultiJobsModel[]> = combineLatest([
    this.getJobs$,
    this.form.valueChanges.pipe(startWith({property:'', directions:''}))
  ]).pipe(map(([jobs,forms]) => {
    if(!!forms.property){
      return jobs.sort((a,b) => {
        if(forms.property === 'title') {
          if(a.title > b.title) return forms.directions === 'asc' ? 1 : -1;
          if (a.title < b.title) return forms.directions === 'asc' ? -1 : 1;
          else return 0;
        }
        if(forms.property === 'description') {
          if(a.description > b.description) return forms.directions === 'asc' ? 1 : -1;
          if (a.description < b.description) return forms.directions === 'asc' ? -1 : 1;
          else return 0;
        }
        else return 0;
      })
    }else{
      return [];
    }
  }))
  constructor(private _multiJobsService: MultiJobsService) {
  }
}
