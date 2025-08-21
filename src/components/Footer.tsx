
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ANCIENT GOD. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">TikTok</a>
          <a href="#" className="hover:text-gold transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
