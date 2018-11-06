import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                ProjectsComponent
            ]
        }).compileComponents()
    })
    
    it('should create the projects', () => {
        const fixture = TestBed.createComponent(ProjectsComponent);
        const projects = fixture.debugElement.componentInstance;
        expect(projects).toBeTruthy()
    })
})