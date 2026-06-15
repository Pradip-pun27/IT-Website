# IT Study Hub

A simple, responsive static website that collects useful IT and Computer Science learning resources for students. It includes curated websites, YouTube channels, documentation links, tools, mobile apps, and an **Extra** section for helpful utilities such as PDF tools, image/GIF tools, free/open book libraries, and study resources.

🌐 **Live Website:** https://learn-it-website.elonmagar6.workers.dev/

> Best viewed in dark mode.

## ✨ Features

- **109 curated resource cards** for IT/CS learning
- **38 useful apps/tools** grouped in accordion sections
- Program filters for **CSIT**, **BIM**, **BCA**, and **Extra**
- Search and category filtering
- Extra helpful-sites section for tools and legal/free learning resources
- Responsive design for desktop and mobile
- Vanilla HTML, CSS, and JavaScript — no framework required
- Cloudflare Workers deployment using Wrangler

## 📚 Main Sections

The website is organized around these study/resource sections:

- **CSIT** — programming, DSA, databases, OS, AI/ML, cloud, cybersecurity, and academic resources
- **BIM** — IT, management, business, productivity, analytics, and web resources
- **BCA** — programming, web development, design, software engineering, and career resources
- **Extra** — additional helpful websites such as PDF tools, image/GIF utilities, open e-book libraries, notes, and general student tools

## 🛠️ Tech Stack

- **HTML5** — page structure
- **CSS3** — styling, responsiveness, dark UI
- **Vanilla JavaScript** — resource data, filtering, search, navigation, accordion behavior
- **Cloudflare Workers + Wrangler** — hosting/deployment

## 📁 Current Project Structure

```text
IT-Website/
├── index.html          # Source HTML file
├── styles.css          # Source CSS file
├── script.js           # Source JS/resource data file
├── public/             # Files served by Cloudflare Workers
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── wrangler.jsonc      # Cloudflare Workers/Wrangler deployment config
├── .assetsignore       # Extra deploy-safety ignore file
├── .gitignore          # Local git ignore rules
└── README.md           # Project documentation
```

### Important note about `public/`

Cloudflare Workers is configured to deploy only the `public/` folder:

```jsonc
"assets": {
  "directory": "public"
}
```

This avoids accidentally deploying internal folders like `.git/` or `.wrangler/`.

If you edit the root files:

```text
index.html
styles.css
script.js
```

then copy/sync the updated versions into `public/` before deploying, because the live Workers site uses the files inside `public/`.

## 🚀 Run Locally

From the project folder:

```bash
cd IT-Website
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a local server is cleaner.

## ✅ Basic Checks

Check JavaScript syntax:

```bash
node --check script.js
node --check public/script.js
```

Run a Cloudflare dry-run deploy check:

```bash
npx wrangler deploy --dry-run
```

## ☁️ Deploy to Cloudflare Workers

Deploy the current `public/` website to Cloudflare Workers:

```bash
npx wrangler deploy
```

The deployment config is in `wrangler.jsonc`.

Current live URL:

```text
https://learn-it-website.elonmagar6.workers.dev/
```

## 🧩 Updating Resources

Most website content/resources are stored in:

```text
script.js
public/script.js
```

When adding new resources:

1. Add the resource with a clear title, description, tags, URL, and program list.
2. Avoid duplicate URLs.
3. Prefer legal, free, official, or open-access resources.
4. Do not add piracy/copyright-infringing download sites.
5. After editing, run:

```bash
node --check script.js
node --check public/script.js
```

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test locally
5. Commit with a clear message:
   ```bash
   git commit -m "docs: update README"
   ```
6. Push and open a pull request

## 👨‍💻 Author

**Pradip Pun**

- GitHub: [@Pradip-pun27](https://github.com/Pradip-pun27)
- Repository: https://github.com/Pradip-pun27/IT-Website
- Live site: https://learn-it-website.elonmagar6.workers.dev/

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file if present in the repository.

---

Made with ❤️ for IT and CS learners.
