import { GoogleOAuthProvider } from '@react-oauth/google';
import { App } from 'components/App';
import { apiData } from 'configuration/config';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/ReactGameBar">
    <Provider store={store}>
      <GoogleOAuthProvider clientId={apiData.CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
