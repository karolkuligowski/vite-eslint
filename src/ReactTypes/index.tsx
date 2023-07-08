import { ReactUseStateExampleComponent } from '../ReactUseStateExample';

interface ChildrenProps {
  children: React.ReactNode;
}
const ChildrenComponent = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export function ReactTypes() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('kliknieto przycisk', event);
  };
  return (
    <div>
      ReactTypes
      {/*event dla inputa*/}
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}></button>
      <ChildrenComponent>
        <div>children</div>
        <p>children</p>
      </ChildrenComponent>
      <ReactUseStateExampleComponent />
    </div>
  );
}
