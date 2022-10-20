# css-containment-benchmark

CSS containment benchmark, forked from [the original by Manuel Rego Casasnovas](https://people.igalia.com/mrego/talks/cssconf-eu-2019-css-containment/examples/css-contain-example-grid.html). Compares `contain: none`, `contain: content`, and `contain: strict`.

To manually run the benchmark, use URL params to change the values:

- https://nolanlawson.github.io/css-containment-benchmark/?items=100&contain=none
- https://nolanlawson.github.io/css-containment-benchmark/?items=100&contain=content
- https://nolanlawson.github.io/css-containment-benchmark/?items=100&contain=strict

The total duration is reported in the upper right-hand corner, in the console, and as a performance measure called `total`.

To run the benchmark for all browsers and report the median of 25 iterations:

```bash
npm install
npm start
```

In another tab:

```bash
npm run benchmark
```
