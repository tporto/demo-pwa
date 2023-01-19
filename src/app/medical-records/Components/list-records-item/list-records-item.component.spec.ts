import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordsItemComponent } from './list-records-item.component';

describe('ListRecordsItemComponent', () => {
  let component: ListRecordsItemComponent;
  let fixture: ComponentFixture<ListRecordsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
