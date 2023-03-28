import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createTemplatePlugin } from '@/lib/autocomplete/plugins/createTemplatePlugin'


type AutocompleteIconsProps = {
  voice?: boolean
  camera?: boolean
}

function AutocompleteIcons({
}: AutocompleteIconsProps) {
  return (
    <div className="h-full flex gap-1 items-center absolute right-0">

    </div>
  )
}

export function voiceCameraIconsPluginCreator() {
  let root: Root | null = null
  let rootElCache: HTMLElement | null = null

  return createTemplatePlugin({
    container: '.aa-InputWrapperSuffix',
    render(rootEl) {
      if (!root || rootElCache !== rootEl) {
        rootElCache = rootEl
        root?.unmount()
        root = createRoot(rootEl)
      }
      root.render(<AutocompleteIcons />)
    },
  })
}
