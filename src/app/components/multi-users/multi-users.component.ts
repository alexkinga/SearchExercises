import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, startWith, map, Subject} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {DepartmentModel} from '../../models/department.model';
import {RolesModel} from '../../models/roles.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-multi-users',
  styleUrls: ['./multi-users.component.scss'],
  templateUrl: './multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiUsersComponent {

  readonly form: FormGroup = new FormGroup({
    departments: new FormControl(''),
    roles: new FormControl('')
  })
  readonly departmentsList$: Observable<DepartmentModel[]> = this._userService.getDepartments('');
  readonly rolesList$: Observable<RolesModel[]> = this._userService.getRoles('');

  // readonly usersList$: Observable<UserModel[] | undefined> = this.form.valueChanges.pipe(
  //   startWith({departments: '', roles: ''}),
  //   debounceTime(1000),
  //   switchMap((search) =>
  //     !!search.departments && !!search.roles
  //       ? this._userService.getDepartments(search.departments) && this._userService.getRoles(search.roles)
  //       ? this._userService.getDepartments(search.departments) && this._userService.getRoles(search.roles)
  //       ? of([]) : of([]) : of(undefined) : of(undefined)
      // ? this._userService.getDepartments(search.departments) && this._userService.getRoles(search.roles) ?
      //     this._userService.getDepartments(search.departments) && this._userService.getRoles(search.roles) ? of ([]) : of(undefined)
      // ))

  readonly usersList$: Observable<UserModel[]> = combineLatest([
    this._userService.getUsers(),
    this.form.valueChanges.pipe(startWith({departments: '', roles: ''}))
  ]).pipe(
    map(([users, form]) =>
        !!form.departments && !!form.roles ? users.filter((user) => user.departmentId === +form.departments.id && user.roleId === form.roles.id) : []
    )
  )
  private _departmentSubject: Subject<string> = new Subject<string>();
  public departmentSubject$: Observable<string> = this._departmentSubject.asObservable();


  selectDepartment(dept: string): void {
    this._departmentSubject.next(dept);
  }


  constructor(private _userService: UserService) {
  }
}
