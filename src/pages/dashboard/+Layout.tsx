import { createSignal, type FlowProps } from 'solid-js';

export default function DashboardLayout(props: FlowProps) {
  return (
    <div>
      <aside class="flex items-center justify-center gap-x-5 py-2 text-sm">
        <a href="/dashboard">Dashboard</a>
        <span>{' | '}</span>
        <a href="/dashboard/settings">Settings</a>
        <span>{' | '}</span>
        <Counter />
      </aside>
      {props.children}
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button
      type="button"
      onClick={() => setCount((count) => count + 1)}
      class="text rounded-lg border border-transparent bg-neutral-900 px-2 py-2 text-white shadow-md hover:border-blue-500"
    >
      Dashboard Counter {count()}
    </button>
  );
}
