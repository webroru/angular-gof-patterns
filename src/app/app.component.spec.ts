import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { SingletonComponent } from './singleton/singleton.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SingletonComponent,
        FactoryMethodComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
