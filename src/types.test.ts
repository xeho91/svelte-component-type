import { describe, expectTypeOf, it } from 'vitest';

import { defineMeta, type Meta } from './types.js';

import Button from './Button.svelte';
import StoryCmp from './Story.svelte';

describe('Meta', () => {
  it('accepts Svelte component as generic type parameter', () => {
    const meta = {
      component: Button,
      args: {
        size: 'small',
      },
    } satisfies Meta<typeof Button>;

    expectTypeOf(meta.component).toEqualTypeOf(Button);
    expectTypeOf(meta).toMatchTypeOf<Meta<typeof Button>>();
  });
});

describe('defineMeta', () => {
  it('first argument is well typed', () => {
    const { Story, meta } = defineMeta({
      component: Button,
      args: {
        size: 'small',
      },
    });

    expectTypeOf(meta).toMatchTypeOf<Meta<typeof Button>>();
    expectTypeOf(Story).toMatchTypeOf<typeof StoryCmp<typeof Button>>();
  });
});