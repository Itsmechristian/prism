import { TestBed, tick, fakeAsync } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { CommonModule, Location } from "@angular/common";
import { By } from "@angular/platform-browser";
import { routes } from "../../../routes/app.router";

// Components
import { OffersComponent } from "./offers.component";
import { HomeComponent } from "../../home/home.component";
import { ProjectsComponent } from "../../projects/projects.component";

describe("OffersComponent", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [OffersComponent, HomeComponent, ProjectsComponent],
      imports: [CommonModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  });

  it("should create offersComponent", () => {
    const fixture = TestBed.createComponent(OffersComponent);
    const offers = fixture.debugElement.componentInstance;
    expect(offers).toBeTruthy();
  });

  let debugElement: DebugElement;
  let location: Location;

  beforeEach(() => {
    location = TestBed.get(Location);

    const fixture = TestBed.createComponent(OffersComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should routerlink projects nagivate to /projects", fakeAsync(() => {
    debugElement.queryAll(By.css("a#projects-link")).forEach(link => {
      link.nativeElement.click();
      tick();
      expect(location.path()).toBe("/projects");
    });
  }));
});
