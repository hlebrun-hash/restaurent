# Guide de Déploiement et Optimisation SEO
## Au Petit Chez Soi

### ✅ Fichiers Critiques Créés/Modifiés

#### 1. Fichiers Techniques SEO
- **robots.txt** : Autorise tous les bots (Google, ChatGPT, Gemini)
- **sitemap.xml** : Liste toutes les pages avec dates de modification
- **sitemap.html** : Version HTML pour les utilisateurs
- **manifest.json** : PWA pour signaux mobiles
- **.well-known/security.txt** : Signaux de confiance

#### 2. Optimisations On-Page (index.html)
- ✅ Schema.org Restaurant complet (avec géolocalisation GPS)
- ✅ Schema.org FAQPage (5 questions stratégiques)
- ✅ Schema.org BreadcrumbList (navigation)
- ✅ Open Graph tags complets (image, dimensions)
- ✅ Twitter Cards
- ✅ Meta descriptions optimisées avec mots-clés locaux (78, Versailles, Rueil)
- ✅ Balises hreflang pour international
- ✅ Manifest PWA lié

### 🎯 Mots-clés Ciblés

**Primaires:**
- Restaurant La Celle-Saint-Cloud
- Restaurant 78
- Cuisine fait maison Yvelines
- Restaurant traditionnel Versailles

**Secondaires:**
- Terrasse restaurant 78
- Restaurant historique XVIIe
- Repas d'affaires La Celle
- Privatisation restaurant Yvelines

### 📊 Pourquoi les Scores sont à 0 (et comment ça va changer)

#### Causes Actuelles:
1. **Site récent** : Vercel vient de déployer
2. **Pas encore crawlé** : Google n'a pas indexé
3. **Aucun backlink** : Pas de liens externes

#### Actions Immédiates à Faire:

##### A. Forcer l'Indexation (URGENT - À faire maintenant)
1. **Google Search Console** :
   ```
   - Aller sur https://search.google.com/search-console
   - Ajouter la propriété "aupetitchezsoi.vercel.app"
   - Soumettre le sitemap : https://aupetitchezsoi.vercel.app/sitemap.xml
   - Demander l'indexation de chaque page (Inspection d'URL > Demander l'indexation)
   ```

2. **Bing Webmaster Tools** :
   ```
   - Aller sur https://www.bing.com/webmasters
   - Ajouter le site
   - Soumettre sitemap.xml
   ```

##### B. Créer des Backlinks (Semaine 1-2)
1. **Google My Business** :
   - Créer une fiche GMB avec lien vers le site
   - Ajouter photos, horaires, menu

2. **Annuaires Locaux** (GRATUITS) :
   - PagesJaunes.fr
   - Yelp.fr
   - TripAdvisor
   - LaFourchette
   - TheFork
   - Petit Futé

3. **Réseaux Sociaux** :
   - Facebook Business Page (lien dans "À propos")
   - Instagram Bio
   - LinkedIn Company Page

##### C. Contenu & Engagement (Semaine 2-4)
1. **Blog** (optionnel mais puissant) :
   - "Les 5 meilleurs plats de saison à La Celle-Saint-Cloud"
   - "Histoire de notre bâtisse du XVIIe siècle"
   - "Recette : Notre foie gras maison"

2. **Avis Clients** :
   - Demander aux clients de laisser des avis Google
   - Répondre à TOUS les avis (bon signal SEO)

### 🚀 Timeline Réaliste

| Période | Métrique Attendue | Action |
|---------|-------------------|--------|
| **Jour 1-3** | Indexation Google | Soumettre à Search Console |
| **Semaine 1** | 1-5 mots-clés | Backlinks annuaires |
| **Semaine 2-4** | 10-20 mots-clés | Google My Business actif |
| **Mois 2** | Top 100 pour "restaurant 78" | Avis clients réguliers |
| **Mois 3-6** | Top 20-50 mots-clés locaux | Contenu régulier |

### 🔍 Vérification Technique

**Tester maintenant** :
1. Schema Validator : https://validator.schema.org/
   - Copier/coller le code source de index.html
   - Vérifier 0 erreur

2. Rich Results Test : https://search.google.com/test/rich-results
   - Tester : https://aupetitchezsoi.vercel.app/
   - Doit montrer : Restaurant, FAQ, Breadcrumb

3. PageSpeed Insights : https://pagespeed.web.dev/
   - Tester la vitesse
   - Objectif : >90/100

### ⚠️ IMPORTANT : Redirection de Domaine

Si vous avez acheté **aupetitchezsoi.fr** :
1. Configurer Vercel pour utiliser le domaine custom
2. Ajouter redirection 301 de .vercel.app vers .fr
3. Mettre à jour TOUS les liens canoniques dans le code

### 📈 Suivi des Performances

**Outils à installer** :
1. Google Search Console (gratuit)
2. Google Analytics 4 (gratuit)
3. Bing Webmaster Tools (gratuit)
4. Semrush (version gratuite limitée)

**KPIs à suivre** :
- Impressions (combien de fois le site apparaît)
- Clics (combien cliquent)
- Position moyenne (classement moyen)
- Pages indexées (doit être 5 minimum)

---

## ✨ Résumé : Pourquoi ça va marcher

**Avant** :
- Aucune donnée structurée
- Méta-données génériques
- Pas de sitemap
- Pas de robots.txt

**Après** :
- 3 types de Schema.org (Restaurant, FAQ, Breadcrumb)
- Méta-données hyper-locales (78, Versailles, Rueil)
- Sitemap XML + HTML
- Robots.txt optimisé pour IA
- PWA manifest
- Open Graph + Twitter Cards

**Résultat attendu** : Dès que Google crawle (3-7 jours après soumission), le site sera **100% optimisé** pour apparaître dans :
- Recherches locales ("restaurant La Celle")
- Google Maps
- Snippets enrichis (FAQ, horaires)
- Recherches IA (ChatGPT, Gemini)

---

*Dernière mise à jour : 3 février 2026*
