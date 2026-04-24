# Connected Tablet Help

A production-ready static website for Vercel about low-income tablet assistance, Lifeline eligibility, provider comparison, safe application steps, and 2026 device-support options in the United States.

## Fixed Vercel Structure

This version uses a `public/` output directory because Vercel was expecting `public` after the build completed.

Important files:

```txt
connected-tablet-help/
├── public/
│   ├── index.html
│   ├── how-tablet-assistance-works/
│   │   └── index.html
│   ├── provider-comparison-guide/
│   │   └── index.html
│   ├── eligibility-and-documents/
│   │   └── index.html
│   ├── about-this-resource/
│   │   └── index.html
│   ├── assets/
│   │   ├── css/styles.css
│   │   ├── js/main.js
│   │   └── img/*.webp
│   ├── robots.txt
│   ├── sitemap.xml
│   └── 404.html
├── scripts/verify-build.js
├── package.json
├── vercel.json
└── README.md
```

## Vercel Settings

Use these settings if Vercel asks during import:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `public`
- Install Command: `npm install`

The `vercel.json` file already sets:

```json
"outputDirectory": "public"
```

## Deployment Steps

1. Extract this ZIP.
2. Upload the project files to a GitHub repository.
3. Import that GitHub repository in Vercel.
4. Keep the Output Directory as `public`.
5. Deploy.

## Canonical URL

The site is prepared with this placeholder deployment URL:

```txt
https://connected-tablet-help.vercel.app/
```

Update canonical, Open Graph, sitemap, and JSON-LD URLs if your final Vercel project URL is different.

## Compliance Note

Connected Tablet Help is an independent educational resource. It is not affiliated with the FCC, USAC, Lifeline, or any wireless provider. It does not process applications, distribute tablets, or guarantee approval.
