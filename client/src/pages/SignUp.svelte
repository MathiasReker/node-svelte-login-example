<script>
    import {Link} from "svelte-navigator";
    import SignUpForm from "../components/Form/SignUpForm.svelte";
</script>

<main>
    <h1>Sign up</h1>

    <SignUpForm/>

    <div>
        <Link to="/login">Already registered?</Link>
    </div>
</main>