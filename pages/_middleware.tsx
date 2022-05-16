import { NextRequest, NextResponse } from 'next/server'
import { getFeatureFlagVariant } from '@lib/posthog-node'
import { DISTINCT_ID_COOKIE_NAME, FEATURE_FLAGS } from '@lib/constants'

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const productVariantValue = await getFeatureFlagVariant(
    req.cookies[DISTINCT_ID_COOKIE_NAME],
    FEATURE_FLAGS.NEW_INDEX_PAGE
  )
  url.pathname = `/${productVariantValue}`

  // redirect to the path based on the variant value
  return NextResponse.rewrite(url)
}