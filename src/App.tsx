import { Provider } from "react-redux";
import ReduxStore from "../redux/store";
import Counter from "../components/Counter";
import "./styles.css";

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <div className="App">
        <h1>Hello, Redux!</h1>
        <p>@cra2ycoder</p>
        <hr />
        <Counter />
      </div>
    </Provider>
  );
}
