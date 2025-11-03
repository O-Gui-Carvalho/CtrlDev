'use client'

const ScrollLink = ({id, children, className}) => {

    const handleScroll = (e) => {
        e.preventDefault()

        const section = document.getElementById(id)

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            window.history.replaceState(null, '', '/')
        }
    }

  return (
    <a href={`#${id}`} onClick={handleScroll} className={className}>
        {children}
    </a>
  )
}

export default ScrollLink