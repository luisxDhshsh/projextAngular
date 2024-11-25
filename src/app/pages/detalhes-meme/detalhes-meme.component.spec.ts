import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesMemeComponent } from './detalhes-meme.component';

describe('DetalhesMemeComponent', () => {
  let component: DetalhesMemeComponent;
  let fixture: ComponentFixture<DetalhesMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesMemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
