import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css'; // when using vite, import this file into the main.jsx file.
// When inspecting the web page, all css styles were added dynamically to the DOM, head of the document, by Vite
// This is because Vite is using the css-loader to load the css file and inject it into the DOM.

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
