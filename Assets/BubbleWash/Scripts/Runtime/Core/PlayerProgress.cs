using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Saved player state shared by the menu (Screens 1-2) and the levels: hearts, coins, gems,
    /// rescued socks and stars per level. Starts at the values shown on the approved screens
    /// (5 hearts "Full", 1,280 coins, 36 gems). Stored in PlayerPrefs on the device.
    /// </summary>
    public static class PlayerProgress
    {
        const string Prefix = "bwk.";
        public const int MaxHearts = 5;
        public const int LevelCount = 4;

        public static readonly string[] LevelNames = { "Bubble Wash Kingdom", "Soap Lagoon", "Suds City", "Rainbow Rapids" };

        public static int Hearts { get => PlayerPrefs.GetInt(Prefix + "hearts", MaxHearts); set => PlayerPrefs.SetInt(Prefix + "hearts", Mathf.Clamp(value, 0, MaxHearts)); }
        public static int Coins { get => PlayerPrefs.GetInt(Prefix + "coins", 1280); set => PlayerPrefs.SetInt(Prefix + "coins", Mathf.Max(0, value)); }
        public static int Gems { get => PlayerPrefs.GetInt(Prefix + "gems", 36); set => PlayerPrefs.SetInt(Prefix + "gems", Mathf.Max(0, value)); }
        public static int SocksRescued { get => PlayerPrefs.GetInt(Prefix + "socks", 0); set => PlayerPrefs.SetInt(Prefix + "socks", Mathf.Max(0, value)); }

        /// <summary>When true, the menu opens on Select Level (Screen 2) instead of Home (Screen 1).</summary>
        public static bool OpenLevelSelect;

        public static int Stars(int level) => PlayerPrefs.GetInt(Prefix + "stars." + level, 0);

        public static void RecordStars(int level, int stars)
        {
            if (stars > Stars(level)) PlayerPrefs.SetInt(Prefix + "stars." + level, Mathf.Clamp(stars, 0, 3));
            Save();
        }

        public static bool IsUnlocked(int level) => level <= 1 || Stars(level - 1) > 0;

        public static void Save() => PlayerPrefs.Save();

        /// <summary>Back to the approved starting values (used by tests and the screenshot capture).</summary>
        public static void ResetToApprovedValues()
        {
            Hearts = MaxHearts; Coins = 1280; Gems = 36; SocksRescued = 0;
            for (int i = 1; i <= LevelCount; i++) PlayerPrefs.DeleteKey(Prefix + "stars." + i);
            Save();
        }
    }
}
