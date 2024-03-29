import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: vercel(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
