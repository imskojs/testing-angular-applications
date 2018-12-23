import { ContactsComponent } from './contacts.component';
import { Contact } from './shared/models/contact.model';

describe('ContactsComponent', () => {
  let component: ContactsComponent;

  beforeEach(() => {
    component = new ContactsComponent();
  });

  it('should set instance correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should be no contacts if there is no data', () => {
    expect(component.contacts.length).toBe(0);
  });

  it('should be contacts if there is data', () => {
    const newContact: Contact = {
      id: 1,
      name: 'Jason Pipemaker'
    };
    const contactsList: Array<Contact> = [newContact];
    component.contacts = contactsList;

    expect(component.contacts.length).toBe(1);
  });


});



