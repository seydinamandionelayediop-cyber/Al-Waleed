# AL WALEED — Site officiel

Site vitrine + boutique électronique, en français, responsive et prêt à déployer sur GitHub/Vercel.

## Fichiers
- `index.html` : structure et contenus du site
- `styles.css` : identité visuelle bleu marine / bleu / blanc inspirée de la plaquette AL WALEED
- `script.js` : catalogue, filtres, recherche, panier et commandes WhatsApp

## Déploiement sur Vercel
1. Décompressez le ZIP.
2. Créez un dépôt GitHub et ajoutez les 3 fichiers ainsi que ce README.
3. Dans Vercel, importez le dépôt GitHub.
4. Framework preset : **Other** ; Build command et Output directory : laissez vides / valeur par défaut.
5. Déployez : le site est statique, aucun serveur ni variable d'environnement n'est nécessaire.

## Modifier le catalogue et les prix
Ouvrez `script.js` et modifiez la liste `products`. Chaque produit contient `name`, `category`, `price` (nombre en FCFA), `desc`, `emoji` et `badge`. Pour ajouter un produit, copiez une ligne d'objet et donnez-lui un `id` unique.

## Numéro de commande
Le numéro WhatsApp utilisé est `221787560327` dans `script.js` et dans les liens WhatsApp de `index.html`. Pour le changer, recherchez `221787560327` et `+221 78 756 03 27`.

## Important — tarifs
Les tarifs du catalogue sont **indicatifs et modifiables**, pas des offres de stock vérifiées en temps réel. Confirmez disponibilité, capacité, état (neuf/reconditionné), garantie et prix final avant publication. Certains modèles peuvent varier selon stockage, état, provenance et accessoires.

## Identité de marque
La version finale reprend la charte graphique AL WALEED SUARL fournie :
- Bleu principal `#104586`
- Orange `#EF552C`
- Bleu secondaire `#1975D1`
- Gris clair `#E5E5E5`, fond `#F4F4F4`, noir `#000000`
- Typographie Poppins
Le fichier `assets/al-waleed-suarL-logo.png` utilise le logo officiel extrait de la charte graphique fournie.


## Version premium — logo officiel et gamme iPhone
Cette version utilise le logo officiel fourni dans `assets/al-waleed-suarL-logo.png`, respecte la palette de la charte (`#104586`, `#EF552C`, `#1975D1`, `#E5E5E5`, `#F4F4F4`, `#000000`) et la typographie Poppins. Le catalogue est limité aux gammes iPhone 17 et iPhone 18.

Les images produit intégrées sont des illustrations vectorielles de présentation et non des photographies officielles Apple. Les prix sont des valeurs de démonstration à valider. Les modèles iPhone 18, leurs caractéristiques et leur disponibilité doivent être confirmés auprès du fournisseur avant toute annonce commerciale.


## Formulaire de demande iPhone
La boutique présente uniquement les références iPhone de la gamme 17 et les références de la gamme 18 visibles dans les images de référence transmises. Les images intégrées sont recadrées depuis les références utilisateur. Le formulaire permet de choisir gamme, modèle, stockage, couleur, quantité, état recherché, nom, téléphone et notes. À l'envoi, WhatsApp s'ouvre avec un message prérempli au +221 78 756 03 27. Le client doit encore envoyer le message depuis WhatsApp.

Les tarifs sont indiqués « Prix sur demande » pour éviter d'afficher des prix non validés. Les noms, caractéristiques et disponibilités de la gamme iPhone 18 doivent être confirmés avant commercialisation.


## Amélioration de la page d'accueil
- Hero premium avec mise en avant visuelle des modèles iPhone à partir des images de référence fournies.
- Message plus clair et appels à l'action vers la boutique et le formulaire.
- Bandeau de réassurance recentré sur les gammes, le conseil et la confirmation WhatsApp.
- Cartes de découverte dédiées aux gammes iPhone 17 et iPhone 18, avec filtrage du catalogue au clic.
- Mise en page responsive améliorée pour mobile et ordinateur.


## Hero inspiré de la référence fournie
La page d'accueil adopte une composition claire et minimaliste inspirée de la photo de référence : fond blanc/gris très léger, plusieurs iPhone mis en scène dans un grand visuel, texte bleu marine, accent orange discret et appels à l'action lisibles. La photo fournie est intégrée dans `assets/homepage-iphone-reference.png`. Le formulaire WhatsApp et les gammes iPhone restent conservés.
