import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'

main()

async function main() {
  const doc = `
  <!-- wp:paragraph -->
  <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph {"fontSize":"medium"} -->
  <p class="has-medium-font-size">Hello World</p>
  <!-- /wp:paragraph -->
  `

  console.log(
    JSON.stringify(
      unified()
        .use(rehypeParse, {fragment: true})
        //.use(rehypeStringify)
        .parse(doc), null, 2
    )
  )
}
