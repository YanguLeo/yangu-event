import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReserverPage } from './reserver.page';

describe('ReserverPage', () => {
  let component: ReserverPage;
  let fixture: ComponentFixture<ReserverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
