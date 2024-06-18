<script lang="ts" generics=" TComponent extends Component">
import type { Component, ComponentProps, Snippet } from "svelte";

import type { Meta } from "./types.ts";

  type Props = Meta<TComponent> & {
    children?: Snippet;
  };

  let { children, component, args } : Props = $props();
</script>

<svelte:component this={component}  {...args} />