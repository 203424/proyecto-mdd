
import dynamic from 'next/dynamic'
import { memo } from 'react'
import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'

const Logo = dynamic<LogoProps>(() =>
  import('@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  return (
    <div className="flex flex-col px-4 py-2 border-b border-neutral-light laptop:mx-20 laptop:px-0 laptop:pt-8 laptop:pb-0 laptop:mb-5">
      <div className="flex justify-between w-full gap-3 laptop:mb-8">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>
      <nav className="hidden laptop:block">
        <ul className="hidden gap-6 uppercase laptop:flex">
          <NavItem label="Women" href="/catalog/Women" />
          <NavItem label="Men" href="/catalog/Men" />
        </ul>
      </nav>
    </div>
  )
})
