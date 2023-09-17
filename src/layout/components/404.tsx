import { useLocation } from 'solid-start'
import { useConfig } from '../contexts'
import { getGitIssueUrl, renderComponent } from '../utils'
import { Anchor } from './anchor'

export function NotFoundPage() {
  const config = useConfig()
  const { pathname } = useLocation()
  const { content, labels } = config.notFound
  if (!content) {
    return null
  }

  return (
    <p class='nx-text-center'>
      <Anchor
        href={getGitIssueUrl({
          repository: config.docsRepositoryBase,
          title: `Found broken \`${pathname ?? ''}\` link. Please fix!`,
          labels,
        })}
        newWindow
        class='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]'
      >
        {renderComponent(content)}
      </Anchor>
    </p>
  )
}
