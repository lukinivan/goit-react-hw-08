import { useDispatch } from "react-redux";
import { Container, ContactForm, SearchBox, ContactList } from "./components";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts())[dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
