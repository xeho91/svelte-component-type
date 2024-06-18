<script>
  import Button from "./Button.svelte";

    import { defineMeta } from "./types";

    const { Story } = defineMeta({
        component: Button,
        // aka "defaults" props for the target component
        args: {
            // typings doesn't work here, no autocompletion, nor defition on hover
            size: "small",
            children: defaultTemplate
        },
    });
</script>

<h1>Storybook addon</h1>

{#snippet defaultTemplate()}
    Click me
{/snippet}

<Story component={Button} args={{ size: "large", children: defaultTemplate }} />

<Story component={Button} args={{ size: "medium", children: defaultTemplate }} />
  
<Story component={Button} args={{ size: "small", children: defaultTemplate }} />
  