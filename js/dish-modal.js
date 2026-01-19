document.addEventListener('DOMContentLoaded', () => {

    // --- 1. RICH DATA FOR DISHES ---
    // This allows us to have detailed content without cluttering the HTML
    const dishData = {
        "Œuf doré à la crème de truffe": {
            desc: "Notre signature : un œuf mollet à la coque croustillante, déposé sur une crème onctueuse aux champignons et parfumé à la truffe.",
            ingredients: ["Œuf Bio", "Crème de Truffe", "Champignons de Paris", "Chapelure Panko", "Persil Plat", "Huile de Truffe"]
        },
        "Os à moelle rôti": {
            desc: "Un grand classique de bistrot. L'os est rôti au four avec de la fleur de sel et servi avec des toats de pain de campagne grillés.",
            ingredients: ["Os à Moelle", "Fleur de Sel de Guérande", "Pain de Campagne", "Ail", "Persil"]
        },
        "Foie gras mi-cuit maison": {
            desc: "Préparé par nos soins, ce foie gras de canard est mariné au porto et cuit doucement pour révéler toute sa finesse. Servi avec un chutney acidulé.",
            ingredients: ["Foie Gras de Canard", "Porto", "Chutney Oignons-Framboises", "Pain Brioché", "Poivre de Sichuan"]
        },
        "Terrine maison": {
            desc: "La recette de grand-mère. Une terrine de campagne rustique, riche en saveurs, servie avec ses cornichons.",
            ingredients: ["Porc Fermier", "Foies de Volaille", "Pistaches", "Cognac", "Aromates", "Cornichons"]
        },
        "Gros escargots de Bourgogne": {
            desc: "Les véritables escargots de Bourgogne (Helix Pomatia), préparés avec un beurre maître d'hôtel riche en ail et persil.",
            ingredients: ["Escargots de Bourgogne", "Beurre Demi-sel", "Ail", "Persil", "Échalotes"]
        },
        "Huîtres N°3 Grands Crus en Cotentin": {
            desc: "Des huîtres charnues et iodées, provenant directement des meilleurs parcs du Cotentin.",
            ingredients: ["Huîtres N°3", "Citron Jaune", "Vinaigre à l'échalote", "Beurre Demi-sel", "Pain de Seigle"]
        },
        "Soupe à l'oignon gratinée": {
            desc: "Réconfortante et généreuse, notre soupe est mijotée longuement et gratinée au vieux Cantal pour un goût puissant.",
            ingredients: ["Oignons Jaunes", "Bouillon de Bœuf", "Vin Blanc", "Vieux Cantal AOP", "Croûtons"]
        },
        "Demi camembert rôti au miel": {
            desc: "Un camembert de Normandie AOP, rôti au four jusqu'à être coulant, nappé de miel de fleurs.",
            ingredients: ["Camembert AOP", "Miel de Fleurs", "Thym Frais", "Noix", "Pain Grillé"]
        },
        "Chiffonnade de Cebo Ibérique": {
            desc: "Une assiette de jambon ibérique Cebo, affiné 24 mois, coupé en fines tranches fondantes.",
            ingredients: ["Jambon Ibérique Cebo", "Gressins", "Tomate concassée"]
        },
        "Choux fleurs et patates douces rôtis": {
            desc: "Une assiette végétarienne colorée et gourmande. Les légumes sont rôtis aux épices pour caraméliser.",
            ingredients: ["Chou-fleur", "Patate Douce", "Grenade", "Fromage Frais aux Herbes", "Coriandre", "Sésame", "Sauce Soja"]
        },
        "Filet de bar grillé": {
            desc: "Pêche du jour, le bar est grillé sur peau pour le croustillant, servi avec une sauce vierge légère.",
            ingredients: ["Filet de Bar", "Huile de Sésame", "Gingembre", "Ail", "Légumes Rôtis", "Herbes Fraîches"]
        },
        "Saint Jacques poêlées": {
            desc: "Noix de Saint-Jacques fraîches, juste saisies au beurre, accompagnées d'une purée de potimarron douce.",
            ingredients: ["Noix de St-Jacques", "Potimarron", "Pesto aux Noix", "Beurre Noisette", "Cerfeuil"]
        },
        "Burger du P'tit Chess": {
            desc: "Notre burger signature. Pain boulanger, viande française et une sauce cocktail secrète qui change tout.",
            ingredients: ["Pain Brioché", "Steak Haché 150g (Origine France)", "Taleggio", "Comté AOP", "Sauce Cocktail Maison", "Oignons Confits", "Cornichons", "Frites Maison"]
        },
        "Poire de bœuf": {
            desc: "Un morceau du boucher très tendre. Saisie saignante et servie avec une sauce au poivre relevée.",
            ingredients: ["Poire de Bœuf (Origine France)", "Crème Fraîche", "Poivre Vert", "Cognac", "Frites Maison"]
        },
        "Entrecôte angus grillée (320g)": {
            desc: "Pour les amateurs de viande persillée. Une pièce généreuse, grillée à votre convenance.",
            ingredients: ["Entrecôte Black Angus", "Sel de Maldon", "Sauce au Bleu", "Frites Maison", "Salade"]
        },
        "Pluma de porc grillée": {
            desc: "Le 'secret' du cochon ibérique. Une viande extrêmement tendre et goûteuse, servie rosée.",
            ingredients: ["Pluma Ibérique", "Pommes Mitrailles", "Champignons de Paris", "Vin Blanc", "Crème Moutarde", "Herbes de Provence"]
        },
        "Rognons de veau à l'ancienne": {
            desc: "Cuisinés dans la tradition, avec une sauce onctueuse à la moutarde à l'ancienne.",
            ingredients: ["Rognons de Veau", "Moutarde à l'Ancienne", "Crème", "Vin Blanc", "Champignons", "Purée Maison"]
        },
        "Coq au vin et aux aromates": {
            desc: "Mijoté pendant 24h dans un vin rouge corsé, la chair se détache toute seule.",
            ingredients: ["Coq Fermier", "Vin Rouge", "Lardons Fumés", "Oignons Grelots", "Carottes", "Bouquet Garni", "Purée Maison"]
        },
        // Desserts
        "Assiette de fromages": {
            desc: "Une sélection de 4 fromages affinés par notre fromager partenaire.",
            ingredients: ["Comté 24 mois", "Saint-Nectaire", "Chèvre Cendré", "Bleu d'Auvergne", "Confiture de Cerise Noire", "Mesclun"]
        },
        "Mousse au chocolat noir": {
            desc: "Aérienne et intense. Nous utilisons exclusivement du chocolat Valrhona Guanaja 70%.",
            ingredients: ["Chocolat Valrhona 70%", "Œufs", "Beurre", "Sucre de Canne"]
        },
        "Baba au Rhum": {
            desc: "Un baba bouchon imbibé d'un sirop léger aux agrumes et arrosé généreusement de vieux rhum.",
            ingredients: ["Pâte à Baba", "Rhum Ambré", "Sirop d'Agrumes", "Chantilly Vanille", "Zestes de Citron Vert"]
        },
        "Crème caramel": {
            desc: "Le dessert d'enfance par excellence. Une crème aux œufs soyeuse et son caramel ambré.",
            ingredients: ["Lait Entier", "Œufs", "Sucre", "Vanille Bourbon", "Palais Noisette"]
        },
        "Crumble aux pommes": {
            desc: "Des pommes caramélisées recouvertes d'une pâte sablée croustillante à la cannelle.",
            ingredients: ["Pommes Golden", "Beurre", "Farine", "Sucre Roux", "Cannelle", "Crème Fraîche Fermière"]
        },
        "Charlotte aux poires pralinée": {
            desc: "Biscuit cuillère imbibé, mousse légère à la poire et cœur praliné croustillant.",
            ingredients: ["Biscuits Cuillère", "Poires au Sirop", "Praliné Noisette", "Chantilly", "Amandes Effilées"]
        }
    };

    // --- 2. MODAL HTML GENERATION ---
    if (!document.querySelector('.dish-modal-overlay')) {
        const modalHTML = `
            <div class="dish-modal-overlay" id="dishModalOverlay">
                <div class="dish-modal" id="dishModal">
                    <button class="dish-modal__close" id="dishModalClose">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                    
                    <div class="dish-modal__image-wrapper">
                        <img src="" alt="" class="dish-modal__image" id="modalImage">
                        <div class="dish-modal__gradient-overlay"></div>
                    </div>

                    <div class="dish-modal__content">
                        <div class="dish-modal__header">
                            <h3 class="dish-modal__title" id="modalTitle"></h3>
                            <span class="dish-modal__price" id="modalPrice"></span>
                        </div>

                        <div class="dish-modal__section">
                            <h4 class="dish-modal__subtitle">À propos de ce plat</h4>
                            <p class="dish-modal__description" id="modalDescription"></p>
                        </div>
                        
                        <div class="dish-modal__section">
                            <h4 class="dish-modal__subtitle">Ce que contient ce plat</h4>
                            <div class="dish-modal__ingredients" id="modalIngredients">
                                <!-- Pills populated by JS -->
                            </div>
                        </div>

                        <div class="dish-modal__footer">
                             <a href="contact-reservation.html" class="dish-modal__cta">Réserver pour goûter</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // --- 3. ELEMENTS & LOGIC ---
    const overlay = document.getElementById('dishModalOverlay');
    const modal = document.getElementById('dishModal');
    const closeBtn = document.getElementById('dishModalClose');

    const mImage = document.getElementById('modalImage');
    const mTitle = document.getElementById('modalTitle');
    const mPrice = document.getElementById('modalPrice');
    const mDesc = document.getElementById('modalDescription');
    const mIngredients = document.getElementById('modalIngredients');

    const menuItems = document.querySelectorAll('.menu-item'); // Assuming this class exists on the cards

    menuItems.forEach(item => {
        // Make item interactive
        item.style.cursor = "pointer";

        item.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;

            // Extract basic data from DOM
            const imgEl = item.querySelector('.menu-item__img');
            const titleEl = item.querySelector('.menu-item__name');
            const priceEl = item.querySelector('.menu-item__price');

            const title = titleEl ? titleEl.textContent.trim() : 'Plat';
            const price = priceEl ? priceEl.textContent.trim() : '';
            const imgSrc = imgEl ? imgEl.src : null;

            // Lookup RICH DATA
            // normalize title for lookup (remove extra spaces if any)
            const cleanTitle = title.replace(/\s+/g, ' ').trim();
            const data = dishData[cleanTitle] || {
                desc: "Une préparation maison savoureuse.",
                ingredients: ["Produits Frais", "Fait Maison"]
            };

            // Populate Modal
            mTitle.textContent = title;
            mPrice.textContent = price;
            mDesc.textContent = data.desc;

            // Image handling
            if (imgSrc) {
                mImage.src = imgSrc;
                mImage.alt = title;
                modal.classList.remove('dish-modal--no-image');
            } else {
                modal.classList.add('dish-modal--no-image');
            }

            // Ingredients Handling
            mIngredients.innerHTML = '';
            if (data.ingredients && data.ingredients.length > 0) {
                data.ingredients.forEach(ing => {
                    const pill = document.createElement('span');
                    pill.className = 'ingredient-pill';
                    pill.textContent = ing;
                    mIngredients.appendChild(pill);
                });
            } else {
                // Fallback ingredient
                const pill = document.createElement('span');
                pill.className = 'ingredient-pill';
                pill.textContent = 'Fait Maison';
                mIngredients.appendChild(pill);
            }

            // Open Animation
            openModal();
        });
    });

    function openModal() {
        document.body.style.overflow = 'hidden';
        overlay.classList.add('active');
    }

    function closeModal() {
        overlay.classList.remove('active');
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
});
