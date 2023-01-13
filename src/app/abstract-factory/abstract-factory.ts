export interface AbstractFactory {
    createSms(): AbstractSms;
    createEmail(): AbstractEmail
}

export interface AbstractSms {
    message: string;
    sendSms(): string;
}

export interface AbstractEmail {
    message: string;
    subject: string;
    sendEmail(): string;
}

export class RegistrationEmail implements AbstractEmail {
    message: string = '<h1>Welcome!</h1><p>Thank you for registration!</p>';
    subject: string = 'Registration on foobarsite.com';

    public sendEmail(): string {
        return `Email "${this.message}" with subject "${this.subject}" has been sent`;
    }
}

export class PasswordRecoveryEmail implements AbstractEmail {
    message: string = '<h1>Hello,</h1><p>Please use the link below to recover your password</p>';
    subject: string = 'Recover my passworn on foobarsite.com';

    public sendEmail(): string {
        return `Email "${this.message}" with subject "${this.subject}" has been sent`;
    }
}

export class RegistrationSms implements AbstractSms {
    message: string = 'Thank you for registration!';

    public sendSms(): string {
        return `SMS "${this.message}" has been sent`;
    }
}

export class PasswordRecoverySms implements AbstractSms {
    message: string = 'Code for password recovery 4242';

    public sendSms(): string {
        return `SMS "${this.message}" has been sent`;
    }
}

export class RegistrationFactory implements AbstractFactory {
    public createSms(): AbstractSms {
        return new RegistrationSms();
    }
    
    public createEmail(): AbstractEmail {
        return new RegistrationEmail();
    }    
}

export class PasswordRecoveryFactory implements AbstractFactory {
    public createSms(): AbstractSms {
        return new PasswordRecoverySms();
    }
    
    public createEmail(): AbstractEmail {
        return new PasswordRecoveryEmail();
    }    
}
