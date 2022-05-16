import { NextRequest, NextResponse } from 'next/server'
import { isFeatureFlagEnabled } from '@lib/posthog-node'
import { DISTINCT_ID_COOKIE_NAME, FEATURE_FLAGS } from '@lib/constants'

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // Redirect paths that go directly to the variant
  if (url.pathname != '/') {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  const newIndexPageFlagEnabled = await isFeatureFlagEnabled(
    req.cookies[DISTINCT_ID_COOKIE_NAME],
    FEATURE_FLAGS.NEW_INDEX_PAGE
  )
  url.pathname = newIndexPageFlagEnabled ? '/new_homepage' : '/'

  return NextResponse.rewrite(url)
}