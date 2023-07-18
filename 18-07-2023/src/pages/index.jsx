import React, { createContext, useContext, useReducer } from "react";
import styles from "@/styles/Home.module.scss";

const todo = [
  {
    id: 1,
    task: "Completare il rapporto di progetto.",
    completed: false,
  },
  {
    id: 2,
    task: "Fare la spesa al supermercato.",
    completed: false,
  },
  {
    id: 3,
    task: "Chiamare il dentista per fissare un'appuntamento.",
    completed: false,
  },
  {
    id: 4,
    task: "Pagare le bollette di luce e gas.",
    completed: false,
  },
  {
    id: 5,
    task: "Scrivere la lista delle cose da fare per domani.",
    completed: false,
  },
  {
    id: 6,
    task: "Fare 30 minuti di esercizio fisico.",
    completed: false,
  },
  {
    id: 7,
    task: "Controllare la posta elettronica e rispondere alle email urgenti.",
    completed: false,
  },
  {
    id: 8,
    task: "Preparare la presentazione per la riunione di domani.",
    completed: false,
  },
  {
    id: 9,
    task: "Riordinare la scrivania e sistemare gli oggetti personali.",
    completed: false,
  },
  {
    id: 10,
    task: "Prenotare un tavolo al ristorante per il pranzo con gli amici.",
    completed: false,
  },
  {
    id: 11,
    task: "Leggere almeno un capitolo del libro che hai iniziato.",
    completed: false,
  },
  {
    id: 12,
    task: "Lavare e pulire l'auto.",
    completed: false,
  },
  {
    id: 13,
    task: "Organizzare il guardaroba e donare gli abiti non utilizzati.",
    completed: false,
  },
  {
    id: 14,
    task: "Imparare una nuova ricetta e prepararla per cena.",
    completed: false,
  },
  {
    id: 15,
    task: "Fare una passeggiata nel parco e godersi il tempo all'aperto.",
    completed: false,
  },
];

const TodoContext = createContext();

const todoReducer = (state, action) => {
  return state;
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, todo);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h1 className={`${styles.title}`}>TODO</h1>
      <TodoItems />
    </TodoContext.Provider>
  );
};

const TodoItems = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className={`${styles.home}`}>
      {state.map((todo) => (
        <li key={todo.id}>
          {todo.task} - {todo.completed ? "Completato" : "Da completare"}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
