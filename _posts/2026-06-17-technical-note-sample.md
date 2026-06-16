---
title: "Technical Note Sample"
date: 2026-06-17
categories:
  - notes
tags:
  - jekyll
  - math
  - python
excerpt: "A compact sample post showing code, math, an image, and a footnote."
math: true
toc: true
toc_label: "Contents"
---

This sample post is a small checklist for technical writing on this site. It demonstrates the pieces that are easiest to forget when drafting: front matter, code, equations, figures, and footnotes.

## A Tiny Experiment

Suppose we want to compare a running average against a threshold. The implementation is intentionally small:

```python
def running_mean(values):
    total = 0.0
    for index, value in enumerate(values, start=1):
        total += value
        yield total / index

print(list(running_mean([3, 1, 4, 1, 5])))
```

Inline math uses `\( ... \)`, so we can write \( \mu_t = \frac{1}{t}\sum_{i=1}^{t}x_i \). Display math uses `$$ ... $$`:

$$
\mu_t = \mu_{t-1} + \frac{x_t - \mu_{t-1}}{t}
$$

## Figure

Images can live in `/images` and be referenced directly:

![Example alignment image](/images/image-alignment-580x300.jpg)

## Footnote

Footnotes are useful for side remarks without interrupting the main thread.[^aside]

[^aside]: This is a kramdown footnote. It will be collected at the bottom of the post.
