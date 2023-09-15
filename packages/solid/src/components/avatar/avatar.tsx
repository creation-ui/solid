import clsx from 'clsx'
import { forwardRef } from 'react'
import type AvatarProps from './avatar.types'
import { avatar } from './classes'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size, badge, variant } = props

  const badgeType = badge?.count ? 'count' : 'dot'

  return (
    <div ref={ref} class={clsx(avatar.container)}>
      <img {...props} class={avatar.img({ size, variant })} />
      {props.badge && (
        <>
          <div
            class={avatar.notifications({
              horizontal: badge?.placement?.horizontal,
              vertical: badge?.placement?.vertical,
              type: badgeType,
              color: badge?.color,
              size,
            })}
          >
            <span>{props.badge?.count}</span>
            <span
              class={avatar.pulse({
                pulse: badge?.pulse,
                color: badge?.color,
                size,
              })}
            />
          </div>
        </>
      )}
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
