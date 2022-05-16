/**
 * List of known active Feature Flags
 */
 export const FEATURE_FLAGS = {
    NEW_INDEX_PAGE: 'New_Index_Page',
  } as const
  
  export type FEATURE_FLAGS = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS]
  
  export const DISTINCT_ID_COOKIE_NAME = 'distinct_id'