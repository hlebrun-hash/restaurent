# 📱 PLAN D'AMÉLIORATION SEO SOCIAL
*Date : 5 Février 2026*

---

## 📊 DIAGNOSTIC INITIAL

### ✅ Points Positifs (Déjà en place)
- ✓ Facebook Page liée (https://facebook.com/aupetitchezsoi)
- ✓ Facebook Open Graph Tags configurés
- ✓ Instagram lié (https://instagram.com/aupetitchezsoi)
- ✓ X/Twitter Cards configurés

### ❌ Points à Améliorer
- ✗ **Facebook Pixel** non détecté
- ✗ **Compte X/Twitter** non lié sur la page
- ✗ **LinkedIn** non lié
- ✗ **YouTube** non lié
- ✗ Visibilité sociale faible (profils peu mis en avant)

---

## 🎯 ACTIONS PRIORITAIRES

### 1. 🔴 HAUTE PRIORITÉ - Facebook Pixel

**Objectif :** Installer le Facebook Pixel pour le retargeting et l'analyse

**Actions :**
1. Créer un compte Facebook Business Manager (si pas déjà fait)
2. Générer un Facebook Pixel ID
3. Ajouter le code pixel dans le `<head>` de toutes les pages
4. Configurer les événements de conversion :
   - PageView (automatique)
   - ViewContent (page menu)
   - Contact (formulaire de réservation)
   - Lead (soumission formulaire)

**Code à ajouter :**
```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'VOTRE_PIXEL_ID_ICI');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=VOTRE_PIXEL_ID_ICI&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

---

### 2. 🟠 MOYENNE PRIORITÉ - Liens Réseaux Sociaux

**Objectif :** Ajouter tous les profils sociaux manquants

#### A. Créer/Lier les comptes manquants

**X/Twitter :**
- Créer un compte @aupetitchezsoi (si pas déjà fait)
- Ajouter le lien dans le footer et Schema.org
- Format : `https://twitter.com/aupetitchezsoi`

**LinkedIn :**
- Créer une page entreprise "Au Petit Chez Soi"
- Ajouter le lien dans le footer et Schema.org
- Format : `https://www.linkedin.com/company/aupetitchezsoi`

**YouTube (Optionnel mais recommandé) :**
- Créer une chaîne YouTube
- Publier des vidéos courtes :
  - Visite du restaurant
  - Préparation de plats signature
  - Témoignages clients
  - Coulisses de la cuisine
- Format : `https://www.youtube.com/@aupetitchezsoi`

#### B. Améliorer la visibilité des liens sociaux

**Dans le footer :** Ajouter tous les réseaux sociaux avec icônes claires
**Dans le Schema.org :** Mettre à jour la propriété `sameAs` avec tous les liens

---

### 3. 🟡 OPTIMISATIONS MÉTADONNÉES SOCIALES

#### A. Enrichir les Open Graph Tags

**Ajouter des balises manquantes :**
```html
<!-- Open Graph amélioré -->
<meta property="og:type" content="restaurant">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Au Petit Chez Soi">
<meta property="og:street_address" content="Rue du Centre">
<meta property="og:locality" content="La Celle-Saint-Cloud">
<meta property="og:region" content="Yvelines">
<meta property="og:postal_code" content="78170">
<meta property="og:country_name" content="France">
<meta property="og:phone_number" content="+33-X-XX-XX-XX-XX">

<!-- Images multiples pour meilleur affichage -->
<meta property="og:image" content="https://aupetitchezsoi.vercel.app/images/chef-cuisine.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Restaurant Au Petit Chez Soi - Cuisine fait maison">

<!-- Image secondaire -->
<meta property="og:image" content="https://aupetitchezsoi.vercel.app/images/batisse-exterieur.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Bâtisse historique du XVIIe siècle">
```

#### B. Enrichir les Twitter Cards

**Ajouter des balises manquantes :**
```html
<!-- Twitter Cards enrichies -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@aupetitchezsoi">
<meta name="twitter:creator" content="@aupetitchezsoi">
<meta name="twitter:title" content="Au Petit Chez Soi - Cuisine Fait Maison & Cadre Historique">
<meta name="twitter:description" content="Restaurant traditionnel à La Celle-Saint-Cloud (78). Cuisine 100% fait maison dans une bâtisse du XVIIe siècle. Réservez votre table.">
<meta name="twitter:image" content="https://aupetitchezsoi.vercel.app/images/chef-cuisine.webp">
<meta name="twitter:image:alt" content="Restaurant Au Petit Chez Soi - Plat signature">
```

---

### 4. 🔵 STRATÉGIE DE CONTENU SOCIAL

**Objectif :** Augmenter la présence et l'activité sociale

#### A. Calendrier de publication recommandé

**Facebook :**
- 3-4 posts/semaine
- Contenus : plats du jour, coulisses, événements, avis clients
- Meilleur moment : 12h-14h et 18h-20h

**Instagram :**
- 4-5 posts/semaine + 2-3 stories/jour
- Contenus : photos de plats, ambiance, équipe, making-of
- Hashtags : #RestaurantYvelines #LaCelleSaintCloud #FaitMaison #CuisineTraditionelle #Restaurant78

**X/Twitter :**
- 2-3 tweets/semaine
- Contenus : annonces, plats du jour, engagement communauté
- Utiliser les threads pour raconter l'histoire du restaurant

**LinkedIn :**
- 1-2 posts/semaine
- Contenus : recrutement, événements d'entreprise, privatisation
- Cibler les professionnels pour repas d'affaires

**YouTube (si créé) :**
- 1-2 vidéos/mois
- Contenus : recettes, visite virtuelle, interviews chef
- Optimiser SEO YouTube avec mots-clés

#### B. Contenus à créer en priorité

1. **Photos professionnelles haute qualité**
   - Tous les plats signature
   - Intérieur/extérieur du restaurant
   - Équipe en action
   - Ambiance soirée

2. **Vidéos courtes (Reels/Shorts)**
   - Préparation d'un plat signature (30-60s)
   - Visite rapide du restaurant (15-30s)
   - Témoignage client (20-30s)

3. **Stories régulières**
   - Plat du jour
   - Coulisses cuisine
   - Arrivage produits frais
   - Sondages et interactions

---

## 📝 CHECKLIST D'IMPLÉMENTATION

### Phase 1 : Technique (Cette semaine)
- [ ] Installer Facebook Pixel
- [ ] Créer compte X/Twitter
- [ ] Créer page LinkedIn
- [ ] Mettre à jour footer avec tous les liens sociaux
- [ ] Enrichir Open Graph Tags
- [ ] Enrichir Twitter Cards
- [ ] Mettre à jour Schema.org avec tous les liens

### Phase 2 : Contenu (Semaine prochaine)
- [ ] Séance photo professionnelle
- [ ] Créer 10 premiers posts pour chaque réseau
- [ ] Planifier calendrier éditorial 1 mois
- [ ] Créer templates visuels cohérents

### Phase 3 : Engagement (En continu)
- [ ] Publier régulièrement selon calendrier
- [ ] Répondre aux commentaires/messages
- [ ] Partager avis clients
- [ ] Collaborer avec influenceurs locaux
- [ ] Organiser concours/jeux

---

## 🎨 GUIDELINES VISUELLES POUR LES RÉSEAUX SOCIAUX

### Palette de couleurs (cohérence avec le site)
- Primaire : `#5D2A2C` (Bordeaux)
- Accent : `#B59451` (Or)
- Fond : `#FAF7F2` (Beige clair)
- Texte : `#2D2A26` (Noir chaud)

### Typographies
- Titres : Gambetta (élégant, serif)
- Corps : Satoshi (moderne, sans-serif)

### Style photographique
- Lumière naturelle privilégiée
- Ambiance chaleureuse et authentique
- Focus sur les détails et textures
- Couleurs chaudes et appétissantes

---

## 📈 MÉTRIQUES À SUIVRE

### KPIs Sociaux
- Nombre de followers (croissance mensuelle)
- Taux d'engagement (likes, commentaires, partages)
- Portée des publications
- Clics vers le site web
- Conversions (réservations via réseaux sociaux)

### KPIs Facebook Pixel
- Trafic depuis Facebook
- Taux de conversion
- Coût par lead
- ROI des campagnes publicitaires

### Objectifs 3 mois
- Facebook : 500+ followers
- Instagram : 800+ followers
- X/Twitter : 200+ followers
- LinkedIn : 100+ followers
- Engagement moyen : 5%+

---

## 🚀 QUICK WINS IMMÉDIATS

1. **Aujourd'hui :**
   - Mettre à jour footer avec liens sociaux existants
   - Enrichir métadonnées Open Graph et Twitter
   - Créer compte X/Twitter

2. **Cette semaine :**
   - Installer Facebook Pixel
   - Créer page LinkedIn
   - Prendre 20 photos de qualité avec smartphone

3. **Ce mois :**
   - Publier 15 posts sur chaque réseau
   - Obtenir 50 premiers followers
   - Générer 5 réservations via réseaux sociaux

---

## 💡 CONSEILS SUPPLÉMENTAIRES

### Engagement communautaire
- Répondre à TOUS les commentaires (< 2h)
- Partager contenu d'autres restaurants locaux
- Participer aux conversations locales (#LaCelleSaintCloud)
- Collaborer avec commerces de proximité

### User Generated Content
- Encourager clients à poster photos avec hashtag #AuPetitChezSoi
- Créer un "mur Instagram" dans le restaurant
- Organiser concours photo mensuel
- Republier meilleurs contenus clients (avec permission)

### Publicité payante (Budget recommandé)
- Facebook/Instagram Ads : 200-300€/mois
- Ciblage géographique : 15km autour de La Celle-Saint-Cloud
- Objectifs : Notoriété + Conversions (réservations)
- Tester différents formats : carrousel, vidéo, stories

---

## 📞 RESSOURCES UTILES

### Outils de gestion
- **Meta Business Suite** : Gestion Facebook + Instagram
- **Buffer/Hootsuite** : Planification multi-réseaux
- **Canva** : Création visuels
- **Later** : Planification Instagram
- **Google Analytics** : Suivi trafic social

### Formation
- Facebook Blueprint (gratuit)
- Google Digital Garage
- HubSpot Academy (Social Media Marketing)

---

## ✅ VALIDATION FINALE

Une fois toutes les actions implémentées, vérifier avec :
- **Facebook Debugger** : https://developers.facebook.com/tools/debug/
- **Twitter Card Validator** : https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector** : https://www.linkedin.com/post-inspector/
- **SEO Site Checkup** : https://seositecheckup.com/

---

*Document créé le 5 février 2026*
*À mettre à jour mensuellement avec les résultats obtenus*
