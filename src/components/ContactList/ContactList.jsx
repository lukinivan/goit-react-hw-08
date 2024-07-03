import css from "./ContactList.module.css";
import { Contact } from "/src/components";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactWrap}>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
