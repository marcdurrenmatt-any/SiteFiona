# Fiona Climent — L’arbre des voix

Site vitrine (Vue 3 + Vite + Vue Router) pour présenter les cours de piano et de chant.

## Développement local

```bash
npm install
npm run dev
```

Build de production (racine `/`, pour test local ou hébergement à la racine d’un domaine) :

```bash
npm run build
npm run preview
```

## Démo client sur GitHub Pages

Le dépôt est prêt pour **GitHub Actions → Pages** : le workflow `.github/workflows/deploy-github-pages.yml` construit le site et le publie automatiquement à chaque push sur **`main`** ou **`master`**.

### Étapes une fois sur GitHub

1. Créer un dépôt sur GitHub et y pousser ce projet (`git init`, `git remote add`, `git push`).
2. Dans le dépôt : **Settings → Pages**.
3. Sous **Build and deployment**, choisir **Source : GitHub Actions** (pas « Deploy from a branch »).
4. Pousser sur `main` : l’onglet **Actions** doit afficher un workflow vert, puis dans **Settings → Pages** l’URL du site (souvent  
   `https://<votre-compte>.github.io/<nom-du-depot>/`).

Le **`base`** Vite est défini automatiquement pendant le build CI à partir du **nom du dépôt** (`/<nom-du-depot>/`), pour que les assets et le routeur fonctionnent sous ce sous-chemin.

Une copie **`404.html`** (= `index.html`) est générée pour que la navigation directe vers des URLs comme `/a-propos` fonctionne sur Pages.

### Images dans `public/image/`

Vérifiez que les fichiers attendus sont bien commités (par ex. portrait `public/image/72825.webp`, ambiances JPG, etc.), sinon certaines sections afficheront une image manquante.

### Hébergement à la racine (nom de domaine perso)

Pour servir le site à la racine (`https://www.exemple.fr/`), gardez **`GITHUB_REPOSITORY` vide** au moment du build pour obtenir `base: '/'` — par exemple build sur une autre CI ou en local puis envoyez le dossier `dist` sur votre hébergeur.

---

Projet configuré pour une présentation cliente sur GitHub Pages ; adaptez textes et médias selon le retour du client.
