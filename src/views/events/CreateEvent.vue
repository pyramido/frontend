<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="titleGroup"
                    label="Titre de l'événement"
                    label-for="title">
        <b-form-input id="title"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Entrez le titre"/>
      </b-form-group>
      <b-form-group id="dateGroup"
                    label="Date de l'événement"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      v-model="form.date"
                      required
                      placeholder="Sélectionnez la date"/>
      </b-form-group>
      <b-form-group id="descriptionGroup"
                    label="Description courte de l'événement"
                    label-for="description">
        <b-form-textarea id="description"
                         type="textarea"
                         v-model="form.description"
                         required
                         :placeholder="`Entrez une courte description. ` +
                           `La description complète de votre événement doit ` +
                         `être disponible via la page Web de l'événement.`"
                         :rows="3"
                         :max-rows="6"
        />
      </b-form-group>
      <b-form-group id="urlGroup"
                    :label="`URL de l'événement (par exemple ` +
                    `l'adresse Facebook ou Eventbrite de l'événement)`"
                    label-for="url">
        <b-form-input id="url"
                      type="text"
                      v-model="form.url"
                      required
                      placeholder="Entrez l'adresse URL de votre événement"/>
      </b-form-group>
      <b-form-group id="imageGroup"
                    label="Image de couverture de l'événement"
                    label-for="image">
        <b-form-file v-model="file"
                     placeholder="Sélectionnez une image..."/>
        <div class="mt-3">Selected file: {{ form.file && form.file.name }}</div>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        date: '',
        description: '',
        url: '',
        file: null,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
