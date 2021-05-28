import classes from "./MealItemForm.module.css";
import { useRef} from 'react';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref = {};
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
