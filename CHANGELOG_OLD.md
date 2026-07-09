# Older Changelog

## 0.1.16

- Batched discovered data point persistence to avoid restarts during general interrogation.
- Retried with learned common address on `UNKNOWN_CA`.

## 0.1.15

- Added time point states with IEC-104 CP24/CP56 timestamps or receive time fallback.

## 0.1.14

- Extended IV quality decoding to all supported IEC-104 monitoring types with quality bits.

## 0.1.13

- Exposed IEC-104 IV quality bit as separate IV point states for each data point.

## 0.1.12

- Declared Windows support and made npm package contents explicit.
