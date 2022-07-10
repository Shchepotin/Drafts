import { useRef } from "react";

function UncontrolledForm() {
  const field1Ref = useRef();
  const field2Ref = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      field1: field1Ref.current.value,
      field2: field2Ref.current.value,
    };
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Uncontrolled form</h1>
      <div>
        <label for="uncontrolled-field1">Field #1</label>
      </div>
      <div>
        <input
          id="uncontrolled-field1"
          ref={field1Ref}
          placeholder="Field #1"
        />
      </div>
      <div>
        <label for="uncontrolled-field2">Field #2</label>
      </div>
      <div>
        <input
          id="uncontrolled-field2"
          ref={field2Ref}
          placeholder="Field #2"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UncontrolledForm;
