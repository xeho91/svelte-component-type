import type {
  Component,
  ComponentProps,
} from "svelte";

import Story from "./Story.svelte";

export interface Meta<TComponent extends Component = Component> {
  component: TComponent;
  args?: Partial<ComponentProps<TComponent>>
}

export function defineMeta<
  TComponent extends Component,
>(meta: Meta<TComponent>) {
  return {
    meta,
    Story: Story as typeof Story<TComponent>,
  };
}