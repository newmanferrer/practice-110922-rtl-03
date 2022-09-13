import {
  Person,
  SideBar,
  ButtonWrapper,
  Counter,
  API,
  CounterWhitHook,
  ReduxCounter,
  ZustandCounter
} from './components';
import logo from './logo.svg';
import './App.css';

const items = [
  {
    name: 'Newman',
    href: 'newman'
  },
  {
    name: 'Alejandro',
    href: 'alejandro'
  }
];

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <section>
        <header>
          <h2>1.- Testing Renders Component</h2>
          <h3>(Person Component)</h3>
        </header>
        <Person name='Newman' />
      </section>

      <hr />

      <section>
        <header>
          <h2>2.- Testing Multiple Elements</h2>
          <h3>(SideBar Component)</h3>
        </header>
        <SideBar items={items} />
      </section>

      <hr />

      <section>
        <header>
          <h2>3.- Testing Event Handlers</h2>
          <h3>(ButtonWrapper Component)</h3>
        </header>
        <ButtonWrapper title='Button Wrapper' />
      </section>

      <hr />

      <section>
        <header>
          <h2>4.- Testing State Hooks</h2>
          <h3>(Counter Component)</h3>
        </header>
        <Counter />
      </section>

      <hr />

      <section>
        <header>
          <h2>5.- Testing Async Hooks</h2>
          <h3>(API Component)</h3>
        </header>
        <API />
      </section>

      <hr />

      <section>
        <header>
          <h2>6.- Testing Simple Custom Hooks</h2>
          <h3>(useCounter Hook)</h3>
        </header>
        <CounterWhitHook />
      </section>

      <hr />

      <section>
        <header>
          <h2>7.- Testing Async Custom Hooks</h2>
          <h3>(useAPI Hook)</h3>
        </header>
      </section>

      <hr />

      <section>
        <header>
          <h2>8.- Testing Redux Component</h2>
          <h3>(ReduxCounter Component)</h3>
        </header>
        <ReduxCounter />
      </section>

      <hr />

      <section>
        <header>
          <h2>9.- Testing Zustand Component</h2>
          <h3>(ZustandCounter Component)</h3>
        </header>
        <ZustandCounter />
      </section>
    </div>
  );
};
