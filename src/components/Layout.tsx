import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import { fetchStars } from '../utils/github.ts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [stars, setStars] = useState<number>(0); // Estado para almacenar las estrellas
  const location = useLocation();

  useEffect(() => {
    // Llama a la API para obtener las estrellas del repositorio
    const getStars = async () => {
      const starsCount = await fetchStars('andressep95', 'SQLift');
      setStars(starsCount); // Actualiza el estado con la cantidad de estrellas
    };

    getStars();
  }, []); // El hook se ejecutará solo una vez al montar el componente

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Modificación aquí para evitar duplicación en la ruta */}
                <Link to="/" className="text-2xl font-bold text-primary-600">SQLift</Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  to="/docs" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname.startsWith('/sqlift-install/docs') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Documentation
                </Link>
                <Link 
                  to="/docs/installation" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === '/sqlift-install/docs/installation' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Installation
                </Link>
                <Link 
                  to="/docs/configuration" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === '/sqlift-install/docs/configuration' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Configuration
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <a 
                href="https://github.com/andressep95/SQLift" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <Github className="h-6 w-6" />
                <div className="ml-4 text-sm font-medium text-gray-500">
                  {/* Mostrar el número de estrellas */}
                  Stars: {stars}
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
