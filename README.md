# test-portofolio-app

This template should help get you started developing with Vue 3 in Vite.

## Setting VS code

<ul>
    <li>
        <p>Untuk Tailwind, supaya ga ada 'unknown at rule' di rule nya tailwind (cth : @apply, @reference, @theme, dll..) , Buat tailwindconfig.json di .vscode</p>
    </li>
    <li>
        <p>masukkan kode berikut ke tailwindconfig.json</p>
    </li>

```json
{
    "version": 1.1,
    "atDirectives": [
      {"name": "@apply"},
      {"name": "@reference"},
      {"name": "@theme"}
    ]
  }
``` 
<li>
        <p>tambahkan code di bawah ke settings.json </p>
</li>

```json
    "css.customData": [".vscode/tailwindconfig.json"] 
```

</ul>

