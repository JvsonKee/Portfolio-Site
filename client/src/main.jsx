import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div>
		<GlobalStyle />
		<App />
	</div>
)
