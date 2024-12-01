import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, ConfigProvider, Input, Space, theme, Switch, Calendar, Layout, Radio, Checkbox, Select } from 'antd';
import * as lightTheme from './token-overrides/light.json';
import * as darkTheme from './token-overrides/dark.json';

function App() {
  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState('system');
  const handleChecked = (checked: boolean) => {
    if (checked) {
      setDark(true);
      setMode("dark");
    } else  {
      setDark(false);
      setMode("light");
    }
  };
  const handleModeChange = (value: string) => {
    console.log(`Selected: ${value}`);
    setMode(value);
  };

  const [count, setCount] = useState(0);

  // switch (mode) {
  //   case 'dark':
  //     break;
  //   case 'light':
  //     break;
  //   case 'system':
  //     break;

  //   default:
  //     break;
  // }
  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: dark ? darkTheme : lightTheme,
      }}
    >
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          gap: 16
        }}
      >
        <Space
          direction="vertical"
          size={10}
        >
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            onChange={handleChecked}
          />
          <Button>Button</Button>
          <Checkbox>Checkbox</Checkbox>
          <Radio>Radio</Radio>
          <Select
            placeholder="Select"
            options={[
              { label: 'Dark', value: 'dark' },
              { label: 'Light', value: 'light' },
              { label: 'System', value: 'system' },
            ]}
            onChange={handleModeChange}
            defaultValue={mode}
            value={mode}
          />
          <Calendar
            fullscreen={false}
            style={{ width: '300px' }}
          />
          <Input placeholder={'Input'} />
        </Space>

      <Space>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
      </Layout>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </ConfigProvider>
  );
}

export default App;
