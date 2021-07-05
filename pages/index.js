import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Hello Next!</h1>
    <Link href='/about'>
      <a>About</a>
    </Link>
  </div>
)

export default Index