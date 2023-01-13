import { RegistrationFactory, PasswordRecoveryFactory } from './abstract-factory';

describe('RegistrationFactory', () => {
  it('should create an instance', () => {
    expect(new RegistrationFactory()).toBeTruthy();
  });
});

describe('PasswordRecoveryFactory', () => {
  it('should create an instance', () => {
    expect(new PasswordRecoveryFactory()).toBeTruthy();
  });
});
