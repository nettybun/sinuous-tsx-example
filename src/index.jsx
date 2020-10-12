import { h } from 'sinuous';
import { o } from 'sinuous/observable';

const text = o('Hello!');

const Button = ({ text, fn }) =>
  <button type="button" onClick={fn}>{text}</button>;

const Page = () =>
  <section style='width: 400px;'>
    <h1>Example with JSX 🌺</h1>
    <p>This shows how observables can easily update content</p>
    <p>Text has {() => text().length} chars</p>
    <input
      value={text}
      onInput={(ev) => {
        ev.target && text(ev.target.value);
      }}/>
    <Button text='x2' fn={() => text(text().repeat(2))}/>
    <p style='word-wrap:anywhere;'>Text: {text}</p>
  </section>;

const Code = () =>
  <section>
    <p>Here's the code:</p>
    <pre>
      {`
      import { h } from 'sinuous';
      import { o } from 'sinuous/observable';

      const text = o('Hello!');

      const Button = ({ text, fn }) =>
        <button type="button" onClick={fn}>{text}</button>;

      const Page = () =>
        <section>
          <h1>Example with JSX 🌺</h1>
          <p>This shows how observables can easily update content</p>
          <p>Text has {() => text().length} chars</p>
          <input
            value={text}
            onInput={(ev) => {
              ev.target && text(ev.target.value);
            }}/>
          <Button text='x2' fn={() => text(text().repeat(2))}/>
          <p style='word-wrap:anywhere;'>Text: {text}</p>
        </section>

      document.body.appendChild(<Page/>);
      `.replace(/\n {6}/g, '\n').trim()}
    </pre>
  </section>;

document.head.appendChild(
  <style>
    {`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: sans-serif;
      display: flex;
      align-items: flex-start;
    }
    section {
      padding: 20px;
      background: #f3dfe6;
      margin: 20px 0 20px 20px;
    }
    section > :first-child {
      margin-top: 0;
    }
    section, input, button, pre {
      border: 1px solid #ccc;
    }
    input {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      padding: 8px 6px;
    }
    button {
      background: #fff;
      width: 100px;
      padding: 8px 6px;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      margin: 0;
    }
    `}
  </style>
);
document.body.appendChild(<Page/>);
document.body.appendChild(<Code/>);
