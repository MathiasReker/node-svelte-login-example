<script>
    import {onMount} from 'svelte';

    let emailAddress = "";
    let emailAddressInput = null;

    let password = "";
    let passwordInput = null;

    let username = "";
    let usernameInput = null;

    onMount(() => {
        emailAddressInput.focus();
    });

    const handleOnSubmit = async () => {
        // Log user into account.
        const response = await fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({emailAddress, password, username}),
        });
        if (response.ok) {
            window.location.replace("/");
        } else {
            alert("error");
        }
    };

    const handleOnChange = (evt) => {
        // Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribute.
        // Error: 'type' attribute cannot be dynamic if input uses two-way binding.
        passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password');
    }
</script>

<form class="form" on:submit|preventDefault={handleOnSubmit}>
    <div class="form__group">
        <label class="form__group__label" for="username">Username</label>
        <input bind:this={usernameInput} bind:value={username} class="form__group__input" id="username" required
               type="text"/>
    </div>
    <div class="form__group">
        <label class="form__group__label" for="emailAddress">E-Mail Address</label>
        <input bind:this={emailAddressInput} bind:value={emailAddress} class="form__group__input" id="emailAddress"
               required type="email"/>
    </div>
    <div class="form__group">
        <label class="form__group__label" for="password">Password</label>
        <input bind:this={passwordInput} bind:value={password} class="form__group__input" id="password" required
               type="password"/>
    </div>
    <div class="form__group form__group--check">
        <input class="form__group__checkbox" id="showPassword" on:change={handleOnChange} type="checkbox"/>
        <label class="form__group__label" for="showPassword">Show Password</label>
    </div>
    <button type="submit">Submit</button>
</form>
