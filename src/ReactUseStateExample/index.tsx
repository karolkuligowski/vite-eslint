import { FunctionComponent, useState, ChangeEvent, MouseEvent } from 'react';

type UserType = {
  name: string;
  sessionId: number;
};

export const ReactUseStateExampleComponent: FunctionComponent = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUser({
      name: userName,
      sessionId: Math.random(),
    });
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      {user ? (
        `${user.name} loggedin`
      ) : (
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={handleInput}
          ></input>
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
    </div>
  );
};
