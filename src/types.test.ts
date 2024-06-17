import type { Component, SvelteComponent } from 'svelte';
import { describe, expectTypeOf, it } from 'vitest';

import { defineMeta, hackyDefineMeta, type HackyMeta, type Meta } from './types.js';

import Button from './Button.svelte';
import StoryCmp from './Story.svelte';

describe('Meta', () => {
  it('accepts Svelte component as generic type parameter', () => {
    type CanUseComponentAsGenericTypeParameter = Meta<Button>;
    //.                                               ^ No issue here

    const meta = {
      component: Button, // Mismatch, what can I do?
      args: {
        // No autocompletion working here, neither definition on hover
        size: 'small',
      },
    } satisfies Meta<Button>;

    expectTypeOf(meta.component).toMatchTypeOf(Button);

    type IsComponent = Button extends Component ? true : false;
    //.  ^ false

    expectTypeOf<IsComponent>().toMatchTypeOf<true>();

    type IsComponentV2 = Button extends Component<any, any, any> ? true : false;
    //.  ^ false

    expectTypeOf<IsComponentV2>().toMatchTypeOf<true>();

    type IsSvelteComponent = Button extends SvelteComponent ? true : false;
    //.  ^ true -- Why? This component uses Svelte v5 syntax

    expectTypeOf<IsSvelteComponent>().toMatchTypeOf<false>();
  });
});

describe('defineMeta', () => {
  it('first argument is well typed', () => {
    const { Story, meta } = defineMeta({
      component: Button,
      args: {
        // No autocompletion working here, neither definition on hover
        size: 'small',
      },
    });

    expectTypeOf(meta).toMatchTypeOf<Meta<Button>>();
    expectTypeOf(Story).toMatchTypeOf<StoryCmp<Meta<Button>>>();
  });
});

describe('HackyMeta', () => {
  it('accepts Svelte component as generic type parameter', () => {
    const hackymeta = {
      component: Button, // huh?
      args: {
        // Autocompletion works...
        size: 'small',
      },
    } satisfies HackyMeta<Button>;

    expectTypeOf(hackymeta.component).toMatchTypeOf(Button);
  });
});

describe('hackyDefineMeta', () => {
  it('first argument is well typed', () => {
    const { Story, meta } = hackyDefineMeta({
      component: Button,
      args: {
        // No autocompletion working here, neither definition on hover
        size: 'small',
      },
    });

    expectTypeOf(meta).toMatchTypeOf<HackyMeta<Button>>();
    expectTypeOf(Story).toMatchTypeOf<StoryCmp<HackyMeta<Button>>>();
  });
});
