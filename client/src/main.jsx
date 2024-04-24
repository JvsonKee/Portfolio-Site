import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyles.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/projects',
		element: <Projects />
	},
	{
		path: '/contact',
		element: <Contact />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div>
		<GlobalStyle />
		<RouterProvider router={router}/>
	</div>
)
