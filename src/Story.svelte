<script lang="ts" generics="TMeta extends Meta">
import type { Component, Snippet } from "svelte";

import type { Meta } from "./types.ts";

  type Props = TMeta & {
    children: Snippet;
  };

  let { children, component, args } : Props = $props();
</script>

<!--                              \/ I'm forced to do this assertion - because `SvelteComponent` isn't accepted as type -->
<svelte:component this={component as Component}  {...args} />