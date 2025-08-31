Voici une version propre de ta note, prête à mettre dans ton **README** 👇

---

## 🚀 Utilisation avec Docker

### 🔧 Mode Développement

Lancer l’application en mode **dev** avec hot-reload :

```bash
docker build --platform linux/amd64 -t client-product .
docker compose watch react-dev
```

👉 L’application sera disponible sur [http://localhost:3000](http://localhost:3000).

---

### 🏗️ Build (Production)

Construire l’image Docker avec les variables d’environnement injectées au build :

```bash
docker build \
  --build-arg REACT_APP_PRIMARY="#f542c2" \
  --build-arg REACT_APP_SECONDARY="#fcba03" \
  --build-arg REACT_APP_TITRE_SITE=titretest \
  --build-arg REACT_APP_USER=usertest \
  -t client-cms .
```

---

### ▶️ Dev

Lancer l’image pour dev

```bash
docker compose up client-dev
```

👉 L’application sera disponible sur [http://localhost:3000](http://localhost:3000).

---

---

### ▶️ Run (Production)

Lancer l’image buildée avec Nginx (port **8080**) :

```bash
docker run -p 8080:8080 client-cms
```

👉 L’application sera disponible sur [http://localhost:8080](http://localhost:8080).

---

Veux-tu que je te rajoute aussi une **section .env** dans ce README (avec un exemple de contenu) pour que ce soit encore plus clair ?
