const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dristi Shakya. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/dristishakya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dristishakya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com/dristishakya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer