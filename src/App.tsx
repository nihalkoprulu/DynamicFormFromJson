import "./styles.css";
import DynamicForm from "./views/DynamicForm";
import Header from "./components/Header";
import { AppWrapper, ViewWrapper } from "./styled";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <ViewWrapper>
        <DynamicForm />
      </ViewWrapper>
    </AppWrapper>
  );
}
