import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMemeComponent } from './criar-meme.component';

describe('CriarMemeComponent', () => {
  let component: CriarMemeComponent;
  let fixture: ComponentFixture<CriarMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarMemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
