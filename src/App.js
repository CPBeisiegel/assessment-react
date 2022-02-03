import {IdCard} from "./components/IdCard";
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App">
      <IdCard
        fullName='John Doe'
        gender='male'
        birthday="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

    <IdCard 
      fullName='Obrien Delores'
      gender='female'
      birthday="1988-05-11"
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    <Counter/>

    </div>
  );
}

export default App;
