import { ExternalLink, Heart } from 'lucide-react';

export function CreditFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-8 border-t border-gray/50 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    {/* Made by Section */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Made with</span>
                        <Heart className="h-4 w-4 text-theme-green fill-current animate-pulse" />
                        <span>by</span>
                        <a
                            href="https://forayeji.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-theme-blue hover:text-theme-green transition-colors duration-300 inline-flex items-center space-x-1 hover:underline"
                        >
                            <span>Forayeji Creative Agency</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-sm text-gray-500">
                        <p>© {currentYear} All rights reserved</p>
                    </div>

                    {/* Additional Links */}
                    <div className="flex items-center space-x-6 text-sm">
                        <a
                            href="https://forayeji.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-theme-blue transition-colors duration-200"
                        >
                            Portfolio
                        </a>
                        <a
                            href="https://forayeji.com/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-theme-blue transition-colors duration-200"
                        >
                            Contact
                        </a>
                        <a
                            href="https://forayeji.com/services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-theme-blue transition-colors duration-200"
                        >
                            Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
