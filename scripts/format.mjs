// @ts-check
import { exec } from 'node:child_process'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { promisify } from 'node:util'

const DOC_EXT_REGEX = /\.md|\.mdx$/

const DOCS_DIR = join(import.meta.dirname, '..', 'docs')

const execAsync = promisify(exec)

/** @param {string} text @param {string} [ext] @returns {string} */
function code(text, ext = 'bash') {
  return '```' + ext + '\n' + text + '```'
}

/** @param {string} path @returns {Promise<boolean>} */
async function isDirectory(path) {
  const stats = await stat(path)
  return stats.isDirectory()
}

/** @param {string} string @param {string} [separator] @returns {string[]} */
function splitOnce(string, separator = '```') {
  const index = string.indexOf(separator)
  return index >= 0
    ? [string.slice(0, index), string.slice(index + separator.length)]
    : [string]
}

/** @param {string} path @returns {Promise<void>} */
async function formatDocument(path) {
  console.log(path.slice(DOCS_DIR.length + 1))
  const content = await readFile(path, 'utf-8')

  const segments = await Promise.all(
    content
      .split('```bash\n')
      .flatMap(block => splitOnce(block, '```'))
      // .reduce(async (promise, segment, i) => {
      //   const array = await promise

      //   if (i % 2 === 0) return array.concat(segment)
      //   const result = await execAsync(`shfmt -i 2 -s <<'STICKY-DRAMA'\n${segment}\nSTICKY-DRAMA`)

      //   return array.concat(code(result.stdout))
      // }, Promise.resolve([]))
      .map(async (segment, i) => {
        if (i % 2 === 0) return segment
        const result = await execAsync(
          `shfmt -i 2 -s <<'STICKY-DRAMA'\n${segment}\nSTICKY-DRAMA`
        )

        return code(result.stdout)
      })
  )

  await writeFile(path, segments.join(''), 'utf-8')
}

/** @param {string} [dir] @returns {Promise<void>} */
async function formatDocsDir(dir = DOCS_DIR) {
  for (const path of await readdir(dir)) {
    const fullPath = join(dir, path)
    if (await isDirectory(fullPath)) await formatDocsDir(fullPath)
    else if (DOC_EXT_REGEX.test(path)) await formatDocument(fullPath)
  }
}

await formatDocsDir()
