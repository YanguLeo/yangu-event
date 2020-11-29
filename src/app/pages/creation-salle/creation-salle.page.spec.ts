import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationSallePage } from './creation-salle.page';

describe('CreationSallePage', () => {
  let component: CreationSallePage;
  let fixture: ComponentFixture<CreationSallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationSallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationSallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
