<template functional>
  <section id="mc_embed_signup" class="SubscribeForm">
    <form
      action="https://llen.us20.list-manage.com/subscribe/post?u=b9911508f3dda45e255c5387f&amp;id=3b218dacf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate SubscribeForm__form"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <p class="SubscribeForm__callout">
          Subscribe to receive posts directly in your inbox. I will never send
          anything else to this mailing list. Just posts. I promise.
        </p>

        <div class="SubscribeForm__row">
          <div class="mc-field-group SubscribeForm__column">
            <label class="SubscribeForm__label" for="mce-EMAIL">
              Email Address (required)
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email SubscribeForm__input"
              placeholder="email@ddress.com"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display:none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display:none"
            ></div>
          </div>

          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_b9911508f3dda45e255c5387f_3b218dacf0"
              tabindex="-1"
              value=""
            />
          </div>

          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="SubscribeForm__button"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scopedß>
.SubscribeForm__form {
  border: 1px dashed var(--medium);
  padding: 20px;
  margin: 20px 0;
}

.SubscribeForm__callout {
  margin-bottom: 20px;
  font-size: 0.9em;
}

.SubscribeForm__row {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-end;
  justify-content: center;
}

.SubscribeForm__column {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
}

.SubscribeForm__label {
  display: block;
  margin-bottom: 10px;
}

.SubscribeForm__input {
}

.SubscribeForm__button {
}
</style>