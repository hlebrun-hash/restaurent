# 🚀 GUIDE RAPIDE - DÉMARRAGE SEO SOCIAL
*Au Petit Chez Soi - 5 Février 2026*

---

## ⏱️ ACTIONS EN 30 MINUTES

### 1️⃣ Créer le Compte Twitter (10 min)

**Étapes :**
1. Aller sur https://twitter.com/signup
2. Utiliser l'email du restaurant
3. Choisir le nom d'utilisateur : `@aupetitchezsoi`
4. Nom d'affichage : `Au Petit Chez Soi`
5. Bio : 
   ```
   Restaurant traditionnel 🍽️ | Cuisine 100% fait maison | Bâtisse XVIIe 🏰
   La Celle-Saint-Cloud (78) | Réservations ⬇️
   ```
6. Ajouter photo de profil (logo)
7. Ajouter photo de couverture (bâtisse ou plat)
8. Ajouter lien vers le site web
9. ✅ **FAIT !**

---

### 2️⃣ Tester les Métadonnées (10 min)

**Facebook Open Graph :**
1. Aller sur https://developers.facebook.com/tools/debug/
2. Entrer : `https://aupetitchezsoi.vercel.app`
3. Cliquer sur "Déboguer"
4. Vérifier que tout s'affiche correctement
5. Si besoin, cliquer sur "Scrape Again"

**Twitter Cards :**
1. Aller sur https://cards-dev.twitter.com/validator
2. Entrer : `https://aupetitchezsoi.vercel.app`
3. Cliquer sur "Preview card"
4. Vérifier l'aperçu

✅ **FAIT !**

---

### 3️⃣ Premier Post sur Chaque Réseau (10 min)

**Facebook :**
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

**Instagram :**
```
✨ Bienvenue sur notre compte Instagram !

Découvrez notre cuisine 100% fait maison, notre cadre historique et nos coulisses.

📍 La Celle-Saint-Cloud (78)
🍽️ Cuisine traditionnelle
🏰 Bâtisse du XVIIe siècle

#AuPetitChezSoi #Restaurant78 #FaitMaison #LaCelleSaintCloud
```
Photo : Meilleur plat en photo

**Twitter :**
```
🍽️ Bonjour Twitter !

Au Petit Chez Soi débarque sur X.
Restaurant traditionnel à La Celle-Saint-Cloud (78).

100% fait maison | Bâtisse XVIIe | Produits frais

Suivez-nous pour nos actus et plats du jour ! 👨‍🍳

#Restaurant78 #CuisineTraditionelle
```

✅ **FAIT !**

---

## ⏱️ ACTIONS EN 1 HEURE

### 4️⃣ Créer la Page LinkedIn (20 min)

**Étapes :**
1. Aller sur https://www.linkedin.com/company/setup/new/
2. Nom : `Au Petit Chez Soi`
3. URL personnalisée : `aupetitchezsoi`
4. Secteur : `Restaurants`
5. Taille : `2-10 employés`
6. Description :
   ```
   Restaurant traditionnel situé à La Celle-Saint-Cloud (78), dans une bâtisse 
   historique du XVIIe siècle entièrement rénovée.
   
   🍽️ Cuisine 100% fait maison
   🌿 Produits frais et de saison
   🏰 Cadre authentique et chaleureux
   🍷 Vins de propriétaires
   
   Ouvert du mardi au samedi midi et soir, dimanche midi.
   Privatisation possible pour vos événements professionnels.
   ```
7. Ajouter logo et bannière
8. Localisation : La Celle-Saint-Cloud, 78170
9. ✅ **FAIT !**

---

### 5️⃣ Obtenir et Activer le Facebook Pixel (20 min)

**Obtenir le Pixel ID :**
1. Aller sur https://business.facebook.com/
2. Menu → **Gestionnaire d'événements**
3. Cliquer sur **Connecter des sources de données** → **Web** → **Facebook Pixel**
4. Nommer : "Au Petit Chez Soi - Site Web"
5. Copier le **Pixel ID** (ex: 123456789012345)

**Activer dans le code :**
1. Ouvrir `index.html`
2. Chercher ligne ~56 : `// fbq('init', 'VOTRE_PIXEL_ID_ICI');`
3. Décommenter et remplacer :
   ```javascript
   fbq('init', '123456789012345'); // Votre vrai Pixel ID
   fbq('track', 'PageView');
   ```
4. Chercher ligne ~60 (noscript) et décommenter :
   ```html
   <img height="1" width="1" style="display:none"
   src="https://www.facebook.com/tr?id=123456789012345&ev=PageView&noscript=1"/>
   ```
5. Sauvegarder et déployer

**Tester :**
1. Installer extension Chrome "Facebook Pixel Helper"
2. Visiter votre site
3. Vérifier icône verte (pixel actif)

✅ **FAIT !**

---

### 6️⃣ Créer la Chaîne YouTube (20 min)

**Étapes :**
1. Aller sur https://www.youtube.com/create_channel
2. Nom : `Au Petit Chez Soi`
3. Description :
   ```
   Bienvenue sur la chaîne du restaurant Au Petit Chez Soi !
   
   Découvrez nos coulisses, nos recettes, notre équipe et l'histoire de 
   notre bâtisse du XVIIe siècle.
   
   📍 La Celle-Saint-Cloud (78)
   🍽️ Cuisine traditionnelle 100% fait maison
   🌐 Site web : https://aupetitchezsoi.vercel.app
   ```
4. Photo de profil et bannière
5. Ajouter liens vers site web et autres réseaux
6. Créer première vidéo courte (même avec smartphone) :
   - Visite rapide du restaurant (30s)
   - Ou présentation de l'équipe (30s)
   - Ou préparation d'un plat (1 min)

✅ **FAIT !**

---

## 📋 CHECKLIST FINALE

### Comptes Créés
- [ ] Twitter @aupetitchezsoi
- [ ] LinkedIn Au Petit Chez Soi
- [ ] YouTube @aupetitchezsoi

### Technique
- [ ] Facebook Pixel activé
- [ ] Open Graph testé (Facebook Debugger)
- [ ] Twitter Cards testé (Card Validator)
- [ ] LinkedIn testé (Post Inspector)

### Contenu
- [ ] Premier post Facebook publié
- [ ] Premier post Instagram publié
- [ ] Premier tweet publié
- [ ] Premier post LinkedIn publié
- [ ] Première vidéo YouTube uploadée (optionnel)

### Vérifications
- [ ] Tous les liens du footer fonctionnent
- [ ] Photos de profil sur tous les réseaux
- [ ] Bios/descriptions remplies
- [ ] Liens vers le site web ajoutés

---

## 📊 SUIVI SEMAINE 1

### Objectifs
- [ ] 10 followers Facebook
- [ ] 20 followers Instagram
- [ ] 5 followers Twitter
- [ ] 5 followers LinkedIn
- [ ] 3 posts par réseau
- [ ] 10 clics vers le site

### Métriques à Noter (Vendredi)
- Followers Facebook : ___
- Followers Instagram : ___
- Followers Twitter : ___
- Followers LinkedIn : ___
- Abonnés YouTube : ___
- Engagement moyen : ___%
- Clics vers site : ___

---

## 💡 CONSEILS RAPIDES

### Contenu à Publier Cette Semaine

**Lundi :**
- Facebook : Photo du plat du jour
- Instagram : Story "C'est reparti !"

**Mardi :**
- Twitter : Tweet plat du jour
- LinkedIn : Post professionnel sur privatisation

**Mercredi :**
- Facebook : Photo de l'équipe
- Instagram : Post plat signature

**Jeudi :**
- Twitter : Thread histoire du restaurant
- Instagram : Story coulisses cuisine

**Vendredi :**
- Facebook : Post "Bon weekend !"
- Instagram : Reel visite rapide (15s)

**Samedi :**
- Instagram : Story ambiance du soir
- Twitter : Photo table dressée

**Dimanche :**
- Facebook : Rappel "Ouvert dimanche midi"
- Instagram : Story "À la semaine prochaine"

---

## 🎯 RÉSULTATS ATTENDUS SEMAINE 1

- ✅ Présence active sur 5 réseaux
- ✅ 40+ followers au total
- ✅ 15+ posts publiés
- ✅ 10+ clics vers le site
- ✅ Facebook Pixel collectant des données
- ✅ Premières interactions avec clients

---

## 📞 BESOIN D'AIDE ?

### Problèmes Courants

**"Je n'arrive pas à créer le compte Twitter"**
→ Essayez avec un autre email ou numéro de téléphone

**"Le Facebook Pixel ne s'affiche pas"**
→ Vérifiez que vous avez bien décommenté les lignes et remplacé le Pixel ID

**"Les métadonnées ne s'affichent pas correctement"**
→ Utilisez "Scrape Again" sur Facebook Debugger pour forcer le rafraîchissement

**"Je n'ai pas de photos professionnelles"**
→ Utilisez votre smartphone ! Lumière naturelle + focus sur les détails = photos réussies

---

## ✅ VALIDATION

Une fois tout terminé, vous devriez avoir :

- ✅ 5 comptes sociaux actifs
- ✅ Facebook Pixel fonctionnel
- ✅ Métadonnées validées
- ✅ 15+ posts publiés
- ✅ 40+ followers
- ✅ Trafic social vers le site

**🎉 Félicitations ! Votre présence sociale est maintenant optimale !**

---

## 📈 PROCHAINES ÉTAPES (Semaine 2)

1. Continuer à publier régulièrement (3-4 posts/semaine)
2. Répondre à TOUS les commentaires
3. Engager avec d'autres comptes locaux
4. Partager avis clients
5. Créer première vidéo YouTube
6. Lancer première campagne Facebook Ads (budget : 50-100€)

---

*Guide créé le 5 février 2026*
*Temps total estimé : 1h30*
*Difficulté : ⭐⭐ (Facile)*

**🚀 Vous êtes prêt ! Lancez-vous maintenant !**
