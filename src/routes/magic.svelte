<script>
  import supabase from "$lib/db";
  import { session } from "$app/stores";

  let email, password;

  async function signIn() {
    const { user, authsession, error } = await supabase.auth.signIn({
      email,
    });
    if (error) alert(error.message);
    $session = authsession;
  }
</script>

<!-- TODO: Reformat this page -->
<div class="auth-page">
  <div class="auth-card ">
    <div class="auth-grid">
      <div class="auth-card-title">Magic Login</div>
      <form class="auth-card-title" on:submit|preventDefault={signIn}>
        <div class="input-button">
          <input
            bind:value={email}
            type="email"
            placeholder="Email..."
            class="bg-gray-200 text-gray-700 input w-full"
          />
        </div>
        <div class="input-button my-2">
          <button class="btn w-full">Get your Magic Link</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
</style>
