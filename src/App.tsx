import { Provider } from 'react-redux';
import './App.css';
import { Theme } from '@radix-ui/themes';
import { store } from './services/redux/store';
import { RouterProvider } from 'react-router';
import router from './router';

function App() {

  return (
    <Theme
      accentColor="crimson"
      grayColor='auto'
      appearance='light'
      radius="small"
      scaling="100%"
      panelBackground="translucent"
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Theme>
  )
}

export default App;
