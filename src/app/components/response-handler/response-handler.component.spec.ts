import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResponseHandlerComponent } from "./response-handler.component";

describe("ResponseHandlerComponent", () => {
  let component: ResponseHandlerComponent;
  let fixture: ComponentFixture<ResponseHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseHandlerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
