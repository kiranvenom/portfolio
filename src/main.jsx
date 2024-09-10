import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ReactLenis>
	</React.StrictMode>,
);
