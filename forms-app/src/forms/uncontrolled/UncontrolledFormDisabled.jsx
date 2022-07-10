import { useEffect, useRef } from "react";

function UncontrolledFormDisabled() {
  const field1Ref = useRef();
  const field2Ref = useRef();
  const buttonRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      field1: field1Ref.current.value,
      field2: field2Ref.current.value,
    };
    console.log(data);
  };

  const handleDisabled = () => {
    if (!field1Ref.current.value || !field2Ref.current.value) {
      buttonRef.current.disabled = true;
    } else {
      buttonRef.current.disabled = false;
    }
  };

  useEffect(() => {
    handleDisabled();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <h1>Uncontrolled form disabled</h1>
      <div>
        <label for="uncontrolled-field1">Field #1</label>
      </div>
      <div>
        <input
          id="uncontrolled-field1"
          ref={field1Ref}
          placeholder="Field #1"
          onChange={handleDisabled}
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
          onChange={handleDisabled}
        />
      </div>
      <div>
        <button ref={buttonRef} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UncontrolledFormDisabled;
