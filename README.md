# Morning Games

A collection of simple 7-minute parent-child movement games for young children. Each game is one continuous activity designed to make it fun to practice attention, balance, coordination, body awareness, impulse control, and calm, deliberate movement.

## Add a game

1. Copy `_templates/activity.md` to `_activities/a-short-name.md`.
2. Replace the front matter and instructions. The filename becomes the page URL.
3. Put optional downloads in `assets/resources/` and reference them from `resources`.
4. Commit and push to `main`. GitHub Pages rebuilds the site automatically.

The home page reads the `_activities` collection, sorts titles alphabetically, creates the letter sections, and adds available-letter jump links. Do not edit the index to register a game.

## Fields

| Field | Required | Purpose |
| --- | --- | --- |
| `title` | Yes | Display name and alphabetical position |
| `summary` | Yes | Brief description shown on the index card |
| `age_range` | No | Suggested ages, without the word “Ages” |
| `energy` | No | For example `Low`, `Medium`, or `High` |
| `focus` | No | List of keys from `_data/skills.yml` |
| `materials` | No | List of anything the adult should gather |
| `resources` | No | Download links; each can have `label`, `url`, `download`, and `description` |

The seven-minute duration is established by the collection itself. Do not repeat it in an activity's front matter or instructions.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/morning-games/`.
