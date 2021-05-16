import { Provider } from "react-redux";
import ReduxStore from "../redux/store";
import Counter from "../components/Counter";
import MultiSelect from "../components/MultiSelect";
import "./styles.css";

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <div className="App">
        <h1>Hello, Redux!</h1>
        <p>@cra2ycoder</p>
        <hr />
        <Counter />
        <hr />
        <h3>Multiselect</h3>
        <MultiSelect />
      </div>
    </Provider>
  );
}
