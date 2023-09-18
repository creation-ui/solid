export interface Route {
  path: string
  title: string
  hide?: boolean
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/docs',
    title: 'Introduction',
  },
  {
    path: '/docs/components',
    title: 'Components',
    children: [
      {
        title: 'Autocomplete',
        path: '/autocomplete',
        children: [
          { title: 'renderTags', path: '/render-tags' },
          { title: 'filterOptions', path: '/filter-options' },
          { title: 'renderOption', path: '/render-option' },
          { title: 'renderSelection', path: '/render-selection' },
          {
            title: 'Customizing option and selection',
            path: '/customizing-option-and-selection',
          },
        ],
      },
      { title: 'Avatar', path: '/avatar' },
      { title: 'Breadcrumbs', path: '/breadcrumbs' },
      { title: 'Button', path: '/button' },
      { title: 'Button Group', path: '/button-group' },
      { title: 'Calendar', path: '/calendar' },
      { title: 'Callout', path: '/callout' },
      { title: 'Card', path: '/card' },
      { title: 'Checkbox', path: '/checkbox' },
      { title: 'Clear Button', path: '/clear-button' },
      { title: 'Dark Mode Toggle', path: '/dark-mode-toggle' },
      { title: 'Date Picker', path: '/date-picker' },
      { title: 'Drawer', path: '/drawer' },
      { title: 'Dropdown Chevron', path: '/dropdown-chevron' },
      { title: 'Input', path: '/input' },
      { title: 'Input Base', path: '/input-base' },
      { title: 'Loader', path: '/loader' },
      { title: 'Loading Overlay', path: '/loading-overlay' },
      { title: 'Modal', path: '/modal' },
      { title: 'Popover', path: '/popover' },
      { title: 'Progress Bar', path: '/progress-bar' },
      { title: 'Radio', path: '/radio' },
      { title: 'Radio Group', path: '/radio-group' },
      {
        title: 'Select',
        path: '/select',
        children: [
          { title: 'renderOption', path: '/render-option' },
          { title: 'renderSelection', path: '/render-selection' },
        ],
      },
      { title: 'Show', path: '/show' },
      { title: 'Switch', path: '/switch' },
      { title: 'Table', path: '/table' },
      { title: 'Textarea', path: '/textarea' },
      { title: 'Theme', path: '/theme' },
      { title: 'Time Picker', path: '/time-picker' },
      { title: 'Toggle Group', path: '/toggle-group' },
      { title: 'Tooltip', path: '/tooltip' },
      { title: 'Typography', path: '/typography' },
    ],
  },
]
