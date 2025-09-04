# 📘 README – Client CMS avec Docker & GitHub Actions

## 🚀 Introduction

Ce projet est une **application React (Create React App)** conteneurisée avec **Docker**, servie en production via **Nginx**, et déployée automatiquement sur un **VPS Ionos** grâce à un pipeline **CI/CD GitHub Actions**.

L’objectif est de proposer un pipeline complet :

* **Mode Développement** → React avec hot reload via `docker-compose`.
* **Mode Production** → Build multi-stage avec Nginx.
* **CI/CD** → Build & Push automatique d’images Docker sur Docker Hub.
* **Déploiement automatisé** → Lancement sur VPS via `repository_dispatch`.

👉 Cette solution peut servir de **base de projet** pour toute application React souhaitant être déployée avec Docker et GitHub Actions.

---

## 🛠️ Stack Technique

* **Frontend** : React (Create React App)
* **Conteneurisation** : Docker (multi-stage build)
* **Serveur web** : Nginx (optimisé pour React Router)
* **Orchestration locale** : Docker Compose
* **CI/CD** : GitHub Actions (Build → Push → Deploy)
* **Registry** : Docker Hub
* **Hébergement** : VPS Ionos (firewall + SSH deploy)

---

## 🔧 Installation & Mode Développement

### 1. Cloner le projet

```bash
git clone https://github.com/Collect-Verything/produits-cms-ui.git
cd produits-cms-ui
```

### 2. Lancer en mode Dev (hot reload)

```bash
docker compose up client-dev
```

* L’application tourne sur **[http://localhost:3000](http://localhost:3000)**.
* Les fichiers locaux sont montés dans le conteneur → toute modification est reflétée instantanément.

👉 Voir la documentation : [2. Mode Développement](./documentation/2.3.%20Commandes%20pour%20lancer%20en%20dev%20(hot%20reload).md)

---

## 🏗️ Build & Production locale

### 1. Build avec variables d’environnement

```bash
docker build \
  --build-arg REACT_APP_PRIMARY="#f542c2" \
  --build-arg REACT_APP_SECONDARY="#fcba03" \
  --build-arg REACT_APP_TITRE_SITE="titretest" \
  --build-arg REACT_APP_USER="usertest" \
  -t client-cms .
```

### 2. Run avec Nginx

```bash
docker run -p 8080:8080 client-cms
```

👉 Disponible sur **[http://localhost:8080](http://localhost:8080)**.

[//]: # (Modifier lien et mettre doc réel du projet pas tuto basic cice)
👉 Voir la documentation : [3. Mode Production](./documentation/3.1.%20Dockerfile%20(multi-stage%20build%20avec%20Nginx).md) 

---

## ⚙️ CI/CD avec GitHub Actions

Le déploiement est automatisé grâce à un **workflow déclenché par API** (`repository_dispatch`).

### 🔹 Pipeline :

1. **POST API → /dispatches** (depuis frontend ou curl).
2. **GitHub Actions** :

    * Build de l’image avec `--build-arg` dynamiques (`client_payload`).
    * Push sur Docker Hub (`client-cms-<user>`).
    * SSH sur le VPS → Stop ancien conteneur → Run nouveau.
3. **App disponible** sur `http://<IP_SERVEUR>` (port 80).

👉 Voir la documentation :

* [5. GitHub Actions & CI/CD](./documentation/5.%20GitHub%20Actions%20&%20CI-CD.md)

[//]: # (Verifier que doc correspond bien à explication base ci cd)
* [7. Déclencher un Workflow par API](./documentation/7.%20Déclencher%20un%20Workflow%20par%20API.md)

---

## 🔐 Gestion des Tokens (PAT GitHub)

* Un **Personal Access Token (fine-grained)** est nécessaire pour déclencher les workflows via API.
* Permissions minimales :

    * `Actions: Read and write`
    * `Contents: Read and write`
* Ajout du token en secret dans GitHub Actions.

[//]: # (Normalement ok)
👉 Voir la documentation : [6. Bearer Token GitHub](./documentation/6.%20Bearer%20Token%20(PAT)%20GitHub.md)

---

## 🌍 Déploiement sur VPS (Ionos)

* **Firewall externe (Ionos)** → Ouvrir **80/443**.
* **Firewall interne (UFW)** → Autoriser `sudo ufw allow 80/tcp 443/tcp`.
* **Docker run** avec mapping :

```bash
docker run -d -p 80:8080 client-cms-usertest
```

👉 Accessible sur **http\://\<IP\_SERVEUR>**.

[//]: # (Rediriger vers doc a jour du project pas tuto ci cd basic)
👉 Voir la documentation : [8. Déploiement VPS](./documentation/8.%20Déploiement%20sur%20VPS%20(Ionos).md)

---

## 📚 Documentation complète

Toutes les notes détaillées sont disponibles dans le dossier [`/documentation`](./documentation).

[//]: # (Faire des topic tuto base et explication appli reel)
* [Sommaire](./documentation/1.0%20Sommaire.md)

---

## ✨ Conclusion

Ce projet propose une **chaîne complète** de :

[//]: # (Mettre a jour cette chaine avec fonctionnalité reel , pas tuto base cicd)

* Développement isolé avec Docker Compose,
* Build optimisé avec Docker multi-stage + Nginx,
* CI/CD automatisé via GitHub Actions,
* Déploiement reproductible sur VPS avec un simple `POST API`.

⚡ En une commande `curl` ou un bouton dans ton frontend, tu passes directement du **code source** à une **application live en production**.
