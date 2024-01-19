<script>
    import { page } from '$app/stores';
</script>

<div class="error-container">
    <h1>Error {$page.status}: {$page.error.message}</h1>
    <p>Sorry, something went wrong. The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <a href="/">Go back to the main page</a>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        padding: 32px;
    }

    .error-container h1 {
        font-size: 2em;
        color: #ff0000;
    }

    .error-container p {
        font-size: 1.2em;
    }

    .error-container a {
        margin-top: 1em;
        color: #007bff;
        text-decoration: none;
    }

    .error-container a:hover {
        text-decoration: underline;
    }
</style>
