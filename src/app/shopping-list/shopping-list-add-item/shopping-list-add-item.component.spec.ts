import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListAddItemComponent } from './shopping-list-add-item.component';

describe('ShoppingListAddItemComponent', () => {
  let component: ShoppingListAddItemComponent;
  let fixture: ComponentFixture<ShoppingListAddItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListAddItemComponent]
    });
    fixture = TestBed.createComponent(ShoppingListAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
