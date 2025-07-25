export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-xl">Afrainity Technologies</span>
          </div>
          <p className="text-gray-400 text-center md:text-right">© 2024 Afrainity Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
