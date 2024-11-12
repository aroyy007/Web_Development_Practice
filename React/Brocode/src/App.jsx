import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./Usergreeting.jsx";
import List from "./List.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyComponent from "./MyComponent.jsx";
import ToDoList from "./ToDoList.jsx";
import DigitalClock from "./DigitalClock.jsx";

function App() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 45 },
    { name: "Cherry", calories: 105 },
    { name: "Orange", calories: 159 },
    { name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { name: "Carrot", calories: 41 },
    { name: "Cucumber", calories: 16 },
    { name: "Lettuce", calories: 5 },
    { name: "Tomato", calories: 18 },
    { name: "Zucchini", calories: 20 },
    { name: "Spinach", calories: 123 },
  ];

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      
      <Students name="John" age={30} isStudent={true} />
      <Students name="Jane" age={25} isStudent={false} />
      <Students name="Doe" age={35} isStudent={true} />
      <Students name="Doe" age={35} isStudent={true} />
      <Students name="Doe" age={35} isStudent={true} />
      <Students name="Doe" age={35} isStudent={true} />
      <Students name="Doe" age={35} isStudent={true} />

      {/* <Students />  // Default values */}

      <UserGreeting isLoggedIn={true} userName="Peter" />
      <UserGreeting isLoggedIn={false} userName="Peter" />

      {fruits.length>0 ? <List items={fruits} category="fruits" /> : <p>No fruits available</p>}
      {vegetables.length>0 ? <List items={vegetables} category="vegetables" /> : <p>No vegetables available</p>}
      {/* short circuiting : if fruits is empty, then it will not render the List component */}

      <Button />

      <Counter />

      <ColorPicker />

      <MyComponent />

      <ToDoList />

      <DigitalClock />

      <DigitalClock />

      <DigitalClock />
    </>
  );
}

export default App;
