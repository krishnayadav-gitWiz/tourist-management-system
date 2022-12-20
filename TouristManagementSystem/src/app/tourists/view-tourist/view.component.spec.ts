import { TitleCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';

// describe('ViewComponent', () => {
//   let component: ViewComponent;
//   let fixture: ComponentFixture<ViewComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ViewComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
  // let fixture: ComponentFixture<ViewComponent>;

describe('ViewComponent uppercase U testing', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new TitleCasePipe();
  
    it('transforms "krishna" to "Krishna"', () => {
      expect(pipe.transform('krishna')).toBe('Krishna');
    });
  
    it('transforms "krishna yadav" to "Krishna Yadav"', () => {
      expect(pipe.transform('krishna yadav')).toBe('Krishna Yadav');
    });
      
  });
