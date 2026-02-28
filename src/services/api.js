export const getChannels = async () => {
  return [
    {
      id: 1,
      name: "Demo News",
      category: "News",
      streamUrl:
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
    {
      id: 2,
      name: "Global News",
      category: "News",
      streamUrl:
        "https://test-streams.mux.dev/test_001/stream.m3u8",
    },
    {
      id: 3,
      name: "Sports Live",
      category: "Sports",
      streamUrl:
        "https://test-streams.mux.dev/bbb-360p.m3u8",
    },
    {
      id: 4,
      name: "Movie Channel",
      category: "Entertainment",
      streamUrl:
        "https://moiptvhls-i.akamaihd.net/hls/live/652091/secure/master.m3u8",
    },
    {
      id: 5,
      name: "Kids TV",
      category: "Kids",
      streamUrl:
        "https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",
    }
  ];
};