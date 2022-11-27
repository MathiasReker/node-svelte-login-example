<script>
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import {Route, Router} from "svelte-navigator";
    import SignUp from "./pages/SignUp.svelte";
    import ForgotPassword from "./pages/ForgotPassword.svelte";
    import Nav from "./components/Layout/Nav.svelte";
    import Footer from "./components/Layout/Footer.svelte";

    const cookie = document.cookie; // TODO?

</script>

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Nav/>
    <Router>
        {#if !cookie}
            <Route path="/">
                <Login/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/forgot-password">
                <ForgotPassword/>
            </Route>
        {:else}
            <Route path="/">
                <Home/>
            </Route>
        {/if}
    </Router>
    <Footer/>
</div>

