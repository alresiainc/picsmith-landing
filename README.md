# Picsmith — landing page

Static one-page site for Picsmith, a free offline-first photo editor
browser extension. Hosted on GitHub Pages — no build step, just
`index.html` + `assets/`.

- `index.html` — the page
- `assets/demo/` — a real design built with Picsmith's own rendering
  engine (background → shapes → badge → headline → final), used as the
  hero image and the "Made with Picsmith" gallery
- `downloads/picsmith-extension.zip` — the extension source, ready to
  load unpacked

## Updating the download

The zip is a snapshot of the extension source. To refresh it after
changes to the extension:

```
cd "browser extensions"
zip -r -q /path/to/picsmith-landing/downloads/picsmith-extension.zip Picsmith -x "*.DS_Store"
```

## Local preview

Just open `index.html` in a browser — everything is relative paths, no
server required.
