import cn from 'clsx'
import type { ReactElement } from 'react'
import { useConfig } from '../contexts'
import { renderComponent } from '../utils'
import { LocaleSwitch } from './locale-switch'

export function Footer(props: { menu?: boolean }): ReactElement {
  const config = useConfig()
  return (
    <footer class="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div
        class={cn(
          'nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4',
          props.menu && (config.i18n.length > 0 || config.darkMode)
            ? 'nx-flex'
            : 'nx-hidden'
        )}
      >
        <LocaleSwitch />
        {config.darkMode && renderComponent(config.themeSwitch.component)}
      </div>
      <hr class="dark:nx-border-neutral-800" />
      <div
        class={cn(
          'nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start',
          'nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]'
        )}
      >
        {renderComponent(config.footer.text)}
      </div>
    </footer>
  )
}
