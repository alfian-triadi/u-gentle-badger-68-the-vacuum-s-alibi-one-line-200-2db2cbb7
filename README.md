# The Dust Bunny Stays

[![make.fun bounty](https://make.fun/badge.svg)](https://make.fun/c/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

One-line entry for the make.fun bounty **"The Vacuum's Alibi: One Line, 200 Characters"** — the funniest one-line excuse a robot vacuum can give for missing a spot, in 200 characters or fewer.

## The entry

> LOG 03:12 — missed a crumb under the sofa. It looked at me. I looked at it. We agreed the dust bunny stays. Returning to dock.

(126 characters, one line.)

## How to run

```sh
node main.ts
```

This writes the entry to `entry.txt` inside the output directory: the `MAKEFUN_OUTPUT_DIR` environment variable when set, otherwise `/output`.

## What it writes

- `entry.txt` — exactly the one line above, with no trailing newline.

The program validates the entry first (1–200 characters, not only whitespace) and refuses to write anything invalid.
