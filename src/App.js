import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Header header="Hello world" />
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <h1 className="header">hello</h1>
      <Footer footer="This is footer" />
    </div>
  );
}

export default App;
