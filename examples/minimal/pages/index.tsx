import { type ExtendedRecordMap } from 'notion-types'

import { NotionPage } from '../components/NotionPage'
import { rootNotionPageId } from '../lib/config'
import notion from '../lib/notion'

export const getStaticProps = async () => {
  const pageId = rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    // cache for 1 day in seconds
    // NOTE: you'll likely want to use a shorter cache time for your app, but
    // I'm bumping this up because my vercel bill keeps increasing due to people
    // abusing the demo to host their own sites.
    revalidate: 86_400
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
}
