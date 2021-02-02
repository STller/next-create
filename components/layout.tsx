import Image from 'next/image'

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col h-full">
      <header style={{height: '42px', backgroundColor: '#E42823'}} className="h-32 flex justify-between items-center">
        <div style={{paddingLeft: '17px'}} className="logo flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={62}
            height={33}
          />
        </div>
        <div style={{paddingRight: '17px'}} className="telphone flex justify-between items-center">
          <Image
            src="/images/icon_phone.png"
            alt="icon_phone"
            width={20}
            height={20}/>
          <a href="tel:400-168-8810" className="text-white">400-168-8810</a>
        </div>
      </header>
      <section>Section</section>
      <footer>Footer</footer>
    </div>
  );
}
