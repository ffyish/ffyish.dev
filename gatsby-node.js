const {SUBSITE, getPathSubsite} = require("./config/util/subsite")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  
  const pageSubsite = getPathSubsite(page.path)
  if (!pageSubsite) {
    console.log("IGNORE PAGE", pageSubsite)
    // subsite 페이지가 아닐경우 무시
    return
  }

  if (pageSubsite !== SUBSITE) {
    // 페이지가 서브사이트와 다를경우 삭제
    console.log("DELETE PAGE")
    deletePage(page)
    return
  }

  if (page.context.originalPath) {
    // 이미 바뀌어 있는 경우 스킵
    console.log("SKIP PAGE")
    return
  }

  console.log("CREATE PAGE")

  const originalPath = page.path

  deletePage(page)
  const pathReplaceRegex = new RegExp(`^\/${SUBSITE}`)
  const newPage = {
    ...page,
    path: page.path.replace(pathReplaceRegex, ''),
    matchPath: page.matchPath
      ? page.matchPath.replace(pathReplaceRegex, '')
      : page.matchPath,
    context: {
      ...page.context,
      originalPath,
    }
  }
  createPage(newPage)
}

exports.onPreInit = () => {
  console.log(`=========\nBuilding subsite: ${SUBSITE}\n=========`)
}
