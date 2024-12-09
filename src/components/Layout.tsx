import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary-600">SQLift</Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  to="/docs" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname.startsWith('/docs') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Documentation
                </Link>
                <Link 
                  to="/docs/installation" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === '/docs/installation' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Installation
                </Link>
                <Link 
                  to="/docs/configuration" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === '/docs/configuration' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
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
                <span className="ml-2 text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}