import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
  return (
    <div style={{fontSize: '20px', color: 'blue'}}>
      <h1>About</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Image />
      <p>this is cool</p>
      <Link href='/testPage'>
        <a>test success?</a>
      </Link>
    </div>
  )
}

export default About