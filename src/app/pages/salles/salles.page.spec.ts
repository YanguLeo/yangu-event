import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SallesPage } from './salles.page';

describe('SallesPage', () => {
  let component: SallesPage;
  let fixture: ComponentFixture<SallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
