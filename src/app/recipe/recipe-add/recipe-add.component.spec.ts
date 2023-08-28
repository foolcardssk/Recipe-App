import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddComponent } from './recipe-add.component';

describe('RecipeAddComponent', () => {
  let component: RecipeAddComponent;
  let fixture: ComponentFixture<RecipeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeAddComponent]
    });
    fixture = TestBed.createComponent(RecipeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
