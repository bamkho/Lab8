const formatVolumeIconPath = require('../assets/scripts/main');

describe('My volume value is', () => {

    test('over 66', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });

    test('66', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('Between 66 and 33', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('33', () => {
        expect(formatVolumeIconPath(50)).toContain('1');
    });

    test('33 and 0', () => {
        expect(formatVolumeIconPath(25)).toContain('1');
    });

    test('0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });

})
