# Background music

Place the wedding's background-music audio file in this folder.

The site is currently configured (in `src/config/weddingConfig.ts`,
`music.src`) to look for:

```
/audio/que-suerte-tenerte.mp3
```

So, to use "Qué Suerte Tenerte" by Fonseca, add a file named
`que-suerte-tenerte.mp3` to this folder (`public/audio/`). Due to
copyright, this template does not ship with the actual audio file — you
must supply a legally obtained copy (e.g. exported from a service you
have rights to use, or a royalty-free alternative).

To use a different song entirely, drop the new file here and update the
single `music.src` value in the config file to match its filename —
no other code needs to change.
