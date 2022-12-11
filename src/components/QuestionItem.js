import React from "react";

function QuestionItem({ question, onDeleteClick, correctAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log(question);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    function handleDeleteClick() {
      onDeleteClick(id)
    }

    function updateAnswer(event) {
          correctAnswerChange(id, event.target.value)

    }
    
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updateAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;


// PATCH
// const todoPatch = {
//   title: 'Learn React casue its fun',
//   completed: true
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'PATCH',
//   headers: {
//   'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(todoPatch)
//   })
//   .then(res => res.json())
//   .then(data => console.log('PATCH', data));