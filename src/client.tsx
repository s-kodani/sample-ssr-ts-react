import { hydrateRoot } from 'react-dom/client';
import { App } from './components/App';

const container = document.getElementById('app');
hydrateRoot(container!, <App />);
