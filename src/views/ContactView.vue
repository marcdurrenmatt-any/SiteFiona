<script setup>
import { ref } from 'vue'

const sent = ref(false)

function onSubmit(e) {
  e.preventDefault()
  sent.value = true
}
</script>

<template>
  <div class="page-wrap contact-page">
    <p class="contact-page__kicker">Écrire</p>
    <h1 class="contact-page__title">Contact</h1>
    <p class="contact-page__lede">Une question sur les cours ou les créneaux ? Laissez un message.</p>

    <div class="contact-card">
      <aside class="contact-card__aside">
        <h2 class="contact-card__title">Mes informations</h2>
        <p class="contact-card__subtitle">Téléphone, mail et emplacement</p>
        <ul class="contact-card__list">
          <li>
            <span class="contact-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.6 3.4 4.2 6 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.5-.3 1 .4 2.1.7 3.3.7.8 0 1.5.7 1.5 1.5V20c0 .8-.7 1.5-1.5 1.5C9.9 21.5 2.5 14.1 2.5 4.5 2.5 3.7 3.2 3 4 3h3c.8 0 1.5.7 1.5 1.5 0 1.1.3 2.3.7 3.3.2.5.1 1.1-.3 1.5L6.6 10.8z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <a href="tel:+33689412536">06 89 41 25 36</a>
          </li>
          <li>
            <span class="contact-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16v12H4V6zm0 0l8 6 8-6"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <a href="mailto:contact@larbredesvoix.fr">contact@larbredesvoix.fr</a>
          </li>
          <li>
            <span class="contact-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s7-4.7 7-11a7 7 0 10-14 0c0 6.3 7 11 7 11z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="10" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span>Palais de Justice, Toulouse</span>
          </li>
        </ul>
      </aside>

      <div class="contact-card__form-wrap">
        <p v-if="sent" class="contact-card__notice" role="status">
          Merci — votre message a bien été enregistré (démonstration : brancher un envoi réel côté serveur si besoin).
        </p>
        <form v-else class="contact-form" @submit="onSubmit">
          <div class="contact-form__row">
            <label class="contact-form__field">
              <span class="contact-form__label">Prénom</span>
              <input name="firstName" type="text" autocomplete="given-name" required class="contact-form__input" />
            </label>
            <label class="contact-form__field">
              <span class="contact-form__label">Nom</span>
              <input
                name="lastName"
                type="text"
                autocomplete="family-name"
                placeholder="Dupont"
                class="contact-form__input"
              />
            </label>
          </div>
          <label class="contact-form__field">
            <span class="contact-form__label">E-mail</span>
            <input name="email" type="email" autocomplete="email" required class="contact-form__input" />
          </label>
          <label class="contact-form__field">
            <span class="contact-form__label">Message</span>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Votre message…"
              class="contact-form__input contact-form__textarea"
            />
          </label>
          <div class="contact-form__actions">
            <button type="submit" class="contact-form__submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  max-width: 960px;
}

.contact-page__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.contact-page__title {
  margin: 0 0 0.6rem;
  font-size: clamp(1.85rem, 3vw, 2.35rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.contact-page__lede {
  margin: 0 0 2rem;
  max-width: 42ch;
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.contact-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: grid;
}

@media (min-width: 800px) {
  .contact-card {
    grid-template-columns: minmax(240px, 34%) 1fr;
    min-height: 420px;
  }
}

.contact-card__aside {
  padding: 2rem 1.5rem;
  background:
    linear-gradient(155deg, rgba(255, 250, 245, 0.98) 0%, rgba(237, 233, 228, 0.95) 100%),
    radial-gradient(circle at 22% 28%, rgba(255, 122, 0, 0.1), transparent 52%),
    radial-gradient(circle at 78% 72%, rgba(116, 162, 255, 0.12), transparent 48%);
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 800px) {
  .contact-card__aside {
    border-bottom: none;
    border-right: 1px solid var(--color-border);
  }
}

.contact-card__title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-orange);
}

.contact-card__subtitle {
  margin: 0 0 1.5rem;
  font-size: 0.92rem;
  color: var(--color-text-muted);
}

.contact-card__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.05rem;
}

.contact-card__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.97rem;
  color: var(--color-text);
}

.contact-card__list a {
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s var(--ease-out);
}

.contact-card__list a:hover {
  color: var(--color-orange);
}

.contact-card__icon {
  flex-shrink: 0;
  color: var(--color-orange);
  margin-top: 2px;
}

.contact-card__form-wrap {
  padding: 2rem 1.5rem 2.25rem;
}

@media (min-width: 640px) {
  .contact-card__form-wrap {
    padding: 2.35rem 2.35rem 2.6rem;
  }
}

.contact-card__notice {
  margin: 0;
  padding: 1rem 1.15rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-blue-soft);
  color: var(--color-text);
  font-size: 0.97rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.contact-form__row {
  display: grid;
  gap: 1.35rem;
}

@media (min-width: 520px) {
  .contact-form__row {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.contact-form__label {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.contact-form__input {
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  padding: 0.65rem 0.85rem;
  font-size: 1rem;
  font-family: inherit;
  background: #fafaf9;
  color: var(--color-text);
  transition:
    border-color 0.2s var(--ease-out),
    background 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out);
}

.contact-form__input::placeholder {
  color: #a8a29e;
}

.contact-form__input:hover {
  border-color: rgba(28, 25, 23, 0.18);
}

.contact-form__input:focus {
  outline: none;
  border-color: rgba(255, 122, 0, 0.55);
  background: var(--color-white);
  box-shadow: 0 0 0 3px var(--color-orange-soft);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 128px;
  line-height: 1.5;
}

.contact-form__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.35rem;
}

.contact-form__submit {
  padding: 0.72rem 1.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-orange);
  background: var(--color-orange);
  color: #fff;
  font-weight: 600;
  font-size: 0.94rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 122, 0, 0.35);
  transition:
    transform 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out),
    filter 0.2s var(--ease-out);
}

.contact-form__submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(255, 122, 0, 0.38);
  filter: brightness(1.03);
}
</style>
