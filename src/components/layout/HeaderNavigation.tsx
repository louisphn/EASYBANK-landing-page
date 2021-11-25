import { VFC, memo} from 'react'
import { useRouter } from 'next/router'

interface Props {
  active: boolean;
}

const HeaderNavigation: VFC<Props> = ({active}) => {
  const router = useRouter();
  const menu = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  if (!active) return <></>
  return <nav className="absolute z-10 top-[72px] left-0 w-screen h-screen bg-gradient-to-b from-primary-dark-blue to-transparent lg:w-screen lg:min-w-auto lg:h-[64px] lg:top-0 lg:bg-none">
    <ul className="absolute transform left-[50%] top-8 translate-x-[-50%] w-11/12 bg-white flex flex-col items-center rounded-xl py-8 lg:top-0 lg:transform lg:justify-between lg:w-4/12 lg:mt-[2px] lg:min-w-[468px] lg:bg-transparent lg:py-0 lg:flex-row">
    {menu.map((item) => (
      <li key={item.toLowerCase()} onClick={() => router.push(`/${item.toLowerCase()}`)}
      className="text-primary-dark-blue my-4 text-xl"
      >
        {item}
      </li>
    ))}
    </ul>
  </nav>
}

export default memo(HeaderNavigation);