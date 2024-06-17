import type { Component, ComponentProps, SvelteComponent } from 'svelte';

import Story from './Story.svelte';

export type PossibleComponentType = Component | SvelteComponent;
//.                                             ^ Without this type,
//.                                               we wouldn't be able to provide 'Button' component as generic type paramter.
//.                                               file://./types.test.ts

export interface Meta<
  TComponent extends PossibleComponentType = PossibleComponentType
> {
  component: TComponent;
  args?: Partial<ComponentProps<TComponent>>;
}

export function defineMeta<TMeta extends Meta = Meta>(meta: TMeta) {
  return {
    meta,
    Story: Story as typeof Story<TMeta>,
  };
}

export interface HackyMeta<
  TComponent extends PossibleComponentType = PossibleComponentType
> {
  component: TComponent | PossibleComponentType;
  args?: Partial<ComponentProps<TComponent>>;
}

export function hackyDefineMeta<TMeta extends HackyMeta = HackyMeta>(meta: TMeta) {
  return {
    meta,
    Story: Story as typeof Story<TMeta>,
  };
}