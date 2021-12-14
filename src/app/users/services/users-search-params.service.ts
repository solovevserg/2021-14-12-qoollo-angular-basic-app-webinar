import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { UsersSearchParams } from '../../core/models/users-search-params.model';

@Injectable({
  providedIn: 'root'
})
export class UsersSearchParamsService {

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  public readonly form = this.fb.group({
    query: '',
    onlyVerified: false,
  });

  // public readonly form = new FormGroup({
  //   query: new FormControl(''),
  //   onlyVerified: new FormControl(false),
  // });

  public readonly params = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map(params => params as UsersSearchParams),
    debounceTime(300),
  );

}
