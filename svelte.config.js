import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      split: true
    }),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  }
}

export default config
