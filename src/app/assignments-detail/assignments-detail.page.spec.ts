import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignmentsDetailPage } from './assignments-detail.page';

describe('AssignmentsDetailPage', () => {
  let component: AssignmentsDetailPage;
  let fixture: ComponentFixture<AssignmentsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
