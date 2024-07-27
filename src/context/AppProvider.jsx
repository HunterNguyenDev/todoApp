import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Học HTML - CSS",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: "personal",
    },
    {
      id: 2,
      name: "Học Javascript",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: "personal",
    },
    {
      id: 3,
      name: "Học ReactJS",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: "travel",
    },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [activeTodoItemId, setActiveTodoItemId] = useState();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleCompletedCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleTodoItemClick = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const handleTodoItemChange = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
        todoList,
        setTodoList,
        selectedFilterId,
        setSelectedFilterId,
        searchText,
        setSearchText,
        activeTodoItemId,
        setActiveTodoItemId,
        showSidebar,
        setShowSidebar,
        handleCompletedCheckboxChange,
        handleTodoItemClick,
        handleTodoItemChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
