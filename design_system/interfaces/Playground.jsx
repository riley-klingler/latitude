/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";
import Text from "../../Text";
import Button from "../../button/Button";
import LiveDemo from "../components/LiveDemo/LiveDemo";
import Half from "./guidelines/v2/components/Half";
import MainHeader from "./guidelines/v2/components/MainHeader";

const code = `
function Counter() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <Text>The value is {val}</Text>
      <Button onClick={() => setVal(oldVal => setVal(oldVal + 1))}>
        Add
      </Button>
    </div>
  )
}
`;

function Playground() {
  return (
    <div>
      <Half>
        <MainHeader>Playground</MainHeader>
      </Half>
      <LiveDemo initialCode={code} scope={{Text, Button}} />
    </div>
  );
}

export default Playground;
