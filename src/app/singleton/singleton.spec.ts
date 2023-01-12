import { Singleton } from './singleton';

describe('Singleton', () => {
  it('should create an instance', () => {
    expect(Singleton.createInstance()).toBeTruthy();
  });
});
