<script>
    import supabase from "$lib/db";
    import {session} from '$app/stores'
    import {goto} from "$app/navigation";

    let email, password

    async function signIn() {
        const {user, session: authsession, error} = await supabase.auth.signIn({
            email, password
        })
        if (error) alert(error.message)
        $session = authsession;
        goto('/')
    }
</script>

<div class="auth-page">
    <div class="auth-card ">
        <div class="auth-grid">
            <div class="auth-card-title">Sign In</div>
            <form class="auth-card-title" on:submit|preventDefault={signIn}>
                <div class="input-button">
                    <input bind:value={email}
                           type="email"
                           placeholder="Email..."
                           class="bg-gray-200 text-gray-700 input w-full"
                    />
                </div>
                <div class="input-button my-2">
                    <input bind:value={password}
                           type="password"
                           placeholder="Password..."
                           class="bg-gray-200 text-gray-700 input w-full"
                    />
                </div>
                <div class="input-button">
                    <button class="btn w-full">Sign In</button>
                </div>
            </form>
            <div class="input-button">
                <a class="btn w-full" href="/signup">Not Registered?</a>
            </div>
            <div class="input-button">
                <a class="btn w-full" href="/magic">Magic</a>
            </div>
        </div>
    </div>
</div>

<style>
</style>
