import React, { useRef, useState } from 'react';

import FormControl from '../../UI/FormControl/FormControl';
import Button from '../../UI/Button/Button';

import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  // This ref points to the input element
  const inputEl = useRef(null);

  const goalInputChangeHandler = ({ target }) => {
    if (target.value.trim()) setIsValid(true);

    setEnteredValue(target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Here, I'm checking if the entered value is empty
    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);

    // Reseting input field and component state
    inputEl.current.value = '';
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input ref={inputEl} type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
