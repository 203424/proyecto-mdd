import classNames from 'classnames'
import type { ImageProps } from 'next/image'
import { useCallback, useState } from 'react'

import { Container } from '@/components/container/container'
import { DummyWrapper } from '@/components/dummy-wrapper/dummy-wrapper'
import { useIsMounted } from '@/hooks/useIsMounted'

export type BannerSize = 'l' | 'm' | 's' | 'xl' | 'xs-large' | 'xs-small'

export type BannerProps = {
  size: BannerSize
  title?: string
  subtitle?: string
  description?: string
  image?: ImageProps['src']
  imageAlt?: string
  overlay?: boolean
  gradient?: boolean
  fullWidth?: boolean
  className?: string
  classNameTitle?: string
  classNameSubtitle?: string
  classNameDescription?: string
  children?: React.ReactNode
}

export function Banner({
  size,
  description,
  fullWidth = false,
  classNameDescription,
}: BannerProps) {
  const [loaded, setLoaded] = useState(false)
  const isMounted = useIsMounted()

  const handleLoadingComplete = useCallback(
    () => (isMounted() ? setLoaded(true) : null),
    [isMounted]
  )

  if (!size) return null

  const Wrapper = fullWidth ? DummyWrapper : Container

  return (
    <>
      {description && (
        <p
          className={classNames(
            'block mt-4 laptop:hidden',
            classNameDescription
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </>
  )
}
