import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <li style={{ listStyleType: 'none' }}>
          <Link href='/'>Home</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href='/about'>About</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href='/services'>Services</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
