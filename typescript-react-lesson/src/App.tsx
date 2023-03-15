import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
  return (
    <>
      <Heading title={"Title 1"} />
      <Section title={"New Title"}>This is section 1</Section>
      <Counter></Counter>
      <List
        items={["tea", "tacos", "code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
    </>
  );
}

export default App;
