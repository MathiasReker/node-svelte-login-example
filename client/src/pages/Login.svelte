<script>
    import {Link} from "svelte-navigator";
    import LoginForm from "../components/Form/LoginForm.svelte";
</script>

<h1>Login</h1>

<LoginForm/>

<div>
    <Link to="/signup">Sign up instead?</Link>
    <Link to="/forgot-password">Forgot password?</Link>
</div>

