import classNames from 'classnames'
import type { ImageProps } from 'next/image'

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
 
  if (!size) return null

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
