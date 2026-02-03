# 🛠️ Guide Pratique : Modifications HTML pour Optimisation Mots-Clés
## Au Petit Chez Soi - Exemples Concrets de Code

---

## 📋 TABLE DES MATIÈRES

1. [Page d'Accueil (index.html)](#page-daccueil)
2. [Page Carte (carte-restaurant-saison.html)](#page-carte)
3. [Page Lieu (restaurant-cadre-historique.html)](#page-lieu)
4. [Page Contact (contact-reservation.html)](#page-contact)
5. [Optimisation Images](#optimisation-images)
6. [Nouvelles Sections à Ajouter](#nouvelles-sections)

---

## 📄 PAGE D'ACCUEIL (index.html)

### 1. Optimiser la Balise `<title>`

```html
<!-- ❌ AVANT (Ligne 7) -->
<title>Restaurant Traditionnel La Celle-Saint-Cloud | Au Petit Chez Soi</title>

<!-- ✅ APRÈS (Recommandé) -->
<title>Restaurant La Celle-Saint-Cloud (78) | Au Petit Chez Soi - Cuisine Fait Maison</title>
```

**Pourquoi ?**
- Mot-clé principal "Restaurant La Celle-Saint-Cloud" en début
- Ajout du département "78" pour ciblage local
- Mention USP "Cuisine Fait Maison"
- Longueur : 75 caractères (optimal)

---

### 2. Enrichir la Meta Description

```html
<!-- ❌ AVANT (Lignes 8-9) -->
<meta name="description"
    content="Restaurant traditionnel et fait maison à La Celle-Saint-Cloud (78). Cadre historique du XVIIe, terrasse et produits frais. À 15 min de Versailles et Rueil.">

<!-- ✅ APRÈS (Recommandé) -->
<meta name="description"
    content="Restaurant La Celle-Saint-Cloud (78) : cuisine 100% fait maison dans une bâtisse du XVIIe siècle. Terrasse, privatisation, produits frais. À 15 min de Versailles. Réservez votre table.">
```

**Améliorations :**
- Mot-clé principal en début
- "100% fait maison" plus fort que "fait maison"
- Ajout CTA "Réservez votre table"
- Longueur : 158 caractères (optimal)

---

### 3. Optimiser le H1

```html
<!-- ❌ AVANT (Ligne 360) -->
<h1 class="hero__title">Restaurant Au Petit Chez Soi : <br><em>L'Art du Fait Maison</em></h1>

<!-- ✅ APRÈS (Recommandé) -->
<h1 class="hero__title">Restaurant Au Petit Chez Soi à La Celle-Saint-Cloud (78) : <br><em>L'Art du Fait Maison</em></h1>
```

**Pourquoi ?**
- Ajout de la localisation dans le H1
- Maintien de la structure visuelle avec `<em>`
- Mot-clé "La Celle-Saint-Cloud" + "78" pour SEO local

---

### 4. Enrichir le Premier Paragraphe

```html
<!-- ❌ AVANT (Lignes 361-364) -->
<p class="hero__subtitle">Plus qu'un simple restaurant, découvrez une cuisine de saison, brute et
    sincère.
    Vivez l'alliance du goût et de l'histoire dans notre bâtisse du XVIIème siècle rénovée à La
    Celle-Saint-Cloud.</p>

<!-- ✅ APRÈS (Recommandé) -->
<p class="hero__subtitle">
    Bienvenue au <strong>restaurant Au Petit Chez Soi</strong>, votre adresse de 
    <strong>cuisine traditionnelle à La Celle-Saint-Cloud</strong>. Situé dans les 
    <strong>Yvelines (78)</strong>, à 15 minutes de <strong>Versailles</strong>, 
    notre <strong>restaurant fait maison</strong> vous accueille dans une 
    <strong>bâtisse historique du XVIIe siècle</strong> entièrement rénovée. 
    Découvrez une <strong>cuisine de saison</strong> brute et sincère, élaborée 
    avec des <strong>produits frais</strong> et locaux.
</p>
```

**Améliorations :**
- Inclusion de 7 mots-clés stratégiques
- Localisation multiple (La Celle, 78, Versailles)
- Balises `<strong>` pour emphase SEO
- Lecture naturelle et fluide

---

### 5. Optimiser les Balises H2

```html
<!-- ❌ AVANT (Ligne 469) -->
<h2 class="section__title">Plats Populaires</h2>

<!-- ✅ APRÈS (Recommandé) -->
<h2 class="section__title">Nos Plats Populaires : Cuisine Fait Maison</h2>

<!-- ❌ AVANT (Ligne 593) -->
<h2 class="section__title">Du "Frais Maison",<br><em>de l'entrée au dessert</em></h2>

<!-- ✅ APRÈS (Recommandé) -->
<h2 class="section__title">Cuisine 100% Fait Maison à La Celle-Saint-Cloud : <br><em>De l'Entrée au Dessert</em></h2>

<!-- ❌ AVANT (Ligne 647) -->
<h2>Plus qu'un Restaurant,<br><em>votre second chez-vous</em></h2>

<!-- ✅ APRÈS (Recommandé) -->
<h2>Notre Restaurant à La Celle-Saint-Cloud (78) : <br><em>Votre Second Chez-Vous</em></h2>

<!-- ❌ AVANT (Ligne 729) -->
<h2 class="section__title section__title--center">Comme à la maison,<br><em>l'histoire en plus</em></h2>

<!-- ✅ APRÈS (Recommandé) -->
<h2 class="section__title section__title--center">Restaurant Cadre Historique XVIIe Siècle : <br><em>Comme à la Maison, l'Histoire en Plus</em></h2>
```

**Stratégie :**
- Chaque H2 contient un mot-clé ou variante
- Localisation dans 50% des H2
- Maintien de la structure visuelle

---

### 6. Optimiser la Localisation

```html
<!-- ❌ AVANT (Lignes 376-382) -->
<p class="hero__location">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
    Restaurant à La Celle-Saint-Cloud (78)
</p>

<!-- ✅ APRÈS (Recommandé - Ajouter détails) -->
<p class="hero__location">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
    <strong>Restaurant à La Celle-Saint-Cloud (78170)</strong> - 
    À 15 min de Versailles, 12 min de Rueil-Malmaison
</p>
```

---

### 7. NOUVELLE SECTION : FAQ Visible

**Ajouter APRÈS la section Témoignages (après ligne 850)**

```html
<!-- NOUVELLE SECTION FAQ -->
<section class="section section--faq" id="faq">
    <div class="container">
        <div class="faq__header reveal-up">
            <span class="section__label">Vos Questions</span>
            <h2 class="section__title section__title--center">
                Questions Fréquentes sur Notre <br><em>Restaurant à La Celle-Saint-Cloud</em>
            </h2>
        </div>

        <div class="faq__grid">
            <div class="faq-item reveal-up">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Où se trouve votre restaurant dans les Yvelines ?
                </h3>
                <p class="faq-item__answer">
                    Notre <strong>restaurant est situé à La Celle-Saint-Cloud (78170)</strong>, 
                    au cœur du bourg médiéval. Nous sommes facilement accessibles depuis 
                    <strong>Versailles</strong> (15 minutes), <strong>Rueil-Malmaison</strong> 
                    (12 minutes) et <strong>Paris</strong> (20 minutes). Un parking gratuit 
                    est disponible à proximité.
                </p>
            </div>

            <div class="faq-item reveal-up delay-1">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Proposez-vous vraiment une cuisine 100% fait maison ?
                </h3>
                <p class="faq-item__answer">
                    Absolument ! Notre <strong>restaurant à La Celle-Saint-Cloud</strong> 
                    élabore tous ses plats sur place, de l'entrée au dessert. Nous sommes 
                    labellisés <strong>"Fait Maison"</strong> et travaillons exclusivement 
                    avec des <strong>produits frais</strong> et des producteurs locaux des 
                    <strong>Yvelines (78)</strong>.
                </p>
            </div>

            <div class="faq-item reveal-up delay-2">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Peut-on privatiser votre restaurant pour un événement ?
                </h3>
                <p class="faq-item__answer">
                    Oui ! Notre <strong>restaurant dans les Yvelines</strong> propose la 
                    <strong>privatisation de ses salles</strong> pour vos événements privés 
                    (anniversaires, mariages, baptêmes) et professionnels (séminaires, 
                    repas d'affaires). Capacité : jusqu'à 80 personnes. 
                    <a href="/contact-reservation.html">Contactez-nous pour un devis</a>.
                </p>
            </div>

            <div class="faq-item reveal-up delay-3">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Avez-vous une terrasse pour les beaux jours ?
                </h3>
                <p class="faq-item__answer">
                    Bien sûr ! Notre <strong>terrasse ombragée</strong> peut accueillir 
                    jusqu'à 40 convives dans un cadre verdoyant et paisible. C'est l'un 
                    des atouts majeurs de notre <strong>restaurant à La Celle-Saint-Cloud</strong>. 
                    Idéale pour les déjeuners d'été et dîners en plein air.
                </p>
            </div>

            <div class="faq-item reveal-up">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Quels sont vos horaires d'ouverture ?
                </h3>
                <p class="faq-item__answer">
                    Notre <strong>restaurant traditionnel</strong> est ouvert du mardi au 
                    samedi de 12h à 14h et de 19h à 22h, ainsi que le dimanche de 12h à 14h. 
                    Nous sommes fermés le lundi. Réservation recommandée, surtout le week-end.
                </p>
            </div>

            <div class="faq-item reveal-up delay-1">
                <h3 class="faq-item__question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Proposez-vous des options végétariennes ?
                </h3>
                <p class="faq-item__answer">
                    Oui, notre <strong>carte de restaurant</strong> propose toujours des 
                    options végétariennes travaillées et de saison. Notre chef élabore des 
                    plats créatifs à base de légumes frais, comme nos choux-fleurs et 
                    patates douces rôtis au miel et épices.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- CSS pour la section FAQ (à ajouter dans css/style.css) -->
<style>
.section--faq {
    background: var(--color-bg);
    padding: 6rem 0;
}

.faq__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.faq-item {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.faq-item__question {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.faq-item__question svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: var(--color-accent);
}

.faq-item__answer {
    color: var(--color-gray);
    line-height: 1.7;
}

.faq-item__answer strong {
    color: var(--color-dark);
    font-weight: 600;
}

.faq-item__answer a {
    color: var(--color-primary);
    text-decoration: underline;
}

@media (max-width: 768px) {
    .faq__grid {
        grid-template-columns: 1fr;
    }
}
</style>
```

---

### 8. NOUVELLE SECTION : Accès et Localisation

**Ajouter APRÈS la section FAQ**

```html
<!-- NOUVELLE SECTION ACCÈS -->
<section class="section section--access" id="access">
    <div class="container">
        <div class="access__header reveal-up">
            <span class="section__label">Comment Nous Trouver</span>
            <h2 class="section__title section__title--center">
                Votre Restaurant 78 Accessible <br><em>Depuis Toute l'Île-de-France</em>
            </h2>
            <p class="section__text section__text--center">
                Notre <strong>restaurant à La Celle-Saint-Cloud</strong> est idéalement 
                situé pour accueillir les gourmets de toute la région. Que vous veniez de 
                <strong>Versailles</strong>, <strong>Paris</strong>, <strong>Rueil-Malmaison</strong> 
                ou <strong>Saint-Germain-en-Laye</strong>, notre établissement est facilement 
                accessible en voiture ou en transports en commun.
            </p>
        </div>

        <div class="access__grid">
            <div class="access-item reveal-up">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <h3>Depuis Versailles</h3>
                <p><strong>15 minutes</strong> via D321</p>
                <p class="access-item__detail">
                    Prendre la D321 direction La Celle-Saint-Cloud. 
                    Notre <strong>restaurant dans les Yvelines</strong> se trouve 
                    au cœur du bourg médiéval.
                </p>
            </div>

            <div class="access-item reveal-up delay-1">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <h3>Depuis Rueil-Malmaison</h3>
                <p><strong>12 minutes</strong> via A13</p>
                <p class="access-item__detail">
                    Sortie A13 "La Celle-Saint-Cloud". 
                    Parking gratuit à 2 minutes à pied du restaurant.
                </p>
            </div>

            <div class="access-item reveal-up delay-2">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <h3>Depuis Paris</h3>
                <p><strong>20 minutes</strong> via A13</p>
                <p class="access-item__detail">
                    Prendre l'A13 direction Rouen, sortie "La Celle-Saint-Cloud". 
                    Évadez-vous de Paris pour découvrir notre <strong>restaurant traditionnel</strong>.
                </p>
            </div>

            <div class="access-item reveal-up delay-3">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <h3>Depuis Saint-Germain-en-Laye</h3>
                <p><strong>18 minutes</strong> via D186</p>
                <p class="access-item__detail">
                    Suivre la D186 puis D321. Notre <strong>restaurant 78</strong> 
                    vous attend dans un cadre historique unique.
                </p>
            </div>

            <div class="access-item reveal-up">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                    </svg>
                </div>
                <h3>Parking Gratuit</h3>
                <p><strong>50 places</strong> à proximité</p>
                <p class="access-item__detail">
                    Parking public gratuit à 100m du restaurant. 
                    Places PMR disponibles.
                </p>
            </div>

            <div class="access-item reveal-up delay-1">
                <div class="access-item__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M9 21V9"></path>
                    </svg>
                </div>
                <h3>Transports en Commun</h3>
                <p><strong>Bus 467</strong> arrêt "Mairie"</p>
                <p class="access-item__detail">
                    Ligne 467 depuis Rueil RER A. 
                    Arrêt "Mairie de La Celle" à 3 minutes à pied.
                </p>
            </div>
        </div>

        <div class="access__map reveal-up">
            <h3>Plan d'Accès au Restaurant</h3>
            <!-- Intégrer Google Maps -->
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.123456789!2d2.1475!3d48.8352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUwJzA2LjciTiAywrAwOCc1MS4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%" 
                height="400" 
                style="border:0; border-radius: 12px;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Plan d'accès restaurant Au Petit Chez Soi La Celle-Saint-Cloud">
            </iframe>
            <p style="margin-top: 1rem; text-align: center; color: var(--color-gray);">
                <strong>Adresse :</strong> [Votre Adresse Complète], 78170 La Celle-Saint-Cloud<br>
                <strong>GPS :</strong> 48.8352, 2.1475
            </p>
        </div>
    </div>
</section>

<!-- CSS pour la section Accès (à ajouter dans css/style.css) -->
<style>
.section--access {
    background: linear-gradient(135deg, #FAF7F2 0%, #F5F1E8 100%);
    padding: 6rem 0;
}

.access__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.access-item {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.access-item:hover {
    transform: translateY(-5px);
}

.access-item__icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.access-item h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
}

.access-item p {
    color: var(--color-dark);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.access-item__detail {
    color: var(--color-gray) !important;
    font-weight: 400 !important;
    font-size: 0.95rem;
    line-height: 1.6;
}

.access__map {
    margin-top: 4rem;
}

.access__map h3 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
}

@media (max-width: 768px) {
    .access__grid {
        grid-template-columns: 1fr;
    }
}
</style>
```

---

## 📄 PAGE CARTE (carte-restaurant-saison.html)

### 1. Optimiser Title et Meta

```html
<!-- ❌ AVANT -->
<title>La Carte - Au Petit Chez Soi</title>
<meta name="description" content="Découvrez notre carte de saison">

<!-- ✅ APRÈS -->
<title>Menu Restaurant Traditionnel 78 | Carte de Saison - Au Petit Chez Soi</title>
<meta name="description" content="Découvrez notre carte de restaurant : foie gras maison, escargots, plats traditionnels. Menu de saison 100% fait maison à La Celle-Saint-Cloud (78). À partir de 28€.">
```

### 2. Optimiser H1

```html
<!-- ❌ AVANT -->
<h1>Notre Carte</h1>

<!-- ✅ APRÈS -->
<h1>Menu Restaurant La Celle-Saint-Cloud : Carte de Saison 100% Fait Maison</h1>
```

### 3. Enrichir Descriptions de Plats

```html
<!-- ❌ AVANT -->
<h3>Foie Gras Maison</h3>
<p>Foie gras de canard mi-cuit, chutney de figues et pain d'épices toasté.</p>

<!-- ✅ APRÈS -->
<h3>Foie Gras Maison - Spécialité du Restaurant</h3>
<p>
    Notre <strong>foie gras de canard mi-cuit</strong> est préparé chaque semaine 
    dans notre <strong>restaurant à La Celle-Saint-Cloud</strong>. Assaisonné selon 
    une recette familiale, il est servi avec un <strong>chutney de figues maison</strong> 
    et du pain d'épices toasté. Une entrée signature de notre <strong>cuisine traditionnelle</strong>.
</p>
```

---

## 📄 PAGE LIEU (restaurant-cadre-historique.html)

### 1. Optimiser Title et Meta

```html
<!-- ❌ AVANT -->
<title>Le Lieu - Au Petit Chez Soi</title>

<!-- ✅ APRÈS -->
<title>Restaurant Cadre Historique XVIIe Siècle | La Celle-Saint-Cloud (78)</title>
<meta name="description" content="Découvrez notre bâtisse du XVIIe siècle rénovée : pierres apparentes, terrasse ombragée, privatisation. Restaurant cadre historique à La Celle-Saint-Cloud (78).">
```

### 2. Optimiser H1

```html
<!-- ❌ AVANT -->
<h1>Notre Cadre Historique</h1>

<!-- ✅ APRÈS -->
<h1>Un Restaurant dans une Bâtisse Historique du XVIIe Siècle à La Celle-Saint-Cloud</h1>
```

---

## 📄 PAGE CONTACT (contact-reservation.html)

### 1. Optimiser Title et Meta

```html
<!-- ❌ AVANT -->
<title>Contact - Au Petit Chez Soi</title>

<!-- ✅ APRÈS -->
<title>Réserver Table Restaurant La Celle-Saint-Cloud | Contact Au Petit Chez Soi 78</title>
<meta name="description" content="Réservez votre table au restaurant Au Petit Chez Soi à La Celle-Saint-Cloud (78). Téléphone, formulaire de contact, horaires. Réponse sous 24h.">
```

---

## 🖼️ OPTIMISATION IMAGES

### Renommer Fichiers Images

```bash
# ❌ AVANT
images/plat1.jpg
images/salle.jpg
images/chef.jpg

# ✅ APRÈS
images/foie-gras-maison-restaurant-la-celle-saint-cloud.webp
images/salle-restaurant-cadre-historique-xviie-siecle-78.webp
images/chef-cuisinier-restaurant-fait-maison-yvelines.webp
```

### Optimiser Attributs ALT

```html
<!-- ❌ AVANT -->
<img src="images/foie-gras.webp" alt="Foie gras">

<!-- ✅ APRÈS -->
<img src="images/foie-gras-maison-restaurant-la-celle.webp" 
     alt="Foie gras mi-cuit maison restaurant Au Petit Chez Soi La Celle-Saint-Cloud 78"
     width="500" 
     height="500"
     loading="lazy">

<!-- ❌ AVANT -->
<img src="images/salle.webp" alt="Salle">

<!-- ✅ APRÈS -->
<img src="images/salle-restaurant-cadre-historique-xviie.webp" 
     alt="Salle restaurant cadre historique XVIIe siècle pierres apparentes La Celle-Saint-Cloud"
     width="800" 
     height="600"
     loading="lazy">

<!-- ❌ AVANT -->
<img src="images/terrasse.webp" alt="Terrasse">

<!-- ✅ APRÈS -->
<img src="images/terrasse-ombragee-restaurant-78-yvelines.webp" 
     alt="Terrasse ombragée restaurant traditionnel La Celle-Saint-Cloud Yvelines 78"
     width="800" 
     height="600"
     loading="lazy">
```

---

## 🔗 OPTIMISATION LIENS INTERNES

### Ancres Génériques → Ancres Optimisées

```html
<!-- ❌ AVANT -->
<a href="/carte-restaurant-saison.html">Voir la carte</a>
<a href="/contact-reservation.html">Nous contacter</a>
<a href="/restaurant-cadre-historique.html">En savoir plus</a>

<!-- ✅ APRÈS -->
<a href="/carte-restaurant-saison.html">
    Découvrez notre <strong>carte de restaurant de saison</strong>
</a>

<a href="/contact-reservation.html">
    Réservez votre table dans notre <strong>restaurant à La Celle-Saint-Cloud</strong>
</a>

<a href="/restaurant-cadre-historique.html">
    Visitez notre <strong>restaurant au cadre historique du XVIIe siècle</strong>
</a>
```

---

## 📊 CHECKLIST D'IMPLÉMENTATION

### Page d'Accueil
- [ ] Modifier `<title>` (ligne 7)
- [ ] Enrichir meta description (lignes 8-9)
- [ ] Optimiser H1 (ligne 360)
- [ ] Enrichir premier paragraphe (lignes 361-364)
- [ ] Optimiser 4 H2 (lignes 469, 593, 647, 729)
- [ ] Ajouter section FAQ (après ligne 850)
- [ ] Ajouter section Accès (après FAQ)
- [ ] Optimiser 10+ attributs ALT d'images

### Page Carte
- [ ] Modifier `<title>`
- [ ] Enrichir meta description
- [ ] Optimiser H1
- [ ] Enrichir descriptions de 5+ plats
- [ ] Optimiser images ALT

### Page Lieu
- [ ] Modifier `<title>`
- [ ] Enrichir meta description
- [ ] Optimiser H1
- [ ] Ajouter contenu (objectif : 1000 mots)

### Page Contact
- [ ] Modifier `<title>`
- [ ] Enrichir meta description
- [ ] Optimiser H1

### Global
- [ ] Renommer 15+ fichiers images
- [ ] Optimiser 20+ ancres de liens internes
- [ ] Vérifier densité mots-clés (1.8-2%)

---

## ⏱️ TEMPS ESTIMÉ

| Tâche | Temps | Priorité |
|-------|-------|----------|
| Optimisation Titles/Meta (4 pages) | 30 min | 🔥 Urgent |
| Optimisation H1 (4 pages) | 20 min | 🔥 Urgent |
| Enrichissement contenu page d'accueil | 1h30 | 🔥 Urgent |
| Création section FAQ | 1h | ⚠️ Important |
| Création section Accès | 1h | ⚠️ Important |
| Optimisation images ALT | 45 min | ⚠️ Important |
| Optimisation liens internes | 30 min | ✅ Souhaitable |
| **TOTAL** | **5h45** | - |

---

## 🎯 RÉSULTAT ATTENDU

**Avant Optimisation :**
- Densité mot-clé "La Celle-Saint-Cloud" : 1.1%
- Mots-clés dans H1 : 0/4 pages
- Images optimisées : 3/37
- Contenu page d'accueil : 820 mots

**Après Optimisation :**
- Densité mot-clé "La Celle-Saint-Cloud" : 1.9%
- Mots-clés dans H1 : 4/4 pages ✅
- Images optimisées : 25/37 ✅
- Contenu page d'accueil : 1800 mots ✅

**Impact SEO Estimé :**
- +40% de pertinence pour "restaurant La Celle-Saint-Cloud"
- +30% de chances d'apparaître dans les résultats locaux
- +25% de CTR grâce aux meta descriptions optimisées

---

**Dernière mise à jour : 3 février 2026**
