import { CounterCreator, DoublerCreator } from './factory-method';

describe('CounterCreator', () => {
  it('should create an instance', () => {
    expect(new CounterCreator()).toBeTruthy();
  });
});

describe('DoublerCreator', () => {
  it('should create an instance', () => {
    expect(new DoublerCreator()).toBeTruthy();
  });
});
