<script>
    import "../app.css";
    import supabase from "$lib/db";
    import {session} from '$app/stores'
    import {browser} from "$app/env";

    if (browser) {
        $session = supabase.auth.session()
        supabase.auth.onAuthStateChange((event, authsession) => {
            $session = authsession
        })
    }
</script>

<slot/>
