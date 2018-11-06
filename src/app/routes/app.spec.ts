import { TestBed, async, tick, fakeAsync } from "@angular/core/testing";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { routes } from "./app.router";

// Components
import { HomeComponent } from "../components/home/home.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { OffersComponent } from "../components/common/offers/offers.component";

describe("Router", () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ProjectsComponent, OffersComponent],
      imports: [RouterTestingModule.withRoutes(routes)]
    });
  }));

  beforeEach(async(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  it('should path "" redirects to /home', fakeAsync(() => {
    router.navigate([""]);
    tick();
    expect(location.path()).toBe("/home");
  }));

  it('should navigate to "home" takes you to /home', fakeAsync(() => {
    router.navigate(["home"]);
    tick();
    expect(location.path()).toBe("/home");
  }));

  it('should navigate to "projects" takes you to /projects', fakeAsync(() => {
    router.navigate(["projects"]);
    tick();
    expect(location.path()).toBe("/projects");
  }));
});
