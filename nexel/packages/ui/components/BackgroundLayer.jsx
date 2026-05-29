// Renders the two fixed atmosphere layers (grid + noise) exactly as the
// live landing page did via body::before / body::after. Values are identical;
// only the delivery mechanism is a component so both apps share it.
export default function BackgroundLayer() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
    </>
  );
}
