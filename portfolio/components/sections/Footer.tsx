export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-8 text-center text-sm text-gray-500 font-light pointer-events-auto z-20 relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Himanshu. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="https://github.com/HimanshuP3002" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-medium">GitHub</a>
                    <a href="https://www.linkedin.com/in/himanshu-pandey-05a951345/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-medium">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
