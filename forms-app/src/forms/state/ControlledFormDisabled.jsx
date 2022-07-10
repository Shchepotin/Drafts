import { useState } from "react";

function ControlledFormDisabled() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      field1,
      field2,
    };
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Controlled form disabled</h1>
      <div>
        <label for="controlled-field1">Field #1</label>
      </div>
      <div>
        <input
          id="controlled-field1"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
          placeholder="Field #1"
        />
      </div>
      <div>
        <label for="controlled-field2">Field #2</label>
      </div>
      <div>
        <input
          id="controlled-field2"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
          placeholder="Field #2"
        />
      </div>
      <div>
        <button type="submit" disabled={!field1 || !field2}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ControlledFormDisabled;
