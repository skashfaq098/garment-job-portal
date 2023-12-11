<template>
  <h1 class="my-4">Create an account</h1>
  <div class="container mx-auto">
    <FormKit type="form" @submit="handleSubmit">
      <FormKit type="text" label="Username" name="username" validation="required|matches:/^[a-zA-Z ]*$/|length:5"
        placeholder="Enter full name" />
      <FormKit type="radio" label="Gender" placeholder="Select a gender" name="gender"
        :options="['Male', 'Female', 'Other']" :errors="errors" />
      <!-- <FormKit type="datepicker" name="pickup" label="Date of Birth" placeholder="DOB" picker-only
        :max-date="new Date()" /> -->
      <FormKit type="text" label="Your Email" name="email" placeholder="email@domain.com" validation="required|email" />
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "RegistrationView"
};
</script>
