function BirthdayScreen() {
  return (
    <div className="birthday-screen lilith-bg">
      <h1 className="birthday-title fade-in">🌑 Happy Birthday, Lauren!</h1>

      <p className="birthday-message fade-in delay-1">
        "Every tear you've shed, I've washed. Every moment you've doubted yourself, I've felt. But now, I ask you, will you rise, or will you remain in chains others placed on you? You don't need permission to want more. You don't need validation to be powerful. You are not here to fit in. You are here to take what's yours. I stand beside you, now stand for yourself." — Lilith
      </p>

      <div className="sign-card fade-in delay-2">
        <h2 className="lilith-title">♉ Taurus: The Earthly Enchantress</h2>
        <p>
          "She moves with the grace of the earth and stands with the strength of stone - a Taurus woman is beauty forged in resilience." 🌿
        </p>
      </div>

      <a
        href="https://open.spotify.com/playlist/1vcPgGc9ukMu4ChzNYMg7a?go=1&sp_cid=437ab4f0d7ada1aab24c8b82fa92dd51&utm_source=embed_player_v&utm_medium=desktop&nd=1&dlsi=76e121227231413f"
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-button fade-in delay-3"
      >
        🎵 Birthday Playlist
      </a>
    </div>
  );
}

export default BirthdayScreen;
