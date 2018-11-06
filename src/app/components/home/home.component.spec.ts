import { TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CommonModule } from "@angular/common";
import { routes } from "src/app/routes/app.router";

// Component
import { HomeComponent } from "./home.component";
import { OffersComponent } from "../common/offers/offers.component";
import { ProjectsComponent } from "../projects/projects.component";

describe("HomeComponent", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, OffersComponent, ProjectsComponent],
      imports: [CommonModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  });

  it("should create the home", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  });

  it("should render offerComponent in home", () => {
    const fixture = TestBed.createComponent(OffersComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  });
});
