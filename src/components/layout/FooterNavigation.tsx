import { VFC, memo} from 'react'
import { useRouter } from 'next/router'

const HeaderNavigation: VFC = () => {
  const router = useRouter();
  const menu = [
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Careers',
    path: '/careers'
  },
  {
    name: 'Support',
    path: '/support'
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policies'
  },
];

  return <nav>
    {menu.map((item) => (
      <li key={item.path} onClick={() => router.push(item.path)} className="my-4 font-light text-center list-none text-white">
        {item.name}
      </li>
    ))}
  </nav>
}

export default memo(HeaderNavigation);