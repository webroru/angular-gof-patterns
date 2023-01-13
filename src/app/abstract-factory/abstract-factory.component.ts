import { Component } from '@angular/core';
import { AbstractFactory, PasswordRecoveryFactory, RegistrationFactory } from './abstract-factory';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  public logs: string[] = [];

  public sendPasswordRecoveryMessage() {
    const passwordRecoveryFactory = new PasswordRecoveryFactory();
    this.sendMessage(passwordRecoveryFactory);
  }

  public sendRegistrationMessage() {
    const registrationFactory = new RegistrationFactory();
    this.sendMessage(registrationFactory);
  }

  private sendMessage(factory: AbstractFactory) {
    const sms = factory.createSms();
    const email = factory.createEmail();

    this.logs.push(sms.sendSms());
    this.logs.push(email.sendEmail());
  }
}
