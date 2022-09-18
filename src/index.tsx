import ReactDOM from 'react-dom/client';
import React from 'react';
import 'normalize.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseLayout from './components/BaseLayout';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout />
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
