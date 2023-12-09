<template>
  <h2>Create an account</h2>
  <div class="row mt-3 ml-2">
    <FormKit type="form" @submit="handleSubmit" class="col-md-6">
      <FormKit type="text" label="Your Email" name="email" prefix-icon="email" placeholder="email@domain.com"
        validation="required|email" class="px-0 ml-2"/>
    </FormKit>
  </div>
</template>

<style>
/* .common-label {
  margin: 0rem 1rem 0rem;
  columns: 3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2F4F4F;
}
input[type=text], select {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
@media only screen and (max-width: 600px) {
  .common-label {
    margin: 0rem 1rem 0rem;
    columns: 3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2F4F4F;
  }
} */
</style>

<script>
export default {
  name: "RegistrationView"
};
</script>
