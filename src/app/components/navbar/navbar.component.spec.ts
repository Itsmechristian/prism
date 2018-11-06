import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { Location, CommonModule } from "@angular/common";
import { routes } from "../../routes/app.router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DebugElement } from "@angular/core";

// Components
import { NavbarComponent } from "./navbar.component";
import { HomeComponent } from "../home/home.component";
import { ProjectsComponent } from "../projects/projects.component";
import { OffersComponent } from "../common/offers/offers.component";

describe("NavbarComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        ProjectsComponent,
        OffersComponent
      ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  it("should render navbar component", () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.debugElement.nativeElement;
    expect(navbar).toBeTruthy();
  });

  let location: Location;
  let debugElement: DebugElement;

  beforeEach(() => {
    location = TestBed.get(Location);

    const fixture = TestBed.createComponent(NavbarComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should navigate /home", fakeAsync(() => {
    debugElement.query(By.css("a#home-link")).nativeElement.click();
    tick();
    expect(location.path()).toBe("/home");
  }));

  it("should navigate /projects", fakeAsync(() => {
    debugElement.query(By.css("a#projects-link")).nativeElement.click();
    tick();
    expect(location.path()).toBe("/projects");
  }));
});
