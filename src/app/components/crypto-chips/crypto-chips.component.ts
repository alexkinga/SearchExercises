import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {

  readonly form: FormGroup = new FormGroup({
    symbol: new FormControl(''),
    cryptoArr: new FormArray([])
  })
  readonly cryptoList$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this.form.valueChanges.pipe(
      startWith({ symbol: '' }))
  ]).pipe(
    map(([cryptos, form]) => cryptos.filter((crypto) => crypto.symbol.toLowerCase().includes(form.symbol ? form.symbol.toLowerCase() : ''))
    ));

  get cryptoChips() {
    return this.form.get('cryptoArr') as FormArray;
  }

  addCryptoChip(symbol : CryptoModel) {
    const control = new FormControl(symbol)
    this.cryptoChips.push(control);
  }

  constructor(private _cryptoService: CryptoService) {
  }
}
