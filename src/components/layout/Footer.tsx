import { VFC, memo } from 'react';
import Image from 'next/image'
import SNSIcons from './SNSIcons';
import FooterNavigation from './FooterNavigation'
import PrimaryButton from '../button/PrimaryButton'

const Footer:VFC = () => {
  return <footer className="absolute z-0 bottom-0 py-8 flex flex-col justify-around items-center bottom-0 bg-primary-dark-blue min-w-[320px] w-screen h-[506px] lg:min-w-auto">
    <Image src="/assets/images/logo-footer.svg" width={140} height={20} />
    <SNSIcons />
    <FooterNavigation />
    <PrimaryButton label={'Request Invite'} />
  </footer>
}

export default memo(Footer);