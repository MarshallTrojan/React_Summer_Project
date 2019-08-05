//action creator
export const selectLibrary = (libraryId = null) => {
    return {
        type: 'select_library',
        payload: libraryId,
    };
};
