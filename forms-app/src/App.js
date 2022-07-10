import FormikSimpleForm from "./forms/formik/FormikSimpleForm";
import HookFormSimpleForm from "./forms/react-hook-form/HookFormSimpleForm";
import HookFormAdvancedForm from "./forms/react-hook-form/HookFormAdvancedForm";
import StateForm from "./forms/state/StateForm";
import UncontrolledForm from "./forms/uncontrolled/UncontrolledForm";
import UncontrolledFormDisabled from "./forms/uncontrolled/UncontrolledFormDisabled";
import ControlledForm from "./forms/state/ControlledForm";
import ControlledFormDisabled from "./forms/state/ControlledFormDisabled";

function App() {
  return (
    <div className="App">
      <ControlledForm />
      <UncontrolledForm />
      <UncontrolledFormDisabled />
      <ControlledFormDisabled />
      <StateForm />
      <FormikSimpleForm />
      <HookFormSimpleForm />
      <HookFormAdvancedForm />
    </div>
  );
}

export default App;
