import React from 'react';

import 'admin-lte/plugins/fontawesome-free/css/all.min.css'; // Ícones Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from '../src/Router';
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(<Router />);