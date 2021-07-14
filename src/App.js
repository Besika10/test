import './App.css';


function Submit() {
  // let correctAnswer = document.querySelector("#correct");
  let tasks = document.querySelector("#tasks");
  let mainDiv = document.querySelector("#results");
  let max = document.querySelector("#amount").value;
  let count = 0;
  let finalResultDiv = document.querySelector("#final_result");
  let finalResult = document.createElement("p");
  let youGot = document.createElement("p");
  let choice = document.createElement("p");
  let refreshDiv = document.createElement("div");
  let refreshBtn = document.createElement("button");
  refreshBtn.innerHTML = "Try again";
  refreshDiv.classList.add("category");
  refreshDiv.classList.add("center");
  refreshBtn.classList.add("btn");
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  refreshBtn.addEventListener("click", () => {
    window.location.reload();
  })
  for (let i = 0; i < max; i++) {
    let countTrue = 0;
    let question = mainDiv.childNodes[i];
    console.log(question.childNodes[3] === "undefined");
    if (question.childNodes[1].childNodes[0].checked === true && question.childNodes[1].childNodes[0].id === "correct") {
      countTrue++;
      console.log(count);
    }
    if (question.childNodes[2].childNodes[0].checked === true && question.childNodes[2].childNodes[0].id === "correct") {
      countTrue++;
      console.log(count);
    }
    if (question.childNodes[3] !== undefined || question.childNodes[4] !== undefined) {
      if (question.childNodes[3].childNodes[0].checked === true && question.childNodes[3].childNodes[0].id === "correct") {
        countTrue++;
        console.log(count);
      }
      if (question.childNodes[4].childNodes[0].checked === true && question.childNodes[4].childNodes[0].id === "correct") {
        countTrue++;
        console.log(count);
      }
    }
    tasks.style.display = "none";
    console.log(question.childNodes[1])
    count += countTrue;
  }
  let percent = count / max;
  finalResult.classList.add("final_result");
  finalResult.innerHTML = "Your result: " + count + " / " + max;
  youGot.classList.add("final_result");
  choice.classList.add("final_result");
  youGot.innerHTML = "You Got : " + percent + "%";
  finalResultDiv.appendChild(finalResult);
  finalResultDiv.appendChild(youGot);
  finalResultDiv.appendChild(choice);
  finalResultDiv.appendChild(refreshDiv);
  refreshDiv.appendChild(refreshBtn);
  if (percent >= 0.7) {
    finalResult.style.color = "#2eb82e";
    youGot.style.color = "#2eb82e";
    choice.style.color = "#2eb82e";
    choice.innerHTML = "You are perfect";
  }
  if (percent > 0.3 && percent < 0.7) {
    finalResult.style.color = "#ff6600";
    youGot.style.color = "#ff6600";
    choice.style.color = "#ff6600";
    choice.innerHTML = "You were good, but not the best!";
  }
  if (percent <= 0.3) {
    finalResult.style.color = "#b30000";
    youGot.style.color = "#b30000";
    choice.innerHTML = "Try better next time";
    choice.style.color = "#b30000";
  }
}
function App() {
  fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(data => data.trivia_categories.forEach(item => {
      let select = document.querySelector("#category");
      let option = document.createElement("option");
      option.id = item.name;
      option.value = item.id;
      option.innerHTML = item.name;
      select.appendChild(option);
    }));
  let url = "https://opentdb.com/api.php?";
  function amount() {
    const amount = document.querySelector("#amount");
    amount.addEventListener("change", (e) => {
      url = url + "amount=" + e.target.value + "&";
      console.log(e.target.value)
      console.log(url)
    })
  }
  function category() {
    const category = document.querySelector("#category");
    category.addEventListener("change", (e) => {
      url = url + "category=" + e.target.value + "&";
      console.log(e.target.value)
      console.log(url)
    })
  }
  function difficulty() {
    const difficult = document.querySelector("#difficulty");
    difficult.addEventListener("change", (e) => {
      url = url + "difficult=" + e.target.value + "&";
      console.log(e.target.value)
      console.log(url)
    })
  }
  function type() {
    const type = document.querySelector("#type");
    type.addEventListener("change", (e) => {
      url = url + "type=" + e.target.value + "&";
      console.log(e.target.value)
    })
  }
  function encoding() {
    const encoding = document.querySelector("#encoding");
    encoding.addEventListener("change", (e) => {
      url = url + "encode=" + e.target.value + "&";
      console.log(e.target.value)
    })
  }

  function alert() {
    fetch(url)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => data.results.forEach(items => {
        console.log(items)

        // design and create
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
        let submit = document.querySelector("#submit_btn");
        let decodeQuestion = decodeURIComponent(items.question);
        let categories = document.querySelector("#categories");
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let results = document.querySelector("#results");
        let questions = document.createElement("p");
        let answers = document.createElement("p");
        let answers1 = document.createElement("p");
        let answers2 = document.createElement("p");
        let answers3 = document.createElement("p");
        let checkbox = document.createElement("input");
        let checkbox1 = document.createElement("input");
        let checkbox2 = document.createElement("input");
        let checkbox3 = document.createElement("input");
        submit.classList.remove("none");
        categories.style.display = "none";
        div1.classList = "forEach";
        div2.classList = "forEach";
        div3.classList = "forEach";
        div4.classList = "forEach";
        answers.style.margin = "0";
        answers1.style.margin = "0";
        answers2.style.margin = "0";
        answers3.style.margin = "0";
        checkbox.style.marginTop = "5px";
        checkbox1.style.marginTop = "5px";
        checkbox2.style.marginTop = "5px";
        checkbox3.style.marginTop = "5px";
        answers.style.marginLeft = "2%";
        answers1.style.marginLeft = "2%";
        answers2.style.marginLeft = "2%";
        answers3.style.marginLeft = "2%";
        checkbox.type = "checkbox";
        checkbox1.type = "checkbox";
        checkbox2.type = "checkbox";
        checkbox3.type = "checkbox";
        div.classList = "task_div";
        for (let i = 0; i < amount; i++) {
          div.id = { amount };
        }
        let decodeAns = decodeURIComponent(items.incorrect_answers[0]);
        let decodeAns1 = decodeURIComponent(items.incorrect_answers[1]);
        let decodeAns2 = decodeURIComponent(items.incorrect_answers[2]);
        let decodeCorrect = decodeURIComponent(items.correct_answer);


        // questions 
        let j = Math.floor(4 * Math.random());
        let encoding = document.querySelector("#encoding");
        if (items.type === "multiple" && encoding.value !== "base64") {
          console.log(j)
          if (j === 0) {
            answers.innerHTML = decodeAns;
            answers2.innerHTML = decodeAns1;
            answers3.innerHTML = decodeAns2;
            answers1.innerHTML = decodeCorrect;
            checkbox.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox1.id = "correct";
          }
          if (j === 1) {
            answers.innerHTML = decodeAns1;
            answers1.innerHTML = decodeAns2;
            answers3.innerHTML = decodeAns;
            answers2.innerHTML = decodeCorrect;
            checkbox.id = "incorrect";
            checkbox1.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox2.id = "correct";
          }
          if (j === 2) {
            answers.innerHTML = decodeAns2;
            answers2.innerHTML = decodeAns1;
            answers1.innerHTML = decodeAns;
            answers3.innerHTML = decodeCorrect;
            checkbox.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox1.id = "incorrect";
            checkbox3.id = "correct";
          }
          if (j === 3) {
            answers1.innerHTML = decodeAns2;
            answers2.innerHTML = decodeAns;
            answers3.innerHTML = decodeAns1;
            answers.innerHTML = decodeCorrect;
            checkbox1.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox.id = "correct";
          }
        } else if (encoding.value === "base64" && decodeURIComponent(atob(items.type)) === "multiple") {
          console.log(decodeURIComponent(window.atob(items.incorrect_answers[1])))
          let decodeAnsBase64 = decodeURIComponent(window.atob(items.incorrect_answers[0]));
          let decodeAns1Base64 = decodeURIComponent(window.atob(items.incorrect_answers[1]));
          let decodeAns2Base64 = decodeURIComponent(window.atob(items.incorrect_answers[2]));
          let decodeCorrectBase64 = decodeURIComponent(window.atob(items.correct_answer));
          if (j === 0) {
            answers.innerHTML = decodeAnsBase64;
            answers2.innerHTML = decodeAns1Base64;
            answers3.innerHTML = decodeAns2Base64;
            answers1.innerHTML = decodeCorrectBase64;
            checkbox.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox1.id = "correct";
          }
          if (j === 1) {
            answers.innerHTML = decodeAns1Base64;
            answers1.innerHTML = decodeAns2Base64;
            answers3.innerHTML = decodeAnsBase64;
            answers2.innerHTML = decodeCorrectBase64;
            checkbox.id = "incorrect";
            checkbox1.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox2.id = "correct";
          }
          if (j === 2) {
            answers.innerHTML = decodeAns2Base64;
            answers2.innerHTML = decodeAns1Base64;
            answers1.innerHTML = decodeAnsBase64;
            answers3.innerHTML = decodeCorrectBase64;
            checkbox.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox1.id = "incorrect";
            checkbox3.id = "correct";
          }
          if (j === 3) {
            answers1.innerHTML = decodeAns2Base64;
            answers2.innerHTML = decodeAnsBase64;
            answers3.innerHTML = decodeAns1Base64;
            answers.innerHTML = decodeCorrectBase64;
            checkbox1.id = "incorrect";
            checkbox2.id = "incorrect";
            checkbox3.id = "incorrect";
            checkbox.id = "correct";
          }
        }
        let i = Math.floor(2 * Math.random())
        if (items.type === "boolean" && encoding.value !== "base64") {
          let decodeBoolean = decodeURIComponent(items.incorrect_answers[i]);
          answers.innerHTML = decodeBoolean;
          if (answers.innerHTML === "undefined") {
            answers.innerHTML = decodeCorrect;
            checkbox1.id = "incorrect";
            answers1.innerHTML = decodeAns;
            checkbox.id = "correct";
          } else {
            answers1.innerHTML = decodeCorrect;
            checkbox1.id = "correct";
            checkbox.id = "incorrect";
          }
        } else if (decodeURIComponent(atob(items.type)) === "boolean") {
          let decodeBooleanBase64 = decodeURIComponent(atob(items.incorrect_answers[0]));
          let decodeCorrectBase64 = decodeURIComponent(atob(items.correct_answer));

          if (i === 0) {
            answers.innerHTML = decodeBooleanBase64;
            checkbox.id = "incorrect";
            answers1.innerHTML = decodeCorrectBase64;
            checkbox1.id = "correct";
          } else {
            answers.innerHTML = decodeCorrectBase64;
            answers1.innerHTML = decodeBooleanBase64;
            checkbox.id = "correct";
            checkbox1.id = "incorrect";
          }
        }
        if (encoding.value !== "base64") {
          questions.innerHTML = decodeQuestion;
        } else {
          let decodeBase64Question = atob(items.question);
          questions.innerHTML = decodeBase64Question;
        }
        results.appendChild(div);
        div.appendChild(questions);


        // checkbox check
        checkbox.addEventListener("change", () => {
          if (checkbox1.checked === true) {
            checkbox1.checked = false;
          }
          if (checkbox2.checked === true) {
            checkbox2.checked = false;
          }
          if (checkbox3.checked === true) {
            checkbox3.checked = false;
          }
        })


        checkbox1.addEventListener("change", () => {
          if (checkbox.checked === true) {
            checkbox.checked = false;
          }
          if (checkbox2.checked === true) {
            checkbox2.checked = false;
          }
          if (checkbox3.checked === true) {
            checkbox3.checked = false;
          }
        })


        checkbox2.addEventListener("change", () => {
          if (checkbox1.checked === true) {
            checkbox1.checked = false;
          }
          if (checkbox.checked === true) {
            checkbox.checked = false;
          }
          if (checkbox3.checked === true) {
            checkbox3.checked = false;
          }
        })


        checkbox3.addEventListener("change", () => {
          if (checkbox1.checked === true) {
            checkbox1.checked = false;
          }
          if (checkbox2.checked === true) {
            checkbox2.checked = false;
          }
          if (checkbox.checked === true) {
            checkbox.checked = false;
          }
        })

        // append child
        if (items.type === "boolean" || decodeURIComponent(atob(items.type)) === "boolean") {
          div.appendChild(div1);
          div.appendChild(div2);
          div1.appendChild(checkbox);
          div1.appendChild(answers);
          div2.appendChild(checkbox1);
          div2.appendChild(answers1);
        }
        else if (items.type === "multiple" || decodeURIComponent(atob(items.type)) === "multiple") {
          div.appendChild(div1);
          div.appendChild(div2);
          div1.appendChild(checkbox);
          div1.appendChild(answers);
          div2.appendChild(checkbox1);
          div2.appendChild(answers1);
          div.appendChild(div3);
          div.appendChild(div4);
          div3.appendChild(checkbox2);
          div3.appendChild(answers2);
          div4.appendChild(checkbox3);
          div4.appendChild(answers3);
        }


      }))
  }
  function Both() {
    alert();
    // btnSubmit();
  }
  return (
    <div className="App">
      <div id="categories">
        <div className="category">
          <label for="category">Number Of Questions: </label>
          <input type="number" name="amount" className="option"
            id="amount" min="1" max="50" defaultValue="10" onChange={amount}></input>
        </div>
        <p id="demo"></p>
        {/* category */}
        <div className="category">
          <label for="category">Select Category: </label>
          <select name="category" id="category" className="option" form="carform" onChange={category}>
            <option id="Anycategory">Any category</option>
          </select>
        </div>


        {/* difficulty */}
        <div className="category">
          <label for="difficulty">Select Difficulty: </label>
          <select name="difficulty" id="difficulty" className="option" form="carform" onChange={difficulty}>
            <option id="Any_difficulty">Any difficulty</option>
            <option id="easy" value="easy">Easy</option>
            <option id="medium" value="medium">Medium</option>
            <option id="hard" value="hard">Hard</option>
          </select>
        </div>


        {/* type */}
        <div className="category">
          <label for="type">Select Type: </label>
          <select name="type" id="type" className="option" form="carform" onChange={type}>
            <option id="Any_type">Any Type</option>
            <option id="multiple" value="multiple">Multiple Choice</option>
            <option id="true_false" value="boolean">True / False</option>
          </select>
        </div>


        {/* encoding */}
        <div className="category">
          <label for="encoding">Select Encoding: </label>
          <select name="encoding" id="encoding" className="option" form="carform" onChange={encoding}>
            <option id="default" value="default">Default Encoding</option>
            <option id="legacy" value="legacy">Legacy URL Encoding</option>
            <option id="url3986" value="url3986">URL Encoding(RFC 3986)</option>
            <option id="base64" value="base64">Base64 Encoding</option>
          </select>
        </div>

        {/* submit */}
        <div className="category center">
          <button className="btn" id="btn" onClick={Both} >Start</button>
        </div>
      </div>


      <div id="tasks">
        <div id="results" className="tasks_div"></div>
        {/* submit button */}
        <div className="category center none" id="submit_btn">
          <button id="submit" onClick={Submit} className="btn">Submit</button>
        </div>
      </div>

      {/* final results */}
      <div id="final_result"></div>
    </div >

  );
}

export default App;
