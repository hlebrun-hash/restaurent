# ✅ ACTIONS IMMÉDIATES - SEO SOCIAL
*Date : 5 Février 2026*

---

## 🎯 CE QUI A ÉTÉ FAIT

### ✅ Modifications Techniques Appliquées

#### 1. **Métadonnées Open Graph Enrichies**
- ✓ Ajout de balises de localisation (adresse, ville, code postal, pays)
- ✓ Images multiples avec attributs alt pour meilleur affichage
- ✓ Informations de contact (téléphone)
- ✓ Structure organisée et commentée

#### 2. **Twitter Cards Optimisées**
- ✓ Ajout de `twitter:site` et `twitter:creator` (@aupetitchezsoi)
- ✓ Ajout de `twitter:image:alt` pour l'accessibilité
- ✓ Descriptions optimisées

#### 3. **Facebook Pixel Préparé**
- ✓ Code pixel ajouté (commenté, prêt à activer)
- ✓ Instructions claires pour l'activation
- ⚠️ **À FAIRE** : Obtenir votre Pixel ID et décommenter le code

#### 4. **Footer Réseaux Sociaux**
- ✓ Liens vers Facebook (https://facebook.com/aupetitchezsoi)
- ✓ Liens vers Instagram (https://instagram.com/aupetitchezsoi)
- ✓ Liens vers Twitter/X (https://twitter.com/aupetitchezsoi)
- ✓ Liens vers LinkedIn (https://linkedin.com/company/aupetitchezsoi)
- ✓ Liens vers YouTube (https://youtube.com/@aupetitchezsoi)
- ✓ Attributs `target="_blank"` et `rel="noopener noreferrer"` pour sécurité
- ✓ Icônes SVG pour tous les réseaux

#### 5. **Schema.org Mis à Jour**
- ✓ Propriété `sameAs` enrichie avec tous les profils sociaux
- ✓ Ordre logique : Facebook, Instagram, Twitter, LinkedIn, YouTube

---

## 🚨 ACTIONS URGENTES À FAIRE MAINTENANT

### 1. 🔴 CRÉER LES COMPTES SOCIAUX MANQUANTS

#### Twitter/X (@aupetitchezsoi)
**Si le compte n'existe pas encore :**
1. Aller sur https://twitter.com/signup
2. Créer le compte avec :
   - Nom d'utilisateur : `@aupetitchezsoi`
   - Nom d'affichage : `Au Petit Chez Soi`
   - Bio : "Restaurant traditionnel 🍽️ | Cuisine 100% fait maison | Bâtisse XVIIe 🏰 | La Celle-Saint-Cloud (78) | Réservations ⬇️"
3. Photo de profil : Logo du restaurant
4. Photo de couverture : Bâtisse ou plat signature
5. Ajouter lien vers le site web

**Si le compte existe déjà :**
- Vérifier que l'URL est bien `https://twitter.com/aupetitchezsoi`
- Mettre à jour bio et visuels si nécessaire

#### LinkedIn (Page Entreprise)
**Créer la page :**
1. Aller sur https://www.linkedin.com/company/setup/new/
2. Informations :
   - Nom : `Au Petit Chez Soi`
   - URL personnalisée : `aupetitchezsoi`
   - Secteur : `Restaurants`
   - Taille : `2-10 employés`
   - Type : `Entreprise privée`
3. Description :
   ```
   Restaurant traditionnel situé à La Celle-Saint-Cloud (78), dans une bâtisse historique du XVIIe siècle entièrement rénovée.
   
   🍽️ Cuisine 100% fait maison
   🌿 Produits frais et de saison
   🏰 Cadre authentique et chaleureux
   🍷 Vins de propriétaires
   
   Ouvert du mardi au samedi midi et soir, dimanche midi.
   Privatisation possible pour vos événements professionnels.
   ```
4. Logo et bannière
5. Ajouter localisation : La Celle-Saint-Cloud, 78170

#### YouTube (Chaîne)
**Créer la chaîne :**
1. Aller sur https://www.youtube.com/create_channel
2. Nom : `Au Petit Chez Soi`
3. Identifiant personnalisé : `@aupetitchezsoi` (après 100 abonnés)
4. Description :
   ```
   Bienvenue sur la chaîne du restaurant Au Petit Chez Soi !
   
   Découvrez nos coulisses, nos recettes, notre équipe et l'histoire de notre bâtisse du XVIIe siècle.
   
   📍 La Celle-Saint-Cloud (78)
   🍽️ Cuisine traditionnelle 100% fait maison
   🌐 Site web : https://aupetitchezsoi.vercel.app
   ```
5. Photo de profil et bannière
6. Ajouter liens vers site web et autres réseaux

---

### 2. 🟠 ACTIVER LE FACEBOOK PIXEL

#### Étape 1 : Obtenir votre Pixel ID
1. Aller sur https://business.facebook.com/
2. Menu → **Gestionnaire d'événements**
3. Cliquer sur **Connecter des sources de données** → **Web** → **Facebook Pixel**
4. Nommer votre pixel : "Au Petit Chez Soi - Site Web"
5. Copier le **Pixel ID** (format : 123456789012345)

#### Étape 2 : Activer le Pixel dans le code
Dans `index.html`, ligne ~50-60, **décommenter** ces lignes :
```javascript
// fbq('init', 'VOTRE_PIXEL_ID_ICI'); // Décommenter et ajouter votre Pixel ID
// fbq('track', 'PageView');
```

**Remplacer par :**
```javascript
fbq('init', '123456789012345'); // Votre vrai Pixel ID
fbq('track', 'PageView');
```

**Et dans la balise noscript :**
```html
<!-- Décommenter et remplacer VOTRE_PIXEL_ID_ICI -->
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=123456789012345&ev=PageView&noscript=1"/>
```

#### Étape 3 : Tester le Pixel
1. Installer l'extension Chrome "Facebook Pixel Helper"
2. Visiter votre site
3. Vérifier que le pixel est détecté (icône verte)

---

### 3. 🟡 VÉRIFIER ET TESTER LES MÉTADONNÉES

#### A. Tester Open Graph (Facebook)
1. Aller sur https://developers.facebook.com/tools/debug/
2. Entrer l'URL : `https://aupetitchezsoi.vercel.app`
3. Cliquer sur **Déboguer**
4. Vérifier que toutes les informations s'affichent correctement
5. Si nécessaire, cliquer sur **Scrape Again** pour rafraîchir

**Ce qui devrait apparaître :**
- ✓ Titre : "Au Petit Chez Soi - Cuisine Fait Maison & Cadre Historique"
- ✓ Description : "Restaurant traditionnel à La Celle-Saint-Cloud..."
- ✓ Image : chef-cuisine.webp (1200x630)
- ✓ Type : restaurant
- ✓ URL : https://aupetitchezsoi.vercel.app/

#### B. Tester Twitter Cards
1. Aller sur https://cards-dev.twitter.com/validator
2. Entrer l'URL : `https://aupetitchezsoi.vercel.app`
3. Cliquer sur **Preview card**
4. Vérifier l'aperçu de la carte

**Ce qui devrait apparaître :**
- ✓ Type : Summary Card with Large Image
- ✓ Titre : "Au Petit Chez Soi - Cuisine Fait Maison & Cadre Historique"
- ✓ Description : "Restaurant traditionnel à La Celle-Saint-Cloud..."
- ✓ Image : chef-cuisine.webp

#### C. Tester LinkedIn
1. Aller sur https://www.linkedin.com/post-inspector/
2. Entrer l'URL : `https://aupetitchezsoi.vercel.app`
3. Cliquer sur **Inspect**
4. Vérifier l'aperçu

---

### 4. 🔵 PREMIERS CONTENUS À PUBLIER

#### Cette semaine - Pack de lancement

**Facebook (3 posts) :**
1. **Post d'annonce** (Aujourd'hui)
   ```
   🎉 Nous sommes ravis de vous retrouver sur Facebook !
   
   Suivez-nous pour découvrir :
   🍽️ Nos plats du jour
   📸 Les coulisses de notre cuisine
   🏰 L'histoire de notre bâtisse du XVIIe
   
   Et surtout, partagez vos plus beaux moments Au Petit Chez Soi ! 
   
   #AuPetitChezSoi #RestaurantYvelines #CuisineTraditionelle
   ```
   Photo : Façade du restaurant

2. **Plat signature** (Mercredi)
   ```
   Notre foie gras mi-cuit maison 😍
   
   Préparé avec amour, servi avec chutney d'oignons et framboises.
   Une entrée qui fait l'unanimité depuis des années !
   
   📍 La Celle-Saint-Cloud (78)
   📞 Réservations : [numéro]
   
   #FoieGras #FaitMaison #GastronomieFramçaise
   ```
   Photo : Foie gras dressé

3. **Ambiance** (Vendredi)
   ```
   ✨ Bon weekend à tous !
   
   Nous vous attendons ce soir dans notre cadre chaleureux.
   Pierres d'époque, ambiance feutrée et cuisine généreuse.
   
   Il reste quelques tables disponibles 👉 Réservez vite !
   
   #WeekendGourmand #RestaurantHistorique #Yvelines
   ```
   Photo : Salle avec tables dressées

**Instagram (4 posts + Stories) :**
1. **Post de bienvenue** avec carrousel (3 photos)
   - Photo 1 : Logo/Façade
   - Photo 2 : Plat signature
   - Photo 3 : Intérieur
   
2. **Reel** : Visite rapide du restaurant (15-30s)
   - Entrée → Salle → Cuisine → Plat → Sourire

3. **Post plat** : Votre meilleur plat en photo
   
4. **Post équipe** : Photo de l'équipe en cuisine

**Stories quotidiennes :**
- Lundi : "C'est reparti ! Menu de la semaine"
- Mardi : Arrivage produits frais
- Mercredi : Plat du jour en préparation
- Jeudi : Témoignage client (screenshot avis)
- Vendredi : "Dernier service de la semaine !"
- Samedi : Ambiance du soir
- Dimanche : "À dimanche prochain !"

**Twitter/X (3 tweets) :**
1. Tweet de lancement
   ```
   🍽️ Bonjour Twitter !
   
   Au Petit Chez Soi débarque sur X.
   Restaurant traditionnel à La Celle-Saint-Cloud (78).
   
   100% fait maison | Bâtisse XVIIe | Produits frais
   
   Suivez-nous pour nos actus et plats du jour ! 👨‍🍳
   
   #Restaurant78 #CuisineTraditionelle
   ```

2. Thread histoire du restaurant
   ```
   🧵 L'histoire d'Au Petit Chez Soi (1/4)
   
   Notre restaurant est installé dans une bâtisse du XVIIe siècle, au cœur du bourg médiéval de La Celle-Saint-Cloud.
   
   [Photo : Façade historique]
   ```

3. Plat du jour (chaque mardi/jeudi)
   ```
   🍽️ Plat du jour
   
   Aujourd'hui : Coq au vin et purée maison
   
   Fait maison avec amour 💚
   Réservations : [lien]
   
   #PlatDuJour #FaitMaison
   ```

**LinkedIn (1 post) :**
```
🏢 Au Petit Chez Soi : Votre adresse pour vos repas d'affaires

Situé à La Celle-Saint-Cloud (78), notre restaurant offre :
✅ Cadre professionnel et chaleureux
✅ Cuisine traditionnelle de qualité
✅ Possibilité de privatisation
✅ Parking gratuit à proximité

À 15 min de Versailles, 20 min de Paris.

Idéal pour :
• Déjeuners d'affaires
• Séminaires
• Événements d'entreprise
• Réceptions professionnelles

Contactez-nous pour un devis personnalisé.

#RepasAffaires #Yvelines #Restauration #Evenementiel
```

---

## 📋 CHECKLIST FINALE

### Avant de publier quoi que ce soit :

- [ ] Créer compte Twitter @aupetitchezsoi
- [ ] Créer page LinkedIn Au Petit Chez Soi
- [ ] Créer chaîne YouTube @aupetitchezsoi
- [ ] Obtenir Pixel ID Facebook
- [ ] Activer le Pixel dans index.html
- [ ] Tester avec Facebook Debugger
- [ ] Tester avec Twitter Card Validator
- [ ] Tester avec LinkedIn Post Inspector
- [ ] Prendre 20 photos de qualité
- [ ] Préparer 1 vidéo courte (Reel/Short)
- [ ] Rédiger les 10 premiers posts
- [ ] Planifier le calendrier éditorial

### Après publication :

- [ ] Vérifier que tous les liens du footer fonctionnent
- [ ] Répondre aux premiers commentaires/messages
- [ ] Surveiller les métriques (portée, engagement)
- [ ] Ajuster la stratégie selon les résultats

---

## 🎯 OBJECTIFS 7 JOURS

- **Facebook** : 50 followers, 5% engagement
- **Instagram** : 100 followers, 8% engagement
- **Twitter** : 20 followers, 3% engagement
- **LinkedIn** : 30 followers, 2% engagement
- **Site web** : +20% trafic depuis réseaux sociaux
- **Réservations** : 3 réservations via réseaux sociaux

---

## 📞 BESOIN D'AIDE ?

### Ressources gratuites :
- **Meta Business Suite** : https://business.facebook.com/
- **Canva** (création visuels) : https://www.canva.com/
- **Buffer** (planification) : https://buffer.com/
- **Facebook Blueprint** (formation) : https://www.facebook.com/business/learn

### Support :
- Facebook Business Help : https://www.facebook.com/business/help
- Twitter Business : https://business.twitter.com/
- LinkedIn Help : https://www.linkedin.com/help/linkedin

---

**🚀 Vous êtes prêt ! Lancez-vous dès aujourd'hui !**

*Document créé le 5 février 2026*
