import Link from 'next/link';

const About = () => {
  return (
    <div style={{fontSize: '20px', color: 'blue'}}>
      <h1>About</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <p>this is cool</p>
    </div>
  )
}

export default About