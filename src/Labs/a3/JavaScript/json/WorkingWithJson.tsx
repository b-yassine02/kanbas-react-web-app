import Destructing from "./Destructing";
import House from "./House";
import JsonStringify from "./JsonStringify";
import Spreading from "./Spreading";

function WorkingWithJson() {
  return (
    <div>
      <h1>Working with JSON</h1>
      <JsonStringify />
      <House />
      <Spreading />
      <Destructing />
    </div>
  );
}

export default WorkingWithJson;
