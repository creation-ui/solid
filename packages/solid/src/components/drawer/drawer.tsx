// import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useTheme } from '../../theme'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'
import { Overlay } from '../overlay'
import { splitProps } from 'solid-js'

const Drawer = (_props: DrawerProps) => {
    const [props, rest] = splitProps(_props, ["open", "children", "onOverlayClick"]);
const { drawers, zIndex } = useTheme()
  const {
    //
    position = drawers!.position,
    onClose = () => {},
  } = props

  return (
    <>
      <Overlay class={'fixed'} active={props.open} onClick={props.onOverlayClick} />
      <Transition
        show={props.open}
        as={Fragment}
        unmount={false}
        enter={clsx(drawerAnimation.animation)}
        leave={clsx(drawerAnimation.animation)}
        enterFrom={clsx(drawerAnimation.enter[position])}
        enterTo={clsx(drawerAnimation.leave[position])}
        leaveFrom={clsx(drawerAnimation.leave[position])}
        leaveTo={clsx(drawerAnimation.enter[position])}
      >
        <Dialog
          unmount={false}
          // @ts-ignore
          onClose={onClose}
          class={drawer({ className: [zIndex?.modals], position })}
        >
          <div class='h-full flex'>
            <div class={clsx(child)}>{props.children}</div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
