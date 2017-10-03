class Application extends React.Component  {
      
          constructor (props) {
              super (props);
      
              const firstId = 0;
              this.state = {
                  counter : firstId,        
                  question: props.data[firstId]
              }
          } 
      
          render () {
              const item = this.state.question;
      
              return(
                  <div className="reserve">
                      <Header className="header" question={item} id = {0} length = {this.props.data.length}/>
                      <Section question={item.question} alternatives = {item.alternatives} onItemSelected = { idx => {
                              const nextId = this.state.counter + 1; 
                              this.setState ( {
                                  counter : nextId,
                                  question : this.props.data[nextId]
                              })
                          } } />
                  </div>
              );    
          }
      }

class Model {

   constructor () {
      this.userAnswer= [],
      this.counter = 0,
      this.question = props.data[0],
      // this.inputValue = null;
      this.render = undefined;
   }
  
   subscribe(render) {
      this.render = render;
   }
   inform() {
      console.log(this.todos.map(e => e.text));
      this.render();
   }
   addUserAnswer(text) {
      this.userAnswer.push({
         id: Utils.uuid(),
         text: text,
         completed: false
      });
      this.inform();
   }
   updateTodo(index, todo) {
      this.todos[index] = todo;
      this.inform();
   }
   removeTodo(todo) {
      this.todos = this.todos.filter(item => item !== todo);
      this.inform();
   }
}

const App = ({ title, model }) => {
      const Header = ( {id, question, length} ) => {
            return(
                <div className="text-center col-12 col-sm-12">
                    <div className="row">
                        <img
                            src={question.img}
                            id="qimage"
                            width={260}
                            height={260} />
                        <p className="text-left answer" id="numberOfAnswered"> {question.num} of {length} answered</p>
                              <div className="progress">
                                    <div
                                classname="progress-bar"
                                role="progressbar"
                                id="progressBar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{width: '70%'}}>
                                <span classname="sr-only" id="completedPercent">
                                    {(question.num) * 20}% completado
                                </span>
                            </div>
                              </div>
                    </div>
                </div>
            )
        }
        
      const Section = ( {question, alternatives, onItemSelected} ) => {
      
      const items = alternatives.map ( (item, index ) => {
            return (    
                  <li key = {index}>
                  <div class="col-md-4 col-sm-4">
                        <button class="text-center"  id="a2" onClick = { () => onItemSelected (index) } > {item} </button>
                  </div> 
            </li>);
      })
      return(
            <div className="container">
                  <div class="row text-center square" width="100%" id="Questions">
                  <h2 class="title" id="Question">  {question} </h2>
                  
                  <ul>
                        {items}
                  </ul>
                  </div>
      
                  <div class="row text-center square" width="100%" id="myAnswers" hidden>
                  <h2 class="title" id="Message"></h2>
                  <div id="answersConfirmation"></div>
                  <div class="col-md-12 col-sm-12 text-center"  id="bSubmit">
                        <button onclick="submitAnswers()">Submit</button>
                  </div>
                  <div class="col-md-12 col-sm-12 text-center" id="bStart" hidden>
                        <button onclick="startQuiz()">Start again</button>
                  </div>
                  </div>
            </div>
      )
}
   const items = model.todos.map((todo, index) => {
      return (
         <li key={todo.id}>
            <input
               type="text"
               value={todo.text}
               onChange={e =>
                  model.updateTodo(index, {
                     id: todo.id,
                     text: e.target.value,
                     completed: todo.completed
                  })}
            />
            <button onClick={() => model.removeTodo(todo)}> delete item</button>
         </li>
      );
   });
   return (
      <div>
         <h1> {title} </h1>
         <form
            onSubmit={e => {
               e.preventDefault();
               model.addTodo(model.inputValue);
            }}
         >
            <input onChange={e => (model.inputValue = e.target.value)} />
            <button type="submit">Add Item</button>
         </form>
         <ol> {items} </ol>
      </div>
   );
};

let model = new Model();
let counter = 1;
let render = () => {
   console.log('render times: ', counter++);
   ReactDOM.render(
      <App title="QuestionsApp" model={model} />,
      document.getElementById('container')
   );
};

model.subscribe(render);
render(); 