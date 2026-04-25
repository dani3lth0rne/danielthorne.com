# danielthorne.com

Personal website. Static HTML/CSS/JS — no build step.

## Structure

```
danielthorne.com/
├── index.html        # Entry page
├── css/style.css     # Styles
├── js/main.js        # Optional JS
├── images/           # Assets
├── .gitignore
└── README.md
```

## Local preview

Open `index.html` directly in a browser, or serve with:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to Dreamhost

Two options:

1. **SFTP (simplest):** Upload the contents of this folder (not the folder itself) to your Dreamhost domain's web root, typically `~/danielthorne.com/`.
2. **Git deploy:** SSH into Dreamhost and `git clone` your GitHub repo into the domain's directory, then `git pull` to update.

Make sure `index.html` ends up at the top level of the web root.

## GitHub

After making changes:

```
git add .
git commit -m "describe change"
git push
```
