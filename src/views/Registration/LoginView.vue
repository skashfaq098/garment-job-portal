<template>
    <h2 class="my-4">Login !</h2>
    <div class="container mx-auto">
        <FormKit type="form" @submit="handleSubmit">
            <FormKit type="text" label="Your Email" name="email" placeholder="email@domain.com"
                validation="required|email" />
            <FormKit type="password" name="password" value="super-secret" label="Password" validation="required"
                validation-visibility="live" />
        </FormKit>
    </div>
</template>

<script>
export default {
    name: "LoginView"
};
</script>