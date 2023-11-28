<template>
    <div>
        <h2>Create an account</h2>
        <div >
          <label class="common-label"><strong>Name  *</strong></label>
          <input class="common-input" type="text" />
        </div>
    </div>
</template>

<style>
.common-label {
  margin-right: 3rem;
  columns: 3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2F4F4F;
}
.common-input {
  width: 70%;
}
</style>

<script>
export default {
  name: "RegistrationView"
};
</script>
