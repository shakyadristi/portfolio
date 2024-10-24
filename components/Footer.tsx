const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dristi Shakya. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/dristishakya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dristi-shakya-b92871290/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href=" https://www.facebook.com/dibu.shakya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Facebook
          </a>
          <a href=" https://www.instagram.com/dristi.shakya/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer