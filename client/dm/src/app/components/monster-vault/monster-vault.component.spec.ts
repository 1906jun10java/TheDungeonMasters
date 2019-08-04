import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterVaultComponent } from './monster-vault.component';

describe('MonsterVaultComponent', () => {
  let component: MonsterVaultComponent;
  let fixture: ComponentFixture<MonsterVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
