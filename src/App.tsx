import { Provider } from "react-redux";
import ReduxStore from "../redux/store";
import Counter from "../components/Counter";
import MultiSelect from "../components/MultiSelect";
import Shapes from "../components/Shapes";

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
        <hr />
        <h3>Shapes with CSS</h3>
        <Shapes />
        <hr />
      </div>
    </Provider>
  );
}
