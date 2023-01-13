import { TestBed } from '@angular/core/testing';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { SingletonComponent } from './singleton/singleton.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SingletonComponent,
        FactoryMethodComponent,
        AbstractFactoryComponent,
        BuilderComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
