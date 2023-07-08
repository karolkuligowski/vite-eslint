import { useState } from 'react';
import './App.css';
import { ReactTypes } from './ReactTypes';

//GENERICS
function printData<T>(data: T) {
  console.log(data, 'data');
}
printData(2);
printData('hello!');
printData(true);

// function makePair<T>(first: T, second: T): [T, T] {}
// const numberPair = makePair<number>(1, 2);
// console.log(numberPair, 'numberPair');

//UTILITY TYPES
//https://www.typescriptlang.org/docs/handbook/utility-types.html
//Partial
//Partial<Type> tworzy nowy typ któr zawiera wszystkie właściwosći orygialnego typu, ale oznacza je jeako opcjonalne (null lub undefined są dozwolone)
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>;
const partialPerson: PartialPerson = {};
partialPerson.name = 'John';
partialPerson.age = 18;

//Readonly
//Readony<Type>

interface Config {
  apiKey: string;
  endpoint: string;
}

type ReadonlyConfig = Readonly<Config>;
const config: ReadonlyConfig = {
  apiKey: '123abc',
  endpoint: 'htps://example.com/',
};
// config.apiKey = 'asdfsdsdg' //nie mozna zmieniać!!

//Pick
//Pick<Type, Keys>

interface PersonWithAddres {
  name: string;
  age: number;
  addres: string;
}

type PersonWithouAddred = Pick<PersonWithAddres, 'name' | 'age'>;

const person: PersonWithouAddred = {
  name: 'John',
  age: 25,
};

person.name = 'Aga';
// person.addres = "street"// błąd adrs nie istnieje
//Omit działa tak jak Pick tylko zamiat wybierać to wykluczamy konkretny klucz Omit tworzy nowy typ który zawiera wszystkie właściwości oryginalnego typu z wyjątkiem wbranych właściwości!

// any vs unknown
//https://dmitripavlutin.com/typescript-unknown-vs-any/
//any:
//- najbardziej elastyczy typ, w typescript oznacza, ze ma elastyczny typ, mozna wykonywac operacj bez ostrzezeń
//-pomija statyczną kontrolę typów w TS, nie ma sprawdzenia poprawności typów
//-jest przydatne gdy pracujemy z kodem, który nie ma jednoznacznie określonych typów lub chcemy zignorować ostrzezenia

// unknown
//- bezpieczniejszy niz any
//- oznacza ze zmienna moze mieć wartość dowolnego typu ale nie mozemy wykonywac dowolnych operacji dopoki nie sprawidzmy typu
//- wymusza kontrolę typów
//- przydatne gdy otrzymujemy wartość o niezniennym typie i chcemy manipulować zachowując kontrolę typów.

//Promise
//typ Promise reprezentuje wartość ktroa moze przydac sie w przyszlosci

let valueAny: any;
valueAny = 23;
valueAny = 'hello';
// valueAny.someFunction(); //dozwolone dla Any

let valueUnknown: unknown;
valueUnknown = 23;
valueUnknown = 'hello';
// valueUnknown.someFunction();// niedozwolone przy unknown

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ReactTypes />
    </div>
  );
}

export default App;
