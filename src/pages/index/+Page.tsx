import { IconLogo } from '@/assets/icons/icons';
import { invoke } from '@tauri-apps/api/tauri';
import { createSignal } from 'solid-js';

export default function Page() {
  const [greetMsg, setGreetMsg] = createSignal('');
  const [name, setName] = createSignal('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name: name() }));
  }

  return (
    <div class="flex flex-col items-center gap-y-5">
      <h1>Welcome to Tauri!</h1>

      <div class="flex items-center justify-center gap-x-10">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" class="logo vite h-16" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noreferrer">
          <img src="/tauri.svg" class="logo tauri h-16" alt="Tauri logo" />
        </a>
        <a href="https://solidjs.com" target="_blank" rel="noreferrer" class="logo solid">
          <IconLogo height="4rem" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>

      <form
        class="flex gap-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          class="text rounded-lg border border-transparent bg-neutral-900 px-2 py-2 text-white shadow-md"
        />
        <button
          type="submit"
          class="text rounded-lg border border-transparent bg-neutral-900 px-2 py-2 text-white shadow-md hover:border-blue-500"
        >
          Greet
        </button>
      </form>
      <p>{greetMsg()}</p>
    </div>
  );
}
