<template>
  <h2 class="my-4">Create an account</h2>
  <div class="container mx-auto">
    <FormKit type="form" @submit="handleSubmit">
      <FormKit type="text" label="Username" name="username" validation="required|matches:/^[a-zA-Z ]*$/|length:5"
        placeholder="Enter full name" />
      <FormKit type="radio" label="Gender" placeholder="Select a gender" name="gender"
        :options="['Male', 'Female', 'Other']" :errors="errors" />
      <!-- <FormKit type="datepicker" name="pickup" label="Date of Birth" placeholder="DOB" picker-only
        :max-date="new Date()" /> -->
      <FormKit type="text" label="Your Email" name="email" placeholder="email@domain.com" validation="required|email" />
      <FormKit type="group">
        <FormKit type="password" name="password" value="super-secret" label="Password"
          validation="required"
          validation-visibility="live" />
        <FormKit type="password" name="password_confirm" label="Confirm password" validation="required|confirm"
          validation-visibility="live" validation-label="Password confirmation" />
      </FormKit>
    </FormKit>
  </div>
  <div> Already a member ? <router-link to="/login">Login !</router-link> </div>
</template>

<script>
export default {
  name: "RegistrationView"
};
</script>
