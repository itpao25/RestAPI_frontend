import React from 'react';
import './App.css';
import { Header } from './components/ui/header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ maxWidth: 400 }} className='card p-4 mx-auto'>
                    <h3 className='mb-3 text-center'>Accedi</h3>
                    <div className="mb-3">
                        <label className='form-label mb-1'>Username</label>
                        <input type="email" className='form-control' id="username" />
                    </div>
                    <div className="mb-3">
                        <label className='form-label mb-1'>Password</label>
                        <input type="password" className='form-control' id="password" />
                    </div>
                    <div className="mb-0">
                        <input type="submit" value="Accedi" className='btn btn-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
