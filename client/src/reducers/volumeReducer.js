const volumeState = {
  volume: 80,
  muted: false,
  unmuteVolume: 0,
};

const volumeReducer = (state = volumeState, action) => {
  const { muted, volume, unmuteVolume } = state;
  switch (action.type) {
    case 'UPDATE_VOLUME':
      return {
        ...state,
        volume: action.payload,
      };
    case 'MUTE_VOLUME':
      return {
        volume: unmuteVolume,
        muted: !muted,
        unmuteVolume: volume,
      };
    case 'UNMUTE_VOLUME':
      return {
        unmuteVolume: volume,
        muted: !muted,
        volume: unmuteVolume,
      };
    default:
      return state;
  }
};

export default volumeReducer;
