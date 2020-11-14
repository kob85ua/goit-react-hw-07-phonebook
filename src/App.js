import React from "react";
import { CSSTransition } from "react-transition-group";

import ContactList from "./components/ContactList";
import InputBlock from "./components/InputBlock";
import SearchForm from "./components/SearchForm";

import { AppWrapper, Header } from "./components/Styles/Styles";
import "./components/Styles/transitionR.css";

function App() {
  return (
    <AppWrapper>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fadeHeader"
        unmountOnExit
      >
        <Header>Phonebook</Header>
      </CSSTransition>
      <InputBlock />
      <SearchForm />
      <ContactList />
    </AppWrapper>
  );
}

export default App;
