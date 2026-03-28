# Sing The Easy Way - Jekyll Website

A complete Jekyll website for SingTheEasyWay.com - Online Singing Lessons with Celebrity Vocal Coach Matt Thompson.

## Features

- **5 Service Pages** targeting key SEO keywords
- **3 Blog Posts** for content marketing
- **FAQ Page** with structured data
- **Email Capture** for lead generation
- **Mobile Responsive** design
- **SEO Optimized** with schema markup
- **Fast Loading** static site

## Quick Start

### Prerequisites

- Ruby 2.5 or higher
- RubyGems
- GCC and Make

### Installation

1. **Clone or download this repository:**
   ```bash
   cd singtheeasyway-jekyll-site
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View site:**
   Open http://localhost:4000 in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Cloudflare Pages

1. Push code to GitHub
2. Log into Cloudflare Dashboard
3. Go to Pages → Create a project
4. Connect your GitHub repository
5. Build settings:
   - Build command: `jekyll build`
   - Build output directory: `_site`
6. Add custom domain: `singtheeasyway.com`

### Option 3: Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Framework preset: Jekyll
4. Build command: `jekyll build`
5. Output directory: `_site`
6. Add custom domain in settings

### Option 4: Netlify

1. Push code to GitHub
2. "New site from Git"
3. Select repository
4. Build command: `jekyll build`
5. Publish directory: `_site`
6. Add custom domain

## Configuration

### 1. Update Site Settings

Edit `_config.yml`:
```yaml
title: "Your Site Title"
url: "https://yoursite.com"
email: "your@email.com"
```

### 2. Add Your ConvertKit/Mailchimp Form

Edit `_layouts/default.html` and add your email service script:
```html
<!-- ConvertKit -->
<script async data-uid="YOUR_UID" src="https://YOUR_DOMAIN.ck.page/YOUR_UID/index.js"></script>
```

### 3. Add SimplyBook.me Widget

Edit `_layouts/default.html` and add your booking widget:
```html
<script src="//widget.simplybook.me/v2/widget/widget.js"></script>
<script>
  var widget = new SimplybookWidget({
    "widget_type": "button",
    "url": "https://yourstudio.simplybook.me",
    ...
  });
</script>
```

### 4. Add Google Analytics

Add to `_layouts/default.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Customize Colors/Branding

Edit `_sass/_variables.scss`:
```scss
$accent: #c9a962;  // Change to your brand color
```

## Custom Domain Setup

### GitHub Pages

1. Add `CNAME` file in root with your domain:
   ```
   singtheeasyway.com
   ```

2. In GitHub repository settings → Pages → Custom domain

3. DNS records (in your domain registrar):
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

### Cloudflare/Vercel/Netlify

1. Go to project settings
2. Add custom domain
3. Follow their DNS instructions
4. Enable SSL/HTTPS (usually automatic)

## Content Structure

```
.
├── _config.yml              # Site configuration
├── index.html               # Homepage
├── _pages/                  # Service pages
│   ├── online-singing-lessons.md
│   ├── virtual-singing-lessons.md
│   ├── remote-singing-lessons.md
│   ├── beginner-singing-lessons.md
│   ├── celebrity-vocal-coach.md
│   └── faq.md
├── _posts/                  # Blog posts
├── _layouts/                # Page templates
├── _includes/               # Reusable components
├── _sass/                   # Stylesheets
├── assets/                  # Static files
└── downloads/               # Lead magnets
```

## Adding New Content

### New Service Page

1. Create file in `_pages/`: `new-service.md`
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: "Page Title"
   description: "Meta description"
   permalink: /new-service/
   ---
   ```
3. Write content in Markdown
4. Link in navigation in `_includes/header.html`

### New Blog Post

1. Create file in `_posts/`: `YYYY-MM-DD-post-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   description: "Meta description"
   date: YYYY-MM-DD
   categories: blog
   ---
   ```
3. Write content in Markdown

## SEO Checklist

- [ ] Update `_config.yml` with correct site details
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add real testimonials
- [ ] Add actual student photos (with permission)
- [ ] Create and upload lead magnet PDF
- [ ] Set up email capture form
- [ ] Connect booking widget
- [ ] Add social media links
- [ ] Verify schema markup with Google's Rich Results Test

## Troubleshooting

### Build fails

```bash
bundle update
bundle exec jekyll clean
bundle exec jekyll build
```

### Styles not updating

Jekyll caches the sass compilation. Try:
```bash
bundle exec jekyll clean
bundle exec jekyll serve --force_polling
```

### Images not showing

Make sure images are in `assets/images/` and referenced correctly:
```html
<img src="/assets/images/photo.jpg" alt="Description">
```

## Support

For help with Jekyll: https://jekyllrb.com/docs/
For help with deployment: Check your hosting provider's documentation

## License

This website template is created for SingTheEasyWay.com. All content is proprietary.

---

Built with ❤️ for Matt Thompson - Celebrity Vocal Coach
