import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { visit } from "unist-util-visit";

export async function main() {
	const doc = `
  <!-- wp:paragraph -->
    <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph {"fontSize":"medium"} -->
    <p class="has-medium-font-size">Hello World</p>
  <!-- /wp:paragraph -->
  `;

	const tree = unified().use(rehypeParse, { fragment: true }).parse(doc);

	visit(tree, "comment", (node) => {
		console.log(node);
	});
}
