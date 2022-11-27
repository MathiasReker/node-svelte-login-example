<script>
    import {FlatToast, ToastContainer, toasts} from "svelte-toasts";
    import {onMount} from "svelte";

    const showToast = () => {
        toasts.add({
            title: 'Awesome, you are logged in!',
            'description': "",
            duration: 3000,

            theme: 'dark',
            placement: 'bottom-right',
            type: 'success',

            onClick: () => {
            },
            onRemove: () => {
            },
        });
    };

    onMount(() => {
        showToast();
    })
</script>

<main class="px-3">
    <h1>You are logged in</h1>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa dolor earum, eligendi
        magnam molestias nemo placeat praesentium reiciendis repellendus ut veritatis. Consequatur dolore incidunt iure
        perferendis perspiciatis voluptatem voluptatum!</p>
</main>

<ToastContainer let:data={data} placement="bottom-right">
    <FlatToast {data}/>
</ToastContainer>