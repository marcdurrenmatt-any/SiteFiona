<template>
  <div class="page-wrap legal-page">
    <p class="legal-page__kicker">Informations</p>
    <h1 class="legal-page__title">Mentions légales</h1>
    <p class="legal-page__intro">
      Conformément aux articles L.111-7 et suivants du code de la consommation et aux usages pour les sites professionnels,
      les informations ci-dessous identifient l’éditeur du site et les conditions d’utilisation des contenus et des données
      personnelles.
    </p>

    <div class="legal-page__sections">
      <section class="legal-page__block" aria-labelledby="legal-editor">
        <h2 id="legal-editor" class="legal-page__h2">Éditeur du site</h2>
        <p>
          <strong>Fiona Climent</strong> — enseignement musical sous le nom <strong>L’arbre des voix</strong><br />
          Cours de piano et de chant (particuliers, à Toulouse et en visioconférence).
        </p>
        <p>
          <strong>Contact</strong> :
          <a href="mailto:contact@larbredesvoix.fr">contact@larbredesvoix.fr</a>
          · <a href="tel:+33689412536">06&nbsp;89&nbsp;41&nbsp;25&nbsp;36</a>
        </p>
        <p>
          <strong>Lieu d’activité</strong> (enseignement) : Toulouse — secteur Palais de Justice (coordonnées précises
          communiquées lors de la prise de contact).
        </p>
        <p class="legal-page__note">
          <strong>Immatriculation</strong> : indiquer ici le numéro <strong>SIRET</strong>, le code APE/NAF et, le cas
          échéant, l’assujettissement à la TVA.
        </p>
      </section>

      <section class="legal-page__block" aria-labelledby="legal-dp">
        <h2 id="legal-dp" class="legal-page__h2">Directrice de publication</h2>
        <p>Fiona Climent.</p>
      </section>

      <section class="legal-page__block" aria-labelledby="legal-host">
        <h2 id="legal-host" class="legal-page__h2">Hébergement</h2>
        <p>
          Le site est servi en pages statiques via <strong>GitHub Pages</strong> (GitHub, Inc.), sauf configuration
          différente de votre hébergeur.
        </p>
        <p>
          GitHub, Inc.<br />
          88 Colin P Kelly Jr Street<br />
          San Francisco, CA 94107<br />
          États-Unis — <a href="https://docs.github.com/fr/pages">Documentation GitHub Pages</a>
        </p>
      </section>

      <section class="legal-page__block" aria-labelledby="legal-ip">
        <h2 id="legal-ip" class="legal-page__h2">Propriété intellectuelle</h2>
        <p>
          Les textes, photographies, illustrations et éléments graphiques composant ce site (y compris le logo lorsqu’il
          fait l’objet d’une protection) sont la propriété de Fiona Climent ou utilisés avec autorisation. Toute
          reproduction, représentation ou exploitation non autorisée est interdite hors des cas prévus par le code de la
          propriété intellectuelle.
        </p>
      </section>

      <section class="legal-page__block" aria-labelledby="legal-data">
        <h2 id="legal-data" class="legal-page__h2">Données personnelles</h2>
        <p>
          <strong>Responsable du traitement</strong> : Fiona Climent, aux coordonnées indiquées ci-dessus.
        </p>
        <p>
          <strong>Finalité</strong> : répondre aux messages envoyés via le formulaire de contact (prise de contact,
          informations sur les cours).
        </p>
        <p>
          <strong>Base légale</strong> : intérêt légitime (réponse à une demande) et, le cas échéant, mesures précontractuelles
          à votre demande.
        </p>
        <p>
          <strong>Destinataires</strong> : les données transmises par le formulaire sont destinées exclusivement à Fiona
          Climent.
        </p>
        <p>
          <strong>Durée de conservation</strong> : le temps nécessaire au traitement de la demande, puis archivage limité
          en cas de relation pédagogique suivie ; au-delà, suppression.
        </p>
        <p>
          <strong>Vos droits</strong> : accès, rectification, effacement, limitation du traitement, opposition et portabilité
          (dans les limites prévues par le règlement européen 2016/679 — « RGPD »). Vous pouvez les exercer en écrivant à
          l’adresse <a href="mailto:contact@larbredesvoix.fr">contact@larbredesvoix.fr</a>. Réclamation auprès de la CNIL :
          <a href="https://www.cnil.fr">www.cnil.fr</a>.
        </p>
      </section>

      <section class="legal-page__block" aria-labelledby="legal-cookies">
        <h2 id="legal-cookies" class="legal-page__h2">Cookies et traceurs</h2>
        <p>
          Ce site ne dépose pas de cookies de mesure d’audience ou de publicité. Seuls peuvent s’appliquer des cookies
          strictement techniques liés au fonctionnement de l’hébergement ou du navigateur.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  max-width: 720px;
}

.legal-page__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.legal-page__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 3vw, 2.1rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.legal-page__intro {
  margin: 0 0 2rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.legal-page__sections {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.legal-page__block {
  padding: 1.25rem 1.35rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.55);
}

.legal-page__h2 {
  margin: 0 0 0.65rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.legal-page__block p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.68;
  color: var(--color-text);
}

.legal-page__block p + p {
  margin-top: 0.75rem;
}

.legal-page__note {
  font-size: 0.88rem !important;
  color: var(--color-text-muted) !important;
}

.legal-page__block a {
  color: var(--color-orange);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.legal-page__block a:hover {
  color: var(--color-orange-deep);
}
</style>
