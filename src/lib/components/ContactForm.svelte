<script>
  // Placeholder contact form that can be connected to any future backend.
  export let title = 'Send a brief';
</script>

<form class="form-shell">
  <div class="stack-gap">
    <div>
      <p class="section-eyebrow">Get in touch</p>
      <h2 class="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <p class="mt-2 text-sm leading-6 text-slate-600">
        This starter ships with placeholder inputs so future client forms can be wired into a real backend later.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <label>
        <span class="field-label">Name</span>
        <input class="input-field" type="text" name="name" placeholder="Jane Doe" />
      </label>

      <label>
        <span class="field-label">Email</span>
        <input class="input-field" type="email" name="email" placeholder="jane@example.com" />
      </label>
    </div>

    <label>
      <span class="field-label">Subject</span>
      <input class="input-field" type="text" name="subject" placeholder="Website redesign" />
    </label>

    <label>
      <span class="field-label">Project details</span>
      <textarea class="input-field min-h-40" name="message" placeholder="Tell us about the project, timeline, and goals."></textarea>
    </label>

    <div class="flex flex-wrap items-center gap-4">
      <button type="submit" class="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
        Send inquiry
      </button>
      <p class="text-sm text-slate-500">Replace this with your preferred form handler during production setup.</p>
    </div>
  </div>
</form>
