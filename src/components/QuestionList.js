import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setQuestions(data) )
     
  }, [])
  //console.log(questions)

  function onDeleteClick(id) {
    const updatedQuestions = questions.filter((question) => {

                  if (question.id !== id) {

                    return question;
                  }
                })
                setQuestions(updatedQuestions)

                fetch(`http://localhost:4000/questions/${id}`, { 
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                } }
                )

            
  } 

  


  function correctAnswerChange(id, correctIndex) { 

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }, 

      body: JSON.stringify({correctIndex})
    })
  }  
  const eachQuestion = questions.map((question) => {
    return <QuestionItem correctAnswerChange={correctAnswerChange} onDeleteClick={onDeleteClick} key={question.id} 
                          question={question}/>
  })
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      
      <ul>{eachQuestion}</ul>
    </section>
  );
}

export default QuestionList;
