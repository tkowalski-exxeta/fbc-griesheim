import { Satzung } from "./satzung";
import { Vorstand } from "./vorstand";

export default function SatzungPage() {
  return (
    <main className="container mx-auto">
      <Satzung />
      <Vorstand />
    </main>
  );
}
