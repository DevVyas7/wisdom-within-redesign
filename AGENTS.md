<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep verified brand copy, service definitions, and authentic asset references centralized in `src/lib/site.ts` so all pages stay consistent with the original website.
- Use route files for every requested public page and a shared `SiteShell` in the root layout so navigation and footer remain consistent.
- The contact form composes a message in the visitor’s email app and the booking page links to the original appointment service, because no site backend is connected.
- Keep the editorial redesign's scroll depth in CSS with reduced-motion fallbacks, because it adds visual movement without changing content or navigation behavior.
