<script>
    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.replace("/");
    };
</script>

<header class="mb-auto">
    <div>
        <h3 class="float-md-start mb-0">Cover</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
            <a aria-current="page" class="nav-link fw-bold py-1 px-0 active" href="/">Home</a>
            <a class="nav-link fw-bold py-1 px-0" on:click={handleLogout}>Logout</a>
        </nav>
    </div>
</header>